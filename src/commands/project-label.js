// AUTO-GENERATED — do not edit. Run `npm run generate` to regenerate.
import { request } from '../client.js';
import { handleError } from '../error.js';
import { render } from '../output.js';
import { fetchAllPages } from '../pagination.js';
import { parseJsonFlag, kebabToCamel } from '../flag-utils.js';

import { projectLabel } from '../generated/queries.js';
import { projectLabelCreate, projectLabelDelete, projectLabelUpdate } from '../generated/mutations.js';

export const command = 'project-label <command>';
export const describe = 'project-label commands';

export function builder(yargs) {

  // query: projectLabel
  yargs.command('get <id>', 'One specific label.', (yargs) => {
    yargs.positional('id', { type: 'string', describe: 'id' });
    return yargs;
  }, async (argv) => {
    try {
      const variables = {};
      variables.id = argv.id;
      const result = await request(projectLabel, variables);
      render(result.projectLabel, { json: argv.json });
    } catch (err) {
      handleError(err);
    }
  });

  // mutation: projectLabelCreate
  yargs.command('create', 'Creates a new project label.', (yargs) => {
    yargs.option('color', { type: 'string', describe: 'The color of the label.' });
    yargs.option('description', { type: 'string', describe: 'The description of the label.' });
    yargs.option('id', { type: 'string', describe: 'The identifier in UUID v4 format. If none is provided, the backend will gener...' });
    yargs.option('is-group', { type: 'boolean', describe: 'Whether the label is a group.' });
    yargs.option('name', { type: 'string', demandOption: true, describe: 'The name of the label.' });
    yargs.option('parent-id', { type: 'string', describe: 'The identifier of the parent label.' });
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
        if (argv['is-group'] !== undefined) input.isGroup = argv['is-group'];
        if (argv['name'] !== undefined) input.name = argv['name'];
        if (argv['parent-id'] !== undefined) input.parentId = argv['parent-id'];
        variables.input = input;
      }
      const result = await request(projectLabelCreate, variables);
      render(result.projectLabelCreate, { json: argv.json });
    } catch (err) {
      handleError(err);
    }
  });

  // mutation: projectLabelDelete
  yargs.command('delete <id>', 'Deletes a project label.', (yargs) => {
    yargs.positional('id', { type: 'string', describe: 'The identifier of the label to delete.' });
    return yargs;
  }, async (argv) => {
    try {
      const variables = {};
      variables.id = argv.id;
      const result = await request(projectLabelDelete, variables);
      render(result.projectLabelDelete, { json: argv.json });
    } catch (err) {
      handleError(err);
    }
  });

  // mutation: projectLabelUpdate
  yargs.command('update <id>', 'Updates a project label.', (yargs) => {
    yargs.positional('id', { type: 'string', describe: 'The identifier of the label to update.' });
    yargs.option('color', { type: 'string', describe: 'The color of the label.' });
    yargs.option('description', { type: 'string', describe: 'The description of the label.' });
    yargs.option('is-group', { type: 'boolean', describe: 'Whether the label is a group.' });
    yargs.option('name', { type: 'string', describe: 'The name of the label.' });
    yargs.option('parent-id', { type: 'string', describe: 'The identifier of the parent label.' });
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
        if (argv['is-group'] !== undefined) input.isGroup = argv['is-group'];
        if (argv['name'] !== undefined) input.name = argv['name'];
        if (argv['parent-id'] !== undefined) input.parentId = argv['parent-id'];
        variables.input = input;
      }
      const result = await request(projectLabelUpdate, variables);
      render(result.projectLabelUpdate, { json: argv.json });
    } catch (err) {
      handleError(err);
    }
  });

  return yargs.demandCommand(1, 'Specify a subcommand').strict();
}

export function handler() {}
