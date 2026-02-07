// AUTO-GENERATED — do not edit. Run `npm run generate` to regenerate.
import { request } from '../client.js';
import { handleError } from '../error.js';
import { render } from '../output.js';
import { fetchAllPages } from '../pagination.js';
import { parseJsonFlag, kebabToCamel } from '../flag-utils.js';

import { integrationTemplate } from '../generated/queries.js';
import { integrationTemplateCreate, integrationTemplateDelete } from '../generated/mutations.js';

export const command = 'integration-template <command>';
export const describe = 'integration-template commands';

export function builder(yargs) {

  // query: integrationTemplate
  yargs.command('get <id>', 'One specific integrationTemplate.', (yargs) => {
    yargs.positional('id', { type: 'string', describe: 'id' });
    return yargs;
  }, async (argv) => {
    try {
      const variables = {};
      variables.id = argv.id;
      const result = await request(integrationTemplate, variables);
      render(result.integrationTemplate, { json: argv.json });
    } catch (err) {
      handleError(err);
    }
  });

  // mutation: integrationTemplateCreate
  yargs.command('create', 'Creates a new integrationTemplate join.', (yargs) => {
    yargs.option('foreign-entity-id', { type: 'string', describe: 'The foreign identifier in the other service.' });
    yargs.option('id', { type: 'string', describe: 'The identifier in UUID v4 format. If none is provided, the backend will gener...' });
    yargs.option('integration-id', { type: 'string', demandOption: true, describe: 'The identifier of the integration.' });
    yargs.option('template-id', { type: 'string', demandOption: true, describe: 'The identifier of the template.' });
    yargs.option('input-json', { type: 'string', describe: 'Full input as JSON (or @file.json)' });
    return yargs;
  }, async (argv) => {
    try {
      const variables = {};
      if (argv['input-json']) {
        variables.input = parseJsonFlag(argv['input-json']);
      } else {
        const input = {};
        if (argv['foreign-entity-id'] !== undefined) input.foreignEntityId = argv['foreign-entity-id'];
        if (argv['id'] !== undefined) input.id = argv['id'];
        if (argv['integration-id'] !== undefined) input.integrationId = argv['integration-id'];
        if (argv['template-id'] !== undefined) input.templateId = argv['template-id'];
        variables.input = input;
      }
      const result = await request(integrationTemplateCreate, variables);
      render(result.integrationTemplateCreate, { json: argv.json });
    } catch (err) {
      handleError(err);
    }
  });

  // mutation: integrationTemplateDelete
  yargs.command('delete <id>', 'Deletes a integrationTemplate.', (yargs) => {
    yargs.positional('id', { type: 'string', describe: 'The identifier of the integrationTemplate to delete.' });
    return yargs;
  }, async (argv) => {
    try {
      const variables = {};
      variables.id = argv.id;
      const result = await request(integrationTemplateDelete, variables);
      render(result.integrationTemplateDelete, { json: argv.json });
    } catch (err) {
      handleError(err);
    }
  });

  return yargs.demandCommand(1, 'Specify a subcommand').strict();
}

export function handler() {}
