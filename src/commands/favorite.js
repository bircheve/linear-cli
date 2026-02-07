// AUTO-GENERATED — do not edit. Run `npm run generate` to regenerate.
import { request } from '../client.js';
import { handleError } from '../error.js';
import { render } from '../output.js';
import { fetchAllPages } from '../pagination.js';
import { parseJsonFlag, kebabToCamel } from '../flag-utils.js';

import { favorite, favorites } from '../generated/queries.js';
import { favoriteCreate, favoriteDelete, favoriteUpdate } from '../generated/mutations.js';

export const command = 'favorite <command>';
export const describe = 'favorite commands';

export function builder(yargs) {

  // query: favorite
  yargs.command('get <id>', 'One specific favorite.', (yargs) => {
    yargs.positional('id', { type: 'string', describe: 'id' });
    return yargs;
  }, async (argv) => {
    try {
      const variables = {};
      variables.id = argv.id;
      const result = await request(favorite, variables);
      render(result.favorite, { json: argv.json });
    } catch (err) {
      handleError(err);
    }
  });

  // query: favorites
  yargs.command('list', 'The user\'s favorites.', (yargs) => {
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
        data = await fetchAllPages(request, favorites, variables, 'favorites');
      } else {
        const result = await request(favorites, variables);
        data = result.favorites?.nodes || [];
      }
      render(data, { json: argv.json, isList: true });
    } catch (err) {
      handleError(err);
    }
  });

  // mutation: favoriteCreate
  yargs.command('create', 'Creates a new favorite (project, cycle etc).', (yargs) => {
    yargs.option('custom-view-id', { type: 'string', describe: 'The identifier of the custom view to favorite.' });
    yargs.option('customer-id', { type: 'string', describe: 'The identifier of the customer to favorite.' });
    yargs.option('cycle-id', { type: 'string', describe: 'The identifier of the cycle to favorite.' });
    yargs.option('dashboard-id', { type: 'string', describe: 'The identifier of the dashboard to favorite.' });
    yargs.option('document-id', { type: 'string', describe: 'The identifier of the document to favorite.' });
    yargs.option('facet-id', { type: 'string', describe: 'The identifier of the facet to favorite.' });
    yargs.option('folder-name', { type: 'string', describe: 'The name of the favorite folder.' });
    yargs.option('id', { type: 'string', describe: 'The identifier. If none is provided, the backend will generate one.' });
    yargs.option('initiative-id', { type: 'string', describe: '[INTERNAL] The identifier of the initiative to favorite.' });
    yargs.option('initiative-tab', { type: 'string', choices: ["overview","projects","updates"], describe: 'The tab of the initiative to favorite.' });
    yargs.option('issue-id', { type: 'string', describe: 'The identifier of the issue to favorite.' });
    yargs.option('label-id', { type: 'string', describe: 'The identifier of the label to favorite.' });
    yargs.option('parent-id', { type: 'string', describe: 'The parent folder of the favorite.' });
    yargs.option('predefined-view-team-id', { type: 'string', describe: 'The identifier of team for the predefined view to favorite.' });
    yargs.option('predefined-view-type', { type: 'string', describe: 'The type of the predefined view to favorite.' });
    yargs.option('project-id', { type: 'string', describe: 'The identifier of the project to favorite.' });
    yargs.option('project-label-id', { type: 'string', describe: 'The identifier of the label to favorite.' });
    yargs.option('project-tab', { type: 'string', choices: ["customers","documents","issues","updates"], describe: 'The tab of the project to favorite.' });
    yargs.option('pull-request-id', { type: 'string', describe: 'The identifier of the pull request to favorite.' });
    yargs.option('sort-order', { type: 'number', describe: 'The position of the item in the favorites list.' });
    yargs.option('user-id', { type: 'string', describe: 'The identifier of the user to favorite.' });
    yargs.option('input-json', { type: 'string', describe: 'Full input as JSON (or @file.json)' });
    return yargs;
  }, async (argv) => {
    try {
      const variables = {};
      if (argv['input-json']) {
        variables.input = parseJsonFlag(argv['input-json']);
      } else {
        const input = {};
        if (argv['custom-view-id'] !== undefined) input.customViewId = argv['custom-view-id'];
        if (argv['customer-id'] !== undefined) input.customerId = argv['customer-id'];
        if (argv['cycle-id'] !== undefined) input.cycleId = argv['cycle-id'];
        if (argv['dashboard-id'] !== undefined) input.dashboardId = argv['dashboard-id'];
        if (argv['document-id'] !== undefined) input.documentId = argv['document-id'];
        if (argv['facet-id'] !== undefined) input.facetId = argv['facet-id'];
        if (argv['folder-name'] !== undefined) input.folderName = argv['folder-name'];
        if (argv['id'] !== undefined) input.id = argv['id'];
        if (argv['initiative-id'] !== undefined) input.initiativeId = argv['initiative-id'];
        if (argv['initiative-tab'] !== undefined) input.initiativeTab = argv['initiative-tab'];
        if (argv['issue-id'] !== undefined) input.issueId = argv['issue-id'];
        if (argv['label-id'] !== undefined) input.labelId = argv['label-id'];
        if (argv['parent-id'] !== undefined) input.parentId = argv['parent-id'];
        if (argv['predefined-view-team-id'] !== undefined) input.predefinedViewTeamId = argv['predefined-view-team-id'];
        if (argv['predefined-view-type'] !== undefined) input.predefinedViewType = argv['predefined-view-type'];
        if (argv['project-id'] !== undefined) input.projectId = argv['project-id'];
        if (argv['project-label-id'] !== undefined) input.projectLabelId = argv['project-label-id'];
        if (argv['project-tab'] !== undefined) input.projectTab = argv['project-tab'];
        if (argv['pull-request-id'] !== undefined) input.pullRequestId = argv['pull-request-id'];
        if (argv['sort-order'] !== undefined) input.sortOrder = argv['sort-order'];
        if (argv['user-id'] !== undefined) input.userId = argv['user-id'];
        variables.input = input;
      }
      const result = await request(favoriteCreate, variables);
      render(result.favoriteCreate, { json: argv.json });
    } catch (err) {
      handleError(err);
    }
  });

  // mutation: favoriteDelete
  yargs.command('delete <id>', 'Deletes a favorite reference.', (yargs) => {
    yargs.positional('id', { type: 'string', describe: 'The identifier of the favorite reference to delete.' });
    return yargs;
  }, async (argv) => {
    try {
      const variables = {};
      variables.id = argv.id;
      const result = await request(favoriteDelete, variables);
      render(result.favoriteDelete, { json: argv.json });
    } catch (err) {
      handleError(err);
    }
  });

  // mutation: favoriteUpdate
  yargs.command('update <id>', 'Updates a favorite.', (yargs) => {
    yargs.positional('id', { type: 'string', describe: 'The identifier of the favorite to update.' });
    yargs.option('folder-name', { type: 'string', describe: 'The name of the favorite folder.' });
    yargs.option('parent-id', { type: 'string', describe: 'The identifier (in UUID v4 format) of the folder to move the favorite under.' });
    yargs.option('sort-order', { type: 'number', describe: 'The position of the item in the favorites list.' });
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
        if (argv['folder-name'] !== undefined) input.folderName = argv['folder-name'];
        if (argv['parent-id'] !== undefined) input.parentId = argv['parent-id'];
        if (argv['sort-order'] !== undefined) input.sortOrder = argv['sort-order'];
        variables.input = input;
      }
      const result = await request(favoriteUpdate, variables);
      render(result.favoriteUpdate, { json: argv.json });
    } catch (err) {
      handleError(err);
    }
  });

  return yargs.demandCommand(1, 'Specify a subcommand').strict();
}

export function handler() {}
