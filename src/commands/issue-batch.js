// AUTO-GENERATED — do not edit. Run `npm run generate` to regenerate.
import { request } from '../client.js';
import { handleError } from '../error.js';
import { render } from '../output.js';
import { fetchAllPages } from '../pagination.js';
import { parseJsonFlag, kebabToCamel } from '../flag-utils.js';
import { columns } from '../generated/columns.js';

import { issueBatchCreate, issueBatchUpdate } from '../generated/mutations.js';

export const command = 'issue-batch <command>';
export const describe = 'issue-batch commands';

export function builder(yargs) {

  // mutation: issueBatchCreate
  yargs.command('create', 'Creates a list of issues in one transaction.', (yargs) => {
    yargs.option('issues', { type: 'array', demandOption: true, describe: 'The issues to create.' });
    yargs.option('input-json', { type: 'string', describe: 'Full input as JSON (or @file.json)' });
    return yargs;
  }, async (argv) => {
    try {
      const variables = {};
      if (argv['input-json']) {
        variables.input = parseJsonFlag(argv['input-json']);
      } else {
        const input = {};
        if (argv['issues'] !== undefined) input.issues = argv['issues'];
        variables.input = input;
      }
      const result = await request(issueBatchCreate, variables);
      render(result.issueBatchCreate, { json: argv.json });
    } catch (err) {
      handleError(err);
    }
  });

  // mutation: issueBatchUpdate
  yargs.command('update', 'Updates multiple issues at once.', (yargs) => {
    yargs.option('added-label-ids', { type: 'array', describe: 'The identifiers of the issue labels to be added to this issue.' });
    yargs.option('assignee-id', { type: 'string', describe: 'The identifier of the user to assign the issue to.' });
    yargs.option('auto-closed-by-parent-closing', { type: 'boolean', describe: 'Whether the issue was automatically closed because its parent issue was closed.' });
    yargs.option('cycle-id', { type: 'string', describe: 'The cycle associated with the issue.' });
    yargs.option('delegate-id', { type: 'string', describe: 'The identifier of the agent user to delegate the issue to.' });
    yargs.option('description', { type: 'string', describe: 'The issue description in markdown format.' });
    yargs.option('description-data', { type: 'string', describe: '[Internal] The issue description as a Prosemirror document.' });
    yargs.option('due-date', { type: 'string', describe: 'The date at which the issue is due.' });
    yargs.option('estimate', { type: 'number', describe: 'The estimated complexity of the issue.' });
    yargs.option('label-ids', { type: 'array', describe: 'The identifiers of the issue labels associated with this ticket.' });
    yargs.option('last-applied-template-id', { type: 'string', describe: 'The ID of the last template applied to the issue.' });
    yargs.option('parent-id', { type: 'string', describe: 'The identifier of the parent issue.' });
    yargs.option('priority', { type: 'number', describe: 'The priority of the issue. 0 = No priority, 1 = Urgent, 2 = High, 3 = Normal,...' });
    yargs.option('priority-sort-order', { type: 'number', describe: 'The position of the issue related to other issues, when ordered by priority.' });
    yargs.option('project-id', { type: 'string', describe: 'The project associated with the issue.' });
    yargs.option('project-milestone-id', { type: 'string', describe: 'The project milestone associated with the issue.' });
    yargs.option('removed-label-ids', { type: 'array', describe: 'The identifiers of the issue labels to be removed from this issue.' });
    yargs.option('sla-breaches-at', { type: 'string', describe: '[Internal] The timestamp at which an issue will be considered in breach of SLA.' });
    yargs.option('sla-started-at', { type: 'string', describe: '[Internal] The timestamp at which the issue\'s SLA was started.' });
    yargs.option('sla-type', { type: 'string', choices: ["all","onlyBusinessDays"], describe: 'The SLA day count type for the issue. Whether SLA should be business days onl...' });
    yargs.option('snoozed-by-id', { type: 'string', describe: 'The identifier of the user who snoozed the issue.' });
    yargs.option('snoozed-until-at', { type: 'string', describe: 'The time until an issue will be snoozed in Triage view.' });
    yargs.option('sort-order', { type: 'number', describe: 'The position of the issue related to other issues.' });
    yargs.option('state-id', { type: 'string', describe: 'The team state of the issue.' });
    yargs.option('sub-issue-sort-order', { type: 'number', describe: 'The position of the issue in parent\'s sub-issue list.' });
    yargs.option('subscriber-ids', { type: 'array', describe: 'The identifiers of the users subscribing to this ticket.' });
    yargs.option('team-id', { type: 'string', describe: 'The identifier of the team associated with the issue.' });
    yargs.option('title', { type: 'string', describe: 'The issue title.' });
    yargs.option('trashed', { type: 'boolean', describe: 'Whether the issue has been trashed.' });
    yargs.option('ids', { type: 'array', demandOption: true, describe: 'The id\'s of the issues to update. Can\'t be more than 50 at a time.' });
    yargs.option('input-json', { type: 'string', describe: 'Full input as JSON (or @file.json)' });
    return yargs;
  }, async (argv) => {
    try {
      const variables = {};
      if (argv['input-json']) {
        variables.input = parseJsonFlag(argv['input-json']);
      } else {
        const input = {};
        if (argv['added-label-ids'] !== undefined) input.addedLabelIds = argv['added-label-ids'];
        if (argv['assignee-id'] !== undefined) input.assigneeId = argv['assignee-id'];
        if (argv['auto-closed-by-parent-closing'] !== undefined) input.autoClosedByParentClosing = argv['auto-closed-by-parent-closing'];
        if (argv['cycle-id'] !== undefined) input.cycleId = argv['cycle-id'];
        if (argv['delegate-id'] !== undefined) input.delegateId = argv['delegate-id'];
        if (argv['description'] !== undefined) input.description = argv['description'];
        if (argv['description-data'] !== undefined) input.descriptionData = parseJsonFlag(argv['description-data']);
        if (argv['due-date'] !== undefined) input.dueDate = argv['due-date'];
        if (argv['estimate'] !== undefined) input.estimate = argv['estimate'];
        if (argv['label-ids'] !== undefined) input.labelIds = argv['label-ids'];
        if (argv['last-applied-template-id'] !== undefined) input.lastAppliedTemplateId = argv['last-applied-template-id'];
        if (argv['parent-id'] !== undefined) input.parentId = argv['parent-id'];
        if (argv['priority'] !== undefined) input.priority = argv['priority'];
        if (argv['priority-sort-order'] !== undefined) input.prioritySortOrder = argv['priority-sort-order'];
        if (argv['project-id'] !== undefined) input.projectId = argv['project-id'];
        if (argv['project-milestone-id'] !== undefined) input.projectMilestoneId = argv['project-milestone-id'];
        if (argv['removed-label-ids'] !== undefined) input.removedLabelIds = argv['removed-label-ids'];
        if (argv['sla-breaches-at'] !== undefined) input.slaBreachesAt = argv['sla-breaches-at'];
        if (argv['sla-started-at'] !== undefined) input.slaStartedAt = argv['sla-started-at'];
        if (argv['sla-type'] !== undefined) input.slaType = argv['sla-type'];
        if (argv['snoozed-by-id'] !== undefined) input.snoozedById = argv['snoozed-by-id'];
        if (argv['snoozed-until-at'] !== undefined) input.snoozedUntilAt = argv['snoozed-until-at'];
        if (argv['sort-order'] !== undefined) input.sortOrder = argv['sort-order'];
        if (argv['state-id'] !== undefined) input.stateId = argv['state-id'];
        if (argv['sub-issue-sort-order'] !== undefined) input.subIssueSortOrder = argv['sub-issue-sort-order'];
        if (argv['subscriber-ids'] !== undefined) input.subscriberIds = argv['subscriber-ids'];
        if (argv['team-id'] !== undefined) input.teamId = argv['team-id'];
        if (argv['title'] !== undefined) input.title = argv['title'];
        if (argv['trashed'] !== undefined) input.trashed = argv['trashed'];
        variables.input = input;
      }
      if (argv['ids'] !== undefined) variables.ids = argv['ids'];
      const result = await request(issueBatchUpdate, variables);
      render(result.issueBatchUpdate, { json: argv.json });
    } catch (err) {
      handleError(err);
    }
  });

  return yargs.demandCommand(1, 'Specify a subcommand').strict();
}

export function handler() {}
