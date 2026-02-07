// AUTO-GENERATED — do not edit. Run `npm run generate` to regenerate.
import { request } from '../client.js';
import { handleError } from '../error.js';
import { render } from '../output.js';
import { fetchAllPages } from '../pagination.js';
import { parseJsonFlag, kebabToCamel } from '../flag-utils.js';
import { columns } from '../generated/columns.js';

import { availableUsers, user, users, viewer } from '../generated/queries.js';
import { userDemoteAdmin, userDemoteMember, userDiscordConnect, userExternalUserDisconnect, userPromoteAdmin, userPromoteMember, userSuspend, userUnlinkFromIdentityProvider, userUnsuspend, userUpdate } from '../generated/mutations.js';

export const command = 'user <command>';
export const describe = 'user commands';

export function builder(yargs) {

  // query: availableUsers
  yargs.command('available', 'Fetch users belonging to this user account.', (yargs) => {
    return yargs;
  }, async (argv) => {
    try {
      const variables = {};
      const result = await request(availableUsers, variables);
      render(result.availableUsers, { json: argv.json, columnConfig: columns['AuthResolverResponse'] });
    } catch (err) {
      handleError(err);
    }
  });

  // query: user
  yargs.command('get <id>', 'One specific user.', (yargs) => {
    yargs.positional('id', { type: 'string', describe: 'The identifier of the user to retrieve. To retrieve the authenticated user, use `viewer` query.' });
    return yargs;
  }, async (argv) => {
    try {
      const variables = {};
      variables.id = argv.id;
      const result = await request(user, variables);
      render(result.user, { json: argv.json, columnConfig: columns['User'] });
    } catch (err) {
      handleError(err);
    }
  });

  // query: users
  yargs.command('list', 'All users for the organization.', (yargs) => {
    yargs.option('after', { type: 'string', describe: 'A cursor to be used with first for forward pagination' });
    yargs.option('before', { type: 'string', describe: 'A cursor to be used with last for backward pagination.' });
    yargs.option('filter', { type: 'string', describe: 'Filter returned users.' });
    yargs.option('first', { type: 'number', describe: 'The number of items to forward paginate (used with after). Defaults to 50.' });
    yargs.option('include-archived', { type: 'boolean', describe: 'Should archived resources be included (default: false)' });
    yargs.option('include-disabled', { type: 'boolean', describe: 'Should query return disabled/suspended users (default: false).' });
    yargs.option('last', { type: 'number', describe: 'The number of items to backward paginate (used with before). Defaults to 50.' });
    yargs.option('order-by', { type: 'string', choices: ["createdAt","updatedAt"], describe: 'By which field should the pagination order by. Available options are createdA...' });
    yargs.option('sort', { type: 'array', describe: '[INTERNAL] Sort returned users.' });
    yargs.option('first', { type: 'number', default: 50, describe: 'Number of results to fetch' });
    yargs.option('after', { type: 'string', describe: 'Cursor for forward pagination' });
    yargs.option('last', { type: 'number', describe: 'Number of results to fetch from the end' });
    yargs.option('before', { type: 'string', describe: 'Cursor for backward pagination' });
    yargs.option('all', { type: 'boolean', describe: 'Fetch all pages', default: false });
    yargs.option('filter-json', { type: 'string', describe: 'Filter as JSON (or @file.json)' });
    return yargs;
  }, async (argv) => {
    try {
      const variables = {};
      if (argv['after'] !== undefined) variables.after = argv['after'];
      if (argv['before'] !== undefined) variables.before = argv['before'];
      if (argv['filter'] !== undefined) variables.filter = argv['filter'];
      if (argv['first'] !== undefined) variables.first = argv['first'];
      if (argv['include-archived'] !== undefined) variables.includeArchived = argv['include-archived'];
      if (argv['include-disabled'] !== undefined) variables.includeDisabled = argv['include-disabled'];
      if (argv['last'] !== undefined) variables.last = argv['last'];
      if (argv['order-by'] !== undefined) variables.orderBy = argv['order-by'];
      if (argv['sort'] !== undefined) variables.sort = argv['sort'];
      if (argv['filter-json']) variables.filter = parseJsonFlag(argv['filter-json']);
      if (argv.first !== undefined) variables.first = argv.first;
      if (argv.after) variables.after = argv.after;
      if (argv.last !== undefined) variables.last = argv.last;
      if (argv.before) variables.before = argv.before;

      let data;
      if (argv.all) {
        data = await fetchAllPages(request, users, variables, 'users');
      } else {
        const result = await request(users, variables);
        data = result.users?.nodes || [];
      }
      render(data, { json: argv.json, isList: true, columnConfig: columns['User'] });
    } catch (err) {
      handleError(err);
    }
  });

  // query: viewer
  yargs.command('viewer', 'The currently authenticated user.', (yargs) => {
    return yargs;
  }, async (argv) => {
    try {
      const variables = {};
      const result = await request(viewer, variables);
      render(result.viewer, { json: argv.json, columnConfig: columns['User'] });
    } catch (err) {
      handleError(err);
    }
  });

  // mutation: userDemoteAdmin
  yargs.command('demote-admin <id>', 'Makes user a regular user. Can only be called by an admin.', (yargs) => {
    yargs.positional('id', { type: 'string', describe: 'The identifier of the user to make a regular user.' });
    return yargs;
  }, async (argv) => {
    try {
      const variables = {};
      variables.id = argv.id;
      const result = await request(userDemoteAdmin, variables);
      render(result.userDemoteAdmin, { json: argv.json });
    } catch (err) {
      handleError(err);
    }
  });

  // mutation: userDemoteMember
  yargs.command('demote-member <id>', 'Makes user a guest. Can only be called by an admin.', (yargs) => {
    yargs.positional('id', { type: 'string', describe: 'The identifier of the user to make a guest.' });
    return yargs;
  }, async (argv) => {
    try {
      const variables = {};
      variables.id = argv.id;
      const result = await request(userDemoteMember, variables);
      render(result.userDemoteMember, { json: argv.json });
    } catch (err) {
      handleError(err);
    }
  });

  // mutation: userDiscordConnect
  yargs.command('discord-connect', 'Connects the Discord user to this Linear account via OAuth2.', (yargs) => {
    yargs.option('code', { type: 'string', demandOption: true, describe: 'The Discord OAuth code.' });
    yargs.option('redirect-uri', { type: 'string', demandOption: true, describe: 'The Discord OAuth redirect URI.' });
    return yargs;
  }, async (argv) => {
    try {
      const variables = {};
      if (argv['code'] !== undefined) variables.code = argv['code'];
      if (argv['redirect-uri'] !== undefined) variables.redirectUri = argv['redirect-uri'];
      const result = await request(userDiscordConnect, variables);
      render(result.userDiscordConnect, { json: argv.json });
    } catch (err) {
      handleError(err);
    }
  });

  // mutation: userExternalUserDisconnect
  yargs.command('external-user-disconnect', 'Disconnects the external user from this Linear account.', (yargs) => {
    yargs.option('service', { type: 'string', demandOption: true, describe: 'The external service to disconnect.' });
    return yargs;
  }, async (argv) => {
    try {
      const variables = {};
      if (argv['service'] !== undefined) variables.service = argv['service'];
      const result = await request(userExternalUserDisconnect, variables);
      render(result.userExternalUserDisconnect, { json: argv.json });
    } catch (err) {
      handleError(err);
    }
  });

  // mutation: userPromoteAdmin
  yargs.command('promote-admin <id>', 'Makes user an admin. Can only be called by an admin.', (yargs) => {
    yargs.positional('id', { type: 'string', describe: 'The identifier of the user to make an admin.' });
    return yargs;
  }, async (argv) => {
    try {
      const variables = {};
      variables.id = argv.id;
      const result = await request(userPromoteAdmin, variables);
      render(result.userPromoteAdmin, { json: argv.json });
    } catch (err) {
      handleError(err);
    }
  });

  // mutation: userPromoteMember
  yargs.command('promote-member <id>', 'Makes user a regular user. Can only be called by an admin.', (yargs) => {
    yargs.positional('id', { type: 'string', describe: 'The identifier of the user to make a regular user.' });
    return yargs;
  }, async (argv) => {
    try {
      const variables = {};
      variables.id = argv.id;
      const result = await request(userPromoteMember, variables);
      render(result.userPromoteMember, { json: argv.json });
    } catch (err) {
      handleError(err);
    }
  });

  // mutation: userSuspend
  yargs.command('suspend <id>', 'Suspends a user. Can only be called by an admin.', (yargs) => {
    yargs.positional('id', { type: 'string', describe: 'The identifier of the user to suspend.' });
    return yargs;
  }, async (argv) => {
    try {
      const variables = {};
      variables.id = argv.id;
      const result = await request(userSuspend, variables);
      render(result.userSuspend, { json: argv.json });
    } catch (err) {
      handleError(err);
    }
  });

  // mutation: userUnlinkFromIdentityProvider
  yargs.command('unlink-from-identity-provider <id>', 'Unlinks a guest user from their identity provider. Can only be called by an a...', (yargs) => {
    yargs.positional('id', { type: 'string', describe: 'The identifier of the guest user to unlink from their identity provider.' });
    return yargs;
  }, async (argv) => {
    try {
      const variables = {};
      variables.id = argv.id;
      const result = await request(userUnlinkFromIdentityProvider, variables);
      render(result.userUnlinkFromIdentityProvider, { json: argv.json });
    } catch (err) {
      handleError(err);
    }
  });

  // mutation: userUnsuspend
  yargs.command('unsuspend <id>', 'Un-suspends a user. Can only be called by an admin.', (yargs) => {
    yargs.positional('id', { type: 'string', describe: 'The identifier of the user to unsuspend.' });
    return yargs;
  }, async (argv) => {
    try {
      const variables = {};
      variables.id = argv.id;
      const result = await request(userUnsuspend, variables);
      render(result.userUnsuspend, { json: argv.json });
    } catch (err) {
      handleError(err);
    }
  });

  // mutation: userUpdate
  yargs.command('update <id>', 'Updates a user. Only available to organization admins and the user themselves.', (yargs) => {
    yargs.positional('id', { type: 'string', describe: 'The identifier of the user to update. Use `me` to reference currently authenticated user.' });
    yargs.option('avatar-url', { type: 'string', describe: 'The avatar image URL of the user.' });
    yargs.option('description', { type: 'string', describe: 'The user description or a short bio.' });
    yargs.option('display-name', { type: 'string', describe: 'The display name of the user.' });
    yargs.option('name', { type: 'string', describe: 'The name of the user.' });
    yargs.option('status-emoji', { type: 'string', describe: 'The emoji part of the user status.' });
    yargs.option('status-label', { type: 'string', describe: 'The label part of the user status.' });
    yargs.option('status-until-at', { type: 'string', describe: 'When the user status should be cleared.' });
    yargs.option('timezone', { type: 'string', describe: 'The local timezone of the user.' });
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
        if (argv['avatar-url'] !== undefined) input.avatarUrl = argv['avatar-url'];
        if (argv['description'] !== undefined) input.description = argv['description'];
        if (argv['display-name'] !== undefined) input.displayName = argv['display-name'];
        if (argv['name'] !== undefined) input.name = argv['name'];
        if (argv['status-emoji'] !== undefined) input.statusEmoji = argv['status-emoji'];
        if (argv['status-label'] !== undefined) input.statusLabel = argv['status-label'];
        if (argv['status-until-at'] !== undefined) input.statusUntilAt = argv['status-until-at'];
        if (argv['timezone'] !== undefined) input.timezone = argv['timezone'];
        variables.input = input;
      }
      const result = await request(userUpdate, variables);
      render(result.userUpdate, { json: argv.json });
    } catch (err) {
      handleError(err);
    }
  });

  return yargs.demandCommand(1, 'Specify a subcommand').strict();
}

export function handler() {}
