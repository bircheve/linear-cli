// AUTO-GENERATED — do not edit. Run `npm run generate` to regenerate.
import { request } from '../client.js';
import { handleError } from '../error.js';
import { render } from '../output.js';
import { fetchAllPages } from '../pagination.js';
import { parseJsonFlag, kebabToCamel } from '../flag-utils.js';

import { reactionCreate, reactionDelete } from '../generated/mutations.js';

export const command = 'reaction <command>';
export const describe = 'reaction commands';

export function builder(yargs) {

  // mutation: reactionCreate
  yargs.command('create', 'Creates a new reaction.', (yargs) => {
    yargs.option('comment-id', { type: 'string', describe: 'The comment to associate the reaction with.' });
    yargs.option('emoji', { type: 'string', demandOption: true, describe: 'The emoji the user reacted with.' });
    yargs.option('id', { type: 'string', describe: 'The identifier in UUID v4 format. If none is provided, the backend will gener...' });
    yargs.option('initiative-update-id', { type: 'string', describe: 'The update to associate the reaction with.' });
    yargs.option('issue-id', { type: 'string', describe: 'The issue to associate the reaction with.' });
    yargs.option('post-id', { type: 'string', describe: '[Internal] The post to associate the reaction with.' });
    yargs.option('project-update-id', { type: 'string', describe: 'The project update to associate the reaction with.' });
    yargs.option('pull-request-comment-id', { type: 'string', describe: '[Internal] The pull request comment to associate the reaction with.' });
    yargs.option('pull-request-id', { type: 'string', describe: '[Internal] The pull request to associate the reaction with.' });
    yargs.option('input-json', { type: 'string', describe: 'Full input as JSON (or @file.json)' });
    return yargs;
  }, async (argv) => {
    try {
      const variables = {};
      if (argv['input-json']) {
        variables.input = parseJsonFlag(argv['input-json']);
      } else {
        const input = {};
        if (argv['comment-id'] !== undefined) input.commentId = argv['comment-id'];
        if (argv['emoji'] !== undefined) input.emoji = argv['emoji'];
        if (argv['id'] !== undefined) input.id = argv['id'];
        if (argv['initiative-update-id'] !== undefined) input.initiativeUpdateId = argv['initiative-update-id'];
        if (argv['issue-id'] !== undefined) input.issueId = argv['issue-id'];
        if (argv['post-id'] !== undefined) input.postId = argv['post-id'];
        if (argv['project-update-id'] !== undefined) input.projectUpdateId = argv['project-update-id'];
        if (argv['pull-request-comment-id'] !== undefined) input.pullRequestCommentId = argv['pull-request-comment-id'];
        if (argv['pull-request-id'] !== undefined) input.pullRequestId = argv['pull-request-id'];
        variables.input = input;
      }
      const result = await request(reactionCreate, variables);
      render(result.reactionCreate, { json: argv.json });
    } catch (err) {
      handleError(err);
    }
  });

  // mutation: reactionDelete
  yargs.command('delete <id>', 'Deletes a reaction.', (yargs) => {
    yargs.positional('id', { type: 'string', describe: 'The identifier of the reaction to delete.' });
    return yargs;
  }, async (argv) => {
    try {
      const variables = {};
      variables.id = argv.id;
      const result = await request(reactionDelete, variables);
      render(result.reactionDelete, { json: argv.json });
    } catch (err) {
      handleError(err);
    }
  });

  return yargs.demandCommand(1, 'Specify a subcommand').strict();
}

export function handler() {}
