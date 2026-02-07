// AUTO-GENERATED — do not edit. Run `npm run generate` to regenerate.
import { request } from '../client.js';
import { handleError } from '../error.js';
import { render } from '../output.js';
import { fetchAllPages } from '../pagination.js';
import { parseJsonFlag, kebabToCamel } from '../flag-utils.js';

import { userFlagUpdate } from '../generated/mutations.js';

export const command = 'user-flag <command>';
export const describe = 'user-flag commands';

export function builder(yargs) {

  // mutation: userFlagUpdate
  yargs.command('update', 'Updates a user\'s settings flag.', (yargs) => {
    yargs.option('flag', { type: 'string', demandOption: true, choices: ["all","analyticsWelcomeDismissed","canPlaySnake","canPlayTetris","commandMenuClearShortcutTip","completedOnboarding","cycleWelcomeDismissed","desktopDownloadToastDismissed","desktopInstalled","desktopTabsOnboardingDismissed","dueDateShortcutMigration","editorSlashCommandUsed","emptyActiveIssuesDismissed","emptyBacklogDismissed","emptyCustomViewsDismissed","emptyMyIssuesDismissed","emptyParagraphSlashCommandTip","figmaPluginBannerDismissed","figmaPromptDismissed","helpIslandFeatureInsightsDismissed","importBannerDismissed","initiativesBannerDismissed","insightsHelpDismissed","insightsWelcomeDismissed","issueLabelSuggestionUsed","issueMovePromptCompleted","joinTeamIntroductionDismissed","listSelectionTip","migrateThemePreference","milestoneOnboardingIsSeenAndDismissed","projectBacklogWelcomeDismissed","projectBoardOnboardingIsSeenAndDismissed","projectUpdatesWelcomeDismissed","projectWelcomeDismissed","pulseWelcomeDismissed","rewindBannerDismissed","slackBotWelcomeMessageShown","slackCommentReactionTipShown","teamsPageIntroductionDismissed","threadedCommentsNudgeIsSeen","triageWelcomeDismissed","tryCyclesDismissed","tryGithubDismissed","tryInvitePeopleDismissed","tryRoadmapsDismissed","tryTriageDismissed","updatedSlackThreadSyncIntegration"], describe: 'Settings flag to increment.' });
    yargs.option('operation', { type: 'string', demandOption: true, choices: ["clear","decr","incr","lock"], describe: 'Flag operation to perform.' });
    return yargs;
  }, async (argv) => {
    try {
      const variables = {};
      if (argv['flag'] !== undefined) variables.flag = argv['flag'];
      if (argv['operation'] !== undefined) variables.operation = argv['operation'];
      const result = await request(userFlagUpdate, variables);
      render(result.userFlagUpdate, { json: argv.json });
    } catch (err) {
      handleError(err);
    }
  });

  return yargs.demandCommand(1, 'Specify a subcommand').strict();
}

export function handler() {}
