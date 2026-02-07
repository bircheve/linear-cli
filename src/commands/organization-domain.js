// AUTO-GENERATED — do not edit. Run `npm run generate` to regenerate.
import { request } from '../client.js';
import { handleError } from '../error.js';
import { render } from '../output.js';
import { fetchAllPages } from '../pagination.js';
import { parseJsonFlag, kebabToCamel } from '../flag-utils.js';

import { organizationDomainClaimRequest } from '../generated/queries.js';
import { organizationDomainClaim, organizationDomainCreate, organizationDomainDelete, organizationDomainUpdate, organizationDomainVerify } from '../generated/mutations.js';

export const command = 'organization-domain <command>';
export const describe = 'organization-domain commands';

export function builder(yargs) {

  // query: organizationDomainClaimRequest
  yargs.command('claim-request <id>', '[INTERNAL] Checks whether the domain can be claimed.', (yargs) => {
    yargs.positional('id', { type: 'string', describe: 'The ID of the organization domain to claim.' });
    return yargs;
  }, async (argv) => {
    try {
      const variables = {};
      variables.id = argv.id;
      const result = await request(organizationDomainClaimRequest, variables);
      render(result.organizationDomainClaimRequest, { json: argv.json });
    } catch (err) {
      handleError(err);
    }
  });

  // mutation: organizationDomainClaim
  yargs.command('claim <id>', '[INTERNAL] Verifies a domain claim.', (yargs) => {
    yargs.positional('id', { type: 'string', describe: 'The ID of the organization domain to claim.' });
    return yargs;
  }, async (argv) => {
    try {
      const variables = {};
      variables.id = argv.id;
      const result = await request(organizationDomainClaim, variables);
      render(result.organizationDomainClaim, { json: argv.json });
    } catch (err) {
      handleError(err);
    }
  });

  // mutation: organizationDomainCreate
  yargs.command('create', '[INTERNAL] Adds a domain to be allowed for an organization.', (yargs) => {
    yargs.option('auth-type', { type: 'string', describe: 'The authentication type this domain is for.' });
    yargs.option('id', { type: 'string', describe: 'The identifier in UUID v4 format. If none is provided, the backend will gener...' });
    yargs.option('identity-provider-id', { type: 'string', describe: 'The identity provider to which to add the domain.' });
    yargs.option('name', { type: 'string', demandOption: true, describe: 'The domain name to add.' });
    yargs.option('verification-email', { type: 'string', describe: 'The email address to which to send the verification code.' });
    yargs.option('trigger-email-verification', { type: 'boolean', describe: 'Whether to trigger an email verification flow during domain creation.' });
    yargs.option('input-json', { type: 'string', describe: 'Full input as JSON (or @file.json)' });
    return yargs;
  }, async (argv) => {
    try {
      const variables = {};
      if (argv['input-json']) {
        variables.input = parseJsonFlag(argv['input-json']);
      } else {
        const input = {};
        if (argv['auth-type'] !== undefined) input.authType = argv['auth-type'];
        if (argv['id'] !== undefined) input.id = argv['id'];
        if (argv['identity-provider-id'] !== undefined) input.identityProviderId = argv['identity-provider-id'];
        if (argv['name'] !== undefined) input.name = argv['name'];
        if (argv['verification-email'] !== undefined) input.verificationEmail = argv['verification-email'];
        variables.input = input;
      }
      if (argv['trigger-email-verification'] !== undefined) variables.triggerEmailVerification = argv['trigger-email-verification'];
      const result = await request(organizationDomainCreate, variables);
      render(result.organizationDomainCreate, { json: argv.json });
    } catch (err) {
      handleError(err);
    }
  });

  // mutation: organizationDomainDelete
  yargs.command('delete <id>', 'Deletes a domain.', (yargs) => {
    yargs.positional('id', { type: 'string', describe: 'The identifier of the domain to delete.' });
    return yargs;
  }, async (argv) => {
    try {
      const variables = {};
      variables.id = argv.id;
      const result = await request(organizationDomainDelete, variables);
      render(result.organizationDomainDelete, { json: argv.json });
    } catch (err) {
      handleError(err);
    }
  });

  // mutation: organizationDomainUpdate
  yargs.command('update <id>', '[INTERNAL] Updates an organization domain settings.', (yargs) => {
    yargs.positional('id', { type: 'string', describe: 'The identifier of the domain to update.' });
    yargs.option('disable-organization-creation', { type: 'boolean', describe: 'Prevent users with this domain to create new workspaces. Only allowed to set ...' });
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
        if (argv['disable-organization-creation'] !== undefined) input.disableOrganizationCreation = argv['disable-organization-creation'];
        variables.input = input;
      }
      const result = await request(organizationDomainUpdate, variables);
      render(result.organizationDomainUpdate, { json: argv.json });
    } catch (err) {
      handleError(err);
    }
  });

  // mutation: organizationDomainVerify
  yargs.command('verify', '[INTERNAL] Verifies a domain to be added to an organization.', (yargs) => {
    yargs.option('organization-domain-id', { type: 'string', demandOption: true, describe: 'The identifier in UUID v4 format of the domain being verified.' });
    yargs.option('verification-code', { type: 'string', demandOption: true, describe: 'The verification code sent via email.' });
    yargs.option('input-json', { type: 'string', describe: 'Full input as JSON (or @file.json)' });
    return yargs;
  }, async (argv) => {
    try {
      const variables = {};
      if (argv['input-json']) {
        variables.input = parseJsonFlag(argv['input-json']);
      } else {
        const input = {};
        if (argv['organization-domain-id'] !== undefined) input.organizationDomainId = argv['organization-domain-id'];
        if (argv['verification-code'] !== undefined) input.verificationCode = argv['verification-code'];
        variables.input = input;
      }
      const result = await request(organizationDomainVerify, variables);
      render(result.organizationDomainVerify, { json: argv.json });
    } catch (err) {
      handleError(err);
    }
  });

  return yargs.demandCommand(1, 'Specify a subcommand').strict();
}

export function handler() {}
