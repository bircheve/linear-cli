// AUTO-GENERATED — do not edit. Run `npm run generate` to regenerate.
import { request } from '../client.js';
import { handleError } from '../error.js';
import { render } from '../output.js';
import { fetchAllPages } from '../pagination.js';
import { parseJsonFlag, kebabToCamel } from '../flag-utils.js';

import { initiative, initiativeRelations, initiativeToProjects, initiativeUpdates, initiatives } from '../generated/queries.js';
import { initiativeArchive, initiativeCreate, initiativeDelete, initiativeUnarchive } from '../generated/mutations.js';

export const command = 'initiative <command>';
export const describe = 'initiative commands';

export function builder(yargs) {

  // query: initiative
  yargs.command('get <id>', 'One specific initiative.', (yargs) => {
    yargs.positional('id', { type: 'string', describe: 'id' });
    return yargs;
  }, async (argv) => {
    try {
      const variables = {};
      variables.id = argv.id;
      const result = await request(initiative, variables);
      render(result.initiative, { json: argv.json });
    } catch (err) {
      handleError(err);
    }
  });

  // query: initiativeRelations
  yargs.command('relations', 'All initiative relationships.', (yargs) => {
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
        data = await fetchAllPages(request, initiativeRelations, variables, 'initiativeRelations');
      } else {
        const result = await request(initiativeRelations, variables);
        data = result.initiativeRelations?.nodes || [];
      }
      render(data, { json: argv.json, isList: true });
    } catch (err) {
      handleError(err);
    }
  });

  // query: initiativeToProjects
  yargs.command('to-projects', 'returns a list of initiative to project entities.', (yargs) => {
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
        data = await fetchAllPages(request, initiativeToProjects, variables, 'initiativeToProjects');
      } else {
        const result = await request(initiativeToProjects, variables);
        data = result.initiativeToProjects?.nodes || [];
      }
      render(data, { json: argv.json, isList: true });
    } catch (err) {
      handleError(err);
    }
  });

  // query: initiativeUpdates
  yargs.command('updates', 'All  InitiativeUpdates.', (yargs) => {
    yargs.option('after', { type: 'string', describe: 'A cursor to be used with first for forward pagination' });
    yargs.option('before', { type: 'string', describe: 'A cursor to be used with last for backward pagination.' });
    yargs.option('filter', { type: 'string', describe: 'Filter returned initiative updates.' });
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
        data = await fetchAllPages(request, initiativeUpdates, variables, 'initiativeUpdates');
      } else {
        const result = await request(initiativeUpdates, variables);
        data = result.initiativeUpdates?.nodes || [];
      }
      render(data, { json: argv.json, isList: true });
    } catch (err) {
      handleError(err);
    }
  });

  // query: initiatives
  yargs.command('list', 'All initiatives in the workspace.', (yargs) => {
    yargs.option('after', { type: 'string', describe: 'A cursor to be used with first for forward pagination' });
    yargs.option('before', { type: 'string', describe: 'A cursor to be used with last for backward pagination.' });
    yargs.option('filter', { type: 'string', describe: 'Filter returned initiatives.' });
    yargs.option('first', { type: 'number', describe: 'The number of items to forward paginate (used with after). Defaults to 50.' });
    yargs.option('include-archived', { type: 'boolean', describe: 'Should archived resources be included (default: false)' });
    yargs.option('last', { type: 'number', describe: 'The number of items to backward paginate (used with before). Defaults to 50.' });
    yargs.option('order-by', { type: 'string', choices: ["createdAt","updatedAt"], describe: 'By which field should the pagination order by. Available options are createdA...' });
    yargs.option('sort', { type: 'array', describe: '[INTERNAL] Sort returned initiatives.' });
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
        data = await fetchAllPages(request, initiatives, variables, 'initiatives');
      } else {
        const result = await request(initiatives, variables);
        data = result.initiatives?.nodes || [];
      }
      render(data, { json: argv.json, isList: true });
    } catch (err) {
      handleError(err);
    }
  });

  // mutation: initiativeArchive
  yargs.command('archive <id>', 'Archives a initiative.', (yargs) => {
    yargs.positional('id', { type: 'string', describe: 'The identifier of the initiative to archive.' });
    return yargs;
  }, async (argv) => {
    try {
      const variables = {};
      variables.id = argv.id;
      const result = await request(initiativeArchive, variables);
      render(result.initiativeArchive, { json: argv.json });
    } catch (err) {
      handleError(err);
    }
  });

  // mutation: initiativeCreate
  yargs.command('create', 'Creates a new initiative.', (yargs) => {
    yargs.option('color', { type: 'string', describe: 'The initiative\'s color.' });
    yargs.option('content', { type: 'string', describe: 'The initiative\'s content in markdown format.' });
    yargs.option('description', { type: 'string', describe: 'The description of the initiative.' });
    yargs.option('icon', { type: 'string', describe: 'The initiative\'s icon.' });
    yargs.option('id', { type: 'string', describe: 'The identifier in UUID v4 format. If none is provided, the backend will gener...' });
    yargs.option('name', { type: 'string', demandOption: true, describe: 'The name of the initiative.' });
    yargs.option('owner-id', { type: 'string', describe: 'The owner of the initiative.' });
    yargs.option('sort-order', { type: 'number', describe: 'The sort order of the initiative within the organization.' });
    yargs.option('status', { type: 'string', choices: ["Active","Completed","Planned"], describe: 'The initiative\'s status.' });
    yargs.option('target-date', { type: 'string', describe: 'The estimated completion date of the initiative.' });
    yargs.option('target-date-resolution', { type: 'string', choices: ["halfYear","month","quarter","year"], describe: 'The resolution of the initiative\'s estimated completion date.' });
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
        if (argv['content'] !== undefined) input.content = argv['content'];
        if (argv['description'] !== undefined) input.description = argv['description'];
        if (argv['icon'] !== undefined) input.icon = argv['icon'];
        if (argv['id'] !== undefined) input.id = argv['id'];
        if (argv['name'] !== undefined) input.name = argv['name'];
        if (argv['owner-id'] !== undefined) input.ownerId = argv['owner-id'];
        if (argv['sort-order'] !== undefined) input.sortOrder = argv['sort-order'];
        if (argv['status'] !== undefined) input.status = argv['status'];
        if (argv['target-date'] !== undefined) input.targetDate = argv['target-date'];
        if (argv['target-date-resolution'] !== undefined) input.targetDateResolution = argv['target-date-resolution'];
        variables.input = input;
      }
      const result = await request(initiativeCreate, variables);
      render(result.initiativeCreate, { json: argv.json });
    } catch (err) {
      handleError(err);
    }
  });

  // mutation: initiativeDelete
  yargs.command('delete <id>', 'Deletes (trashes) an initiative.', (yargs) => {
    yargs.positional('id', { type: 'string', describe: 'The identifier of the initiative to delete.' });
    return yargs;
  }, async (argv) => {
    try {
      const variables = {};
      variables.id = argv.id;
      const result = await request(initiativeDelete, variables);
      render(result.initiativeDelete, { json: argv.json });
    } catch (err) {
      handleError(err);
    }
  });

  // mutation: initiativeUnarchive
  yargs.command('unarchive <id>', 'Unarchives a initiative.', (yargs) => {
    yargs.positional('id', { type: 'string', describe: 'The identifier of the initiative to unarchive.' });
    return yargs;
  }, async (argv) => {
    try {
      const variables = {};
      variables.id = argv.id;
      const result = await request(initiativeUnarchive, variables);
      render(result.initiativeUnarchive, { json: argv.json });
    } catch (err) {
      handleError(err);
    }
  });

  return yargs.demandCommand(1, 'Specify a subcommand').strict();
}

export function handler() {}
