// AUTO-GENERATED — do not edit. Run `npm run generate` to regenerate.
import { request } from '../client.js';
import { handleError } from '../error.js';
import { render } from '../output.js';
import { fetchAllPages } from '../pagination.js';
import { parseJsonFlag, kebabToCamel } from '../flag-utils.js';
import { columns } from '../generated/columns.js';

import { document, documents } from '../generated/queries.js';
import { documentCreate, documentDelete, documentUnarchive, documentUpdate } from '../generated/mutations.js';

export const command = 'document <command>';
export const describe = 'document commands';

export function builder(yargs) {

  // query: document
  yargs.command('get <id>', 'One specific document.', (yargs) => {
    yargs.positional('id', { type: 'string', describe: 'id' });
    return yargs;
  }, async (argv) => {
    try {
      const variables = {};
      variables.id = argv.id;
      const result = await request(document, variables);
      render(result.document, { json: argv.json, columnConfig: columns['Document'] });
    } catch (err) {
      handleError(err);
    }
  });

  // query: documents
  yargs.command('list', 'All documents in the workspace.', (yargs) => {
    yargs.option('after', { type: 'string', describe: 'A cursor to be used with first for forward pagination' });
    yargs.option('before', { type: 'string', describe: 'A cursor to be used with last for backward pagination.' });
    yargs.option('filter', { type: 'string', describe: 'Filter returned documents.' });
    yargs.option('first', { type: 'number', describe: 'The number of items to forward paginate (used with after). Defaults to 50.' });
    yargs.option('include-archived', { type: 'boolean', describe: 'Should archived resources be included (default: false)' });
    yargs.option('last', { type: 'number', describe: 'The number of items to backward paginate (used with before). Defaults to 50.' });
    yargs.option('order-by', { type: 'string', choices: ["createdAt","updatedAt"], describe: 'By which field should the pagination order by. Available options are createdA...' });
    yargs.option('first', { type: 'number', default: 50, describe: 'Number of results to fetch' });
    yargs.option('after', { type: 'string', describe: 'Cursor for forward pagination' });
    yargs.option('last', { type: 'number', describe: 'Number of results to fetch from the end' });
    yargs.option('before', { type: 'string', describe: 'Cursor for backward pagination' });
    yargs.option('all', { type: 'boolean', describe: 'Fetch all pages', default: false });
    yargs.option('filter-json', { type: 'string', describe: 'Filter as JSON (or @file.json)' });
    return yargs;
  }, async (argv) => {
    try {
      const variables = {};
      if (argv['after'] !== undefined) variables.after = argv['after'];
      if (argv['before'] !== undefined) variables.before = argv['before'];
      if (argv['filter'] !== undefined) variables.filter = argv['filter'];
      if (argv['first'] !== undefined) variables.first = argv['first'];
      if (argv['include-archived'] !== undefined) variables.includeArchived = argv['include-archived'];
      if (argv['last'] !== undefined) variables.last = argv['last'];
      if (argv['order-by'] !== undefined) variables.orderBy = argv['order-by'];
      if (argv['filter-json']) variables.filter = parseJsonFlag(argv['filter-json']);
      if (argv.first !== undefined) variables.first = argv.first;
      if (argv.after) variables.after = argv.after;
      if (argv.last !== undefined) variables.last = argv.last;
      if (argv.before) variables.before = argv.before;

      let data;
      if (argv.all) {
        data = await fetchAllPages(request, documents, variables, 'documents');
      } else {
        const result = await request(documents, variables);
        data = result.documents?.nodes || [];
      }
      render(data, { json: argv.json, isList: true, columnConfig: columns['Document'] });
    } catch (err) {
      handleError(err);
    }
  });

  // mutation: documentCreate
  yargs.command('create', 'Creates a new document.', (yargs) => {
    yargs.option('color', { type: 'string', describe: 'The color of the icon.' });
    yargs.option('content', { type: 'string', describe: 'The document content as markdown.' });
    yargs.option('icon', { type: 'string', describe: 'The icon of the document.' });
    yargs.option('id', { type: 'string', describe: 'The identifier in UUID v4 format. If none is provided, the backend will gener...' });
    yargs.option('initiative-id', { type: 'string', describe: '[Internal] Related initiative for the document.' });
    yargs.option('last-applied-template-id', { type: 'string', describe: 'The ID of the last template applied to the document.' });
    yargs.option('project-id', { type: 'string', describe: 'Related project for the document.' });
    yargs.option('resource-folder-id', { type: 'string', describe: '[Internal] The resource folder containing the document.' });
    yargs.option('sort-order', { type: 'number', describe: 'The order of the item in the resources list.' });
    yargs.option('subscriber-ids', { type: 'array', describe: '[INTERNAL] The identifiers of the users subscribing to this document.' });
    yargs.option('team-id', { type: 'string', describe: '[Internal] Related team for the document.' });
    yargs.option('title', { type: 'string', demandOption: true, describe: 'The title of the document.' });
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
        if (argv['content'] !== undefined) input.content = argv['content'];
        if (argv['icon'] !== undefined) input.icon = argv['icon'];
        if (argv['id'] !== undefined) input.id = argv['id'];
        if (argv['initiative-id'] !== undefined) input.initiativeId = argv['initiative-id'];
        if (argv['last-applied-template-id'] !== undefined) input.lastAppliedTemplateId = argv['last-applied-template-id'];
        if (argv['project-id'] !== undefined) input.projectId = argv['project-id'];
        if (argv['resource-folder-id'] !== undefined) input.resourceFolderId = argv['resource-folder-id'];
        if (argv['sort-order'] !== undefined) input.sortOrder = argv['sort-order'];
        if (argv['subscriber-ids'] !== undefined) input.subscriberIds = argv['subscriber-ids'];
        if (argv['team-id'] !== undefined) input.teamId = argv['team-id'];
        if (argv['title'] !== undefined) input.title = argv['title'];
        variables.input = input;
      }
      const result = await request(documentCreate, variables);
      render(result.documentCreate, { json: argv.json });
    } catch (err) {
      handleError(err);
    }
  });

  // mutation: documentDelete
  yargs.command('delete <id>', 'Deletes (trashes) a document.', (yargs) => {
    yargs.positional('id', { type: 'string', describe: 'The identifier of the document to delete.' });
    return yargs;
  }, async (argv) => {
    try {
      const variables = {};
      variables.id = argv.id;
      const result = await request(documentDelete, variables);
      render(result.documentDelete, { json: argv.json });
    } catch (err) {
      handleError(err);
    }
  });

  // mutation: documentUnarchive
  yargs.command('unarchive <id>', 'Restores a document.', (yargs) => {
    yargs.positional('id', { type: 'string', describe: 'The identifier of the document to restore.' });
    return yargs;
  }, async (argv) => {
    try {
      const variables = {};
      variables.id = argv.id;
      const result = await request(documentUnarchive, variables);
      render(result.documentUnarchive, { json: argv.json });
    } catch (err) {
      handleError(err);
    }
  });

  // mutation: documentUpdate
  yargs.command('update <id>', 'Updates a document.', (yargs) => {
    yargs.positional('id', { type: 'string', describe: 'The identifier of the document to update. Also the identifier from the URL is accepted.' });
    yargs.option('color', { type: 'string', describe: 'The color of the icon.' });
    yargs.option('content', { type: 'string', describe: 'The document content as markdown.' });
    yargs.option('hidden-at', { type: 'string', describe: 'The time at which the document was hidden.' });
    yargs.option('icon', { type: 'string', describe: 'The icon of the document.' });
    yargs.option('initiative-id', { type: 'string', describe: '[Internal] Related initiative for the document.' });
    yargs.option('last-applied-template-id', { type: 'string', describe: 'The ID of the last template applied to the document.' });
    yargs.option('project-id', { type: 'string', describe: 'Related project for the document.' });
    yargs.option('resource-folder-id', { type: 'string', describe: '[Internal] The resource folder containing the document.' });
    yargs.option('sort-order', { type: 'number', describe: 'The order of the item in the resources list.' });
    yargs.option('subscriber-ids', { type: 'array', describe: '[INTERNAL] The identifiers of the users subscribing to this document.' });
    yargs.option('team-id', { type: 'string', describe: '[Internal] Related team for the document.' });
    yargs.option('title', { type: 'string', describe: 'The title of the document.' });
    yargs.option('trashed', { type: 'boolean', describe: 'Whether the document has been trashed.' });
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
        if (argv['content'] !== undefined) input.content = argv['content'];
        if (argv['hidden-at'] !== undefined) input.hiddenAt = argv['hidden-at'];
        if (argv['icon'] !== undefined) input.icon = argv['icon'];
        if (argv['initiative-id'] !== undefined) input.initiativeId = argv['initiative-id'];
        if (argv['last-applied-template-id'] !== undefined) input.lastAppliedTemplateId = argv['last-applied-template-id'];
        if (argv['project-id'] !== undefined) input.projectId = argv['project-id'];
        if (argv['resource-folder-id'] !== undefined) input.resourceFolderId = argv['resource-folder-id'];
        if (argv['sort-order'] !== undefined) input.sortOrder = argv['sort-order'];
        if (argv['subscriber-ids'] !== undefined) input.subscriberIds = argv['subscriber-ids'];
        if (argv['team-id'] !== undefined) input.teamId = argv['team-id'];
        if (argv['title'] !== undefined) input.title = argv['title'];
        if (argv['trashed'] !== undefined) input.trashed = argv['trashed'];
        variables.input = input;
      }
      const result = await request(documentUpdate, variables);
      render(result.documentUpdate, { json: argv.json });
    } catch (err) {
      handleError(err);
    }
  });

  return yargs.demandCommand(1, 'Specify a subcommand').strict();
}

export function handler() {}
