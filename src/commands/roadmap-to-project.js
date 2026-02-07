// AUTO-GENERATED — do not edit. Run `npm run generate` to regenerate.
import { request } from '../client.js';
import { handleError } from '../error.js';
import { render } from '../output.js';
import { fetchAllPages } from '../pagination.js';
import { parseJsonFlag, kebabToCamel } from '../flag-utils.js';
import { columns } from '../generated/columns.js';

import { roadmapToProject } from '../generated/queries.js';
import { roadmapToProjectCreate, roadmapToProjectDelete, roadmapToProjectUpdate } from '../generated/mutations.js';

export const command = 'roadmap-to-project <command>';
export const describe = 'roadmap-to-project commands';

export function builder(yargs) {

  // query: roadmapToProject
  yargs.command('get <id>', 'One specific roadmapToProject.', (yargs) => {
    yargs.positional('id', { type: 'string', describe: 'id' });
    return yargs;
  }, async (argv) => {
    try {
      const variables = {};
      variables.id = argv.id;
      const result = await request(roadmapToProject, variables);
      render(result.roadmapToProject, { json: argv.json, columnConfig: columns['RoadmapToProject'] });
    } catch (err) {
      handleError(err);
    }
  });

  // mutation: roadmapToProjectCreate
  yargs.command('create', 'Creates a new roadmapToProject join.', (yargs) => {
    yargs.option('id', { type: 'string', describe: 'The identifier in UUID v4 format. If none is provided, the backend will gener...' });
    yargs.option('project-id', { type: 'string', demandOption: true, describe: 'The identifier of the project.' });
    yargs.option('roadmap-id', { type: 'string', demandOption: true, describe: 'The identifier of the roadmap.' });
    yargs.option('sort-order', { type: 'number', describe: 'The sort order for the project within its organization.' });
    yargs.option('input-json', { type: 'string', describe: 'Full input as JSON (or @file.json)' });
    return yargs;
  }, async (argv) => {
    try {
      const variables = {};
      if (argv['input-json']) {
        variables.input = parseJsonFlag(argv['input-json']);
      } else {
        const input = {};
        if (argv['id'] !== undefined) input.id = argv['id'];
        if (argv['project-id'] !== undefined) input.projectId = argv['project-id'];
        if (argv['roadmap-id'] !== undefined) input.roadmapId = argv['roadmap-id'];
        if (argv['sort-order'] !== undefined) input.sortOrder = argv['sort-order'];
        variables.input = input;
      }
      const result = await request(roadmapToProjectCreate, variables);
      render(result.roadmapToProjectCreate, { json: argv.json });
    } catch (err) {
      handleError(err);
    }
  });

  // mutation: roadmapToProjectDelete
  yargs.command('delete <id>', 'Deletes a roadmapToProject.', (yargs) => {
    yargs.positional('id', { type: 'string', describe: 'The identifier of the roadmapToProject to delete.' });
    return yargs;
  }, async (argv) => {
    try {
      const variables = {};
      variables.id = argv.id;
      const result = await request(roadmapToProjectDelete, variables);
      render(result.roadmapToProjectDelete, { json: argv.json });
    } catch (err) {
      handleError(err);
    }
  });

  // mutation: roadmapToProjectUpdate
  yargs.command('update <id>', 'Updates a roadmapToProject.', (yargs) => {
    yargs.positional('id', { type: 'string', describe: 'The identifier of the roadmapToProject to update.' });
    yargs.option('sort-order', { type: 'number', describe: 'The sort order for the project within its organization.' });
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
        if (argv['sort-order'] !== undefined) input.sortOrder = argv['sort-order'];
        variables.input = input;
      }
      const result = await request(roadmapToProjectUpdate, variables);
      render(result.roadmapToProjectUpdate, { json: argv.json });
    } catch (err) {
      handleError(err);
    }
  });

  return yargs.demandCommand(1, 'Specify a subcommand').strict();
}

export function handler() {}
