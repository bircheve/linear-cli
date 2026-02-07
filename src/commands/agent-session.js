// AUTO-GENERATED — do not edit. Run `npm run generate` to regenerate.
import { request } from '../client.js';
import { handleError } from '../error.js';
import { render } from '../output.js';
import { fetchAllPages } from '../pagination.js';
import { parseJsonFlag, kebabToCamel } from '../flag-utils.js';
import { columns } from '../generated/columns.js';

import { agentSession, agentSessions } from '../generated/queries.js';
import { agentSessionCreateOnComment, agentSessionCreateOnIssue, agentSessionUpdateExternalUrl } from '../generated/mutations.js';

export const command = 'agent-session <command>';
export const describe = 'agent-session commands';

export function builder(yargs) {

  // query: agentSession
  yargs.command('get <id>', 'A specific agent session.', (yargs) => {
    yargs.positional('id', { type: 'string', describe: 'The identifier of the agent session to retrieve.' });
    return yargs;
  }, async (argv) => {
    try {
      const variables = {};
      variables.id = argv.id;
      const result = await request(agentSession, variables);
      render(result.agentSession, { json: argv.json, columnConfig: columns['AgentSession'] });
    } catch (err) {
      handleError(err);
    }
  });

  // query: agentSessions
  yargs.command('list', 'All agent sessions.', (yargs) => {
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
        data = await fetchAllPages(request, agentSessions, variables, 'agentSessions');
      } else {
        const result = await request(agentSessions, variables);
        data = result.agentSessions?.nodes || [];
      }
      render(data, { json: argv.json, isList: true, columnConfig: columns['AgentSession'] });
    } catch (err) {
      handleError(err);
    }
  });

  // mutation: agentSessionCreateOnComment
  yargs.command('create-on-comment', 'Creates a new agent session on a rootcomment.', (yargs) => {
    yargs.option('comment-id', { type: 'string', demandOption: true, describe: 'The root comment that this session will be associated with.' });
    yargs.option('external-link', { type: 'string', describe: 'The URL of an external agent-hosted page associated with this session.' });
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
        if (argv['external-link'] !== undefined) input.externalLink = argv['external-link'];
        variables.input = input;
      }
      const result = await request(agentSessionCreateOnComment, variables);
      render(result.agentSessionCreateOnComment, { json: argv.json });
    } catch (err) {
      handleError(err);
    }
  });

  // mutation: agentSessionCreateOnIssue
  yargs.command('create-on-issue', 'Creates a new agent session on an issue.', (yargs) => {
    yargs.option('external-link', { type: 'string', describe: 'The URL of an external agent-hosted page associated with this session.' });
    yargs.option('issue-id', { type: 'string', demandOption: true, describe: 'The issue that this session will be associated with.' });
    yargs.option('input-json', { type: 'string', describe: 'Full input as JSON (or @file.json)' });
    return yargs;
  }, async (argv) => {
    try {
      const variables = {};
      if (argv['input-json']) {
        variables.input = parseJsonFlag(argv['input-json']);
      } else {
        const input = {};
        if (argv['external-link'] !== undefined) input.externalLink = argv['external-link'];
        if (argv['issue-id'] !== undefined) input.issueId = argv['issue-id'];
        variables.input = input;
      }
      const result = await request(agentSessionCreateOnIssue, variables);
      render(result.agentSessionCreateOnIssue, { json: argv.json });
    } catch (err) {
      handleError(err);
    }
  });

  // mutation: agentSessionUpdateExternalUrl
  yargs.command('update-external-url <id>', 'Updates the externalUrl of an agent session, which is an agent-hosted page as...', (yargs) => {
    yargs.positional('id', { type: 'string', describe: 'The identifier of the agent session to update.' });
    yargs.option('external-link', { type: 'string', describe: 'The URL of an external agent-hosted page associated with this session.' });
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
        if (argv['external-link'] !== undefined) input.externalLink = argv['external-link'];
        variables.input = input;
      }
      const result = await request(agentSessionUpdateExternalUrl, variables);
      render(result.agentSessionUpdateExternalUrl, { json: argv.json });
    } catch (err) {
      handleError(err);
    }
  });

  return yargs.demandCommand(1, 'Specify a subcommand').strict();
}

export function handler() {}
