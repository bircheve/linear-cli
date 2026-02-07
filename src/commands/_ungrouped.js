// AUTO-GENERATED — do not edit. Run `npm run generate` to regenerate.
import { request } from '../client.js';
import { handleError } from '../error.js';
import { render } from '../output.js';
import { fetchAllPages } from '../pagination.js';
import { parseJsonFlag, kebabToCamel } from '../flag-utils.js';
import { columns } from '../generated/columns.js';

import { administrableTeams, agentActivities, attachmentsForURL, auditEntries, auditEntryTypes, authorizedApplications, failuresForOauthWebhooks, fetchData, notificationsUnreadCount, searchDocuments, searchIssues, searchProjects, semanticSearch, summarizeProjectUpdates, templatesForIntegration, triageResponsibilities, verifyGitHubEnterpriseServerInstallation, workspaceAuthorizedApplication, workspaceAuthorizedApplicationsWithAppUser } from '../generated/queries.js';
import { airbyteIntegrationConnect, createInitiativeUpdateReminder, createProjectUpdateReminder, emailTokenUserAccountAuth, emailUnsubscribe, emailUserAccountAuthChallenge, jiraIntegrationConnect, logoutAllSessions, passkeyLoginFinish, passkeyLoginStart, refreshGoogleSheetsData, resendOrganizationInvite, resendOrganizationInviteByEmail, samlTokenUserAccountAuth, updateIntegrationSlackScopes, updateIssueSummary } from '../generated/mutations.js';

export const command = '_ungrouped <command>';
export const describe = '_ungrouped commands';

export function builder(yargs) {

  // query: administrableTeams
  yargs.command('administrable-teams', 'All teams you the user can administrate. Administrable teams are teams whose ...', (yargs) => {
    yargs.option('filter', { type: 'string', describe: 'Filter returned teams.' });
    yargs.option('include-archived', { type: 'boolean', describe: 'Should archived resources be included (default: false)' });
    yargs.option('order-by', { type: 'string', choices: ["createdAt","updatedAt"], describe: 'By which field should the pagination order by. Available options are createdA...' });
    yargs.option('first', { type: 'number', default: 50, describe: 'Number of results to fetch' });
    yargs.option('after', { type: 'string', describe: 'Cursor for forward pagination' });
    yargs.option('last', { type: 'number', describe: 'Number of results to fetch from the end' });
    yargs.option('before', { type: 'string', describe: 'Cursor for backward pagination' });
    yargs.option('all', { type: 'boolean', describe: 'Fetch all pages', default: false });
    yargs.option('filter-json', { type: 'string', describe: 'Filter as JSON (or @file.json)' });
    return yargs;
  }, async (argv) => {
    try {
      const variables = {};
      if (argv['filter'] !== undefined) variables.filter = argv['filter'];
      if (argv['include-archived'] !== undefined) variables.includeArchived = argv['include-archived'];
      if (argv['order-by'] !== undefined) variables.orderBy = argv['order-by'];
      if (argv['filter-json']) variables.filter = parseJsonFlag(argv['filter-json']);
      if (argv.first !== undefined) variables.first = argv.first;
      if (argv.after) variables.after = argv.after;
      if (argv.last !== undefined) variables.last = argv.last;
      if (argv.before) variables.before = argv.before;

      let data;
      if (argv.all) {
        data = await fetchAllPages(request, administrableTeams, variables, 'administrableTeams');
      } else {
        const result = await request(administrableTeams, variables);
        data = result.administrableTeams?.nodes || [];
      }
      render(data, { json: argv.json, isList: true, columnConfig: columns['Team'] });
    } catch (err) {
      handleError(err);
    }
  });

  // query: agentActivities
  yargs.command('agent-activities', 'All agent activities.', (yargs) => {
    yargs.option('filter', { type: 'string', describe: 'Filter returned agent activities.' });
    yargs.option('include-archived', { type: 'boolean', describe: 'Should archived resources be included (default: false)' });
    yargs.option('order-by', { type: 'string', choices: ["createdAt","updatedAt"], describe: 'By which field should the pagination order by. Available options are createdA...' });
    yargs.option('first', { type: 'number', default: 50, describe: 'Number of results to fetch' });
    yargs.option('after', { type: 'string', describe: 'Cursor for forward pagination' });
    yargs.option('last', { type: 'number', describe: 'Number of results to fetch from the end' });
    yargs.option('before', { type: 'string', describe: 'Cursor for backward pagination' });
    yargs.option('all', { type: 'boolean', describe: 'Fetch all pages', default: false });
    yargs.option('filter-json', { type: 'string', describe: 'Filter as JSON (or @file.json)' });
    return yargs;
  }, async (argv) => {
    try {
      const variables = {};
      if (argv['filter'] !== undefined) variables.filter = argv['filter'];
      if (argv['include-archived'] !== undefined) variables.includeArchived = argv['include-archived'];
      if (argv['order-by'] !== undefined) variables.orderBy = argv['order-by'];
      if (argv['filter-json']) variables.filter = parseJsonFlag(argv['filter-json']);
      if (argv.first !== undefined) variables.first = argv.first;
      if (argv.after) variables.after = argv.after;
      if (argv.last !== undefined) variables.last = argv.last;
      if (argv.before) variables.before = argv.before;

      let data;
      if (argv.all) {
        data = await fetchAllPages(request, agentActivities, variables, 'agentActivities');
      } else {
        const result = await request(agentActivities, variables);
        data = result.agentActivities?.nodes || [];
      }
      render(data, { json: argv.json, isList: true, columnConfig: columns['AgentActivity'] });
    } catch (err) {
      handleError(err);
    }
  });

  // query: attachmentsForURL
  yargs.command('attachments-for-url', 'Returns issue attachments for a given `url`.', (yargs) => {
    yargs.option('include-archived', { type: 'boolean', describe: 'Should archived resources be included (default: false)' });
    yargs.option('order-by', { type: 'string', choices: ["createdAt","updatedAt"], describe: 'By which field should the pagination order by. Available options are createdA...' });
    yargs.option('url', { type: 'string', demandOption: true, describe: 'The attachment URL.' });
    yargs.option('first', { type: 'number', default: 50, describe: 'Number of results to fetch' });
    yargs.option('after', { type: 'string', describe: 'Cursor for forward pagination' });
    yargs.option('last', { type: 'number', describe: 'Number of results to fetch from the end' });
    yargs.option('before', { type: 'string', describe: 'Cursor for backward pagination' });
    yargs.option('all', { type: 'boolean', describe: 'Fetch all pages', default: false });
    return yargs;
  }, async (argv) => {
    try {
      const variables = {};
      if (argv['include-archived'] !== undefined) variables.includeArchived = argv['include-archived'];
      if (argv['order-by'] !== undefined) variables.orderBy = argv['order-by'];
      if (argv['url'] !== undefined) variables.url = argv['url'];
      if (argv.first !== undefined) variables.first = argv.first;
      if (argv.after) variables.after = argv.after;
      if (argv.last !== undefined) variables.last = argv.last;
      if (argv.before) variables.before = argv.before;

      let data;
      if (argv.all) {
        data = await fetchAllPages(request, attachmentsForURL, variables, 'attachmentsForURL');
      } else {
        const result = await request(attachmentsForURL, variables);
        data = result.attachmentsForURL?.nodes || [];
      }
      render(data, { json: argv.json, isList: true, columnConfig: columns['Attachment'] });
    } catch (err) {
      handleError(err);
    }
  });

  // query: auditEntries
  yargs.command('audit-entries', 'All audit log entries.', (yargs) => {
    yargs.option('filter', { type: 'string', describe: 'Filter returned audit entries.' });
    yargs.option('include-archived', { type: 'boolean', describe: 'Should archived resources be included (default: false)' });
    yargs.option('order-by', { type: 'string', choices: ["createdAt","updatedAt"], describe: 'By which field should the pagination order by. Available options are createdA...' });
    yargs.option('first', { type: 'number', default: 50, describe: 'Number of results to fetch' });
    yargs.option('after', { type: 'string', describe: 'Cursor for forward pagination' });
    yargs.option('last', { type: 'number', describe: 'Number of results to fetch from the end' });
    yargs.option('before', { type: 'string', describe: 'Cursor for backward pagination' });
    yargs.option('all', { type: 'boolean', describe: 'Fetch all pages', default: false });
    yargs.option('filter-json', { type: 'string', describe: 'Filter as JSON (or @file.json)' });
    return yargs;
  }, async (argv) => {
    try {
      const variables = {};
      if (argv['filter'] !== undefined) variables.filter = argv['filter'];
      if (argv['include-archived'] !== undefined) variables.includeArchived = argv['include-archived'];
      if (argv['order-by'] !== undefined) variables.orderBy = argv['order-by'];
      if (argv['filter-json']) variables.filter = parseJsonFlag(argv['filter-json']);
      if (argv.first !== undefined) variables.first = argv.first;
      if (argv.after) variables.after = argv.after;
      if (argv.last !== undefined) variables.last = argv.last;
      if (argv.before) variables.before = argv.before;

      let data;
      if (argv.all) {
        data = await fetchAllPages(request, auditEntries, variables, 'auditEntries');
      } else {
        const result = await request(auditEntries, variables);
        data = result.auditEntries?.nodes || [];
      }
      render(data, { json: argv.json, isList: true, columnConfig: columns['AuditEntry'] });
    } catch (err) {
      handleError(err);
    }
  });

  // query: auditEntryTypes
  yargs.command('audit-entry-types', 'List of audit entry types.', (yargs) => {
    return yargs;
  }, async (argv) => {
    try {
      const variables = {};
      const result = await request(auditEntryTypes, variables);
      render(result.auditEntryTypes, { json: argv.json, isList: true, columnConfig: columns['AuditEntryType'] });
    } catch (err) {
      handleError(err);
    }
  });

  // query: authorizedApplications
  yargs.command('authorized-applications', '[INTERNAL] Get all authorized applications for a user.', (yargs) => {
    return yargs;
  }, async (argv) => {
    try {
      const variables = {};
      const result = await request(authorizedApplications, variables);
      render(result.authorizedApplications, { json: argv.json, isList: true, columnConfig: columns['AuthorizedApplication'] });
    } catch (err) {
      handleError(err);
    }
  });

  // query: failuresForOauthWebhooks
  yargs.command('failures-for-oauth-webhooks', '[INTERNAL] Webhook failure events for webhooks that belong to an OAuth applic...', (yargs) => {
    yargs.option('oauth-client-id', { type: 'string', demandOption: true, describe: 'The identifier of the OAuth client to retrieve failures for.' });
    return yargs;
  }, async (argv) => {
    try {
      const variables = {};
      if (argv['oauth-client-id'] !== undefined) variables.oauthClientId = argv['oauth-client-id'];
      const result = await request(failuresForOauthWebhooks, variables);
      render(result.failuresForOauthWebhooks, { json: argv.json, isList: true, columnConfig: columns['WebhookFailureEvent'] });
    } catch (err) {
      handleError(err);
    }
  });

  // query: fetchData
  yargs.command('fetch-data', '[Internal] Fetch an arbitrary set of data using natural language query. Be sp...', (yargs) => {
    yargs.option('query', { type: 'string', demandOption: true, describe: 'Natural language query describing what data to fetch.          Examples:     ...' });
    return yargs;
  }, async (argv) => {
    try {
      const variables = {};
      if (argv['query'] !== undefined) variables.query = argv['query'];
      const result = await request(fetchData, variables);
      render(result.fetchData, { json: argv.json, columnConfig: columns['FetchDataPayload'] });
    } catch (err) {
      handleError(err);
    }
  });

  // query: notificationsUnreadCount
  yargs.command('notifications-unread-count', '[Internal] A number of unread notifications.', (yargs) => {
    return yargs;
  }, async (argv) => {
    try {
      const variables = {};
      const result = await request(notificationsUnreadCount, variables);
      render(result.notificationsUnreadCount, { json: argv.json, columnConfig: columns['Int'] });
    } catch (err) {
      handleError(err);
    }
  });

  // query: searchDocuments
  yargs.command('search-documents', 'Search documents.', (yargs) => {
    yargs.option('after', { type: 'string', describe: 'A cursor to be used with first for forward pagination' });
    yargs.option('before', { type: 'string', describe: 'A cursor to be used with last for backward pagination.' });
    yargs.option('first', { type: 'number', describe: 'The number of items to forward paginate (used with after). Defaults to 50.' });
    yargs.option('include-archived', { type: 'boolean', describe: 'Should archived resources be included (default: false)' });
    yargs.option('include-comments', { type: 'boolean', describe: 'Should associated comments be searched (default: false).' });
    yargs.option('last', { type: 'number', describe: 'The number of items to backward paginate (used with before). Defaults to 50.' });
    yargs.option('order-by', { type: 'string', choices: ["createdAt","updatedAt"], describe: 'By which field should the pagination order by. Available options are createdA...' });
    yargs.option('snippet-size', { type: 'number', describe: 'Size of search snippet to return (default: 100)' });
    yargs.option('team-id', { type: 'string', describe: 'UUID of a team to use as a boost.' });
    yargs.option('term', { type: 'string', demandOption: true, describe: 'Search string to look for.' });
    return yargs;
  }, async (argv) => {
    try {
      const variables = {};
      if (argv['after'] !== undefined) variables.after = argv['after'];
      if (argv['before'] !== undefined) variables.before = argv['before'];
      if (argv['first'] !== undefined) variables.first = argv['first'];
      if (argv['include-archived'] !== undefined) variables.includeArchived = argv['include-archived'];
      if (argv['include-comments'] !== undefined) variables.includeComments = argv['include-comments'];
      if (argv['last'] !== undefined) variables.last = argv['last'];
      if (argv['order-by'] !== undefined) variables.orderBy = argv['order-by'];
      if (argv['snippet-size'] !== undefined) variables.snippetSize = argv['snippet-size'];
      if (argv['team-id'] !== undefined) variables.teamId = argv['team-id'];
      if (argv['term'] !== undefined) variables.term = argv['term'];
      const result = await request(searchDocuments, variables);
      render(result.searchDocuments, { json: argv.json, columnConfig: columns['DocumentSearchPayload'] });
    } catch (err) {
      handleError(err);
    }
  });

  // query: searchIssues
  yargs.command('search-issues', 'Search issues.', (yargs) => {
    yargs.option('after', { type: 'string', describe: 'A cursor to be used with first for forward pagination' });
    yargs.option('before', { type: 'string', describe: 'A cursor to be used with last for backward pagination.' });
    yargs.option('filter', { type: 'string', describe: 'Filter returned issues.' });
    yargs.option('first', { type: 'number', describe: 'The number of items to forward paginate (used with after). Defaults to 50.' });
    yargs.option('include-archived', { type: 'boolean', describe: 'Should archived resources be included (default: false)' });
    yargs.option('include-comments', { type: 'boolean', describe: 'Should associated comments be searched (default: false).' });
    yargs.option('last', { type: 'number', describe: 'The number of items to backward paginate (used with before). Defaults to 50.' });
    yargs.option('order-by', { type: 'string', choices: ["createdAt","updatedAt"], describe: 'By which field should the pagination order by. Available options are createdA...' });
    yargs.option('snippet-size', { type: 'number', describe: 'Size of search snippet to return (default: 100)' });
    yargs.option('team-id', { type: 'string', describe: 'UUID of a team to use as a boost.' });
    yargs.option('term', { type: 'string', demandOption: true, describe: 'Search string to look for.' });
    yargs.option('filter-json', { type: 'string', describe: 'Filter as JSON (or @file.json)' });
    return yargs;
  }, async (argv) => {
    try {
      const variables = {};
      if (argv['after'] !== undefined) variables.after = argv['after'];
      if (argv['before'] !== undefined) variables.before = argv['before'];
      if (argv['filter'] !== undefined) variables.filter = argv['filter'];
      if (argv['first'] !== undefined) variables.first = argv['first'];
      if (argv['include-archived'] !== undefined) variables.includeArchived = argv['include-archived'];
      if (argv['include-comments'] !== undefined) variables.includeComments = argv['include-comments'];
      if (argv['last'] !== undefined) variables.last = argv['last'];
      if (argv['order-by'] !== undefined) variables.orderBy = argv['order-by'];
      if (argv['snippet-size'] !== undefined) variables.snippetSize = argv['snippet-size'];
      if (argv['team-id'] !== undefined) variables.teamId = argv['team-id'];
      if (argv['term'] !== undefined) variables.term = argv['term'];
      const result = await request(searchIssues, variables);
      render(result.searchIssues, { json: argv.json, columnConfig: columns['IssueSearchPayload'] });
    } catch (err) {
      handleError(err);
    }
  });

  // query: searchProjects
  yargs.command('search-projects', 'Search projects.', (yargs) => {
    yargs.option('after', { type: 'string', describe: 'A cursor to be used with first for forward pagination' });
    yargs.option('before', { type: 'string', describe: 'A cursor to be used with last for backward pagination.' });
    yargs.option('first', { type: 'number', describe: 'The number of items to forward paginate (used with after). Defaults to 50.' });
    yargs.option('include-archived', { type: 'boolean', describe: 'Should archived resources be included (default: false)' });
    yargs.option('include-comments', { type: 'boolean', describe: 'Should associated comments be searched (default: false).' });
    yargs.option('last', { type: 'number', describe: 'The number of items to backward paginate (used with before). Defaults to 50.' });
    yargs.option('order-by', { type: 'string', choices: ["createdAt","updatedAt"], describe: 'By which field should the pagination order by. Available options are createdA...' });
    yargs.option('snippet-size', { type: 'number', describe: 'Size of search snippet to return (default: 100)' });
    yargs.option('team-id', { type: 'string', describe: 'UUID of a team to use as a boost.' });
    yargs.option('term', { type: 'string', demandOption: true, describe: 'Search string to look for.' });
    return yargs;
  }, async (argv) => {
    try {
      const variables = {};
      if (argv['after'] !== undefined) variables.after = argv['after'];
      if (argv['before'] !== undefined) variables.before = argv['before'];
      if (argv['first'] !== undefined) variables.first = argv['first'];
      if (argv['include-archived'] !== undefined) variables.includeArchived = argv['include-archived'];
      if (argv['include-comments'] !== undefined) variables.includeComments = argv['include-comments'];
      if (argv['last'] !== undefined) variables.last = argv['last'];
      if (argv['order-by'] !== undefined) variables.orderBy = argv['order-by'];
      if (argv['snippet-size'] !== undefined) variables.snippetSize = argv['snippet-size'];
      if (argv['team-id'] !== undefined) variables.teamId = argv['team-id'];
      if (argv['term'] !== undefined) variables.term = argv['term'];
      const result = await request(searchProjects, variables);
      render(result.searchProjects, { json: argv.json, columnConfig: columns['ProjectSearchPayload'] });
    } catch (err) {
      handleError(err);
    }
  });

  // query: semanticSearch
  yargs.command('semantic-search', '[INTERNAL] Search for various resources using natural language.', (yargs) => {
    yargs.option('include-archived', { type: 'boolean', describe: 'Whether to include archived results in the search (default: false).' });
    yargs.option('max-results', { type: 'number', describe: 'The maximum number of results to return (default: 10).' });
    yargs.option('query', { type: 'string', demandOption: true, describe: 'Search query to look for.' });
    yargs.option('types', { type: 'array', describe: 'The types of results to return (default: all).' });
    return yargs;
  }, async (argv) => {
    try {
      const variables = {};
      if (argv['include-archived'] !== undefined) variables.includeArchived = argv['include-archived'];
      if (argv['max-results'] !== undefined) variables.maxResults = argv['max-results'];
      if (argv['query'] !== undefined) variables.query = argv['query'];
      if (argv['types'] !== undefined) variables.types = argv['types'];
      const result = await request(semanticSearch, variables);
      render(result.semanticSearch, { json: argv.json, columnConfig: columns['SemanticSearchPayload'] });
    } catch (err) {
      handleError(err);
    }
  });

  // query: summarizeProjectUpdates
  yargs.command('summarize-project-updates', '[Internal] AI summary of the latest project updates for the given projects', (yargs) => {
    yargs.option('ids', { type: 'array', demandOption: true, describe: 'The identifiers of the projects to summarize.' });
    return yargs;
  }, async (argv) => {
    try {
      const variables = {};
      if (argv['ids'] !== undefined) variables.ids = argv['ids'];
      const result = await request(summarizeProjectUpdates, variables);
      render(result.summarizeProjectUpdates, { json: argv.json, columnConfig: columns['SummaryPayload'] });
    } catch (err) {
      handleError(err);
    }
  });

  // query: templatesForIntegration
  yargs.command('templates-for-integration', 'Returns all templates that are associated with the integration type.', (yargs) => {
    yargs.option('integration-type', { type: 'string', demandOption: true, describe: 'The type of integration for which to return associated templates.' });
    return yargs;
  }, async (argv) => {
    try {
      const variables = {};
      if (argv['integration-type'] !== undefined) variables.integrationType = argv['integration-type'];
      const result = await request(templatesForIntegration, variables);
      render(result.templatesForIntegration, { json: argv.json, isList: true, columnConfig: columns['Template'] });
    } catch (err) {
      handleError(err);
    }
  });

  // query: triageResponsibilities
  yargs.command('triage-responsibilities', 'All triage responsibilities.', (yargs) => {
    yargs.option('include-archived', { type: 'boolean', describe: 'Should archived resources be included (default: false)' });
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
      if (argv['include-archived'] !== undefined) variables.includeArchived = argv['include-archived'];
      if (argv['order-by'] !== undefined) variables.orderBy = argv['order-by'];
      if (argv.first !== undefined) variables.first = argv.first;
      if (argv.after) variables.after = argv.after;
      if (argv.last !== undefined) variables.last = argv.last;
      if (argv.before) variables.before = argv.before;

      let data;
      if (argv.all) {
        data = await fetchAllPages(request, triageResponsibilities, variables, 'triageResponsibilities');
      } else {
        const result = await request(triageResponsibilities, variables);
        data = result.triageResponsibilities?.nodes || [];
      }
      render(data, { json: argv.json, isList: true, columnConfig: columns['TriageResponsibility'] });
    } catch (err) {
      handleError(err);
    }
  });

  // query: verifyGitHubEnterpriseServerInstallation
  yargs.command('verify-git-hub-enterprise-server-installation', 'Verify that we received the correct response from the GitHub Enterprise Server.', (yargs) => {
    yargs.option('integration-id', { type: 'string', demandOption: true, describe: 'The integration ID.' });
    return yargs;
  }, async (argv) => {
    try {
      const variables = {};
      if (argv['integration-id'] !== undefined) variables.integrationId = argv['integration-id'];
      const result = await request(verifyGitHubEnterpriseServerInstallation, variables);
      render(result.verifyGitHubEnterpriseServerInstallation, { json: argv.json, columnConfig: columns['GitHubEnterpriseServerInstallVerificationPayload'] });
    } catch (err) {
      handleError(err);
    }
  });

  // query: workspaceAuthorizedApplication
  yargs.command('workspace-authorized-application', '[INTERNAL] Get a specific non-internal authorized application (with limited f...', (yargs) => {
    yargs.option('client-id', { type: 'string', demandOption: true, describe: 'The client ID of the application.' });
    return yargs;
  }, async (argv) => {
    try {
      const variables = {};
      if (argv['client-id'] !== undefined) variables.clientId = argv['client-id'];
      const result = await request(workspaceAuthorizedApplication, variables);
      render(result.workspaceAuthorizedApplication, { json: argv.json, columnConfig: columns['WorkspaceAuthorizedApplicationWithMemberships'] });
    } catch (err) {
      handleError(err);
    }
  });

  // query: workspaceAuthorizedApplicationsWithAppUser
  yargs.command('workspace-authorized-applications-with-app-user', '[INTERNAL] Get non-internal authorized applications for a workspace, includin...', (yargs) => {
    yargs.option('client-ids', { type: 'array', describe: 'Client IDs of specific applications to return. If not provided, all workspace...' });
    return yargs;
  }, async (argv) => {
    try {
      const variables = {};
      if (argv['client-ids'] !== undefined) variables.clientIds = argv['client-ids'];
      const result = await request(workspaceAuthorizedApplicationsWithAppUser, variables);
      render(result.workspaceAuthorizedApplicationsWithAppUser, { json: argv.json, isList: true, columnConfig: columns['WorkspaceAuthorizedApplicationWithAppUser'] });
    } catch (err) {
      handleError(err);
    }
  });

  // mutation: airbyteIntegrationConnect
  yargs.command('airbyte-integration-connect', 'Creates an integration api key for Airbyte to connect with Linear.', (yargs) => {
    yargs.option('api-key', { type: 'string', demandOption: true, describe: 'Linear export API key.' });
    yargs.option('input-json', { type: 'string', describe: 'Full input as JSON (or @file.json)' });
    return yargs;
  }, async (argv) => {
    try {
      const variables = {};
      if (argv['input-json']) {
        variables.input = parseJsonFlag(argv['input-json']);
      } else {
        const input = {};
        if (argv['api-key'] !== undefined) input.apiKey = argv['api-key'];
        variables.input = input;
      }
      const result = await request(airbyteIntegrationConnect, variables);
      render(result.airbyteIntegrationConnect, { json: argv.json });
    } catch (err) {
      handleError(err);
    }
  });

  // mutation: createInitiativeUpdateReminder
  yargs.command('create-initiative-update-reminder', 'Create a notification to remind a user about an initiative update.', (yargs) => {
    yargs.option('initiative-id', { type: 'string', demandOption: true, describe: 'The identifier of the initiative to remind about.' });
    yargs.option('user-id', { type: 'string', describe: 'The user identifier to whom the notification will be sent. By default, it is ...' });
    return yargs;
  }, async (argv) => {
    try {
      const variables = {};
      if (argv['initiative-id'] !== undefined) variables.initiativeId = argv['initiative-id'];
      if (argv['user-id'] !== undefined) variables.userId = argv['user-id'];
      const result = await request(createInitiativeUpdateReminder, variables);
      render(result.createInitiativeUpdateReminder, { json: argv.json });
    } catch (err) {
      handleError(err);
    }
  });

  // mutation: createProjectUpdateReminder
  yargs.command('create-project-update-reminder', 'Create a notification to remind a user about a project update.', (yargs) => {
    yargs.option('project-id', { type: 'string', demandOption: true, describe: 'The identifier of the project to remind about.' });
    yargs.option('user-id', { type: 'string', describe: 'The user identifier to whom the notification will be sent. By default, it is ...' });
    return yargs;
  }, async (argv) => {
    try {
      const variables = {};
      if (argv['project-id'] !== undefined) variables.projectId = argv['project-id'];
      if (argv['user-id'] !== undefined) variables.userId = argv['user-id'];
      const result = await request(createProjectUpdateReminder, variables);
      render(result.createProjectUpdateReminder, { json: argv.json });
    } catch (err) {
      handleError(err);
    }
  });

  // mutation: emailTokenUserAccountAuth
  yargs.command('email-token-user-account-auth', 'Authenticates a user account via email and authentication token.', (yargs) => {
    yargs.option('email', { type: 'string', demandOption: true, describe: 'The email which to login via the magic login code.' });
    yargs.option('invite-link', { type: 'string', describe: 'An optional invite link for an organization.' });
    yargs.option('timezone', { type: 'string', demandOption: true, describe: 'The timezone of the user\'s browser.' });
    yargs.option('token', { type: 'string', demandOption: true, describe: 'The magic login code.' });
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
        if (argv['invite-link'] !== undefined) input.inviteLink = argv['invite-link'];
        if (argv['timezone'] !== undefined) input.timezone = argv['timezone'];
        if (argv['token'] !== undefined) input.token = argv['token'];
        variables.input = input;
      }
      const result = await request(emailTokenUserAccountAuth, variables);
      render(result.emailTokenUserAccountAuth, { json: argv.json });
    } catch (err) {
      handleError(err);
    }
  });

  // mutation: emailUnsubscribe
  yargs.command('email-unsubscribe', 'Unsubscribes the user from one type of email.', (yargs) => {
    yargs.option('token', { type: 'string', demandOption: true, describe: 'The user\'s email validation token.' });
    yargs.option('type', { type: 'string', demandOption: true, describe: 'Email type to unsubscribe from.' });
    yargs.option('user-id', { type: 'string', demandOption: true, describe: 'The identifier of the user.' });
    yargs.option('input-json', { type: 'string', describe: 'Full input as JSON (or @file.json)' });
    return yargs;
  }, async (argv) => {
    try {
      const variables = {};
      if (argv['input-json']) {
        variables.input = parseJsonFlag(argv['input-json']);
      } else {
        const input = {};
        if (argv['token'] !== undefined) input.token = argv['token'];
        if (argv['type'] !== undefined) input.type = argv['type'];
        if (argv['user-id'] !== undefined) input.userId = argv['user-id'];
        variables.input = input;
      }
      const result = await request(emailUnsubscribe, variables);
      render(result.emailUnsubscribe, { json: argv.json });
    } catch (err) {
      handleError(err);
    }
  });

  // mutation: emailUserAccountAuthChallenge
  yargs.command('email-user-account-auth-challenge', 'Finds or creates a new user account by email and sends an email with token.', (yargs) => {
    yargs.option('client-auth-code', { type: 'string', describe: 'Auth code for the client initiating the sequence.' });
    yargs.option('email', { type: 'string', demandOption: true, describe: 'The email for which to generate the magic login code.' });
    yargs.option('invite-link', { type: 'string', describe: 'The organization invite link to associate with this authentication.' });
    yargs.option('is-desktop', { type: 'boolean', describe: 'Whether the login was requested from the desktop app.' });
    yargs.option('login-code-only', { type: 'boolean', describe: 'Whether to only return the login code. This is used by mobile apps to skip sh...' });
    yargs.option('input-json', { type: 'string', describe: 'Full input as JSON (or @file.json)' });
    return yargs;
  }, async (argv) => {
    try {
      const variables = {};
      if (argv['input-json']) {
        variables.input = parseJsonFlag(argv['input-json']);
      } else {
        const input = {};
        if (argv['client-auth-code'] !== undefined) input.clientAuthCode = argv['client-auth-code'];
        if (argv['email'] !== undefined) input.email = argv['email'];
        if (argv['invite-link'] !== undefined) input.inviteLink = argv['invite-link'];
        if (argv['is-desktop'] !== undefined) input.isDesktop = argv['is-desktop'];
        if (argv['login-code-only'] !== undefined) input.loginCodeOnly = argv['login-code-only'];
        variables.input = input;
      }
      const result = await request(emailUserAccountAuthChallenge, variables);
      render(result.emailUserAccountAuthChallenge, { json: argv.json });
    } catch (err) {
      handleError(err);
    }
  });

  // mutation: jiraIntegrationConnect
  yargs.command('jira-integration-connect', '[INTERNAL] Connects the organization with a Jira Personal Access Token.', (yargs) => {
    yargs.option('access-token', { type: 'string', demandOption: true, describe: 'The Jira personal access token.' });
    yargs.option('email', { type: 'string', demandOption: true, describe: 'The Jira user\'s email address.' });
    yargs.option('hostname', { type: 'string', demandOption: true, describe: 'The Jira installation hostname.' });
    yargs.option('manual-setup', { type: 'boolean', describe: 'Whether this integration will be setup using the manual webhook flow.' });
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
        if (argv['email'] !== undefined) input.email = argv['email'];
        if (argv['hostname'] !== undefined) input.hostname = argv['hostname'];
        if (argv['manual-setup'] !== undefined) input.manualSetup = argv['manual-setup'];
        variables.input = input;
      }
      const result = await request(jiraIntegrationConnect, variables);
      render(result.jiraIntegrationConnect, { json: argv.json });
    } catch (err) {
      handleError(err);
    }
  });

  // mutation: logoutAllSessions
  yargs.command('logout-all-sessions', 'Logout all of user\'s sessions including the active one.', (yargs) => {
    yargs.option('reason', { type: 'string', describe: 'The reason for logging out.' });
    return yargs;
  }, async (argv) => {
    try {
      const variables = {};
      if (argv['reason'] !== undefined) variables.reason = argv['reason'];
      const result = await request(logoutAllSessions, variables);
      render(result.logoutAllSessions, { json: argv.json });
    } catch (err) {
      handleError(err);
    }
  });

  // mutation: passkeyLoginFinish
  yargs.command('passkey-login-finish', '[INTERNAL] Finish passkey login process.', (yargs) => {
    yargs.option('auth-id', { type: 'string', demandOption: true, describe: 'Random ID to start passkey login with.' });
    yargs.option('response', { type: 'string', demandOption: true });
    return yargs;
  }, async (argv) => {
    try {
      const variables = {};
      if (argv['auth-id'] !== undefined) variables.authId = argv['auth-id'];
      if (argv['response'] !== undefined) variables.response = argv['response'];
      const result = await request(passkeyLoginFinish, variables);
      render(result.passkeyLoginFinish, { json: argv.json });
    } catch (err) {
      handleError(err);
    }
  });

  // mutation: passkeyLoginStart
  yargs.command('passkey-login-start', '[INTERNAL] Starts passkey login process.', (yargs) => {
    yargs.option('auth-id', { type: 'string', demandOption: true, describe: 'Random ID to start passkey login with.' });
    return yargs;
  }, async (argv) => {
    try {
      const variables = {};
      if (argv['auth-id'] !== undefined) variables.authId = argv['auth-id'];
      const result = await request(passkeyLoginStart, variables);
      render(result.passkeyLoginStart, { json: argv.json });
    } catch (err) {
      handleError(err);
    }
  });

  // mutation: refreshGoogleSheetsData
  yargs.command('refresh-google-sheets-data <id>', 'Manually update Google Sheets data.', (yargs) => {
    yargs.positional('id', { type: 'string', describe: 'The identifier of the Google Sheets integration to update.' });
    yargs.option('type', { type: 'string', describe: 'The type of export.' });
    return yargs;
  }, async (argv) => {
    try {
      const variables = {};
      variables.id = argv.id;
      if (argv['type'] !== undefined) variables.type = argv['type'];
      const result = await request(refreshGoogleSheetsData, variables);
      render(result.refreshGoogleSheetsData, { json: argv.json });
    } catch (err) {
      handleError(err);
    }
  });

  // mutation: resendOrganizationInvite
  yargs.command('resend-organization-invite <id>', 'Re-send an organization invite.', (yargs) => {
    yargs.positional('id', { type: 'string', describe: 'The identifier of the organization invite to re-send.' });
    return yargs;
  }, async (argv) => {
    try {
      const variables = {};
      variables.id = argv.id;
      const result = await request(resendOrganizationInvite, variables);
      render(result.resendOrganizationInvite, { json: argv.json });
    } catch (err) {
      handleError(err);
    }
  });

  // mutation: resendOrganizationInviteByEmail
  yargs.command('resend-organization-invite-by-email', 'Re-send an organization invite tied to an email address.', (yargs) => {
    yargs.option('email', { type: 'string', demandOption: true, describe: 'The email address tied to the organization invite to re-send.' });
    return yargs;
  }, async (argv) => {
    try {
      const variables = {};
      if (argv['email'] !== undefined) variables.email = argv['email'];
      const result = await request(resendOrganizationInviteByEmail, variables);
      render(result.resendOrganizationInviteByEmail, { json: argv.json });
    } catch (err) {
      handleError(err);
    }
  });

  // mutation: samlTokenUserAccountAuth
  yargs.command('saml-token-user-account-auth', 'Authenticates a user account via email and authentication token for SAML.', (yargs) => {
    yargs.option('email', { type: 'string', demandOption: true, describe: 'The email which to login via the magic login code.' });
    yargs.option('invite-link', { type: 'string', describe: 'An optional invite link for an organization.' });
    yargs.option('timezone', { type: 'string', demandOption: true, describe: 'The timezone of the user\'s browser.' });
    yargs.option('token', { type: 'string', demandOption: true, describe: 'The magic login code.' });
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
        if (argv['invite-link'] !== undefined) input.inviteLink = argv['invite-link'];
        if (argv['timezone'] !== undefined) input.timezone = argv['timezone'];
        if (argv['token'] !== undefined) input.token = argv['token'];
        variables.input = input;
      }
      const result = await request(samlTokenUserAccountAuth, variables);
      render(result.samlTokenUserAccountAuth, { json: argv.json });
    } catch (err) {
      handleError(err);
    }
  });

  // mutation: updateIntegrationSlackScopes
  yargs.command('update-integration-slack-scopes', '[Internal] Updates existing Slack integration scopes.', (yargs) => {
    yargs.option('code', { type: 'string', demandOption: true, describe: 'The Slack OAuth code.' });
    yargs.option('integration-id', { type: 'string', demandOption: true, describe: 'The ID of the existing Slack integration' });
    yargs.option('redirect-uri', { type: 'string', demandOption: true, describe: 'The Slack OAuth redirect URI.' });
    return yargs;
  }, async (argv) => {
    try {
      const variables = {};
      if (argv['code'] !== undefined) variables.code = argv['code'];
      if (argv['integration-id'] !== undefined) variables.integrationId = argv['integration-id'];
      if (argv['redirect-uri'] !== undefined) variables.redirectUri = argv['redirect-uri'];
      const result = await request(updateIntegrationSlackScopes, variables);
      render(result.updateIntegrationSlackScopes, { json: argv.json });
    } catch (err) {
      handleError(err);
    }
  });

  // mutation: updateIssueSummary
  yargs.command('update-issue-summary <id>', '[INTERNAL] Updates the summary of an issue.', (yargs) => {
    yargs.positional('id', { type: 'string', describe: 'The identifier of the issue to update.' });
    return yargs;
  }, async (argv) => {
    try {
      const variables = {};
      variables.id = argv.id;
      const result = await request(updateIssueSummary, variables);
      render(result.updateIssueSummary, { json: argv.json });
    } catch (err) {
      handleError(err);
    }
  });

  return yargs.demandCommand(1, 'Specify a subcommand').strict();
}

export function handler() {}
