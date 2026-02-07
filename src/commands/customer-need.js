// AUTO-GENERATED — do not edit. Run `npm run generate` to regenerate.
import { request } from '../client.js';
import { handleError } from '../error.js';
import { render } from '../output.js';
import { fetchAllPages } from '../pagination.js';
import { parseJsonFlag, kebabToCamel } from '../flag-utils.js';
import { columns } from '../generated/columns.js';

import { customerNeed } from '../generated/queries.js';
import { customerNeedArchive, customerNeedCreate, customerNeedCreateFromAttachment, customerNeedDelete, customerNeedUnarchive, customerNeedUpdate } from '../generated/mutations.js';

export const command = 'customer-need <command>';
export const describe = 'customer-need commands';

export function builder(yargs) {

  // query: customerNeed
  yargs.command('get', 'One specific customer need', (yargs) => {
    yargs.option('hash', { type: 'string', describe: 'The hash of the need to retrieve.' });
    yargs.option('id', { type: 'string', describe: 'The identifier of the need to retrieve.' });
    return yargs;
  }, async (argv) => {
    try {
      const variables = {};
      if (argv['hash'] !== undefined) variables.hash = argv['hash'];
      if (argv['id'] !== undefined) variables.id = argv['id'];
      const result = await request(customerNeed, variables);
      render(result.customerNeed, { json: argv.json, columnConfig: columns['CustomerNeed'] });
    } catch (err) {
      handleError(err);
    }
  });

  // mutation: customerNeedArchive
  yargs.command('archive <id>', 'Archives a customer need.', (yargs) => {
    yargs.positional('id', { type: 'string', describe: 'The identifier of the customer need to archive.' });
    return yargs;
  }, async (argv) => {
    try {
      const variables = {};
      variables.id = argv.id;
      const result = await request(customerNeedArchive, variables);
      render(result.customerNeedArchive, { json: argv.json });
    } catch (err) {
      handleError(err);
    }
  });

  // mutation: customerNeedCreate
  yargs.command('create', 'Creates a new customer need.', (yargs) => {
    yargs.option('attachment-id', { type: 'string', describe: 'The attachment this need is referencing.' });
    yargs.option('attachment-url', { type: 'string', describe: 'Optional URL for the attachment associated with the customer need.' });
    yargs.option('body', { type: 'string', describe: 'The content of the need in markdown format.' });
    yargs.option('body-data', { type: 'string', describe: '[Internal] The content of the need as a Prosemirror document.' });
    yargs.option('comment-id', { type: 'string', describe: 'The comment this need is referencing.' });
    yargs.option('create-as-user', { type: 'string', describe: 'Create need as a user with the provided name. This option is only available t...' });
    yargs.option('customer-external-id', { type: 'string', describe: 'The external ID of the customer the need belongs to.' });
    yargs.option('customer-id', { type: 'string', describe: 'The uuid of the customer the need belongs to.' });
    yargs.option('display-icon-url', { type: 'string', describe: 'Provide an external user avatar URL. Can only be used in conjunction with the...' });
    yargs.option('id', { type: 'string', describe: 'The identifier in UUID v4 format. If none is provided, the backend will gener...' });
    yargs.option('issue-id', { type: 'string', describe: 'The issue this need is referencing.' });
    yargs.option('priority', { type: 'number', describe: 'Whether the customer need is important or not. 0 = Not important, 1 = Important.' });
    yargs.option('project-id', { type: 'string', describe: '[INTERNAL] The project this need is referencing.' });
    yargs.option('input-json', { type: 'string', describe: 'Full input as JSON (or @file.json)' });
    return yargs;
  }, async (argv) => {
    try {
      const variables = {};
      if (argv['input-json']) {
        variables.input = parseJsonFlag(argv['input-json']);
      } else {
        const input = {};
        if (argv['attachment-id'] !== undefined) input.attachmentId = argv['attachment-id'];
        if (argv['attachment-url'] !== undefined) input.attachmentUrl = argv['attachment-url'];
        if (argv['body'] !== undefined) input.body = argv['body'];
        if (argv['body-data'] !== undefined) input.bodyData = parseJsonFlag(argv['body-data']);
        if (argv['comment-id'] !== undefined) input.commentId = argv['comment-id'];
        if (argv['create-as-user'] !== undefined) input.createAsUser = argv['create-as-user'];
        if (argv['customer-external-id'] !== undefined) input.customerExternalId = argv['customer-external-id'];
        if (argv['customer-id'] !== undefined) input.customerId = argv['customer-id'];
        if (argv['display-icon-url'] !== undefined) input.displayIconUrl = argv['display-icon-url'];
        if (argv['id'] !== undefined) input.id = argv['id'];
        if (argv['issue-id'] !== undefined) input.issueId = argv['issue-id'];
        if (argv['priority'] !== undefined) input.priority = argv['priority'];
        if (argv['project-id'] !== undefined) input.projectId = argv['project-id'];
        variables.input = input;
      }
      const result = await request(customerNeedCreate, variables);
      render(result.customerNeedCreate, { json: argv.json });
    } catch (err) {
      handleError(err);
    }
  });

  // mutation: customerNeedCreateFromAttachment
  yargs.command('create-from-attachment', 'Creates a new customer need out of an attachment', (yargs) => {
    yargs.option('attachment-id', { type: 'string', demandOption: true, describe: 'The attachment this need is created from.' });
    yargs.option('input-json', { type: 'string', describe: 'Full input as JSON (or @file.json)' });
    return yargs;
  }, async (argv) => {
    try {
      const variables = {};
      if (argv['input-json']) {
        variables.input = parseJsonFlag(argv['input-json']);
      } else {
        const input = {};
        if (argv['attachment-id'] !== undefined) input.attachmentId = argv['attachment-id'];
        variables.input = input;
      }
      const result = await request(customerNeedCreateFromAttachment, variables);
      render(result.customerNeedCreateFromAttachment, { json: argv.json });
    } catch (err) {
      handleError(err);
    }
  });

  // mutation: customerNeedDelete
  yargs.command('delete <id>', 'Deletes a customer need.', (yargs) => {
    yargs.positional('id', { type: 'string', describe: 'The identifier of the customer need to delete.' });
    yargs.option('keep-attachment', { type: 'boolean', describe: 'Whether to keep the attachment associated with the customer need.' });
    return yargs;
  }, async (argv) => {
    try {
      const variables = {};
      variables.id = argv.id;
      if (argv['keep-attachment'] !== undefined) variables.keepAttachment = argv['keep-attachment'];
      const result = await request(customerNeedDelete, variables);
      render(result.customerNeedDelete, { json: argv.json });
    } catch (err) {
      handleError(err);
    }
  });

  // mutation: customerNeedUnarchive
  yargs.command('unarchive <id>', 'Unarchives a customer need.', (yargs) => {
    yargs.positional('id', { type: 'string', describe: 'The identifier of the customer need to unarchive.' });
    return yargs;
  }, async (argv) => {
    try {
      const variables = {};
      variables.id = argv.id;
      const result = await request(customerNeedUnarchive, variables);
      render(result.customerNeedUnarchive, { json: argv.json });
    } catch (err) {
      handleError(err);
    }
  });

  // mutation: customerNeedUpdate
  yargs.command('update <id>', 'Updates a customer need', (yargs) => {
    yargs.positional('id', { type: 'string', describe: 'The identifier of the customer need to update.' });
    yargs.option('apply-priority-to-related-needs', { type: 'boolean', describe: 'Whether to also update the priority of needs from the same customer on the sa...' });
    yargs.option('attachment-url', { type: 'string', describe: 'Optional URL for the attachment associated with the customer need.' });
    yargs.option('body', { type: 'string', describe: 'The content of the need in markdown format.' });
    yargs.option('body-data', { type: 'string', describe: '[Internal] The content of the need as a Prosemirror document.' });
    yargs.option('customer-external-id', { type: 'string', describe: 'The external ID of the customer the need belongs to.' });
    yargs.option('customer-id', { type: 'string', describe: 'The uuid of the customer the need belongs to.' });
    yargs.option('id', { type: 'string', describe: 'The identifier in UUID v4 format. If none is provided, the backend will gener...' });
    yargs.option('issue-id', { type: 'string', describe: 'The issue this need is referencing.' });
    yargs.option('priority', { type: 'number', describe: 'Whether the customer need is important or not. 0 = Not important, 1 = Important.' });
    yargs.option('project-id', { type: 'string', describe: '[INTERNAL] The project this need is referencing.' });
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
        if (argv['apply-priority-to-related-needs'] !== undefined) input.applyPriorityToRelatedNeeds = argv['apply-priority-to-related-needs'];
        if (argv['attachment-url'] !== undefined) input.attachmentUrl = argv['attachment-url'];
        if (argv['body'] !== undefined) input.body = argv['body'];
        if (argv['body-data'] !== undefined) input.bodyData = parseJsonFlag(argv['body-data']);
        if (argv['customer-external-id'] !== undefined) input.customerExternalId = argv['customer-external-id'];
        if (argv['customer-id'] !== undefined) input.customerId = argv['customer-id'];
        if (argv['id'] !== undefined) input.id = argv['id'];
        if (argv['issue-id'] !== undefined) input.issueId = argv['issue-id'];
        if (argv['priority'] !== undefined) input.priority = argv['priority'];
        if (argv['project-id'] !== undefined) input.projectId = argv['project-id'];
        variables.input = input;
      }
      const result = await request(customerNeedUpdate, variables);
      render(result.customerNeedUpdate, { json: argv.json });
    } catch (err) {
      handleError(err);
    }
  });

  return yargs.demandCommand(1, 'Specify a subcommand').strict();
}

export function handler() {}
