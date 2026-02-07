import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { parseSchema } from './schema-parser.js';
import { mapResources } from './resource-mapper.js';
import { emitQueries, emitMutations } from './query-emitter.js';
import { emitEnums } from './enum-emitter.js';
import { emitColumnConfigs } from './column-config-emitter.js';
import { emitCommands } from './command-emitter.js';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');
const SCHEMA_PATH = join(ROOT, 'schema', 'linear-schema.graphql');
const SRC = join(ROOT, 'src');
const GENERATED = join(SRC, 'generated');
const COMMANDS = join(SRC, 'commands');

console.log('Parsing schema...');
const ir = parseSchema(SCHEMA_PATH);
console.log(`  ${ir.queries.length} queries, ${ir.mutations.length} mutations`);
console.log(`  ${Object.keys(ir.enums).length} enums, ${Object.keys(ir.inputTypes).length} input types`);
console.log(`  ${Object.keys(ir.objectTypes).length} object types`);

console.log('Mapping resources...');
const groups = mapResources(ir);
const groupNames = Object.keys(groups);
const totalCommands = groupNames.reduce((sum, g) => sum + groups[g].commands.length, 0);
console.log(`  ${groupNames.length} resource groups, ${totalCommands} total commands`);

console.log('Emitting queries...');
const queryCount = emitQueries(ir, groups, join(GENERATED, 'queries.js'));
console.log(`  ${queryCount} queries written`);

console.log('Emitting mutations...');
const mutationCount = emitMutations(ir, groups, join(GENERATED, 'mutations.js'));
console.log(`  ${mutationCount} mutations written`);

console.log('Emitting enums...');
const enumCount = emitEnums(ir.enums, join(GENERATED, 'enums.js'));
console.log(`  ${enumCount} enums written`);

console.log('Emitting column configs...');
const colCount = emitColumnConfigs(ir.objectTypes, join(GENERATED, 'columns.js'));
console.log(`  ${colCount} column configs written`);

console.log('Emitting commands...');
const fileCount = emitCommands(groups, ir, COMMANDS);
console.log(`  ${fileCount} command files written`);

console.log('');
console.log(`Done! Generated ${totalCommands} commands across ${groupNames.length} resource groups.`);
