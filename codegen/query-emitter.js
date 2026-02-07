import { writeFileSync, mkdirSync } from 'node:fs';
import { dirname } from 'node:path';
import { isScalarTypeName, isConnectionType, getNodeTypeFromConnection } from './type-utils.js';

const SKIP_FIELDS = new Set([
  'nodes', 'edges', 'pageInfo',
]);

// Scalars we consider "printable" and include
const KNOWN_SCALARS = new Set([
  'String', 'ID', 'Int', 'Float', 'Boolean',
  'DateTime', 'TimelessDate', 'JSON', 'JSONObject', 'UUID',
]);

function isScalar(typeName) {
  return KNOWN_SCALARS.has(typeName);
}

function buildSelectionSet(objectType, objectTypes, depth = 0) {
  if (!objectType || !objectType.fields) return '';
  const lines = [];

  for (const [fieldName, field] of Object.entries(objectType.fields)) {
    if (SKIP_FIELDS.has(fieldName)) continue;

    const typeName = field.typeName;

    // Skip connection fields (nested pagination)
    if (isConnectionType(typeName)) continue;

    if (isScalar(typeName)) {
      lines.push(fieldName);
    } else if (depth === 0 && objectTypes[typeName]) {
      // One-level nested: get id and name/title/key
      const nested = objectTypes[typeName];
      const nestedFields = ['id'];
      if (nested.fields.name) nestedFields.push('name');
      if (nested.fields.title && !nestedFields.includes('title')) nestedFields.push('title');
      if (nested.fields.key && !nestedFields.includes('key')) nestedFields.push('key');
      if (nestedFields.length > 0) {
        lines.push(`${fieldName} { ${nestedFields.join(' ')} }`);
      }
    }
    // Skip deeper nesting and union types without known structure
  }

  return lines.join('\n    ');
}

function buildArgsSignature(args) {
  if (!args || args.length === 0) return '';
  const parts = args.map(a => {
    let type = a.typeName;
    if (a.isList) type = `[${type}!]`;
    if (a.required) type = `${type}!`;
    return `$${a.name}: ${type}`;
  });
  return `(${parts.join(', ')})`;
}

function buildArgsPass(args) {
  if (!args || args.length === 0) return '';
  const parts = args.map(a => `${a.name}: $${a.name}`);
  return `(${parts.join(', ')})`;
}

export function emitQueries(ir, groups, outputPath) {
  const lines = [];
  lines.push('// AUTO-GENERATED — do not edit. Run `npm run generate` to regenerate.');
  lines.push('');

  // Build a lookup for what queries/mutations belong to which operation name
  const allQueries = new Map();

  for (const q of ir.queries) {
    const objectType = resolveReturnType(q.typeName, ir);
    const isConn = isConnectionType(q.typeName);

    let selectionBody;
    if (isConn) {
      const nodeTypeName = getNodeTypeFromConnection(q.typeName);
      const nodeType = ir.objectTypes[nodeTypeName];
      const nodeFields = nodeType ? buildSelectionSet(nodeType, ir.objectTypes, 0) : 'id';
      selectionBody = `{
      nodes {
        ${nodeFields}
      }
      pageInfo {
        hasNextPage
        endCursor
        hasPreviousPage
        startCursor
      }
    }`;
    } else if (objectType) {
      const fields = buildSelectionSet(objectType, ir.objectTypes, 0);
      selectionBody = `{
      ${fields}
    }`;
    } else {
      // Scalar return
      selectionBody = '';
    }

    const argsSignature = buildArgsSignature(q.args);
    const argsPass = buildArgsPass(q.args);

    const queryStr = `query ${q.name}${argsSignature} {
    ${q.name}${argsPass} ${selectionBody}
  }`;

    allQueries.set(q.name, queryStr);
  }

  // Export each query
  for (const [name, queryStr] of allQueries) {
    lines.push(`export const ${name} = /* GraphQL */ \`${queryStr}\`;`);
    lines.push('');
  }

  mkdirSync(dirname(outputPath), { recursive: true });
  writeFileSync(outputPath, lines.join('\n'));
  return allQueries.size;
}

export function emitMutations(ir, groups, outputPath) {
  const lines = [];
  lines.push('// AUTO-GENERATED — do not edit. Run `npm run generate` to regenerate.');
  lines.push('');

  let count = 0;

  for (const m of ir.mutations) {
    const objectType = resolveReturnType(m.typeName, ir);
    let selectionBody;

    if (objectType) {
      // For Payload types, extract the key fields
      const fields = buildPayloadSelection(objectType, ir.objectTypes);
      selectionBody = `{
      ${fields}
    }`;
    } else {
      selectionBody = '';
    }

    const argsSignature = buildArgsSignature(m.args);
    const argsPass = buildArgsPass(m.args);

    const mutationStr = `mutation ${m.name}${argsSignature} {
    ${m.name}${argsPass} ${selectionBody}
  }`;

    lines.push(`export const ${m.name} = /* GraphQL */ \`${mutationStr}\`;`);
    lines.push('');
    count++;
  }

  mkdirSync(dirname(outputPath), { recursive: true });
  writeFileSync(outputPath, lines.join('\n'));
  return count;
}

function buildPayloadSelection(objectType, objectTypes) {
  if (!objectType || !objectType.fields) return 'success';
  const lines = [];

  for (const [fieldName, field] of Object.entries(objectType.fields)) {
    const typeName = field.typeName;

    if (isConnectionType(typeName)) continue;

    if (isScalar(typeName)) {
      lines.push(fieldName);
    } else if (objectTypes[typeName]) {
      // For payload nested objects, get key identifiers
      const nested = objectTypes[typeName];
      const nestedFields = ['id'];
      if (nested.fields.name) nestedFields.push('name');
      if (nested.fields.title) nestedFields.push('title');
      if (nested.fields.identifier) nestedFields.push('identifier');
      lines.push(`${fieldName} { ${nestedFields.join(' ')} }`);
    }
  }

  if (lines.length === 0) return 'success';
  return lines.join('\n      ');
}

function resolveReturnType(typeName, ir) {
  // Strip Connection suffix for looking up the base type
  return ir.objectTypes[typeName] || null;
}
