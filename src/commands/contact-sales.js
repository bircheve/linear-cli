// AUTO-GENERATED — do not edit. Run `npm run generate` to regenerate.
import { request } from '../client.js';
import { handleError } from '../error.js';
import { render } from '../output.js';
import { fetchAllPages } from '../pagination.js';
import { parseJsonFlag, kebabToCamel } from '../flag-utils.js';
import { columns } from '../generated/columns.js';

import { contactSalesCreate } from '../generated/mutations.js';

export const command = 'contact-sales <command>';
export const describe = 'contact-sales commands';

export function builder(yargs) {

  // mutation: contactSalesCreate
  yargs.command('create', '[INTERNAL] Saves sales pricing inquiry to Front.', (yargs) => {
    yargs.option('company-size', { type: 'string', describe: 'Size of the company.' });
    yargs.option('email', { type: 'string', demandOption: true, describe: 'Work email of the person requesting information.' });
    yargs.option('message', { type: 'string', describe: 'The message the user sent.' });
    yargs.option('name', { type: 'string', demandOption: true, describe: 'Name of the person requesting information.' });
    yargs.option('input-json', { type: 'string', describe: 'Full input as JSON (or @file.json)' });
    return yargs;
  }, async (argv) => {
    try {
      const variables = {};
      if (argv['input-json']) {
        variables.input = parseJsonFlag(argv['input-json']);
      } else {
        const input = {};
        if (argv['company-size'] !== undefined) input.companySize = argv['company-size'];
        if (argv['email'] !== undefined) input.email = argv['email'];
        if (argv['message'] !== undefined) input.message = argv['message'];
        if (argv['name'] !== undefined) input.name = argv['name'];
        variables.input = input;
      }
      const result = await request(contactSalesCreate, variables);
      render(result.contactSalesCreate, { json: argv.json });
    } catch (err) {
      handleError(err);
    }
  });

  return yargs.demandCommand(1, 'Specify a subcommand').strict();
}

export function handler() {}
