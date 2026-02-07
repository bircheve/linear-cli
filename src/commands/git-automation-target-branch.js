// AUTO-GENERATED — do not edit. Run `npm run generate` to regenerate.
import { request } from '../client.js';
import { handleError } from '../error.js';
import { render } from '../output.js';
import { fetchAllPages } from '../pagination.js';
import { parseJsonFlag, kebabToCamel } from '../flag-utils.js';

import { gitAutomationTargetBranchCreate, gitAutomationTargetBranchDelete, gitAutomationTargetBranchUpdate } from '../generated/mutations.js';

export const command = 'git-automation-target-branch <command>';
export const describe = 'git-automation-target-branch commands';

export function builder(yargs) {

  // mutation: gitAutomationTargetBranchCreate
  yargs.command('create', 'Creates a Git target branch automation.', (yargs) => {
    yargs.option('branch-pattern', { type: 'string', demandOption: true, describe: 'The target branch pattern.' });
    yargs.option('id', { type: 'string', describe: 'The identifier in UUID v4 format. If none is provided, the backend will gener...' });
    yargs.option('is-regex', { type: 'boolean', describe: 'Whether the branch pattern is a regular expression.' });
    yargs.option('team-id', { type: 'string', demandOption: true, describe: 'The team associated with the Git target branch automation.' });
    yargs.option('input-json', { type: 'string', describe: 'Full input as JSON (or @file.json)' });
    return yargs;
  }, async (argv) => {
    try {
      const variables = {};
      if (argv['input-json']) {
        variables.input = parseJsonFlag(argv['input-json']);
      } else {
        const input = {};
        if (argv['branch-pattern'] !== undefined) input.branchPattern = argv['branch-pattern'];
        if (argv['id'] !== undefined) input.id = argv['id'];
        if (argv['is-regex'] !== undefined) input.isRegex = argv['is-regex'];
        if (argv['team-id'] !== undefined) input.teamId = argv['team-id'];
        variables.input = input;
      }
      const result = await request(gitAutomationTargetBranchCreate, variables);
      render(result.gitAutomationTargetBranchCreate, { json: argv.json });
    } catch (err) {
      handleError(err);
    }
  });

  // mutation: gitAutomationTargetBranchDelete
  yargs.command('delete <id>', 'Archives a Git target branch automation.', (yargs) => {
    yargs.positional('id', { type: 'string', describe: 'The identifier of the Git target branch automation to archive.' });
    return yargs;
  }, async (argv) => {
    try {
      const variables = {};
      variables.id = argv.id;
      const result = await request(gitAutomationTargetBranchDelete, variables);
      render(result.gitAutomationTargetBranchDelete, { json: argv.json });
    } catch (err) {
      handleError(err);
    }
  });

  // mutation: gitAutomationTargetBranchUpdate
  yargs.command('update <id>', 'Updates an existing Git target branch automation.', (yargs) => {
    yargs.positional('id', { type: 'string', describe: 'The identifier of the Git target branch automation to update.' });
    yargs.option('branch-pattern', { type: 'string', describe: 'The target branch pattern.' });
    yargs.option('is-regex', { type: 'boolean', describe: 'Whether the branch pattern is a regular expression.' });
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
        if (argv['branch-pattern'] !== undefined) input.branchPattern = argv['branch-pattern'];
        if (argv['is-regex'] !== undefined) input.isRegex = argv['is-regex'];
        variables.input = input;
      }
      const result = await request(gitAutomationTargetBranchUpdate, variables);
      render(result.gitAutomationTargetBranchUpdate, { json: argv.json });
    } catch (err) {
      handleError(err);
    }
  });

  return yargs.demandCommand(1, 'Specify a subcommand').strict();
}

export function handler() {}
