// AUTO-GENERATED — do not edit. Run `npm run generate` to regenerate.
import { request } from '../client.js';
import { handleError } from '../error.js';
import { render } from '../output.js';
import { fetchAllPages } from '../pagination.js';
import { parseJsonFlag, kebabToCamel } from '../flag-utils.js';

import { entityExternalLink } from '../generated/queries.js';
import { entityExternalLinkCreate, entityExternalLinkDelete, entityExternalLinkUpdate } from '../generated/mutations.js';

export const command = 'entity-external-link <command>';
export const describe = 'entity-external-link commands';

export function builder(yargs) {

  // query: entityExternalLink
  yargs.command('get <id>', 'One specific entity link.', (yargs) => {
    yargs.positional('id', { type: 'string', describe: 'id' });
    return yargs;
  }, async (argv) => {
    try {
      const variables = {};
      variables.id = argv.id;
      const result = await request(entityExternalLink, variables);
      render(result.entityExternalLink, { json: argv.json });
    } catch (err) {
      handleError(err);
    }
  });

  // mutation: entityExternalLinkCreate
  yargs.command('create', 'Creates a new entity link.', (yargs) => {
    yargs.option('id', { type: 'string', describe: 'The identifier in UUID v4 format. If none is provided, the backend will gener...' });
    yargs.option('initiative-id', { type: 'string', describe: 'The initiative associated with the link.' });
    yargs.option('label', { type: 'string', demandOption: true, describe: 'The label for the link.' });
    yargs.option('project-id', { type: 'string', describe: 'The project associated with the link.' });
    yargs.option('resource-folder-id', { type: 'string', describe: '[Internal] The resource folder containing the link.' });
    yargs.option('sort-order', { type: 'number', describe: 'The order of the item in the entities resources list.' });
    yargs.option('team-id', { type: 'string', describe: '[Internal] The team associated with the link.' });
    yargs.option('url', { type: 'string', demandOption: true, describe: 'The URL of the link.' });
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
        if (argv['label'] !== undefined) input.label = argv['label'];
        if (argv['project-id'] !== undefined) input.projectId = argv['project-id'];
        if (argv['resource-folder-id'] !== undefined) input.resourceFolderId = argv['resource-folder-id'];
        if (argv['sort-order'] !== undefined) input.sortOrder = argv['sort-order'];
        if (argv['team-id'] !== undefined) input.teamId = argv['team-id'];
        if (argv['url'] !== undefined) input.url = argv['url'];
        variables.input = input;
      }
      const result = await request(entityExternalLinkCreate, variables);
      render(result.entityExternalLinkCreate, { json: argv.json });
    } catch (err) {
      handleError(err);
    }
  });

  // mutation: entityExternalLinkDelete
  yargs.command('delete <id>', 'Deletes an entity link.', (yargs) => {
    yargs.positional('id', { type: 'string', describe: 'The identifier of the entity link to delete.' });
    return yargs;
  }, async (argv) => {
    try {
      const variables = {};
      variables.id = argv.id;
      const result = await request(entityExternalLinkDelete, variables);
      render(result.entityExternalLinkDelete, { json: argv.json });
    } catch (err) {
      handleError(err);
    }
  });

  // mutation: entityExternalLinkUpdate
  yargs.command('update <id>', 'Updates an entity link.', (yargs) => {
    yargs.positional('id', { type: 'string', describe: 'The identifier of the entity link to update.' });
    yargs.option('label', { type: 'string', describe: 'The label for the link.' });
    yargs.option('resource-folder-id', { type: 'string', describe: '[Internal] The resource folder containing the link.' });
    yargs.option('sort-order', { type: 'number', describe: 'The order of the item in the entities resources list.' });
    yargs.option('url', { type: 'string', describe: 'The URL of the link.' });
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
        if (argv['label'] !== undefined) input.label = argv['label'];
        if (argv['resource-folder-id'] !== undefined) input.resourceFolderId = argv['resource-folder-id'];
        if (argv['sort-order'] !== undefined) input.sortOrder = argv['sort-order'];
        if (argv['url'] !== undefined) input.url = argv['url'];
        variables.input = input;
      }
      const result = await request(entityExternalLinkUpdate, variables);
      render(result.entityExternalLinkUpdate, { json: argv.json });
    } catch (err) {
      handleError(err);
    }
  });

  return yargs.demandCommand(1, 'Specify a subcommand').strict();
}

export function handler() {}
