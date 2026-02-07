// AUTO-GENERATED — do not edit. Run `npm run generate` to regenerate.

export const administrableTeams = /* GraphQL */ `query administrableTeams($after: String, $before: String, $filter: TeamFilter, $first: Int, $includeArchived: Boolean, $last: Int, $orderBy: PaginationOrderBy) {
    administrableTeams(after: $after, before: $before, filter: $filter, first: $first, includeArchived: $includeArchived, last: $last, orderBy: $orderBy) {
      nodes {
        activeCycle { id name }
    aiThreadSummariesEnabled
    archivedAt
    autoArchivePeriod
    autoCloseChildIssues
    autoCloseParentIssues
    autoClosePeriod
    autoCloseStateId
    children { id name key }
    color
    createdAt
    currentProgress
    cycleCalenderUrl
    cycleCooldownTime
    cycleDuration
    cycleIssueAutoAssignCompleted
    cycleIssueAutoAssignStarted
    cycleLockToActive
    cycleStartDay
    cyclesEnabled
    defaultIssueEstimate
    defaultIssueState { id name }
    defaultProjectTemplate { id name }
    defaultTemplateForMembers { id name }
    defaultTemplateForMembersId
    defaultTemplateForNonMembers { id name }
    defaultTemplateForNonMembersId
    description
    displayName
    draftWorkflowState { id name }
    facets { id }
    groupIssueHistory
    icon
    id
    inheritIssueEstimation
    inheritWorkflowStatuses
    integrationsSettings { id }
    inviteHash
    issueCount
    issueEstimationAllowZero
    issueEstimationExtended
    issueEstimationType
    issueOrderingNoPriorityFirst
    issueSortOrderDefaultToBottom
    joinByDefault
    key
    markedAsDuplicateWorkflowState { id name }
    membership { id }
    mergeWorkflowState { id name }
    mergeableWorkflowState { id name }
    name
    organization { id name }
    parent { id name key }
    posts { id title }
    private
    progressHistory
    requirePriorityToLeaveTriage
    reviewWorkflowState { id name }
    scimGroupName
    scimManaged
    setIssueSortOrderOnStateChange
    slackIssueComments
    slackIssueStatuses
    slackNewIssue
    startWorkflowState { id name }
    timezone
    triageEnabled
    triageIssueState { id name }
    triageResponsibility { id }
    upcomingCycleCount
    updatedAt
      }
      pageInfo {
        hasNextPage
        endCursor
        hasPreviousPage
        startCursor
      }
    }
  }`;

export const agentActivities = /* GraphQL */ `query agentActivities($after: String, $before: String, $filter: AgentActivityFilter, $first: Int, $includeArchived: Boolean, $last: Int, $orderBy: PaginationOrderBy) {
    agentActivities(after: $after, before: $before, filter: $filter, first: $first, includeArchived: $includeArchived, last: $last, orderBy: $orderBy) {
      nodes {
        agentSession { id }
    archivedAt
    createdAt
    ephemeral
    id
    sourceComment { id }
    sourceMetadata
    updatedAt
    user { id name }
      }
      pageInfo {
        hasNextPage
        endCursor
        hasPreviousPage
        startCursor
      }
    }
  }`;

export const agentActivity = /* GraphQL */ `query agentActivity($id: String!) {
    agentActivity(id: $id) {
      agentSession { id }
    archivedAt
    createdAt
    ephemeral
    id
    sourceComment { id }
    sourceMetadata
    updatedAt
    user { id name }
    }
  }`;

export const agentSession = /* GraphQL */ `query agentSession($id: String!) {
    agentSession(id: $id) {
      appUser { id name }
    archivedAt
    comment { id }
    createdAt
    creator { id name }
    endedAt
    externalLink
    id
    issue { id title }
    sourceMetadata
    startedAt
    summary
    updatedAt
    }
  }`;

export const agentSessions = /* GraphQL */ `query agentSessions($after: String, $before: String, $first: Int, $includeArchived: Boolean, $last: Int, $orderBy: PaginationOrderBy) {
    agentSessions(after: $after, before: $before, first: $first, includeArchived: $includeArchived, last: $last, orderBy: $orderBy) {
      nodes {
        appUser { id name }
    archivedAt
    comment { id }
    createdAt
    creator { id name }
    endedAt
    externalLink
    id
    issue { id title }
    sourceMetadata
    startedAt
    summary
    updatedAt
      }
      pageInfo {
        hasNextPage
        endCursor
        hasPreviousPage
        startCursor
      }
    }
  }`;

export const apiKeys = /* GraphQL */ `query apiKeys($after: String, $before: String, $first: Int, $includeArchived: Boolean, $last: Int, $orderBy: PaginationOrderBy) {
    apiKeys(after: $after, before: $before, first: $first, includeArchived: $includeArchived, last: $last, orderBy: $orderBy) {
      nodes {
        archivedAt
    createdAt
    id
    label
    lastActiveAt
    organization { id name }
    requestedSyncGroups
    scope
    updatedAt
      }
      pageInfo {
        hasNextPage
        endCursor
        hasPreviousPage
        startCursor
      }
    }
  }`;

export const applicationInfo = /* GraphQL */ `query applicationInfo($clientId: String!) {
    applicationInfo(clientId: $clientId) {
      clientId
    description
    developer
    developerUrl
    id
    imageUrl
    name
    }
  }`;

export const applicationInfoByIds = /* GraphQL */ `query applicationInfoByIds($ids: [String!]!) {
    applicationInfoByIds(ids: $ids) {
      clientId
    description
    developer
    developerUrl
    id
    imageUrl
    name
    }
  }`;

export const applicationWithAuthorization = /* GraphQL */ `query applicationWithAuthorization($actor: String, $clientId: String!, $redirectUri: String, $scope: [String!]!) {
    applicationWithAuthorization(actor: $actor, clientId: $clientId, redirectUri: $redirectUri, scope: $scope) {
      appUserAuthentication { id }
    approvalErrorCode
    clientId
    createdByLinear
    description
    developer
    developerUrl
    id
    imageUrl
    isAuthorized
    name
    webhooksEnabled
    }
  }`;

export const archivedTeams = /* GraphQL */ `query archivedTeams {
    archivedTeams {
      activeCycle { id name }
    aiThreadSummariesEnabled
    archivedAt
    autoArchivePeriod
    autoCloseChildIssues
    autoCloseParentIssues
    autoClosePeriod
    autoCloseStateId
    children { id name key }
    color
    createdAt
    currentProgress
    cycleCalenderUrl
    cycleCooldownTime
    cycleDuration
    cycleIssueAutoAssignCompleted
    cycleIssueAutoAssignStarted
    cycleLockToActive
    cycleStartDay
    cyclesEnabled
    defaultIssueEstimate
    defaultIssueState { id name }
    defaultProjectTemplate { id name }
    defaultTemplateForMembers { id name }
    defaultTemplateForMembersId
    defaultTemplateForNonMembers { id name }
    defaultTemplateForNonMembersId
    description
    displayName
    draftWorkflowState { id name }
    facets { id }
    groupIssueHistory
    icon
    id
    inheritIssueEstimation
    inheritWorkflowStatuses
    integrationsSettings { id }
    inviteHash
    issueCount
    issueEstimationAllowZero
    issueEstimationExtended
    issueEstimationType
    issueOrderingNoPriorityFirst
    issueSortOrderDefaultToBottom
    joinByDefault
    key
    markedAsDuplicateWorkflowState { id name }
    membership { id }
    mergeWorkflowState { id name }
    mergeableWorkflowState { id name }
    name
    organization { id name }
    parent { id name key }
    posts { id title }
    private
    progressHistory
    requirePriorityToLeaveTriage
    reviewWorkflowState { id name }
    scimGroupName
    scimManaged
    setIssueSortOrderOnStateChange
    slackIssueComments
    slackIssueStatuses
    slackNewIssue
    startWorkflowState { id name }
    timezone
    triageEnabled
    triageIssueState { id name }
    triageResponsibility { id }
    upcomingCycleCount
    updatedAt
    }
  }`;

export const attachment = /* GraphQL */ `query attachment($id: String!) {
    attachment(id: $id) {
      archivedAt
    bodyData
    createdAt
    creator { id name }
    externalUserCreator { id name }
    groupBySource
    id
    issue { id title }
    metadata
    originalIssue { id title }
    source
    sourceType
    subtitle
    title
    updatedAt
    url
    }
  }`;

export const attachmentIssue = /* GraphQL */ `query attachmentIssue($id: String!) {
    attachmentIssue(id: $id) {
      activitySummary
    addedToCycleAt
    addedToProjectAt
    addedToTeamAt
    archivedAt
    asksExternalUserRequester { id name }
    asksRequester { id name }
    assignee { id name }
    autoArchivedAt
    autoClosedAt
    boardOrder
    botActor { id name }
    branchName
    canceledAt
    completedAt
    createdAt
    creator { id name }
    customerTicketCount
    cycle { id name }
    delegate { id name }
    description
    descriptionState
    documentContent { id }
    dueDate
    estimate
    externalUserCreator { id name }
    favorite { id title }
    id
    identifier
    labelIds
    lastAppliedTemplate { id name }
    number
    parent { id title }
    previousIdentifiers
    priority
    priorityLabel
    prioritySortOrder
    project { id name }
    projectMilestone { id name }
    reactionData
    reactions { id }
    recurringIssueTemplate { id name }
    slaBreachesAt
    slaHighRiskAt
    slaMediumRiskAt
    slaStartedAt
    slaType
    snoozedBy { id name }
    snoozedUntilAt
    sortOrder
    sourceComment { id }
    startedAt
    startedTriageAt
    state { id name }
    subIssueSortOrder
    suggestionsGeneratedAt
    syncedWith { id }
    team { id name key }
    title
    trashed
    triagedAt
    updatedAt
    url
    }
  }`;

export const attachmentSources = /* GraphQL */ `query attachmentSources($teamId: String) {
    attachmentSources(teamId: $teamId) {
      sources
    }
  }`;

export const attachments = /* GraphQL */ `query attachments($after: String, $before: String, $filter: AttachmentFilter, $first: Int, $includeArchived: Boolean, $last: Int, $orderBy: PaginationOrderBy) {
    attachments(after: $after, before: $before, filter: $filter, first: $first, includeArchived: $includeArchived, last: $last, orderBy: $orderBy) {
      nodes {
        archivedAt
    bodyData
    createdAt
    creator { id name }
    externalUserCreator { id name }
    groupBySource
    id
    issue { id title }
    metadata
    originalIssue { id title }
    source
    sourceType
    subtitle
    title
    updatedAt
    url
      }
      pageInfo {
        hasNextPage
        endCursor
        hasPreviousPage
        startCursor
      }
    }
  }`;

export const attachmentsForURL = /* GraphQL */ `query attachmentsForURL($after: String, $before: String, $first: Int, $includeArchived: Boolean, $last: Int, $orderBy: PaginationOrderBy, $url: String!) {
    attachmentsForURL(after: $after, before: $before, first: $first, includeArchived: $includeArchived, last: $last, orderBy: $orderBy, url: $url) {
      nodes {
        archivedAt
    bodyData
    createdAt
    creator { id name }
    externalUserCreator { id name }
    groupBySource
    id
    issue { id title }
    metadata
    originalIssue { id title }
    source
    sourceType
    subtitle
    title
    updatedAt
    url
      }
      pageInfo {
        hasNextPage
        endCursor
        hasPreviousPage
        startCursor
      }
    }
  }`;

export const auditEntries = /* GraphQL */ `query auditEntries($after: String, $before: String, $filter: AuditEntryFilter, $first: Int, $includeArchived: Boolean, $last: Int, $orderBy: PaginationOrderBy) {
    auditEntries(after: $after, before: $before, filter: $filter, first: $first, includeArchived: $includeArchived, last: $last, orderBy: $orderBy) {
      nodes {
        actor { id name }
    actorId
    archivedAt
    countryCode
    createdAt
    id
    ip
    metadata
    organization { id name }
    requestInformation
    type
    updatedAt
      }
      pageInfo {
        hasNextPage
        endCursor
        hasPreviousPage
        startCursor
      }
    }
  }`;

export const auditEntryTypes = /* GraphQL */ `query auditEntryTypes {
    auditEntryTypes {
      description
    type
    }
  }`;

export const authenticationSessions = /* GraphQL */ `query authenticationSessions {
    authenticationSessions {
      browserType
    client
    countryCodes
    createdAt
    id
    ip
    isCurrentSession
    lastActiveAt
    location
    locationCity
    locationCountry
    locationCountryCode
    locationRegionCode
    name
    operatingSystem
    service
    updatedAt
    userAgent
    }
  }`;

export const authorizedApplications = /* GraphQL */ `query authorizedApplications {
    authorizedApplications {
      appId
    clientId
    description
    developer
    developerUrl
    imageUrl
    name
    scope
    webhooksEnabled
    }
  }`;

export const availableUsers = /* GraphQL */ `query availableUsers {
    availableUsers {
      allowDomainAccess
    availableOrganizations { id name }
    email
    id
    lastUsedOrganizationId
    lockedOrganizations { id name }
    lockedUsers { id name }
    token
    users { id name }
    }
  }`;

export const comment = /* GraphQL */ `query comment($hash: String, $id: String, $issueId: String) {
    comment(hash: $hash, id: $id, issueId: $issueId) {
      agentSession { id }
    archivedAt
    body
    bodyData
    botActor { id name }
    createdAt
    documentContent { id }
    editedAt
    externalThread { id name }
    externalUser { id name }
    id
    initiativeUpdate { id }
    issue { id title }
    parent { id }
    post { id title }
    projectUpdate { id }
    quotedText
    reactionData
    reactions { id }
    resolvedAt
    resolvingComment { id }
    resolvingUser { id name }
    syncedWith { id }
    threadSummary
    updatedAt
    url
    user { id name }
    }
  }`;

export const comments = /* GraphQL */ `query comments($after: String, $before: String, $filter: CommentFilter, $first: Int, $includeArchived: Boolean, $last: Int, $orderBy: PaginationOrderBy) {
    comments(after: $after, before: $before, filter: $filter, first: $first, includeArchived: $includeArchived, last: $last, orderBy: $orderBy) {
      nodes {
        agentSession { id }
    archivedAt
    body
    bodyData
    botActor { id name }
    createdAt
    documentContent { id }
    editedAt
    externalThread { id name }
    externalUser { id name }
    id
    initiativeUpdate { id }
    issue { id title }
    parent { id }
    post { id title }
    projectUpdate { id }
    quotedText
    reactionData
    reactions { id }
    resolvedAt
    resolvingComment { id }
    resolvingUser { id name }
    syncedWith { id }
    threadSummary
    updatedAt
    url
    user { id name }
      }
      pageInfo {
        hasNextPage
        endCursor
        hasPreviousPage
        startCursor
      }
    }
  }`;

export const customView = /* GraphQL */ `query customView($id: String!) {
    customView(id: $id) {
      archivedAt
    color
    createdAt
    creator { id name }
    description
    facet { id }
    feedItemFilterData
    filterData
    filters
    icon
    id
    initiativeFilterData
    modelName
    name
    organization { id name }
    organizationViewPreferences { id }
    owner { id name }
    projectFilterData
    shared
    slugId
    team { id name key }
    updatedAt
    updatedBy { id name }
    userViewPreferences { id }
    viewPreferencesValues { id }
    }
  }`;

export const customViewDetailsSuggestion = /* GraphQL */ `query customViewDetailsSuggestion($filter: JSONObject!, $modelName: String) {
    customViewDetailsSuggestion(filter: $filter, modelName: $modelName) {
      description
    icon
    name
    }
  }`;

export const customViewHasSubscribers = /* GraphQL */ `query customViewHasSubscribers($id: String!) {
    customViewHasSubscribers(id: $id) {
      hasSubscribers
    }
  }`;

export const customViews = /* GraphQL */ `query customViews($after: String, $before: String, $filter: CustomViewFilter, $first: Int, $includeArchived: Boolean, $last: Int, $orderBy: PaginationOrderBy, $sort: [CustomViewSortInput!]) {
    customViews(after: $after, before: $before, filter: $filter, first: $first, includeArchived: $includeArchived, last: $last, orderBy: $orderBy, sort: $sort) {
      nodes {
        archivedAt
    color
    createdAt
    creator { id name }
    description
    facet { id }
    feedItemFilterData
    filterData
    filters
    icon
    id
    initiativeFilterData
    modelName
    name
    organization { id name }
    organizationViewPreferences { id }
    owner { id name }
    projectFilterData
    shared
    slugId
    team { id name key }
    updatedAt
    updatedBy { id name }
    userViewPreferences { id }
    viewPreferencesValues { id }
      }
      pageInfo {
        hasNextPage
        endCursor
        hasPreviousPage
        startCursor
      }
    }
  }`;

export const customer = /* GraphQL */ `query customer($id: String!) {
    customer(id: $id) {
      approximateNeedCount
    archivedAt
    createdAt
    domains
    externalIds
    id
    integration { id }
    logoUrl
    mainSourceId
    name
    owner { id name }
    revenue
    size
    slackChannelId
    slugId
    status { id name }
    tier { id name }
    updatedAt
    }
  }`;

export const customerNeed = /* GraphQL */ `query customerNeed($hash: String, $id: String) {
    customerNeed(hash: $hash, id: $id) {
      archivedAt
    attachment { id title }
    body
    bodyData
    comment { id }
    createdAt
    creator { id name }
    customer { id name }
    id
    issue { id title }
    originalIssue { id title }
    priority
    project { id name }
    projectAttachment { id title }
    updatedAt
    url
    }
  }`;

export const customerNeeds = /* GraphQL */ `query customerNeeds($after: String, $before: String, $filter: CustomerNeedFilter, $first: Int, $includeArchived: Boolean, $last: Int, $orderBy: PaginationOrderBy) {
    customerNeeds(after: $after, before: $before, filter: $filter, first: $first, includeArchived: $includeArchived, last: $last, orderBy: $orderBy) {
      nodes {
        archivedAt
    attachment { id title }
    body
    bodyData
    comment { id }
    createdAt
    creator { id name }
    customer { id name }
    id
    issue { id title }
    originalIssue { id title }
    priority
    project { id name }
    projectAttachment { id title }
    updatedAt
    url
      }
      pageInfo {
        hasNextPage
        endCursor
        hasPreviousPage
        startCursor
      }
    }
  }`;

export const customerStatus = /* GraphQL */ `query customerStatus($id: String!) {
    customerStatus(id: $id) {
      archivedAt
    color
    createdAt
    description
    displayName
    id
    name
    position
    updatedAt
    }
  }`;

export const customerStatuses = /* GraphQL */ `query customerStatuses($after: String, $before: String, $first: Int, $includeArchived: Boolean, $last: Int, $orderBy: PaginationOrderBy) {
    customerStatuses(after: $after, before: $before, first: $first, includeArchived: $includeArchived, last: $last, orderBy: $orderBy) {
      nodes {
        archivedAt
    color
    createdAt
    description
    displayName
    id
    name
    position
    updatedAt
      }
      pageInfo {
        hasNextPage
        endCursor
        hasPreviousPage
        startCursor
      }
    }
  }`;

export const customerTier = /* GraphQL */ `query customerTier($id: String!) {
    customerTier(id: $id) {
      archivedAt
    color
    createdAt
    description
    displayName
    id
    name
    position
    updatedAt
    }
  }`;

export const customerTiers = /* GraphQL */ `query customerTiers($after: String, $before: String, $first: Int, $includeArchived: Boolean, $last: Int, $orderBy: PaginationOrderBy) {
    customerTiers(after: $after, before: $before, first: $first, includeArchived: $includeArchived, last: $last, orderBy: $orderBy) {
      nodes {
        archivedAt
    color
    createdAt
    description
    displayName
    id
    name
    position
    updatedAt
      }
      pageInfo {
        hasNextPage
        endCursor
        hasPreviousPage
        startCursor
      }
    }
  }`;

export const customers = /* GraphQL */ `query customers($after: String, $before: String, $filter: CustomerFilter, $first: Int, $includeArchived: Boolean, $last: Int, $orderBy: PaginationOrderBy, $sorts: [CustomerSortInput!]) {
    customers(after: $after, before: $before, filter: $filter, first: $first, includeArchived: $includeArchived, last: $last, orderBy: $orderBy, sorts: $sorts) {
      nodes {
        approximateNeedCount
    archivedAt
    createdAt
    domains
    externalIds
    id
    integration { id }
    logoUrl
    mainSourceId
    name
    owner { id name }
    revenue
    size
    slackChannelId
    slugId
    status { id name }
    tier { id name }
    updatedAt
      }
      pageInfo {
        hasNextPage
        endCursor
        hasPreviousPage
        startCursor
      }
    }
  }`;

export const cycle = /* GraphQL */ `query cycle($id: String!) {
    cycle(id: $id) {
      archivedAt
    autoArchivedAt
    completedAt
    completedIssueCountHistory
    completedScopeHistory
    createdAt
    currentProgress
    description
    endsAt
    id
    inProgressScopeHistory
    inheritedFrom { id name }
    isActive
    isFuture
    isNext
    isPast
    isPrevious
    issueCountHistory
    name
    number
    progress
    progressHistory
    scopeHistory
    startsAt
    team { id name key }
    updatedAt
    }
  }`;

export const cycles = /* GraphQL */ `query cycles($after: String, $before: String, $filter: CycleFilter, $first: Int, $includeArchived: Boolean, $last: Int, $orderBy: PaginationOrderBy) {
    cycles(after: $after, before: $before, filter: $filter, first: $first, includeArchived: $includeArchived, last: $last, orderBy: $orderBy) {
      nodes {
        archivedAt
    autoArchivedAt
    completedAt
    completedIssueCountHistory
    completedScopeHistory
    createdAt
    currentProgress
    description
    endsAt
    id
    inProgressScopeHistory
    inheritedFrom { id name }
    isActive
    isFuture
    isNext
    isPast
    isPrevious
    issueCountHistory
    name
    number
    progress
    progressHistory
    scopeHistory
    startsAt
    team { id name key }
    updatedAt
      }
      pageInfo {
        hasNextPage
        endCursor
        hasPreviousPage
        startCursor
      }
    }
  }`;

export const document = /* GraphQL */ `query document($id: String!) {
    document(id: $id) {
      archivedAt
    color
    content
    contentState
    createdAt
    creator { id name }
    documentContentId
    hiddenAt
    icon
    id
    initiative { id name }
    lastAppliedTemplate { id name }
    project { id name }
    slugId
    sortOrder
    team { id name key }
    title
    trashed
    updatedAt
    updatedBy { id name }
    url
    }
  }`;

export const documentContentHistory = /* GraphQL */ `query documentContentHistory($id: String!) {
    documentContentHistory(id: $id) {
      history { id }
    success
    }
  }`;

export const documents = /* GraphQL */ `query documents($after: String, $before: String, $filter: DocumentFilter, $first: Int, $includeArchived: Boolean, $last: Int, $orderBy: PaginationOrderBy) {
    documents(after: $after, before: $before, filter: $filter, first: $first, includeArchived: $includeArchived, last: $last, orderBy: $orderBy) {
      nodes {
        archivedAt
    color
    content
    contentState
    createdAt
    creator { id name }
    documentContentId
    hiddenAt
    icon
    id
    initiative { id name }
    lastAppliedTemplate { id name }
    project { id name }
    slugId
    sortOrder
    team { id name key }
    title
    trashed
    updatedAt
    updatedBy { id name }
    url
      }
      pageInfo {
        hasNextPage
        endCursor
        hasPreviousPage
        startCursor
      }
    }
  }`;

export const emailIntakeAddress = /* GraphQL */ `query emailIntakeAddress($id: String!) {
    emailIntakeAddress(id: $id) {
      address
    archivedAt
    createdAt
    creator { id name }
    customerRequestsEnabled
    enabled
    forwardingEmailAddress
    id
    issueCanceledAutoReply
    issueCanceledAutoReplyEnabled
    issueCompletedAutoReply
    issueCompletedAutoReplyEnabled
    issueCreatedAutoReply
    organization { id name }
    repliesEnabled
    senderName
    sesDomainIdentity { id }
    team { id name key }
    template { id name }
    updatedAt
    useUserNamesInReplies
    }
  }`;

export const emoji = /* GraphQL */ `query emoji($id: String!) {
    emoji(id: $id) {
      archivedAt
    createdAt
    creator { id name }
    id
    name
    organization { id name }
    source
    updatedAt
    url
    }
  }`;

export const emojis = /* GraphQL */ `query emojis($after: String, $before: String, $first: Int, $includeArchived: Boolean, $last: Int, $orderBy: PaginationOrderBy) {
    emojis(after: $after, before: $before, first: $first, includeArchived: $includeArchived, last: $last, orderBy: $orderBy) {
      nodes {
        archivedAt
    createdAt
    creator { id name }
    id
    name
    organization { id name }
    source
    updatedAt
    url
      }
      pageInfo {
        hasNextPage
        endCursor
        hasPreviousPage
        startCursor
      }
    }
  }`;

export const entityExternalLink = /* GraphQL */ `query entityExternalLink($id: String!) {
    entityExternalLink(id: $id) {
      archivedAt
    createdAt
    creator { id name }
    id
    initiative { id name }
    label
    sortOrder
    updatedAt
    url
    }
  }`;

export const externalUser = /* GraphQL */ `query externalUser($id: String!) {
    externalUser(id: $id) {
      archivedAt
    avatarUrl
    createdAt
    displayName
    email
    id
    lastSeen
    name
    organization { id name }
    updatedAt
    }
  }`;

export const externalUsers = /* GraphQL */ `query externalUsers($after: String, $before: String, $first: Int, $includeArchived: Boolean, $last: Int, $orderBy: PaginationOrderBy) {
    externalUsers(after: $after, before: $before, first: $first, includeArchived: $includeArchived, last: $last, orderBy: $orderBy) {
      nodes {
        archivedAt
    avatarUrl
    createdAt
    displayName
    email
    id
    lastSeen
    name
    organization { id name }
    updatedAt
      }
      pageInfo {
        hasNextPage
        endCursor
        hasPreviousPage
        startCursor
      }
    }
  }`;

export const failuresForOauthWebhooks = /* GraphQL */ `query failuresForOauthWebhooks($oauthClientId: String!) {
    failuresForOauthWebhooks(oauthClientId: $oauthClientId) {
      createdAt
    executionId
    httpStatus
    id
    responseOrError
    url
    webhook { id }
    }
  }`;

export const favorite = /* GraphQL */ `query favorite($id: String!) {
    favorite(id: $id) {
      archivedAt
    color
    createdAt
    customView { id name }
    customer { id name }
    cycle { id name }
    dashboard { id name }
    detail
    document { id title }
    facet { id }
    folderName
    icon
    id
    initiative { id name }
    issue { id title }
    label { id name }
    owner { id name }
    parent { id title }
    predefinedViewTeam { id name key }
    predefinedViewType
    project { id name }
    projectLabel { id name }
    projectTeam { id name key }
    pullRequest { id title }
    sortOrder
    title
    type
    updatedAt
    url
    user { id name }
    }
  }`;

export const favorites = /* GraphQL */ `query favorites($after: String, $before: String, $first: Int, $includeArchived: Boolean, $last: Int, $orderBy: PaginationOrderBy) {
    favorites(after: $after, before: $before, first: $first, includeArchived: $includeArchived, last: $last, orderBy: $orderBy) {
      nodes {
        archivedAt
    color
    createdAt
    customView { id name }
    customer { id name }
    cycle { id name }
    dashboard { id name }
    detail
    document { id title }
    facet { id }
    folderName
    icon
    id
    initiative { id name }
    issue { id title }
    label { id name }
    owner { id name }
    parent { id title }
    predefinedViewTeam { id name key }
    predefinedViewType
    project { id name }
    projectLabel { id name }
    projectTeam { id name key }
    pullRequest { id title }
    sortOrder
    title
    type
    updatedAt
    url
    user { id name }
      }
      pageInfo {
        hasNextPage
        endCursor
        hasPreviousPage
        startCursor
      }
    }
  }`;

export const fetchData = /* GraphQL */ `query fetchData($query: String!) {
    fetchData(query: $query) {
      data
    filters
    query
    success
    }
  }`;

export const initiative = /* GraphQL */ `query initiative($id: String!) {
    initiative(id: $id) {
      archivedAt
    color
    completedAt
    content
    createdAt
    creator { id name }
    description
    documentContent { id }
    facets { id }
    healthUpdatedAt
    icon
    id
    integrationsSettings { id }
    lastUpdate { id }
    name
    organization { id name }
    owner { id name }
    parentInitiative { id name }
    slugId
    sortOrder
    startedAt
    targetDate
    trashed
    updateReminderFrequency
    updateReminderFrequencyInWeeks
    updateRemindersHour
    updatedAt
    url
    }
  }`;

export const initiativeRelation = /* GraphQL */ `query initiativeRelation($id: String!) {
    initiativeRelation(id: $id) {
      anchorType
    archivedAt
    createdAt
    id
    project { id name }
    projectMilestone { id name }
    relatedAnchorType
    relatedProject { id name }
    relatedProjectMilestone { id name }
    type
    updatedAt
    user { id name }
    }
  }`;

export const initiativeRelations = /* GraphQL */ `query initiativeRelations($after: String, $before: String, $first: Int, $includeArchived: Boolean, $last: Int, $orderBy: PaginationOrderBy) {
    initiativeRelations(after: $after, before: $before, first: $first, includeArchived: $includeArchived, last: $last, orderBy: $orderBy) {
      nodes {
        archivedAt
    createdAt
    id
    initiative { id name }
    relatedInitiative { id name }
    sortOrder
    updatedAt
    user { id name }
      }
      pageInfo {
        hasNextPage
        endCursor
        hasPreviousPage
        startCursor
      }
    }
  }`;

export const initiativeToProject = /* GraphQL */ `query initiativeToProject($id: String!) {
    initiativeToProject(id: $id) {
      archivedAt
    createdAt
    id
    initiative { id name }
    project { id name }
    sortOrder
    updatedAt
    }
  }`;

export const initiativeToProjects = /* GraphQL */ `query initiativeToProjects($after: String, $before: String, $first: Int, $includeArchived: Boolean, $last: Int, $orderBy: PaginationOrderBy) {
    initiativeToProjects(after: $after, before: $before, first: $first, includeArchived: $includeArchived, last: $last, orderBy: $orderBy) {
      nodes {
        archivedAt
    createdAt
    id
    initiative { id name }
    project { id name }
    sortOrder
    updatedAt
      }
      pageInfo {
        hasNextPage
        endCursor
        hasPreviousPage
        startCursor
      }
    }
  }`;

export const initiativeUpdate = /* GraphQL */ `query initiativeUpdate($id: String!) {
    initiativeUpdate(id: $id) {
      archivedAt
    body
    bodyData
    createdAt
    diff
    diffMarkdown
    editedAt
    id
    infoSnapshot
    initiative { id name }
    isDiffHidden
    isStale
    reactionData
    reactions { id }
    slugId
    updatedAt
    url
    user { id name }
    }
  }`;

export const initiativeUpdates = /* GraphQL */ `query initiativeUpdates($after: String, $before: String, $filter: InitiativeUpdateFilter, $first: Int, $includeArchived: Boolean, $last: Int, $orderBy: PaginationOrderBy) {
    initiativeUpdates(after: $after, before: $before, filter: $filter, first: $first, includeArchived: $includeArchived, last: $last, orderBy: $orderBy) {
      nodes {
        archivedAt
    body
    bodyData
    createdAt
    diff
    diffMarkdown
    editedAt
    id
    infoSnapshot
    initiative { id name }
    isDiffHidden
    isStale
    reactionData
    reactions { id }
    slugId
    updatedAt
    url
    user { id name }
      }
      pageInfo {
        hasNextPage
        endCursor
        hasPreviousPage
        startCursor
      }
    }
  }`;

export const initiatives = /* GraphQL */ `query initiatives($after: String, $before: String, $filter: InitiativeFilter, $first: Int, $includeArchived: Boolean, $last: Int, $orderBy: PaginationOrderBy, $sort: [InitiativeSortInput!]) {
    initiatives(after: $after, before: $before, filter: $filter, first: $first, includeArchived: $includeArchived, last: $last, orderBy: $orderBy, sort: $sort) {
      nodes {
        archivedAt
    color
    completedAt
    content
    createdAt
    creator { id name }
    description
    documentContent { id }
    facets { id }
    healthUpdatedAt
    icon
    id
    integrationsSettings { id }
    lastUpdate { id }
    name
    organization { id name }
    owner { id name }
    parentInitiative { id name }
    slugId
    sortOrder
    startedAt
    targetDate
    trashed
    updateReminderFrequency
    updateReminderFrequencyInWeeks
    updateRemindersHour
    updatedAt
    url
      }
      pageInfo {
        hasNextPage
        endCursor
        hasPreviousPage
        startCursor
      }
    }
  }`;

export const integration = /* GraphQL */ `query integration($id: String!) {
    integration(id: $id) {
      archivedAt
    createdAt
    creator { id name }
    id
    organization { id name }
    service
    team { id name key }
    updatedAt
    }
  }`;

export const integrationHasScopes = /* GraphQL */ `query integrationHasScopes($integrationId: String!, $scopes: [String!]!) {
    integrationHasScopes(integrationId: $integrationId, scopes: $scopes) {
      hasAllScopes
    missingScopes
    }
  }`;

export const integrationTemplate = /* GraphQL */ `query integrationTemplate($id: String!) {
    integrationTemplate(id: $id) {
      archivedAt
    createdAt
    foreignEntityId
    id
    integration { id }
    template { id name }
    updatedAt
    }
  }`;

export const integrationTemplates = /* GraphQL */ `query integrationTemplates($after: String, $before: String, $first: Int, $includeArchived: Boolean, $last: Int, $orderBy: PaginationOrderBy) {
    integrationTemplates(after: $after, before: $before, first: $first, includeArchived: $includeArchived, last: $last, orderBy: $orderBy) {
      nodes {
        archivedAt
    createdAt
    foreignEntityId
    id
    integration { id }
    template { id name }
    updatedAt
      }
      pageInfo {
        hasNextPage
        endCursor
        hasPreviousPage
        startCursor
      }
    }
  }`;

export const integrations = /* GraphQL */ `query integrations($after: String, $before: String, $first: Int, $includeArchived: Boolean, $last: Int, $orderBy: PaginationOrderBy) {
    integrations(after: $after, before: $before, first: $first, includeArchived: $includeArchived, last: $last, orderBy: $orderBy) {
      nodes {
        archivedAt
    createdAt
    creator { id name }
    id
    organization { id name }
    service
    team { id name key }
    updatedAt
      }
      pageInfo {
        hasNextPage
        endCursor
        hasPreviousPage
        startCursor
      }
    }
  }`;

export const integrationsSettings = /* GraphQL */ `query integrationsSettings($id: String!) {
    integrationsSettings(id: $id) {
      archivedAt
    createdAt
    id
    initiative { id name }
    project { id name }
    slackInitiativeUpdateCreated
    slackIssueAddedToTriage
    slackIssueAddedToView
    slackIssueCreated
    slackIssueNewComment
    slackIssueSlaBreached
    slackIssueSlaHighRisk
    slackIssueStatusChangedAll
    slackIssueStatusChangedDone
    slackProjectUpdateCreated
    slackProjectUpdateCreatedToTeam
    slackProjectUpdateCreatedToWorkspace
    team { id name key }
    updatedAt
    }
  }`;

export const issue = /* GraphQL */ `query issue($id: String!) {
    issue(id: $id) {
      activitySummary
    addedToCycleAt
    addedToProjectAt
    addedToTeamAt
    archivedAt
    asksExternalUserRequester { id name }
    asksRequester { id name }
    assignee { id name }
    autoArchivedAt
    autoClosedAt
    boardOrder
    botActor { id name }
    branchName
    canceledAt
    completedAt
    createdAt
    creator { id name }
    customerTicketCount
    cycle { id name }
    delegate { id name }
    description
    descriptionState
    documentContent { id }
    dueDate
    estimate
    externalUserCreator { id name }
    favorite { id title }
    id
    identifier
    labelIds
    lastAppliedTemplate { id name }
    number
    parent { id title }
    previousIdentifiers
    priority
    priorityLabel
    prioritySortOrder
    project { id name }
    projectMilestone { id name }
    reactionData
    reactions { id }
    recurringIssueTemplate { id name }
    slaBreachesAt
    slaHighRiskAt
    slaMediumRiskAt
    slaStartedAt
    slaType
    snoozedBy { id name }
    snoozedUntilAt
    sortOrder
    sourceComment { id }
    startedAt
    startedTriageAt
    state { id name }
    subIssueSortOrder
    suggestionsGeneratedAt
    syncedWith { id }
    team { id name key }
    title
    trashed
    triagedAt
    updatedAt
    url
    }
  }`;

export const issueFigmaFileKeySearch = /* GraphQL */ `query issueFigmaFileKeySearch($after: String, $before: String, $fileKey: String!, $first: Int, $includeArchived: Boolean, $last: Int, $orderBy: PaginationOrderBy) {
    issueFigmaFileKeySearch(after: $after, before: $before, fileKey: $fileKey, first: $first, includeArchived: $includeArchived, last: $last, orderBy: $orderBy) {
      nodes {
        activitySummary
    addedToCycleAt
    addedToProjectAt
    addedToTeamAt
    archivedAt
    asksExternalUserRequester { id name }
    asksRequester { id name }
    assignee { id name }
    autoArchivedAt
    autoClosedAt
    boardOrder
    botActor { id name }
    branchName
    canceledAt
    completedAt
    createdAt
    creator { id name }
    customerTicketCount
    cycle { id name }
    delegate { id name }
    description
    descriptionState
    documentContent { id }
    dueDate
    estimate
    externalUserCreator { id name }
    favorite { id title }
    id
    identifier
    labelIds
    lastAppliedTemplate { id name }
    number
    parent { id title }
    previousIdentifiers
    priority
    priorityLabel
    prioritySortOrder
    project { id name }
    projectMilestone { id name }
    reactionData
    reactions { id }
    recurringIssueTemplate { id name }
    slaBreachesAt
    slaHighRiskAt
    slaMediumRiskAt
    slaStartedAt
    slaType
    snoozedBy { id name }
    snoozedUntilAt
    sortOrder
    sourceComment { id }
    startedAt
    startedTriageAt
    state { id name }
    subIssueSortOrder
    suggestionsGeneratedAt
    syncedWith { id }
    team { id name key }
    title
    trashed
    triagedAt
    updatedAt
    url
      }
      pageInfo {
        hasNextPage
        endCursor
        hasPreviousPage
        startCursor
      }
    }
  }`;

export const issueFilterSuggestion = /* GraphQL */ `query issueFilterSuggestion($projectId: String, $prompt: String!) {
    issueFilterSuggestion(projectId: $projectId, prompt: $prompt) {
      filter
    logId
    }
  }`;

export const issueImportCheckCSV = /* GraphQL */ `query issueImportCheckCSV($csvUrl: String!, $service: String!) {
    issueImportCheckCSV(csvUrl: $csvUrl, service: $service) {
      success
    }
  }`;

export const issueImportCheckSync = /* GraphQL */ `query issueImportCheckSync($issueImportId: String!) {
    issueImportCheckSync(issueImportId: $issueImportId) {
      canSync
    error
    }
  }`;

export const issueImportJqlCheck = /* GraphQL */ `query issueImportJqlCheck($jiraEmail: String!, $jiraHostname: String!, $jiraProject: String!, $jiraToken: String!, $jql: String!) {
    issueImportJqlCheck(jiraEmail: $jiraEmail, jiraHostname: $jiraHostname, jiraProject: $jiraProject, jiraToken: $jiraToken, jql: $jql) {
      count
    error
    success
    }
  }`;

export const issueLabel = /* GraphQL */ `query issueLabel($id: String!) {
    issueLabel(id: $id) {
      archivedAt
    color
    createdAt
    creator { id name }
    description
    id
    inheritedFrom { id name }
    isGroup
    lastAppliedAt
    name
    organization { id name }
    parent { id name }
    team { id name key }
    updatedAt
    }
  }`;

export const issueLabels = /* GraphQL */ `query issueLabels($after: String, $before: String, $filter: IssueLabelFilter, $first: Int, $includeArchived: Boolean, $last: Int, $orderBy: PaginationOrderBy) {
    issueLabels(after: $after, before: $before, filter: $filter, first: $first, includeArchived: $includeArchived, last: $last, orderBy: $orderBy) {
      nodes {
        archivedAt
    color
    createdAt
    creator { id name }
    description
    id
    inheritedFrom { id name }
    isGroup
    lastAppliedAt
    name
    organization { id name }
    parent { id name }
    team { id name key }
    updatedAt
      }
      pageInfo {
        hasNextPage
        endCursor
        hasPreviousPage
        startCursor
      }
    }
  }`;

export const issuePriorityValues = /* GraphQL */ `query issuePriorityValues {
    issuePriorityValues {
      label
    priority
    }
  }`;

export const issueRelation = /* GraphQL */ `query issueRelation($id: String!) {
    issueRelation(id: $id) {
      archivedAt
    createdAt
    id
    issue { id title }
    relatedIssue { id title }
    type
    updatedAt
    }
  }`;

export const issueRelations = /* GraphQL */ `query issueRelations($after: String, $before: String, $first: Int, $includeArchived: Boolean, $last: Int, $orderBy: PaginationOrderBy) {
    issueRelations(after: $after, before: $before, first: $first, includeArchived: $includeArchived, last: $last, orderBy: $orderBy) {
      nodes {
        archivedAt
    createdAt
    id
    issue { id title }
    relatedIssue { id title }
    type
    updatedAt
      }
      pageInfo {
        hasNextPage
        endCursor
        hasPreviousPage
        startCursor
      }
    }
  }`;

export const issueSearch = /* GraphQL */ `query issueSearch($after: String, $before: String, $filter: IssueFilter, $first: Int, $includeArchived: Boolean, $last: Int, $orderBy: PaginationOrderBy, $query: String) {
    issueSearch(after: $after, before: $before, filter: $filter, first: $first, includeArchived: $includeArchived, last: $last, orderBy: $orderBy, query: $query) {
      nodes {
        activitySummary
    addedToCycleAt
    addedToProjectAt
    addedToTeamAt
    archivedAt
    asksExternalUserRequester { id name }
    asksRequester { id name }
    assignee { id name }
    autoArchivedAt
    autoClosedAt
    boardOrder
    botActor { id name }
    branchName
    canceledAt
    completedAt
    createdAt
    creator { id name }
    customerTicketCount
    cycle { id name }
    delegate { id name }
    description
    descriptionState
    documentContent { id }
    dueDate
    estimate
    externalUserCreator { id name }
    favorite { id title }
    id
    identifier
    labelIds
    lastAppliedTemplate { id name }
    number
    parent { id title }
    previousIdentifiers
    priority
    priorityLabel
    prioritySortOrder
    project { id name }
    projectMilestone { id name }
    reactionData
    reactions { id }
    recurringIssueTemplate { id name }
    slaBreachesAt
    slaHighRiskAt
    slaMediumRiskAt
    slaStartedAt
    slaType
    snoozedBy { id name }
    snoozedUntilAt
    sortOrder
    sourceComment { id }
    startedAt
    startedTriageAt
    state { id name }
    subIssueSortOrder
    suggestionsGeneratedAt
    syncedWith { id }
    team { id name key }
    title
    trashed
    triagedAt
    updatedAt
    url
      }
      pageInfo {
        hasNextPage
        endCursor
        hasPreviousPage
        startCursor
      }
    }
  }`;

export const issueTitleSuggestionFromCustomerRequest = /* GraphQL */ `query issueTitleSuggestionFromCustomerRequest($request: String!) {
    issueTitleSuggestionFromCustomerRequest(request: $request) {
      lastSyncId
    logId
    title
    }
  }`;

export const issueVcsBranchSearch = /* GraphQL */ `query issueVcsBranchSearch($branchName: String!) {
    issueVcsBranchSearch(branchName: $branchName) {
      activitySummary
    addedToCycleAt
    addedToProjectAt
    addedToTeamAt
    archivedAt
    asksExternalUserRequester { id name }
    asksRequester { id name }
    assignee { id name }
    autoArchivedAt
    autoClosedAt
    boardOrder
    botActor { id name }
    branchName
    canceledAt
    completedAt
    createdAt
    creator { id name }
    customerTicketCount
    cycle { id name }
    delegate { id name }
    description
    descriptionState
    documentContent { id }
    dueDate
    estimate
    externalUserCreator { id name }
    favorite { id title }
    id
    identifier
    labelIds
    lastAppliedTemplate { id name }
    number
    parent { id title }
    previousIdentifiers
    priority
    priorityLabel
    prioritySortOrder
    project { id name }
    projectMilestone { id name }
    reactionData
    reactions { id }
    recurringIssueTemplate { id name }
    slaBreachesAt
    slaHighRiskAt
    slaMediumRiskAt
    slaStartedAt
    slaType
    snoozedBy { id name }
    snoozedUntilAt
    sortOrder
    sourceComment { id }
    startedAt
    startedTriageAt
    state { id name }
    subIssueSortOrder
    suggestionsGeneratedAt
    syncedWith { id }
    team { id name key }
    title
    trashed
    triagedAt
    updatedAt
    url
    }
  }`;

export const issues = /* GraphQL */ `query issues($after: String, $before: String, $filter: IssueFilter, $first: Int, $includeArchived: Boolean, $last: Int, $orderBy: PaginationOrderBy, $sort: [IssueSortInput!]) {
    issues(after: $after, before: $before, filter: $filter, first: $first, includeArchived: $includeArchived, last: $last, orderBy: $orderBy, sort: $sort) {
      nodes {
        activitySummary
    addedToCycleAt
    addedToProjectAt
    addedToTeamAt
    archivedAt
    asksExternalUserRequester { id name }
    asksRequester { id name }
    assignee { id name }
    autoArchivedAt
    autoClosedAt
    boardOrder
    botActor { id name }
    branchName
    canceledAt
    completedAt
    createdAt
    creator { id name }
    customerTicketCount
    cycle { id name }
    delegate { id name }
    description
    descriptionState
    documentContent { id }
    dueDate
    estimate
    externalUserCreator { id name }
    favorite { id title }
    id
    identifier
    labelIds
    lastAppliedTemplate { id name }
    number
    parent { id title }
    previousIdentifiers
    priority
    priorityLabel
    prioritySortOrder
    project { id name }
    projectMilestone { id name }
    reactionData
    reactions { id }
    recurringIssueTemplate { id name }
    slaBreachesAt
    slaHighRiskAt
    slaMediumRiskAt
    slaStartedAt
    slaType
    snoozedBy { id name }
    snoozedUntilAt
    sortOrder
    sourceComment { id }
    startedAt
    startedTriageAt
    state { id name }
    subIssueSortOrder
    suggestionsGeneratedAt
    syncedWith { id }
    team { id name key }
    title
    trashed
    triagedAt
    updatedAt
    url
      }
      pageInfo {
        hasNextPage
        endCursor
        hasPreviousPage
        startCursor
      }
    }
  }`;

export const notification = /* GraphQL */ `query notification($id: String!) {
    notification(id: $id) 
  }`;

export const notificationSubscription = /* GraphQL */ `query notificationSubscription($id: String!) {
    notificationSubscription(id: $id) 
  }`;

export const notificationSubscriptions = /* GraphQL */ `query notificationSubscriptions($after: String, $before: String, $first: Int, $includeArchived: Boolean, $last: Int, $orderBy: PaginationOrderBy) {
    notificationSubscriptions(after: $after, before: $before, first: $first, includeArchived: $includeArchived, last: $last, orderBy: $orderBy) {
      nodes {
        id
      }
      pageInfo {
        hasNextPage
        endCursor
        hasPreviousPage
        startCursor
      }
    }
  }`;

export const notifications = /* GraphQL */ `query notifications($after: String, $before: String, $filter: NotificationFilter, $first: Int, $includeArchived: Boolean, $last: Int, $orderBy: PaginationOrderBy) {
    notifications(after: $after, before: $before, filter: $filter, first: $first, includeArchived: $includeArchived, last: $last, orderBy: $orderBy) {
      nodes {
        id
      }
      pageInfo {
        hasNextPage
        endCursor
        hasPreviousPage
        startCursor
      }
    }
  }`;

export const notificationsUnreadCount = /* GraphQL */ `query notificationsUnreadCount {
    notificationsUnreadCount 
  }`;

export const organization = /* GraphQL */ `query organization {
    organization {
      aiAddonEnabled
    allowMembersToInvite
    allowedAuthServices
    allowedFileUploadContentTypes
    archivedAt
    createdAt
    createdIssueCount
    customerCount
    customersConfiguration
    customersEnabled
    deletionRequestedAt
    facets { id }
    feedEnabled
    fiscalYearStartMonth
    gitBranchFormat
    gitLinkbackMessagesEnabled
    gitPublicLinkbackMessagesEnabled
    id
    initiativeUpdateReminderFrequencyInWeeks
    initiativeUpdateRemindersHour
    ipRestrictions { id }
    logoUrl
    name
    periodUploadVolume
    previousUrlKeys
    projectStatuses { id name }
    projectUpdateReminderFrequencyInWeeks
    projectUpdateRemindersHour
    restrictLabelManagementToAdmins
    restrictTeamCreationToAdmins
    roadmapEnabled
    samlEnabled
    samlSettings
    scimEnabled
    scimSettings
    subscription { id }
    themeSettings
    trialEndsAt
    updatedAt
    urlKey
    userCount
    workingDays
    }
  }`;

export const organizationDomainClaimRequest = /* GraphQL */ `query organizationDomainClaimRequest($id: String!) {
    organizationDomainClaimRequest(id: $id) {
      verificationString
    }
  }`;

export const organizationExists = /* GraphQL */ `query organizationExists($urlKey: String!) {
    organizationExists(urlKey: $urlKey) {
      exists
    success
    }
  }`;

export const organizationInvite = /* GraphQL */ `query organizationInvite($id: String!) {
    organizationInvite(id: $id) {
      acceptedAt
    archivedAt
    createdAt
    email
    expiresAt
    external
    id
    invitee { id name }
    inviter { id name }
    metadata
    organization { id name }
    updatedAt
    }
  }`;

export const organizationInviteDetails = /* GraphQL */ `query organizationInviteDetails($id: String!) {
    organizationInviteDetails(id: $id) 
  }`;

export const organizationInvites = /* GraphQL */ `query organizationInvites($after: String, $before: String, $first: Int, $includeArchived: Boolean, $last: Int, $orderBy: PaginationOrderBy) {
    organizationInvites(after: $after, before: $before, first: $first, includeArchived: $includeArchived, last: $last, orderBy: $orderBy) {
      nodes {
        acceptedAt
    archivedAt
    createdAt
    email
    expiresAt
    external
    id
    invitee { id name }
    inviter { id name }
    metadata
    organization { id name }
    updatedAt
      }
      pageInfo {
        hasNextPage
        endCursor
        hasPreviousPage
        startCursor
      }
    }
  }`;

export const organizationMeta = /* GraphQL */ `query organizationMeta($urlKey: String!) {
    organizationMeta(urlKey: $urlKey) {
      allowedAuthServices
    region
    }
  }`;

export const project = /* GraphQL */ `query project($id: String!) {
    project(id: $id) {
      archivedAt
    autoArchivedAt
    canceledAt
    color
    completedAt
    completedIssueCountHistory
    completedScopeHistory
    content
    contentState
    convertedFromIssue { id title }
    createdAt
    creator { id name }
    currentProgress
    description
    documentContent { id }
    facets { id }
    favorite { id title }
    healthUpdatedAt
    icon
    id
    inProgressScopeHistory
    integrationsSettings { id }
    issueCountHistory
    labelIds
    lastAppliedTemplate { id name }
    lastUpdate { id }
    lead { id name }
    name
    priority
    priorityLabel
    prioritySortOrder
    progress
    progressHistory
    projectUpdateRemindersPausedUntilAt
    scope
    scopeHistory
    slackIssueComments
    slackIssueStatuses
    slackNewIssue
    slugId
    sortOrder
    startDate
    startedAt
    state
    status { id name }
    targetDate
    trashed
    updateReminderFrequency
    updateReminderFrequencyInWeeks
    updateRemindersHour
    updatedAt
    url
    }
  }`;

export const projectFilterSuggestion = /* GraphQL */ `query projectFilterSuggestion($prompt: String!) {
    projectFilterSuggestion(prompt: $prompt) {
      filter
    logId
    }
  }`;

export const projectLabel = /* GraphQL */ `query projectLabel($id: String!) {
    projectLabel(id: $id) {
      archivedAt
    color
    createdAt
    creator { id name }
    description
    id
    isGroup
    lastAppliedAt
    name
    organization { id name }
    parent { id name }
    updatedAt
    }
  }`;

export const projectLabels = /* GraphQL */ `query projectLabels($after: String, $before: String, $filter: ProjectLabelFilter, $first: Int, $includeArchived: Boolean, $last: Int, $orderBy: PaginationOrderBy) {
    projectLabels(after: $after, before: $before, filter: $filter, first: $first, includeArchived: $includeArchived, last: $last, orderBy: $orderBy) {
      nodes {
        archivedAt
    color
    createdAt
    creator { id name }
    description
    id
    isGroup
    lastAppliedAt
    name
    organization { id name }
    parent { id name }
    updatedAt
      }
      pageInfo {
        hasNextPage
        endCursor
        hasPreviousPage
        startCursor
      }
    }
  }`;

export const projectMilestone = /* GraphQL */ `query projectMilestone($id: String!) {
    projectMilestone(id: $id) {
      archivedAt
    createdAt
    currentProgress
    description
    descriptionState
    documentContent { id }
    id
    name
    progress
    progressHistory
    project { id name }
    sortOrder
    targetDate
    updatedAt
    }
  }`;

export const projectMilestones = /* GraphQL */ `query projectMilestones($after: String, $before: String, $filter: ProjectMilestoneFilter, $first: Int, $includeArchived: Boolean, $last: Int, $orderBy: PaginationOrderBy) {
    projectMilestones(after: $after, before: $before, filter: $filter, first: $first, includeArchived: $includeArchived, last: $last, orderBy: $orderBy) {
      nodes {
        archivedAt
    createdAt
    currentProgress
    description
    descriptionState
    documentContent { id }
    id
    name
    progress
    progressHistory
    project { id name }
    sortOrder
    targetDate
    updatedAt
      }
      pageInfo {
        hasNextPage
        endCursor
        hasPreviousPage
        startCursor
      }
    }
  }`;

export const projectRelation = /* GraphQL */ `query projectRelation($id: String!) {
    projectRelation(id: $id) {
      anchorType
    archivedAt
    createdAt
    id
    project { id name }
    projectMilestone { id name }
    relatedAnchorType
    relatedProject { id name }
    relatedProjectMilestone { id name }
    type
    updatedAt
    user { id name }
    }
  }`;

export const projectRelations = /* GraphQL */ `query projectRelations($after: String, $before: String, $first: Int, $includeArchived: Boolean, $last: Int, $orderBy: PaginationOrderBy) {
    projectRelations(after: $after, before: $before, first: $first, includeArchived: $includeArchived, last: $last, orderBy: $orderBy) {
      nodes {
        anchorType
    archivedAt
    createdAt
    id
    project { id name }
    projectMilestone { id name }
    relatedAnchorType
    relatedProject { id name }
    relatedProjectMilestone { id name }
    type
    updatedAt
    user { id name }
      }
      pageInfo {
        hasNextPage
        endCursor
        hasPreviousPage
        startCursor
      }
    }
  }`;

export const projectStatus = /* GraphQL */ `query projectStatus($id: String!) {
    projectStatus(id: $id) {
      archivedAt
    color
    createdAt
    description
    id
    indefinite
    name
    position
    updatedAt
    }
  }`;

export const projectStatusProjectCount = /* GraphQL */ `query projectStatusProjectCount($id: String!) {
    projectStatusProjectCount(id: $id) {
      archivedTeamCount
    count
    privateCount
    }
  }`;

export const projectStatuses = /* GraphQL */ `query projectStatuses($after: String, $before: String, $first: Int, $includeArchived: Boolean, $last: Int, $orderBy: PaginationOrderBy) {
    projectStatuses(after: $after, before: $before, first: $first, includeArchived: $includeArchived, last: $last, orderBy: $orderBy) {
      nodes {
        archivedAt
    color
    createdAt
    description
    id
    indefinite
    name
    position
    updatedAt
      }
      pageInfo {
        hasNextPage
        endCursor
        hasPreviousPage
        startCursor
      }
    }
  }`;

export const projectUpdate = /* GraphQL */ `query projectUpdate($id: String!) {
    projectUpdate(id: $id) {
      archivedAt
    body
    bodyData
    createdAt
    diff
    diffMarkdown
    editedAt
    id
    infoSnapshot
    isDiffHidden
    isStale
    project { id name }
    reactionData
    reactions { id }
    slugId
    updatedAt
    url
    user { id name }
    }
  }`;

export const projectUpdates = /* GraphQL */ `query projectUpdates($after: String, $before: String, $filter: ProjectUpdateFilter, $first: Int, $includeArchived: Boolean, $last: Int, $orderBy: PaginationOrderBy) {
    projectUpdates(after: $after, before: $before, filter: $filter, first: $first, includeArchived: $includeArchived, last: $last, orderBy: $orderBy) {
      nodes {
        archivedAt
    body
    bodyData
    createdAt
    diff
    diffMarkdown
    editedAt
    id
    infoSnapshot
    isDiffHidden
    isStale
    project { id name }
    reactionData
    reactions { id }
    slugId
    updatedAt
    url
    user { id name }
      }
      pageInfo {
        hasNextPage
        endCursor
        hasPreviousPage
        startCursor
      }
    }
  }`;

export const projects = /* GraphQL */ `query projects($after: String, $before: String, $filter: ProjectFilter, $first: Int, $includeArchived: Boolean, $last: Int, $orderBy: PaginationOrderBy, $sort: [ProjectSortInput!]) {
    projects(after: $after, before: $before, filter: $filter, first: $first, includeArchived: $includeArchived, last: $last, orderBy: $orderBy, sort: $sort) {
      nodes {
        archivedAt
    autoArchivedAt
    canceledAt
    color
    completedAt
    completedIssueCountHistory
    completedScopeHistory
    content
    contentState
    convertedFromIssue { id title }
    createdAt
    creator { id name }
    currentProgress
    description
    documentContent { id }
    facets { id }
    favorite { id title }
    healthUpdatedAt
    icon
    id
    inProgressScopeHistory
    integrationsSettings { id }
    issueCountHistory
    labelIds
    lastAppliedTemplate { id name }
    lastUpdate { id }
    lead { id name }
    name
    priority
    priorityLabel
    prioritySortOrder
    progress
    progressHistory
    projectUpdateRemindersPausedUntilAt
    scope
    scopeHistory
    slackIssueComments
    slackIssueStatuses
    slackNewIssue
    slugId
    sortOrder
    startDate
    startedAt
    state
    status { id name }
    targetDate
    trashed
    updateReminderFrequency
    updateReminderFrequencyInWeeks
    updateRemindersHour
    updatedAt
    url
      }
      pageInfo {
        hasNextPage
        endCursor
        hasPreviousPage
        startCursor
      }
    }
  }`;

export const pushSubscriptionTest = /* GraphQL */ `query pushSubscriptionTest($sendStrategy: SendStrategy, $targetMobile: Boolean) {
    pushSubscriptionTest(sendStrategy: $sendStrategy, targetMobile: $targetMobile) {
      success
    }
  }`;

export const rateLimitStatus = /* GraphQL */ `query rateLimitStatus {
    rateLimitStatus {
      identifier
    kind
    limits { id }
    }
  }`;

export const roadmap = /* GraphQL */ `query roadmap($id: String!) {
    roadmap(id: $id) {
      archivedAt
    color
    createdAt
    creator { id name }
    description
    id
    name
    organization { id name }
    owner { id name }
    slugId
    sortOrder
    updatedAt
    url
    }
  }`;

export const roadmapToProject = /* GraphQL */ `query roadmapToProject($id: String!) {
    roadmapToProject(id: $id) {
      archivedAt
    createdAt
    id
    project { id name }
    roadmap { id name }
    sortOrder
    updatedAt
    }
  }`;

export const roadmapToProjects = /* GraphQL */ `query roadmapToProjects($after: String, $before: String, $first: Int, $includeArchived: Boolean, $last: Int, $orderBy: PaginationOrderBy) {
    roadmapToProjects(after: $after, before: $before, first: $first, includeArchived: $includeArchived, last: $last, orderBy: $orderBy) {
      nodes {
        archivedAt
    createdAt
    id
    project { id name }
    roadmap { id name }
    sortOrder
    updatedAt
      }
      pageInfo {
        hasNextPage
        endCursor
        hasPreviousPage
        startCursor
      }
    }
  }`;

export const roadmaps = /* GraphQL */ `query roadmaps($after: String, $before: String, $first: Int, $includeArchived: Boolean, $last: Int, $orderBy: PaginationOrderBy) {
    roadmaps(after: $after, before: $before, first: $first, includeArchived: $includeArchived, last: $last, orderBy: $orderBy) {
      nodes {
        archivedAt
    color
    createdAt
    creator { id name }
    description
    id
    name
    organization { id name }
    owner { id name }
    slugId
    sortOrder
    updatedAt
    url
      }
      pageInfo {
        hasNextPage
        endCursor
        hasPreviousPage
        startCursor
      }
    }
  }`;

export const searchDocuments = /* GraphQL */ `query searchDocuments($after: String, $before: String, $first: Int, $includeArchived: Boolean, $includeComments: Boolean, $last: Int, $orderBy: PaginationOrderBy, $snippetSize: Float, $teamId: String, $term: String!) {
    searchDocuments(after: $after, before: $before, first: $first, includeArchived: $includeArchived, includeComments: $includeComments, last: $last, orderBy: $orderBy, snippetSize: $snippetSize, teamId: $teamId, term: $term) {
      archivePayload { id }
    totalCount
    }
  }`;

export const searchIssues = /* GraphQL */ `query searchIssues($after: String, $before: String, $filter: IssueFilter, $first: Int, $includeArchived: Boolean, $includeComments: Boolean, $last: Int, $orderBy: PaginationOrderBy, $snippetSize: Float, $teamId: String, $term: String!) {
    searchIssues(after: $after, before: $before, filter: $filter, first: $first, includeArchived: $includeArchived, includeComments: $includeComments, last: $last, orderBy: $orderBy, snippetSize: $snippetSize, teamId: $teamId, term: $term) {
      archivePayload { id }
    totalCount
    }
  }`;

export const searchProjects = /* GraphQL */ `query searchProjects($after: String, $before: String, $first: Int, $includeArchived: Boolean, $includeComments: Boolean, $last: Int, $orderBy: PaginationOrderBy, $snippetSize: Float, $teamId: String, $term: String!) {
    searchProjects(after: $after, before: $before, first: $first, includeArchived: $includeArchived, includeComments: $includeComments, last: $last, orderBy: $orderBy, snippetSize: $snippetSize, teamId: $teamId, term: $term) {
      archivePayload { id }
    totalCount
    }
  }`;

export const semanticSearch = /* GraphQL */ `query semanticSearch($includeArchived: Boolean, $maxResults: Int, $query: String!, $types: [SemanticSearchResultType!]) {
    semanticSearch(includeArchived: $includeArchived, maxResults: $maxResults, query: $query, types: $types) {
      enabled
    results { id }
    }
  }`;

export const ssoUrlFromEmail = /* GraphQL */ `query ssoUrlFromEmail($email: String!, $isDesktop: Boolean) {
    ssoUrlFromEmail(email: $email, isDesktop: $isDesktop) {
      samlSsoUrl
    success
    }
  }`;

export const summarizeProjectUpdates = /* GraphQL */ `query summarizeProjectUpdates($ids: [String!]!) {
    summarizeProjectUpdates(ids: $ids) {
      summary
    }
  }`;

export const team = /* GraphQL */ `query team($id: String!) {
    team(id: $id) {
      activeCycle { id name }
    aiThreadSummariesEnabled
    archivedAt
    autoArchivePeriod
    autoCloseChildIssues
    autoCloseParentIssues
    autoClosePeriod
    autoCloseStateId
    children { id name key }
    color
    createdAt
    currentProgress
    cycleCalenderUrl
    cycleCooldownTime
    cycleDuration
    cycleIssueAutoAssignCompleted
    cycleIssueAutoAssignStarted
    cycleLockToActive
    cycleStartDay
    cyclesEnabled
    defaultIssueEstimate
    defaultIssueState { id name }
    defaultProjectTemplate { id name }
    defaultTemplateForMembers { id name }
    defaultTemplateForMembersId
    defaultTemplateForNonMembers { id name }
    defaultTemplateForNonMembersId
    description
    displayName
    draftWorkflowState { id name }
    facets { id }
    groupIssueHistory
    icon
    id
    inheritIssueEstimation
    inheritWorkflowStatuses
    integrationsSettings { id }
    inviteHash
    issueCount
    issueEstimationAllowZero
    issueEstimationExtended
    issueEstimationType
    issueOrderingNoPriorityFirst
    issueSortOrderDefaultToBottom
    joinByDefault
    key
    markedAsDuplicateWorkflowState { id name }
    membership { id }
    mergeWorkflowState { id name }
    mergeableWorkflowState { id name }
    name
    organization { id name }
    parent { id name key }
    posts { id title }
    private
    progressHistory
    requirePriorityToLeaveTriage
    reviewWorkflowState { id name }
    scimGroupName
    scimManaged
    setIssueSortOrderOnStateChange
    slackIssueComments
    slackIssueStatuses
    slackNewIssue
    startWorkflowState { id name }
    timezone
    triageEnabled
    triageIssueState { id name }
    triageResponsibility { id }
    upcomingCycleCount
    updatedAt
    }
  }`;

export const teamMembership = /* GraphQL */ `query teamMembership($id: String!) {
    teamMembership(id: $id) {
      archivedAt
    createdAt
    id
    owner
    sortOrder
    team { id name key }
    updatedAt
    user { id name }
    }
  }`;

export const teamMemberships = /* GraphQL */ `query teamMemberships($after: String, $before: String, $first: Int, $includeArchived: Boolean, $last: Int, $orderBy: PaginationOrderBy) {
    teamMemberships(after: $after, before: $before, first: $first, includeArchived: $includeArchived, last: $last, orderBy: $orderBy) {
      nodes {
        archivedAt
    createdAt
    id
    owner
    sortOrder
    team { id name key }
    updatedAt
    user { id name }
      }
      pageInfo {
        hasNextPage
        endCursor
        hasPreviousPage
        startCursor
      }
    }
  }`;

export const teams = /* GraphQL */ `query teams($after: String, $before: String, $filter: TeamFilter, $first: Int, $includeArchived: Boolean, $last: Int, $orderBy: PaginationOrderBy) {
    teams(after: $after, before: $before, filter: $filter, first: $first, includeArchived: $includeArchived, last: $last, orderBy: $orderBy) {
      nodes {
        activeCycle { id name }
    aiThreadSummariesEnabled
    archivedAt
    autoArchivePeriod
    autoCloseChildIssues
    autoCloseParentIssues
    autoClosePeriod
    autoCloseStateId
    children { id name key }
    color
    createdAt
    currentProgress
    cycleCalenderUrl
    cycleCooldownTime
    cycleDuration
    cycleIssueAutoAssignCompleted
    cycleIssueAutoAssignStarted
    cycleLockToActive
    cycleStartDay
    cyclesEnabled
    defaultIssueEstimate
    defaultIssueState { id name }
    defaultProjectTemplate { id name }
    defaultTemplateForMembers { id name }
    defaultTemplateForMembersId
    defaultTemplateForNonMembers { id name }
    defaultTemplateForNonMembersId
    description
    displayName
    draftWorkflowState { id name }
    facets { id }
    groupIssueHistory
    icon
    id
    inheritIssueEstimation
    inheritWorkflowStatuses
    integrationsSettings { id }
    inviteHash
    issueCount
    issueEstimationAllowZero
    issueEstimationExtended
    issueEstimationType
    issueOrderingNoPriorityFirst
    issueSortOrderDefaultToBottom
    joinByDefault
    key
    markedAsDuplicateWorkflowState { id name }
    membership { id }
    mergeWorkflowState { id name }
    mergeableWorkflowState { id name }
    name
    organization { id name }
    parent { id name key }
    posts { id title }
    private
    progressHistory
    requirePriorityToLeaveTriage
    reviewWorkflowState { id name }
    scimGroupName
    scimManaged
    setIssueSortOrderOnStateChange
    slackIssueComments
    slackIssueStatuses
    slackNewIssue
    startWorkflowState { id name }
    timezone
    triageEnabled
    triageIssueState { id name }
    triageResponsibility { id }
    upcomingCycleCount
    updatedAt
      }
      pageInfo {
        hasNextPage
        endCursor
        hasPreviousPage
        startCursor
      }
    }
  }`;

export const template = /* GraphQL */ `query template($id: String!) {
    template(id: $id) {
      archivedAt
    createdAt
    creator { id name }
    description
    id
    inheritedFrom { id name }
    lastUpdatedBy { id name }
    name
    organization { id name }
    sortOrder
    team { id name key }
    templateData
    type
    updatedAt
    }
  }`;

export const templates = /* GraphQL */ `query templates {
    templates {
      archivedAt
    createdAt
    creator { id name }
    description
    id
    inheritedFrom { id name }
    lastUpdatedBy { id name }
    name
    organization { id name }
    sortOrder
    team { id name key }
    templateData
    type
    updatedAt
    }
  }`;

export const templatesForIntegration = /* GraphQL */ `query templatesForIntegration($integrationType: String!) {
    templatesForIntegration(integrationType: $integrationType) {
      archivedAt
    createdAt
    creator { id name }
    description
    id
    inheritedFrom { id name }
    lastUpdatedBy { id name }
    name
    organization { id name }
    sortOrder
    team { id name key }
    templateData
    type
    updatedAt
    }
  }`;

export const timeSchedule = /* GraphQL */ `query timeSchedule($id: String!) {
    timeSchedule(id: $id) {
      archivedAt
    createdAt
    entries { id }
    externalId
    externalUrl
    id
    integration { id }
    name
    organization { id name }
    updatedAt
    }
  }`;

export const timeSchedules = /* GraphQL */ `query timeSchedules($after: String, $before: String, $first: Int, $includeArchived: Boolean, $last: Int, $orderBy: PaginationOrderBy) {
    timeSchedules(after: $after, before: $before, first: $first, includeArchived: $includeArchived, last: $last, orderBy: $orderBy) {
      nodes {
        archivedAt
    createdAt
    entries { id }
    externalId
    externalUrl
    id
    integration { id }
    name
    organization { id name }
    updatedAt
      }
      pageInfo {
        hasNextPage
        endCursor
        hasPreviousPage
        startCursor
      }
    }
  }`;

export const triageResponsibilities = /* GraphQL */ `query triageResponsibilities($after: String, $before: String, $first: Int, $includeArchived: Boolean, $last: Int, $orderBy: PaginationOrderBy) {
    triageResponsibilities(after: $after, before: $before, first: $first, includeArchived: $includeArchived, last: $last, orderBy: $orderBy) {
      nodes {
        archivedAt
    createdAt
    currentUser { id name }
    id
    manualSelection { id }
    team { id name key }
    timeSchedule { id name }
    updatedAt
      }
      pageInfo {
        hasNextPage
        endCursor
        hasPreviousPage
        startCursor
      }
    }
  }`;

export const triageResponsibility = /* GraphQL */ `query triageResponsibility($id: String!) {
    triageResponsibility(id: $id) {
      archivedAt
    createdAt
    currentUser { id name }
    id
    manualSelection { id }
    team { id name key }
    timeSchedule { id name }
    updatedAt
    }
  }`;

export const user = /* GraphQL */ `query user($id: String!) {
    user(id: $id) {
      active
    admin
    app
    archivedAt
    avatarBackgroundColor
    avatarUrl
    calendarHash
    canAccessAnyPublicTeam
    createdAt
    createdIssueCount
    description
    disableReason
    displayName
    email
    gitHubUserId
    guest
    id
    identityProvider { id }
    initials
    inviteHash
    isAssignable
    isMe
    isMentionable
    lastSeen
    name
    organization { id name }
    statusEmoji
    statusLabel
    statusUntilAt
    timezone
    updatedAt
    url
    }
  }`;

export const userSettings = /* GraphQL */ `query userSettings {
    userSettings {
      archivedAt
    autoAssignToSelf
    calendarHash
    createdAt
    id
    notificationCategoryPreferences { id }
    notificationChannelPreferences { id }
    notificationDeliveryPreferences { id }
    showFullUserNames
    subscribedToChangelog
    subscribedToDPA
    subscribedToInviteAccepted
    subscribedToPrivacyLegalUpdates
    unsubscribedFrom
    updatedAt
    user { id name }
    }
  }`;

export const users = /* GraphQL */ `query users($after: String, $before: String, $filter: UserFilter, $first: Int, $includeArchived: Boolean, $includeDisabled: Boolean, $last: Int, $orderBy: PaginationOrderBy, $sort: [UserSortInput!]) {
    users(after: $after, before: $before, filter: $filter, first: $first, includeArchived: $includeArchived, includeDisabled: $includeDisabled, last: $last, orderBy: $orderBy, sort: $sort) {
      nodes {
        active
    admin
    app
    archivedAt
    avatarBackgroundColor
    avatarUrl
    calendarHash
    canAccessAnyPublicTeam
    createdAt
    createdIssueCount
    description
    disableReason
    displayName
    email
    gitHubUserId
    guest
    id
    identityProvider { id }
    initials
    inviteHash
    isAssignable
    isMe
    isMentionable
    lastSeen
    name
    organization { id name }
    statusEmoji
    statusLabel
    statusUntilAt
    timezone
    updatedAt
    url
      }
      pageInfo {
        hasNextPage
        endCursor
        hasPreviousPage
        startCursor
      }
    }
  }`;

export const verifyGitHubEnterpriseServerInstallation = /* GraphQL */ `query verifyGitHubEnterpriseServerInstallation($integrationId: String!) {
    verifyGitHubEnterpriseServerInstallation(integrationId: $integrationId) {
      success
    }
  }`;

export const viewer = /* GraphQL */ `query viewer {
    viewer {
      active
    admin
    app
    archivedAt
    avatarBackgroundColor
    avatarUrl
    calendarHash
    canAccessAnyPublicTeam
    createdAt
    createdIssueCount
    description
    disableReason
    displayName
    email
    gitHubUserId
    guest
    id
    identityProvider { id }
    initials
    inviteHash
    isAssignable
    isMe
    isMentionable
    lastSeen
    name
    organization { id name }
    statusEmoji
    statusLabel
    statusUntilAt
    timezone
    updatedAt
    url
    }
  }`;

export const webhook = /* GraphQL */ `query webhook($id: String!) {
    webhook(id: $id) {
      allPublicTeams
    archivedAt
    createdAt
    creator { id name }
    enabled
    failures { id }
    id
    label
    resourceTypes
    secret
    team { id name key }
    teamIds
    updatedAt
    url
    }
  }`;

export const webhooks = /* GraphQL */ `query webhooks($after: String, $before: String, $first: Int, $includeArchived: Boolean, $last: Int, $orderBy: PaginationOrderBy) {
    webhooks(after: $after, before: $before, first: $first, includeArchived: $includeArchived, last: $last, orderBy: $orderBy) {
      nodes {
        allPublicTeams
    archivedAt
    createdAt
    creator { id name }
    enabled
    failures { id }
    id
    label
    resourceTypes
    secret
    team { id name key }
    teamIds
    updatedAt
    url
      }
      pageInfo {
        hasNextPage
        endCursor
        hasPreviousPage
        startCursor
      }
    }
  }`;

export const workflowState = /* GraphQL */ `query workflowState($id: String!) {
    workflowState(id: $id) {
      archivedAt
    color
    createdAt
    description
    id
    inheritedFrom { id name }
    name
    position
    team { id name key }
    type
    updatedAt
    }
  }`;

export const workflowStates = /* GraphQL */ `query workflowStates($after: String, $before: String, $filter: WorkflowStateFilter, $first: Int, $includeArchived: Boolean, $last: Int, $orderBy: PaginationOrderBy) {
    workflowStates(after: $after, before: $before, filter: $filter, first: $first, includeArchived: $includeArchived, last: $last, orderBy: $orderBy) {
      nodes {
        archivedAt
    color
    createdAt
    description
    id
    inheritedFrom { id name }
    name
    position
    team { id name key }
    type
    updatedAt
      }
      pageInfo {
        hasNextPage
        endCursor
        hasPreviousPage
        startCursor
      }
    }
  }`;

export const workspaceAuthorizedApplication = /* GraphQL */ `query workspaceAuthorizedApplication($clientId: String!) {
    workspaceAuthorizedApplication(clientId: $clientId) {
      client { id name }
    memberships { id }
    totalMembers
    }
  }`;

export const workspaceAuthorizedApplicationsWithAppUser = /* GraphQL */ `query workspaceAuthorizedApplicationsWithAppUser($clientIds: [String!]) {
    workspaceAuthorizedApplicationsWithAppUser(clientIds: $clientIds) {
      appId
    appUser { id }
    clientId
    description
    developer
    developerUrl
    imageUrl
    name
    scope
    totalMembers
    webhooksEnabled
    }
  }`;
