// AUTO-GENERATED — do not edit. Run `npm run generate` to regenerate.
import { request } from '../client.js';
import { handleError } from '../error.js';
import { render } from '../output.js';
import { fetchAllPages } from '../pagination.js';
import { parseJsonFlag, kebabToCamel } from '../flag-utils.js';

import { organization, organizationExists, organizationInvites, organizationMeta } from '../generated/queries.js';
import { createOrganizationFromOnboarding, joinOrganizationFromOnboarding, leaveOrganization, organizationDelete, organizationDeleteChallenge, organizationStartTrial, organizationStartTrialForPlan, organizationUpdate } from '../generated/mutations.js';

export const command = 'organization <command>';
export const describe = 'organization commands';

export function builder(yargs) {

  // query: organization
  yargs.command('list', 'The user\'s organization.', (yargs) => {
    return yargs;
  }, async (argv) => {
    try {
      const variables = {};
      const result = await request(organization, variables);
      render(result.organization, { json: argv.json });
    } catch (err) {
      handleError(err);
    }
  });

  // query: organizationExists
  yargs.command('exists', 'Does the organization exist.', (yargs) => {
    yargs.option('url-key', { type: 'string', demandOption: true });
    return yargs;
  }, async (argv) => {
    try {
      const variables = {};
      if (argv['url-key'] !== undefined) variables.urlKey = argv['url-key'];
      const result = await request(organizationExists, variables);
      render(result.organizationExists, { json: argv.json });
    } catch (err) {
      handleError(err);
    }
  });

  // query: organizationInvites
  yargs.command('invites', 'All invites for the organization.', (yargs) => {
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
        data = await fetchAllPages(request, organizationInvites, variables, 'organizationInvites');
      } else {
        const result = await request(organizationInvites, variables);
        data = result.organizationInvites?.nodes || [];
      }
      render(data, { json: argv.json, isList: true });
    } catch (err) {
      handleError(err);
    }
  });

  // query: organizationMeta
  yargs.command('meta', '[INTERNAL] Get organization metadata by urlKey or organization id.', (yargs) => {
    yargs.option('url-key', { type: 'string', demandOption: true });
    return yargs;
  }, async (argv) => {
    try {
      const variables = {};
      if (argv['url-key'] !== undefined) variables.urlKey = argv['url-key'];
      const result = await request(organizationMeta, variables);
      render(result.organizationMeta, { json: argv.json });
    } catch (err) {
      handleError(err);
    }
  });

  // mutation: createOrganizationFromOnboarding
  yargs.command('create-from-onboarding', 'Creates an organization from onboarding.', (yargs) => {
    yargs.option('domain-access', { type: 'boolean', describe: 'Whether the organization should allow email domain access.' });
    yargs.option('name', { type: 'string', demandOption: true, describe: 'The name of the organization.' });
    yargs.option('timezone', { type: 'string', describe: 'The timezone of the organization, passed in by client.' });
    yargs.option('url-key', { type: 'string', demandOption: true, describe: 'The URL key of the organization.' });
    yargs.option('utm', { type: 'string', describe: 'JSON serialized UTM parameters associated with the creation of the workspace.' });
    yargs.option('survey', { type: 'string', describe: 'Onboarding survey.' });
    yargs.option('input-json', { type: 'string', describe: 'Full input as JSON (or @file.json)' });
    return yargs;
  }, async (argv) => {
    try {
      const variables = {};
      if (argv['input-json']) {
        variables.input = parseJsonFlag(argv['input-json']);
      } else {
        const input = {};
        if (argv['domain-access'] !== undefined) input.domainAccess = argv['domain-access'];
        if (argv['name'] !== undefined) input.name = argv['name'];
        if (argv['timezone'] !== undefined) input.timezone = argv['timezone'];
        if (argv['url-key'] !== undefined) input.urlKey = argv['url-key'];
        if (argv['utm'] !== undefined) input.utm = argv['utm'];
        variables.input = input;
      }
      if (argv['survey'] !== undefined) variables.survey = parseJsonFlag(argv['survey']);
      const result = await request(createOrganizationFromOnboarding, variables);
      render(result.createOrganizationFromOnboarding, { json: argv.json });
    } catch (err) {
      handleError(err);
    }
  });

  // mutation: joinOrganizationFromOnboarding
  yargs.command('join-from-onboarding', 'Join an organization from onboarding.', (yargs) => {
    yargs.option('invite-link', { type: 'string', describe: 'An optional invite link for an organization.' });
    yargs.option('organization-id', { type: 'string', demandOption: true, describe: 'The identifier of the organization.' });
    yargs.option('input-json', { type: 'string', describe: 'Full input as JSON (or @file.json)' });
    return yargs;
  }, async (argv) => {
    try {
      const variables = {};
      if (argv['input-json']) {
        variables.input = parseJsonFlag(argv['input-json']);
      } else {
        const input = {};
        if (argv['invite-link'] !== undefined) input.inviteLink = argv['invite-link'];
        if (argv['organization-id'] !== undefined) input.organizationId = argv['organization-id'];
        variables.input = input;
      }
      const result = await request(joinOrganizationFromOnboarding, variables);
      render(result.joinOrganizationFromOnboarding, { json: argv.json });
    } catch (err) {
      handleError(err);
    }
  });

  // mutation: leaveOrganization
  yargs.command('leave', 'Leave an organization.', (yargs) => {
    yargs.option('organization-id', { type: 'string', demandOption: true, describe: 'ID of the organization to leave.' });
    return yargs;
  }, async (argv) => {
    try {
      const variables = {};
      if (argv['organization-id'] !== undefined) variables.organizationId = argv['organization-id'];
      const result = await request(leaveOrganization, variables);
      render(result.leaveOrganization, { json: argv.json });
    } catch (err) {
      handleError(err);
    }
  });

  // mutation: organizationDelete
  yargs.command('delete', 'Delete\'s an organization. Administrator privileges required.', (yargs) => {
    yargs.option('deletion-code', { type: 'string', demandOption: true, describe: 'The deletion code to confirm operation.' });
    yargs.option('input-json', { type: 'string', describe: 'Full input as JSON (or @file.json)' });
    return yargs;
  }, async (argv) => {
    try {
      const variables = {};
      if (argv['input-json']) {
        variables.input = parseJsonFlag(argv['input-json']);
      } else {
        const input = {};
        if (argv['deletion-code'] !== undefined) input.deletionCode = argv['deletion-code'];
        variables.input = input;
      }
      const result = await request(organizationDelete, variables);
      render(result.organizationDelete, { json: argv.json });
    } catch (err) {
      handleError(err);
    }
  });

  // mutation: organizationDeleteChallenge
  yargs.command('delete-challenge', 'Get an organization\'s delete confirmation token. Administrator privileges req...', (yargs) => {
    return yargs;
  }, async (argv) => {
    try {
      const variables = {};
      const result = await request(organizationDeleteChallenge, variables);
      render(result.organizationDeleteChallenge, { json: argv.json });
    } catch (err) {
      handleError(err);
    }
  });

  // mutation: organizationStartTrial
  yargs.command('start-trial', '[DEPRECATED] Starts a trial for the organization. Administrator privileges re...', (yargs) => {
    return yargs;
  }, async (argv) => {
    try {
      const variables = {};
      const result = await request(organizationStartTrial, variables);
      render(result.organizationStartTrial, { json: argv.json });
    } catch (err) {
      handleError(err);
    }
  });

  // mutation: organizationStartTrialForPlan
  yargs.command('start-trial-for-plan', 'Starts a trial for the organization on the specified plan type. Administrator...', (yargs) => {
    yargs.option('plan-type', { type: 'string', demandOption: true, describe: 'The plan type to trial.' });
    yargs.option('input-json', { type: 'string', describe: 'Full input as JSON (or @file.json)' });
    return yargs;
  }, async (argv) => {
    try {
      const variables = {};
      if (argv['input-json']) {
        variables.input = parseJsonFlag(argv['input-json']);
      } else {
        const input = {};
        if (argv['plan-type'] !== undefined) input.planType = argv['plan-type'];
        variables.input = input;
      }
      const result = await request(organizationStartTrialForPlan, variables);
      render(result.organizationStartTrialForPlan, { json: argv.json });
    } catch (err) {
      handleError(err);
    }
  });

  // mutation: organizationUpdate
  yargs.command('update', 'Updates the user\'s organization.', (yargs) => {
    yargs.option('ai-addon-enabled', { type: 'boolean', describe: '[INTERNAL] Whether the organization has enabled the AI add-on.' });
    yargs.option('ai-telemetry-enabled', { type: 'boolean', describe: '[INTERNAL] Whether the organization has opted in to AI telemetry.' });
    yargs.option('allow-members-to-invite', { type: 'boolean', describe: 'Whether member users are allowed to send invites.' });
    yargs.option('allowed-auth-services', { type: 'array', describe: 'List of services that are allowed to be used for login.' });
    yargs.option('allowed-file-upload-content-types', { type: 'array', describe: 'Allowed file upload content types.' });
    yargs.option('customers-configuration', { type: 'string', describe: '[INTERNAL] Configuration settings for the Customers feature.' });
    yargs.option('customers-enabled', { type: 'boolean', describe: '[INTERNAL] Whether the organization is using customers.' });
    yargs.option('default-feed-summary-schedule', { type: 'string', choices: ["daily","never","weekly"], describe: 'Default schedule for how often feed summaries are generated.' });
    yargs.option('feed-enabled', { type: 'boolean', describe: 'Whether the organization has enabled the feed feature.' });
    yargs.option('fiscal-year-start-month', { type: 'number', describe: 'The month at which the fiscal year starts.' });
    yargs.option('git-branch-format', { type: 'string', describe: 'How git branches are formatted. If null, default formatting will be used.' });
    yargs.option('git-linkback-messages-enabled', { type: 'boolean', describe: 'Whether the Git integration linkback messages should be sent for private repo...' });
    yargs.option('git-public-linkback-messages-enabled', { type: 'boolean', describe: 'Whether the Git integration linkback messages should be sent for public repos...' });
    yargs.option('initiative-update-reminder-frequency-in-weeks', { type: 'number', describe: '[ALPHA] The n-weekly frequency at which to prompt for initiative updates.' });
    yargs.option('initiative-update-reminders-day', { type: 'string', choices: ["Friday","Monday","Saturday","Sunday","Thursday","Tuesday","Wednesday"], describe: '[ALPHA] The day at which initiative updates are sent.' });
    yargs.option('initiative-update-reminders-hour', { type: 'number', describe: '[ALPHA] The hour at which initiative updates are sent.' });
    yargs.option('ip-restrictions', { type: 'array', describe: 'IP restriction configurations controlling allowed access the workspace.' });
    yargs.option('logo-url', { type: 'string', describe: 'The logo of the organization.' });
    yargs.option('name', { type: 'string', describe: 'The name of the organization.' });
    yargs.option('oauth-app-review', { type: 'boolean', describe: 'Whether the organization has opted for having to approve all OAuth applicatio...' });
    yargs.option('personal-api-keys-enabled', { type: 'boolean', describe: '[INTERNAL] Whether the organization has enabled the member API keys.' });
    yargs.option('project-update-reminder-frequency-in-weeks', { type: 'number', describe: 'The n-weekly frequency at which to prompt for project updates.' });
    yargs.option('project-update-reminders-day', { type: 'string', choices: ["Friday","Monday","Saturday","Sunday","Thursday","Tuesday","Wednesday"], describe: 'The day at which project updates are sent.' });
    yargs.option('project-update-reminders-hour', { type: 'number', describe: 'The hour at which project updates are sent.' });
    yargs.option('reduced-personal-information', { type: 'boolean', describe: 'Whether the organization has opted for reduced customer support attachment in...' });
    yargs.option('restrict-agent-invocation-to-members', { type: 'boolean', describe: 'Whether agent invocation is restricted to full workspace members.' });
    yargs.option('restrict-label-management-to-admins', { type: 'boolean', describe: 'Whether label creation is restricted to admins.' });
    yargs.option('restrict-team-creation-to-admins', { type: 'boolean', describe: 'Whether team creation is restricted to admins.' });
    yargs.option('roadmap-enabled', { type: 'boolean', describe: 'Whether the organization is using roadmap.' });
    yargs.option('sla-enabled', { type: 'boolean', describe: 'Internal. Whether SLAs have been enabled for the organization.' });
    yargs.option('theme-settings', { type: 'string', describe: '[ALPHA] Theme settings for the organization.' });
    yargs.option('url-key', { type: 'string', describe: 'The URL key of the organization.' });
    yargs.option('working-days', { type: 'array', describe: '[Internal] The list of working days. Sunday is 0, Monday is 1, etc.' });
    yargs.option('input-json', { type: 'string', describe: 'Full input as JSON (or @file.json)' });
    return yargs;
  }, async (argv) => {
    try {
      const variables = {};
      if (argv['input-json']) {
        variables.input = parseJsonFlag(argv['input-json']);
      } else {
        const input = {};
        if (argv['ai-addon-enabled'] !== undefined) input.aiAddonEnabled = argv['ai-addon-enabled'];
        if (argv['ai-telemetry-enabled'] !== undefined) input.aiTelemetryEnabled = argv['ai-telemetry-enabled'];
        if (argv['allow-members-to-invite'] !== undefined) input.allowMembersToInvite = argv['allow-members-to-invite'];
        if (argv['allowed-auth-services'] !== undefined) input.allowedAuthServices = argv['allowed-auth-services'];
        if (argv['allowed-file-upload-content-types'] !== undefined) input.allowedFileUploadContentTypes = argv['allowed-file-upload-content-types'];
        if (argv['customers-configuration'] !== undefined) input.customersConfiguration = parseJsonFlag(argv['customers-configuration']);
        if (argv['customers-enabled'] !== undefined) input.customersEnabled = argv['customers-enabled'];
        if (argv['default-feed-summary-schedule'] !== undefined) input.defaultFeedSummarySchedule = argv['default-feed-summary-schedule'];
        if (argv['feed-enabled'] !== undefined) input.feedEnabled = argv['feed-enabled'];
        if (argv['fiscal-year-start-month'] !== undefined) input.fiscalYearStartMonth = argv['fiscal-year-start-month'];
        if (argv['git-branch-format'] !== undefined) input.gitBranchFormat = argv['git-branch-format'];
        if (argv['git-linkback-messages-enabled'] !== undefined) input.gitLinkbackMessagesEnabled = argv['git-linkback-messages-enabled'];
        if (argv['git-public-linkback-messages-enabled'] !== undefined) input.gitPublicLinkbackMessagesEnabled = argv['git-public-linkback-messages-enabled'];
        if (argv['initiative-update-reminder-frequency-in-weeks'] !== undefined) input.initiativeUpdateReminderFrequencyInWeeks = argv['initiative-update-reminder-frequency-in-weeks'];
        if (argv['initiative-update-reminders-day'] !== undefined) input.initiativeUpdateRemindersDay = argv['initiative-update-reminders-day'];
        if (argv['initiative-update-reminders-hour'] !== undefined) input.initiativeUpdateRemindersHour = argv['initiative-update-reminders-hour'];
        if (argv['ip-restrictions'] !== undefined) input.ipRestrictions = argv['ip-restrictions'];
        if (argv['logo-url'] !== undefined) input.logoUrl = argv['logo-url'];
        if (argv['name'] !== undefined) input.name = argv['name'];
        if (argv['oauth-app-review'] !== undefined) input.oauthAppReview = argv['oauth-app-review'];
        if (argv['personal-api-keys-enabled'] !== undefined) input.personalApiKeysEnabled = argv['personal-api-keys-enabled'];
        if (argv['project-update-reminder-frequency-in-weeks'] !== undefined) input.projectUpdateReminderFrequencyInWeeks = argv['project-update-reminder-frequency-in-weeks'];
        if (argv['project-update-reminders-day'] !== undefined) input.projectUpdateRemindersDay = argv['project-update-reminders-day'];
        if (argv['project-update-reminders-hour'] !== undefined) input.projectUpdateRemindersHour = argv['project-update-reminders-hour'];
        if (argv['reduced-personal-information'] !== undefined) input.reducedPersonalInformation = argv['reduced-personal-information'];
        if (argv['restrict-agent-invocation-to-members'] !== undefined) input.restrictAgentInvocationToMembers = argv['restrict-agent-invocation-to-members'];
        if (argv['restrict-label-management-to-admins'] !== undefined) input.restrictLabelManagementToAdmins = argv['restrict-label-management-to-admins'];
        if (argv['restrict-team-creation-to-admins'] !== undefined) input.restrictTeamCreationToAdmins = argv['restrict-team-creation-to-admins'];
        if (argv['roadmap-enabled'] !== undefined) input.roadmapEnabled = argv['roadmap-enabled'];
        if (argv['sla-enabled'] !== undefined) input.slaEnabled = argv['sla-enabled'];
        if (argv['theme-settings'] !== undefined) input.themeSettings = parseJsonFlag(argv['theme-settings']);
        if (argv['url-key'] !== undefined) input.urlKey = argv['url-key'];
        if (argv['working-days'] !== undefined) input.workingDays = argv['working-days'];
        variables.input = input;
      }
      const result = await request(organizationUpdate, variables);
      render(result.organizationUpdate, { json: argv.json });
    } catch (err) {
      handleError(err);
    }
  });

  return yargs.demandCommand(1, 'Specify a subcommand').strict();
}

export function handler() {}
