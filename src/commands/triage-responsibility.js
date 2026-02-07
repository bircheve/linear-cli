// AUTO-GENERATED — do not edit. Run `npm run generate` to regenerate.
import { request } from '../client.js';
import { handleError } from '../error.js';
import { render } from '../output.js';
import { fetchAllPages } from '../pagination.js';
import { parseJsonFlag, kebabToCamel } from '../flag-utils.js';
import { columns } from '../generated/columns.js';

import { triageResponsibility } from '../generated/queries.js';
import { triageResponsibilityCreate, triageResponsibilityDelete, triageResponsibilityUpdate } from '../generated/mutations.js';

export const command = 'triage-responsibility <command>';
export const describe = 'triage-responsibility commands';

export function builder(yargs) {

  // query: triageResponsibility
  yargs.command('get <id>', 'A specific triage responsibility.', (yargs) => {
    yargs.positional('id', { type: 'string', describe: 'The identifier of the triage responsibility to retrieve.' });
    return yargs;
  }, async (argv) => {
    try {
      const variables = {};
      variables.id = argv.id;
      const result = await request(triageResponsibility, variables);
      render(result.triageResponsibility, { json: argv.json, columnConfig: columns['TriageResponsibility'] });
    } catch (err) {
      handleError(err);
    }
  });

  // mutation: triageResponsibilityCreate
  yargs.command('create', 'Creates a new triage responsibility.', (yargs) => {
    yargs.option('action', { type: 'string', demandOption: true, describe: 'The action to take when an issue is added to triage.' });
    yargs.option('id', { type: 'string', describe: 'The identifier in UUID v4 format. If none is provided, the backend will gener...' });
    yargs.option('manual-selection', { type: 'string', describe: 'The manual selection of users responsible for triage.' });
    yargs.option('team-id', { type: 'string', demandOption: true, describe: 'The identifier of the team associated with the triage responsibility.' });
    yargs.option('time-schedule-id', { type: 'string', describe: 'The identifier of the time schedule used for scheduling triage responsibility' });
    yargs.option('input-json', { type: 'string', describe: 'Full input as JSON (or @file.json)' });
    return yargs;
  }, async (argv) => {
    try {
      const variables = {};
      if (argv['input-json']) {
        variables.input = parseJsonFlag(argv['input-json']);
      } else {
        const input = {};
        if (argv['action'] !== undefined) input.action = argv['action'];
        if (argv['id'] !== undefined) input.id = argv['id'];
        if (argv['manual-selection'] !== undefined) input.manualSelection = parseJsonFlag(argv['manual-selection']);
        if (argv['team-id'] !== undefined) input.teamId = argv['team-id'];
        if (argv['time-schedule-id'] !== undefined) input.timeScheduleId = argv['time-schedule-id'];
        variables.input = input;
      }
      const result = await request(triageResponsibilityCreate, variables);
      render(result.triageResponsibilityCreate, { json: argv.json });
    } catch (err) {
      handleError(err);
    }
  });

  // mutation: triageResponsibilityDelete
  yargs.command('delete <id>', 'Deletes a triage responsibility.', (yargs) => {
    yargs.positional('id', { type: 'string', describe: 'The identifier of the triage responsibility to delete.' });
    return yargs;
  }, async (argv) => {
    try {
      const variables = {};
      variables.id = argv.id;
      const result = await request(triageResponsibilityDelete, variables);
      render(result.triageResponsibilityDelete, { json: argv.json });
    } catch (err) {
      handleError(err);
    }
  });

  // mutation: triageResponsibilityUpdate
  yargs.command('update <id>', 'Updates an existing triage responsibility.', (yargs) => {
    yargs.positional('id', { type: 'string', describe: 'The identifier of the triage responsibility to update.' });
    yargs.option('action', { type: 'string', describe: 'The action to take when an issue is added to triage.' });
    yargs.option('manual-selection', { type: 'string', describe: 'The manual selection of users responsible for triage.' });
    yargs.option('time-schedule-id', { type: 'string', describe: 'The identifier of the time schedule used for scheduling triage responsibility.' });
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
        if (argv['action'] !== undefined) input.action = argv['action'];
        if (argv['manual-selection'] !== undefined) input.manualSelection = parseJsonFlag(argv['manual-selection']);
        if (argv['time-schedule-id'] !== undefined) input.timeScheduleId = argv['time-schedule-id'];
        variables.input = input;
      }
      const result = await request(triageResponsibilityUpdate, variables);
      render(result.triageResponsibilityUpdate, { json: argv.json });
    } catch (err) {
      handleError(err);
    }
  });

  return yargs.demandCommand(1, 'Specify a subcommand').strict();
}

export function handler() {}
