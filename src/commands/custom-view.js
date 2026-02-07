// AUTO-GENERATED — do not edit. Run `npm run generate` to regenerate.
import { request } from '../client.js';
import { handleError } from '../error.js';
import { render } from '../output.js';
import { fetchAllPages } from '../pagination.js';
import { parseJsonFlag, kebabToCamel } from '../flag-utils.js';
import { columns } from '../generated/columns.js';

import { customView, customViewDetailsSuggestion, customViews } from '../generated/queries.js';
import { customViewCreate, customViewDelete, customViewUpdate } from '../generated/mutations.js';

export const command = 'custom-view <command>';
export const describe = 'custom-view commands';

export function builder(yargs) {

  // query: customView
  yargs.command('get <id>', 'One specific custom view.', (yargs) => {
    yargs.positional('id', { type: 'string', describe: 'id' });
    return yargs;
  }, async (argv) => {
    try {
      const variables = {};
      variables.id = argv.id;
      const result = await request(customView, variables);
      render(result.customView, { json: argv.json, columnConfig: columns['CustomView'] });
    } catch (err) {
      handleError(err);
    }
  });

  // query: customViewDetailsSuggestion
  yargs.command('details-suggestion', '[INTERNAL] Suggests metadata for a view based on it\'s filters.', (yargs) => {
    yargs.option('filter', { type: 'string', demandOption: true });
    yargs.option('model-name', { type: 'string' });
    yargs.option('filter-json', { type: 'string', describe: 'Filter as JSON (or @file.json)' });
    return yargs;
  }, async (argv) => {
    try {
      const variables = {};
      if (argv['filter'] !== undefined) variables.filter = argv['filter'];
      if (argv['model-name'] !== undefined) variables.modelName = argv['model-name'];
      const result = await request(customViewDetailsSuggestion, variables);
      render(result.customViewDetailsSuggestion, { json: argv.json, columnConfig: columns['CustomViewSuggestionPayload'] });
    } catch (err) {
      handleError(err);
    }
  });

  // query: customViews
  yargs.command('list', 'Custom views for the user.', (yargs) => {
    yargs.option('after', { type: 'string', describe: 'A cursor to be used with first for forward pagination' });
    yargs.option('before', { type: 'string', describe: 'A cursor to be used with last for backward pagination.' });
    yargs.option('filter', { type: 'string', describe: 'Filter returned custom views.' });
    yargs.option('first', { type: 'number', describe: 'The number of items to forward paginate (used with after). Defaults to 50.' });
    yargs.option('include-archived', { type: 'boolean', describe: 'Should archived resources be included (default: false)' });
    yargs.option('last', { type: 'number', describe: 'The number of items to backward paginate (used with before). Defaults to 50.' });
    yargs.option('order-by', { type: 'string', choices: ["createdAt","updatedAt"], describe: 'By which field should the pagination order by. Available options are createdA...' });
    yargs.option('sort', { type: 'array', describe: '[INTERNAL] Sort returned custom views.' });
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
      if (argv['sort'] !== undefined) variables.sort = argv['sort'];
      if (argv['filter-json']) variables.filter = parseJsonFlag(argv['filter-json']);
      if (argv.first !== undefined) variables.first = argv.first;
      if (argv.after) variables.after = argv.after;
      if (argv.last !== undefined) variables.last = argv.last;
      if (argv.before) variables.before = argv.before;

      let data;
      if (argv.all) {
        data = await fetchAllPages(request, customViews, variables, 'customViews');
      } else {
        const result = await request(customViews, variables);
        data = result.customViews?.nodes || [];
      }
      render(data, { json: argv.json, isList: true, columnConfig: columns['CustomView'] });
    } catch (err) {
      handleError(err);
    }
  });

  // mutation: customViewCreate
  yargs.command('create', 'Creates a new custom view.', (yargs) => {
    yargs.option('color', { type: 'string', describe: 'The color of the icon of the custom view.' });
    yargs.option('description', { type: 'string', describe: 'The description of the custom view.' });
    yargs.option('feed-item-filter-data', { type: 'string', describe: 'The feed item filter applied to issues in the custom view.' });
    yargs.option('filter-data', { type: 'string', describe: 'The filter applied to issues in the custom view.' });
    yargs.option('icon', { type: 'string', describe: 'The icon of the custom view.' });
    yargs.option('id', { type: 'string', describe: 'The identifier in UUID v4 format. If none is provided, the backend will gener...' });
    yargs.option('initiative-filter-data', { type: 'string', describe: '[ALPHA] The initiative filter applied to issues in the custom view.' });
    yargs.option('initiative-id', { type: 'string', describe: 'The id of the initiative associated with the custom view.' });
    yargs.option('name', { type: 'string', demandOption: true, describe: 'The name of the custom view.' });
    yargs.option('owner-id', { type: 'string', describe: 'The owner of the custom view.' });
    yargs.option('project-filter-data', { type: 'string', describe: 'The project filter applied to issues in the custom view.' });
    yargs.option('project-id', { type: 'string', describe: 'The id of the project associated with the custom view.' });
    yargs.option('shared', { type: 'boolean', describe: 'Whether the custom view is shared with everyone in the organization.' });
    yargs.option('team-id', { type: 'string', describe: 'The id of the team associated with the custom view.' });
    yargs.option('input-json', { type: 'string', describe: 'Full input as JSON (or @file.json)' });
    return yargs;
  }, async (argv) => {
    try {
      const variables = {};
      if (argv['input-json']) {
        variables.input = parseJsonFlag(argv['input-json']);
      } else {
        const input = {};
        if (argv['color'] !== undefined) input.color = argv['color'];
        if (argv['description'] !== undefined) input.description = argv['description'];
        if (argv['feed-item-filter-data'] !== undefined) input.feedItemFilterData = parseJsonFlag(argv['feed-item-filter-data']);
        if (argv['filter-data'] !== undefined) input.filterData = parseJsonFlag(argv['filter-data']);
        if (argv['icon'] !== undefined) input.icon = argv['icon'];
        if (argv['id'] !== undefined) input.id = argv['id'];
        if (argv['initiative-filter-data'] !== undefined) input.initiativeFilterData = parseJsonFlag(argv['initiative-filter-data']);
        if (argv['initiative-id'] !== undefined) input.initiativeId = argv['initiative-id'];
        if (argv['name'] !== undefined) input.name = argv['name'];
        if (argv['owner-id'] !== undefined) input.ownerId = argv['owner-id'];
        if (argv['project-filter-data'] !== undefined) input.projectFilterData = parseJsonFlag(argv['project-filter-data']);
        if (argv['project-id'] !== undefined) input.projectId = argv['project-id'];
        if (argv['shared'] !== undefined) input.shared = argv['shared'];
        if (argv['team-id'] !== undefined) input.teamId = argv['team-id'];
        variables.input = input;
      }
      const result = await request(customViewCreate, variables);
      render(result.customViewCreate, { json: argv.json });
    } catch (err) {
      handleError(err);
    }
  });

  // mutation: customViewDelete
  yargs.command('delete <id>', 'Deletes a custom view.', (yargs) => {
    yargs.positional('id', { type: 'string', describe: 'The identifier of the custom view to delete.' });
    return yargs;
  }, async (argv) => {
    try {
      const variables = {};
      variables.id = argv.id;
      const result = await request(customViewDelete, variables);
      render(result.customViewDelete, { json: argv.json });
    } catch (err) {
      handleError(err);
    }
  });

  // mutation: customViewUpdate
  yargs.command('update <id>', 'Updates a custom view.', (yargs) => {
    yargs.positional('id', { type: 'string', describe: 'The identifier of the custom view to update.' });
    yargs.option('color', { type: 'string', describe: 'The color of the icon of the custom view.' });
    yargs.option('description', { type: 'string', describe: 'The description of the custom view.' });
    yargs.option('feed-item-filter-data', { type: 'string', describe: 'The feed item filter applied to issues in the custom view.' });
    yargs.option('filter-data', { type: 'string', describe: 'The filter applied to issues in the custom view.' });
    yargs.option('icon', { type: 'string', describe: 'The icon of the custom view.' });
    yargs.option('initiative-filter-data', { type: 'string', describe: '[ALPHA] The initiative filter applied to issues in the custom view.' });
    yargs.option('initiative-id', { type: 'string', describe: '[Internal] The id of the initiative associated with the custom view.' });
    yargs.option('name', { type: 'string', describe: 'The name of the custom view.' });
    yargs.option('owner-id', { type: 'string', describe: 'The owner of the custom view.' });
    yargs.option('project-filter-data', { type: 'string', describe: 'The project filter applied to issues in the custom view.' });
    yargs.option('project-id', { type: 'string', describe: '[Internal] The id of the project associated with the custom view.' });
    yargs.option('shared', { type: 'boolean', describe: 'Whether the custom view is shared with everyone in the organization.' });
    yargs.option('team-id', { type: 'string', describe: 'The id of the team associated with the custom view.' });
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
        if (argv['color'] !== undefined) input.color = argv['color'];
        if (argv['description'] !== undefined) input.description = argv['description'];
        if (argv['feed-item-filter-data'] !== undefined) input.feedItemFilterData = parseJsonFlag(argv['feed-item-filter-data']);
        if (argv['filter-data'] !== undefined) input.filterData = parseJsonFlag(argv['filter-data']);
        if (argv['icon'] !== undefined) input.icon = argv['icon'];
        if (argv['initiative-filter-data'] !== undefined) input.initiativeFilterData = parseJsonFlag(argv['initiative-filter-data']);
        if (argv['initiative-id'] !== undefined) input.initiativeId = argv['initiative-id'];
        if (argv['name'] !== undefined) input.name = argv['name'];
        if (argv['owner-id'] !== undefined) input.ownerId = argv['owner-id'];
        if (argv['project-filter-data'] !== undefined) input.projectFilterData = parseJsonFlag(argv['project-filter-data']);
        if (argv['project-id'] !== undefined) input.projectId = argv['project-id'];
        if (argv['shared'] !== undefined) input.shared = argv['shared'];
        if (argv['team-id'] !== undefined) input.teamId = argv['team-id'];
        variables.input = input;
      }
      const result = await request(customViewUpdate, variables);
      render(result.customViewUpdate, { json: argv.json });
    } catch (err) {
      handleError(err);
    }
  });

  return yargs.demandCommand(1, 'Specify a subcommand').strict();
}

export function handler() {}
