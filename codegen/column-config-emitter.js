import { writeFileSync, mkdirSync } from 'node:fs';
import { dirname } from 'node:path';

const KNOWN_SCALARS = new Set([
  'String', 'ID', 'Int', 'Float', 'Boolean',
  'DateTime', 'TimelessDate', 'JSON', 'JSONObject', 'UUID',
]);

// Priority fields for display (in order)
const PRIORITY_FIELDS = [
  'id', 'identifier', 'key', 'title', 'name', 'slug', 'email',
  'description', 'state', 'status', 'type', 'priority',
  'assignee', 'creator', 'team', 'project',
  'url', 'createdAt', 'updatedAt',
];

export function emitColumnConfigs(objectTypes, outputPath) {
  const lines = [];
  lines.push('// AUTO-GENERATED — do not edit. Run `npm run generate` to regenerate.');
  lines.push('');
  lines.push('export const columns = {');

  const typeNames = Object.keys(objectTypes).sort();
  let count = 0;

  for (const typeName of typeNames) {
    const type = objectTypes[typeName];
    // Skip Connection/Edge/Payload types
    if (typeName.endsWith('Connection') || typeName.endsWith('Edge') || typeName.endsWith('Payload')) continue;
    if (!type.fields.id && !type.fields.name && !type.fields.title) continue;

    const cols = selectColumns(type, objectTypes);
    if (cols.length === 0) continue;

    lines.push(`  ${typeName}: [`);
    for (const col of cols) {
      lines.push(`    { key: ${JSON.stringify(col.key)}, header: ${JSON.stringify(col.header)} },`);
    }
    lines.push('  ],');
    count++;
  }

  lines.push('};');
  lines.push('');

  mkdirSync(dirname(outputPath), { recursive: true });
  writeFileSync(outputPath, lines.join('\n'));
  return count;
}

function selectColumns(type, objectTypes) {
  const cols = [];
  const used = new Set();

  // Add priority fields first
  for (const key of PRIORITY_FIELDS) {
    if (cols.length >= 8) break;
    if (used.has(key)) continue;

    const field = type.fields[key];
    if (!field) continue;

    if (KNOWN_SCALARS.has(field.typeName)) {
      cols.push({ key, header: formatHeader(key) });
      used.add(key);
    } else if (objectTypes[field.typeName]) {
      // Nested object → use .name or .title or .key
      const nested = objectTypes[field.typeName];
      if (nested.fields.name) {
        cols.push({ key: `${key}.name`, header: formatHeader(key) });
        used.add(key);
      } else if (nested.fields.title) {
        cols.push({ key: `${key}.title`, header: formatHeader(key) });
        used.add(key);
      } else if (nested.fields.key) {
        cols.push({ key: `${key}.key`, header: formatHeader(key) });
        used.add(key);
      }
    }
  }

  // Fill remaining slots with other scalar fields
  if (cols.length < 6) {
    for (const [key, field] of Object.entries(type.fields)) {
      if (cols.length >= 8) break;
      if (used.has(key)) continue;
      if (KNOWN_SCALARS.has(field.typeName)) {
        cols.push({ key, header: formatHeader(key) });
        used.add(key);
      }
    }
  }

  return cols;
}

function formatHeader(key) {
  // camelCase → Title Case
  const kebab = key.replace(/([a-z0-9])([A-Z])/g, '$1 $2');
  return kebab.charAt(0).toUpperCase() + kebab.slice(1);
}
