// AUTO-GENERATED — do not edit. Run `npm run generate` to regenerate.
import { request } from '../client.js';
import { handleError } from '../error.js';
import { render } from '../output.js';
import { fetchAllPages } from '../pagination.js';
import { parseJsonFlag, kebabToCamel } from '../flag-utils.js';
import { columns } from '../generated/columns.js';

import { applicationInfo, applicationInfoByIds, applicationWithAuthorization } from '../generated/queries.js';

export const command = 'application <command>';
export const describe = 'application commands';

export function builder(yargs) {

  // query: applicationInfo
  yargs.command('info', 'Get basic information for an application.', (yargs) => {
    yargs.option('client-id', { type: 'string', demandOption: true, describe: 'The client ID of the application.' });
    return yargs;
  }, async (argv) => {
    try {
      const variables = {};
      if (argv['client-id'] !== undefined) variables.clientId = argv['client-id'];
      const result = await request(applicationInfo, variables);
      render(result.applicationInfo, { json: argv.json, columnConfig: columns['Application'] });
    } catch (err) {
      handleError(err);
    }
  });

  // query: applicationInfoByIds
  yargs.command('info-by-ids', '[INTERNAL] Get basic information for a list of applications.', (yargs) => {
    yargs.option('ids', { type: 'array', demandOption: true, describe: 'The IDs of the applications.' });
    return yargs;
  }, async (argv) => {
    try {
      const variables = {};
      if (argv['ids'] !== undefined) variables.ids = argv['ids'];
      const result = await request(applicationInfoByIds, variables);
      render(result.applicationInfoByIds, { json: argv.json, isList: true, columnConfig: columns['Application'] });
    } catch (err) {
      handleError(err);
    }
  });

  // query: applicationWithAuthorization
  yargs.command('with-authorization', 'Get information for an application and whether a user has approved it for the...', (yargs) => {
    yargs.option('actor', { type: 'string', describe: 'Actor mode used for the authorization.' });
    yargs.option('client-id', { type: 'string', demandOption: true, describe: 'The client ID of the application.' });
    yargs.option('redirect-uri', { type: 'string', describe: 'Redirect URI for the application.' });
    yargs.option('scope', { type: 'array', demandOption: true, describe: 'Scopes being requested by the application.' });
    return yargs;
  }, async (argv) => {
    try {
      const variables = {};
      if (argv['actor'] !== undefined) variables.actor = argv['actor'];
      if (argv['client-id'] !== undefined) variables.clientId = argv['client-id'];
      if (argv['redirect-uri'] !== undefined) variables.redirectUri = argv['redirect-uri'];
      if (argv['scope'] !== undefined) variables.scope = argv['scope'];
      const result = await request(applicationWithAuthorization, variables);
      render(result.applicationWithAuthorization, { json: argv.json, columnConfig: columns['UserAuthorizedApplication'] });
    } catch (err) {
      handleError(err);
    }
  });

  return yargs.demandCommand(1, 'Specify a subcommand').strict();
}

export function handler() {}
