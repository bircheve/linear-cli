// AUTO-GENERATED — do not edit. Run `npm run generate` to regenerate.
import { request } from '../client.js';
import { handleError } from '../error.js';
import { render } from '../output.js';
import { fetchAllPages } from '../pagination.js';
import { parseJsonFlag, kebabToCamel } from '../flag-utils.js';
import { columns } from '../generated/columns.js';

import { webhook, webhooks } from '../generated/queries.js';
import { webhookCreate, webhookDelete, webhookUpdate } from '../generated/mutations.js';

export const command = 'webhook <command>';
export const describe = 'webhook commands';

export function builder(yargs) {

  // query: webhook
  yargs.command('get <id>', 'A specific webhook.', (yargs) => {
    yargs.positional('id', { type: 'string', describe: 'The identifier of the webhook to retrieve.' });
    return yargs;
  }, async (argv) => {
    try {
      const variables = {};
      variables.id = argv.id;
      const result = await request(webhook, variables);
      render(result.webhook, { json: argv.json, columnConfig: columns['Webhook'] });
    } catch (err) {
      handleError(err);
    }
  });

  // query: webhooks
  yargs.command('list', 'All webhooks.', (yargs) => {
    yargs.option('include-archived', { type: 'boolean', describe: 'Should archived resources be included (default: false)' });
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
      if (argv['include-archived'] !== undefined) variables.includeArchived = argv['include-archived'];
      if (argv['order-by'] !== undefined) variables.orderBy = argv['order-by'];
      if (argv.first !== undefined) variables.first = argv.first;
      if (argv.after) variables.after = argv.after;
      if (argv.last !== undefined) variables.last = argv.last;
      if (argv.before) variables.before = argv.before;

      let data;
      if (argv.all) {
        data = await fetchAllPages(request, webhooks, variables, 'webhooks');
      } else {
        const result = await request(webhooks, variables);
        data = result.webhooks?.nodes || [];
      }
      render(data, { json: argv.json, isList: true, columnConfig: columns['Webhook'] });
    } catch (err) {
      handleError(err);
    }
  });

  // mutation: webhookCreate
  yargs.command('create', 'Creates a new webhook.', (yargs) => {
    yargs.option('all-public-teams', { type: 'boolean', describe: 'Whether this webhook is enabled for all public teams.' });
    yargs.option('enabled', { type: 'boolean', describe: 'Whether this webhook is enabled.' });
    yargs.option('id', { type: 'string', describe: 'The identifier in UUID v4 format. If none is provided, the backend will gener...' });
    yargs.option('label', { type: 'string', describe: 'Label for the webhook.' });
    yargs.option('resource-types', { type: 'array', demandOption: true, describe: 'List of resources the webhook should subscribe to.' });
    yargs.option('secret', { type: 'string', describe: 'A secret token used to sign the webhook payload.' });
    yargs.option('team-id', { type: 'string', describe: 'The identifier or key of the team associated with the Webhook.' });
    yargs.option('url', { type: 'string', demandOption: true, describe: 'The URL that will be called on data changes.' });
    yargs.option('input-json', { type: 'string', describe: 'Full input as JSON (or @file.json)' });
    return yargs;
  }, async (argv) => {
    try {
      const variables = {};
      if (argv['input-json']) {
        variables.input = parseJsonFlag(argv['input-json']);
      } else {
        const input = {};
        if (argv['all-public-teams'] !== undefined) input.allPublicTeams = argv['all-public-teams'];
        if (argv['enabled'] !== undefined) input.enabled = argv['enabled'];
        if (argv['id'] !== undefined) input.id = argv['id'];
        if (argv['label'] !== undefined) input.label = argv['label'];
        if (argv['resource-types'] !== undefined) input.resourceTypes = argv['resource-types'];
        if (argv['secret'] !== undefined) input.secret = argv['secret'];
        if (argv['team-id'] !== undefined) input.teamId = argv['team-id'];
        if (argv['url'] !== undefined) input.url = argv['url'];
        variables.input = input;
      }
      const result = await request(webhookCreate, variables);
      render(result.webhookCreate, { json: argv.json });
    } catch (err) {
      handleError(err);
    }
  });

  // mutation: webhookDelete
  yargs.command('delete <id>', 'Deletes a Webhook.', (yargs) => {
    yargs.positional('id', { type: 'string', describe: 'The identifier of the Webhook to delete.' });
    return yargs;
  }, async (argv) => {
    try {
      const variables = {};
      variables.id = argv.id;
      const result = await request(webhookDelete, variables);
      render(result.webhookDelete, { json: argv.json });
    } catch (err) {
      handleError(err);
    }
  });

  // mutation: webhookUpdate
  yargs.command('update <id>', 'Updates an existing Webhook.', (yargs) => {
    yargs.positional('id', { type: 'string', describe: 'The identifier of the Webhook.' });
    yargs.option('enabled', { type: 'boolean', describe: 'Whether this webhook is enabled.' });
    yargs.option('label', { type: 'string', describe: 'Label for the webhook.' });
    yargs.option('resource-types', { type: 'array', describe: 'List of resources the webhook should subscribe to.' });
    yargs.option('secret', { type: 'string', describe: 'A secret token used to sign the webhook payload.' });
    yargs.option('url', { type: 'string', describe: 'The URL that will be called on data changes.' });
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
        if (argv['enabled'] !== undefined) input.enabled = argv['enabled'];
        if (argv['label'] !== undefined) input.label = argv['label'];
        if (argv['resource-types'] !== undefined) input.resourceTypes = argv['resource-types'];
        if (argv['secret'] !== undefined) input.secret = argv['secret'];
        if (argv['url'] !== undefined) input.url = argv['url'];
        variables.input = input;
      }
      const result = await request(webhookUpdate, variables);
      render(result.webhookUpdate, { json: argv.json });
    } catch (err) {
      handleError(err);
    }
  });

  return yargs.demandCommand(1, 'Specify a subcommand').strict();
}

export function handler() {}
