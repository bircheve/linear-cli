// AUTO-GENERATED — do not edit. Run `npm run generate` to regenerate.
import { request } from '../client.js';
import { handleError } from '../error.js';
import { render } from '../output.js';
import { fetchAllPages } from '../pagination.js';
import { parseJsonFlag, kebabToCamel } from '../flag-utils.js';

import { initiativeRelation } from '../generated/queries.js';
import { initiativeRelationCreate, initiativeRelationDelete, initiativeRelationUpdate } from '../generated/mutations.js';

export const command = 'initiative-relation <command>';
export const describe = 'initiative-relation commands';

export function builder(yargs) {

  // query: initiativeRelation
  yargs.command('get <id>', 'One specific initiative relation.', (yargs) => {
    yargs.positional('id', { type: 'string', describe: 'id' });
    return yargs;
  }, async (argv) => {
    try {
      const variables = {};
      variables.id = argv.id;
      const result = await request(initiativeRelation, variables);
      render(result.initiativeRelation, { json: argv.json });
    } catch (err) {
      handleError(err);
    }
  });

  // mutation: initiativeRelationCreate
  yargs.command('create', 'Creates a new initiative relation.', (yargs) => {
    yargs.option('id', { type: 'string', describe: 'The identifier in UUID v4 format. If none is provided, the backend will gener...' });
    yargs.option('initiative-id', { type: 'string', demandOption: true, describe: 'The identifier of the parent initiative.' });
    yargs.option('related-initiative-id', { type: 'string', demandOption: true, describe: 'The identifier of the child initiative.' });
    yargs.option('sort-order', { type: 'number', describe: 'The sort order of the initiative relation.' });
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
        if (argv['related-initiative-id'] !== undefined) input.relatedInitiativeId = argv['related-initiative-id'];
        if (argv['sort-order'] !== undefined) input.sortOrder = argv['sort-order'];
        variables.input = input;
      }
      const result = await request(initiativeRelationCreate, variables);
      render(result.initiativeRelationCreate, { json: argv.json });
    } catch (err) {
      handleError(err);
    }
  });

  // mutation: initiativeRelationDelete
  yargs.command('delete <id>', 'Deletes an initiative relation.', (yargs) => {
    yargs.positional('id', { type: 'string', describe: 'The identifier of the initiative relation to delete.' });
    return yargs;
  }, async (argv) => {
    try {
      const variables = {};
      variables.id = argv.id;
      const result = await request(initiativeRelationDelete, variables);
      render(result.initiativeRelationDelete, { json: argv.json });
    } catch (err) {
      handleError(err);
    }
  });

  // mutation: initiativeRelationUpdate
  yargs.command('update <id>', 'Updates an initiative relation.', (yargs) => {
    yargs.positional('id', { type: 'string', describe: 'The identifier of the initiative relation to update.' });
    yargs.option('sort-order', { type: 'number', describe: 'The sort order of the initiative relation.' });
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
      const result = await request(initiativeRelationUpdate, variables);
      render(result.initiativeRelationUpdate, { json: argv.json });
    } catch (err) {
      handleError(err);
    }
  });

  return yargs.demandCommand(1, 'Specify a subcommand').strict();
}

export function handler() {}
