// AUTO-GENERATED — do not edit. Run `npm run generate` to regenerate.
import { request } from '../client.js';
import { handleError } from '../error.js';
import { render } from '../output.js';
import { fetchAllPages } from '../pagination.js';
import { parseJsonFlag, kebabToCamel } from '../flag-utils.js';
import { columns } from '../generated/columns.js';

import { integrationIntercomSettingsUpdate } from '../generated/mutations.js';

export const command = 'integration-intercom-settings <command>';
export const describe = 'integration-intercom-settings commands';

export function builder(yargs) {

  // mutation: integrationIntercomSettingsUpdate
  yargs.command('update', '[DEPRECATED] Updates settings on the Intercom integration.', (yargs) => {
    yargs.option('automate-ticket-reopening-on-cancellation', { type: 'boolean', describe: 'Whether a ticket should be automatically reopened when its linked Linear issu...' });
    yargs.option('automate-ticket-reopening-on-comment', { type: 'boolean', describe: 'Whether a ticket should be automatically reopened when a comment is posted on...' });
    yargs.option('automate-ticket-reopening-on-completion', { type: 'boolean', describe: 'Whether a ticket should be automatically reopened when its linked Linear issu...' });
    yargs.option('automate-ticket-reopening-on-project-cancellation', { type: 'boolean', describe: 'Whether a ticket should be automatically reopened when its linked Linear proj...' });
    yargs.option('automate-ticket-reopening-on-project-completion', { type: 'boolean', describe: 'Whether a ticket should be automatically reopened when its linked Linear proj...' });
    yargs.option('disable-customer-requests-auto-creation', { type: 'boolean', describe: '[ALPHA] Whether customer and customer requests should not be automatically cr...' });
    yargs.option('send-note-on-comment', { type: 'boolean', describe: 'Whether an internal message should be added when someone comments on an issue.' });
    yargs.option('send-note-on-status-change', { type: 'boolean', describe: 'Whether an internal message should be added when a Linear issue changes statu...' });
    yargs.option('input-json', { type: 'string', describe: 'Full input as JSON (or @file.json)' });
    return yargs;
  }, async (argv) => {
    try {
      const variables = {};
      if (argv['input-json']) {
        variables.input = parseJsonFlag(argv['input-json']);
      } else {
        const input = {};
        if (argv['automate-ticket-reopening-on-cancellation'] !== undefined) input.automateTicketReopeningOnCancellation = argv['automate-ticket-reopening-on-cancellation'];
        if (argv['automate-ticket-reopening-on-comment'] !== undefined) input.automateTicketReopeningOnComment = argv['automate-ticket-reopening-on-comment'];
        if (argv['automate-ticket-reopening-on-completion'] !== undefined) input.automateTicketReopeningOnCompletion = argv['automate-ticket-reopening-on-completion'];
        if (argv['automate-ticket-reopening-on-project-cancellation'] !== undefined) input.automateTicketReopeningOnProjectCancellation = argv['automate-ticket-reopening-on-project-cancellation'];
        if (argv['automate-ticket-reopening-on-project-completion'] !== undefined) input.automateTicketReopeningOnProjectCompletion = argv['automate-ticket-reopening-on-project-completion'];
        if (argv['disable-customer-requests-auto-creation'] !== undefined) input.disableCustomerRequestsAutoCreation = argv['disable-customer-requests-auto-creation'];
        if (argv['send-note-on-comment'] !== undefined) input.sendNoteOnComment = argv['send-note-on-comment'];
        if (argv['send-note-on-status-change'] !== undefined) input.sendNoteOnStatusChange = argv['send-note-on-status-change'];
        variables.input = input;
      }
      const result = await request(integrationIntercomSettingsUpdate, variables);
      render(result.integrationIntercomSettingsUpdate, { json: argv.json });
    } catch (err) {
      handleError(err);
    }
  });

  return yargs.demandCommand(1, 'Specify a subcommand').strict();
}

export function handler() {}
