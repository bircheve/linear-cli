// AUTO-GENERATED — do not edit. Run `npm run generate` to regenerate.
import { request } from '../client.js';
import { handleError } from '../error.js';
import { render } from '../output.js';
import { fetchAllPages } from '../pagination.js';
import { parseJsonFlag, kebabToCamel } from '../flag-utils.js';
import { columns } from '../generated/columns.js';

import { issueLabel } from '../generated/queries.js';
import { issueLabelCreate, issueLabelDelete, issueLabelUpdate } from '../generated/mutations.js';

export const command = 'issue-label <command>';
export const describe = 'issue-label commands';

export function builder(yargs) {

  // query: issueLabel
  yargs.command('get <id>', 'One specific label.', (yargs) => {
    yargs.positional('id', { type: 'string', describe: 'id' });
    return yargs;
  }, async (argv) => {
    try {
      const variables = {};
      variables.id = argv.id;
      const result = await request(issueLabel, variables);
      render(result.issueLabel, { json: argv.json, columnConfig: columns['IssueLabel'] });
    } catch (err) {
      handleError(err);
    }
  });

  // mutation: issueLabelCreate
  yargs.command('create', 'Creates a new label.', (yargs) => {
    yargs.option('color', { type: 'string', describe: 'The color of the label.' });
    yargs.option('description', { type: 'string', describe: 'The description of the label.' });
    yargs.option('id', { type: 'string', describe: 'The identifier in UUID v4 format. If none is provided, the backend will gener...' });
    yargs.option('is-group', { type: 'boolean', describe: 'Whether the label is a group.' });
    yargs.option('name', { type: 'string', demandOption: true, describe: 'The name of the label.' });
    yargs.option('parent-id', { type: 'string', describe: 'The identifier of the parent label.' });
    yargs.option('team-id', { type: 'string', describe: 'The team associated with the label. If not given, the label will be associate...' });
    yargs.option('replace-team-labels', { type: 'boolean', describe: 'Whether to replace all team-specific labels with the same name with this newl...' });
    yargs.option('input-json', { type: 'string', describe: 'Full input as JSON (or @file.json)' });
    return yargs;
  }, async (argv) => {
    try {
      const variables = {};
      if (argv['input-json']) {
        variables.input = parseJsonFlag(argv['input-json']);
      } else {
        const input = {};
        if (argv['color'] !== undefined) input.color = argv['color'];
        if (argv['description'] !== undefined) input.description = argv['description'];
        if (argv['id'] !== undefined) input.id = argv['id'];
        if (argv['is-group'] !== undefined) input.isGroup = argv['is-group'];
        if (argv['name'] !== undefined) input.name = argv['name'];
        if (argv['parent-id'] !== undefined) input.parentId = argv['parent-id'];
        if (argv['team-id'] !== undefined) input.teamId = argv['team-id'];
        variables.input = input;
      }
      if (argv['replace-team-labels'] !== undefined) variables.replaceTeamLabels = argv['replace-team-labels'];
      const result = await request(issueLabelCreate, variables);
      render(result.issueLabelCreate, { json: argv.json });
    } catch (err) {
      handleError(err);
    }
  });

  // mutation: issueLabelDelete
  yargs.command('delete <id>', 'Deletes an issue label.', (yargs) => {
    yargs.positional('id', { type: 'string', describe: 'The identifier of the label to delete.' });
    return yargs;
  }, async (argv) => {
    try {
      const variables = {};
      variables.id = argv.id;
      const result = await request(issueLabelDelete, variables);
      render(result.issueLabelDelete, { json: argv.json });
    } catch (err) {
      handleError(err);
    }
  });

  // mutation: issueLabelUpdate
  yargs.command('update <id>', 'Updates an label.', (yargs) => {
    yargs.positional('id', { type: 'string', describe: 'The identifier of the label to update.' });
    yargs.option('color', { type: 'string', describe: 'The color of the label.' });
    yargs.option('description', { type: 'string', describe: 'The description of the label.' });
    yargs.option('is-group', { type: 'boolean', describe: 'Whether the label is a group.' });
    yargs.option('name', { type: 'string', describe: 'The name of the label.' });
    yargs.option('parent-id', { type: 'string', describe: 'The identifier of the parent label.' });
    yargs.option('replace-team-labels', { type: 'boolean', describe: 'Whether to replace all team-specific labels with the same name with this upda...' });
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
        if (argv['color'] !== undefined) input.color = argv['color'];
        if (argv['description'] !== undefined) input.description = argv['description'];
        if (argv['is-group'] !== undefined) input.isGroup = argv['is-group'];
        if (argv['name'] !== undefined) input.name = argv['name'];
        if (argv['parent-id'] !== undefined) input.parentId = argv['parent-id'];
        variables.input = input;
      }
      if (argv['replace-team-labels'] !== undefined) variables.replaceTeamLabels = argv['replace-team-labels'];
      const result = await request(issueLabelUpdate, variables);
      render(result.issueLabelUpdate, { json: argv.json });
    } catch (err) {
      handleError(err);
    }
  });

  return yargs.demandCommand(1, 'Specify a subcommand').strict();
}

export function handler() {}
