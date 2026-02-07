import { readFileSync } from 'node:fs';

export function kebabToCamel(str) {
  return str.replace(/-([a-z])/g, (_, c) => c.toUpperCase());
}

export function camelToKebab(str) {
  return str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
}

export function parseJsonFlag(val) {
  if (typeof val !== 'string') return val;
  if (val.startsWith('@')) {
    const filePath = val.slice(1);
    const content = readFileSync(filePath, 'utf-8');
    return JSON.parse(content);
  }
  return JSON.parse(val);
}

export function buildInputObject(argv, fieldMap) {
  const input = {};
  for (const [flag, fieldName] of Object.entries(fieldMap)) {
    const camelFlag = kebabToCamel(flag);
    if (argv[camelFlag] !== undefined) {
      input[fieldName] = argv[camelFlag];
    }
  }
  return input;
}
