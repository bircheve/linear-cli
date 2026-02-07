// AUTO-GENERATED — do not edit. Run `npm run generate` to regenerate.
import { request } from '../client.js';
import { handleError } from '../error.js';
import { render } from '../output.js';
import { fetchAllPages } from '../pagination.js';
import { parseJsonFlag, kebabToCamel } from '../flag-utils.js';

import { projectStatusProjectCount } from '../generated/queries.js';

export const command = 'project-status-project-count <command>';
export const describe = 'project-status-project-count commands';

export function builder(yargs) {

  // query: projectStatusProjectCount
  yargs.command('get <id>', '[INTERNAL] Count of projects using this project status across the organization.', (yargs) => {
    yargs.positional('id', { type: 'string', describe: 'The identifier of the project status to find the project count for.' });
    return yargs;
  }, async (argv) => {
    try {
      const variables = {};
      variables.id = argv.id;
      const result = await request(projectStatusProjectCount, variables);
      render(result.projectStatusProjectCount, { json: argv.json });
    } catch (err) {
      handleError(err);
    }
  });

  return yargs.demandCommand(1, 'Specify a subcommand').strict();
}

export function handler() {}
