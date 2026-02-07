// AUTO-GENERATED — do not edit. Run `npm run generate` to regenerate.
import { request } from '../client.js';
import { handleError } from '../error.js';
import { render } from '../output.js';
import { fetchAllPages } from '../pagination.js';
import { parseJsonFlag, kebabToCamel } from '../flag-utils.js';
import { columns } from '../generated/columns.js';

import { archivedTeams, team, teamMemberships, teams } from '../generated/queries.js';
import { teamCreate, teamDelete, teamUnarchive, teamUpdate } from '../generated/mutations.js';

export const command = 'team <command>';
export const describe = 'team commands';

export function builder(yargs) {

  // query: archivedTeams
  yargs.command('archived', '[Internal] All archived teams of the organization.', (yargs) => {
    return yargs;
  }, async (argv) => {
    try {
      const variables = {};
      const result = await request(archivedTeams, variables);
      render(result.archivedTeams, { json: argv.json, isList: true, columnConfig: columns['Team'] });
    } catch (err) {
      handleError(err);
    }
  });

  // query: team
  yargs.command('get <id>', 'One specific team.', (yargs) => {
    yargs.positional('id', { type: 'string', describe: 'id' });
    return yargs;
  }, async (argv) => {
    try {
      const variables = {};
      variables.id = argv.id;
      const result = await request(team, variables);
      render(result.team, { json: argv.json, columnConfig: columns['Team'] });
    } catch (err) {
      handleError(err);
    }
  });

  // query: teamMemberships
  yargs.command('memberships', 'All team memberships.', (yargs) => {
    yargs.option('include-archived', { type: 'boolean', describe: 'Should archived resources be included (default: false)' });
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
      if (argv['include-archived'] !== undefined) variables.includeArchived = argv['include-archived'];
      if (argv['order-by'] !== undefined) variables.orderBy = argv['order-by'];
      if (argv.first !== undefined) variables.first = argv.first;
      if (argv.after) variables.after = argv.after;
      if (argv.last !== undefined) variables.last = argv.last;
      if (argv.before) variables.before = argv.before;

      let data;
      if (argv.all) {
        data = await fetchAllPages(request, teamMemberships, variables, 'teamMemberships');
      } else {
        const result = await request(teamMemberships, variables);
        data = result.teamMemberships?.nodes || [];
      }
      render(data, { json: argv.json, isList: true, columnConfig: columns['TeamMembership'] });
    } catch (err) {
      handleError(err);
    }
  });

  // query: teams
  yargs.command('list', 'All teams whose issues can be accessed by the user. This might be different f...', (yargs) => {
    yargs.option('filter', { type: 'string', describe: 'Filter returned teams.' });
    yargs.option('include-archived', { type: 'boolean', describe: 'Should archived resources be included (default: false)' });
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
      if (argv['filter'] !== undefined) variables.filter = argv['filter'];
      if (argv['include-archived'] !== undefined) variables.includeArchived = argv['include-archived'];
      if (argv['order-by'] !== undefined) variables.orderBy = argv['order-by'];
      if (argv['filter-json']) variables.filter = parseJsonFlag(argv['filter-json']);
      if (argv.first !== undefined) variables.first = argv.first;
      if (argv.after) variables.after = argv.after;
      if (argv.last !== undefined) variables.last = argv.last;
      if (argv.before) variables.before = argv.before;

      let data;
      if (argv.all) {
        data = await fetchAllPages(request, teams, variables, 'teams');
      } else {
        const result = await request(teams, variables);
        data = result.teams?.nodes || [];
      }
      render(data, { json: argv.json, isList: true, columnConfig: columns['Team'] });
    } catch (err) {
      handleError(err);
    }
  });

  // mutation: teamCreate
  yargs.command('create', 'Creates a new team. The user who creates the team will automatically be added...', (yargs) => {
    yargs.option('auto-archive-period', { type: 'number', describe: 'Period after which closed and completed issues are automatically archived, in...' });
    yargs.option('auto-close-period', { type: 'number', describe: 'Period after which issues are automatically closed, in months.' });
    yargs.option('auto-close-state-id', { type: 'string', describe: 'The canceled workflow state which auto closed issues will be set to.' });
    yargs.option('color', { type: 'string', describe: 'The color of the team.' });
    yargs.option('cycle-cooldown-time', { type: 'number', describe: 'The cooldown time after each cycle in weeks.' });
    yargs.option('cycle-duration', { type: 'number', describe: 'The duration of each cycle in weeks.' });
    yargs.option('cycle-issue-auto-assign-completed', { type: 'boolean', describe: 'Auto assign completed issues to current active cycle setting.' });
    yargs.option('cycle-issue-auto-assign-started', { type: 'boolean', describe: 'Auto assign started issues to current active cycle setting.' });
    yargs.option('cycle-lock-to-active', { type: 'boolean', describe: 'Only allow issues issues with cycles in Active Issues.' });
    yargs.option('cycle-start-day', { type: 'number', describe: 'The day of the week that a new cycle starts.' });
    yargs.option('cycles-enabled', { type: 'boolean', describe: 'Whether the team uses cycles.' });
    yargs.option('default-issue-estimate', { type: 'number', describe: 'What to use as an default estimate for unestimated issues.' });
    yargs.option('default-project-template-id', { type: 'string', describe: 'The identifier of the default project template of this team.' });
    yargs.option('default-template-for-members-id', { type: 'string', describe: 'The identifier of the default template for members of this team.' });
    yargs.option('default-template-for-non-members-id', { type: 'string', describe: 'The identifier of the default template for non-members of this team.' });
    yargs.option('description', { type: 'string', describe: 'The description of the team.' });
    yargs.option('group-issue-history', { type: 'boolean', describe: 'Whether to group recent issue history entries.' });
    yargs.option('icon', { type: 'string', describe: 'The icon of the team.' });
    yargs.option('id', { type: 'string', describe: 'The identifier in UUID v4 format. If none is provided, the backend will gener...' });
    yargs.option('inherit-issue-estimation', { type: 'boolean', describe: 'Whether the team should inherit estimation settings from its parent. Only app...' });
    yargs.option('inherit-product-intelligence-scope', { type: 'boolean', describe: '[Internal] Whether the team should inherit its product intelligence scope fro...' });
    yargs.option('inherit-workflow-statuses', { type: 'boolean', describe: '[Internal] Whether the team should inherit workflow statuses from its parent.' });
    yargs.option('issue-estimation-allow-zero', { type: 'boolean', describe: 'Whether to allow zeros in issues estimates.' });
    yargs.option('issue-estimation-extended', { type: 'boolean', describe: 'Whether to add additional points to the estimate scale.' });
    yargs.option('issue-estimation-type', { type: 'string', describe: 'The issue estimation type to use. Must be one of "notUsed", "exponential", "f...' });
    yargs.option('key', { type: 'string', describe: 'The key of the team. If not given, the key will be generated based on the nam...' });
    yargs.option('marked-as-duplicate-workflow-state-id', { type: 'string', describe: 'The workflow state into which issues are moved when they are marked as a dupl...' });
    yargs.option('name', { type: 'string', demandOption: true, describe: 'The name of the team.' });
    yargs.option('parent-id', { type: 'string', describe: 'The parent team ID.' });
    yargs.option('private', { type: 'boolean', describe: 'Internal. Whether the team is private or not.' });
    yargs.option('product-intelligence-scope', { type: 'string', choices: ["none","team","teamHierarchy","workspace"], describe: '[Internal] The scope of product intelligence suggestion data for the team.' });
    yargs.option('require-priority-to-leave-triage', { type: 'boolean', describe: 'Whether an issue needs to have a priority set before leaving triage.' });
    yargs.option('set-issue-sort-order-on-state-change', { type: 'string', describe: 'Whether to move issues to bottom of the column when changing state.' });
    yargs.option('timezone', { type: 'string', describe: 'The timezone of the team.' });
    yargs.option('triage-enabled', { type: 'boolean', describe: 'Whether triage mode is enabled for the team.' });
    yargs.option('upcoming-cycle-count', { type: 'number', describe: 'How many upcoming cycles to create.' });
    yargs.option('copy-settings-from-team-id', { type: 'string', describe: 'The team id to copy settings from, if any.' });
    yargs.option('input-json', { type: 'string', describe: 'Full input as JSON (or @file.json)' });
    return yargs;
  }, async (argv) => {
    try {
      const variables = {};
      if (argv['input-json']) {
        variables.input = parseJsonFlag(argv['input-json']);
      } else {
        const input = {};
        if (argv['auto-archive-period'] !== undefined) input.autoArchivePeriod = argv['auto-archive-period'];
        if (argv['auto-close-period'] !== undefined) input.autoClosePeriod = argv['auto-close-period'];
        if (argv['auto-close-state-id'] !== undefined) input.autoCloseStateId = argv['auto-close-state-id'];
        if (argv['color'] !== undefined) input.color = argv['color'];
        if (argv['cycle-cooldown-time'] !== undefined) input.cycleCooldownTime = argv['cycle-cooldown-time'];
        if (argv['cycle-duration'] !== undefined) input.cycleDuration = argv['cycle-duration'];
        if (argv['cycle-issue-auto-assign-completed'] !== undefined) input.cycleIssueAutoAssignCompleted = argv['cycle-issue-auto-assign-completed'];
        if (argv['cycle-issue-auto-assign-started'] !== undefined) input.cycleIssueAutoAssignStarted = argv['cycle-issue-auto-assign-started'];
        if (argv['cycle-lock-to-active'] !== undefined) input.cycleLockToActive = argv['cycle-lock-to-active'];
        if (argv['cycle-start-day'] !== undefined) input.cycleStartDay = argv['cycle-start-day'];
        if (argv['cycles-enabled'] !== undefined) input.cyclesEnabled = argv['cycles-enabled'];
        if (argv['default-issue-estimate'] !== undefined) input.defaultIssueEstimate = argv['default-issue-estimate'];
        if (argv['default-project-template-id'] !== undefined) input.defaultProjectTemplateId = argv['default-project-template-id'];
        if (argv['default-template-for-members-id'] !== undefined) input.defaultTemplateForMembersId = argv['default-template-for-members-id'];
        if (argv['default-template-for-non-members-id'] !== undefined) input.defaultTemplateForNonMembersId = argv['default-template-for-non-members-id'];
        if (argv['description'] !== undefined) input.description = argv['description'];
        if (argv['group-issue-history'] !== undefined) input.groupIssueHistory = argv['group-issue-history'];
        if (argv['icon'] !== undefined) input.icon = argv['icon'];
        if (argv['id'] !== undefined) input.id = argv['id'];
        if (argv['inherit-issue-estimation'] !== undefined) input.inheritIssueEstimation = argv['inherit-issue-estimation'];
        if (argv['inherit-product-intelligence-scope'] !== undefined) input.inheritProductIntelligenceScope = argv['inherit-product-intelligence-scope'];
        if (argv['inherit-workflow-statuses'] !== undefined) input.inheritWorkflowStatuses = argv['inherit-workflow-statuses'];
        if (argv['issue-estimation-allow-zero'] !== undefined) input.issueEstimationAllowZero = argv['issue-estimation-allow-zero'];
        if (argv['issue-estimation-extended'] !== undefined) input.issueEstimationExtended = argv['issue-estimation-extended'];
        if (argv['issue-estimation-type'] !== undefined) input.issueEstimationType = argv['issue-estimation-type'];
        if (argv['key'] !== undefined) input.key = argv['key'];
        if (argv['marked-as-duplicate-workflow-state-id'] !== undefined) input.markedAsDuplicateWorkflowStateId = argv['marked-as-duplicate-workflow-state-id'];
        if (argv['name'] !== undefined) input.name = argv['name'];
        if (argv['parent-id'] !== undefined) input.parentId = argv['parent-id'];
        if (argv['private'] !== undefined) input.private = argv['private'];
        if (argv['product-intelligence-scope'] !== undefined) input.productIntelligenceScope = argv['product-intelligence-scope'];
        if (argv['require-priority-to-leave-triage'] !== undefined) input.requirePriorityToLeaveTriage = argv['require-priority-to-leave-triage'];
        if (argv['set-issue-sort-order-on-state-change'] !== undefined) input.setIssueSortOrderOnStateChange = argv['set-issue-sort-order-on-state-change'];
        if (argv['timezone'] !== undefined) input.timezone = argv['timezone'];
        if (argv['triage-enabled'] !== undefined) input.triageEnabled = argv['triage-enabled'];
        if (argv['upcoming-cycle-count'] !== undefined) input.upcomingCycleCount = argv['upcoming-cycle-count'];
        variables.input = input;
      }
      if (argv['copy-settings-from-team-id'] !== undefined) variables.copySettingsFromTeamId = argv['copy-settings-from-team-id'];
      const result = await request(teamCreate, variables);
      render(result.teamCreate, { json: argv.json });
    } catch (err) {
      handleError(err);
    }
  });

  // mutation: teamDelete
  yargs.command('delete <id>', 'Deletes a team.', (yargs) => {
    yargs.positional('id', { type: 'string', describe: 'The identifier of the team to delete.' });
    return yargs;
  }, async (argv) => {
    try {
      const variables = {};
      variables.id = argv.id;
      const result = await request(teamDelete, variables);
      render(result.teamDelete, { json: argv.json });
    } catch (err) {
      handleError(err);
    }
  });

  // mutation: teamUnarchive
  yargs.command('unarchive <id>', 'Unarchives a team and cancels deletion.', (yargs) => {
    yargs.positional('id', { type: 'string', describe: 'The identifier of the team to delete.' });
    return yargs;
  }, async (argv) => {
    try {
      const variables = {};
      variables.id = argv.id;
      const result = await request(teamUnarchive, variables);
      render(result.teamUnarchive, { json: argv.json });
    } catch (err) {
      handleError(err);
    }
  });

  // mutation: teamUpdate
  yargs.command('update <id>', 'Updates a team.', (yargs) => {
    yargs.positional('id', { type: 'string', describe: 'The identifier of the team to update.' });
    yargs.option('ai-thread-summaries-enabled', { type: 'boolean', describe: 'Whether to enable resolved thread AI summaries.' });
    yargs.option('auto-archive-period', { type: 'number', describe: 'Period after which closed and completed issues are automatically archived, in...' });
    yargs.option('auto-close-child-issues', { type: 'boolean', describe: '[INTERNAL] Whether to automatically close all sub-issues when a parent issue ...' });
    yargs.option('auto-close-parent-issues', { type: 'boolean', describe: '[INTERNAL] Whether to automatically close a parent issue in this team if all ...' });
    yargs.option('auto-close-period', { type: 'number', describe: 'Period after which issues are automatically closed, in months.' });
    yargs.option('auto-close-state-id', { type: 'string', describe: 'The canceled workflow state which auto closed issues will be set to.' });
    yargs.option('color', { type: 'string', describe: 'The color of the team.' });
    yargs.option('cycle-cooldown-time', { type: 'number', describe: 'The cooldown time after each cycle in weeks.' });
    yargs.option('cycle-duration', { type: 'number', describe: 'The duration of each cycle in weeks.' });
    yargs.option('cycle-enabled-start-date', { type: 'string', describe: 'The date to begin cycles on.' });
    yargs.option('cycle-issue-auto-assign-completed', { type: 'boolean', describe: 'Auto assign completed issues to current active cycle setting.' });
    yargs.option('cycle-issue-auto-assign-started', { type: 'boolean', describe: 'Auto assign started issues to current active cycle setting.' });
    yargs.option('cycle-lock-to-active', { type: 'boolean', describe: 'Only allow issues with cycles in Active Issues.' });
    yargs.option('cycle-start-day', { type: 'number', describe: 'The day of the week that a new cycle starts.' });
    yargs.option('cycles-enabled', { type: 'boolean', describe: 'Whether the team uses cycles.' });
    yargs.option('default-issue-estimate', { type: 'number', describe: 'What to use as an default estimate for unestimated issues.' });
    yargs.option('default-issue-state-id', { type: 'string', describe: 'Default status for newly created issues.' });
    yargs.option('default-project-template-id', { type: 'string', describe: 'The identifier of the default project template of this team.' });
    yargs.option('default-template-for-members-id', { type: 'string', describe: 'The identifier of the default template for members of this team.' });
    yargs.option('default-template-for-non-members-id', { type: 'string', describe: 'The identifier of the default template for non-members of this team.' });
    yargs.option('description', { type: 'string', describe: 'The description of the team.' });
    yargs.option('group-issue-history', { type: 'boolean', describe: 'Whether to group recent issue history entries.' });
    yargs.option('icon', { type: 'string', describe: 'The icon of the team.' });
    yargs.option('inherit-issue-estimation', { type: 'boolean', describe: 'Whether the team should inherit estimation settings from its parent. Only app...' });
    yargs.option('inherit-product-intelligence-scope', { type: 'boolean', describe: '[Internal] Whether the team should inherit its product intelligence scope fro...' });
    yargs.option('inherit-workflow-statuses', { type: 'boolean', describe: '[Internal] Whether the team should inherit workflow statuses from its parent.' });
    yargs.option('issue-estimation-allow-zero', { type: 'boolean', describe: 'Whether to allow zeros in issues estimates.' });
    yargs.option('issue-estimation-extended', { type: 'boolean', describe: 'Whether to add additional points to the estimate scale.' });
    yargs.option('issue-estimation-type', { type: 'string', describe: 'The issue estimation type to use. Must be one of "notUsed", "exponential", "f...' });
    yargs.option('join-by-default', { type: 'boolean', describe: 'Whether new users should join this team by default. Mutation restricted to wo...' });
    yargs.option('key', { type: 'string', describe: 'The key of the team.' });
    yargs.option('marked-as-duplicate-workflow-state-id', { type: 'string', describe: 'The workflow state into which issues are moved when they are marked as a dupl...' });
    yargs.option('name', { type: 'string', describe: 'The name of the team.' });
    yargs.option('parent-id', { type: 'string', describe: 'The parent team ID.' });
    yargs.option('private', { type: 'boolean', describe: 'Whether the team is private or not.' });
    yargs.option('product-intelligence-scope', { type: 'string', choices: ["none","team","teamHierarchy","workspace"], describe: '[Internal] The scope of product intelligence suggestion data for the team.' });
    yargs.option('require-priority-to-leave-triage', { type: 'boolean', describe: 'Whether an issue needs to have a priority set before leaving triage.' });
    yargs.option('scim-managed', { type: 'boolean', describe: 'Whether the team is managed by SCIM integration. Mutation restricted to works...' });
    yargs.option('set-issue-sort-order-on-state-change', { type: 'string', describe: 'Whether to move issues to bottom of the column when changing state.' });
    yargs.option('slack-issue-comments', { type: 'boolean', describe: 'Whether to send new issue comment notifications to Slack.' });
    yargs.option('slack-issue-statuses', { type: 'boolean', describe: 'Whether to send issue status update notifications to Slack.' });
    yargs.option('slack-new-issue', { type: 'boolean', describe: 'Whether to send new issue notifications to Slack.' });
    yargs.option('timezone', { type: 'string', describe: 'The timezone of the team.' });
    yargs.option('triage-enabled', { type: 'boolean', describe: 'Whether triage mode is enabled for the team.' });
    yargs.option('upcoming-cycle-count', { type: 'number', describe: 'How many upcoming cycles to create.' });
    yargs.option('mapping', { type: 'string', describe: '[INTERNAL] Mapping of existing team entities to those inherited from the pare...' });
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
        if (argv['ai-thread-summaries-enabled'] !== undefined) input.aiThreadSummariesEnabled = argv['ai-thread-summaries-enabled'];
        if (argv['auto-archive-period'] !== undefined) input.autoArchivePeriod = argv['auto-archive-period'];
        if (argv['auto-close-child-issues'] !== undefined) input.autoCloseChildIssues = argv['auto-close-child-issues'];
        if (argv['auto-close-parent-issues'] !== undefined) input.autoCloseParentIssues = argv['auto-close-parent-issues'];
        if (argv['auto-close-period'] !== undefined) input.autoClosePeriod = argv['auto-close-period'];
        if (argv['auto-close-state-id'] !== undefined) input.autoCloseStateId = argv['auto-close-state-id'];
        if (argv['color'] !== undefined) input.color = argv['color'];
        if (argv['cycle-cooldown-time'] !== undefined) input.cycleCooldownTime = argv['cycle-cooldown-time'];
        if (argv['cycle-duration'] !== undefined) input.cycleDuration = argv['cycle-duration'];
        if (argv['cycle-enabled-start-date'] !== undefined) input.cycleEnabledStartDate = argv['cycle-enabled-start-date'];
        if (argv['cycle-issue-auto-assign-completed'] !== undefined) input.cycleIssueAutoAssignCompleted = argv['cycle-issue-auto-assign-completed'];
        if (argv['cycle-issue-auto-assign-started'] !== undefined) input.cycleIssueAutoAssignStarted = argv['cycle-issue-auto-assign-started'];
        if (argv['cycle-lock-to-active'] !== undefined) input.cycleLockToActive = argv['cycle-lock-to-active'];
        if (argv['cycle-start-day'] !== undefined) input.cycleStartDay = argv['cycle-start-day'];
        if (argv['cycles-enabled'] !== undefined) input.cyclesEnabled = argv['cycles-enabled'];
        if (argv['default-issue-estimate'] !== undefined) input.defaultIssueEstimate = argv['default-issue-estimate'];
        if (argv['default-issue-state-id'] !== undefined) input.defaultIssueStateId = argv['default-issue-state-id'];
        if (argv['default-project-template-id'] !== undefined) input.defaultProjectTemplateId = argv['default-project-template-id'];
        if (argv['default-template-for-members-id'] !== undefined) input.defaultTemplateForMembersId = argv['default-template-for-members-id'];
        if (argv['default-template-for-non-members-id'] !== undefined) input.defaultTemplateForNonMembersId = argv['default-template-for-non-members-id'];
        if (argv['description'] !== undefined) input.description = argv['description'];
        if (argv['group-issue-history'] !== undefined) input.groupIssueHistory = argv['group-issue-history'];
        if (argv['icon'] !== undefined) input.icon = argv['icon'];
        if (argv['inherit-issue-estimation'] !== undefined) input.inheritIssueEstimation = argv['inherit-issue-estimation'];
        if (argv['inherit-product-intelligence-scope'] !== undefined) input.inheritProductIntelligenceScope = argv['inherit-product-intelligence-scope'];
        if (argv['inherit-workflow-statuses'] !== undefined) input.inheritWorkflowStatuses = argv['inherit-workflow-statuses'];
        if (argv['issue-estimation-allow-zero'] !== undefined) input.issueEstimationAllowZero = argv['issue-estimation-allow-zero'];
        if (argv['issue-estimation-extended'] !== undefined) input.issueEstimationExtended = argv['issue-estimation-extended'];
        if (argv['issue-estimation-type'] !== undefined) input.issueEstimationType = argv['issue-estimation-type'];
        if (argv['join-by-default'] !== undefined) input.joinByDefault = argv['join-by-default'];
        if (argv['key'] !== undefined) input.key = argv['key'];
        if (argv['marked-as-duplicate-workflow-state-id'] !== undefined) input.markedAsDuplicateWorkflowStateId = argv['marked-as-duplicate-workflow-state-id'];
        if (argv['name'] !== undefined) input.name = argv['name'];
        if (argv['parent-id'] !== undefined) input.parentId = argv['parent-id'];
        if (argv['private'] !== undefined) input.private = argv['private'];
        if (argv['product-intelligence-scope'] !== undefined) input.productIntelligenceScope = argv['product-intelligence-scope'];
        if (argv['require-priority-to-leave-triage'] !== undefined) input.requirePriorityToLeaveTriage = argv['require-priority-to-leave-triage'];
        if (argv['scim-managed'] !== undefined) input.scimManaged = argv['scim-managed'];
        if (argv['set-issue-sort-order-on-state-change'] !== undefined) input.setIssueSortOrderOnStateChange = argv['set-issue-sort-order-on-state-change'];
        if (argv['slack-issue-comments'] !== undefined) input.slackIssueComments = argv['slack-issue-comments'];
        if (argv['slack-issue-statuses'] !== undefined) input.slackIssueStatuses = argv['slack-issue-statuses'];
        if (argv['slack-new-issue'] !== undefined) input.slackNewIssue = argv['slack-new-issue'];
        if (argv['timezone'] !== undefined) input.timezone = argv['timezone'];
        if (argv['triage-enabled'] !== undefined) input.triageEnabled = argv['triage-enabled'];
        if (argv['upcoming-cycle-count'] !== undefined) input.upcomingCycleCount = argv['upcoming-cycle-count'];
        variables.input = input;
      }
      if (argv['mapping'] !== undefined) variables.mapping = parseJsonFlag(argv['mapping']);
      const result = await request(teamUpdate, variables);
      render(result.teamUpdate, { json: argv.json });
    } catch (err) {
      handleError(err);
    }
  });

  return yargs.demandCommand(1, 'Specify a subcommand').strict();
}

export function handler() {}
