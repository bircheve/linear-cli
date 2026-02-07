// AUTO-GENERATED — do not edit. Run `npm run generate` to regenerate.
import { request } from '../client.js';
import { handleError } from '../error.js';
import { render } from '../output.js';
import { fetchAllPages } from '../pagination.js';
import { parseJsonFlag, kebabToCamel } from '../flag-utils.js';
import { columns } from '../generated/columns.js';

import { comment, comments } from '../generated/queries.js';
import { commentCreate, commentDelete, commentResolve, commentUnresolve, commentUpdate } from '../generated/mutations.js';

export const command = 'comment <command>';
export const describe = 'comment commands';

export function builder(yargs) {

  // query: comment
  yargs.command('get', 'A specific comment.', (yargs) => {
    yargs.option('hash', { type: 'string', describe: 'The hash of the comment to retrieve.' });
    yargs.option('id', { type: 'string', describe: 'The identifier of the comment to retrieve.' });
    yargs.option('issue-id', { type: 'string', describe: '[Deprecated] The issue for which to find the comment.' });
    return yargs;
  }, async (argv) => {
    try {
      const variables = {};
      if (argv['hash'] !== undefined) variables.hash = argv['hash'];
      if (argv['id'] !== undefined) variables.id = argv['id'];
      if (argv['issue-id'] !== undefined) variables.issueId = argv['issue-id'];
      const result = await request(comment, variables);
      render(result.comment, { json: argv.json, columnConfig: columns['Comment'] });
    } catch (err) {
      handleError(err);
    }
  });

  // query: comments
  yargs.command('list', 'All comments.', (yargs) => {
    yargs.option('after', { type: 'string', describe: 'A cursor to be used with first for forward pagination' });
    yargs.option('before', { type: 'string', describe: 'A cursor to be used with last for backward pagination.' });
    yargs.option('filter', { type: 'string', describe: 'Filter returned comments.' });
    yargs.option('first', { type: 'number', describe: 'The number of items to forward paginate (used with after). Defaults to 50.' });
    yargs.option('include-archived', { type: 'boolean', describe: 'Should archived resources be included (default: false)' });
    yargs.option('last', { type: 'number', describe: 'The number of items to backward paginate (used with before). Defaults to 50.' });
    yargs.option('order-by', { type: 'string', choices: ["createdAt","updatedAt"], describe: 'By which field should the pagination order by. Available options are createdA...' });
    yargs.option('first', { type: 'number', default: 50, describe: 'Number of results to fetch' });
    yargs.option('after', { type: 'string', describe: 'Cursor for forward pagination' });
    yargs.option('last', { type: 'number', describe: 'Number of results to fetch from the end' });
    yargs.option('before', { type: 'string', describe: 'Cursor for backward pagination' });
    yargs.option('all', { type: 'boolean', describe: 'Fetch all pages', default: false });
    yargs.option('filter-json', { type: 'string', describe: 'Filter as JSON (or @file.json)' });
    return yargs;
  }, async (argv) => {
    try {
      const variables = {};
      if (argv['after'] !== undefined) variables.after = argv['after'];
      if (argv['before'] !== undefined) variables.before = argv['before'];
      if (argv['filter'] !== undefined) variables.filter = argv['filter'];
      if (argv['first'] !== undefined) variables.first = argv['first'];
      if (argv['include-archived'] !== undefined) variables.includeArchived = argv['include-archived'];
      if (argv['last'] !== undefined) variables.last = argv['last'];
      if (argv['order-by'] !== undefined) variables.orderBy = argv['order-by'];
      if (argv['filter-json']) variables.filter = parseJsonFlag(argv['filter-json']);
      if (argv.first !== undefined) variables.first = argv.first;
      if (argv.after) variables.after = argv.after;
      if (argv.last !== undefined) variables.last = argv.last;
      if (argv.before) variables.before = argv.before;

      let data;
      if (argv.all) {
        data = await fetchAllPages(request, comments, variables, 'comments');
      } else {
        const result = await request(comments, variables);
        data = result.comments?.nodes || [];
      }
      render(data, { json: argv.json, isList: true, columnConfig: columns['Comment'] });
    } catch (err) {
      handleError(err);
    }
  });

  // mutation: commentCreate
  yargs.command('create', 'Creates a new comment.', (yargs) => {
    yargs.option('body', { type: 'string', describe: 'The comment content in markdown format.' });
    yargs.option('body-data', { type: 'string', describe: '[Internal] The comment content as a Prosemirror document.' });
    yargs.option('create-as-user', { type: 'string', describe: 'Create comment as a user with the provided name. This option is only availabl...' });
    yargs.option('create-on-synced-slack-thread', { type: 'boolean', describe: 'Flag to indicate this comment should be created on the issue\'s synced Slack c...' });
    yargs.option('created-at', { type: 'string', describe: 'The date when the comment was created (e.g. if importing from another system)...' });
    yargs.option('display-icon-url', { type: 'string', describe: 'Provide an external user avatar URL. Can only be used in conjunction with the...' });
    yargs.option('do-not-subscribe-to-issue', { type: 'boolean', describe: 'Flag to prevent auto subscription to the issue the comment is created on.' });
    yargs.option('document-content-id', { type: 'string', describe: 'The document content to associate the comment with.' });
    yargs.option('id', { type: 'string', describe: 'The identifier in UUID v4 format. If none is provided, the backend will gener...' });
    yargs.option('initiative-update-id', { type: 'string', describe: 'The initiative update to associate the comment with.' });
    yargs.option('issue-id', { type: 'string', describe: 'The issue to associate the comment with.' });
    yargs.option('parent-id', { type: 'string', describe: 'The parent comment under which to nest a current comment.' });
    yargs.option('post-id', { type: 'string', describe: 'The post to associate the comment with.' });
    yargs.option('project-update-id', { type: 'string', describe: 'The project update to associate the comment with.' });
    yargs.option('quoted-text', { type: 'string', describe: 'The text that this comment references. Only defined for inline comments.' });
    yargs.option('subscriber-ids', { type: 'array', describe: '[INTERNAL] The identifiers of the users subscribing to this comment thread.' });
    yargs.option('input-json', { type: 'string', describe: 'Full input as JSON (or @file.json)' });
    return yargs;
  }, async (argv) => {
    try {
      const variables = {};
      if (argv['input-json']) {
        variables.input = parseJsonFlag(argv['input-json']);
      } else {
        const input = {};
        if (argv['body'] !== undefined) input.body = argv['body'];
        if (argv['body-data'] !== undefined) input.bodyData = parseJsonFlag(argv['body-data']);
        if (argv['create-as-user'] !== undefined) input.createAsUser = argv['create-as-user'];
        if (argv['create-on-synced-slack-thread'] !== undefined) input.createOnSyncedSlackThread = argv['create-on-synced-slack-thread'];
        if (argv['created-at'] !== undefined) input.createdAt = argv['created-at'];
        if (argv['display-icon-url'] !== undefined) input.displayIconUrl = argv['display-icon-url'];
        if (argv['do-not-subscribe-to-issue'] !== undefined) input.doNotSubscribeToIssue = argv['do-not-subscribe-to-issue'];
        if (argv['document-content-id'] !== undefined) input.documentContentId = argv['document-content-id'];
        if (argv['id'] !== undefined) input.id = argv['id'];
        if (argv['initiative-update-id'] !== undefined) input.initiativeUpdateId = argv['initiative-update-id'];
        if (argv['issue-id'] !== undefined) input.issueId = argv['issue-id'];
        if (argv['parent-id'] !== undefined) input.parentId = argv['parent-id'];
        if (argv['post-id'] !== undefined) input.postId = argv['post-id'];
        if (argv['project-update-id'] !== undefined) input.projectUpdateId = argv['project-update-id'];
        if (argv['quoted-text'] !== undefined) input.quotedText = argv['quoted-text'];
        if (argv['subscriber-ids'] !== undefined) input.subscriberIds = argv['subscriber-ids'];
        variables.input = input;
      }
      const result = await request(commentCreate, variables);
      render(result.commentCreate, { json: argv.json });
    } catch (err) {
      handleError(err);
    }
  });

  // mutation: commentDelete
  yargs.command('delete <id>', 'Deletes a comment.', (yargs) => {
    yargs.positional('id', { type: 'string', describe: 'The identifier of the comment to delete.' });
    return yargs;
  }, async (argv) => {
    try {
      const variables = {};
      variables.id = argv.id;
      const result = await request(commentDelete, variables);
      render(result.commentDelete, { json: argv.json });
    } catch (err) {
      handleError(err);
    }
  });

  // mutation: commentResolve
  yargs.command('resolve <id>', 'Resolves a comment.', (yargs) => {
    yargs.positional('id', { type: 'string', describe: 'The identifier of the comment to update.' });
    yargs.option('resolving-comment-id', { type: 'string' });
    return yargs;
  }, async (argv) => {
    try {
      const variables = {};
      variables.id = argv.id;
      if (argv['resolving-comment-id'] !== undefined) variables.resolvingCommentId = argv['resolving-comment-id'];
      const result = await request(commentResolve, variables);
      render(result.commentResolve, { json: argv.json });
    } catch (err) {
      handleError(err);
    }
  });

  // mutation: commentUnresolve
  yargs.command('unresolve <id>', 'Unresolves a comment.', (yargs) => {
    yargs.positional('id', { type: 'string', describe: 'The identifier of the comment to update.' });
    return yargs;
  }, async (argv) => {
    try {
      const variables = {};
      variables.id = argv.id;
      const result = await request(commentUnresolve, variables);
      render(result.commentUnresolve, { json: argv.json });
    } catch (err) {
      handleError(err);
    }
  });

  // mutation: commentUpdate
  yargs.command('update <id>', 'Updates a comment.', (yargs) => {
    yargs.positional('id', { type: 'string', describe: 'The identifier of the comment to update.' });
    yargs.option('body', { type: 'string', describe: 'The comment content.' });
    yargs.option('body-data', { type: 'string', describe: '[Internal] The comment content as a Prosemirror document.' });
    yargs.option('do-not-subscribe-to-issue', { type: 'boolean', describe: '[INTERNAL] Flag to prevent auto subscription to the issue the comment is upda...' });
    yargs.option('quoted-text', { type: 'string', describe: 'The text that this comment references. Only defined for inline comments.' });
    yargs.option('resolving-comment-id', { type: 'string', describe: '[INTERNAL] The child comment that resolves this thread.' });
    yargs.option('resolving-user-id', { type: 'string', describe: '[INTERNAL] The user who resolved this thread.' });
    yargs.option('subscriber-ids', { type: 'array', describe: '[INTERNAL] The identifiers of the users subscribing to this comment.' });
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
        if (argv['body'] !== undefined) input.body = argv['body'];
        if (argv['body-data'] !== undefined) input.bodyData = parseJsonFlag(argv['body-data']);
        if (argv['do-not-subscribe-to-issue'] !== undefined) input.doNotSubscribeToIssue = argv['do-not-subscribe-to-issue'];
        if (argv['quoted-text'] !== undefined) input.quotedText = argv['quoted-text'];
        if (argv['resolving-comment-id'] !== undefined) input.resolvingCommentId = argv['resolving-comment-id'];
        if (argv['resolving-user-id'] !== undefined) input.resolvingUserId = argv['resolving-user-id'];
        if (argv['subscriber-ids'] !== undefined) input.subscriberIds = argv['subscriber-ids'];
        variables.input = input;
      }
      const result = await request(commentUpdate, variables);
      render(result.commentUpdate, { json: argv.json });
    } catch (err) {
      handleError(err);
    }
  });

  return yargs.demandCommand(1, 'Specify a subcommand').strict();
}

export function handler() {}
