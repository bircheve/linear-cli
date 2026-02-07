// AUTO-GENERATED — do not edit. Run `npm run generate` to regenerate.
import { request } from '../client.js';
import { handleError } from '../error.js';
import { render } from '../output.js';
import { fetchAllPages } from '../pagination.js';
import { parseJsonFlag, kebabToCamel } from '../flag-utils.js';
import { columns } from '../generated/columns.js';

import { projectUpdate as projectUpdateQuery } from '../generated/queries.js';
import { projectUpdate as projectUpdateMutation, projectUpdateArchive, projectUpdateCreate, projectUpdateDelete, projectUpdateUnarchive, projectUpdateUpdate } from '../generated/mutations.js';

export const command = 'project-update <command>';
export const describe = 'project-update commands';

export function builder(yargs) {

  // query: projectUpdate
  yargs.command('get <id>', 'A specific project update.', (yargs) => {
    yargs.positional('id', { type: 'string', describe: 'The identifier of the project update to retrieve.' });
    return yargs;
  }, async (argv) => {
    try {
      const variables = {};
      variables.id = argv.id;
      const result = await request(projectUpdateQuery, variables);
      render(result.projectUpdate, { json: argv.json, columnConfig: columns['ProjectUpdate'] });
    } catch (err) {
      handleError(err);
    }
  });

  // mutation: projectUpdate
  yargs.command('projectUpdate <id>', 'Updates a project.', (yargs) => {
    yargs.positional('id', { type: 'string', describe: 'The identifier of the project to update. Also the identifier from the URL is accepted.' });
    yargs.option('canceled-at', { type: 'string', describe: 'The date when the project was canceled.' });
    yargs.option('color', { type: 'string', describe: 'The color of the project.' });
    yargs.option('completed-at', { type: 'string', describe: 'The date when the project was completed.' });
    yargs.option('content', { type: 'string', describe: 'The project content as markdown.' });
    yargs.option('converted-from-issue-id', { type: 'string', describe: 'The ID of the issue from which that project is created.' });
    yargs.option('description', { type: 'string', describe: 'The description for the project.' });
    yargs.option('frequency-resolution', { type: 'string', choices: ["daily","weekly"], describe: 'The frequency resolution.' });
    yargs.option('icon', { type: 'string', describe: 'The icon of the project.' });
    yargs.option('label-ids', { type: 'array', describe: 'The identifiers of the project labels associated with this project.' });
    yargs.option('last-applied-template-id', { type: 'string', describe: 'The ID of the last template applied to the project.' });
    yargs.option('lead-id', { type: 'string', describe: 'The identifier of the project lead.' });
    yargs.option('member-ids', { type: 'array', describe: 'The identifiers of the members of this project.' });
    yargs.option('name', { type: 'string', describe: 'The name of the project.' });
    yargs.option('priority', { type: 'number', describe: 'The priority of the project. 0 = No priority, 1 = Urgent, 2 = High, 3 = Norma...' });
    yargs.option('priority-sort-order', { type: 'number', describe: 'The sort order for the project within shared views, when ordered by priority.' });
    yargs.option('project-update-reminders-paused-until-at', { type: 'string', describe: 'The time until which project update reminders are paused.' });
    yargs.option('slack-issue-comments', { type: 'boolean', describe: 'Whether to send new issue comment notifications to Slack.' });
    yargs.option('slack-issue-statuses', { type: 'boolean', describe: 'Whether to send issue status update notifications to Slack.' });
    yargs.option('slack-new-issue', { type: 'boolean', describe: 'Whether to send new issue notifications to Slack.' });
    yargs.option('sort-order', { type: 'number', describe: 'The sort order for the project in shared views.' });
    yargs.option('start-date', { type: 'string', describe: 'The planned start date of the project.' });
    yargs.option('start-date-resolution', { type: 'string', choices: ["halfYear","month","quarter","year"], describe: 'The resolution of the project\'s start date.' });
    yargs.option('status-id', { type: 'string', describe: 'The ID of the project status.' });
    yargs.option('target-date', { type: 'string', describe: 'The planned target date of the project.' });
    yargs.option('target-date-resolution', { type: 'string', choices: ["halfYear","month","quarter","year"], describe: 'The resolution of the project\'s estimated completion date.' });
    yargs.option('team-ids', { type: 'array', describe: 'The identifiers of the teams this project is associated with.' });
    yargs.option('trashed', { type: 'boolean', describe: 'Whether the project has been trashed.' });
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
        if (argv['canceled-at'] !== undefined) input.canceledAt = argv['canceled-at'];
        if (argv['color'] !== undefined) input.color = argv['color'];
        if (argv['completed-at'] !== undefined) input.completedAt = argv['completed-at'];
        if (argv['content'] !== undefined) input.content = argv['content'];
        if (argv['converted-from-issue-id'] !== undefined) input.convertedFromIssueId = argv['converted-from-issue-id'];
        if (argv['description'] !== undefined) input.description = argv['description'];
        if (argv['frequency-resolution'] !== undefined) input.frequencyResolution = argv['frequency-resolution'];
        if (argv['icon'] !== undefined) input.icon = argv['icon'];
        if (argv['label-ids'] !== undefined) input.labelIds = argv['label-ids'];
        if (argv['last-applied-template-id'] !== undefined) input.lastAppliedTemplateId = argv['last-applied-template-id'];
        if (argv['lead-id'] !== undefined) input.leadId = argv['lead-id'];
        if (argv['member-ids'] !== undefined) input.memberIds = argv['member-ids'];
        if (argv['name'] !== undefined) input.name = argv['name'];
        if (argv['priority'] !== undefined) input.priority = argv['priority'];
        if (argv['priority-sort-order'] !== undefined) input.prioritySortOrder = argv['priority-sort-order'];
        if (argv['project-update-reminders-paused-until-at'] !== undefined) input.projectUpdateRemindersPausedUntilAt = argv['project-update-reminders-paused-until-at'];
        if (argv['slack-issue-comments'] !== undefined) input.slackIssueComments = argv['slack-issue-comments'];
        if (argv['slack-issue-statuses'] !== undefined) input.slackIssueStatuses = argv['slack-issue-statuses'];
        if (argv['slack-new-issue'] !== undefined) input.slackNewIssue = argv['slack-new-issue'];
        if (argv['sort-order'] !== undefined) input.sortOrder = argv['sort-order'];
        if (argv['start-date'] !== undefined) input.startDate = argv['start-date'];
        if (argv['start-date-resolution'] !== undefined) input.startDateResolution = argv['start-date-resolution'];
        if (argv['status-id'] !== undefined) input.statusId = argv['status-id'];
        if (argv['target-date'] !== undefined) input.targetDate = argv['target-date'];
        if (argv['target-date-resolution'] !== undefined) input.targetDateResolution = argv['target-date-resolution'];
        if (argv['team-ids'] !== undefined) input.teamIds = argv['team-ids'];
        if (argv['trashed'] !== undefined) input.trashed = argv['trashed'];
        if (argv['update-reminder-frequency'] !== undefined) input.updateReminderFrequency = argv['update-reminder-frequency'];
        if (argv['update-reminder-frequency-in-weeks'] !== undefined) input.updateReminderFrequencyInWeeks = argv['update-reminder-frequency-in-weeks'];
        if (argv['update-reminders-day'] !== undefined) input.updateRemindersDay = argv['update-reminders-day'];
        if (argv['update-reminders-hour'] !== undefined) input.updateRemindersHour = argv['update-reminders-hour'];
        variables.input = input;
      }
      const result = await request(projectUpdateMutation, variables);
      render(result.projectUpdate, { json: argv.json });
    } catch (err) {
      handleError(err);
    }
  });

  // mutation: projectUpdateArchive
  yargs.command('archive <id>', 'Archives a project update.', (yargs) => {
    yargs.positional('id', { type: 'string', describe: 'The identifier of the project update to archive.' });
    return yargs;
  }, async (argv) => {
    try {
      const variables = {};
      variables.id = argv.id;
      const result = await request(projectUpdateArchive, variables);
      render(result.projectUpdateArchive, { json: argv.json });
    } catch (err) {
      handleError(err);
    }
  });

  // mutation: projectUpdateCreate
  yargs.command('create', 'Creates a new project update.', (yargs) => {
    yargs.option('body', { type: 'string', describe: 'The content of the project update in markdown format.' });
    yargs.option('body-data', { type: 'string', describe: '[Internal] The content of the project update as a Prosemirror document.' });
    yargs.option('health', { type: 'string', choices: ["atRisk","offTrack","onTrack"], describe: 'The health of the project at the time of the update.' });
    yargs.option('id', { type: 'string', describe: 'The identifier. If none is provided, the backend will generate one.' });
    yargs.option('is-diff-hidden', { type: 'boolean', describe: 'Whether the diff between the current update and the previous one should be hi...' });
    yargs.option('project-id', { type: 'string', demandOption: true, describe: 'The project to associate the project update with.' });
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
        if (argv['is-diff-hidden'] !== undefined) input.isDiffHidden = argv['is-diff-hidden'];
        if (argv['project-id'] !== undefined) input.projectId = argv['project-id'];
        variables.input = input;
      }
      const result = await request(projectUpdateCreate, variables);
      render(result.projectUpdateCreate, { json: argv.json });
    } catch (err) {
      handleError(err);
    }
  });

  // mutation: projectUpdateDelete
  yargs.command('delete <id>', 'Deletes a project update.', (yargs) => {
    yargs.positional('id', { type: 'string', describe: 'The identifier of the project update to delete.' });
    return yargs;
  }, async (argv) => {
    try {
      const variables = {};
      variables.id = argv.id;
      const result = await request(projectUpdateDelete, variables);
      render(result.projectUpdateDelete, { json: argv.json });
    } catch (err) {
      handleError(err);
    }
  });

  // mutation: projectUpdateUnarchive
  yargs.command('unarchive <id>', 'Unarchives a project update.', (yargs) => {
    yargs.positional('id', { type: 'string', describe: 'The identifier of the project update to unarchive.' });
    return yargs;
  }, async (argv) => {
    try {
      const variables = {};
      variables.id = argv.id;
      const result = await request(projectUpdateUnarchive, variables);
      render(result.projectUpdateUnarchive, { json: argv.json });
    } catch (err) {
      handleError(err);
    }
  });

  // mutation: projectUpdateUpdate
  yargs.command('update <id>', 'Updates a project update.', (yargs) => {
    yargs.positional('id', { type: 'string', describe: 'The identifier of the project update to update.' });
    yargs.option('body', { type: 'string', describe: 'The content of the project update in markdown format.' });
    yargs.option('body-data', { type: 'string', describe: 'The content of the project update as a Prosemirror document.' });
    yargs.option('health', { type: 'string', choices: ["atRisk","offTrack","onTrack"], describe: 'The health of the project at the time of the update.' });
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
      const result = await request(projectUpdateUpdate, variables);
      render(result.projectUpdateUpdate, { json: argv.json });
    } catch (err) {
      handleError(err);
    }
  });

  return yargs.demandCommand(1, 'Specify a subcommand').strict();
}

export function handler() {}
