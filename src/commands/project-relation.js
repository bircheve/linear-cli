// AUTO-GENERATED — do not edit. Run `npm run generate` to regenerate.
import { request } from '../client.js';
import { handleError } from '../error.js';
import { render } from '../output.js';
import { fetchAllPages } from '../pagination.js';
import { parseJsonFlag, kebabToCamel } from '../flag-utils.js';
import { columns } from '../generated/columns.js';

import { projectRelation } from '../generated/queries.js';
import { projectRelationCreate, projectRelationDelete, projectRelationUpdate } from '../generated/mutations.js';

export const command = 'project-relation <command>';
export const describe = 'project-relation commands';

export function builder(yargs) {

  // query: projectRelation
  yargs.command('get <id>', 'One specific project relation.', (yargs) => {
    yargs.positional('id', { type: 'string', describe: 'id' });
    return yargs;
  }, async (argv) => {
    try {
      const variables = {};
      variables.id = argv.id;
      const result = await request(projectRelation, variables);
      render(result.projectRelation, { json: argv.json, columnConfig: columns['ProjectRelation'] });
    } catch (err) {
      handleError(err);
    }
  });

  // mutation: projectRelationCreate
  yargs.command('create', 'Creates a new project relation.', (yargs) => {
    yargs.option('anchor-type', { type: 'string', demandOption: true, describe: 'The type of the anchor for the project.' });
    yargs.option('id', { type: 'string', describe: 'The identifier in UUID v4 format. If none is provided, the backend will gener...' });
    yargs.option('project-id', { type: 'string', demandOption: true, describe: 'The identifier of the project that is related to another project.' });
    yargs.option('project-milestone-id', { type: 'string', describe: 'The identifier of the project milestone.' });
    yargs.option('related-anchor-type', { type: 'string', demandOption: true, describe: 'The type of the anchor for the related project.' });
    yargs.option('related-project-id', { type: 'string', demandOption: true, describe: 'The identifier of the related project.' });
    yargs.option('related-project-milestone-id', { type: 'string', describe: 'The identifier of the related project milestone.' });
    yargs.option('type', { type: 'string', demandOption: true, describe: 'The type of relation of the project to the related project.' });
    yargs.option('input-json', { type: 'string', describe: 'Full input as JSON (or @file.json)' });
    return yargs;
  }, async (argv) => {
    try {
      const variables = {};
      if (argv['input-json']) {
        variables.input = parseJsonFlag(argv['input-json']);
      } else {
        const input = {};
        if (argv['anchor-type'] !== undefined) input.anchorType = argv['anchor-type'];
        if (argv['id'] !== undefined) input.id = argv['id'];
        if (argv['project-id'] !== undefined) input.projectId = argv['project-id'];
        if (argv['project-milestone-id'] !== undefined) input.projectMilestoneId = argv['project-milestone-id'];
        if (argv['related-anchor-type'] !== undefined) input.relatedAnchorType = argv['related-anchor-type'];
        if (argv['related-project-id'] !== undefined) input.relatedProjectId = argv['related-project-id'];
        if (argv['related-project-milestone-id'] !== undefined) input.relatedProjectMilestoneId = argv['related-project-milestone-id'];
        if (argv['type'] !== undefined) input.type = argv['type'];
        variables.input = input;
      }
      const result = await request(projectRelationCreate, variables);
      render(result.projectRelationCreate, { json: argv.json });
    } catch (err) {
      handleError(err);
    }
  });

  // mutation: projectRelationDelete
  yargs.command('delete <id>', 'Deletes a project relation.', (yargs) => {
    yargs.positional('id', { type: 'string', describe: 'The identifier of the project relation to delete.' });
    return yargs;
  }, async (argv) => {
    try {
      const variables = {};
      variables.id = argv.id;
      const result = await request(projectRelationDelete, variables);
      render(result.projectRelationDelete, { json: argv.json });
    } catch (err) {
      handleError(err);
    }
  });

  // mutation: projectRelationUpdate
  yargs.command('update <id>', 'Updates a project relation.', (yargs) => {
    yargs.positional('id', { type: 'string', describe: 'The identifier of the project relation to update.' });
    yargs.option('anchor-type', { type: 'string', describe: 'The type of the anchor for the project.' });
    yargs.option('project-id', { type: 'string', describe: 'The identifier of the project that is related to another project.' });
    yargs.option('project-milestone-id', { type: 'string', describe: 'The identifier of the project milestone.' });
    yargs.option('related-anchor-type', { type: 'string', describe: 'The type of the anchor for the related project.' });
    yargs.option('related-project-id', { type: 'string', describe: 'The identifier of the related project.' });
    yargs.option('related-project-milestone-id', { type: 'string', describe: 'The identifier of the related project milestone.' });
    yargs.option('type', { type: 'string', describe: 'The type of relation of the project to the related project.' });
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
        if (argv['anchor-type'] !== undefined) input.anchorType = argv['anchor-type'];
        if (argv['project-id'] !== undefined) input.projectId = argv['project-id'];
        if (argv['project-milestone-id'] !== undefined) input.projectMilestoneId = argv['project-milestone-id'];
        if (argv['related-anchor-type'] !== undefined) input.relatedAnchorType = argv['related-anchor-type'];
        if (argv['related-project-id'] !== undefined) input.relatedProjectId = argv['related-project-id'];
        if (argv['related-project-milestone-id'] !== undefined) input.relatedProjectMilestoneId = argv['related-project-milestone-id'];
        if (argv['type'] !== undefined) input.type = argv['type'];
        variables.input = input;
      }
      const result = await request(projectRelationUpdate, variables);
      render(result.projectRelationUpdate, { json: argv.json });
    } catch (err) {
      handleError(err);
    }
  });

  return yargs.demandCommand(1, 'Specify a subcommand').strict();
}

export function handler() {}
