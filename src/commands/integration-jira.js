// AUTO-GENERATED — do not edit. Run `npm run generate` to regenerate.
import { request } from '../client.js';
import { handleError } from '../error.js';
import { render } from '../output.js';
import { fetchAllPages } from '../pagination.js';
import { parseJsonFlag, kebabToCamel } from '../flag-utils.js';
import { columns } from '../generated/columns.js';

import { integrationJiraPersonal, integrationJiraUpdate } from '../generated/mutations.js';

export const command = 'integration-jira <command>';
export const describe = 'integration-jira commands';

export function builder(yargs) {

  // mutation: integrationJiraPersonal
  yargs.command('personal', 'Connect your Jira account to Linear.', (yargs) => {
    yargs.option('access-token', { type: 'string', describe: 'The Jira personal access token, when connecting using a PAT.' });
    yargs.option('code', { type: 'string', describe: 'The Jira OAuth code, when connecting using OAuth.' });
    return yargs;
  }, async (argv) => {
    try {
      const variables = {};
      if (argv['access-token'] !== undefined) variables.accessToken = argv['access-token'];
      if (argv['code'] !== undefined) variables.code = argv['code'];
      const result = await request(integrationJiraPersonal, variables);
      render(result.integrationJiraPersonal, { json: argv.json });
    } catch (err) {
      handleError(err);
    }
  });

  // mutation: integrationJiraUpdate
  yargs.command('update', '[INTERNAL] Updates a Jira Integration.', (yargs) => {
    yargs.option('access-token', { type: 'string', describe: 'The Jira personal access token.' });
    yargs.option('delete-webhook', { type: 'boolean', describe: 'Whether to delete the current manual webhook configuration.' });
    yargs.option('email', { type: 'string', describe: 'The Jira user email address associated with the personal access token.' });
    yargs.option('id', { type: 'string', demandOption: true, describe: 'The id of the integration to update.' });
    yargs.option('update-metadata', { type: 'boolean', describe: 'Whether to refresh Jira metadata for the integration.' });
    yargs.option('update-projects', { type: 'boolean', describe: 'Whether to refresh Jira Projects for the integration.' });
    yargs.option('webhook-secret', { type: 'string', describe: 'Webhook secret for a new manual configuration.' });
    yargs.option('input-json', { type: 'string', describe: 'Full input as JSON (or @file.json)' });
    return yargs;
  }, async (argv) => {
    try {
      const variables = {};
      if (argv['input-json']) {
        variables.input = parseJsonFlag(argv['input-json']);
      } else {
        const input = {};
        if (argv['access-token'] !== undefined) input.accessToken = argv['access-token'];
        if (argv['delete-webhook'] !== undefined) input.deleteWebhook = argv['delete-webhook'];
        if (argv['email'] !== undefined) input.email = argv['email'];
        if (argv['id'] !== undefined) input.id = argv['id'];
        if (argv['update-metadata'] !== undefined) input.updateMetadata = argv['update-metadata'];
        if (argv['update-projects'] !== undefined) input.updateProjects = argv['update-projects'];
        if (argv['webhook-secret'] !== undefined) input.webhookSecret = argv['webhook-secret'];
        variables.input = input;
      }
      const result = await request(integrationJiraUpdate, variables);
      render(result.integrationJiraUpdate, { json: argv.json });
    } catch (err) {
      handleError(err);
    }
  });

  return yargs.demandCommand(1, 'Specify a subcommand').strict();
}

export function handler() {}
