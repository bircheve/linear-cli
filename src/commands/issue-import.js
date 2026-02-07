// AUTO-GENERATED — do not edit. Run `npm run generate` to regenerate.
import { request } from '../client.js';
import { handleError } from '../error.js';
import { render } from '../output.js';
import { fetchAllPages } from '../pagination.js';
import { parseJsonFlag, kebabToCamel } from '../flag-utils.js';
import { columns } from '../generated/columns.js';

import { issueImportCheckCSV, issueImportCheckSync, issueImportJqlCheck } from '../generated/queries.js';
import { issueImportCreateAsana, issueImportCreateCSVJira, issueImportCreateClubhouse, issueImportCreateGithub, issueImportCreateJira, issueImportCreateLinearV2, issueImportDelete, issueImportProcess, issueImportUpdate } from '../generated/mutations.js';

export const command = 'issue-import <command>';
export const describe = 'issue-import commands';

export function builder(yargs) {

  // query: issueImportCheckCSV
  yargs.command('check-csv', 'Checks a CSV file validity against a specific import service.', (yargs) => {
    yargs.option('csv-url', { type: 'string', demandOption: true, describe: 'CSV storage url.' });
    yargs.option('service', { type: 'string', demandOption: true, describe: 'The service the CSV containing data from.' });
    return yargs;
  }, async (argv) => {
    try {
      const variables = {};
      if (argv['csv-url'] !== undefined) variables.csvUrl = argv['csv-url'];
      if (argv['service'] !== undefined) variables.service = argv['service'];
      const result = await request(issueImportCheckCSV, variables);
      render(result.issueImportCheckCSV, { json: argv.json, columnConfig: columns['IssueImportCheckPayload'] });
    } catch (err) {
      handleError(err);
    }
  });

  // query: issueImportCheckSync
  yargs.command('check-sync', 'Checks whether it will be possible to setup sync for this project or reposito...', (yargs) => {
    yargs.option('issue-import-id', { type: 'string', demandOption: true, describe: 'The ID of the issue import for which to check sync eligibility' });
    return yargs;
  }, async (argv) => {
    try {
      const variables = {};
      if (argv['issue-import-id'] !== undefined) variables.issueImportId = argv['issue-import-id'];
      const result = await request(issueImportCheckSync, variables);
      render(result.issueImportCheckSync, { json: argv.json, columnConfig: columns['IssueImportSyncCheckPayload'] });
    } catch (err) {
      handleError(err);
    }
  });

  // query: issueImportJqlCheck
  yargs.command('jql-check', 'Checks whether a custom JQL query is valid and can be used to filter issues o...', (yargs) => {
    yargs.option('jira-email', { type: 'string', demandOption: true, describe: 'Jira user account email.' });
    yargs.option('jira-hostname', { type: 'string', demandOption: true, describe: 'Jira installation or cloud hostname.' });
    yargs.option('jira-project', { type: 'string', demandOption: true, describe: 'Jira project key to use as the base filter of the query.' });
    yargs.option('jira-token', { type: 'string', demandOption: true, describe: 'Jira personal access token to access Jira REST API.' });
    yargs.option('jql', { type: 'string', demandOption: true, describe: 'The JQL query to validate.' });
    return yargs;
  }, async (argv) => {
    try {
      const variables = {};
      if (argv['jira-email'] !== undefined) variables.jiraEmail = argv['jira-email'];
      if (argv['jira-hostname'] !== undefined) variables.jiraHostname = argv['jira-hostname'];
      if (argv['jira-project'] !== undefined) variables.jiraProject = argv['jira-project'];
      if (argv['jira-token'] !== undefined) variables.jiraToken = argv['jira-token'];
      if (argv['jql'] !== undefined) variables.jql = argv['jql'];
      const result = await request(issueImportJqlCheck, variables);
      render(result.issueImportJqlCheck, { json: argv.json, columnConfig: columns['IssueImportJqlCheckPayload'] });
    } catch (err) {
      handleError(err);
    }
  });

  // mutation: issueImportCreateAsana
  yargs.command('create-asana', 'Kicks off an Asana import job.', (yargs) => {
    yargs.option('asana-team-name', { type: 'string', demandOption: true, describe: 'Asana team name to choose which issues we should import.' });
    yargs.option('asana-token', { type: 'string', demandOption: true, describe: 'Asana token to fetch information from the Asana API.' });
    yargs.option('id', { type: 'string', describe: 'ID of issue import. If not provided it will be generated.' });
    yargs.option('include-closed-issues', { type: 'boolean', describe: 'Whether or not we should collect the data for closed issues.' });
    yargs.option('instant-process', { type: 'boolean', describe: 'Whether to instantly process the import with the default configuration mapping.' });
    yargs.option('organization-id', { type: 'string', describe: 'ID of the organization into which to import data.' });
    yargs.option('team-id', { type: 'string', describe: 'ID of the team into which to import data.' });
    yargs.option('team-name', { type: 'string', describe: 'Name of new team. When teamId is not set.' });
    return yargs;
  }, async (argv) => {
    try {
      const variables = {};
      if (argv['asana-team-name'] !== undefined) variables.asanaTeamName = argv['asana-team-name'];
      if (argv['asana-token'] !== undefined) variables.asanaToken = argv['asana-token'];
      if (argv['id'] !== undefined) variables.id = argv['id'];
      if (argv['include-closed-issues'] !== undefined) variables.includeClosedIssues = argv['include-closed-issues'];
      if (argv['instant-process'] !== undefined) variables.instantProcess = argv['instant-process'];
      if (argv['organization-id'] !== undefined) variables.organizationId = argv['organization-id'];
      if (argv['team-id'] !== undefined) variables.teamId = argv['team-id'];
      if (argv['team-name'] !== undefined) variables.teamName = argv['team-name'];
      const result = await request(issueImportCreateAsana, variables);
      render(result.issueImportCreateAsana, { json: argv.json });
    } catch (err) {
      handleError(err);
    }
  });

  // mutation: issueImportCreateCSVJira
  yargs.command('create-csvjira', 'Kicks off a Jira import job from a CSV.', (yargs) => {
    yargs.option('csv-url', { type: 'string', demandOption: true, describe: 'URL for the CSV.' });
    yargs.option('jira-email', { type: 'string', describe: 'Jira user account email.' });
    yargs.option('jira-hostname', { type: 'string', describe: 'Jira installation or cloud hostname.' });
    yargs.option('jira-token', { type: 'string', describe: 'Jira personal access token to access Jira REST API.' });
    yargs.option('organization-id', { type: 'string', describe: 'ID of the organization into which to import data.' });
    yargs.option('team-id', { type: 'string', describe: 'ID of the team into which to import data. Empty to create new team.' });
    yargs.option('team-name', { type: 'string', describe: 'Name of new team. When teamId is not set.' });
    return yargs;
  }, async (argv) => {
    try {
      const variables = {};
      if (argv['csv-url'] !== undefined) variables.csvUrl = argv['csv-url'];
      if (argv['jira-email'] !== undefined) variables.jiraEmail = argv['jira-email'];
      if (argv['jira-hostname'] !== undefined) variables.jiraHostname = argv['jira-hostname'];
      if (argv['jira-token'] !== undefined) variables.jiraToken = argv['jira-token'];
      if (argv['organization-id'] !== undefined) variables.organizationId = argv['organization-id'];
      if (argv['team-id'] !== undefined) variables.teamId = argv['team-id'];
      if (argv['team-name'] !== undefined) variables.teamName = argv['team-name'];
      const result = await request(issueImportCreateCSVJira, variables);
      render(result.issueImportCreateCSVJira, { json: argv.json });
    } catch (err) {
      handleError(err);
    }
  });

  // mutation: issueImportCreateClubhouse
  yargs.command('create-clubhouse', 'Kicks off a Shortcut (formerly Clubhouse) import job.', (yargs) => {
    yargs.option('clubhouse-group-name', { type: 'string', demandOption: true, describe: 'Shortcut (formerly Clubhouse) group name to choose which issues we should imp...' });
    yargs.option('clubhouse-token', { type: 'string', demandOption: true, describe: 'Shortcut (formerly Clubhouse) token to fetch information from the Clubhouse API.' });
    yargs.option('id', { type: 'string', describe: 'ID of issue import. If not provided it will be generated.' });
    yargs.option('include-closed-issues', { type: 'boolean', describe: 'Whether or not we should collect the data for closed issues.' });
    yargs.option('instant-process', { type: 'boolean', describe: 'Whether to instantly process the import with the default configuration mapping.' });
    yargs.option('organization-id', { type: 'string', describe: 'ID of the organization into which to import data.' });
    yargs.option('team-id', { type: 'string', describe: 'ID of the team into which to import data.' });
    yargs.option('team-name', { type: 'string', describe: 'Name of new team. When teamId is not set.' });
    return yargs;
  }, async (argv) => {
    try {
      const variables = {};
      if (argv['clubhouse-group-name'] !== undefined) variables.clubhouseGroupName = argv['clubhouse-group-name'];
      if (argv['clubhouse-token'] !== undefined) variables.clubhouseToken = argv['clubhouse-token'];
      if (argv['id'] !== undefined) variables.id = argv['id'];
      if (argv['include-closed-issues'] !== undefined) variables.includeClosedIssues = argv['include-closed-issues'];
      if (argv['instant-process'] !== undefined) variables.instantProcess = argv['instant-process'];
      if (argv['organization-id'] !== undefined) variables.organizationId = argv['organization-id'];
      if (argv['team-id'] !== undefined) variables.teamId = argv['team-id'];
      if (argv['team-name'] !== undefined) variables.teamName = argv['team-name'];
      const result = await request(issueImportCreateClubhouse, variables);
      render(result.issueImportCreateClubhouse, { json: argv.json });
    } catch (err) {
      handleError(err);
    }
  });

  // mutation: issueImportCreateGithub
  yargs.command('create-github', 'Kicks off a GitHub import job.', (yargs) => {
    yargs.option('github-labels', { type: 'array', describe: 'Labels to use to filter the import data. Only issues matching any of these fi...' });
    yargs.option('github-repo-ids', { type: 'array', describe: 'IDs of the Github repositories from which we will import data.' });
    yargs.option('github-should-import-org-projects', { type: 'boolean', describe: 'Whether or not we should import GitHub organization level projects.' });
    yargs.option('include-closed-issues', { type: 'boolean', describe: 'Whether or not we should collect the data for closed issues.' });
    yargs.option('instant-process', { type: 'boolean', describe: 'Whether to instantly process the import with the default configuration mapping.' });
    yargs.option('integration-id', { type: 'string', describe: '[DEPRECATED] ID of the Github import integration to use to access issues.' });
    yargs.option('organization-id', { type: 'string', describe: 'ID of the organization into which to import data.' });
    yargs.option('team-id', { type: 'string', describe: 'ID of the team into which to import data.' });
    yargs.option('team-name', { type: 'string', describe: 'Name of new team. When teamId is not set.' });
    return yargs;
  }, async (argv) => {
    try {
      const variables = {};
      if (argv['github-labels'] !== undefined) variables.githubLabels = argv['github-labels'];
      if (argv['github-repo-ids'] !== undefined) variables.githubRepoIds = argv['github-repo-ids'];
      if (argv['github-should-import-org-projects'] !== undefined) variables.githubShouldImportOrgProjects = argv['github-should-import-org-projects'];
      if (argv['include-closed-issues'] !== undefined) variables.includeClosedIssues = argv['include-closed-issues'];
      if (argv['instant-process'] !== undefined) variables.instantProcess = argv['instant-process'];
      if (argv['integration-id'] !== undefined) variables.integrationId = argv['integration-id'];
      if (argv['organization-id'] !== undefined) variables.organizationId = argv['organization-id'];
      if (argv['team-id'] !== undefined) variables.teamId = argv['team-id'];
      if (argv['team-name'] !== undefined) variables.teamName = argv['team-name'];
      const result = await request(issueImportCreateGithub, variables);
      render(result.issueImportCreateGithub, { json: argv.json });
    } catch (err) {
      handleError(err);
    }
  });

  // mutation: issueImportCreateJira
  yargs.command('create-jira', 'Kicks off a Jira import job.', (yargs) => {
    yargs.option('id', { type: 'string', describe: 'ID of issue import. If not provided it will be generated.' });
    yargs.option('include-closed-issues', { type: 'boolean', describe: 'Whether or not we should collect the data for closed issues.' });
    yargs.option('instant-process', { type: 'boolean', describe: 'Whether to instantly process the import with the default configuration mapping.' });
    yargs.option('jira-email', { type: 'string', demandOption: true, describe: 'Jira user account email.' });
    yargs.option('jira-hostname', { type: 'string', demandOption: true, describe: 'Jira installation or cloud hostname.' });
    yargs.option('jira-project', { type: 'string', demandOption: true, describe: 'Jira project key from which we will import data.' });
    yargs.option('jira-token', { type: 'string', demandOption: true, describe: 'Jira personal access token to access Jira REST API.' });
    yargs.option('jql', { type: 'string', describe: 'A custom JQL query to filter issues being imported' });
    yargs.option('organization-id', { type: 'string', describe: 'ID of the organization into which to import data.' });
    yargs.option('team-id', { type: 'string', describe: 'ID of the team into which to import data. Empty to create new team.' });
    yargs.option('team-name', { type: 'string', describe: 'Name of new team. When teamId is not set.' });
    return yargs;
  }, async (argv) => {
    try {
      const variables = {};
      if (argv['id'] !== undefined) variables.id = argv['id'];
      if (argv['include-closed-issues'] !== undefined) variables.includeClosedIssues = argv['include-closed-issues'];
      if (argv['instant-process'] !== undefined) variables.instantProcess = argv['instant-process'];
      if (argv['jira-email'] !== undefined) variables.jiraEmail = argv['jira-email'];
      if (argv['jira-hostname'] !== undefined) variables.jiraHostname = argv['jira-hostname'];
      if (argv['jira-project'] !== undefined) variables.jiraProject = argv['jira-project'];
      if (argv['jira-token'] !== undefined) variables.jiraToken = argv['jira-token'];
      if (argv['jql'] !== undefined) variables.jql = argv['jql'];
      if (argv['organization-id'] !== undefined) variables.organizationId = argv['organization-id'];
      if (argv['team-id'] !== undefined) variables.teamId = argv['team-id'];
      if (argv['team-name'] !== undefined) variables.teamName = argv['team-name'];
      const result = await request(issueImportCreateJira, variables);
      render(result.issueImportCreateJira, { json: argv.json });
    } catch (err) {
      handleError(err);
    }
  });

  // mutation: issueImportCreateLinearV2
  yargs.command('create-linear-v2', '[INTERNAL] Kicks off a Linear to Linear import job.', (yargs) => {
    yargs.option('id', { type: 'string', describe: 'ID of issue import. If not provided it will be generated.' });
    yargs.option('linear-source-organization-id', { type: 'string', demandOption: true, describe: 'The source organization to import from.' });
    return yargs;
  }, async (argv) => {
    try {
      const variables = {};
      if (argv['id'] !== undefined) variables.id = argv['id'];
      if (argv['linear-source-organization-id'] !== undefined) variables.linearSourceOrganizationId = argv['linear-source-organization-id'];
      const result = await request(issueImportCreateLinearV2, variables);
      render(result.issueImportCreateLinearV2, { json: argv.json });
    } catch (err) {
      handleError(err);
    }
  });

  // mutation: issueImportDelete
  yargs.command('delete', 'Deletes an import job.', (yargs) => {
    yargs.option('issue-import-id', { type: 'string', demandOption: true, describe: 'ID of the issue import to delete.' });
    return yargs;
  }, async (argv) => {
    try {
      const variables = {};
      if (argv['issue-import-id'] !== undefined) variables.issueImportId = argv['issue-import-id'];
      const result = await request(issueImportDelete, variables);
      render(result.issueImportDelete, { json: argv.json });
    } catch (err) {
      handleError(err);
    }
  });

  // mutation: issueImportProcess
  yargs.command('process', 'Kicks off import processing.', (yargs) => {
    yargs.option('issue-import-id', { type: 'string', demandOption: true, describe: 'ID of the issue import which we\'re going to process.' });
    yargs.option('mapping', { type: 'string', demandOption: true, describe: 'The mapping configuration to use for processing the import.' });
    return yargs;
  }, async (argv) => {
    try {
      const variables = {};
      if (argv['issue-import-id'] !== undefined) variables.issueImportId = argv['issue-import-id'];
      if (argv['mapping'] !== undefined) variables.mapping = argv['mapping'];
      const result = await request(issueImportProcess, variables);
      render(result.issueImportProcess, { json: argv.json });
    } catch (err) {
      handleError(err);
    }
  });

  // mutation: issueImportUpdate
  yargs.command('update <id>', 'Updates the mapping for the issue import.', (yargs) => {
    yargs.positional('id', { type: 'string', describe: 'The identifier of the issue import.' });
    yargs.option('mapping', { type: 'string', demandOption: true, describe: 'The mapping configuration for the import.' });
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
        if (argv['mapping'] !== undefined) input.mapping = parseJsonFlag(argv['mapping']);
        variables.input = input;
      }
      const result = await request(issueImportUpdate, variables);
      render(result.issueImportUpdate, { json: argv.json });
    } catch (err) {
      handleError(err);
    }
  });

  return yargs.demandCommand(1, 'Specify a subcommand').strict();
}

export function handler() {}
