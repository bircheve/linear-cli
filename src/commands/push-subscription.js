// AUTO-GENERATED — do not edit. Run `npm run generate` to regenerate.
import { request } from '../client.js';
import { handleError } from '../error.js';
import { render } from '../output.js';
import { fetchAllPages } from '../pagination.js';
import { parseJsonFlag, kebabToCamel } from '../flag-utils.js';
import { columns } from '../generated/columns.js';

import { pushSubscriptionTest } from '../generated/queries.js';
import { pushSubscriptionCreate, pushSubscriptionDelete } from '../generated/mutations.js';

export const command = 'push-subscription <command>';
export const describe = 'push-subscription commands';

export function builder(yargs) {

  // query: pushSubscriptionTest
  yargs.command('test', 'Sends a test push message.', (yargs) => {
    yargs.option('send-strategy', { type: 'string', choices: ["desktop","desktopAndPush","desktopThenPush","push"], describe: 'The send strategy to use.' });
    yargs.option('target-mobile', { type: 'boolean', describe: 'Whether to send to mobile devices.' });
    return yargs;
  }, async (argv) => {
    try {
      const variables = {};
      if (argv['send-strategy'] !== undefined) variables.sendStrategy = argv['send-strategy'];
      if (argv['target-mobile'] !== undefined) variables.targetMobile = argv['target-mobile'];
      const result = await request(pushSubscriptionTest, variables);
      render(result.pushSubscriptionTest, { json: argv.json, columnConfig: columns['PushSubscriptionTestPayload'] });
    } catch (err) {
      handleError(err);
    }
  });

  // mutation: pushSubscriptionCreate
  yargs.command('create', 'Creates a push subscription.', (yargs) => {
    yargs.option('data', { type: 'string', demandOption: true, describe: 'The data of the subscription in stringified JSON format.' });
    yargs.option('id', { type: 'string', describe: 'The identifier in UUID v4 format. If none is provided, the backend will gener...' });
    yargs.option('type', { type: 'string', choices: ["apple","appleDevelopment","firebase","web"], describe: 'Whether this is a subscription payload for Google Cloud Messaging or Apple Pu...' });
    yargs.option('input-json', { type: 'string', describe: 'Full input as JSON (or @file.json)' });
    return yargs;
  }, async (argv) => {
    try {
      const variables = {};
      if (argv['input-json']) {
        variables.input = parseJsonFlag(argv['input-json']);
      } else {
        const input = {};
        if (argv['data'] !== undefined) input.data = argv['data'];
        if (argv['id'] !== undefined) input.id = argv['id'];
        if (argv['type'] !== undefined) input.type = argv['type'];
        variables.input = input;
      }
      const result = await request(pushSubscriptionCreate, variables);
      render(result.pushSubscriptionCreate, { json: argv.json });
    } catch (err) {
      handleError(err);
    }
  });

  // mutation: pushSubscriptionDelete
  yargs.command('delete <id>', 'Deletes a push subscription.', (yargs) => {
    yargs.positional('id', { type: 'string', describe: 'The identifier of the push subscription to delete.' });
    return yargs;
  }, async (argv) => {
    try {
      const variables = {};
      variables.id = argv.id;
      const result = await request(pushSubscriptionDelete, variables);
      render(result.pushSubscriptionDelete, { json: argv.json });
    } catch (err) {
      handleError(err);
    }
  });

  return yargs.demandCommand(1, 'Specify a subcommand').strict();
}

export function handler() {}
