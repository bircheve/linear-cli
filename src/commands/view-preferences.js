// AUTO-GENERATED — do not edit. Run `npm run generate` to regenerate.
import { request } from '../client.js';
import { handleError } from '../error.js';
import { render } from '../output.js';
import { fetchAllPages } from '../pagination.js';
import { parseJsonFlag, kebabToCamel } from '../flag-utils.js';
import { columns } from '../generated/columns.js';

import { viewPreferencesCreate, viewPreferencesDelete, viewPreferencesUpdate } from '../generated/mutations.js';

export const command = 'view-preferences <command>';
export const describe = 'view-preferences commands';

export function builder(yargs) {

  // mutation: viewPreferencesCreate
  yargs.command('create', 'Creates a new ViewPreferences object.', (yargs) => {
    yargs.option('custom-view-id', { type: 'string', describe: 'The custom view these view preferences are associated with.' });
    yargs.option('id', { type: 'string', describe: 'The identifier in UUID v4 format. If none is provided, the backend will gener...' });
    yargs.option('initiative-id', { type: 'string', describe: '[Internal] The initiative these view preferences are associated with.' });
    yargs.option('insights', { type: 'string', describe: 'The default parameters for the insight on that view.' });
    yargs.option('label-id', { type: 'string', describe: 'The label these view preferences are associated with.' });
    yargs.option('preferences', { type: 'string', demandOption: true, describe: 'View preferences object.' });
    yargs.option('project-id', { type: 'string', describe: 'The project these view preferences are associated with.' });
    yargs.option('project-label-id', { type: 'string', describe: 'The project label these view preferences are associated with.' });
    yargs.option('team-id', { type: 'string', describe: 'The team these view preferences are associated with.' });
    yargs.option('type', { type: 'string', demandOption: true, choices: ["organization","user"], describe: 'The type of view preferences (either user or organization level preferences).' });
    yargs.option('user-id', { type: 'string', describe: 'The user profile these view preferences are associated with.' });
    yargs.option('view-type', { type: 'string', demandOption: true, choices: ["activeIssues","allIssues","archive","backlog","board","completedCycle","customView","customViews","customer","customers","cycle","dashboards","embeddedCustomerNeeds","feedAll","feedCreated","feedFollowing","feedPopular","inbox","initiative","initiativeOverview","initiativeOverviewSubInitiatives","initiatives","initiativesCompleted","initiativesPlanned","issueIdentifiers","label","myIssues","myIssuesActivity","myIssuesCreatedByMe","myIssuesSubscribedTo","myReviews","project","projectCustomerNeeds","projectDocuments","projectLabel","projects","projectsAll","projectsBacklog","projectsClosed","quickView","reviews","roadmap","roadmapAll","roadmapBacklog","roadmapClosed","roadmaps","search","splitSearch","subIssues","teams","triage","userProfile","userProfileCreatedByUser","workspaceMembers"], describe: 'The view type of the view preferences are associated with.' });
    yargs.option('input-json', { type: 'string', describe: 'Full input as JSON (or @file.json)' });
    return yargs;
  }, async (argv) => {
    try {
      const variables = {};
      if (argv['input-json']) {
        variables.input = parseJsonFlag(argv['input-json']);
      } else {
        const input = {};
        if (argv['custom-view-id'] !== undefined) input.customViewId = argv['custom-view-id'];
        if (argv['id'] !== undefined) input.id = argv['id'];
        if (argv['initiative-id'] !== undefined) input.initiativeId = argv['initiative-id'];
        if (argv['insights'] !== undefined) input.insights = parseJsonFlag(argv['insights']);
        if (argv['label-id'] !== undefined) input.labelId = argv['label-id'];
        if (argv['preferences'] !== undefined) input.preferences = parseJsonFlag(argv['preferences']);
        if (argv['project-id'] !== undefined) input.projectId = argv['project-id'];
        if (argv['project-label-id'] !== undefined) input.projectLabelId = argv['project-label-id'];
        if (argv['team-id'] !== undefined) input.teamId = argv['team-id'];
        if (argv['type'] !== undefined) input.type = argv['type'];
        if (argv['user-id'] !== undefined) input.userId = argv['user-id'];
        if (argv['view-type'] !== undefined) input.viewType = argv['view-type'];
        variables.input = input;
      }
      const result = await request(viewPreferencesCreate, variables);
      render(result.viewPreferencesCreate, { json: argv.json });
    } catch (err) {
      handleError(err);
    }
  });

  // mutation: viewPreferencesDelete
  yargs.command('delete <id>', 'Deletes a ViewPreferences.', (yargs) => {
    yargs.positional('id', { type: 'string', describe: 'The identifier of the ViewPreferences to delete.' });
    return yargs;
  }, async (argv) => {
    try {
      const variables = {};
      variables.id = argv.id;
      const result = await request(viewPreferencesDelete, variables);
      render(result.viewPreferencesDelete, { json: argv.json });
    } catch (err) {
      handleError(err);
    }
  });

  // mutation: viewPreferencesUpdate
  yargs.command('update <id>', 'Updates an existing ViewPreferences object.', (yargs) => {
    yargs.positional('id', { type: 'string', describe: 'The identifier of the ViewPreferences object.' });
    yargs.option('insights', { type: 'string', describe: 'The default parameters for the insight on that view.' });
    yargs.option('preferences', { type: 'string', describe: 'View preferences.' });
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
        if (argv['insights'] !== undefined) input.insights = parseJsonFlag(argv['insights']);
        if (argv['preferences'] !== undefined) input.preferences = parseJsonFlag(argv['preferences']);
        variables.input = input;
      }
      const result = await request(viewPreferencesUpdate, variables);
      render(result.viewPreferencesUpdate, { json: argv.json });
    } catch (err) {
      handleError(err);
    }
  });

  return yargs.demandCommand(1, 'Specify a subcommand').strict();
}

export function handler() {}
