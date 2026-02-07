// AUTO-GENERATED — do not edit. Run `npm run generate` to regenerate.
import { request } from '../client.js';
import { handleError } from '../error.js';
import { render } from '../output.js';
import { fetchAllPages } from '../pagination.js';
import { parseJsonFlag, kebabToCamel } from '../flag-utils.js';

import { contactCreate } from '../generated/mutations.js';

export const command = 'contact <command>';
export const describe = 'contact commands';

export function builder(yargs) {

  // mutation: contactCreate
  yargs.command('create', 'Saves user message.', (yargs) => {
    yargs.option('browser', { type: 'string', describe: 'User\'s browser information.' });
    yargs.option('client-version', { type: 'string', describe: 'User\'s Linear client information.' });
    yargs.option('device', { type: 'string', describe: 'User\'s device information.' });
    yargs.option('disappointment-rating', { type: 'number', describe: 'How disappointed the user would be if they could no longer use Linear.' });
    yargs.option('message', { type: 'string', demandOption: true, describe: 'The message the user sent.' });
    yargs.option('operating-system', { type: 'string', describe: 'User\'s operating system.' });
    yargs.option('type', { type: 'string', demandOption: true, describe: 'The type of support contact.' });
    yargs.option('input-json', { type: 'string', describe: 'Full input as JSON (or @file.json)' });
    return yargs;
  }, async (argv) => {
    try {
      const variables = {};
      if (argv['input-json']) {
        variables.input = parseJsonFlag(argv['input-json']);
      } else {
        const input = {};
        if (argv['browser'] !== undefined) input.browser = argv['browser'];
        if (argv['client-version'] !== undefined) input.clientVersion = argv['client-version'];
        if (argv['device'] !== undefined) input.device = argv['device'];
        if (argv['disappointment-rating'] !== undefined) input.disappointmentRating = argv['disappointment-rating'];
        if (argv['message'] !== undefined) input.message = argv['message'];
        if (argv['operating-system'] !== undefined) input.operatingSystem = argv['operating-system'];
        if (argv['type'] !== undefined) input.type = argv['type'];
        variables.input = input;
      }
      const result = await request(contactCreate, variables);
      render(result.contactCreate, { json: argv.json });
    } catch (err) {
      handleError(err);
    }
  });

  return yargs.demandCommand(1, 'Specify a subcommand').strict();
}

export function handler() {}
