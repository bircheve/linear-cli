// AUTO-GENERATED — do not edit. Run `npm run generate` to regenerate.
import { request } from '../client.js';
import { handleError } from '../error.js';
import { render } from '../output.js';
import { fetchAllPages } from '../pagination.js';
import { parseJsonFlag, kebabToCamel } from '../flag-utils.js';

import { template, templates } from '../generated/queries.js';
import { templateCreate, templateDelete, templateUpdate } from '../generated/mutations.js';

export const command = 'template <command>';
export const describe = 'template commands';

export function builder(yargs) {

  // query: template
  yargs.command('get <id>', 'A specific template.', (yargs) => {
    yargs.positional('id', { type: 'string', describe: 'The identifier of the template to retrieve.' });
    return yargs;
  }, async (argv) => {
    try {
      const variables = {};
      variables.id = argv.id;
      const result = await request(template, variables);
      render(result.template, { json: argv.json });
    } catch (err) {
      handleError(err);
    }
  });

  // query: templates
  yargs.command('list', 'All templates from all users.', (yargs) => {
    return yargs;
  }, async (argv) => {
    try {
      const variables = {};
      const result = await request(templates, variables);
      render(result.templates, { json: argv.json });
    } catch (err) {
      handleError(err);
    }
  });

  // mutation: templateCreate
  yargs.command('create', 'Creates a new template.', (yargs) => {
    yargs.option('description', { type: 'string', describe: 'The template description.' });
    yargs.option('id', { type: 'string', describe: 'The identifier in UUID v4 format. If none is provided, the backend will gener...' });
    yargs.option('name', { type: 'string', demandOption: true, describe: 'The template name.' });
    yargs.option('sort-order', { type: 'number', describe: 'The position of the template in the templates list.' });
    yargs.option('team-id', { type: 'string', describe: 'The identifier or key of the team associated with the template. If not given,...' });
    yargs.option('template-data', { type: 'string', demandOption: true, describe: 'The template data as JSON encoded attributes of the type of entity, such as a...' });
    yargs.option('type', { type: 'string', demandOption: true, describe: 'The template type, e.g. \'issue\'.' });
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
        if (argv['id'] !== undefined) input.id = argv['id'];
        if (argv['name'] !== undefined) input.name = argv['name'];
        if (argv['sort-order'] !== undefined) input.sortOrder = argv['sort-order'];
        if (argv['team-id'] !== undefined) input.teamId = argv['team-id'];
        if (argv['template-data'] !== undefined) input.templateData = parseJsonFlag(argv['template-data']);
        if (argv['type'] !== undefined) input.type = argv['type'];
        variables.input = input;
      }
      const result = await request(templateCreate, variables);
      render(result.templateCreate, { json: argv.json });
    } catch (err) {
      handleError(err);
    }
  });

  // mutation: templateDelete
  yargs.command('delete <id>', 'Deletes a template.', (yargs) => {
    yargs.positional('id', { type: 'string', describe: 'The identifier of the template to delete.' });
    return yargs;
  }, async (argv) => {
    try {
      const variables = {};
      variables.id = argv.id;
      const result = await request(templateDelete, variables);
      render(result.templateDelete, { json: argv.json });
    } catch (err) {
      handleError(err);
    }
  });

  // mutation: templateUpdate
  yargs.command('update <id>', 'Updates an existing template.', (yargs) => {
    yargs.positional('id', { type: 'string', describe: 'The identifier of the template.' });
    yargs.option('description', { type: 'string', describe: 'The template description.' });
    yargs.option('name', { type: 'string', describe: 'The template name.' });
    yargs.option('sort-order', { type: 'number', describe: 'The position of the template in the templates list.' });
    yargs.option('team-id', { type: 'string', describe: 'The identifier or key of the team associated with the template. If set to nul...' });
    yargs.option('template-data', { type: 'string', describe: 'The template data as JSON encoded attributes of the type of entity, such as a...' });
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
        if (argv['name'] !== undefined) input.name = argv['name'];
        if (argv['sort-order'] !== undefined) input.sortOrder = argv['sort-order'];
        if (argv['team-id'] !== undefined) input.teamId = argv['team-id'];
        if (argv['template-data'] !== undefined) input.templateData = parseJsonFlag(argv['template-data']);
        variables.input = input;
      }
      const result = await request(templateUpdate, variables);
      render(result.templateUpdate, { json: argv.json });
    } catch (err) {
      handleError(err);
    }
  });

  return yargs.demandCommand(1, 'Specify a subcommand').strict();
}

export function handler() {}
