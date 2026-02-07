// AUTO-GENERATED — do not edit. Run `npm run generate` to regenerate.
import { request } from '../client.js';
import { handleError } from '../error.js';
import { render } from '../output.js';
import { fetchAllPages } from '../pagination.js';
import { parseJsonFlag, kebabToCamel } from '../flag-utils.js';
import { columns } from '../generated/columns.js';

import { emailIntakeAddress } from '../generated/queries.js';
import { emailIntakeAddressCreate, emailIntakeAddressDelete, emailIntakeAddressRotate, emailIntakeAddressUpdate } from '../generated/mutations.js';

export const command = 'email-intake-address <command>';
export const describe = 'email-intake-address commands';

export function builder(yargs) {

  // query: emailIntakeAddress
  yargs.command('get <id>', 'One specific email intake address.', (yargs) => {
    yargs.positional('id', { type: 'string', describe: 'id' });
    return yargs;
  }, async (argv) => {
    try {
      const variables = {};
      variables.id = argv.id;
      const result = await request(emailIntakeAddress, variables);
      render(result.emailIntakeAddress, { json: argv.json, columnConfig: columns['EmailIntakeAddress'] });
    } catch (err) {
      handleError(err);
    }
  });

  // mutation: emailIntakeAddressCreate
  yargs.command('create', 'Creates a new email intake address.', (yargs) => {
    yargs.option('customer-requests-enabled', { type: 'boolean', describe: 'Whether customer requests are enabled.' });
    yargs.option('forwarding-email-address', { type: 'string', describe: 'The email address used to forward emails to the intake address.' });
    yargs.option('id', { type: 'string', describe: 'The identifier in UUID v4 format. If none is provided, the backend will gener...' });
    yargs.option('issue-canceled-auto-reply', { type: 'string', describe: 'The auto-reply message for issue canceled.' });
    yargs.option('issue-canceled-auto-reply-enabled', { type: 'boolean', describe: 'Whether the issue canceled auto-reply is enabled.' });
    yargs.option('issue-completed-auto-reply', { type: 'string', describe: 'The auto-reply message for issue completed.' });
    yargs.option('issue-completed-auto-reply-enabled', { type: 'boolean', describe: 'Whether the issue completed auto-reply is enabled.' });
    yargs.option('issue-created-auto-reply', { type: 'string', describe: 'The auto-reply message for issue created.' });
    yargs.option('replies-enabled', { type: 'boolean', describe: 'Whether email replies are enabled.' });
    yargs.option('sender-name', { type: 'string', describe: 'The name to be used for outgoing emails.' });
    yargs.option('team-id', { type: 'string', describe: 'The identifier or key of the team this email address will intake issues for.' });
    yargs.option('template-id', { type: 'string', describe: 'The identifier of the template this email address will intake issues for.' });
    yargs.option('type', { type: 'string', choices: ["asks","team","template"], describe: 'The type of the email address. If not provided, the backend will default to t...' });
    yargs.option('use-user-names-in-replies', { type: 'boolean', describe: 'Whether the commenter\'s name is included in the email replies.' });
    yargs.option('input-json', { type: 'string', describe: 'Full input as JSON (or @file.json)' });
    return yargs;
  }, async (argv) => {
    try {
      const variables = {};
      if (argv['input-json']) {
        variables.input = parseJsonFlag(argv['input-json']);
      } else {
        const input = {};
        if (argv['customer-requests-enabled'] !== undefined) input.customerRequestsEnabled = argv['customer-requests-enabled'];
        if (argv['forwarding-email-address'] !== undefined) input.forwardingEmailAddress = argv['forwarding-email-address'];
        if (argv['id'] !== undefined) input.id = argv['id'];
        if (argv['issue-canceled-auto-reply'] !== undefined) input.issueCanceledAutoReply = argv['issue-canceled-auto-reply'];
        if (argv['issue-canceled-auto-reply-enabled'] !== undefined) input.issueCanceledAutoReplyEnabled = argv['issue-canceled-auto-reply-enabled'];
        if (argv['issue-completed-auto-reply'] !== undefined) input.issueCompletedAutoReply = argv['issue-completed-auto-reply'];
        if (argv['issue-completed-auto-reply-enabled'] !== undefined) input.issueCompletedAutoReplyEnabled = argv['issue-completed-auto-reply-enabled'];
        if (argv['issue-created-auto-reply'] !== undefined) input.issueCreatedAutoReply = argv['issue-created-auto-reply'];
        if (argv['replies-enabled'] !== undefined) input.repliesEnabled = argv['replies-enabled'];
        if (argv['sender-name'] !== undefined) input.senderName = argv['sender-name'];
        if (argv['team-id'] !== undefined) input.teamId = argv['team-id'];
        if (argv['template-id'] !== undefined) input.templateId = argv['template-id'];
        if (argv['type'] !== undefined) input.type = argv['type'];
        if (argv['use-user-names-in-replies'] !== undefined) input.useUserNamesInReplies = argv['use-user-names-in-replies'];
        variables.input = input;
      }
      const result = await request(emailIntakeAddressCreate, variables);
      render(result.emailIntakeAddressCreate, { json: argv.json });
    } catch (err) {
      handleError(err);
    }
  });

  // mutation: emailIntakeAddressDelete
  yargs.command('delete <id>', 'Deletes an email intake address object.', (yargs) => {
    yargs.positional('id', { type: 'string', describe: 'The identifier of the email intake address to delete.' });
    return yargs;
  }, async (argv) => {
    try {
      const variables = {};
      variables.id = argv.id;
      const result = await request(emailIntakeAddressDelete, variables);
      render(result.emailIntakeAddressDelete, { json: argv.json });
    } catch (err) {
      handleError(err);
    }
  });

  // mutation: emailIntakeAddressRotate
  yargs.command('rotate <id>', 'Rotates an existing email intake address.', (yargs) => {
    yargs.positional('id', { type: 'string', describe: 'The identifier of the email intake address.' });
    return yargs;
  }, async (argv) => {
    try {
      const variables = {};
      variables.id = argv.id;
      const result = await request(emailIntakeAddressRotate, variables);
      render(result.emailIntakeAddressRotate, { json: argv.json });
    } catch (err) {
      handleError(err);
    }
  });

  // mutation: emailIntakeAddressUpdate
  yargs.command('update <id>', 'Updates an existing email intake address.', (yargs) => {
    yargs.positional('id', { type: 'string', describe: 'The identifier of the email intake address.' });
    yargs.option('customer-requests-enabled', { type: 'boolean', describe: 'Whether customer requests are enabled.' });
    yargs.option('enabled', { type: 'boolean', describe: 'Whether the email address is currently enabled. If set to false, the email ad...' });
    yargs.option('forwarding-email-address', { type: 'string', describe: 'The email address used to forward emails to the intake address.' });
    yargs.option('issue-canceled-auto-reply', { type: 'string', describe: 'Custom auto-reply message for issue canceled.' });
    yargs.option('issue-canceled-auto-reply-enabled', { type: 'boolean', describe: 'Whether the issue canceled auto-reply is enabled.' });
    yargs.option('issue-completed-auto-reply', { type: 'string', describe: 'Custom auto-reply message for issue completed.' });
    yargs.option('issue-completed-auto-reply-enabled', { type: 'boolean', describe: 'Whether the issue completed auto-reply is enabled.' });
    yargs.option('issue-created-auto-reply', { type: 'string', describe: 'The auto-reply message for issue created.' });
    yargs.option('replies-enabled', { type: 'boolean', describe: 'Whether email replies are enabled.' });
    yargs.option('sender-name', { type: 'string', describe: 'The name to be used for outgoing emails.' });
    yargs.option('team-id', { type: 'string', describe: 'The identifier or key of the team this email address will intake issues for.' });
    yargs.option('template-id', { type: 'string', describe: 'The identifier of the template this email address will intake issues for.' });
    yargs.option('use-user-names-in-replies', { type: 'boolean', describe: 'Whether the commenter\'s name is included in the email replies.' });
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
        if (argv['customer-requests-enabled'] !== undefined) input.customerRequestsEnabled = argv['customer-requests-enabled'];
        if (argv['enabled'] !== undefined) input.enabled = argv['enabled'];
        if (argv['forwarding-email-address'] !== undefined) input.forwardingEmailAddress = argv['forwarding-email-address'];
        if (argv['issue-canceled-auto-reply'] !== undefined) input.issueCanceledAutoReply = argv['issue-canceled-auto-reply'];
        if (argv['issue-canceled-auto-reply-enabled'] !== undefined) input.issueCanceledAutoReplyEnabled = argv['issue-canceled-auto-reply-enabled'];
        if (argv['issue-completed-auto-reply'] !== undefined) input.issueCompletedAutoReply = argv['issue-completed-auto-reply'];
        if (argv['issue-completed-auto-reply-enabled'] !== undefined) input.issueCompletedAutoReplyEnabled = argv['issue-completed-auto-reply-enabled'];
        if (argv['issue-created-auto-reply'] !== undefined) input.issueCreatedAutoReply = argv['issue-created-auto-reply'];
        if (argv['replies-enabled'] !== undefined) input.repliesEnabled = argv['replies-enabled'];
        if (argv['sender-name'] !== undefined) input.senderName = argv['sender-name'];
        if (argv['team-id'] !== undefined) input.teamId = argv['team-id'];
        if (argv['template-id'] !== undefined) input.templateId = argv['template-id'];
        if (argv['use-user-names-in-replies'] !== undefined) input.useUserNamesInReplies = argv['use-user-names-in-replies'];
        variables.input = input;
      }
      const result = await request(emailIntakeAddressUpdate, variables);
      render(result.emailIntakeAddressUpdate, { json: argv.json });
    } catch (err) {
      handleError(err);
    }
  });

  return yargs.demandCommand(1, 'Specify a subcommand').strict();
}

export function handler() {}
