// AUTO-GENERATED — do not edit. Run `npm run generate` to regenerate.
import { request } from '../client.js';
import { handleError } from '../error.js';
import { render } from '../output.js';
import { fetchAllPages } from '../pagination.js';
import { parseJsonFlag, kebabToCamel } from '../flag-utils.js';

import { cycle, cycles } from '../generated/queries.js';
import { cycleArchive, cycleCreate, cycleShiftAll, cycleStartUpcomingCycleToday, cycleUpdate } from '../generated/mutations.js';

export const command = 'cycle <command>';
export const describe = 'cycle commands';

export function builder(yargs) {

  // query: cycle
  yargs.command('get <id>', 'One specific cycle.', (yargs) => {
    yargs.positional('id', { type: 'string', describe: 'id' });
    return yargs;
  }, async (argv) => {
    try {
      const variables = {};
      variables.id = argv.id;
      const result = await request(cycle, variables);
      render(result.cycle, { json: argv.json });
    } catch (err) {
      handleError(err);
    }
  });

  // query: cycles
  yargs.command('list', 'All cycles.', (yargs) => {
    yargs.option('after', { type: 'string', describe: 'A cursor to be used with first for forward pagination' });
    yargs.option('before', { type: 'string', describe: 'A cursor to be used with last for backward pagination.' });
    yargs.option('filter', { type: 'string', describe: 'Filter returned users.' });
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
        data = await fetchAllPages(request, cycles, variables, 'cycles');
      } else {
        const result = await request(cycles, variables);
        data = result.cycles?.nodes || [];
      }
      render(data, { json: argv.json, isList: true });
    } catch (err) {
      handleError(err);
    }
  });

  // mutation: cycleArchive
  yargs.command('archive <id>', 'Archives a cycle.', (yargs) => {
    yargs.positional('id', { type: 'string', describe: 'The identifier of the cycle to archive.' });
    return yargs;
  }, async (argv) => {
    try {
      const variables = {};
      variables.id = argv.id;
      const result = await request(cycleArchive, variables);
      render(result.cycleArchive, { json: argv.json });
    } catch (err) {
      handleError(err);
    }
  });

  // mutation: cycleCreate
  yargs.command('create', 'Creates a new cycle.', (yargs) => {
    yargs.option('completed-at', { type: 'string', describe: 'The completion time of the cycle. If null, the cycle hasn\'t been completed.' });
    yargs.option('description', { type: 'string', describe: 'The description of the cycle.' });
    yargs.option('ends-at', { type: 'string', demandOption: true, describe: 'The end date of the cycle.' });
    yargs.option('id', { type: 'string', describe: 'The identifier in UUID v4 format. If none is provided, the backend will gener...' });
    yargs.option('name', { type: 'string', describe: 'The custom name of the cycle.' });
    yargs.option('starts-at', { type: 'string', demandOption: true, describe: 'The start date of the cycle.' });
    yargs.option('team-id', { type: 'string', demandOption: true, describe: 'The team to associate the cycle with.' });
    yargs.option('input-json', { type: 'string', describe: 'Full input as JSON (or @file.json)' });
    return yargs;
  }, async (argv) => {
    try {
      const variables = {};
      if (argv['input-json']) {
        variables.input = parseJsonFlag(argv['input-json']);
      } else {
        const input = {};
        if (argv['completed-at'] !== undefined) input.completedAt = argv['completed-at'];
        if (argv['description'] !== undefined) input.description = argv['description'];
        if (argv['ends-at'] !== undefined) input.endsAt = argv['ends-at'];
        if (argv['id'] !== undefined) input.id = argv['id'];
        if (argv['name'] !== undefined) input.name = argv['name'];
        if (argv['starts-at'] !== undefined) input.startsAt = argv['starts-at'];
        if (argv['team-id'] !== undefined) input.teamId = argv['team-id'];
        variables.input = input;
      }
      const result = await request(cycleCreate, variables);
      render(result.cycleCreate, { json: argv.json });
    } catch (err) {
      handleError(err);
    }
  });

  // mutation: cycleShiftAll
  yargs.command('shift-all', 'Shifts all cycles starts and ends by a certain number of days, starting from ...', (yargs) => {
    yargs.option('days-to-shift', { type: 'number', demandOption: true, describe: 'The number of days to shift the cycles by.' });
    yargs.option('id', { type: 'string', demandOption: true, describe: 'The cycle ID at which to start the shift.' });
    yargs.option('input-json', { type: 'string', describe: 'Full input as JSON (or @file.json)' });
    return yargs;
  }, async (argv) => {
    try {
      const variables = {};
      if (argv['input-json']) {
        variables.input = parseJsonFlag(argv['input-json']);
      } else {
        const input = {};
        if (argv['days-to-shift'] !== undefined) input.daysToShift = argv['days-to-shift'];
        if (argv['id'] !== undefined) input.id = argv['id'];
        variables.input = input;
      }
      const result = await request(cycleShiftAll, variables);
      render(result.cycleShiftAll, { json: argv.json });
    } catch (err) {
      handleError(err);
    }
  });

  // mutation: cycleStartUpcomingCycleToday
  yargs.command('start-upcoming-cycle-today <id>', 'Shifts all cycles starts and ends by a certain number of days, starting from ...', (yargs) => {
    yargs.positional('id', { type: 'string', describe: 'The identifier of the cycle to start as of midnight today. Must be the upcoming cycle.' });
    return yargs;
  }, async (argv) => {
    try {
      const variables = {};
      variables.id = argv.id;
      const result = await request(cycleStartUpcomingCycleToday, variables);
      render(result.cycleStartUpcomingCycleToday, { json: argv.json });
    } catch (err) {
      handleError(err);
    }
  });

  // mutation: cycleUpdate
  yargs.command('update <id>', 'Updates a cycle.', (yargs) => {
    yargs.positional('id', { type: 'string', describe: 'The identifier of the cycle to update.' });
    yargs.option('completed-at', { type: 'string', describe: 'The end date of the cycle.' });
    yargs.option('description', { type: 'string', describe: 'The description of the cycle.' });
    yargs.option('ends-at', { type: 'string', describe: 'The end date of the cycle.' });
    yargs.option('name', { type: 'string', describe: 'The custom name of the cycle.' });
    yargs.option('starts-at', { type: 'string', describe: 'The start date of the cycle.' });
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
        if (argv['completed-at'] !== undefined) input.completedAt = argv['completed-at'];
        if (argv['description'] !== undefined) input.description = argv['description'];
        if (argv['ends-at'] !== undefined) input.endsAt = argv['ends-at'];
        if (argv['name'] !== undefined) input.name = argv['name'];
        if (argv['starts-at'] !== undefined) input.startsAt = argv['starts-at'];
        variables.input = input;
      }
      const result = await request(cycleUpdate, variables);
      render(result.cycleUpdate, { json: argv.json });
    } catch (err) {
      handleError(err);
    }
  });

  return yargs.demandCommand(1, 'Specify a subcommand').strict();
}

export function handler() {}
