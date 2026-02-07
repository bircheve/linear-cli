// AUTO-GENERATED — do not edit. Run `npm run generate` to regenerate.
import { request } from '../client.js';
import { handleError } from '../error.js';
import { render } from '../output.js';
import { fetchAllPages } from '../pagination.js';
import { parseJsonFlag, kebabToCamel } from '../flag-utils.js';
import { columns } from '../generated/columns.js';

import { gitAutomationStateCreate, gitAutomationStateDelete, gitAutomationStateUpdate } from '../generated/mutations.js';

export const command = 'git-automation-state <command>';
export const describe = 'git-automation-state commands';

export function builder(yargs) {

  // mutation: gitAutomationStateCreate
  yargs.command('create', 'Creates a new automation state.', (yargs) => {
    yargs.option('event', { type: 'string', demandOption: true, choices: ["draft","merge","mergeable","review","start"], describe: 'The event that triggers the automation.' });
    yargs.option('id', { type: 'string', describe: 'The identifier in UUID v4 format. If none is provided, the backend will gener...' });
    yargs.option('state-id', { type: 'string', describe: 'The associated workflow state. If null, will override default behaviour and t...' });
    yargs.option('target-branch-id', { type: 'string', describe: 'The associated target branch. If null, all branches are targeted.' });
    yargs.option('team-id', { type: 'string', demandOption: true, describe: 'The team associated with the automation state.' });
    yargs.option('input-json', { type: 'string', describe: 'Full input as JSON (or @file.json)' });
    return yargs;
  }, async (argv) => {
    try {
      const variables = {};
      if (argv['input-json']) {
        variables.input = parseJsonFlag(argv['input-json']);
      } else {
        const input = {};
        if (argv['event'] !== undefined) input.event = argv['event'];
        if (argv['id'] !== undefined) input.id = argv['id'];
        if (argv['state-id'] !== undefined) input.stateId = argv['state-id'];
        if (argv['target-branch-id'] !== undefined) input.targetBranchId = argv['target-branch-id'];
        if (argv['team-id'] !== undefined) input.teamId = argv['team-id'];
        variables.input = input;
      }
      const result = await request(gitAutomationStateCreate, variables);
      render(result.gitAutomationStateCreate, { json: argv.json });
    } catch (err) {
      handleError(err);
    }
  });

  // mutation: gitAutomationStateDelete
  yargs.command('delete <id>', 'Archives an automation state.', (yargs) => {
    yargs.positional('id', { type: 'string', describe: 'The identifier of the automation state to archive.' });
    return yargs;
  }, async (argv) => {
    try {
      const variables = {};
      variables.id = argv.id;
      const result = await request(gitAutomationStateDelete, variables);
      render(result.gitAutomationStateDelete, { json: argv.json });
    } catch (err) {
      handleError(err);
    }
  });

  // mutation: gitAutomationStateUpdate
  yargs.command('update <id>', 'Updates an existing state.', (yargs) => {
    yargs.positional('id', { type: 'string', describe: 'The identifier of the state to update.' });
    yargs.option('event', { type: 'string', choices: ["draft","merge","mergeable","review","start"], describe: 'The event that triggers the automation.' });
    yargs.option('state-id', { type: 'string', describe: 'The associated workflow state.' });
    yargs.option('target-branch-id', { type: 'string', describe: 'The associated target branch. If null, all branches are targeted.' });
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
        if (argv['event'] !== undefined) input.event = argv['event'];
        if (argv['state-id'] !== undefined) input.stateId = argv['state-id'];
        if (argv['target-branch-id'] !== undefined) input.targetBranchId = argv['target-branch-id'];
        variables.input = input;
      }
      const result = await request(gitAutomationStateUpdate, variables);
      render(result.gitAutomationStateUpdate, { json: argv.json });
    } catch (err) {
      handleError(err);
    }
  });

  return yargs.demandCommand(1, 'Specify a subcommand').strict();
}

export function handler() {}
