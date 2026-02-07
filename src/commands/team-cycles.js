// AUTO-GENERATED — do not edit. Run `npm run generate` to regenerate.
import { request } from '../client.js';
import { handleError } from '../error.js';
import { render } from '../output.js';
import { fetchAllPages } from '../pagination.js';
import { parseJsonFlag, kebabToCamel } from '../flag-utils.js';
import { columns } from '../generated/columns.js';

import { teamCyclesDelete } from '../generated/mutations.js';

export const command = 'team-cycles <command>';
export const describe = 'team-cycles commands';

export function builder(yargs) {

  // mutation: teamCyclesDelete
  yargs.command('delete <id>', 'Deletes team\'s cycles data', (yargs) => {
    yargs.positional('id', { type: 'string', describe: 'The identifier of the team, which cycles will be deleted.' });
    return yargs;
  }, async (argv) => {
    try {
      const variables = {};
      variables.id = argv.id;
      const result = await request(teamCyclesDelete, variables);
      render(result.teamCyclesDelete, { json: argv.json });
    } catch (err) {
      handleError(err);
    }
  });

  return yargs.demandCommand(1, 'Specify a subcommand').strict();
}

export function handler() {}
