// AUTO-GENERATED — do not edit. Run `npm run generate` to regenerate.

export const agentActivityCreate = /* GraphQL */ `mutation agentActivityCreate($input: AgentActivityCreateInput!) {
    agentActivityCreate(input: $input) {
      agentActivity { id }
      lastSyncId
      success
    }
  }`;

export const agentActivityCreatePrompt = /* GraphQL */ `mutation agentActivityCreatePrompt($input: AgentActivityCreatePromptInput!) {
    agentActivityCreatePrompt(input: $input) {
      agentActivity { id }
      lastSyncId
      success
    }
  }`;

export const agentSessionCreateOnComment = /* GraphQL */ `mutation agentSessionCreateOnComment($input: AgentSessionCreateOnComment!) {
    agentSessionCreateOnComment(input: $input) {
      agentSession { id }
      lastSyncId
      success
    }
  }`;

export const agentSessionCreateOnIssue = /* GraphQL */ `mutation agentSessionCreateOnIssue($input: AgentSessionCreateOnIssue!) {
    agentSessionCreateOnIssue(input: $input) {
      agentSession { id }
      lastSyncId
      success
    }
  }`;

export const agentSessionUpdateExternalUrl = /* GraphQL */ `mutation agentSessionUpdateExternalUrl($id: String!, $input: AgentSessionUpdateExternalUrlInput!) {
    agentSessionUpdateExternalUrl(id: $id, input: $input) {
      agentSession { id }
      lastSyncId
      success
    }
  }`;

export const airbyteIntegrationConnect = /* GraphQL */ `mutation airbyteIntegrationConnect($input: AirbyteConfigurationInput!) {
    airbyteIntegrationConnect(input: $input) {
      integration { id }
      lastSyncId
      success
    }
  }`;

export const apiKeyCreate = /* GraphQL */ `mutation apiKeyCreate($input: ApiKeyCreateInput!) {
    apiKeyCreate(input: $input) {
      apiKey { id }
      lastSyncId
      success
    }
  }`;

export const apiKeyDelete = /* GraphQL */ `mutation apiKeyDelete($id: String!) {
    apiKeyDelete(id: $id) {
      entityId
      lastSyncId
      success
    }
  }`;

export const apiKeyUpdate = /* GraphQL */ `mutation apiKeyUpdate($id: String!, $input: ApiKeyUpdateInput!) {
    apiKeyUpdate(id: $id, input: $input) {
      apiKey { id }
      lastSyncId
      success
    }
  }`;

export const attachmentCreate = /* GraphQL */ `mutation attachmentCreate($input: AttachmentCreateInput!) {
    attachmentCreate(input: $input) {
      attachment { id title }
      lastSyncId
      success
    }
  }`;

export const attachmentDelete = /* GraphQL */ `mutation attachmentDelete($id: String!) {
    attachmentDelete(id: $id) {
      entityId
      lastSyncId
      success
    }
  }`;

export const attachmentLinkDiscord = /* GraphQL */ `mutation attachmentLinkDiscord($channelId: String!, $createAsUser: String, $displayIconUrl: String, $id: String, $issueId: String!, $messageId: String!, $title: String, $url: String!) {
    attachmentLinkDiscord(channelId: $channelId, createAsUser: $createAsUser, displayIconUrl: $displayIconUrl, id: $id, issueId: $issueId, messageId: $messageId, title: $title, url: $url) {
      attachment { id title }
      lastSyncId
      success
    }
  }`;

export const attachmentLinkFront = /* GraphQL */ `mutation attachmentLinkFront($conversationId: String!, $createAsUser: String, $displayIconUrl: String, $id: String, $issueId: String!, $title: String) {
    attachmentLinkFront(conversationId: $conversationId, createAsUser: $createAsUser, displayIconUrl: $displayIconUrl, id: $id, issueId: $issueId, title: $title) {
      attachment { id title }
      lastSyncId
      success
    }
  }`;

export const attachmentLinkGitHubIssue = /* GraphQL */ `mutation attachmentLinkGitHubIssue($createAsUser: String, $displayIconUrl: String, $id: String, $issueId: String!, $title: String, $url: String!) {
    attachmentLinkGitHubIssue(createAsUser: $createAsUser, displayIconUrl: $displayIconUrl, id: $id, issueId: $issueId, title: $title, url: $url) {
      attachment { id title }
      lastSyncId
      success
    }
  }`;

export const attachmentLinkGitHubPR = /* GraphQL */ `mutation attachmentLinkGitHubPR($createAsUser: String, $displayIconUrl: String, $id: String, $issueId: String!, $linkKind: GitLinkKind, $number: Float, $owner: String, $repo: String, $title: String, $url: String!) {
    attachmentLinkGitHubPR(createAsUser: $createAsUser, displayIconUrl: $displayIconUrl, id: $id, issueId: $issueId, linkKind: $linkKind, number: $number, owner: $owner, repo: $repo, title: $title, url: $url) {
      attachment { id title }
      lastSyncId
      success
    }
  }`;

export const attachmentLinkGitLabMR = /* GraphQL */ `mutation attachmentLinkGitLabMR($createAsUser: String, $displayIconUrl: String, $id: String, $issueId: String!, $number: Float!, $projectPathWithNamespace: String!, $title: String, $url: String!) {
    attachmentLinkGitLabMR(createAsUser: $createAsUser, displayIconUrl: $displayIconUrl, id: $id, issueId: $issueId, number: $number, projectPathWithNamespace: $projectPathWithNamespace, title: $title, url: $url) {
      attachment { id title }
      lastSyncId
      success
    }
  }`;

export const attachmentLinkIntercom = /* GraphQL */ `mutation attachmentLinkIntercom($conversationId: String!, $createAsUser: String, $displayIconUrl: String, $id: String, $issueId: String!, $partId: String, $title: String) {
    attachmentLinkIntercom(conversationId: $conversationId, createAsUser: $createAsUser, displayIconUrl: $displayIconUrl, id: $id, issueId: $issueId, partId: $partId, title: $title) {
      attachment { id title }
      lastSyncId
      success
    }
  }`;

export const attachmentLinkJiraIssue = /* GraphQL */ `mutation attachmentLinkJiraIssue($createAsUser: String, $displayIconUrl: String, $id: String, $issueId: String!, $jiraIssueId: String!, $title: String, $url: String) {
    attachmentLinkJiraIssue(createAsUser: $createAsUser, displayIconUrl: $displayIconUrl, id: $id, issueId: $issueId, jiraIssueId: $jiraIssueId, title: $title, url: $url) {
      attachment { id title }
      lastSyncId
      success
    }
  }`;

export const attachmentLinkSalesforce = /* GraphQL */ `mutation attachmentLinkSalesforce($createAsUser: String, $displayIconUrl: String, $id: String, $issueId: String!, $title: String, $url: String!) {
    attachmentLinkSalesforce(createAsUser: $createAsUser, displayIconUrl: $displayIconUrl, id: $id, issueId: $issueId, title: $title, url: $url) {
      attachment { id title }
      lastSyncId
      success
    }
  }`;

export const attachmentLinkSlack = /* GraphQL */ `mutation attachmentLinkSlack($channel: String, $createAsUser: String, $displayIconUrl: String, $id: String, $issueId: String!, $latest: String, $syncToCommentThread: Boolean, $title: String, $ts: String, $url: String!) {
    attachmentLinkSlack(channel: $channel, createAsUser: $createAsUser, displayIconUrl: $displayIconUrl, id: $id, issueId: $issueId, latest: $latest, syncToCommentThread: $syncToCommentThread, title: $title, ts: $ts, url: $url) {
      attachment { id title }
      lastSyncId
      success
    }
  }`;

export const attachmentLinkURL = /* GraphQL */ `mutation attachmentLinkURL($createAsUser: String, $displayIconUrl: String, $id: String, $issueId: String!, $title: String, $url: String!) {
    attachmentLinkURL(createAsUser: $createAsUser, displayIconUrl: $displayIconUrl, id: $id, issueId: $issueId, title: $title, url: $url) {
      attachment { id title }
      lastSyncId
      success
    }
  }`;

export const attachmentLinkZendesk = /* GraphQL */ `mutation attachmentLinkZendesk($createAsUser: String, $displayIconUrl: String, $id: String, $issueId: String!, $ticketId: String!, $title: String, $url: String) {
    attachmentLinkZendesk(createAsUser: $createAsUser, displayIconUrl: $displayIconUrl, id: $id, issueId: $issueId, ticketId: $ticketId, title: $title, url: $url) {
      attachment { id title }
      lastSyncId
      success
    }
  }`;

export const attachmentSyncToSlack = /* GraphQL */ `mutation attachmentSyncToSlack($id: String!) {
    attachmentSyncToSlack(id: $id) {
      attachment { id title }
      lastSyncId
      success
    }
  }`;

export const attachmentUpdate = /* GraphQL */ `mutation attachmentUpdate($id: String!, $input: AttachmentUpdateInput!) {
    attachmentUpdate(id: $id, input: $input) {
      attachment { id title }
      lastSyncId
      success
    }
  }`;

export const commentCreate = /* GraphQL */ `mutation commentCreate($input: CommentCreateInput!) {
    commentCreate(input: $input) {
      comment { id }
      lastSyncId
      success
    }
  }`;

export const commentDelete = /* GraphQL */ `mutation commentDelete($id: String!) {
    commentDelete(id: $id) {
      entityId
      lastSyncId
      success
    }
  }`;

export const commentResolve = /* GraphQL */ `mutation commentResolve($id: String!, $resolvingCommentId: String) {
    commentResolve(id: $id, resolvingCommentId: $resolvingCommentId) {
      comment { id }
      lastSyncId
      success
    }
  }`;

export const commentUnresolve = /* GraphQL */ `mutation commentUnresolve($id: String!) {
    commentUnresolve(id: $id) {
      comment { id }
      lastSyncId
      success
    }
  }`;

export const commentUpdate = /* GraphQL */ `mutation commentUpdate($id: String!, $input: CommentUpdateInput!) {
    commentUpdate(id: $id, input: $input) {
      comment { id }
      lastSyncId
      success
    }
  }`;

export const contactCreate = /* GraphQL */ `mutation contactCreate($input: ContactCreateInput!) {
    contactCreate(input: $input) {
      success
    }
  }`;

export const contactSalesCreate = /* GraphQL */ `mutation contactSalesCreate($input: ContactSalesCreateInput!) {
    contactSalesCreate(input: $input) {
      success
    }
  }`;

export const createCsvExportReport = /* GraphQL */ `mutation createCsvExportReport($includePrivateTeamIds: [String!]) {
    createCsvExportReport(includePrivateTeamIds: $includePrivateTeamIds) {
      success
    }
  }`;

export const createInitiativeUpdateReminder = /* GraphQL */ `mutation createInitiativeUpdateReminder($initiativeId: String!, $userId: String) {
    createInitiativeUpdateReminder(initiativeId: $initiativeId, userId: $userId) {
      lastSyncId
      success
    }
  }`;

export const createOrganizationFromOnboarding = /* GraphQL */ `mutation createOrganizationFromOnboarding($input: CreateOrganizationInput!, $survey: OnboardingCustomerSurvey) {
    createOrganizationFromOnboarding(input: $input, survey: $survey) {
      organization { id name }
      user { id name }
    }
  }`;

export const createProjectUpdateReminder = /* GraphQL */ `mutation createProjectUpdateReminder($projectId: String!, $userId: String) {
    createProjectUpdateReminder(projectId: $projectId, userId: $userId) {
      lastSyncId
      success
    }
  }`;

export const customViewCreate = /* GraphQL */ `mutation customViewCreate($input: CustomViewCreateInput!) {
    customViewCreate(input: $input) {
      customView { id name }
      lastSyncId
      success
    }
  }`;

export const customViewDelete = /* GraphQL */ `mutation customViewDelete($id: String!) {
    customViewDelete(id: $id) {
      entityId
      lastSyncId
      success
    }
  }`;

export const customViewUpdate = /* GraphQL */ `mutation customViewUpdate($id: String!, $input: CustomViewUpdateInput!) {
    customViewUpdate(id: $id, input: $input) {
      customView { id name }
      lastSyncId
      success
    }
  }`;

export const customerCreate = /* GraphQL */ `mutation customerCreate($input: CustomerCreateInput!) {
    customerCreate(input: $input) {
      customer { id name }
      lastSyncId
      success
    }
  }`;

export const customerDelete = /* GraphQL */ `mutation customerDelete($id: String!) {
    customerDelete(id: $id) {
      entityId
      lastSyncId
      success
    }
  }`;

export const customerMerge = /* GraphQL */ `mutation customerMerge($sourceCustomerId: String!, $targetCustomerId: String!) {
    customerMerge(sourceCustomerId: $sourceCustomerId, targetCustomerId: $targetCustomerId) {
      customer { id name }
      lastSyncId
      success
    }
  }`;

export const customerNeedArchive = /* GraphQL */ `mutation customerNeedArchive($id: String!) {
    customerNeedArchive(id: $id) {
      entity { id }
      lastSyncId
      success
    }
  }`;

export const customerNeedCreate = /* GraphQL */ `mutation customerNeedCreate($input: CustomerNeedCreateInput!) {
    customerNeedCreate(input: $input) {
      lastSyncId
      need { id }
      success
    }
  }`;

export const customerNeedCreateFromAttachment = /* GraphQL */ `mutation customerNeedCreateFromAttachment($input: CustomerNeedCreateFromAttachmentInput!) {
    customerNeedCreateFromAttachment(input: $input) {
      lastSyncId
      need { id }
      success
    }
  }`;

export const customerNeedDelete = /* GraphQL */ `mutation customerNeedDelete($id: String!, $keepAttachment: Boolean) {
    customerNeedDelete(id: $id, keepAttachment: $keepAttachment) {
      entityId
      lastSyncId
      success
    }
  }`;

export const customerNeedUnarchive = /* GraphQL */ `mutation customerNeedUnarchive($id: String!) {
    customerNeedUnarchive(id: $id) {
      entity { id }
      lastSyncId
      success
    }
  }`;

export const customerNeedUpdate = /* GraphQL */ `mutation customerNeedUpdate($id: String!, $input: CustomerNeedUpdateInput!) {
    customerNeedUpdate(id: $id, input: $input) {
      lastSyncId
      need { id }
      success
      updatedRelatedNeeds { id }
    }
  }`;

export const customerStatusCreate = /* GraphQL */ `mutation customerStatusCreate($input: CustomerStatusCreateInput!) {
    customerStatusCreate(input: $input) {
      lastSyncId
      status { id name }
      success
    }
  }`;

export const customerStatusDelete = /* GraphQL */ `mutation customerStatusDelete($id: String!) {
    customerStatusDelete(id: $id) {
      entityId
      lastSyncId
      success
    }
  }`;

export const customerStatusUpdate = /* GraphQL */ `mutation customerStatusUpdate($id: String!, $input: CustomerStatusUpdateInput!) {
    customerStatusUpdate(id: $id, input: $input) {
      lastSyncId
      status { id name }
      success
    }
  }`;

export const customerTierCreate = /* GraphQL */ `mutation customerTierCreate($input: CustomerTierCreateInput!) {
    customerTierCreate(input: $input) {
      lastSyncId
      success
      tier { id name }
    }
  }`;

export const customerTierDelete = /* GraphQL */ `mutation customerTierDelete($id: String!) {
    customerTierDelete(id: $id) {
      entityId
      lastSyncId
      success
    }
  }`;

export const customerTierUpdate = /* GraphQL */ `mutation customerTierUpdate($id: String!, $input: CustomerTierUpdateInput!) {
    customerTierUpdate(id: $id, input: $input) {
      lastSyncId
      success
      tier { id name }
    }
  }`;

export const customerUpdate = /* GraphQL */ `mutation customerUpdate($id: String!, $input: CustomerUpdateInput!) {
    customerUpdate(id: $id, input: $input) {
      customer { id name }
      lastSyncId
      success
    }
  }`;

export const customerUpsert = /* GraphQL */ `mutation customerUpsert($input: CustomerUpsertInput!) {
    customerUpsert(input: $input) {
      customer { id name }
      lastSyncId
      success
    }
  }`;

export const cycleArchive = /* GraphQL */ `mutation cycleArchive($id: String!) {
    cycleArchive(id: $id) {
      entity { id name }
      lastSyncId
      success
    }
  }`;

export const cycleCreate = /* GraphQL */ `mutation cycleCreate($input: CycleCreateInput!) {
    cycleCreate(input: $input) {
      cycle { id name }
      lastSyncId
      success
    }
  }`;

export const cycleShiftAll = /* GraphQL */ `mutation cycleShiftAll($input: CycleShiftAllInput!) {
    cycleShiftAll(input: $input) {
      cycle { id name }
      lastSyncId
      success
    }
  }`;

export const cycleStartUpcomingCycleToday = /* GraphQL */ `mutation cycleStartUpcomingCycleToday($id: String!) {
    cycleStartUpcomingCycleToday(id: $id) {
      cycle { id name }
      lastSyncId
      success
    }
  }`;

export const cycleUpdate = /* GraphQL */ `mutation cycleUpdate($id: String!, $input: CycleUpdateInput!) {
    cycleUpdate(id: $id, input: $input) {
      cycle { id name }
      lastSyncId
      success
    }
  }`;

export const documentCreate = /* GraphQL */ `mutation documentCreate($input: DocumentCreateInput!) {
    documentCreate(input: $input) {
      document { id title }
      lastSyncId
      success
    }
  }`;

export const documentDelete = /* GraphQL */ `mutation documentDelete($id: String!) {
    documentDelete(id: $id) {
      entity { id title }
      lastSyncId
      success
    }
  }`;

export const documentUnarchive = /* GraphQL */ `mutation documentUnarchive($id: String!) {
    documentUnarchive(id: $id) {
      entity { id title }
      lastSyncId
      success
    }
  }`;

export const documentUpdate = /* GraphQL */ `mutation documentUpdate($id: String!, $input: DocumentUpdateInput!) {
    documentUpdate(id: $id, input: $input) {
      document { id title }
      lastSyncId
      success
    }
  }`;

export const emailIntakeAddressCreate = /* GraphQL */ `mutation emailIntakeAddressCreate($input: EmailIntakeAddressCreateInput!) {
    emailIntakeAddressCreate(input: $input) {
      emailIntakeAddress { id }
      lastSyncId
      success
    }
  }`;

export const emailIntakeAddressDelete = /* GraphQL */ `mutation emailIntakeAddressDelete($id: String!) {
    emailIntakeAddressDelete(id: $id) {
      entityId
      lastSyncId
      success
    }
  }`;

export const emailIntakeAddressRotate = /* GraphQL */ `mutation emailIntakeAddressRotate($id: String!) {
    emailIntakeAddressRotate(id: $id) {
      emailIntakeAddress { id }
      lastSyncId
      success
    }
  }`;

export const emailIntakeAddressUpdate = /* GraphQL */ `mutation emailIntakeAddressUpdate($id: String!, $input: EmailIntakeAddressUpdateInput!) {
    emailIntakeAddressUpdate(id: $id, input: $input) {
      emailIntakeAddress { id }
      lastSyncId
      success
    }
  }`;

export const emailTokenUserAccountAuth = /* GraphQL */ `mutation emailTokenUserAccountAuth($input: TokenUserAccountAuthInput!) {
    emailTokenUserAccountAuth(input: $input) {
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

export const emailUnsubscribe = /* GraphQL */ `mutation emailUnsubscribe($input: EmailUnsubscribeInput!) {
    emailUnsubscribe(input: $input) {
      success
    }
  }`;

export const emailUserAccountAuthChallenge = /* GraphQL */ `mutation emailUserAccountAuthChallenge($input: EmailUserAccountAuthChallengeInput!) {
    emailUserAccountAuthChallenge(input: $input) {
      authType
      success
    }
  }`;

export const emojiCreate = /* GraphQL */ `mutation emojiCreate($input: EmojiCreateInput!) {
    emojiCreate(input: $input) {
      emoji { id name }
      lastSyncId
      success
    }
  }`;

export const emojiDelete = /* GraphQL */ `mutation emojiDelete($id: String!) {
    emojiDelete(id: $id) {
      entityId
      lastSyncId
      success
    }
  }`;

export const entityExternalLinkCreate = /* GraphQL */ `mutation entityExternalLinkCreate($input: EntityExternalLinkCreateInput!) {
    entityExternalLinkCreate(input: $input) {
      entityExternalLink { id }
      lastSyncId
      success
    }
  }`;

export const entityExternalLinkDelete = /* GraphQL */ `mutation entityExternalLinkDelete($id: String!) {
    entityExternalLinkDelete(id: $id) {
      entityId
      lastSyncId
      success
    }
  }`;

export const entityExternalLinkUpdate = /* GraphQL */ `mutation entityExternalLinkUpdate($id: String!, $input: EntityExternalLinkUpdateInput!) {
    entityExternalLinkUpdate(id: $id, input: $input) {
      entityExternalLink { id }
      lastSyncId
      success
    }
  }`;

export const favoriteCreate = /* GraphQL */ `mutation favoriteCreate($input: FavoriteCreateInput!) {
    favoriteCreate(input: $input) {
      favorite { id title }
      lastSyncId
      success
    }
  }`;

export const favoriteDelete = /* GraphQL */ `mutation favoriteDelete($id: String!) {
    favoriteDelete(id: $id) {
      entityId
      lastSyncId
      success
    }
  }`;

export const favoriteUpdate = /* GraphQL */ `mutation favoriteUpdate($id: String!, $input: FavoriteUpdateInput!) {
    favoriteUpdate(id: $id, input: $input) {
      favorite { id title }
      lastSyncId
      success
    }
  }`;

export const fileUpload = /* GraphQL */ `mutation fileUpload($contentType: String!, $filename: String!, $makePublic: Boolean, $metaData: JSON, $size: Int!) {
    fileUpload(contentType: $contentType, filename: $filename, makePublic: $makePublic, metaData: $metaData, size: $size) {
      lastSyncId
      success
      uploadFile { id }
    }
  }`;

export const fileUploadDangerouslyDelete = /* GraphQL */ `mutation fileUploadDangerouslyDelete($assetUrl: String!) {
    fileUploadDangerouslyDelete(assetUrl: $assetUrl) {
      success
    }
  }`;

export const gitAutomationStateCreate = /* GraphQL */ `mutation gitAutomationStateCreate($input: GitAutomationStateCreateInput!) {
    gitAutomationStateCreate(input: $input) {
      gitAutomationState { id }
      lastSyncId
      success
    }
  }`;

export const gitAutomationStateDelete = /* GraphQL */ `mutation gitAutomationStateDelete($id: String!) {
    gitAutomationStateDelete(id: $id) {
      entityId
      lastSyncId
      success
    }
  }`;

export const gitAutomationStateUpdate = /* GraphQL */ `mutation gitAutomationStateUpdate($id: String!, $input: GitAutomationStateUpdateInput!) {
    gitAutomationStateUpdate(id: $id, input: $input) {
      gitAutomationState { id }
      lastSyncId
      success
    }
  }`;

export const gitAutomationTargetBranchCreate = /* GraphQL */ `mutation gitAutomationTargetBranchCreate($input: GitAutomationTargetBranchCreateInput!) {
    gitAutomationTargetBranchCreate(input: $input) {
      lastSyncId
      success
      targetBranch { id }
    }
  }`;

export const gitAutomationTargetBranchDelete = /* GraphQL */ `mutation gitAutomationTargetBranchDelete($id: String!) {
    gitAutomationTargetBranchDelete(id: $id) {
      entityId
      lastSyncId
      success
    }
  }`;

export const gitAutomationTargetBranchUpdate = /* GraphQL */ `mutation gitAutomationTargetBranchUpdate($id: String!, $input: GitAutomationTargetBranchUpdateInput!) {
    gitAutomationTargetBranchUpdate(id: $id, input: $input) {
      lastSyncId
      success
      targetBranch { id }
    }
  }`;

export const googleUserAccountAuth = /* GraphQL */ `mutation googleUserAccountAuth($input: GoogleUserAccountAuthInput!) {
    googleUserAccountAuth(input: $input) {
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

export const imageUploadFromUrl = /* GraphQL */ `mutation imageUploadFromUrl($url: String!) {
    imageUploadFromUrl(url: $url) {
      lastSyncId
      success
      url
    }
  }`;

export const importFileUpload = /* GraphQL */ `mutation importFileUpload($contentType: String!, $filename: String!, $metaData: JSON, $size: Int!) {
    importFileUpload(contentType: $contentType, filename: $filename, metaData: $metaData, size: $size) {
      lastSyncId
      success
      uploadFile { id }
    }
  }`;

export const initiativeArchive = /* GraphQL */ `mutation initiativeArchive($id: String!) {
    initiativeArchive(id: $id) {
      entity { id name }
      lastSyncId
      success
    }
  }`;

export const initiativeCreate = /* GraphQL */ `mutation initiativeCreate($input: InitiativeCreateInput!) {
    initiativeCreate(input: $input) {
      initiative { id name }
      lastSyncId
      success
    }
  }`;

export const initiativeDelete = /* GraphQL */ `mutation initiativeDelete($id: String!) {
    initiativeDelete(id: $id) {
      entityId
      lastSyncId
      success
    }
  }`;

export const initiativeRelationCreate = /* GraphQL */ `mutation initiativeRelationCreate($input: InitiativeRelationCreateInput!) {
    initiativeRelationCreate(input: $input) {
      initiativeRelation { id }
      lastSyncId
      success
    }
  }`;

export const initiativeRelationDelete = /* GraphQL */ `mutation initiativeRelationDelete($id: String!) {
    initiativeRelationDelete(id: $id) {
      entityId
      lastSyncId
      success
    }
  }`;

export const initiativeRelationUpdate = /* GraphQL */ `mutation initiativeRelationUpdate($id: String!, $input: InitiativeRelationUpdateInput!) {
    initiativeRelationUpdate(id: $id, input: $input) {
      entityId
      lastSyncId
      success
    }
  }`;

export const initiativeToProjectCreate = /* GraphQL */ `mutation initiativeToProjectCreate($input: InitiativeToProjectCreateInput!) {
    initiativeToProjectCreate(input: $input) {
      initiativeToProject { id }
      lastSyncId
      success
    }
  }`;

export const initiativeToProjectDelete = /* GraphQL */ `mutation initiativeToProjectDelete($id: String!) {
    initiativeToProjectDelete(id: $id) {
      entityId
      lastSyncId
      success
    }
  }`;

export const initiativeToProjectUpdate = /* GraphQL */ `mutation initiativeToProjectUpdate($id: String!, $input: InitiativeToProjectUpdateInput!) {
    initiativeToProjectUpdate(id: $id, input: $input) {
      initiativeToProject { id }
      lastSyncId
      success
    }
  }`;

export const initiativeUnarchive = /* GraphQL */ `mutation initiativeUnarchive($id: String!) {
    initiativeUnarchive(id: $id) {
      entity { id name }
      lastSyncId
      success
    }
  }`;

export const initiativeUpdate = /* GraphQL */ `mutation initiativeUpdate($id: String!, $input: InitiativeUpdateInput!) {
    initiativeUpdate(id: $id, input: $input) {
      initiative { id name }
      lastSyncId
      success
    }
  }`;

export const initiativeUpdateArchive = /* GraphQL */ `mutation initiativeUpdateArchive($id: String!) {
    initiativeUpdateArchive(id: $id) {
      entity { id }
      lastSyncId
      success
    }
  }`;

export const initiativeUpdateCreate = /* GraphQL */ `mutation initiativeUpdateCreate($input: InitiativeUpdateCreateInput!) {
    initiativeUpdateCreate(input: $input) {
      initiativeUpdate { id }
      lastSyncId
      success
    }
  }`;

export const initiativeUpdateUnarchive = /* GraphQL */ `mutation initiativeUpdateUnarchive($id: String!) {
    initiativeUpdateUnarchive(id: $id) {
      entity { id }
      lastSyncId
      success
    }
  }`;

export const initiativeUpdateUpdate = /* GraphQL */ `mutation initiativeUpdateUpdate($id: String!, $input: InitiativeUpdateUpdateInput!) {
    initiativeUpdateUpdate(id: $id, input: $input) {
      initiativeUpdate { id }
      lastSyncId
      success
    }
  }`;

export const integrationArchive = /* GraphQL */ `mutation integrationArchive($id: String!) {
    integrationArchive(id: $id) {
      entityId
      lastSyncId
      success
    }
  }`;

export const integrationAsksConnectChannel = /* GraphQL */ `mutation integrationAsksConnectChannel($code: String!, $redirectUri: String!) {
    integrationAsksConnectChannel(code: $code, redirectUri: $redirectUri) {
      addBot
      integration { id }
      lastSyncId
      mapping { id name }
      success
    }
  }`;

export const integrationCustomerDataAttributesRefresh = /* GraphQL */ `mutation integrationCustomerDataAttributesRefresh($input: IntegrationCustomerDataAttributesRefreshInput!) {
    integrationCustomerDataAttributesRefresh(input: $input) {
      integration { id }
      lastSyncId
      success
    }
  }`;

export const integrationDelete = /* GraphQL */ `mutation integrationDelete($id: String!, $skipInstallationDeletion: Boolean) {
    integrationDelete(id: $id, skipInstallationDeletion: $skipInstallationDeletion) {
      entityId
      lastSyncId
      success
    }
  }`;

export const integrationDiscord = /* GraphQL */ `mutation integrationDiscord($code: String!, $redirectUri: String!) {
    integrationDiscord(code: $code, redirectUri: $redirectUri) {
      integration { id }
      lastSyncId
      success
    }
  }`;

export const integrationFigma = /* GraphQL */ `mutation integrationFigma($code: String!, $redirectUri: String!) {
    integrationFigma(code: $code, redirectUri: $redirectUri) {
      integration { id }
      lastSyncId
      success
    }
  }`;

export const integrationFront = /* GraphQL */ `mutation integrationFront($code: String!, $redirectUri: String!) {
    integrationFront(code: $code, redirectUri: $redirectUri) {
      integration { id }
      lastSyncId
      success
    }
  }`;

export const integrationGitHubEnterpriseServerConnect = /* GraphQL */ `mutation integrationGitHubEnterpriseServerConnect($githubUrl: String!, $organizationName: String!) {
    integrationGitHubEnterpriseServerConnect(githubUrl: $githubUrl, organizationName: $organizationName) {
      installUrl
      integration { id }
      lastSyncId
      setupUrl
      success
      webhookSecret
    }
  }`;

export const integrationGitHubPersonal = /* GraphQL */ `mutation integrationGitHubPersonal($code: String!, $codeAccess: Boolean) {
    integrationGitHubPersonal(code: $code, codeAccess: $codeAccess) {
      integration { id }
      lastSyncId
      success
    }
  }`;

export const integrationGithubCommitCreate = /* GraphQL */ `mutation integrationGithubCommitCreate {
    integrationGithubCommitCreate {
      integration { id }
      lastSyncId
      success
      webhookSecret
    }
  }`;

export const integrationGithubConnect = /* GraphQL */ `mutation integrationGithubConnect($code: String!, $codeAccess: Boolean, $installationId: String!) {
    integrationGithubConnect(code: $code, codeAccess: $codeAccess, installationId: $installationId) {
      integration { id }
      lastSyncId
      success
    }
  }`;

export const integrationGithubImportConnect = /* GraphQL */ `mutation integrationGithubImportConnect($code: String!, $installationId: String!) {
    integrationGithubImportConnect(code: $code, installationId: $installationId) {
      integration { id }
      lastSyncId
      success
    }
  }`;

export const integrationGithubImportRefresh = /* GraphQL */ `mutation integrationGithubImportRefresh($id: String!) {
    integrationGithubImportRefresh(id: $id) {
      integration { id }
      lastSyncId
      success
    }
  }`;

export const integrationGitlabConnect = /* GraphQL */ `mutation integrationGitlabConnect($accessToken: String!, $gitlabUrl: String!) {
    integrationGitlabConnect(accessToken: $accessToken, gitlabUrl: $gitlabUrl) {
      integration { id }
      lastSyncId
      success
      webhookSecret
    }
  }`;

export const integrationGong = /* GraphQL */ `mutation integrationGong($code: String!, $redirectUri: String!) {
    integrationGong(code: $code, redirectUri: $redirectUri) {
      integration { id }
      lastSyncId
      success
    }
  }`;

export const integrationGoogleCalendarPersonalConnect = /* GraphQL */ `mutation integrationGoogleCalendarPersonalConnect($code: String!) {
    integrationGoogleCalendarPersonalConnect(code: $code) {
      integration { id }
      lastSyncId
      success
    }
  }`;

export const integrationGoogleSheets = /* GraphQL */ `mutation integrationGoogleSheets($code: String!) {
    integrationGoogleSheets(code: $code) {
      integration { id }
      lastSyncId
      success
    }
  }`;

export const integrationIntercom = /* GraphQL */ `mutation integrationIntercom($code: String!, $domainUrl: String, $redirectUri: String!) {
    integrationIntercom(code: $code, domainUrl: $domainUrl, redirectUri: $redirectUri) {
      integration { id }
      lastSyncId
      success
    }
  }`;

export const integrationIntercomDelete = /* GraphQL */ `mutation integrationIntercomDelete {
    integrationIntercomDelete {
      integration { id }
      lastSyncId
      success
    }
  }`;

export const integrationIntercomSettingsUpdate = /* GraphQL */ `mutation integrationIntercomSettingsUpdate($input: IntercomSettingsInput!) {
    integrationIntercomSettingsUpdate(input: $input) {
      integration { id }
      lastSyncId
      success
    }
  }`;

export const integrationJiraPersonal = /* GraphQL */ `mutation integrationJiraPersonal($accessToken: String, $code: String) {
    integrationJiraPersonal(accessToken: $accessToken, code: $code) {
      integration { id }
      lastSyncId
      success
    }
  }`;

export const integrationJiraUpdate = /* GraphQL */ `mutation integrationJiraUpdate($input: JiraUpdateInput!) {
    integrationJiraUpdate(input: $input) {
      integration { id }
      lastSyncId
      success
    }
  }`;

export const integrationLaunchDarklyConnect = /* GraphQL */ `mutation integrationLaunchDarklyConnect($code: String!, $environment: String!, $projectKey: String!) {
    integrationLaunchDarklyConnect(code: $code, environment: $environment, projectKey: $projectKey) {
      integration { id }
      lastSyncId
      success
    }
  }`;

export const integrationLaunchDarklyPersonalConnect = /* GraphQL */ `mutation integrationLaunchDarklyPersonalConnect($code: String!) {
    integrationLaunchDarklyPersonalConnect(code: $code) {
      integration { id }
      lastSyncId
      success
    }
  }`;

export const integrationLoom = /* GraphQL */ `mutation integrationLoom {
    integrationLoom {
      integration { id }
      lastSyncId
      success
    }
  }`;

export const integrationOpsgenieConnect = /* GraphQL */ `mutation integrationOpsgenieConnect($apiKey: String!) {
    integrationOpsgenieConnect(apiKey: $apiKey) {
      integration { id }
      lastSyncId
      success
    }
  }`;

export const integrationOpsgenieRefreshScheduleMappings = /* GraphQL */ `mutation integrationOpsgenieRefreshScheduleMappings {
    integrationOpsgenieRefreshScheduleMappings {
      integration { id }
      lastSyncId
      success
    }
  }`;

export const integrationPagerDutyConnect = /* GraphQL */ `mutation integrationPagerDutyConnect($code: String!, $redirectUri: String!) {
    integrationPagerDutyConnect(code: $code, redirectUri: $redirectUri) {
      integration { id }
      lastSyncId
      success
    }
  }`;

export const integrationPagerDutyRefreshScheduleMappings = /* GraphQL */ `mutation integrationPagerDutyRefreshScheduleMappings {
    integrationPagerDutyRefreshScheduleMappings {
      integration { id }
      lastSyncId
      success
    }
  }`;

export const integrationRequest = /* GraphQL */ `mutation integrationRequest($input: IntegrationRequestInput!) {
    integrationRequest(input: $input) {
      success
    }
  }`;

export const integrationSalesforce = /* GraphQL */ `mutation integrationSalesforce($code: String!, $redirectUri: String!, $subdomain: String!) {
    integrationSalesforce(code: $code, redirectUri: $redirectUri, subdomain: $subdomain) {
      integration { id }
      lastSyncId
      success
    }
  }`;

export const integrationSalesforceMetadataRefresh = /* GraphQL */ `mutation integrationSalesforceMetadataRefresh($id: String!) {
    integrationSalesforceMetadataRefresh(id: $id) {
      integration { id }
      lastSyncId
      success
    }
  }`;

export const integrationSentryConnect = /* GraphQL */ `mutation integrationSentryConnect($code: String!, $installationId: String!, $organizationSlug: String!) {
    integrationSentryConnect(code: $code, installationId: $installationId, organizationSlug: $organizationSlug) {
      integration { id }
      lastSyncId
      success
    }
  }`;

export const integrationSettingsUpdate = /* GraphQL */ `mutation integrationSettingsUpdate($id: String!, $input: IntegrationSettingsInput!) {
    integrationSettingsUpdate(id: $id, input: $input) {
      integration { id }
      lastSyncId
      success
    }
  }`;

export const integrationSlack = /* GraphQL */ `mutation integrationSlack($code: String!, $redirectUri: String!, $shouldUseV2Auth: Boolean) {
    integrationSlack(code: $code, redirectUri: $redirectUri, shouldUseV2Auth: $shouldUseV2Auth) {
      integration { id }
      lastSyncId
      success
    }
  }`;

export const integrationSlackAsks = /* GraphQL */ `mutation integrationSlackAsks($code: String!, $redirectUri: String!) {
    integrationSlackAsks(code: $code, redirectUri: $redirectUri) {
      integration { id }
      lastSyncId
      success
    }
  }`;

export const integrationSlackCustomViewNotifications = /* GraphQL */ `mutation integrationSlackCustomViewNotifications($code: String!, $customViewId: String!, $redirectUri: String!) {
    integrationSlackCustomViewNotifications(code: $code, customViewId: $customViewId, redirectUri: $redirectUri) {
      addBot
      integration { id }
      lastSyncId
      nudgeToConnectMainSlackIntegration
      nudgeToUpdateMainSlackIntegration
      success
    }
  }`;

export const integrationSlackCustomerChannelLink = /* GraphQL */ `mutation integrationSlackCustomerChannelLink($code: String!, $customerId: String!, $redirectUri: String!) {
    integrationSlackCustomerChannelLink(code: $code, customerId: $customerId, redirectUri: $redirectUri) {
      lastSyncId
      success
    }
  }`;

export const integrationSlackImportEmojis = /* GraphQL */ `mutation integrationSlackImportEmojis($code: String!, $redirectUri: String!) {
    integrationSlackImportEmojis(code: $code, redirectUri: $redirectUri) {
      integration { id }
      lastSyncId
      success
    }
  }`;

export const integrationSlackInitiativePost = /* GraphQL */ `mutation integrationSlackInitiativePost($code: String!, $initiativeId: String!, $redirectUri: String!) {
    integrationSlackInitiativePost(code: $code, initiativeId: $initiativeId, redirectUri: $redirectUri) {
      addBot
      integration { id }
      lastSyncId
      nudgeToConnectMainSlackIntegration
      nudgeToUpdateMainSlackIntegration
      success
    }
  }`;

export const integrationSlackOrAsksUpdateSlackTeamName = /* GraphQL */ `mutation integrationSlackOrAsksUpdateSlackTeamName($integrationId: String!) {
    integrationSlackOrAsksUpdateSlackTeamName(integrationId: $integrationId) {
      name
      success
    }
  }`;

export const integrationSlackOrgInitiativeUpdatesPost = /* GraphQL */ `mutation integrationSlackOrgInitiativeUpdatesPost($code: String!, $redirectUri: String!) {
    integrationSlackOrgInitiativeUpdatesPost(code: $code, redirectUri: $redirectUri) {
      addBot
      integration { id }
      lastSyncId
      nudgeToConnectMainSlackIntegration
      nudgeToUpdateMainSlackIntegration
      success
    }
  }`;

export const integrationSlackOrgProjectUpdatesPost = /* GraphQL */ `mutation integrationSlackOrgProjectUpdatesPost($code: String!, $redirectUri: String!) {
    integrationSlackOrgProjectUpdatesPost(code: $code, redirectUri: $redirectUri) {
      addBot
      integration { id }
      lastSyncId
      nudgeToConnectMainSlackIntegration
      nudgeToUpdateMainSlackIntegration
      success
    }
  }`;

export const integrationSlackPersonal = /* GraphQL */ `mutation integrationSlackPersonal($code: String!, $redirectUri: String!) {
    integrationSlackPersonal(code: $code, redirectUri: $redirectUri) {
      integration { id }
      lastSyncId
      success
    }
  }`;

export const integrationSlackPost = /* GraphQL */ `mutation integrationSlackPost($code: String!, $redirectUri: String!, $shouldUseV2Auth: Boolean, $teamId: String!) {
    integrationSlackPost(code: $code, redirectUri: $redirectUri, shouldUseV2Auth: $shouldUseV2Auth, teamId: $teamId) {
      addBot
      integration { id }
      lastSyncId
      nudgeToConnectMainSlackIntegration
      nudgeToUpdateMainSlackIntegration
      success
    }
  }`;

export const integrationSlackProjectPost = /* GraphQL */ `mutation integrationSlackProjectPost($code: String!, $projectId: String!, $redirectUri: String!, $service: String!) {
    integrationSlackProjectPost(code: $code, projectId: $projectId, redirectUri: $redirectUri, service: $service) {
      addBot
      integration { id }
      lastSyncId
      nudgeToConnectMainSlackIntegration
      nudgeToUpdateMainSlackIntegration
      success
    }
  }`;

export const integrationTemplateCreate = /* GraphQL */ `mutation integrationTemplateCreate($input: IntegrationTemplateCreateInput!) {
    integrationTemplateCreate(input: $input) {
      integrationTemplate { id }
      lastSyncId
      success
    }
  }`;

export const integrationTemplateDelete = /* GraphQL */ `mutation integrationTemplateDelete($id: String!) {
    integrationTemplateDelete(id: $id) {
      entityId
      lastSyncId
      success
    }
  }`;

export const integrationUpdate = /* GraphQL */ `mutation integrationUpdate($id: String!, $input: IntegrationUpdateInput!) {
    integrationUpdate(id: $id, input: $input) {
      integration { id }
      lastSyncId
      success
    }
  }`;

export const integrationZendesk = /* GraphQL */ `mutation integrationZendesk($code: String!, $redirectUri: String!, $scope: String!, $subdomain: String!) {
    integrationZendesk(code: $code, redirectUri: $redirectUri, scope: $scope, subdomain: $subdomain) {
      integration { id }
      lastSyncId
      success
    }
  }`;

export const integrationsSettingsCreate = /* GraphQL */ `mutation integrationsSettingsCreate($input: IntegrationsSettingsCreateInput!) {
    integrationsSettingsCreate(input: $input) {
      integrationsSettings { id }
      lastSyncId
      success
    }
  }`;

export const integrationsSettingsUpdate = /* GraphQL */ `mutation integrationsSettingsUpdate($id: String!, $input: IntegrationsSettingsUpdateInput!) {
    integrationsSettingsUpdate(id: $id, input: $input) {
      integrationsSettings { id }
      lastSyncId
      success
    }
  }`;

export const issueAddLabel = /* GraphQL */ `mutation issueAddLabel($id: String!, $labelId: String!) {
    issueAddLabel(id: $id, labelId: $labelId) {
      issue { id title identifier }
      lastSyncId
      success
    }
  }`;

export const issueArchive = /* GraphQL */ `mutation issueArchive($id: String!, $trash: Boolean) {
    issueArchive(id: $id, trash: $trash) {
      entity { id title identifier }
      lastSyncId
      success
    }
  }`;

export const issueBatchCreate = /* GraphQL */ `mutation issueBatchCreate($input: IssueBatchCreateInput!) {
    issueBatchCreate(input: $input) {
      issues { id title identifier }
      lastSyncId
      success
    }
  }`;

export const issueBatchUpdate = /* GraphQL */ `mutation issueBatchUpdate($ids: [UUID!]!, $input: IssueUpdateInput!) {
    issueBatchUpdate(ids: $ids, input: $input) {
      issues { id title identifier }
      lastSyncId
      success
    }
  }`;

export const issueCreate = /* GraphQL */ `mutation issueCreate($input: IssueCreateInput!) {
    issueCreate(input: $input) {
      issue { id title identifier }
      lastSyncId
      success
    }
  }`;

export const issueDelete = /* GraphQL */ `mutation issueDelete($id: String!, $permanentlyDelete: Boolean) {
    issueDelete(id: $id, permanentlyDelete: $permanentlyDelete) {
      entity { id title identifier }
      lastSyncId
      success
    }
  }`;

export const issueDescriptionUpdateFromFront = /* GraphQL */ `mutation issueDescriptionUpdateFromFront($description: String!, $id: String!) {
    issueDescriptionUpdateFromFront(description: $description, id: $id) {
      issue { id title identifier }
      lastSyncId
      success
    }
  }`;

export const issueImportCreateAsana = /* GraphQL */ `mutation issueImportCreateAsana($asanaTeamName: String!, $asanaToken: String!, $id: String, $includeClosedIssues: Boolean, $instantProcess: Boolean, $organizationId: String, $teamId: String, $teamName: String) {
    issueImportCreateAsana(asanaTeamName: $asanaTeamName, asanaToken: $asanaToken, id: $id, includeClosedIssues: $includeClosedIssues, instantProcess: $instantProcess, organizationId: $organizationId, teamId: $teamId, teamName: $teamName) {
      issueImport { id }
      lastSyncId
      success
    }
  }`;

export const issueImportCreateCSVJira = /* GraphQL */ `mutation issueImportCreateCSVJira($csvUrl: String!, $jiraEmail: String, $jiraHostname: String, $jiraToken: String, $organizationId: String, $teamId: String, $teamName: String) {
    issueImportCreateCSVJira(csvUrl: $csvUrl, jiraEmail: $jiraEmail, jiraHostname: $jiraHostname, jiraToken: $jiraToken, organizationId: $organizationId, teamId: $teamId, teamName: $teamName) {
      issueImport { id }
      lastSyncId
      success
    }
  }`;

export const issueImportCreateClubhouse = /* GraphQL */ `mutation issueImportCreateClubhouse($clubhouseGroupName: String!, $clubhouseToken: String!, $id: String, $includeClosedIssues: Boolean, $instantProcess: Boolean, $organizationId: String, $teamId: String, $teamName: String) {
    issueImportCreateClubhouse(clubhouseGroupName: $clubhouseGroupName, clubhouseToken: $clubhouseToken, id: $id, includeClosedIssues: $includeClosedIssues, instantProcess: $instantProcess, organizationId: $organizationId, teamId: $teamId, teamName: $teamName) {
      issueImport { id }
      lastSyncId
      success
    }
  }`;

export const issueImportCreateGithub = /* GraphQL */ `mutation issueImportCreateGithub($githubLabels: [String!], $githubRepoIds: [Int!], $githubShouldImportOrgProjects: Boolean, $includeClosedIssues: Boolean, $instantProcess: Boolean, $integrationId: String, $organizationId: String, $teamId: String, $teamName: String) {
    issueImportCreateGithub(githubLabels: $githubLabels, githubRepoIds: $githubRepoIds, githubShouldImportOrgProjects: $githubShouldImportOrgProjects, includeClosedIssues: $includeClosedIssues, instantProcess: $instantProcess, integrationId: $integrationId, organizationId: $organizationId, teamId: $teamId, teamName: $teamName) {
      issueImport { id }
      lastSyncId
      success
    }
  }`;

export const issueImportCreateJira = /* GraphQL */ `mutation issueImportCreateJira($id: String, $includeClosedIssues: Boolean, $instantProcess: Boolean, $jiraEmail: String!, $jiraHostname: String!, $jiraProject: String!, $jiraToken: String!, $jql: String, $organizationId: String, $teamId: String, $teamName: String) {
    issueImportCreateJira(id: $id, includeClosedIssues: $includeClosedIssues, instantProcess: $instantProcess, jiraEmail: $jiraEmail, jiraHostname: $jiraHostname, jiraProject: $jiraProject, jiraToken: $jiraToken, jql: $jql, organizationId: $organizationId, teamId: $teamId, teamName: $teamName) {
      issueImport { id }
      lastSyncId
      success
    }
  }`;

export const issueImportCreateLinearV2 = /* GraphQL */ `mutation issueImportCreateLinearV2($id: String, $linearSourceOrganizationId: String!) {
    issueImportCreateLinearV2(id: $id, linearSourceOrganizationId: $linearSourceOrganizationId) {
      issueImport { id }
      lastSyncId
      success
    }
  }`;

export const issueImportDelete = /* GraphQL */ `mutation issueImportDelete($issueImportId: String!) {
    issueImportDelete(issueImportId: $issueImportId) {
      issueImport { id }
      lastSyncId
      success
    }
  }`;

export const issueImportProcess = /* GraphQL */ `mutation issueImportProcess($issueImportId: String!, $mapping: JSONObject!) {
    issueImportProcess(issueImportId: $issueImportId, mapping: $mapping) {
      issueImport { id }
      lastSyncId
      success
    }
  }`;

export const issueImportUpdate = /* GraphQL */ `mutation issueImportUpdate($id: String!, $input: IssueImportUpdateInput!) {
    issueImportUpdate(id: $id, input: $input) {
      issueImport { id }
      lastSyncId
      success
    }
  }`;

export const issueLabelCreate = /* GraphQL */ `mutation issueLabelCreate($input: IssueLabelCreateInput!, $replaceTeamLabels: Boolean) {
    issueLabelCreate(input: $input, replaceTeamLabels: $replaceTeamLabels) {
      issueLabel { id name }
      lastSyncId
      success
    }
  }`;

export const issueLabelDelete = /* GraphQL */ `mutation issueLabelDelete($id: String!) {
    issueLabelDelete(id: $id) {
      entityId
      lastSyncId
      success
    }
  }`;

export const issueLabelUpdate = /* GraphQL */ `mutation issueLabelUpdate($id: String!, $input: IssueLabelUpdateInput!, $replaceTeamLabels: Boolean) {
    issueLabelUpdate(id: $id, input: $input, replaceTeamLabels: $replaceTeamLabels) {
      issueLabel { id name }
      lastSyncId
      success
    }
  }`;

export const issueRelationCreate = /* GraphQL */ `mutation issueRelationCreate($input: IssueRelationCreateInput!, $overrideCreatedAt: DateTime) {
    issueRelationCreate(input: $input, overrideCreatedAt: $overrideCreatedAt) {
      issueRelation { id }
      lastSyncId
      success
    }
  }`;

export const issueRelationDelete = /* GraphQL */ `mutation issueRelationDelete($id: String!) {
    issueRelationDelete(id: $id) {
      entityId
      lastSyncId
      success
    }
  }`;

export const issueRelationUpdate = /* GraphQL */ `mutation issueRelationUpdate($id: String!, $input: IssueRelationUpdateInput!) {
    issueRelationUpdate(id: $id, input: $input) {
      issueRelation { id }
      lastSyncId
      success
    }
  }`;

export const issueReminder = /* GraphQL */ `mutation issueReminder($id: String!, $reminderAt: DateTime!) {
    issueReminder(id: $id, reminderAt: $reminderAt) {
      issue { id title identifier }
      lastSyncId
      success
    }
  }`;

export const issueRemoveLabel = /* GraphQL */ `mutation issueRemoveLabel($id: String!, $labelId: String!) {
    issueRemoveLabel(id: $id, labelId: $labelId) {
      issue { id title identifier }
      lastSyncId
      success
    }
  }`;

export const issueSubscribe = /* GraphQL */ `mutation issueSubscribe($id: String!, $userId: String) {
    issueSubscribe(id: $id, userId: $userId) {
      issue { id title identifier }
      lastSyncId
      success
    }
  }`;

export const issueUnarchive = /* GraphQL */ `mutation issueUnarchive($id: String!) {
    issueUnarchive(id: $id) {
      entity { id title identifier }
      lastSyncId
      success
    }
  }`;

export const issueUnsubscribe = /* GraphQL */ `mutation issueUnsubscribe($id: String!, $userId: String) {
    issueUnsubscribe(id: $id, userId: $userId) {
      issue { id title identifier }
      lastSyncId
      success
    }
  }`;

export const issueUpdate = /* GraphQL */ `mutation issueUpdate($id: String!, $input: IssueUpdateInput!) {
    issueUpdate(id: $id, input: $input) {
      issue { id title identifier }
      lastSyncId
      success
    }
  }`;

export const jiraIntegrationConnect = /* GraphQL */ `mutation jiraIntegrationConnect($input: JiraConfigurationInput!) {
    jiraIntegrationConnect(input: $input) {
      integration { id }
      lastSyncId
      success
    }
  }`;

export const joinOrganizationFromOnboarding = /* GraphQL */ `mutation joinOrganizationFromOnboarding($input: JoinOrganizationInput!) {
    joinOrganizationFromOnboarding(input: $input) {
      organization { id name }
      user { id name }
    }
  }`;

export const leaveOrganization = /* GraphQL */ `mutation leaveOrganization($organizationId: String!) {
    leaveOrganization(organizationId: $organizationId) {
      organization { id name }
      user { id name }
    }
  }`;

export const logout = /* GraphQL */ `mutation logout($reason: String) {
    logout(reason: $reason) {
      success
    }
  }`;

export const logoutAllSessions = /* GraphQL */ `mutation logoutAllSessions($reason: String) {
    logoutAllSessions(reason: $reason) {
      success
    }
  }`;

export const logoutOtherSessions = /* GraphQL */ `mutation logoutOtherSessions($reason: String) {
    logoutOtherSessions(reason: $reason) {
      success
    }
  }`;

export const logoutSession = /* GraphQL */ `mutation logoutSession($sessionId: String!) {
    logoutSession(sessionId: $sessionId) {
      success
    }
  }`;

export const notificationArchive = /* GraphQL */ `mutation notificationArchive($id: String!) {
    notificationArchive(id: $id) {
      lastSyncId
      success
    }
  }`;

export const notificationArchiveAll = /* GraphQL */ `mutation notificationArchiveAll($input: NotificationEntityInput!) {
    notificationArchiveAll(input: $input) {
      lastSyncId
      success
    }
  }`;

export const notificationCategoryChannelSubscriptionUpdate = /* GraphQL */ `mutation notificationCategoryChannelSubscriptionUpdate($category: NotificationCategory!, $channel: NotificationChannel!, $subscribe: Boolean!) {
    notificationCategoryChannelSubscriptionUpdate(category: $category, channel: $channel, subscribe: $subscribe) {
      lastSyncId
      success
      userSettings { id }
    }
  }`;

export const notificationMarkReadAll = /* GraphQL */ `mutation notificationMarkReadAll($input: NotificationEntityInput!, $readAt: DateTime!) {
    notificationMarkReadAll(input: $input, readAt: $readAt) {
      lastSyncId
      success
    }
  }`;

export const notificationMarkUnreadAll = /* GraphQL */ `mutation notificationMarkUnreadAll($input: NotificationEntityInput!) {
    notificationMarkUnreadAll(input: $input) {
      lastSyncId
      success
    }
  }`;

export const notificationSnoozeAll = /* GraphQL */ `mutation notificationSnoozeAll($input: NotificationEntityInput!, $snoozedUntilAt: DateTime!) {
    notificationSnoozeAll(input: $input, snoozedUntilAt: $snoozedUntilAt) {
      lastSyncId
      success
    }
  }`;

export const notificationSubscriptionCreate = /* GraphQL */ `mutation notificationSubscriptionCreate($input: NotificationSubscriptionCreateInput!) {
    notificationSubscriptionCreate(input: $input) {
      lastSyncId
      success
    }
  }`;

export const notificationSubscriptionDelete = /* GraphQL */ `mutation notificationSubscriptionDelete($id: String!) {
    notificationSubscriptionDelete(id: $id) {
      entityId
      lastSyncId
      success
    }
  }`;

export const notificationSubscriptionUpdate = /* GraphQL */ `mutation notificationSubscriptionUpdate($id: String!, $input: NotificationSubscriptionUpdateInput!) {
    notificationSubscriptionUpdate(id: $id, input: $input) {
      lastSyncId
      success
    }
  }`;

export const notificationUnarchive = /* GraphQL */ `mutation notificationUnarchive($id: String!) {
    notificationUnarchive(id: $id) {
      lastSyncId
      success
    }
  }`;

export const notificationUnsnoozeAll = /* GraphQL */ `mutation notificationUnsnoozeAll($input: NotificationEntityInput!, $unsnoozedAt: DateTime!) {
    notificationUnsnoozeAll(input: $input, unsnoozedAt: $unsnoozedAt) {
      lastSyncId
      success
    }
  }`;

export const notificationUpdate = /* GraphQL */ `mutation notificationUpdate($id: String!, $input: NotificationUpdateInput!) {
    notificationUpdate(id: $id, input: $input) {
      lastSyncId
      success
    }
  }`;

export const organizationCancelDelete = /* GraphQL */ `mutation organizationCancelDelete {
    organizationCancelDelete {
      success
    }
  }`;

export const organizationDelete = /* GraphQL */ `mutation organizationDelete($input: DeleteOrganizationInput!) {
    organizationDelete(input: $input) {
      success
    }
  }`;

export const organizationDeleteChallenge = /* GraphQL */ `mutation organizationDeleteChallenge {
    organizationDeleteChallenge {
      success
    }
  }`;

export const organizationDomainClaim = /* GraphQL */ `mutation organizationDomainClaim($id: String!) {
    organizationDomainClaim(id: $id) {
      success
    }
  }`;

export const organizationDomainCreate = /* GraphQL */ `mutation organizationDomainCreate($input: OrganizationDomainCreateInput!, $triggerEmailVerification: Boolean) {
    organizationDomainCreate(input: $input, triggerEmailVerification: $triggerEmailVerification) {
      lastSyncId
      organizationDomain { id name }
      success
    }
  }`;

export const organizationDomainDelete = /* GraphQL */ `mutation organizationDomainDelete($id: String!) {
    organizationDomainDelete(id: $id) {
      entityId
      lastSyncId
      success
    }
  }`;

export const organizationDomainUpdate = /* GraphQL */ `mutation organizationDomainUpdate($id: String!, $input: OrganizationDomainUpdateInput!) {
    organizationDomainUpdate(id: $id, input: $input) {
      lastSyncId
      organizationDomain { id name }
      success
    }
  }`;

export const organizationDomainVerify = /* GraphQL */ `mutation organizationDomainVerify($input: OrganizationDomainVerificationInput!) {
    organizationDomainVerify(input: $input) {
      lastSyncId
      organizationDomain { id name }
      success
    }
  }`;

export const organizationInviteCreate = /* GraphQL */ `mutation organizationInviteCreate($input: OrganizationInviteCreateInput!) {
    organizationInviteCreate(input: $input) {
      lastSyncId
      organizationInvite { id }
      success
    }
  }`;

export const organizationInviteDelete = /* GraphQL */ `mutation organizationInviteDelete($id: String!) {
    organizationInviteDelete(id: $id) {
      entityId
      lastSyncId
      success
    }
  }`;

export const organizationInviteUpdate = /* GraphQL */ `mutation organizationInviteUpdate($id: String!, $input: OrganizationInviteUpdateInput!) {
    organizationInviteUpdate(id: $id, input: $input) {
      lastSyncId
      organizationInvite { id }
      success
    }
  }`;

export const organizationStartTrial = /* GraphQL */ `mutation organizationStartTrial {
    organizationStartTrial {
      success
    }
  }`;

export const organizationStartTrialForPlan = /* GraphQL */ `mutation organizationStartTrialForPlan($input: OrganizationStartTrialInput!) {
    organizationStartTrialForPlan(input: $input) {
      success
    }
  }`;

export const organizationUpdate = /* GraphQL */ `mutation organizationUpdate($input: OrganizationUpdateInput!) {
    organizationUpdate(input: $input) {
      lastSyncId
      organization { id name }
      success
    }
  }`;

export const passkeyLoginFinish = /* GraphQL */ `mutation passkeyLoginFinish($authId: String!, $response: JSONObject!) {
    passkeyLoginFinish(authId: $authId, response: $response) {
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

export const passkeyLoginStart = /* GraphQL */ `mutation passkeyLoginStart($authId: String!) {
    passkeyLoginStart(authId: $authId) {
      options
      success
    }
  }`;

export const projectAddLabel = /* GraphQL */ `mutation projectAddLabel($id: String!, $labelId: String!) {
    projectAddLabel(id: $id, labelId: $labelId) {
      lastSyncId
      project { id name }
      success
    }
  }`;

export const projectArchive = /* GraphQL */ `mutation projectArchive($id: String!, $trash: Boolean) {
    projectArchive(id: $id, trash: $trash) {
      entity { id name }
      lastSyncId
      success
    }
  }`;

export const projectCreate = /* GraphQL */ `mutation projectCreate($connectSlackChannel: Boolean, $input: ProjectCreateInput!) {
    projectCreate(connectSlackChannel: $connectSlackChannel, input: $input) {
      lastSyncId
      project { id name }
      success
    }
  }`;

export const projectDelete = /* GraphQL */ `mutation projectDelete($id: String!) {
    projectDelete(id: $id) {
      entity { id name }
      lastSyncId
      success
    }
  }`;

export const projectLabelCreate = /* GraphQL */ `mutation projectLabelCreate($input: ProjectLabelCreateInput!) {
    projectLabelCreate(input: $input) {
      lastSyncId
      projectLabel { id name }
      success
    }
  }`;

export const projectLabelDelete = /* GraphQL */ `mutation projectLabelDelete($id: String!) {
    projectLabelDelete(id: $id) {
      entityId
      lastSyncId
      success
    }
  }`;

export const projectLabelUpdate = /* GraphQL */ `mutation projectLabelUpdate($id: String!, $input: ProjectLabelUpdateInput!) {
    projectLabelUpdate(id: $id, input: $input) {
      lastSyncId
      projectLabel { id name }
      success
    }
  }`;

export const projectMilestoneCreate = /* GraphQL */ `mutation projectMilestoneCreate($input: ProjectMilestoneCreateInput!) {
    projectMilestoneCreate(input: $input) {
      lastSyncId
      projectMilestone { id name }
      success
    }
  }`;

export const projectMilestoneDelete = /* GraphQL */ `mutation projectMilestoneDelete($id: String!) {
    projectMilestoneDelete(id: $id) {
      entityId
      lastSyncId
      success
    }
  }`;

export const projectMilestoneMove = /* GraphQL */ `mutation projectMilestoneMove($id: String!, $input: ProjectMilestoneMoveInput!) {
    projectMilestoneMove(id: $id, input: $input) {
      lastSyncId
      previousIssueTeamIds { id }
      previousProjectTeamIds { id }
      projectMilestone { id name }
      success
    }
  }`;

export const projectMilestoneUpdate = /* GraphQL */ `mutation projectMilestoneUpdate($id: String!, $input: ProjectMilestoneUpdateInput!) {
    projectMilestoneUpdate(id: $id, input: $input) {
      lastSyncId
      projectMilestone { id name }
      success
    }
  }`;

export const projectReassignStatus = /* GraphQL */ `mutation projectReassignStatus($newProjectStatusId: String!, $originalProjectStatusId: String!) {
    projectReassignStatus(newProjectStatusId: $newProjectStatusId, originalProjectStatusId: $originalProjectStatusId) {
      lastSyncId
      success
    }
  }`;

export const projectRelationCreate = /* GraphQL */ `mutation projectRelationCreate($input: ProjectRelationCreateInput!) {
    projectRelationCreate(input: $input) {
      lastSyncId
      projectRelation { id }
      success
    }
  }`;

export const projectRelationDelete = /* GraphQL */ `mutation projectRelationDelete($id: String!) {
    projectRelationDelete(id: $id) {
      entityId
      lastSyncId
      success
    }
  }`;

export const projectRelationUpdate = /* GraphQL */ `mutation projectRelationUpdate($id: String!, $input: ProjectRelationUpdateInput!) {
    projectRelationUpdate(id: $id, input: $input) {
      lastSyncId
      projectRelation { id }
      success
    }
  }`;

export const projectRemoveLabel = /* GraphQL */ `mutation projectRemoveLabel($id: String!, $labelId: String!) {
    projectRemoveLabel(id: $id, labelId: $labelId) {
      lastSyncId
      project { id name }
      success
    }
  }`;

export const projectStatusArchive = /* GraphQL */ `mutation projectStatusArchive($id: String!) {
    projectStatusArchive(id: $id) {
      entity { id name }
      lastSyncId
      success
    }
  }`;

export const projectStatusCreate = /* GraphQL */ `mutation projectStatusCreate($input: ProjectStatusCreateInput!) {
    projectStatusCreate(input: $input) {
      lastSyncId
      status { id name }
      success
    }
  }`;

export const projectStatusUnarchive = /* GraphQL */ `mutation projectStatusUnarchive($id: String!) {
    projectStatusUnarchive(id: $id) {
      entity { id name }
      lastSyncId
      success
    }
  }`;

export const projectStatusUpdate = /* GraphQL */ `mutation projectStatusUpdate($id: String!, $input: ProjectStatusUpdateInput!) {
    projectStatusUpdate(id: $id, input: $input) {
      lastSyncId
      status { id name }
      success
    }
  }`;

export const projectUnarchive = /* GraphQL */ `mutation projectUnarchive($id: String!) {
    projectUnarchive(id: $id) {
      entity { id name }
      lastSyncId
      success
    }
  }`;

export const projectUpdate = /* GraphQL */ `mutation projectUpdate($id: String!, $input: ProjectUpdateInput!) {
    projectUpdate(id: $id, input: $input) {
      lastSyncId
      project { id name }
      success
    }
  }`;

export const projectUpdateArchive = /* GraphQL */ `mutation projectUpdateArchive($id: String!) {
    projectUpdateArchive(id: $id) {
      entity { id }
      lastSyncId
      success
    }
  }`;

export const projectUpdateCreate = /* GraphQL */ `mutation projectUpdateCreate($input: ProjectUpdateCreateInput!) {
    projectUpdateCreate(input: $input) {
      lastSyncId
      projectUpdate { id }
      success
    }
  }`;

export const projectUpdateDelete = /* GraphQL */ `mutation projectUpdateDelete($id: String!) {
    projectUpdateDelete(id: $id) {
      entityId
      lastSyncId
      success
    }
  }`;

export const projectUpdateUnarchive = /* GraphQL */ `mutation projectUpdateUnarchive($id: String!) {
    projectUpdateUnarchive(id: $id) {
      entity { id }
      lastSyncId
      success
    }
  }`;

export const projectUpdateUpdate = /* GraphQL */ `mutation projectUpdateUpdate($id: String!, $input: ProjectUpdateUpdateInput!) {
    projectUpdateUpdate(id: $id, input: $input) {
      lastSyncId
      projectUpdate { id }
      success
    }
  }`;

export const pushSubscriptionCreate = /* GraphQL */ `mutation pushSubscriptionCreate($input: PushSubscriptionCreateInput!) {
    pushSubscriptionCreate(input: $input) {
      entity { id }
      lastSyncId
      success
    }
  }`;

export const pushSubscriptionDelete = /* GraphQL */ `mutation pushSubscriptionDelete($id: String!) {
    pushSubscriptionDelete(id: $id) {
      entity { id }
      lastSyncId
      success
    }
  }`;

export const reactionCreate = /* GraphQL */ `mutation reactionCreate($input: ReactionCreateInput!) {
    reactionCreate(input: $input) {
      lastSyncId
      reaction { id }
      success
    }
  }`;

export const reactionDelete = /* GraphQL */ `mutation reactionDelete($id: String!) {
    reactionDelete(id: $id) {
      entityId
      lastSyncId
      success
    }
  }`;

export const refreshGoogleSheetsData = /* GraphQL */ `mutation refreshGoogleSheetsData($id: String!, $type: String) {
    refreshGoogleSheetsData(id: $id, type: $type) {
      integration { id }
      lastSyncId
      success
    }
  }`;

export const resendOrganizationInvite = /* GraphQL */ `mutation resendOrganizationInvite($id: String!) {
    resendOrganizationInvite(id: $id) {
      entityId
      lastSyncId
      success
    }
  }`;

export const resendOrganizationInviteByEmail = /* GraphQL */ `mutation resendOrganizationInviteByEmail($email: String!) {
    resendOrganizationInviteByEmail(email: $email) {
      entityId
      lastSyncId
      success
    }
  }`;

export const roadmapArchive = /* GraphQL */ `mutation roadmapArchive($id: String!) {
    roadmapArchive(id: $id) {
      entity { id name }
      lastSyncId
      success
    }
  }`;

export const roadmapCreate = /* GraphQL */ `mutation roadmapCreate($input: RoadmapCreateInput!) {
    roadmapCreate(input: $input) {
      lastSyncId
      roadmap { id name }
      success
    }
  }`;

export const roadmapDelete = /* GraphQL */ `mutation roadmapDelete($id: String!) {
    roadmapDelete(id: $id) {
      entityId
      lastSyncId
      success
    }
  }`;

export const roadmapToProjectCreate = /* GraphQL */ `mutation roadmapToProjectCreate($input: RoadmapToProjectCreateInput!) {
    roadmapToProjectCreate(input: $input) {
      lastSyncId
      roadmapToProject { id }
      success
    }
  }`;

export const roadmapToProjectDelete = /* GraphQL */ `mutation roadmapToProjectDelete($id: String!) {
    roadmapToProjectDelete(id: $id) {
      entityId
      lastSyncId
      success
    }
  }`;

export const roadmapToProjectUpdate = /* GraphQL */ `mutation roadmapToProjectUpdate($id: String!, $input: RoadmapToProjectUpdateInput!) {
    roadmapToProjectUpdate(id: $id, input: $input) {
      lastSyncId
      roadmapToProject { id }
      success
    }
  }`;

export const roadmapUnarchive = /* GraphQL */ `mutation roadmapUnarchive($id: String!) {
    roadmapUnarchive(id: $id) {
      entity { id name }
      lastSyncId
      success
    }
  }`;

export const roadmapUpdate = /* GraphQL */ `mutation roadmapUpdate($id: String!, $input: RoadmapUpdateInput!) {
    roadmapUpdate(id: $id, input: $input) {
      lastSyncId
      roadmap { id name }
      success
    }
  }`;

export const samlTokenUserAccountAuth = /* GraphQL */ `mutation samlTokenUserAccountAuth($input: TokenUserAccountAuthInput!) {
    samlTokenUserAccountAuth(input: $input) {
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

export const teamCreate = /* GraphQL */ `mutation teamCreate($copySettingsFromTeamId: String, $input: TeamCreateInput!) {
    teamCreate(copySettingsFromTeamId: $copySettingsFromTeamId, input: $input) {
      lastSyncId
      success
      team { id name }
    }
  }`;

export const teamCyclesDelete = /* GraphQL */ `mutation teamCyclesDelete($id: String!) {
    teamCyclesDelete(id: $id) {
      lastSyncId
      success
      team { id name }
    }
  }`;

export const teamDelete = /* GraphQL */ `mutation teamDelete($id: String!) {
    teamDelete(id: $id) {
      entityId
      lastSyncId
      success
    }
  }`;

export const teamKeyDelete = /* GraphQL */ `mutation teamKeyDelete($id: String!) {
    teamKeyDelete(id: $id) {
      entityId
      lastSyncId
      success
    }
  }`;

export const teamMembershipCreate = /* GraphQL */ `mutation teamMembershipCreate($input: TeamMembershipCreateInput!) {
    teamMembershipCreate(input: $input) {
      lastSyncId
      success
      teamMembership { id }
    }
  }`;

export const teamMembershipDelete = /* GraphQL */ `mutation teamMembershipDelete($alsoLeaveParentTeams: Boolean, $id: String!) {
    teamMembershipDelete(alsoLeaveParentTeams: $alsoLeaveParentTeams, id: $id) {
      entityId
      lastSyncId
      success
    }
  }`;

export const teamMembershipUpdate = /* GraphQL */ `mutation teamMembershipUpdate($id: String!, $input: TeamMembershipUpdateInput!) {
    teamMembershipUpdate(id: $id, input: $input) {
      lastSyncId
      success
      teamMembership { id }
    }
  }`;

export const teamUnarchive = /* GraphQL */ `mutation teamUnarchive($id: String!) {
    teamUnarchive(id: $id) {
      entity { id name }
      lastSyncId
      success
    }
  }`;

export const teamUpdate = /* GraphQL */ `mutation teamUpdate($id: String!, $input: TeamUpdateInput!, $mapping: InheritanceEntityMapping) {
    teamUpdate(id: $id, input: $input, mapping: $mapping) {
      lastSyncId
      success
      team { id name }
    }
  }`;

export const templateCreate = /* GraphQL */ `mutation templateCreate($input: TemplateCreateInput!) {
    templateCreate(input: $input) {
      lastSyncId
      success
      template { id name }
    }
  }`;

export const templateDelete = /* GraphQL */ `mutation templateDelete($id: String!) {
    templateDelete(id: $id) {
      entityId
      lastSyncId
      success
    }
  }`;

export const templateUpdate = /* GraphQL */ `mutation templateUpdate($id: String!, $input: TemplateUpdateInput!) {
    templateUpdate(id: $id, input: $input) {
      lastSyncId
      success
      template { id name }
    }
  }`;

export const timeScheduleCreate = /* GraphQL */ `mutation timeScheduleCreate($input: TimeScheduleCreateInput!) {
    timeScheduleCreate(input: $input) {
      lastSyncId
      success
      timeSchedule { id name }
    }
  }`;

export const timeScheduleDelete = /* GraphQL */ `mutation timeScheduleDelete($id: String!) {
    timeScheduleDelete(id: $id) {
      entityId
      lastSyncId
      success
    }
  }`;

export const timeScheduleRefreshIntegrationSchedule = /* GraphQL */ `mutation timeScheduleRefreshIntegrationSchedule($id: String!) {
    timeScheduleRefreshIntegrationSchedule(id: $id) {
      lastSyncId
      success
      timeSchedule { id name }
    }
  }`;

export const timeScheduleUpdate = /* GraphQL */ `mutation timeScheduleUpdate($id: String!, $input: TimeScheduleUpdateInput!) {
    timeScheduleUpdate(id: $id, input: $input) {
      lastSyncId
      success
      timeSchedule { id name }
    }
  }`;

export const timeScheduleUpsertExternal = /* GraphQL */ `mutation timeScheduleUpsertExternal($externalId: String!, $input: TimeScheduleUpdateInput!) {
    timeScheduleUpsertExternal(externalId: $externalId, input: $input) {
      lastSyncId
      success
      timeSchedule { id name }
    }
  }`;

export const triageResponsibilityCreate = /* GraphQL */ `mutation triageResponsibilityCreate($input: TriageResponsibilityCreateInput!) {
    triageResponsibilityCreate(input: $input) {
      lastSyncId
      success
      triageResponsibility { id }
    }
  }`;

export const triageResponsibilityDelete = /* GraphQL */ `mutation triageResponsibilityDelete($id: String!) {
    triageResponsibilityDelete(id: $id) {
      entityId
      lastSyncId
      success
    }
  }`;

export const triageResponsibilityUpdate = /* GraphQL */ `mutation triageResponsibilityUpdate($id: String!, $input: TriageResponsibilityUpdateInput!) {
    triageResponsibilityUpdate(id: $id, input: $input) {
      lastSyncId
      success
      triageResponsibility { id }
    }
  }`;

export const updateIntegrationSlackScopes = /* GraphQL */ `mutation updateIntegrationSlackScopes($code: String!, $integrationId: String!, $redirectUri: String!) {
    updateIntegrationSlackScopes(code: $code, integrationId: $integrationId, redirectUri: $redirectUri) {
      integration { id }
      lastSyncId
      success
    }
  }`;

export const updateIssueSummary = /* GraphQL */ `mutation updateIssueSummary($id: String!) {
    updateIssueSummary(id: $id) {
      issue { id title identifier }
      lastSyncId
      success
    }
  }`;

export const userDemoteAdmin = /* GraphQL */ `mutation userDemoteAdmin($id: String!) {
    userDemoteAdmin(id: $id) {
      success
    }
  }`;

export const userDemoteMember = /* GraphQL */ `mutation userDemoteMember($id: String!) {
    userDemoteMember(id: $id) {
      success
    }
  }`;

export const userDiscordConnect = /* GraphQL */ `mutation userDiscordConnect($code: String!, $redirectUri: String!) {
    userDiscordConnect(code: $code, redirectUri: $redirectUri) {
      lastSyncId
      success
      user { id name }
    }
  }`;

export const userExternalUserDisconnect = /* GraphQL */ `mutation userExternalUserDisconnect($service: String!) {
    userExternalUserDisconnect(service: $service) {
      lastSyncId
      success
      user { id name }
    }
  }`;

export const userFlagUpdate = /* GraphQL */ `mutation userFlagUpdate($flag: UserFlagType!, $operation: UserFlagUpdateOperation!) {
    userFlagUpdate(flag: $flag, operation: $operation) {
      flag
      lastSyncId
      success
      value
    }
  }`;

export const userPromoteAdmin = /* GraphQL */ `mutation userPromoteAdmin($id: String!) {
    userPromoteAdmin(id: $id) {
      success
    }
  }`;

export const userPromoteMember = /* GraphQL */ `mutation userPromoteMember($id: String!) {
    userPromoteMember(id: $id) {
      success
    }
  }`;

export const userSettingsFlagsReset = /* GraphQL */ `mutation userSettingsFlagsReset($flags: [UserFlagType!]) {
    userSettingsFlagsReset(flags: $flags) {
      lastSyncId
      success
    }
  }`;

export const userSettingsUpdate = /* GraphQL */ `mutation userSettingsUpdate($id: String!, $input: UserSettingsUpdateInput!) {
    userSettingsUpdate(id: $id, input: $input) {
      lastSyncId
      success
      userSettings { id }
    }
  }`;

export const userSuspend = /* GraphQL */ `mutation userSuspend($id: String!) {
    userSuspend(id: $id) {
      success
    }
  }`;

export const userUnlinkFromIdentityProvider = /* GraphQL */ `mutation userUnlinkFromIdentityProvider($id: String!) {
    userUnlinkFromIdentityProvider(id: $id) {
      success
    }
  }`;

export const userUnsuspend = /* GraphQL */ `mutation userUnsuspend($id: String!) {
    userUnsuspend(id: $id) {
      success
    }
  }`;

export const userUpdate = /* GraphQL */ `mutation userUpdate($id: String!, $input: UserUpdateInput!) {
    userUpdate(id: $id, input: $input) {
      lastSyncId
      success
      user { id name }
    }
  }`;

export const viewPreferencesCreate = /* GraphQL */ `mutation viewPreferencesCreate($input: ViewPreferencesCreateInput!) {
    viewPreferencesCreate(input: $input) {
      lastSyncId
      success
      viewPreferences { id }
    }
  }`;

export const viewPreferencesDelete = /* GraphQL */ `mutation viewPreferencesDelete($id: String!) {
    viewPreferencesDelete(id: $id) {
      entityId
      lastSyncId
      success
    }
  }`;

export const viewPreferencesUpdate = /* GraphQL */ `mutation viewPreferencesUpdate($id: String!, $input: ViewPreferencesUpdateInput!) {
    viewPreferencesUpdate(id: $id, input: $input) {
      lastSyncId
      success
      viewPreferences { id }
    }
  }`;

export const webhookCreate = /* GraphQL */ `mutation webhookCreate($input: WebhookCreateInput!) {
    webhookCreate(input: $input) {
      lastSyncId
      success
      webhook { id }
    }
  }`;

export const webhookDelete = /* GraphQL */ `mutation webhookDelete($id: String!) {
    webhookDelete(id: $id) {
      entityId
      lastSyncId
      success
    }
  }`;

export const webhookUpdate = /* GraphQL */ `mutation webhookUpdate($id: String!, $input: WebhookUpdateInput!) {
    webhookUpdate(id: $id, input: $input) {
      lastSyncId
      success
      webhook { id }
    }
  }`;

export const workflowStateArchive = /* GraphQL */ `mutation workflowStateArchive($id: String!) {
    workflowStateArchive(id: $id) {
      entity { id name }
      lastSyncId
      success
    }
  }`;

export const workflowStateCreate = /* GraphQL */ `mutation workflowStateCreate($input: WorkflowStateCreateInput!) {
    workflowStateCreate(input: $input) {
      lastSyncId
      success
      workflowState { id name }
    }
  }`;

export const workflowStateUpdate = /* GraphQL */ `mutation workflowStateUpdate($id: String!, $input: WorkflowStateUpdateInput!) {
    workflowStateUpdate(id: $id, input: $input) {
      lastSyncId
      success
      workflowState { id name }
    }
  }`;
