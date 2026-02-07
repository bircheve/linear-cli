// AUTO-GENERATED — do not edit. Run `npm run generate` to regenerate.
import { request } from '../client.js';
import { handleError } from '../error.js';
import { render } from '../output.js';
import { fetchAllPages } from '../pagination.js';
import { parseJsonFlag, kebabToCamel } from '../flag-utils.js';
import { columns } from '../generated/columns.js';

import { customViewHasSubscribers } from '../generated/queries.js';

export const command = 'custom-view-has-subscribers <command>';
export const describe = 'custom-view-has-subscribers commands';

export function builder(yargs) {

  // query: customViewHasSubscribers
  yargs.command('get <id>', 'Whether a custom view has other subscribers than the current user in the orga...', (yargs) => {
    yargs.positional('id', { type: 'string', describe: 'The identifier of the custom view.' });
    return yargs;
  }, async (argv) => {
    try {
      const variables = {};
      variables.id = argv.id;
      const result = await request(customViewHasSubscribers, variables);
      render(result.customViewHasSubscribers, { json: argv.json, columnConfig: columns['CustomViewHasSubscribersPayload'] });
    } catch (err) {
      handleError(err);
    }
  });

  return yargs.demandCommand(1, 'Specify a subcommand').strict();
}

export function handler() {}
