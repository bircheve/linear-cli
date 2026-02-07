import { writeFileSync, mkdirSync, readFileSync, existsSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { gqlTypeToYargsType, camelToKebab, isConnectionType, getNodeTypeFromConnection } from './type-utils.js';

const AUTO_GENERATED_HEADER = '// AUTO-GENERATED';

export function emitCommands(groups, ir, outputDir) {
  mkdirSync(outputDir, { recursive: true });
  let fileCount = 0;

  for (const [groupName, group] of Object.entries(groups)) {
    const fileName = groupName + '.js';
    const filePath = join(outputDir, fileName);

    // Skip hand-written files (not starting with auto-generated comment)
    if (existsSync(filePath)) {
      try {
        const firstLine = readFileSync(filePath, 'utf-8').split('\n')[0];
        if (!firstLine.startsWith(AUTO_GENERATED_HEADER)) {
          continue;
        }
      } catch {
        // If we can't read it, overwrite
      }
    }

    const code = generateGroupFile(group, ir);
    writeFileSync(filePath, code);
    fileCount++;
  }

  return fileCount;
}

function generateGroupFile(group, ir) {
  const lines = [];
  lines.push('// AUTO-GENERATED — do not edit. Run `npm run generate` to regenerate.');
  lines.push("import { request } from '../client.js';");
  lines.push("import { handleError } from '../error.js';");
  lines.push("import { render } from '../output.js';");
  lines.push("import { fetchAllPages } from '../pagination.js';");
  lines.push("import { parseJsonFlag, kebabToCamel } from '../flag-utils.js';");
  lines.push("import { columns } from '../generated/columns.js';");
  lines.push('');

  // Import queries and mutations, aliasing conflicts
  const queryImports = [];
  const mutationImports = [];
  const queryNames = new Set();
  const mutationNames = new Set();
  const aliasMap = new Map(); // cmd.name -> local variable name

  for (const cmd of group.commands) {
    if (cmd.source === 'query') {
      queryNames.add(cmd.name);
    } else {
      mutationNames.add(cmd.name);
    }
  }

  for (const cmd of group.commands) {
    if (cmd.source === 'query') {
      if (mutationNames.has(cmd.name)) {
        const alias = cmd.name + 'Query';
        queryImports.push(`${cmd.name} as ${alias}`);
        aliasMap.set(`query:${cmd.name}`, alias);
      } else {
        queryImports.push(cmd.name);
        aliasMap.set(`query:${cmd.name}`, cmd.name);
      }
    } else {
      if (queryNames.has(cmd.name)) {
        const alias = cmd.name + 'Mutation';
        mutationImports.push(`${cmd.name} as ${alias}`);
        aliasMap.set(`mutation:${cmd.name}`, alias);
      } else {
        mutationImports.push(cmd.name);
        aliasMap.set(`mutation:${cmd.name}`, cmd.name);
      }
    }
  }

  if (queryImports.length > 0) {
    lines.push(`import { ${queryImports.join(', ')} } from '../generated/queries.js';`);
  }
  if (mutationImports.length > 0) {
    lines.push(`import { ${mutationImports.join(', ')} } from '../generated/mutations.js';`);
  }
  lines.push('');

  // yargs command module export
  lines.push(`export const command = '${group.name} <command>';`);
  lines.push(`export const describe = '${escapeStr(group.name)} commands';`);
  lines.push('');
  lines.push('export function builder(yargs) {');

  for (const cmd of group.commands) {
    lines.push('');
    lines.push(`  // ${cmd.source}: ${cmd.name}`);
    const localName = aliasMap.get(`${cmd.source}:${cmd.name}`) || cmd.name;
    const subcommandCode = generateSubcommand(cmd, ir, localName);
    lines.push(indent(subcommandCode, 2));
  }

  lines.push('');
  lines.push("  return yargs.demandCommand(1, 'Specify a subcommand').strict();");
  lines.push('}');
  lines.push('');
  lines.push('export function handler() {}');
  lines.push('');

  return lines.join('\n');
}

function generateSubcommand(cmd, ir, localName) {
  const isQuery = cmd.source === 'query';
  const isList = isQuery && isConnectionType(cmd.typeName);
  const lines = [];

  // Determine positional args (usually 'id')
  const positionals = [];
  const optionArgs = [];

  for (const arg of cmd.args) {
    if (arg.name === 'id' && arg.required && !isList) {
      positionals.push(arg);
    } else {
      optionArgs.push(arg);
    }
  }

  // Build command string
  let cmdStr = cmd.action;
  for (const p of positionals) {
    cmdStr += ` <${p.name}>`;
  }

  const desc = cmd.description ? escapeStr(truncate(cmd.description, 80)) : `${cmd.action} ${cmd.name}`;

  lines.push(`yargs.command('${cmdStr}', '${desc}', (yargs) => {`);

  // Add positional descriptions
  for (const p of positionals) {
    lines.push(`  yargs.positional('${p.name}', { type: 'string', describe: '${escapeStr(p.description || p.name)}' });`);
  }

  // Check if mutation has an input arg that's an input type
  const inputArg = cmd.args.find(a => a.name === 'input' && ir.inputTypes[a.typeName]);
  const inputType = inputArg ? ir.inputTypes[inputArg.typeName] : null;

  if (inputType) {
    // Flatten input type fields to individual flags
    for (const [fieldName, field] of Object.entries(inputType.fields)) {
      if (field.deprecationReason) continue;
      const flagName = camelToKebab(fieldName);
      const yargsType = gqlTypeToYargsType(field.typeName, field.isList, ir.enums);
      let optDef = `{ type: '${yargsType.type}'`;
      if (field.required) optDef += ', demandOption: true';
      if (yargsType.choices) optDef += `, choices: ${JSON.stringify(yargsType.choices)}`;
      if (field.description) optDef += `, describe: '${escapeStr(truncate(field.description, 80))}'`;
      optDef += ' }';
      lines.push(`  yargs.option('${flagName}', ${optDef});`);
    }
  }

  // Add direct args as flags (skip 'id' positionals and 'input')
  for (const arg of optionArgs) {
    if (inputType && arg.name === 'input') continue;
    const flagName = camelToKebab(arg.name);
    const yargsType = gqlTypeToYargsType(arg.typeName, arg.isList, ir.enums);
    let optDef = `{ type: '${yargsType.type}'`;
    if (arg.required) optDef += ', demandOption: true';
    if (yargsType.choices) optDef += `, choices: ${JSON.stringify(yargsType.choices)}`;
    if (arg.description) optDef += `, describe: '${escapeStr(truncate(arg.description, 80))}'`;
    optDef += ' }';
    lines.push(`  yargs.option('${flagName}', ${optDef});`);
  }

  // List commands get pagination flags
  if (isList) {
    lines.push("  yargs.option('first', { type: 'number', default: 50, describe: 'Number of results to fetch' });");
    lines.push("  yargs.option('after', { type: 'string', describe: 'Cursor for forward pagination' });");
    lines.push("  yargs.option('last', { type: 'number', describe: 'Number of results to fetch from the end' });");
    lines.push("  yargs.option('before', { type: 'string', describe: 'Cursor for backward pagination' });");
    lines.push("  yargs.option('all', { type: 'boolean', describe: 'Fetch all pages', default: false });");
  }

  // Add --input-json for mutations with input types
  if (inputType) {
    lines.push("  yargs.option('input-json', { type: 'string', describe: 'Full input as JSON (or @file.json)' });");
  }
  // Add --filter-json for list queries with filter arg
  const filterArg = cmd.args.find(a => a.name === 'filter');
  if (filterArg) {
    lines.push("  yargs.option('filter-json', { type: 'string', describe: 'Filter as JSON (or @file.json)' });");
  }

  lines.push('  return yargs;');

  // Handler
  lines.push('}, async (argv) => {');
  lines.push('  try {');

  if (isList) {
    // List handler
    lines.push('    const variables = {};');
    for (const arg of cmd.args) {
      const camel = arg.name;
      lines.push(`    if (argv['${camelToKebab(camel)}'] !== undefined) variables.${camel} = argv['${camelToKebab(camel)}'];`);
    }
    // filter-json
    if (filterArg) {
      lines.push("    if (argv['filter-json']) variables.filter = parseJsonFlag(argv['filter-json']);");
    }
    lines.push("    if (argv.first !== undefined) variables.first = argv.first;");
    lines.push("    if (argv.after) variables.after = argv.after;");
    lines.push("    if (argv.last !== undefined) variables.last = argv.last;");
    lines.push("    if (argv.before) variables.before = argv.before;");
    lines.push('');
    lines.push('    let data;');
    lines.push("    if (argv.all) {");
    lines.push(`      data = await fetchAllPages(request, ${localName}, variables, '${cmd.name}');`);
    lines.push('    } else {');
    lines.push(`      const result = await request(${localName}, variables);`);
    lines.push(`      data = result.${cmd.name}?.nodes || [];`);
    lines.push('    }');
    const nodeType = getNodeTypeFromConnection(cmd.typeName);
    lines.push(`    render(data, { json: argv.json, isList: true, columnConfig: columns['${nodeType}'] });`);
  } else if (isQuery) {
    // Get/single query handler
    lines.push('    const variables = {};');
    for (const p of positionals) {
      lines.push(`    variables.${p.name} = argv.${p.name};`);
    }
    for (const arg of optionArgs) {
      const camel = arg.name;
      lines.push(`    if (argv['${camelToKebab(camel)}'] !== undefined) variables.${camel} = argv['${camelToKebab(camel)}'];`);
    }
    lines.push(`    const result = await request(${localName}, variables);`);
    lines.push(`    render(result.${cmd.name}, { json: argv.json, columnConfig: columns['${cmd.typeName}'] });`);
  } else {
    // Mutation handler
    lines.push('    const variables = {};');
    for (const p of positionals) {
      lines.push(`    variables.${p.name} = argv.${p.name};`);
    }

    if (inputType) {
      lines.push("    if (argv['input-json']) {");
      lines.push("      variables.input = parseJsonFlag(argv['input-json']);");
      lines.push('    } else {');
      lines.push('      const input = {};');
      for (const [fieldName, field] of Object.entries(inputType.fields)) {
        if (field.deprecationReason) continue;
        const flagName = camelToKebab(fieldName);
        if (field.isList) {
          lines.push(`      if (argv['${flagName}'] !== undefined) input.${fieldName} = argv['${flagName}'];`);
        } else if (field.typeName === 'JSON' || field.typeName === 'JSONObject' || ir.inputTypes[field.typeName]) {
          lines.push(`      if (argv['${flagName}'] !== undefined) input.${fieldName} = parseJsonFlag(argv['${flagName}']);`);
        } else {
          lines.push(`      if (argv['${flagName}'] !== undefined) input.${fieldName} = argv['${flagName}'];`);
        }
      }
      lines.push('      variables.input = input;');
      lines.push('    }');
    }

    // Non-input, non-id args
    for (const arg of optionArgs) {
      if (arg.name === 'input') continue;
      const camel = arg.name;
      const flagName = camelToKebab(camel);
      if (ir.inputTypes[arg.typeName]) {
        lines.push(`    if (argv['${flagName}'] !== undefined) variables.${camel} = parseJsonFlag(argv['${flagName}']);`);
      } else {
        lines.push(`    if (argv['${flagName}'] !== undefined) variables.${camel} = argv['${flagName}'];`);
      }
    }

    lines.push(`    const result = await request(${localName}, variables);`);
    lines.push(`    render(result.${cmd.name}, { json: argv.json });`);
  }

  lines.push('  } catch (err) {');
  lines.push('    handleError(err);');
  lines.push('  }');
  lines.push('});');

  return lines.join('\n');
}

function indent(str, spaces) {
  const pad = ' '.repeat(spaces);
  return str.split('\n').map(line => line ? pad + line : line).join('\n');
}

function escapeStr(s) {
  return s.replace(/\\/g, '\\\\').replace(/'/g, "\\'").replace(/\n/g, ' ');
}

function truncate(s, maxLen) {
  if (!s) return '';
  const clean = s.replace(/\n/g, ' ').trim();
  if (clean.length <= maxLen) return clean;
  return clean.slice(0, maxLen - 3) + '...';
}
