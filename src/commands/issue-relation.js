// AUTO-GENERATED — do not edit. Run `npm run generate` to regenerate.
import { request } from '../client.js';
import { handleError } from '../error.js';
import { render } from '../output.js';
import { fetchAllPages } from '../pagination.js';
import { parseJsonFlag, kebabToCamel } from '../flag-utils.js';
import { columns } from '../generated/columns.js';

import { issueRelation } from '../generated/queries.js';
import { issueRelationCreate, issueRelationDelete, issueRelationUpdate } from '../generated/mutations.js';

export const command = 'issue-relation <command>';
export const describe = 'issue-relation commands';

export function builder(yargs) {

  // query: issueRelation
  yargs.command('get <id>', 'One specific issue relation.', (yargs) => {
    yargs.positional('id', { type: 'string', describe: 'id' });
    return yargs;
  }, async (argv) => {
    try {
      const variables = {};
      variables.id = argv.id;
      const result = await request(issueRelation, variables);
      render(result.issueRelation, { json: argv.json, columnConfig: columns['IssueRelation'] });
    } catch (err) {
      handleError(err);
    }
  });

  // mutation: issueRelationCreate
  yargs.command('create', 'Creates a new issue relation.', (yargs) => {
    yargs.option('id', { type: 'string', describe: 'The identifier in UUID v4 format. If none is provided, the backend will gener...' });
    yargs.option('issue-id', { type: 'string', demandOption: true, describe: 'The identifier of the issue that is related to another issue.' });
    yargs.option('related-issue-id', { type: 'string', demandOption: true, describe: 'The identifier of the related issue.' });
    yargs.option('type', { type: 'string', demandOption: true, choices: ["blocks","duplicate","related","similar"], describe: 'The type of relation of the issue to the related issue.' });
    yargs.option('override-created-at', { type: 'string', describe: 'Used by client undo operations. Should not be set directly.' });
    yargs.option('input-json', { type: 'string', describe: 'Full input as JSON (or @file.json)' });
    return yargs;
  }, async (argv) => {
    try {
      const variables = {};
      if (argv['input-json']) {
        variables.input = parseJsonFlag(argv['input-json']);
      } else {
        const input = {};
        if (argv['id'] !== undefined) input.id = argv['id'];
        if (argv['issue-id'] !== undefined) input.issueId = argv['issue-id'];
        if (argv['related-issue-id'] !== undefined) input.relatedIssueId = argv['related-issue-id'];
        if (argv['type'] !== undefined) input.type = argv['type'];
        variables.input = input;
      }
      if (argv['override-created-at'] !== undefined) variables.overrideCreatedAt = argv['override-created-at'];
      const result = await request(issueRelationCreate, variables);
      render(result.issueRelationCreate, { json: argv.json });
    } catch (err) {
      handleError(err);
    }
  });

  // mutation: issueRelationDelete
  yargs.command('delete <id>', 'Deletes an issue relation.', (yargs) => {
    yargs.positional('id', { type: 'string', describe: 'The identifier of the issue relation to delete.' });
    return yargs;
  }, async (argv) => {
    try {
      const variables = {};
      variables.id = argv.id;
      const result = await request(issueRelationDelete, variables);
      render(result.issueRelationDelete, { json: argv.json });
    } catch (err) {
      handleError(err);
    }
  });

  // mutation: issueRelationUpdate
  yargs.command('update <id>', 'Updates an issue relation.', (yargs) => {
    yargs.positional('id', { type: 'string', describe: 'The identifier of the issue relation to update.' });
    yargs.option('issue-id', { type: 'string', describe: 'The identifier of the issue that is related to another issue.' });
    yargs.option('related-issue-id', { type: 'string', describe: 'The identifier of the related issue.' });
    yargs.option('type', { type: 'string', describe: 'The type of relation of the issue to the related issue.' });
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
        if (argv['issue-id'] !== undefined) input.issueId = argv['issue-id'];
        if (argv['related-issue-id'] !== undefined) input.relatedIssueId = argv['related-issue-id'];
        if (argv['type'] !== undefined) input.type = argv['type'];
        variables.input = input;
      }
      const result = await request(issueRelationUpdate, variables);
      render(result.issueRelationUpdate, { json: argv.json });
    } catch (err) {
      handleError(err);
    }
  });

  return yargs.demandCommand(1, 'Specify a subcommand').strict();
}

export function handler() {}
