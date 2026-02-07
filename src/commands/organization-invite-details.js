// AUTO-GENERATED — do not edit. Run `npm run generate` to regenerate.
import { request } from '../client.js';
import { handleError } from '../error.js';
import { render } from '../output.js';
import { fetchAllPages } from '../pagination.js';
import { parseJsonFlag, kebabToCamel } from '../flag-utils.js';

import { organizationInviteDetails } from '../generated/queries.js';

export const command = 'organization-invite-details <command>';
export const describe = 'organization-invite-details commands';

export function builder(yargs) {

  // query: organizationInviteDetails
  yargs.command('get <id>', 'One specific organization invite.', (yargs) => {
    yargs.positional('id', { type: 'string', describe: 'id' });
    return yargs;
  }, async (argv) => {
    try {
      const variables = {};
      variables.id = argv.id;
      const result = await request(organizationInviteDetails, variables);
      render(result.organizationInviteDetails, { json: argv.json });
    } catch (err) {
      handleError(err);
    }
  });

  return yargs.demandCommand(1, 'Specify a subcommand').strict();
}

export function handler() {}
