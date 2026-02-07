// AUTO-GENERATED — do not edit. Run `npm run generate` to regenerate.
import { request } from '../client.js';
import { handleError } from '../error.js';
import { render } from '../output.js';
import { fetchAllPages } from '../pagination.js';
import { parseJsonFlag, kebabToCamel } from '../flag-utils.js';
import { columns } from '../generated/columns.js';

import { integration, integrationHasScopes, integrationTemplates, integrations } from '../generated/queries.js';
import { integrationArchive, integrationAsksConnectChannel, integrationCustomerDataAttributesRefresh, integrationDelete, integrationDiscord, integrationFigma, integrationFront, integrationGitHubEnterpriseServerConnect, integrationGitHubPersonal, integrationGithubConnect, integrationGithubImportConnect, integrationGithubImportRefresh, integrationGitlabConnect, integrationGong, integrationGoogleCalendarPersonalConnect, integrationGoogleSheets, integrationLaunchDarklyConnect, integrationLaunchDarklyPersonalConnect, integrationLoom, integrationOpsgenieConnect, integrationOpsgenieRefreshScheduleMappings, integrationPagerDutyConnect, integrationPagerDutyRefreshScheduleMappings, integrationRequest, integrationSalesforce, integrationSalesforceMetadataRefresh, integrationSentryConnect, integrationSlack, integrationSlackAsks, integrationSlackCustomViewNotifications, integrationSlackCustomerChannelLink, integrationSlackImportEmojis, integrationSlackInitiativePost, integrationSlackOrAsksUpdateSlackTeamName, integrationSlackOrgInitiativeUpdatesPost, integrationSlackOrgProjectUpdatesPost, integrationSlackPersonal, integrationSlackPost, integrationSlackProjectPost, integrationUpdate, integrationZendesk } from '../generated/mutations.js';

export const command = 'integration <command>';
export const describe = 'integration commands';

export function builder(yargs) {

  // query: integration
  yargs.command('get <id>', 'One specific integration.', (yargs) => {
    yargs.positional('id', { type: 'string', describe: 'id' });
    return yargs;
  }, async (argv) => {
    try {
      const variables = {};
      variables.id = argv.id;
      const result = await request(integration, variables);
      render(result.integration, { json: argv.json, columnConfig: columns['Integration'] });
    } catch (err) {
      handleError(err);
    }
  });

  // query: integrationHasScopes
  yargs.command('has-scopes', 'Checks if the integration has all required scopes.', (yargs) => {
    yargs.option('integration-id', { type: 'string', demandOption: true, describe: 'The integration ID.' });
    yargs.option('scopes', { type: 'array', demandOption: true, describe: 'Required scopes.' });
    return yargs;
  }, async (argv) => {
    try {
      const variables = {};
      if (argv['integration-id'] !== undefined) variables.integrationId = argv['integration-id'];
      if (argv['scopes'] !== undefined) variables.scopes = argv['scopes'];
      const result = await request(integrationHasScopes, variables);
      render(result.integrationHasScopes, { json: argv.json, columnConfig: columns['IntegrationHasScopesPayload'] });
    } catch (err) {
      handleError(err);
    }
  });

  // query: integrationTemplates
  yargs.command('templates', 'Template and integration connections.', (yargs) => {
    yargs.option('after', { type: 'string', describe: 'A cursor to be used with first for forward pagination' });
    yargs.option('before', { type: 'string', describe: 'A cursor to be used with last for backward pagination.' });
    yargs.option('first', { type: 'number', describe: 'The number of items to forward paginate (used with after). Defaults to 50.' });
    yargs.option('include-archived', { type: 'boolean', describe: 'Should archived resources be included (default: false)' });
    yargs.option('last', { type: 'number', describe: 'The number of items to backward paginate (used with before). Defaults to 50.' });
    yargs.option('order-by', { type: 'string', choices: ["createdAt","updatedAt"], describe: 'By which field should the pagination order by. Available options are createdA...' });
    yargs.option('first', { type: 'number', default: 50, describe: 'Number of results to fetch' });
    yargs.option('after', { type: 'string', describe: 'Cursor for forward pagination' });
    yargs.option('last', { type: 'number', describe: 'Number of results to fetch from the end' });
    yargs.option('before', { type: 'string', describe: 'Cursor for backward pagination' });
    yargs.option('all', { type: 'boolean', describe: 'Fetch all pages', default: false });
    return yargs;
  }, async (argv) => {
    try {
      const variables = {};
      if (argv['after'] !== undefined) variables.after = argv['after'];
      if (argv['before'] !== undefined) variables.before = argv['before'];
      if (argv['first'] !== undefined) variables.first = argv['first'];
      if (argv['include-archived'] !== undefined) variables.includeArchived = argv['include-archived'];
      if (argv['last'] !== undefined) variables.last = argv['last'];
      if (argv['order-by'] !== undefined) variables.orderBy = argv['order-by'];
      if (argv.first !== undefined) variables.first = argv.first;
      if (argv.after) variables.after = argv.after;
      if (argv.last !== undefined) variables.last = argv.last;
      if (argv.before) variables.before = argv.before;

      let data;
      if (argv.all) {
        data = await fetchAllPages(request, integrationTemplates, variables, 'integrationTemplates');
      } else {
        const result = await request(integrationTemplates, variables);
        data = result.integrationTemplates?.nodes || [];
      }
      render(data, { json: argv.json, isList: true, columnConfig: columns['IntegrationTemplate'] });
    } catch (err) {
      handleError(err);
    }
  });

  // query: integrations
  yargs.command('list', 'All integrations.', (yargs) => {
    yargs.option('after', { type: 'string', describe: 'A cursor to be used with first for forward pagination' });
    yargs.option('before', { type: 'string', describe: 'A cursor to be used with last for backward pagination.' });
    yargs.option('first', { type: 'number', describe: 'The number of items to forward paginate (used with after). Defaults to 50.' });
    yargs.option('include-archived', { type: 'boolean', describe: 'Should archived resources be included (default: false)' });
    yargs.option('last', { type: 'number', describe: 'The number of items to backward paginate (used with before). Defaults to 50.' });
    yargs.option('order-by', { type: 'string', choices: ["createdAt","updatedAt"], describe: 'By which field should the pagination order by. Available options are createdA...' });
    yargs.option('first', { type: 'number', default: 50, describe: 'Number of results to fetch' });
    yargs.option('after', { type: 'string', describe: 'Cursor for forward pagination' });
    yargs.option('last', { type: 'number', describe: 'Number of results to fetch from the end' });
    yargs.option('before', { type: 'string', describe: 'Cursor for backward pagination' });
    yargs.option('all', { type: 'boolean', describe: 'Fetch all pages', default: false });
    return yargs;
  }, async (argv) => {
    try {
      const variables = {};
      if (argv['after'] !== undefined) variables.after = argv['after'];
      if (argv['before'] !== undefined) variables.before = argv['before'];
      if (argv['first'] !== undefined) variables.first = argv['first'];
      if (argv['include-archived'] !== undefined) variables.includeArchived = argv['include-archived'];
      if (argv['last'] !== undefined) variables.last = argv['last'];
      if (argv['order-by'] !== undefined) variables.orderBy = argv['order-by'];
      if (argv.first !== undefined) variables.first = argv.first;
      if (argv.after) variables.after = argv.after;
      if (argv.last !== undefined) variables.last = argv.last;
      if (argv.before) variables.before = argv.before;

      let data;
      if (argv.all) {
        data = await fetchAllPages(request, integrations, variables, 'integrations');
      } else {
        const result = await request(integrations, variables);
        data = result.integrations?.nodes || [];
      }
      render(data, { json: argv.json, isList: true, columnConfig: columns['Integration'] });
    } catch (err) {
      handleError(err);
    }
  });

  // mutation: integrationArchive
  yargs.command('archive <id>', 'Archives an integration.', (yargs) => {
    yargs.positional('id', { type: 'string', describe: 'The identifier of the integration to archive.' });
    return yargs;
  }, async (argv) => {
    try {
      const variables = {};
      variables.id = argv.id;
      const result = await request(integrationArchive, variables);
      render(result.integrationArchive, { json: argv.json });
    } catch (err) {
      handleError(err);
    }
  });

  // mutation: integrationAsksConnectChannel
  yargs.command('asks-connect-channel', 'Connect a Slack channel to Asks.', (yargs) => {
    yargs.option('code', { type: 'string', demandOption: true, describe: 'The Slack OAuth code.' });
    yargs.option('redirect-uri', { type: 'string', demandOption: true, describe: 'The Slack OAuth redirect URI.' });
    return yargs;
  }, async (argv) => {
    try {
      const variables = {};
      if (argv['code'] !== undefined) variables.code = argv['code'];
      if (argv['redirect-uri'] !== undefined) variables.redirectUri = argv['redirect-uri'];
      const result = await request(integrationAsksConnectChannel, variables);
      render(result.integrationAsksConnectChannel, { json: argv.json });
    } catch (err) {
      handleError(err);
    }
  });

  // mutation: integrationCustomerDataAttributesRefresh
  yargs.command('customer-data-attributes-refresh', '[INTERNAL] Refreshes the customer data attributes from the specified integrat...', (yargs) => {
    yargs.option('service', { type: 'string', demandOption: true, describe: 'The integration service to refresh customer data attributes from.' });
    yargs.option('input-json', { type: 'string', describe: 'Full input as JSON (or @file.json)' });
    return yargs;
  }, async (argv) => {
    try {
      const variables = {};
      if (argv['input-json']) {
        variables.input = parseJsonFlag(argv['input-json']);
      } else {
        const input = {};
        if (argv['service'] !== undefined) input.service = argv['service'];
        variables.input = input;
      }
      const result = await request(integrationCustomerDataAttributesRefresh, variables);
      render(result.integrationCustomerDataAttributesRefresh, { json: argv.json });
    } catch (err) {
      handleError(err);
    }
  });

  // mutation: integrationDelete
  yargs.command('delete <id>', 'Deletes an integration.', (yargs) => {
    yargs.positional('id', { type: 'string', describe: 'The identifier of the integration to delete.' });
    yargs.option('skip-installation-deletion', { type: 'boolean', describe: 'Whether to skip deleting the installation on the external service side.' });
    return yargs;
  }, async (argv) => {
    try {
      const variables = {};
      variables.id = argv.id;
      if (argv['skip-installation-deletion'] !== undefined) variables.skipInstallationDeletion = argv['skip-installation-deletion'];
      const result = await request(integrationDelete, variables);
      render(result.integrationDelete, { json: argv.json });
    } catch (err) {
      handleError(err);
    }
  });

  // mutation: integrationDiscord
  yargs.command('discord', 'Integrates the organization with Discord.', (yargs) => {
    yargs.option('code', { type: 'string', demandOption: true, describe: 'The Discord OAuth code.' });
    yargs.option('redirect-uri', { type: 'string', demandOption: true, describe: 'The Discord OAuth redirect URI.' });
    return yargs;
  }, async (argv) => {
    try {
      const variables = {};
      if (argv['code'] !== undefined) variables.code = argv['code'];
      if (argv['redirect-uri'] !== undefined) variables.redirectUri = argv['redirect-uri'];
      const result = await request(integrationDiscord, variables);
      render(result.integrationDiscord, { json: argv.json });
    } catch (err) {
      handleError(err);
    }
  });

  // mutation: integrationFigma
  yargs.command('figma', 'Integrates the organization with Figma.', (yargs) => {
    yargs.option('code', { type: 'string', demandOption: true, describe: 'The Figma OAuth code.' });
    yargs.option('redirect-uri', { type: 'string', demandOption: true, describe: 'The Figma OAuth redirect URI.' });
    return yargs;
  }, async (argv) => {
    try {
      const variables = {};
      if (argv['code'] !== undefined) variables.code = argv['code'];
      if (argv['redirect-uri'] !== undefined) variables.redirectUri = argv['redirect-uri'];
      const result = await request(integrationFigma, variables);
      render(result.integrationFigma, { json: argv.json });
    } catch (err) {
      handleError(err);
    }
  });

  // mutation: integrationFront
  yargs.command('front', 'Integrates the organization with Front.', (yargs) => {
    yargs.option('code', { type: 'string', demandOption: true, describe: 'The Front OAuth code.' });
    yargs.option('redirect-uri', { type: 'string', demandOption: true, describe: 'The Front OAuth redirect URI.' });
    return yargs;
  }, async (argv) => {
    try {
      const variables = {};
      if (argv['code'] !== undefined) variables.code = argv['code'];
      if (argv['redirect-uri'] !== undefined) variables.redirectUri = argv['redirect-uri'];
      const result = await request(integrationFront, variables);
      render(result.integrationFront, { json: argv.json });
    } catch (err) {
      handleError(err);
    }
  });

  // mutation: integrationGitHubEnterpriseServerConnect
  yargs.command('git-hub-enterprise-server-connect', 'Connects the organization with a GitHub Enterprise Server.', (yargs) => {
    yargs.option('github-url', { type: 'string', demandOption: true, describe: 'The base URL of the GitHub Enterprise Server installation.' });
    yargs.option('organization-name', { type: 'string', demandOption: true, describe: 'The name of GitHub organization.' });
    return yargs;
  }, async (argv) => {
    try {
      const variables = {};
      if (argv['github-url'] !== undefined) variables.githubUrl = argv['github-url'];
      if (argv['organization-name'] !== undefined) variables.organizationName = argv['organization-name'];
      const result = await request(integrationGitHubEnterpriseServerConnect, variables);
      render(result.integrationGitHubEnterpriseServerConnect, { json: argv.json });
    } catch (err) {
      handleError(err);
    }
  });

  // mutation: integrationGitHubPersonal
  yargs.command('git-hub-personal', 'Connect your GitHub account to Linear.', (yargs) => {
    yargs.option('code', { type: 'string', demandOption: true, describe: 'The GitHub OAuth code.' });
    yargs.option('code-access', { type: 'boolean', describe: 'Whether to connect with code access.' });
    return yargs;
  }, async (argv) => {
    try {
      const variables = {};
      if (argv['code'] !== undefined) variables.code = argv['code'];
      if (argv['code-access'] !== undefined) variables.codeAccess = argv['code-access'];
      const result = await request(integrationGitHubPersonal, variables);
      render(result.integrationGitHubPersonal, { json: argv.json });
    } catch (err) {
      handleError(err);
    }
  });

  // mutation: integrationGithubConnect
  yargs.command('github-connect', 'Connects the organization with the GitHub App.', (yargs) => {
    yargs.option('code', { type: 'string', demandOption: true, describe: 'The GitHub grant code that\'s exchanged for OAuth tokens.' });
    yargs.option('code-access', { type: 'boolean', describe: 'Whether the integration should have code access' });
    yargs.option('installation-id', { type: 'string', demandOption: true, describe: 'The GitHub data to connect with.' });
    return yargs;
  }, async (argv) => {
    try {
      const variables = {};
      if (argv['code'] !== undefined) variables.code = argv['code'];
      if (argv['code-access'] !== undefined) variables.codeAccess = argv['code-access'];
      if (argv['installation-id'] !== undefined) variables.installationId = argv['installation-id'];
      const result = await request(integrationGithubConnect, variables);
      render(result.integrationGithubConnect, { json: argv.json });
    } catch (err) {
      handleError(err);
    }
  });

  // mutation: integrationGithubImportConnect
  yargs.command('github-import-connect', 'Connects the organization with the GitHub Import App.', (yargs) => {
    yargs.option('code', { type: 'string', demandOption: true, describe: 'The GitHub grant code that\'s exchanged for OAuth tokens.' });
    yargs.option('installation-id', { type: 'string', demandOption: true, describe: 'The GitHub data to connect with.' });
    return yargs;
  }, async (argv) => {
    try {
      const variables = {};
      if (argv['code'] !== undefined) variables.code = argv['code'];
      if (argv['installation-id'] !== undefined) variables.installationId = argv['installation-id'];
      const result = await request(integrationGithubImportConnect, variables);
      render(result.integrationGithubImportConnect, { json: argv.json });
    } catch (err) {
      handleError(err);
    }
  });

  // mutation: integrationGithubImportRefresh
  yargs.command('github-import-refresh <id>', 'Refreshes the data for a GitHub import integration.', (yargs) => {
    yargs.positional('id', { type: 'string', describe: 'The id of the integration to update.' });
    return yargs;
  }, async (argv) => {
    try {
      const variables = {};
      variables.id = argv.id;
      const result = await request(integrationGithubImportRefresh, variables);
      render(result.integrationGithubImportRefresh, { json: argv.json });
    } catch (err) {
      handleError(err);
    }
  });

  // mutation: integrationGitlabConnect
  yargs.command('gitlab-connect', 'Connects the organization with a GitLab Access Token.', (yargs) => {
    yargs.option('access-token', { type: 'string', demandOption: true, describe: 'The GitLab Access Token to connect with.' });
    yargs.option('gitlab-url', { type: 'string', demandOption: true, describe: 'The URL of the GitLab installation.' });
    return yargs;
  }, async (argv) => {
    try {
      const variables = {};
      if (argv['access-token'] !== undefined) variables.accessToken = argv['access-token'];
      if (argv['gitlab-url'] !== undefined) variables.gitlabUrl = argv['gitlab-url'];
      const result = await request(integrationGitlabConnect, variables);
      render(result.integrationGitlabConnect, { json: argv.json });
    } catch (err) {
      handleError(err);
    }
  });

  // mutation: integrationGong
  yargs.command('gong', 'Integrates the organization with Gong.', (yargs) => {
    yargs.option('code', { type: 'string', demandOption: true, describe: 'The Gong OAuth code.' });
    yargs.option('redirect-uri', { type: 'string', demandOption: true, describe: 'The Gong OAuth redirect URI.' });
    return yargs;
  }, async (argv) => {
    try {
      const variables = {};
      if (argv['code'] !== undefined) variables.code = argv['code'];
      if (argv['redirect-uri'] !== undefined) variables.redirectUri = argv['redirect-uri'];
      const result = await request(integrationGong, variables);
      render(result.integrationGong, { json: argv.json });
    } catch (err) {
      handleError(err);
    }
  });

  // mutation: integrationGoogleCalendarPersonalConnect
  yargs.command('google-calendar-personal-connect', '[Internal] Connects the Google Calendar to the user to this Linear account vi...', (yargs) => {
    yargs.option('code', { type: 'string', demandOption: true, describe: '[Internal] The Google OAuth code.' });
    return yargs;
  }, async (argv) => {
    try {
      const variables = {};
      if (argv['code'] !== undefined) variables.code = argv['code'];
      const result = await request(integrationGoogleCalendarPersonalConnect, variables);
      render(result.integrationGoogleCalendarPersonalConnect, { json: argv.json });
    } catch (err) {
      handleError(err);
    }
  });

  // mutation: integrationGoogleSheets
  yargs.command('google-sheets', 'Integrates the organization with Google Sheets.', (yargs) => {
    yargs.option('code', { type: 'string', demandOption: true, describe: 'The Google OAuth code.' });
    return yargs;
  }, async (argv) => {
    try {
      const variables = {};
      if (argv['code'] !== undefined) variables.code = argv['code'];
      const result = await request(integrationGoogleSheets, variables);
      render(result.integrationGoogleSheets, { json: argv.json });
    } catch (err) {
      handleError(err);
    }
  });

  // mutation: integrationLaunchDarklyConnect
  yargs.command('launch-darkly-connect', '[INTERNAL] Integrates the organization with LaunchDarkly.', (yargs) => {
    yargs.option('code', { type: 'string', demandOption: true, describe: 'The LaunchDarkly OAuth code.' });
    yargs.option('environment', { type: 'string', demandOption: true, describe: 'The LaunchDarkly environment.' });
    yargs.option('project-key', { type: 'string', demandOption: true, describe: 'The LaunchDarkly project key.' });
    return yargs;
  }, async (argv) => {
    try {
      const variables = {};
      if (argv['code'] !== undefined) variables.code = argv['code'];
      if (argv['environment'] !== undefined) variables.environment = argv['environment'];
      if (argv['project-key'] !== undefined) variables.projectKey = argv['project-key'];
      const result = await request(integrationLaunchDarklyConnect, variables);
      render(result.integrationLaunchDarklyConnect, { json: argv.json });
    } catch (err) {
      handleError(err);
    }
  });

  // mutation: integrationLaunchDarklyPersonalConnect
  yargs.command('launch-darkly-personal-connect', '[INTERNAL] Integrates your personal account with LaunchDarkly.', (yargs) => {
    yargs.option('code', { type: 'string', demandOption: true, describe: 'The LaunchDarkly OAuth code.' });
    return yargs;
  }, async (argv) => {
    try {
      const variables = {};
      if (argv['code'] !== undefined) variables.code = argv['code'];
      const result = await request(integrationLaunchDarklyPersonalConnect, variables);
      render(result.integrationLaunchDarklyPersonalConnect, { json: argv.json });
    } catch (err) {
      handleError(err);
    }
  });

  // mutation: integrationLoom
  yargs.command('loom', 'Enables Loom integration for the organization.', (yargs) => {
    return yargs;
  }, async (argv) => {
    try {
      const variables = {};
      const result = await request(integrationLoom, variables);
      render(result.integrationLoom, { json: argv.json });
    } catch (err) {
      handleError(err);
    }
  });

  // mutation: integrationOpsgenieConnect
  yargs.command('opsgenie-connect', '[INTERNAL] Integrates the organization with Opsgenie.', (yargs) => {
    yargs.option('api-key', { type: 'string', demandOption: true, describe: 'The Opsgenie API key.' });
    return yargs;
  }, async (argv) => {
    try {
      const variables = {};
      if (argv['api-key'] !== undefined) variables.apiKey = argv['api-key'];
      const result = await request(integrationOpsgenieConnect, variables);
      render(result.integrationOpsgenieConnect, { json: argv.json });
    } catch (err) {
      handleError(err);
    }
  });

  // mutation: integrationOpsgenieRefreshScheduleMappings
  yargs.command('opsgenie-refresh-schedule-mappings', '[INTERNAL] Refresh Opsgenie schedule mappings.', (yargs) => {
    return yargs;
  }, async (argv) => {
    try {
      const variables = {};
      const result = await request(integrationOpsgenieRefreshScheduleMappings, variables);
      render(result.integrationOpsgenieRefreshScheduleMappings, { json: argv.json });
    } catch (err) {
      handleError(err);
    }
  });

  // mutation: integrationPagerDutyConnect
  yargs.command('pager-duty-connect', '[INTERNAL] Integrates the organization with PagerDuty.', (yargs) => {
    yargs.option('code', { type: 'string', demandOption: true, describe: 'The PagerDuty OAuth code.' });
    yargs.option('redirect-uri', { type: 'string', demandOption: true, describe: 'The PagerDuty OAuth redirect URI.' });
    return yargs;
  }, async (argv) => {
    try {
      const variables = {};
      if (argv['code'] !== undefined) variables.code = argv['code'];
      if (argv['redirect-uri'] !== undefined) variables.redirectUri = argv['redirect-uri'];
      const result = await request(integrationPagerDutyConnect, variables);
      render(result.integrationPagerDutyConnect, { json: argv.json });
    } catch (err) {
      handleError(err);
    }
  });

  // mutation: integrationPagerDutyRefreshScheduleMappings
  yargs.command('pager-duty-refresh-schedule-mappings', '[INTERNAL] Refresh PagerDuty schedule mappings.', (yargs) => {
    return yargs;
  }, async (argv) => {
    try {
      const variables = {};
      const result = await request(integrationPagerDutyRefreshScheduleMappings, variables);
      render(result.integrationPagerDutyRefreshScheduleMappings, { json: argv.json });
    } catch (err) {
      handleError(err);
    }
  });

  // mutation: integrationRequest
  yargs.command('request', 'Requests a currently unavailable integration.', (yargs) => {
    yargs.option('email', { type: 'string', describe: 'Email associated with the request.' });
    yargs.option('name', { type: 'string', demandOption: true, describe: 'Name of the requested integration.' });
    yargs.option('input-json', { type: 'string', describe: 'Full input as JSON (or @file.json)' });
    return yargs;
  }, async (argv) => {
    try {
      const variables = {};
      if (argv['input-json']) {
        variables.input = parseJsonFlag(argv['input-json']);
      } else {
        const input = {};
        if (argv['email'] !== undefined) input.email = argv['email'];
        if (argv['name'] !== undefined) input.name = argv['name'];
        variables.input = input;
      }
      const result = await request(integrationRequest, variables);
      render(result.integrationRequest, { json: argv.json });
    } catch (err) {
      handleError(err);
    }
  });

  // mutation: integrationSalesforce
  yargs.command('salesforce', 'Integrates the organization with Salesforce.', (yargs) => {
    yargs.option('code', { type: 'string', demandOption: true, describe: 'The Salesforce OAuth code.' });
    yargs.option('redirect-uri', { type: 'string', demandOption: true, describe: 'The Salesforce OAuth redirect URI.' });
    yargs.option('subdomain', { type: 'string', demandOption: true, describe: 'The Salesforce installation subdomain.' });
    return yargs;
  }, async (argv) => {
    try {
      const variables = {};
      if (argv['code'] !== undefined) variables.code = argv['code'];
      if (argv['redirect-uri'] !== undefined) variables.redirectUri = argv['redirect-uri'];
      if (argv['subdomain'] !== undefined) variables.subdomain = argv['subdomain'];
      const result = await request(integrationSalesforce, variables);
      render(result.integrationSalesforce, { json: argv.json });
    } catch (err) {
      handleError(err);
    }
  });

  // mutation: integrationSalesforceMetadataRefresh
  yargs.command('salesforce-metadata-refresh <id>', '[INTERNAL] Refreshes the Salesforce integration metadata.', (yargs) => {
    yargs.positional('id', { type: 'string', describe: 'The ID of the integration to refresh metadata for.' });
    return yargs;
  }, async (argv) => {
    try {
      const variables = {};
      variables.id = argv.id;
      const result = await request(integrationSalesforceMetadataRefresh, variables);
      render(result.integrationSalesforceMetadataRefresh, { json: argv.json });
    } catch (err) {
      handleError(err);
    }
  });

  // mutation: integrationSentryConnect
  yargs.command('sentry-connect', 'Integrates the organization with Sentry.', (yargs) => {
    yargs.option('code', { type: 'string', demandOption: true, describe: 'The Sentry grant code that\'s exchanged for OAuth tokens.' });
    yargs.option('installation-id', { type: 'string', demandOption: true, describe: 'The Sentry installationId to connect with.' });
    yargs.option('organization-slug', { type: 'string', demandOption: true, describe: 'The slug of the Sentry organization being connected.' });
    return yargs;
  }, async (argv) => {
    try {
      const variables = {};
      if (argv['code'] !== undefined) variables.code = argv['code'];
      if (argv['installation-id'] !== undefined) variables.installationId = argv['installation-id'];
      if (argv['organization-slug'] !== undefined) variables.organizationSlug = argv['organization-slug'];
      const result = await request(integrationSentryConnect, variables);
      render(result.integrationSentryConnect, { json: argv.json });
    } catch (err) {
      handleError(err);
    }
  });

  // mutation: integrationSlack
  yargs.command('slack', 'Integrates the organization with Slack.', (yargs) => {
    yargs.option('code', { type: 'string', demandOption: true, describe: 'The Slack OAuth code.' });
    yargs.option('redirect-uri', { type: 'string', demandOption: true, describe: 'The Slack OAuth redirect URI.' });
    yargs.option('should-use-v2-auth', { type: 'boolean', describe: '[DEPRECATED] Whether or not v2 of Slack OAuth should be used. No longer used.' });
    return yargs;
  }, async (argv) => {
    try {
      const variables = {};
      if (argv['code'] !== undefined) variables.code = argv['code'];
      if (argv['redirect-uri'] !== undefined) variables.redirectUri = argv['redirect-uri'];
      if (argv['should-use-v2-auth'] !== undefined) variables.shouldUseV2Auth = argv['should-use-v2-auth'];
      const result = await request(integrationSlack, variables);
      render(result.integrationSlack, { json: argv.json });
    } catch (err) {
      handleError(err);
    }
  });

  // mutation: integrationSlackAsks
  yargs.command('slack-asks', 'Integrates the organization with the Slack Asks app.', (yargs) => {
    yargs.option('code', { type: 'string', demandOption: true, describe: 'The Slack OAuth code.' });
    yargs.option('redirect-uri', { type: 'string', demandOption: true, describe: 'The Slack OAuth redirect URI.' });
    return yargs;
  }, async (argv) => {
    try {
      const variables = {};
      if (argv['code'] !== undefined) variables.code = argv['code'];
      if (argv['redirect-uri'] !== undefined) variables.redirectUri = argv['redirect-uri'];
      const result = await request(integrationSlackAsks, variables);
      render(result.integrationSlackAsks, { json: argv.json });
    } catch (err) {
      handleError(err);
    }
  });

  // mutation: integrationSlackCustomViewNotifications
  yargs.command('slack-custom-view-notifications', 'Slack integration for custom view notifications.', (yargs) => {
    yargs.option('code', { type: 'string', demandOption: true, describe: 'The Slack OAuth code.' });
    yargs.option('custom-view-id', { type: 'string', demandOption: true, describe: 'Integration\'s associated custom view.' });
    yargs.option('redirect-uri', { type: 'string', demandOption: true, describe: 'The Slack OAuth redirect URI.' });
    return yargs;
  }, async (argv) => {
    try {
      const variables = {};
      if (argv['code'] !== undefined) variables.code = argv['code'];
      if (argv['custom-view-id'] !== undefined) variables.customViewId = argv['custom-view-id'];
      if (argv['redirect-uri'] !== undefined) variables.redirectUri = argv['redirect-uri'];
      const result = await request(integrationSlackCustomViewNotifications, variables);
      render(result.integrationSlackCustomViewNotifications, { json: argv.json });
    } catch (err) {
      handleError(err);
    }
  });

  // mutation: integrationSlackCustomerChannelLink
  yargs.command('slack-customer-channel-link', 'Integrates a Slack Asks channel with a Customer.', (yargs) => {
    yargs.option('code', { type: 'string', demandOption: true, describe: 'The Slack OAuth code.' });
    yargs.option('customer-id', { type: 'string', demandOption: true, describe: 'The customer to link the Slack channel with' });
    yargs.option('redirect-uri', { type: 'string', demandOption: true, describe: 'The Slack OAuth redirect URI.' });
    return yargs;
  }, async (argv) => {
    try {
      const variables = {};
      if (argv['code'] !== undefined) variables.code = argv['code'];
      if (argv['customer-id'] !== undefined) variables.customerId = argv['customer-id'];
      if (argv['redirect-uri'] !== undefined) variables.redirectUri = argv['redirect-uri'];
      const result = await request(integrationSlackCustomerChannelLink, variables);
      render(result.integrationSlackCustomerChannelLink, { json: argv.json });
    } catch (err) {
      handleError(err);
    }
  });

  // mutation: integrationSlackImportEmojis
  yargs.command('slack-import-emojis', 'Imports custom emojis from your Slack workspace.', (yargs) => {
    yargs.option('code', { type: 'string', demandOption: true, describe: 'The Slack OAuth code.' });
    yargs.option('redirect-uri', { type: 'string', demandOption: true, describe: 'The Slack OAuth redirect URI.' });
    return yargs;
  }, async (argv) => {
    try {
      const variables = {};
      if (argv['code'] !== undefined) variables.code = argv['code'];
      if (argv['redirect-uri'] !== undefined) variables.redirectUri = argv['redirect-uri'];
      const result = await request(integrationSlackImportEmojis, variables);
      render(result.integrationSlackImportEmojis, { json: argv.json });
    } catch (err) {
      handleError(err);
    }
  });

  // mutation: integrationSlackInitiativePost
  yargs.command('slack-initiative-post', '[Internal] Slack integration for initiative notifications.', (yargs) => {
    yargs.option('code', { type: 'string', demandOption: true, describe: 'The Slack OAuth code.' });
    yargs.option('initiative-id', { type: 'string', demandOption: true, describe: 'Integration\'s associated initiative.' });
    yargs.option('redirect-uri', { type: 'string', demandOption: true, describe: 'The Slack OAuth redirect URI.' });
    return yargs;
  }, async (argv) => {
    try {
      const variables = {};
      if (argv['code'] !== undefined) variables.code = argv['code'];
      if (argv['initiative-id'] !== undefined) variables.initiativeId = argv['initiative-id'];
      if (argv['redirect-uri'] !== undefined) variables.redirectUri = argv['redirect-uri'];
      const result = await request(integrationSlackInitiativePost, variables);
      render(result.integrationSlackInitiativePost, { json: argv.json });
    } catch (err) {
      handleError(err);
    }
  });

  // mutation: integrationSlackOrAsksUpdateSlackTeamName
  yargs.command('slack-or-asks-update-slack-team-name', 'Updates the Slack team\'s name in Linear for an existing Slack or Asks integra...', (yargs) => {
    yargs.option('integration-id', { type: 'string', demandOption: true, describe: 'The integration ID.' });
    return yargs;
  }, async (argv) => {
    try {
      const variables = {};
      if (argv['integration-id'] !== undefined) variables.integrationId = argv['integration-id'];
      const result = await request(integrationSlackOrAsksUpdateSlackTeamName, variables);
      render(result.integrationSlackOrAsksUpdateSlackTeamName, { json: argv.json });
    } catch (err) {
      handleError(err);
    }
  });

  // mutation: integrationSlackOrgInitiativeUpdatesPost
  yargs.command('slack-org-initiative-updates-post', '[Internal] Slack integration for organization level initiative update notific...', (yargs) => {
    yargs.option('code', { type: 'string', demandOption: true, describe: 'The Slack OAuth code.' });
    yargs.option('redirect-uri', { type: 'string', demandOption: true, describe: 'The Slack OAuth redirect URI.' });
    return yargs;
  }, async (argv) => {
    try {
      const variables = {};
      if (argv['code'] !== undefined) variables.code = argv['code'];
      if (argv['redirect-uri'] !== undefined) variables.redirectUri = argv['redirect-uri'];
      const result = await request(integrationSlackOrgInitiativeUpdatesPost, variables);
      render(result.integrationSlackOrgInitiativeUpdatesPost, { json: argv.json });
    } catch (err) {
      handleError(err);
    }
  });

  // mutation: integrationSlackOrgProjectUpdatesPost
  yargs.command('slack-org-project-updates-post', 'Slack integration for organization level project update notifications.', (yargs) => {
    yargs.option('code', { type: 'string', demandOption: true, describe: 'The Slack OAuth code.' });
    yargs.option('redirect-uri', { type: 'string', demandOption: true, describe: 'The Slack OAuth redirect URI.' });
    return yargs;
  }, async (argv) => {
    try {
      const variables = {};
      if (argv['code'] !== undefined) variables.code = argv['code'];
      if (argv['redirect-uri'] !== undefined) variables.redirectUri = argv['redirect-uri'];
      const result = await request(integrationSlackOrgProjectUpdatesPost, variables);
      render(result.integrationSlackOrgProjectUpdatesPost, { json: argv.json });
    } catch (err) {
      handleError(err);
    }
  });

  // mutation: integrationSlackPersonal
  yargs.command('slack-personal', 'Integrates your personal notifications with Slack.', (yargs) => {
    yargs.option('code', { type: 'string', demandOption: true, describe: 'The Slack OAuth code.' });
    yargs.option('redirect-uri', { type: 'string', demandOption: true, describe: 'The Slack OAuth redirect URI.' });
    return yargs;
  }, async (argv) => {
    try {
      const variables = {};
      if (argv['code'] !== undefined) variables.code = argv['code'];
      if (argv['redirect-uri'] !== undefined) variables.redirectUri = argv['redirect-uri'];
      const result = await request(integrationSlackPersonal, variables);
      render(result.integrationSlackPersonal, { json: argv.json });
    } catch (err) {
      handleError(err);
    }
  });

  // mutation: integrationSlackPost
  yargs.command('slack-post', 'Slack integration for team notifications.', (yargs) => {
    yargs.option('code', { type: 'string', demandOption: true, describe: 'The Slack OAuth code.' });
    yargs.option('redirect-uri', { type: 'string', demandOption: true, describe: 'The Slack OAuth redirect URI.' });
    yargs.option('should-use-v2-auth', { type: 'boolean', describe: '[DEPRECATED] Whether or not v2 of Slack OAuth should be used. No longer used.' });
    yargs.option('team-id', { type: 'string', demandOption: true, describe: 'Integration\'s associated team.' });
    return yargs;
  }, async (argv) => {
    try {
      const variables = {};
      if (argv['code'] !== undefined) variables.code = argv['code'];
      if (argv['redirect-uri'] !== undefined) variables.redirectUri = argv['redirect-uri'];
      if (argv['should-use-v2-auth'] !== undefined) variables.shouldUseV2Auth = argv['should-use-v2-auth'];
      if (argv['team-id'] !== undefined) variables.teamId = argv['team-id'];
      const result = await request(integrationSlackPost, variables);
      render(result.integrationSlackPost, { json: argv.json });
    } catch (err) {
      handleError(err);
    }
  });

  // mutation: integrationSlackProjectPost
  yargs.command('slack-project-post', 'Slack integration for project notifications.', (yargs) => {
    yargs.option('code', { type: 'string', demandOption: true, describe: 'The Slack OAuth code.' });
    yargs.option('project-id', { type: 'string', demandOption: true, describe: 'Integration\'s associated project.' });
    yargs.option('redirect-uri', { type: 'string', demandOption: true, describe: 'The Slack OAuth redirect URI.' });
    yargs.option('service', { type: 'string', demandOption: true, describe: 'The service to enable once connected, either \'notifications\' or \'updates\'.' });
    return yargs;
  }, async (argv) => {
    try {
      const variables = {};
      if (argv['code'] !== undefined) variables.code = argv['code'];
      if (argv['project-id'] !== undefined) variables.projectId = argv['project-id'];
      if (argv['redirect-uri'] !== undefined) variables.redirectUri = argv['redirect-uri'];
      if (argv['service'] !== undefined) variables.service = argv['service'];
      const result = await request(integrationSlackProjectPost, variables);
      render(result.integrationSlackProjectPost, { json: argv.json });
    } catch (err) {
      handleError(err);
    }
  });

  // mutation: integrationUpdate
  yargs.command('update <id>', '[INTERNAL] Updates the integration.', (yargs) => {
    yargs.positional('id', { type: 'string', describe: 'The identifier of the integration to update.' });
    yargs.option('settings', { type: 'string', describe: 'The settings to update.' });
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
        if (argv['settings'] !== undefined) input.settings = parseJsonFlag(argv['settings']);
        variables.input = input;
      }
      const result = await request(integrationUpdate, variables);
      render(result.integrationUpdate, { json: argv.json });
    } catch (err) {
      handleError(err);
    }
  });

  // mutation: integrationZendesk
  yargs.command('zendesk', 'Integrates the organization with Zendesk.', (yargs) => {
    yargs.option('code', { type: 'string', demandOption: true, describe: 'The Zendesk OAuth code.' });
    yargs.option('redirect-uri', { type: 'string', demandOption: true, describe: 'The Zendesk OAuth redirect URI.' });
    yargs.option('scope', { type: 'string', demandOption: true, describe: 'The Zendesk OAuth scopes.' });
    yargs.option('subdomain', { type: 'string', demandOption: true, describe: 'The Zendesk installation subdomain.' });
    return yargs;
  }, async (argv) => {
    try {
      const variables = {};
      if (argv['code'] !== undefined) variables.code = argv['code'];
      if (argv['redirect-uri'] !== undefined) variables.redirectUri = argv['redirect-uri'];
      if (argv['scope'] !== undefined) variables.scope = argv['scope'];
      if (argv['subdomain'] !== undefined) variables.subdomain = argv['subdomain'];
      const result = await request(integrationZendesk, variables);
      render(result.integrationZendesk, { json: argv.json });
    } catch (err) {
      handleError(err);
    }
  });

  return yargs.demandCommand(1, 'Specify a subcommand').strict();
}

export function handler() {}
