// AUTO-GENERATED — do not edit. Run `npm run generate` to regenerate.
import { request } from '../client.js';
import { handleError } from '../error.js';
import { render } from '../output.js';
import { fetchAllPages } from '../pagination.js';
import { parseJsonFlag, kebabToCamel } from '../flag-utils.js';
import { columns } from '../generated/columns.js';

import { documentContentHistory } from '../generated/queries.js';

export const command = 'document-content-history <command>';
export const describe = 'document-content-history commands';

export function builder(yargs) {

  // query: documentContentHistory
  yargs.command('get <id>', 'A collection of document content history entries.', (yargs) => {
    yargs.positional('id', { type: 'string', describe: 'id' });
    return yargs;
  }, async (argv) => {
    try {
      const variables = {};
      variables.id = argv.id;
      const result = await request(documentContentHistory, variables);
      render(result.documentContentHistory, { json: argv.json, columnConfig: columns['DocumentContentHistoryPayload'] });
    } catch (err) {
      handleError(err);
    }
  });

  return yargs.demandCommand(1, 'Specify a subcommand').strict();
}

export function handler() {}
