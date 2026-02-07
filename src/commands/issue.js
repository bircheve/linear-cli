// AUTO-GENERATED — do not edit. Run `npm run generate` to regenerate.
import { request } from '../client.js';
import { handleError } from '../error.js';
import { render } from '../output.js';
import { fetchAllPages } from '../pagination.js';
import { parseJsonFlag, kebabToCamel } from '../flag-utils.js';
import { columns } from '../generated/columns.js';

import { issue, issueFigmaFileKeySearch, issueFilterSuggestion, issueLabels, issuePriorityValues, issueRelations, issueSearch, issueTitleSuggestionFromCustomerRequest, issueVcsBranchSearch, issues } from '../generated/queries.js';
import { issueAddLabel, issueArchive, issueCreate, issueDelete, issueDescriptionUpdateFromFront, issueReminder, issueRemoveLabel, issueSubscribe, issueUnarchive, issueUnsubscribe, issueUpdate } from '../generated/mutations.js';

export const command = 'issue <command>';
export const describe = 'issue commands';

export function builder(yargs) {

  // query: issue
  yargs.command('get <id>', 'One specific issue.', (yargs) => {
    yargs.positional('id', { type: 'string', describe: 'id' });
    return yargs;
  }, async (argv) => {
    try {
      const variables = {};
      variables.id = argv.id;
      const result = await request(issue, variables);
      render(result.issue, { json: argv.json, columnConfig: columns['Issue'] });
    } catch (err) {
      handleError(err);
    }
  });

  // query: issueFigmaFileKeySearch
  yargs.command('figma-file-key-search', 'Find issues that are related to a given Figma file key.', (yargs) => {
    yargs.option('file-key', { type: 'string', demandOption: true, describe: 'The Figma file key.' });
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
      if (argv['file-key'] !== undefined) variables.fileKey = argv['file-key'];
      if (argv['include-archived'] !== undefined) variables.includeArchived = argv['include-archived'];
      if (argv['order-by'] !== undefined) variables.orderBy = argv['order-by'];
      if (argv.first !== undefined) variables.first = argv.first;
      if (argv.after) variables.after = argv.after;
      if (argv.last !== undefined) variables.last = argv.last;
      if (argv.before) variables.before = argv.before;

      let data;
      if (argv.all) {
        data = await fetchAllPages(request, issueFigmaFileKeySearch, variables, 'issueFigmaFileKeySearch');
      } else {
        const result = await request(issueFigmaFileKeySearch, variables);
        data = result.issueFigmaFileKeySearch?.nodes || [];
      }
      render(data, { json: argv.json, isList: true, columnConfig: columns['Issue'] });
    } catch (err) {
      handleError(err);
    }
  });

  // query: issueFilterSuggestion
  yargs.command('filter-suggestion', 'Suggests filters for an issue view based on a text prompt.', (yargs) => {
    yargs.option('project-id', { type: 'string', describe: 'The ID of the project if filtering a project view' });
    yargs.option('prompt', { type: 'string', demandOption: true });
    return yargs;
  }, async (argv) => {
    try {
      const variables = {};
      if (argv['project-id'] !== undefined) variables.projectId = argv['project-id'];
      if (argv['prompt'] !== undefined) variables.prompt = argv['prompt'];
      const result = await request(issueFilterSuggestion, variables);
      render(result.issueFilterSuggestion, { json: argv.json, columnConfig: columns['IssueFilterSuggestionPayload'] });
    } catch (err) {
      handleError(err);
    }
  });

  // query: issueLabels
  yargs.command('labels', 'All issue labels.', (yargs) => {
    yargs.option('filter', { type: 'string', describe: 'Filter returned issue labels.' });
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
        data = await fetchAllPages(request, issueLabels, variables, 'issueLabels');
      } else {
        const result = await request(issueLabels, variables);
        data = result.issueLabels?.nodes || [];
      }
      render(data, { json: argv.json, isList: true, columnConfig: columns['IssueLabel'] });
    } catch (err) {
      handleError(err);
    }
  });

  // query: issuePriorityValues
  yargs.command('priority-values', 'Issue priority values and corresponding labels.', (yargs) => {
    return yargs;
  }, async (argv) => {
    try {
      const variables = {};
      const result = await request(issuePriorityValues, variables);
      render(result.issuePriorityValues, { json: argv.json, isList: true, columnConfig: columns['IssuePriorityValue'] });
    } catch (err) {
      handleError(err);
    }
  });

  // query: issueRelations
  yargs.command('relations', 'All issue relationships.', (yargs) => {
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
        data = await fetchAllPages(request, issueRelations, variables, 'issueRelations');
      } else {
        const result = await request(issueRelations, variables);
        data = result.issueRelations?.nodes || [];
      }
      render(data, { json: argv.json, isList: true, columnConfig: columns['IssueRelation'] });
    } catch (err) {
      handleError(err);
    }
  });

  // query: issueSearch
  yargs.command('search', '[DEPRECATED] Search issues. This endpoint is deprecated and will be removed i...', (yargs) => {
    yargs.option('filter', { type: 'string', describe: 'Filter returned issues.' });
    yargs.option('include-archived', { type: 'boolean', describe: 'Should archived resources be included (default: false)' });
    yargs.option('order-by', { type: 'string', choices: ["createdAt","updatedAt"], describe: 'By which field should the pagination order by. Available options are createdA...' });
    yargs.option('query', { type: 'string', describe: '[Deprecated] Search string to look for.' });
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
      if (argv['query'] !== undefined) variables.query = argv['query'];
      if (argv['filter-json']) variables.filter = parseJsonFlag(argv['filter-json']);
      if (argv.first !== undefined) variables.first = argv.first;
      if (argv.after) variables.after = argv.after;
      if (argv.last !== undefined) variables.last = argv.last;
      if (argv.before) variables.before = argv.before;

      let data;
      if (argv.all) {
        data = await fetchAllPages(request, issueSearch, variables, 'issueSearch');
      } else {
        const result = await request(issueSearch, variables);
        data = result.issueSearch?.nodes || [];
      }
      render(data, { json: argv.json, isList: true, columnConfig: columns['Issue'] });
    } catch (err) {
      handleError(err);
    }
  });

  // query: issueTitleSuggestionFromCustomerRequest
  yargs.command('title-suggestion-from-customer-request', 'Suggests issue title based on a customer request.', (yargs) => {
    yargs.option('request', { type: 'string', demandOption: true });
    return yargs;
  }, async (argv) => {
    try {
      const variables = {};
      if (argv['request'] !== undefined) variables.request = argv['request'];
      const result = await request(issueTitleSuggestionFromCustomerRequest, variables);
      render(result.issueTitleSuggestionFromCustomerRequest, { json: argv.json, columnConfig: columns['IssueTitleSuggestionFromCustomerRequestPayload'] });
    } catch (err) {
      handleError(err);
    }
  });

  // query: issueVcsBranchSearch
  yargs.command('vcs-branch-search', 'Find issue based on the VCS branch name.', (yargs) => {
    yargs.option('branch-name', { type: 'string', demandOption: true, describe: 'The VCS branch name to search for.' });
    return yargs;
  }, async (argv) => {
    try {
      const variables = {};
      if (argv['branch-name'] !== undefined) variables.branchName = argv['branch-name'];
      const result = await request(issueVcsBranchSearch, variables);
      render(result.issueVcsBranchSearch, { json: argv.json, columnConfig: columns['Issue'] });
    } catch (err) {
      handleError(err);
    }
  });

  // query: issues
  yargs.command('list', 'All issues.', (yargs) => {
    yargs.option('filter', { type: 'string', describe: 'Filter returned issues.' });
    yargs.option('include-archived', { type: 'boolean', describe: 'Should archived resources be included (default: false)' });
    yargs.option('order-by', { type: 'string', choices: ["createdAt","updatedAt"], describe: 'By which field should the pagination order by. Available options are createdA...' });
    yargs.option('sort', { type: 'array', describe: '[INTERNAL] Sort returned issues.' });
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
      if (argv['sort'] !== undefined) variables.sort = argv['sort'];
      if (argv['filter-json']) variables.filter = parseJsonFlag(argv['filter-json']);
      if (argv.first !== undefined) variables.first = argv.first;
      if (argv.after) variables.after = argv.after;
      if (argv.last !== undefined) variables.last = argv.last;
      if (argv.before) variables.before = argv.before;

      let data;
      if (argv.all) {
        data = await fetchAllPages(request, issues, variables, 'issues');
      } else {
        const result = await request(issues, variables);
        data = result.issues?.nodes || [];
      }
      render(data, { json: argv.json, isList: true, columnConfig: columns['Issue'] });
    } catch (err) {
      handleError(err);
    }
  });

  // mutation: issueAddLabel
  yargs.command('add-label <id>', 'Adds a label to an issue.', (yargs) => {
    yargs.positional('id', { type: 'string', describe: 'The identifier of the issue to add the label to.' });
    yargs.option('label-id', { type: 'string', demandOption: true, describe: 'The identifier of the label to add.' });
    return yargs;
  }, async (argv) => {
    try {
      const variables = {};
      variables.id = argv.id;
      if (argv['label-id'] !== undefined) variables.labelId = argv['label-id'];
      const result = await request(issueAddLabel, variables);
      render(result.issueAddLabel, { json: argv.json });
    } catch (err) {
      handleError(err);
    }
  });

  // mutation: issueArchive
  yargs.command('archive <id>', 'Archives an issue.', (yargs) => {
    yargs.positional('id', { type: 'string', describe: 'The identifier of the issue to archive.' });
    yargs.option('trash', { type: 'boolean', describe: 'Whether to trash the issue.' });
    return yargs;
  }, async (argv) => {
    try {
      const variables = {};
      variables.id = argv.id;
      if (argv['trash'] !== undefined) variables.trash = argv['trash'];
      const result = await request(issueArchive, variables);
      render(result.issueArchive, { json: argv.json });
    } catch (err) {
      handleError(err);
    }
  });

  // mutation: issueCreate
  yargs.command('create', 'Creates a new issue.', (yargs) => {
    yargs.option('assignee-id', { type: 'string', describe: 'The identifier of the user to assign the issue to.' });
    yargs.option('completed-at', { type: 'string', describe: 'The date when the issue was completed (e.g. if importing from another system)...' });
    yargs.option('create-as-user', { type: 'string', describe: 'Create issue as a user with the provided name. This option is only available ...' });
    yargs.option('created-at', { type: 'string', describe: 'The date when the issue was created (e.g. if importing from another system). ...' });
    yargs.option('cycle-id', { type: 'string', describe: 'The cycle associated with the issue.' });
    yargs.option('delegate-id', { type: 'string', describe: 'The identifier of the agent user to delegate the issue to.' });
    yargs.option('description', { type: 'string', describe: 'The issue description in markdown format.' });
    yargs.option('description-data', { type: 'string', describe: '[Internal] The issue description as a Prosemirror document.' });
    yargs.option('display-icon-url', { type: 'string', describe: 'Provide an external user avatar URL. Can only be used in conjunction with the...' });
    yargs.option('due-date', { type: 'string', describe: 'The date at which the issue is due.' });
    yargs.option('estimate', { type: 'number', describe: 'The estimated complexity of the issue.' });
    yargs.option('id', { type: 'string', describe: 'The identifier in UUID v4 format. If none is provided, the backend will gener...' });
    yargs.option('label-ids', { type: 'array', describe: 'The identifiers of the issue labels associated with this ticket.' });
    yargs.option('last-applied-template-id', { type: 'string', describe: 'The ID of the last template applied to the issue.' });
    yargs.option('parent-id', { type: 'string', describe: 'The identifier of the parent issue.' });
    yargs.option('preserve-sort-order-on-create', { type: 'boolean', describe: 'Whether the passed sort order should be preserved.' });
    yargs.option('priority', { type: 'number', describe: 'The priority of the issue. 0 = No priority, 1 = Urgent, 2 = High, 3 = Normal,...' });
    yargs.option('priority-sort-order', { type: 'number', describe: 'The position of the issue related to other issues, when ordered by priority.' });
    yargs.option('project-id', { type: 'string', describe: 'The project associated with the issue.' });
    yargs.option('project-milestone-id', { type: 'string', describe: 'The project milestone associated with the issue.' });
    yargs.option('reference-comment-id', { type: 'string', describe: 'The comment the issue is referencing.' });
    yargs.option('sla-breaches-at', { type: 'string', describe: '[Internal] The timestamp at which an issue will be considered in breach of SLA.' });
    yargs.option('sla-started-at', { type: 'string', describe: '[Internal] The timestamp at which the issue\'s SLA was started.' });
    yargs.option('sla-type', { type: 'string', choices: ["all","onlyBusinessDays"], describe: 'The SLA day count type for the issue. Whether SLA should be business days onl...' });
    yargs.option('sort-order', { type: 'number', describe: 'The position of the issue related to other issues.' });
    yargs.option('source-comment-id', { type: 'string', describe: 'The comment the issue is created from.' });
    yargs.option('source-pull-request-comment-id', { type: 'string', describe: '[Internal] The pull request comment the issue is created from.' });
    yargs.option('state-id', { type: 'string', describe: 'The team state of the issue.' });
    yargs.option('sub-issue-sort-order', { type: 'number', describe: 'The position of the issue in parent\'s sub-issue list.' });
    yargs.option('subscriber-ids', { type: 'array', describe: 'The identifiers of the users subscribing to this ticket.' });
    yargs.option('team-id', { type: 'string', demandOption: true, describe: 'The identifier of the team associated with the issue.' });
    yargs.option('template-id', { type: 'string', describe: 'The identifier of a template the issue should be created from. If other value...' });
    yargs.option('title', { type: 'string', describe: 'The title of the issue.' });
    yargs.option('use-default-template', { type: 'boolean', describe: 'Whether to use the default template for the team. When set to true, the defau...' });
    yargs.option('input-json', { type: 'string', describe: 'Full input as JSON (or @file.json)' });
    return yargs;
  }, async (argv) => {
    try {
      const variables = {};
      if (argv['input-json']) {
        variables.input = parseJsonFlag(argv['input-json']);
      } else {
        const input = {};
        if (argv['assignee-id'] !== undefined) input.assigneeId = argv['assignee-id'];
        if (argv['completed-at'] !== undefined) input.completedAt = argv['completed-at'];
        if (argv['create-as-user'] !== undefined) input.createAsUser = argv['create-as-user'];
        if (argv['created-at'] !== undefined) input.createdAt = argv['created-at'];
        if (argv['cycle-id'] !== undefined) input.cycleId = argv['cycle-id'];
        if (argv['delegate-id'] !== undefined) input.delegateId = argv['delegate-id'];
        if (argv['description'] !== undefined) input.description = argv['description'];
        if (argv['description-data'] !== undefined) input.descriptionData = parseJsonFlag(argv['description-data']);
        if (argv['display-icon-url'] !== undefined) input.displayIconUrl = argv['display-icon-url'];
        if (argv['due-date'] !== undefined) input.dueDate = argv['due-date'];
        if (argv['estimate'] !== undefined) input.estimate = argv['estimate'];
        if (argv['id'] !== undefined) input.id = argv['id'];
        if (argv['label-ids'] !== undefined) input.labelIds = argv['label-ids'];
        if (argv['last-applied-template-id'] !== undefined) input.lastAppliedTemplateId = argv['last-applied-template-id'];
        if (argv['parent-id'] !== undefined) input.parentId = argv['parent-id'];
        if (argv['preserve-sort-order-on-create'] !== undefined) input.preserveSortOrderOnCreate = argv['preserve-sort-order-on-create'];
        if (argv['priority'] !== undefined) input.priority = argv['priority'];
        if (argv['priority-sort-order'] !== undefined) input.prioritySortOrder = argv['priority-sort-order'];
        if (argv['project-id'] !== undefined) input.projectId = argv['project-id'];
        if (argv['project-milestone-id'] !== undefined) input.projectMilestoneId = argv['project-milestone-id'];
        if (argv['reference-comment-id'] !== undefined) input.referenceCommentId = argv['reference-comment-id'];
        if (argv['sla-breaches-at'] !== undefined) input.slaBreachesAt = argv['sla-breaches-at'];
        if (argv['sla-started-at'] !== undefined) input.slaStartedAt = argv['sla-started-at'];
        if (argv['sla-type'] !== undefined) input.slaType = argv['sla-type'];
        if (argv['sort-order'] !== undefined) input.sortOrder = argv['sort-order'];
        if (argv['source-comment-id'] !== undefined) input.sourceCommentId = argv['source-comment-id'];
        if (argv['source-pull-request-comment-id'] !== undefined) input.sourcePullRequestCommentId = argv['source-pull-request-comment-id'];
        if (argv['state-id'] !== undefined) input.stateId = argv['state-id'];
        if (argv['sub-issue-sort-order'] !== undefined) input.subIssueSortOrder = argv['sub-issue-sort-order'];
        if (argv['subscriber-ids'] !== undefined) input.subscriberIds = argv['subscriber-ids'];
        if (argv['team-id'] !== undefined) input.teamId = argv['team-id'];
        if (argv['template-id'] !== undefined) input.templateId = argv['template-id'];
        if (argv['title'] !== undefined) input.title = argv['title'];
        if (argv['use-default-template'] !== undefined) input.useDefaultTemplate = argv['use-default-template'];
        variables.input = input;
      }
      const result = await request(issueCreate, variables);
      render(result.issueCreate, { json: argv.json });
    } catch (err) {
      handleError(err);
    }
  });

  // mutation: issueDelete
  yargs.command('delete <id>', 'Deletes (trashes) an issue.', (yargs) => {
    yargs.positional('id', { type: 'string', describe: 'The identifier of the issue to delete.' });
    yargs.option('permanently-delete', { type: 'boolean', describe: 'Whether to permanently delete the issue and skip the grace period of 30 days....' });
    return yargs;
  }, async (argv) => {
    try {
      const variables = {};
      variables.id = argv.id;
      if (argv['permanently-delete'] !== undefined) variables.permanentlyDelete = argv['permanently-delete'];
      const result = await request(issueDelete, variables);
      render(result.issueDelete, { json: argv.json });
    } catch (err) {
      handleError(err);
    }
  });

  // mutation: issueDescriptionUpdateFromFront
  yargs.command('description-update-from-front <id>', '[INTERNAL] Updates an issue description from the Front app to handle Front at...', (yargs) => {
    yargs.positional('id', { type: 'string', describe: 'The identifier of the issue to update.' });
    yargs.option('description', { type: 'string', demandOption: true, describe: 'Description to update the issue with.' });
    return yargs;
  }, async (argv) => {
    try {
      const variables = {};
      variables.id = argv.id;
      if (argv['description'] !== undefined) variables.description = argv['description'];
      const result = await request(issueDescriptionUpdateFromFront, variables);
      render(result.issueDescriptionUpdateFromFront, { json: argv.json });
    } catch (err) {
      handleError(err);
    }
  });

  // mutation: issueReminder
  yargs.command('reminder <id>', 'Adds an issue reminder. Will cause a notification to be sent when the issue r...', (yargs) => {
    yargs.positional('id', { type: 'string', describe: 'The identifier of the issue to add a reminder for.' });
    yargs.option('reminder-at', { type: 'string', demandOption: true, describe: 'The time when a reminder notification will be sent.' });
    return yargs;
  }, async (argv) => {
    try {
      const variables = {};
      variables.id = argv.id;
      if (argv['reminder-at'] !== undefined) variables.reminderAt = argv['reminder-at'];
      const result = await request(issueReminder, variables);
      render(result.issueReminder, { json: argv.json });
    } catch (err) {
      handleError(err);
    }
  });

  // mutation: issueRemoveLabel
  yargs.command('remove-label <id>', 'Removes a label from an issue.', (yargs) => {
    yargs.positional('id', { type: 'string', describe: 'The identifier of the issue to remove the label from.' });
    yargs.option('label-id', { type: 'string', demandOption: true, describe: 'The identifier of the label to remove.' });
    return yargs;
  }, async (argv) => {
    try {
      const variables = {};
      variables.id = argv.id;
      if (argv['label-id'] !== undefined) variables.labelId = argv['label-id'];
      const result = await request(issueRemoveLabel, variables);
      render(result.issueRemoveLabel, { json: argv.json });
    } catch (err) {
      handleError(err);
    }
  });

  // mutation: issueSubscribe
  yargs.command('subscribe <id>', 'Subscribes a user to an issue.', (yargs) => {
    yargs.positional('id', { type: 'string', describe: 'The identifier of the issue to subscribe to.' });
    yargs.option('user-id', { type: 'string', describe: 'The identifier of the user to subscribe, default is the current user.' });
    return yargs;
  }, async (argv) => {
    try {
      const variables = {};
      variables.id = argv.id;
      if (argv['user-id'] !== undefined) variables.userId = argv['user-id'];
      const result = await request(issueSubscribe, variables);
      render(result.issueSubscribe, { json: argv.json });
    } catch (err) {
      handleError(err);
    }
  });

  // mutation: issueUnarchive
  yargs.command('unarchive <id>', 'Unarchives an issue.', (yargs) => {
    yargs.positional('id', { type: 'string', describe: 'The identifier of the issue to archive.' });
    return yargs;
  }, async (argv) => {
    try {
      const variables = {};
      variables.id = argv.id;
      const result = await request(issueUnarchive, variables);
      render(result.issueUnarchive, { json: argv.json });
    } catch (err) {
      handleError(err);
    }
  });

  // mutation: issueUnsubscribe
  yargs.command('unsubscribe <id>', 'Unsubscribes a user from an issue.', (yargs) => {
    yargs.positional('id', { type: 'string', describe: 'The identifier of the issue to unsubscribe from.' });
    yargs.option('user-id', { type: 'string', describe: 'The identifier of the user to unsubscribe, default is the current user.' });
    return yargs;
  }, async (argv) => {
    try {
      const variables = {};
      variables.id = argv.id;
      if (argv['user-id'] !== undefined) variables.userId = argv['user-id'];
      const result = await request(issueUnsubscribe, variables);
      render(result.issueUnsubscribe, { json: argv.json });
    } catch (err) {
      handleError(err);
    }
  });

  // mutation: issueUpdate
  yargs.command('update <id>', 'Updates an issue.', (yargs) => {
    yargs.positional('id', { type: 'string', describe: 'The identifier of the issue to update.' });
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
      const result = await request(issueUpdate, variables);
      render(result.issueUpdate, { json: argv.json });
    } catch (err) {
      handleError(err);
    }
  });

  return yargs.demandCommand(1, 'Specify a subcommand').strict();
}

export function handler() {}
