// AUTO-GENERATED — do not edit. Run `npm run generate` to regenerate.
import { request } from '../client.js';
import { handleError } from '../error.js';
import { render } from '../output.js';
import { fetchAllPages } from '../pagination.js';
import { parseJsonFlag, kebabToCamel } from '../flag-utils.js';
import { columns } from '../generated/columns.js';

import { rateLimitStatus } from '../generated/queries.js';

export const command = 'rate-limit <command>';
export const describe = 'rate-limit commands';

export function builder(yargs) {

  // query: rateLimitStatus
  yargs.command('status', 'The status of the rate limiter.', (yargs) => {
    return yargs;
  }, async (argv) => {
    try {
      const variables = {};
      const result = await request(rateLimitStatus, variables);
      render(result.rateLimitStatus, { json: argv.json, columnConfig: columns['RateLimitPayload'] });
    } catch (err) {
      handleError(err);
    }
  });

  return yargs.demandCommand(1, 'Specify a subcommand').strict();
}

export function handler() {}
