// AUTO-GENERATED — do not edit. Run `npm run generate` to regenerate.
import { request } from '../client.js';
import { handleError } from '../error.js';
import { render } from '../output.js';
import { fetchAllPages } from '../pagination.js';
import { parseJsonFlag, kebabToCamel } from '../flag-utils.js';

import { timeSchedule, timeSchedules } from '../generated/queries.js';
import { timeScheduleCreate, timeScheduleDelete, timeScheduleRefreshIntegrationSchedule, timeScheduleUpdate, timeScheduleUpsertExternal } from '../generated/mutations.js';

export const command = 'time-schedule <command>';
export const describe = 'time-schedule commands';

export function builder(yargs) {

  // query: timeSchedule
  yargs.command('get <id>', 'A specific time schedule.', (yargs) => {
    yargs.positional('id', { type: 'string', describe: 'The identifier of the time schedule to retrieve.' });
    return yargs;
  }, async (argv) => {
    try {
      const variables = {};
      variables.id = argv.id;
      const result = await request(timeSchedule, variables);
      render(result.timeSchedule, { json: argv.json });
    } catch (err) {
      handleError(err);
    }
  });

  // query: timeSchedules
  yargs.command('list', 'All time schedules.', (yargs) => {
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
        data = await fetchAllPages(request, timeSchedules, variables, 'timeSchedules');
      } else {
        const result = await request(timeSchedules, variables);
        data = result.timeSchedules?.nodes || [];
      }
      render(data, { json: argv.json, isList: true });
    } catch (err) {
      handleError(err);
    }
  });

  // mutation: timeScheduleCreate
  yargs.command('create', 'Creates a new time schedule.', (yargs) => {
    yargs.option('entries', { type: 'array', demandOption: true, describe: 'The schedule entries.' });
    yargs.option('external-id', { type: 'string', describe: 'The unique identifier of the external schedule.' });
    yargs.option('external-url', { type: 'string', describe: 'The URL to the external schedule.' });
    yargs.option('id', { type: 'string', describe: 'The identifier in UUID v4 format. If none is provided, the backend will gener...' });
    yargs.option('name', { type: 'string', demandOption: true, describe: 'The name of the schedule.' });
    yargs.option('input-json', { type: 'string', describe: 'Full input as JSON (or @file.json)' });
    return yargs;
  }, async (argv) => {
    try {
      const variables = {};
      if (argv['input-json']) {
        variables.input = parseJsonFlag(argv['input-json']);
      } else {
        const input = {};
        if (argv['entries'] !== undefined) input.entries = argv['entries'];
        if (argv['external-id'] !== undefined) input.externalId = argv['external-id'];
        if (argv['external-url'] !== undefined) input.externalUrl = argv['external-url'];
        if (argv['id'] !== undefined) input.id = argv['id'];
        if (argv['name'] !== undefined) input.name = argv['name'];
        variables.input = input;
      }
      const result = await request(timeScheduleCreate, variables);
      render(result.timeScheduleCreate, { json: argv.json });
    } catch (err) {
      handleError(err);
    }
  });

  // mutation: timeScheduleDelete
  yargs.command('delete <id>', 'Deletes a time schedule.', (yargs) => {
    yargs.positional('id', { type: 'string', describe: 'The identifier of the time schedule to delete.' });
    return yargs;
  }, async (argv) => {
    try {
      const variables = {};
      variables.id = argv.id;
      const result = await request(timeScheduleDelete, variables);
      render(result.timeScheduleDelete, { json: argv.json });
    } catch (err) {
      handleError(err);
    }
  });

  // mutation: timeScheduleRefreshIntegrationSchedule
  yargs.command('refresh-integration-schedule <id>', 'Refresh the integration schedule information.', (yargs) => {
    yargs.positional('id', { type: 'string', describe: 'The identifier of the time schedule to refresh.' });
    return yargs;
  }, async (argv) => {
    try {
      const variables = {};
      variables.id = argv.id;
      const result = await request(timeScheduleRefreshIntegrationSchedule, variables);
      render(result.timeScheduleRefreshIntegrationSchedule, { json: argv.json });
    } catch (err) {
      handleError(err);
    }
  });

  // mutation: timeScheduleUpdate
  yargs.command('update <id>', 'Updates a time schedule.', (yargs) => {
    yargs.positional('id', { type: 'string', describe: 'The identifier of the time schedule to update.' });
    yargs.option('entries', { type: 'array', describe: 'The schedule entries.' });
    yargs.option('external-id', { type: 'string', describe: 'The unique identifier of the external schedule.' });
    yargs.option('external-url', { type: 'string', describe: 'The URL to the external schedule.' });
    yargs.option('name', { type: 'string', describe: 'The name of the schedule.' });
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
        if (argv['entries'] !== undefined) input.entries = argv['entries'];
        if (argv['external-id'] !== undefined) input.externalId = argv['external-id'];
        if (argv['external-url'] !== undefined) input.externalUrl = argv['external-url'];
        if (argv['name'] !== undefined) input.name = argv['name'];
        variables.input = input;
      }
      const result = await request(timeScheduleUpdate, variables);
      render(result.timeScheduleUpdate, { json: argv.json });
    } catch (err) {
      handleError(err);
    }
  });

  // mutation: timeScheduleUpsertExternal
  yargs.command('upsert-external', 'Upsert an external time schedule.', (yargs) => {
    yargs.option('entries', { type: 'array', describe: 'The schedule entries.' });
    yargs.option('external-id', { type: 'string', describe: 'The unique identifier of the external schedule.' });
    yargs.option('external-url', { type: 'string', describe: 'The URL to the external schedule.' });
    yargs.option('name', { type: 'string', describe: 'The name of the schedule.' });
    yargs.option('external-id', { type: 'string', demandOption: true, describe: 'The unique identifier of the external schedule.' });
    yargs.option('input-json', { type: 'string', describe: 'Full input as JSON (or @file.json)' });
    return yargs;
  }, async (argv) => {
    try {
      const variables = {};
      if (argv['input-json']) {
        variables.input = parseJsonFlag(argv['input-json']);
      } else {
        const input = {};
        if (argv['entries'] !== undefined) input.entries = argv['entries'];
        if (argv['external-id'] !== undefined) input.externalId = argv['external-id'];
        if (argv['external-url'] !== undefined) input.externalUrl = argv['external-url'];
        if (argv['name'] !== undefined) input.name = argv['name'];
        variables.input = input;
      }
      if (argv['external-id'] !== undefined) variables.externalId = argv['external-id'];
      const result = await request(timeScheduleUpsertExternal, variables);
      render(result.timeScheduleUpsertExternal, { json: argv.json });
    } catch (err) {
      handleError(err);
    }
  });

  return yargs.demandCommand(1, 'Specify a subcommand').strict();
}

export function handler() {}
