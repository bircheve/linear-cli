// Hand-written — not auto-generated. Manages CLI API key authentication.
import { getApiKey, saveApiKey, clearApiKey, validateKey, getStoredKey, CONFIG_FILE } from '../auth.js';
import { request } from '../client.js';
import { handleError } from '../error.js';
import { render } from '../output.js';
import { createInterface } from 'node:readline';

const viewerQuery = /* GraphQL */ `query { viewer { id name email displayName active admin } }`;

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

export const command = 'auth <command>';
export const describe = 'Manage API key authentication';

export function builder(yargs) {
  yargs.command('login', 'Save your Linear API key', () => {}, async (argv) => {
    try {
      console.error('Get your API key from: https://linear.app/settings/api\n');
      const key = await promptForKey();
      if (!validateKey(key)) {
        console.error('Error: API key must start with "lin_api_".');
        process.exit(2);
      }
      saveApiKey(key);
      console.error('API key saved to ' + CONFIG_FILE);
    } catch (err) {
      handleError(err);
    }
  });

  yargs.command('logout', 'Remove your saved API key', () => {}, async (argv) => {
    try {
      clearApiKey();
      console.error('API key removed.');
    } catch (err) {
      handleError(err);
    }
  });

  yargs.command('whoami', 'Show the currently authenticated user', () => {}, async (argv) => {
    try {
      const envKey = process.env.LINEAR_API_KEY;
      const storedKey = getStoredKey();
      if (!envKey && !storedKey) {
        console.error('Not logged in. Run `linear setup` to configure your API key.');
        process.exit(2);
      }
      await getApiKey();
      const result = await request(viewerQuery);
      render(result.viewer, { json: argv.json });
    } catch (err) {
      handleError(err);
    }
  });

  return yargs.demandCommand(1, 'Specify a subcommand: login, logout, whoami').strict();
}

export function handler() {}
