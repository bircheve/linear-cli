// AUTO-GENERATED — do not edit. Run `npm run generate` to regenerate.
import { request } from '../client.js';
import { handleError } from '../error.js';
import { render } from '../output.js';
import { fetchAllPages } from '../pagination.js';
import { parseJsonFlag, kebabToCamel } from '../flag-utils.js';
import { columns } from '../generated/columns.js';

import { initiativeToProject } from '../generated/queries.js';
import { initiativeToProjectCreate, initiativeToProjectDelete, initiativeToProjectUpdate } from '../generated/mutations.js';

export const command = 'initiative-to-project <command>';
export const describe = 'initiative-to-project commands';

export function builder(yargs) {

  // query: initiativeToProject
  yargs.command('get <id>', 'One specific initiativeToProject.', (yargs) => {
    yargs.positional('id', { type: 'string', describe: 'id' });
    return yargs;
  }, async (argv) => {
    try {
      const variables = {};
      variables.id = argv.id;
      const result = await request(initiativeToProject, variables);
      render(result.initiativeToProject, { json: argv.json, columnConfig: columns['InitiativeToProject'] });
    } catch (err) {
      handleError(err);
    }
  });

  // mutation: initiativeToProjectCreate
  yargs.command('create', 'Creates a new initiativeToProject join.', (yargs) => {
    yargs.option('id', { type: 'string', describe: 'The identifier in UUID v4 format. If none is provided, the backend will gener...' });
    yargs.option('initiative-id', { type: 'string', demandOption: true, describe: 'The identifier of the initiative.' });
    yargs.option('project-id', { type: 'string', demandOption: true, describe: 'The identifier of the project.' });
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
        if (argv['initiative-id'] !== undefined) input.initiativeId = argv['initiative-id'];
        if (argv['project-id'] !== undefined) input.projectId = argv['project-id'];
        if (argv['sort-order'] !== undefined) input.sortOrder = argv['sort-order'];
        variables.input = input;
      }
      const result = await request(initiativeToProjectCreate, variables);
      render(result.initiativeToProjectCreate, { json: argv.json });
    } catch (err) {
      handleError(err);
    }
  });

  // mutation: initiativeToProjectDelete
  yargs.command('delete <id>', 'Deletes a initiativeToProject.', (yargs) => {
    yargs.positional('id', { type: 'string', describe: 'The identifier of the initiativeToProject to delete.' });
    return yargs;
  }, async (argv) => {
    try {
      const variables = {};
      variables.id = argv.id;
      const result = await request(initiativeToProjectDelete, variables);
      render(result.initiativeToProjectDelete, { json: argv.json });
    } catch (err) {
      handleError(err);
    }
  });

  // mutation: initiativeToProjectUpdate
  yargs.command('update <id>', 'Updates a initiativeToProject.', (yargs) => {
    yargs.positional('id', { type: 'string', describe: 'The identifier of the initiativeToProject to update.' });
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
      const result = await request(initiativeToProjectUpdate, variables);
      render(result.initiativeToProjectUpdate, { json: argv.json });
    } catch (err) {
      handleError(err);
    }
  });

  return yargs.demandCommand(1, 'Specify a subcommand').strict();
}

export function handler() {}
