// AUTO-GENERATED — do not edit. Run `npm run generate` to regenerate.
import { request } from '../client.js';
import { handleError } from '../error.js';
import { render } from '../output.js';
import { fetchAllPages } from '../pagination.js';
import { parseJsonFlag, kebabToCamel } from '../flag-utils.js';

import { integrationSettingsUpdate } from '../generated/mutations.js';

export const command = 'integration-settings <command>';
export const describe = 'integration-settings commands';

export function builder(yargs) {

  // mutation: integrationSettingsUpdate
  yargs.command('update <id>', '[INTERNAL] Updates the integration settings.', (yargs) => {
    yargs.positional('id', { type: 'string', describe: 'The identifier of the integration to update.' });
    yargs.option('front', { type: 'string' });
    yargs.option('git-hub', { type: 'string' });
    yargs.option('git-hub-import', { type: 'string' });
    yargs.option('git-hub-personal', { type: 'string' });
    yargs.option('git-lab', { type: 'string' });
    yargs.option('gong', { type: 'string' });
    yargs.option('google-sheets', { type: 'string' });
    yargs.option('intercom', { type: 'string' });
    yargs.option('jira', { type: 'string' });
    yargs.option('jira-personal', { type: 'string' });
    yargs.option('launch-darkly', { type: 'string' });
    yargs.option('notion', { type: 'string' });
    yargs.option('opsgenie', { type: 'string' });
    yargs.option('pager-duty', { type: 'string' });
    yargs.option('salesforce', { type: 'string' });
    yargs.option('sentry', { type: 'string' });
    yargs.option('slack', { type: 'string' });
    yargs.option('slack-asks', { type: 'string' });
    yargs.option('slack-custom-view-notifications', { type: 'string' });
    yargs.option('slack-initiative-post', { type: 'string' });
    yargs.option('slack-org-initiative-updates-post', { type: 'string' });
    yargs.option('slack-org-project-updates-post', { type: 'string' });
    yargs.option('slack-post', { type: 'string' });
    yargs.option('slack-project-post', { type: 'string' });
    yargs.option('zendesk', { type: 'string' });
    yargs.option('input-json', { type: 'string', describe: 'Full input as JSON (or @file.json)' });
    return yargs;
  }, async (argv) => {
    try {
      const variables = {};
      variables.id = argv.id;
      if (argv['input-json']) {
        variables.input = parseJsonFlag(argv['input-json']);
      } else {
        const input = {};
        if (argv['front'] !== undefined) input.front = parseJsonFlag(argv['front']);
        if (argv['git-hub'] !== undefined) input.gitHub = parseJsonFlag(argv['git-hub']);
        if (argv['git-hub-import'] !== undefined) input.gitHubImport = parseJsonFlag(argv['git-hub-import']);
        if (argv['git-hub-personal'] !== undefined) input.gitHubPersonal = parseJsonFlag(argv['git-hub-personal']);
        if (argv['git-lab'] !== undefined) input.gitLab = parseJsonFlag(argv['git-lab']);
        if (argv['gong'] !== undefined) input.gong = parseJsonFlag(argv['gong']);
        if (argv['google-sheets'] !== undefined) input.googleSheets = parseJsonFlag(argv['google-sheets']);
        if (argv['intercom'] !== undefined) input.intercom = parseJsonFlag(argv['intercom']);
        if (argv['jira'] !== undefined) input.jira = parseJsonFlag(argv['jira']);
        if (argv['jira-personal'] !== undefined) input.jiraPersonal = parseJsonFlag(argv['jira-personal']);
        if (argv['launch-darkly'] !== undefined) input.launchDarkly = parseJsonFlag(argv['launch-darkly']);
        if (argv['notion'] !== undefined) input.notion = parseJsonFlag(argv['notion']);
        if (argv['opsgenie'] !== undefined) input.opsgenie = parseJsonFlag(argv['opsgenie']);
        if (argv['pager-duty'] !== undefined) input.pagerDuty = parseJsonFlag(argv['pager-duty']);
        if (argv['salesforce'] !== undefined) input.salesforce = parseJsonFlag(argv['salesforce']);
        if (argv['sentry'] !== undefined) input.sentry = parseJsonFlag(argv['sentry']);
        if (argv['slack'] !== undefined) input.slack = parseJsonFlag(argv['slack']);
        if (argv['slack-asks'] !== undefined) input.slackAsks = parseJsonFlag(argv['slack-asks']);
        if (argv['slack-custom-view-notifications'] !== undefined) input.slackCustomViewNotifications = parseJsonFlag(argv['slack-custom-view-notifications']);
        if (argv['slack-initiative-post'] !== undefined) input.slackInitiativePost = parseJsonFlag(argv['slack-initiative-post']);
        if (argv['slack-org-initiative-updates-post'] !== undefined) input.slackOrgInitiativeUpdatesPost = parseJsonFlag(argv['slack-org-initiative-updates-post']);
        if (argv['slack-org-project-updates-post'] !== undefined) input.slackOrgProjectUpdatesPost = parseJsonFlag(argv['slack-org-project-updates-post']);
        if (argv['slack-post'] !== undefined) input.slackPost = parseJsonFlag(argv['slack-post']);
        if (argv['slack-project-post'] !== undefined) input.slackProjectPost = parseJsonFlag(argv['slack-project-post']);
        if (argv['zendesk'] !== undefined) input.zendesk = parseJsonFlag(argv['zendesk']);
        variables.input = input;
      }
      const result = await request(integrationSettingsUpdate, variables);
      render(result.integrationSettingsUpdate, { json: argv.json });
    } catch (err) {
      handleError(err);
    }
  });

  return yargs.demandCommand(1, 'Specify a subcommand').strict();
}

export function handler() {}
