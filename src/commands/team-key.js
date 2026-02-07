// AUTO-GENERATED — do not edit. Run `npm run generate` to regenerate.
import { request } from '../client.js';
import { handleError } from '../error.js';
import { render } from '../output.js';
import { fetchAllPages } from '../pagination.js';
import { parseJsonFlag, kebabToCamel } from '../flag-utils.js';
import { columns } from '../generated/columns.js';

import { teamKeyDelete } from '../generated/mutations.js';

export const command = 'team-key <command>';
export const describe = 'team-key commands';

export function builder(yargs) {

  // mutation: teamKeyDelete
  yargs.command('delete <id>', 'Deletes a previously used team key.', (yargs) => {
    yargs.positional('id', { type: 'string', describe: 'The identifier of the team key to delete.' });
    return yargs;
  }, async (argv) => {
    try {
      const variables = {};
      variables.id = argv.id;
      const result = await request(teamKeyDelete, variables);
      render(result.teamKeyDelete, { json: argv.json });
    } catch (err) {
      handleError(err);
    }
  });

  return yargs.demandCommand(1, 'Specify a subcommand').strict();
}

export function handler() {}
