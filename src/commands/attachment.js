// AUTO-GENERATED — do not edit. Run `npm run generate` to regenerate.
import { request } from '../client.js';
import { handleError } from '../error.js';
import { render } from '../output.js';
import { fetchAllPages } from '../pagination.js';
import { parseJsonFlag, kebabToCamel } from '../flag-utils.js';
import { columns } from '../generated/columns.js';

import { attachment, attachmentIssue, attachmentSources, attachments } from '../generated/queries.js';
import { attachmentCreate, attachmentDelete, attachmentLinkDiscord, attachmentLinkFront, attachmentLinkGitHubIssue, attachmentLinkGitHubPR, attachmentLinkGitLabMR, attachmentLinkIntercom, attachmentLinkJiraIssue, attachmentLinkSalesforce, attachmentLinkSlack, attachmentLinkURL, attachmentLinkZendesk, attachmentSyncToSlack, attachmentUpdate } from '../generated/mutations.js';

export const command = 'attachment <command>';
export const describe = 'attachment commands';

export function builder(yargs) {

  // query: attachment
  yargs.command('get <id>', 'One specific issue attachment. [Deprecated] \'url\' can no longer be used as th...', (yargs) => {
    yargs.positional('id', { type: 'string', describe: 'id' });
    return yargs;
  }, async (argv) => {
    try {
      const variables = {};
      variables.id = argv.id;
      const result = await request(attachment, variables);
      render(result.attachment, { json: argv.json, columnConfig: columns['Attachment'] });
    } catch (err) {
      handleError(err);
    }
  });

  // query: attachmentIssue
  yargs.command('issue <id>', 'Query an issue by its associated attachment, and its id.', (yargs) => {
    yargs.positional('id', { type: 'string', describe: '`id` of the attachment for which you\'ll want to get the issue for. [Deprecated] `url` as the `id` parameter.' });
    return yargs;
  }, async (argv) => {
    try {
      const variables = {};
      variables.id = argv.id;
      const result = await request(attachmentIssue, variables);
      render(result.attachmentIssue, { json: argv.json, columnConfig: columns['Issue'] });
    } catch (err) {
      handleError(err);
    }
  });

  // query: attachmentSources
  yargs.command('sources', '[Internal] Get a list of all unique attachment sources in the workspace.', (yargs) => {
    yargs.option('team-id', { type: 'string', describe: '(optional) if provided will only return attachment sources for the given team.' });
    return yargs;
  }, async (argv) => {
    try {
      const variables = {};
      if (argv['team-id'] !== undefined) variables.teamId = argv['team-id'];
      const result = await request(attachmentSources, variables);
      render(result.attachmentSources, { json: argv.json, columnConfig: columns['AttachmentSourcesPayload'] });
    } catch (err) {
      handleError(err);
    }
  });

  // query: attachments
  yargs.command('list', 'All issue attachments.  To get attachments for a given URL, use `attachmentsF...', (yargs) => {
    yargs.option('after', { type: 'string', describe: 'A cursor to be used with first for forward pagination' });
    yargs.option('before', { type: 'string', describe: 'A cursor to be used with last for backward pagination.' });
    yargs.option('filter', { type: 'string', describe: 'Filter returned attachments.' });
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
        data = await fetchAllPages(request, attachments, variables, 'attachments');
      } else {
        const result = await request(attachments, variables);
        data = result.attachments?.nodes || [];
      }
      render(data, { json: argv.json, isList: true, columnConfig: columns['Attachment'] });
    } catch (err) {
      handleError(err);
    }
  });

  // mutation: attachmentCreate
  yargs.command('create', 'Creates a new attachment, or updates existing if the same `url` and `issueId`...', (yargs) => {
    yargs.option('comment-body', { type: 'string', describe: 'Create a linked comment with markdown body.' });
    yargs.option('comment-body-data', { type: 'string', describe: '[Internal] Create a linked comment with Prosemirror body. Please use `comment...' });
    yargs.option('create-as-user', { type: 'string', describe: 'Create attachment as a user with the provided name. This option is only avail...' });
    yargs.option('group-by-source', { type: 'boolean', describe: 'Indicates if attachments for the same source application should be grouped in...' });
    yargs.option('icon-url', { type: 'string', describe: 'An icon url to display with the attachment. Should be of jpg or png format. M...' });
    yargs.option('id', { type: 'string', describe: 'The identifier in UUID v4 format. If none is provided, the backend will gener...' });
    yargs.option('issue-id', { type: 'string', demandOption: true, describe: 'The issue to associate the attachment with.' });
    yargs.option('metadata', { type: 'string', describe: 'Attachment metadata object with string and number values.' });
    yargs.option('subtitle', { type: 'string', describe: 'The attachment subtitle.' });
    yargs.option('title', { type: 'string', demandOption: true, describe: 'The attachment title.' });
    yargs.option('url', { type: 'string', demandOption: true, describe: 'Attachment location which is also used as an unique identifier for the attach...' });
    yargs.option('input-json', { type: 'string', describe: 'Full input as JSON (or @file.json)' });
    return yargs;
  }, async (argv) => {
    try {
      const variables = {};
      if (argv['input-json']) {
        variables.input = parseJsonFlag(argv['input-json']);
      } else {
        const input = {};
        if (argv['comment-body'] !== undefined) input.commentBody = argv['comment-body'];
        if (argv['comment-body-data'] !== undefined) input.commentBodyData = parseJsonFlag(argv['comment-body-data']);
        if (argv['create-as-user'] !== undefined) input.createAsUser = argv['create-as-user'];
        if (argv['group-by-source'] !== undefined) input.groupBySource = argv['group-by-source'];
        if (argv['icon-url'] !== undefined) input.iconUrl = argv['icon-url'];
        if (argv['id'] !== undefined) input.id = argv['id'];
        if (argv['issue-id'] !== undefined) input.issueId = argv['issue-id'];
        if (argv['metadata'] !== undefined) input.metadata = parseJsonFlag(argv['metadata']);
        if (argv['subtitle'] !== undefined) input.subtitle = argv['subtitle'];
        if (argv['title'] !== undefined) input.title = argv['title'];
        if (argv['url'] !== undefined) input.url = argv['url'];
        variables.input = input;
      }
      const result = await request(attachmentCreate, variables);
      render(result.attachmentCreate, { json: argv.json });
    } catch (err) {
      handleError(err);
    }
  });

  // mutation: attachmentDelete
  yargs.command('delete <id>', 'Deletes an issue attachment.', (yargs) => {
    yargs.positional('id', { type: 'string', describe: 'The identifier of the attachment to delete.' });
    return yargs;
  }, async (argv) => {
    try {
      const variables = {};
      variables.id = argv.id;
      const result = await request(attachmentDelete, variables);
      render(result.attachmentDelete, { json: argv.json });
    } catch (err) {
      handleError(err);
    }
  });

  // mutation: attachmentLinkDiscord
  yargs.command('link-discord', 'Link an existing Discord message to an issue.', (yargs) => {
    yargs.option('channel-id', { type: 'string', demandOption: true, describe: 'The Discord channel ID for the message to link.' });
    yargs.option('create-as-user', { type: 'string', describe: 'Create attachment as a user with the provided name. This option is only avail...' });
    yargs.option('display-icon-url', { type: 'string', describe: 'Provide an external user avatar URL. Can only be used in conjunction with the...' });
    yargs.option('id', { type: 'string', describe: 'Optional attachment ID that may be provided through the API.' });
    yargs.option('issue-id', { type: 'string', demandOption: true, describe: 'The issue for which to link the Discord message.' });
    yargs.option('message-id', { type: 'string', demandOption: true, describe: 'The Discord message ID for the message to link.' });
    yargs.option('title', { type: 'string', describe: 'The title to use for the attachment.' });
    yargs.option('url', { type: 'string', demandOption: true, describe: 'The Discord message URL for the message to link.' });
    return yargs;
  }, async (argv) => {
    try {
      const variables = {};
      if (argv['channel-id'] !== undefined) variables.channelId = argv['channel-id'];
      if (argv['create-as-user'] !== undefined) variables.createAsUser = argv['create-as-user'];
      if (argv['display-icon-url'] !== undefined) variables.displayIconUrl = argv['display-icon-url'];
      if (argv['id'] !== undefined) variables.id = argv['id'];
      if (argv['issue-id'] !== undefined) variables.issueId = argv['issue-id'];
      if (argv['message-id'] !== undefined) variables.messageId = argv['message-id'];
      if (argv['title'] !== undefined) variables.title = argv['title'];
      if (argv['url'] !== undefined) variables.url = argv['url'];
      const result = await request(attachmentLinkDiscord, variables);
      render(result.attachmentLinkDiscord, { json: argv.json });
    } catch (err) {
      handleError(err);
    }
  });

  // mutation: attachmentLinkFront
  yargs.command('link-front', 'Link an existing Front conversation to an issue.', (yargs) => {
    yargs.option('conversation-id', { type: 'string', demandOption: true, describe: 'The Front conversation ID to link.' });
    yargs.option('create-as-user', { type: 'string', describe: 'Create attachment as a user with the provided name. This option is only avail...' });
    yargs.option('display-icon-url', { type: 'string', describe: 'Provide an external user avatar URL. Can only be used in conjunction with the...' });
    yargs.option('id', { type: 'string', describe: 'Optional attachment ID that may be provided through the API.' });
    yargs.option('issue-id', { type: 'string', demandOption: true, describe: 'The issue for which to link the Front conversation.' });
    yargs.option('title', { type: 'string', describe: 'The title to use for the attachment.' });
    return yargs;
  }, async (argv) => {
    try {
      const variables = {};
      if (argv['conversation-id'] !== undefined) variables.conversationId = argv['conversation-id'];
      if (argv['create-as-user'] !== undefined) variables.createAsUser = argv['create-as-user'];
      if (argv['display-icon-url'] !== undefined) variables.displayIconUrl = argv['display-icon-url'];
      if (argv['id'] !== undefined) variables.id = argv['id'];
      if (argv['issue-id'] !== undefined) variables.issueId = argv['issue-id'];
      if (argv['title'] !== undefined) variables.title = argv['title'];
      const result = await request(attachmentLinkFront, variables);
      render(result.attachmentLinkFront, { json: argv.json });
    } catch (err) {
      handleError(err);
    }
  });

  // mutation: attachmentLinkGitHubIssue
  yargs.command('link-git-hub-issue', 'Link a GitHub issue to a Linear issue.', (yargs) => {
    yargs.option('create-as-user', { type: 'string', describe: 'Create attachment as a user with the provided name. This option is only avail...' });
    yargs.option('display-icon-url', { type: 'string', describe: 'Provide an external user avatar URL. Can only be used in conjunction with the...' });
    yargs.option('id', { type: 'string', describe: 'Optional attachment ID that may be provided through the API.' });
    yargs.option('issue-id', { type: 'string', demandOption: true, describe: 'The Linear issue for which to link the GitHub issue.' });
    yargs.option('title', { type: 'string', describe: 'The title to use for the attachment.' });
    yargs.option('url', { type: 'string', demandOption: true, describe: 'The URL of the GitHub issue to link.' });
    return yargs;
  }, async (argv) => {
    try {
      const variables = {};
      if (argv['create-as-user'] !== undefined) variables.createAsUser = argv['create-as-user'];
      if (argv['display-icon-url'] !== undefined) variables.displayIconUrl = argv['display-icon-url'];
      if (argv['id'] !== undefined) variables.id = argv['id'];
      if (argv['issue-id'] !== undefined) variables.issueId = argv['issue-id'];
      if (argv['title'] !== undefined) variables.title = argv['title'];
      if (argv['url'] !== undefined) variables.url = argv['url'];
      const result = await request(attachmentLinkGitHubIssue, variables);
      render(result.attachmentLinkGitHubIssue, { json: argv.json });
    } catch (err) {
      handleError(err);
    }
  });

  // mutation: attachmentLinkGitHubPR
  yargs.command('link-git-hub-pr', 'Link a GitHub pull request to an issue.', (yargs) => {
    yargs.option('create-as-user', { type: 'string', describe: 'Create attachment as a user with the provided name. This option is only avail...' });
    yargs.option('display-icon-url', { type: 'string', describe: 'Provide an external user avatar URL. Can only be used in conjunction with the...' });
    yargs.option('id', { type: 'string', describe: 'Optional attachment ID that may be provided through the API.' });
    yargs.option('issue-id', { type: 'string', demandOption: true, describe: 'The issue for which to link the GitHub pull request.' });
    yargs.option('link-kind', { type: 'string', choices: ["closes","contributes","links"], describe: '[Internal] The kind of link between the issue and the pull request.' });
    yargs.option('number', { type: 'number', describe: 'The GitHub pull request number to link.' });
    yargs.option('owner', { type: 'string', describe: 'The owner of the GitHub repository.' });
    yargs.option('repo', { type: 'string', describe: 'The name of the GitHub repository.' });
    yargs.option('title', { type: 'string', describe: 'The title to use for the attachment.' });
    yargs.option('url', { type: 'string', demandOption: true, describe: 'The URL of the GitHub pull request to link.' });
    return yargs;
  }, async (argv) => {
    try {
      const variables = {};
      if (argv['create-as-user'] !== undefined) variables.createAsUser = argv['create-as-user'];
      if (argv['display-icon-url'] !== undefined) variables.displayIconUrl = argv['display-icon-url'];
      if (argv['id'] !== undefined) variables.id = argv['id'];
      if (argv['issue-id'] !== undefined) variables.issueId = argv['issue-id'];
      if (argv['link-kind'] !== undefined) variables.linkKind = argv['link-kind'];
      if (argv['number'] !== undefined) variables.number = argv['number'];
      if (argv['owner'] !== undefined) variables.owner = argv['owner'];
      if (argv['repo'] !== undefined) variables.repo = argv['repo'];
      if (argv['title'] !== undefined) variables.title = argv['title'];
      if (argv['url'] !== undefined) variables.url = argv['url'];
      const result = await request(attachmentLinkGitHubPR, variables);
      render(result.attachmentLinkGitHubPR, { json: argv.json });
    } catch (err) {
      handleError(err);
    }
  });

  // mutation: attachmentLinkGitLabMR
  yargs.command('link-git-lab-mr', 'Link an existing GitLab MR to an issue.', (yargs) => {
    yargs.option('create-as-user', { type: 'string', describe: 'Create attachment as a user with the provided name. This option is only avail...' });
    yargs.option('display-icon-url', { type: 'string', describe: 'Provide an external user avatar URL. Can only be used in conjunction with the...' });
    yargs.option('id', { type: 'string', describe: 'Optional attachment ID that may be provided through the API.' });
    yargs.option('issue-id', { type: 'string', demandOption: true, describe: 'The issue for which to link the GitLab merge request.' });
    yargs.option('number', { type: 'number', demandOption: true, describe: 'The GitLab merge request number to link.' });
    yargs.option('project-path-with-namespace', { type: 'string', demandOption: true, describe: 'The path name to the project including any (sub)groups. E.g. linear/main/client.' });
    yargs.option('title', { type: 'string', describe: 'The title to use for the attachment.' });
    yargs.option('url', { type: 'string', demandOption: true, describe: 'The URL of the GitLab merge request to link.' });
    return yargs;
  }, async (argv) => {
    try {
      const variables = {};
      if (argv['create-as-user'] !== undefined) variables.createAsUser = argv['create-as-user'];
      if (argv['display-icon-url'] !== undefined) variables.displayIconUrl = argv['display-icon-url'];
      if (argv['id'] !== undefined) variables.id = argv['id'];
      if (argv['issue-id'] !== undefined) variables.issueId = argv['issue-id'];
      if (argv['number'] !== undefined) variables.number = argv['number'];
      if (argv['project-path-with-namespace'] !== undefined) variables.projectPathWithNamespace = argv['project-path-with-namespace'];
      if (argv['title'] !== undefined) variables.title = argv['title'];
      if (argv['url'] !== undefined) variables.url = argv['url'];
      const result = await request(attachmentLinkGitLabMR, variables);
      render(result.attachmentLinkGitLabMR, { json: argv.json });
    } catch (err) {
      handleError(err);
    }
  });

  // mutation: attachmentLinkIntercom
  yargs.command('link-intercom', 'Link an existing Intercom conversation to an issue.', (yargs) => {
    yargs.option('conversation-id', { type: 'string', demandOption: true, describe: 'The Intercom conversation ID to link.' });
    yargs.option('create-as-user', { type: 'string', describe: 'Create attachment as a user with the provided name. This option is only avail...' });
    yargs.option('display-icon-url', { type: 'string', describe: 'Provide an external user avatar URL. Can only be used in conjunction with the...' });
    yargs.option('id', { type: 'string', describe: 'Optional attachment ID that may be provided through the API.' });
    yargs.option('issue-id', { type: 'string', demandOption: true, describe: 'The issue for which to link the Intercom conversation.' });
    yargs.option('part-id', { type: 'string', describe: 'An optional Intercom conversation part ID to link to' });
    yargs.option('title', { type: 'string', describe: 'The title to use for the attachment.' });
    return yargs;
  }, async (argv) => {
    try {
      const variables = {};
      if (argv['conversation-id'] !== undefined) variables.conversationId = argv['conversation-id'];
      if (argv['create-as-user'] !== undefined) variables.createAsUser = argv['create-as-user'];
      if (argv['display-icon-url'] !== undefined) variables.displayIconUrl = argv['display-icon-url'];
      if (argv['id'] !== undefined) variables.id = argv['id'];
      if (argv['issue-id'] !== undefined) variables.issueId = argv['issue-id'];
      if (argv['part-id'] !== undefined) variables.partId = argv['part-id'];
      if (argv['title'] !== undefined) variables.title = argv['title'];
      const result = await request(attachmentLinkIntercom, variables);
      render(result.attachmentLinkIntercom, { json: argv.json });
    } catch (err) {
      handleError(err);
    }
  });

  // mutation: attachmentLinkJiraIssue
  yargs.command('link-jira-issue', 'Link an existing Jira issue to an issue.', (yargs) => {
    yargs.option('create-as-user', { type: 'string', describe: 'Create attachment as a user with the provided name. This option is only avail...' });
    yargs.option('display-icon-url', { type: 'string', describe: 'Provide an external user avatar URL. Can only be used in conjunction with the...' });
    yargs.option('id', { type: 'string', describe: 'Optional attachment ID that may be provided through the API.' });
    yargs.option('issue-id', { type: 'string', demandOption: true, describe: 'The issue for which to link the Jira issue.' });
    yargs.option('jira-issue-id', { type: 'string', demandOption: true, describe: 'The Jira issue key or ID to link.' });
    yargs.option('title', { type: 'string', describe: 'The title to use for the attachment.' });
    yargs.option('url', { type: 'string', describe: 'Optional fallback URL to use if the Jira issue cannot be found.' });
    return yargs;
  }, async (argv) => {
    try {
      const variables = {};
      if (argv['create-as-user'] !== undefined) variables.createAsUser = argv['create-as-user'];
      if (argv['display-icon-url'] !== undefined) variables.displayIconUrl = argv['display-icon-url'];
      if (argv['id'] !== undefined) variables.id = argv['id'];
      if (argv['issue-id'] !== undefined) variables.issueId = argv['issue-id'];
      if (argv['jira-issue-id'] !== undefined) variables.jiraIssueId = argv['jira-issue-id'];
      if (argv['title'] !== undefined) variables.title = argv['title'];
      if (argv['url'] !== undefined) variables.url = argv['url'];
      const result = await request(attachmentLinkJiraIssue, variables);
      render(result.attachmentLinkJiraIssue, { json: argv.json });
    } catch (err) {
      handleError(err);
    }
  });

  // mutation: attachmentLinkSalesforce
  yargs.command('link-salesforce', 'Link an existing Salesforce case to an issue.', (yargs) => {
    yargs.option('create-as-user', { type: 'string', describe: 'Create attachment as a user with the provided name. This option is only avail...' });
    yargs.option('display-icon-url', { type: 'string', describe: 'Provide an external user avatar URL. Can only be used in conjunction with the...' });
    yargs.option('id', { type: 'string', describe: 'Optional attachment ID that may be provided through the API.' });
    yargs.option('issue-id', { type: 'string', demandOption: true, describe: 'The issue for which to link the Salesforce case.' });
    yargs.option('title', { type: 'string', describe: 'The title to use for the attachment.' });
    yargs.option('url', { type: 'string', demandOption: true, describe: 'The URL of the Salesforce case to link.' });
    return yargs;
  }, async (argv) => {
    try {
      const variables = {};
      if (argv['create-as-user'] !== undefined) variables.createAsUser = argv['create-as-user'];
      if (argv['display-icon-url'] !== undefined) variables.displayIconUrl = argv['display-icon-url'];
      if (argv['id'] !== undefined) variables.id = argv['id'];
      if (argv['issue-id'] !== undefined) variables.issueId = argv['issue-id'];
      if (argv['title'] !== undefined) variables.title = argv['title'];
      if (argv['url'] !== undefined) variables.url = argv['url'];
      const result = await request(attachmentLinkSalesforce, variables);
      render(result.attachmentLinkSalesforce, { json: argv.json });
    } catch (err) {
      handleError(err);
    }
  });

  // mutation: attachmentLinkSlack
  yargs.command('link-slack', 'Link an existing Slack message to an issue.', (yargs) => {
    yargs.option('channel', { type: 'string', describe: '[DEPRECATED] The Slack channel ID for the message to link.' });
    yargs.option('create-as-user', { type: 'string', describe: 'Create attachment as a user with the provided name. This option is only avail...' });
    yargs.option('display-icon-url', { type: 'string', describe: 'Provide an external user avatar URL. Can only be used in conjunction with the...' });
    yargs.option('id', { type: 'string', describe: 'Optional attachment ID that may be provided through the API.' });
    yargs.option('issue-id', { type: 'string', demandOption: true, describe: 'The issue to which to link the Slack message.' });
    yargs.option('latest', { type: 'string', describe: '[DEPRECATED] The latest timestamp for the Slack message.' });
    yargs.option('sync-to-comment-thread', { type: 'boolean', describe: 'Whether to begin syncing the message\'s Slack thread with a comment thread on ...' });
    yargs.option('title', { type: 'string', describe: 'The title to use for the attachment.' });
    yargs.option('ts', { type: 'string', describe: '[DEPRECATED] Unique identifier of either a thread\'s parent message or a messa...' });
    yargs.option('url', { type: 'string', demandOption: true, describe: 'The Slack message URL for the message to link.' });
    return yargs;
  }, async (argv) => {
    try {
      const variables = {};
      if (argv['channel'] !== undefined) variables.channel = argv['channel'];
      if (argv['create-as-user'] !== undefined) variables.createAsUser = argv['create-as-user'];
      if (argv['display-icon-url'] !== undefined) variables.displayIconUrl = argv['display-icon-url'];
      if (argv['id'] !== undefined) variables.id = argv['id'];
      if (argv['issue-id'] !== undefined) variables.issueId = argv['issue-id'];
      if (argv['latest'] !== undefined) variables.latest = argv['latest'];
      if (argv['sync-to-comment-thread'] !== undefined) variables.syncToCommentThread = argv['sync-to-comment-thread'];
      if (argv['title'] !== undefined) variables.title = argv['title'];
      if (argv['ts'] !== undefined) variables.ts = argv['ts'];
      if (argv['url'] !== undefined) variables.url = argv['url'];
      const result = await request(attachmentLinkSlack, variables);
      render(result.attachmentLinkSlack, { json: argv.json });
    } catch (err) {
      handleError(err);
    }
  });

  // mutation: attachmentLinkURL
  yargs.command('link-url', 'Link any url to an issue.', (yargs) => {
    yargs.option('create-as-user', { type: 'string', describe: 'Create attachment as a user with the provided name. This option is only avail...' });
    yargs.option('display-icon-url', { type: 'string', describe: 'Provide an external user avatar URL. Can only be used in conjunction with the...' });
    yargs.option('id', { type: 'string', describe: 'The id for the attachment.' });
    yargs.option('issue-id', { type: 'string', demandOption: true, describe: 'The issue for which to link the url.' });
    yargs.option('title', { type: 'string', describe: 'The title to use for the attachment.' });
    yargs.option('url', { type: 'string', demandOption: true, describe: 'The url to link.' });
    return yargs;
  }, async (argv) => {
    try {
      const variables = {};
      if (argv['create-as-user'] !== undefined) variables.createAsUser = argv['create-as-user'];
      if (argv['display-icon-url'] !== undefined) variables.displayIconUrl = argv['display-icon-url'];
      if (argv['id'] !== undefined) variables.id = argv['id'];
      if (argv['issue-id'] !== undefined) variables.issueId = argv['issue-id'];
      if (argv['title'] !== undefined) variables.title = argv['title'];
      if (argv['url'] !== undefined) variables.url = argv['url'];
      const result = await request(attachmentLinkURL, variables);
      render(result.attachmentLinkURL, { json: argv.json });
    } catch (err) {
      handleError(err);
    }
  });

  // mutation: attachmentLinkZendesk
  yargs.command('link-zendesk', 'Link an existing Zendesk ticket to an issue.', (yargs) => {
    yargs.option('create-as-user', { type: 'string', describe: 'Create attachment as a user with the provided name. This option is only avail...' });
    yargs.option('display-icon-url', { type: 'string', describe: 'Provide an external user avatar URL. Can only be used in conjunction with the...' });
    yargs.option('id', { type: 'string', describe: 'Optional attachment ID that may be provided through the API.' });
    yargs.option('issue-id', { type: 'string', demandOption: true, describe: 'The issue for which to link the Zendesk ticket.' });
    yargs.option('ticket-id', { type: 'string', demandOption: true, describe: 'The Zendesk ticket ID to link.' });
    yargs.option('title', { type: 'string', describe: 'The title to use for the attachment.' });
    yargs.option('url', { type: 'string', describe: 'The URL of the Zendesk ticket to link.' });
    return yargs;
  }, async (argv) => {
    try {
      const variables = {};
      if (argv['create-as-user'] !== undefined) variables.createAsUser = argv['create-as-user'];
      if (argv['display-icon-url'] !== undefined) variables.displayIconUrl = argv['display-icon-url'];
      if (argv['id'] !== undefined) variables.id = argv['id'];
      if (argv['issue-id'] !== undefined) variables.issueId = argv['issue-id'];
      if (argv['ticket-id'] !== undefined) variables.ticketId = argv['ticket-id'];
      if (argv['title'] !== undefined) variables.title = argv['title'];
      if (argv['url'] !== undefined) variables.url = argv['url'];
      const result = await request(attachmentLinkZendesk, variables);
      render(result.attachmentLinkZendesk, { json: argv.json });
    } catch (err) {
      handleError(err);
    }
  });

  // mutation: attachmentSyncToSlack
  yargs.command('sync-to-slack <id>', 'Begin syncing the thread for an existing Slack message attachment with a comm...', (yargs) => {
    yargs.positional('id', { type: 'string', describe: 'The ID of the Slack attachment to begin syncing.' });
    return yargs;
  }, async (argv) => {
    try {
      const variables = {};
      variables.id = argv.id;
      const result = await request(attachmentSyncToSlack, variables);
      render(result.attachmentSyncToSlack, { json: argv.json });
    } catch (err) {
      handleError(err);
    }
  });

  // mutation: attachmentUpdate
  yargs.command('update <id>', 'Updates an existing issue attachment.', (yargs) => {
    yargs.positional('id', { type: 'string', describe: 'The identifier of the attachment to update.' });
    yargs.option('icon-url', { type: 'string', describe: 'An icon url to display with the attachment. Should be of jpg or png format. M...' });
    yargs.option('metadata', { type: 'string', describe: 'Attachment metadata object with string and number values.' });
    yargs.option('subtitle', { type: 'string', describe: 'The attachment subtitle.' });
    yargs.option('title', { type: 'string', demandOption: true, describe: 'The attachment title.' });
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
        if (argv['icon-url'] !== undefined) input.iconUrl = argv['icon-url'];
        if (argv['metadata'] !== undefined) input.metadata = parseJsonFlag(argv['metadata']);
        if (argv['subtitle'] !== undefined) input.subtitle = argv['subtitle'];
        if (argv['title'] !== undefined) input.title = argv['title'];
        variables.input = input;
      }
      const result = await request(attachmentUpdate, variables);
      render(result.attachmentUpdate, { json: argv.json });
    } catch (err) {
      handleError(err);
    }
  });

  return yargs.demandCommand(1, 'Specify a subcommand').strict();
}

export function handler() {}
