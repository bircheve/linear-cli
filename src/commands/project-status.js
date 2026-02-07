// AUTO-GENERATED — do not edit. Run `npm run generate` to regenerate.
import { request } from '../client.js';
import { handleError } from '../error.js';
import { render } from '../output.js';
import { fetchAllPages } from '../pagination.js';
import { parseJsonFlag, kebabToCamel } from '../flag-utils.js';

import { projectStatus } from '../generated/queries.js';
import { projectStatusArchive, projectStatusCreate, projectStatusUnarchive, projectStatusUpdate } from '../generated/mutations.js';

export const command = 'project-status <command>';
export const describe = 'project-status commands';

export function builder(yargs) {

  // query: projectStatus
  yargs.command('get <id>', 'One specific project status.', (yargs) => {
    yargs.positional('id', { type: 'string', describe: 'id' });
    return yargs;
  }, async (argv) => {
    try {
      const variables = {};
      variables.id = argv.id;
      const result = await request(projectStatus, variables);
      render(result.projectStatus, { json: argv.json });
    } catch (err) {
      handleError(err);
    }
  });

  // mutation: projectStatusArchive
  yargs.command('archive <id>', 'Archives a project status.', (yargs) => {
    yargs.positional('id', { type: 'string', describe: 'The identifier of the project status to archive.' });
    return yargs;
  }, async (argv) => {
    try {
      const variables = {};
      variables.id = argv.id;
      const result = await request(projectStatusArchive, variables);
      render(result.projectStatusArchive, { json: argv.json });
    } catch (err) {
      handleError(err);
    }
  });

  // mutation: projectStatusCreate
  yargs.command('create', 'Creates a new project status.', (yargs) => {
    yargs.option('color', { type: 'string', demandOption: true, describe: 'The UI color of the status as a HEX string.' });
    yargs.option('description', { type: 'string', describe: 'Description of the status.' });
    yargs.option('id', { type: 'string', describe: 'The identifier in UUID v4 format. If none is provided, the backend will gener...' });
    yargs.option('indefinite', { type: 'boolean', describe: 'Whether or not a project can be in this status indefinitely.' });
    yargs.option('name', { type: 'string', demandOption: true, describe: 'The name of the status.' });
    yargs.option('position', { type: 'number', demandOption: true, describe: 'The position of the status in the workspace\'s project flow.' });
    yargs.option('type', { type: 'string', demandOption: true, choices: ["backlog","canceled","completed","paused","planned","started"], describe: 'The type of the project status.' });
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
        if (argv['indefinite'] !== undefined) input.indefinite = argv['indefinite'];
        if (argv['name'] !== undefined) input.name = argv['name'];
        if (argv['position'] !== undefined) input.position = argv['position'];
        if (argv['type'] !== undefined) input.type = argv['type'];
        variables.input = input;
      }
      const result = await request(projectStatusCreate, variables);
      render(result.projectStatusCreate, { json: argv.json });
    } catch (err) {
      handleError(err);
    }
  });

  // mutation: projectStatusUnarchive
  yargs.command('unarchive <id>', 'Unarchives a project status.', (yargs) => {
    yargs.positional('id', { type: 'string', describe: 'The identifier of the project status to unarchive.' });
    return yargs;
  }, async (argv) => {
    try {
      const variables = {};
      variables.id = argv.id;
      const result = await request(projectStatusUnarchive, variables);
      render(result.projectStatusUnarchive, { json: argv.json });
    } catch (err) {
      handleError(err);
    }
  });

  // mutation: projectStatusUpdate
  yargs.command('update <id>', 'Updates a project status.', (yargs) => {
    yargs.positional('id', { type: 'string', describe: 'The identifier of the project status to update.' });
    yargs.option('color', { type: 'string', describe: 'The UI color of the status as a HEX string.' });
    yargs.option('description', { type: 'string', describe: 'Description of the status.' });
    yargs.option('indefinite', { type: 'boolean', describe: 'Whether or not a project can be in this status indefinitely.' });
    yargs.option('name', { type: 'string', describe: 'The name of the status.' });
    yargs.option('position', { type: 'number', describe: 'The position of the status in the workspace\'s project flow.' });
    yargs.option('type', { type: 'string', choices: ["backlog","canceled","completed","paused","planned","started"], describe: 'The type of the project status.' });
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
        if (argv['indefinite'] !== undefined) input.indefinite = argv['indefinite'];
        if (argv['name'] !== undefined) input.name = argv['name'];
        if (argv['position'] !== undefined) input.position = argv['position'];
        if (argv['type'] !== undefined) input.type = argv['type'];
        variables.input = input;
      }
      const result = await request(projectStatusUpdate, variables);
      render(result.projectStatusUpdate, { json: argv.json });
    } catch (err) {
      handleError(err);
    }
  });

  return yargs.demandCommand(1, 'Specify a subcommand').strict();
}

export function handler() {}
