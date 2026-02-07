// AUTO-GENERATED — do not edit. Run `npm run generate` to regenerate.
import { request } from '../client.js';
import { handleError } from '../error.js';
import { render } from '../output.js';
import { fetchAllPages } from '../pagination.js';
import { parseJsonFlag, kebabToCamel } from '../flag-utils.js';
import { columns } from '../generated/columns.js';

import { externalUser, externalUsers } from '../generated/queries.js';

export const command = 'external-user <command>';
export const describe = 'external-user commands';

export function builder(yargs) {

  // query: externalUser
  yargs.command('get <id>', 'One specific external user.', (yargs) => {
    yargs.positional('id', { type: 'string', describe: 'The identifier of the external user to retrieve.' });
    return yargs;
  }, async (argv) => {
    try {
      const variables = {};
      variables.id = argv.id;
      const result = await request(externalUser, variables);
      render(result.externalUser, { json: argv.json, columnConfig: columns['ExternalUser'] });
    } catch (err) {
      handleError(err);
    }
  });

  // query: externalUsers
  yargs.command('list', 'All external users for the organization.', (yargs) => {
    yargs.option('include-archived', { type: 'boolean', describe: 'Should archived resources be included (default: false)' });
    yargs.option('order-by', { type: 'string', choices: ["createdAt","updatedAt"], describe: 'By which field should the pagination order by. Available options are createdA...' });
    yargs.option('first', { type: 'number', default: 50, describe: 'Number of results to fetch' });
    yargs.option('after', { type: 'string', describe: 'Cursor for forward pagination' });
    yargs.option('last', { type: 'number', describe: 'Number of results to fetch from the end' });
    yargs.option('before', { type: 'string', describe: 'Cursor for backward pagination' });
    yargs.option('all', { type: 'boolean', describe: 'Fetch all pages', default: false });
    return yargs;
  }, async (argv) => {
    try {
      const variables = {};
      if (argv['include-archived'] !== undefined) variables.includeArchived = argv['include-archived'];
      if (argv['order-by'] !== undefined) variables.orderBy = argv['order-by'];
      if (argv.first !== undefined) variables.first = argv.first;
      if (argv.after) variables.after = argv.after;
      if (argv.last !== undefined) variables.last = argv.last;
      if (argv.before) variables.before = argv.before;

      let data;
      if (argv.all) {
        data = await fetchAllPages(request, externalUsers, variables, 'externalUsers');
      } else {
        const result = await request(externalUsers, variables);
        data = result.externalUsers?.nodes || [];
      }
      render(data, { json: argv.json, isList: true, columnConfig: columns['ExternalUser'] });
    } catch (err) {
      handleError(err);
    }
  });

  return yargs.demandCommand(1, 'Specify a subcommand').strict();
}

export function handler() {}
