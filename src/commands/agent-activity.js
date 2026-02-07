// AUTO-GENERATED — do not edit. Run `npm run generate` to regenerate.
import { request } from '../client.js';
import { handleError } from '../error.js';
import { render } from '../output.js';
import { fetchAllPages } from '../pagination.js';
import { parseJsonFlag, kebabToCamel } from '../flag-utils.js';
import { columns } from '../generated/columns.js';

import { agentActivity } from '../generated/queries.js';
import { agentActivityCreate, agentActivityCreatePrompt } from '../generated/mutations.js';

export const command = 'agent-activity <command>';
export const describe = 'agent-activity commands';

export function builder(yargs) {

  // query: agentActivity
  yargs.command('get <id>', 'A specific agent activity.', (yargs) => {
    yargs.positional('id', { type: 'string', describe: 'The identifier of the agent activity to retrieve.' });
    return yargs;
  }, async (argv) => {
    try {
      const variables = {};
      variables.id = argv.id;
      const result = await request(agentActivity, variables);
      render(result.agentActivity, { json: argv.json, columnConfig: columns['AgentActivity'] });
    } catch (err) {
      handleError(err);
    }
  });

  // mutation: agentActivityCreate
  yargs.command('create', 'Creates an agent activity.', (yargs) => {
    yargs.option('agent-session-id', { type: 'string', demandOption: true, describe: 'The agent session this activity belongs to.' });
    yargs.option('content', { type: 'string', demandOption: true, describe: 'The content payload of the agent activity. This object is not strictly typed....' });
    yargs.option('ephemeral', { type: 'boolean', describe: 'Whether the activity is ephemeral, and should disappear after the next activi...' });
    yargs.option('id', { type: 'string', describe: 'The identifier in UUID v4 format. If none is provided, the backend will gener...' });
    yargs.option('signal', { type: 'string', choices: ["continue","stop"], describe: 'An optional modifier that provides additional instructions on how the activit...' });
    yargs.option('input-json', { type: 'string', describe: 'Full input as JSON (or @file.json)' });
    return yargs;
  }, async (argv) => {
    try {
      const variables = {};
      if (argv['input-json']) {
        variables.input = parseJsonFlag(argv['input-json']);
      } else {
        const input = {};
        if (argv['agent-session-id'] !== undefined) input.agentSessionId = argv['agent-session-id'];
        if (argv['content'] !== undefined) input.content = parseJsonFlag(argv['content']);
        if (argv['ephemeral'] !== undefined) input.ephemeral = argv['ephemeral'];
        if (argv['id'] !== undefined) input.id = argv['id'];
        if (argv['signal'] !== undefined) input.signal = argv['signal'];
        variables.input = input;
      }
      const result = await request(agentActivityCreate, variables);
      render(result.agentActivityCreate, { json: argv.json });
    } catch (err) {
      handleError(err);
    }
  });

  // mutation: agentActivityCreatePrompt
  yargs.command('create-prompt', '[Internal] Creates a prompt agent activity from Linear user input.', (yargs) => {
    yargs.option('agent-session-id', { type: 'string', demandOption: true, describe: 'The agent session this activity belongs to.' });
    yargs.option('content', { type: 'string', demandOption: true, describe: 'The content payload of the prompt agent activity.' });
    yargs.option('id', { type: 'string', describe: 'The identifier in UUID v4 format. If none is provided, the backend will gener...' });
    yargs.option('signal', { type: 'string', choices: ["continue","stop"], describe: 'An optional modifier that provides additional instructions on how the activit...' });
    yargs.option('source-comment-id', { type: 'string', describe: 'The comment that contains the content of this activity.' });
    yargs.option('input-json', { type: 'string', describe: 'Full input as JSON (or @file.json)' });
    return yargs;
  }, async (argv) => {
    try {
      const variables = {};
      if (argv['input-json']) {
        variables.input = parseJsonFlag(argv['input-json']);
      } else {
        const input = {};
        if (argv['agent-session-id'] !== undefined) input.agentSessionId = argv['agent-session-id'];
        if (argv['content'] !== undefined) input.content = parseJsonFlag(argv['content']);
        if (argv['id'] !== undefined) input.id = argv['id'];
        if (argv['signal'] !== undefined) input.signal = argv['signal'];
        if (argv['source-comment-id'] !== undefined) input.sourceCommentId = argv['source-comment-id'];
        variables.input = input;
      }
      const result = await request(agentActivityCreatePrompt, variables);
      render(result.agentActivityCreatePrompt, { json: argv.json });
    } catch (err) {
      handleError(err);
    }
  });

  return yargs.demandCommand(1, 'Specify a subcommand').strict();
}

export function handler() {}
