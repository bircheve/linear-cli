// AUTO-GENERATED — do not edit. Run `npm run generate` to regenerate.
import { request } from '../client.js';
import { handleError } from '../error.js';
import { render } from '../output.js';
import { fetchAllPages } from '../pagination.js';
import { parseJsonFlag, kebabToCamel } from '../flag-utils.js';
import { columns } from '../generated/columns.js';

import { emoji, emojis } from '../generated/queries.js';
import { emojiCreate, emojiDelete } from '../generated/mutations.js';

export const command = 'emoji <command>';
export const describe = 'emoji commands';

export function builder(yargs) {

  // query: emoji
  yargs.command('get <id>', 'A specific emoji.', (yargs) => {
    yargs.positional('id', { type: 'string', describe: 'The identifier or the name of the emoji to retrieve.' });
    return yargs;
  }, async (argv) => {
    try {
      const variables = {};
      variables.id = argv.id;
      const result = await request(emoji, variables);
      render(result.emoji, { json: argv.json, columnConfig: columns['Emoji'] });
    } catch (err) {
      handleError(err);
    }
  });

  // query: emojis
  yargs.command('list', 'All custom emojis.', (yargs) => {
    yargs.option('after', { type: 'string', describe: 'A cursor to be used with first for forward pagination' });
    yargs.option('before', { type: 'string', describe: 'A cursor to be used with last for backward pagination.' });
    yargs.option('first', { type: 'number', describe: 'The number of items to forward paginate (used with after). Defaults to 50.' });
    yargs.option('include-archived', { type: 'boolean', describe: 'Should archived resources be included (default: false)' });
    yargs.option('last', { type: 'number', describe: 'The number of items to backward paginate (used with before). Defaults to 50.' });
    yargs.option('order-by', { type: 'string', choices: ["createdAt","updatedAt"], describe: 'By which field should the pagination order by. Available options are createdA...' });
    yargs.option('first', { type: 'number', default: 50, describe: 'Number of results to fetch' });
    yargs.option('after', { type: 'string', describe: 'Cursor for forward pagination' });
    yargs.option('last', { type: 'number', describe: 'Number of results to fetch from the end' });
    yargs.option('before', { type: 'string', describe: 'Cursor for backward pagination' });
    yargs.option('all', { type: 'boolean', describe: 'Fetch all pages', default: false });
    return yargs;
  }, async (argv) => {
    try {
      const variables = {};
      if (argv['after'] !== undefined) variables.after = argv['after'];
      if (argv['before'] !== undefined) variables.before = argv['before'];
      if (argv['first'] !== undefined) variables.first = argv['first'];
      if (argv['include-archived'] !== undefined) variables.includeArchived = argv['include-archived'];
      if (argv['last'] !== undefined) variables.last = argv['last'];
      if (argv['order-by'] !== undefined) variables.orderBy = argv['order-by'];
      if (argv.first !== undefined) variables.first = argv.first;
      if (argv.after) variables.after = argv.after;
      if (argv.last !== undefined) variables.last = argv.last;
      if (argv.before) variables.before = argv.before;

      let data;
      if (argv.all) {
        data = await fetchAllPages(request, emojis, variables, 'emojis');
      } else {
        const result = await request(emojis, variables);
        data = result.emojis?.nodes || [];
      }
      render(data, { json: argv.json, isList: true, columnConfig: columns['Emoji'] });
    } catch (err) {
      handleError(err);
    }
  });

  // mutation: emojiCreate
  yargs.command('create', 'Creates a custom emoji.', (yargs) => {
    yargs.option('id', { type: 'string', describe: 'The identifier in UUID v4 format. If none is provided, the backend will gener...' });
    yargs.option('name', { type: 'string', demandOption: true, describe: 'The name of the custom emoji.' });
    yargs.option('url', { type: 'string', demandOption: true, describe: 'The URL for the emoji.' });
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
        if (argv['name'] !== undefined) input.name = argv['name'];
        if (argv['url'] !== undefined) input.url = argv['url'];
        variables.input = input;
      }
      const result = await request(emojiCreate, variables);
      render(result.emojiCreate, { json: argv.json });
    } catch (err) {
      handleError(err);
    }
  });

  // mutation: emojiDelete
  yargs.command('delete <id>', 'Deletes an emoji.', (yargs) => {
    yargs.positional('id', { type: 'string', describe: 'The identifier of the emoji to delete.' });
    return yargs;
  }, async (argv) => {
    try {
      const variables = {};
      variables.id = argv.id;
      const result = await request(emojiDelete, variables);
      render(result.emojiDelete, { json: argv.json });
    } catch (err) {
      handleError(err);
    }
  });

  return yargs.demandCommand(1, 'Specify a subcommand').strict();
}

export function handler() {}
