// AUTO-GENERATED — do not edit. Run `npm run generate` to regenerate.
import { request } from '../client.js';
import { handleError } from '../error.js';
import { render } from '../output.js';
import { fetchAllPages } from '../pagination.js';
import { parseJsonFlag, kebabToCamel } from '../flag-utils.js';

import { fileUploadDangerouslyDelete } from '../generated/mutations.js';

export const command = 'file-upload-dangerously <command>';
export const describe = 'file-upload-dangerously commands';

export function builder(yargs) {

  // mutation: fileUploadDangerouslyDelete
  yargs.command('delete', '[INTERNAL] Permanently delete an uploaded file by asset URL. This should be u...', (yargs) => {
    yargs.option('asset-url', { type: 'string', demandOption: true, describe: 'The asset URL of the uploaded file to delete.' });
    return yargs;
  }, async (argv) => {
    try {
      const variables = {};
      if (argv['asset-url'] !== undefined) variables.assetUrl = argv['asset-url'];
      const result = await request(fileUploadDangerouslyDelete, variables);
      render(result.fileUploadDangerouslyDelete, { json: argv.json });
    } catch (err) {
      handleError(err);
    }
  });

  return yargs.demandCommand(1, 'Specify a subcommand').strict();
}

export function handler() {}
