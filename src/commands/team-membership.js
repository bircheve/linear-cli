// AUTO-GENERATED — do not edit. Run `npm run generate` to regenerate.
import { request } from '../client.js';
import { handleError } from '../error.js';
import { render } from '../output.js';
import { fetchAllPages } from '../pagination.js';
import { parseJsonFlag, kebabToCamel } from '../flag-utils.js';

import { teamMembership } from '../generated/queries.js';
import { teamMembershipCreate, teamMembershipDelete, teamMembershipUpdate } from '../generated/mutations.js';

export const command = 'team-membership <command>';
export const describe = 'team-membership commands';

export function builder(yargs) {

  // query: teamMembership
  yargs.command('get <id>', 'One specific team membership.', (yargs) => {
    yargs.positional('id', { type: 'string', describe: 'id' });
    return yargs;
  }, async (argv) => {
    try {
      const variables = {};
      variables.id = argv.id;
      const result = await request(teamMembership, variables);
      render(result.teamMembership, { json: argv.json });
    } catch (err) {
      handleError(err);
    }
  });

  // mutation: teamMembershipCreate
  yargs.command('create', 'Creates a new team membership.', (yargs) => {
    yargs.option('id', { type: 'string', describe: 'The identifier in UUID v4 format. If none is provided, the backend will gener...' });
    yargs.option('owner', { type: 'boolean', describe: 'Internal. Whether the user is the owner of the team.' });
    yargs.option('sort-order', { type: 'number', describe: 'The position of the item in the users list.' });
    yargs.option('team-id', { type: 'string', demandOption: true, describe: 'The identifier of the team associated with the membership.' });
    yargs.option('user-id', { type: 'string', demandOption: true, describe: 'The identifier of the user associated with the membership.' });
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
        if (argv['owner'] !== undefined) input.owner = argv['owner'];
        if (argv['sort-order'] !== undefined) input.sortOrder = argv['sort-order'];
        if (argv['team-id'] !== undefined) input.teamId = argv['team-id'];
        if (argv['user-id'] !== undefined) input.userId = argv['user-id'];
        variables.input = input;
      }
      const result = await request(teamMembershipCreate, variables);
      render(result.teamMembershipCreate, { json: argv.json });
    } catch (err) {
      handleError(err);
    }
  });

  // mutation: teamMembershipDelete
  yargs.command('delete <id>', 'Deletes a team membership.', (yargs) => {
    yargs.positional('id', { type: 'string', describe: 'The identifier of the team membership to delete.' });
    yargs.option('also-leave-parent-teams', { type: 'boolean', describe: 'Whether to leave the parent teams.' });
    return yargs;
  }, async (argv) => {
    try {
      const variables = {};
      variables.id = argv.id;
      if (argv['also-leave-parent-teams'] !== undefined) variables.alsoLeaveParentTeams = argv['also-leave-parent-teams'];
      const result = await request(teamMembershipDelete, variables);
      render(result.teamMembershipDelete, { json: argv.json });
    } catch (err) {
      handleError(err);
    }
  });

  // mutation: teamMembershipUpdate
  yargs.command('update <id>', 'Updates a team membership.', (yargs) => {
    yargs.positional('id', { type: 'string', describe: 'The identifier of the team membership to update.' });
    yargs.option('owner', { type: 'boolean', describe: 'Internal. Whether the user is the owner of the team.' });
    yargs.option('sort-order', { type: 'number', describe: 'The position of the item in the users list.' });
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
        if (argv['owner'] !== undefined) input.owner = argv['owner'];
        if (argv['sort-order'] !== undefined) input.sortOrder = argv['sort-order'];
        variables.input = input;
      }
      const result = await request(teamMembershipUpdate, variables);
      render(result.teamMembershipUpdate, { json: argv.json });
    } catch (err) {
      handleError(err);
    }
  });

  return yargs.demandCommand(1, 'Specify a subcommand').strict();
}

export function handler() {}
