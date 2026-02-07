// AUTO-GENERATED — do not edit. Run `npm run generate` to regenerate.
import { request } from '../client.js';
import { handleError } from '../error.js';
import { render } from '../output.js';
import { fetchAllPages } from '../pagination.js';
import { parseJsonFlag, kebabToCamel } from '../flag-utils.js';
import { columns } from '../generated/columns.js';

import { notificationCategoryChannelSubscriptionUpdate } from '../generated/mutations.js';

export const command = 'notification-category-channel-subscription <command>';
export const describe = 'notification-category-channel-subscription commands';

export function builder(yargs) {

  // mutation: notificationCategoryChannelSubscriptionUpdate
  yargs.command('update', 'Subscribes to or unsubscribes from a notification category for a given notifi...', (yargs) => {
    yargs.option('category', { type: 'string', demandOption: true, choices: ["appsAndIntegrations","assignments","commentsAndReplies","customers","documentChanges","feed","mentions","postsAndUpdates","reactions","reminders","reviews","statusChanges","subscriptions","system","triage"], describe: 'The notification category to subscribe to or unsubscribe from' });
    yargs.option('channel', { type: 'string', demandOption: true, choices: ["desktop","email","mobile","slack"], describe: 'The notification channel in which to subscribe to or unsubscribe from the cat...' });
    yargs.option('subscribe', { type: 'boolean', demandOption: true, describe: 'True if the user wants to subscribe, false if the user wants to unsubscribe' });
    return yargs;
  }, async (argv) => {
    try {
      const variables = {};
      if (argv['category'] !== undefined) variables.category = argv['category'];
      if (argv['channel'] !== undefined) variables.channel = argv['channel'];
      if (argv['subscribe'] !== undefined) variables.subscribe = argv['subscribe'];
      const result = await request(notificationCategoryChannelSubscriptionUpdate, variables);
      render(result.notificationCategoryChannelSubscriptionUpdate, { json: argv.json });
    } catch (err) {
      handleError(err);
    }
  });

  return yargs.demandCommand(1, 'Specify a subcommand').strict();
}

export function handler() {}
