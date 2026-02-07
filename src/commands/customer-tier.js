// AUTO-GENERATED — do not edit. Run `npm run generate` to regenerate.
import { request } from '../client.js';
import { handleError } from '../error.js';
import { render } from '../output.js';
import { fetchAllPages } from '../pagination.js';
import { parseJsonFlag, kebabToCamel } from '../flag-utils.js';

import { customerTier } from '../generated/queries.js';
import { customerTierCreate, customerTierDelete, customerTierUpdate } from '../generated/mutations.js';

export const command = 'customer-tier <command>';
export const describe = 'customer-tier commands';

export function builder(yargs) {

  // query: customerTier
  yargs.command('get <id>', 'One specific customer tier.', (yargs) => {
    yargs.positional('id', { type: 'string', describe: 'id' });
    return yargs;
  }, async (argv) => {
    try {
      const variables = {};
      variables.id = argv.id;
      const result = await request(customerTier, variables);
      render(result.customerTier, { json: argv.json });
    } catch (err) {
      handleError(err);
    }
  });

  // mutation: customerTierCreate
  yargs.command('create', 'Creates a new customer tier.', (yargs) => {
    yargs.option('color', { type: 'string', demandOption: true, describe: 'The UI color of the tier as a HEX string.' });
    yargs.option('description', { type: 'string', describe: 'Description of the tier.' });
    yargs.option('display-name', { type: 'string', describe: 'The display name of the tier.' });
    yargs.option('id', { type: 'string', describe: 'The identifier in UUID v4 format. If none is provided, the backend will gener...' });
    yargs.option('name', { type: 'string', describe: 'The name of the tier.' });
    yargs.option('position', { type: 'number', describe: 'The position of the tier in the workspace\'s customer flow.' });
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
      const result = await request(customerTierCreate, variables);
      render(result.customerTierCreate, { json: argv.json });
    } catch (err) {
      handleError(err);
    }
  });

  // mutation: customerTierDelete
  yargs.command('delete <id>', 'Deletes a customer tier.', (yargs) => {
    yargs.positional('id', { type: 'string', describe: 'The identifier of the customer tier to delete.' });
    return yargs;
  }, async (argv) => {
    try {
      const variables = {};
      variables.id = argv.id;
      const result = await request(customerTierDelete, variables);
      render(result.customerTierDelete, { json: argv.json });
    } catch (err) {
      handleError(err);
    }
  });

  // mutation: customerTierUpdate
  yargs.command('update <id>', 'Updates a customer tier.', (yargs) => {
    yargs.positional('id', { type: 'string', describe: 'The identifier of the customer tier to update.' });
    yargs.option('color', { type: 'string', describe: 'The UI color of the tier as a HEX string.' });
    yargs.option('description', { type: 'string', describe: 'Description of the tier.' });
    yargs.option('display-name', { type: 'string', describe: 'The display name of the tier.' });
    yargs.option('name', { type: 'string', describe: 'The name of the tier.' });
    yargs.option('position', { type: 'number', describe: 'The position of the tier in the workspace\'s customer flow.' });
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
      const result = await request(customerTierUpdate, variables);
      render(result.customerTierUpdate, { json: argv.json });
    } catch (err) {
      handleError(err);
    }
  });

  return yargs.demandCommand(1, 'Specify a subcommand').strict();
}

export function handler() {}
