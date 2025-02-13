import { sts, Result, Option, Bytes, BitSequence } from './support'

export interface EventRecord {
    phase: Type_648
    event: Event
    topics: H256[]
}

export type H256 = Bytes

export type Event =
    | Event_AssignedSlots
    | Event_Auctions
    | Event_Balances
    | Event_ConvictionVoting
    | Event_Crowdloan
    | Event_ElectionProviderMultiPhase
    | Event_ExtrinsicPause
    | Event_FellowshipCollective
    | Event_FellowshipReferenda
    | Event_FuelTanks
    | Event_Grandpa
    | Event_Hrmp
    | Event_Identity
    | Event_ImOnline
    | Event_Marketplace
    | Event_MessageQueue
    | Event_MultiTokens
    | Event_Multisig
    | Event_NominationPools
    | Event_Offences
    | Event_ParaInclusion
    | Event_Paras
    | Event_ParasDisputes
    | Event_Preimage
    | Event_Referenda
    | Event_Registrar
    | Event_Scheduler
    | Event_Session
    | Event_Slots
    | Event_StakeExchange
    | Event_Staking
    | Event_Sudo
    | Event_System
    | Event_TransactionPayment
    | Event_Treasury
    | Event_Utility
    | Event_ValidatorManager
    | Event_VoteManager
    | Event_VoterList
    | Event_Whitelist
    | Event_XcmPallet

export interface Event_AssignedSlots {
    __kind: 'AssignedSlots'
    value: AssignedSlotsEvent
}

export interface Event_Auctions {
    __kind: 'Auctions'
    value: AuctionsEvent
}

export interface Event_Balances {
    __kind: 'Balances'
    value: BalancesEvent
}

export interface Event_ConvictionVoting {
    __kind: 'ConvictionVoting'
    value: ConvictionVotingEvent
}

export interface Event_Crowdloan {
    __kind: 'Crowdloan'
    value: CrowdloanEvent
}

export interface Event_ElectionProviderMultiPhase {
    __kind: 'ElectionProviderMultiPhase'
    value: ElectionProviderMultiPhaseEvent
}

export interface Event_ExtrinsicPause {
    __kind: 'ExtrinsicPause'
    value: ExtrinsicPauseEvent
}

export interface Event_FellowshipCollective {
    __kind: 'FellowshipCollective'
    value: FellowshipCollectiveEvent
}

export interface Event_FellowshipReferenda {
    __kind: 'FellowshipReferenda'
    value: FellowshipReferendaEvent
}

export interface Event_FuelTanks {
    __kind: 'FuelTanks'
    value: FuelTanksEvent
}

export interface Event_Grandpa {
    __kind: 'Grandpa'
    value: GrandpaEvent
}

export interface Event_Hrmp {
    __kind: 'Hrmp'
    value: HrmpEvent
}

export interface Event_Identity {
    __kind: 'Identity'
    value: IdentityEvent
}

export interface Event_ImOnline {
    __kind: 'ImOnline'
    value: ImOnlineEvent
}

export interface Event_Marketplace {
    __kind: 'Marketplace'
    value: MarketplaceEvent
}

export interface Event_MessageQueue {
    __kind: 'MessageQueue'
    value: MessageQueueEvent
}

export interface Event_MultiTokens {
    __kind: 'MultiTokens'
    value: MultiTokensEvent
}

export interface Event_Multisig {
    __kind: 'Multisig'
    value: MultisigEvent
}

export interface Event_NominationPools {
    __kind: 'NominationPools'
    value: NominationPoolsEvent
}

export interface Event_Offences {
    __kind: 'Offences'
    value: OffencesEvent
}

export interface Event_ParaInclusion {
    __kind: 'ParaInclusion'
    value: ParaInclusionEvent
}

export interface Event_Paras {
    __kind: 'Paras'
    value: ParasEvent
}

export interface Event_ParasDisputes {
    __kind: 'ParasDisputes'
    value: ParasDisputesEvent
}

export interface Event_Preimage {
    __kind: 'Preimage'
    value: PreimageEvent
}

export interface Event_Referenda {
    __kind: 'Referenda'
    value: ReferendaEvent
}

export interface Event_Registrar {
    __kind: 'Registrar'
    value: RegistrarEvent
}

export interface Event_Scheduler {
    __kind: 'Scheduler'
    value: SchedulerEvent
}

export interface Event_Session {
    __kind: 'Session'
    value: SessionEvent
}

export interface Event_Slots {
    __kind: 'Slots'
    value: SlotsEvent
}

export interface Event_StakeExchange {
    __kind: 'StakeExchange'
    value: StakeExchangeEvent
}

export interface Event_Staking {
    __kind: 'Staking'
    value: StakingEvent
}

export interface Event_Sudo {
    __kind: 'Sudo'
    value: SudoEvent
}

export interface Event_System {
    __kind: 'System'
    value: SystemEvent
}

export interface Event_TransactionPayment {
    __kind: 'TransactionPayment'
    value: TransactionPaymentEvent
}

export interface Event_Treasury {
    __kind: 'Treasury'
    value: TreasuryEvent
}

export interface Event_Utility {
    __kind: 'Utility'
    value: UtilityEvent
}

export interface Event_ValidatorManager {
    __kind: 'ValidatorManager'
    value: ValidatorManagerEvent
}

export interface Event_VoteManager {
    __kind: 'VoteManager'
    value: VoteManagerEvent
}

export interface Event_VoterList {
    __kind: 'VoterList'
    value: VoterListEvent
}

export interface Event_Whitelist {
    __kind: 'Whitelist'
    value: WhitelistEvent
}

export interface Event_XcmPallet {
    __kind: 'XcmPallet'
    value: XcmPalletEvent
}

/**
 * The `Event` enum of this pallet
 */
export type XcmPalletEvent =
    | XcmPalletEvent_AssetsClaimed
    | XcmPalletEvent_AssetsTrapped
    | XcmPalletEvent_Attempted
    | XcmPalletEvent_FeesPaid
    | XcmPalletEvent_InvalidQuerier
    | XcmPalletEvent_InvalidQuerierVersion
    | XcmPalletEvent_InvalidResponder
    | XcmPalletEvent_InvalidResponderVersion
    | XcmPalletEvent_Notified
    | XcmPalletEvent_NotifyDecodeFailed
    | XcmPalletEvent_NotifyDispatchError
    | XcmPalletEvent_NotifyOverweight
    | XcmPalletEvent_NotifyTargetMigrationFail
    | XcmPalletEvent_NotifyTargetSendFail
    | XcmPalletEvent_ResponseReady
    | XcmPalletEvent_ResponseTaken
    | XcmPalletEvent_Sent
    | XcmPalletEvent_SupportedVersionChanged
    | XcmPalletEvent_UnexpectedResponse
    | XcmPalletEvent_VersionChangeNotified
    | XcmPalletEvent_VersionNotifyRequested
    | XcmPalletEvent_VersionNotifyStarted
    | XcmPalletEvent_VersionNotifyUnrequested

/**
 * Some assets have been claimed from an asset trap
 */
export interface XcmPalletEvent_AssetsClaimed {
    __kind: 'AssetsClaimed'
    hash: H256
    origin: V3MultiLocation
    assets: VersionedMultiAssets
}

/**
 * Some assets have been placed in an asset trap.
 */
export interface XcmPalletEvent_AssetsTrapped {
    __kind: 'AssetsTrapped'
    hash: H256
    origin: V3MultiLocation
    assets: VersionedMultiAssets
}

/**
 * Execution of an XCM message was attempted.
 */
export interface XcmPalletEvent_Attempted {
    __kind: 'Attempted'
    outcome: V3Outcome
}

/**
 * Fees were paid from a location for an operation (often for using `SendXcm`).
 */
export interface XcmPalletEvent_FeesPaid {
    __kind: 'FeesPaid'
    paying: V3MultiLocation
    fees: V3MultiAsset[]
}

/**
 * Expected query response has been received but the querier location of the response does
 * not match the expected. The query remains registered for a later, valid, response to
 * be received and acted upon.
 */
export interface XcmPalletEvent_InvalidQuerier {
    __kind: 'InvalidQuerier'
    origin: V3MultiLocation
    queryId: bigint
    expectedQuerier: V3MultiLocation
    maybeActualQuerier?: V3MultiLocation | undefined
}

/**
 * Expected query response has been received but the expected querier location placed in
 * storage by this runtime previously cannot be decoded. The query remains registered.
 *
 * This is unexpected (since a location placed in storage in a previously executing
 * runtime should be readable prior to query timeout) and dangerous since the possibly
 * valid response will be dropped. Manual governance intervention is probably going to be
 * needed.
 */
export interface XcmPalletEvent_InvalidQuerierVersion {
    __kind: 'InvalidQuerierVersion'
    origin: V3MultiLocation
    queryId: bigint
}

/**
 * Expected query response has been received but the origin location of the response does
 * not match that expected. The query remains registered for a later, valid, response to
 * be received and acted upon.
 */
export interface XcmPalletEvent_InvalidResponder {
    __kind: 'InvalidResponder'
    origin: V3MultiLocation
    queryId: bigint
    expectedLocation?: V3MultiLocation | undefined
}

/**
 * Expected query response has been received but the expected origin location placed in
 * storage by this runtime previously cannot be decoded. The query remains registered.
 *
 * This is unexpected (since a location placed in storage in a previously executing
 * runtime should be readable prior to query timeout) and dangerous since the possibly
 * valid response will be dropped. Manual governance intervention is probably going to be
 * needed.
 */
export interface XcmPalletEvent_InvalidResponderVersion {
    __kind: 'InvalidResponderVersion'
    origin: V3MultiLocation
    queryId: bigint
}

/**
 * Query response has been received and query is removed. The registered notification has
 * been dispatched and executed successfully.
 */
export interface XcmPalletEvent_Notified {
    __kind: 'Notified'
    queryId: bigint
    palletIndex: number
    callIndex: number
}

/**
 * Query response has been received and query is removed. The dispatch was unable to be
 * decoded into a `Call`; this might be due to dispatch function having a signature which
 * is not `(origin, QueryId, Response)`.
 */
export interface XcmPalletEvent_NotifyDecodeFailed {
    __kind: 'NotifyDecodeFailed'
    queryId: bigint
    palletIndex: number
    callIndex: number
}

/**
 * Query response has been received and query is removed. There was a general error with
 * dispatching the notification call.
 */
export interface XcmPalletEvent_NotifyDispatchError {
    __kind: 'NotifyDispatchError'
    queryId: bigint
    palletIndex: number
    callIndex: number
}

/**
 * Query response has been received and query is removed. The registered notification could
 * not be dispatched because the dispatch weight is greater than the maximum weight
 * originally budgeted by this runtime for the query result.
 */
export interface XcmPalletEvent_NotifyOverweight {
    __kind: 'NotifyOverweight'
    queryId: bigint
    palletIndex: number
    callIndex: number
    actualWeight: Weight
    maxBudgetedWeight: Weight
}

/**
 * A given location which had a version change subscription was dropped owing to an error
 * migrating the location to our new XCM format.
 */
export interface XcmPalletEvent_NotifyTargetMigrationFail {
    __kind: 'NotifyTargetMigrationFail'
    location: VersionedMultiLocation
    queryId: bigint
}

/**
 * A given location which had a version change subscription was dropped owing to an error
 * sending the notification to it.
 */
export interface XcmPalletEvent_NotifyTargetSendFail {
    __kind: 'NotifyTargetSendFail'
    location: V3MultiLocation
    queryId: bigint
    error: V3Error
}

/**
 * Query response has been received and is ready for taking with `take_response`. There is
 * no registered notification call.
 */
export interface XcmPalletEvent_ResponseReady {
    __kind: 'ResponseReady'
    queryId: bigint
    response: V3Response
}

/**
 * Received query response has been read and removed.
 */
export interface XcmPalletEvent_ResponseTaken {
    __kind: 'ResponseTaken'
    queryId: bigint
}

/**
 * A XCM message was sent.
 */
export interface XcmPalletEvent_Sent {
    __kind: 'Sent'
    origin: V3MultiLocation
    destination: V3MultiLocation
    message: V3Instruction[]
    messageId: Bytes
}

/**
 * The supported version of a location has been changed. This might be through an
 * automatic notification or a manual intervention.
 */
export interface XcmPalletEvent_SupportedVersionChanged {
    __kind: 'SupportedVersionChanged'
    location: V3MultiLocation
    version: number
}

/**
 * Query response received which does not match a registered query. This may be because a
 * matching query was never registered, it may be because it is a duplicate response, or
 * because the query timed out.
 */
export interface XcmPalletEvent_UnexpectedResponse {
    __kind: 'UnexpectedResponse'
    origin: V3MultiLocation
    queryId: bigint
}

/**
 * An XCM version change notification message has been attempted to be sent.
 *
 * The cost of sending it (borne by the chain) is included.
 */
export interface XcmPalletEvent_VersionChangeNotified {
    __kind: 'VersionChangeNotified'
    destination: V3MultiLocation
    result: number
    cost: V3MultiAsset[]
    messageId: Bytes
}

/**
 * We have requested that a remote chain send us XCM version change notifications.
 */
export interface XcmPalletEvent_VersionNotifyRequested {
    __kind: 'VersionNotifyRequested'
    destination: V3MultiLocation
    cost: V3MultiAsset[]
    messageId: Bytes
}

/**
 * A remote has requested XCM version change notification from us and we have honored it.
 * A version information message is sent to them and its cost is included.
 */
export interface XcmPalletEvent_VersionNotifyStarted {
    __kind: 'VersionNotifyStarted'
    destination: V3MultiLocation
    cost: V3MultiAsset[]
    messageId: Bytes
}

/**
 * We have requested that a remote chain stops sending us XCM version change notifications.
 */
export interface XcmPalletEvent_VersionNotifyUnrequested {
    __kind: 'VersionNotifyUnrequested'
    destination: V3MultiLocation
    cost: V3MultiAsset[]
    messageId: Bytes
}

export type V3Instruction =
    | V3Instruction_AliasOrigin
    | V3Instruction_BurnAsset
    | V3Instruction_BuyExecution
    | V3Instruction_ClaimAsset
    | V3Instruction_ClearError
    | V3Instruction_ClearOrigin
    | V3Instruction_ClearTopic
    | V3Instruction_ClearTransactStatus
    | V3Instruction_DepositAsset
    | V3Instruction_DepositReserveAsset
    | V3Instruction_DescendOrigin
    | V3Instruction_ExchangeAsset
    | V3Instruction_ExpectAsset
    | V3Instruction_ExpectError
    | V3Instruction_ExpectOrigin
    | V3Instruction_ExpectPallet
    | V3Instruction_ExpectTransactStatus
    | V3Instruction_ExportMessage
    | V3Instruction_HrmpChannelAccepted
    | V3Instruction_HrmpChannelClosing
    | V3Instruction_HrmpNewChannelOpenRequest
    | V3Instruction_InitiateReserveWithdraw
    | V3Instruction_InitiateTeleport
    | V3Instruction_LockAsset
    | V3Instruction_NoteUnlockable
    | V3Instruction_QueryPallet
    | V3Instruction_QueryResponse
    | V3Instruction_ReceiveTeleportedAsset
    | V3Instruction_RefundSurplus
    | V3Instruction_ReportError
    | V3Instruction_ReportHolding
    | V3Instruction_ReportTransactStatus
    | V3Instruction_RequestUnlock
    | V3Instruction_ReserveAssetDeposited
    | V3Instruction_SetAppendix
    | V3Instruction_SetErrorHandler
    | V3Instruction_SetFeesMode
    | V3Instruction_SetTopic
    | V3Instruction_SubscribeVersion
    | V3Instruction_Transact
    | V3Instruction_TransferAsset
    | V3Instruction_TransferReserveAsset
    | V3Instruction_Trap
    | V3Instruction_UniversalOrigin
    | V3Instruction_UnlockAsset
    | V3Instruction_UnpaidExecution
    | V3Instruction_UnsubscribeVersion
    | V3Instruction_WithdrawAsset

export interface V3Instruction_AliasOrigin {
    __kind: 'AliasOrigin'
    value: V3MultiLocation
}

export interface V3Instruction_BurnAsset {
    __kind: 'BurnAsset'
    value: V3MultiAsset[]
}

export interface V3Instruction_BuyExecution {
    __kind: 'BuyExecution'
    fees: V3MultiAsset
    weightLimit: V3WeightLimit
}

export interface V3Instruction_ClaimAsset {
    __kind: 'ClaimAsset'
    assets: V3MultiAsset[]
    ticket: V3MultiLocation
}

export interface V3Instruction_ClearError {
    __kind: 'ClearError'
}

export interface V3Instruction_ClearOrigin {
    __kind: 'ClearOrigin'
}

export interface V3Instruction_ClearTopic {
    __kind: 'ClearTopic'
}

export interface V3Instruction_ClearTransactStatus {
    __kind: 'ClearTransactStatus'
}

export interface V3Instruction_DepositAsset {
    __kind: 'DepositAsset'
    assets: V3MultiAssetFilter
    beneficiary: V3MultiLocation
}

export interface V3Instruction_DepositReserveAsset {
    __kind: 'DepositReserveAsset'
    assets: V3MultiAssetFilter
    dest: V3MultiLocation
    xcm: V3Instruction[]
}

export interface V3Instruction_DescendOrigin {
    __kind: 'DescendOrigin'
    value: V3Junctions
}

export interface V3Instruction_ExchangeAsset {
    __kind: 'ExchangeAsset'
    give: V3MultiAssetFilter
    want: V3MultiAsset[]
    maximal: boolean
}

export interface V3Instruction_ExpectAsset {
    __kind: 'ExpectAsset'
    value: V3MultiAsset[]
}

export interface V3Instruction_ExpectError {
    __kind: 'ExpectError'
    value?: [number, V3Error] | undefined
}

export interface V3Instruction_ExpectOrigin {
    __kind: 'ExpectOrigin'
    value?: V3MultiLocation | undefined
}

export interface V3Instruction_ExpectPallet {
    __kind: 'ExpectPallet'
    index: number
    name: Bytes
    moduleName: Bytes
    crateMajor: number
    minCrateMinor: number
}

export interface V3Instruction_ExpectTransactStatus {
    __kind: 'ExpectTransactStatus'
    value: V3MaybeErrorCode
}

export interface V3Instruction_ExportMessage {
    __kind: 'ExportMessage'
    network: V3NetworkId
    destination: V3Junctions
    xcm: V3Instruction[]
}

export interface V3Instruction_HrmpChannelAccepted {
    __kind: 'HrmpChannelAccepted'
    recipient: number
}

export interface V3Instruction_HrmpChannelClosing {
    __kind: 'HrmpChannelClosing'
    initiator: number
    sender: number
    recipient: number
}

export interface V3Instruction_HrmpNewChannelOpenRequest {
    __kind: 'HrmpNewChannelOpenRequest'
    sender: number
    maxMessageSize: number
    maxCapacity: number
}

export interface V3Instruction_InitiateReserveWithdraw {
    __kind: 'InitiateReserveWithdraw'
    assets: V3MultiAssetFilter
    reserve: V3MultiLocation
    xcm: V3Instruction[]
}

export interface V3Instruction_InitiateTeleport {
    __kind: 'InitiateTeleport'
    assets: V3MultiAssetFilter
    dest: V3MultiLocation
    xcm: V3Instruction[]
}

export interface V3Instruction_LockAsset {
    __kind: 'LockAsset'
    asset: V3MultiAsset
    unlocker: V3MultiLocation
}

export interface V3Instruction_NoteUnlockable {
    __kind: 'NoteUnlockable'
    asset: V3MultiAsset
    owner: V3MultiLocation
}

export interface V3Instruction_QueryPallet {
    __kind: 'QueryPallet'
    moduleName: Bytes
    responseInfo: V3QueryResponseInfo
}

export interface V3Instruction_QueryResponse {
    __kind: 'QueryResponse'
    queryId: bigint
    response: V3Response
    maxWeight: Weight
    querier?: V3MultiLocation | undefined
}

export interface V3Instruction_ReceiveTeleportedAsset {
    __kind: 'ReceiveTeleportedAsset'
    value: V3MultiAsset[]
}

export interface V3Instruction_RefundSurplus {
    __kind: 'RefundSurplus'
}

export interface V3Instruction_ReportError {
    __kind: 'ReportError'
    value: V3QueryResponseInfo
}

export interface V3Instruction_ReportHolding {
    __kind: 'ReportHolding'
    responseInfo: V3QueryResponseInfo
    assets: V3MultiAssetFilter
}

export interface V3Instruction_ReportTransactStatus {
    __kind: 'ReportTransactStatus'
    value: V3QueryResponseInfo
}

export interface V3Instruction_RequestUnlock {
    __kind: 'RequestUnlock'
    asset: V3MultiAsset
    locker: V3MultiLocation
}

export interface V3Instruction_ReserveAssetDeposited {
    __kind: 'ReserveAssetDeposited'
    value: V3MultiAsset[]
}

export interface V3Instruction_SetAppendix {
    __kind: 'SetAppendix'
    value: V3Instruction[]
}

export interface V3Instruction_SetErrorHandler {
    __kind: 'SetErrorHandler'
    value: V3Instruction[]
}

export interface V3Instruction_SetFeesMode {
    __kind: 'SetFeesMode'
    jitWithdraw: boolean
}

export interface V3Instruction_SetTopic {
    __kind: 'SetTopic'
    value: Bytes
}

export interface V3Instruction_SubscribeVersion {
    __kind: 'SubscribeVersion'
    queryId: bigint
    maxResponseWeight: Weight
}

export interface V3Instruction_Transact {
    __kind: 'Transact'
    originKind: V2OriginKind
    requireWeightAtMost: Weight
    call: DoubleEncoded
}

export interface V3Instruction_TransferAsset {
    __kind: 'TransferAsset'
    assets: V3MultiAsset[]
    beneficiary: V3MultiLocation
}

export interface V3Instruction_TransferReserveAsset {
    __kind: 'TransferReserveAsset'
    assets: V3MultiAsset[]
    dest: V3MultiLocation
    xcm: V3Instruction[]
}

export interface V3Instruction_Trap {
    __kind: 'Trap'
    value: bigint
}

export interface V3Instruction_UniversalOrigin {
    __kind: 'UniversalOrigin'
    value: V3Junction
}

export interface V3Instruction_UnlockAsset {
    __kind: 'UnlockAsset'
    asset: V3MultiAsset
    target: V3MultiLocation
}

export interface V3Instruction_UnpaidExecution {
    __kind: 'UnpaidExecution'
    weightLimit: V3WeightLimit
    checkOrigin?: V3MultiLocation | undefined
}

export interface V3Instruction_UnsubscribeVersion {
    __kind: 'UnsubscribeVersion'
}

export interface V3Instruction_WithdrawAsset {
    __kind: 'WithdrawAsset'
    value: V3MultiAsset[]
}

export type V3Junction =
    | V3Junction_AccountId32
    | V3Junction_AccountIndex64
    | V3Junction_AccountKey20
    | V3Junction_GeneralIndex
    | V3Junction_GeneralKey
    | V3Junction_GlobalConsensus
    | V3Junction_OnlyChild
    | V3Junction_PalletInstance
    | V3Junction_Parachain
    | V3Junction_Plurality

export interface V3Junction_AccountId32 {
    __kind: 'AccountId32'
    network?: V3NetworkId | undefined
    id: Bytes
}

export interface V3Junction_AccountIndex64 {
    __kind: 'AccountIndex64'
    network?: V3NetworkId | undefined
    index: bigint
}

export interface V3Junction_AccountKey20 {
    __kind: 'AccountKey20'
    network?: V3NetworkId | undefined
    key: Bytes
}

export interface V3Junction_GeneralIndex {
    __kind: 'GeneralIndex'
    value: bigint
}

export interface V3Junction_GeneralKey {
    __kind: 'GeneralKey'
    length: number
    data: Bytes
}

export interface V3Junction_GlobalConsensus {
    __kind: 'GlobalConsensus'
    value: V3NetworkId
}

export interface V3Junction_OnlyChild {
    __kind: 'OnlyChild'
}

export interface V3Junction_PalletInstance {
    __kind: 'PalletInstance'
    value: number
}

export interface V3Junction_Parachain {
    __kind: 'Parachain'
    value: number
}

export interface V3Junction_Plurality {
    __kind: 'Plurality'
    id: V3BodyId
    part: V3BodyPart
}

export type V3BodyPart =
    | V3BodyPart_AtLeastProportion
    | V3BodyPart_Fraction
    | V3BodyPart_Members
    | V3BodyPart_MoreThanProportion
    | V3BodyPart_Voice

export interface V3BodyPart_AtLeastProportion {
    __kind: 'AtLeastProportion'
    nom: number
    denom: number
}

export interface V3BodyPart_Fraction {
    __kind: 'Fraction'
    nom: number
    denom: number
}

export interface V3BodyPart_Members {
    __kind: 'Members'
    count: number
}

export interface V3BodyPart_MoreThanProportion {
    __kind: 'MoreThanProportion'
    nom: number
    denom: number
}

export interface V3BodyPart_Voice {
    __kind: 'Voice'
}

export type V3BodyId =
    | V3BodyId_Administration
    | V3BodyId_Defense
    | V3BodyId_Executive
    | V3BodyId_Index
    | V3BodyId_Judicial
    | V3BodyId_Legislative
    | V3BodyId_Moniker
    | V3BodyId_Technical
    | V3BodyId_Treasury
    | V3BodyId_Unit

export interface V3BodyId_Administration {
    __kind: 'Administration'
}

export interface V3BodyId_Defense {
    __kind: 'Defense'
}

export interface V3BodyId_Executive {
    __kind: 'Executive'
}

export interface V3BodyId_Index {
    __kind: 'Index'
    value: number
}

export interface V3BodyId_Judicial {
    __kind: 'Judicial'
}

export interface V3BodyId_Legislative {
    __kind: 'Legislative'
}

export interface V3BodyId_Moniker {
    __kind: 'Moniker'
    value: Bytes
}

export interface V3BodyId_Technical {
    __kind: 'Technical'
}

export interface V3BodyId_Treasury {
    __kind: 'Treasury'
}

export interface V3BodyId_Unit {
    __kind: 'Unit'
}

export interface DoubleEncoded {
    encoded: Bytes
}

export type V2OriginKind =
    | V2OriginKind_Native
    | V2OriginKind_SovereignAccount
    | V2OriginKind_Superuser
    | V2OriginKind_Xcm

export interface V2OriginKind_Native {
    __kind: 'Native'
}

export interface V2OriginKind_SovereignAccount {
    __kind: 'SovereignAccount'
}

export interface V2OriginKind_Superuser {
    __kind: 'Superuser'
}

export interface V2OriginKind_Xcm {
    __kind: 'Xcm'
}

export interface V3QueryResponseInfo {
    destination: V3MultiLocation
    queryId: bigint
    maxWeight: Weight
}

export type V3NetworkId =
    | V3NetworkId_BitcoinCash
    | V3NetworkId_BitcoinCore
    | V3NetworkId_ByFork
    | V3NetworkId_ByGenesis
    | V3NetworkId_Ethereum
    | V3NetworkId_Kusama
    | V3NetworkId_Polkadot
    | V3NetworkId_Rococo
    | V3NetworkId_Westend
    | V3NetworkId_Wococo

export interface V3NetworkId_BitcoinCash {
    __kind: 'BitcoinCash'
}

export interface V3NetworkId_BitcoinCore {
    __kind: 'BitcoinCore'
}

export interface V3NetworkId_ByFork {
    __kind: 'ByFork'
    blockNumber: bigint
    blockHash: Bytes
}

export interface V3NetworkId_ByGenesis {
    __kind: 'ByGenesis'
    value: Bytes
}

export interface V3NetworkId_Ethereum {
    __kind: 'Ethereum'
    chainId: bigint
}

export interface V3NetworkId_Kusama {
    __kind: 'Kusama'
}

export interface V3NetworkId_Polkadot {
    __kind: 'Polkadot'
}

export interface V3NetworkId_Rococo {
    __kind: 'Rococo'
}

export interface V3NetworkId_Westend {
    __kind: 'Westend'
}

export interface V3NetworkId_Wococo {
    __kind: 'Wococo'
}

export type V3MaybeErrorCode = V3MaybeErrorCode_Error | V3MaybeErrorCode_Success | V3MaybeErrorCode_TruncatedError

export interface V3MaybeErrorCode_Error {
    __kind: 'Error'
    value: Bytes
}

export interface V3MaybeErrorCode_Success {
    __kind: 'Success'
}

export interface V3MaybeErrorCode_TruncatedError {
    __kind: 'TruncatedError'
    value: Bytes
}

export type V3Junctions =
    | V3Junctions_Here
    | V3Junctions_X1
    | V3Junctions_X2
    | V3Junctions_X3
    | V3Junctions_X4
    | V3Junctions_X5
    | V3Junctions_X6
    | V3Junctions_X7
    | V3Junctions_X8

export interface V3Junctions_Here {
    __kind: 'Here'
}

export interface V3Junctions_X1 {
    __kind: 'X1'
    value: V3Junction
}

export interface V3Junctions_X2 {
    __kind: 'X2'
    value: [V3Junction, V3Junction]
}

export interface V3Junctions_X3 {
    __kind: 'X3'
    value: [V3Junction, V3Junction, V3Junction]
}

export interface V3Junctions_X4 {
    __kind: 'X4'
    value: [V3Junction, V3Junction, V3Junction, V3Junction]
}

export interface V3Junctions_X5 {
    __kind: 'X5'
    value: [V3Junction, V3Junction, V3Junction, V3Junction, V3Junction]
}

export interface V3Junctions_X6 {
    __kind: 'X6'
    value: [V3Junction, V3Junction, V3Junction, V3Junction, V3Junction, V3Junction]
}

export interface V3Junctions_X7 {
    __kind: 'X7'
    value: [V3Junction, V3Junction, V3Junction, V3Junction, V3Junction, V3Junction, V3Junction]
}

export interface V3Junctions_X8 {
    __kind: 'X8'
    value: [V3Junction, V3Junction, V3Junction, V3Junction, V3Junction, V3Junction, V3Junction, V3Junction]
}

export type V3MultiAssetFilter = V3MultiAssetFilter_Definite | V3MultiAssetFilter_Wild

export interface V3MultiAssetFilter_Definite {
    __kind: 'Definite'
    value: V3MultiAsset[]
}

export interface V3MultiAssetFilter_Wild {
    __kind: 'Wild'
    value: V3WildMultiAsset
}

export type V3WildMultiAsset =
    | V3WildMultiAsset_All
    | V3WildMultiAsset_AllCounted
    | V3WildMultiAsset_AllOf
    | V3WildMultiAsset_AllOfCounted

export interface V3WildMultiAsset_All {
    __kind: 'All'
}

export interface V3WildMultiAsset_AllCounted {
    __kind: 'AllCounted'
    value: number
}

export interface V3WildMultiAsset_AllOf {
    __kind: 'AllOf'
    id: V3AssetId
    fun: V3WildFungibility
}

export interface V3WildMultiAsset_AllOfCounted {
    __kind: 'AllOfCounted'
    id: V3AssetId
    fun: V3WildFungibility
    count: number
}

export type V3WildFungibility = V3WildFungibility_Fungible | V3WildFungibility_NonFungible

export interface V3WildFungibility_Fungible {
    __kind: 'Fungible'
}

export interface V3WildFungibility_NonFungible {
    __kind: 'NonFungible'
}

export type V3AssetId = V3AssetId_Abstract | V3AssetId_Concrete

export interface V3AssetId_Abstract {
    __kind: 'Abstract'
    value: Bytes
}

export interface V3AssetId_Concrete {
    __kind: 'Concrete'
    value: V3MultiLocation
}

export type V3WeightLimit = V3WeightLimit_Limited | V3WeightLimit_Unlimited

export interface V3WeightLimit_Limited {
    __kind: 'Limited'
    value: Weight
}

export interface V3WeightLimit_Unlimited {
    __kind: 'Unlimited'
}

export type V3Response =
    | V3Response_Assets
    | V3Response_DispatchResult
    | V3Response_ExecutionResult
    | V3Response_Null
    | V3Response_PalletsInfo
    | V3Response_Version

export interface V3Response_Assets {
    __kind: 'Assets'
    value: V3MultiAsset[]
}

export interface V3Response_DispatchResult {
    __kind: 'DispatchResult'
    value: V3MaybeErrorCode
}

export interface V3Response_ExecutionResult {
    __kind: 'ExecutionResult'
    value?: [number, V3Error] | undefined
}

export interface V3Response_Null {
    __kind: 'Null'
}

export interface V3Response_PalletsInfo {
    __kind: 'PalletsInfo'
    value: V3PalletInfo[]
}

export interface V3Response_Version {
    __kind: 'Version'
    value: number
}

export interface V3PalletInfo {
    index: number
    name: Bytes
    moduleName: Bytes
    major: number
    minor: number
    patch: number
}

export type V3Error =
    | V3Error_AssetNotFound
    | V3Error_BadOrigin
    | V3Error_Barrier
    | V3Error_DestinationUnsupported
    | V3Error_ExceedsMaxMessageSize
    | V3Error_ExceedsStackLimit
    | V3Error_ExpectationFalse
    | V3Error_ExportError
    | V3Error_FailedToDecode
    | V3Error_FailedToTransactAsset
    | V3Error_FeesNotMet
    | V3Error_HoldingWouldOverflow
    | V3Error_InvalidLocation
    | V3Error_LocationCannotHold
    | V3Error_LocationFull
    | V3Error_LocationNotInvertible
    | V3Error_LockError
    | V3Error_MaxWeightInvalid
    | V3Error_NameMismatch
    | V3Error_NoDeal
    | V3Error_NoPermission
    | V3Error_NotDepositable
    | V3Error_NotHoldingFees
    | V3Error_NotWithdrawable
    | V3Error_Overflow
    | V3Error_PalletNotFound
    | V3Error_ReanchorFailed
    | V3Error_TooExpensive
    | V3Error_Transport
    | V3Error_Trap
    | V3Error_Unanchored
    | V3Error_UnhandledXcmVersion
    | V3Error_Unimplemented
    | V3Error_UnknownClaim
    | V3Error_Unroutable
    | V3Error_UntrustedReserveLocation
    | V3Error_UntrustedTeleportLocation
    | V3Error_VersionIncompatible
    | V3Error_WeightLimitReached
    | V3Error_WeightNotComputable

export interface V3Error_AssetNotFound {
    __kind: 'AssetNotFound'
}

export interface V3Error_BadOrigin {
    __kind: 'BadOrigin'
}

export interface V3Error_Barrier {
    __kind: 'Barrier'
}

export interface V3Error_DestinationUnsupported {
    __kind: 'DestinationUnsupported'
}

export interface V3Error_ExceedsMaxMessageSize {
    __kind: 'ExceedsMaxMessageSize'
}

export interface V3Error_ExceedsStackLimit {
    __kind: 'ExceedsStackLimit'
}

export interface V3Error_ExpectationFalse {
    __kind: 'ExpectationFalse'
}

export interface V3Error_ExportError {
    __kind: 'ExportError'
}

export interface V3Error_FailedToDecode {
    __kind: 'FailedToDecode'
}

export interface V3Error_FailedToTransactAsset {
    __kind: 'FailedToTransactAsset'
}

export interface V3Error_FeesNotMet {
    __kind: 'FeesNotMet'
}

export interface V3Error_HoldingWouldOverflow {
    __kind: 'HoldingWouldOverflow'
}

export interface V3Error_InvalidLocation {
    __kind: 'InvalidLocation'
}

export interface V3Error_LocationCannotHold {
    __kind: 'LocationCannotHold'
}

export interface V3Error_LocationFull {
    __kind: 'LocationFull'
}

export interface V3Error_LocationNotInvertible {
    __kind: 'LocationNotInvertible'
}

export interface V3Error_LockError {
    __kind: 'LockError'
}

export interface V3Error_MaxWeightInvalid {
    __kind: 'MaxWeightInvalid'
}

export interface V3Error_NameMismatch {
    __kind: 'NameMismatch'
}

export interface V3Error_NoDeal {
    __kind: 'NoDeal'
}

export interface V3Error_NoPermission {
    __kind: 'NoPermission'
}

export interface V3Error_NotDepositable {
    __kind: 'NotDepositable'
}

export interface V3Error_NotHoldingFees {
    __kind: 'NotHoldingFees'
}

export interface V3Error_NotWithdrawable {
    __kind: 'NotWithdrawable'
}

export interface V3Error_Overflow {
    __kind: 'Overflow'
}

export interface V3Error_PalletNotFound {
    __kind: 'PalletNotFound'
}

export interface V3Error_ReanchorFailed {
    __kind: 'ReanchorFailed'
}

export interface V3Error_TooExpensive {
    __kind: 'TooExpensive'
}

export interface V3Error_Transport {
    __kind: 'Transport'
}

export interface V3Error_Trap {
    __kind: 'Trap'
    value: bigint
}

export interface V3Error_Unanchored {
    __kind: 'Unanchored'
}

export interface V3Error_UnhandledXcmVersion {
    __kind: 'UnhandledXcmVersion'
}

export interface V3Error_Unimplemented {
    __kind: 'Unimplemented'
}

export interface V3Error_UnknownClaim {
    __kind: 'UnknownClaim'
}

export interface V3Error_Unroutable {
    __kind: 'Unroutable'
}

export interface V3Error_UntrustedReserveLocation {
    __kind: 'UntrustedReserveLocation'
}

export interface V3Error_UntrustedTeleportLocation {
    __kind: 'UntrustedTeleportLocation'
}

export interface V3Error_VersionIncompatible {
    __kind: 'VersionIncompatible'
}

export interface V3Error_WeightLimitReached {
    __kind: 'WeightLimitReached'
    value: Weight
}

export interface V3Error_WeightNotComputable {
    __kind: 'WeightNotComputable'
}

export type VersionedMultiLocation = VersionedMultiLocation_V2 | VersionedMultiLocation_V3

export interface VersionedMultiLocation_V2 {
    __kind: 'V2'
    value: V2MultiLocation
}

export interface VersionedMultiLocation_V3 {
    __kind: 'V3'
    value: V3MultiLocation
}

export interface V2MultiLocation {
    parents: number
    interior: V2Junctions
}

export type V2Junctions =
    | V2Junctions_Here
    | V2Junctions_X1
    | V2Junctions_X2
    | V2Junctions_X3
    | V2Junctions_X4
    | V2Junctions_X5
    | V2Junctions_X6
    | V2Junctions_X7
    | V2Junctions_X8

export interface V2Junctions_Here {
    __kind: 'Here'
}

export interface V2Junctions_X1 {
    __kind: 'X1'
    value: V2Junction
}

export interface V2Junctions_X2 {
    __kind: 'X2'
    value: [V2Junction, V2Junction]
}

export interface V2Junctions_X3 {
    __kind: 'X3'
    value: [V2Junction, V2Junction, V2Junction]
}

export interface V2Junctions_X4 {
    __kind: 'X4'
    value: [V2Junction, V2Junction, V2Junction, V2Junction]
}

export interface V2Junctions_X5 {
    __kind: 'X5'
    value: [V2Junction, V2Junction, V2Junction, V2Junction, V2Junction]
}

export interface V2Junctions_X6 {
    __kind: 'X6'
    value: [V2Junction, V2Junction, V2Junction, V2Junction, V2Junction, V2Junction]
}

export interface V2Junctions_X7 {
    __kind: 'X7'
    value: [V2Junction, V2Junction, V2Junction, V2Junction, V2Junction, V2Junction, V2Junction]
}

export interface V2Junctions_X8 {
    __kind: 'X8'
    value: [V2Junction, V2Junction, V2Junction, V2Junction, V2Junction, V2Junction, V2Junction, V2Junction]
}

export type V2Junction =
    | V2Junction_AccountId32
    | V2Junction_AccountIndex64
    | V2Junction_AccountKey20
    | V2Junction_GeneralIndex
    | V2Junction_GeneralKey
    | V2Junction_OnlyChild
    | V2Junction_PalletInstance
    | V2Junction_Parachain
    | V2Junction_Plurality

export interface V2Junction_AccountId32 {
    __kind: 'AccountId32'
    network: V2NetworkId
    id: Bytes
}

export interface V2Junction_AccountIndex64 {
    __kind: 'AccountIndex64'
    network: V2NetworkId
    index: bigint
}

export interface V2Junction_AccountKey20 {
    __kind: 'AccountKey20'
    network: V2NetworkId
    key: Bytes
}

export interface V2Junction_GeneralIndex {
    __kind: 'GeneralIndex'
    value: bigint
}

export interface V2Junction_GeneralKey {
    __kind: 'GeneralKey'
    value: WeakBoundedVec
}

export interface V2Junction_OnlyChild {
    __kind: 'OnlyChild'
}

export interface V2Junction_PalletInstance {
    __kind: 'PalletInstance'
    value: number
}

export interface V2Junction_Parachain {
    __kind: 'Parachain'
    value: number
}

export interface V2Junction_Plurality {
    __kind: 'Plurality'
    id: V2BodyId
    part: V2BodyPart
}

export type V2BodyPart =
    | V2BodyPart_AtLeastProportion
    | V2BodyPart_Fraction
    | V2BodyPart_Members
    | V2BodyPart_MoreThanProportion
    | V2BodyPart_Voice

export interface V2BodyPart_AtLeastProportion {
    __kind: 'AtLeastProportion'
    nom: number
    denom: number
}

export interface V2BodyPart_Fraction {
    __kind: 'Fraction'
    nom: number
    denom: number
}

export interface V2BodyPart_Members {
    __kind: 'Members'
    count: number
}

export interface V2BodyPart_MoreThanProportion {
    __kind: 'MoreThanProportion'
    nom: number
    denom: number
}

export interface V2BodyPart_Voice {
    __kind: 'Voice'
}

export type V2BodyId =
    | V2BodyId_Administration
    | V2BodyId_Defense
    | V2BodyId_Executive
    | V2BodyId_Index
    | V2BodyId_Judicial
    | V2BodyId_Legislative
    | V2BodyId_Named
    | V2BodyId_Technical
    | V2BodyId_Treasury
    | V2BodyId_Unit

export interface V2BodyId_Administration {
    __kind: 'Administration'
}

export interface V2BodyId_Defense {
    __kind: 'Defense'
}

export interface V2BodyId_Executive {
    __kind: 'Executive'
}

export interface V2BodyId_Index {
    __kind: 'Index'
    value: number
}

export interface V2BodyId_Judicial {
    __kind: 'Judicial'
}

export interface V2BodyId_Legislative {
    __kind: 'Legislative'
}

export interface V2BodyId_Named {
    __kind: 'Named'
    value: WeakBoundedVec
}

export interface V2BodyId_Technical {
    __kind: 'Technical'
}

export interface V2BodyId_Treasury {
    __kind: 'Treasury'
}

export interface V2BodyId_Unit {
    __kind: 'Unit'
}

export type WeakBoundedVec = Bytes

export type V2NetworkId = V2NetworkId_Any | V2NetworkId_Kusama | V2NetworkId_Named | V2NetworkId_Polkadot

export interface V2NetworkId_Any {
    __kind: 'Any'
}

export interface V2NetworkId_Kusama {
    __kind: 'Kusama'
}

export interface V2NetworkId_Named {
    __kind: 'Named'
    value: WeakBoundedVec
}

export interface V2NetworkId_Polkadot {
    __kind: 'Polkadot'
}

export interface Weight {
    refTime: bigint
    proofSize: bigint
}

export interface V3MultiAsset {
    id: V3AssetId
    fun: V3Fungibility
}

export type V3Fungibility = V3Fungibility_Fungible | V3Fungibility_NonFungible

export interface V3Fungibility_Fungible {
    __kind: 'Fungible'
    value: bigint
}

export interface V3Fungibility_NonFungible {
    __kind: 'NonFungible'
    value: V3AssetInstance
}

export type V3AssetInstance =
    | V3AssetInstance_Array16
    | V3AssetInstance_Array32
    | V3AssetInstance_Array4
    | V3AssetInstance_Array8
    | V3AssetInstance_Index
    | V3AssetInstance_Undefined

export interface V3AssetInstance_Array16 {
    __kind: 'Array16'
    value: Bytes
}

export interface V3AssetInstance_Array32 {
    __kind: 'Array32'
    value: Bytes
}

export interface V3AssetInstance_Array4 {
    __kind: 'Array4'
    value: Bytes
}

export interface V3AssetInstance_Array8 {
    __kind: 'Array8'
    value: Bytes
}

export interface V3AssetInstance_Index {
    __kind: 'Index'
    value: bigint
}

export interface V3AssetInstance_Undefined {
    __kind: 'Undefined'
}

export type V3Outcome = V3Outcome_Complete | V3Outcome_Error | V3Outcome_Incomplete

export interface V3Outcome_Complete {
    __kind: 'Complete'
    value: Weight
}

export interface V3Outcome_Error {
    __kind: 'Error'
    value: V3Error
}

export interface V3Outcome_Incomplete {
    __kind: 'Incomplete'
    value: [Weight, V3Error]
}

export type VersionedMultiAssets = VersionedMultiAssets_V2 | VersionedMultiAssets_V3

export interface VersionedMultiAssets_V2 {
    __kind: 'V2'
    value: V2MultiAsset[]
}

export interface VersionedMultiAssets_V3 {
    __kind: 'V3'
    value: V3MultiAsset[]
}

export interface V2MultiAsset {
    id: V2AssetId
    fun: V2Fungibility
}

export type V2Fungibility = V2Fungibility_Fungible | V2Fungibility_NonFungible

export interface V2Fungibility_Fungible {
    __kind: 'Fungible'
    value: bigint
}

export interface V2Fungibility_NonFungible {
    __kind: 'NonFungible'
    value: V2AssetInstance
}

export type V2AssetInstance =
    | V2AssetInstance_Array16
    | V2AssetInstance_Array32
    | V2AssetInstance_Array4
    | V2AssetInstance_Array8
    | V2AssetInstance_Blob
    | V2AssetInstance_Index
    | V2AssetInstance_Undefined

export interface V2AssetInstance_Array16 {
    __kind: 'Array16'
    value: Bytes
}

export interface V2AssetInstance_Array32 {
    __kind: 'Array32'
    value: Bytes
}

export interface V2AssetInstance_Array4 {
    __kind: 'Array4'
    value: Bytes
}

export interface V2AssetInstance_Array8 {
    __kind: 'Array8'
    value: Bytes
}

export interface V2AssetInstance_Blob {
    __kind: 'Blob'
    value: Bytes
}

export interface V2AssetInstance_Index {
    __kind: 'Index'
    value: bigint
}

export interface V2AssetInstance_Undefined {
    __kind: 'Undefined'
}

export type V2AssetId = V2AssetId_Abstract | V2AssetId_Concrete

export interface V2AssetId_Abstract {
    __kind: 'Abstract'
    value: Bytes
}

export interface V2AssetId_Concrete {
    __kind: 'Concrete'
    value: V2MultiLocation
}

export interface V3MultiLocation {
    parents: number
    interior: V3Junctions
}

/**
 * The `Event` enum of this pallet
 */
export type WhitelistEvent =
    | WhitelistEvent_CallWhitelisted
    | WhitelistEvent_WhitelistedCallDispatched
    | WhitelistEvent_WhitelistedCallRemoved

export interface WhitelistEvent_CallWhitelisted {
    __kind: 'CallWhitelisted'
    callHash: H256
}

export interface WhitelistEvent_WhitelistedCallDispatched {
    __kind: 'WhitelistedCallDispatched'
    callHash: H256
    result: Result<PostDispatchInfo, DispatchErrorWithPostInfo>
}

export interface WhitelistEvent_WhitelistedCallRemoved {
    __kind: 'WhitelistedCallRemoved'
    callHash: H256
}

export interface DispatchErrorWithPostInfo {
    postInfo: PostDispatchInfo
    error: DispatchError
}

export type DispatchError =
    | DispatchError_Arithmetic
    | DispatchError_BadOrigin
    | DispatchError_CannotLookup
    | DispatchError_ConsumerRemaining
    | DispatchError_Corruption
    | DispatchError_Exhausted
    | DispatchError_Module
    | DispatchError_NoProviders
    | DispatchError_Other
    | DispatchError_RootNotAllowed
    | DispatchError_Token
    | DispatchError_TooManyConsumers
    | DispatchError_Transactional
    | DispatchError_Unavailable

export interface DispatchError_Arithmetic {
    __kind: 'Arithmetic'
    value: ArithmeticError
}

export interface DispatchError_BadOrigin {
    __kind: 'BadOrigin'
}

export interface DispatchError_CannotLookup {
    __kind: 'CannotLookup'
}

export interface DispatchError_ConsumerRemaining {
    __kind: 'ConsumerRemaining'
}

export interface DispatchError_Corruption {
    __kind: 'Corruption'
}

export interface DispatchError_Exhausted {
    __kind: 'Exhausted'
}

export interface DispatchError_Module {
    __kind: 'Module'
    value: ModuleError
}

export interface DispatchError_NoProviders {
    __kind: 'NoProviders'
}

export interface DispatchError_Other {
    __kind: 'Other'
}

export interface DispatchError_RootNotAllowed {
    __kind: 'RootNotAllowed'
}

export interface DispatchError_Token {
    __kind: 'Token'
    value: TokenError
}

export interface DispatchError_TooManyConsumers {
    __kind: 'TooManyConsumers'
}

export interface DispatchError_Transactional {
    __kind: 'Transactional'
    value: TransactionalError
}

export interface DispatchError_Unavailable {
    __kind: 'Unavailable'
}

export type TransactionalError = TransactionalError_LimitReached | TransactionalError_NoLayer

export interface TransactionalError_LimitReached {
    __kind: 'LimitReached'
}

export interface TransactionalError_NoLayer {
    __kind: 'NoLayer'
}

export type TokenError =
    | TokenError_BelowMinimum
    | TokenError_Blocked
    | TokenError_CannotCreate
    | TokenError_CannotCreateHold
    | TokenError_Frozen
    | TokenError_FundsUnavailable
    | TokenError_NotExpendable
    | TokenError_OnlyProvider
    | TokenError_UnknownAsset
    | TokenError_Unsupported

export interface TokenError_BelowMinimum {
    __kind: 'BelowMinimum'
}

export interface TokenError_Blocked {
    __kind: 'Blocked'
}

export interface TokenError_CannotCreate {
    __kind: 'CannotCreate'
}

export interface TokenError_CannotCreateHold {
    __kind: 'CannotCreateHold'
}

export interface TokenError_Frozen {
    __kind: 'Frozen'
}

export interface TokenError_FundsUnavailable {
    __kind: 'FundsUnavailable'
}

export interface TokenError_NotExpendable {
    __kind: 'NotExpendable'
}

export interface TokenError_OnlyProvider {
    __kind: 'OnlyProvider'
}

export interface TokenError_UnknownAsset {
    __kind: 'UnknownAsset'
}

export interface TokenError_Unsupported {
    __kind: 'Unsupported'
}

export interface ModuleError {
    index: number
    error: Bytes
}

export type ArithmeticError = ArithmeticError_DivisionByZero | ArithmeticError_Overflow | ArithmeticError_Underflow

export interface ArithmeticError_DivisionByZero {
    __kind: 'DivisionByZero'
}

export interface ArithmeticError_Overflow {
    __kind: 'Overflow'
}

export interface ArithmeticError_Underflow {
    __kind: 'Underflow'
}

export interface PostDispatchInfo {
    actualWeight?: Weight | undefined
    paysFee: Pays
}

export type Pays = Pays_No | Pays_Yes

export interface Pays_No {
    __kind: 'No'
}

export interface Pays_Yes {
    __kind: 'Yes'
}

/**
 * The `Event` enum of this pallet
 */
export type VoterListEvent = VoterListEvent_Rebagged | VoterListEvent_ScoreUpdated

/**
 * Moved an account from one bag to another.
 */
export interface VoterListEvent_Rebagged {
    __kind: 'Rebagged'
    who: AccountId32
    from: bigint
    to: bigint
}

/**
 * Updated the score of some account to the given amount.
 */
export interface VoterListEvent_ScoreUpdated {
    __kind: 'ScoreUpdated'
    who: AccountId32
    newScore: bigint
}

export type AccountId32 = Bytes

/**
 * The `Event` enum of this pallet
 */
export type VoteManagerEvent = VoteManagerEvent_Voted

/**
 * An account has voted in a referendum
 */
export interface VoteManagerEvent_Voted {
    __kind: 'Voted'
    voter: AccountId32
    pollIndex: number
    vote: AccountVote
}

export type AccountVote = AccountVote_Split | AccountVote_SplitAbstain | AccountVote_Standard

export interface AccountVote_Split {
    __kind: 'Split'
    aye: bigint
    nay: bigint
}

export interface AccountVote_SplitAbstain {
    __kind: 'SplitAbstain'
    aye: bigint
    nay: bigint
    abstain: bigint
}

export interface AccountVote_Standard {
    __kind: 'Standard'
    vote: Vote
    balance: bigint
}

export type Vote = number

/**
 * The `Event` enum of this pallet
 */
export type ValidatorManagerEvent =
    | ValidatorManagerEvent_ValidatorsDeregistered
    | ValidatorManagerEvent_ValidatorsRegistered

/**
 * Validators were removed from the set.
 */
export interface ValidatorManagerEvent_ValidatorsDeregistered {
    __kind: 'ValidatorsDeregistered'
    value: AccountId32[]
}

/**
 * New validators were added to the set.
 */
export interface ValidatorManagerEvent_ValidatorsRegistered {
    __kind: 'ValidatorsRegistered'
    value: AccountId32[]
}

/**
 * The `Event` enum of this pallet
 */
export type UtilityEvent =
    | UtilityEvent_BatchCompleted
    | UtilityEvent_BatchCompletedWithErrors
    | UtilityEvent_BatchInterrupted
    | UtilityEvent_DispatchedAs
    | UtilityEvent_ItemCompleted
    | UtilityEvent_ItemFailed

/**
 * Batch of dispatches completed fully with no error.
 */
export interface UtilityEvent_BatchCompleted {
    __kind: 'BatchCompleted'
}

/**
 * Batch of dispatches completed but has errors.
 */
export interface UtilityEvent_BatchCompletedWithErrors {
    __kind: 'BatchCompletedWithErrors'
}

/**
 * Batch of dispatches did not complete fully. Index of first failing dispatch given, as
 * well as the error.
 */
export interface UtilityEvent_BatchInterrupted {
    __kind: 'BatchInterrupted'
    index: number
    error: DispatchError
}

/**
 * A call was dispatched.
 */
export interface UtilityEvent_DispatchedAs {
    __kind: 'DispatchedAs'
    result: Result<null, DispatchError>
}

/**
 * A single item within a Batch of dispatches has completed with no error.
 */
export interface UtilityEvent_ItemCompleted {
    __kind: 'ItemCompleted'
}

/**
 * A single item within a Batch of dispatches has completed with error.
 */
export interface UtilityEvent_ItemFailed {
    __kind: 'ItemFailed'
    error: DispatchError
}

/**
 * The `Event` enum of this pallet
 */
export type TreasuryEvent =
    | TreasuryEvent_Awarded
    | TreasuryEvent_Burnt
    | TreasuryEvent_Deposit
    | TreasuryEvent_Proposed
    | TreasuryEvent_Rejected
    | TreasuryEvent_Rollover
    | TreasuryEvent_SpendApproved
    | TreasuryEvent_Spending
    | TreasuryEvent_UpdatedInactive

/**
 * Some funds have been allocated.
 */
export interface TreasuryEvent_Awarded {
    __kind: 'Awarded'
    proposalIndex: number
    award: bigint
    account: AccountId32
}

/**
 * Some of our funds have been burnt.
 */
export interface TreasuryEvent_Burnt {
    __kind: 'Burnt'
    burntFunds: bigint
}

/**
 * Some funds have been deposited.
 */
export interface TreasuryEvent_Deposit {
    __kind: 'Deposit'
    value: bigint
}

/**
 * New proposal.
 */
export interface TreasuryEvent_Proposed {
    __kind: 'Proposed'
    proposalIndex: number
}

/**
 * A proposal was rejected; funds were slashed.
 */
export interface TreasuryEvent_Rejected {
    __kind: 'Rejected'
    proposalIndex: number
    slashed: bigint
}

/**
 * Spending has finished; this is the amount that rolls over until next spend.
 */
export interface TreasuryEvent_Rollover {
    __kind: 'Rollover'
    rolloverBalance: bigint
}

/**
 * A new spend proposal has been approved.
 */
export interface TreasuryEvent_SpendApproved {
    __kind: 'SpendApproved'
    proposalIndex: number
    amount: bigint
    beneficiary: AccountId32
}

/**
 * We have ended a spend period and will now allocate funds.
 */
export interface TreasuryEvent_Spending {
    __kind: 'Spending'
    budgetRemaining: bigint
}

/**
 * The inactive funds of the pallet have been updated.
 */
export interface TreasuryEvent_UpdatedInactive {
    __kind: 'UpdatedInactive'
    reactivated: bigint
    deactivated: bigint
}

/**
 * The `Event` enum of this pallet
 */
export type TransactionPaymentEvent = TransactionPaymentEvent_TransactionFeePaid

/**
 * A transaction fee `actual_fee`, of which `tip` was added to the minimum inclusion fee,
 * has been paid by `who`.
 */
export interface TransactionPaymentEvent_TransactionFeePaid {
    __kind: 'TransactionFeePaid'
    who: AccountId32
    actualFee: bigint
    tip: bigint
}

/**
 * Event for the System pallet.
 */
export type SystemEvent =
    | SystemEvent_CodeUpdated
    | SystemEvent_ExtrinsicFailed
    | SystemEvent_ExtrinsicSuccess
    | SystemEvent_KilledAccount
    | SystemEvent_NewAccount
    | SystemEvent_Remarked

/**
 * `:code` was updated.
 */
export interface SystemEvent_CodeUpdated {
    __kind: 'CodeUpdated'
}

/**
 * An extrinsic failed.
 */
export interface SystemEvent_ExtrinsicFailed {
    __kind: 'ExtrinsicFailed'
    dispatchError: DispatchError
    dispatchInfo: DispatchInfo
}

/**
 * An extrinsic completed successfully.
 */
export interface SystemEvent_ExtrinsicSuccess {
    __kind: 'ExtrinsicSuccess'
    dispatchInfo: DispatchInfo
}

/**
 * An account was reaped.
 */
export interface SystemEvent_KilledAccount {
    __kind: 'KilledAccount'
    account: AccountId32
}

/**
 * A new account was created.
 */
export interface SystemEvent_NewAccount {
    __kind: 'NewAccount'
    account: AccountId32
}

/**
 * On on-chain remark happened.
 */
export interface SystemEvent_Remarked {
    __kind: 'Remarked'
    sender: AccountId32
    hash: H256
}

export interface DispatchInfo {
    weight: Weight
    class: DispatchClass
    paysFee: Pays
}

export type DispatchClass = DispatchClass_Mandatory | DispatchClass_Normal | DispatchClass_Operational

export interface DispatchClass_Mandatory {
    __kind: 'Mandatory'
}

export interface DispatchClass_Normal {
    __kind: 'Normal'
}

export interface DispatchClass_Operational {
    __kind: 'Operational'
}

/**
 * The `Event` enum of this pallet
 */
export type SudoEvent = SudoEvent_KeyChanged | SudoEvent_Sudid | SudoEvent_SudoAsDone

/**
 * The \[sudoer\] just switched identity; the old key is supplied if one existed.
 */
export interface SudoEvent_KeyChanged {
    __kind: 'KeyChanged'
    oldSudoer?: AccountId32 | undefined
}

/**
 * A sudo just took place. \[result\]
 */
export interface SudoEvent_Sudid {
    __kind: 'Sudid'
    sudoResult: Result<null, DispatchError>
}

/**
 * A sudo just took place. \[result\]
 */
export interface SudoEvent_SudoAsDone {
    __kind: 'SudoAsDone'
    sudoResult: Result<null, DispatchError>
}

/**
 * The `Event` enum of this pallet
 */
export type StakingEvent =
    | StakingEvent_Bonded
    | StakingEvent_Chilled
    | StakingEvent_EraPaid
    | StakingEvent_ForceEra
    | StakingEvent_Kicked
    | StakingEvent_OldSlashingReportDiscarded
    | StakingEvent_PayoutStarted
    | StakingEvent_Rewarded
    | StakingEvent_SlashReported
    | StakingEvent_Slashed
    | StakingEvent_StakersElected
    | StakingEvent_StakingElectionFailed
    | StakingEvent_Unbonded
    | StakingEvent_ValidatorPrefsSet
    | StakingEvent_Withdrawn

/**
 * An account has bonded this amount. \[stash, amount\]
 *
 * NOTE: This event is only emitted when funds are bonded via a dispatchable. Notably,
 * it will not be emitted for staking rewards when they are added to stake.
 */
export interface StakingEvent_Bonded {
    __kind: 'Bonded'
    stash: AccountId32
    amount: bigint
}

/**
 * An account has stopped participating as either a validator or nominator.
 */
export interface StakingEvent_Chilled {
    __kind: 'Chilled'
    stash: AccountId32
}

/**
 * The era payout has been set; the first balance is the validator-payout; the second is
 * the remainder from the maximum amount of reward.
 */
export interface StakingEvent_EraPaid {
    __kind: 'EraPaid'
    eraIndex: number
    validatorPayout: bigint
    remainder: bigint
}

/**
 * A new force era mode was set.
 */
export interface StakingEvent_ForceEra {
    __kind: 'ForceEra'
    mode: Forcing
}

/**
 * A nominator has been kicked from a validator.
 */
export interface StakingEvent_Kicked {
    __kind: 'Kicked'
    nominator: AccountId32
    stash: AccountId32
}

/**
 * An old slashing report from a prior era was discarded because it could
 * not be processed.
 */
export interface StakingEvent_OldSlashingReportDiscarded {
    __kind: 'OldSlashingReportDiscarded'
    sessionIndex: number
}

/**
 * The stakers' rewards are getting paid.
 */
export interface StakingEvent_PayoutStarted {
    __kind: 'PayoutStarted'
    eraIndex: number
    validatorStash: AccountId32
}

/**
 * The nominator has been rewarded by this amount.
 */
export interface StakingEvent_Rewarded {
    __kind: 'Rewarded'
    stash: AccountId32
    amount: bigint
}

/**
 * A slash for the given validator, for the given percentage of their stake, at the given
 * era as been reported.
 */
export interface StakingEvent_SlashReported {
    __kind: 'SlashReported'
    validator: AccountId32
    fraction: Perbill
    slashEra: number
}

/**
 * A staker (validator or nominator) has been slashed by the given amount.
 */
export interface StakingEvent_Slashed {
    __kind: 'Slashed'
    staker: AccountId32
    amount: bigint
}

/**
 * A new set of stakers was elected.
 */
export interface StakingEvent_StakersElected {
    __kind: 'StakersElected'
}

/**
 * The election failed. No new era is planned.
 */
export interface StakingEvent_StakingElectionFailed {
    __kind: 'StakingElectionFailed'
}

/**
 * An account has unbonded this amount.
 */
export interface StakingEvent_Unbonded {
    __kind: 'Unbonded'
    stash: AccountId32
    amount: bigint
}

/**
 * A validator has set their preferences.
 */
export interface StakingEvent_ValidatorPrefsSet {
    __kind: 'ValidatorPrefsSet'
    stash: AccountId32
    prefs: ValidatorPrefs
}

/**
 * An account has called `withdraw_unbonded` and removed unbonding chunks worth `Balance`
 * from the unlocking queue.
 */
export interface StakingEvent_Withdrawn {
    __kind: 'Withdrawn'
    stash: AccountId32
    amount: bigint
}

export interface ValidatorPrefs {
    commission: number
    blocked: boolean
}

export type Perbill = number

export type Forcing = Forcing_ForceAlways | Forcing_ForceNew | Forcing_ForceNone | Forcing_NotForcing

export interface Forcing_ForceAlways {
    __kind: 'ForceAlways'
}

export interface Forcing_ForceNew {
    __kind: 'ForceNew'
}

export interface Forcing_ForceNone {
    __kind: 'ForceNone'
}

export interface Forcing_NotForcing {
    __kind: 'NotForcing'
}

/**
 * The pallet's event type.
 */
export type StakeExchangeEvent =
    | StakeExchangeEvent_BuyOrderCompleted
    | StakeExchangeEvent_LiquidityAdded
    | StakeExchangeEvent_LiquidityConfigUpdated
    | StakeExchangeEvent_LiquidityWithdrawn
    | StakeExchangeEvent_OfferCancelled
    | StakeExchangeEvent_OfferCompleted
    | StakeExchangeEvent_OfferCreated

/**
 * Buy order was completed
 */
export interface StakeExchangeEvent_BuyOrderCompleted {
    __kind: 'BuyOrderCompleted'
    /**
     * AccountId of the buyer
     */
    who: AccountId32
    /**
     * The tokenId that was exchanged
     */
    tokenId: bigint
    /**
     * The amount of tokens transferred
     */
    amount: bigint
    /**
     * The rate at which the order was completed
     */
    rate: Perbill
    /**
     * The creator of the offer
     */
    offerCreator: AccountId32
}

/**
 * Liquidity was added to a offer
 */
export interface StakeExchangeEvent_LiquidityAdded {
    __kind: 'LiquidityAdded'
    /**
     * ID of the account
     */
    who: AccountId32
    /**
     * ID of the offer
     */
    offerId: bigint
}

/**
 * Liquidity config was set for account
 */
export interface StakeExchangeEvent_LiquidityConfigUpdated {
    __kind: 'LiquidityConfigUpdated'
    /**
     * ID of the offer
     */
    who: AccountId32
    /**
     * The offer that was placed
     */
    config: LiquidityAccountConfig
}

/**
 * Liquidity was withdrawn from a offer
 */
export interface StakeExchangeEvent_LiquidityWithdrawn {
    __kind: 'LiquidityWithdrawn'
    /**
     * ID of the account
     */
    who: AccountId32
    /**
     * ID of the offer
     */
    offerId: bigint
}

/**
 * A offer was cancelled
 */
export interface StakeExchangeEvent_OfferCancelled {
    __kind: 'OfferCancelled'
    /**
     * ID of the offer
     */
    offerId: bigint
}

/**
 * A offer was completed and removed
 */
export interface StakeExchangeEvent_OfferCompleted {
    __kind: 'OfferCompleted'
    /**
     * ID of the offer
     */
    offerId: bigint
}

/**
 * A offer was placed
 */
export interface StakeExchangeEvent_OfferCreated {
    __kind: 'OfferCreated'
    /**
     * ID of the offer
     */
    offerId: bigint
    /**
     * The offer that was placed
     */
    offer: Offer
}

export interface Offer {
    account: AccountId32
    total: bigint
    rate: number
    minAverageRewardRate: bigint
    deposit: bigint
    tokenFilter: TokenFilter
}

export type TokenFilter = TokenFilter_All | TokenFilter_BlockList | TokenFilter_Whitelist

export interface TokenFilter_All {
    __kind: 'All'
}

export interface TokenFilter_BlockList {
    __kind: 'BlockList'
    value: bigint[]
}

export interface TokenFilter_Whitelist {
    __kind: 'Whitelist'
    value: bigint[]
}

export interface LiquidityAccountConfig {
    tokenFilter: TokenFilter
}

/**
 * The `Event` enum of this pallet
 */
export type SlotsEvent = SlotsEvent_Leased | SlotsEvent_NewLeasePeriod

/**
 * A para has won the right to a continuous set of lease periods as a parachain.
 * First balance is any extra amount reserved on top of the para's existing deposit.
 * Second balance is the total amount reserved.
 */
export interface SlotsEvent_Leased {
    __kind: 'Leased'
    paraId: Id
    leaser: AccountId32
    periodBegin: number
    periodCount: number
    extraReserved: bigint
    totalAmount: bigint
}

/**
 * A new `[lease_period]` is beginning.
 */
export interface SlotsEvent_NewLeasePeriod {
    __kind: 'NewLeasePeriod'
    leasePeriod: number
}

export type Id = number

/**
 * The `Event` enum of this pallet
 */
export type SessionEvent = SessionEvent_NewSession

/**
 * New session has happened. Note that the argument is the session index, not the
 * block number as the type might suggest.
 */
export interface SessionEvent_NewSession {
    __kind: 'NewSession'
    sessionIndex: number
}

/**
 * Events type.
 */
export type SchedulerEvent =
    | SchedulerEvent_CallUnavailable
    | SchedulerEvent_Canceled
    | SchedulerEvent_Dispatched
    | SchedulerEvent_PeriodicFailed
    | SchedulerEvent_PermanentlyOverweight
    | SchedulerEvent_Scheduled

/**
 * The call for the provided hash was not found so the task has been aborted.
 */
export interface SchedulerEvent_CallUnavailable {
    __kind: 'CallUnavailable'
    task: [number, number]
    id?: Bytes | undefined
}

/**
 * Canceled some task.
 */
export interface SchedulerEvent_Canceled {
    __kind: 'Canceled'
    when: number
    index: number
}

/**
 * Dispatched some task.
 */
export interface SchedulerEvent_Dispatched {
    __kind: 'Dispatched'
    task: [number, number]
    id?: Bytes | undefined
    result: Result<null, DispatchError>
}

/**
 * The given task was unable to be renewed since the agenda is full at that block.
 */
export interface SchedulerEvent_PeriodicFailed {
    __kind: 'PeriodicFailed'
    task: [number, number]
    id?: Bytes | undefined
}

/**
 * The given task can never be executed since it is overweight.
 */
export interface SchedulerEvent_PermanentlyOverweight {
    __kind: 'PermanentlyOverweight'
    task: [number, number]
    id?: Bytes | undefined
}

/**
 * Scheduled some task.
 */
export interface SchedulerEvent_Scheduled {
    __kind: 'Scheduled'
    when: number
    index: number
}

/**
 * The `Event` enum of this pallet
 */
export type RegistrarEvent =
    | RegistrarEvent_Deregistered
    | RegistrarEvent_Registered
    | RegistrarEvent_Reserved
    | RegistrarEvent_Swapped

export interface RegistrarEvent_Deregistered {
    __kind: 'Deregistered'
    paraId: Id
}

export interface RegistrarEvent_Registered {
    __kind: 'Registered'
    paraId: Id
    manager: AccountId32
}

export interface RegistrarEvent_Reserved {
    __kind: 'Reserved'
    paraId: Id
    who: AccountId32
}

export interface RegistrarEvent_Swapped {
    __kind: 'Swapped'
    paraId: Id
    otherId: Id
}

/**
 * The `Event` enum of this pallet
 */
export type ReferendaEvent =
    | ReferendaEvent_Approved
    | ReferendaEvent_Cancelled
    | ReferendaEvent_ConfirmAborted
    | ReferendaEvent_ConfirmStarted
    | ReferendaEvent_Confirmed
    | ReferendaEvent_DecisionDepositPlaced
    | ReferendaEvent_DecisionDepositRefunded
    | ReferendaEvent_DecisionStarted
    | ReferendaEvent_DepositSlashed
    | ReferendaEvent_Killed
    | ReferendaEvent_MetadataCleared
    | ReferendaEvent_MetadataSet
    | ReferendaEvent_Rejected
    | ReferendaEvent_SubmissionDepositRefunded
    | ReferendaEvent_Submitted
    | ReferendaEvent_TimedOut

/**
 * A referendum has been approved and its proposal has been scheduled.
 */
export interface ReferendaEvent_Approved {
    __kind: 'Approved'
    /**
     * Index of the referendum.
     */
    index: number
}

/**
 * A referendum has been cancelled.
 */
export interface ReferendaEvent_Cancelled {
    __kind: 'Cancelled'
    /**
     * Index of the referendum.
     */
    index: number
    /**
     * The final tally of votes in this referendum.
     */
    tally: Tally
}

export interface ReferendaEvent_ConfirmAborted {
    __kind: 'ConfirmAborted'
    /**
     * Index of the referendum.
     */
    index: number
}

export interface ReferendaEvent_ConfirmStarted {
    __kind: 'ConfirmStarted'
    /**
     * Index of the referendum.
     */
    index: number
}

/**
 * A referendum has ended its confirmation phase and is ready for approval.
 */
export interface ReferendaEvent_Confirmed {
    __kind: 'Confirmed'
    /**
     * Index of the referendum.
     */
    index: number
    /**
     * The final tally of votes in this referendum.
     */
    tally: Tally
}

/**
 * The decision deposit has been placed.
 */
export interface ReferendaEvent_DecisionDepositPlaced {
    __kind: 'DecisionDepositPlaced'
    /**
     * Index of the referendum.
     */
    index: number
    /**
     * The account who placed the deposit.
     */
    who: AccountId32
    /**
     * The amount placed by the account.
     */
    amount: bigint
}

/**
 * The decision deposit has been refunded.
 */
export interface ReferendaEvent_DecisionDepositRefunded {
    __kind: 'DecisionDepositRefunded'
    /**
     * Index of the referendum.
     */
    index: number
    /**
     * The account who placed the deposit.
     */
    who: AccountId32
    /**
     * The amount placed by the account.
     */
    amount: bigint
}

/**
 * A referendum has moved into the deciding phase.
 */
export interface ReferendaEvent_DecisionStarted {
    __kind: 'DecisionStarted'
    /**
     * Index of the referendum.
     */
    index: number
    /**
     * The track (and by extension proposal dispatch origin) of this referendum.
     */
    track: number
    /**
     * The proposal for the referendum.
     */
    proposal: Bounded
    /**
     * The current tally of votes in this referendum.
     */
    tally: Tally
}

/**
 * A deposit has been slashaed.
 */
export interface ReferendaEvent_DepositSlashed {
    __kind: 'DepositSlashed'
    /**
     * The account who placed the deposit.
     */
    who: AccountId32
    /**
     * The amount placed by the account.
     */
    amount: bigint
}

/**
 * A referendum has been killed.
 */
export interface ReferendaEvent_Killed {
    __kind: 'Killed'
    /**
     * Index of the referendum.
     */
    index: number
    /**
     * The final tally of votes in this referendum.
     */
    tally: Tally
}

/**
 * Metadata for a referendum has been cleared.
 */
export interface ReferendaEvent_MetadataCleared {
    __kind: 'MetadataCleared'
    /**
     * Index of the referendum.
     */
    index: number
    /**
     * Preimage hash.
     */
    hash: H256
}

/**
 * Metadata for a referendum has been set.
 */
export interface ReferendaEvent_MetadataSet {
    __kind: 'MetadataSet'
    /**
     * Index of the referendum.
     */
    index: number
    /**
     * Preimage hash.
     */
    hash: H256
}

/**
 * A proposal has been rejected by referendum.
 */
export interface ReferendaEvent_Rejected {
    __kind: 'Rejected'
    /**
     * Index of the referendum.
     */
    index: number
    /**
     * The final tally of votes in this referendum.
     */
    tally: Tally
}

/**
 * The submission deposit has been refunded.
 */
export interface ReferendaEvent_SubmissionDepositRefunded {
    __kind: 'SubmissionDepositRefunded'
    /**
     * Index of the referendum.
     */
    index: number
    /**
     * The account who placed the deposit.
     */
    who: AccountId32
    /**
     * The amount placed by the account.
     */
    amount: bigint
}

/**
 * A referendum has been submitted.
 */
export interface ReferendaEvent_Submitted {
    __kind: 'Submitted'
    /**
     * Index of the referendum.
     */
    index: number
    /**
     * The track (and by extension proposal dispatch origin) of this referendum.
     */
    track: number
    /**
     * The proposal for the referendum.
     */
    proposal: Bounded
}

/**
 * A referendum has been timed out without being decided.
 */
export interface ReferendaEvent_TimedOut {
    __kind: 'TimedOut'
    /**
     * Index of the referendum.
     */
    index: number
    /**
     * The final tally of votes in this referendum.
     */
    tally: Tally
}

export type Bounded = Bounded_Inline | Bounded_Legacy | Bounded_Lookup

export interface Bounded_Inline {
    __kind: 'Inline'
    value: Bytes
}

export interface Bounded_Legacy {
    __kind: 'Legacy'
    hash: H256
}

export interface Bounded_Lookup {
    __kind: 'Lookup'
    hash: H256
    len: number
}

export interface Tally {
    ayes: bigint
    nays: bigint
    support: bigint
}

/**
 * The `Event` enum of this pallet
 */
export type PreimageEvent = PreimageEvent_Cleared | PreimageEvent_Noted | PreimageEvent_Requested

/**
 * A preimage has ben cleared.
 */
export interface PreimageEvent_Cleared {
    __kind: 'Cleared'
    hash: H256
}

/**
 * A preimage has been noted.
 */
export interface PreimageEvent_Noted {
    __kind: 'Noted'
    hash: H256
}

/**
 * A preimage has been requested.
 */
export interface PreimageEvent_Requested {
    __kind: 'Requested'
    hash: H256
}

/**
 * The `Event` enum of this pallet
 */
export type ParasDisputesEvent =
    | ParasDisputesEvent_DisputeConcluded
    | ParasDisputesEvent_DisputeInitiated
    | ParasDisputesEvent_Revert

/**
 * A dispute has concluded for or against a candidate.
 * `\[para id, candidate hash, dispute result\]`
 */
export interface ParasDisputesEvent_DisputeConcluded {
    __kind: 'DisputeConcluded'
    value: [CandidateHash, DisputeResult]
}

/**
 * A dispute has been initiated. \[candidate hash, dispute location\]
 */
export interface ParasDisputesEvent_DisputeInitiated {
    __kind: 'DisputeInitiated'
    value: [CandidateHash, DisputeLocation]
}

/**
 * A dispute has concluded with supermajority against a candidate.
 * Block authors should no longer build on top of this head and should
 * instead revert the block at the given height. This should be the
 * number of the child of the last known valid block in the chain.
 */
export interface ParasDisputesEvent_Revert {
    __kind: 'Revert'
    value: number
}

export type DisputeLocation = DisputeLocation_Local | DisputeLocation_Remote

export interface DisputeLocation_Local {
    __kind: 'Local'
}

export interface DisputeLocation_Remote {
    __kind: 'Remote'
}

export type DisputeResult = DisputeResult_Invalid | DisputeResult_Valid

export interface DisputeResult_Invalid {
    __kind: 'Invalid'
}

export interface DisputeResult_Valid {
    __kind: 'Valid'
}

export type CandidateHash = Bytes

/**
 * The `Event` enum of this pallet
 */
export type ParasEvent =
    | ParasEvent_ActionQueued
    | ParasEvent_CodeUpgradeScheduled
    | ParasEvent_CurrentCodeUpdated
    | ParasEvent_CurrentHeadUpdated
    | ParasEvent_NewHeadNoted
    | ParasEvent_PvfCheckAccepted
    | ParasEvent_PvfCheckRejected
    | ParasEvent_PvfCheckStarted

/**
 * A para has been queued to execute pending actions. `para_id`
 */
export interface ParasEvent_ActionQueued {
    __kind: 'ActionQueued'
    value: [Id, number]
}

/**
 * A code upgrade has been scheduled for a Para. `para_id`
 */
export interface ParasEvent_CodeUpgradeScheduled {
    __kind: 'CodeUpgradeScheduled'
    value: Id
}

/**
 * Current code has been updated for a Para. `para_id`
 */
export interface ParasEvent_CurrentCodeUpdated {
    __kind: 'CurrentCodeUpdated'
    value: Id
}

/**
 * Current head has been updated for a Para. `para_id`
 */
export interface ParasEvent_CurrentHeadUpdated {
    __kind: 'CurrentHeadUpdated'
    value: Id
}

/**
 * A new head has been noted for a Para. `para_id`
 */
export interface ParasEvent_NewHeadNoted {
    __kind: 'NewHeadNoted'
    value: Id
}

/**
 * The given validation code was accepted by the PVF pre-checking vote.
 * `code_hash` `para_id`
 */
export interface ParasEvent_PvfCheckAccepted {
    __kind: 'PvfCheckAccepted'
    value: [ValidationCodeHash, Id]
}

/**
 * The given validation code was rejected by the PVF pre-checking vote.
 * `code_hash` `para_id`
 */
export interface ParasEvent_PvfCheckRejected {
    __kind: 'PvfCheckRejected'
    value: [ValidationCodeHash, Id]
}

/**
 * The given para either initiated or subscribed to a PVF check for the given validation
 * code. `code_hash` `para_id`
 */
export interface ParasEvent_PvfCheckStarted {
    __kind: 'PvfCheckStarted'
    value: [ValidationCodeHash, Id]
}

export type ValidationCodeHash = Bytes

/**
 * The `Event` enum of this pallet
 */
export type ParaInclusionEvent =
    | ParaInclusionEvent_CandidateBacked
    | ParaInclusionEvent_CandidateIncluded
    | ParaInclusionEvent_CandidateTimedOut
    | ParaInclusionEvent_UpwardMessagesReceived

/**
 * A candidate was backed. `[candidate, head_data]`
 */
export interface ParaInclusionEvent_CandidateBacked {
    __kind: 'CandidateBacked'
    value: [V5CandidateReceipt, HeadData, V5CoreIndex, V5GroupIndex]
}

/**
 * A candidate was included. `[candidate, head_data]`
 */
export interface ParaInclusionEvent_CandidateIncluded {
    __kind: 'CandidateIncluded'
    value: [V5CandidateReceipt, HeadData, V5CoreIndex, V5GroupIndex]
}

/**
 * A candidate timed out. `[candidate, head_data]`
 */
export interface ParaInclusionEvent_CandidateTimedOut {
    __kind: 'CandidateTimedOut'
    value: [V5CandidateReceipt, HeadData, V5CoreIndex]
}

/**
 * Some upward messages have been received and will be processed.
 */
export interface ParaInclusionEvent_UpwardMessagesReceived {
    __kind: 'UpwardMessagesReceived'
    from: Id
    count: number
}

export type V5GroupIndex = number

export type V5CoreIndex = number

export type HeadData = Bytes

export interface V5CandidateReceipt {
    descriptor: V5CandidateDescriptor
    commitmentsHash: H256
}

export interface V5CandidateDescriptor {
    paraId: Id
    relayParent: H256
    collator: V5Public
    persistedValidationDataHash: H256
    povHash: H256
    erasureRoot: H256
    signature: V5Signature
    paraHead: H256
    validationCodeHash: ValidationCodeHash
}

export type V5Signature = Bytes

export type V5Public = Bytes

/**
 * Events type.
 */
export type OffencesEvent = OffencesEvent_Offence

/**
 * There is an offence reported of the given `kind` happened at the `session_index` and
 * (kind-specific) time slot. This event is not deposited for duplicate slashes.
 * \[kind, timeslot\].
 */
export interface OffencesEvent_Offence {
    __kind: 'Offence'
    kind: Bytes
    timeslot: Bytes
}

/**
 * Events of this pallet.
 */
export type NominationPoolsEvent =
    | NominationPoolsEvent_Bonded
    | NominationPoolsEvent_CommissionUpdated
    | NominationPoolsEvent_Created
    | NominationPoolsEvent_Destroyed
    | NominationPoolsEvent_EarlyBirdBonusCalculated
    | NominationPoolsEvent_EarlyBirdBonusDistributed
    | NominationPoolsEvent_EarlyBirdBonusPaid
    | NominationPoolsEvent_EarlyBirdBonusPaymentUnlocked
    | NominationPoolsEvent_EarlyBirdSharesCaptured
    | NominationPoolsEvent_EraRewardsProcessed
    | NominationPoolsEvent_Nominated
    | NominationPoolsEvent_PoolMutated
    | NominationPoolsEvent_PoolSlashed
    | NominationPoolsEvent_RewardPaid
    | NominationPoolsEvent_StateChanged
    | NominationPoolsEvent_Unbonded
    | NominationPoolsEvent_UnbondingPoolSlashed
    | NominationPoolsEvent_Withdrawn

/**
 * A member has became bonded in a pool.
 */
export interface NominationPoolsEvent_Bonded {
    __kind: 'Bonded'
    member: AccountId32
    poolId: number
    bonded: bigint
}

/**
 * A pool's commission rate has been changed.
 */
export interface NominationPoolsEvent_CommissionUpdated {
    __kind: 'CommissionUpdated'
    poolId: number
    current?: Perbill | undefined
}

/**
 * A pool has been created.
 */
export interface NominationPoolsEvent_Created {
    __kind: 'Created'
    creator: AccountId32
    poolId: number
    capacity: bigint
}

/**
 * A pool has been destroyed.
 */
export interface NominationPoolsEvent_Destroyed {
    __kind: 'Destroyed'
    poolId: number
}

export interface NominationPoolsEvent_EarlyBirdBonusCalculated {
    __kind: 'EarlyBirdBonusCalculated'
    /**
     * The total amount to be distributed
     */
    totalAmount: bigint
}

/**
 * The early bird bonus has been distributed
 */
export interface NominationPoolsEvent_EarlyBirdBonusDistributed {
    __kind: 'EarlyBirdBonusDistributed'
    /**
     * The id of the pool
     */
    poolId: number
    /**
     * The amount distributed
     */
    amount: bigint
}

/**
 * The early bird bonus has been paid to the pool
 */
export interface NominationPoolsEvent_EarlyBirdBonusPaid {
    __kind: 'EarlyBirdBonusPaid'
    /**
     * The id of the pool
     */
    poolId: number
    /**
     * The payment ID
     */
    paymentId: number
    /**
     * The total accounts that were paid
     */
    totalAccounts: number
}

/**
 * A new share of early bird bonus has been unlocked
 */
export interface NominationPoolsEvent_EarlyBirdBonusPaymentUnlocked {
    __kind: 'EarlyBirdBonusPaymentUnlocked'
    /**
     * The payment-id of the unlocked bonus
     */
    paymentId: number
    /**
     * The next payment block
     */
    nextPaymentBlock: number
}

/**
 * The shares of pool users have been captured for early bird rewards
 */
export interface NominationPoolsEvent_EarlyBirdSharesCaptured {
    __kind: 'EarlyBirdSharesCaptured'
    /**
     * The id of the pool
     */
    poolId: number
    /**
     * The total number of accounts captured
     */
    totalAccounts: number
}

/**
 * This event happens once per era on the previous era that rewards are paid out for. It
 * pays commission, distributes bonus, and reinvests rewards.
 */
export interface NominationPoolsEvent_EraRewardsProcessed {
    __kind: 'EraRewardsProcessed'
    /**
     * The id of the pool
     */
    poolId: number
    /**
     * The era that was processed.
     */
    era: number
    /**
     * The commission that was paid
     */
    commission?: CommissionPayment | undefined
    /**
     * The amount of bonus that was unlocked
     */
    bonus: bigint
    /**
     * The amount that was bonded
     */
    reinvested: bigint
    /**
     * The current bonus cycle ended
     */
    bonusCycleEnded: boolean
}

/**
 * A nomination took place
 */
export interface NominationPoolsEvent_Nominated {
    __kind: 'Nominated'
    /**
     * The id of the pool
     */
    poolId: number
    /**
     * The validators that were nominated
     */
    validators: AccountId32[]
}

/**
 * Pool has been mutated.
 */
export interface NominationPoolsEvent_PoolMutated {
    __kind: 'PoolMutated'
    poolId: number
    mutation: PoolMutation
}

/**
 * The active balance of pool `pool_id` has been slashed to `balance`.
 */
export interface NominationPoolsEvent_PoolSlashed {
    __kind: 'PoolSlashed'
    poolId: number
    balance: bigint
}

/**
 * Rewards were paid to a pool
 */
export interface NominationPoolsEvent_RewardPaid {
    __kind: 'RewardPaid'
    /**
     * The id of the pool
     */
    poolId: number
    /**
     * The era that was processed.
     */
    era: number
    /**
     * The validator that the payment was received from
     */
    validatorStash: AccountId32
    /**
     * The amount added to the pool's reward account
     */
    reward: bigint
    /**
     * The amount that was added to the pool's bonus account
     */
    bonus: bigint
}

/**
 * The state of a pool has changed
 */
export interface NominationPoolsEvent_StateChanged {
    __kind: 'StateChanged'
    poolId: number
    newState: PoolState
}

/**
 * A member has unbonded from their pool.
 */
export interface NominationPoolsEvent_Unbonded {
    __kind: 'Unbonded'
    /**
     * The member that unbonded
     */
    member: AccountId32
    /**
     * The id of the pool unbonded from
     */
    poolId: number
    /**
     * the corresponding balance of the number of points that has been requested to be
     * unbonded (the argument of the `unbond` transaction) from the bonded pool.
     */
    balance: bigint
    /**
     * the number of points that are issued as a result of `balance` being dissolved into
     * the corresponding unbonding pool.
     */
    points: bigint
    /**
     * the era in which the balance will be unbonded. In the absence of slashing,
     * these values will match. In the presence of slashing, the number of points that are
     * issued in the unbonding pool will be less than the amount requested to be unbonded.
     */
    era: number
}

/**
 * The unbond pool at `era` of pool `pool_id` has been slashed to `balance`.
 */
export interface NominationPoolsEvent_UnbondingPoolSlashed {
    __kind: 'UnbondingPoolSlashed'
    poolId: number
    era: number
    balance: bigint
}

/**
 * A member has withdrawn from their pool.
 *
 * The given number of `points` have been dissolved in return of `balance`.
 *
 * Similar to `Unbonded` event, in the absence of slashing, the ratio of point to balance
 * will be 1.
 */
export interface NominationPoolsEvent_Withdrawn {
    __kind: 'Withdrawn'
    member: AccountId32
    poolId: number
    balance: bigint
    points: bigint
}

export type PoolState = PoolState_Destroying | PoolState_Open

export interface PoolState_Destroying {
    __kind: 'Destroying'
}

export interface PoolState_Open {
    __kind: 'Open'
}

export interface PoolMutation {
    duration?: number | undefined
    newCommission: ShouldMutate
    maxCommission?: Perbill | undefined
    changeRate?: CommissionChangeRate | undefined
    capacity?: bigint | undefined
    name?: BoundedVec | undefined
}

export type BoundedVec = Bytes

export interface CommissionChangeRate {
    maxDelta: Perbill
    minDelay: number
}

export type ShouldMutate = ShouldMutate_NoMutation | ShouldMutate_SomeMutation

export interface ShouldMutate_NoMutation {
    __kind: 'NoMutation'
}

export interface ShouldMutate_SomeMutation {
    __kind: 'SomeMutation'
    value?: Perbill | undefined
}

export interface CommissionPayment {
    beneficiary: AccountId32
    amount: bigint
}

/**
 * The `Event` enum of this pallet
 */
export type MultisigEvent =
    | MultisigEvent_MultisigApproval
    | MultisigEvent_MultisigCancelled
    | MultisigEvent_MultisigExecuted
    | MultisigEvent_NewMultisig

/**
 * A multisig operation has been approved by someone.
 */
export interface MultisigEvent_MultisigApproval {
    __kind: 'MultisigApproval'
    approving: AccountId32
    timepoint: Timepoint
    multisig: AccountId32
    callHash: Bytes
}

/**
 * A multisig operation has been cancelled.
 */
export interface MultisigEvent_MultisigCancelled {
    __kind: 'MultisigCancelled'
    cancelling: AccountId32
    timepoint: Timepoint
    multisig: AccountId32
    callHash: Bytes
}

/**
 * A multisig operation has been executed.
 */
export interface MultisigEvent_MultisigExecuted {
    __kind: 'MultisigExecuted'
    approving: AccountId32
    timepoint: Timepoint
    multisig: AccountId32
    callHash: Bytes
    result: Result<null, DispatchError>
}

/**
 * A new multisig operation has begun.
 */
export interface MultisigEvent_NewMultisig {
    __kind: 'NewMultisig'
    approving: AccountId32
    multisig: AccountId32
    callHash: Bytes
}

export interface Timepoint {
    height: number
    index: number
}

/**
 * The `Event` enum of this pallet
 */
export type MultiTokensEvent =
    | MultiTokensEvent_Approved
    | MultiTokensEvent_AttributeRemoved
    | MultiTokensEvent_AttributeSet
    | MultiTokensEvent_BalanceSet
    | MultiTokensEvent_Burned
    | MultiTokensEvent_ClaimTokensCompleted
    | MultiTokensEvent_ClaimTokensInitiated
    | MultiTokensEvent_ClaimedCollections
    | MultiTokensEvent_ClaimedTokens
    | MultiTokensEvent_CollectionAccountCreated
    | MultiTokensEvent_CollectionAccountDestroyed
    | MultiTokensEvent_CollectionAccountUpdated
    | MultiTokensEvent_CollectionCreated
    | MultiTokensEvent_CollectionDestroyed
    | MultiTokensEvent_CollectionMutated
    | MultiTokensEvent_CollectionUpdated
    | MultiTokensEvent_Deposit
    | MultiTokensEvent_Frozen
    | MultiTokensEvent_MigrationStatusUpdated
    | MultiTokensEvent_Minted
    | MultiTokensEvent_MovedReserves
    | MultiTokensEvent_NextCollectionIdUpdated
    | MultiTokensEvent_ReserveRepatriated
    | MultiTokensEvent_Reserved
    | MultiTokensEvent_Slashed
    | MultiTokensEvent_Thawed
    | MultiTokensEvent_TokenAccountCreated
    | MultiTokensEvent_TokenAccountDestroyed
    | MultiTokensEvent_TokenAccountUpdated
    | MultiTokensEvent_TokenCreated
    | MultiTokensEvent_TokenDestroyed
    | MultiTokensEvent_TokenMutated
    | MultiTokensEvent_TokenUpdated
    | MultiTokensEvent_Transferred
    | MultiTokensEvent_Unapproved
    | MultiTokensEvent_Unreserved
    | MultiTokensEvent_Withdraw

/**
 * An approval took place. If `token_id` is `None`, it applies to the whole collection.
 */
export interface MultiTokensEvent_Approved {
    __kind: 'Approved'
    /**
     * The collection that was approved
     */
    collectionId: bigint
    /**
     * The token that was approved
     */
    tokenId?: bigint | undefined
    /**
     * The account that made the approval
     */
    owner: AccountId32
    /**
     * The account that was approved to operate
     */
    operator: AccountId32
    /**
     * The amount approved for
     */
    amount?: bigint | undefined
    /**
     * The expiration of the approval
     */
    expiration?: number | undefined
}

/**
 * An attribute has been removed
 */
export interface MultiTokensEvent_AttributeRemoved {
    __kind: 'AttributeRemoved'
    /**
     * collectionId of collection modified
     */
    collectionId: bigint
    /**
     * tokenid of token modified
     */
    tokenId?: bigint | undefined
    /**
     * key of attribute cleared
     */
    key: Bytes
}

/**
 * New attribute has been set
 */
export interface MultiTokensEvent_AttributeSet {
    __kind: 'AttributeSet'
    /**
     * collectionId of collection modified
     */
    collectionId: bigint
    /**
     * [`TokenId`](Config::TokenId) of [`Token`](ep_multi_tokens::Token) modified
     */
    tokenId?: bigint | undefined
    /**
     * key of attribute set
     */
    key: Bytes
    /**
     * value of attribute set
     */
    value: Bytes
}

/**
 * The balance of an account was set
 */
export interface MultiTokensEvent_BalanceSet {
    __kind: 'BalanceSet'
    /**
     * The [`CollectionId`](Config::CollectionId) for which balance was set
     */
    collectionId: bigint
    /**
     * The [`TokenId`](Config::TokenId) for which balance was set
     */
    tokenId: bigint
    /**
     * The [`AccountId`](frame_system::Config::AccountId) that balance was set for
     */
    accountId: AccountId32
    /**
     * The balance of the account
     */
    balance: bigint
    /**
     * The reserved balance of the account
     */
    reservedBalance: bigint
}

/**
 * Units of a token were burned
 */
export interface MultiTokensEvent_Burned {
    __kind: 'Burned'
    /**
     * collection id of tokens burned
     */
    collectionId: bigint
    /**
     * the token id that was burned
     */
    tokenId: bigint
    /**
     * the account the tokens were burned from
     */
    accountId: AccountId32
    /**
     * The amount that was burned for each token_id
     */
    amount: bigint
}

/**
 * Finished claiming the tokens
 */
export interface MultiTokensEvent_ClaimTokensCompleted {
    __kind: 'ClaimTokensCompleted'
    /**
     * The account that received the tokens
     */
    destination: AccountId32
    /**
     * The ethereum address that initiated the claim
     */
    ethereumAddress: H160
}

/**
 * Claims tokens initiated
 */
export interface MultiTokensEvent_ClaimTokensInitiated {
    __kind: 'ClaimTokensInitiated'
    /**
     * The account that will receive the tokens
     */
    accountId: AccountId32
    /**
     * The ethereum address
     */
    ethereumAddress: H160
}

/**
 * Collections were claimed
 */
export interface MultiTokensEvent_ClaimedCollections {
    __kind: 'ClaimedCollections'
    /**
     * The account that received the claim
     */
    accountId: AccountId32
    /**
     * The ethereum address
     */
    ethereumAddress: H160
    /**
     * The collection ids that were claimed
     */
    collectionIds: bigint[]
}

/**
 * Tokens were claimed
 */
export interface MultiTokensEvent_ClaimedTokens {
    __kind: 'ClaimedTokens'
    /**
     * The account that received the tokens
     */
    accountId: AccountId32
    /**
     * The ethereum address
     */
    ethereumAddress: H160
    /**
     * The asset ids that were claimed
     */
    assetIds: AssetIdWithEth[]
    /**
     * This is true if there are still more tokens to claim
     */
    moreTokensRemain: boolean
}

/**
 * A new collection account was created
 */
export interface MultiTokensEvent_CollectionAccountCreated {
    __kind: 'CollectionAccountCreated'
    /**
     * The [`CollectionId`](Config::CollectionId) for which the account is created
     */
    collectionId: bigint
    /**
     * The [`AccountId`](frame_system::Config::AccountId) of the account
     */
    accountId: AccountId32
}

/**
 * A collection account was destroyed
 */
export interface MultiTokensEvent_CollectionAccountDestroyed {
    __kind: 'CollectionAccountDestroyed'
    /**
     * The [`CollectionId`](Config::CollectionId) of the destroyed account
     */
    collectionId: bigint
    /**
     * The [`AccountId`](frame_system::Config::AccountId) of the destroyed account
     */
    accountId: AccountId32
}

/**
 * TokenAccount storage was set to `value`
 */
export interface MultiTokensEvent_CollectionAccountUpdated {
    __kind: 'CollectionAccountUpdated'
    /**
     * The [`CollectionId`](Config::CollectionId) for which the value is set
     */
    collectionId: bigint
    /**
     * The [`AccountId`](frame_system::Config::AccountId) that owned the token account
     */
    accountId: AccountId32
    /**
     * new value of TokenAccount storage
     */
    value?: CollectionAccount | undefined
}

/**
 * A new collection was created
 */
export interface MultiTokensEvent_CollectionCreated {
    __kind: 'CollectionCreated'
    /**
     * The id of the [`Collection`](ep_multi_tokens::Collection)
     */
    collectionId: bigint
    /**
     * The owner of the [`Collection`](ep_multi_tokens::Collection)
     */
    owner: AccountId32
}

/**
 * A collection was destroyed.
 */
export interface MultiTokensEvent_CollectionDestroyed {
    __kind: 'CollectionDestroyed'
    /**
     * id of collection destroyed
     */
    collectionId: bigint
    /**
     * The [`AccountId`](frame_system::Config::AccountId) that destroyed the collection
     */
    caller: AccountId32
}

/**
 * A collection was mutated
 */
export interface MultiTokensEvent_CollectionMutated {
    __kind: 'CollectionMutated'
    /**
     * [`CollectionId`](Config::CollectionId) of the
     * [`Collection`](ep_multi_tokens::Collection)
     */
    collectionId: bigint
    /**
     * The mutation that was applied to the collection
     */
    mutation: DefaultCollectionMutation
}

/**
 * Collection storage was set to `value`
 */
export interface MultiTokensEvent_CollectionUpdated {
    __kind: 'CollectionUpdated'
    /**
     * The [`CollectionId`](Config::CollectionId) for which the value is set
     */
    collectionId: bigint
    /**
     * new value of Collection storage
     */
    value?: Collection | undefined
}

/**
 * Token units were deposited
 */
export interface MultiTokensEvent_Deposit {
    __kind: 'Deposit'
    /**
     * The [`CollectionId`](Config::CollectionId) of the tokens deposited
     */
    collectionId: bigint
    /**
     * The [`TokenId`](Config::TokenId) of the tokens deposited
     */
    tokenId: bigint
    /**
     * The [`AccountId`](frame_system::Config::AccountId) deposited to
     */
    accountId: AccountId32
    /**
     * The amount of tokens deposited
     */
    amount: bigint
}

/**
 * Collection, token or account was frozen
 */
export interface MultiTokensEvent_Frozen {
    __kind: 'Frozen'
    value: Freeze
}

/**
 * Migration stage updated
 */
export interface MultiTokensEvent_MigrationStatusUpdated {
    __kind: 'MigrationStatusUpdated'
    stage: MigrationStage
}

/**
 * Units of a token were minted
 */
export interface MultiTokensEvent_Minted {
    __kind: 'Minted'
    /**
     * [`CollectionId`](Config::CollectionId) of minted token
     */
    collectionId: bigint
    /**
     * The [`TokenId`](Config::TokenId) minted
     */
    tokenId: bigint
    /**
     * issuer of minted token
     */
    issuer: RootOrSigned
    /**
     * The receiver of the token
     */
    recipient: AccountId32
    /**
     * the amount of units minted
     */
    amount: bigint
}

/**
 * Reserved token units were moved
 */
export interface MultiTokensEvent_MovedReserves {
    __kind: 'MovedReserves'
    /**
     * The [`CollectionId`](Config::CollectionId) in which token was moved
     */
    collectionId: bigint
    /**
     * The [`TokenId`](Config::TokenId) that was moved
     */
    tokenId: bigint
    /**
     * The account that reserves were moved from
     */
    source: AccountId32
    /**
     * The account that received the moved reserves
     */
    destination: AccountId32
    /**
     * The amount that was moved
     */
    amount: bigint
    /**
     * The identifier of the moved reserves
     */
    reserveId?: Bytes | undefined
}

/**
 * NextCollectionId storage was set to `collection_id`
 */
export interface MultiTokensEvent_NextCollectionIdUpdated {
    __kind: 'NextCollectionIdUpdated'
    collectionId: bigint
}

/**
 * Reserved token units were transferred
 */
export interface MultiTokensEvent_ReserveRepatriated {
    __kind: 'ReserveRepatriated'
    /**
     * The [`CollectionId`](Config::CollectionId) in which token was moved
     */
    collectionId: bigint
    /**
     * The [`TokenId`](Config::TokenId) that was moved
     */
    tokenId: bigint
    /**
     * The account that reserves were moved from
     */
    source: AccountId32
    /**
     * The account that received the moved reserves
     */
    destination: AccountId32
    /**
     * The amount that was moved
     */
    amount: bigint
    /**
     * The identifier of the moved reserves
     */
    reserveId?: Bytes | undefined
}

/**
 * Token units were reserved
 */
export interface MultiTokensEvent_Reserved {
    __kind: 'Reserved'
    /**
     * The collection in which token was reserved
     */
    collectionId: bigint
    /**
     * The token that was reserved
     */
    tokenId: bigint
    /**
     * The account that reserved the tokens
     */
    accountId: AccountId32
    /**
     * The amount that was reserved
     */
    amount: bigint
    /**
     * The identifier of the reserves
     */
    reserveId?: Bytes | undefined
}

/**
 * An amount of tokens were slashed from account
 */
export interface MultiTokensEvent_Slashed {
    __kind: 'Slashed'
    /**
     * The [`CollectionId`](Config::CollectionId) of the tokens slashed
     */
    collectionId: bigint
    /**
     * The [`TokenId`](Config::TokenId) of the tokens slashed
     */
    tokenId: bigint
    /**
     * The [`AccountId`](frame_system::Config::AccountId) slashed
     */
    accountId: AccountId32
    /**
     * The amount of tokens slashed
     */
    amount: bigint
}

/**
 * Collection, token or account was unfrozen
 */
export interface MultiTokensEvent_Thawed {
    __kind: 'Thawed'
    value: Freeze
}

/**
 * A new token account was created
 */
export interface MultiTokensEvent_TokenAccountCreated {
    __kind: 'TokenAccountCreated'
    /**
     * The [`CollectionId`](Config::CollectionId) for which the account is created
     */
    collectionId: bigint
    /**
     * The [`TokenId`](Config::TokenId) for which the account is created
     */
    tokenId: bigint
    /**
     * The [`AccountId`](frame_system::Config::AccountId) of the account
     */
    accountId: AccountId32
    /**
     * The balance that this account holds
     */
    balance: bigint
}

/**
 * A token account was destroyed
 */
export interface MultiTokensEvent_TokenAccountDestroyed {
    __kind: 'TokenAccountDestroyed'
    /**
     * The [`CollectionId`](Config::CollectionId) for which the account is created
     */
    collectionId: bigint
    /**
     * The [`TokenId`](Config::TokenId) fof the destroyed account
     */
    tokenId: bigint
    /**
     * The [`AccountId`](frame_system::Config::AccountId) of the destroyed account
     */
    accountId: AccountId32
}

/**
 * TokenAccount storage was set to `value`
 */
export interface MultiTokensEvent_TokenAccountUpdated {
    __kind: 'TokenAccountUpdated'
    /**
     * The [`CollectionId`](Config::CollectionId) for which the value is set
     */
    collectionId: bigint
    /**
     * The [`TokenId`](Config::TokenId) of the destroyed account
     */
    tokenId: bigint
    /**
     * The [`AccountId`](frame_system::Config::AccountId) that owned the token account
     */
    accountId: AccountId32
    /**
     * new value of TokenAccount storage
     */
    value?: TokenAccount | undefined
}

/**
 * A token was created
 */
export interface MultiTokensEvent_TokenCreated {
    __kind: 'TokenCreated'
    /**
     * The [`CollectionId`](Config::CollectionId) minted
     */
    collectionId: bigint
    /**
     * The [`TokenId`](Config::TokenId) minted
     */
    tokenId: bigint
    /**
     * issuer of minted [`Token`](ep_multi_tokens::Token)
     */
    issuer: RootOrSigned
    /**
     * the initial supply of the [`Token`](ep_multi_tokens::Token)
     */
    initialSupply: bigint
}

/**
 * A token was destroyed
 */
export interface MultiTokensEvent_TokenDestroyed {
    __kind: 'TokenDestroyed'
    /**
     * The [`CollectionId`](Config::CollectionId) destroyed
     */
    collectionId: bigint
    /**
     * The [`TokenId`](Config::TokenId) destroyed
     */
    tokenId: bigint
    /**
     * the [`AccountId`](frame_system::Config::AccountId) that destroyed the
     * [`Token`](ep_multi_tokens::Token)
     */
    caller: AccountId32
}

/**
 * A token was mutated
 */
export interface MultiTokensEvent_TokenMutated {
    __kind: 'TokenMutated'
    /**
     * The [`CollectionId`](Config::CollectionId) [`Token`](ep_multi_tokens::Token)
     * belongs to
     */
    collectionId: bigint
    /**
     * Id of the [`Token`](ep_multi_tokens::Token) mutated
     */
    tokenId: bigint
    /**
     * mutation that was applied to the [`Token`](ep_multi_tokens::Token)
     */
    mutation: DefaultTokenMutation
}

/**
 * Token storage was set to `value`
 */
export interface MultiTokensEvent_TokenUpdated {
    __kind: 'TokenUpdated'
    /**
     * The [`CollectionId`](Config::CollectionId) for which the value is set
     */
    collectionId: bigint
    /**
     * The [`TokenId`](Config::TokenId) for which the value is set
     */
    tokenId: bigint
    /**
     * new value of Token storage
     */
    value?: Token | undefined
}

/**
 * Units of a token were transferred
 */
export interface MultiTokensEvent_Transferred {
    __kind: 'Transferred'
    /**
     * collection_id of transferred collection
     */
    collectionId: bigint
    /**
     * [`TokenId`](Config::TokenId) transferred
     */
    tokenId: bigint
    /**
     * The [`AccountId`](frame_system::Config::AccountId) that performed the transfer
     */
    operator: AccountId32
    /**
     * transaction sender
     */
    from: AccountId32
    /**
     * transaction recipient
     */
    to: AccountId32
    /**
     * number of units transferred
     */
    amount: bigint
}

/**
 * An unapproval took place. If `token_id` is `None`, it applies to the collection.
 */
export interface MultiTokensEvent_Unapproved {
    __kind: 'Unapproved'
    /**
     * The collection that was unapproved
     */
    collectionId: bigint
    /**
     * The token that was unapproved
     */
    tokenId?: bigint | undefined
    /**
     * The account that `operator` was unapproved for
     */
    owner: AccountId32
    /**
     * The account that was unapproved to operate
     */
    operator: AccountId32
}

/**
 * Token units were unreserved
 */
export interface MultiTokensEvent_Unreserved {
    __kind: 'Unreserved'
    /**
     * The [`CollectionId`](Config::CollectionId) in which token was unreserved
     */
    collectionId: bigint
    /**
     * The [`TokenId`](Config::TokenId) that was unreserved
     */
    tokenId: bigint
    /**
     * The account that unreserved the tokens
     */
    accountId: AccountId32
    /**
     * The amount that was unreserved
     */
    amount: bigint
    /**
     * The identifier of the unreserved tokens
     */
    reserveId?: Bytes | undefined
}

/**
 * Token units were withdrawn
 */
export interface MultiTokensEvent_Withdraw {
    __kind: 'Withdraw'
    /**
     * The [`CollectionId`](Config::CollectionId) of the tokens withdrawn
     */
    collectionId: bigint
    /**
     * The [`TokenId`](Config::TokenId) of the tokens withdrawn
     */
    tokenId: bigint
    /**
     * The [`AccountId`](frame_system::Config::AccountId) withdrawn from
     */
    accountId: AccountId32
    /**
     * The amount of tokens withdrawn
     */
    amount: bigint
}

export interface Token {
    supply: bigint
    cap?: TokenCap | undefined
    freezeState?: FreezeState | undefined
    minimumBalance: bigint
    sufficiency: Sufficiency
    mintDeposit: bigint
    attributeCount: number
    marketBehavior?: TokenMarketBehavior | undefined
    listingForbidden: boolean
    metadata: DefaultTokenMetadata
}

export type DefaultTokenMetadata = DefaultTokenMetadata_Foreign | DefaultTokenMetadata_Native

export interface DefaultTokenMetadata_Foreign {
    __kind: 'Foreign'
    value: DefaultForeignTokenMetadata
}

export interface DefaultTokenMetadata_Native {
    __kind: 'Native'
}

export interface DefaultForeignTokenMetadata {
    decimalCount: number
    name: BoundedString
    symbol: Bytes
    location?: V3MultiLocation | undefined
    unitsPerSecond?: bigint | undefined
    premintedSupply: bigint
}

export type BoundedString = Bytes

export type TokenMarketBehavior = TokenMarketBehavior_HasRoyalty | TokenMarketBehavior_IsCurrency

export interface TokenMarketBehavior_HasRoyalty {
    __kind: 'HasRoyalty'
    value: DefaultRoyalty
}

export interface TokenMarketBehavior_IsCurrency {
    __kind: 'IsCurrency'
}

export interface DefaultRoyalty {
    beneficiary: AccountId32
    percentage: number
}

export type Sufficiency = Sufficiency_Insufficient | Sufficiency_Sufficient

export interface Sufficiency_Insufficient {
    __kind: 'Insufficient'
    unitPrice: bigint
}

export interface Sufficiency_Sufficient {
    __kind: 'Sufficient'
}

export type FreezeState = FreezeState_Never | FreezeState_Permanent | FreezeState_Temporary

export interface FreezeState_Never {
    __kind: 'Never'
}

export interface FreezeState_Permanent {
    __kind: 'Permanent'
}

export interface FreezeState_Temporary {
    __kind: 'Temporary'
}

export type TokenCap = TokenCap_CollapsingSupply | TokenCap_SingleMint | TokenCap_Supply

export interface TokenCap_CollapsingSupply {
    __kind: 'CollapsingSupply'
    value: bigint
}

export interface TokenCap_SingleMint {
    __kind: 'SingleMint'
}

export interface TokenCap_Supply {
    __kind: 'Supply'
    value: bigint
}

export interface DefaultTokenMutation {
    behavior: Type_196
    listingForbidden: Type_199
    metadata: Type_200
}

export type Type_200 = Type_200_NoMutation | Type_200_SomeMutation

export interface Type_200_NoMutation {
    __kind: 'NoMutation'
}

export interface Type_200_SomeMutation {
    __kind: 'SomeMutation'
    value: DefaultTokenMetadata
}

export type Type_199 = Type_199_NoMutation | Type_199_SomeMutation

export interface Type_199_NoMutation {
    __kind: 'NoMutation'
}

export interface Type_199_SomeMutation {
    __kind: 'SomeMutation'
    value: boolean
}

export type Type_196 = Type_196_NoMutation | Type_196_SomeMutation

export interface Type_196_NoMutation {
    __kind: 'NoMutation'
}

export interface Type_196_SomeMutation {
    __kind: 'SomeMutation'
    value?: TokenMarketBehavior | undefined
}

export interface TokenAccount {
    balance: bigint
    reservedBalance: bigint
    lockedBalance: bigint
    namedReserves: [Bytes, bigint][]
    locks: [Bytes, bigint][]
    approvals: [AccountId32, Approval][]
    isFrozen: boolean
}

export interface Approval {
    amount: bigint
    expiration?: number | undefined
}

export type RootOrSigned = RootOrSigned_Root | RootOrSigned_Signed

export interface RootOrSigned_Root {
    __kind: 'Root'
}

export interface RootOrSigned_Signed {
    __kind: 'Signed'
    value: AccountId32
}

export type MigrationStage =
    | MigrationStage_Completed
    | MigrationStage_Failed
    | MigrationStage_InProgress
    | MigrationStage_NotStarted

export interface MigrationStage_Completed {
    __kind: 'Completed'
}

export interface MigrationStage_Failed {
    __kind: 'Failed'
}

export interface MigrationStage_InProgress {
    __kind: 'InProgress'
}

export interface MigrationStage_NotStarted {
    __kind: 'NotStarted'
}

export interface Freeze {
    collectionId: bigint
    freezeType: FreezeType
}

export type FreezeType =
    | FreezeType_Collection
    | FreezeType_CollectionAccount
    | FreezeType_Token
    | FreezeType_TokenAccount

export interface FreezeType_Collection {
    __kind: 'Collection'
}

export interface FreezeType_CollectionAccount {
    __kind: 'CollectionAccount'
    value: AccountId32
}

export interface FreezeType_Token {
    __kind: 'Token'
    tokenId: bigint
    freezeState?: FreezeState | undefined
}

export interface FreezeType_TokenAccount {
    __kind: 'TokenAccount'
    tokenId: bigint
    accountId: AccountId32
}

export interface Collection {
    owner: AccountId32
    policy: DefaultCollectionPolicy
    tokenCount: bigint
    attributeCount: number
    totalDeposit: bigint
    explicitRoyaltyCurrencies: [AssetId, null][]
}

export interface AssetId {
    collectionId: bigint
    tokenId: bigint
}

export interface DefaultCollectionPolicy {
    mint: DefaultMintPolicy
    transfer: DefaultTransferPolicy
    market: DefaultMarketPolicy
}

export interface DefaultMarketPolicy {
    royalty?: DefaultRoyalty | undefined
}

export interface DefaultTransferPolicy {
    isFrozen: boolean
}

export interface DefaultMintPolicy {
    maxTokenCount?: bigint | undefined
    maxTokenSupply?: bigint | undefined
    forceSingleMint: boolean
}

export interface DefaultCollectionMutation {
    owner?: AccountId32 | undefined
    royalty: Type_183
    explicitRoyaltyCurrencies?: AssetId[] | undefined
}

export type Type_183 = Type_183_NoMutation | Type_183_SomeMutation

export interface Type_183_NoMutation {
    __kind: 'NoMutation'
}

export interface Type_183_SomeMutation {
    __kind: 'SomeMutation'
    value?: DefaultRoyalty | undefined
}

export interface CollectionAccount {
    isFrozen: boolean
    approvals: [AccountId32, number | undefined][]
    accountCount: number
}

export interface AssetIdWithEth {
    ethereumCollectionId: bigint
    collectionId: bigint
    tokenId: bigint
}

export type H160 = Bytes

/**
 * The `Event` enum of this pallet
 */
export type MessageQueueEvent =
    | MessageQueueEvent_OverweightEnqueued
    | MessageQueueEvent_PageReaped
    | MessageQueueEvent_Processed
    | MessageQueueEvent_ProcessingFailed

/**
 * Message placed in overweight queue.
 */
export interface MessageQueueEvent_OverweightEnqueued {
    __kind: 'OverweightEnqueued'
    id: Bytes
    origin: AggregateMessageOrigin
    pageIndex: number
    messageIndex: number
}

/**
 * This page was reaped.
 */
export interface MessageQueueEvent_PageReaped {
    __kind: 'PageReaped'
    origin: AggregateMessageOrigin
    index: number
}

/**
 * Message is processed.
 */
export interface MessageQueueEvent_Processed {
    __kind: 'Processed'
    id: Bytes
    origin: AggregateMessageOrigin
    weightUsed: Weight
    success: boolean
}

/**
 * Message discarded due to an error in the `MessageProcessor` (usually a format error).
 */
export interface MessageQueueEvent_ProcessingFailed {
    __kind: 'ProcessingFailed'
    id: Bytes
    origin: AggregateMessageOrigin
    error: ProcessMessageError
}

export type ProcessMessageError =
    | ProcessMessageError_BadFormat
    | ProcessMessageError_Corrupt
    | ProcessMessageError_Overweight
    | ProcessMessageError_Unsupported
    | ProcessMessageError_Yield

export interface ProcessMessageError_BadFormat {
    __kind: 'BadFormat'
}

export interface ProcessMessageError_Corrupt {
    __kind: 'Corrupt'
}

export interface ProcessMessageError_Overweight {
    __kind: 'Overweight'
    value: Weight
}

export interface ProcessMessageError_Unsupported {
    __kind: 'Unsupported'
}

export interface ProcessMessageError_Yield {
    __kind: 'Yield'
}

export type AggregateMessageOrigin = AggregateMessageOrigin_Ump

export interface AggregateMessageOrigin_Ump {
    __kind: 'Ump'
    value: UmpQueueId
}

export type UmpQueueId = UmpQueueId_Para

export interface UmpQueueId_Para {
    __kind: 'Para'
    value: Id
}

/**
 * The Event for this pallet
 */
export type MarketplaceEvent =
    | MarketplaceEvent_AuctionFinalized
    | MarketplaceEvent_BidPlaced
    | MarketplaceEvent_ListingCancelled
    | MarketplaceEvent_ListingCreated
    | MarketplaceEvent_ListingFilled
    | MarketplaceEvent_ProtocolFeeSet

/**
 * An auction was finalized
 */
export interface MarketplaceEvent_AuctionFinalized {
    __kind: 'AuctionFinalized'
    /**
     * The listing id
     */
    listingId: H256
    /**
     * The bid that won
     */
    winningBid?: Bid | undefined
    /**
     * Amount paid as protocol fee
     */
    protocolFee: bigint
    /**
     * Amount that went to royalties
     */
    royalty: bigint
}

/**
 * A bid was placed
 */
export interface MarketplaceEvent_BidPlaced {
    __kind: 'BidPlaced'
    /**
     * ID of the listing
     */
    listingId: H256
    /**
     * The bid that was placed
     */
    bid: Bid
}

/**
 * A listing was cancelled
 */
export interface MarketplaceEvent_ListingCancelled {
    __kind: 'ListingCancelled'
    /**
     * Id for the listing
     */
    listingId: H256
}

/**
 * A listing was created
 */
export interface MarketplaceEvent_ListingCreated {
    __kind: 'ListingCreated'
    /**
     * Id for the listing
     */
    listingId: H256
    /**
     * The listing
     */
    listing: Listing
}

/**
 * A listing was filled or partially filled
 */
export interface MarketplaceEvent_ListingFilled {
    __kind: 'ListingFilled'
    /**
     * ID of the listing
     */
    listingId: H256
    /**
     * account that filled the listing
     */
    buyer: AccountId32
    /**
     * The amount that was filled
     */
    amountFilled: bigint
    /**
     * Amount remaining to be filled
     */
    amountRemaining: bigint
    /**
     * Amount paid as protocol fee
     */
    protocolFee: bigint
    /**
     * Amount that went to royalties
     */
    royalty: bigint
}

/**
 * Protocol fee was set
 */
export interface MarketplaceEvent_ProtocolFeeSet {
    __kind: 'ProtocolFeeSet'
    /**
     * The new protocol fee
     */
    protocolFee: Perbill
}

export interface Listing {
    seller: AccountId32
    makeAssetId: AssetId
    takeAssetId: AssetId
    amount: bigint
    price: bigint
    minTakeValue: bigint
    feeSide: FeeSide
    creationBlock: number
    deposit: bigint
    salt: Bytes
    data: ListingData
    state: ListingState
}

export type ListingState = ListingState_Auction | ListingState_FixedPrice

export interface ListingState_Auction {
    __kind: 'Auction'
    value: AuctionState
}

export interface ListingState_FixedPrice {
    __kind: 'FixedPrice'
    amountFilled: bigint
}

export interface AuctionState {
    highBid?: Bid | undefined
}

export type ListingData = ListingData_Auction | ListingData_FixedPrice

export interface ListingData_Auction {
    __kind: 'Auction'
    value: AuctionData
}

export interface ListingData_FixedPrice {
    __kind: 'FixedPrice'
}

export interface AuctionData {
    startBlock: number
    endBlock: number
}

export type FeeSide = FeeSide_Make | FeeSide_NoFee | FeeSide_Take

export interface FeeSide_Make {
    __kind: 'Make'
}

export interface FeeSide_NoFee {
    __kind: 'NoFee'
}

export interface FeeSide_Take {
    __kind: 'Take'
}

export interface Bid {
    bidder: AccountId32
    price: bigint
}

/**
 * The `Event` enum of this pallet
 */
export type ImOnlineEvent = ImOnlineEvent_AllGood | ImOnlineEvent_HeartbeatReceived | ImOnlineEvent_SomeOffline

/**
 * At the end of the session, no offence was committed.
 */
export interface ImOnlineEvent_AllGood {
    __kind: 'AllGood'
}

/**
 * A new heartbeat was received from `AuthorityId`.
 */
export interface ImOnlineEvent_HeartbeatReceived {
    __kind: 'HeartbeatReceived'
    authorityId: Bytes
}

/**
 * At the end of the session, at least one validator was found to be offline.
 */
export interface ImOnlineEvent_SomeOffline {
    __kind: 'SomeOffline'
    offline: [AccountId32, Exposure][]
}

export interface Exposure {
    total: bigint
    own: bigint
    others: IndividualExposure[]
}

export interface IndividualExposure {
    who: AccountId32
    value: bigint
}

/**
 * The `Event` enum of this pallet
 */
export type IdentityEvent =
    | IdentityEvent_IdentityCleared
    | IdentityEvent_IdentityKilled
    | IdentityEvent_IdentitySet
    | IdentityEvent_JudgementGiven
    | IdentityEvent_JudgementRequested
    | IdentityEvent_JudgementUnrequested
    | IdentityEvent_RegistrarAdded
    | IdentityEvent_SubIdentityAdded
    | IdentityEvent_SubIdentityRemoved
    | IdentityEvent_SubIdentityRevoked

/**
 * A name was cleared, and the given balance returned.
 */
export interface IdentityEvent_IdentityCleared {
    __kind: 'IdentityCleared'
    who: AccountId32
    deposit: bigint
}

/**
 * A name was removed and the given balance slashed.
 */
export interface IdentityEvent_IdentityKilled {
    __kind: 'IdentityKilled'
    who: AccountId32
    deposit: bigint
}

/**
 * A name was set or reset (which will remove all judgements).
 */
export interface IdentityEvent_IdentitySet {
    __kind: 'IdentitySet'
    who: AccountId32
}

/**
 * A judgement was given by a registrar.
 */
export interface IdentityEvent_JudgementGiven {
    __kind: 'JudgementGiven'
    target: AccountId32
    registrarIndex: number
}

/**
 * A judgement was asked from a registrar.
 */
export interface IdentityEvent_JudgementRequested {
    __kind: 'JudgementRequested'
    who: AccountId32
    registrarIndex: number
}

/**
 * A judgement request was retracted.
 */
export interface IdentityEvent_JudgementUnrequested {
    __kind: 'JudgementUnrequested'
    who: AccountId32
    registrarIndex: number
}

/**
 * A registrar was added.
 */
export interface IdentityEvent_RegistrarAdded {
    __kind: 'RegistrarAdded'
    registrarIndex: number
}

/**
 * A sub-identity was added to an identity and the deposit paid.
 */
export interface IdentityEvent_SubIdentityAdded {
    __kind: 'SubIdentityAdded'
    sub: AccountId32
    main: AccountId32
    deposit: bigint
}

/**
 * A sub-identity was removed from an identity and the deposit freed.
 */
export interface IdentityEvent_SubIdentityRemoved {
    __kind: 'SubIdentityRemoved'
    sub: AccountId32
    main: AccountId32
    deposit: bigint
}

/**
 * A sub-identity was cleared, and the given deposit repatriated from the
 * main identity account to the sub-identity account.
 */
export interface IdentityEvent_SubIdentityRevoked {
    __kind: 'SubIdentityRevoked'
    sub: AccountId32
    main: AccountId32
    deposit: bigint
}

/**
 * The `Event` enum of this pallet
 */
export type HrmpEvent =
    | HrmpEvent_ChannelClosed
    | HrmpEvent_HrmpChannelForceOpened
    | HrmpEvent_OpenChannelAccepted
    | HrmpEvent_OpenChannelCanceled
    | HrmpEvent_OpenChannelRequested

/**
 * HRMP channel closed. `[by_parachain, channel_id]`
 */
export interface HrmpEvent_ChannelClosed {
    __kind: 'ChannelClosed'
    value: [Id, HrmpChannelId]
}

/**
 * An HRMP channel was opened via Root origin.
 * `[sender, recipient, proposed_max_capacity, proposed_max_message_size]`
 */
export interface HrmpEvent_HrmpChannelForceOpened {
    __kind: 'HrmpChannelForceOpened'
    value: [Id, Id, number, number]
}

/**
 * Open HRMP channel accepted. `[sender, recipient]`
 */
export interface HrmpEvent_OpenChannelAccepted {
    __kind: 'OpenChannelAccepted'
    value: [Id, Id]
}

/**
 * An HRMP channel request sent by the receiver was canceled by either party.
 * `[by_parachain, channel_id]`
 */
export interface HrmpEvent_OpenChannelCanceled {
    __kind: 'OpenChannelCanceled'
    value: [Id, HrmpChannelId]
}

/**
 * Open HRMP channel requested.
 * `[sender, recipient, proposed_max_capacity, proposed_max_message_size]`
 */
export interface HrmpEvent_OpenChannelRequested {
    __kind: 'OpenChannelRequested'
    value: [Id, Id, number, number]
}

export interface HrmpChannelId {
    sender: Id
    recipient: Id
}

/**
 * The `Event` enum of this pallet
 */
export type GrandpaEvent = GrandpaEvent_NewAuthorities | GrandpaEvent_Paused | GrandpaEvent_Resumed

/**
 * New authority set has been applied.
 */
export interface GrandpaEvent_NewAuthorities {
    __kind: 'NewAuthorities'
    authoritySet: [Public, bigint][]
}

/**
 * Current authority set has been paused.
 */
export interface GrandpaEvent_Paused {
    __kind: 'Paused'
}

/**
 * Current authority set has been resumed.
 */
export interface GrandpaEvent_Resumed {
    __kind: 'Resumed'
}

export type Public = Bytes

/**
 * The `Event` enum of this pallet
 */
export type FuelTanksEvent =
    | FuelTanksEvent_AccountAdded
    | FuelTanksEvent_AccountRemoved
    | FuelTanksEvent_AccountRuleDataRemoved
    | FuelTanksEvent_CallDispatched
    | FuelTanksEvent_ConsumptionSet
    | FuelTanksEvent_DispatchFailed
    | FuelTanksEvent_FreezeStateMutated
    | FuelTanksEvent_FuelTankCreated
    | FuelTanksEvent_FuelTankDestroyed
    | FuelTanksEvent_FuelTankMutated
    | FuelTanksEvent_RuleSetInserted
    | FuelTanksEvent_RuleSetRemoved

/**
 * An account was added to a [`FuelTank`]
 */
export interface FuelTanksEvent_AccountAdded {
    __kind: 'AccountAdded'
    /**
     * The [`AccountId`](frame_system::Config::AccountId) of the [`FuelTank`]
     */
    tankId: AccountId32
    /**
     * The [`AccountId`](frame_system::Config::AccountId) that was added
     */
    userId: AccountId32
    /**
     * The deposit reserved by the [`FuelTank`] for this account
     */
    tankDeposit: bigint
    /**
     * The deposit reserved by the user for this account
     */
    userDeposit: bigint
    /**
     * The amount the fuel tank has transferred to this account
     */
    totalReceived: bigint
}

/**
 * An account was removed from a [`FuelTank`]
 */
export interface FuelTanksEvent_AccountRemoved {
    __kind: 'AccountRemoved'
    /**
     * The [`AccountId`](frame_system::Config::AccountId) of the [`FuelTank`]
     */
    tankId: AccountId32
    /**
     * The [`AccountId`](frame_system::Config::AccountId) that was removed
     */
    userId: AccountId32
}

/**
 * Account data of [`AccountId`](frame_system::Config::AccountId) was removed from
 * [`RuleSetId`](Config::RuleSetId)
 */
export interface FuelTanksEvent_AccountRuleDataRemoved {
    __kind: 'AccountRuleDataRemoved'
    /**
     * The [`AccountId`](frame_system::Config::AccountId) of the [`FuelTank`]
     */
    tankId: AccountId32
    /**
     * The [`AccountId`](frame_system::Config::AccountId) that was removed
     */
    userId: AccountId32
    /**
     * The id of the rule set that was removed
     */
    ruleSetId: number
    /**
     * The [`DispatchRuleKind`] that was removed
     */
    ruleKind: DispatchRuleKind
}

/**
 * A call was dispatched through a [`FuelTank`].
 */
export interface FuelTanksEvent_CallDispatched {
    __kind: 'CallDispatched'
    /**
     * The [`AccountId`](frame_system::Config::AccountId) that dispatched the call
     */
    caller: AccountId32
    /**
     * The [`AccountId`](frame_system::Config::AccountId) of the [`FuelTank`]
     */
    tankId: AccountId32
}

/**
 * The consumption for an account was set for a rule set on a [`FuelTank`]
 */
export interface FuelTanksEvent_ConsumptionSet {
    __kind: 'ConsumptionSet'
    /**
     * The [`AccountId`](frame_system::Config::AccountId) of the [`FuelTank`]
     */
    tankId: AccountId32
    /**
     * The possible user [`AccountId`](frame_system::Config::AccountId) whose consumption
     * was set
     */
    userId?: AccountId32 | undefined
    /**
     * The [`RuleSetId`](Config::RuleSetId)
     */
    ruleSetId: number
    /**
     * The new [`Consumption`](crate::Consumption)
     */
    consumption: Consumption
}

/**
 * The dispatch of a call has failed
 */
export interface FuelTanksEvent_DispatchFailed {
    __kind: 'DispatchFailed'
    /**
     * The [`AccountId`](frame_system::Config::AccountId) of the [`FuelTank`]
     */
    tankId: AccountId32
    /**
     * The [`AccountId`](frame_system::Config::AccountId) that dispatched the call
     */
    caller: AccountId32
    /**
     * The error
     */
    error: DispatchError
}

/**
 * The freeze state change for fuel tank or its rule set was executed in `on_finalize`
 */
export interface FuelTanksEvent_FreezeStateMutated {
    __kind: 'FreezeStateMutated'
    /**
     * The [`AccountId`](frame_system::Config::AccountId) of the [`FuelTank`]
     */
    tankId: AccountId32
    /**
     * The possible [`RuleSetId`](Config::RuleSetId)
     */
    ruleSetId?: number | undefined
    /**
     * The new `is_frozen` state
     */
    isFrozen: boolean
}

/**
 * A new [`FuelTank`] was created.
 */
export interface FuelTanksEvent_FuelTankCreated {
    __kind: 'FuelTankCreated'
    /**
     * The [`AccountId`](frame_system::Config::AccountId) that owns the [`FuelTank`]
     */
    owner: AccountId32
    /**
     * The name of the [`FuelTank`]
     */
    name: Bytes
    /**
     * The account id of the [`FuelTank`]
     */
    tankId: AccountId32
}

/**
 * A [`FuelTank`] was destroyed
 */
export interface FuelTanksEvent_FuelTankDestroyed {
    __kind: 'FuelTankDestroyed'
    /**
     * The [`AccountId`](frame_system::Config::AccountId) of the [`FuelTank`]
     */
    tankId: AccountId32
}

/**
 * A [`FuelTank`] was mutated
 */
export interface FuelTanksEvent_FuelTankMutated {
    __kind: 'FuelTankMutated'
    /**
     * The [`AccountId`](frame_system::Config::AccountId) of the [`FuelTank`]
     */
    tankId: AccountId32
    /**
     * The mutation that was applied
     */
    mutation: DefaultTankMutation
}

/**
 * A new rule set was added to [`FuelTank`]
 */
export interface FuelTanksEvent_RuleSetInserted {
    __kind: 'RuleSetInserted'
    /**
     * The [`AccountId`](frame_system::Config::AccountId) of the [`FuelTank`]
     */
    tankId: AccountId32
    /**
     * The id of the rule set that was added
     */
    ruleSetId: number
}

/**
 * A rule set was removed from [`FuelTank`]
 */
export interface FuelTanksEvent_RuleSetRemoved {
    __kind: 'RuleSetRemoved'
    /**
     * The [`AccountId`](frame_system::Config::AccountId) of the [`FuelTank`]
     */
    tankId: AccountId32
    /**
     * The id of the rule set that was removed
     */
    ruleSetId: number
}

export interface DefaultTankMutation {
    userAccountManagement: Type_257
    providesDeposit?: boolean | undefined
    accountRules?: AccountRuleDescriptor[] | undefined
}

export type AccountRuleDescriptor = AccountRuleDescriptor_RequireToken | AccountRuleDescriptor_WhitelistedCallers

export interface AccountRuleDescriptor_RequireToken {
    __kind: 'RequireToken'
    value: RequireTokenRule
}

export interface AccountRuleDescriptor_WhitelistedCallers {
    __kind: 'WhitelistedCallers'
    value: AccountId32[]
}

export interface RequireTokenRule {
    collectionId: bigint
    tokenId: bigint
}

export type Type_257 = Type_257_NoMutation | Type_257_SomeMutation

export interface Type_257_NoMutation {
    __kind: 'NoMutation'
}

export interface Type_257_SomeMutation {
    __kind: 'SomeMutation'
    value?: UserAccountManagement | undefined
}

export interface UserAccountManagement {
    tankReservesExistentialDeposit: boolean
    tankReservesAccountCreationDeposit: boolean
}

export interface Consumption {
    totalConsumed: bigint
    lastResetBlock?: number | undefined
}

export type DispatchRuleKind =
    | DispatchRuleKind_MaxFuelBurnPerTransaction
    | DispatchRuleKind_PermittedCalls
    | DispatchRuleKind_PermittedExtrinsics
    | DispatchRuleKind_RequireToken
    | DispatchRuleKind_TankFuelBudget
    | DispatchRuleKind_UserFuelBudget
    | DispatchRuleKind_WhitelistedCallers
    | DispatchRuleKind_WhitelistedCollections
    | DispatchRuleKind_WhitelistedPallets

export interface DispatchRuleKind_MaxFuelBurnPerTransaction {
    __kind: 'MaxFuelBurnPerTransaction'
}

export interface DispatchRuleKind_PermittedCalls {
    __kind: 'PermittedCalls'
}

export interface DispatchRuleKind_PermittedExtrinsics {
    __kind: 'PermittedExtrinsics'
}

export interface DispatchRuleKind_RequireToken {
    __kind: 'RequireToken'
}

export interface DispatchRuleKind_TankFuelBudget {
    __kind: 'TankFuelBudget'
}

export interface DispatchRuleKind_UserFuelBudget {
    __kind: 'UserFuelBudget'
}

export interface DispatchRuleKind_WhitelistedCallers {
    __kind: 'WhitelistedCallers'
}

export interface DispatchRuleKind_WhitelistedCollections {
    __kind: 'WhitelistedCollections'
}

export interface DispatchRuleKind_WhitelistedPallets {
    __kind: 'WhitelistedPallets'
}

/**
 * The `Event` enum of this pallet
 */
export type FellowshipReferendaEvent =
    | FellowshipReferendaEvent_Approved
    | FellowshipReferendaEvent_Cancelled
    | FellowshipReferendaEvent_ConfirmAborted
    | FellowshipReferendaEvent_ConfirmStarted
    | FellowshipReferendaEvent_Confirmed
    | FellowshipReferendaEvent_DecisionDepositPlaced
    | FellowshipReferendaEvent_DecisionDepositRefunded
    | FellowshipReferendaEvent_DecisionStarted
    | FellowshipReferendaEvent_DepositSlashed
    | FellowshipReferendaEvent_Killed
    | FellowshipReferendaEvent_MetadataCleared
    | FellowshipReferendaEvent_MetadataSet
    | FellowshipReferendaEvent_Rejected
    | FellowshipReferendaEvent_SubmissionDepositRefunded
    | FellowshipReferendaEvent_Submitted
    | FellowshipReferendaEvent_TimedOut

/**
 * A referendum has been approved and its proposal has been scheduled.
 */
export interface FellowshipReferendaEvent_Approved {
    __kind: 'Approved'
    /**
     * Index of the referendum.
     */
    index: number
}

/**
 * A referendum has been cancelled.
 */
export interface FellowshipReferendaEvent_Cancelled {
    __kind: 'Cancelled'
    /**
     * Index of the referendum.
     */
    index: number
    /**
     * The final tally of votes in this referendum.
     */
    tally: Type_644
}

export interface FellowshipReferendaEvent_ConfirmAborted {
    __kind: 'ConfirmAborted'
    /**
     * Index of the referendum.
     */
    index: number
}

export interface FellowshipReferendaEvent_ConfirmStarted {
    __kind: 'ConfirmStarted'
    /**
     * Index of the referendum.
     */
    index: number
}

/**
 * A referendum has ended its confirmation phase and is ready for approval.
 */
export interface FellowshipReferendaEvent_Confirmed {
    __kind: 'Confirmed'
    /**
     * Index of the referendum.
     */
    index: number
    /**
     * The final tally of votes in this referendum.
     */
    tally: Type_644
}

/**
 * The decision deposit has been placed.
 */
export interface FellowshipReferendaEvent_DecisionDepositPlaced {
    __kind: 'DecisionDepositPlaced'
    /**
     * Index of the referendum.
     */
    index: number
    /**
     * The account who placed the deposit.
     */
    who: AccountId32
    /**
     * The amount placed by the account.
     */
    amount: bigint
}

/**
 * The decision deposit has been refunded.
 */
export interface FellowshipReferendaEvent_DecisionDepositRefunded {
    __kind: 'DecisionDepositRefunded'
    /**
     * Index of the referendum.
     */
    index: number
    /**
     * The account who placed the deposit.
     */
    who: AccountId32
    /**
     * The amount placed by the account.
     */
    amount: bigint
}

/**
 * A referendum has moved into the deciding phase.
 */
export interface FellowshipReferendaEvent_DecisionStarted {
    __kind: 'DecisionStarted'
    /**
     * Index of the referendum.
     */
    index: number
    /**
     * The track (and by extension proposal dispatch origin) of this referendum.
     */
    track: number
    /**
     * The proposal for the referendum.
     */
    proposal: Bounded
    /**
     * The current tally of votes in this referendum.
     */
    tally: Type_644
}

/**
 * A deposit has been slashaed.
 */
export interface FellowshipReferendaEvent_DepositSlashed {
    __kind: 'DepositSlashed'
    /**
     * The account who placed the deposit.
     */
    who: AccountId32
    /**
     * The amount placed by the account.
     */
    amount: bigint
}

/**
 * A referendum has been killed.
 */
export interface FellowshipReferendaEvent_Killed {
    __kind: 'Killed'
    /**
     * Index of the referendum.
     */
    index: number
    /**
     * The final tally of votes in this referendum.
     */
    tally: Type_644
}

/**
 * Metadata for a referendum has been cleared.
 */
export interface FellowshipReferendaEvent_MetadataCleared {
    __kind: 'MetadataCleared'
    /**
     * Index of the referendum.
     */
    index: number
    /**
     * Preimage hash.
     */
    hash: H256
}

/**
 * Metadata for a referendum has been set.
 */
export interface FellowshipReferendaEvent_MetadataSet {
    __kind: 'MetadataSet'
    /**
     * Index of the referendum.
     */
    index: number
    /**
     * Preimage hash.
     */
    hash: H256
}

/**
 * A proposal has been rejected by referendum.
 */
export interface FellowshipReferendaEvent_Rejected {
    __kind: 'Rejected'
    /**
     * Index of the referendum.
     */
    index: number
    /**
     * The final tally of votes in this referendum.
     */
    tally: Type_644
}

/**
 * The submission deposit has been refunded.
 */
export interface FellowshipReferendaEvent_SubmissionDepositRefunded {
    __kind: 'SubmissionDepositRefunded'
    /**
     * Index of the referendum.
     */
    index: number
    /**
     * The account who placed the deposit.
     */
    who: AccountId32
    /**
     * The amount placed by the account.
     */
    amount: bigint
}

/**
 * A referendum has been submitted.
 */
export interface FellowshipReferendaEvent_Submitted {
    __kind: 'Submitted'
    /**
     * Index of the referendum.
     */
    index: number
    /**
     * The track (and by extension proposal dispatch origin) of this referendum.
     */
    track: number
    /**
     * The proposal for the referendum.
     */
    proposal: Bounded
}

/**
 * A referendum has been timed out without being decided.
 */
export interface FellowshipReferendaEvent_TimedOut {
    __kind: 'TimedOut'
    /**
     * Index of the referendum.
     */
    index: number
    /**
     * The final tally of votes in this referendum.
     */
    tally: Type_644
}

export interface Type_644 {
    bareAyes: number
    ayes: number
    nays: number
}

/**
 * The `Event` enum of this pallet
 */
export type FellowshipCollectiveEvent =
    | FellowshipCollectiveEvent_MemberAdded
    | FellowshipCollectiveEvent_MemberRemoved
    | FellowshipCollectiveEvent_RankChanged
    | FellowshipCollectiveEvent_Voted

/**
 * A member `who` has been added.
 */
export interface FellowshipCollectiveEvent_MemberAdded {
    __kind: 'MemberAdded'
    who: AccountId32
}

/**
 * The member `who` of given `rank` has been removed from the collective.
 */
export interface FellowshipCollectiveEvent_MemberRemoved {
    __kind: 'MemberRemoved'
    who: AccountId32
    rank: number
}

/**
 * The member `who`se rank has been changed to the given `rank`.
 */
export interface FellowshipCollectiveEvent_RankChanged {
    __kind: 'RankChanged'
    who: AccountId32
    rank: number
}

/**
 * The member `who` has voted for the `poll` with the given `vote` leading to an updated
 * `tally`.
 */
export interface FellowshipCollectiveEvent_Voted {
    __kind: 'Voted'
    who: AccountId32
    poll: number
    vote: VoteRecord
    tally: Type_644
}

export type VoteRecord = VoteRecord_Aye | VoteRecord_Nay

export interface VoteRecord_Aye {
    __kind: 'Aye'
    value: number
}

export interface VoteRecord_Nay {
    __kind: 'Nay'
    value: number
}

/**
 * The pallet's event type.
 */
export type ExtrinsicPauseEvent =
    | ExtrinsicPauseEvent_ExtrinsicPaused
    | ExtrinsicPauseEvent_ExtrinsicResumed
    | ExtrinsicPauseEvent_PalletPaused
    | ExtrinsicPauseEvent_PalletResumed

/**
 * Extrinsic is paused.
 */
export interface ExtrinsicPauseEvent_ExtrinsicPaused {
    __kind: 'ExtrinsicPaused'
    palletName: Bytes
    extrinsicName: Bytes
}

/**
 * Extrinsic is resumed
 */
export interface ExtrinsicPauseEvent_ExtrinsicResumed {
    __kind: 'ExtrinsicResumed'
    palletName: Bytes
    extrinsicName: Bytes
}

/**
 * All pallet extrinsics are paused.
 */
export interface ExtrinsicPauseEvent_PalletPaused {
    __kind: 'PalletPaused'
    palletName: Bytes
}

/**
 * All pallet extrinsics are resumed.
 */
export interface ExtrinsicPauseEvent_PalletResumed {
    __kind: 'PalletResumed'
    palletName: Bytes
}

/**
 * The `Event` enum of this pallet
 */
export type ElectionProviderMultiPhaseEvent =
    | ElectionProviderMultiPhaseEvent_ElectionFailed
    | ElectionProviderMultiPhaseEvent_ElectionFinalized
    | ElectionProviderMultiPhaseEvent_PhaseTransitioned
    | ElectionProviderMultiPhaseEvent_Rewarded
    | ElectionProviderMultiPhaseEvent_Slashed
    | ElectionProviderMultiPhaseEvent_SolutionStored

/**
 * An election failed.
 *
 * Not much can be said about which computes failed in the process.
 */
export interface ElectionProviderMultiPhaseEvent_ElectionFailed {
    __kind: 'ElectionFailed'
}

/**
 * The election has been finalized, with the given computation and score.
 */
export interface ElectionProviderMultiPhaseEvent_ElectionFinalized {
    __kind: 'ElectionFinalized'
    compute: ElectionCompute
    score: ElectionScore
}

/**
 * There was a phase transition in a given round.
 */
export interface ElectionProviderMultiPhaseEvent_PhaseTransitioned {
    __kind: 'PhaseTransitioned'
    from: Phase
    to: Phase
    round: number
}

/**
 * An account has been rewarded for their signed submission being finalized.
 */
export interface ElectionProviderMultiPhaseEvent_Rewarded {
    __kind: 'Rewarded'
    account: AccountId32
    value: bigint
}

/**
 * An account has been slashed for submitting an invalid signed submission.
 */
export interface ElectionProviderMultiPhaseEvent_Slashed {
    __kind: 'Slashed'
    account: AccountId32
    value: bigint
}

/**
 * A solution was stored with the given compute.
 *
 * The `origin` indicates the origin of the solution. If `origin` is `Some(AccountId)`,
 * the stored solution was submited in the signed phase by a miner with the `AccountId`.
 * Otherwise, the solution was stored either during the unsigned phase or by
 * `T::ForceOrigin`. The `bool` is `true` when a previous solution was ejected to make
 * room for this one.
 */
export interface ElectionProviderMultiPhaseEvent_SolutionStored {
    __kind: 'SolutionStored'
    compute: ElectionCompute
    origin?: AccountId32 | undefined
    prevEjected: boolean
}

export type Phase = Phase_Emergency | Phase_Off | Phase_Signed | Phase_Unsigned

export interface Phase_Emergency {
    __kind: 'Emergency'
}

export interface Phase_Off {
    __kind: 'Off'
}

export interface Phase_Signed {
    __kind: 'Signed'
}

export interface Phase_Unsigned {
    __kind: 'Unsigned'
    value: [boolean, number]
}

export interface ElectionScore {
    minimalStake: bigint
    sumStake: bigint
    sumStakeSquared: bigint
}

export type ElectionCompute =
    | ElectionCompute_Emergency
    | ElectionCompute_Fallback
    | ElectionCompute_OnChain
    | ElectionCompute_Signed
    | ElectionCompute_Unsigned

export interface ElectionCompute_Emergency {
    __kind: 'Emergency'
}

export interface ElectionCompute_Fallback {
    __kind: 'Fallback'
}

export interface ElectionCompute_OnChain {
    __kind: 'OnChain'
}

export interface ElectionCompute_Signed {
    __kind: 'Signed'
}

export interface ElectionCompute_Unsigned {
    __kind: 'Unsigned'
}

/**
 * The `Event` enum of this pallet
 */
export type CrowdloanEvent =
    | CrowdloanEvent_AddedToNewRaise
    | CrowdloanEvent_AllRefunded
    | CrowdloanEvent_Contributed
    | CrowdloanEvent_Created
    | CrowdloanEvent_Dissolved
    | CrowdloanEvent_Edited
    | CrowdloanEvent_HandleBidResult
    | CrowdloanEvent_MemoUpdated
    | CrowdloanEvent_PartiallyRefunded
    | CrowdloanEvent_Withdrew

/**
 * A parachain has been moved to `NewRaise`
 */
export interface CrowdloanEvent_AddedToNewRaise {
    __kind: 'AddedToNewRaise'
    paraId: Id
}

/**
 * All loans in a fund have been refunded.
 */
export interface CrowdloanEvent_AllRefunded {
    __kind: 'AllRefunded'
    paraId: Id
}

/**
 * Contributed to a crowd sale.
 */
export interface CrowdloanEvent_Contributed {
    __kind: 'Contributed'
    who: AccountId32
    fundIndex: Id
    amount: bigint
}

/**
 * Create a new crowdloaning campaign.
 */
export interface CrowdloanEvent_Created {
    __kind: 'Created'
    paraId: Id
}

/**
 * Fund is dissolved.
 */
export interface CrowdloanEvent_Dissolved {
    __kind: 'Dissolved'
    paraId: Id
}

/**
 * The configuration to a crowdloan has been edited.
 */
export interface CrowdloanEvent_Edited {
    __kind: 'Edited'
    paraId: Id
}

/**
 * The result of trying to submit a new bid to the Slots pallet.
 */
export interface CrowdloanEvent_HandleBidResult {
    __kind: 'HandleBidResult'
    paraId: Id
    result: Result<null, DispatchError>
}

/**
 * A memo has been updated.
 */
export interface CrowdloanEvent_MemoUpdated {
    __kind: 'MemoUpdated'
    who: AccountId32
    paraId: Id
    memo: Bytes
}

/**
 * The loans in a fund have been partially dissolved, i.e. there are some left
 * over child keys that still need to be killed.
 */
export interface CrowdloanEvent_PartiallyRefunded {
    __kind: 'PartiallyRefunded'
    paraId: Id
}

/**
 * Withdrew full balance of a contributor.
 */
export interface CrowdloanEvent_Withdrew {
    __kind: 'Withdrew'
    who: AccountId32
    fundIndex: Id
    amount: bigint
}

/**
 * The `Event` enum of this pallet
 */
export type ConvictionVotingEvent = ConvictionVotingEvent_Delegated | ConvictionVotingEvent_Undelegated

/**
 * An account has delegated their vote to another account. \[who, target\]
 */
export interface ConvictionVotingEvent_Delegated {
    __kind: 'Delegated'
    value: [AccountId32, AccountId32]
}

/**
 * An \[account\] has cancelled a previous delegation operation.
 */
export interface ConvictionVotingEvent_Undelegated {
    __kind: 'Undelegated'
    value: AccountId32
}

/**
 * The `Event` enum of this pallet
 */
export type BalancesEvent =
    | BalancesEvent_BalanceSet
    | BalancesEvent_Burned
    | BalancesEvent_Deposit
    | BalancesEvent_DustLost
    | BalancesEvent_Endowed
    | BalancesEvent_Frozen
    | BalancesEvent_Issued
    | BalancesEvent_Locked
    | BalancesEvent_Minted
    | BalancesEvent_Rescinded
    | BalancesEvent_ReserveRepatriated
    | BalancesEvent_Reserved
    | BalancesEvent_Restored
    | BalancesEvent_Slashed
    | BalancesEvent_Suspended
    | BalancesEvent_Thawed
    | BalancesEvent_Transfer
    | BalancesEvent_Unlocked
    | BalancesEvent_Unreserved
    | BalancesEvent_Upgraded
    | BalancesEvent_Withdraw

/**
 * A balance was set by root.
 */
export interface BalancesEvent_BalanceSet {
    __kind: 'BalanceSet'
    who: AccountId32
    free: bigint
}

/**
 * Some amount was burned from an account.
 */
export interface BalancesEvent_Burned {
    __kind: 'Burned'
    who: AccountId32
    amount: bigint
}

/**
 * Some amount was deposited (e.g. for transaction fees).
 */
export interface BalancesEvent_Deposit {
    __kind: 'Deposit'
    who: AccountId32
    amount: bigint
}

/**
 * An account was removed whose balance was non-zero but below ExistentialDeposit,
 * resulting in an outright loss.
 */
export interface BalancesEvent_DustLost {
    __kind: 'DustLost'
    account: AccountId32
    amount: bigint
}

/**
 * An account was created with some free balance.
 */
export interface BalancesEvent_Endowed {
    __kind: 'Endowed'
    account: AccountId32
    freeBalance: bigint
}

/**
 * Some balance was frozen.
 */
export interface BalancesEvent_Frozen {
    __kind: 'Frozen'
    who: AccountId32
    amount: bigint
}

/**
 * Total issuance was increased by `amount`, creating a credit to be balanced.
 */
export interface BalancesEvent_Issued {
    __kind: 'Issued'
    amount: bigint
}

/**
 * Some balance was locked.
 */
export interface BalancesEvent_Locked {
    __kind: 'Locked'
    who: AccountId32
    amount: bigint
}

/**
 * Some amount was minted into an account.
 */
export interface BalancesEvent_Minted {
    __kind: 'Minted'
    who: AccountId32
    amount: bigint
}

/**
 * Total issuance was decreased by `amount`, creating a debt to be balanced.
 */
export interface BalancesEvent_Rescinded {
    __kind: 'Rescinded'
    amount: bigint
}

/**
 * Some balance was moved from the reserve of the first account to the second account.
 * Final argument indicates the destination balance type.
 */
export interface BalancesEvent_ReserveRepatriated {
    __kind: 'ReserveRepatriated'
    from: AccountId32
    to: AccountId32
    amount: bigint
    destinationStatus: BalanceStatus
}

/**
 * Some balance was reserved (moved from free to reserved).
 */
export interface BalancesEvent_Reserved {
    __kind: 'Reserved'
    who: AccountId32
    amount: bigint
}

/**
 * Some amount was restored into an account.
 */
export interface BalancesEvent_Restored {
    __kind: 'Restored'
    who: AccountId32
    amount: bigint
}

/**
 * Some amount was removed from the account (e.g. for misbehavior).
 */
export interface BalancesEvent_Slashed {
    __kind: 'Slashed'
    who: AccountId32
    amount: bigint
}

/**
 * Some amount was suspended from an account (it can be restored later).
 */
export interface BalancesEvent_Suspended {
    __kind: 'Suspended'
    who: AccountId32
    amount: bigint
}

/**
 * Some balance was thawed.
 */
export interface BalancesEvent_Thawed {
    __kind: 'Thawed'
    who: AccountId32
    amount: bigint
}

/**
 * Transfer succeeded.
 */
export interface BalancesEvent_Transfer {
    __kind: 'Transfer'
    from: AccountId32
    to: AccountId32
    amount: bigint
}

/**
 * Some balance was unlocked.
 */
export interface BalancesEvent_Unlocked {
    __kind: 'Unlocked'
    who: AccountId32
    amount: bigint
}

/**
 * Some balance was unreserved (moved from reserved to free).
 */
export interface BalancesEvent_Unreserved {
    __kind: 'Unreserved'
    who: AccountId32
    amount: bigint
}

/**
 * An account was upgraded.
 */
export interface BalancesEvent_Upgraded {
    __kind: 'Upgraded'
    who: AccountId32
}

/**
 * Some amount was withdrawn from the account (e.g. for transaction fees).
 */
export interface BalancesEvent_Withdraw {
    __kind: 'Withdraw'
    who: AccountId32
    amount: bigint
}

export type BalanceStatus = BalanceStatus_Free | BalanceStatus_Reserved

export interface BalanceStatus_Free {
    __kind: 'Free'
}

export interface BalanceStatus_Reserved {
    __kind: 'Reserved'
}

/**
 * The `Event` enum of this pallet
 */
export type AuctionsEvent =
    | AuctionsEvent_AuctionClosed
    | AuctionsEvent_AuctionStarted
    | AuctionsEvent_BidAccepted
    | AuctionsEvent_ReserveConfiscated
    | AuctionsEvent_Reserved
    | AuctionsEvent_Unreserved
    | AuctionsEvent_WinningOffset

/**
 * An auction ended. All funds become unreserved.
 */
export interface AuctionsEvent_AuctionClosed {
    __kind: 'AuctionClosed'
    auctionIndex: number
}

/**
 * An auction started. Provides its index and the block number where it will begin to
 * close and the first lease period of the quadruplet that is auctioned.
 */
export interface AuctionsEvent_AuctionStarted {
    __kind: 'AuctionStarted'
    auctionIndex: number
    leasePeriod: number
    ending: number
}

/**
 * A new bid has been accepted as the current winner.
 */
export interface AuctionsEvent_BidAccepted {
    __kind: 'BidAccepted'
    bidder: AccountId32
    paraId: Id
    amount: bigint
    firstSlot: number
    lastSlot: number
}

/**
 * Someone attempted to lease the same slot twice for a parachain. The amount is held in reserve
 * but no parachain slot has been leased.
 */
export interface AuctionsEvent_ReserveConfiscated {
    __kind: 'ReserveConfiscated'
    paraId: Id
    leaser: AccountId32
    amount: bigint
}

/**
 * Funds were reserved for a winning bid. First balance is the extra amount reserved.
 * Second is the total.
 */
export interface AuctionsEvent_Reserved {
    __kind: 'Reserved'
    bidder: AccountId32
    extraReserved: bigint
    totalAmount: bigint
}

/**
 * Funds were unreserved since bidder is no longer active. `[bidder, amount]`
 */
export interface AuctionsEvent_Unreserved {
    __kind: 'Unreserved'
    bidder: AccountId32
    amount: bigint
}

/**
 * The winning offset was chosen for an auction. This will map into the `Winning` storage map.
 */
export interface AuctionsEvent_WinningOffset {
    __kind: 'WinningOffset'
    auctionIndex: number
    blockNumber: number
}

/**
 * The `Event` enum of this pallet
 */
export type AssignedSlotsEvent = AssignedSlotsEvent_PermanentSlotAssigned | AssignedSlotsEvent_TemporarySlotAssigned

/**
 * A para was assigned a permanent parachain slot
 */
export interface AssignedSlotsEvent_PermanentSlotAssigned {
    __kind: 'PermanentSlotAssigned'
    value: Id
}

/**
 * A para was assigned a temporary parachain slot
 */
export interface AssignedSlotsEvent_TemporarySlotAssigned {
    __kind: 'TemporarySlotAssigned'
    value: Id
}

export type Type_648 = Type_648_ApplyExtrinsic | Type_648_Finalization | Type_648_Initialization

export interface Type_648_ApplyExtrinsic {
    __kind: 'ApplyExtrinsic'
    value: number
}

export interface Type_648_Finalization {
    __kind: 'Finalization'
}

export interface Type_648_Initialization {
    __kind: 'Initialization'
}

export const EventRecord: sts.Type<EventRecord> = sts.struct(() => {
    return {
        phase: Type_648,
        event: Event,
        topics: sts.array(() => H256),
    }
})

export const Event: sts.Type<Event> = sts.closedEnum(() => {
    return {
        AssignedSlots: AssignedSlotsEvent,
        Auctions: AuctionsEvent,
        Balances: BalancesEvent,
        ConvictionVoting: ConvictionVotingEvent,
        Crowdloan: CrowdloanEvent,
        ElectionProviderMultiPhase: ElectionProviderMultiPhaseEvent,
        ExtrinsicPause: ExtrinsicPauseEvent,
        FellowshipCollective: FellowshipCollectiveEvent,
        FellowshipReferenda: FellowshipReferendaEvent,
        FuelTanks: FuelTanksEvent,
        Grandpa: GrandpaEvent,
        Hrmp: HrmpEvent,
        Identity: IdentityEvent,
        ImOnline: ImOnlineEvent,
        Marketplace: MarketplaceEvent,
        MessageQueue: MessageQueueEvent,
        MultiTokens: MultiTokensEvent,
        Multisig: MultisigEvent,
        NominationPools: NominationPoolsEvent,
        Offences: OffencesEvent,
        ParaInclusion: ParaInclusionEvent,
        Paras: ParasEvent,
        ParasDisputes: ParasDisputesEvent,
        Preimage: PreimageEvent,
        Referenda: ReferendaEvent,
        Registrar: RegistrarEvent,
        Scheduler: SchedulerEvent,
        Session: SessionEvent,
        Slots: SlotsEvent,
        StakeExchange: StakeExchangeEvent,
        Staking: StakingEvent,
        Sudo: SudoEvent,
        System: SystemEvent,
        TransactionPayment: TransactionPaymentEvent,
        Treasury: TreasuryEvent,
        Utility: UtilityEvent,
        ValidatorManager: ValidatorManagerEvent,
        VoteManager: VoteManagerEvent,
        VoterList: VoterListEvent,
        Whitelist: WhitelistEvent,
        XcmPallet: XcmPalletEvent,
    }
})

/**
 * The `Event` enum of this pallet
 */
export const XcmPalletEvent: sts.Type<XcmPalletEvent> = sts.closedEnum(() => {
    return {
        AssetsClaimed: sts.enumStruct({
            hash: H256,
            origin: V3MultiLocation,
            assets: VersionedMultiAssets,
        }),
        AssetsTrapped: sts.enumStruct({
            hash: H256,
            origin: V3MultiLocation,
            assets: VersionedMultiAssets,
        }),
        Attempted: sts.enumStruct({
            outcome: V3Outcome,
        }),
        FeesPaid: sts.enumStruct({
            paying: V3MultiLocation,
            fees: sts.array(() => V3MultiAsset),
        }),
        InvalidQuerier: sts.enumStruct({
            origin: V3MultiLocation,
            queryId: sts.bigint(),
            expectedQuerier: V3MultiLocation,
            maybeActualQuerier: sts.option(() => V3MultiLocation),
        }),
        InvalidQuerierVersion: sts.enumStruct({
            origin: V3MultiLocation,
            queryId: sts.bigint(),
        }),
        InvalidResponder: sts.enumStruct({
            origin: V3MultiLocation,
            queryId: sts.bigint(),
            expectedLocation: sts.option(() => V3MultiLocation),
        }),
        InvalidResponderVersion: sts.enumStruct({
            origin: V3MultiLocation,
            queryId: sts.bigint(),
        }),
        Notified: sts.enumStruct({
            queryId: sts.bigint(),
            palletIndex: sts.number(),
            callIndex: sts.number(),
        }),
        NotifyDecodeFailed: sts.enumStruct({
            queryId: sts.bigint(),
            palletIndex: sts.number(),
            callIndex: sts.number(),
        }),
        NotifyDispatchError: sts.enumStruct({
            queryId: sts.bigint(),
            palletIndex: sts.number(),
            callIndex: sts.number(),
        }),
        NotifyOverweight: sts.enumStruct({
            queryId: sts.bigint(),
            palletIndex: sts.number(),
            callIndex: sts.number(),
            actualWeight: Weight,
            maxBudgetedWeight: Weight,
        }),
        NotifyTargetMigrationFail: sts.enumStruct({
            location: VersionedMultiLocation,
            queryId: sts.bigint(),
        }),
        NotifyTargetSendFail: sts.enumStruct({
            location: V3MultiLocation,
            queryId: sts.bigint(),
            error: V3Error,
        }),
        ResponseReady: sts.enumStruct({
            queryId: sts.bigint(),
            response: V3Response,
        }),
        ResponseTaken: sts.enumStruct({
            queryId: sts.bigint(),
        }),
        Sent: sts.enumStruct({
            origin: V3MultiLocation,
            destination: V3MultiLocation,
            message: sts.array(() => V3Instruction),
            messageId: sts.bytes(),
        }),
        SupportedVersionChanged: sts.enumStruct({
            location: V3MultiLocation,
            version: sts.number(),
        }),
        UnexpectedResponse: sts.enumStruct({
            origin: V3MultiLocation,
            queryId: sts.bigint(),
        }),
        VersionChangeNotified: sts.enumStruct({
            destination: V3MultiLocation,
            result: sts.number(),
            cost: sts.array(() => V3MultiAsset),
            messageId: sts.bytes(),
        }),
        VersionNotifyRequested: sts.enumStruct({
            destination: V3MultiLocation,
            cost: sts.array(() => V3MultiAsset),
            messageId: sts.bytes(),
        }),
        VersionNotifyStarted: sts.enumStruct({
            destination: V3MultiLocation,
            cost: sts.array(() => V3MultiAsset),
            messageId: sts.bytes(),
        }),
        VersionNotifyUnrequested: sts.enumStruct({
            destination: V3MultiLocation,
            cost: sts.array(() => V3MultiAsset),
            messageId: sts.bytes(),
        }),
    }
})

/**
 * The `Event` enum of this pallet
 */
export const WhitelistEvent: sts.Type<WhitelistEvent> = sts.closedEnum(() => {
    return {
        CallWhitelisted: sts.enumStruct({
            callHash: H256,
        }),
        WhitelistedCallDispatched: sts.enumStruct({
            callHash: H256,
            result: sts.result(
                () => PostDispatchInfo,
                () => DispatchErrorWithPostInfo
            ),
        }),
        WhitelistedCallRemoved: sts.enumStruct({
            callHash: H256,
        }),
    }
})

export const DispatchErrorWithPostInfo: sts.Type<DispatchErrorWithPostInfo> = sts.struct(() => {
    return {
        postInfo: PostDispatchInfo,
        error: DispatchError,
    }
})

export const DispatchError: sts.Type<DispatchError> = sts.closedEnum(() => {
    return {
        Arithmetic: ArithmeticError,
        BadOrigin: sts.unit(),
        CannotLookup: sts.unit(),
        ConsumerRemaining: sts.unit(),
        Corruption: sts.unit(),
        Exhausted: sts.unit(),
        Module: ModuleError,
        NoProviders: sts.unit(),
        Other: sts.unit(),
        RootNotAllowed: sts.unit(),
        Token: TokenError,
        TooManyConsumers: sts.unit(),
        Transactional: TransactionalError,
        Unavailable: sts.unit(),
    }
})

export const TransactionalError: sts.Type<TransactionalError> = sts.closedEnum(() => {
    return {
        LimitReached: sts.unit(),
        NoLayer: sts.unit(),
    }
})

export const TokenError: sts.Type<TokenError> = sts.closedEnum(() => {
    return {
        BelowMinimum: sts.unit(),
        Blocked: sts.unit(),
        CannotCreate: sts.unit(),
        CannotCreateHold: sts.unit(),
        Frozen: sts.unit(),
        FundsUnavailable: sts.unit(),
        NotExpendable: sts.unit(),
        OnlyProvider: sts.unit(),
        UnknownAsset: sts.unit(),
        Unsupported: sts.unit(),
    }
})

export const ModuleError: sts.Type<ModuleError> = sts.struct(() => {
    return {
        index: sts.number(),
        error: sts.bytes(),
    }
})

export const ArithmeticError: sts.Type<ArithmeticError> = sts.closedEnum(() => {
    return {
        DivisionByZero: sts.unit(),
        Overflow: sts.unit(),
        Underflow: sts.unit(),
    }
})

export const PostDispatchInfo: sts.Type<PostDispatchInfo> = sts.struct(() => {
    return {
        actualWeight: sts.option(() => Weight),
        paysFee: Pays,
    }
})

export const Pays: sts.Type<Pays> = sts.closedEnum(() => {
    return {
        No: sts.unit(),
        Yes: sts.unit(),
    }
})

/**
 * The `Event` enum of this pallet
 */
export const VoterListEvent: sts.Type<VoterListEvent> = sts.closedEnum(() => {
    return {
        Rebagged: sts.enumStruct({
            who: AccountId32,
            from: sts.bigint(),
            to: sts.bigint(),
        }),
        ScoreUpdated: sts.enumStruct({
            who: AccountId32,
            newScore: sts.bigint(),
        }),
    }
})

/**
 * The `Event` enum of this pallet
 */
export const VoteManagerEvent: sts.Type<VoteManagerEvent> = sts.closedEnum(() => {
    return {
        Voted: sts.enumStruct({
            voter: AccountId32,
            pollIndex: sts.number(),
            vote: AccountVote,
        }),
    }
})

export const AccountVote: sts.Type<AccountVote> = sts.closedEnum(() => {
    return {
        Split: sts.enumStruct({
            aye: sts.bigint(),
            nay: sts.bigint(),
        }),
        SplitAbstain: sts.enumStruct({
            aye: sts.bigint(),
            nay: sts.bigint(),
            abstain: sts.bigint(),
        }),
        Standard: sts.enumStruct({
            vote: Vote,
            balance: sts.bigint(),
        }),
    }
})

export const Vote = sts.number()

/**
 * The `Event` enum of this pallet
 */
export const ValidatorManagerEvent: sts.Type<ValidatorManagerEvent> = sts.closedEnum(() => {
    return {
        ValidatorsDeregistered: sts.array(() => AccountId32),
        ValidatorsRegistered: sts.array(() => AccountId32),
    }
})

/**
 * The `Event` enum of this pallet
 */
export const UtilityEvent: sts.Type<UtilityEvent> = sts.closedEnum(() => {
    return {
        BatchCompleted: sts.unit(),
        BatchCompletedWithErrors: sts.unit(),
        BatchInterrupted: sts.enumStruct({
            index: sts.number(),
            error: DispatchError,
        }),
        DispatchedAs: sts.enumStruct({
            result: sts.result(
                () => sts.unit(),
                () => DispatchError
            ),
        }),
        ItemCompleted: sts.unit(),
        ItemFailed: sts.enumStruct({
            error: DispatchError,
        }),
    }
})

/**
 * The `Event` enum of this pallet
 */
export const TreasuryEvent: sts.Type<TreasuryEvent> = sts.closedEnum(() => {
    return {
        Awarded: sts.enumStruct({
            proposalIndex: sts.number(),
            award: sts.bigint(),
            account: AccountId32,
        }),
        Burnt: sts.enumStruct({
            burntFunds: sts.bigint(),
        }),
        Deposit: sts.enumStruct({
            value: sts.bigint(),
        }),
        Proposed: sts.enumStruct({
            proposalIndex: sts.number(),
        }),
        Rejected: sts.enumStruct({
            proposalIndex: sts.number(),
            slashed: sts.bigint(),
        }),
        Rollover: sts.enumStruct({
            rolloverBalance: sts.bigint(),
        }),
        SpendApproved: sts.enumStruct({
            proposalIndex: sts.number(),
            amount: sts.bigint(),
            beneficiary: AccountId32,
        }),
        Spending: sts.enumStruct({
            budgetRemaining: sts.bigint(),
        }),
        UpdatedInactive: sts.enumStruct({
            reactivated: sts.bigint(),
            deactivated: sts.bigint(),
        }),
    }
})

/**
 * The `Event` enum of this pallet
 */
export const TransactionPaymentEvent: sts.Type<TransactionPaymentEvent> = sts.closedEnum(() => {
    return {
        TransactionFeePaid: sts.enumStruct({
            who: AccountId32,
            actualFee: sts.bigint(),
            tip: sts.bigint(),
        }),
    }
})

/**
 * Event for the System pallet.
 */
export const SystemEvent: sts.Type<SystemEvent> = sts.closedEnum(() => {
    return {
        CodeUpdated: sts.unit(),
        ExtrinsicFailed: sts.enumStruct({
            dispatchError: DispatchError,
            dispatchInfo: DispatchInfo,
        }),
        ExtrinsicSuccess: sts.enumStruct({
            dispatchInfo: DispatchInfo,
        }),
        KilledAccount: sts.enumStruct({
            account: AccountId32,
        }),
        NewAccount: sts.enumStruct({
            account: AccountId32,
        }),
        Remarked: sts.enumStruct({
            sender: AccountId32,
            hash: H256,
        }),
    }
})

export const DispatchInfo: sts.Type<DispatchInfo> = sts.struct(() => {
    return {
        weight: Weight,
        class: DispatchClass,
        paysFee: Pays,
    }
})

export const DispatchClass: sts.Type<DispatchClass> = sts.closedEnum(() => {
    return {
        Mandatory: sts.unit(),
        Normal: sts.unit(),
        Operational: sts.unit(),
    }
})

/**
 * The `Event` enum of this pallet
 */
export const SudoEvent: sts.Type<SudoEvent> = sts.closedEnum(() => {
    return {
        KeyChanged: sts.enumStruct({
            oldSudoer: sts.option(() => AccountId32),
        }),
        Sudid: sts.enumStruct({
            sudoResult: sts.result(
                () => sts.unit(),
                () => DispatchError
            ),
        }),
        SudoAsDone: sts.enumStruct({
            sudoResult: sts.result(
                () => sts.unit(),
                () => DispatchError
            ),
        }),
    }
})

/**
 * The `Event` enum of this pallet
 */
export const StakingEvent: sts.Type<StakingEvent> = sts.closedEnum(() => {
    return {
        Bonded: sts.enumStruct({
            stash: AccountId32,
            amount: sts.bigint(),
        }),
        Chilled: sts.enumStruct({
            stash: AccountId32,
        }),
        EraPaid: sts.enumStruct({
            eraIndex: sts.number(),
            validatorPayout: sts.bigint(),
            remainder: sts.bigint(),
        }),
        ForceEra: sts.enumStruct({
            mode: Forcing,
        }),
        Kicked: sts.enumStruct({
            nominator: AccountId32,
            stash: AccountId32,
        }),
        OldSlashingReportDiscarded: sts.enumStruct({
            sessionIndex: sts.number(),
        }),
        PayoutStarted: sts.enumStruct({
            eraIndex: sts.number(),
            validatorStash: AccountId32,
        }),
        Rewarded: sts.enumStruct({
            stash: AccountId32,
            amount: sts.bigint(),
        }),
        SlashReported: sts.enumStruct({
            validator: AccountId32,
            fraction: Perbill,
            slashEra: sts.number(),
        }),
        Slashed: sts.enumStruct({
            staker: AccountId32,
            amount: sts.bigint(),
        }),
        StakersElected: sts.unit(),
        StakingElectionFailed: sts.unit(),
        Unbonded: sts.enumStruct({
            stash: AccountId32,
            amount: sts.bigint(),
        }),
        ValidatorPrefsSet: sts.enumStruct({
            stash: AccountId32,
            prefs: ValidatorPrefs,
        }),
        Withdrawn: sts.enumStruct({
            stash: AccountId32,
            amount: sts.bigint(),
        }),
    }
})

export const ValidatorPrefs: sts.Type<ValidatorPrefs> = sts.struct(() => {
    return {
        commission: sts.number(),
        blocked: sts.boolean(),
    }
})

export const Forcing: sts.Type<Forcing> = sts.closedEnum(() => {
    return {
        ForceAlways: sts.unit(),
        ForceNew: sts.unit(),
        ForceNone: sts.unit(),
        NotForcing: sts.unit(),
    }
})

/**
 * The pallet's event type.
 */
export const StakeExchangeEvent: sts.Type<StakeExchangeEvent> = sts.closedEnum(() => {
    return {
        BuyOrderCompleted: sts.enumStruct({
            who: AccountId32,
            tokenId: sts.bigint(),
            amount: sts.bigint(),
            rate: Perbill,
            offerCreator: AccountId32,
        }),
        LiquidityAdded: sts.enumStruct({
            who: AccountId32,
            offerId: sts.bigint(),
        }),
        LiquidityConfigUpdated: sts.enumStruct({
            who: AccountId32,
            config: LiquidityAccountConfig,
        }),
        LiquidityWithdrawn: sts.enumStruct({
            who: AccountId32,
            offerId: sts.bigint(),
        }),
        OfferCancelled: sts.enumStruct({
            offerId: sts.bigint(),
        }),
        OfferCompleted: sts.enumStruct({
            offerId: sts.bigint(),
        }),
        OfferCreated: sts.enumStruct({
            offerId: sts.bigint(),
            offer: Offer,
        }),
    }
})

export const Offer: sts.Type<Offer> = sts.struct(() => {
    return {
        account: AccountId32,
        total: sts.bigint(),
        rate: sts.number(),
        minAverageRewardRate: sts.bigint(),
        deposit: sts.bigint(),
        tokenFilter: TokenFilter,
    }
})

export const TokenFilter: sts.Type<TokenFilter> = sts.closedEnum(() => {
    return {
        All: sts.unit(),
        BlockList: sts.array(() => sts.bigint()),
        Whitelist: sts.array(() => sts.bigint()),
    }
})

export const LiquidityAccountConfig: sts.Type<LiquidityAccountConfig> = sts.struct(() => {
    return {
        tokenFilter: TokenFilter,
    }
})

/**
 * The `Event` enum of this pallet
 */
export const SlotsEvent: sts.Type<SlotsEvent> = sts.closedEnum(() => {
    return {
        Leased: sts.enumStruct({
            paraId: Id,
            leaser: AccountId32,
            periodBegin: sts.number(),
            periodCount: sts.number(),
            extraReserved: sts.bigint(),
            totalAmount: sts.bigint(),
        }),
        NewLeasePeriod: sts.enumStruct({
            leasePeriod: sts.number(),
        }),
    }
})

export const Id = sts.number()

/**
 * The `Event` enum of this pallet
 */
export const SessionEvent: sts.Type<SessionEvent> = sts.closedEnum(() => {
    return {
        NewSession: sts.enumStruct({
            sessionIndex: sts.number(),
        }),
    }
})

/**
 * Events type.
 */
export const SchedulerEvent: sts.Type<SchedulerEvent> = sts.closedEnum(() => {
    return {
        CallUnavailable: sts.enumStruct({
            task: sts.tuple(() => [sts.number(), sts.number()]),
            id: sts.option(() => sts.bytes()),
        }),
        Canceled: sts.enumStruct({
            when: sts.number(),
            index: sts.number(),
        }),
        Dispatched: sts.enumStruct({
            task: sts.tuple(() => [sts.number(), sts.number()]),
            id: sts.option(() => sts.bytes()),
            result: sts.result(
                () => sts.unit(),
                () => DispatchError
            ),
        }),
        PeriodicFailed: sts.enumStruct({
            task: sts.tuple(() => [sts.number(), sts.number()]),
            id: sts.option(() => sts.bytes()),
        }),
        PermanentlyOverweight: sts.enumStruct({
            task: sts.tuple(() => [sts.number(), sts.number()]),
            id: sts.option(() => sts.bytes()),
        }),
        Scheduled: sts.enumStruct({
            when: sts.number(),
            index: sts.number(),
        }),
    }
})

/**
 * The `Event` enum of this pallet
 */
export const RegistrarEvent: sts.Type<RegistrarEvent> = sts.closedEnum(() => {
    return {
        Deregistered: sts.enumStruct({
            paraId: Id,
        }),
        Registered: sts.enumStruct({
            paraId: Id,
            manager: AccountId32,
        }),
        Reserved: sts.enumStruct({
            paraId: Id,
            who: AccountId32,
        }),
        Swapped: sts.enumStruct({
            paraId: Id,
            otherId: Id,
        }),
    }
})

/**
 * The `Event` enum of this pallet
 */
export const ReferendaEvent: sts.Type<ReferendaEvent> = sts.closedEnum(() => {
    return {
        Approved: sts.enumStruct({
            index: sts.number(),
        }),
        Cancelled: sts.enumStruct({
            index: sts.number(),
            tally: Tally,
        }),
        ConfirmAborted: sts.enumStruct({
            index: sts.number(),
        }),
        ConfirmStarted: sts.enumStruct({
            index: sts.number(),
        }),
        Confirmed: sts.enumStruct({
            index: sts.number(),
            tally: Tally,
        }),
        DecisionDepositPlaced: sts.enumStruct({
            index: sts.number(),
            who: AccountId32,
            amount: sts.bigint(),
        }),
        DecisionDepositRefunded: sts.enumStruct({
            index: sts.number(),
            who: AccountId32,
            amount: sts.bigint(),
        }),
        DecisionStarted: sts.enumStruct({
            index: sts.number(),
            track: sts.number(),
            proposal: Bounded,
            tally: Tally,
        }),
        DepositSlashed: sts.enumStruct({
            who: AccountId32,
            amount: sts.bigint(),
        }),
        Killed: sts.enumStruct({
            index: sts.number(),
            tally: Tally,
        }),
        MetadataCleared: sts.enumStruct({
            index: sts.number(),
            hash: H256,
        }),
        MetadataSet: sts.enumStruct({
            index: sts.number(),
            hash: H256,
        }),
        Rejected: sts.enumStruct({
            index: sts.number(),
            tally: Tally,
        }),
        SubmissionDepositRefunded: sts.enumStruct({
            index: sts.number(),
            who: AccountId32,
            amount: sts.bigint(),
        }),
        Submitted: sts.enumStruct({
            index: sts.number(),
            track: sts.number(),
            proposal: Bounded,
        }),
        TimedOut: sts.enumStruct({
            index: sts.number(),
            tally: Tally,
        }),
    }
})

export const Bounded: sts.Type<Bounded> = sts.closedEnum(() => {
    return {
        Inline: sts.bytes(),
        Legacy: sts.enumStruct({
            hash: H256,
        }),
        Lookup: sts.enumStruct({
            hash: H256,
            len: sts.number(),
        }),
    }
})

export const Tally: sts.Type<Tally> = sts.struct(() => {
    return {
        ayes: sts.bigint(),
        nays: sts.bigint(),
        support: sts.bigint(),
    }
})

/**
 * The `Event` enum of this pallet
 */
export const PreimageEvent: sts.Type<PreimageEvent> = sts.closedEnum(() => {
    return {
        Cleared: sts.enumStruct({
            hash: H256,
        }),
        Noted: sts.enumStruct({
            hash: H256,
        }),
        Requested: sts.enumStruct({
            hash: H256,
        }),
    }
})

/**
 * The `Event` enum of this pallet
 */
export const ParasDisputesEvent: sts.Type<ParasDisputesEvent> = sts.closedEnum(() => {
    return {
        DisputeConcluded: sts.tuple(() => [CandidateHash, DisputeResult]),
        DisputeInitiated: sts.tuple(() => [CandidateHash, DisputeLocation]),
        Revert: sts.number(),
    }
})

export const DisputeLocation: sts.Type<DisputeLocation> = sts.closedEnum(() => {
    return {
        Local: sts.unit(),
        Remote: sts.unit(),
    }
})

export const DisputeResult: sts.Type<DisputeResult> = sts.closedEnum(() => {
    return {
        Invalid: sts.unit(),
        Valid: sts.unit(),
    }
})

export const CandidateHash = sts.bytes()

/**
 * The `Event` enum of this pallet
 */
export const ParasEvent: sts.Type<ParasEvent> = sts.closedEnum(() => {
    return {
        ActionQueued: sts.tuple(() => [Id, sts.number()]),
        CodeUpgradeScheduled: Id,
        CurrentCodeUpdated: Id,
        CurrentHeadUpdated: Id,
        NewHeadNoted: Id,
        PvfCheckAccepted: sts.tuple(() => [ValidationCodeHash, Id]),
        PvfCheckRejected: sts.tuple(() => [ValidationCodeHash, Id]),
        PvfCheckStarted: sts.tuple(() => [ValidationCodeHash, Id]),
    }
})

export const ValidationCodeHash = sts.bytes()

/**
 * The `Event` enum of this pallet
 */
export const ParaInclusionEvent: sts.Type<ParaInclusionEvent> = sts.closedEnum(() => {
    return {
        CandidateBacked: sts.tuple(() => [V5CandidateReceipt, HeadData, V5CoreIndex, V5GroupIndex]),
        CandidateIncluded: sts.tuple(() => [V5CandidateReceipt, HeadData, V5CoreIndex, V5GroupIndex]),
        CandidateTimedOut: sts.tuple(() => [V5CandidateReceipt, HeadData, V5CoreIndex]),
        UpwardMessagesReceived: sts.enumStruct({
            from: Id,
            count: sts.number(),
        }),
    }
})

export const V5GroupIndex = sts.number()

export const V5CoreIndex = sts.number()

export const HeadData = sts.bytes()

export const V5CandidateReceipt: sts.Type<V5CandidateReceipt> = sts.struct(() => {
    return {
        descriptor: V5CandidateDescriptor,
        commitmentsHash: H256,
    }
})

export const V5CandidateDescriptor: sts.Type<V5CandidateDescriptor> = sts.struct(() => {
    return {
        paraId: Id,
        relayParent: H256,
        collator: V5Public,
        persistedValidationDataHash: H256,
        povHash: H256,
        erasureRoot: H256,
        signature: V5Signature,
        paraHead: H256,
        validationCodeHash: ValidationCodeHash,
    }
})

export const V5Signature = sts.bytes()

export const V5Public = sts.bytes()

/**
 * Events type.
 */
export const OffencesEvent: sts.Type<OffencesEvent> = sts.closedEnum(() => {
    return {
        Offence: sts.enumStruct({
            kind: sts.bytes(),
            timeslot: sts.bytes(),
        }),
    }
})

/**
 * Events of this pallet.
 */
export const NominationPoolsEvent: sts.Type<NominationPoolsEvent> = sts.closedEnum(() => {
    return {
        Bonded: sts.enumStruct({
            member: AccountId32,
            poolId: sts.number(),
            bonded: sts.bigint(),
        }),
        CommissionUpdated: sts.enumStruct({
            poolId: sts.number(),
            current: sts.option(() => Perbill),
        }),
        Created: sts.enumStruct({
            creator: AccountId32,
            poolId: sts.number(),
            capacity: sts.bigint(),
        }),
        Destroyed: sts.enumStruct({
            poolId: sts.number(),
        }),
        EarlyBirdBonusCalculated: sts.enumStruct({
            totalAmount: sts.bigint(),
        }),
        EarlyBirdBonusDistributed: sts.enumStruct({
            poolId: sts.number(),
            amount: sts.bigint(),
        }),
        EarlyBirdBonusPaid: sts.enumStruct({
            poolId: sts.number(),
            paymentId: sts.number(),
            totalAccounts: sts.number(),
        }),
        EarlyBirdBonusPaymentUnlocked: sts.enumStruct({
            paymentId: sts.number(),
            nextPaymentBlock: sts.number(),
        }),
        EarlyBirdSharesCaptured: sts.enumStruct({
            poolId: sts.number(),
            totalAccounts: sts.number(),
        }),
        EraRewardsProcessed: sts.enumStruct({
            poolId: sts.number(),
            era: sts.number(),
            commission: sts.option(() => CommissionPayment),
            bonus: sts.bigint(),
            reinvested: sts.bigint(),
            bonusCycleEnded: sts.boolean(),
        }),
        Nominated: sts.enumStruct({
            poolId: sts.number(),
            validators: sts.array(() => AccountId32),
        }),
        PoolMutated: sts.enumStruct({
            poolId: sts.number(),
            mutation: PoolMutation,
        }),
        PoolSlashed: sts.enumStruct({
            poolId: sts.number(),
            balance: sts.bigint(),
        }),
        RewardPaid: sts.enumStruct({
            poolId: sts.number(),
            era: sts.number(),
            validatorStash: AccountId32,
            reward: sts.bigint(),
            bonus: sts.bigint(),
        }),
        StateChanged: sts.enumStruct({
            poolId: sts.number(),
            newState: PoolState,
        }),
        Unbonded: sts.enumStruct({
            member: AccountId32,
            poolId: sts.number(),
            balance: sts.bigint(),
            points: sts.bigint(),
            era: sts.number(),
        }),
        UnbondingPoolSlashed: sts.enumStruct({
            poolId: sts.number(),
            era: sts.number(),
            balance: sts.bigint(),
        }),
        Withdrawn: sts.enumStruct({
            member: AccountId32,
            poolId: sts.number(),
            balance: sts.bigint(),
            points: sts.bigint(),
        }),
    }
})

export const PoolState: sts.Type<PoolState> = sts.closedEnum(() => {
    return {
        Destroying: sts.unit(),
        Open: sts.unit(),
    }
})

export const PoolMutation: sts.Type<PoolMutation> = sts.struct(() => {
    return {
        duration: sts.option(() => sts.number()),
        newCommission: ShouldMutate,
        maxCommission: sts.option(() => Perbill),
        changeRate: sts.option(() => CommissionChangeRate),
        capacity: sts.option(() => sts.bigint()),
        name: sts.option(() => BoundedVec),
    }
})

export const BoundedVec = sts.bytes()

export const CommissionChangeRate: sts.Type<CommissionChangeRate> = sts.struct(() => {
    return {
        maxDelta: Perbill,
        minDelay: sts.number(),
    }
})

export const ShouldMutate: sts.Type<ShouldMutate> = sts.closedEnum(() => {
    return {
        NoMutation: sts.unit(),
        SomeMutation: sts.option(() => Perbill),
    }
})

export const CommissionPayment: sts.Type<CommissionPayment> = sts.struct(() => {
    return {
        beneficiary: AccountId32,
        amount: sts.bigint(),
    }
})

/**
 * The `Event` enum of this pallet
 */
export const MultisigEvent: sts.Type<MultisigEvent> = sts.closedEnum(() => {
    return {
        MultisigApproval: sts.enumStruct({
            approving: AccountId32,
            timepoint: Timepoint,
            multisig: AccountId32,
            callHash: sts.bytes(),
        }),
        MultisigCancelled: sts.enumStruct({
            cancelling: AccountId32,
            timepoint: Timepoint,
            multisig: AccountId32,
            callHash: sts.bytes(),
        }),
        MultisigExecuted: sts.enumStruct({
            approving: AccountId32,
            timepoint: Timepoint,
            multisig: AccountId32,
            callHash: sts.bytes(),
            result: sts.result(
                () => sts.unit(),
                () => DispatchError
            ),
        }),
        NewMultisig: sts.enumStruct({
            approving: AccountId32,
            multisig: AccountId32,
            callHash: sts.bytes(),
        }),
    }
})

/**
 * The `Event` enum of this pallet
 */
export const MultiTokensEvent: sts.Type<MultiTokensEvent> = sts.closedEnum(() => {
    return {
        Approved: sts.enumStruct({
            collectionId: sts.bigint(),
            tokenId: sts.option(() => sts.bigint()),
            owner: AccountId32,
            operator: AccountId32,
            amount: sts.option(() => sts.bigint()),
            expiration: sts.option(() => sts.number()),
        }),
        AttributeRemoved: sts.enumStruct({
            collectionId: sts.bigint(),
            tokenId: sts.option(() => sts.bigint()),
            key: sts.bytes(),
        }),
        AttributeSet: sts.enumStruct({
            collectionId: sts.bigint(),
            tokenId: sts.option(() => sts.bigint()),
            key: sts.bytes(),
            value: sts.bytes(),
        }),
        BalanceSet: sts.enumStruct({
            collectionId: sts.bigint(),
            tokenId: sts.bigint(),
            accountId: AccountId32,
            balance: sts.bigint(),
            reservedBalance: sts.bigint(),
        }),
        Burned: sts.enumStruct({
            collectionId: sts.bigint(),
            tokenId: sts.bigint(),
            accountId: AccountId32,
            amount: sts.bigint(),
        }),
        ClaimTokensCompleted: sts.enumStruct({
            destination: AccountId32,
            ethereumAddress: H160,
        }),
        ClaimTokensInitiated: sts.enumStruct({
            accountId: AccountId32,
            ethereumAddress: H160,
        }),
        ClaimedCollections: sts.enumStruct({
            accountId: AccountId32,
            ethereumAddress: H160,
            collectionIds: sts.array(() => sts.bigint()),
        }),
        ClaimedTokens: sts.enumStruct({
            accountId: AccountId32,
            ethereumAddress: H160,
            assetIds: sts.array(() => AssetIdWithEth),
            moreTokensRemain: sts.boolean(),
        }),
        CollectionAccountCreated: sts.enumStruct({
            collectionId: sts.bigint(),
            accountId: AccountId32,
        }),
        CollectionAccountDestroyed: sts.enumStruct({
            collectionId: sts.bigint(),
            accountId: AccountId32,
        }),
        CollectionAccountUpdated: sts.enumStruct({
            collectionId: sts.bigint(),
            accountId: AccountId32,
            value: sts.option(() => CollectionAccount),
        }),
        CollectionCreated: sts.enumStruct({
            collectionId: sts.bigint(),
            owner: AccountId32,
        }),
        CollectionDestroyed: sts.enumStruct({
            collectionId: sts.bigint(),
            caller: AccountId32,
        }),
        CollectionMutated: sts.enumStruct({
            collectionId: sts.bigint(),
            mutation: DefaultCollectionMutation,
        }),
        CollectionUpdated: sts.enumStruct({
            collectionId: sts.bigint(),
            value: sts.option(() => Collection),
        }),
        Deposit: sts.enumStruct({
            collectionId: sts.bigint(),
            tokenId: sts.bigint(),
            accountId: AccountId32,
            amount: sts.bigint(),
        }),
        Frozen: Freeze,
        MigrationStatusUpdated: sts.enumStruct({
            stage: MigrationStage,
        }),
        Minted: sts.enumStruct({
            collectionId: sts.bigint(),
            tokenId: sts.bigint(),
            issuer: RootOrSigned,
            recipient: AccountId32,
            amount: sts.bigint(),
        }),
        MovedReserves: sts.enumStruct({
            collectionId: sts.bigint(),
            tokenId: sts.bigint(),
            source: AccountId32,
            destination: AccountId32,
            amount: sts.bigint(),
            reserveId: sts.option(() => sts.bytes()),
        }),
        NextCollectionIdUpdated: sts.enumStruct({
            collectionId: sts.bigint(),
        }),
        ReserveRepatriated: sts.enumStruct({
            collectionId: sts.bigint(),
            tokenId: sts.bigint(),
            source: AccountId32,
            destination: AccountId32,
            amount: sts.bigint(),
            reserveId: sts.option(() => sts.bytes()),
        }),
        Reserved: sts.enumStruct({
            collectionId: sts.bigint(),
            tokenId: sts.bigint(),
            accountId: AccountId32,
            amount: sts.bigint(),
            reserveId: sts.option(() => sts.bytes()),
        }),
        Slashed: sts.enumStruct({
            collectionId: sts.bigint(),
            tokenId: sts.bigint(),
            accountId: AccountId32,
            amount: sts.bigint(),
        }),
        Thawed: Freeze,
        TokenAccountCreated: sts.enumStruct({
            collectionId: sts.bigint(),
            tokenId: sts.bigint(),
            accountId: AccountId32,
            balance: sts.bigint(),
        }),
        TokenAccountDestroyed: sts.enumStruct({
            collectionId: sts.bigint(),
            tokenId: sts.bigint(),
            accountId: AccountId32,
        }),
        TokenAccountUpdated: sts.enumStruct({
            collectionId: sts.bigint(),
            tokenId: sts.bigint(),
            accountId: AccountId32,
            value: sts.option(() => TokenAccount),
        }),
        TokenCreated: sts.enumStruct({
            collectionId: sts.bigint(),
            tokenId: sts.bigint(),
            issuer: RootOrSigned,
            initialSupply: sts.bigint(),
        }),
        TokenDestroyed: sts.enumStruct({
            collectionId: sts.bigint(),
            tokenId: sts.bigint(),
            caller: AccountId32,
        }),
        TokenMutated: sts.enumStruct({
            collectionId: sts.bigint(),
            tokenId: sts.bigint(),
            mutation: DefaultTokenMutation,
        }),
        TokenUpdated: sts.enumStruct({
            collectionId: sts.bigint(),
            tokenId: sts.bigint(),
            value: sts.option(() => Token),
        }),
        Transferred: sts.enumStruct({
            collectionId: sts.bigint(),
            tokenId: sts.bigint(),
            operator: AccountId32,
            from: AccountId32,
            to: AccountId32,
            amount: sts.bigint(),
        }),
        Unapproved: sts.enumStruct({
            collectionId: sts.bigint(),
            tokenId: sts.option(() => sts.bigint()),
            owner: AccountId32,
            operator: AccountId32,
        }),
        Unreserved: sts.enumStruct({
            collectionId: sts.bigint(),
            tokenId: sts.bigint(),
            accountId: AccountId32,
            amount: sts.bigint(),
            reserveId: sts.option(() => sts.bytes()),
        }),
        Withdraw: sts.enumStruct({
            collectionId: sts.bigint(),
            tokenId: sts.bigint(),
            accountId: AccountId32,
            amount: sts.bigint(),
        }),
    }
})

export const Token: sts.Type<Token> = sts.struct(() => {
    return {
        supply: sts.bigint(),
        cap: sts.option(() => TokenCap),
        freezeState: sts.option(() => FreezeState),
        minimumBalance: sts.bigint(),
        sufficiency: Sufficiency,
        mintDeposit: sts.bigint(),
        attributeCount: sts.number(),
        marketBehavior: sts.option(() => TokenMarketBehavior),
        listingForbidden: sts.boolean(),
        metadata: DefaultTokenMetadata,
    }
})

export const DefaultTokenMetadata: sts.Type<DefaultTokenMetadata> = sts.closedEnum(() => {
    return {
        Foreign: DefaultForeignTokenMetadata,
        Native: sts.unit(),
    }
})

export const DefaultForeignTokenMetadata: sts.Type<DefaultForeignTokenMetadata> = sts.struct(() => {
    return {
        decimalCount: sts.number(),
        name: BoundedString,
        symbol: sts.bytes(),
        location: sts.option(() => V3MultiLocation),
        unitsPerSecond: sts.option(() => sts.bigint()),
        premintedSupply: sts.bigint(),
    }
})

export const BoundedString = sts.bytes()

export const TokenMarketBehavior: sts.Type<TokenMarketBehavior> = sts.closedEnum(() => {
    return {
        HasRoyalty: DefaultRoyalty,
        IsCurrency: sts.unit(),
    }
})

export const DefaultRoyalty: sts.Type<DefaultRoyalty> = sts.struct(() => {
    return {
        beneficiary: AccountId32,
        percentage: sts.number(),
    }
})

export const Sufficiency: sts.Type<Sufficiency> = sts.closedEnum(() => {
    return {
        Insufficient: sts.enumStruct({
            unitPrice: sts.bigint(),
        }),
        Sufficient: sts.unit(),
    }
})

export const FreezeState: sts.Type<FreezeState> = sts.closedEnum(() => {
    return {
        Never: sts.unit(),
        Permanent: sts.unit(),
        Temporary: sts.unit(),
    }
})

export const TokenCap: sts.Type<TokenCap> = sts.closedEnum(() => {
    return {
        CollapsingSupply: sts.bigint(),
        SingleMint: sts.unit(),
        Supply: sts.bigint(),
    }
})

export const DefaultTokenMutation: sts.Type<DefaultTokenMutation> = sts.struct(() => {
    return {
        behavior: Type_196,
        listingForbidden: Type_199,
        metadata: Type_200,
    }
})

export const Type_200: sts.Type<Type_200> = sts.closedEnum(() => {
    return {
        NoMutation: sts.unit(),
        SomeMutation: DefaultTokenMetadata,
    }
})

export const Type_199: sts.Type<Type_199> = sts.closedEnum(() => {
    return {
        NoMutation: sts.unit(),
        SomeMutation: sts.boolean(),
    }
})

export const Type_196: sts.Type<Type_196> = sts.closedEnum(() => {
    return {
        NoMutation: sts.unit(),
        SomeMutation: sts.option(() => TokenMarketBehavior),
    }
})

export const TokenAccount: sts.Type<TokenAccount> = sts.struct(() => {
    return {
        balance: sts.bigint(),
        reservedBalance: sts.bigint(),
        lockedBalance: sts.bigint(),
        namedReserves: sts.array(() => sts.tuple(() => [sts.bytes(), sts.bigint()])),
        locks: sts.array(() => sts.tuple(() => [sts.bytes(), sts.bigint()])),
        approvals: sts.array(() => sts.tuple(() => [AccountId32, Approval])),
        isFrozen: sts.boolean(),
    }
})

export const Approval: sts.Type<Approval> = sts.struct(() => {
    return {
        amount: sts.bigint(),
        expiration: sts.option(() => sts.number()),
    }
})

export const RootOrSigned: sts.Type<RootOrSigned> = sts.closedEnum(() => {
    return {
        Root: sts.unit(),
        Signed: AccountId32,
    }
})

export const MigrationStage: sts.Type<MigrationStage> = sts.closedEnum(() => {
    return {
        Completed: sts.unit(),
        Failed: sts.unit(),
        InProgress: sts.unit(),
        NotStarted: sts.unit(),
    }
})

export const Freeze: sts.Type<Freeze> = sts.struct(() => {
    return {
        collectionId: sts.bigint(),
        freezeType: FreezeType,
    }
})

export const FreezeType: sts.Type<FreezeType> = sts.closedEnum(() => {
    return {
        Collection: sts.unit(),
        CollectionAccount: AccountId32,
        Token: sts.enumStruct({
            tokenId: sts.bigint(),
            freezeState: sts.option(() => FreezeState),
        }),
        TokenAccount: sts.enumStruct({
            tokenId: sts.bigint(),
            accountId: AccountId32,
        }),
    }
})

export const Collection: sts.Type<Collection> = sts.struct(() => {
    return {
        owner: AccountId32,
        policy: DefaultCollectionPolicy,
        tokenCount: sts.bigint(),
        attributeCount: sts.number(),
        totalDeposit: sts.bigint(),
        explicitRoyaltyCurrencies: sts.array(() => sts.tuple(() => [AssetId, sts.unit()])),
    }
})

export const AssetId: sts.Type<AssetId> = sts.struct(() => {
    return {
        collectionId: sts.bigint(),
        tokenId: sts.bigint(),
    }
})

export const DefaultCollectionPolicy: sts.Type<DefaultCollectionPolicy> = sts.struct(() => {
    return {
        mint: DefaultMintPolicy,
        transfer: DefaultTransferPolicy,
        market: DefaultMarketPolicy,
    }
})

export const DefaultMarketPolicy: sts.Type<DefaultMarketPolicy> = sts.struct(() => {
    return {
        royalty: sts.option(() => DefaultRoyalty),
    }
})

export const DefaultTransferPolicy: sts.Type<DefaultTransferPolicy> = sts.struct(() => {
    return {
        isFrozen: sts.boolean(),
    }
})

export const DefaultMintPolicy: sts.Type<DefaultMintPolicy> = sts.struct(() => {
    return {
        maxTokenCount: sts.option(() => sts.bigint()),
        maxTokenSupply: sts.option(() => sts.bigint()),
        forceSingleMint: sts.boolean(),
    }
})

export const DefaultCollectionMutation: sts.Type<DefaultCollectionMutation> = sts.struct(() => {
    return {
        owner: sts.option(() => AccountId32),
        royalty: Type_183,
        explicitRoyaltyCurrencies: sts.option(() => sts.array(() => AssetId)),
    }
})

export const Type_183: sts.Type<Type_183> = sts.closedEnum(() => {
    return {
        NoMutation: sts.unit(),
        SomeMutation: sts.option(() => DefaultRoyalty),
    }
})

export const CollectionAccount: sts.Type<CollectionAccount> = sts.struct(() => {
    return {
        isFrozen: sts.boolean(),
        approvals: sts.array(() => sts.tuple(() => [AccountId32, sts.option(() => sts.number())])),
        accountCount: sts.number(),
    }
})

export const AssetIdWithEth: sts.Type<AssetIdWithEth> = sts.struct(() => {
    return {
        ethereumCollectionId: sts.bigint(),
        collectionId: sts.bigint(),
        tokenId: sts.bigint(),
    }
})

export const H160 = sts.bytes()

/**
 * The `Event` enum of this pallet
 */
export const MessageQueueEvent: sts.Type<MessageQueueEvent> = sts.closedEnum(() => {
    return {
        OverweightEnqueued: sts.enumStruct({
            id: sts.bytes(),
            origin: AggregateMessageOrigin,
            pageIndex: sts.number(),
            messageIndex: sts.number(),
        }),
        PageReaped: sts.enumStruct({
            origin: AggregateMessageOrigin,
            index: sts.number(),
        }),
        Processed: sts.enumStruct({
            id: sts.bytes(),
            origin: AggregateMessageOrigin,
            weightUsed: Weight,
            success: sts.boolean(),
        }),
        ProcessingFailed: sts.enumStruct({
            id: sts.bytes(),
            origin: AggregateMessageOrigin,
            error: ProcessMessageError,
        }),
    }
})

export const ProcessMessageError: sts.Type<ProcessMessageError> = sts.closedEnum(() => {
    return {
        BadFormat: sts.unit(),
        Corrupt: sts.unit(),
        Overweight: Weight,
        Unsupported: sts.unit(),
        Yield: sts.unit(),
    }
})

export const AggregateMessageOrigin: sts.Type<AggregateMessageOrigin> = sts.closedEnum(() => {
    return {
        Ump: UmpQueueId,
    }
})

export const UmpQueueId: sts.Type<UmpQueueId> = sts.closedEnum(() => {
    return {
        Para: Id,
    }
})

/**
 * The Event for this pallet
 */
export const MarketplaceEvent: sts.Type<MarketplaceEvent> = sts.closedEnum(() => {
    return {
        AuctionFinalized: sts.enumStruct({
            listingId: H256,
            winningBid: sts.option(() => Bid),
            protocolFee: sts.bigint(),
            royalty: sts.bigint(),
        }),
        BidPlaced: sts.enumStruct({
            listingId: H256,
            bid: Bid,
        }),
        ListingCancelled: sts.enumStruct({
            listingId: H256,
        }),
        ListingCreated: sts.enumStruct({
            listingId: H256,
            listing: Listing,
        }),
        ListingFilled: sts.enumStruct({
            listingId: H256,
            buyer: AccountId32,
            amountFilled: sts.bigint(),
            amountRemaining: sts.bigint(),
            protocolFee: sts.bigint(),
            royalty: sts.bigint(),
        }),
        ProtocolFeeSet: sts.enumStruct({
            protocolFee: Perbill,
        }),
    }
})

export const Listing: sts.Type<Listing> = sts.struct(() => {
    return {
        seller: AccountId32,
        makeAssetId: AssetId,
        takeAssetId: AssetId,
        amount: sts.bigint(),
        price: sts.bigint(),
        minTakeValue: sts.bigint(),
        feeSide: FeeSide,
        creationBlock: sts.number(),
        deposit: sts.bigint(),
        salt: sts.bytes(),
        data: ListingData,
        state: ListingState,
    }
})

export const ListingState: sts.Type<ListingState> = sts.closedEnum(() => {
    return {
        Auction: AuctionState,
        FixedPrice: sts.enumStruct({
            amountFilled: sts.bigint(),
        }),
    }
})

export const AuctionState: sts.Type<AuctionState> = sts.struct(() => {
    return {
        highBid: sts.option(() => Bid),
    }
})

export const ListingData: sts.Type<ListingData> = sts.closedEnum(() => {
    return {
        Auction: AuctionData,
        FixedPrice: sts.unit(),
    }
})

export const AuctionData: sts.Type<AuctionData> = sts.struct(() => {
    return {
        startBlock: sts.number(),
        endBlock: sts.number(),
    }
})

export const FeeSide: sts.Type<FeeSide> = sts.closedEnum(() => {
    return {
        Make: sts.unit(),
        NoFee: sts.unit(),
        Take: sts.unit(),
    }
})

export const Bid: sts.Type<Bid> = sts.struct(() => {
    return {
        bidder: AccountId32,
        price: sts.bigint(),
    }
})

/**
 * The `Event` enum of this pallet
 */
export const ImOnlineEvent: sts.Type<ImOnlineEvent> = sts.closedEnum(() => {
    return {
        AllGood: sts.unit(),
        HeartbeatReceived: sts.enumStruct({
            authorityId: sts.bytes(),
        }),
        SomeOffline: sts.enumStruct({
            offline: sts.array(() => sts.tuple(() => [AccountId32, Exposure])),
        }),
    }
})

export const Exposure: sts.Type<Exposure> = sts.struct(() => {
    return {
        total: sts.bigint(),
        own: sts.bigint(),
        others: sts.array(() => IndividualExposure),
    }
})

export const IndividualExposure: sts.Type<IndividualExposure> = sts.struct(() => {
    return {
        who: AccountId32,
        value: sts.bigint(),
    }
})

/**
 * The `Event` enum of this pallet
 */
export const IdentityEvent: sts.Type<IdentityEvent> = sts.closedEnum(() => {
    return {
        IdentityCleared: sts.enumStruct({
            who: AccountId32,
            deposit: sts.bigint(),
        }),
        IdentityKilled: sts.enumStruct({
            who: AccountId32,
            deposit: sts.bigint(),
        }),
        IdentitySet: sts.enumStruct({
            who: AccountId32,
        }),
        JudgementGiven: sts.enumStruct({
            target: AccountId32,
            registrarIndex: sts.number(),
        }),
        JudgementRequested: sts.enumStruct({
            who: AccountId32,
            registrarIndex: sts.number(),
        }),
        JudgementUnrequested: sts.enumStruct({
            who: AccountId32,
            registrarIndex: sts.number(),
        }),
        RegistrarAdded: sts.enumStruct({
            registrarIndex: sts.number(),
        }),
        SubIdentityAdded: sts.enumStruct({
            sub: AccountId32,
            main: AccountId32,
            deposit: sts.bigint(),
        }),
        SubIdentityRemoved: sts.enumStruct({
            sub: AccountId32,
            main: AccountId32,
            deposit: sts.bigint(),
        }),
        SubIdentityRevoked: sts.enumStruct({
            sub: AccountId32,
            main: AccountId32,
            deposit: sts.bigint(),
        }),
    }
})

/**
 * The `Event` enum of this pallet
 */
export const HrmpEvent: sts.Type<HrmpEvent> = sts.closedEnum(() => {
    return {
        ChannelClosed: sts.tuple(() => [Id, HrmpChannelId]),
        HrmpChannelForceOpened: sts.tuple(() => [Id, Id, sts.number(), sts.number()]),
        OpenChannelAccepted: sts.tuple(() => [Id, Id]),
        OpenChannelCanceled: sts.tuple(() => [Id, HrmpChannelId]),
        OpenChannelRequested: sts.tuple(() => [Id, Id, sts.number(), sts.number()]),
    }
})

export const HrmpChannelId: sts.Type<HrmpChannelId> = sts.struct(() => {
    return {
        sender: Id,
        recipient: Id,
    }
})

/**
 * The `Event` enum of this pallet
 */
export const GrandpaEvent: sts.Type<GrandpaEvent> = sts.closedEnum(() => {
    return {
        NewAuthorities: sts.enumStruct({
            authoritySet: sts.array(() => sts.tuple(() => [Public, sts.bigint()])),
        }),
        Paused: sts.unit(),
        Resumed: sts.unit(),
    }
})

export const Public = sts.bytes()

/**
 * The `Event` enum of this pallet
 */
export const FuelTanksEvent: sts.Type<FuelTanksEvent> = sts.closedEnum(() => {
    return {
        AccountAdded: sts.enumStruct({
            tankId: AccountId32,
            userId: AccountId32,
            tankDeposit: sts.bigint(),
            userDeposit: sts.bigint(),
            totalReceived: sts.bigint(),
        }),
        AccountRemoved: sts.enumStruct({
            tankId: AccountId32,
            userId: AccountId32,
        }),
        AccountRuleDataRemoved: sts.enumStruct({
            tankId: AccountId32,
            userId: AccountId32,
            ruleSetId: sts.number(),
            ruleKind: DispatchRuleKind,
        }),
        CallDispatched: sts.enumStruct({
            caller: AccountId32,
            tankId: AccountId32,
        }),
        ConsumptionSet: sts.enumStruct({
            tankId: AccountId32,
            userId: sts.option(() => AccountId32),
            ruleSetId: sts.number(),
            consumption: Consumption,
        }),
        DispatchFailed: sts.enumStruct({
            tankId: AccountId32,
            caller: AccountId32,
            error: DispatchError,
        }),
        FreezeStateMutated: sts.enumStruct({
            tankId: AccountId32,
            ruleSetId: sts.option(() => sts.number()),
            isFrozen: sts.boolean(),
        }),
        FuelTankCreated: sts.enumStruct({
            owner: AccountId32,
            name: sts.bytes(),
            tankId: AccountId32,
        }),
        FuelTankDestroyed: sts.enumStruct({
            tankId: AccountId32,
        }),
        FuelTankMutated: sts.enumStruct({
            tankId: AccountId32,
            mutation: DefaultTankMutation,
        }),
        RuleSetInserted: sts.enumStruct({
            tankId: AccountId32,
            ruleSetId: sts.number(),
        }),
        RuleSetRemoved: sts.enumStruct({
            tankId: AccountId32,
            ruleSetId: sts.number(),
        }),
    }
})

export const DefaultTankMutation: sts.Type<DefaultTankMutation> = sts.struct(() => {
    return {
        userAccountManagement: Type_257,
        providesDeposit: sts.option(() => sts.boolean()),
        accountRules: sts.option(() => sts.array(() => AccountRuleDescriptor)),
    }
})

export const AccountRuleDescriptor: sts.Type<AccountRuleDescriptor> = sts.closedEnum(() => {
    return {
        RequireToken: RequireTokenRule,
        WhitelistedCallers: sts.array(() => AccountId32),
    }
})

export const RequireTokenRule: sts.Type<RequireTokenRule> = sts.struct(() => {
    return {
        collectionId: sts.bigint(),
        tokenId: sts.bigint(),
    }
})

export const Type_257: sts.Type<Type_257> = sts.closedEnum(() => {
    return {
        NoMutation: sts.unit(),
        SomeMutation: sts.option(() => UserAccountManagement),
    }
})

export const UserAccountManagement: sts.Type<UserAccountManagement> = sts.struct(() => {
    return {
        tankReservesExistentialDeposit: sts.boolean(),
        tankReservesAccountCreationDeposit: sts.boolean(),
    }
})

export const Consumption: sts.Type<Consumption> = sts.struct(() => {
    return {
        totalConsumed: sts.bigint(),
        lastResetBlock: sts.option(() => sts.number()),
    }
})

export const DispatchRuleKind: sts.Type<DispatchRuleKind> = sts.closedEnum(() => {
    return {
        MaxFuelBurnPerTransaction: sts.unit(),
        PermittedCalls: sts.unit(),
        PermittedExtrinsics: sts.unit(),
        RequireToken: sts.unit(),
        TankFuelBudget: sts.unit(),
        UserFuelBudget: sts.unit(),
        WhitelistedCallers: sts.unit(),
        WhitelistedCollections: sts.unit(),
        WhitelistedPallets: sts.unit(),
    }
})

/**
 * The `Event` enum of this pallet
 */
export const FellowshipReferendaEvent: sts.Type<FellowshipReferendaEvent> = sts.closedEnum(() => {
    return {
        Approved: sts.enumStruct({
            index: sts.number(),
        }),
        Cancelled: sts.enumStruct({
            index: sts.number(),
            tally: Type_644,
        }),
        ConfirmAborted: sts.enumStruct({
            index: sts.number(),
        }),
        ConfirmStarted: sts.enumStruct({
            index: sts.number(),
        }),
        Confirmed: sts.enumStruct({
            index: sts.number(),
            tally: Type_644,
        }),
        DecisionDepositPlaced: sts.enumStruct({
            index: sts.number(),
            who: AccountId32,
            amount: sts.bigint(),
        }),
        DecisionDepositRefunded: sts.enumStruct({
            index: sts.number(),
            who: AccountId32,
            amount: sts.bigint(),
        }),
        DecisionStarted: sts.enumStruct({
            index: sts.number(),
            track: sts.number(),
            proposal: Bounded,
            tally: Type_644,
        }),
        DepositSlashed: sts.enumStruct({
            who: AccountId32,
            amount: sts.bigint(),
        }),
        Killed: sts.enumStruct({
            index: sts.number(),
            tally: Type_644,
        }),
        MetadataCleared: sts.enumStruct({
            index: sts.number(),
            hash: H256,
        }),
        MetadataSet: sts.enumStruct({
            index: sts.number(),
            hash: H256,
        }),
        Rejected: sts.enumStruct({
            index: sts.number(),
            tally: Type_644,
        }),
        SubmissionDepositRefunded: sts.enumStruct({
            index: sts.number(),
            who: AccountId32,
            amount: sts.bigint(),
        }),
        Submitted: sts.enumStruct({
            index: sts.number(),
            track: sts.number(),
            proposal: Bounded,
        }),
        TimedOut: sts.enumStruct({
            index: sts.number(),
            tally: Type_644,
        }),
    }
})

export const Type_644: sts.Type<Type_644> = sts.struct(() => {
    return {
        bareAyes: sts.number(),
        ayes: sts.number(),
        nays: sts.number(),
    }
})

/**
 * The `Event` enum of this pallet
 */
export const FellowshipCollectiveEvent: sts.Type<FellowshipCollectiveEvent> = sts.closedEnum(() => {
    return {
        MemberAdded: sts.enumStruct({
            who: AccountId32,
        }),
        MemberRemoved: sts.enumStruct({
            who: AccountId32,
            rank: sts.number(),
        }),
        RankChanged: sts.enumStruct({
            who: AccountId32,
            rank: sts.number(),
        }),
        Voted: sts.enumStruct({
            who: AccountId32,
            poll: sts.number(),
            vote: VoteRecord,
            tally: Type_644,
        }),
    }
})

export const VoteRecord: sts.Type<VoteRecord> = sts.closedEnum(() => {
    return {
        Aye: sts.number(),
        Nay: sts.number(),
    }
})

/**
 * The pallet's event type.
 */
export const ExtrinsicPauseEvent: sts.Type<ExtrinsicPauseEvent> = sts.closedEnum(() => {
    return {
        ExtrinsicPaused: sts.enumStruct({
            palletName: sts.bytes(),
            extrinsicName: sts.bytes(),
        }),
        ExtrinsicResumed: sts.enumStruct({
            palletName: sts.bytes(),
            extrinsicName: sts.bytes(),
        }),
        PalletPaused: sts.enumStruct({
            palletName: sts.bytes(),
        }),
        PalletResumed: sts.enumStruct({
            palletName: sts.bytes(),
        }),
    }
})

/**
 * The `Event` enum of this pallet
 */
export const ElectionProviderMultiPhaseEvent: sts.Type<ElectionProviderMultiPhaseEvent> = sts.closedEnum(() => {
    return {
        ElectionFailed: sts.unit(),
        ElectionFinalized: sts.enumStruct({
            compute: ElectionCompute,
            score: ElectionScore,
        }),
        PhaseTransitioned: sts.enumStruct({
            from: Phase,
            to: Phase,
            round: sts.number(),
        }),
        Rewarded: sts.enumStruct({
            account: AccountId32,
            value: sts.bigint(),
        }),
        Slashed: sts.enumStruct({
            account: AccountId32,
            value: sts.bigint(),
        }),
        SolutionStored: sts.enumStruct({
            compute: ElectionCompute,
            origin: sts.option(() => AccountId32),
            prevEjected: sts.boolean(),
        }),
    }
})

export const Phase: sts.Type<Phase> = sts.closedEnum(() => {
    return {
        Emergency: sts.unit(),
        Off: sts.unit(),
        Signed: sts.unit(),
        Unsigned: sts.tuple(() => [sts.boolean(), sts.number()]),
    }
})

export const ElectionScore: sts.Type<ElectionScore> = sts.struct(() => {
    return {
        minimalStake: sts.bigint(),
        sumStake: sts.bigint(),
        sumStakeSquared: sts.bigint(),
    }
})

export const ElectionCompute: sts.Type<ElectionCompute> = sts.closedEnum(() => {
    return {
        Emergency: sts.unit(),
        Fallback: sts.unit(),
        OnChain: sts.unit(),
        Signed: sts.unit(),
        Unsigned: sts.unit(),
    }
})

/**
 * The `Event` enum of this pallet
 */
export const CrowdloanEvent: sts.Type<CrowdloanEvent> = sts.closedEnum(() => {
    return {
        AddedToNewRaise: sts.enumStruct({
            paraId: Id,
        }),
        AllRefunded: sts.enumStruct({
            paraId: Id,
        }),
        Contributed: sts.enumStruct({
            who: AccountId32,
            fundIndex: Id,
            amount: sts.bigint(),
        }),
        Created: sts.enumStruct({
            paraId: Id,
        }),
        Dissolved: sts.enumStruct({
            paraId: Id,
        }),
        Edited: sts.enumStruct({
            paraId: Id,
        }),
        HandleBidResult: sts.enumStruct({
            paraId: Id,
            result: sts.result(
                () => sts.unit(),
                () => DispatchError
            ),
        }),
        MemoUpdated: sts.enumStruct({
            who: AccountId32,
            paraId: Id,
            memo: sts.bytes(),
        }),
        PartiallyRefunded: sts.enumStruct({
            paraId: Id,
        }),
        Withdrew: sts.enumStruct({
            who: AccountId32,
            fundIndex: Id,
            amount: sts.bigint(),
        }),
    }
})

/**
 * The `Event` enum of this pallet
 */
export const ConvictionVotingEvent: sts.Type<ConvictionVotingEvent> = sts.closedEnum(() => {
    return {
        Delegated: sts.tuple(() => [AccountId32, AccountId32]),
        Undelegated: AccountId32,
    }
})

/**
 * The `Event` enum of this pallet
 */
export const BalancesEvent: sts.Type<BalancesEvent> = sts.closedEnum(() => {
    return {
        BalanceSet: sts.enumStruct({
            who: AccountId32,
            free: sts.bigint(),
        }),
        Burned: sts.enumStruct({
            who: AccountId32,
            amount: sts.bigint(),
        }),
        Deposit: sts.enumStruct({
            who: AccountId32,
            amount: sts.bigint(),
        }),
        DustLost: sts.enumStruct({
            account: AccountId32,
            amount: sts.bigint(),
        }),
        Endowed: sts.enumStruct({
            account: AccountId32,
            freeBalance: sts.bigint(),
        }),
        Frozen: sts.enumStruct({
            who: AccountId32,
            amount: sts.bigint(),
        }),
        Issued: sts.enumStruct({
            amount: sts.bigint(),
        }),
        Locked: sts.enumStruct({
            who: AccountId32,
            amount: sts.bigint(),
        }),
        Minted: sts.enumStruct({
            who: AccountId32,
            amount: sts.bigint(),
        }),
        Rescinded: sts.enumStruct({
            amount: sts.bigint(),
        }),
        ReserveRepatriated: sts.enumStruct({
            from: AccountId32,
            to: AccountId32,
            amount: sts.bigint(),
            destinationStatus: BalanceStatus,
        }),
        Reserved: sts.enumStruct({
            who: AccountId32,
            amount: sts.bigint(),
        }),
        Restored: sts.enumStruct({
            who: AccountId32,
            amount: sts.bigint(),
        }),
        Slashed: sts.enumStruct({
            who: AccountId32,
            amount: sts.bigint(),
        }),
        Suspended: sts.enumStruct({
            who: AccountId32,
            amount: sts.bigint(),
        }),
        Thawed: sts.enumStruct({
            who: AccountId32,
            amount: sts.bigint(),
        }),
        Transfer: sts.enumStruct({
            from: AccountId32,
            to: AccountId32,
            amount: sts.bigint(),
        }),
        Unlocked: sts.enumStruct({
            who: AccountId32,
            amount: sts.bigint(),
        }),
        Unreserved: sts.enumStruct({
            who: AccountId32,
            amount: sts.bigint(),
        }),
        Upgraded: sts.enumStruct({
            who: AccountId32,
        }),
        Withdraw: sts.enumStruct({
            who: AccountId32,
            amount: sts.bigint(),
        }),
    }
})

export const BalanceStatus: sts.Type<BalanceStatus> = sts.closedEnum(() => {
    return {
        Free: sts.unit(),
        Reserved: sts.unit(),
    }
})

/**
 * The `Event` enum of this pallet
 */
export const AuctionsEvent: sts.Type<AuctionsEvent> = sts.closedEnum(() => {
    return {
        AuctionClosed: sts.enumStruct({
            auctionIndex: sts.number(),
        }),
        AuctionStarted: sts.enumStruct({
            auctionIndex: sts.number(),
            leasePeriod: sts.number(),
            ending: sts.number(),
        }),
        BidAccepted: sts.enumStruct({
            bidder: AccountId32,
            paraId: Id,
            amount: sts.bigint(),
            firstSlot: sts.number(),
            lastSlot: sts.number(),
        }),
        ReserveConfiscated: sts.enumStruct({
            paraId: Id,
            leaser: AccountId32,
            amount: sts.bigint(),
        }),
        Reserved: sts.enumStruct({
            bidder: AccountId32,
            extraReserved: sts.bigint(),
            totalAmount: sts.bigint(),
        }),
        Unreserved: sts.enumStruct({
            bidder: AccountId32,
            amount: sts.bigint(),
        }),
        WinningOffset: sts.enumStruct({
            auctionIndex: sts.number(),
            blockNumber: sts.number(),
        }),
    }
})

/**
 * The `Event` enum of this pallet
 */
export const AssignedSlotsEvent: sts.Type<AssignedSlotsEvent> = sts.closedEnum(() => {
    return {
        PermanentSlotAssigned: Id,
        TemporarySlotAssigned: Id,
    }
})

export const Type_648: sts.Type<Type_648> = sts.closedEnum(() => {
    return {
        ApplyExtrinsic: sts.number(),
        Finalization: sts.unit(),
        Initialization: sts.unit(),
    }
})

export const Heartbeat: sts.Type<Heartbeat> = sts.struct(() => {
    return {
        blockNumber: sts.number(),
        sessionIndex: sts.number(),
        authorityIndex: sts.number(),
        validatorsLen: sts.number(),
    }
})

export interface Heartbeat {
    blockNumber: number
    sessionIndex: number
    authorityIndex: number
    validatorsLen: number
}

export const DispatchRuleDescriptor: sts.Type<DispatchRuleDescriptor> = sts.closedEnum(() => {
    return {
        MaxFuelBurnPerTransaction: MaxFuelBurnPerTransactionRule,
        PermittedCalls: sts.array(() => sts.bytes()),
        PermittedExtrinsics: sts.array(() => Call),
        RequireToken: RequireTokenRule,
        TankFuelBudget: TankFuelBudgetRuleDescriptor,
        UserFuelBudget: UserFuelBudgetRuleDescriptor,
        WhitelistedCallers: sts.array(() => AccountId32),
        WhitelistedCollections: sts.array(() => sts.bigint()),
        WhitelistedPallets: sts.array(() => Call),
    }
})

export const UserFuelBudgetRuleDescriptor: sts.Type<UserFuelBudgetRuleDescriptor> = sts.struct(() => {
    return {
        amount: sts.bigint(),
        resetPeriod: sts.number(),
    }
})

export interface UserFuelBudgetRuleDescriptor {
    amount: bigint
    resetPeriod: number
}

export const TankFuelBudgetRuleDescriptor: sts.Type<TankFuelBudgetRuleDescriptor> = sts.struct(() => {
    return {
        amount: sts.bigint(),
        resetPeriod: sts.number(),
    }
})

export interface TankFuelBudgetRuleDescriptor {
    amount: bigint
    resetPeriod: number
}

export const MaxFuelBurnPerTransactionRule = sts.bigint()

export type DispatchRuleDescriptor =
    | DispatchRuleDescriptor_MaxFuelBurnPerTransaction
    | DispatchRuleDescriptor_PermittedCalls
    | DispatchRuleDescriptor_PermittedExtrinsics
    | DispatchRuleDescriptor_RequireToken
    | DispatchRuleDescriptor_TankFuelBudget
    | DispatchRuleDescriptor_UserFuelBudget
    | DispatchRuleDescriptor_WhitelistedCallers
    | DispatchRuleDescriptor_WhitelistedCollections
    | DispatchRuleDescriptor_WhitelistedPallets

export interface DispatchRuleDescriptor_MaxFuelBurnPerTransaction {
    __kind: 'MaxFuelBurnPerTransaction'
    value: MaxFuelBurnPerTransactionRule
}

export interface DispatchRuleDescriptor_PermittedCalls {
    __kind: 'PermittedCalls'
    value: Bytes[]
}

export interface DispatchRuleDescriptor_PermittedExtrinsics {
    __kind: 'PermittedExtrinsics'
    value: Call[]
}

export interface DispatchRuleDescriptor_RequireToken {
    __kind: 'RequireToken'
    value: RequireTokenRule
}

export interface DispatchRuleDescriptor_TankFuelBudget {
    __kind: 'TankFuelBudget'
    value: TankFuelBudgetRuleDescriptor
}

export interface DispatchRuleDescriptor_UserFuelBudget {
    __kind: 'UserFuelBudget'
    value: UserFuelBudgetRuleDescriptor
}

export interface DispatchRuleDescriptor_WhitelistedCallers {
    __kind: 'WhitelistedCallers'
    value: AccountId32[]
}

export interface DispatchRuleDescriptor_WhitelistedCollections {
    __kind: 'WhitelistedCollections'
    value: bigint[]
}

export interface DispatchRuleDescriptor_WhitelistedPallets {
    __kind: 'WhitelistedPallets'
    value: Call[]
}

export type Call =
    | Call_AssignedSlots
    | Call_Auctions
    | Call_Babe
    | Call_Balances
    | Call_Beefy
    | Call_Configuration
    | Call_ConvictionVoting
    | Call_Crowdloan
    | Call_ElectionProviderMultiPhase
    | Call_ExtrinsicPause
    | Call_FellowshipCollective
    | Call_FellowshipReferenda
    | Call_FuelTanks
    | Call_Grandpa
    | Call_Hrmp
    | Call_Identity
    | Call_ImOnline
    | Call_Initializer
    | Call_Marketplace
    | Call_MessageQueue
    | Call_MultiTokens
    | Call_Multisig
    | Call_NominationPools
    | Call_ParaInclusion
    | Call_ParaInherent
    | Call_Paras
    | Call_ParasDisputes
    | Call_ParasShared
    | Call_ParasSlashing
    | Call_ParasSudoWrapper
    | Call_Preimage
    | Call_Referenda
    | Call_Registrar
    | Call_Scheduler
    | Call_Session
    | Call_Slots
    | Call_StakeExchange
    | Call_Staking
    | Call_Sudo
    | Call_System
    | Call_Timestamp
    | Call_Treasury
    | Call_Utility
    | Call_ValidatorManager
    | Call_VoteManager
    | Call_VoterList
    | Call_Whitelist
    | Call_XcmPallet

export interface Call_AssignedSlots {
    __kind: 'AssignedSlots'
    value: AssignedSlotsCall
}

export interface Call_Auctions {
    __kind: 'Auctions'
    value: AuctionsCall
}

export interface Call_Babe {
    __kind: 'Babe'
    value: BabeCall
}

export interface Call_Balances {
    __kind: 'Balances'
    value: BalancesCall
}

export interface Call_Beefy {
    __kind: 'Beefy'
    value: BeefyCall
}

export interface Call_Configuration {
    __kind: 'Configuration'
    value: ConfigurationCall
}

export interface Call_ConvictionVoting {
    __kind: 'ConvictionVoting'
    value: ConvictionVotingCall
}

export interface Call_Crowdloan {
    __kind: 'Crowdloan'
    value: CrowdloanCall
}

export interface Call_ElectionProviderMultiPhase {
    __kind: 'ElectionProviderMultiPhase'
    value: ElectionProviderMultiPhaseCall
}

export interface Call_ExtrinsicPause {
    __kind: 'ExtrinsicPause'
    value: ExtrinsicPauseCall
}

export interface Call_FellowshipCollective {
    __kind: 'FellowshipCollective'
    value: FellowshipCollectiveCall
}

export interface Call_FellowshipReferenda {
    __kind: 'FellowshipReferenda'
    value: FellowshipReferendaCall
}

export interface Call_FuelTanks {
    __kind: 'FuelTanks'
    value: FuelTanksCall
}

export interface Call_Grandpa {
    __kind: 'Grandpa'
    value: GrandpaCall
}

export interface Call_Hrmp {
    __kind: 'Hrmp'
    value: HrmpCall
}

export interface Call_Identity {
    __kind: 'Identity'
    value: IdentityCall
}

export interface Call_ImOnline {
    __kind: 'ImOnline'
    value: ImOnlineCall
}

export interface Call_Initializer {
    __kind: 'Initializer'
    value: InitializerCall
}

export interface Call_Marketplace {
    __kind: 'Marketplace'
    value: MarketplaceCall
}

export interface Call_MessageQueue {
    __kind: 'MessageQueue'
    value: MessageQueueCall
}

export interface Call_MultiTokens {
    __kind: 'MultiTokens'
    value: MultiTokensCall
}

export interface Call_Multisig {
    __kind: 'Multisig'
    value: MultisigCall
}

export interface Call_NominationPools {
    __kind: 'NominationPools'
    value: NominationPoolsCall
}

export interface Call_ParaInclusion {
    __kind: 'ParaInclusion'
    value: ParaInclusionCall
}

export interface Call_ParaInherent {
    __kind: 'ParaInherent'
    value: ParaInherentCall
}

export interface Call_Paras {
    __kind: 'Paras'
    value: ParasCall
}

export interface Call_ParasDisputes {
    __kind: 'ParasDisputes'
    value: ParasDisputesCall
}

export interface Call_ParasShared {
    __kind: 'ParasShared'
    value: ParasSharedCall
}

export interface Call_ParasSlashing {
    __kind: 'ParasSlashing'
    value: ParasSlashingCall
}

export interface Call_ParasSudoWrapper {
    __kind: 'ParasSudoWrapper'
    value: ParasSudoWrapperCall
}

export interface Call_Preimage {
    __kind: 'Preimage'
    value: PreimageCall
}

export interface Call_Referenda {
    __kind: 'Referenda'
    value: ReferendaCall
}

export interface Call_Registrar {
    __kind: 'Registrar'
    value: RegistrarCall
}

export interface Call_Scheduler {
    __kind: 'Scheduler'
    value: SchedulerCall
}

export interface Call_Session {
    __kind: 'Session'
    value: SessionCall
}

export interface Call_Slots {
    __kind: 'Slots'
    value: SlotsCall
}

export interface Call_StakeExchange {
    __kind: 'StakeExchange'
    value: StakeExchangeCall
}

export interface Call_Staking {
    __kind: 'Staking'
    value: StakingCall
}

export interface Call_Sudo {
    __kind: 'Sudo'
    value: SudoCall
}

export interface Call_System {
    __kind: 'System'
    value: SystemCall
}

export interface Call_Timestamp {
    __kind: 'Timestamp'
    value: TimestampCall
}

export interface Call_Treasury {
    __kind: 'Treasury'
    value: TreasuryCall
}

export interface Call_Utility {
    __kind: 'Utility'
    value: UtilityCall
}

export interface Call_ValidatorManager {
    __kind: 'ValidatorManager'
    value: ValidatorManagerCall
}

export interface Call_VoteManager {
    __kind: 'VoteManager'
    value: VoteManagerCall
}

export interface Call_VoterList {
    __kind: 'VoterList'
    value: VoterListCall
}

export interface Call_Whitelist {
    __kind: 'Whitelist'
    value: WhitelistCall
}

export interface Call_XcmPallet {
    __kind: 'XcmPallet'
    value: XcmPalletCall
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type XcmPalletCall =
    | XcmPalletCall_execute
    | XcmPalletCall_force_default_xcm_version
    | XcmPalletCall_force_subscribe_version_notify
    | XcmPalletCall_force_suspension
    | XcmPalletCall_force_unsubscribe_version_notify
    | XcmPalletCall_force_xcm_version
    | XcmPalletCall_limited_reserve_transfer_assets
    | XcmPalletCall_limited_teleport_assets
    | XcmPalletCall_reserve_transfer_assets
    | XcmPalletCall_send
    | XcmPalletCall_teleport_assets

/**
 * See [`Pallet::execute`].
 */
export interface XcmPalletCall_execute {
    __kind: 'execute'
    message: Type_492
    maxWeight: Weight
}

/**
 * See [`Pallet::force_default_xcm_version`].
 */
export interface XcmPalletCall_force_default_xcm_version {
    __kind: 'force_default_xcm_version'
    maybeXcmVersion?: number | undefined
}

/**
 * See [`Pallet::force_subscribe_version_notify`].
 */
export interface XcmPalletCall_force_subscribe_version_notify {
    __kind: 'force_subscribe_version_notify'
    location: VersionedMultiLocation
}

/**
 * See [`Pallet::force_suspension`].
 */
export interface XcmPalletCall_force_suspension {
    __kind: 'force_suspension'
    suspended: boolean
}

/**
 * See [`Pallet::force_unsubscribe_version_notify`].
 */
export interface XcmPalletCall_force_unsubscribe_version_notify {
    __kind: 'force_unsubscribe_version_notify'
    location: VersionedMultiLocation
}

/**
 * See [`Pallet::force_xcm_version`].
 */
export interface XcmPalletCall_force_xcm_version {
    __kind: 'force_xcm_version'
    location: V3MultiLocation
    version: number
}

/**
 * See [`Pallet::limited_reserve_transfer_assets`].
 */
export interface XcmPalletCall_limited_reserve_transfer_assets {
    __kind: 'limited_reserve_transfer_assets'
    dest: VersionedMultiLocation
    beneficiary: VersionedMultiLocation
    assets: VersionedMultiAssets
    feeAssetItem: number
    weightLimit: V3WeightLimit
}

/**
 * See [`Pallet::limited_teleport_assets`].
 */
export interface XcmPalletCall_limited_teleport_assets {
    __kind: 'limited_teleport_assets'
    dest: VersionedMultiLocation
    beneficiary: VersionedMultiLocation
    assets: VersionedMultiAssets
    feeAssetItem: number
    weightLimit: V3WeightLimit
}

/**
 * See [`Pallet::reserve_transfer_assets`].
 */
export interface XcmPalletCall_reserve_transfer_assets {
    __kind: 'reserve_transfer_assets'
    dest: VersionedMultiLocation
    beneficiary: VersionedMultiLocation
    assets: VersionedMultiAssets
    feeAssetItem: number
}

/**
 * See [`Pallet::send`].
 */
export interface XcmPalletCall_send {
    __kind: 'send'
    dest: VersionedMultiLocation
    message: VersionedXcm
}

/**
 * See [`Pallet::teleport_assets`].
 */
export interface XcmPalletCall_teleport_assets {
    __kind: 'teleport_assets'
    dest: VersionedMultiLocation
    beneficiary: VersionedMultiLocation
    assets: VersionedMultiAssets
    feeAssetItem: number
}

export type VersionedXcm = VersionedXcm_V2 | VersionedXcm_V3

export interface VersionedXcm_V2 {
    __kind: 'V2'
    value: V2Instruction[]
}

export interface VersionedXcm_V3 {
    __kind: 'V3'
    value: V3Instruction[]
}

export type V2Instruction =
    | V2Instruction_BuyExecution
    | V2Instruction_ClaimAsset
    | V2Instruction_ClearError
    | V2Instruction_ClearOrigin
    | V2Instruction_DepositAsset
    | V2Instruction_DepositReserveAsset
    | V2Instruction_DescendOrigin
    | V2Instruction_ExchangeAsset
    | V2Instruction_HrmpChannelAccepted
    | V2Instruction_HrmpChannelClosing
    | V2Instruction_HrmpNewChannelOpenRequest
    | V2Instruction_InitiateReserveWithdraw
    | V2Instruction_InitiateTeleport
    | V2Instruction_QueryHolding
    | V2Instruction_QueryResponse
    | V2Instruction_ReceiveTeleportedAsset
    | V2Instruction_RefundSurplus
    | V2Instruction_ReportError
    | V2Instruction_ReserveAssetDeposited
    | V2Instruction_SetAppendix
    | V2Instruction_SetErrorHandler
    | V2Instruction_SubscribeVersion
    | V2Instruction_Transact
    | V2Instruction_TransferAsset
    | V2Instruction_TransferReserveAsset
    | V2Instruction_Trap
    | V2Instruction_UnsubscribeVersion
    | V2Instruction_WithdrawAsset

export interface V2Instruction_BuyExecution {
    __kind: 'BuyExecution'
    fees: V2MultiAsset
    weightLimit: V2WeightLimit
}

export interface V2Instruction_ClaimAsset {
    __kind: 'ClaimAsset'
    assets: V2MultiAsset[]
    ticket: V2MultiLocation
}

export interface V2Instruction_ClearError {
    __kind: 'ClearError'
}

export interface V2Instruction_ClearOrigin {
    __kind: 'ClearOrigin'
}

export interface V2Instruction_DepositAsset {
    __kind: 'DepositAsset'
    assets: V2MultiAssetFilter
    maxAssets: number
    beneficiary: V2MultiLocation
}

export interface V2Instruction_DepositReserveAsset {
    __kind: 'DepositReserveAsset'
    assets: V2MultiAssetFilter
    maxAssets: number
    dest: V2MultiLocation
    xcm: V2Instruction[]
}

export interface V2Instruction_DescendOrigin {
    __kind: 'DescendOrigin'
    value: V2Junctions
}

export interface V2Instruction_ExchangeAsset {
    __kind: 'ExchangeAsset'
    give: V2MultiAssetFilter
    receive: V2MultiAsset[]
}

export interface V2Instruction_HrmpChannelAccepted {
    __kind: 'HrmpChannelAccepted'
    recipient: number
}

export interface V2Instruction_HrmpChannelClosing {
    __kind: 'HrmpChannelClosing'
    initiator: number
    sender: number
    recipient: number
}

export interface V2Instruction_HrmpNewChannelOpenRequest {
    __kind: 'HrmpNewChannelOpenRequest'
    sender: number
    maxMessageSize: number
    maxCapacity: number
}

export interface V2Instruction_InitiateReserveWithdraw {
    __kind: 'InitiateReserveWithdraw'
    assets: V2MultiAssetFilter
    reserve: V2MultiLocation
    xcm: V2Instruction[]
}

export interface V2Instruction_InitiateTeleport {
    __kind: 'InitiateTeleport'
    assets: V2MultiAssetFilter
    dest: V2MultiLocation
    xcm: V2Instruction[]
}

export interface V2Instruction_QueryHolding {
    __kind: 'QueryHolding'
    queryId: bigint
    dest: V2MultiLocation
    assets: V2MultiAssetFilter
    maxResponseWeight: bigint
}

export interface V2Instruction_QueryResponse {
    __kind: 'QueryResponse'
    queryId: bigint
    response: V2Response
    maxWeight: bigint
}

export interface V2Instruction_ReceiveTeleportedAsset {
    __kind: 'ReceiveTeleportedAsset'
    value: V2MultiAsset[]
}

export interface V2Instruction_RefundSurplus {
    __kind: 'RefundSurplus'
}

export interface V2Instruction_ReportError {
    __kind: 'ReportError'
    queryId: bigint
    dest: V2MultiLocation
    maxResponseWeight: bigint
}

export interface V2Instruction_ReserveAssetDeposited {
    __kind: 'ReserveAssetDeposited'
    value: V2MultiAsset[]
}

export interface V2Instruction_SetAppendix {
    __kind: 'SetAppendix'
    value: V2Instruction[]
}

export interface V2Instruction_SetErrorHandler {
    __kind: 'SetErrorHandler'
    value: V2Instruction[]
}

export interface V2Instruction_SubscribeVersion {
    __kind: 'SubscribeVersion'
    queryId: bigint
    maxResponseWeight: bigint
}

export interface V2Instruction_Transact {
    __kind: 'Transact'
    originType: V2OriginKind
    requireWeightAtMost: bigint
    call: DoubleEncoded
}

export interface V2Instruction_TransferAsset {
    __kind: 'TransferAsset'
    assets: V2MultiAsset[]
    beneficiary: V2MultiLocation
}

export interface V2Instruction_TransferReserveAsset {
    __kind: 'TransferReserveAsset'
    assets: V2MultiAsset[]
    dest: V2MultiLocation
    xcm: V2Instruction[]
}

export interface V2Instruction_Trap {
    __kind: 'Trap'
    value: bigint
}

export interface V2Instruction_UnsubscribeVersion {
    __kind: 'UnsubscribeVersion'
}

export interface V2Instruction_WithdrawAsset {
    __kind: 'WithdrawAsset'
    value: V2MultiAsset[]
}

export type V2Response = V2Response_Assets | V2Response_ExecutionResult | V2Response_Null | V2Response_Version

export interface V2Response_Assets {
    __kind: 'Assets'
    value: V2MultiAsset[]
}

export interface V2Response_ExecutionResult {
    __kind: 'ExecutionResult'
    value?: [number, V2Error] | undefined
}

export interface V2Response_Null {
    __kind: 'Null'
}

export interface V2Response_Version {
    __kind: 'Version'
    value: number
}

export type V2Error =
    | V2Error_AssetNotFound
    | V2Error_BadOrigin
    | V2Error_Barrier
    | V2Error_DestinationUnsupported
    | V2Error_ExceedsMaxMessageSize
    | V2Error_FailedToDecode
    | V2Error_FailedToTransactAsset
    | V2Error_InvalidLocation
    | V2Error_LocationCannotHold
    | V2Error_MaxWeightInvalid
    | V2Error_MultiLocationFull
    | V2Error_MultiLocationNotInvertible
    | V2Error_NotHoldingFees
    | V2Error_NotWithdrawable
    | V2Error_Overflow
    | V2Error_TooExpensive
    | V2Error_Transport
    | V2Error_Trap
    | V2Error_UnhandledXcmVersion
    | V2Error_Unimplemented
    | V2Error_UnknownClaim
    | V2Error_Unroutable
    | V2Error_UntrustedReserveLocation
    | V2Error_UntrustedTeleportLocation
    | V2Error_WeightLimitReached
    | V2Error_WeightNotComputable

export interface V2Error_AssetNotFound {
    __kind: 'AssetNotFound'
}

export interface V2Error_BadOrigin {
    __kind: 'BadOrigin'
}

export interface V2Error_Barrier {
    __kind: 'Barrier'
}

export interface V2Error_DestinationUnsupported {
    __kind: 'DestinationUnsupported'
}

export interface V2Error_ExceedsMaxMessageSize {
    __kind: 'ExceedsMaxMessageSize'
}

export interface V2Error_FailedToDecode {
    __kind: 'FailedToDecode'
}

export interface V2Error_FailedToTransactAsset {
    __kind: 'FailedToTransactAsset'
}

export interface V2Error_InvalidLocation {
    __kind: 'InvalidLocation'
}

export interface V2Error_LocationCannotHold {
    __kind: 'LocationCannotHold'
}

export interface V2Error_MaxWeightInvalid {
    __kind: 'MaxWeightInvalid'
}

export interface V2Error_MultiLocationFull {
    __kind: 'MultiLocationFull'
}

export interface V2Error_MultiLocationNotInvertible {
    __kind: 'MultiLocationNotInvertible'
}

export interface V2Error_NotHoldingFees {
    __kind: 'NotHoldingFees'
}

export interface V2Error_NotWithdrawable {
    __kind: 'NotWithdrawable'
}

export interface V2Error_Overflow {
    __kind: 'Overflow'
}

export interface V2Error_TooExpensive {
    __kind: 'TooExpensive'
}

export interface V2Error_Transport {
    __kind: 'Transport'
}

export interface V2Error_Trap {
    __kind: 'Trap'
    value: bigint
}

export interface V2Error_UnhandledXcmVersion {
    __kind: 'UnhandledXcmVersion'
}

export interface V2Error_Unimplemented {
    __kind: 'Unimplemented'
}

export interface V2Error_UnknownClaim {
    __kind: 'UnknownClaim'
}

export interface V2Error_Unroutable {
    __kind: 'Unroutable'
}

export interface V2Error_UntrustedReserveLocation {
    __kind: 'UntrustedReserveLocation'
}

export interface V2Error_UntrustedTeleportLocation {
    __kind: 'UntrustedTeleportLocation'
}

export interface V2Error_WeightLimitReached {
    __kind: 'WeightLimitReached'
    value: bigint
}

export interface V2Error_WeightNotComputable {
    __kind: 'WeightNotComputable'
}

export type V2MultiAssetFilter = V2MultiAssetFilter_Definite | V2MultiAssetFilter_Wild

export interface V2MultiAssetFilter_Definite {
    __kind: 'Definite'
    value: V2MultiAsset[]
}

export interface V2MultiAssetFilter_Wild {
    __kind: 'Wild'
    value: V2WildMultiAsset
}

export type V2WildMultiAsset = V2WildMultiAsset_All | V2WildMultiAsset_AllOf

export interface V2WildMultiAsset_All {
    __kind: 'All'
}

export interface V2WildMultiAsset_AllOf {
    __kind: 'AllOf'
    id: V2AssetId
    fun: V2WildFungibility
}

export type V2WildFungibility = V2WildFungibility_Fungible | V2WildFungibility_NonFungible

export interface V2WildFungibility_Fungible {
    __kind: 'Fungible'
}

export interface V2WildFungibility_NonFungible {
    __kind: 'NonFungible'
}

export type V2WeightLimit = V2WeightLimit_Limited | V2WeightLimit_Unlimited

export interface V2WeightLimit_Limited {
    __kind: 'Limited'
    value: bigint
}

export interface V2WeightLimit_Unlimited {
    __kind: 'Unlimited'
}

export type Type_492 = Type_492_V2 | Type_492_V3

export interface Type_492_V2 {
    __kind: 'V2'
    value: Type_495[]
}

export interface Type_492_V3 {
    __kind: 'V3'
    value: Type_499[]
}

export type Type_499 =
    | Type_499_AliasOrigin
    | Type_499_BurnAsset
    | Type_499_BuyExecution
    | Type_499_ClaimAsset
    | Type_499_ClearError
    | Type_499_ClearOrigin
    | Type_499_ClearTopic
    | Type_499_ClearTransactStatus
    | Type_499_DepositAsset
    | Type_499_DepositReserveAsset
    | Type_499_DescendOrigin
    | Type_499_ExchangeAsset
    | Type_499_ExpectAsset
    | Type_499_ExpectError
    | Type_499_ExpectOrigin
    | Type_499_ExpectPallet
    | Type_499_ExpectTransactStatus
    | Type_499_ExportMessage
    | Type_499_HrmpChannelAccepted
    | Type_499_HrmpChannelClosing
    | Type_499_HrmpNewChannelOpenRequest
    | Type_499_InitiateReserveWithdraw
    | Type_499_InitiateTeleport
    | Type_499_LockAsset
    | Type_499_NoteUnlockable
    | Type_499_QueryPallet
    | Type_499_QueryResponse
    | Type_499_ReceiveTeleportedAsset
    | Type_499_RefundSurplus
    | Type_499_ReportError
    | Type_499_ReportHolding
    | Type_499_ReportTransactStatus
    | Type_499_RequestUnlock
    | Type_499_ReserveAssetDeposited
    | Type_499_SetAppendix
    | Type_499_SetErrorHandler
    | Type_499_SetFeesMode
    | Type_499_SetTopic
    | Type_499_SubscribeVersion
    | Type_499_Transact
    | Type_499_TransferAsset
    | Type_499_TransferReserveAsset
    | Type_499_Trap
    | Type_499_UniversalOrigin
    | Type_499_UnlockAsset
    | Type_499_UnpaidExecution
    | Type_499_UnsubscribeVersion
    | Type_499_WithdrawAsset

export interface Type_499_AliasOrigin {
    __kind: 'AliasOrigin'
    value: V3MultiLocation
}

export interface Type_499_BurnAsset {
    __kind: 'BurnAsset'
    value: V3MultiAsset[]
}

export interface Type_499_BuyExecution {
    __kind: 'BuyExecution'
    fees: V3MultiAsset
    weightLimit: V3WeightLimit
}

export interface Type_499_ClaimAsset {
    __kind: 'ClaimAsset'
    assets: V3MultiAsset[]
    ticket: V3MultiLocation
}

export interface Type_499_ClearError {
    __kind: 'ClearError'
}

export interface Type_499_ClearOrigin {
    __kind: 'ClearOrigin'
}

export interface Type_499_ClearTopic {
    __kind: 'ClearTopic'
}

export interface Type_499_ClearTransactStatus {
    __kind: 'ClearTransactStatus'
}

export interface Type_499_DepositAsset {
    __kind: 'DepositAsset'
    assets: V3MultiAssetFilter
    beneficiary: V3MultiLocation
}

export interface Type_499_DepositReserveAsset {
    __kind: 'DepositReserveAsset'
    assets: V3MultiAssetFilter
    dest: V3MultiLocation
    xcm: V3Instruction[]
}

export interface Type_499_DescendOrigin {
    __kind: 'DescendOrigin'
    value: V3Junctions
}

export interface Type_499_ExchangeAsset {
    __kind: 'ExchangeAsset'
    give: V3MultiAssetFilter
    want: V3MultiAsset[]
    maximal: boolean
}

export interface Type_499_ExpectAsset {
    __kind: 'ExpectAsset'
    value: V3MultiAsset[]
}

export interface Type_499_ExpectError {
    __kind: 'ExpectError'
    value?: [number, V3Error] | undefined
}

export interface Type_499_ExpectOrigin {
    __kind: 'ExpectOrigin'
    value?: V3MultiLocation | undefined
}

export interface Type_499_ExpectPallet {
    __kind: 'ExpectPallet'
    index: number
    name: Bytes
    moduleName: Bytes
    crateMajor: number
    minCrateMinor: number
}

export interface Type_499_ExpectTransactStatus {
    __kind: 'ExpectTransactStatus'
    value: V3MaybeErrorCode
}

export interface Type_499_ExportMessage {
    __kind: 'ExportMessage'
    network: V3NetworkId
    destination: V3Junctions
    xcm: V3Instruction[]
}

export interface Type_499_HrmpChannelAccepted {
    __kind: 'HrmpChannelAccepted'
    recipient: number
}

export interface Type_499_HrmpChannelClosing {
    __kind: 'HrmpChannelClosing'
    initiator: number
    sender: number
    recipient: number
}

export interface Type_499_HrmpNewChannelOpenRequest {
    __kind: 'HrmpNewChannelOpenRequest'
    sender: number
    maxMessageSize: number
    maxCapacity: number
}

export interface Type_499_InitiateReserveWithdraw {
    __kind: 'InitiateReserveWithdraw'
    assets: V3MultiAssetFilter
    reserve: V3MultiLocation
    xcm: V3Instruction[]
}

export interface Type_499_InitiateTeleport {
    __kind: 'InitiateTeleport'
    assets: V3MultiAssetFilter
    dest: V3MultiLocation
    xcm: V3Instruction[]
}

export interface Type_499_LockAsset {
    __kind: 'LockAsset'
    asset: V3MultiAsset
    unlocker: V3MultiLocation
}

export interface Type_499_NoteUnlockable {
    __kind: 'NoteUnlockable'
    asset: V3MultiAsset
    owner: V3MultiLocation
}

export interface Type_499_QueryPallet {
    __kind: 'QueryPallet'
    moduleName: Bytes
    responseInfo: V3QueryResponseInfo
}

export interface Type_499_QueryResponse {
    __kind: 'QueryResponse'
    queryId: bigint
    response: V3Response
    maxWeight: Weight
    querier?: V3MultiLocation | undefined
}

export interface Type_499_ReceiveTeleportedAsset {
    __kind: 'ReceiveTeleportedAsset'
    value: V3MultiAsset[]
}

export interface Type_499_RefundSurplus {
    __kind: 'RefundSurplus'
}

export interface Type_499_ReportError {
    __kind: 'ReportError'
    value: V3QueryResponseInfo
}

export interface Type_499_ReportHolding {
    __kind: 'ReportHolding'
    responseInfo: V3QueryResponseInfo
    assets: V3MultiAssetFilter
}

export interface Type_499_ReportTransactStatus {
    __kind: 'ReportTransactStatus'
    value: V3QueryResponseInfo
}

export interface Type_499_RequestUnlock {
    __kind: 'RequestUnlock'
    asset: V3MultiAsset
    locker: V3MultiLocation
}

export interface Type_499_ReserveAssetDeposited {
    __kind: 'ReserveAssetDeposited'
    value: V3MultiAsset[]
}

export interface Type_499_SetAppendix {
    __kind: 'SetAppendix'
    value: Type_499[]
}

export interface Type_499_SetErrorHandler {
    __kind: 'SetErrorHandler'
    value: Type_499[]
}

export interface Type_499_SetFeesMode {
    __kind: 'SetFeesMode'
    jitWithdraw: boolean
}

export interface Type_499_SetTopic {
    __kind: 'SetTopic'
    value: Bytes
}

export interface Type_499_SubscribeVersion {
    __kind: 'SubscribeVersion'
    queryId: bigint
    maxResponseWeight: Weight
}

export interface Type_499_Transact {
    __kind: 'Transact'
    originKind: V2OriginKind
    requireWeightAtMost: Weight
    call: Type_496
}

export interface Type_499_TransferAsset {
    __kind: 'TransferAsset'
    assets: V3MultiAsset[]
    beneficiary: V3MultiLocation
}

export interface Type_499_TransferReserveAsset {
    __kind: 'TransferReserveAsset'
    assets: V3MultiAsset[]
    dest: V3MultiLocation
    xcm: V3Instruction[]
}

export interface Type_499_Trap {
    __kind: 'Trap'
    value: bigint
}

export interface Type_499_UniversalOrigin {
    __kind: 'UniversalOrigin'
    value: V3Junction
}

export interface Type_499_UnlockAsset {
    __kind: 'UnlockAsset'
    asset: V3MultiAsset
    target: V3MultiLocation
}

export interface Type_499_UnpaidExecution {
    __kind: 'UnpaidExecution'
    weightLimit: V3WeightLimit
    checkOrigin?: V3MultiLocation | undefined
}

export interface Type_499_UnsubscribeVersion {
    __kind: 'UnsubscribeVersion'
}

export interface Type_499_WithdrawAsset {
    __kind: 'WithdrawAsset'
    value: V3MultiAsset[]
}

export interface Type_496 {
    encoded: Bytes
}

export type Type_495 =
    | Type_495_BuyExecution
    | Type_495_ClaimAsset
    | Type_495_ClearError
    | Type_495_ClearOrigin
    | Type_495_DepositAsset
    | Type_495_DepositReserveAsset
    | Type_495_DescendOrigin
    | Type_495_ExchangeAsset
    | Type_495_HrmpChannelAccepted
    | Type_495_HrmpChannelClosing
    | Type_495_HrmpNewChannelOpenRequest
    | Type_495_InitiateReserveWithdraw
    | Type_495_InitiateTeleport
    | Type_495_QueryHolding
    | Type_495_QueryResponse
    | Type_495_ReceiveTeleportedAsset
    | Type_495_RefundSurplus
    | Type_495_ReportError
    | Type_495_ReserveAssetDeposited
    | Type_495_SetAppendix
    | Type_495_SetErrorHandler
    | Type_495_SubscribeVersion
    | Type_495_Transact
    | Type_495_TransferAsset
    | Type_495_TransferReserveAsset
    | Type_495_Trap
    | Type_495_UnsubscribeVersion
    | Type_495_WithdrawAsset

export interface Type_495_BuyExecution {
    __kind: 'BuyExecution'
    fees: V2MultiAsset
    weightLimit: V2WeightLimit
}

export interface Type_495_ClaimAsset {
    __kind: 'ClaimAsset'
    assets: V2MultiAsset[]
    ticket: V2MultiLocation
}

export interface Type_495_ClearError {
    __kind: 'ClearError'
}

export interface Type_495_ClearOrigin {
    __kind: 'ClearOrigin'
}

export interface Type_495_DepositAsset {
    __kind: 'DepositAsset'
    assets: V2MultiAssetFilter
    maxAssets: number
    beneficiary: V2MultiLocation
}

export interface Type_495_DepositReserveAsset {
    __kind: 'DepositReserveAsset'
    assets: V2MultiAssetFilter
    maxAssets: number
    dest: V2MultiLocation
    xcm: V2Instruction[]
}

export interface Type_495_DescendOrigin {
    __kind: 'DescendOrigin'
    value: V2Junctions
}

export interface Type_495_ExchangeAsset {
    __kind: 'ExchangeAsset'
    give: V2MultiAssetFilter
    receive: V2MultiAsset[]
}

export interface Type_495_HrmpChannelAccepted {
    __kind: 'HrmpChannelAccepted'
    recipient: number
}

export interface Type_495_HrmpChannelClosing {
    __kind: 'HrmpChannelClosing'
    initiator: number
    sender: number
    recipient: number
}

export interface Type_495_HrmpNewChannelOpenRequest {
    __kind: 'HrmpNewChannelOpenRequest'
    sender: number
    maxMessageSize: number
    maxCapacity: number
}

export interface Type_495_InitiateReserveWithdraw {
    __kind: 'InitiateReserveWithdraw'
    assets: V2MultiAssetFilter
    reserve: V2MultiLocation
    xcm: V2Instruction[]
}

export interface Type_495_InitiateTeleport {
    __kind: 'InitiateTeleport'
    assets: V2MultiAssetFilter
    dest: V2MultiLocation
    xcm: V2Instruction[]
}

export interface Type_495_QueryHolding {
    __kind: 'QueryHolding'
    queryId: bigint
    dest: V2MultiLocation
    assets: V2MultiAssetFilter
    maxResponseWeight: bigint
}

export interface Type_495_QueryResponse {
    __kind: 'QueryResponse'
    queryId: bigint
    response: V2Response
    maxWeight: bigint
}

export interface Type_495_ReceiveTeleportedAsset {
    __kind: 'ReceiveTeleportedAsset'
    value: V2MultiAsset[]
}

export interface Type_495_RefundSurplus {
    __kind: 'RefundSurplus'
}

export interface Type_495_ReportError {
    __kind: 'ReportError'
    queryId: bigint
    dest: V2MultiLocation
    maxResponseWeight: bigint
}

export interface Type_495_ReserveAssetDeposited {
    __kind: 'ReserveAssetDeposited'
    value: V2MultiAsset[]
}

export interface Type_495_SetAppendix {
    __kind: 'SetAppendix'
    value: Type_495[]
}

export interface Type_495_SetErrorHandler {
    __kind: 'SetErrorHandler'
    value: Type_495[]
}

export interface Type_495_SubscribeVersion {
    __kind: 'SubscribeVersion'
    queryId: bigint
    maxResponseWeight: bigint
}

export interface Type_495_Transact {
    __kind: 'Transact'
    originType: V2OriginKind
    requireWeightAtMost: bigint
    call: Type_496
}

export interface Type_495_TransferAsset {
    __kind: 'TransferAsset'
    assets: V2MultiAsset[]
    beneficiary: V2MultiLocation
}

export interface Type_495_TransferReserveAsset {
    __kind: 'TransferReserveAsset'
    assets: V2MultiAsset[]
    dest: V2MultiLocation
    xcm: V2Instruction[]
}

export interface Type_495_Trap {
    __kind: 'Trap'
    value: bigint
}

export interface Type_495_UnsubscribeVersion {
    __kind: 'UnsubscribeVersion'
}

export interface Type_495_WithdrawAsset {
    __kind: 'WithdrawAsset'
    value: V2MultiAsset[]
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type WhitelistCall =
    | WhitelistCall_dispatch_whitelisted_call
    | WhitelistCall_dispatch_whitelisted_call_with_preimage
    | WhitelistCall_remove_whitelisted_call
    | WhitelistCall_whitelist_call

/**
 * See [`Pallet::dispatch_whitelisted_call`].
 */
export interface WhitelistCall_dispatch_whitelisted_call {
    __kind: 'dispatch_whitelisted_call'
    callHash: H256
    callEncodedLen: number
    callWeightWitness: Weight
}

/**
 * See [`Pallet::dispatch_whitelisted_call_with_preimage`].
 */
export interface WhitelistCall_dispatch_whitelisted_call_with_preimage {
    __kind: 'dispatch_whitelisted_call_with_preimage'
    call: Call
}

/**
 * See [`Pallet::remove_whitelisted_call`].
 */
export interface WhitelistCall_remove_whitelisted_call {
    __kind: 'remove_whitelisted_call'
    callHash: H256
}

/**
 * See [`Pallet::whitelist_call`].
 */
export interface WhitelistCall_whitelist_call {
    __kind: 'whitelist_call'
    callHash: H256
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type VoterListCall = VoterListCall_put_in_front_of | VoterListCall_rebag

/**
 * See [`Pallet::put_in_front_of`].
 */
export interface VoterListCall_put_in_front_of {
    __kind: 'put_in_front_of'
    lighter: MultiAddress
}

/**
 * See [`Pallet::rebag`].
 */
export interface VoterListCall_rebag {
    __kind: 'rebag'
    dislocated: MultiAddress
}

export type MultiAddress =
    | MultiAddress_Address20
    | MultiAddress_Address32
    | MultiAddress_Id
    | MultiAddress_Index
    | MultiAddress_Raw

export interface MultiAddress_Address20 {
    __kind: 'Address20'
    value: Bytes
}

export interface MultiAddress_Address32 {
    __kind: 'Address32'
    value: Bytes
}

export interface MultiAddress_Id {
    __kind: 'Id'
    value: AccountId32
}

export interface MultiAddress_Index {
    __kind: 'Index'
}

export interface MultiAddress_Raw {
    __kind: 'Raw'
    value: Bytes
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type VoteManagerCall =
    | VoteManagerCall_remove_other_vote
    | VoteManagerCall_remove_vote
    | VoteManagerCall_unlock
    | VoteManagerCall_vote

/**
 * See [`Pallet::remove_other_vote`].
 */
export interface VoteManagerCall_remove_other_vote {
    __kind: 'remove_other_vote'
    target: MultiAddress
    class: number
    index: number
}

/**
 * See [`Pallet::remove_vote`].
 */
export interface VoteManagerCall_remove_vote {
    __kind: 'remove_vote'
    class?: number | undefined
    index: number
}

/**
 * See [`Pallet::unlock`].
 */
export interface VoteManagerCall_unlock {
    __kind: 'unlock'
    class: number
    target: MultiAddress
    index: number
}

/**
 * See [`Pallet::vote`].
 */
export interface VoteManagerCall_vote {
    __kind: 'vote'
    pollIndex: number
    vote: AccountVote
    currency: VoteCurrency
}

export type VoteCurrency = VoteCurrency_Enj | VoteCurrency_SEnj

export interface VoteCurrency_Enj {
    __kind: 'Enj'
}

export interface VoteCurrency_SEnj {
    __kind: 'SEnj'
    value: bigint
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type ValidatorManagerCall = ValidatorManagerCall_deregister_validators | ValidatorManagerCall_register_validators

/**
 * See [`Pallet::deregister_validators`].
 */
export interface ValidatorManagerCall_deregister_validators {
    __kind: 'deregister_validators'
    validators: AccountId32[]
}

/**
 * See [`Pallet::register_validators`].
 */
export interface ValidatorManagerCall_register_validators {
    __kind: 'register_validators'
    validators: AccountId32[]
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type UtilityCall =
    | UtilityCall_as_derivative
    | UtilityCall_batch
    | UtilityCall_batch_all
    | UtilityCall_dispatch_as
    | UtilityCall_force_batch
    | UtilityCall_with_weight

/**
 * See [`Pallet::as_derivative`].
 */
export interface UtilityCall_as_derivative {
    __kind: 'as_derivative'
    index: number
    call: Call
}

/**
 * See [`Pallet::batch`].
 */
export interface UtilityCall_batch {
    __kind: 'batch'
    calls: Call[]
}

/**
 * See [`Pallet::batch_all`].
 */
export interface UtilityCall_batch_all {
    __kind: 'batch_all'
    calls: Call[]
}

/**
 * See [`Pallet::dispatch_as`].
 */
export interface UtilityCall_dispatch_as {
    __kind: 'dispatch_as'
    asOrigin: OriginCaller
    call: Call
}

/**
 * See [`Pallet::force_batch`].
 */
export interface UtilityCall_force_batch {
    __kind: 'force_batch'
    calls: Call[]
}

/**
 * See [`Pallet::with_weight`].
 */
export interface UtilityCall_with_weight {
    __kind: 'with_weight'
    call: Call
    weight: Weight
}

export type OriginCaller =
    | OriginCaller_Origins
    | OriginCaller_ParachainsOrigin
    | OriginCaller_Void
    | OriginCaller_XcmPallet
    | OriginCaller_system

export interface OriginCaller_Origins {
    __kind: 'Origins'
    value: Type_416
}

export interface OriginCaller_ParachainsOrigin {
    __kind: 'ParachainsOrigin'
    value: Origin
}

export interface OriginCaller_Void {
    __kind: 'Void'
    value: Void
}

export interface OriginCaller_XcmPallet {
    __kind: 'XcmPallet'
    value: Type_415
}

export interface OriginCaller_system {
    __kind: 'system'
    value: RawOrigin
}

export type RawOrigin = RawOrigin_None | RawOrigin_Root | RawOrigin_Signed

export interface RawOrigin_None {
    __kind: 'None'
}

export interface RawOrigin_Root {
    __kind: 'Root'
}

export interface RawOrigin_Signed {
    __kind: 'Signed'
    value: AccountId32
}

export type Type_415 = Type_415_Response | Type_415_Xcm

export interface Type_415_Response {
    __kind: 'Response'
    value: V3MultiLocation
}

export interface Type_415_Xcm {
    __kind: 'Xcm'
    value: V3MultiLocation
}

export type Void = never

export type Origin = Origin_Parachain

export interface Origin_Parachain {
    __kind: 'Parachain'
    value: Id
}

export type Type_416 =
    | Type_416_AuctionAdmin
    | Type_416_BigSpender
    | Type_416_BigTipper
    | Type_416_ClaimsAdmin
    | Type_416_ExtrinsicPauseAdmin
    | Type_416_Fellows
    | Type_416_Fellowship1Dan
    | Type_416_Fellowship2Dan
    | Type_416_Fellowship3Dan
    | Type_416_Fellowship4Dan
    | Type_416_Fellowship5Dan
    | Type_416_Fellowship6Dan
    | Type_416_Fellowship7Dan
    | Type_416_Fellowship8Dan
    | Type_416_Fellowship9Dan
    | Type_416_FellowshipAdmin
    | Type_416_FellowshipExperts
    | Type_416_FellowshipInitiates
    | Type_416_FellowshipMasters
    | Type_416_FuelTanksAdmin
    | Type_416_GeneralAdmin
    | Type_416_LeaseAdmin
    | Type_416_MediumSpender
    | Type_416_MultiTokensAdmin
    | Type_416_ParachainsAdmin
    | Type_416_PreimageAdmin
    | Type_416_ReferendumCanceller
    | Type_416_ReferendumKiller
    | Type_416_SmallSpender
    | Type_416_SmallTipper
    | Type_416_StakingAdmin
    | Type_416_TreasuryAdmin
    | Type_416_WhitelistAdmin
    | Type_416_WhitelistedCaller

export interface Type_416_AuctionAdmin {
    __kind: 'AuctionAdmin'
}

export interface Type_416_BigSpender {
    __kind: 'BigSpender'
}

export interface Type_416_BigTipper {
    __kind: 'BigTipper'
}

export interface Type_416_ClaimsAdmin {
    __kind: 'ClaimsAdmin'
}

export interface Type_416_ExtrinsicPauseAdmin {
    __kind: 'ExtrinsicPauseAdmin'
}

export interface Type_416_Fellows {
    __kind: 'Fellows'
}

export interface Type_416_Fellowship1Dan {
    __kind: 'Fellowship1Dan'
}

export interface Type_416_Fellowship2Dan {
    __kind: 'Fellowship2Dan'
}

export interface Type_416_Fellowship3Dan {
    __kind: 'Fellowship3Dan'
}

export interface Type_416_Fellowship4Dan {
    __kind: 'Fellowship4Dan'
}

export interface Type_416_Fellowship5Dan {
    __kind: 'Fellowship5Dan'
}

export interface Type_416_Fellowship6Dan {
    __kind: 'Fellowship6Dan'
}

export interface Type_416_Fellowship7Dan {
    __kind: 'Fellowship7Dan'
}

export interface Type_416_Fellowship8Dan {
    __kind: 'Fellowship8Dan'
}

export interface Type_416_Fellowship9Dan {
    __kind: 'Fellowship9Dan'
}

export interface Type_416_FellowshipAdmin {
    __kind: 'FellowshipAdmin'
}

export interface Type_416_FellowshipExperts {
    __kind: 'FellowshipExperts'
}

export interface Type_416_FellowshipInitiates {
    __kind: 'FellowshipInitiates'
}

export interface Type_416_FellowshipMasters {
    __kind: 'FellowshipMasters'
}

export interface Type_416_FuelTanksAdmin {
    __kind: 'FuelTanksAdmin'
}

export interface Type_416_GeneralAdmin {
    __kind: 'GeneralAdmin'
}

export interface Type_416_LeaseAdmin {
    __kind: 'LeaseAdmin'
}

export interface Type_416_MediumSpender {
    __kind: 'MediumSpender'
}

export interface Type_416_MultiTokensAdmin {
    __kind: 'MultiTokensAdmin'
}

export interface Type_416_ParachainsAdmin {
    __kind: 'ParachainsAdmin'
}

export interface Type_416_PreimageAdmin {
    __kind: 'PreimageAdmin'
}

export interface Type_416_ReferendumCanceller {
    __kind: 'ReferendumCanceller'
}

export interface Type_416_ReferendumKiller {
    __kind: 'ReferendumKiller'
}

export interface Type_416_SmallSpender {
    __kind: 'SmallSpender'
}

export interface Type_416_SmallTipper {
    __kind: 'SmallTipper'
}

export interface Type_416_StakingAdmin {
    __kind: 'StakingAdmin'
}

export interface Type_416_TreasuryAdmin {
    __kind: 'TreasuryAdmin'
}

export interface Type_416_WhitelistAdmin {
    __kind: 'WhitelistAdmin'
}

export interface Type_416_WhitelistedCaller {
    __kind: 'WhitelistedCaller'
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type TreasuryCall =
    | TreasuryCall_approve_proposal
    | TreasuryCall_propose_spend
    | TreasuryCall_reject_proposal
    | TreasuryCall_remove_approval
    | TreasuryCall_spend

/**
 * See [`Pallet::approve_proposal`].
 */
export interface TreasuryCall_approve_proposal {
    __kind: 'approve_proposal'
    proposalId: number
}

/**
 * See [`Pallet::propose_spend`].
 */
export interface TreasuryCall_propose_spend {
    __kind: 'propose_spend'
    value: bigint
    beneficiary: MultiAddress
}

/**
 * See [`Pallet::reject_proposal`].
 */
export interface TreasuryCall_reject_proposal {
    __kind: 'reject_proposal'
    proposalId: number
}

/**
 * See [`Pallet::remove_approval`].
 */
export interface TreasuryCall_remove_approval {
    __kind: 'remove_approval'
    proposalId: number
}

/**
 * See [`Pallet::spend`].
 */
export interface TreasuryCall_spend {
    __kind: 'spend'
    amount: bigint
    beneficiary: MultiAddress
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type TimestampCall = TimestampCall_set

/**
 * See [`Pallet::set`].
 */
export interface TimestampCall_set {
    __kind: 'set'
    now: bigint
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type SystemCall =
    | SystemCall_kill_prefix
    | SystemCall_kill_storage
    | SystemCall_remark
    | SystemCall_remark_with_event
    | SystemCall_set_code
    | SystemCall_set_code_without_checks
    | SystemCall_set_heap_pages
    | SystemCall_set_storage

/**
 * See [`Pallet::kill_prefix`].
 */
export interface SystemCall_kill_prefix {
    __kind: 'kill_prefix'
    prefix: Bytes
    subkeys: number
}

/**
 * See [`Pallet::kill_storage`].
 */
export interface SystemCall_kill_storage {
    __kind: 'kill_storage'
    keys: Bytes[]
}

/**
 * See [`Pallet::remark`].
 */
export interface SystemCall_remark {
    __kind: 'remark'
    remark: Bytes
}

/**
 * See [`Pallet::remark_with_event`].
 */
export interface SystemCall_remark_with_event {
    __kind: 'remark_with_event'
    remark: Bytes
}

/**
 * See [`Pallet::set_code`].
 */
export interface SystemCall_set_code {
    __kind: 'set_code'
    code: Bytes
}

/**
 * See [`Pallet::set_code_without_checks`].
 */
export interface SystemCall_set_code_without_checks {
    __kind: 'set_code_without_checks'
    code: Bytes
}

/**
 * See [`Pallet::set_heap_pages`].
 */
export interface SystemCall_set_heap_pages {
    __kind: 'set_heap_pages'
    pages: bigint
}

/**
 * See [`Pallet::set_storage`].
 */
export interface SystemCall_set_storage {
    __kind: 'set_storage'
    items: [Bytes, Bytes][]
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type SudoCall = SudoCall_set_key | SudoCall_sudo | SudoCall_sudo_as | SudoCall_sudo_unchecked_weight

/**
 * See [`Pallet::set_key`].
 */
export interface SudoCall_set_key {
    __kind: 'set_key'
    new: MultiAddress
}

/**
 * See [`Pallet::sudo`].
 */
export interface SudoCall_sudo {
    __kind: 'sudo'
    call: Call
}

/**
 * See [`Pallet::sudo_as`].
 */
export interface SudoCall_sudo_as {
    __kind: 'sudo_as'
    who: MultiAddress
    call: Call
}

/**
 * See [`Pallet::sudo_unchecked_weight`].
 */
export interface SudoCall_sudo_unchecked_weight {
    __kind: 'sudo_unchecked_weight'
    call: Call
    weight: Weight
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type StakingCall =
    | StakingCall_bond
    | StakingCall_bond_extra
    | StakingCall_cancel_deferred_slash
    | StakingCall_chill
    | StakingCall_chill_other
    | StakingCall_force_apply_min_commission
    | StakingCall_force_new_era
    | StakingCall_force_new_era_always
    | StakingCall_force_no_eras
    | StakingCall_force_unstake
    | StakingCall_increase_validator_count
    | StakingCall_kick
    | StakingCall_nominate
    | StakingCall_payout_stakers
    | StakingCall_reap_stash
    | StakingCall_rebond
    | StakingCall_scale_validator_count
    | StakingCall_set_controller
    | StakingCall_set_invulnerables
    | StakingCall_set_min_commission
    | StakingCall_set_payee
    | StakingCall_set_staking_configs
    | StakingCall_set_validator_count
    | StakingCall_unbond
    | StakingCall_validate
    | StakingCall_withdraw_unbonded

/**
 * See [`Pallet::bond`].
 */
export interface StakingCall_bond {
    __kind: 'bond'
    value: bigint
    payee: RewardDestination
}

/**
 * See [`Pallet::bond_extra`].
 */
export interface StakingCall_bond_extra {
    __kind: 'bond_extra'
    maxAdditional: bigint
}

/**
 * See [`Pallet::cancel_deferred_slash`].
 */
export interface StakingCall_cancel_deferred_slash {
    __kind: 'cancel_deferred_slash'
    era: number
    slashIndices: number[]
}

/**
 * See [`Pallet::chill`].
 */
export interface StakingCall_chill {
    __kind: 'chill'
}

/**
 * See [`Pallet::chill_other`].
 */
export interface StakingCall_chill_other {
    __kind: 'chill_other'
    controller: AccountId32
}

/**
 * See [`Pallet::force_apply_min_commission`].
 */
export interface StakingCall_force_apply_min_commission {
    __kind: 'force_apply_min_commission'
    validatorStash: AccountId32
}

/**
 * See [`Pallet::force_new_era`].
 */
export interface StakingCall_force_new_era {
    __kind: 'force_new_era'
}

/**
 * See [`Pallet::force_new_era_always`].
 */
export interface StakingCall_force_new_era_always {
    __kind: 'force_new_era_always'
}

/**
 * See [`Pallet::force_no_eras`].
 */
export interface StakingCall_force_no_eras {
    __kind: 'force_no_eras'
}

/**
 * See [`Pallet::force_unstake`].
 */
export interface StakingCall_force_unstake {
    __kind: 'force_unstake'
    stash: AccountId32
    numSlashingSpans: number
}

/**
 * See [`Pallet::increase_validator_count`].
 */
export interface StakingCall_increase_validator_count {
    __kind: 'increase_validator_count'
    additional: number
}

/**
 * See [`Pallet::kick`].
 */
export interface StakingCall_kick {
    __kind: 'kick'
    who: MultiAddress[]
}

/**
 * See [`Pallet::nominate`].
 */
export interface StakingCall_nominate {
    __kind: 'nominate'
    targets: MultiAddress[]
}

/**
 * See [`Pallet::payout_stakers`].
 */
export interface StakingCall_payout_stakers {
    __kind: 'payout_stakers'
    validatorStash: AccountId32
    era: number
}

/**
 * See [`Pallet::reap_stash`].
 */
export interface StakingCall_reap_stash {
    __kind: 'reap_stash'
    stash: AccountId32
    numSlashingSpans: number
}

/**
 * See [`Pallet::rebond`].
 */
export interface StakingCall_rebond {
    __kind: 'rebond'
    value: bigint
}

/**
 * See [`Pallet::scale_validator_count`].
 */
export interface StakingCall_scale_validator_count {
    __kind: 'scale_validator_count'
    factor: Percent
}

/**
 * See [`Pallet::set_controller`].
 */
export interface StakingCall_set_controller {
    __kind: 'set_controller'
}

/**
 * See [`Pallet::set_invulnerables`].
 */
export interface StakingCall_set_invulnerables {
    __kind: 'set_invulnerables'
    invulnerables: AccountId32[]
}

/**
 * See [`Pallet::set_min_commission`].
 */
export interface StakingCall_set_min_commission {
    __kind: 'set_min_commission'
    new: Perbill
}

/**
 * See [`Pallet::set_payee`].
 */
export interface StakingCall_set_payee {
    __kind: 'set_payee'
    payee: RewardDestination
}

/**
 * See [`Pallet::set_staking_configs`].
 */
export interface StakingCall_set_staking_configs {
    __kind: 'set_staking_configs'
    minNominatorBond: ConfigOp
    minValidatorBond: ConfigOp
    maxNominatorCount: Type_378
    maxValidatorCount: Type_378
    chillThreshold: Type_379
    minCommission: Type_380
}

/**
 * See [`Pallet::set_validator_count`].
 */
export interface StakingCall_set_validator_count {
    __kind: 'set_validator_count'
    new: number
}

/**
 * See [`Pallet::unbond`].
 */
export interface StakingCall_unbond {
    __kind: 'unbond'
    value: bigint
}

/**
 * See [`Pallet::validate`].
 */
export interface StakingCall_validate {
    __kind: 'validate'
    prefs: ValidatorPrefs
}

/**
 * See [`Pallet::withdraw_unbonded`].
 */
export interface StakingCall_withdraw_unbonded {
    __kind: 'withdraw_unbonded'
    numSlashingSpans: number
}

export type Type_380 = Type_380_Noop | Type_380_Remove | Type_380_Set

export interface Type_380_Noop {
    __kind: 'Noop'
}

export interface Type_380_Remove {
    __kind: 'Remove'
}

export interface Type_380_Set {
    __kind: 'Set'
    value: Perbill
}

export type Type_379 = Type_379_Noop | Type_379_Remove | Type_379_Set

export interface Type_379_Noop {
    __kind: 'Noop'
}

export interface Type_379_Remove {
    __kind: 'Remove'
}

export interface Type_379_Set {
    __kind: 'Set'
    value: Percent
}

export type Type_378 = Type_378_Noop | Type_378_Remove | Type_378_Set

export interface Type_378_Noop {
    __kind: 'Noop'
}

export interface Type_378_Remove {
    __kind: 'Remove'
}

export interface Type_378_Set {
    __kind: 'Set'
    value: number
}

export type ConfigOp = ConfigOp_Noop | ConfigOp_Remove | ConfigOp_Set

export interface ConfigOp_Noop {
    __kind: 'Noop'
}

export interface ConfigOp_Remove {
    __kind: 'Remove'
}

export interface ConfigOp_Set {
    __kind: 'Set'
    value: bigint
}

export type Percent = number

export type RewardDestination =
    | RewardDestination_Account
    | RewardDestination_Controller
    | RewardDestination_None
    | RewardDestination_Staked
    | RewardDestination_Stash

export interface RewardDestination_Account {
    __kind: 'Account'
    value: AccountId32
}

export interface RewardDestination_Controller {
    __kind: 'Controller'
}

export interface RewardDestination_None {
    __kind: 'None'
}

export interface RewardDestination_Staked {
    __kind: 'Staked'
}

export interface RewardDestination_Stash {
    __kind: 'Stash'
}

/**
 * The pallet's extrinsics.
 */
export type StakeExchangeCall =
    | StakeExchangeCall_add_liquidity
    | StakeExchangeCall_buy
    | StakeExchangeCall_cancel_offer
    | StakeExchangeCall_configure_liquidity_account
    | StakeExchangeCall_create_offer
    | StakeExchangeCall_withdraw_liquidity

/**
 * See [`Pallet::add_liquidity`].
 */
export interface StakeExchangeCall_add_liquidity {
    __kind: 'add_liquidity'
    offerId: bigint
    amount: bigint
}

/**
 * See [`Pallet::buy`].
 */
export interface StakeExchangeCall_buy {
    __kind: 'buy'
    offerId: bigint
    amount: bigint
    tokenId: bigint
}

/**
 * See [`Pallet::cancel_offer`].
 */
export interface StakeExchangeCall_cancel_offer {
    __kind: 'cancel_offer'
    offerId: bigint
}

/**
 * See [`Pallet::configure_liquidity_account`].
 */
export interface StakeExchangeCall_configure_liquidity_account {
    __kind: 'configure_liquidity_account'
    config: LiquidityAccountConfig
}

/**
 * See [`Pallet::create_offer`].
 */
export interface StakeExchangeCall_create_offer {
    __kind: 'create_offer'
    offer: CreateOffer
}

/**
 * See [`Pallet::withdraw_liquidity`].
 */
export interface StakeExchangeCall_withdraw_liquidity {
    __kind: 'withdraw_liquidity'
    offerId: bigint
    amount: bigint
}

export interface CreateOffer {
    account: AccountId32
    total: bigint
    rate: number
    minAverageRewardRate: bigint
    tokenFilter: TokenFilter
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type SlotsCall = SlotsCall_clear_all_leases | SlotsCall_force_lease | SlotsCall_trigger_onboard

/**
 * See [`Pallet::clear_all_leases`].
 */
export interface SlotsCall_clear_all_leases {
    __kind: 'clear_all_leases'
    para: Id
}

/**
 * See [`Pallet::force_lease`].
 */
export interface SlotsCall_force_lease {
    __kind: 'force_lease'
    para: Id
    leaser: AccountId32
    amount: bigint
    periodBegin: number
    periodCount: number
}

/**
 * See [`Pallet::trigger_onboard`].
 */
export interface SlotsCall_trigger_onboard {
    __kind: 'trigger_onboard'
    para: Id
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type SessionCall = SessionCall_purge_keys | SessionCall_set_keys

/**
 * See [`Pallet::purge_keys`].
 */
export interface SessionCall_purge_keys {
    __kind: 'purge_keys'
}

/**
 * See [`Pallet::set_keys`].
 */
export interface SessionCall_set_keys {
    __kind: 'set_keys'
    keys: SessionKeys
    proof: Bytes
}

export interface SessionKeys {
    grandpa: Public
    babe: Bytes
    imOnline: Bytes
    paraValidator: Bytes
    paraAssignment: Bytes
    authorityDiscovery: Bytes
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type SchedulerCall =
    | SchedulerCall_cancel
    | SchedulerCall_cancel_named
    | SchedulerCall_schedule
    | SchedulerCall_schedule_after
    | SchedulerCall_schedule_named
    | SchedulerCall_schedule_named_after

/**
 * See [`Pallet::cancel`].
 */
export interface SchedulerCall_cancel {
    __kind: 'cancel'
    when: number
    index: number
}

/**
 * See [`Pallet::cancel_named`].
 */
export interface SchedulerCall_cancel_named {
    __kind: 'cancel_named'
    id: Bytes
}

/**
 * See [`Pallet::schedule`].
 */
export interface SchedulerCall_schedule {
    __kind: 'schedule'
    when: number
    maybePeriodic?: [number, number] | undefined
    priority: number
    call: Call
}

/**
 * See [`Pallet::schedule_after`].
 */
export interface SchedulerCall_schedule_after {
    __kind: 'schedule_after'
    after: number
    maybePeriodic?: [number, number] | undefined
    priority: number
    call: Call
}

/**
 * See [`Pallet::schedule_named`].
 */
export interface SchedulerCall_schedule_named {
    __kind: 'schedule_named'
    id: Bytes
    when: number
    maybePeriodic?: [number, number] | undefined
    priority: number
    call: Call
}

/**
 * See [`Pallet::schedule_named_after`].
 */
export interface SchedulerCall_schedule_named_after {
    __kind: 'schedule_named_after'
    id: Bytes
    after: number
    maybePeriodic?: [number, number] | undefined
    priority: number
    call: Call
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type RegistrarCall =
    | RegistrarCall_add_lock
    | RegistrarCall_deregister
    | RegistrarCall_force_register
    | RegistrarCall_register
    | RegistrarCall_remove_lock
    | RegistrarCall_reserve
    | RegistrarCall_schedule_code_upgrade
    | RegistrarCall_set_current_head
    | RegistrarCall_swap

/**
 * See [`Pallet::add_lock`].
 */
export interface RegistrarCall_add_lock {
    __kind: 'add_lock'
    para: Id
}

/**
 * See [`Pallet::deregister`].
 */
export interface RegistrarCall_deregister {
    __kind: 'deregister'
    id: Id
}

/**
 * See [`Pallet::force_register`].
 */
export interface RegistrarCall_force_register {
    __kind: 'force_register'
    who: AccountId32
    deposit: bigint
    id: Id
    genesisHead: HeadData
    validationCode: ValidationCode
}

/**
 * See [`Pallet::register`].
 */
export interface RegistrarCall_register {
    __kind: 'register'
    id: Id
    genesisHead: HeadData
    validationCode: ValidationCode
}

/**
 * See [`Pallet::remove_lock`].
 */
export interface RegistrarCall_remove_lock {
    __kind: 'remove_lock'
    para: Id
}

/**
 * See [`Pallet::reserve`].
 */
export interface RegistrarCall_reserve {
    __kind: 'reserve'
}

/**
 * See [`Pallet::schedule_code_upgrade`].
 */
export interface RegistrarCall_schedule_code_upgrade {
    __kind: 'schedule_code_upgrade'
    para: Id
    newCode: ValidationCode
}

/**
 * See [`Pallet::set_current_head`].
 */
export interface RegistrarCall_set_current_head {
    __kind: 'set_current_head'
    para: Id
    newHead: HeadData
}

/**
 * See [`Pallet::swap`].
 */
export interface RegistrarCall_swap {
    __kind: 'swap'
    id: Id
    other: Id
}

export type ValidationCode = Bytes

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type ReferendaCall =
    | ReferendaCall_cancel
    | ReferendaCall_kill
    | ReferendaCall_nudge_referendum
    | ReferendaCall_one_fewer_deciding
    | ReferendaCall_place_decision_deposit
    | ReferendaCall_refund_decision_deposit
    | ReferendaCall_refund_submission_deposit
    | ReferendaCall_set_metadata
    | ReferendaCall_submit

/**
 * See [`Pallet::cancel`].
 */
export interface ReferendaCall_cancel {
    __kind: 'cancel'
    index: number
}

/**
 * See [`Pallet::kill`].
 */
export interface ReferendaCall_kill {
    __kind: 'kill'
    index: number
}

/**
 * See [`Pallet::nudge_referendum`].
 */
export interface ReferendaCall_nudge_referendum {
    __kind: 'nudge_referendum'
    index: number
}

/**
 * See [`Pallet::one_fewer_deciding`].
 */
export interface ReferendaCall_one_fewer_deciding {
    __kind: 'one_fewer_deciding'
    track: number
}

/**
 * See [`Pallet::place_decision_deposit`].
 */
export interface ReferendaCall_place_decision_deposit {
    __kind: 'place_decision_deposit'
    index: number
}

/**
 * See [`Pallet::refund_decision_deposit`].
 */
export interface ReferendaCall_refund_decision_deposit {
    __kind: 'refund_decision_deposit'
    index: number
}

/**
 * See [`Pallet::refund_submission_deposit`].
 */
export interface ReferendaCall_refund_submission_deposit {
    __kind: 'refund_submission_deposit'
    index: number
}

/**
 * See [`Pallet::set_metadata`].
 */
export interface ReferendaCall_set_metadata {
    __kind: 'set_metadata'
    index: number
    maybeHash?: H256 | undefined
}

/**
 * See [`Pallet::submit`].
 */
export interface ReferendaCall_submit {
    __kind: 'submit'
    proposalOrigin: OriginCaller
    proposal: Bounded
    enactmentMoment: DispatchTime
}

export type DispatchTime = DispatchTime_After | DispatchTime_At

export interface DispatchTime_After {
    __kind: 'After'
    value: number
}

export interface DispatchTime_At {
    __kind: 'At'
    value: number
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type PreimageCall =
    | PreimageCall_note_preimage
    | PreimageCall_request_preimage
    | PreimageCall_unnote_preimage
    | PreimageCall_unrequest_preimage

/**
 * See [`Pallet::note_preimage`].
 */
export interface PreimageCall_note_preimage {
    __kind: 'note_preimage'
    bytes: Bytes
}

/**
 * See [`Pallet::request_preimage`].
 */
export interface PreimageCall_request_preimage {
    __kind: 'request_preimage'
    hash: H256
}

/**
 * See [`Pallet::unnote_preimage`].
 */
export interface PreimageCall_unnote_preimage {
    __kind: 'unnote_preimage'
    hash: H256
}

/**
 * See [`Pallet::unrequest_preimage`].
 */
export interface PreimageCall_unrequest_preimage {
    __kind: 'unrequest_preimage'
    hash: H256
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type ParasSudoWrapperCall =
    | ParasSudoWrapperCall_sudo_establish_hrmp_channel
    | ParasSudoWrapperCall_sudo_queue_downward_xcm
    | ParasSudoWrapperCall_sudo_schedule_para_cleanup
    | ParasSudoWrapperCall_sudo_schedule_para_initialize
    | ParasSudoWrapperCall_sudo_schedule_parachain_downgrade
    | ParasSudoWrapperCall_sudo_schedule_parathread_upgrade

/**
 * See [`Pallet::sudo_establish_hrmp_channel`].
 */
export interface ParasSudoWrapperCall_sudo_establish_hrmp_channel {
    __kind: 'sudo_establish_hrmp_channel'
    sender: Id
    recipient: Id
    maxCapacity: number
    maxMessageSize: number
}

/**
 * See [`Pallet::sudo_queue_downward_xcm`].
 */
export interface ParasSudoWrapperCall_sudo_queue_downward_xcm {
    __kind: 'sudo_queue_downward_xcm'
    id: Id
    xcm: VersionedXcm
}

/**
 * See [`Pallet::sudo_schedule_para_cleanup`].
 */
export interface ParasSudoWrapperCall_sudo_schedule_para_cleanup {
    __kind: 'sudo_schedule_para_cleanup'
    id: Id
}

/**
 * See [`Pallet::sudo_schedule_para_initialize`].
 */
export interface ParasSudoWrapperCall_sudo_schedule_para_initialize {
    __kind: 'sudo_schedule_para_initialize'
    id: Id
    genesis: ParaGenesisArgs
}

/**
 * See [`Pallet::sudo_schedule_parachain_downgrade`].
 */
export interface ParasSudoWrapperCall_sudo_schedule_parachain_downgrade {
    __kind: 'sudo_schedule_parachain_downgrade'
    id: Id
}

/**
 * See [`Pallet::sudo_schedule_parathread_upgrade`].
 */
export interface ParasSudoWrapperCall_sudo_schedule_parathread_upgrade {
    __kind: 'sudo_schedule_parathread_upgrade'
    id: Id
}

export interface ParaGenesisArgs {
    genesisHead: HeadData
    validationCode: ValidationCode
    paraKind: boolean
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type ParasSlashingCall = ParasSlashingCall_report_dispute_lost_unsigned

/**
 * See [`Pallet::report_dispute_lost_unsigned`].
 */
export interface ParasSlashingCall_report_dispute_lost_unsigned {
    __kind: 'report_dispute_lost_unsigned'
    disputeProof: V5DisputeProof
    keyOwnerProof: MembershipProof
}

export interface MembershipProof {
    session: number
    trieNodes: Bytes[]
    validatorCount: number
}

export interface V5DisputeProof {
    timeSlot: V5DisputesTimeSlot
    kind: V5SlashingOffenceKind
    validatorIndex: V5ValidatorIndex
    validatorId: Bytes
}

export type V5ValidatorIndex = number

export type V5SlashingOffenceKind = V5SlashingOffenceKind_AgainstValid | V5SlashingOffenceKind_ForInvalid

export interface V5SlashingOffenceKind_AgainstValid {
    __kind: 'AgainstValid'
}

export interface V5SlashingOffenceKind_ForInvalid {
    __kind: 'ForInvalid'
}

export interface V5DisputesTimeSlot {
    sessionIndex: number
    candidateHash: CandidateHash
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type ParasSharedCall = never

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type ParasDisputesCall = ParasDisputesCall_force_unfreeze

/**
 * See [`Pallet::force_unfreeze`].
 */
export interface ParasDisputesCall_force_unfreeze {
    __kind: 'force_unfreeze'
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type ParasCall =
    | ParasCall_add_trusted_validation_code
    | ParasCall_force_note_new_head
    | ParasCall_force_queue_action
    | ParasCall_force_schedule_code_upgrade
    | ParasCall_force_set_current_code
    | ParasCall_force_set_current_head
    | ParasCall_include_pvf_check_statement
    | ParasCall_poke_unused_validation_code

/**
 * See [`Pallet::add_trusted_validation_code`].
 */
export interface ParasCall_add_trusted_validation_code {
    __kind: 'add_trusted_validation_code'
    validationCode: ValidationCode
}

/**
 * See [`Pallet::force_note_new_head`].
 */
export interface ParasCall_force_note_new_head {
    __kind: 'force_note_new_head'
    para: Id
    newHead: HeadData
}

/**
 * See [`Pallet::force_queue_action`].
 */
export interface ParasCall_force_queue_action {
    __kind: 'force_queue_action'
    para: Id
}

/**
 * See [`Pallet::force_schedule_code_upgrade`].
 */
export interface ParasCall_force_schedule_code_upgrade {
    __kind: 'force_schedule_code_upgrade'
    para: Id
    newCode: ValidationCode
    relayParentNumber: number
}

/**
 * See [`Pallet::force_set_current_code`].
 */
export interface ParasCall_force_set_current_code {
    __kind: 'force_set_current_code'
    para: Id
    newCode: ValidationCode
}

/**
 * See [`Pallet::force_set_current_head`].
 */
export interface ParasCall_force_set_current_head {
    __kind: 'force_set_current_head'
    para: Id
    newHead: HeadData
}

/**
 * See [`Pallet::include_pvf_check_statement`].
 */
export interface ParasCall_include_pvf_check_statement {
    __kind: 'include_pvf_check_statement'
    stmt: V5PvfCheckStatement
    signature: Bytes
}

/**
 * See [`Pallet::poke_unused_validation_code`].
 */
export interface ParasCall_poke_unused_validation_code {
    __kind: 'poke_unused_validation_code'
    validationCodeHash: ValidationCodeHash
}

export interface V5PvfCheckStatement {
    accept: boolean
    subject: ValidationCodeHash
    sessionIndex: number
    validatorIndex: V5ValidatorIndex
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type ParaInherentCall = ParaInherentCall_enter

/**
 * See [`Pallet::enter`].
 */
export interface ParaInherentCall_enter {
    __kind: 'enter'
    data: V5InherentData
}

export interface V5InherentData {
    bitfields: V5UncheckedSigned[]
    backedCandidates: V5BackedCandidate[]
    disputes: V5DisputeStatementSet[]
    parentHeader: Header
}

export interface Header {
    parentHash: H256
    number: number
    stateRoot: H256
    extrinsicsRoot: H256
    digest: Digest
}

export interface Digest {
    logs: DigestItem[]
}

export type DigestItem =
    | DigestItem_Consensus
    | DigestItem_Other
    | DigestItem_PreRuntime
    | DigestItem_RuntimeEnvironmentUpdated
    | DigestItem_Seal

export interface DigestItem_Consensus {
    __kind: 'Consensus'
    value: [Bytes, Bytes]
}

export interface DigestItem_Other {
    __kind: 'Other'
    value: Bytes
}

export interface DigestItem_PreRuntime {
    __kind: 'PreRuntime'
    value: [Bytes, Bytes]
}

export interface DigestItem_RuntimeEnvironmentUpdated {
    __kind: 'RuntimeEnvironmentUpdated'
}

export interface DigestItem_Seal {
    __kind: 'Seal'
    value: [Bytes, Bytes]
}

export interface V5DisputeStatementSet {
    candidateHash: CandidateHash
    session: number
    statements: [V5DisputeStatement, V5ValidatorIndex, Bytes][]
}

export type V5DisputeStatement = V5DisputeStatement_Invalid | V5DisputeStatement_Valid

export interface V5DisputeStatement_Invalid {
    __kind: 'Invalid'
    value: V5InvalidDisputeStatementKind
}

export interface V5DisputeStatement_Valid {
    __kind: 'Valid'
    value: V5ValidDisputeStatementKind
}

export type V5ValidDisputeStatementKind =
    | V5ValidDisputeStatementKind_ApprovalChecking
    | V5ValidDisputeStatementKind_BackingSeconded
    | V5ValidDisputeStatementKind_BackingValid
    | V5ValidDisputeStatementKind_Explicit

export interface V5ValidDisputeStatementKind_ApprovalChecking {
    __kind: 'ApprovalChecking'
}

export interface V5ValidDisputeStatementKind_BackingSeconded {
    __kind: 'BackingSeconded'
    value: H256
}

export interface V5ValidDisputeStatementKind_BackingValid {
    __kind: 'BackingValid'
    value: H256
}

export interface V5ValidDisputeStatementKind_Explicit {
    __kind: 'Explicit'
}

export type V5InvalidDisputeStatementKind = V5InvalidDisputeStatementKind_Explicit

export interface V5InvalidDisputeStatementKind_Explicit {
    __kind: 'Explicit'
}

export interface V5BackedCandidate {
    candidate: V5CommittedCandidateReceipt
    validityVotes: V5ValidityAttestation[]
    validatorIndices: BitSequence
}

export type V5ValidityAttestation = V5ValidityAttestation_Explicit | V5ValidityAttestation_Implicit

export interface V5ValidityAttestation_Explicit {
    __kind: 'Explicit'
    value: Bytes
}

export interface V5ValidityAttestation_Implicit {
    __kind: 'Implicit'
    value: Bytes
}

export interface V5CommittedCandidateReceipt {
    descriptor: V5CandidateDescriptor
    commitments: V5CandidateCommitments
}

export interface V5CandidateCommitments {
    upwardMessages: Bytes[]
    horizontalMessages: OutboundHrmpMessage[]
    newValidationCode?: ValidationCode | undefined
    headData: HeadData
    processedDownwardMessages: number
    hrmpWatermark: number
}

export interface OutboundHrmpMessage {
    recipient: Id
    data: Bytes
}

export interface V5UncheckedSigned {
    payload: V5AvailabilityBitfield
    validatorIndex: V5ValidatorIndex
    signature: Bytes
}

export type V5AvailabilityBitfield = BitSequence

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type ParaInclusionCall = never

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type NominationPoolsCall =
    | NominationPoolsCall_bond
    | NominationPoolsCall_calculate_early_bird_bonus
    | NominationPoolsCall_capture_early_bird_bonus_shares
    | NominationPoolsCall_chill
    | NominationPoolsCall_create
    | NominationPoolsCall_destroy
    | NominationPoolsCall_mutate
    | NominationPoolsCall_nominate
    | NominationPoolsCall_pay_early_bird_bonus
    | NominationPoolsCall_payout_rewards
    | NominationPoolsCall_pool_withdraw_unbonded
    | NominationPoolsCall_process_payouts
    | NominationPoolsCall_set_configs
    | NominationPoolsCall_set_staking_info
    | NominationPoolsCall_unbond
    | NominationPoolsCall_unbond_deposit
    | NominationPoolsCall_unlock_early_bird_bonus
    | NominationPoolsCall_withdraw_deposit
    | NominationPoolsCall_withdraw_free_balance
    | NominationPoolsCall_withdraw_unbonded

/**
 * See [`Pallet::bond`].
 */
export interface NominationPoolsCall_bond {
    __kind: 'bond'
    poolId: number
    amount: BondValue
}

/**
 * See [`Pallet::calculate_early_bird_bonus`].
 */
export interface NominationPoolsCall_calculate_early_bird_bonus {
    __kind: 'calculate_early_bird_bonus'
    poolCount: number
}

/**
 * See [`Pallet::capture_early_bird_bonus_shares`].
 */
export interface NominationPoolsCall_capture_early_bird_bonus_shares {
    __kind: 'capture_early_bird_bonus_shares'
    poolId: number
    accountCount: number
}

/**
 * See [`Pallet::chill`].
 */
export interface NominationPoolsCall_chill {
    __kind: 'chill'
    poolId: number
}

/**
 * See [`Pallet::create`].
 */
export interface NominationPoolsCall_create {
    __kind: 'create'
    tokenId: bigint
    deposit: bigint
    capacity: bigint
    duration: number
    name: BoundedVec
}

/**
 * See [`Pallet::destroy`].
 */
export interface NominationPoolsCall_destroy {
    __kind: 'destroy'
    poolId: number
}

/**
 * See [`Pallet::mutate`].
 */
export interface NominationPoolsCall_mutate {
    __kind: 'mutate'
    poolId: number
    mutation: PoolMutation
}

/**
 * See [`Pallet::nominate`].
 */
export interface NominationPoolsCall_nominate {
    __kind: 'nominate'
    poolId: number
    validators: AccountId32[]
}

/**
 * See [`Pallet::pay_early_bird_bonus`].
 */
export interface NominationPoolsCall_pay_early_bird_bonus {
    __kind: 'pay_early_bird_bonus'
    poolId: number
    paymentId: number
    accountCount: number
}

/**
 * See [`Pallet::payout_rewards`].
 */
export interface NominationPoolsCall_payout_rewards {
    __kind: 'payout_rewards'
    validatorStash: AccountId32
    era: number
}

/**
 * See [`Pallet::pool_withdraw_unbonded`].
 */
export interface NominationPoolsCall_pool_withdraw_unbonded {
    __kind: 'pool_withdraw_unbonded'
    poolId: number
    numSlashingSpans: number
}

/**
 * See [`Pallet::process_payouts`].
 */
export interface NominationPoolsCall_process_payouts {
    __kind: 'process_payouts'
    poolCount: number
}

/**
 * See [`Pallet::set_configs`].
 */
export interface NominationPoolsCall_set_configs {
    __kind: 'set_configs'
    minJoinBond: Type_405
    minCreateBond: Type_405
    globalMaxCommission: Type_406
    requiredPayoutCount: Type_406
}

/**
 * See [`Pallet::set_staking_info`].
 */
export interface NominationPoolsCall_set_staking_info {
    __kind: 'set_staking_info'
    info: StakingInfo
}

/**
 * See [`Pallet::unbond`].
 */
export interface NominationPoolsCall_unbond {
    __kind: 'unbond'
    poolId: number
    memberAccount: MultiAddress
    unbondingPoints: bigint
}

/**
 * See [`Pallet::unbond_deposit`].
 */
export interface NominationPoolsCall_unbond_deposit {
    __kind: 'unbond_deposit'
    poolId: number
}

/**
 * See [`Pallet::unlock_early_bird_bonus`].
 */
export interface NominationPoolsCall_unlock_early_bird_bonus {
    __kind: 'unlock_early_bird_bonus'
}

/**
 * See [`Pallet::withdraw_deposit`].
 */
export interface NominationPoolsCall_withdraw_deposit {
    __kind: 'withdraw_deposit'
    poolId: number
}

/**
 * See [`Pallet::withdraw_free_balance`].
 */
export interface NominationPoolsCall_withdraw_free_balance {
    __kind: 'withdraw_free_balance'
    poolId: number
    destination: MultiAddress
    amount: bigint
}

/**
 * See [`Pallet::withdraw_unbonded`].
 */
export interface NominationPoolsCall_withdraw_unbonded {
    __kind: 'withdraw_unbonded'
    poolId: number
    memberAccount: MultiAddress
    numSlashingSpans: number
}

export interface StakingInfo {
    annualInflationRate: Perbill
    collatorPayoutCut: Perbill
}

export type Type_406 = Type_406_Noop | Type_406_Remove | Type_406_Set

export interface Type_406_Noop {
    __kind: 'Noop'
}

export interface Type_406_Remove {
    __kind: 'Remove'
}

export interface Type_406_Set {
    __kind: 'Set'
    value: Perbill
}

export type Type_405 = Type_405_Noop | Type_405_Remove | Type_405_Set

export interface Type_405_Noop {
    __kind: 'Noop'
}

export interface Type_405_Remove {
    __kind: 'Remove'
}

export interface Type_405_Set {
    __kind: 'Set'
    value: bigint
}

export type BondValue = BondValue_Amount | BondValue_Fill

export interface BondValue_Amount {
    __kind: 'Amount'
    value: bigint
}

export interface BondValue_Fill {
    __kind: 'Fill'
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type MultisigCall =
    | MultisigCall_approve_as_multi
    | MultisigCall_as_multi
    | MultisigCall_as_multi_threshold_1
    | MultisigCall_cancel_as_multi

/**
 * See [`Pallet::approve_as_multi`].
 */
export interface MultisigCall_approve_as_multi {
    __kind: 'approve_as_multi'
    threshold: number
    otherSignatories: AccountId32[]
    maybeTimepoint?: Timepoint | undefined
    callHash: Bytes
    maxWeight: Weight
}

/**
 * See [`Pallet::as_multi`].
 */
export interface MultisigCall_as_multi {
    __kind: 'as_multi'
    threshold: number
    otherSignatories: AccountId32[]
    maybeTimepoint?: Timepoint | undefined
    call: Call
    maxWeight: Weight
}

/**
 * See [`Pallet::as_multi_threshold_1`].
 */
export interface MultisigCall_as_multi_threshold_1 {
    __kind: 'as_multi_threshold_1'
    otherSignatories: AccountId32[]
    call: Call
}

/**
 * See [`Pallet::cancel_as_multi`].
 */
export interface MultisigCall_cancel_as_multi {
    __kind: 'cancel_as_multi'
    threshold: number
    otherSignatories: AccountId32[]
    timepoint: Timepoint
    callHash: Bytes
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type MultiTokensCall =
    | MultiTokensCall_approve_collection
    | MultiTokensCall_approve_token
    | MultiTokensCall_batch_mint
    | MultiTokensCall_batch_set_attribute
    | MultiTokensCall_batch_transfer
    | MultiTokensCall_burn
    | MultiTokensCall_claim_collections
    | MultiTokensCall_claim_tokens
    | MultiTokensCall_create_collection
    | MultiTokensCall_destroy_collection
    | MultiTokensCall_finish_claim_tokens
    | MultiTokensCall_force_approve_collection
    | MultiTokensCall_force_burn
    | MultiTokensCall_force_create_collection
    | MultiTokensCall_force_create_ethereum_collection
    | MultiTokensCall_force_freeze
    | MultiTokensCall_force_mint
    | MultiTokensCall_force_mutate_collection
    | MultiTokensCall_force_set_attribute
    | MultiTokensCall_force_set_collection
    | MultiTokensCall_force_set_collection_account
    | MultiTokensCall_force_set_ethereum_account
    | MultiTokensCall_force_set_ethereum_collection_id
    | MultiTokensCall_force_set_ethereum_unmintable_token_ids
    | MultiTokensCall_force_set_next_collection_id
    | MultiTokensCall_force_set_token
    | MultiTokensCall_force_set_token_account
    | MultiTokensCall_force_set_unmintable_token_ids
    | MultiTokensCall_force_transfer
    | MultiTokensCall_freeze
    | MultiTokensCall_mint
    | MultiTokensCall_mutate_collection
    | MultiTokensCall_mutate_token
    | MultiTokensCall_remove_all_attributes
    | MultiTokensCall_remove_attribute
    | MultiTokensCall_set_attribute
    | MultiTokensCall_thaw
    | MultiTokensCall_transfer
    | MultiTokensCall_unapprove_collection
    | MultiTokensCall_unapprove_token

/**
 * See [`Pallet::approve_collection`].
 */
export interface MultiTokensCall_approve_collection {
    __kind: 'approve_collection'
    collectionId: bigint
    operator: AccountId32
    expiration?: number | undefined
}

/**
 * See [`Pallet::approve_token`].
 */
export interface MultiTokensCall_approve_token {
    __kind: 'approve_token'
    collectionId: bigint
    tokenId: bigint
    operator: AccountId32
    amount: bigint
    expiration?: number | undefined
    currentAmount: bigint
}

/**
 * See [`Pallet::batch_mint`].
 */
export interface MultiTokensCall_batch_mint {
    __kind: 'batch_mint'
    collectionId: bigint
    recipients: Type_527[]
}

/**
 * See [`Pallet::batch_set_attribute`].
 */
export interface MultiTokensCall_batch_set_attribute {
    __kind: 'batch_set_attribute'
    collectionId: bigint
    tokenId?: bigint | undefined
    attributes: AttributeKeyValuePair[]
}

/**
 * See [`Pallet::batch_transfer`].
 */
export interface MultiTokensCall_batch_transfer {
    __kind: 'batch_transfer'
    collectionId: bigint
    recipients: Recipient[]
}

/**
 * See [`Pallet::burn`].
 */
export interface MultiTokensCall_burn {
    __kind: 'burn'
    collectionId: bigint
    params: DefaultBurnParams
}

/**
 * See [`Pallet::claim_collections`].
 */
export interface MultiTokensCall_claim_collections {
    __kind: 'claim_collections'
    destination: AccountId32
    ethereumSignature: Bytes
    ethereumAddress: H160
    collectionCount: number
}

/**
 * See [`Pallet::claim_tokens`].
 */
export interface MultiTokensCall_claim_tokens {
    __kind: 'claim_tokens'
    destination: AccountId32
    ethereumSignature: Bytes
    ethereumAddress: H160
}

/**
 * See [`Pallet::create_collection`].
 */
export interface MultiTokensCall_create_collection {
    __kind: 'create_collection'
    descriptor: DefaultCollectionDescriptor
}

/**
 * See [`Pallet::destroy_collection`].
 */
export interface MultiTokensCall_destroy_collection {
    __kind: 'destroy_collection'
    collectionId: bigint
}

/**
 * See [`Pallet::finish_claim_tokens`].
 */
export interface MultiTokensCall_finish_claim_tokens {
    __kind: 'finish_claim_tokens'
    destination: AccountId32
    ethereumAddress: H160
}

/**
 * See [`Pallet::force_approve_collection`].
 */
export interface MultiTokensCall_force_approve_collection {
    __kind: 'force_approve_collection'
    caller: MultiAddress
    collectionId: bigint
    operator: AccountId32
    expiration?: number | undefined
}

/**
 * See [`Pallet::force_burn`].
 */
export interface MultiTokensCall_force_burn {
    __kind: 'force_burn'
    caller: MultiAddress
    collectionId: bigint
    params: DefaultBurnParams
}

/**
 * See [`Pallet::force_create_collection`].
 */
export interface MultiTokensCall_force_create_collection {
    __kind: 'force_create_collection'
    owner: AccountId32
    collectionId: bigint
    descriptor: DefaultCollectionDescriptor
}

/**
 * See [`Pallet::force_create_ethereum_collection`].
 */
export interface MultiTokensCall_force_create_ethereum_collection {
    __kind: 'force_create_ethereum_collection'
    owner: AccountId32
    claimer: H160
    ethereumCollectionId: bigint
    descriptor: DefaultCollectionDescriptor
}

/**
 * See [`Pallet::force_freeze`].
 */
export interface MultiTokensCall_force_freeze {
    __kind: 'force_freeze'
    info: Freeze
}

/**
 * See [`Pallet::force_mint`].
 */
export interface MultiTokensCall_force_mint {
    __kind: 'force_mint'
    caller?: MultiAddress | undefined
    recipient: MultiAddress
    collectionId: bigint
    params: FlexibleMintParams
    depositor?: MultiAddress | undefined
}

/**
 * See [`Pallet::force_mutate_collection`].
 */
export interface MultiTokensCall_force_mutate_collection {
    __kind: 'force_mutate_collection'
    collectionId: bigint
    mutation: DefaultCollectionMutation
}

/**
 * See [`Pallet::force_set_attribute`].
 */
export interface MultiTokensCall_force_set_attribute {
    __kind: 'force_set_attribute'
    collectionId: bigint
    tokenId?: bigint | undefined
    key: Bytes
    value?: Attribute | undefined
}

/**
 * See [`Pallet::force_set_collection`].
 */
export interface MultiTokensCall_force_set_collection {
    __kind: 'force_set_collection'
    collectionId: bigint
    value?: Collection | undefined
}

/**
 * See [`Pallet::force_set_collection_account`].
 */
export interface MultiTokensCall_force_set_collection_account {
    __kind: 'force_set_collection_account'
    collectionId: bigint
    accountId: MultiAddress
    value?: CollectionAccount | undefined
}

/**
 * See [`Pallet::force_set_ethereum_account`].
 */
export interface MultiTokensCall_force_set_ethereum_account {
    __kind: 'force_set_ethereum_account'
    address: H160
    value?: bigint[] | undefined
}

/**
 * See [`Pallet::force_set_ethereum_collection_id`].
 */
export interface MultiTokensCall_force_set_ethereum_collection_id {
    __kind: 'force_set_ethereum_collection_id'
    ethereumCollectionId: bigint
    nativeCollectionId?: bigint | undefined
}

/**
 * See [`Pallet::force_set_ethereum_unmintable_token_ids`].
 */
export interface MultiTokensCall_force_set_ethereum_unmintable_token_ids {
    __kind: 'force_set_ethereum_unmintable_token_ids'
    ethereumCollectionId: bigint
    baseTokenId: bigint
    tokenIndex: bigint
}

/**
 * See [`Pallet::force_set_next_collection_id`].
 */
export interface MultiTokensCall_force_set_next_collection_id {
    __kind: 'force_set_next_collection_id'
    value: bigint
}

/**
 * See [`Pallet::force_set_token`].
 */
export interface MultiTokensCall_force_set_token {
    __kind: 'force_set_token'
    collectionId: bigint
    tokenId: bigint
    value?: Token | undefined
}

/**
 * See [`Pallet::force_set_token_account`].
 */
export interface MultiTokensCall_force_set_token_account {
    __kind: 'force_set_token_account'
    collectionId: bigint
    tokenId: bigint
    accountId: MultiAddress
    value?: TokenAccount | undefined
}

/**
 * See [`Pallet::force_set_unmintable_token_ids`].
 */
export interface MultiTokensCall_force_set_unmintable_token_ids {
    __kind: 'force_set_unmintable_token_ids'
    collectionId: bigint
    baseTokenId: bigint
    tokenIndex: bigint
}

/**
 * See [`Pallet::force_transfer`].
 */
export interface MultiTokensCall_force_transfer {
    __kind: 'force_transfer'
    source: MultiAddress
    destination: MultiAddress
    collectionId: bigint
    params: DefaultTransferParams
}

/**
 * See [`Pallet::freeze`].
 */
export interface MultiTokensCall_freeze {
    __kind: 'freeze'
    info: Freeze
}

/**
 * See [`Pallet::mint`].
 */
export interface MultiTokensCall_mint {
    __kind: 'mint'
    recipient: MultiAddress
    collectionId: bigint
    params: DefaultMintParams
}

/**
 * See [`Pallet::mutate_collection`].
 */
export interface MultiTokensCall_mutate_collection {
    __kind: 'mutate_collection'
    collectionId: bigint
    mutation: DefaultCollectionMutation
}

/**
 * See [`Pallet::mutate_token`].
 */
export interface MultiTokensCall_mutate_token {
    __kind: 'mutate_token'
    collectionId: bigint
    tokenId: bigint
    mutation: DefaultTokenMutation
}

/**
 * See [`Pallet::remove_all_attributes`].
 */
export interface MultiTokensCall_remove_all_attributes {
    __kind: 'remove_all_attributes'
    collectionId: bigint
    tokenId?: bigint | undefined
    attributeCount: number
}

/**
 * See [`Pallet::remove_attribute`].
 */
export interface MultiTokensCall_remove_attribute {
    __kind: 'remove_attribute'
    collectionId: bigint
    tokenId?: bigint | undefined
    key: Bytes
}

/**
 * See [`Pallet::set_attribute`].
 */
export interface MultiTokensCall_set_attribute {
    __kind: 'set_attribute'
    collectionId: bigint
    tokenId?: bigint | undefined
    key: Bytes
    value: Bytes
}

/**
 * See [`Pallet::thaw`].
 */
export interface MultiTokensCall_thaw {
    __kind: 'thaw'
    info: Freeze
}

/**
 * See [`Pallet::transfer`].
 */
export interface MultiTokensCall_transfer {
    __kind: 'transfer'
    recipient: MultiAddress
    collectionId: bigint
    params: DefaultTransferParams
}

/**
 * See [`Pallet::unapprove_collection`].
 */
export interface MultiTokensCall_unapprove_collection {
    __kind: 'unapprove_collection'
    collectionId: bigint
    operator: AccountId32
}

/**
 * See [`Pallet::unapprove_token`].
 */
export interface MultiTokensCall_unapprove_token {
    __kind: 'unapprove_token'
    collectionId: bigint
    tokenId: bigint
    operator: AccountId32
}

export type DefaultMintParams = DefaultMintParams_CreateToken | DefaultMintParams_Mint

export interface DefaultMintParams_CreateToken {
    __kind: 'CreateToken'
    tokenId: bigint
    initialSupply: bigint
    sufficiency: SufficiencyParam
    cap?: TokenCap | undefined
    behavior?: TokenMarketBehavior | undefined
    listingForbidden: boolean
    freezeState?: FreezeState | undefined
    attributes: AttributeKeyValuePair[]
    foreignParams?: ForeignTokenCreationParams | undefined
}

export interface DefaultMintParams_Mint {
    __kind: 'Mint'
    tokenId: bigint
    amount: bigint
    unitPrice?: bigint | undefined
}

export interface ForeignTokenCreationParams {
    decimalCount: number
    name: BoundedString
    symbol: Bytes
    location?: V3MultiLocation | undefined
    unitsPerSecond?: bigint | undefined
}

export type SufficiencyParam = SufficiencyParam_Insufficient | SufficiencyParam_Sufficient

export interface SufficiencyParam_Insufficient {
    __kind: 'Insufficient'
    unitPrice?: bigint | undefined
}

export interface SufficiencyParam_Sufficient {
    __kind: 'Sufficient'
    minimumBalance: bigint
}

export type DefaultTransferParams = DefaultTransferParams_Operator | DefaultTransferParams_Simple

export interface DefaultTransferParams_Operator {
    __kind: 'Operator'
    tokenId: bigint
    source: AccountId32
    amount: bigint
    keepAlive: boolean
}

export interface DefaultTransferParams_Simple {
    __kind: 'Simple'
    tokenId: bigint
    amount: bigint
    keepAlive: boolean
}

export interface Attribute {
    value: Bytes
    deposit: bigint
}

export type FlexibleMintParams =
    | FlexibleMintParams_CreateOrMint
    | FlexibleMintParams_CreateToken
    | FlexibleMintParams_Mint

export interface FlexibleMintParams_CreateOrMint {
    __kind: 'CreateOrMint'
    tokenId: bigint
    amount: bigint
    sufficiency: SufficiencyParam
    cap?: TokenCap | undefined
    behavior?: TokenMarketBehavior | undefined
    listingForbidden: boolean
    freezeState?: FreezeState | undefined
    attributes: AttributeKeyValuePair[]
    foreignParams?: ForeignTokenCreationParams | undefined
}

export interface FlexibleMintParams_CreateToken {
    __kind: 'CreateToken'
    tokenId: bigint
    initialSupply: bigint
    sufficiency: SufficiencyParam
    cap?: TokenCap | undefined
    behavior?: TokenMarketBehavior | undefined
    listingForbidden: boolean
    freezeState?: FreezeState | undefined
    attributes: AttributeKeyValuePair[]
    foreignParams?: ForeignTokenCreationParams | undefined
}

export interface FlexibleMintParams_Mint {
    __kind: 'Mint'
    tokenId: bigint
    amount: bigint
    unitPrice?: bigint | undefined
}

export interface DefaultCollectionDescriptor {
    policy: DefaultCollectionPolicyDescriptor
    explicitRoyaltyCurrencies: AssetId[]
    attributes: AttributeKeyValuePair[]
}

export interface DefaultCollectionPolicyDescriptor {
    mint: DefaultMintPolicyDescriptor
    market: DefaultMarketPolicyDescriptor
}

export interface DefaultMarketPolicyDescriptor {
    royalty?: DefaultRoyalty | undefined
}

export interface DefaultMintPolicyDescriptor {
    maxTokenCount?: bigint | undefined
    maxTokenSupply?: bigint | undefined
    forceSingleMint: boolean
}

export interface DefaultBurnParams {
    tokenId: bigint
    amount: bigint
    keepAlive: boolean
    removeTokenStorage: boolean
}

export interface Recipient {
    accountId: AccountId32
    params: DefaultTransferParams
}

export interface AttributeKeyValuePair {
    key: Bytes
    value: Bytes
}

export interface Type_527 {
    accountId: AccountId32
    params: DefaultMintParams
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type MessageQueueCall = MessageQueueCall_execute_overweight | MessageQueueCall_reap_page

/**
 * See [`Pallet::execute_overweight`].
 */
export interface MessageQueueCall_execute_overweight {
    __kind: 'execute_overweight'
    messageOrigin: AggregateMessageOrigin
    page: number
    index: number
    weightLimit: Weight
}

/**
 * See [`Pallet::reap_page`].
 */
export interface MessageQueueCall_reap_page {
    __kind: 'reap_page'
    messageOrigin: AggregateMessageOrigin
    pageIndex: number
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type MarketplaceCall =
    | MarketplaceCall_cancel_listing
    | MarketplaceCall_create_listing
    | MarketplaceCall_fill_listing
    | MarketplaceCall_finalize_auction
    | MarketplaceCall_force_create_listing
    | MarketplaceCall_force_place_bid
    | MarketplaceCall_place_bid
    | MarketplaceCall_set_protocol_fee

/**
 * See [`Pallet::cancel_listing`].
 */
export interface MarketplaceCall_cancel_listing {
    __kind: 'cancel_listing'
    listingId: H256
}

/**
 * See [`Pallet::create_listing`].
 */
export interface MarketplaceCall_create_listing {
    __kind: 'create_listing'
    makeAssetId: AssetId
    takeAssetId: AssetId
    amount: bigint
    price: bigint
    salt: Bytes
    auctionData?: AuctionData | undefined
}

/**
 * See [`Pallet::fill_listing`].
 */
export interface MarketplaceCall_fill_listing {
    __kind: 'fill_listing'
    listingId: H256
    amount: bigint
}

/**
 * See [`Pallet::finalize_auction`].
 */
export interface MarketplaceCall_finalize_auction {
    __kind: 'finalize_auction'
    listingId: H256
}

/**
 * See [`Pallet::force_create_listing`].
 */
export interface MarketplaceCall_force_create_listing {
    __kind: 'force_create_listing'
    seller: MultiAddress
    makeAssetId: AssetId
    takeAssetId: AssetId
    amount: bigint
    price: bigint
    salt: Bytes
    auctionData?: AuctionData | undefined
    depositBacker?: MultiAddress | undefined
}

/**
 * See [`Pallet::force_place_bid`].
 */
export interface MarketplaceCall_force_place_bid {
    __kind: 'force_place_bid'
    bidder: MultiAddress
    listingId: H256
    price: bigint
    fundsBacker?: MultiAddress | undefined
}

/**
 * See [`Pallet::place_bid`].
 */
export interface MarketplaceCall_place_bid {
    __kind: 'place_bid'
    listingId: H256
    price: bigint
}

/**
 * See [`Pallet::set_protocol_fee`].
 */
export interface MarketplaceCall_set_protocol_fee {
    __kind: 'set_protocol_fee'
    protocolFee: Perbill
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type InitializerCall = InitializerCall_force_approve

/**
 * See [`Pallet::force_approve`].
 */
export interface InitializerCall_force_approve {
    __kind: 'force_approve'
    upTo: number
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type ImOnlineCall = ImOnlineCall_heartbeat

/**
 * See [`Pallet::heartbeat`].
 */
export interface ImOnlineCall_heartbeat {
    __kind: 'heartbeat'
    heartbeat: Heartbeat
    signature: Bytes
}

/**
 * Identity pallet declaration.
 */
export type IdentityCall =
    | IdentityCall_add_registrar
    | IdentityCall_add_sub
    | IdentityCall_cancel_request
    | IdentityCall_clear_identity
    | IdentityCall_kill_identity
    | IdentityCall_provide_judgement
    | IdentityCall_quit_sub
    | IdentityCall_remove_sub
    | IdentityCall_rename_sub
    | IdentityCall_request_judgement
    | IdentityCall_set_account_id
    | IdentityCall_set_fee
    | IdentityCall_set_fields
    | IdentityCall_set_identity
    | IdentityCall_set_subs

/**
 * See [`Pallet::add_registrar`].
 */
export interface IdentityCall_add_registrar {
    __kind: 'add_registrar'
    account: MultiAddress
}

/**
 * See [`Pallet::add_sub`].
 */
export interface IdentityCall_add_sub {
    __kind: 'add_sub'
    sub: MultiAddress
    data: Data
}

/**
 * See [`Pallet::cancel_request`].
 */
export interface IdentityCall_cancel_request {
    __kind: 'cancel_request'
    regIndex: number
}

/**
 * See [`Pallet::clear_identity`].
 */
export interface IdentityCall_clear_identity {
    __kind: 'clear_identity'
}

/**
 * See [`Pallet::kill_identity`].
 */
export interface IdentityCall_kill_identity {
    __kind: 'kill_identity'
    target: MultiAddress
}

/**
 * See [`Pallet::provide_judgement`].
 */
export interface IdentityCall_provide_judgement {
    __kind: 'provide_judgement'
    regIndex: number
    target: MultiAddress
    judgement: Judgement
    identity: H256
}

/**
 * See [`Pallet::quit_sub`].
 */
export interface IdentityCall_quit_sub {
    __kind: 'quit_sub'
}

/**
 * See [`Pallet::remove_sub`].
 */
export interface IdentityCall_remove_sub {
    __kind: 'remove_sub'
    sub: MultiAddress
}

/**
 * See [`Pallet::rename_sub`].
 */
export interface IdentityCall_rename_sub {
    __kind: 'rename_sub'
    sub: MultiAddress
    data: Data
}

/**
 * See [`Pallet::request_judgement`].
 */
export interface IdentityCall_request_judgement {
    __kind: 'request_judgement'
    regIndex: number
    maxFee: bigint
}

/**
 * See [`Pallet::set_account_id`].
 */
export interface IdentityCall_set_account_id {
    __kind: 'set_account_id'
    index: number
    new: MultiAddress
}

/**
 * See [`Pallet::set_fee`].
 */
export interface IdentityCall_set_fee {
    __kind: 'set_fee'
    index: number
    fee: bigint
}

/**
 * See [`Pallet::set_fields`].
 */
export interface IdentityCall_set_fields {
    __kind: 'set_fields'
    index: number
    fields: BitFlags
}

/**
 * See [`Pallet::set_identity`].
 */
export interface IdentityCall_set_identity {
    __kind: 'set_identity'
    info: IdentityInfo
}

/**
 * See [`Pallet::set_subs`].
 */
export interface IdentityCall_set_subs {
    __kind: 'set_subs'
    subs: [AccountId32, Data][]
}

export interface IdentityInfo {
    additional: [Data, Data][]
    display: Data
    legal: Data
    web: Data
    riot: Data
    email: Data
    pgpFingerprint?: Bytes | undefined
    image: Data
    twitter: Data
}

export type BitFlags = bigint

export type Judgement =
    | Judgement_Erroneous
    | Judgement_FeePaid
    | Judgement_KnownGood
    | Judgement_LowQuality
    | Judgement_OutOfDate
    | Judgement_Reasonable
    | Judgement_Unknown

export interface Judgement_Erroneous {
    __kind: 'Erroneous'
}

export interface Judgement_FeePaid {
    __kind: 'FeePaid'
    value: bigint
}

export interface Judgement_KnownGood {
    __kind: 'KnownGood'
}

export interface Judgement_LowQuality {
    __kind: 'LowQuality'
}

export interface Judgement_OutOfDate {
    __kind: 'OutOfDate'
}

export interface Judgement_Reasonable {
    __kind: 'Reasonable'
}

export interface Judgement_Unknown {
    __kind: 'Unknown'
}

export type Data =
    | Data_BlakeTwo256
    | Data_Keccak256
    | Data_None
    | Data_Raw0
    | Data_Raw1
    | Data_Raw10
    | Data_Raw11
    | Data_Raw12
    | Data_Raw13
    | Data_Raw14
    | Data_Raw15
    | Data_Raw16
    | Data_Raw17
    | Data_Raw18
    | Data_Raw19
    | Data_Raw2
    | Data_Raw20
    | Data_Raw21
    | Data_Raw22
    | Data_Raw23
    | Data_Raw24
    | Data_Raw25
    | Data_Raw26
    | Data_Raw27
    | Data_Raw28
    | Data_Raw29
    | Data_Raw3
    | Data_Raw30
    | Data_Raw31
    | Data_Raw32
    | Data_Raw4
    | Data_Raw5
    | Data_Raw6
    | Data_Raw7
    | Data_Raw8
    | Data_Raw9
    | Data_Sha256
    | Data_ShaThree256

export interface Data_BlakeTwo256 {
    __kind: 'BlakeTwo256'
    value: Bytes
}

export interface Data_Keccak256 {
    __kind: 'Keccak256'
    value: Bytes
}

export interface Data_None {
    __kind: 'None'
}

export interface Data_Raw0 {
    __kind: 'Raw0'
    value: Bytes
}

export interface Data_Raw1 {
    __kind: 'Raw1'
    value: Bytes
}

export interface Data_Raw10 {
    __kind: 'Raw10'
    value: Bytes
}

export interface Data_Raw11 {
    __kind: 'Raw11'
    value: Bytes
}

export interface Data_Raw12 {
    __kind: 'Raw12'
    value: Bytes
}

export interface Data_Raw13 {
    __kind: 'Raw13'
    value: Bytes
}

export interface Data_Raw14 {
    __kind: 'Raw14'
    value: Bytes
}

export interface Data_Raw15 {
    __kind: 'Raw15'
    value: Bytes
}

export interface Data_Raw16 {
    __kind: 'Raw16'
    value: Bytes
}

export interface Data_Raw17 {
    __kind: 'Raw17'
    value: Bytes
}

export interface Data_Raw18 {
    __kind: 'Raw18'
    value: Bytes
}

export interface Data_Raw19 {
    __kind: 'Raw19'
    value: Bytes
}

export interface Data_Raw2 {
    __kind: 'Raw2'
    value: Bytes
}

export interface Data_Raw20 {
    __kind: 'Raw20'
    value: Bytes
}

export interface Data_Raw21 {
    __kind: 'Raw21'
    value: Bytes
}

export interface Data_Raw22 {
    __kind: 'Raw22'
    value: Bytes
}

export interface Data_Raw23 {
    __kind: 'Raw23'
    value: Bytes
}

export interface Data_Raw24 {
    __kind: 'Raw24'
    value: Bytes
}

export interface Data_Raw25 {
    __kind: 'Raw25'
    value: Bytes
}

export interface Data_Raw26 {
    __kind: 'Raw26'
    value: Bytes
}

export interface Data_Raw27 {
    __kind: 'Raw27'
    value: Bytes
}

export interface Data_Raw28 {
    __kind: 'Raw28'
    value: Bytes
}

export interface Data_Raw29 {
    __kind: 'Raw29'
    value: Bytes
}

export interface Data_Raw3 {
    __kind: 'Raw3'
    value: Bytes
}

export interface Data_Raw30 {
    __kind: 'Raw30'
    value: Bytes
}

export interface Data_Raw31 {
    __kind: 'Raw31'
    value: Bytes
}

export interface Data_Raw32 {
    __kind: 'Raw32'
    value: Bytes
}

export interface Data_Raw4 {
    __kind: 'Raw4'
    value: Bytes
}

export interface Data_Raw5 {
    __kind: 'Raw5'
    value: Bytes
}

export interface Data_Raw6 {
    __kind: 'Raw6'
    value: Bytes
}

export interface Data_Raw7 {
    __kind: 'Raw7'
    value: Bytes
}

export interface Data_Raw8 {
    __kind: 'Raw8'
    value: Bytes
}

export interface Data_Raw9 {
    __kind: 'Raw9'
    value: Bytes
}

export interface Data_Sha256 {
    __kind: 'Sha256'
    value: Bytes
}

export interface Data_ShaThree256 {
    __kind: 'ShaThree256'
    value: Bytes
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type HrmpCall =
    | HrmpCall_force_clean_hrmp
    | HrmpCall_force_open_hrmp_channel
    | HrmpCall_force_process_hrmp_close
    | HrmpCall_force_process_hrmp_open
    | HrmpCall_hrmp_accept_open_channel
    | HrmpCall_hrmp_cancel_open_request
    | HrmpCall_hrmp_close_channel
    | HrmpCall_hrmp_init_open_channel

/**
 * See [`Pallet::force_clean_hrmp`].
 */
export interface HrmpCall_force_clean_hrmp {
    __kind: 'force_clean_hrmp'
    para: Id
    inbound: number
    outbound: number
}

/**
 * See [`Pallet::force_open_hrmp_channel`].
 */
export interface HrmpCall_force_open_hrmp_channel {
    __kind: 'force_open_hrmp_channel'
    sender: Id
    recipient: Id
    maxCapacity: number
    maxMessageSize: number
}

/**
 * See [`Pallet::force_process_hrmp_close`].
 */
export interface HrmpCall_force_process_hrmp_close {
    __kind: 'force_process_hrmp_close'
    channels: number
}

/**
 * See [`Pallet::force_process_hrmp_open`].
 */
export interface HrmpCall_force_process_hrmp_open {
    __kind: 'force_process_hrmp_open'
    channels: number
}

/**
 * See [`Pallet::hrmp_accept_open_channel`].
 */
export interface HrmpCall_hrmp_accept_open_channel {
    __kind: 'hrmp_accept_open_channel'
    sender: Id
}

/**
 * See [`Pallet::hrmp_cancel_open_request`].
 */
export interface HrmpCall_hrmp_cancel_open_request {
    __kind: 'hrmp_cancel_open_request'
    channelId: HrmpChannelId
    openRequests: number
}

/**
 * See [`Pallet::hrmp_close_channel`].
 */
export interface HrmpCall_hrmp_close_channel {
    __kind: 'hrmp_close_channel'
    channelId: HrmpChannelId
}

/**
 * See [`Pallet::hrmp_init_open_channel`].
 */
export interface HrmpCall_hrmp_init_open_channel {
    __kind: 'hrmp_init_open_channel'
    recipient: Id
    proposedMaxCapacity: number
    proposedMaxMessageSize: number
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type GrandpaCall =
    | GrandpaCall_note_stalled
    | GrandpaCall_report_equivocation
    | GrandpaCall_report_equivocation_unsigned

/**
 * See [`Pallet::note_stalled`].
 */
export interface GrandpaCall_note_stalled {
    __kind: 'note_stalled'
    delay: number
    bestFinalizedBlockNumber: number
}

/**
 * See [`Pallet::report_equivocation`].
 */
export interface GrandpaCall_report_equivocation {
    __kind: 'report_equivocation'
    equivocationProof: Type_387
    keyOwnerProof: MembershipProof
}

/**
 * See [`Pallet::report_equivocation_unsigned`].
 */
export interface GrandpaCall_report_equivocation_unsigned {
    __kind: 'report_equivocation_unsigned'
    equivocationProof: Type_387
    keyOwnerProof: MembershipProof
}

export interface Type_387 {
    setId: bigint
    equivocation: Equivocation
}

export type Equivocation = Equivocation_Precommit | Equivocation_Prevote

export interface Equivocation_Precommit {
    __kind: 'Precommit'
    value: Type_394
}

export interface Equivocation_Prevote {
    __kind: 'Prevote'
    value: Type_389
}

export interface Type_389 {
    roundNumber: bigint
    identity: Public
    first: [Prevote, Bytes]
    second: [Prevote, Bytes]
}

export interface Prevote {
    targetHash: H256
    targetNumber: number
}

export interface Type_394 {
    roundNumber: bigint
    identity: Public
    first: [Precommit, Bytes]
    second: [Precommit, Bytes]
}

export interface Precommit {
    targetHash: H256
    targetNumber: number
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type FuelTanksCall =
    | FuelTanksCall_add_account
    | FuelTanksCall_batch_add_account
    | FuelTanksCall_batch_remove_account
    | FuelTanksCall_create_fuel_tank
    | FuelTanksCall_destroy_fuel_tank
    | FuelTanksCall_dispatch
    | FuelTanksCall_dispatch_and_touch
    | FuelTanksCall_force_batch_add_account
    | FuelTanksCall_force_create_fuel_tank
    | FuelTanksCall_force_set_consumption
    | FuelTanksCall_insert_rule_set
    | FuelTanksCall_mutate_freeze_state
    | FuelTanksCall_mutate_fuel_tank
    | FuelTanksCall_remove_account
    | FuelTanksCall_remove_account_rule_data
    | FuelTanksCall_remove_rule_set

/**
 * See [`Pallet::add_account`].
 */
export interface FuelTanksCall_add_account {
    __kind: 'add_account'
    tankId: MultiAddress
    userId: MultiAddress
}

/**
 * See [`Pallet::batch_add_account`].
 */
export interface FuelTanksCall_batch_add_account {
    __kind: 'batch_add_account'
    tankId: MultiAddress
    userIds: MultiAddress[]
}

/**
 * See [`Pallet::batch_remove_account`].
 */
export interface FuelTanksCall_batch_remove_account {
    __kind: 'batch_remove_account'
    tankId: MultiAddress
    userIds: MultiAddress[]
}

/**
 * See [`Pallet::create_fuel_tank`].
 */
export interface FuelTanksCall_create_fuel_tank {
    __kind: 'create_fuel_tank'
    descriptor: FuelTankDescriptor
}

/**
 * See [`Pallet::destroy_fuel_tank`].
 */
export interface FuelTanksCall_destroy_fuel_tank {
    __kind: 'destroy_fuel_tank'
    tankId: MultiAddress
}

/**
 * See [`Pallet::dispatch`].
 */
export interface FuelTanksCall_dispatch {
    __kind: 'dispatch'
    tankId: MultiAddress
    ruleSetId: number
    call: Call
    settings?: DispatchSettings | undefined
}

/**
 * See [`Pallet::dispatch_and_touch`].
 */
export interface FuelTanksCall_dispatch_and_touch {
    __kind: 'dispatch_and_touch'
    tankId: MultiAddress
    ruleSetId: number
    call: Call
    settings?: DispatchSettings | undefined
}

/**
 * See [`Pallet::force_batch_add_account`].
 */
export interface FuelTanksCall_force_batch_add_account {
    __kind: 'force_batch_add_account'
    owner: MultiAddress
    tankId: MultiAddress
    userIds: MultiAddress[]
}

/**
 * See [`Pallet::force_create_fuel_tank`].
 */
export interface FuelTanksCall_force_create_fuel_tank {
    __kind: 'force_create_fuel_tank'
    owner: MultiAddress
    descriptor: FuelTankDescriptor
}

/**
 * See [`Pallet::force_set_consumption`].
 */
export interface FuelTanksCall_force_set_consumption {
    __kind: 'force_set_consumption'
    tankId: MultiAddress
    userId?: MultiAddress | undefined
    ruleSetId: number
    consumption: Consumption
}

/**
 * See [`Pallet::insert_rule_set`].
 */
export interface FuelTanksCall_insert_rule_set {
    __kind: 'insert_rule_set'
    tankId: MultiAddress
    ruleSetId: number
    rules: DispatchRuleDescriptor[]
}

/**
 * See [`Pallet::mutate_freeze_state`].
 */
export interface FuelTanksCall_mutate_freeze_state {
    __kind: 'mutate_freeze_state'
    tankId: MultiAddress
    ruleSetId?: number | undefined
    isFrozen: boolean
}

/**
 * See [`Pallet::mutate_fuel_tank`].
 */
export interface FuelTanksCall_mutate_fuel_tank {
    __kind: 'mutate_fuel_tank'
    tankId: MultiAddress
    mutation: DefaultTankMutation
}

/**
 * See [`Pallet::remove_account`].
 */
export interface FuelTanksCall_remove_account {
    __kind: 'remove_account'
    tankId: MultiAddress
    userId: MultiAddress
}

/**
 * See [`Pallet::remove_account_rule_data`].
 */
export interface FuelTanksCall_remove_account_rule_data {
    __kind: 'remove_account_rule_data'
    tankId: MultiAddress
    userId: MultiAddress
    ruleSetId: number
    ruleKind: DispatchRuleKind
}

/**
 * See [`Pallet::remove_rule_set`].
 */
export interface FuelTanksCall_remove_rule_set {
    __kind: 'remove_rule_set'
    tankId: MultiAddress
    ruleSetId: number
}

export interface DispatchSettings {
    useNoneOrigin: boolean
    paysRemainingFee: boolean
}

export interface FuelTankDescriptor {
    name: Bytes
    userAccountManagement?: UserAccountManagement | undefined
    ruleSets: [number, DispatchRuleDescriptor[]][]
    providesDeposit: boolean
    accountRules: AccountRuleDescriptor[]
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type FellowshipReferendaCall =
    | FellowshipReferendaCall_cancel
    | FellowshipReferendaCall_kill
    | FellowshipReferendaCall_nudge_referendum
    | FellowshipReferendaCall_one_fewer_deciding
    | FellowshipReferendaCall_place_decision_deposit
    | FellowshipReferendaCall_refund_decision_deposit
    | FellowshipReferendaCall_refund_submission_deposit
    | FellowshipReferendaCall_set_metadata
    | FellowshipReferendaCall_submit

/**
 * See [`Pallet::cancel`].
 */
export interface FellowshipReferendaCall_cancel {
    __kind: 'cancel'
    index: number
}

/**
 * See [`Pallet::kill`].
 */
export interface FellowshipReferendaCall_kill {
    __kind: 'kill'
    index: number
}

/**
 * See [`Pallet::nudge_referendum`].
 */
export interface FellowshipReferendaCall_nudge_referendum {
    __kind: 'nudge_referendum'
    index: number
}

/**
 * See [`Pallet::one_fewer_deciding`].
 */
export interface FellowshipReferendaCall_one_fewer_deciding {
    __kind: 'one_fewer_deciding'
    track: number
}

/**
 * See [`Pallet::place_decision_deposit`].
 */
export interface FellowshipReferendaCall_place_decision_deposit {
    __kind: 'place_decision_deposit'
    index: number
}

/**
 * See [`Pallet::refund_decision_deposit`].
 */
export interface FellowshipReferendaCall_refund_decision_deposit {
    __kind: 'refund_decision_deposit'
    index: number
}

/**
 * See [`Pallet::refund_submission_deposit`].
 */
export interface FellowshipReferendaCall_refund_submission_deposit {
    __kind: 'refund_submission_deposit'
    index: number
}

/**
 * See [`Pallet::set_metadata`].
 */
export interface FellowshipReferendaCall_set_metadata {
    __kind: 'set_metadata'
    index: number
    maybeHash?: H256 | undefined
}

/**
 * See [`Pallet::submit`].
 */
export interface FellowshipReferendaCall_submit {
    __kind: 'submit'
    proposalOrigin: OriginCaller
    proposal: Bounded
    enactmentMoment: DispatchTime
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type FellowshipCollectiveCall =
    | FellowshipCollectiveCall_add_member
    | FellowshipCollectiveCall_cleanup_poll
    | FellowshipCollectiveCall_demote_member
    | FellowshipCollectiveCall_promote_member
    | FellowshipCollectiveCall_remove_member
    | FellowshipCollectiveCall_vote

/**
 * See [`Pallet::add_member`].
 */
export interface FellowshipCollectiveCall_add_member {
    __kind: 'add_member'
    who: MultiAddress
}

/**
 * See [`Pallet::cleanup_poll`].
 */
export interface FellowshipCollectiveCall_cleanup_poll {
    __kind: 'cleanup_poll'
    pollIndex: number
    max: number
}

/**
 * See [`Pallet::demote_member`].
 */
export interface FellowshipCollectiveCall_demote_member {
    __kind: 'demote_member'
    who: MultiAddress
}

/**
 * See [`Pallet::promote_member`].
 */
export interface FellowshipCollectiveCall_promote_member {
    __kind: 'promote_member'
    who: MultiAddress
}

/**
 * See [`Pallet::remove_member`].
 */
export interface FellowshipCollectiveCall_remove_member {
    __kind: 'remove_member'
    who: MultiAddress
    minRank: number
}

/**
 * See [`Pallet::vote`].
 */
export interface FellowshipCollectiveCall_vote {
    __kind: 'vote'
    poll: number
    aye: boolean
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type ExtrinsicPauseCall = ExtrinsicPauseCall_pause_extrinsic | ExtrinsicPauseCall_resume_extrinsic

/**
 * See [`Pallet::pause_extrinsic`].
 */
export interface ExtrinsicPauseCall_pause_extrinsic {
    __kind: 'pause_extrinsic'
    call: Call
    pauseOnlyExtrinsic: boolean
}

/**
 * See [`Pallet::resume_extrinsic`].
 */
export interface ExtrinsicPauseCall_resume_extrinsic {
    __kind: 'resume_extrinsic'
    call: Call
    resumeOnlyExtrinsic: boolean
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type ElectionProviderMultiPhaseCall =
    | ElectionProviderMultiPhaseCall_governance_fallback
    | ElectionProviderMultiPhaseCall_set_emergency_election_result
    | ElectionProviderMultiPhaseCall_set_minimum_untrusted_score
    | ElectionProviderMultiPhaseCall_submit
    | ElectionProviderMultiPhaseCall_submit_unsigned

/**
 * See [`Pallet::governance_fallback`].
 */
export interface ElectionProviderMultiPhaseCall_governance_fallback {
    __kind: 'governance_fallback'
    maybeMaxVoters?: number | undefined
    maybeMaxTargets?: number | undefined
}

/**
 * See [`Pallet::set_emergency_election_result`].
 */
export interface ElectionProviderMultiPhaseCall_set_emergency_election_result {
    __kind: 'set_emergency_election_result'
    supports: [AccountId32, Support][]
}

/**
 * See [`Pallet::set_minimum_untrusted_score`].
 */
export interface ElectionProviderMultiPhaseCall_set_minimum_untrusted_score {
    __kind: 'set_minimum_untrusted_score'
    maybeNextScore?: ElectionScore | undefined
}

/**
 * See [`Pallet::submit`].
 */
export interface ElectionProviderMultiPhaseCall_submit {
    __kind: 'submit'
    rawSolution: RawSolution
}

/**
 * See [`Pallet::submit_unsigned`].
 */
export interface ElectionProviderMultiPhaseCall_submit_unsigned {
    __kind: 'submit_unsigned'
    rawSolution: RawSolution
    witness: SolutionOrSnapshotSize
}

export interface SolutionOrSnapshotSize {
    voters: number
    targets: number
}

export interface RawSolution {
    solution: NposSolution16
    score: ElectionScore
    round: number
}

export interface NposSolution16 {
    votes1: [number, number][]
    votes2: [number, [number, number], number][]
    votes3: [number, [number, number][], number][]
    votes4: [number, [number, number][], number][]
    votes5: [number, [number, number][], number][]
    votes6: [number, [number, number][], number][]
    votes7: [number, [number, number][], number][]
    votes8: [number, [number, number][], number][]
    votes9: [number, [number, number][], number][]
    votes10: [number, [number, number][], number][]
    votes11: [number, [number, number][], number][]
    votes12: [number, [number, number][], number][]
    votes13: [number, [number, number][], number][]
    votes14: [number, [number, number][], number][]
    votes15: [number, [number, number][], number][]
    votes16: [number, [number, number][], number][]
}

export interface Support {
    total: bigint
    voters: [AccountId32, bigint][]
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type CrowdloanCall =
    | CrowdloanCall_add_memo
    | CrowdloanCall_contribute
    | CrowdloanCall_contribute_all
    | CrowdloanCall_create
    | CrowdloanCall_dissolve
    | CrowdloanCall_edit
    | CrowdloanCall_poke
    | CrowdloanCall_refund
    | CrowdloanCall_withdraw

/**
 * See [`Pallet::add_memo`].
 */
export interface CrowdloanCall_add_memo {
    __kind: 'add_memo'
    index: Id
    memo: Bytes
}

/**
 * See [`Pallet::contribute`].
 */
export interface CrowdloanCall_contribute {
    __kind: 'contribute'
    index: number
    value: bigint
    signature?: MultiSignature | undefined
}

/**
 * See [`Pallet::contribute_all`].
 */
export interface CrowdloanCall_contribute_all {
    __kind: 'contribute_all'
    index: number
    signature?: MultiSignature | undefined
}

/**
 * See [`Pallet::create`].
 */
export interface CrowdloanCall_create {
    __kind: 'create'
    index: number
    cap: bigint
    firstPeriod: number
    lastPeriod: number
    end: number
    verifier?: MultiSigner | undefined
}

/**
 * See [`Pallet::dissolve`].
 */
export interface CrowdloanCall_dissolve {
    __kind: 'dissolve'
    index: number
}

/**
 * See [`Pallet::edit`].
 */
export interface CrowdloanCall_edit {
    __kind: 'edit'
    index: number
    cap: bigint
    firstPeriod: number
    lastPeriod: number
    end: number
    verifier?: MultiSigner | undefined
}

/**
 * See [`Pallet::poke`].
 */
export interface CrowdloanCall_poke {
    __kind: 'poke'
    index: Id
}

/**
 * See [`Pallet::refund`].
 */
export interface CrowdloanCall_refund {
    __kind: 'refund'
    index: number
}

/**
 * See [`Pallet::withdraw`].
 */
export interface CrowdloanCall_withdraw {
    __kind: 'withdraw'
    who: AccountId32
    index: number
}

export type MultiSigner = MultiSigner_Ecdsa | MultiSigner_Ed25519 | MultiSigner_Sr25519

export interface MultiSigner_Ecdsa {
    __kind: 'Ecdsa'
    value: Bytes
}

export interface MultiSigner_Ed25519 {
    __kind: 'Ed25519'
    value: Bytes
}

export interface MultiSigner_Sr25519 {
    __kind: 'Sr25519'
    value: Bytes
}

export type MultiSignature = MultiSignature_Ecdsa | MultiSignature_Ed25519 | MultiSignature_Sr25519

export interface MultiSignature_Ecdsa {
    __kind: 'Ecdsa'
    value: Bytes
}

export interface MultiSignature_Ed25519 {
    __kind: 'Ed25519'
    value: Bytes
}

export interface MultiSignature_Sr25519 {
    __kind: 'Sr25519'
    value: Signature
}

export type Signature = Bytes

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type ConvictionVotingCall =
    | ConvictionVotingCall_delegate
    | ConvictionVotingCall_remove_other_vote
    | ConvictionVotingCall_remove_vote
    | ConvictionVotingCall_undelegate
    | ConvictionVotingCall_unlock
    | ConvictionVotingCall_vote

/**
 * See [`Pallet::delegate`].
 */
export interface ConvictionVotingCall_delegate {
    __kind: 'delegate'
    class: number
    to: MultiAddress
    conviction: Conviction
    balance: bigint
}

/**
 * See [`Pallet::remove_other_vote`].
 */
export interface ConvictionVotingCall_remove_other_vote {
    __kind: 'remove_other_vote'
    target: MultiAddress
    class: number
    index: number
}

/**
 * See [`Pallet::remove_vote`].
 */
export interface ConvictionVotingCall_remove_vote {
    __kind: 'remove_vote'
    class?: number | undefined
    index: number
}

/**
 * See [`Pallet::undelegate`].
 */
export interface ConvictionVotingCall_undelegate {
    __kind: 'undelegate'
    class: number
}

/**
 * See [`Pallet::unlock`].
 */
export interface ConvictionVotingCall_unlock {
    __kind: 'unlock'
    class: number
    target: MultiAddress
}

/**
 * See [`Pallet::vote`].
 */
export interface ConvictionVotingCall_vote {
    __kind: 'vote'
    pollIndex: number
    vote: AccountVote
}

export type Conviction =
    | Conviction_Locked1x
    | Conviction_Locked2x
    | Conviction_Locked3x
    | Conviction_Locked4x
    | Conviction_Locked5x
    | Conviction_Locked6x
    | Conviction_None

export interface Conviction_Locked1x {
    __kind: 'Locked1x'
}

export interface Conviction_Locked2x {
    __kind: 'Locked2x'
}

export interface Conviction_Locked3x {
    __kind: 'Locked3x'
}

export interface Conviction_Locked4x {
    __kind: 'Locked4x'
}

export interface Conviction_Locked5x {
    __kind: 'Locked5x'
}

export interface Conviction_Locked6x {
    __kind: 'Locked6x'
}

export interface Conviction_None {
    __kind: 'None'
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type ConfigurationCall =
    | ConfigurationCall_set_async_backing_params
    | ConfigurationCall_set_bypass_consistency_check
    | ConfigurationCall_set_chain_availability_period
    | ConfigurationCall_set_code_retention_period
    | ConfigurationCall_set_dispute_period
    | ConfigurationCall_set_dispute_post_conclusion_acceptance_period
    | ConfigurationCall_set_executor_params
    | ConfigurationCall_set_group_rotation_frequency
    | ConfigurationCall_set_hrmp_channel_max_capacity
    | ConfigurationCall_set_hrmp_channel_max_message_size
    | ConfigurationCall_set_hrmp_channel_max_total_size
    | ConfigurationCall_set_hrmp_max_message_num_per_candidate
    | ConfigurationCall_set_hrmp_max_parachain_inbound_channels
    | ConfigurationCall_set_hrmp_max_parachain_outbound_channels
    | ConfigurationCall_set_hrmp_max_parathread_inbound_channels
    | ConfigurationCall_set_hrmp_max_parathread_outbound_channels
    | ConfigurationCall_set_hrmp_open_request_ttl
    | ConfigurationCall_set_hrmp_recipient_deposit
    | ConfigurationCall_set_hrmp_sender_deposit
    | ConfigurationCall_set_max_code_size
    | ConfigurationCall_set_max_downward_message_size
    | ConfigurationCall_set_max_head_data_size
    | ConfigurationCall_set_max_pov_size
    | ConfigurationCall_set_max_upward_message_num_per_candidate
    | ConfigurationCall_set_max_upward_message_size
    | ConfigurationCall_set_max_upward_queue_count
    | ConfigurationCall_set_max_upward_queue_size
    | ConfigurationCall_set_max_validators
    | ConfigurationCall_set_max_validators_per_core
    | ConfigurationCall_set_minimum_validation_upgrade_delay
    | ConfigurationCall_set_n_delay_tranches
    | ConfigurationCall_set_needed_approvals
    | ConfigurationCall_set_no_show_slots
    | ConfigurationCall_set_parathread_cores
    | ConfigurationCall_set_parathread_retries
    | ConfigurationCall_set_pvf_checking_enabled
    | ConfigurationCall_set_pvf_voting_ttl
    | ConfigurationCall_set_relay_vrf_modulo_samples
    | ConfigurationCall_set_scheduling_lookahead
    | ConfigurationCall_set_thread_availability_period
    | ConfigurationCall_set_validation_upgrade_cooldown
    | ConfigurationCall_set_validation_upgrade_delay
    | ConfigurationCall_set_zeroth_delay_tranche_width

/**
 * See [`Pallet::set_async_backing_params`].
 */
export interface ConfigurationCall_set_async_backing_params {
    __kind: 'set_async_backing_params'
    new: AsyncBackingParams
}

/**
 * See [`Pallet::set_bypass_consistency_check`].
 */
export interface ConfigurationCall_set_bypass_consistency_check {
    __kind: 'set_bypass_consistency_check'
    new: boolean
}

/**
 * See [`Pallet::set_chain_availability_period`].
 */
export interface ConfigurationCall_set_chain_availability_period {
    __kind: 'set_chain_availability_period'
    new: number
}

/**
 * See [`Pallet::set_code_retention_period`].
 */
export interface ConfigurationCall_set_code_retention_period {
    __kind: 'set_code_retention_period'
    new: number
}

/**
 * See [`Pallet::set_dispute_period`].
 */
export interface ConfigurationCall_set_dispute_period {
    __kind: 'set_dispute_period'
    new: number
}

/**
 * See [`Pallet::set_dispute_post_conclusion_acceptance_period`].
 */
export interface ConfigurationCall_set_dispute_post_conclusion_acceptance_period {
    __kind: 'set_dispute_post_conclusion_acceptance_period'
    new: number
}

/**
 * See [`Pallet::set_executor_params`].
 */
export interface ConfigurationCall_set_executor_params {
    __kind: 'set_executor_params'
    new: V5ExecutorParam[]
}

/**
 * See [`Pallet::set_group_rotation_frequency`].
 */
export interface ConfigurationCall_set_group_rotation_frequency {
    __kind: 'set_group_rotation_frequency'
    new: number
}

/**
 * See [`Pallet::set_hrmp_channel_max_capacity`].
 */
export interface ConfigurationCall_set_hrmp_channel_max_capacity {
    __kind: 'set_hrmp_channel_max_capacity'
    new: number
}

/**
 * See [`Pallet::set_hrmp_channel_max_message_size`].
 */
export interface ConfigurationCall_set_hrmp_channel_max_message_size {
    __kind: 'set_hrmp_channel_max_message_size'
    new: number
}

/**
 * See [`Pallet::set_hrmp_channel_max_total_size`].
 */
export interface ConfigurationCall_set_hrmp_channel_max_total_size {
    __kind: 'set_hrmp_channel_max_total_size'
    new: number
}

/**
 * See [`Pallet::set_hrmp_max_message_num_per_candidate`].
 */
export interface ConfigurationCall_set_hrmp_max_message_num_per_candidate {
    __kind: 'set_hrmp_max_message_num_per_candidate'
    new: number
}

/**
 * See [`Pallet::set_hrmp_max_parachain_inbound_channels`].
 */
export interface ConfigurationCall_set_hrmp_max_parachain_inbound_channels {
    __kind: 'set_hrmp_max_parachain_inbound_channels'
    new: number
}

/**
 * See [`Pallet::set_hrmp_max_parachain_outbound_channels`].
 */
export interface ConfigurationCall_set_hrmp_max_parachain_outbound_channels {
    __kind: 'set_hrmp_max_parachain_outbound_channels'
    new: number
}

/**
 * See [`Pallet::set_hrmp_max_parathread_inbound_channels`].
 */
export interface ConfigurationCall_set_hrmp_max_parathread_inbound_channels {
    __kind: 'set_hrmp_max_parathread_inbound_channels'
    new: number
}

/**
 * See [`Pallet::set_hrmp_max_parathread_outbound_channels`].
 */
export interface ConfigurationCall_set_hrmp_max_parathread_outbound_channels {
    __kind: 'set_hrmp_max_parathread_outbound_channels'
    new: number
}

/**
 * See [`Pallet::set_hrmp_open_request_ttl`].
 */
export interface ConfigurationCall_set_hrmp_open_request_ttl {
    __kind: 'set_hrmp_open_request_ttl'
    new: number
}

/**
 * See [`Pallet::set_hrmp_recipient_deposit`].
 */
export interface ConfigurationCall_set_hrmp_recipient_deposit {
    __kind: 'set_hrmp_recipient_deposit'
    new: bigint
}

/**
 * See [`Pallet::set_hrmp_sender_deposit`].
 */
export interface ConfigurationCall_set_hrmp_sender_deposit {
    __kind: 'set_hrmp_sender_deposit'
    new: bigint
}

/**
 * See [`Pallet::set_max_code_size`].
 */
export interface ConfigurationCall_set_max_code_size {
    __kind: 'set_max_code_size'
    new: number
}

/**
 * See [`Pallet::set_max_downward_message_size`].
 */
export interface ConfigurationCall_set_max_downward_message_size {
    __kind: 'set_max_downward_message_size'
    new: number
}

/**
 * See [`Pallet::set_max_head_data_size`].
 */
export interface ConfigurationCall_set_max_head_data_size {
    __kind: 'set_max_head_data_size'
    new: number
}

/**
 * See [`Pallet::set_max_pov_size`].
 */
export interface ConfigurationCall_set_max_pov_size {
    __kind: 'set_max_pov_size'
    new: number
}

/**
 * See [`Pallet::set_max_upward_message_num_per_candidate`].
 */
export interface ConfigurationCall_set_max_upward_message_num_per_candidate {
    __kind: 'set_max_upward_message_num_per_candidate'
    new: number
}

/**
 * See [`Pallet::set_max_upward_message_size`].
 */
export interface ConfigurationCall_set_max_upward_message_size {
    __kind: 'set_max_upward_message_size'
    new: number
}

/**
 * See [`Pallet::set_max_upward_queue_count`].
 */
export interface ConfigurationCall_set_max_upward_queue_count {
    __kind: 'set_max_upward_queue_count'
    new: number
}

/**
 * See [`Pallet::set_max_upward_queue_size`].
 */
export interface ConfigurationCall_set_max_upward_queue_size {
    __kind: 'set_max_upward_queue_size'
    new: number
}

/**
 * See [`Pallet::set_max_validators`].
 */
export interface ConfigurationCall_set_max_validators {
    __kind: 'set_max_validators'
    new?: number | undefined
}

/**
 * See [`Pallet::set_max_validators_per_core`].
 */
export interface ConfigurationCall_set_max_validators_per_core {
    __kind: 'set_max_validators_per_core'
    new?: number | undefined
}

/**
 * See [`Pallet::set_minimum_validation_upgrade_delay`].
 */
export interface ConfigurationCall_set_minimum_validation_upgrade_delay {
    __kind: 'set_minimum_validation_upgrade_delay'
    new: number
}

/**
 * See [`Pallet::set_n_delay_tranches`].
 */
export interface ConfigurationCall_set_n_delay_tranches {
    __kind: 'set_n_delay_tranches'
    new: number
}

/**
 * See [`Pallet::set_needed_approvals`].
 */
export interface ConfigurationCall_set_needed_approvals {
    __kind: 'set_needed_approvals'
    new: number
}

/**
 * See [`Pallet::set_no_show_slots`].
 */
export interface ConfigurationCall_set_no_show_slots {
    __kind: 'set_no_show_slots'
    new: number
}

/**
 * See [`Pallet::set_parathread_cores`].
 */
export interface ConfigurationCall_set_parathread_cores {
    __kind: 'set_parathread_cores'
    new: number
}

/**
 * See [`Pallet::set_parathread_retries`].
 */
export interface ConfigurationCall_set_parathread_retries {
    __kind: 'set_parathread_retries'
    new: number
}

/**
 * See [`Pallet::set_pvf_checking_enabled`].
 */
export interface ConfigurationCall_set_pvf_checking_enabled {
    __kind: 'set_pvf_checking_enabled'
    new: boolean
}

/**
 * See [`Pallet::set_pvf_voting_ttl`].
 */
export interface ConfigurationCall_set_pvf_voting_ttl {
    __kind: 'set_pvf_voting_ttl'
    new: number
}

/**
 * See [`Pallet::set_relay_vrf_modulo_samples`].
 */
export interface ConfigurationCall_set_relay_vrf_modulo_samples {
    __kind: 'set_relay_vrf_modulo_samples'
    new: number
}

/**
 * See [`Pallet::set_scheduling_lookahead`].
 */
export interface ConfigurationCall_set_scheduling_lookahead {
    __kind: 'set_scheduling_lookahead'
    new: number
}

/**
 * See [`Pallet::set_thread_availability_period`].
 */
export interface ConfigurationCall_set_thread_availability_period {
    __kind: 'set_thread_availability_period'
    new: number
}

/**
 * See [`Pallet::set_validation_upgrade_cooldown`].
 */
export interface ConfigurationCall_set_validation_upgrade_cooldown {
    __kind: 'set_validation_upgrade_cooldown'
    new: number
}

/**
 * See [`Pallet::set_validation_upgrade_delay`].
 */
export interface ConfigurationCall_set_validation_upgrade_delay {
    __kind: 'set_validation_upgrade_delay'
    new: number
}

/**
 * See [`Pallet::set_zeroth_delay_tranche_width`].
 */
export interface ConfigurationCall_set_zeroth_delay_tranche_width {
    __kind: 'set_zeroth_delay_tranche_width'
    new: number
}

export type V5ExecutorParam =
    | V5ExecutorParam_MaxMemoryPages
    | V5ExecutorParam_PrecheckingMaxMemory
    | V5ExecutorParam_PvfExecTimeout
    | V5ExecutorParam_PvfPrepTimeout
    | V5ExecutorParam_StackLogicalMax
    | V5ExecutorParam_StackNativeMax
    | V5ExecutorParam_WasmExtBulkMemory

export interface V5ExecutorParam_MaxMemoryPages {
    __kind: 'MaxMemoryPages'
    value: number
}

export interface V5ExecutorParam_PrecheckingMaxMemory {
    __kind: 'PrecheckingMaxMemory'
    value: bigint
}

export interface V5ExecutorParam_PvfExecTimeout {
    __kind: 'PvfExecTimeout'
    value: [V5PvfExecTimeoutKind, bigint]
}

export interface V5ExecutorParam_PvfPrepTimeout {
    __kind: 'PvfPrepTimeout'
    value: [V5PvfPrepTimeoutKind, bigint]
}

export interface V5ExecutorParam_StackLogicalMax {
    __kind: 'StackLogicalMax'
    value: number
}

export interface V5ExecutorParam_StackNativeMax {
    __kind: 'StackNativeMax'
    value: number
}

export interface V5ExecutorParam_WasmExtBulkMemory {
    __kind: 'WasmExtBulkMemory'
}

export type V5PvfPrepTimeoutKind = V5PvfPrepTimeoutKind_Lenient | V5PvfPrepTimeoutKind_Precheck

export interface V5PvfPrepTimeoutKind_Lenient {
    __kind: 'Lenient'
}

export interface V5PvfPrepTimeoutKind_Precheck {
    __kind: 'Precheck'
}

export type V5PvfExecTimeoutKind = V5PvfExecTimeoutKind_Approval | V5PvfExecTimeoutKind_Backing

export interface V5PvfExecTimeoutKind_Approval {
    __kind: 'Approval'
}

export interface V5PvfExecTimeoutKind_Backing {
    __kind: 'Backing'
}

export interface AsyncBackingParams {
    maxCandidateDepth: number
    allowedAncestryLen: number
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type BeefyCall = BeefyCall_report_equivocation | BeefyCall_report_equivocation_unsigned

/**
 * See [`Pallet::report_equivocation`].
 */
export interface BeefyCall_report_equivocation {
    __kind: 'report_equivocation'
    equivocationProof: Type_571
    keyOwnerProof: MembershipProof
}

/**
 * See [`Pallet::report_equivocation_unsigned`].
 */
export interface BeefyCall_report_equivocation_unsigned {
    __kind: 'report_equivocation_unsigned'
    equivocationProof: Type_571
    keyOwnerProof: MembershipProof
}

export interface Type_571 {
    first: VoteMessage
    second: VoteMessage
}

export interface VoteMessage {
    commitment: Commitment
    id: Bytes
    signature: Bytes
}

export interface Commitment {
    payload: [Bytes, Bytes][]
    blockNumber: number
    validatorSetId: bigint
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type BalancesCall =
    | BalancesCall_force_set_balance
    | BalancesCall_force_transfer
    | BalancesCall_force_unreserve
    | BalancesCall_set_balance_deprecated
    | BalancesCall_transfer
    | BalancesCall_transfer_all
    | BalancesCall_transfer_allow_death
    | BalancesCall_transfer_keep_alive
    | BalancesCall_upgrade_accounts

/**
 * See [`Pallet::force_set_balance`].
 */
export interface BalancesCall_force_set_balance {
    __kind: 'force_set_balance'
    who: MultiAddress
    newFree: bigint
}

/**
 * See [`Pallet::force_transfer`].
 */
export interface BalancesCall_force_transfer {
    __kind: 'force_transfer'
    source: MultiAddress
    dest: MultiAddress
    value: bigint
}

/**
 * See [`Pallet::force_unreserve`].
 */
export interface BalancesCall_force_unreserve {
    __kind: 'force_unreserve'
    who: MultiAddress
    amount: bigint
}

/**
 * See [`Pallet::set_balance_deprecated`].
 */
export interface BalancesCall_set_balance_deprecated {
    __kind: 'set_balance_deprecated'
    who: MultiAddress
    newFree: bigint
    oldReserved: bigint
}

/**
 * See [`Pallet::transfer`].
 */
export interface BalancesCall_transfer {
    __kind: 'transfer'
    dest: MultiAddress
    value: bigint
}

/**
 * See [`Pallet::transfer_all`].
 */
export interface BalancesCall_transfer_all {
    __kind: 'transfer_all'
    dest: MultiAddress
    keepAlive: boolean
}

/**
 * See [`Pallet::transfer_allow_death`].
 */
export interface BalancesCall_transfer_allow_death {
    __kind: 'transfer_allow_death'
    dest: MultiAddress
    value: bigint
}

/**
 * See [`Pallet::transfer_keep_alive`].
 */
export interface BalancesCall_transfer_keep_alive {
    __kind: 'transfer_keep_alive'
    dest: MultiAddress
    value: bigint
}

/**
 * See [`Pallet::upgrade_accounts`].
 */
export interface BalancesCall_upgrade_accounts {
    __kind: 'upgrade_accounts'
    who: AccountId32[]
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type BabeCall =
    | BabeCall_plan_config_change
    | BabeCall_report_equivocation
    | BabeCall_report_equivocation_unsigned

/**
 * See [`Pallet::plan_config_change`].
 */
export interface BabeCall_plan_config_change {
    __kind: 'plan_config_change'
    config: NextConfigDescriptor
}

/**
 * See [`Pallet::report_equivocation`].
 */
export interface BabeCall_report_equivocation {
    __kind: 'report_equivocation'
    equivocationProof: EquivocationProof
    keyOwnerProof: MembershipProof
}

/**
 * See [`Pallet::report_equivocation_unsigned`].
 */
export interface BabeCall_report_equivocation_unsigned {
    __kind: 'report_equivocation_unsigned'
    equivocationProof: EquivocationProof
    keyOwnerProof: MembershipProof
}

export interface EquivocationProof {
    offender: Bytes
    slot: Slot
    firstHeader: Header
    secondHeader: Header
}

export type Slot = bigint

export type NextConfigDescriptor = NextConfigDescriptor_V1

export interface NextConfigDescriptor_V1 {
    __kind: 'V1'
    c: [bigint, bigint]
    allowedSlots: AllowedSlots
}

export type AllowedSlots =
    | AllowedSlots_PrimaryAndSecondaryPlainSlots
    | AllowedSlots_PrimaryAndSecondaryVRFSlots
    | AllowedSlots_PrimarySlots

export interface AllowedSlots_PrimaryAndSecondaryPlainSlots {
    __kind: 'PrimaryAndSecondaryPlainSlots'
}

export interface AllowedSlots_PrimaryAndSecondaryVRFSlots {
    __kind: 'PrimaryAndSecondaryVRFSlots'
}

export interface AllowedSlots_PrimarySlots {
    __kind: 'PrimarySlots'
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type AuctionsCall = AuctionsCall_bid | AuctionsCall_cancel_auction | AuctionsCall_new_auction

/**
 * See [`Pallet::bid`].
 */
export interface AuctionsCall_bid {
    __kind: 'bid'
    para: number
    auctionIndex: number
    firstSlot: number
    lastSlot: number
    amount: bigint
}

/**
 * See [`Pallet::cancel_auction`].
 */
export interface AuctionsCall_cancel_auction {
    __kind: 'cancel_auction'
}

/**
 * See [`Pallet::new_auction`].
 */
export interface AuctionsCall_new_auction {
    __kind: 'new_auction'
    duration: number
    leasePeriodIndex: number
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type AssignedSlotsCall =
    | AssignedSlotsCall_assign_perm_parachain_slot
    | AssignedSlotsCall_assign_temp_parachain_slot
    | AssignedSlotsCall_unassign_parachain_slot

/**
 * See [`Pallet::assign_perm_parachain_slot`].
 */
export interface AssignedSlotsCall_assign_perm_parachain_slot {
    __kind: 'assign_perm_parachain_slot'
    id: Id
}

/**
 * See [`Pallet::assign_temp_parachain_slot`].
 */
export interface AssignedSlotsCall_assign_temp_parachain_slot {
    __kind: 'assign_temp_parachain_slot'
    id: Id
    leasePeriodStart: SlotLeasePeriodStart
}

/**
 * See [`Pallet::unassign_parachain_slot`].
 */
export interface AssignedSlotsCall_unassign_parachain_slot {
    __kind: 'unassign_parachain_slot'
    id: Id
}

export type SlotLeasePeriodStart = SlotLeasePeriodStart_Current | SlotLeasePeriodStart_Next

export interface SlotLeasePeriodStart_Current {
    __kind: 'Current'
}

export interface SlotLeasePeriodStart_Next {
    __kind: 'Next'
}

export type MaxFuelBurnPerTransactionRule = bigint

export const DispatchSettings: sts.Type<DispatchSettings> = sts.struct(() => {
    return {
        useNoneOrigin: sts.boolean(),
        paysRemainingFee: sts.boolean(),
    }
})

export const MultiAddress: sts.Type<MultiAddress> = sts.closedEnum(() => {
    return {
        Address20: sts.bytes(),
        Address32: sts.bytes(),
        Id: AccountId32,
        Index: sts.unit(),
        Raw: sts.bytes(),
    }
})

export const FuelTankDescriptor: sts.Type<FuelTankDescriptor> = sts.struct(() => {
    return {
        name: sts.bytes(),
        userAccountManagement: sts.option(() => UserAccountManagement),
        ruleSets: sts.array(() => sts.tuple(() => [sts.number(), sts.array(() => DispatchRuleDescriptor)])),
        providesDeposit: sts.boolean(),
        accountRules: sts.array(() => AccountRuleDescriptor),
    }
})

export const Timepoint: sts.Type<Timepoint> = sts.struct(() => {
    return {
        height: sts.number(),
        index: sts.number(),
    }
})

export const OriginCaller: sts.Type<OriginCaller> = sts.closedEnum(() => {
    return {
        Origins: Type_416,
        ParachainsOrigin: Origin,
        Void: Void,
        XcmPallet: Type_415,
        system: RawOrigin,
    }
})

export const RawOrigin: sts.Type<RawOrigin> = sts.closedEnum(() => {
    return {
        None: sts.unit(),
        Root: sts.unit(),
        Signed: AccountId32,
    }
})

export const Type_415: sts.Type<Type_415> = sts.closedEnum(() => {
    return {
        Response: V3MultiLocation,
        Xcm: V3MultiLocation,
    }
})

export const Void: sts.Type<Void> = sts.closedEnum(() => {
    return {}
})

export const Origin: sts.Type<Origin> = sts.closedEnum(() => {
    return {
        Parachain: Id,
    }
})

export const Type_416: sts.Type<Type_416> = sts.closedEnum(() => {
    return {
        AuctionAdmin: sts.unit(),
        BigSpender: sts.unit(),
        BigTipper: sts.unit(),
        ClaimsAdmin: sts.unit(),
        ExtrinsicPauseAdmin: sts.unit(),
        Fellows: sts.unit(),
        Fellowship1Dan: sts.unit(),
        Fellowship2Dan: sts.unit(),
        Fellowship3Dan: sts.unit(),
        Fellowship4Dan: sts.unit(),
        Fellowship5Dan: sts.unit(),
        Fellowship6Dan: sts.unit(),
        Fellowship7Dan: sts.unit(),
        Fellowship8Dan: sts.unit(),
        Fellowship9Dan: sts.unit(),
        FellowshipAdmin: sts.unit(),
        FellowshipExperts: sts.unit(),
        FellowshipInitiates: sts.unit(),
        FellowshipMasters: sts.unit(),
        FuelTanksAdmin: sts.unit(),
        GeneralAdmin: sts.unit(),
        LeaseAdmin: sts.unit(),
        MediumSpender: sts.unit(),
        MultiTokensAdmin: sts.unit(),
        ParachainsAdmin: sts.unit(),
        PreimageAdmin: sts.unit(),
        ReferendumCanceller: sts.unit(),
        ReferendumKiller: sts.unit(),
        SmallSpender: sts.unit(),
        SmallTipper: sts.unit(),
        StakingAdmin: sts.unit(),
        TreasuryAdmin: sts.unit(),
        WhitelistAdmin: sts.unit(),
        WhitelistedCaller: sts.unit(),
    }
})

export const Call: sts.Type<Call> = sts.closedEnum(() => {
    return {
        AssignedSlots: AssignedSlotsCall,
        Auctions: AuctionsCall,
        Babe: BabeCall,
        Balances: BalancesCall,
        Beefy: BeefyCall,
        Configuration: ConfigurationCall,
        ConvictionVoting: ConvictionVotingCall,
        Crowdloan: CrowdloanCall,
        ElectionProviderMultiPhase: ElectionProviderMultiPhaseCall,
        ExtrinsicPause: ExtrinsicPauseCall,
        FellowshipCollective: FellowshipCollectiveCall,
        FellowshipReferenda: FellowshipReferendaCall,
        FuelTanks: FuelTanksCall,
        Grandpa: GrandpaCall,
        Hrmp: HrmpCall,
        Identity: IdentityCall,
        ImOnline: ImOnlineCall,
        Initializer: InitializerCall,
        Marketplace: MarketplaceCall,
        MessageQueue: MessageQueueCall,
        MultiTokens: MultiTokensCall,
        Multisig: MultisigCall,
        NominationPools: NominationPoolsCall,
        ParaInclusion: ParaInclusionCall,
        ParaInherent: ParaInherentCall,
        Paras: ParasCall,
        ParasDisputes: ParasDisputesCall,
        ParasShared: ParasSharedCall,
        ParasSlashing: ParasSlashingCall,
        ParasSudoWrapper: ParasSudoWrapperCall,
        Preimage: PreimageCall,
        Referenda: ReferendaCall,
        Registrar: RegistrarCall,
        Scheduler: SchedulerCall,
        Session: SessionCall,
        Slots: SlotsCall,
        StakeExchange: StakeExchangeCall,
        Staking: StakingCall,
        Sudo: SudoCall,
        System: SystemCall,
        Timestamp: TimestampCall,
        Treasury: TreasuryCall,
        Utility: UtilityCall,
        ValidatorManager: ValidatorManagerCall,
        VoteManager: VoteManagerCall,
        VoterList: VoterListCall,
        Whitelist: WhitelistCall,
        XcmPallet: XcmPalletCall,
    }
})

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export const XcmPalletCall: sts.Type<XcmPalletCall> = sts.closedEnum(() => {
    return {
        execute: sts.enumStruct({
            message: Type_492,
            maxWeight: Weight,
        }),
        force_default_xcm_version: sts.enumStruct({
            maybeXcmVersion: sts.option(() => sts.number()),
        }),
        force_subscribe_version_notify: sts.enumStruct({
            location: VersionedMultiLocation,
        }),
        force_suspension: sts.enumStruct({
            suspended: sts.boolean(),
        }),
        force_unsubscribe_version_notify: sts.enumStruct({
            location: VersionedMultiLocation,
        }),
        force_xcm_version: sts.enumStruct({
            location: V3MultiLocation,
            version: sts.number(),
        }),
        limited_reserve_transfer_assets: sts.enumStruct({
            dest: VersionedMultiLocation,
            beneficiary: VersionedMultiLocation,
            assets: VersionedMultiAssets,
            feeAssetItem: sts.number(),
            weightLimit: V3WeightLimit,
        }),
        limited_teleport_assets: sts.enumStruct({
            dest: VersionedMultiLocation,
            beneficiary: VersionedMultiLocation,
            assets: VersionedMultiAssets,
            feeAssetItem: sts.number(),
            weightLimit: V3WeightLimit,
        }),
        reserve_transfer_assets: sts.enumStruct({
            dest: VersionedMultiLocation,
            beneficiary: VersionedMultiLocation,
            assets: VersionedMultiAssets,
            feeAssetItem: sts.number(),
        }),
        send: sts.enumStruct({
            dest: VersionedMultiLocation,
            message: VersionedXcm,
        }),
        teleport_assets: sts.enumStruct({
            dest: VersionedMultiLocation,
            beneficiary: VersionedMultiLocation,
            assets: VersionedMultiAssets,
            feeAssetItem: sts.number(),
        }),
    }
})

export const VersionedXcm: sts.Type<VersionedXcm> = sts.closedEnum(() => {
    return {
        V2: sts.array(() => V2Instruction),
        V3: sts.array(() => V3Instruction),
    }
})

export const V2Instruction: sts.Type<V2Instruction> = sts.closedEnum(() => {
    return {
        BuyExecution: sts.enumStruct({
            fees: V2MultiAsset,
            weightLimit: V2WeightLimit,
        }),
        ClaimAsset: sts.enumStruct({
            assets: sts.array(() => V2MultiAsset),
            ticket: V2MultiLocation,
        }),
        ClearError: sts.unit(),
        ClearOrigin: sts.unit(),
        DepositAsset: sts.enumStruct({
            assets: V2MultiAssetFilter,
            maxAssets: sts.number(),
            beneficiary: V2MultiLocation,
        }),
        DepositReserveAsset: sts.enumStruct({
            assets: V2MultiAssetFilter,
            maxAssets: sts.number(),
            dest: V2MultiLocation,
            xcm: sts.array(() => V2Instruction),
        }),
        DescendOrigin: V2Junctions,
        ExchangeAsset: sts.enumStruct({
            give: V2MultiAssetFilter,
            receive: sts.array(() => V2MultiAsset),
        }),
        HrmpChannelAccepted: sts.enumStruct({
            recipient: sts.number(),
        }),
        HrmpChannelClosing: sts.enumStruct({
            initiator: sts.number(),
            sender: sts.number(),
            recipient: sts.number(),
        }),
        HrmpNewChannelOpenRequest: sts.enumStruct({
            sender: sts.number(),
            maxMessageSize: sts.number(),
            maxCapacity: sts.number(),
        }),
        InitiateReserveWithdraw: sts.enumStruct({
            assets: V2MultiAssetFilter,
            reserve: V2MultiLocation,
            xcm: sts.array(() => V2Instruction),
        }),
        InitiateTeleport: sts.enumStruct({
            assets: V2MultiAssetFilter,
            dest: V2MultiLocation,
            xcm: sts.array(() => V2Instruction),
        }),
        QueryHolding: sts.enumStruct({
            queryId: sts.bigint(),
            dest: V2MultiLocation,
            assets: V2MultiAssetFilter,
            maxResponseWeight: sts.bigint(),
        }),
        QueryResponse: sts.enumStruct({
            queryId: sts.bigint(),
            response: V2Response,
            maxWeight: sts.bigint(),
        }),
        ReceiveTeleportedAsset: sts.array(() => V2MultiAsset),
        RefundSurplus: sts.unit(),
        ReportError: sts.enumStruct({
            queryId: sts.bigint(),
            dest: V2MultiLocation,
            maxResponseWeight: sts.bigint(),
        }),
        ReserveAssetDeposited: sts.array(() => V2MultiAsset),
        SetAppendix: sts.array(() => V2Instruction),
        SetErrorHandler: sts.array(() => V2Instruction),
        SubscribeVersion: sts.enumStruct({
            queryId: sts.bigint(),
            maxResponseWeight: sts.bigint(),
        }),
        Transact: sts.enumStruct({
            originType: V2OriginKind,
            requireWeightAtMost: sts.bigint(),
            call: DoubleEncoded,
        }),
        TransferAsset: sts.enumStruct({
            assets: sts.array(() => V2MultiAsset),
            beneficiary: V2MultiLocation,
        }),
        TransferReserveAsset: sts.enumStruct({
            assets: sts.array(() => V2MultiAsset),
            dest: V2MultiLocation,
            xcm: sts.array(() => V2Instruction),
        }),
        Trap: sts.bigint(),
        UnsubscribeVersion: sts.unit(),
        WithdrawAsset: sts.array(() => V2MultiAsset),
    }
})

export const DoubleEncoded: sts.Type<DoubleEncoded> = sts.struct(() => {
    return {
        encoded: sts.bytes(),
    }
})

export const V2OriginKind: sts.Type<V2OriginKind> = sts.closedEnum(() => {
    return {
        Native: sts.unit(),
        SovereignAccount: sts.unit(),
        Superuser: sts.unit(),
        Xcm: sts.unit(),
    }
})

export const V2Response: sts.Type<V2Response> = sts.closedEnum(() => {
    return {
        Assets: sts.array(() => V2MultiAsset),
        ExecutionResult: sts.option(() => sts.tuple(() => [sts.number(), V2Error])),
        Null: sts.unit(),
        Version: sts.number(),
    }
})

export const V2Error: sts.Type<V2Error> = sts.closedEnum(() => {
    return {
        AssetNotFound: sts.unit(),
        BadOrigin: sts.unit(),
        Barrier: sts.unit(),
        DestinationUnsupported: sts.unit(),
        ExceedsMaxMessageSize: sts.unit(),
        FailedToDecode: sts.unit(),
        FailedToTransactAsset: sts.unit(),
        InvalidLocation: sts.unit(),
        LocationCannotHold: sts.unit(),
        MaxWeightInvalid: sts.unit(),
        MultiLocationFull: sts.unit(),
        MultiLocationNotInvertible: sts.unit(),
        NotHoldingFees: sts.unit(),
        NotWithdrawable: sts.unit(),
        Overflow: sts.unit(),
        TooExpensive: sts.unit(),
        Transport: sts.unit(),
        Trap: sts.bigint(),
        UnhandledXcmVersion: sts.unit(),
        Unimplemented: sts.unit(),
        UnknownClaim: sts.unit(),
        Unroutable: sts.unit(),
        UntrustedReserveLocation: sts.unit(),
        UntrustedTeleportLocation: sts.unit(),
        WeightLimitReached: sts.bigint(),
        WeightNotComputable: sts.unit(),
    }
})

export const V2Junctions: sts.Type<V2Junctions> = sts.closedEnum(() => {
    return {
        Here: sts.unit(),
        X1: V2Junction,
        X2: sts.tuple(() => [V2Junction, V2Junction]),
        X3: sts.tuple(() => [V2Junction, V2Junction, V2Junction]),
        X4: sts.tuple(() => [V2Junction, V2Junction, V2Junction, V2Junction]),
        X5: sts.tuple(() => [V2Junction, V2Junction, V2Junction, V2Junction, V2Junction]),
        X6: sts.tuple(() => [V2Junction, V2Junction, V2Junction, V2Junction, V2Junction, V2Junction]),
        X7: sts.tuple(() => [V2Junction, V2Junction, V2Junction, V2Junction, V2Junction, V2Junction, V2Junction]),
        X8: sts.tuple(() => [
            V2Junction,
            V2Junction,
            V2Junction,
            V2Junction,
            V2Junction,
            V2Junction,
            V2Junction,
            V2Junction,
        ]),
    }
})

export const V2Junction: sts.Type<V2Junction> = sts.closedEnum(() => {
    return {
        AccountId32: sts.enumStruct({
            network: V2NetworkId,
            id: sts.bytes(),
        }),
        AccountIndex64: sts.enumStruct({
            network: V2NetworkId,
            index: sts.bigint(),
        }),
        AccountKey20: sts.enumStruct({
            network: V2NetworkId,
            key: sts.bytes(),
        }),
        GeneralIndex: sts.bigint(),
        GeneralKey: WeakBoundedVec,
        OnlyChild: sts.unit(),
        PalletInstance: sts.number(),
        Parachain: sts.number(),
        Plurality: sts.enumStruct({
            id: V2BodyId,
            part: V2BodyPart,
        }),
    }
})

export const V2BodyPart: sts.Type<V2BodyPart> = sts.closedEnum(() => {
    return {
        AtLeastProportion: sts.enumStruct({
            nom: sts.number(),
            denom: sts.number(),
        }),
        Fraction: sts.enumStruct({
            nom: sts.number(),
            denom: sts.number(),
        }),
        Members: sts.enumStruct({
            count: sts.number(),
        }),
        MoreThanProportion: sts.enumStruct({
            nom: sts.number(),
            denom: sts.number(),
        }),
        Voice: sts.unit(),
    }
})

export const V2BodyId: sts.Type<V2BodyId> = sts.closedEnum(() => {
    return {
        Administration: sts.unit(),
        Defense: sts.unit(),
        Executive: sts.unit(),
        Index: sts.number(),
        Judicial: sts.unit(),
        Legislative: sts.unit(),
        Named: WeakBoundedVec,
        Technical: sts.unit(),
        Treasury: sts.unit(),
        Unit: sts.unit(),
    }
})

export const WeakBoundedVec = sts.bytes()

export const V2NetworkId: sts.Type<V2NetworkId> = sts.closedEnum(() => {
    return {
        Any: sts.unit(),
        Kusama: sts.unit(),
        Named: WeakBoundedVec,
        Polkadot: sts.unit(),
    }
})

export const V2MultiAssetFilter: sts.Type<V2MultiAssetFilter> = sts.closedEnum(() => {
    return {
        Definite: sts.array(() => V2MultiAsset),
        Wild: V2WildMultiAsset,
    }
})

export const V2WildMultiAsset: sts.Type<V2WildMultiAsset> = sts.closedEnum(() => {
    return {
        All: sts.unit(),
        AllOf: sts.enumStruct({
            id: V2AssetId,
            fun: V2WildFungibility,
        }),
    }
})

export const V2WildFungibility: sts.Type<V2WildFungibility> = sts.closedEnum(() => {
    return {
        Fungible: sts.unit(),
        NonFungible: sts.unit(),
    }
})

export const V2AssetId: sts.Type<V2AssetId> = sts.closedEnum(() => {
    return {
        Abstract: sts.bytes(),
        Concrete: V2MultiLocation,
    }
})

export const V2MultiLocation: sts.Type<V2MultiLocation> = sts.struct(() => {
    return {
        parents: sts.number(),
        interior: V2Junctions,
    }
})

export const V2WeightLimit: sts.Type<V2WeightLimit> = sts.closedEnum(() => {
    return {
        Limited: sts.bigint(),
        Unlimited: sts.unit(),
    }
})

export const V2MultiAsset: sts.Type<V2MultiAsset> = sts.struct(() => {
    return {
        id: V2AssetId,
        fun: V2Fungibility,
    }
})

export const V2Fungibility: sts.Type<V2Fungibility> = sts.closedEnum(() => {
    return {
        Fungible: sts.bigint(),
        NonFungible: V2AssetInstance,
    }
})

export const V2AssetInstance: sts.Type<V2AssetInstance> = sts.closedEnum(() => {
    return {
        Array16: sts.bytes(),
        Array32: sts.bytes(),
        Array4: sts.bytes(),
        Array8: sts.bytes(),
        Blob: sts.bytes(),
        Index: sts.bigint(),
        Undefined: sts.unit(),
    }
})

export const V3WeightLimit: sts.Type<V3WeightLimit> = sts.closedEnum(() => {
    return {
        Limited: Weight,
        Unlimited: sts.unit(),
    }
})

export const Type_492: sts.Type<Type_492> = sts.closedEnum(() => {
    return {
        V2: sts.array(() => Type_495),
        V3: sts.array(() => Type_499),
    }
})

export const Type_499: sts.Type<Type_499> = sts.closedEnum(() => {
    return {
        AliasOrigin: V3MultiLocation,
        BurnAsset: sts.array(() => V3MultiAsset),
        BuyExecution: sts.enumStruct({
            fees: V3MultiAsset,
            weightLimit: V3WeightLimit,
        }),
        ClaimAsset: sts.enumStruct({
            assets: sts.array(() => V3MultiAsset),
            ticket: V3MultiLocation,
        }),
        ClearError: sts.unit(),
        ClearOrigin: sts.unit(),
        ClearTopic: sts.unit(),
        ClearTransactStatus: sts.unit(),
        DepositAsset: sts.enumStruct({
            assets: V3MultiAssetFilter,
            beneficiary: V3MultiLocation,
        }),
        DepositReserveAsset: sts.enumStruct({
            assets: V3MultiAssetFilter,
            dest: V3MultiLocation,
            xcm: sts.array(() => V3Instruction),
        }),
        DescendOrigin: V3Junctions,
        ExchangeAsset: sts.enumStruct({
            give: V3MultiAssetFilter,
            want: sts.array(() => V3MultiAsset),
            maximal: sts.boolean(),
        }),
        ExpectAsset: sts.array(() => V3MultiAsset),
        ExpectError: sts.option(() => sts.tuple(() => [sts.number(), V3Error])),
        ExpectOrigin: sts.option(() => V3MultiLocation),
        ExpectPallet: sts.enumStruct({
            index: sts.number(),
            name: sts.bytes(),
            moduleName: sts.bytes(),
            crateMajor: sts.number(),
            minCrateMinor: sts.number(),
        }),
        ExpectTransactStatus: V3MaybeErrorCode,
        ExportMessage: sts.enumStruct({
            network: V3NetworkId,
            destination: V3Junctions,
            xcm: sts.array(() => V3Instruction),
        }),
        HrmpChannelAccepted: sts.enumStruct({
            recipient: sts.number(),
        }),
        HrmpChannelClosing: sts.enumStruct({
            initiator: sts.number(),
            sender: sts.number(),
            recipient: sts.number(),
        }),
        HrmpNewChannelOpenRequest: sts.enumStruct({
            sender: sts.number(),
            maxMessageSize: sts.number(),
            maxCapacity: sts.number(),
        }),
        InitiateReserveWithdraw: sts.enumStruct({
            assets: V3MultiAssetFilter,
            reserve: V3MultiLocation,
            xcm: sts.array(() => V3Instruction),
        }),
        InitiateTeleport: sts.enumStruct({
            assets: V3MultiAssetFilter,
            dest: V3MultiLocation,
            xcm: sts.array(() => V3Instruction),
        }),
        LockAsset: sts.enumStruct({
            asset: V3MultiAsset,
            unlocker: V3MultiLocation,
        }),
        NoteUnlockable: sts.enumStruct({
            asset: V3MultiAsset,
            owner: V3MultiLocation,
        }),
        QueryPallet: sts.enumStruct({
            moduleName: sts.bytes(),
            responseInfo: V3QueryResponseInfo,
        }),
        QueryResponse: sts.enumStruct({
            queryId: sts.bigint(),
            response: V3Response,
            maxWeight: Weight,
            querier: sts.option(() => V3MultiLocation),
        }),
        ReceiveTeleportedAsset: sts.array(() => V3MultiAsset),
        RefundSurplus: sts.unit(),
        ReportError: V3QueryResponseInfo,
        ReportHolding: sts.enumStruct({
            responseInfo: V3QueryResponseInfo,
            assets: V3MultiAssetFilter,
        }),
        ReportTransactStatus: V3QueryResponseInfo,
        RequestUnlock: sts.enumStruct({
            asset: V3MultiAsset,
            locker: V3MultiLocation,
        }),
        ReserveAssetDeposited: sts.array(() => V3MultiAsset),
        SetAppendix: sts.array(() => Type_499),
        SetErrorHandler: sts.array(() => Type_499),
        SetFeesMode: sts.enumStruct({
            jitWithdraw: sts.boolean(),
        }),
        SetTopic: sts.bytes(),
        SubscribeVersion: sts.enumStruct({
            queryId: sts.bigint(),
            maxResponseWeight: Weight,
        }),
        Transact: sts.enumStruct({
            originKind: V2OriginKind,
            requireWeightAtMost: Weight,
            call: Type_496,
        }),
        TransferAsset: sts.enumStruct({
            assets: sts.array(() => V3MultiAsset),
            beneficiary: V3MultiLocation,
        }),
        TransferReserveAsset: sts.enumStruct({
            assets: sts.array(() => V3MultiAsset),
            dest: V3MultiLocation,
            xcm: sts.array(() => V3Instruction),
        }),
        Trap: sts.bigint(),
        UniversalOrigin: V3Junction,
        UnlockAsset: sts.enumStruct({
            asset: V3MultiAsset,
            target: V3MultiLocation,
        }),
        UnpaidExecution: sts.enumStruct({
            weightLimit: V3WeightLimit,
            checkOrigin: sts.option(() => V3MultiLocation),
        }),
        UnsubscribeVersion: sts.unit(),
        WithdrawAsset: sts.array(() => V3MultiAsset),
    }
})

export const V3Junction: sts.Type<V3Junction> = sts.closedEnum(() => {
    return {
        AccountId32: sts.enumStruct({
            network: sts.option(() => V3NetworkId),
            id: sts.bytes(),
        }),
        AccountIndex64: sts.enumStruct({
            network: sts.option(() => V3NetworkId),
            index: sts.bigint(),
        }),
        AccountKey20: sts.enumStruct({
            network: sts.option(() => V3NetworkId),
            key: sts.bytes(),
        }),
        GeneralIndex: sts.bigint(),
        GeneralKey: sts.enumStruct({
            length: sts.number(),
            data: sts.bytes(),
        }),
        GlobalConsensus: V3NetworkId,
        OnlyChild: sts.unit(),
        PalletInstance: sts.number(),
        Parachain: sts.number(),
        Plurality: sts.enumStruct({
            id: V3BodyId,
            part: V3BodyPart,
        }),
    }
})

export const V3BodyPart: sts.Type<V3BodyPart> = sts.closedEnum(() => {
    return {
        AtLeastProportion: sts.enumStruct({
            nom: sts.number(),
            denom: sts.number(),
        }),
        Fraction: sts.enumStruct({
            nom: sts.number(),
            denom: sts.number(),
        }),
        Members: sts.enumStruct({
            count: sts.number(),
        }),
        MoreThanProportion: sts.enumStruct({
            nom: sts.number(),
            denom: sts.number(),
        }),
        Voice: sts.unit(),
    }
})

export const V3BodyId: sts.Type<V3BodyId> = sts.closedEnum(() => {
    return {
        Administration: sts.unit(),
        Defense: sts.unit(),
        Executive: sts.unit(),
        Index: sts.number(),
        Judicial: sts.unit(),
        Legislative: sts.unit(),
        Moniker: sts.bytes(),
        Technical: sts.unit(),
        Treasury: sts.unit(),
        Unit: sts.unit(),
    }
})

export const Type_496: sts.Type<Type_496> = sts.struct(() => {
    return {
        encoded: sts.bytes(),
    }
})

export const V3QueryResponseInfo: sts.Type<V3QueryResponseInfo> = sts.struct(() => {
    return {
        destination: V3MultiLocation,
        queryId: sts.bigint(),
        maxWeight: Weight,
    }
})

export const V3NetworkId: sts.Type<V3NetworkId> = sts.closedEnum(() => {
    return {
        BitcoinCash: sts.unit(),
        BitcoinCore: sts.unit(),
        ByFork: sts.enumStruct({
            blockNumber: sts.bigint(),
            blockHash: sts.bytes(),
        }),
        ByGenesis: sts.bytes(),
        Ethereum: sts.enumStruct({
            chainId: sts.bigint(),
        }),
        Kusama: sts.unit(),
        Polkadot: sts.unit(),
        Rococo: sts.unit(),
        Westend: sts.unit(),
        Wococo: sts.unit(),
    }
})

export const V3MaybeErrorCode: sts.Type<V3MaybeErrorCode> = sts.closedEnum(() => {
    return {
        Error: sts.bytes(),
        Success: sts.unit(),
        TruncatedError: sts.bytes(),
    }
})

export const V3Junctions: sts.Type<V3Junctions> = sts.closedEnum(() => {
    return {
        Here: sts.unit(),
        X1: V3Junction,
        X2: sts.tuple(() => [V3Junction, V3Junction]),
        X3: sts.tuple(() => [V3Junction, V3Junction, V3Junction]),
        X4: sts.tuple(() => [V3Junction, V3Junction, V3Junction, V3Junction]),
        X5: sts.tuple(() => [V3Junction, V3Junction, V3Junction, V3Junction, V3Junction]),
        X6: sts.tuple(() => [V3Junction, V3Junction, V3Junction, V3Junction, V3Junction, V3Junction]),
        X7: sts.tuple(() => [V3Junction, V3Junction, V3Junction, V3Junction, V3Junction, V3Junction, V3Junction]),
        X8: sts.tuple(() => [
            V3Junction,
            V3Junction,
            V3Junction,
            V3Junction,
            V3Junction,
            V3Junction,
            V3Junction,
            V3Junction,
        ]),
    }
})

export const V3MultiAssetFilter: sts.Type<V3MultiAssetFilter> = sts.closedEnum(() => {
    return {
        Definite: sts.array(() => V3MultiAsset),
        Wild: V3WildMultiAsset,
    }
})

export const V3WildMultiAsset: sts.Type<V3WildMultiAsset> = sts.closedEnum(() => {
    return {
        All: sts.unit(),
        AllCounted: sts.number(),
        AllOf: sts.enumStruct({
            id: V3AssetId,
            fun: V3WildFungibility,
        }),
        AllOfCounted: sts.enumStruct({
            id: V3AssetId,
            fun: V3WildFungibility,
            count: sts.number(),
        }),
    }
})

export const V3WildFungibility: sts.Type<V3WildFungibility> = sts.closedEnum(() => {
    return {
        Fungible: sts.unit(),
        NonFungible: sts.unit(),
    }
})

export const V3AssetId: sts.Type<V3AssetId> = sts.closedEnum(() => {
    return {
        Abstract: sts.bytes(),
        Concrete: V3MultiLocation,
    }
})

export const Type_495: sts.Type<Type_495> = sts.closedEnum(() => {
    return {
        BuyExecution: sts.enumStruct({
            fees: V2MultiAsset,
            weightLimit: V2WeightLimit,
        }),
        ClaimAsset: sts.enumStruct({
            assets: sts.array(() => V2MultiAsset),
            ticket: V2MultiLocation,
        }),
        ClearError: sts.unit(),
        ClearOrigin: sts.unit(),
        DepositAsset: sts.enumStruct({
            assets: V2MultiAssetFilter,
            maxAssets: sts.number(),
            beneficiary: V2MultiLocation,
        }),
        DepositReserveAsset: sts.enumStruct({
            assets: V2MultiAssetFilter,
            maxAssets: sts.number(),
            dest: V2MultiLocation,
            xcm: sts.array(() => V2Instruction),
        }),
        DescendOrigin: V2Junctions,
        ExchangeAsset: sts.enumStruct({
            give: V2MultiAssetFilter,
            receive: sts.array(() => V2MultiAsset),
        }),
        HrmpChannelAccepted: sts.enumStruct({
            recipient: sts.number(),
        }),
        HrmpChannelClosing: sts.enumStruct({
            initiator: sts.number(),
            sender: sts.number(),
            recipient: sts.number(),
        }),
        HrmpNewChannelOpenRequest: sts.enumStruct({
            sender: sts.number(),
            maxMessageSize: sts.number(),
            maxCapacity: sts.number(),
        }),
        InitiateReserveWithdraw: sts.enumStruct({
            assets: V2MultiAssetFilter,
            reserve: V2MultiLocation,
            xcm: sts.array(() => V2Instruction),
        }),
        InitiateTeleport: sts.enumStruct({
            assets: V2MultiAssetFilter,
            dest: V2MultiLocation,
            xcm: sts.array(() => V2Instruction),
        }),
        QueryHolding: sts.enumStruct({
            queryId: sts.bigint(),
            dest: V2MultiLocation,
            assets: V2MultiAssetFilter,
            maxResponseWeight: sts.bigint(),
        }),
        QueryResponse: sts.enumStruct({
            queryId: sts.bigint(),
            response: V2Response,
            maxWeight: sts.bigint(),
        }),
        ReceiveTeleportedAsset: sts.array(() => V2MultiAsset),
        RefundSurplus: sts.unit(),
        ReportError: sts.enumStruct({
            queryId: sts.bigint(),
            dest: V2MultiLocation,
            maxResponseWeight: sts.bigint(),
        }),
        ReserveAssetDeposited: sts.array(() => V2MultiAsset),
        SetAppendix: sts.array(() => Type_495),
        SetErrorHandler: sts.array(() => Type_495),
        SubscribeVersion: sts.enumStruct({
            queryId: sts.bigint(),
            maxResponseWeight: sts.bigint(),
        }),
        Transact: sts.enumStruct({
            originType: V2OriginKind,
            requireWeightAtMost: sts.bigint(),
            call: Type_496,
        }),
        TransferAsset: sts.enumStruct({
            assets: sts.array(() => V2MultiAsset),
            beneficiary: V2MultiLocation,
        }),
        TransferReserveAsset: sts.enumStruct({
            assets: sts.array(() => V2MultiAsset),
            dest: V2MultiLocation,
            xcm: sts.array(() => V2Instruction),
        }),
        Trap: sts.bigint(),
        UnsubscribeVersion: sts.unit(),
        WithdrawAsset: sts.array(() => V2MultiAsset),
    }
})

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export const WhitelistCall: sts.Type<WhitelistCall> = sts.closedEnum(() => {
    return {
        dispatch_whitelisted_call: sts.enumStruct({
            callHash: H256,
            callEncodedLen: sts.number(),
            callWeightWitness: Weight,
        }),
        dispatch_whitelisted_call_with_preimage: sts.enumStruct({
            call: Call,
        }),
        remove_whitelisted_call: sts.enumStruct({
            callHash: H256,
        }),
        whitelist_call: sts.enumStruct({
            callHash: H256,
        }),
    }
})

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export const VoterListCall: sts.Type<VoterListCall> = sts.closedEnum(() => {
    return {
        put_in_front_of: sts.enumStruct({
            lighter: MultiAddress,
        }),
        rebag: sts.enumStruct({
            dislocated: MultiAddress,
        }),
    }
})

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export const VoteManagerCall: sts.Type<VoteManagerCall> = sts.closedEnum(() => {
    return {
        remove_other_vote: sts.enumStruct({
            target: MultiAddress,
            class: sts.number(),
            index: sts.number(),
        }),
        remove_vote: sts.enumStruct({
            class: sts.option(() => sts.number()),
            index: sts.number(),
        }),
        unlock: sts.enumStruct({
            class: sts.number(),
            target: MultiAddress,
            index: sts.number(),
        }),
        vote: sts.enumStruct({
            pollIndex: sts.number(),
            vote: AccountVote,
            currency: VoteCurrency,
        }),
    }
})

export const VoteCurrency: sts.Type<VoteCurrency> = sts.closedEnum(() => {
    return {
        Enj: sts.unit(),
        SEnj: sts.bigint(),
    }
})

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export const ValidatorManagerCall: sts.Type<ValidatorManagerCall> = sts.closedEnum(() => {
    return {
        deregister_validators: sts.enumStruct({
            validators: sts.array(() => AccountId32),
        }),
        register_validators: sts.enumStruct({
            validators: sts.array(() => AccountId32),
        }),
    }
})

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export const UtilityCall: sts.Type<UtilityCall> = sts.closedEnum(() => {
    return {
        as_derivative: sts.enumStruct({
            index: sts.number(),
            call: Call,
        }),
        batch: sts.enumStruct({
            calls: sts.array(() => Call),
        }),
        batch_all: sts.enumStruct({
            calls: sts.array(() => Call),
        }),
        dispatch_as: sts.enumStruct({
            asOrigin: OriginCaller,
            call: Call,
        }),
        force_batch: sts.enumStruct({
            calls: sts.array(() => Call),
        }),
        with_weight: sts.enumStruct({
            call: Call,
            weight: Weight,
        }),
    }
})

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export const TreasuryCall: sts.Type<TreasuryCall> = sts.closedEnum(() => {
    return {
        approve_proposal: sts.enumStruct({
            proposalId: sts.number(),
        }),
        propose_spend: sts.enumStruct({
            value: sts.bigint(),
            beneficiary: MultiAddress,
        }),
        reject_proposal: sts.enumStruct({
            proposalId: sts.number(),
        }),
        remove_approval: sts.enumStruct({
            proposalId: sts.number(),
        }),
        spend: sts.enumStruct({
            amount: sts.bigint(),
            beneficiary: MultiAddress,
        }),
    }
})

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export const TimestampCall: sts.Type<TimestampCall> = sts.closedEnum(() => {
    return {
        set: sts.enumStruct({
            now: sts.bigint(),
        }),
    }
})

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export const SystemCall: sts.Type<SystemCall> = sts.closedEnum(() => {
    return {
        kill_prefix: sts.enumStruct({
            prefix: sts.bytes(),
            subkeys: sts.number(),
        }),
        kill_storage: sts.enumStruct({
            keys: sts.array(() => sts.bytes()),
        }),
        remark: sts.enumStruct({
            remark: sts.bytes(),
        }),
        remark_with_event: sts.enumStruct({
            remark: sts.bytes(),
        }),
        set_code: sts.enumStruct({
            code: sts.bytes(),
        }),
        set_code_without_checks: sts.enumStruct({
            code: sts.bytes(),
        }),
        set_heap_pages: sts.enumStruct({
            pages: sts.bigint(),
        }),
        set_storage: sts.enumStruct({
            items: sts.array(() => sts.tuple(() => [sts.bytes(), sts.bytes()])),
        }),
    }
})

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export const SudoCall: sts.Type<SudoCall> = sts.closedEnum(() => {
    return {
        set_key: sts.enumStruct({
            new: MultiAddress,
        }),
        sudo: sts.enumStruct({
            call: Call,
        }),
        sudo_as: sts.enumStruct({
            who: MultiAddress,
            call: Call,
        }),
        sudo_unchecked_weight: sts.enumStruct({
            call: Call,
            weight: Weight,
        }),
    }
})

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export const StakingCall: sts.Type<StakingCall> = sts.closedEnum(() => {
    return {
        bond: sts.enumStruct({
            value: sts.bigint(),
            payee: RewardDestination,
        }),
        bond_extra: sts.enumStruct({
            maxAdditional: sts.bigint(),
        }),
        cancel_deferred_slash: sts.enumStruct({
            era: sts.number(),
            slashIndices: sts.array(() => sts.number()),
        }),
        chill: sts.unit(),
        chill_other: sts.enumStruct({
            controller: AccountId32,
        }),
        force_apply_min_commission: sts.enumStruct({
            validatorStash: AccountId32,
        }),
        force_new_era: sts.unit(),
        force_new_era_always: sts.unit(),
        force_no_eras: sts.unit(),
        force_unstake: sts.enumStruct({
            stash: AccountId32,
            numSlashingSpans: sts.number(),
        }),
        increase_validator_count: sts.enumStruct({
            additional: sts.number(),
        }),
        kick: sts.enumStruct({
            who: sts.array(() => MultiAddress),
        }),
        nominate: sts.enumStruct({
            targets: sts.array(() => MultiAddress),
        }),
        payout_stakers: sts.enumStruct({
            validatorStash: AccountId32,
            era: sts.number(),
        }),
        reap_stash: sts.enumStruct({
            stash: AccountId32,
            numSlashingSpans: sts.number(),
        }),
        rebond: sts.enumStruct({
            value: sts.bigint(),
        }),
        scale_validator_count: sts.enumStruct({
            factor: Percent,
        }),
        set_controller: sts.unit(),
        set_invulnerables: sts.enumStruct({
            invulnerables: sts.array(() => AccountId32),
        }),
        set_min_commission: sts.enumStruct({
            new: Perbill,
        }),
        set_payee: sts.enumStruct({
            payee: RewardDestination,
        }),
        set_staking_configs: sts.enumStruct({
            minNominatorBond: ConfigOp,
            minValidatorBond: ConfigOp,
            maxNominatorCount: Type_378,
            maxValidatorCount: Type_378,
            chillThreshold: Type_379,
            minCommission: Type_380,
        }),
        set_validator_count: sts.enumStruct({
            new: sts.number(),
        }),
        unbond: sts.enumStruct({
            value: sts.bigint(),
        }),
        validate: sts.enumStruct({
            prefs: ValidatorPrefs,
        }),
        withdraw_unbonded: sts.enumStruct({
            numSlashingSpans: sts.number(),
        }),
    }
})

export const Type_380: sts.Type<Type_380> = sts.closedEnum(() => {
    return {
        Noop: sts.unit(),
        Remove: sts.unit(),
        Set: Perbill,
    }
})

export const Type_379: sts.Type<Type_379> = sts.closedEnum(() => {
    return {
        Noop: sts.unit(),
        Remove: sts.unit(),
        Set: Percent,
    }
})

export const Type_378: sts.Type<Type_378> = sts.closedEnum(() => {
    return {
        Noop: sts.unit(),
        Remove: sts.unit(),
        Set: sts.number(),
    }
})

export const ConfigOp: sts.Type<ConfigOp> = sts.closedEnum(() => {
    return {
        Noop: sts.unit(),
        Remove: sts.unit(),
        Set: sts.bigint(),
    }
})

export const Percent = sts.number()

export const RewardDestination: sts.Type<RewardDestination> = sts.closedEnum(() => {
    return {
        Account: AccountId32,
        Controller: sts.unit(),
        None: sts.unit(),
        Staked: sts.unit(),
        Stash: sts.unit(),
    }
})

/**
 * The pallet's extrinsics.
 */
export const StakeExchangeCall: sts.Type<StakeExchangeCall> = sts.closedEnum(() => {
    return {
        add_liquidity: sts.enumStruct({
            offerId: sts.bigint(),
            amount: sts.bigint(),
        }),
        buy: sts.enumStruct({
            offerId: sts.bigint(),
            amount: sts.bigint(),
            tokenId: sts.bigint(),
        }),
        cancel_offer: sts.enumStruct({
            offerId: sts.bigint(),
        }),
        configure_liquidity_account: sts.enumStruct({
            config: LiquidityAccountConfig,
        }),
        create_offer: sts.enumStruct({
            offer: CreateOffer,
        }),
        withdraw_liquidity: sts.enumStruct({
            offerId: sts.bigint(),
            amount: sts.bigint(),
        }),
    }
})

export const CreateOffer: sts.Type<CreateOffer> = sts.struct(() => {
    return {
        account: AccountId32,
        total: sts.bigint(),
        rate: sts.number(),
        minAverageRewardRate: sts.bigint(),
        tokenFilter: TokenFilter,
    }
})

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export const SlotsCall: sts.Type<SlotsCall> = sts.closedEnum(() => {
    return {
        clear_all_leases: sts.enumStruct({
            para: Id,
        }),
        force_lease: sts.enumStruct({
            para: Id,
            leaser: AccountId32,
            amount: sts.bigint(),
            periodBegin: sts.number(),
            periodCount: sts.number(),
        }),
        trigger_onboard: sts.enumStruct({
            para: Id,
        }),
    }
})

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export const SessionCall: sts.Type<SessionCall> = sts.closedEnum(() => {
    return {
        purge_keys: sts.unit(),
        set_keys: sts.enumStruct({
            keys: SessionKeys,
            proof: sts.bytes(),
        }),
    }
})

export const SessionKeys: sts.Type<SessionKeys> = sts.struct(() => {
    return {
        grandpa: Public,
        babe: sts.bytes(),
        imOnline: sts.bytes(),
        paraValidator: sts.bytes(),
        paraAssignment: sts.bytes(),
        authorityDiscovery: sts.bytes(),
    }
})

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export const SchedulerCall: sts.Type<SchedulerCall> = sts.closedEnum(() => {
    return {
        cancel: sts.enumStruct({
            when: sts.number(),
            index: sts.number(),
        }),
        cancel_named: sts.enumStruct({
            id: sts.bytes(),
        }),
        schedule: sts.enumStruct({
            when: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: Call,
        }),
        schedule_after: sts.enumStruct({
            after: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: Call,
        }),
        schedule_named: sts.enumStruct({
            id: sts.bytes(),
            when: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: Call,
        }),
        schedule_named_after: sts.enumStruct({
            id: sts.bytes(),
            after: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: Call,
        }),
    }
})

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export const RegistrarCall: sts.Type<RegistrarCall> = sts.closedEnum(() => {
    return {
        add_lock: sts.enumStruct({
            para: Id,
        }),
        deregister: sts.enumStruct({
            id: Id,
        }),
        force_register: sts.enumStruct({
            who: AccountId32,
            deposit: sts.bigint(),
            id: Id,
            genesisHead: HeadData,
            validationCode: ValidationCode,
        }),
        register: sts.enumStruct({
            id: Id,
            genesisHead: HeadData,
            validationCode: ValidationCode,
        }),
        remove_lock: sts.enumStruct({
            para: Id,
        }),
        reserve: sts.unit(),
        schedule_code_upgrade: sts.enumStruct({
            para: Id,
            newCode: ValidationCode,
        }),
        set_current_head: sts.enumStruct({
            para: Id,
            newHead: HeadData,
        }),
        swap: sts.enumStruct({
            id: Id,
            other: Id,
        }),
    }
})

export const ValidationCode = sts.bytes()

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export const ReferendaCall: sts.Type<ReferendaCall> = sts.closedEnum(() => {
    return {
        cancel: sts.enumStruct({
            index: sts.number(),
        }),
        kill: sts.enumStruct({
            index: sts.number(),
        }),
        nudge_referendum: sts.enumStruct({
            index: sts.number(),
        }),
        one_fewer_deciding: sts.enumStruct({
            track: sts.number(),
        }),
        place_decision_deposit: sts.enumStruct({
            index: sts.number(),
        }),
        refund_decision_deposit: sts.enumStruct({
            index: sts.number(),
        }),
        refund_submission_deposit: sts.enumStruct({
            index: sts.number(),
        }),
        set_metadata: sts.enumStruct({
            index: sts.number(),
            maybeHash: sts.option(() => H256),
        }),
        submit: sts.enumStruct({
            proposalOrigin: OriginCaller,
            proposal: Bounded,
            enactmentMoment: DispatchTime,
        }),
    }
})

export const DispatchTime: sts.Type<DispatchTime> = sts.closedEnum(() => {
    return {
        After: sts.number(),
        At: sts.number(),
    }
})

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export const PreimageCall: sts.Type<PreimageCall> = sts.closedEnum(() => {
    return {
        note_preimage: sts.enumStruct({
            bytes: sts.bytes(),
        }),
        request_preimage: sts.enumStruct({
            hash: H256,
        }),
        unnote_preimage: sts.enumStruct({
            hash: H256,
        }),
        unrequest_preimage: sts.enumStruct({
            hash: H256,
        }),
    }
})

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export const ParasSudoWrapperCall: sts.Type<ParasSudoWrapperCall> = sts.closedEnum(() => {
    return {
        sudo_establish_hrmp_channel: sts.enumStruct({
            sender: Id,
            recipient: Id,
            maxCapacity: sts.number(),
            maxMessageSize: sts.number(),
        }),
        sudo_queue_downward_xcm: sts.enumStruct({
            id: Id,
            xcm: VersionedXcm,
        }),
        sudo_schedule_para_cleanup: sts.enumStruct({
            id: Id,
        }),
        sudo_schedule_para_initialize: sts.enumStruct({
            id: Id,
            genesis: ParaGenesisArgs,
        }),
        sudo_schedule_parachain_downgrade: sts.enumStruct({
            id: Id,
        }),
        sudo_schedule_parathread_upgrade: sts.enumStruct({
            id: Id,
        }),
    }
})

export const ParaGenesisArgs: sts.Type<ParaGenesisArgs> = sts.struct(() => {
    return {
        genesisHead: HeadData,
        validationCode: ValidationCode,
        paraKind: sts.boolean(),
    }
})

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export const ParasSlashingCall: sts.Type<ParasSlashingCall> = sts.closedEnum(() => {
    return {
        report_dispute_lost_unsigned: sts.enumStruct({
            disputeProof: V5DisputeProof,
            keyOwnerProof: MembershipProof,
        }),
    }
})

export const MembershipProof: sts.Type<MembershipProof> = sts.struct(() => {
    return {
        session: sts.number(),
        trieNodes: sts.array(() => sts.bytes()),
        validatorCount: sts.number(),
    }
})

export const V5DisputeProof: sts.Type<V5DisputeProof> = sts.struct(() => {
    return {
        timeSlot: V5DisputesTimeSlot,
        kind: V5SlashingOffenceKind,
        validatorIndex: V5ValidatorIndex,
        validatorId: sts.bytes(),
    }
})

export const V5ValidatorIndex = sts.number()

export const V5SlashingOffenceKind: sts.Type<V5SlashingOffenceKind> = sts.closedEnum(() => {
    return {
        AgainstValid: sts.unit(),
        ForInvalid: sts.unit(),
    }
})

export const V5DisputesTimeSlot: sts.Type<V5DisputesTimeSlot> = sts.struct(() => {
    return {
        sessionIndex: sts.number(),
        candidateHash: CandidateHash,
    }
})

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export const ParasSharedCall: sts.Type<ParasSharedCall> = sts.closedEnum(() => {
    return {}
})

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export const ParasDisputesCall: sts.Type<ParasDisputesCall> = sts.closedEnum(() => {
    return {
        force_unfreeze: sts.unit(),
    }
})

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export const ParasCall: sts.Type<ParasCall> = sts.closedEnum(() => {
    return {
        add_trusted_validation_code: sts.enumStruct({
            validationCode: ValidationCode,
        }),
        force_note_new_head: sts.enumStruct({
            para: Id,
            newHead: HeadData,
        }),
        force_queue_action: sts.enumStruct({
            para: Id,
        }),
        force_schedule_code_upgrade: sts.enumStruct({
            para: Id,
            newCode: ValidationCode,
            relayParentNumber: sts.number(),
        }),
        force_set_current_code: sts.enumStruct({
            para: Id,
            newCode: ValidationCode,
        }),
        force_set_current_head: sts.enumStruct({
            para: Id,
            newHead: HeadData,
        }),
        include_pvf_check_statement: sts.enumStruct({
            stmt: V5PvfCheckStatement,
            signature: sts.bytes(),
        }),
        poke_unused_validation_code: sts.enumStruct({
            validationCodeHash: ValidationCodeHash,
        }),
    }
})

export const V5PvfCheckStatement: sts.Type<V5PvfCheckStatement> = sts.struct(() => {
    return {
        accept: sts.boolean(),
        subject: ValidationCodeHash,
        sessionIndex: sts.number(),
        validatorIndex: V5ValidatorIndex,
    }
})

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export const ParaInherentCall: sts.Type<ParaInherentCall> = sts.closedEnum(() => {
    return {
        enter: sts.enumStruct({
            data: V5InherentData,
        }),
    }
})

export const V5InherentData: sts.Type<V5InherentData> = sts.struct(() => {
    return {
        bitfields: sts.array(() => V5UncheckedSigned),
        backedCandidates: sts.array(() => V5BackedCandidate),
        disputes: sts.array(() => V5DisputeStatementSet),
        parentHeader: Header,
    }
})

export const Header: sts.Type<Header> = sts.struct(() => {
    return {
        parentHash: H256,
        number: sts.number(),
        stateRoot: H256,
        extrinsicsRoot: H256,
        digest: Digest,
    }
})

export const Digest: sts.Type<Digest> = sts.struct(() => {
    return {
        logs: sts.array(() => DigestItem),
    }
})

export const DigestItem: sts.Type<DigestItem> = sts.closedEnum(() => {
    return {
        Consensus: sts.tuple(() => [sts.bytes(), sts.bytes()]),
        Other: sts.bytes(),
        PreRuntime: sts.tuple(() => [sts.bytes(), sts.bytes()]),
        RuntimeEnvironmentUpdated: sts.unit(),
        Seal: sts.tuple(() => [sts.bytes(), sts.bytes()]),
    }
})

export const V5DisputeStatementSet: sts.Type<V5DisputeStatementSet> = sts.struct(() => {
    return {
        candidateHash: CandidateHash,
        session: sts.number(),
        statements: sts.array(() => sts.tuple(() => [V5DisputeStatement, V5ValidatorIndex, sts.bytes()])),
    }
})

export const V5DisputeStatement: sts.Type<V5DisputeStatement> = sts.closedEnum(() => {
    return {
        Invalid: V5InvalidDisputeStatementKind,
        Valid: V5ValidDisputeStatementKind,
    }
})

export const V5ValidDisputeStatementKind: sts.Type<V5ValidDisputeStatementKind> = sts.closedEnum(() => {
    return {
        ApprovalChecking: sts.unit(),
        BackingSeconded: H256,
        BackingValid: H256,
        Explicit: sts.unit(),
    }
})

export const V5InvalidDisputeStatementKind: sts.Type<V5InvalidDisputeStatementKind> = sts.closedEnum(() => {
    return {
        Explicit: sts.unit(),
    }
})

export const V5BackedCandidate: sts.Type<V5BackedCandidate> = sts.struct(() => {
    return {
        candidate: V5CommittedCandidateReceipt,
        validityVotes: sts.array(() => V5ValidityAttestation),
        validatorIndices: sts.bitseq(),
    }
})

export const V5ValidityAttestation: sts.Type<V5ValidityAttestation> = sts.closedEnum(() => {
    return {
        Explicit: sts.bytes(),
        Implicit: sts.bytes(),
    }
})

export const V5CommittedCandidateReceipt: sts.Type<V5CommittedCandidateReceipt> = sts.struct(() => {
    return {
        descriptor: V5CandidateDescriptor,
        commitments: V5CandidateCommitments,
    }
})

export const V5CandidateCommitments: sts.Type<V5CandidateCommitments> = sts.struct(() => {
    return {
        upwardMessages: sts.array(() => sts.bytes()),
        horizontalMessages: sts.array(() => OutboundHrmpMessage),
        newValidationCode: sts.option(() => ValidationCode),
        headData: HeadData,
        processedDownwardMessages: sts.number(),
        hrmpWatermark: sts.number(),
    }
})

export const OutboundHrmpMessage: sts.Type<OutboundHrmpMessage> = sts.struct(() => {
    return {
        recipient: Id,
        data: sts.bytes(),
    }
})

export const V5UncheckedSigned: sts.Type<V5UncheckedSigned> = sts.struct(() => {
    return {
        payload: V5AvailabilityBitfield,
        validatorIndex: V5ValidatorIndex,
        signature: sts.bytes(),
    }
})

export const V5AvailabilityBitfield = sts.bitseq()

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export const ParaInclusionCall: sts.Type<ParaInclusionCall> = sts.closedEnum(() => {
    return {}
})

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export const NominationPoolsCall: sts.Type<NominationPoolsCall> = sts.closedEnum(() => {
    return {
        bond: sts.enumStruct({
            poolId: sts.number(),
            amount: BondValue,
        }),
        calculate_early_bird_bonus: sts.enumStruct({
            poolCount: sts.number(),
        }),
        capture_early_bird_bonus_shares: sts.enumStruct({
            poolId: sts.number(),
            accountCount: sts.number(),
        }),
        chill: sts.enumStruct({
            poolId: sts.number(),
        }),
        create: sts.enumStruct({
            tokenId: sts.bigint(),
            deposit: sts.bigint(),
            capacity: sts.bigint(),
            duration: sts.number(),
            name: BoundedVec,
        }),
        destroy: sts.enumStruct({
            poolId: sts.number(),
        }),
        mutate: sts.enumStruct({
            poolId: sts.number(),
            mutation: PoolMutation,
        }),
        nominate: sts.enumStruct({
            poolId: sts.number(),
            validators: sts.array(() => AccountId32),
        }),
        pay_early_bird_bonus: sts.enumStruct({
            poolId: sts.number(),
            paymentId: sts.number(),
            accountCount: sts.number(),
        }),
        payout_rewards: sts.enumStruct({
            validatorStash: AccountId32,
            era: sts.number(),
        }),
        pool_withdraw_unbonded: sts.enumStruct({
            poolId: sts.number(),
            numSlashingSpans: sts.number(),
        }),
        process_payouts: sts.enumStruct({
            poolCount: sts.number(),
        }),
        set_configs: sts.enumStruct({
            minJoinBond: Type_405,
            minCreateBond: Type_405,
            globalMaxCommission: Type_406,
            requiredPayoutCount: Type_406,
        }),
        set_staking_info: sts.enumStruct({
            info: StakingInfo,
        }),
        unbond: sts.enumStruct({
            poolId: sts.number(),
            memberAccount: MultiAddress,
            unbondingPoints: sts.bigint(),
        }),
        unbond_deposit: sts.enumStruct({
            poolId: sts.number(),
        }),
        unlock_early_bird_bonus: sts.unit(),
        withdraw_deposit: sts.enumStruct({
            poolId: sts.number(),
        }),
        withdraw_free_balance: sts.enumStruct({
            poolId: sts.number(),
            destination: MultiAddress,
            amount: sts.bigint(),
        }),
        withdraw_unbonded: sts.enumStruct({
            poolId: sts.number(),
            memberAccount: MultiAddress,
            numSlashingSpans: sts.number(),
        }),
    }
})

export const StakingInfo: sts.Type<StakingInfo> = sts.struct(() => {
    return {
        annualInflationRate: Perbill,
        collatorPayoutCut: Perbill,
    }
})

export const Type_406: sts.Type<Type_406> = sts.closedEnum(() => {
    return {
        Noop: sts.unit(),
        Remove: sts.unit(),
        Set: Perbill,
    }
})

export const Type_405: sts.Type<Type_405> = sts.closedEnum(() => {
    return {
        Noop: sts.unit(),
        Remove: sts.unit(),
        Set: sts.bigint(),
    }
})

export const BondValue: sts.Type<BondValue> = sts.closedEnum(() => {
    return {
        Amount: sts.bigint(),
        Fill: sts.unit(),
    }
})

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export const MultisigCall: sts.Type<MultisigCall> = sts.closedEnum(() => {
    return {
        approve_as_multi: sts.enumStruct({
            threshold: sts.number(),
            otherSignatories: sts.array(() => AccountId32),
            maybeTimepoint: sts.option(() => Timepoint),
            callHash: sts.bytes(),
            maxWeight: Weight,
        }),
        as_multi: sts.enumStruct({
            threshold: sts.number(),
            otherSignatories: sts.array(() => AccountId32),
            maybeTimepoint: sts.option(() => Timepoint),
            call: Call,
            maxWeight: Weight,
        }),
        as_multi_threshold_1: sts.enumStruct({
            otherSignatories: sts.array(() => AccountId32),
            call: Call,
        }),
        cancel_as_multi: sts.enumStruct({
            threshold: sts.number(),
            otherSignatories: sts.array(() => AccountId32),
            timepoint: Timepoint,
            callHash: sts.bytes(),
        }),
    }
})

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export const MultiTokensCall: sts.Type<MultiTokensCall> = sts.closedEnum(() => {
    return {
        approve_collection: sts.enumStruct({
            collectionId: sts.bigint(),
            operator: AccountId32,
            expiration: sts.option(() => sts.number()),
        }),
        approve_token: sts.enumStruct({
            collectionId: sts.bigint(),
            tokenId: sts.bigint(),
            operator: AccountId32,
            amount: sts.bigint(),
            expiration: sts.option(() => sts.number()),
            currentAmount: sts.bigint(),
        }),
        batch_mint: sts.enumStruct({
            collectionId: sts.bigint(),
            recipients: sts.array(() => Type_527),
        }),
        batch_set_attribute: sts.enumStruct({
            collectionId: sts.bigint(),
            tokenId: sts.option(() => sts.bigint()),
            attributes: sts.array(() => AttributeKeyValuePair),
        }),
        batch_transfer: sts.enumStruct({
            collectionId: sts.bigint(),
            recipients: sts.array(() => Recipient),
        }),
        burn: sts.enumStruct({
            collectionId: sts.bigint(),
            params: DefaultBurnParams,
        }),
        claim_collections: sts.enumStruct({
            destination: AccountId32,
            ethereumSignature: sts.bytes(),
            ethereumAddress: H160,
            collectionCount: sts.number(),
        }),
        claim_tokens: sts.enumStruct({
            destination: AccountId32,
            ethereumSignature: sts.bytes(),
            ethereumAddress: H160,
        }),
        create_collection: sts.enumStruct({
            descriptor: DefaultCollectionDescriptor,
        }),
        destroy_collection: sts.enumStruct({
            collectionId: sts.bigint(),
        }),
        finish_claim_tokens: sts.enumStruct({
            destination: AccountId32,
            ethereumAddress: H160,
        }),
        force_approve_collection: sts.enumStruct({
            caller: MultiAddress,
            collectionId: sts.bigint(),
            operator: AccountId32,
            expiration: sts.option(() => sts.number()),
        }),
        force_burn: sts.enumStruct({
            caller: MultiAddress,
            collectionId: sts.bigint(),
            params: DefaultBurnParams,
        }),
        force_create_collection: sts.enumStruct({
            owner: AccountId32,
            collectionId: sts.bigint(),
            descriptor: DefaultCollectionDescriptor,
        }),
        force_create_ethereum_collection: sts.enumStruct({
            owner: AccountId32,
            claimer: H160,
            ethereumCollectionId: sts.bigint(),
            descriptor: DefaultCollectionDescriptor,
        }),
        force_freeze: sts.enumStruct({
            info: Freeze,
        }),
        force_mint: sts.enumStruct({
            caller: sts.option(() => MultiAddress),
            recipient: MultiAddress,
            collectionId: sts.bigint(),
            params: FlexibleMintParams,
            depositor: sts.option(() => MultiAddress),
        }),
        force_mutate_collection: sts.enumStruct({
            collectionId: sts.bigint(),
            mutation: DefaultCollectionMutation,
        }),
        force_set_attribute: sts.enumStruct({
            collectionId: sts.bigint(),
            tokenId: sts.option(() => sts.bigint()),
            key: sts.bytes(),
            value: sts.option(() => Attribute),
        }),
        force_set_collection: sts.enumStruct({
            collectionId: sts.bigint(),
            value: sts.option(() => Collection),
        }),
        force_set_collection_account: sts.enumStruct({
            collectionId: sts.bigint(),
            accountId: MultiAddress,
            value: sts.option(() => CollectionAccount),
        }),
        force_set_ethereum_account: sts.enumStruct({
            address: H160,
            value: sts.option(() => sts.array(() => sts.bigint())),
        }),
        force_set_ethereum_collection_id: sts.enumStruct({
            ethereumCollectionId: sts.bigint(),
            nativeCollectionId: sts.option(() => sts.bigint()),
        }),
        force_set_ethereum_unmintable_token_ids: sts.enumStruct({
            ethereumCollectionId: sts.bigint(),
            baseTokenId: sts.bigint(),
            tokenIndex: sts.bigint(),
        }),
        force_set_next_collection_id: sts.enumStruct({
            value: sts.bigint(),
        }),
        force_set_token: sts.enumStruct({
            collectionId: sts.bigint(),
            tokenId: sts.bigint(),
            value: sts.option(() => Token),
        }),
        force_set_token_account: sts.enumStruct({
            collectionId: sts.bigint(),
            tokenId: sts.bigint(),
            accountId: MultiAddress,
            value: sts.option(() => TokenAccount),
        }),
        force_set_unmintable_token_ids: sts.enumStruct({
            collectionId: sts.bigint(),
            baseTokenId: sts.bigint(),
            tokenIndex: sts.bigint(),
        }),
        force_transfer: sts.enumStruct({
            source: MultiAddress,
            destination: MultiAddress,
            collectionId: sts.bigint(),
            params: DefaultTransferParams,
        }),
        freeze: sts.enumStruct({
            info: Freeze,
        }),
        mint: sts.enumStruct({
            recipient: MultiAddress,
            collectionId: sts.bigint(),
            params: DefaultMintParams,
        }),
        mutate_collection: sts.enumStruct({
            collectionId: sts.bigint(),
            mutation: DefaultCollectionMutation,
        }),
        mutate_token: sts.enumStruct({
            collectionId: sts.bigint(),
            tokenId: sts.bigint(),
            mutation: DefaultTokenMutation,
        }),
        remove_all_attributes: sts.enumStruct({
            collectionId: sts.bigint(),
            tokenId: sts.option(() => sts.bigint()),
            attributeCount: sts.number(),
        }),
        remove_attribute: sts.enumStruct({
            collectionId: sts.bigint(),
            tokenId: sts.option(() => sts.bigint()),
            key: sts.bytes(),
        }),
        set_attribute: sts.enumStruct({
            collectionId: sts.bigint(),
            tokenId: sts.option(() => sts.bigint()),
            key: sts.bytes(),
            value: sts.bytes(),
        }),
        thaw: sts.enumStruct({
            info: Freeze,
        }),
        transfer: sts.enumStruct({
            recipient: MultiAddress,
            collectionId: sts.bigint(),
            params: DefaultTransferParams,
        }),
        unapprove_collection: sts.enumStruct({
            collectionId: sts.bigint(),
            operator: AccountId32,
        }),
        unapprove_token: sts.enumStruct({
            collectionId: sts.bigint(),
            tokenId: sts.bigint(),
            operator: AccountId32,
        }),
    }
})

export const DefaultMintParams: sts.Type<DefaultMintParams> = sts.closedEnum(() => {
    return {
        CreateToken: sts.enumStruct({
            tokenId: sts.bigint(),
            initialSupply: sts.bigint(),
            sufficiency: SufficiencyParam,
            cap: sts.option(() => TokenCap),
            behavior: sts.option(() => TokenMarketBehavior),
            listingForbidden: sts.boolean(),
            freezeState: sts.option(() => FreezeState),
            attributes: sts.array(() => AttributeKeyValuePair),
            foreignParams: sts.option(() => ForeignTokenCreationParams),
        }),
        Mint: sts.enumStruct({
            tokenId: sts.bigint(),
            amount: sts.bigint(),
            unitPrice: sts.option(() => sts.bigint()),
        }),
    }
})

export const ForeignTokenCreationParams: sts.Type<ForeignTokenCreationParams> = sts.struct(() => {
    return {
        decimalCount: sts.number(),
        name: BoundedString,
        symbol: sts.bytes(),
        location: sts.option(() => V3MultiLocation),
        unitsPerSecond: sts.option(() => sts.bigint()),
    }
})

export const SufficiencyParam: sts.Type<SufficiencyParam> = sts.closedEnum(() => {
    return {
        Insufficient: sts.enumStruct({
            unitPrice: sts.option(() => sts.bigint()),
        }),
        Sufficient: sts.enumStruct({
            minimumBalance: sts.bigint(),
        }),
    }
})

export const DefaultTransferParams: sts.Type<DefaultTransferParams> = sts.closedEnum(() => {
    return {
        Operator: sts.enumStruct({
            tokenId: sts.bigint(),
            source: AccountId32,
            amount: sts.bigint(),
            keepAlive: sts.boolean(),
        }),
        Simple: sts.enumStruct({
            tokenId: sts.bigint(),
            amount: sts.bigint(),
            keepAlive: sts.boolean(),
        }),
    }
})

export const Attribute: sts.Type<Attribute> = sts.struct(() => {
    return {
        value: sts.bytes(),
        deposit: sts.bigint(),
    }
})

export const FlexibleMintParams: sts.Type<FlexibleMintParams> = sts.closedEnum(() => {
    return {
        CreateOrMint: sts.enumStruct({
            tokenId: sts.bigint(),
            amount: sts.bigint(),
            sufficiency: SufficiencyParam,
            cap: sts.option(() => TokenCap),
            behavior: sts.option(() => TokenMarketBehavior),
            listingForbidden: sts.boolean(),
            freezeState: sts.option(() => FreezeState),
            attributes: sts.array(() => AttributeKeyValuePair),
            foreignParams: sts.option(() => ForeignTokenCreationParams),
        }),
        CreateToken: sts.enumStruct({
            tokenId: sts.bigint(),
            initialSupply: sts.bigint(),
            sufficiency: SufficiencyParam,
            cap: sts.option(() => TokenCap),
            behavior: sts.option(() => TokenMarketBehavior),
            listingForbidden: sts.boolean(),
            freezeState: sts.option(() => FreezeState),
            attributes: sts.array(() => AttributeKeyValuePair),
            foreignParams: sts.option(() => ForeignTokenCreationParams),
        }),
        Mint: sts.enumStruct({
            tokenId: sts.bigint(),
            amount: sts.bigint(),
            unitPrice: sts.option(() => sts.bigint()),
        }),
    }
})

export const DefaultCollectionDescriptor: sts.Type<DefaultCollectionDescriptor> = sts.struct(() => {
    return {
        policy: DefaultCollectionPolicyDescriptor,
        explicitRoyaltyCurrencies: sts.array(() => AssetId),
        attributes: sts.array(() => AttributeKeyValuePair),
    }
})

export const DefaultCollectionPolicyDescriptor: sts.Type<DefaultCollectionPolicyDescriptor> = sts.struct(() => {
    return {
        mint: DefaultMintPolicyDescriptor,
        market: DefaultMarketPolicyDescriptor,
    }
})

export const DefaultMarketPolicyDescriptor: sts.Type<DefaultMarketPolicyDescriptor> = sts.struct(() => {
    return {
        royalty: sts.option(() => DefaultRoyalty),
    }
})

export const DefaultMintPolicyDescriptor: sts.Type<DefaultMintPolicyDescriptor> = sts.struct(() => {
    return {
        maxTokenCount: sts.option(() => sts.bigint()),
        maxTokenSupply: sts.option(() => sts.bigint()),
        forceSingleMint: sts.boolean(),
    }
})

export const DefaultBurnParams: sts.Type<DefaultBurnParams> = sts.struct(() => {
    return {
        tokenId: sts.bigint(),
        amount: sts.bigint(),
        keepAlive: sts.boolean(),
        removeTokenStorage: sts.boolean(),
    }
})

export const Recipient: sts.Type<Recipient> = sts.struct(() => {
    return {
        accountId: AccountId32,
        params: DefaultTransferParams,
    }
})

export const AttributeKeyValuePair: sts.Type<AttributeKeyValuePair> = sts.struct(() => {
    return {
        key: sts.bytes(),
        value: sts.bytes(),
    }
})

export const Type_527: sts.Type<Type_527> = sts.struct(() => {
    return {
        accountId: AccountId32,
        params: DefaultMintParams,
    }
})

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export const MessageQueueCall: sts.Type<MessageQueueCall> = sts.closedEnum(() => {
    return {
        execute_overweight: sts.enumStruct({
            messageOrigin: AggregateMessageOrigin,
            page: sts.number(),
            index: sts.number(),
            weightLimit: Weight,
        }),
        reap_page: sts.enumStruct({
            messageOrigin: AggregateMessageOrigin,
            pageIndex: sts.number(),
        }),
    }
})

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export const MarketplaceCall: sts.Type<MarketplaceCall> = sts.closedEnum(() => {
    return {
        cancel_listing: sts.enumStruct({
            listingId: H256,
        }),
        create_listing: sts.enumStruct({
            makeAssetId: AssetId,
            takeAssetId: AssetId,
            amount: sts.bigint(),
            price: sts.bigint(),
            salt: sts.bytes(),
            auctionData: sts.option(() => AuctionData),
        }),
        fill_listing: sts.enumStruct({
            listingId: H256,
            amount: sts.bigint(),
        }),
        finalize_auction: sts.enumStruct({
            listingId: H256,
        }),
        force_create_listing: sts.enumStruct({
            seller: MultiAddress,
            makeAssetId: AssetId,
            takeAssetId: AssetId,
            amount: sts.bigint(),
            price: sts.bigint(),
            salt: sts.bytes(),
            auctionData: sts.option(() => AuctionData),
            depositBacker: sts.option(() => MultiAddress),
        }),
        force_place_bid: sts.enumStruct({
            bidder: MultiAddress,
            listingId: H256,
            price: sts.bigint(),
            fundsBacker: sts.option(() => MultiAddress),
        }),
        place_bid: sts.enumStruct({
            listingId: H256,
            price: sts.bigint(),
        }),
        set_protocol_fee: sts.enumStruct({
            protocolFee: Perbill,
        }),
    }
})

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export const InitializerCall: sts.Type<InitializerCall> = sts.closedEnum(() => {
    return {
        force_approve: sts.enumStruct({
            upTo: sts.number(),
        }),
    }
})

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export const ImOnlineCall: sts.Type<ImOnlineCall> = sts.closedEnum(() => {
    return {
        heartbeat: sts.enumStruct({
            heartbeat: Heartbeat,
            signature: sts.bytes(),
        }),
    }
})

/**
 * Identity pallet declaration.
 */
export const IdentityCall: sts.Type<IdentityCall> = sts.closedEnum(() => {
    return {
        add_registrar: sts.enumStruct({
            account: MultiAddress,
        }),
        add_sub: sts.enumStruct({
            sub: MultiAddress,
            data: Data,
        }),
        cancel_request: sts.enumStruct({
            regIndex: sts.number(),
        }),
        clear_identity: sts.unit(),
        kill_identity: sts.enumStruct({
            target: MultiAddress,
        }),
        provide_judgement: sts.enumStruct({
            regIndex: sts.number(),
            target: MultiAddress,
            judgement: Judgement,
            identity: H256,
        }),
        quit_sub: sts.unit(),
        remove_sub: sts.enumStruct({
            sub: MultiAddress,
        }),
        rename_sub: sts.enumStruct({
            sub: MultiAddress,
            data: Data,
        }),
        request_judgement: sts.enumStruct({
            regIndex: sts.number(),
            maxFee: sts.bigint(),
        }),
        set_account_id: sts.enumStruct({
            index: sts.number(),
            new: MultiAddress,
        }),
        set_fee: sts.enumStruct({
            index: sts.number(),
            fee: sts.bigint(),
        }),
        set_fields: sts.enumStruct({
            index: sts.number(),
            fields: BitFlags,
        }),
        set_identity: sts.enumStruct({
            info: IdentityInfo,
        }),
        set_subs: sts.enumStruct({
            subs: sts.array(() => sts.tuple(() => [AccountId32, Data])),
        }),
    }
})

export const IdentityInfo: sts.Type<IdentityInfo> = sts.struct(() => {
    return {
        additional: sts.array(() => sts.tuple(() => [Data, Data])),
        display: Data,
        legal: Data,
        web: Data,
        riot: Data,
        email: Data,
        pgpFingerprint: sts.option(() => sts.bytes()),
        image: Data,
        twitter: Data,
    }
})

export const BitFlags = sts.bigint()

export const Judgement: sts.Type<Judgement> = sts.closedEnum(() => {
    return {
        Erroneous: sts.unit(),
        FeePaid: sts.bigint(),
        KnownGood: sts.unit(),
        LowQuality: sts.unit(),
        OutOfDate: sts.unit(),
        Reasonable: sts.unit(),
        Unknown: sts.unit(),
    }
})

export const Data: sts.Type<Data> = sts.closedEnum(() => {
    return {
        BlakeTwo256: sts.bytes(),
        Keccak256: sts.bytes(),
        None: sts.unit(),
        Raw0: sts.bytes(),
        Raw1: sts.bytes(),
        Raw10: sts.bytes(),
        Raw11: sts.bytes(),
        Raw12: sts.bytes(),
        Raw13: sts.bytes(),
        Raw14: sts.bytes(),
        Raw15: sts.bytes(),
        Raw16: sts.bytes(),
        Raw17: sts.bytes(),
        Raw18: sts.bytes(),
        Raw19: sts.bytes(),
        Raw2: sts.bytes(),
        Raw20: sts.bytes(),
        Raw21: sts.bytes(),
        Raw22: sts.bytes(),
        Raw23: sts.bytes(),
        Raw24: sts.bytes(),
        Raw25: sts.bytes(),
        Raw26: sts.bytes(),
        Raw27: sts.bytes(),
        Raw28: sts.bytes(),
        Raw29: sts.bytes(),
        Raw3: sts.bytes(),
        Raw30: sts.bytes(),
        Raw31: sts.bytes(),
        Raw32: sts.bytes(),
        Raw4: sts.bytes(),
        Raw5: sts.bytes(),
        Raw6: sts.bytes(),
        Raw7: sts.bytes(),
        Raw8: sts.bytes(),
        Raw9: sts.bytes(),
        Sha256: sts.bytes(),
        ShaThree256: sts.bytes(),
    }
})

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export const HrmpCall: sts.Type<HrmpCall> = sts.closedEnum(() => {
    return {
        force_clean_hrmp: sts.enumStruct({
            para: Id,
            inbound: sts.number(),
            outbound: sts.number(),
        }),
        force_open_hrmp_channel: sts.enumStruct({
            sender: Id,
            recipient: Id,
            maxCapacity: sts.number(),
            maxMessageSize: sts.number(),
        }),
        force_process_hrmp_close: sts.enumStruct({
            channels: sts.number(),
        }),
        force_process_hrmp_open: sts.enumStruct({
            channels: sts.number(),
        }),
        hrmp_accept_open_channel: sts.enumStruct({
            sender: Id,
        }),
        hrmp_cancel_open_request: sts.enumStruct({
            channelId: HrmpChannelId,
            openRequests: sts.number(),
        }),
        hrmp_close_channel: sts.enumStruct({
            channelId: HrmpChannelId,
        }),
        hrmp_init_open_channel: sts.enumStruct({
            recipient: Id,
            proposedMaxCapacity: sts.number(),
            proposedMaxMessageSize: sts.number(),
        }),
    }
})

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export const GrandpaCall: sts.Type<GrandpaCall> = sts.closedEnum(() => {
    return {
        note_stalled: sts.enumStruct({
            delay: sts.number(),
            bestFinalizedBlockNumber: sts.number(),
        }),
        report_equivocation: sts.enumStruct({
            equivocationProof: Type_387,
            keyOwnerProof: MembershipProof,
        }),
        report_equivocation_unsigned: sts.enumStruct({
            equivocationProof: Type_387,
            keyOwnerProof: MembershipProof,
        }),
    }
})

export const Type_387: sts.Type<Type_387> = sts.struct(() => {
    return {
        setId: sts.bigint(),
        equivocation: Equivocation,
    }
})

export const Equivocation: sts.Type<Equivocation> = sts.closedEnum(() => {
    return {
        Precommit: Type_394,
        Prevote: Type_389,
    }
})

export const Type_389: sts.Type<Type_389> = sts.struct(() => {
    return {
        roundNumber: sts.bigint(),
        identity: Public,
        first: sts.tuple(() => [Prevote, sts.bytes()]),
        second: sts.tuple(() => [Prevote, sts.bytes()]),
    }
})

export const Prevote: sts.Type<Prevote> = sts.struct(() => {
    return {
        targetHash: H256,
        targetNumber: sts.number(),
    }
})

export const Type_394: sts.Type<Type_394> = sts.struct(() => {
    return {
        roundNumber: sts.bigint(),
        identity: Public,
        first: sts.tuple(() => [Precommit, sts.bytes()]),
        second: sts.tuple(() => [Precommit, sts.bytes()]),
    }
})

export const Precommit: sts.Type<Precommit> = sts.struct(() => {
    return {
        targetHash: H256,
        targetNumber: sts.number(),
    }
})

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export const FuelTanksCall: sts.Type<FuelTanksCall> = sts.closedEnum(() => {
    return {
        add_account: sts.enumStruct({
            tankId: MultiAddress,
            userId: MultiAddress,
        }),
        batch_add_account: sts.enumStruct({
            tankId: MultiAddress,
            userIds: sts.array(() => MultiAddress),
        }),
        batch_remove_account: sts.enumStruct({
            tankId: MultiAddress,
            userIds: sts.array(() => MultiAddress),
        }),
        create_fuel_tank: sts.enumStruct({
            descriptor: FuelTankDescriptor,
        }),
        destroy_fuel_tank: sts.enumStruct({
            tankId: MultiAddress,
        }),
        dispatch: sts.enumStruct({
            tankId: MultiAddress,
            ruleSetId: sts.number(),
            call: Call,
            settings: sts.option(() => DispatchSettings),
        }),
        dispatch_and_touch: sts.enumStruct({
            tankId: MultiAddress,
            ruleSetId: sts.number(),
            call: Call,
            settings: sts.option(() => DispatchSettings),
        }),
        force_batch_add_account: sts.enumStruct({
            owner: MultiAddress,
            tankId: MultiAddress,
            userIds: sts.array(() => MultiAddress),
        }),
        force_create_fuel_tank: sts.enumStruct({
            owner: MultiAddress,
            descriptor: FuelTankDescriptor,
        }),
        force_set_consumption: sts.enumStruct({
            tankId: MultiAddress,
            userId: sts.option(() => MultiAddress),
            ruleSetId: sts.number(),
            consumption: Consumption,
        }),
        insert_rule_set: sts.enumStruct({
            tankId: MultiAddress,
            ruleSetId: sts.number(),
            rules: sts.array(() => DispatchRuleDescriptor),
        }),
        mutate_freeze_state: sts.enumStruct({
            tankId: MultiAddress,
            ruleSetId: sts.option(() => sts.number()),
            isFrozen: sts.boolean(),
        }),
        mutate_fuel_tank: sts.enumStruct({
            tankId: MultiAddress,
            mutation: DefaultTankMutation,
        }),
        remove_account: sts.enumStruct({
            tankId: MultiAddress,
            userId: MultiAddress,
        }),
        remove_account_rule_data: sts.enumStruct({
            tankId: MultiAddress,
            userId: MultiAddress,
            ruleSetId: sts.number(),
            ruleKind: DispatchRuleKind,
        }),
        remove_rule_set: sts.enumStruct({
            tankId: MultiAddress,
            ruleSetId: sts.number(),
        }),
    }
})

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export const FellowshipReferendaCall: sts.Type<FellowshipReferendaCall> = sts.closedEnum(() => {
    return {
        cancel: sts.enumStruct({
            index: sts.number(),
        }),
        kill: sts.enumStruct({
            index: sts.number(),
        }),
        nudge_referendum: sts.enumStruct({
            index: sts.number(),
        }),
        one_fewer_deciding: sts.enumStruct({
            track: sts.number(),
        }),
        place_decision_deposit: sts.enumStruct({
            index: sts.number(),
        }),
        refund_decision_deposit: sts.enumStruct({
            index: sts.number(),
        }),
        refund_submission_deposit: sts.enumStruct({
            index: sts.number(),
        }),
        set_metadata: sts.enumStruct({
            index: sts.number(),
            maybeHash: sts.option(() => H256),
        }),
        submit: sts.enumStruct({
            proposalOrigin: OriginCaller,
            proposal: Bounded,
            enactmentMoment: DispatchTime,
        }),
    }
})

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export const FellowshipCollectiveCall: sts.Type<FellowshipCollectiveCall> = sts.closedEnum(() => {
    return {
        add_member: sts.enumStruct({
            who: MultiAddress,
        }),
        cleanup_poll: sts.enumStruct({
            pollIndex: sts.number(),
            max: sts.number(),
        }),
        demote_member: sts.enumStruct({
            who: MultiAddress,
        }),
        promote_member: sts.enumStruct({
            who: MultiAddress,
        }),
        remove_member: sts.enumStruct({
            who: MultiAddress,
            minRank: sts.number(),
        }),
        vote: sts.enumStruct({
            poll: sts.number(),
            aye: sts.boolean(),
        }),
    }
})

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export const ExtrinsicPauseCall: sts.Type<ExtrinsicPauseCall> = sts.closedEnum(() => {
    return {
        pause_extrinsic: sts.enumStruct({
            call: Call,
            pauseOnlyExtrinsic: sts.boolean(),
        }),
        resume_extrinsic: sts.enumStruct({
            call: Call,
            resumeOnlyExtrinsic: sts.boolean(),
        }),
    }
})

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export const ElectionProviderMultiPhaseCall: sts.Type<ElectionProviderMultiPhaseCall> = sts.closedEnum(() => {
    return {
        governance_fallback: sts.enumStruct({
            maybeMaxVoters: sts.option(() => sts.number()),
            maybeMaxTargets: sts.option(() => sts.number()),
        }),
        set_emergency_election_result: sts.enumStruct({
            supports: sts.array(() => sts.tuple(() => [AccountId32, Support])),
        }),
        set_minimum_untrusted_score: sts.enumStruct({
            maybeNextScore: sts.option(() => ElectionScore),
        }),
        submit: sts.enumStruct({
            rawSolution: RawSolution,
        }),
        submit_unsigned: sts.enumStruct({
            rawSolution: RawSolution,
            witness: SolutionOrSnapshotSize,
        }),
    }
})

export const SolutionOrSnapshotSize: sts.Type<SolutionOrSnapshotSize> = sts.struct(() => {
    return {
        voters: sts.number(),
        targets: sts.number(),
    }
})

export const RawSolution: sts.Type<RawSolution> = sts.struct(() => {
    return {
        solution: NposSolution16,
        score: ElectionScore,
        round: sts.number(),
    }
})

export const NposSolution16: sts.Type<NposSolution16> = sts.struct(() => {
    return {
        votes1: sts.array(() => sts.tuple(() => [sts.number(), sts.number()])),
        votes2: sts.array(() =>
            sts.tuple(() => [sts.number(), sts.tuple(() => [sts.number(), sts.number()]), sts.number()])
        ),
        votes3: sts.array(() =>
            sts.tuple(() => [
                sts.number(),
                sts.array(() => sts.tuple(() => [sts.number(), sts.number()])),
                sts.number(),
            ])
        ),
        votes4: sts.array(() =>
            sts.tuple(() => [
                sts.number(),
                sts.array(() => sts.tuple(() => [sts.number(), sts.number()])),
                sts.number(),
            ])
        ),
        votes5: sts.array(() =>
            sts.tuple(() => [
                sts.number(),
                sts.array(() => sts.tuple(() => [sts.number(), sts.number()])),
                sts.number(),
            ])
        ),
        votes6: sts.array(() =>
            sts.tuple(() => [
                sts.number(),
                sts.array(() => sts.tuple(() => [sts.number(), sts.number()])),
                sts.number(),
            ])
        ),
        votes7: sts.array(() =>
            sts.tuple(() => [
                sts.number(),
                sts.array(() => sts.tuple(() => [sts.number(), sts.number()])),
                sts.number(),
            ])
        ),
        votes8: sts.array(() =>
            sts.tuple(() => [
                sts.number(),
                sts.array(() => sts.tuple(() => [sts.number(), sts.number()])),
                sts.number(),
            ])
        ),
        votes9: sts.array(() =>
            sts.tuple(() => [
                sts.number(),
                sts.array(() => sts.tuple(() => [sts.number(), sts.number()])),
                sts.number(),
            ])
        ),
        votes10: sts.array(() =>
            sts.tuple(() => [
                sts.number(),
                sts.array(() => sts.tuple(() => [sts.number(), sts.number()])),
                sts.number(),
            ])
        ),
        votes11: sts.array(() =>
            sts.tuple(() => [
                sts.number(),
                sts.array(() => sts.tuple(() => [sts.number(), sts.number()])),
                sts.number(),
            ])
        ),
        votes12: sts.array(() =>
            sts.tuple(() => [
                sts.number(),
                sts.array(() => sts.tuple(() => [sts.number(), sts.number()])),
                sts.number(),
            ])
        ),
        votes13: sts.array(() =>
            sts.tuple(() => [
                sts.number(),
                sts.array(() => sts.tuple(() => [sts.number(), sts.number()])),
                sts.number(),
            ])
        ),
        votes14: sts.array(() =>
            sts.tuple(() => [
                sts.number(),
                sts.array(() => sts.tuple(() => [sts.number(), sts.number()])),
                sts.number(),
            ])
        ),
        votes15: sts.array(() =>
            sts.tuple(() => [
                sts.number(),
                sts.array(() => sts.tuple(() => [sts.number(), sts.number()])),
                sts.number(),
            ])
        ),
        votes16: sts.array(() =>
            sts.tuple(() => [
                sts.number(),
                sts.array(() => sts.tuple(() => [sts.number(), sts.number()])),
                sts.number(),
            ])
        ),
    }
})

export const Support: sts.Type<Support> = sts.struct(() => {
    return {
        total: sts.bigint(),
        voters: sts.array(() => sts.tuple(() => [AccountId32, sts.bigint()])),
    }
})

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export const CrowdloanCall: sts.Type<CrowdloanCall> = sts.closedEnum(() => {
    return {
        add_memo: sts.enumStruct({
            index: Id,
            memo: sts.bytes(),
        }),
        contribute: sts.enumStruct({
            index: sts.number(),
            value: sts.bigint(),
            signature: sts.option(() => MultiSignature),
        }),
        contribute_all: sts.enumStruct({
            index: sts.number(),
            signature: sts.option(() => MultiSignature),
        }),
        create: sts.enumStruct({
            index: sts.number(),
            cap: sts.bigint(),
            firstPeriod: sts.number(),
            lastPeriod: sts.number(),
            end: sts.number(),
            verifier: sts.option(() => MultiSigner),
        }),
        dissolve: sts.enumStruct({
            index: sts.number(),
        }),
        edit: sts.enumStruct({
            index: sts.number(),
            cap: sts.bigint(),
            firstPeriod: sts.number(),
            lastPeriod: sts.number(),
            end: sts.number(),
            verifier: sts.option(() => MultiSigner),
        }),
        poke: sts.enumStruct({
            index: Id,
        }),
        refund: sts.enumStruct({
            index: sts.number(),
        }),
        withdraw: sts.enumStruct({
            who: AccountId32,
            index: sts.number(),
        }),
    }
})

export const MultiSigner: sts.Type<MultiSigner> = sts.closedEnum(() => {
    return {
        Ecdsa: sts.bytes(),
        Ed25519: sts.bytes(),
        Sr25519: sts.bytes(),
    }
})

export const MultiSignature: sts.Type<MultiSignature> = sts.closedEnum(() => {
    return {
        Ecdsa: sts.bytes(),
        Ed25519: sts.bytes(),
        Sr25519: Signature,
    }
})

export const Signature = sts.bytes()

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export const ConvictionVotingCall: sts.Type<ConvictionVotingCall> = sts.closedEnum(() => {
    return {
        delegate: sts.enumStruct({
            class: sts.number(),
            to: MultiAddress,
            conviction: Conviction,
            balance: sts.bigint(),
        }),
        remove_other_vote: sts.enumStruct({
            target: MultiAddress,
            class: sts.number(),
            index: sts.number(),
        }),
        remove_vote: sts.enumStruct({
            class: sts.option(() => sts.number()),
            index: sts.number(),
        }),
        undelegate: sts.enumStruct({
            class: sts.number(),
        }),
        unlock: sts.enumStruct({
            class: sts.number(),
            target: MultiAddress,
        }),
        vote: sts.enumStruct({
            pollIndex: sts.number(),
            vote: AccountVote,
        }),
    }
})

export const Conviction: sts.Type<Conviction> = sts.closedEnum(() => {
    return {
        Locked1x: sts.unit(),
        Locked2x: sts.unit(),
        Locked3x: sts.unit(),
        Locked4x: sts.unit(),
        Locked5x: sts.unit(),
        Locked6x: sts.unit(),
        None: sts.unit(),
    }
})

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export const ConfigurationCall: sts.Type<ConfigurationCall> = sts.closedEnum(() => {
    return {
        set_async_backing_params: sts.enumStruct({
            new: AsyncBackingParams,
        }),
        set_bypass_consistency_check: sts.enumStruct({
            new: sts.boolean(),
        }),
        set_chain_availability_period: sts.enumStruct({
            new: sts.number(),
        }),
        set_code_retention_period: sts.enumStruct({
            new: sts.number(),
        }),
        set_dispute_period: sts.enumStruct({
            new: sts.number(),
        }),
        set_dispute_post_conclusion_acceptance_period: sts.enumStruct({
            new: sts.number(),
        }),
        set_executor_params: sts.enumStruct({
            new: sts.array(() => V5ExecutorParam),
        }),
        set_group_rotation_frequency: sts.enumStruct({
            new: sts.number(),
        }),
        set_hrmp_channel_max_capacity: sts.enumStruct({
            new: sts.number(),
        }),
        set_hrmp_channel_max_message_size: sts.enumStruct({
            new: sts.number(),
        }),
        set_hrmp_channel_max_total_size: sts.enumStruct({
            new: sts.number(),
        }),
        set_hrmp_max_message_num_per_candidate: sts.enumStruct({
            new: sts.number(),
        }),
        set_hrmp_max_parachain_inbound_channels: sts.enumStruct({
            new: sts.number(),
        }),
        set_hrmp_max_parachain_outbound_channels: sts.enumStruct({
            new: sts.number(),
        }),
        set_hrmp_max_parathread_inbound_channels: sts.enumStruct({
            new: sts.number(),
        }),
        set_hrmp_max_parathread_outbound_channels: sts.enumStruct({
            new: sts.number(),
        }),
        set_hrmp_open_request_ttl: sts.enumStruct({
            new: sts.number(),
        }),
        set_hrmp_recipient_deposit: sts.enumStruct({
            new: sts.bigint(),
        }),
        set_hrmp_sender_deposit: sts.enumStruct({
            new: sts.bigint(),
        }),
        set_max_code_size: sts.enumStruct({
            new: sts.number(),
        }),
        set_max_downward_message_size: sts.enumStruct({
            new: sts.number(),
        }),
        set_max_head_data_size: sts.enumStruct({
            new: sts.number(),
        }),
        set_max_pov_size: sts.enumStruct({
            new: sts.number(),
        }),
        set_max_upward_message_num_per_candidate: sts.enumStruct({
            new: sts.number(),
        }),
        set_max_upward_message_size: sts.enumStruct({
            new: sts.number(),
        }),
        set_max_upward_queue_count: sts.enumStruct({
            new: sts.number(),
        }),
        set_max_upward_queue_size: sts.enumStruct({
            new: sts.number(),
        }),
        set_max_validators: sts.enumStruct({
            new: sts.option(() => sts.number()),
        }),
        set_max_validators_per_core: sts.enumStruct({
            new: sts.option(() => sts.number()),
        }),
        set_minimum_validation_upgrade_delay: sts.enumStruct({
            new: sts.number(),
        }),
        set_n_delay_tranches: sts.enumStruct({
            new: sts.number(),
        }),
        set_needed_approvals: sts.enumStruct({
            new: sts.number(),
        }),
        set_no_show_slots: sts.enumStruct({
            new: sts.number(),
        }),
        set_parathread_cores: sts.enumStruct({
            new: sts.number(),
        }),
        set_parathread_retries: sts.enumStruct({
            new: sts.number(),
        }),
        set_pvf_checking_enabled: sts.enumStruct({
            new: sts.boolean(),
        }),
        set_pvf_voting_ttl: sts.enumStruct({
            new: sts.number(),
        }),
        set_relay_vrf_modulo_samples: sts.enumStruct({
            new: sts.number(),
        }),
        set_scheduling_lookahead: sts.enumStruct({
            new: sts.number(),
        }),
        set_thread_availability_period: sts.enumStruct({
            new: sts.number(),
        }),
        set_validation_upgrade_cooldown: sts.enumStruct({
            new: sts.number(),
        }),
        set_validation_upgrade_delay: sts.enumStruct({
            new: sts.number(),
        }),
        set_zeroth_delay_tranche_width: sts.enumStruct({
            new: sts.number(),
        }),
    }
})

export const V5ExecutorParam: sts.Type<V5ExecutorParam> = sts.closedEnum(() => {
    return {
        MaxMemoryPages: sts.number(),
        PrecheckingMaxMemory: sts.bigint(),
        PvfExecTimeout: sts.tuple(() => [V5PvfExecTimeoutKind, sts.bigint()]),
        PvfPrepTimeout: sts.tuple(() => [V5PvfPrepTimeoutKind, sts.bigint()]),
        StackLogicalMax: sts.number(),
        StackNativeMax: sts.number(),
        WasmExtBulkMemory: sts.unit(),
    }
})

export const V5PvfPrepTimeoutKind: sts.Type<V5PvfPrepTimeoutKind> = sts.closedEnum(() => {
    return {
        Lenient: sts.unit(),
        Precheck: sts.unit(),
    }
})

export const V5PvfExecTimeoutKind: sts.Type<V5PvfExecTimeoutKind> = sts.closedEnum(() => {
    return {
        Approval: sts.unit(),
        Backing: sts.unit(),
    }
})

export const AsyncBackingParams: sts.Type<AsyncBackingParams> = sts.struct(() => {
    return {
        maxCandidateDepth: sts.number(),
        allowedAncestryLen: sts.number(),
    }
})

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export const BeefyCall: sts.Type<BeefyCall> = sts.closedEnum(() => {
    return {
        report_equivocation: sts.enumStruct({
            equivocationProof: Type_571,
            keyOwnerProof: MembershipProof,
        }),
        report_equivocation_unsigned: sts.enumStruct({
            equivocationProof: Type_571,
            keyOwnerProof: MembershipProof,
        }),
    }
})

export const Type_571: sts.Type<Type_571> = sts.struct(() => {
    return {
        first: VoteMessage,
        second: VoteMessage,
    }
})

export const VoteMessage: sts.Type<VoteMessage> = sts.struct(() => {
    return {
        commitment: Commitment,
        id: sts.bytes(),
        signature: sts.bytes(),
    }
})

export const Commitment: sts.Type<Commitment> = sts.struct(() => {
    return {
        payload: sts.array(() => sts.tuple(() => [sts.bytes(), sts.bytes()])),
        blockNumber: sts.number(),
        validatorSetId: sts.bigint(),
    }
})

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export const BalancesCall: sts.Type<BalancesCall> = sts.closedEnum(() => {
    return {
        force_set_balance: sts.enumStruct({
            who: MultiAddress,
            newFree: sts.bigint(),
        }),
        force_transfer: sts.enumStruct({
            source: MultiAddress,
            dest: MultiAddress,
            value: sts.bigint(),
        }),
        force_unreserve: sts.enumStruct({
            who: MultiAddress,
            amount: sts.bigint(),
        }),
        set_balance_deprecated: sts.enumStruct({
            who: MultiAddress,
            newFree: sts.bigint(),
            oldReserved: sts.bigint(),
        }),
        transfer: sts.enumStruct({
            dest: MultiAddress,
            value: sts.bigint(),
        }),
        transfer_all: sts.enumStruct({
            dest: MultiAddress,
            keepAlive: sts.boolean(),
        }),
        transfer_allow_death: sts.enumStruct({
            dest: MultiAddress,
            value: sts.bigint(),
        }),
        transfer_keep_alive: sts.enumStruct({
            dest: MultiAddress,
            value: sts.bigint(),
        }),
        upgrade_accounts: sts.enumStruct({
            who: sts.array(() => AccountId32),
        }),
    }
})

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export const BabeCall: sts.Type<BabeCall> = sts.closedEnum(() => {
    return {
        plan_config_change: sts.enumStruct({
            config: NextConfigDescriptor,
        }),
        report_equivocation: sts.enumStruct({
            equivocationProof: EquivocationProof,
            keyOwnerProof: MembershipProof,
        }),
        report_equivocation_unsigned: sts.enumStruct({
            equivocationProof: EquivocationProof,
            keyOwnerProof: MembershipProof,
        }),
    }
})

export const EquivocationProof: sts.Type<EquivocationProof> = sts.struct(() => {
    return {
        offender: sts.bytes(),
        slot: Slot,
        firstHeader: Header,
        secondHeader: Header,
    }
})

export const Slot = sts.bigint()

export const NextConfigDescriptor: sts.Type<NextConfigDescriptor> = sts.closedEnum(() => {
    return {
        V1: sts.enumStruct({
            c: sts.tuple(() => [sts.bigint(), sts.bigint()]),
            allowedSlots: AllowedSlots,
        }),
    }
})

export const AllowedSlots: sts.Type<AllowedSlots> = sts.closedEnum(() => {
    return {
        PrimaryAndSecondaryPlainSlots: sts.unit(),
        PrimaryAndSecondaryVRFSlots: sts.unit(),
        PrimarySlots: sts.unit(),
    }
})

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export const AuctionsCall: sts.Type<AuctionsCall> = sts.closedEnum(() => {
    return {
        bid: sts.enumStruct({
            para: sts.number(),
            auctionIndex: sts.number(),
            firstSlot: sts.number(),
            lastSlot: sts.number(),
            amount: sts.bigint(),
        }),
        cancel_auction: sts.unit(),
        new_auction: sts.enumStruct({
            duration: sts.number(),
            leasePeriodIndex: sts.number(),
        }),
    }
})

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export const AssignedSlotsCall: sts.Type<AssignedSlotsCall> = sts.closedEnum(() => {
    return {
        assign_perm_parachain_slot: sts.enumStruct({
            id: Id,
        }),
        assign_temp_parachain_slot: sts.enumStruct({
            id: Id,
            leasePeriodStart: SlotLeasePeriodStart,
        }),
        unassign_parachain_slot: sts.enumStruct({
            id: Id,
        }),
    }
})

export const SlotLeasePeriodStart: sts.Type<SlotLeasePeriodStart> = sts.closedEnum(() => {
    return {
        Current: sts.unit(),
        Next: sts.unit(),
    }
})

export const VersionedMultiLocation: sts.Type<VersionedMultiLocation> = sts.closedEnum(() => {
    return {
        V2: V2MultiLocation,
        V3: V3MultiLocation,
    }
})

export const V3Error: sts.Type<V3Error> = sts.closedEnum(() => {
    return {
        AssetNotFound: sts.unit(),
        BadOrigin: sts.unit(),
        Barrier: sts.unit(),
        DestinationUnsupported: sts.unit(),
        ExceedsMaxMessageSize: sts.unit(),
        ExceedsStackLimit: sts.unit(),
        ExpectationFalse: sts.unit(),
        ExportError: sts.unit(),
        FailedToDecode: sts.unit(),
        FailedToTransactAsset: sts.unit(),
        FeesNotMet: sts.unit(),
        HoldingWouldOverflow: sts.unit(),
        InvalidLocation: sts.unit(),
        LocationCannotHold: sts.unit(),
        LocationFull: sts.unit(),
        LocationNotInvertible: sts.unit(),
        LockError: sts.unit(),
        MaxWeightInvalid: sts.unit(),
        NameMismatch: sts.unit(),
        NoDeal: sts.unit(),
        NoPermission: sts.unit(),
        NotDepositable: sts.unit(),
        NotHoldingFees: sts.unit(),
        NotWithdrawable: sts.unit(),
        Overflow: sts.unit(),
        PalletNotFound: sts.unit(),
        ReanchorFailed: sts.unit(),
        TooExpensive: sts.unit(),
        Transport: sts.unit(),
        Trap: sts.bigint(),
        Unanchored: sts.unit(),
        UnhandledXcmVersion: sts.unit(),
        Unimplemented: sts.unit(),
        UnknownClaim: sts.unit(),
        Unroutable: sts.unit(),
        UntrustedReserveLocation: sts.unit(),
        UntrustedTeleportLocation: sts.unit(),
        VersionIncompatible: sts.unit(),
        WeightLimitReached: Weight,
        WeightNotComputable: sts.unit(),
    }
})

export const V3MultiAsset: sts.Type<V3MultiAsset> = sts.struct(() => {
    return {
        id: V3AssetId,
        fun: V3Fungibility,
    }
})

export const V3Fungibility: sts.Type<V3Fungibility> = sts.closedEnum(() => {
    return {
        Fungible: sts.bigint(),
        NonFungible: V3AssetInstance,
    }
})

export const V3AssetInstance: sts.Type<V3AssetInstance> = sts.closedEnum(() => {
    return {
        Array16: sts.bytes(),
        Array32: sts.bytes(),
        Array4: sts.bytes(),
        Array8: sts.bytes(),
        Index: sts.bigint(),
        Undefined: sts.unit(),
    }
})

export const VersionedMultiAssets: sts.Type<VersionedMultiAssets> = sts.closedEnum(() => {
    return {
        V2: sts.array(() => V2MultiAsset),
        V3: sts.array(() => V3MultiAsset),
    }
})

export const H256 = sts.bytes()

export const Weight: sts.Type<Weight> = sts.struct(() => {
    return {
        refTime: sts.bigint(),
        proofSize: sts.bigint(),
    }
})

export const V3Response: sts.Type<V3Response> = sts.closedEnum(() => {
    return {
        Assets: sts.array(() => V3MultiAsset),
        DispatchResult: V3MaybeErrorCode,
        ExecutionResult: sts.option(() => sts.tuple(() => [sts.number(), V3Error])),
        Null: sts.unit(),
        PalletsInfo: sts.array(() => V3PalletInfo),
        Version: sts.number(),
    }
})

export const V3PalletInfo: sts.Type<V3PalletInfo> = sts.struct(() => {
    return {
        index: sts.number(),
        name: sts.bytes(),
        moduleName: sts.bytes(),
        major: sts.number(),
        minor: sts.number(),
        patch: sts.number(),
    }
})

export const V3Instruction: sts.Type<V3Instruction> = sts.closedEnum(() => {
    return {
        AliasOrigin: V3MultiLocation,
        BurnAsset: sts.array(() => V3MultiAsset),
        BuyExecution: sts.enumStruct({
            fees: V3MultiAsset,
            weightLimit: V3WeightLimit,
        }),
        ClaimAsset: sts.enumStruct({
            assets: sts.array(() => V3MultiAsset),
            ticket: V3MultiLocation,
        }),
        ClearError: sts.unit(),
        ClearOrigin: sts.unit(),
        ClearTopic: sts.unit(),
        ClearTransactStatus: sts.unit(),
        DepositAsset: sts.enumStruct({
            assets: V3MultiAssetFilter,
            beneficiary: V3MultiLocation,
        }),
        DepositReserveAsset: sts.enumStruct({
            assets: V3MultiAssetFilter,
            dest: V3MultiLocation,
            xcm: sts.array(() => V3Instruction),
        }),
        DescendOrigin: V3Junctions,
        ExchangeAsset: sts.enumStruct({
            give: V3MultiAssetFilter,
            want: sts.array(() => V3MultiAsset),
            maximal: sts.boolean(),
        }),
        ExpectAsset: sts.array(() => V3MultiAsset),
        ExpectError: sts.option(() => sts.tuple(() => [sts.number(), V3Error])),
        ExpectOrigin: sts.option(() => V3MultiLocation),
        ExpectPallet: sts.enumStruct({
            index: sts.number(),
            name: sts.bytes(),
            moduleName: sts.bytes(),
            crateMajor: sts.number(),
            minCrateMinor: sts.number(),
        }),
        ExpectTransactStatus: V3MaybeErrorCode,
        ExportMessage: sts.enumStruct({
            network: V3NetworkId,
            destination: V3Junctions,
            xcm: sts.array(() => V3Instruction),
        }),
        HrmpChannelAccepted: sts.enumStruct({
            recipient: sts.number(),
        }),
        HrmpChannelClosing: sts.enumStruct({
            initiator: sts.number(),
            sender: sts.number(),
            recipient: sts.number(),
        }),
        HrmpNewChannelOpenRequest: sts.enumStruct({
            sender: sts.number(),
            maxMessageSize: sts.number(),
            maxCapacity: sts.number(),
        }),
        InitiateReserveWithdraw: sts.enumStruct({
            assets: V3MultiAssetFilter,
            reserve: V3MultiLocation,
            xcm: sts.array(() => V3Instruction),
        }),
        InitiateTeleport: sts.enumStruct({
            assets: V3MultiAssetFilter,
            dest: V3MultiLocation,
            xcm: sts.array(() => V3Instruction),
        }),
        LockAsset: sts.enumStruct({
            asset: V3MultiAsset,
            unlocker: V3MultiLocation,
        }),
        NoteUnlockable: sts.enumStruct({
            asset: V3MultiAsset,
            owner: V3MultiLocation,
        }),
        QueryPallet: sts.enumStruct({
            moduleName: sts.bytes(),
            responseInfo: V3QueryResponseInfo,
        }),
        QueryResponse: sts.enumStruct({
            queryId: sts.bigint(),
            response: V3Response,
            maxWeight: Weight,
            querier: sts.option(() => V3MultiLocation),
        }),
        ReceiveTeleportedAsset: sts.array(() => V3MultiAsset),
        RefundSurplus: sts.unit(),
        ReportError: V3QueryResponseInfo,
        ReportHolding: sts.enumStruct({
            responseInfo: V3QueryResponseInfo,
            assets: V3MultiAssetFilter,
        }),
        ReportTransactStatus: V3QueryResponseInfo,
        RequestUnlock: sts.enumStruct({
            asset: V3MultiAsset,
            locker: V3MultiLocation,
        }),
        ReserveAssetDeposited: sts.array(() => V3MultiAsset),
        SetAppendix: sts.array(() => V3Instruction),
        SetErrorHandler: sts.array(() => V3Instruction),
        SetFeesMode: sts.enumStruct({
            jitWithdraw: sts.boolean(),
        }),
        SetTopic: sts.bytes(),
        SubscribeVersion: sts.enumStruct({
            queryId: sts.bigint(),
            maxResponseWeight: Weight,
        }),
        Transact: sts.enumStruct({
            originKind: V2OriginKind,
            requireWeightAtMost: Weight,
            call: DoubleEncoded,
        }),
        TransferAsset: sts.enumStruct({
            assets: sts.array(() => V3MultiAsset),
            beneficiary: V3MultiLocation,
        }),
        TransferReserveAsset: sts.enumStruct({
            assets: sts.array(() => V3MultiAsset),
            dest: V3MultiLocation,
            xcm: sts.array(() => V3Instruction),
        }),
        Trap: sts.bigint(),
        UniversalOrigin: V3Junction,
        UnlockAsset: sts.enumStruct({
            asset: V3MultiAsset,
            target: V3MultiLocation,
        }),
        UnpaidExecution: sts.enumStruct({
            weightLimit: V3WeightLimit,
            checkOrigin: sts.option(() => V3MultiLocation),
        }),
        UnsubscribeVersion: sts.unit(),
        WithdrawAsset: sts.array(() => V3MultiAsset),
    }
})

export const V3MultiLocation: sts.Type<V3MultiLocation> = sts.struct(() => {
    return {
        parents: sts.number(),
        interior: V3Junctions,
    }
})

export const V3Outcome: sts.Type<V3Outcome> = sts.closedEnum(() => {
    return {
        Complete: Weight,
        Error: V3Error,
        Incomplete: sts.tuple(() => [Weight, V3Error]),
    }
})

export const Perbill = sts.number()

export const AccountId32 = sts.bytes()
