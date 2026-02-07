// AUTO-GENERATED — do not edit. Run `npm run generate` to regenerate.
import { request } from '../client.js';
import { handleError } from '../error.js';
import { render } from '../output.js';
import { fetchAllPages } from '../pagination.js';
import { parseJsonFlag, kebabToCamel } from '../flag-utils.js';
import { columns } from '../generated/columns.js';

import { initiativeUpdate as initiativeUpdateQuery } from '../generated/queries.js';
import { initiativeUpdate as initiativeUpdateMutation, initiativeUpdateArchive, initiativeUpdateCreate, initiativeUpdateUnarchive, initiativeUpdateUpdate } from '../generated/mutations.js';

export const command = 'initiative-update <command>';
export const describe = 'initiative-update commands';

export function builder(yargs) {

  // query: initiativeUpdate
  yargs.command('get <id>', 'A specific  initiative update.', (yargs) => {
    yargs.positional('id', { type: 'string', describe: 'The identifier of the  initiative update to retrieve.' });
    return yargs;
  }, async (argv) => {
    try {
      const variables = {};
      variables.id = argv.id;
      const result = await request(initiativeUpdateQuery, variables);
      render(result.initiativeUpdate, { json: argv.json, columnConfig: columns['InitiativeUpdate'] });
    } catch (err) {
      handleError(err);
    }
  });

  // mutation: initiativeUpdate
  yargs.command('initiativeUpdate <id>', 'Updates a initiative.', (yargs) => {
    yargs.positional('id', { type: 'string', describe: 'The identifier of the initiative to update.' });
    yargs.option('color', { type: 'string', describe: 'The initiative\'s color.' });
    yargs.option('content', { type: 'string', describe: 'The initiative\'s content in markdown format.' });
    yargs.option('description', { type: 'string', describe: 'The description of the initiative.' });
    yargs.option('frequency-resolution', { type: 'string', choices: ["daily","weekly"], describe: 'The frequency resolution.' });
    yargs.option('icon', { type: 'string', describe: 'The initiative\'s icon.' });
    yargs.option('name', { type: 'string', describe: 'The name of the initiative.' });
    yargs.option('owner-id', { type: 'string', describe: 'The owner of the initiative.' });
    yargs.option('sort-order', { type: 'number', describe: 'The sort order of the initiative within the organization.' });
    yargs.option('status', { type: 'string', choices: ["Active","Completed","Planned"], describe: 'The initiative\'s status.' });
    yargs.option('target-date', { type: 'string', describe: 'The estimated completion date of the initiative.' });
    yargs.option('target-date-resolution', { type: 'string', choices: ["halfYear","month","quarter","year"], describe: 'The resolution of the initiative\'s estimated completion date.' });
    yargs.option('trashed', { type: 'boolean', describe: 'Whether the initiative has been trashed.' });
    yargs.option('update-reminder-frequency', { type: 'number', describe: 'The frequency at which to prompt for updates. When not set, reminders are inh...' });
    yargs.option('update-reminder-frequency-in-weeks', { type: 'number', describe: 'The n-weekly frequency at which to prompt for updates. When not set, reminder...' });
    yargs.option('update-reminders-day', { type: 'string', choices: ["Friday","Monday","Saturday","Sunday","Thursday","Tuesday","Wednesday"], describe: 'The day at which to prompt for updates.' });
    yargs.option('update-reminders-hour', { type: 'number', describe: 'The hour at which to prompt for updates.' });
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
        if (argv['content'] !== undefined) input.content = argv['content'];
        if (argv['description'] !== undefined) input.description = argv['description'];
        if (argv['frequency-resolution'] !== undefined) input.frequencyResolution = argv['frequency-resolution'];
        if (argv['icon'] !== undefined) input.icon = argv['icon'];
        if (argv['name'] !== undefined) input.name = argv['name'];
        if (argv['owner-id'] !== undefined) input.ownerId = argv['owner-id'];
        if (argv['sort-order'] !== undefined) input.sortOrder = argv['sort-order'];
        if (argv['status'] !== undefined) input.status = argv['status'];
        if (argv['target-date'] !== undefined) input.targetDate = argv['target-date'];
        if (argv['target-date-resolution'] !== undefined) input.targetDateResolution = argv['target-date-resolution'];
        if (argv['trashed'] !== undefined) input.trashed = argv['trashed'];
        if (argv['update-reminder-frequency'] !== undefined) input.updateReminderFrequency = argv['update-reminder-frequency'];
        if (argv['update-reminder-frequency-in-weeks'] !== undefined) input.updateReminderFrequencyInWeeks = argv['update-reminder-frequency-in-weeks'];
        if (argv['update-reminders-day'] !== undefined) input.updateRemindersDay = argv['update-reminders-day'];
        if (argv['update-reminders-hour'] !== undefined) input.updateRemindersHour = argv['update-reminders-hour'];
        variables.input = input;
      }
      const result = await request(initiativeUpdateMutation, variables);
      render(result.initiativeUpdate, { json: argv.json });
    } catch (err) {
      handleError(err);
    }
  });

  // mutation: initiativeUpdateArchive
  yargs.command('archive <id>', 'Archives an initiative update.', (yargs) => {
    yargs.positional('id', { type: 'string', describe: 'The identifier of the initiative update to archive.' });
    return yargs;
  }, async (argv) => {
    try {
      const variables = {};
      variables.id = argv.id;
      const result = await request(initiativeUpdateArchive, variables);
      render(result.initiativeUpdateArchive, { json: argv.json });
    } catch (err) {
      handleError(err);
    }
  });

  // mutation: initiativeUpdateCreate
  yargs.command('create', 'Creates a initiative update.', (yargs) => {
    yargs.option('body', { type: 'string', describe: 'The content of the update in markdown format.' });
    yargs.option('body-data', { type: 'string', describe: '[Internal] The content of the update as a Prosemirror document.' });
    yargs.option('health', { type: 'string', choices: ["atRisk","offTrack","onTrack"], describe: 'The health of the initiative at the time of the update.' });
    yargs.option('id', { type: 'string', describe: 'The identifier in UUID v4 format. If none is provided, the backend will gener...' });
    yargs.option('initiative-id', { type: 'string', demandOption: true, describe: 'The initiative to associate the update with.' });
    yargs.option('is-diff-hidden', { type: 'boolean', describe: 'Whether the diff between the current update and the previous one should be hi...' });
    yargs.option('input-json', { type: 'string', describe: 'Full input as JSON (or @file.json)' });
    return yargs;
  }, async (argv) => {
    try {
      const variables = {};
      if (argv['input-json']) {
        variables.input = parseJsonFlag(argv['input-json']);
      } else {
        const input = {};
        if (argv['body'] !== undefined) input.body = argv['body'];
        if (argv['body-data'] !== undefined) input.bodyData = parseJsonFlag(argv['body-data']);
        if (argv['health'] !== undefined) input.health = argv['health'];
        if (argv['id'] !== undefined) input.id = argv['id'];
        if (argv['initiative-id'] !== undefined) input.initiativeId = argv['initiative-id'];
        if (argv['is-diff-hidden'] !== undefined) input.isDiffHidden = argv['is-diff-hidden'];
        variables.input = input;
      }
      const result = await request(initiativeUpdateCreate, variables);
      render(result.initiativeUpdateCreate, { json: argv.json });
    } catch (err) {
      handleError(err);
    }
  });

  // mutation: initiativeUpdateUnarchive
  yargs.command('unarchive <id>', 'Unarchives an initiative update.', (yargs) => {
    yargs.positional('id', { type: 'string', describe: 'The identifier of the initiative update to unarchive.' });
    return yargs;
  }, async (argv) => {
    try {
      const variables = {};
      variables.id = argv.id;
      const result = await request(initiativeUpdateUnarchive, variables);
      render(result.initiativeUpdateUnarchive, { json: argv.json });
    } catch (err) {
      handleError(err);
    }
  });

  // mutation: initiativeUpdateUpdate
  yargs.command('update <id>', 'Updates an update.', (yargs) => {
    yargs.positional('id', { type: 'string', describe: 'The identifier of the update to update.' });
    yargs.option('body', { type: 'string', describe: 'The content of the update in markdown format.' });
    yargs.option('body-data', { type: 'string', describe: 'The content of the update as a Prosemirror document.' });
    yargs.option('health', { type: 'string', choices: ["atRisk","offTrack","onTrack"], describe: 'The health of the initiative at the time of the update.' });
    yargs.option('is-diff-hidden', { type: 'boolean', describe: 'Whether the diff between the current update and the previous one should be hi...' });
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
        if (argv['body'] !== undefined) input.body = argv['body'];
        if (argv['body-data'] !== undefined) input.bodyData = parseJsonFlag(argv['body-data']);
        if (argv['health'] !== undefined) input.health = argv['health'];
        if (argv['is-diff-hidden'] !== undefined) input.isDiffHidden = argv['is-diff-hidden'];
        variables.input = input;
      }
      const result = await request(initiativeUpdateUpdate, variables);
      render(result.initiativeUpdateUpdate, { json: argv.json });
    } catch (err) {
      handleError(err);
    }
  });

  return yargs.demandCommand(1, 'Specify a subcommand').strict();
}

export function handler() {}
