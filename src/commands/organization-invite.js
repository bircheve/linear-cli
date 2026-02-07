// AUTO-GENERATED — do not edit. Run `npm run generate` to regenerate.
import { request } from '../client.js';
import { handleError } from '../error.js';
import { render } from '../output.js';
import { fetchAllPages } from '../pagination.js';
import { parseJsonFlag, kebabToCamel } from '../flag-utils.js';
import { columns } from '../generated/columns.js';

import { organizationInvite } from '../generated/queries.js';
import { organizationInviteCreate, organizationInviteDelete, organizationInviteUpdate } from '../generated/mutations.js';

export const command = 'organization-invite <command>';
export const describe = 'organization-invite commands';

export function builder(yargs) {

  // query: organizationInvite
  yargs.command('get <id>', 'One specific organization invite.', (yargs) => {
    yargs.positional('id', { type: 'string', describe: 'id' });
    return yargs;
  }, async (argv) => {
    try {
      const variables = {};
      variables.id = argv.id;
      const result = await request(organizationInvite, variables);
      render(result.organizationInvite, { json: argv.json, columnConfig: columns['OrganizationInvite'] });
    } catch (err) {
      handleError(err);
    }
  });

  // mutation: organizationInviteCreate
  yargs.command('create', 'Creates a new organization invite.', (yargs) => {
    yargs.option('email', { type: 'string', demandOption: true, describe: 'The email of the invitee.' });
    yargs.option('id', { type: 'string', describe: 'The identifier in UUID v4 format. If none is provided, the backend will gener...' });
    yargs.option('metadata', { type: 'string', describe: '[INTERNAL] Optional metadata about the invite.' });
    yargs.option('role', { type: 'string', choices: ["admin","app","guest","user"], describe: 'What user role the invite should grant.' });
    yargs.option('team-ids', { type: 'array', describe: 'The teams that the user has been invited to.' });
    yargs.option('input-json', { type: 'string', describe: 'Full input as JSON (or @file.json)' });
    return yargs;
  }, async (argv) => {
    try {
      const variables = {};
      if (argv['input-json']) {
        variables.input = parseJsonFlag(argv['input-json']);
      } else {
        const input = {};
        if (argv['email'] !== undefined) input.email = argv['email'];
        if (argv['id'] !== undefined) input.id = argv['id'];
        if (argv['metadata'] !== undefined) input.metadata = parseJsonFlag(argv['metadata']);
        if (argv['role'] !== undefined) input.role = argv['role'];
        if (argv['team-ids'] !== undefined) input.teamIds = argv['team-ids'];
        variables.input = input;
      }
      const result = await request(organizationInviteCreate, variables);
      render(result.organizationInviteCreate, { json: argv.json });
    } catch (err) {
      handleError(err);
    }
  });

  // mutation: organizationInviteDelete
  yargs.command('delete <id>', 'Deletes an organization invite.', (yargs) => {
    yargs.positional('id', { type: 'string', describe: 'The identifier of the organization invite to delete.' });
    return yargs;
  }, async (argv) => {
    try {
      const variables = {};
      variables.id = argv.id;
      const result = await request(organizationInviteDelete, variables);
      render(result.organizationInviteDelete, { json: argv.json });
    } catch (err) {
      handleError(err);
    }
  });

  // mutation: organizationInviteUpdate
  yargs.command('update <id>', 'Updates an organization invite.', (yargs) => {
    yargs.positional('id', { type: 'string', describe: 'The identifier of the organization invite to update.' });
    yargs.option('team-ids', { type: 'array', demandOption: true, describe: 'The teams that the user has been invited to.' });
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
        if (argv['team-ids'] !== undefined) input.teamIds = argv['team-ids'];
        variables.input = input;
      }
      const result = await request(organizationInviteUpdate, variables);
      render(result.organizationInviteUpdate, { json: argv.json });
    } catch (err) {
      handleError(err);
    }
  });

  return yargs.demandCommand(1, 'Specify a subcommand').strict();
}

export function handler() {}
