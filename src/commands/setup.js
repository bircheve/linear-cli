// Hand-written — not auto-generated. First-time setup for the CLI.
import { createInterface } from 'node:readline';
import { saveApiKey, validateKey, getStoredKey, CONFIG_FILE } from '../auth.js';

function promptForKey() {
  return new Promise((resolve, reject) => {
    const rl = createInterface({ input: process.stdin, output: process.stderr });
    rl.question('Paste your Linear API key (from https://linear.app/settings/api): ', (answer) => {
      rl.close();
      resolve(answer.trim());
    });
    rl.on('error', reject);
  });
}

export const command = 'setup';
export const describe = 'Configure your Linear API key';

export function builder(yargs) {
  return yargs;
}

export async function handler(argv) {
  const existing = getStoredKey();
  if (existing) {
    console.error('You already have an API key saved. This will overwrite it.\n');
  }

  console.error('Get your API key from: https://linear.app/settings/api\n');
  const key = await promptForKey();

  if (!validateKey(key)) {
    console.error('\nError: API key must start with "lin_api_".');
    process.exit(2);
  }

  saveApiKey(key);
  console.error('\nAPI key saved to ' + CONFIG_FILE);
  console.error('You\'re all set! Try `linear issue list` to get started.');
}
