import { camelToKebab } from './type-utils.js';

// Manual overrides for irregular names
const MANUAL_OVERRIDES = {
  // Queries
  viewer: { group: 'user', action: 'viewer' },
  archivedTeams: { group: 'team', action: 'archived' },
  archivedModelSync: { group: 'sync', action: 'archived-model' },
  applicationInfo: { group: 'application', action: 'info' },
  applicationInfoByIds: { group: 'application', action: 'info-by-ids' },
  applicationWithAuthorization: { group: 'application', action: 'with-authorization' },
  attachmentIssue: { group: 'attachment', action: 'issue' },
  attachmentSources: { group: 'attachment', action: 'sources' },
  availableUsers: { group: 'user', action: 'available' },
  authenticationSessions: { group: 'auth', action: 'sessions' },
  ssoUrlFromEmail: { group: 'auth', action: 'sso-url-from-email' },
  rateLimitStatus: { group: 'rate-limit', action: 'status' },
  pushSubscriptionTest: { group: 'push-subscription', action: 'test' },
  organizationDomainClaimRequest: { group: 'organization-domain', action: 'claim-request' },

  // Mutations
  createCsvExportReport: { group: 'export', action: 'create-csv-report' },
  createCsvExportReportForTeam: { group: 'export', action: 'create-csv-report-for-team' },
  createOrganizationFromOnboarding: { group: 'organization', action: 'create-from-onboarding' },
  eventCreate: { group: 'event', action: 'create' },
  fileUpload: { group: 'file', action: 'upload' },
  googleUserAccountAuth: { group: 'auth', action: 'google-user-account' },
  logoutAllOfIntegration: { group: 'auth', action: 'logout-all-of-integration' },
  logoutAllOfIntegrationForOrganization: { group: 'auth', action: 'logout-all-of-integration-for-org' },
  logoutClient: { group: 'auth', action: 'logout-client' },
  logoutOtherSessions: { group: 'auth', action: 'logout-other-sessions' },
  logoutSession: { group: 'auth', action: 'logout-session' },
  logout: { group: 'auth', action: 'logout' },
  imageUploadFromUrl: { group: 'image', action: 'upload-from-url' },
  importFileUpload: { group: 'import', action: 'file-upload' },
  issueImportCreateAsana: { group: 'issue-import', action: 'create-asana' },
  issueImportCreateClubhouse: { group: 'issue-import', action: 'create-clubhouse' },
  issueImportCreateGithub: { group: 'issue-import', action: 'create-github' },
  issueImportCreateJira: { group: 'issue-import', action: 'create-jira' },
  issueImportCreateCsvJira: { group: 'issue-import', action: 'create-csv-jira' },
  issueImportProcess: { group: 'issue-import', action: 'process' },
  issueImportUpdate: { group: 'issue-import', action: 'update' },
  issueImportDelete: { group: 'issue-import', action: 'delete' },
  joinOrganizationFromOnboarding: { group: 'organization', action: 'join-from-onboarding' },
  leaveOrganization: { group: 'organization', action: 'leave' },
};

// Build known resource prefixes from single-entity queries that take (id: String!)
function buildPrefixes(queries, mutations) {
  const prefixes = new Set();

  // From singular queries with an `id` arg
  for (const q of queries) {
    const hasIdArg = q.args.some(a => a.name === 'id' && a.required);
    const isConnection = q.typeName.endsWith('Connection');
    if (hasIdArg && !isConnection) {
      prefixes.add(q.name);
    }
  }

  // From mutations: extract prefix before Create/Update/Delete/Archive/Unarchive
  const actionSuffixes = [
    'Create', 'Update', 'Delete', 'Archive', 'Unarchive',
    'Close', 'Open', 'Reopen', 'Remove', 'Add', 'Transfer',
  ];
  for (const m of mutations) {
    for (const suffix of actionSuffixes) {
      if (m.name.endsWith(suffix) && m.name.length > suffix.length) {
        const prefix = m.name.slice(0, m.name.length - suffix.length);
        if (prefix.length >= 3) {
          prefixes.add(prefix);
        }
      }
    }
  }

  // Sort by length descending so longest prefix matches first
  return [...prefixes].sort((a, b) => b.length - a.length);
}

function findGroup(name, prefixes) {
  for (const prefix of prefixes) {
    if (name === prefix || name.startsWith(prefix)) {
      const remainder = name.slice(prefix.length);
      // Ensure the match is on a word boundary (next char is uppercase or end)
      if (remainder === '' || remainder[0] === remainder[0].toUpperCase()) {
        return {
          group: camelToKebab(prefix),
          remainder: remainder,
        };
      }
    }
  }
  return null;
}

function deriveAction(field, remainder, isQuery) {
  if (isQuery) {
    if (field.typeName.endsWith('Connection')) {
      if (remainder === '' || remainder === 's') return 'list';
      return camelToKebab(remainder) || 'list';
    }
    if (remainder === '' || remainder === 's') {
      const hasIdArg = field.args.some(a => a.name === 'id');
      if (hasIdArg) return 'get';
      return 'list';
    }
    return camelToKebab(remainder);
  }

  // Mutation action names
  const actionMap = {
    Create: 'create',
    Update: 'update',
    Delete: 'delete',
    Archive: 'archive',
    Unarchive: 'unarchive',
    Close: 'close',
    Open: 'open',
    Reopen: 'reopen',
    Remove: 'remove',
    Add: 'add',
    Transfer: 'transfer',
  };

  for (const [suffix, action] of Object.entries(actionMap)) {
    if (remainder === suffix) return action;
  }

  if (remainder === '') return field.name;
  return camelToKebab(remainder);
}

export function mapResources(ir) {
  const prefixes = buildPrefixes(ir.queries, ir.mutations);
  const groups = {};

  function addToGroup(groupName, command) {
    if (!groups[groupName]) {
      groups[groupName] = { name: groupName, commands: [] };
    }
    groups[groupName].commands.push(command);
  }

  // Process queries
  for (const q of ir.queries) {
    if (MANUAL_OVERRIDES[q.name]) {
      const { group, action } = MANUAL_OVERRIDES[q.name];
      addToGroup(group, { ...q, action, source: 'query' });
      continue;
    }

    const match = findGroup(q.name, prefixes);
    if (match) {
      const action = deriveAction(q, match.remainder, true);
      addToGroup(match.group, { ...q, action, source: 'query' });
    } else {
      // Try simple pluralization
      const singularized = q.name.endsWith('s') ? q.name.slice(0, -1) : null;
      if (singularized && prefixes.includes(singularized)) {
        addToGroup(camelToKebab(singularized), { ...q, action: 'list', source: 'query' });
      } else {
        addToGroup('_ungrouped', { ...q, action: camelToKebab(q.name), source: 'query' });
      }
    }
  }

  // Process mutations
  for (const m of ir.mutations) {
    if (MANUAL_OVERRIDES[m.name]) {
      const { group, action } = MANUAL_OVERRIDES[m.name];
      addToGroup(group, { ...m, action, source: 'mutation' });
      continue;
    }

    const match = findGroup(m.name, prefixes);
    if (match) {
      const action = deriveAction(m, match.remainder, false);
      addToGroup(match.group, { ...m, action, source: 'mutation' });
    } else {
      addToGroup('_ungrouped', { ...m, action: camelToKebab(m.name), source: 'mutation' });
    }
  }

  return groups;
}
