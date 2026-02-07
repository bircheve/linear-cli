// AUTO-GENERATED — do not edit. Run `npm run generate` to regenerate.
import { request } from '../client.js';
import { handleError } from '../error.js';
import { render } from '../output.js';
import { fetchAllPages } from '../pagination.js';
import { parseJsonFlag, kebabToCamel } from '../flag-utils.js';
import { columns } from '../generated/columns.js';

import { apiKeys } from '../generated/queries.js';
import { apiKeyCreate, apiKeyDelete, apiKeyUpdate } from '../generated/mutations.js';

export const command = 'api-key <command>';
export const describe = 'api-key commands';

export function builder(yargs) {

  // query: apiKeys
  yargs.command('list', 'All API keys for the user.', (yargs) => {
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
        data = await fetchAllPages(request, apiKeys, variables, 'apiKeys');
      } else {
        const result = await request(apiKeys, variables);
        data = result.apiKeys?.nodes || [];
      }
      render(data, { json: argv.json, isList: true, columnConfig: columns['ApiKey'] });
    } catch (err) {
      handleError(err);
    }
  });

  // mutation: apiKeyCreate
  yargs.command('create', '[INTERNAL] Creates a new API key.', (yargs) => {
    yargs.option('id', { type: 'string', describe: 'The identifier in UUID v4 format. If none is provided, the backend will gener...' });
    yargs.option('key', { type: 'string', demandOption: true, describe: 'The API key value.' });
    yargs.option('label', { type: 'string', demandOption: true, describe: 'The label for the API key.' });
    yargs.option('scope', { type: 'array', describe: 'Scopes the API key has access to. Default is all scopes.' });
    yargs.option('team-ids', { type: 'array', describe: 'List of team IDs to restrict this API key to. Default is all teams the user h...' });
    yargs.option('input-json', { type: 'string', describe: 'Full input as JSON (or @file.json)' });
    return yargs;
  }, async (argv) => {
    try {
      const variables = {};
      if (argv['input-json']) {
        variables.input = parseJsonFlag(argv['input-json']);
      } else {
        const input = {};
        if (argv['id'] !== undefined) input.id = argv['id'];
        if (argv['key'] !== undefined) input.key = argv['key'];
        if (argv['label'] !== undefined) input.label = argv['label'];
        if (argv['scope'] !== undefined) input.scope = argv['scope'];
        if (argv['team-ids'] !== undefined) input.teamIds = argv['team-ids'];
        variables.input = input;
      }
      const result = await request(apiKeyCreate, variables);
      render(result.apiKeyCreate, { json: argv.json });
    } catch (err) {
      handleError(err);
    }
  });

  // mutation: apiKeyDelete
  yargs.command('delete <id>', '[INTERNAL] Deletes an API key.', (yargs) => {
    yargs.positional('id', { type: 'string', describe: 'The identifier of the API key to delete.' });
    return yargs;
  }, async (argv) => {
    try {
      const variables = {};
      variables.id = argv.id;
      const result = await request(apiKeyDelete, variables);
      render(result.apiKeyDelete, { json: argv.json });
    } catch (err) {
      handleError(err);
    }
  });

  // mutation: apiKeyUpdate
  yargs.command('update <id>', '[INTERNAL] Updates an API key\'s allowed teams.', (yargs) => {
    yargs.positional('id', { type: 'string', describe: 'The identifier of the API key to update.' });
    yargs.option('label', { type: 'string', describe: 'The new label for the API key.' });
    yargs.option('scope', { type: 'array', describe: 'Scopes the API key has access to. Default is all scopes.' });
    yargs.option('team-ids', { type: 'array', describe: 'List of team IDs to restrict this API key to. Default is all teams the user h...' });
    yargs.option('input-json', { type: 'string', describe: 'Full input as JSON (or @file.json)' });
    return yargs;
  }, async (argv) => {
    try {
      const variables = {};
      variables.id = argv.id;
      if (argv['input-json']) {
        variables.input = parseJsonFlag(argv['input-json']);
      } else {
        const input = {};
        if (argv['label'] !== undefined) input.label = argv['label'];
        if (argv['scope'] !== undefined) input.scope = argv['scope'];
        if (argv['team-ids'] !== undefined) input.teamIds = argv['team-ids'];
        variables.input = input;
      }
      const result = await request(apiKeyUpdate, variables);
      render(result.apiKeyUpdate, { json: argv.json });
    } catch (err) {
      handleError(err);
    }
  });

  return yargs.demandCommand(1, 'Specify a subcommand').strict();
}

export function handler() {}
