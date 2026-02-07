// AUTO-GENERATED — do not edit. Run `npm run generate` to regenerate.
import { request } from '../client.js';
import { handleError } from '../error.js';
import { render } from '../output.js';
import { fetchAllPages } from '../pagination.js';
import { parseJsonFlag, kebabToCamel } from '../flag-utils.js';
import { columns } from '../generated/columns.js';

import { project, projectFilterSuggestion, projectLabels, projectMilestones, projectRelations, projectStatuses, projectUpdates, projects } from '../generated/queries.js';
import { projectAddLabel, projectArchive, projectCreate, projectDelete, projectReassignStatus, projectRemoveLabel, projectUnarchive } from '../generated/mutations.js';

export const command = 'project <command>';
export const describe = 'project commands';

export function builder(yargs) {

  // query: project
  yargs.command('get <id>', 'One specific project.', (yargs) => {
    yargs.positional('id', { type: 'string', describe: 'id' });
    return yargs;
  }, async (argv) => {
    try {
      const variables = {};
      variables.id = argv.id;
      const result = await request(project, variables);
      render(result.project, { json: argv.json, columnConfig: columns['Project'] });
    } catch (err) {
      handleError(err);
    }
  });

  // query: projectFilterSuggestion
  yargs.command('filter-suggestion', 'Suggests filters for a project view based on a text prompt.', (yargs) => {
    yargs.option('prompt', { type: 'string', demandOption: true });
    return yargs;
  }, async (argv) => {
    try {
      const variables = {};
      if (argv['prompt'] !== undefined) variables.prompt = argv['prompt'];
      const result = await request(projectFilterSuggestion, variables);
      render(result.projectFilterSuggestion, { json: argv.json, columnConfig: columns['ProjectFilterSuggestionPayload'] });
    } catch (err) {
      handleError(err);
    }
  });

  // query: projectLabels
  yargs.command('labels', 'All project labels.', (yargs) => {
    yargs.option('filter', { type: 'string', describe: 'Filter returned project labels.' });
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
        data = await fetchAllPages(request, projectLabels, variables, 'projectLabels');
      } else {
        const result = await request(projectLabels, variables);
        data = result.projectLabels?.nodes || [];
      }
      render(data, { json: argv.json, isList: true, columnConfig: columns['ProjectLabel'] });
    } catch (err) {
      handleError(err);
    }
  });

  // query: projectMilestones
  yargs.command('milestones', 'All milestones for the project.', (yargs) => {
    yargs.option('filter', { type: 'string', describe: 'Filter returned project milestones.' });
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
        data = await fetchAllPages(request, projectMilestones, variables, 'projectMilestones');
      } else {
        const result = await request(projectMilestones, variables);
        data = result.projectMilestones?.nodes || [];
      }
      render(data, { json: argv.json, isList: true, columnConfig: columns['ProjectMilestone'] });
    } catch (err) {
      handleError(err);
    }
  });

  // query: projectRelations
  yargs.command('relations', 'All project relationships.', (yargs) => {
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
        data = await fetchAllPages(request, projectRelations, variables, 'projectRelations');
      } else {
        const result = await request(projectRelations, variables);
        data = result.projectRelations?.nodes || [];
      }
      render(data, { json: argv.json, isList: true, columnConfig: columns['ProjectRelation'] });
    } catch (err) {
      handleError(err);
    }
  });

  // query: projectStatuses
  yargs.command('statuses', 'All project statuses.', (yargs) => {
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
        data = await fetchAllPages(request, projectStatuses, variables, 'projectStatuses');
      } else {
        const result = await request(projectStatuses, variables);
        data = result.projectStatuses?.nodes || [];
      }
      render(data, { json: argv.json, isList: true, columnConfig: columns['ProjectStatus'] });
    } catch (err) {
      handleError(err);
    }
  });

  // query: projectUpdates
  yargs.command('updates', 'All project updates.', (yargs) => {
    yargs.option('filter', { type: 'string', describe: 'Filter returned project updates.' });
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
        data = await fetchAllPages(request, projectUpdates, variables, 'projectUpdates');
      } else {
        const result = await request(projectUpdates, variables);
        data = result.projectUpdates?.nodes || [];
      }
      render(data, { json: argv.json, isList: true, columnConfig: columns['ProjectUpdate'] });
    } catch (err) {
      handleError(err);
    }
  });

  // query: projects
  yargs.command('list', 'All projects.', (yargs) => {
    yargs.option('filter', { type: 'string', describe: 'Filter returned projects.' });
    yargs.option('include-archived', { type: 'boolean', describe: 'Should archived resources be included (default: false)' });
    yargs.option('order-by', { type: 'string', choices: ["createdAt","updatedAt"], describe: 'By which field should the pagination order by. Available options are createdA...' });
    yargs.option('sort', { type: 'array', describe: '[INTERNAL] Sort returned projects.' });
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
        data = await fetchAllPages(request, projects, variables, 'projects');
      } else {
        const result = await request(projects, variables);
        data = result.projects?.nodes || [];
      }
      render(data, { json: argv.json, isList: true, columnConfig: columns['Project'] });
    } catch (err) {
      handleError(err);
    }
  });

  // mutation: projectAddLabel
  yargs.command('add-label <id>', 'Adds a label to a project.', (yargs) => {
    yargs.positional('id', { type: 'string', describe: 'The identifier of the project to add the label to.' });
    yargs.option('label-id', { type: 'string', demandOption: true, describe: 'The identifier of the label to add.' });
    return yargs;
  }, async (argv) => {
    try {
      const variables = {};
      variables.id = argv.id;
      if (argv['label-id'] !== undefined) variables.labelId = argv['label-id'];
      const result = await request(projectAddLabel, variables);
      render(result.projectAddLabel, { json: argv.json });
    } catch (err) {
      handleError(err);
    }
  });

  // mutation: projectArchive
  yargs.command('archive <id>', 'Archives a project.', (yargs) => {
    yargs.positional('id', { type: 'string', describe: 'The identifier of the project to archive. Also the identifier from the URL is accepted.' });
    yargs.option('trash', { type: 'boolean', describe: 'Whether to trash the project.' });
    return yargs;
  }, async (argv) => {
    try {
      const variables = {};
      variables.id = argv.id;
      if (argv['trash'] !== undefined) variables.trash = argv['trash'];
      const result = await request(projectArchive, variables);
      render(result.projectArchive, { json: argv.json });
    } catch (err) {
      handleError(err);
    }
  });

  // mutation: projectCreate
  yargs.command('create', 'Creates a new project.', (yargs) => {
    yargs.option('color', { type: 'string', describe: 'The color of the project.' });
    yargs.option('content', { type: 'string', describe: 'The project content as markdown.' });
    yargs.option('converted-from-issue-id', { type: 'string', describe: 'The ID of the issue from which that project is created.' });
    yargs.option('description', { type: 'string', describe: 'The description for the project.' });
    yargs.option('icon', { type: 'string', describe: 'The icon of the project.' });
    yargs.option('id', { type: 'string', describe: 'The identifier in UUID v4 format. If none is provided, the backend will gener...' });
    yargs.option('label-ids', { type: 'array', describe: '[Internal]The identifiers of the project labels associated with this project.' });
    yargs.option('last-applied-template-id', { type: 'string', describe: 'The ID of the last template applied to the project.' });
    yargs.option('lead-id', { type: 'string', describe: 'The identifier of the project lead.' });
    yargs.option('member-ids', { type: 'array', describe: 'The identifiers of the members of this project.' });
    yargs.option('name', { type: 'string', demandOption: true, describe: 'The name of the project.' });
    yargs.option('priority', { type: 'number', describe: 'The priority of the project. 0 = No priority, 1 = Urgent, 2 = High, 3 = Norma...' });
    yargs.option('priority-sort-order', { type: 'number', describe: 'The sort order for the project within shared views, when ordered by priority.' });
    yargs.option('sort-order', { type: 'number', describe: 'The sort order for the project within shared views.' });
    yargs.option('start-date', { type: 'string', describe: 'The planned start date of the project.' });
    yargs.option('start-date-resolution', { type: 'string', choices: ["halfYear","month","quarter","year"], describe: 'The resolution of the project\'s start date.' });
    yargs.option('status-id', { type: 'string', describe: 'The ID of the project status.' });
    yargs.option('target-date', { type: 'string', describe: 'The planned target date of the project.' });
    yargs.option('target-date-resolution', { type: 'string', choices: ["halfYear","month","quarter","year"], describe: 'The resolution of the project\'s estimated completion date.' });
    yargs.option('team-ids', { type: 'array', demandOption: true, describe: 'The identifiers of the teams this project is associated with.' });
    yargs.option('connect-slack-channel', { type: 'boolean', describe: 'Whether to connect a Slack channel to the project.' });
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
        if (argv['content'] !== undefined) input.content = argv['content'];
        if (argv['converted-from-issue-id'] !== undefined) input.convertedFromIssueId = argv['converted-from-issue-id'];
        if (argv['description'] !== undefined) input.description = argv['description'];
        if (argv['icon'] !== undefined) input.icon = argv['icon'];
        if (argv['id'] !== undefined) input.id = argv['id'];
        if (argv['label-ids'] !== undefined) input.labelIds = argv['label-ids'];
        if (argv['last-applied-template-id'] !== undefined) input.lastAppliedTemplateId = argv['last-applied-template-id'];
        if (argv['lead-id'] !== undefined) input.leadId = argv['lead-id'];
        if (argv['member-ids'] !== undefined) input.memberIds = argv['member-ids'];
        if (argv['name'] !== undefined) input.name = argv['name'];
        if (argv['priority'] !== undefined) input.priority = argv['priority'];
        if (argv['priority-sort-order'] !== undefined) input.prioritySortOrder = argv['priority-sort-order'];
        if (argv['sort-order'] !== undefined) input.sortOrder = argv['sort-order'];
        if (argv['start-date'] !== undefined) input.startDate = argv['start-date'];
        if (argv['start-date-resolution'] !== undefined) input.startDateResolution = argv['start-date-resolution'];
        if (argv['status-id'] !== undefined) input.statusId = argv['status-id'];
        if (argv['target-date'] !== undefined) input.targetDate = argv['target-date'];
        if (argv['target-date-resolution'] !== undefined) input.targetDateResolution = argv['target-date-resolution'];
        if (argv['team-ids'] !== undefined) input.teamIds = argv['team-ids'];
        variables.input = input;
      }
      if (argv['connect-slack-channel'] !== undefined) variables.connectSlackChannel = argv['connect-slack-channel'];
      const result = await request(projectCreate, variables);
      render(result.projectCreate, { json: argv.json });
    } catch (err) {
      handleError(err);
    }
  });

  // mutation: projectDelete
  yargs.command('delete <id>', 'Deletes (trashes) a project.', (yargs) => {
    yargs.positional('id', { type: 'string', describe: 'The identifier of the project to delete.' });
    return yargs;
  }, async (argv) => {
    try {
      const variables = {};
      variables.id = argv.id;
      const result = await request(projectDelete, variables);
      render(result.projectDelete, { json: argv.json });
    } catch (err) {
      handleError(err);
    }
  });

  // mutation: projectReassignStatus
  yargs.command('reassign-status', '[INTERNAL] Updates all projects currently assigned to to a project status to ...', (yargs) => {
    yargs.option('new-project-status-id', { type: 'string', demandOption: true, describe: 'The identifier of the new project status to update the projects to.' });
    yargs.option('original-project-status-id', { type: 'string', demandOption: true, describe: 'The identifier of the project status with which projects will be updated.' });
    return yargs;
  }, async (argv) => {
    try {
      const variables = {};
      if (argv['new-project-status-id'] !== undefined) variables.newProjectStatusId = argv['new-project-status-id'];
      if (argv['original-project-status-id'] !== undefined) variables.originalProjectStatusId = argv['original-project-status-id'];
      const result = await request(projectReassignStatus, variables);
      render(result.projectReassignStatus, { json: argv.json });
    } catch (err) {
      handleError(err);
    }
  });

  // mutation: projectRemoveLabel
  yargs.command('remove-label <id>', 'Removes a label from a project.', (yargs) => {
    yargs.positional('id', { type: 'string', describe: 'The identifier of the project to remove the label from.' });
    yargs.option('label-id', { type: 'string', demandOption: true, describe: 'The identifier of the label to remove.' });
    return yargs;
  }, async (argv) => {
    try {
      const variables = {};
      variables.id = argv.id;
      if (argv['label-id'] !== undefined) variables.labelId = argv['label-id'];
      const result = await request(projectRemoveLabel, variables);
      render(result.projectRemoveLabel, { json: argv.json });
    } catch (err) {
      handleError(err);
    }
  });

  // mutation: projectUnarchive
  yargs.command('unarchive <id>', 'Unarchives a project.', (yargs) => {
    yargs.positional('id', { type: 'string', describe: 'The identifier of the project to restore. Also the identifier from the URL is accepted.' });
    return yargs;
  }, async (argv) => {
    try {
      const variables = {};
      variables.id = argv.id;
      const result = await request(projectUnarchive, variables);
      render(result.projectUnarchive, { json: argv.json });
    } catch (err) {
      handleError(err);
    }
  });

  return yargs.demandCommand(1, 'Specify a subcommand').strict();
}

export function handler() {}
