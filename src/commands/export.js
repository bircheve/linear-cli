// AUTO-GENERATED — do not edit. Run `npm run generate` to regenerate.
import { request } from '../client.js';
import { handleError } from '../error.js';
import { render } from '../output.js';
import { fetchAllPages } from '../pagination.js';
import { parseJsonFlag, kebabToCamel } from '../flag-utils.js';
import { columns } from '../generated/columns.js';

import { createCsvExportReport } from '../generated/mutations.js';

export const command = 'export <command>';
export const describe = 'export commands';

export function builder(yargs) {

  // mutation: createCsvExportReport
  yargs.command('create-csv-report', 'Create CSV export report for the organization.', (yargs) => {
    yargs.option('include-private-team-ids', { type: 'array' });
    return yargs;
  }, async (argv) => {
    try {
      const variables = {};
      if (argv['include-private-team-ids'] !== undefined) variables.includePrivateTeamIds = argv['include-private-team-ids'];
      const result = await request(createCsvExportReport, variables);
      render(result.createCsvExportReport, { json: argv.json });
    } catch (err) {
      handleError(err);
    }
  });

  return yargs.demandCommand(1, 'Specify a subcommand').strict();
}

export function handler() {}
