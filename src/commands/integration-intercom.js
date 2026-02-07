// AUTO-GENERATED — do not edit. Run `npm run generate` to regenerate.
import { request } from '../client.js';
import { handleError } from '../error.js';
import { render } from '../output.js';
import { fetchAllPages } from '../pagination.js';
import { parseJsonFlag, kebabToCamel } from '../flag-utils.js';

import { integrationIntercom, integrationIntercomDelete } from '../generated/mutations.js';

export const command = 'integration-intercom <command>';
export const describe = 'integration-intercom commands';

export function builder(yargs) {

  // mutation: integrationIntercom
  yargs.command('integrationIntercom', 'Integrates the organization with Intercom.', (yargs) => {
    yargs.option('code', { type: 'string', demandOption: true, describe: 'The Intercom OAuth code.' });
    yargs.option('domain-url', { type: 'string', describe: 'The Intercom domain URL to use for the integration. Defaults to app.intercom....' });
    yargs.option('redirect-uri', { type: 'string', demandOption: true, describe: 'The Intercom OAuth redirect URI.' });
    return yargs;
  }, async (argv) => {
    try {
      const variables = {};
      if (argv['code'] !== undefined) variables.code = argv['code'];
      if (argv['domain-url'] !== undefined) variables.domainUrl = argv['domain-url'];
      if (argv['redirect-uri'] !== undefined) variables.redirectUri = argv['redirect-uri'];
      const result = await request(integrationIntercom, variables);
      render(result.integrationIntercom, { json: argv.json });
    } catch (err) {
      handleError(err);
    }
  });

  // mutation: integrationIntercomDelete
  yargs.command('delete', 'Disconnects the organization from Intercom.', (yargs) => {
    return yargs;
  }, async (argv) => {
    try {
      const variables = {};
      const result = await request(integrationIntercomDelete, variables);
      render(result.integrationIntercomDelete, { json: argv.json });
    } catch (err) {
      handleError(err);
    }
  });

  return yargs.demandCommand(1, 'Specify a subcommand').strict();
}

export function handler() {}
