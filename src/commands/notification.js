// AUTO-GENERATED — do not edit. Run `npm run generate` to regenerate.
import { request } from '../client.js';
import { handleError } from '../error.js';
import { render } from '../output.js';
import { fetchAllPages } from '../pagination.js';
import { parseJsonFlag, kebabToCamel } from '../flag-utils.js';

import { notification, notificationSubscriptions, notifications } from '../generated/queries.js';
import { notificationArchive, notificationArchiveAll, notificationMarkReadAll, notificationMarkUnreadAll, notificationSnoozeAll, notificationUnarchive, notificationUnsnoozeAll, notificationUpdate } from '../generated/mutations.js';

export const command = 'notification <command>';
export const describe = 'notification commands';

export function builder(yargs) {

  // query: notification
  yargs.command('get <id>', 'One specific notification.', (yargs) => {
    yargs.positional('id', { type: 'string', describe: 'id' });
    return yargs;
  }, async (argv) => {
    try {
      const variables = {};
      variables.id = argv.id;
      const result = await request(notification, variables);
      render(result.notification, { json: argv.json });
    } catch (err) {
      handleError(err);
    }
  });

  // query: notificationSubscriptions
  yargs.command('subscriptions', 'The user\'s notification subscriptions.', (yargs) => {
    yargs.option('after', { type: 'string', describe: 'A cursor to be used with first for forward pagination' });
    yargs.option('before', { type: 'string', describe: 'A cursor to be used with last for backward pagination.' });
    yargs.option('first', { type: 'number', describe: 'The number of items to forward paginate (used with after). Defaults to 50.' });
    yargs.option('include-archived', { type: 'boolean', describe: 'Should archived resources be included (default: false)' });
    yargs.option('last', { type: 'number', describe: 'The number of items to backward paginate (used with before). Defaults to 50.' });
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
      if (argv['after'] !== undefined) variables.after = argv['after'];
      if (argv['before'] !== undefined) variables.before = argv['before'];
      if (argv['first'] !== undefined) variables.first = argv['first'];
      if (argv['include-archived'] !== undefined) variables.includeArchived = argv['include-archived'];
      if (argv['last'] !== undefined) variables.last = argv['last'];
      if (argv['order-by'] !== undefined) variables.orderBy = argv['order-by'];
      if (argv.first !== undefined) variables.first = argv.first;
      if (argv.after) variables.after = argv.after;
      if (argv.last !== undefined) variables.last = argv.last;
      if (argv.before) variables.before = argv.before;

      let data;
      if (argv.all) {
        data = await fetchAllPages(request, notificationSubscriptions, variables, 'notificationSubscriptions');
      } else {
        const result = await request(notificationSubscriptions, variables);
        data = result.notificationSubscriptions?.nodes || [];
      }
      render(data, { json: argv.json, isList: true });
    } catch (err) {
      handleError(err);
    }
  });

  // query: notifications
  yargs.command('list', 'All notifications.', (yargs) => {
    yargs.option('after', { type: 'string', describe: 'A cursor to be used with first for forward pagination' });
    yargs.option('before', { type: 'string', describe: 'A cursor to be used with last for backward pagination.' });
    yargs.option('filter', { type: 'string', describe: 'Filters returned notifications.' });
    yargs.option('first', { type: 'number', describe: 'The number of items to forward paginate (used with after). Defaults to 50.' });
    yargs.option('include-archived', { type: 'boolean', describe: 'Should archived resources be included (default: false)' });
    yargs.option('last', { type: 'number', describe: 'The number of items to backward paginate (used with before). Defaults to 50.' });
    yargs.option('order-by', { type: 'string', choices: ["createdAt","updatedAt"], describe: 'By which field should the pagination order by. Available options are createdA...' });
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
      if (argv['last'] !== undefined) variables.last = argv['last'];
      if (argv['order-by'] !== undefined) variables.orderBy = argv['order-by'];
      if (argv['filter-json']) variables.filter = parseJsonFlag(argv['filter-json']);
      if (argv.first !== undefined) variables.first = argv.first;
      if (argv.after) variables.after = argv.after;
      if (argv.last !== undefined) variables.last = argv.last;
      if (argv.before) variables.before = argv.before;

      let data;
      if (argv.all) {
        data = await fetchAllPages(request, notifications, variables, 'notifications');
      } else {
        const result = await request(notifications, variables);
        data = result.notifications?.nodes || [];
      }
      render(data, { json: argv.json, isList: true });
    } catch (err) {
      handleError(err);
    }
  });

  // mutation: notificationArchive
  yargs.command('archive <id>', 'Archives a notification.', (yargs) => {
    yargs.positional('id', { type: 'string', describe: 'The id of the notification to archive.' });
    return yargs;
  }, async (argv) => {
    try {
      const variables = {};
      variables.id = argv.id;
      const result = await request(notificationArchive, variables);
      render(result.notificationArchive, { json: argv.json });
    } catch (err) {
      handleError(err);
    }
  });

  // mutation: notificationArchiveAll
  yargs.command('archive-all', 'Archives a notification and all related notifications.', (yargs) => {
    yargs.option('id', { type: 'string', describe: 'The id of the notification.' });
    yargs.option('initiative-id', { type: 'string', describe: 'The id of the initiative related to the notification.' });
    yargs.option('initiative-update-id', { type: 'string', describe: 'The id of the initiative update related to the notification.' });
    yargs.option('issue-id', { type: 'string', describe: 'The id of the issue related to the notification.' });
    yargs.option('oauth-client-approval-id', { type: 'string', describe: 'The id of the OAuth client approval related to the notification.' });
    yargs.option('project-id', { type: 'string', describe: '[DEPRECATED] The id of the project related to the notification.' });
    yargs.option('project-update-id', { type: 'string', describe: 'The id of the project update related to the notification.' });
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
        if (argv['initiative-id'] !== undefined) input.initiativeId = argv['initiative-id'];
        if (argv['initiative-update-id'] !== undefined) input.initiativeUpdateId = argv['initiative-update-id'];
        if (argv['issue-id'] !== undefined) input.issueId = argv['issue-id'];
        if (argv['oauth-client-approval-id'] !== undefined) input.oauthClientApprovalId = argv['oauth-client-approval-id'];
        if (argv['project-id'] !== undefined) input.projectId = argv['project-id'];
        if (argv['project-update-id'] !== undefined) input.projectUpdateId = argv['project-update-id'];
        variables.input = input;
      }
      const result = await request(notificationArchiveAll, variables);
      render(result.notificationArchiveAll, { json: argv.json });
    } catch (err) {
      handleError(err);
    }
  });

  // mutation: notificationMarkReadAll
  yargs.command('mark-read-all', 'Marks notification and all related notifications as read.', (yargs) => {
    yargs.option('id', { type: 'string', describe: 'The id of the notification.' });
    yargs.option('initiative-id', { type: 'string', describe: 'The id of the initiative related to the notification.' });
    yargs.option('initiative-update-id', { type: 'string', describe: 'The id of the initiative update related to the notification.' });
    yargs.option('issue-id', { type: 'string', describe: 'The id of the issue related to the notification.' });
    yargs.option('oauth-client-approval-id', { type: 'string', describe: 'The id of the OAuth client approval related to the notification.' });
    yargs.option('project-id', { type: 'string', describe: '[DEPRECATED] The id of the project related to the notification.' });
    yargs.option('project-update-id', { type: 'string', describe: 'The id of the project update related to the notification.' });
    yargs.option('read-at', { type: 'string', demandOption: true, describe: 'The time when notification was marked as read.' });
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
        if (argv['initiative-id'] !== undefined) input.initiativeId = argv['initiative-id'];
        if (argv['initiative-update-id'] !== undefined) input.initiativeUpdateId = argv['initiative-update-id'];
        if (argv['issue-id'] !== undefined) input.issueId = argv['issue-id'];
        if (argv['oauth-client-approval-id'] !== undefined) input.oauthClientApprovalId = argv['oauth-client-approval-id'];
        if (argv['project-id'] !== undefined) input.projectId = argv['project-id'];
        if (argv['project-update-id'] !== undefined) input.projectUpdateId = argv['project-update-id'];
        variables.input = input;
      }
      if (argv['read-at'] !== undefined) variables.readAt = argv['read-at'];
      const result = await request(notificationMarkReadAll, variables);
      render(result.notificationMarkReadAll, { json: argv.json });
    } catch (err) {
      handleError(err);
    }
  });

  // mutation: notificationMarkUnreadAll
  yargs.command('mark-unread-all', 'Marks notification and all related notifications as unread.', (yargs) => {
    yargs.option('id', { type: 'string', describe: 'The id of the notification.' });
    yargs.option('initiative-id', { type: 'string', describe: 'The id of the initiative related to the notification.' });
    yargs.option('initiative-update-id', { type: 'string', describe: 'The id of the initiative update related to the notification.' });
    yargs.option('issue-id', { type: 'string', describe: 'The id of the issue related to the notification.' });
    yargs.option('oauth-client-approval-id', { type: 'string', describe: 'The id of the OAuth client approval related to the notification.' });
    yargs.option('project-id', { type: 'string', describe: '[DEPRECATED] The id of the project related to the notification.' });
    yargs.option('project-update-id', { type: 'string', describe: 'The id of the project update related to the notification.' });
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
        if (argv['initiative-id'] !== undefined) input.initiativeId = argv['initiative-id'];
        if (argv['initiative-update-id'] !== undefined) input.initiativeUpdateId = argv['initiative-update-id'];
        if (argv['issue-id'] !== undefined) input.issueId = argv['issue-id'];
        if (argv['oauth-client-approval-id'] !== undefined) input.oauthClientApprovalId = argv['oauth-client-approval-id'];
        if (argv['project-id'] !== undefined) input.projectId = argv['project-id'];
        if (argv['project-update-id'] !== undefined) input.projectUpdateId = argv['project-update-id'];
        variables.input = input;
      }
      const result = await request(notificationMarkUnreadAll, variables);
      render(result.notificationMarkUnreadAll, { json: argv.json });
    } catch (err) {
      handleError(err);
    }
  });

  // mutation: notificationSnoozeAll
  yargs.command('snooze-all', 'Snoozes a notification and all related notifications.', (yargs) => {
    yargs.option('id', { type: 'string', describe: 'The id of the notification.' });
    yargs.option('initiative-id', { type: 'string', describe: 'The id of the initiative related to the notification.' });
    yargs.option('initiative-update-id', { type: 'string', describe: 'The id of the initiative update related to the notification.' });
    yargs.option('issue-id', { type: 'string', describe: 'The id of the issue related to the notification.' });
    yargs.option('oauth-client-approval-id', { type: 'string', describe: 'The id of the OAuth client approval related to the notification.' });
    yargs.option('project-id', { type: 'string', describe: '[DEPRECATED] The id of the project related to the notification.' });
    yargs.option('project-update-id', { type: 'string', describe: 'The id of the project update related to the notification.' });
    yargs.option('snoozed-until-at', { type: 'string', demandOption: true, describe: 'The time until a notification will be snoozed. After that it will appear in t...' });
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
        if (argv['initiative-id'] !== undefined) input.initiativeId = argv['initiative-id'];
        if (argv['initiative-update-id'] !== undefined) input.initiativeUpdateId = argv['initiative-update-id'];
        if (argv['issue-id'] !== undefined) input.issueId = argv['issue-id'];
        if (argv['oauth-client-approval-id'] !== undefined) input.oauthClientApprovalId = argv['oauth-client-approval-id'];
        if (argv['project-id'] !== undefined) input.projectId = argv['project-id'];
        if (argv['project-update-id'] !== undefined) input.projectUpdateId = argv['project-update-id'];
        variables.input = input;
      }
      if (argv['snoozed-until-at'] !== undefined) variables.snoozedUntilAt = argv['snoozed-until-at'];
      const result = await request(notificationSnoozeAll, variables);
      render(result.notificationSnoozeAll, { json: argv.json });
    } catch (err) {
      handleError(err);
    }
  });

  // mutation: notificationUnarchive
  yargs.command('unarchive <id>', 'Unarchives a notification.', (yargs) => {
    yargs.positional('id', { type: 'string', describe: 'The id of the notification to archive.' });
    return yargs;
  }, async (argv) => {
    try {
      const variables = {};
      variables.id = argv.id;
      const result = await request(notificationUnarchive, variables);
      render(result.notificationUnarchive, { json: argv.json });
    } catch (err) {
      handleError(err);
    }
  });

  // mutation: notificationUnsnoozeAll
  yargs.command('unsnooze-all', 'Unsnoozes a notification and all related notifications.', (yargs) => {
    yargs.option('id', { type: 'string', describe: 'The id of the notification.' });
    yargs.option('initiative-id', { type: 'string', describe: 'The id of the initiative related to the notification.' });
    yargs.option('initiative-update-id', { type: 'string', describe: 'The id of the initiative update related to the notification.' });
    yargs.option('issue-id', { type: 'string', describe: 'The id of the issue related to the notification.' });
    yargs.option('oauth-client-approval-id', { type: 'string', describe: 'The id of the OAuth client approval related to the notification.' });
    yargs.option('project-id', { type: 'string', describe: '[DEPRECATED] The id of the project related to the notification.' });
    yargs.option('project-update-id', { type: 'string', describe: 'The id of the project update related to the notification.' });
    yargs.option('unsnoozed-at', { type: 'string', demandOption: true, describe: 'The time when the notification was unsnoozed.' });
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
        if (argv['initiative-id'] !== undefined) input.initiativeId = argv['initiative-id'];
        if (argv['initiative-update-id'] !== undefined) input.initiativeUpdateId = argv['initiative-update-id'];
        if (argv['issue-id'] !== undefined) input.issueId = argv['issue-id'];
        if (argv['oauth-client-approval-id'] !== undefined) input.oauthClientApprovalId = argv['oauth-client-approval-id'];
        if (argv['project-id'] !== undefined) input.projectId = argv['project-id'];
        if (argv['project-update-id'] !== undefined) input.projectUpdateId = argv['project-update-id'];
        variables.input = input;
      }
      if (argv['unsnoozed-at'] !== undefined) variables.unsnoozedAt = argv['unsnoozed-at'];
      const result = await request(notificationUnsnoozeAll, variables);
      render(result.notificationUnsnoozeAll, { json: argv.json });
    } catch (err) {
      handleError(err);
    }
  });

  // mutation: notificationUpdate
  yargs.command('update <id>', 'Updates a notification.', (yargs) => {
    yargs.positional('id', { type: 'string', describe: 'The identifier of the notification to update.' });
    yargs.option('initiative-update-id', { type: 'string', describe: 'The id of the project update related to the notification.' });
    yargs.option('project-update-id', { type: 'string', describe: 'The id of the project update related to the notification.' });
    yargs.option('read-at', { type: 'string', describe: 'The time when notification was marked as read.' });
    yargs.option('snoozed-until-at', { type: 'string', describe: 'The time until a notification will be snoozed. After that it will appear in t...' });
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
        if (argv['initiative-update-id'] !== undefined) input.initiativeUpdateId = argv['initiative-update-id'];
        if (argv['project-update-id'] !== undefined) input.projectUpdateId = argv['project-update-id'];
        if (argv['read-at'] !== undefined) input.readAt = argv['read-at'];
        if (argv['snoozed-until-at'] !== undefined) input.snoozedUntilAt = argv['snoozed-until-at'];
        variables.input = input;
      }
      const result = await request(notificationUpdate, variables);
      render(result.notificationUpdate, { json: argv.json });
    } catch (err) {
      handleError(err);
    }
  });

  return yargs.demandCommand(1, 'Specify a subcommand').strict();
}

export function handler() {}
