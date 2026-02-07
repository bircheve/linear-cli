// AUTO-GENERATED — do not edit. Run `npm run generate` to regenerate.
import { request } from '../client.js';
import { handleError } from '../error.js';
import { render } from '../output.js';
import { fetchAllPages } from '../pagination.js';
import { parseJsonFlag, kebabToCamel } from '../flag-utils.js';

import { projectMilestone } from '../generated/queries.js';
import { projectMilestoneCreate, projectMilestoneDelete, projectMilestoneMove, projectMilestoneUpdate } from '../generated/mutations.js';

export const command = 'project-milestone <command>';
export const describe = 'project-milestone commands';

export function builder(yargs) {

  // query: projectMilestone
  yargs.command('get <id>', 'One specific project milestone.', (yargs) => {
    yargs.positional('id', { type: 'string', describe: 'id' });
    return yargs;
  }, async (argv) => {
    try {
      const variables = {};
      variables.id = argv.id;
      const result = await request(projectMilestone, variables);
      render(result.projectMilestone, { json: argv.json });
    } catch (err) {
      handleError(err);
    }
  });

  // mutation: projectMilestoneCreate
  yargs.command('create', 'Creates a new project milestone.', (yargs) => {
    yargs.option('description', { type: 'string', describe: 'The description of the project milestone in markdown format.' });
    yargs.option('description-data', { type: 'string', describe: '[Internal] The description of the project milestone as a Prosemirror document.' });
    yargs.option('id', { type: 'string', describe: 'The identifier in UUID v4 format. If none is provided, the backend will gener...' });
    yargs.option('name', { type: 'string', demandOption: true, describe: 'The name of the project milestone.' });
    yargs.option('project-id', { type: 'string', demandOption: true, describe: 'Related project for the project milestone.' });
    yargs.option('sort-order', { type: 'number', describe: 'The sort order for the project milestone within a project.' });
    yargs.option('target-date', { type: 'string', describe: 'The planned target date of the project milestone.' });
    yargs.option('input-json', { type: 'string', describe: 'Full input as JSON (or @file.json)' });
    return yargs;
  }, async (argv) => {
    try {
      const variables = {};
      if (argv['input-json']) {
        variables.input = parseJsonFlag(argv['input-json']);
      } else {
        const input = {};
        if (argv['description'] !== undefined) input.description = argv['description'];
        if (argv['description-data'] !== undefined) input.descriptionData = parseJsonFlag(argv['description-data']);
        if (argv['id'] !== undefined) input.id = argv['id'];
        if (argv['name'] !== undefined) input.name = argv['name'];
        if (argv['project-id'] !== undefined) input.projectId = argv['project-id'];
        if (argv['sort-order'] !== undefined) input.sortOrder = argv['sort-order'];
        if (argv['target-date'] !== undefined) input.targetDate = argv['target-date'];
        variables.input = input;
      }
      const result = await request(projectMilestoneCreate, variables);
      render(result.projectMilestoneCreate, { json: argv.json });
    } catch (err) {
      handleError(err);
    }
  });

  // mutation: projectMilestoneDelete
  yargs.command('delete <id>', 'Deletes a project milestone.', (yargs) => {
    yargs.positional('id', { type: 'string', describe: 'The identifier of the project milestone to delete.' });
    return yargs;
  }, async (argv) => {
    try {
      const variables = {};
      variables.id = argv.id;
      const result = await request(projectMilestoneDelete, variables);
      render(result.projectMilestoneDelete, { json: argv.json });
    } catch (err) {
      handleError(err);
    }
  });

  // mutation: projectMilestoneMove
  yargs.command('move <id>', '[Internal] Moves a project milestone to another project, can be called to und...', (yargs) => {
    yargs.positional('id', { type: 'string', describe: 'The identifier of the project milestone to move.' });
    yargs.option('add-issue-team-to-project', { type: 'boolean', describe: 'Whether to add each milestone issue\'s team to the project. This is needed whe...' });
    yargs.option('new-issue-team-id', { type: 'string', describe: 'The team id to move the attached issues to. This is needed when there is a mi...' });
    yargs.option('project-id', { type: 'string', demandOption: true, describe: 'The identifier of the project to move the milestone to.' });
    yargs.option('undo-issue-team-ids', { type: 'array', describe: 'A list of issue id to team ids, used for undoing a previous milestone move wh...' });
    yargs.option('undo-project-team-ids', { type: 'string', describe: 'A mapping of project id to a previous set of team ids, used for undoing a pre...' });
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
        if (argv['add-issue-team-to-project'] !== undefined) input.addIssueTeamToProject = argv['add-issue-team-to-project'];
        if (argv['new-issue-team-id'] !== undefined) input.newIssueTeamId = argv['new-issue-team-id'];
        if (argv['project-id'] !== undefined) input.projectId = argv['project-id'];
        if (argv['undo-issue-team-ids'] !== undefined) input.undoIssueTeamIds = argv['undo-issue-team-ids'];
        if (argv['undo-project-team-ids'] !== undefined) input.undoProjectTeamIds = parseJsonFlag(argv['undo-project-team-ids']);
        variables.input = input;
      }
      const result = await request(projectMilestoneMove, variables);
      render(result.projectMilestoneMove, { json: argv.json });
    } catch (err) {
      handleError(err);
    }
  });

  // mutation: projectMilestoneUpdate
  yargs.command('update <id>', 'Updates a project milestone.', (yargs) => {
    yargs.positional('id', { type: 'string', describe: 'The identifier of the project milestone to update. Also the identifier from the URL is accepted.' });
    yargs.option('description', { type: 'string', describe: 'The description of the project milestone in markdown format.' });
    yargs.option('description-data', { type: 'string', describe: '[Internal] The description of the project milestone as a Prosemirror document.' });
    yargs.option('name', { type: 'string', describe: 'The name of the project milestone.' });
    yargs.option('project-id', { type: 'string', describe: 'Related project for the project milestone.' });
    yargs.option('sort-order', { type: 'number', describe: 'The sort order for the project milestone within a project.' });
    yargs.option('target-date', { type: 'string', describe: 'The planned target date of the project milestone.' });
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
        if (argv['description'] !== undefined) input.description = argv['description'];
        if (argv['description-data'] !== undefined) input.descriptionData = parseJsonFlag(argv['description-data']);
        if (argv['name'] !== undefined) input.name = argv['name'];
        if (argv['project-id'] !== undefined) input.projectId = argv['project-id'];
        if (argv['sort-order'] !== undefined) input.sortOrder = argv['sort-order'];
        if (argv['target-date'] !== undefined) input.targetDate = argv['target-date'];
        variables.input = input;
      }
      const result = await request(projectMilestoneUpdate, variables);
      render(result.projectMilestoneUpdate, { json: argv.json });
    } catch (err) {
      handleError(err);
    }
  });

  return yargs.demandCommand(1, 'Specify a subcommand').strict();
}

export function handler() {}
