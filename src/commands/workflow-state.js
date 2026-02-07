// AUTO-GENERATED — do not edit. Run `npm run generate` to regenerate.
import { request } from '../client.js';
import { handleError } from '../error.js';
import { render } from '../output.js';
import { fetchAllPages } from '../pagination.js';
import { parseJsonFlag, kebabToCamel } from '../flag-utils.js';
import { columns } from '../generated/columns.js';

import { workflowState, workflowStates } from '../generated/queries.js';
import { workflowStateArchive, workflowStateCreate, workflowStateUpdate } from '../generated/mutations.js';

export const command = 'workflow-state <command>';
export const describe = 'workflow-state commands';

export function builder(yargs) {

  // query: workflowState
  yargs.command('get <id>', 'One specific state.', (yargs) => {
    yargs.positional('id', { type: 'string', describe: 'id' });
    return yargs;
  }, async (argv) => {
    try {
      const variables = {};
      variables.id = argv.id;
      const result = await request(workflowState, variables);
      render(result.workflowState, { json: argv.json, columnConfig: columns['WorkflowState'] });
    } catch (err) {
      handleError(err);
    }
  });

  // query: workflowStates
  yargs.command('list', 'All issue workflow states.', (yargs) => {
    yargs.option('after', { type: 'string', describe: 'A cursor to be used with first for forward pagination' });
    yargs.option('before', { type: 'string', describe: 'A cursor to be used with last for backward pagination.' });
    yargs.option('filter', { type: 'string', describe: 'Filter returned workflow states.' });
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
        data = await fetchAllPages(request, workflowStates, variables, 'workflowStates');
      } else {
        const result = await request(workflowStates, variables);
        data = result.workflowStates?.nodes || [];
      }
      render(data, { json: argv.json, isList: true, columnConfig: columns['WorkflowState'] });
    } catch (err) {
      handleError(err);
    }
  });

  // mutation: workflowStateArchive
  yargs.command('archive <id>', 'Archives a state. Only states with issues that have all been archived can be ...', (yargs) => {
    yargs.positional('id', { type: 'string', describe: 'The identifier of the state to archive.' });
    return yargs;
  }, async (argv) => {
    try {
      const variables = {};
      variables.id = argv.id;
      const result = await request(workflowStateArchive, variables);
      render(result.workflowStateArchive, { json: argv.json });
    } catch (err) {
      handleError(err);
    }
  });

  // mutation: workflowStateCreate
  yargs.command('create', 'Creates a new state, adding it to the workflow of a team.', (yargs) => {
    yargs.option('color', { type: 'string', demandOption: true, describe: 'The color of the state.' });
    yargs.option('description', { type: 'string', describe: 'The description of the state.' });
    yargs.option('id', { type: 'string', describe: 'The identifier in UUID v4 format. If none is provided, the backend will gener...' });
    yargs.option('name', { type: 'string', demandOption: true, describe: 'The name of the state.' });
    yargs.option('position', { type: 'number', describe: 'The position of the state.' });
    yargs.option('team-id', { type: 'string', demandOption: true, describe: 'The team associated with the state.' });
    yargs.option('type', { type: 'string', demandOption: true, describe: 'The workflow type.' });
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
        if (argv['id'] !== undefined) input.id = argv['id'];
        if (argv['name'] !== undefined) input.name = argv['name'];
        if (argv['position'] !== undefined) input.position = argv['position'];
        if (argv['team-id'] !== undefined) input.teamId = argv['team-id'];
        if (argv['type'] !== undefined) input.type = argv['type'];
        variables.input = input;
      }
      const result = await request(workflowStateCreate, variables);
      render(result.workflowStateCreate, { json: argv.json });
    } catch (err) {
      handleError(err);
    }
  });

  // mutation: workflowStateUpdate
  yargs.command('update <id>', 'Updates a state.', (yargs) => {
    yargs.positional('id', { type: 'string', describe: 'The identifier of the state to update.' });
    yargs.option('color', { type: 'string', describe: 'The color of the state.' });
    yargs.option('description', { type: 'string', describe: 'The description of the state.' });
    yargs.option('name', { type: 'string', describe: 'The name of the state.' });
    yargs.option('position', { type: 'number', describe: 'The position of the state.' });
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
        if (argv['name'] !== undefined) input.name = argv['name'];
        if (argv['position'] !== undefined) input.position = argv['position'];
        variables.input = input;
      }
      const result = await request(workflowStateUpdate, variables);
      render(result.workflowStateUpdate, { json: argv.json });
    } catch (err) {
      handleError(err);
    }
  });

  return yargs.demandCommand(1, 'Specify a subcommand').strict();
}

export function handler() {}
