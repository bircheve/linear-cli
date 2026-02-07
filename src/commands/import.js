// AUTO-GENERATED — do not edit. Run `npm run generate` to regenerate.
import { request } from '../client.js';
import { handleError } from '../error.js';
import { render } from '../output.js';
import { fetchAllPages } from '../pagination.js';
import { parseJsonFlag, kebabToCamel } from '../flag-utils.js';
import { columns } from '../generated/columns.js';

import { importFileUpload } from '../generated/mutations.js';

export const command = 'import <command>';
export const describe = 'import commands';

export function builder(yargs) {

  // mutation: importFileUpload
  yargs.command('file-upload', 'XHR request payload to upload a file for import, directly to Linear\'s cloud s...', (yargs) => {
    yargs.option('content-type', { type: 'string', demandOption: true, describe: 'MIME type of the uploaded file.' });
    yargs.option('filename', { type: 'string', demandOption: true, describe: 'Filename of the uploaded file.' });
    yargs.option('meta-data', { type: 'string', describe: 'Optional metadata.' });
    yargs.option('size', { type: 'number', demandOption: true, describe: 'File size of the uploaded file.' });
    return yargs;
  }, async (argv) => {
    try {
      const variables = {};
      if (argv['content-type'] !== undefined) variables.contentType = argv['content-type'];
      if (argv['filename'] !== undefined) variables.filename = argv['filename'];
      if (argv['meta-data'] !== undefined) variables.metaData = argv['meta-data'];
      if (argv['size'] !== undefined) variables.size = argv['size'];
      const result = await request(importFileUpload, variables);
      render(result.importFileUpload, { json: argv.json });
    } catch (err) {
      handleError(err);
    }
  });

  return yargs.demandCommand(1, 'Specify a subcommand').strict();
}

export function handler() {}
