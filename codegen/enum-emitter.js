import { writeFileSync, mkdirSync } from 'node:fs';
import { dirname } from 'node:path';

export function emitEnums(enums, outputPath) {
  const lines = [];
  lines.push('// AUTO-GENERATED — do not edit. Run `npm run generate` to regenerate.');
  lines.push('');
  lines.push('export const enums = {');

  const names = Object.keys(enums).sort();
  for (const name of names) {
    const values = enums[name];
    lines.push(`  ${name}: ${JSON.stringify(values)},`);
  }

  lines.push('};');
  lines.push('');

  mkdirSync(dirname(outputPath), { recursive: true });
  writeFileSync(outputPath, lines.join('\n'));
  return names.length;
}
