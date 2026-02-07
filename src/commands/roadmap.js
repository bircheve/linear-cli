// AUTO-GENERATED — do not edit. Run `npm run generate` to regenerate.
import { request } from '../client.js';
import { handleError } from '../error.js';
import { render } from '../output.js';
import { fetchAllPages } from '../pagination.js';
import { parseJsonFlag, kebabToCamel } from '../flag-utils.js';
import { columns } from '../generated/columns.js';

import { roadmap, roadmapToProjects, roadmaps } from '../generated/queries.js';
import { roadmapArchive, roadmapCreate, roadmapDelete, roadmapUnarchive, roadmapUpdate } from '../generated/mutations.js';

export const command = 'roadmap <command>';
export const describe = 'roadmap commands';

export function builder(yargs) {

  // query: roadmap
  yargs.command('get <id>', 'One specific roadmap.', (yargs) => {
    yargs.positional('id', { type: 'string', describe: 'id' });
    return yargs;
  }, async (argv) => {
    try {
      const variables = {};
      variables.id = argv.id;
      const result = await request(roadmap, variables);
      render(result.roadmap, { json: argv.json, columnConfig: columns['Roadmap'] });
    } catch (err) {
      handleError(err);
    }
  });

  // query: roadmapToProjects
  yargs.command('to-projects', 'to-projects roadmapToProjects', (yargs) => {
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
        data = await fetchAllPages(request, roadmapToProjects, variables, 'roadmapToProjects');
      } else {
        const result = await request(roadmapToProjects, variables);
        data = result.roadmapToProjects?.nodes || [];
      }
      render(data, { json: argv.json, isList: true, columnConfig: columns['RoadmapToProject'] });
    } catch (err) {
      handleError(err);
    }
  });

  // query: roadmaps
  yargs.command('list', 'All roadmaps in the workspace.', (yargs) => {
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
        data = await fetchAllPages(request, roadmaps, variables, 'roadmaps');
      } else {
        const result = await request(roadmaps, variables);
        data = result.roadmaps?.nodes || [];
      }
      render(data, { json: argv.json, isList: true, columnConfig: columns['Roadmap'] });
    } catch (err) {
      handleError(err);
    }
  });

  // mutation: roadmapArchive
  yargs.command('archive <id>', 'Archives a roadmap.', (yargs) => {
    yargs.positional('id', { type: 'string', describe: 'The identifier of the roadmap to archive.' });
    return yargs;
  }, async (argv) => {
    try {
      const variables = {};
      variables.id = argv.id;
      const result = await request(roadmapArchive, variables);
      render(result.roadmapArchive, { json: argv.json });
    } catch (err) {
      handleError(err);
    }
  });

  // mutation: roadmapCreate
  yargs.command('create', 'Creates a new roadmap.', (yargs) => {
    yargs.option('color', { type: 'string', describe: 'The roadmap\'s color.' });
    yargs.option('description', { type: 'string', describe: 'The description of the roadmap.' });
    yargs.option('id', { type: 'string', describe: 'The identifier in UUID v4 format. If none is provided, the backend will gener...' });
    yargs.option('name', { type: 'string', demandOption: true, describe: 'The name of the roadmap.' });
    yargs.option('owner-id', { type: 'string', describe: 'The owner of the roadmap.' });
    yargs.option('sort-order', { type: 'number', describe: 'The sort order of the roadmap within the organization.' });
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
        if (argv['description'] !== undefined) input.description = argv['description'];
        if (argv['id'] !== undefined) input.id = argv['id'];
        if (argv['name'] !== undefined) input.name = argv['name'];
        if (argv['owner-id'] !== undefined) input.ownerId = argv['owner-id'];
        if (argv['sort-order'] !== undefined) input.sortOrder = argv['sort-order'];
        variables.input = input;
      }
      const result = await request(roadmapCreate, variables);
      render(result.roadmapCreate, { json: argv.json });
    } catch (err) {
      handleError(err);
    }
  });

  // mutation: roadmapDelete
  yargs.command('delete <id>', 'Deletes a roadmap.', (yargs) => {
    yargs.positional('id', { type: 'string', describe: 'The identifier of the roadmap to delete.' });
    return yargs;
  }, async (argv) => {
    try {
      const variables = {};
      variables.id = argv.id;
      const result = await request(roadmapDelete, variables);
      render(result.roadmapDelete, { json: argv.json });
    } catch (err) {
      handleError(err);
    }
  });

  // mutation: roadmapUnarchive
  yargs.command('unarchive <id>', 'Unarchives a roadmap.', (yargs) => {
    yargs.positional('id', { type: 'string', describe: 'The identifier of the roadmap to unarchive.' });
    return yargs;
  }, async (argv) => {
    try {
      const variables = {};
      variables.id = argv.id;
      const result = await request(roadmapUnarchive, variables);
      render(result.roadmapUnarchive, { json: argv.json });
    } catch (err) {
      handleError(err);
    }
  });

  // mutation: roadmapUpdate
  yargs.command('update <id>', 'Updates a roadmap.', (yargs) => {
    yargs.positional('id', { type: 'string', describe: 'The identifier of the roadmap to update.' });
    yargs.option('color', { type: 'string', describe: 'The roadmap\'s color.' });
    yargs.option('description', { type: 'string', describe: 'The description of the roadmap.' });
    yargs.option('name', { type: 'string', describe: 'The name of the roadmap.' });
    yargs.option('owner-id', { type: 'string', describe: 'The owner of the roadmap.' });
    yargs.option('sort-order', { type: 'number', describe: 'The sort order of the roadmap within the organization.' });
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
        if (argv['description'] !== undefined) input.description = argv['description'];
        if (argv['name'] !== undefined) input.name = argv['name'];
        if (argv['owner-id'] !== undefined) input.ownerId = argv['owner-id'];
        if (argv['sort-order'] !== undefined) input.sortOrder = argv['sort-order'];
        variables.input = input;
      }
      const result = await request(roadmapUpdate, variables);
      render(result.roadmapUpdate, { json: argv.json });
    } catch (err) {
      handleError(err);
    }
  });

  return yargs.demandCommand(1, 'Specify a subcommand').strict();
}

export function handler() {}
