// AUTO-GENERATED — do not edit. Run `npm run generate` to regenerate.
import { request } from '../client.js';
import { handleError } from '../error.js';
import { render } from '../output.js';
import { fetchAllPages } from '../pagination.js';
import { parseJsonFlag, kebabToCamel } from '../flag-utils.js';

import { notificationSubscription } from '../generated/queries.js';
import { notificationSubscriptionCreate, notificationSubscriptionDelete, notificationSubscriptionUpdate } from '../generated/mutations.js';

export const command = 'notification-subscription <command>';
export const describe = 'notification-subscription commands';

export function builder(yargs) {

  // query: notificationSubscription
  yargs.command('get <id>', 'One specific notification subscription.', (yargs) => {
    yargs.positional('id', { type: 'string', describe: 'id' });
    return yargs;
  }, async (argv) => {
    try {
      const variables = {};
      variables.id = argv.id;
      const result = await request(notificationSubscription, variables);
      render(result.notificationSubscription, { json: argv.json });
    } catch (err) {
      handleError(err);
    }
  });

  // mutation: notificationSubscriptionCreate
  yargs.command('create', 'Creates a new notification subscription for a cycle, custom view, label, proj...', (yargs) => {
    yargs.option('active', { type: 'boolean', describe: 'Whether the subscription is active.' });
    yargs.option('context-view-type', { type: 'string', choices: ["activeCycle","activeIssues","backlog","triage","upcomingCycle"], describe: 'The type of view to which the notification subscription context is associated...' });
    yargs.option('custom-view-id', { type: 'string', describe: 'The identifier of the custom view to subscribe to.' });
    yargs.option('customer-id', { type: 'string', describe: 'The identifier of the customer to subscribe to.' });
    yargs.option('cycle-id', { type: 'string', describe: 'The identifier of the cycle to subscribe to.' });
    yargs.option('id', { type: 'string', describe: 'The identifier in UUID v4 format. If none is provided, the backend will gener...' });
    yargs.option('initiative-id', { type: 'string', describe: 'The identifier of the initiative to subscribe to.' });
    yargs.option('label-id', { type: 'string', describe: 'The identifier of the label to subscribe to.' });
    yargs.option('notification-subscription-types', { type: 'array', describe: 'The types of notifications of the subscription.' });
    yargs.option('project-id', { type: 'string', describe: 'The identifier of the project to subscribe to.' });
    yargs.option('team-id', { type: 'string', describe: 'The identifier of the team to subscribe to.' });
    yargs.option('user-context-view-type', { type: 'string', choices: ["assigned"], describe: 'The type of user view to which the notification subscription context is assoc...' });
    yargs.option('user-id', { type: 'string', describe: 'The identifier of the user to subscribe to.' });
    yargs.option('input-json', { type: 'string', describe: 'Full input as JSON (or @file.json)' });
    return yargs;
  }, async (argv) => {
    try {
      const variables = {};
      if (argv['input-json']) {
        variables.input = parseJsonFlag(argv['input-json']);
      } else {
        const input = {};
        if (argv['active'] !== undefined) input.active = argv['active'];
        if (argv['context-view-type'] !== undefined) input.contextViewType = argv['context-view-type'];
        if (argv['custom-view-id'] !== undefined) input.customViewId = argv['custom-view-id'];
        if (argv['customer-id'] !== undefined) input.customerId = argv['customer-id'];
        if (argv['cycle-id'] !== undefined) input.cycleId = argv['cycle-id'];
        if (argv['id'] !== undefined) input.id = argv['id'];
        if (argv['initiative-id'] !== undefined) input.initiativeId = argv['initiative-id'];
        if (argv['label-id'] !== undefined) input.labelId = argv['label-id'];
        if (argv['notification-subscription-types'] !== undefined) input.notificationSubscriptionTypes = argv['notification-subscription-types'];
        if (argv['project-id'] !== undefined) input.projectId = argv['project-id'];
        if (argv['team-id'] !== undefined) input.teamId = argv['team-id'];
        if (argv['user-context-view-type'] !== undefined) input.userContextViewType = argv['user-context-view-type'];
        if (argv['user-id'] !== undefined) input.userId = argv['user-id'];
        variables.input = input;
      }
      const result = await request(notificationSubscriptionCreate, variables);
      render(result.notificationSubscriptionCreate, { json: argv.json });
    } catch (err) {
      handleError(err);
    }
  });

  // mutation: notificationSubscriptionDelete
  yargs.command('delete <id>', 'Deletes a notification subscription reference.', (yargs) => {
    yargs.positional('id', { type: 'string', describe: 'The identifier of the notification subscription reference to delete.' });
    return yargs;
  }, async (argv) => {
    try {
      const variables = {};
      variables.id = argv.id;
      const result = await request(notificationSubscriptionDelete, variables);
      render(result.notificationSubscriptionDelete, { json: argv.json });
    } catch (err) {
      handleError(err);
    }
  });

  // mutation: notificationSubscriptionUpdate
  yargs.command('update <id>', 'Updates a notification subscription.', (yargs) => {
    yargs.positional('id', { type: 'string', describe: 'The identifier of the notification subscription to update.' });
    yargs.option('active', { type: 'boolean', describe: 'Whether the subscription is active.' });
    yargs.option('notification-subscription-types', { type: 'array', describe: 'The types of notifications of the subscription.' });
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
        if (argv['active'] !== undefined) input.active = argv['active'];
        if (argv['notification-subscription-types'] !== undefined) input.notificationSubscriptionTypes = argv['notification-subscription-types'];
        variables.input = input;
      }
      const result = await request(notificationSubscriptionUpdate, variables);
      render(result.notificationSubscriptionUpdate, { json: argv.json });
    } catch (err) {
      handleError(err);
    }
  });

  return yargs.demandCommand(1, 'Specify a subcommand').strict();
}

export function handler() {}
