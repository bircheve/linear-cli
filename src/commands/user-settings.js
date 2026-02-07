// AUTO-GENERATED — do not edit. Run `npm run generate` to regenerate.
import { request } from '../client.js';
import { handleError } from '../error.js';
import { render } from '../output.js';
import { fetchAllPages } from '../pagination.js';
import { parseJsonFlag, kebabToCamel } from '../flag-utils.js';
import { columns } from '../generated/columns.js';

import { userSettings } from '../generated/queries.js';
import { userSettingsFlagsReset, userSettingsUpdate } from '../generated/mutations.js';

export const command = 'user-settings <command>';
export const describe = 'user-settings commands';

export function builder(yargs) {

  // query: userSettings
  yargs.command('list', 'The user\'s settings.', (yargs) => {
    return yargs;
  }, async (argv) => {
    try {
      const variables = {};
      const result = await request(userSettings, variables);
      render(result.userSettings, { json: argv.json, columnConfig: columns['UserSettings'] });
    } catch (err) {
      handleError(err);
    }
  });

  // mutation: userSettingsFlagsReset
  yargs.command('flags-reset', 'Resets user\'s setting flags.', (yargs) => {
    yargs.option('flags', { type: 'array', describe: 'The flags to reset. If not provided all flags will be reset.' });
    return yargs;
  }, async (argv) => {
    try {
      const variables = {};
      if (argv['flags'] !== undefined) variables.flags = argv['flags'];
      const result = await request(userSettingsFlagsReset, variables);
      render(result.userSettingsFlagsReset, { json: argv.json });
    } catch (err) {
      handleError(err);
    }
  });

  // mutation: userSettingsUpdate
  yargs.command('update <id>', 'Updates the user\'s settings.', (yargs) => {
    yargs.positional('id', { type: 'string', describe: 'The identifier of the userSettings to update.' });
    yargs.option('feed-summary-schedule', { type: 'string', choices: ["daily","never","weekly"], describe: '[Internal] How often to generate a feed summary.' });
    yargs.option('notification-category-preferences', { type: 'string', describe: 'The user\'s notification category preferences.' });
    yargs.option('notification-channel-preferences', { type: 'string', describe: 'The user\'s notification channel preferences.' });
    yargs.option('notification-delivery-preferences', { type: 'string', describe: 'The user\'s notification delivery preferences.' });
    yargs.option('settings', { type: 'string', describe: 'The user\'s settings.' });
    yargs.option('subscribed-to-changelog', { type: 'boolean', describe: 'Whether this user is subscribed to changelog email or not.' });
    yargs.option('subscribed-to-dpa', { type: 'boolean', describe: 'Whether this user is subscribed to DPA emails or not.' });
    yargs.option('subscribed-to-general-marketing-communications', { type: 'boolean', describe: 'Whether this user is subscribed to general marketing communications or not.' });
    yargs.option('subscribed-to-invite-accepted', { type: 'boolean', describe: 'Whether this user is subscribed to invite accepted emails or not.' });
    yargs.option('subscribed-to-privacy-legal-updates', { type: 'boolean', describe: 'Whether this user is subscribed to privacy and legal update emails or not.' });
    yargs.option('usage-warning-history', { type: 'string', describe: '[Internal] The user\'s usage warning history.' });
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
        if (argv['feed-summary-schedule'] !== undefined) input.feedSummarySchedule = argv['feed-summary-schedule'];
        if (argv['notification-category-preferences'] !== undefined) input.notificationCategoryPreferences = parseJsonFlag(argv['notification-category-preferences']);
        if (argv['notification-channel-preferences'] !== undefined) input.notificationChannelPreferences = parseJsonFlag(argv['notification-channel-preferences']);
        if (argv['notification-delivery-preferences'] !== undefined) input.notificationDeliveryPreferences = parseJsonFlag(argv['notification-delivery-preferences']);
        if (argv['settings'] !== undefined) input.settings = parseJsonFlag(argv['settings']);
        if (argv['subscribed-to-changelog'] !== undefined) input.subscribedToChangelog = argv['subscribed-to-changelog'];
        if (argv['subscribed-to-dpa'] !== undefined) input.subscribedToDPA = argv['subscribed-to-dpa'];
        if (argv['subscribed-to-general-marketing-communications'] !== undefined) input.subscribedToGeneralMarketingCommunications = argv['subscribed-to-general-marketing-communications'];
        if (argv['subscribed-to-invite-accepted'] !== undefined) input.subscribedToInviteAccepted = argv['subscribed-to-invite-accepted'];
        if (argv['subscribed-to-privacy-legal-updates'] !== undefined) input.subscribedToPrivacyLegalUpdates = argv['subscribed-to-privacy-legal-updates'];
        if (argv['usage-warning-history'] !== undefined) input.usageWarningHistory = parseJsonFlag(argv['usage-warning-history']);
        variables.input = input;
      }
      const result = await request(userSettingsUpdate, variables);
      render(result.userSettingsUpdate, { json: argv.json });
    } catch (err) {
      handleError(err);
    }
  });

  return yargs.demandCommand(1, 'Specify a subcommand').strict();
}

export function handler() {}
