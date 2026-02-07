// AUTO-GENERATED — do not edit. Run `npm run generate` to regenerate.
import { request } from '../client.js';
import { handleError } from '../error.js';
import { render } from '../output.js';
import { fetchAllPages } from '../pagination.js';
import { parseJsonFlag, kebabToCamel } from '../flag-utils.js';

import { integrationsSettings } from '../generated/queries.js';
import { integrationsSettingsCreate, integrationsSettingsUpdate } from '../generated/mutations.js';

export const command = 'integrations-settings <command>';
export const describe = 'integrations-settings commands';

export function builder(yargs) {

  // query: integrationsSettings
  yargs.command('get <id>', 'One specific set of settings.', (yargs) => {
    yargs.positional('id', { type: 'string', describe: 'id' });
    return yargs;
  }, async (argv) => {
    try {
      const variables = {};
      variables.id = argv.id;
      const result = await request(integrationsSettings, variables);
      render(result.integrationsSettings, { json: argv.json });
    } catch (err) {
      handleError(err);
    }
  });

  // mutation: integrationsSettingsCreate
  yargs.command('create', 'Creates new settings for one or more integrations.', (yargs) => {
    yargs.option('context-view-type', { type: 'string', choices: ["activeCycle","activeIssues","backlog","triage","upcomingCycle"], describe: 'The type of view to which the integration settings context is associated with.' });
    yargs.option('custom-view-id', { type: 'string', describe: 'The identifier of the custom view to create settings for.' });
    yargs.option('id', { type: 'string', describe: 'The identifier in UUID v4 format. If none is provided, the backend will gener...' });
    yargs.option('initiative-id', { type: 'string', describe: 'The identifier of the initiative to create settings for.' });
    yargs.option('project-id', { type: 'string', describe: 'The identifier of the project to create settings for.' });
    yargs.option('slack-initiative-update-created', { type: 'boolean', describe: 'Whether to send a Slack message when an initiative update is created.' });
    yargs.option('slack-issue-added-to-triage', { type: 'boolean', describe: 'Whether to send a Slack message when a new issue is added to triage.' });
    yargs.option('slack-issue-added-to-view', { type: 'boolean', describe: 'Whether to send a Slack message when an issue is added to a view.' });
    yargs.option('slack-issue-created', { type: 'boolean', describe: 'Whether to send a Slack message when a new issue is created for the project o...' });
    yargs.option('slack-issue-new-comment', { type: 'boolean', describe: 'Whether to send a Slack message when a comment is created on any of the proje...' });
    yargs.option('slack-issue-sla-breached', { type: 'boolean', describe: 'Whether to receive notification when an SLA has breached on Slack.' });
    yargs.option('slack-issue-sla-high-risk', { type: 'boolean', describe: 'Whether to send a Slack message when an SLA is at high risk.' });
    yargs.option('slack-issue-status-changed-all', { type: 'boolean', describe: 'Whether to send a Slack message when any of the project or team\'s issues has ...' });
    yargs.option('slack-issue-status-changed-done', { type: 'boolean', describe: 'Whether to send a Slack message when any of the project or team\'s issues chan...' });
    yargs.option('slack-project-update-created', { type: 'boolean', describe: 'Whether to send a Slack message when a project update is created.' });
    yargs.option('slack-project-update-created-to-team', { type: 'boolean', describe: 'Whether to send a Slack message when a project update is created to team chan...' });
    yargs.option('slack-project-update-created-to-workspace', { type: 'boolean', describe: 'Whether to send a Slack message when a project update is created to workspace...' });
    yargs.option('team-id', { type: 'string', describe: 'The identifier of the team to create settings for.' });
    yargs.option('input-json', { type: 'string', describe: 'Full input as JSON (or @file.json)' });
    return yargs;
  }, async (argv) => {
    try {
      const variables = {};
      if (argv['input-json']) {
        variables.input = parseJsonFlag(argv['input-json']);
      } else {
        const input = {};
        if (argv['context-view-type'] !== undefined) input.contextViewType = argv['context-view-type'];
        if (argv['custom-view-id'] !== undefined) input.customViewId = argv['custom-view-id'];
        if (argv['id'] !== undefined) input.id = argv['id'];
        if (argv['initiative-id'] !== undefined) input.initiativeId = argv['initiative-id'];
        if (argv['project-id'] !== undefined) input.projectId = argv['project-id'];
        if (argv['slack-initiative-update-created'] !== undefined) input.slackInitiativeUpdateCreated = argv['slack-initiative-update-created'];
        if (argv['slack-issue-added-to-triage'] !== undefined) input.slackIssueAddedToTriage = argv['slack-issue-added-to-triage'];
        if (argv['slack-issue-added-to-view'] !== undefined) input.slackIssueAddedToView = argv['slack-issue-added-to-view'];
        if (argv['slack-issue-created'] !== undefined) input.slackIssueCreated = argv['slack-issue-created'];
        if (argv['slack-issue-new-comment'] !== undefined) input.slackIssueNewComment = argv['slack-issue-new-comment'];
        if (argv['slack-issue-sla-breached'] !== undefined) input.slackIssueSlaBreached = argv['slack-issue-sla-breached'];
        if (argv['slack-issue-sla-high-risk'] !== undefined) input.slackIssueSlaHighRisk = argv['slack-issue-sla-high-risk'];
        if (argv['slack-issue-status-changed-all'] !== undefined) input.slackIssueStatusChangedAll = argv['slack-issue-status-changed-all'];
        if (argv['slack-issue-status-changed-done'] !== undefined) input.slackIssueStatusChangedDone = argv['slack-issue-status-changed-done'];
        if (argv['slack-project-update-created'] !== undefined) input.slackProjectUpdateCreated = argv['slack-project-update-created'];
        if (argv['slack-project-update-created-to-team'] !== undefined) input.slackProjectUpdateCreatedToTeam = argv['slack-project-update-created-to-team'];
        if (argv['slack-project-update-created-to-workspace'] !== undefined) input.slackProjectUpdateCreatedToWorkspace = argv['slack-project-update-created-to-workspace'];
        if (argv['team-id'] !== undefined) input.teamId = argv['team-id'];
        variables.input = input;
      }
      const result = await request(integrationsSettingsCreate, variables);
      render(result.integrationsSettingsCreate, { json: argv.json });
    } catch (err) {
      handleError(err);
    }
  });

  // mutation: integrationsSettingsUpdate
  yargs.command('update <id>', 'Updates settings related to integrations for a project or a team.', (yargs) => {
    yargs.positional('id', { type: 'string', describe: 'The identifier of the settings to update.' });
    yargs.option('slack-initiative-update-created', { type: 'boolean', describe: 'Whether to send a Slack message when an initiative update is created.' });
    yargs.option('slack-issue-added-to-triage', { type: 'boolean', describe: 'Whether to send a Slack message when a new issue is added to triage.' });
    yargs.option('slack-issue-added-to-view', { type: 'boolean', describe: 'Whether to send a Slack message when an issue is added to a view.' });
    yargs.option('slack-issue-created', { type: 'boolean', describe: 'Whether to send a Slack message when a new issue is created for the project o...' });
    yargs.option('slack-issue-new-comment', { type: 'boolean', describe: 'Whether to send a Slack message when a comment is created on any of the proje...' });
    yargs.option('slack-issue-sla-breached', { type: 'boolean', describe: 'Whether to receive notification when an SLA has breached on Slack.' });
    yargs.option('slack-issue-sla-high-risk', { type: 'boolean', describe: 'Whether to send a Slack message when an SLA is at high risk.' });
    yargs.option('slack-issue-status-changed-all', { type: 'boolean', describe: 'Whether to send a Slack message when any of the project or team\'s issues has ...' });
    yargs.option('slack-issue-status-changed-done', { type: 'boolean', describe: 'Whether to send a Slack message when any of the project or team\'s issues chan...' });
    yargs.option('slack-project-update-created', { type: 'boolean', describe: 'Whether to send a Slack message when a project update is created.' });
    yargs.option('slack-project-update-created-to-team', { type: 'boolean', describe: 'Whether to send a Slack message when a project update is created to team chan...' });
    yargs.option('slack-project-update-created-to-workspace', { type: 'boolean', describe: 'Whether to send a Slack message when a project update is created to workspace...' });
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
        if (argv['slack-initiative-update-created'] !== undefined) input.slackInitiativeUpdateCreated = argv['slack-initiative-update-created'];
        if (argv['slack-issue-added-to-triage'] !== undefined) input.slackIssueAddedToTriage = argv['slack-issue-added-to-triage'];
        if (argv['slack-issue-added-to-view'] !== undefined) input.slackIssueAddedToView = argv['slack-issue-added-to-view'];
        if (argv['slack-issue-created'] !== undefined) input.slackIssueCreated = argv['slack-issue-created'];
        if (argv['slack-issue-new-comment'] !== undefined) input.slackIssueNewComment = argv['slack-issue-new-comment'];
        if (argv['slack-issue-sla-breached'] !== undefined) input.slackIssueSlaBreached = argv['slack-issue-sla-breached'];
        if (argv['slack-issue-sla-high-risk'] !== undefined) input.slackIssueSlaHighRisk = argv['slack-issue-sla-high-risk'];
        if (argv['slack-issue-status-changed-all'] !== undefined) input.slackIssueStatusChangedAll = argv['slack-issue-status-changed-all'];
        if (argv['slack-issue-status-changed-done'] !== undefined) input.slackIssueStatusChangedDone = argv['slack-issue-status-changed-done'];
        if (argv['slack-project-update-created'] !== undefined) input.slackProjectUpdateCreated = argv['slack-project-update-created'];
        if (argv['slack-project-update-created-to-team'] !== undefined) input.slackProjectUpdateCreatedToTeam = argv['slack-project-update-created-to-team'];
        if (argv['slack-project-update-created-to-workspace'] !== undefined) input.slackProjectUpdateCreatedToWorkspace = argv['slack-project-update-created-to-workspace'];
        variables.input = input;
      }
      const result = await request(integrationsSettingsUpdate, variables);
      render(result.integrationsSettingsUpdate, { json: argv.json });
    } catch (err) {
      handleError(err);
    }
  });

  return yargs.demandCommand(1, 'Specify a subcommand').strict();
}

export function handler() {}
