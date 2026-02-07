// AUTO-GENERATED — do not edit. Run `npm run generate` to regenerate.
import { request } from '../client.js';
import { handleError } from '../error.js';
import { render } from '../output.js';
import { fetchAllPages } from '../pagination.js';
import { parseJsonFlag, kebabToCamel } from '../flag-utils.js';
import { columns } from '../generated/columns.js';

import { integrationGithubCommitCreate } from '../generated/mutations.js';

export const command = 'integration-github-commit <command>';
export const describe = 'integration-github-commit commands';

export function builder(yargs) {

  // mutation: integrationGithubCommitCreate
  yargs.command('create', 'Generates a webhook for the GitHub commit integration.', (yargs) => {
    return yargs;
  }, async (argv) => {
    try {
      const variables = {};
      const result = await request(integrationGithubCommitCreate, variables);
      render(result.integrationGithubCommitCreate, { json: argv.json });
    } catch (err) {
      handleError(err);
    }
  });

  return yargs.demandCommand(1, 'Specify a subcommand').strict();
}

export function handler() {}
