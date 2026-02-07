// AUTO-GENERATED — do not edit. Run `npm run generate` to regenerate.
import { request } from '../client.js';
import { handleError } from '../error.js';
import { render } from '../output.js';
import { fetchAllPages } from '../pagination.js';
import { parseJsonFlag, kebabToCamel } from '../flag-utils.js';

import { customerStatus } from '../generated/queries.js';
import { customerStatusCreate, customerStatusDelete, customerStatusUpdate } from '../generated/mutations.js';

export const command = 'customer-status <command>';
export const describe = 'customer-status commands';

export function builder(yargs) {

  // query: customerStatus
  yargs.command('get <id>', 'One specific customer status.', (yargs) => {
    yargs.positional('id', { type: 'string', describe: 'id' });
    return yargs;
  }, async (argv) => {
    try {
      const variables = {};
      variables.id = argv.id;
      const result = await request(customerStatus, variables);
      render(result.customerStatus, { json: argv.json });
    } catch (err) {
      handleError(err);
    }
  });

  // mutation: customerStatusCreate
  yargs.command('create', 'Creates a new customer status.', (yargs) => {
    yargs.option('color', { type: 'string', demandOption: true, describe: 'The UI color of the status as a HEX string.' });
    yargs.option('description', { type: 'string', describe: 'Description of the status.' });
    yargs.option('display-name', { type: 'string', describe: 'The display name of the status.' });
    yargs.option('id', { type: 'string', describe: 'The identifier in UUID v4 format. If none is provided, the backend will gener...' });
    yargs.option('name', { type: 'string', describe: 'The name of the status.' });
    yargs.option('position', { type: 'number', describe: 'The position of the status in the workspace\'s customer flow.' });
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
        if (argv['display-name'] !== undefined) input.displayName = argv['display-name'];
        if (argv['id'] !== undefined) input.id = argv['id'];
        if (argv['name'] !== undefined) input.name = argv['name'];
        if (argv['position'] !== undefined) input.position = argv['position'];
        variables.input = input;
      }
      const result = await request(customerStatusCreate, variables);
      render(result.customerStatusCreate, { json: argv.json });
    } catch (err) {
      handleError(err);
    }
  });

  // mutation: customerStatusDelete
  yargs.command('delete <id>', 'Deletes a customer status.', (yargs) => {
    yargs.positional('id', { type: 'string', describe: 'The identifier of the customer status to delete.' });
    return yargs;
  }, async (argv) => {
    try {
      const variables = {};
      variables.id = argv.id;
      const result = await request(customerStatusDelete, variables);
      render(result.customerStatusDelete, { json: argv.json });
    } catch (err) {
      handleError(err);
    }
  });

  // mutation: customerStatusUpdate
  yargs.command('update <id>', 'Updates a customer status.', (yargs) => {
    yargs.positional('id', { type: 'string', describe: 'The identifier of the customer status to update.' });
    yargs.option('color', { type: 'string', describe: 'The UI color of the status as a HEX string.' });
    yargs.option('description', { type: 'string', describe: 'Description of the status.' });
    yargs.option('display-name', { type: 'string', describe: 'The display name of the status.' });
    yargs.option('name', { type: 'string', describe: 'The name of the status.' });
    yargs.option('position', { type: 'number', describe: 'The position of the status in the workspace\'s customer flow.' });
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
        if (argv['display-name'] !== undefined) input.displayName = argv['display-name'];
        if (argv['name'] !== undefined) input.name = argv['name'];
        if (argv['position'] !== undefined) input.position = argv['position'];
        variables.input = input;
      }
      const result = await request(customerStatusUpdate, variables);
      render(result.customerStatusUpdate, { json: argv.json });
    } catch (err) {
      handleError(err);
    }
  });

  return yargs.demandCommand(1, 'Specify a subcommand').strict();
}

export function handler() {}
