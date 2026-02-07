// AUTO-GENERATED — do not edit. Run `npm run generate` to regenerate.
import { request } from '../client.js';
import { handleError } from '../error.js';
import { render } from '../output.js';
import { fetchAllPages } from '../pagination.js';
import { parseJsonFlag, kebabToCamel } from '../flag-utils.js';

import { imageUploadFromUrl } from '../generated/mutations.js';

export const command = 'image <command>';
export const describe = 'image commands';

export function builder(yargs) {

  // mutation: imageUploadFromUrl
  yargs.command('upload-from-url', 'Upload an image from an URL to Linear.', (yargs) => {
    yargs.option('url', { type: 'string', demandOption: true, describe: 'URL of the file to be uploaded to Linear.' });
    return yargs;
  }, async (argv) => {
    try {
      const variables = {};
      if (argv['url'] !== undefined) variables.url = argv['url'];
      const result = await request(imageUploadFromUrl, variables);
      render(result.imageUploadFromUrl, { json: argv.json });
    } catch (err) {
      handleError(err);
    }
  });

  return yargs.demandCommand(1, 'Specify a subcommand').strict();
}

export function handler() {}
