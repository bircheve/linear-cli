// AUTO-GENERATED — do not edit. Run `npm run generate` to regenerate.
import { request } from '../client.js';
import { handleError } from '../error.js';
import { render } from '../output.js';
import { fetchAllPages } from '../pagination.js';
import { parseJsonFlag, kebabToCamel } from '../flag-utils.js';

import { customer, customerNeeds, customerStatuses, customerTiers, customers } from '../generated/queries.js';
import { customerCreate, customerDelete, customerMerge, customerUpdate, customerUpsert } from '../generated/mutations.js';

export const command = 'customer <command>';
export const describe = 'customer commands';

export function builder(yargs) {

  // query: customer
  yargs.command('get <id>', 'One specific customer.', (yargs) => {
    yargs.positional('id', { type: 'string', describe: 'id' });
    return yargs;
  }, async (argv) => {
    try {
      const variables = {};
      variables.id = argv.id;
      const result = await request(customer, variables);
      render(result.customer, { json: argv.json });
    } catch (err) {
      handleError(err);
    }
  });

  // query: customerNeeds
  yargs.command('needs', 'All customer needs.', (yargs) => {
    yargs.option('after', { type: 'string', describe: 'A cursor to be used with first for forward pagination' });
    yargs.option('before', { type: 'string', describe: 'A cursor to be used with last for backward pagination.' });
    yargs.option('filter', { type: 'string', describe: 'Filter returned customers needs.' });
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
        data = await fetchAllPages(request, customerNeeds, variables, 'customerNeeds');
      } else {
        const result = await request(customerNeeds, variables);
        data = result.customerNeeds?.nodes || [];
      }
      render(data, { json: argv.json, isList: true });
    } catch (err) {
      handleError(err);
    }
  });

  // query: customerStatuses
  yargs.command('statuses', 'All customer statuses.', (yargs) => {
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
        data = await fetchAllPages(request, customerStatuses, variables, 'customerStatuses');
      } else {
        const result = await request(customerStatuses, variables);
        data = result.customerStatuses?.nodes || [];
      }
      render(data, { json: argv.json, isList: true });
    } catch (err) {
      handleError(err);
    }
  });

  // query: customerTiers
  yargs.command('tiers', 'All customer tiers.', (yargs) => {
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
        data = await fetchAllPages(request, customerTiers, variables, 'customerTiers');
      } else {
        const result = await request(customerTiers, variables);
        data = result.customerTiers?.nodes || [];
      }
      render(data, { json: argv.json, isList: true });
    } catch (err) {
      handleError(err);
    }
  });

  // query: customers
  yargs.command('list', 'All customers.', (yargs) => {
    yargs.option('after', { type: 'string', describe: 'A cursor to be used with first for forward pagination' });
    yargs.option('before', { type: 'string', describe: 'A cursor to be used with last for backward pagination.' });
    yargs.option('filter', { type: 'string', describe: 'Filter returned customers.' });
    yargs.option('first', { type: 'number', describe: 'The number of items to forward paginate (used with after). Defaults to 50.' });
    yargs.option('include-archived', { type: 'boolean', describe: 'Should archived resources be included (default: false)' });
    yargs.option('last', { type: 'number', describe: 'The number of items to backward paginate (used with before). Defaults to 50.' });
    yargs.option('order-by', { type: 'string', choices: ["createdAt","updatedAt"], describe: 'By which field should the pagination order by. Available options are createdA...' });
    yargs.option('sorts', { type: 'array', describe: 'Sort returned customers.' });
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
      if (argv['sorts'] !== undefined) variables.sorts = argv['sorts'];
      if (argv['filter-json']) variables.filter = parseJsonFlag(argv['filter-json']);
      if (argv.first !== undefined) variables.first = argv.first;
      if (argv.after) variables.after = argv.after;
      if (argv.last !== undefined) variables.last = argv.last;
      if (argv.before) variables.before = argv.before;

      let data;
      if (argv.all) {
        data = await fetchAllPages(request, customers, variables, 'customers');
      } else {
        const result = await request(customers, variables);
        data = result.customers?.nodes || [];
      }
      render(data, { json: argv.json, isList: true });
    } catch (err) {
      handleError(err);
    }
  });

  // mutation: customerCreate
  yargs.command('create', 'Creates a new customer.', (yargs) => {
    yargs.option('domains', { type: 'array', describe: 'The domains associated with this customer.' });
    yargs.option('external-ids', { type: 'array', describe: 'The ids of the customers in external systems.' });
    yargs.option('id', { type: 'string', describe: 'The identifier in UUID v4 format. If none is provided, the backend will gener...' });
    yargs.option('logo-url', { type: 'string', describe: 'The URL of the customer\'s logo.' });
    yargs.option('main-source-id', { type: 'string', describe: 'The main source of the customer, for customers with multiple sources. Must be...' });
    yargs.option('name', { type: 'string', demandOption: true, describe: 'The name of the customer.' });
    yargs.option('owner-id', { type: 'string', describe: 'The user who owns the customer.' });
    yargs.option('revenue', { type: 'number', describe: 'The annual revenue generated by the customer.' });
    yargs.option('size', { type: 'number', describe: 'The size of the customer.' });
    yargs.option('slack-channel-id', { type: 'string', describe: 'The ID of the Slack channel used to interact with the customer.' });
    yargs.option('status-id', { type: 'string', describe: 'The status of the customer.' });
    yargs.option('tier-id', { type: 'string', describe: 'The tier of the customer customer.' });
    yargs.option('input-json', { type: 'string', describe: 'Full input as JSON (or @file.json)' });
    return yargs;
  }, async (argv) => {
    try {
      const variables = {};
      if (argv['input-json']) {
        variables.input = parseJsonFlag(argv['input-json']);
      } else {
        const input = {};
        if (argv['domains'] !== undefined) input.domains = argv['domains'];
        if (argv['external-ids'] !== undefined) input.externalIds = argv['external-ids'];
        if (argv['id'] !== undefined) input.id = argv['id'];
        if (argv['logo-url'] !== undefined) input.logoUrl = argv['logo-url'];
        if (argv['main-source-id'] !== undefined) input.mainSourceId = argv['main-source-id'];
        if (argv['name'] !== undefined) input.name = argv['name'];
        if (argv['owner-id'] !== undefined) input.ownerId = argv['owner-id'];
        if (argv['revenue'] !== undefined) input.revenue = argv['revenue'];
        if (argv['size'] !== undefined) input.size = argv['size'];
        if (argv['slack-channel-id'] !== undefined) input.slackChannelId = argv['slack-channel-id'];
        if (argv['status-id'] !== undefined) input.statusId = argv['status-id'];
        if (argv['tier-id'] !== undefined) input.tierId = argv['tier-id'];
        variables.input = input;
      }
      const result = await request(customerCreate, variables);
      render(result.customerCreate, { json: argv.json });
    } catch (err) {
      handleError(err);
    }
  });

  // mutation: customerDelete
  yargs.command('delete <id>', 'Deletes a customer.', (yargs) => {
    yargs.positional('id', { type: 'string', describe: 'The identifier of the customer to delete.' });
    return yargs;
  }, async (argv) => {
    try {
      const variables = {};
      variables.id = argv.id;
      const result = await request(customerDelete, variables);
      render(result.customerDelete, { json: argv.json });
    } catch (err) {
      handleError(err);
    }
  });

  // mutation: customerMerge
  yargs.command('merge', 'Merges two customers.', (yargs) => {
    yargs.option('source-customer-id', { type: 'string', demandOption: true, describe: 'The ID of the customer to merge. The needs of this customer will be transferr...' });
    yargs.option('target-customer-id', { type: 'string', demandOption: true, describe: 'The ID of the target customer to merge into. The needs of this customer will ...' });
    return yargs;
  }, async (argv) => {
    try {
      const variables = {};
      if (argv['source-customer-id'] !== undefined) variables.sourceCustomerId = argv['source-customer-id'];
      if (argv['target-customer-id'] !== undefined) variables.targetCustomerId = argv['target-customer-id'];
      const result = await request(customerMerge, variables);
      render(result.customerMerge, { json: argv.json });
    } catch (err) {
      handleError(err);
    }
  });

  // mutation: customerUpdate
  yargs.command('update <id>', 'Updates a customer', (yargs) => {
    yargs.positional('id', { type: 'string', describe: 'The identifier of the customer to update.' });
    yargs.option('domains', { type: 'array', describe: 'The domains associated with this customer.' });
    yargs.option('external-ids', { type: 'array', describe: 'The ids of the customers in external systems.' });
    yargs.option('logo-url', { type: 'string', describe: 'The URL of the customer\'s logo.' });
    yargs.option('main-source-id', { type: 'string', describe: 'The main source of the customer, for customers with multiple sources. Must be...' });
    yargs.option('name', { type: 'string', describe: 'The name of the customer.' });
    yargs.option('owner-id', { type: 'string', describe: 'The user who owns the customer.' });
    yargs.option('revenue', { type: 'number', describe: 'The annual revenue generated by the customer.' });
    yargs.option('size', { type: 'number', describe: 'The size of the customer.' });
    yargs.option('slack-channel-id', { type: 'string', describe: 'The ID of the Slack channel used to interact with the customer.' });
    yargs.option('status-id', { type: 'string', describe: 'The status of the customer.' });
    yargs.option('tier-id', { type: 'string', describe: 'The tier of the customer customer.' });
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
        if (argv['domains'] !== undefined) input.domains = argv['domains'];
        if (argv['external-ids'] !== undefined) input.externalIds = argv['external-ids'];
        if (argv['logo-url'] !== undefined) input.logoUrl = argv['logo-url'];
        if (argv['main-source-id'] !== undefined) input.mainSourceId = argv['main-source-id'];
        if (argv['name'] !== undefined) input.name = argv['name'];
        if (argv['owner-id'] !== undefined) input.ownerId = argv['owner-id'];
        if (argv['revenue'] !== undefined) input.revenue = argv['revenue'];
        if (argv['size'] !== undefined) input.size = argv['size'];
        if (argv['slack-channel-id'] !== undefined) input.slackChannelId = argv['slack-channel-id'];
        if (argv['status-id'] !== undefined) input.statusId = argv['status-id'];
        if (argv['tier-id'] !== undefined) input.tierId = argv['tier-id'];
        variables.input = input;
      }
      const result = await request(customerUpdate, variables);
      render(result.customerUpdate, { json: argv.json });
    } catch (err) {
      handleError(err);
    }
  });

  // mutation: customerUpsert
  yargs.command('upsert', 'Upserts a customer, creating it if it doesn\'t exists, updating it otherwise. ...', (yargs) => {
    yargs.option('domains', { type: 'array', describe: 'The domains associated with this customer.' });
    yargs.option('external-id', { type: 'string', describe: 'The id of the customers in external systems.' });
    yargs.option('id', { type: 'string', describe: 'The identifier in UUID v4 format.' });
    yargs.option('logo-url', { type: 'string', describe: 'The URL of the customer\'s logo.' });
    yargs.option('name', { type: 'string', describe: 'The name of the customer.' });
    yargs.option('owner-id', { type: 'string', describe: 'The user who owns the customer.' });
    yargs.option('revenue', { type: 'number', describe: 'The annual revenue generated by the customer.' });
    yargs.option('size', { type: 'number', describe: 'The size of the customer.' });
    yargs.option('slack-channel-id', { type: 'string', describe: 'The ID of the Slack channel used to interact with the customer.' });
    yargs.option('status-id', { type: 'string', describe: 'The status of the customer.' });
    yargs.option('tier-id', { type: 'string', describe: 'The tier of the customer.' });
    yargs.option('tier-name', { type: 'string', describe: 'The name tier of the customer. Will be created if doesn\'t exist' });
    yargs.option('input-json', { type: 'string', describe: 'Full input as JSON (or @file.json)' });
    return yargs;
  }, async (argv) => {
    try {
      const variables = {};
      if (argv['input-json']) {
        variables.input = parseJsonFlag(argv['input-json']);
      } else {
        const input = {};
        if (argv['domains'] !== undefined) input.domains = argv['domains'];
        if (argv['external-id'] !== undefined) input.externalId = argv['external-id'];
        if (argv['id'] !== undefined) input.id = argv['id'];
        if (argv['logo-url'] !== undefined) input.logoUrl = argv['logo-url'];
        if (argv['name'] !== undefined) input.name = argv['name'];
        if (argv['owner-id'] !== undefined) input.ownerId = argv['owner-id'];
        if (argv['revenue'] !== undefined) input.revenue = argv['revenue'];
        if (argv['size'] !== undefined) input.size = argv['size'];
        if (argv['slack-channel-id'] !== undefined) input.slackChannelId = argv['slack-channel-id'];
        if (argv['status-id'] !== undefined) input.statusId = argv['status-id'];
        if (argv['tier-id'] !== undefined) input.tierId = argv['tier-id'];
        if (argv['tier-name'] !== undefined) input.tierName = argv['tier-name'];
        variables.input = input;
      }
      const result = await request(customerUpsert, variables);
      render(result.customerUpsert, { json: argv.json });
    } catch (err) {
      handleError(err);
    }
  });

  return yargs.demandCommand(1, 'Specify a subcommand').strict();
}

export function handler() {}
