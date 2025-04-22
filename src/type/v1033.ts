import { sts, Result, Option, Bytes, BitSequence } from './support'

export interface EventRecord {
    phase: Type_722
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
    | Event_Migrations
    | Event_MultiTokens
    | Event_Multisig
    | Event_NominationPools
    | Event_Offences
    | Event_ParaInclusion
    | Event_Paras
    | Event_ParasDisputes
    | Event_Preimage
    | Event_Proxy
    | Event_Referenda
    | Event_Registrar
    | Event_SafeMode
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

export interface Event_Migrations {
    __kind: 'Migrations'
    value: MigrationsEvent
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

export interface Event_Proxy {
    __kind: 'Proxy'
    value: ProxyEvent
}

export interface Event_Referenda {
    __kind: 'Referenda'
    value: ReferendaEvent
}

export interface Event_Registrar {
    __kind: 'Registrar'
    value: RegistrarEvent
}

export interface Event_SafeMode {
    __kind: 'SafeMode'
    value: SafeModeEvent
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
    | XcmPalletEvent_VersionMigrationFinished
    | XcmPalletEvent_VersionNotifyRequested
    | XcmPalletEvent_VersionNotifyStarted
    | XcmPalletEvent_VersionNotifyUnrequested

/**
 * Some assets have been claimed from an asset trap
 */
export interface XcmPalletEvent_AssetsClaimed {
    __kind: 'AssetsClaimed'
    hash: H256
    origin: V4Location
    assets: VersionedAssets
}

/**
 * Some assets have been placed in an asset trap.
 */
export interface XcmPalletEvent_AssetsTrapped {
    __kind: 'AssetsTrapped'
    hash: H256
    origin: V4Location
    assets: VersionedAssets
}

/**
 * Execution of an XCM message was attempted.
 */
export interface XcmPalletEvent_Attempted {
    __kind: 'Attempted'
    outcome: V4Outcome
}

/**
 * Fees were paid from a location for an operation (often for using `SendXcm`).
 */
export interface XcmPalletEvent_FeesPaid {
    __kind: 'FeesPaid'
    paying: V4Location
    fees: V4Asset[]
}

/**
 * Expected query response has been received but the querier location of the response does
 * not match the expected. The query remains registered for a later, valid, response to
 * be received and acted upon.
 */
export interface XcmPalletEvent_InvalidQuerier {
    __kind: 'InvalidQuerier'
    origin: V4Location
    queryId: bigint
    expectedQuerier: V4Location
    maybeActualQuerier?: V4Location | undefined
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
    origin: V4Location
    queryId: bigint
}

/**
 * Expected query response has been received but the origin location of the response does
 * not match that expected. The query remains registered for a later, valid, response to
 * be received and acted upon.
 */
export interface XcmPalletEvent_InvalidResponder {
    __kind: 'InvalidResponder'
    origin: V4Location
    queryId: bigint
    expectedLocation?: V4Location | undefined
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
    origin: V4Location
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
 * Query response has been received and query is removed. The registered notification
 * could not be dispatched because the dispatch weight is greater than the maximum weight
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
    location: VersionedLocation
    queryId: bigint
}

/**
 * A given location which had a version change subscription was dropped owing to an error
 * sending the notification to it.
 */
export interface XcmPalletEvent_NotifyTargetSendFail {
    __kind: 'NotifyTargetSendFail'
    location: V4Location
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
    response: V4Response
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
    origin: V4Location
    destination: V4Location
    message: V4Instruction[]
    messageId: Bytes
}

/**
 * The supported version of a location has been changed. This might be through an
 * automatic notification or a manual intervention.
 */
export interface XcmPalletEvent_SupportedVersionChanged {
    __kind: 'SupportedVersionChanged'
    location: V4Location
    version: number
}

/**
 * Query response received which does not match a registered query. This may be because a
 * matching query was never registered, it may be because it is a duplicate response, or
 * because the query timed out.
 */
export interface XcmPalletEvent_UnexpectedResponse {
    __kind: 'UnexpectedResponse'
    origin: V4Location
    queryId: bigint
}

/**
 * An XCM version change notification message has been attempted to be sent.
 *
 * The cost of sending it (borne by the chain) is included.
 */
export interface XcmPalletEvent_VersionChangeNotified {
    __kind: 'VersionChangeNotified'
    destination: V4Location
    result: number
    cost: V4Asset[]
    messageId: Bytes
}

/**
 * A XCM version migration finished.
 */
export interface XcmPalletEvent_VersionMigrationFinished {
    __kind: 'VersionMigrationFinished'
    version: number
}

/**
 * We have requested that a remote chain send us XCM version change notifications.
 */
export interface XcmPalletEvent_VersionNotifyRequested {
    __kind: 'VersionNotifyRequested'
    destination: V4Location
    cost: V4Asset[]
    messageId: Bytes
}

/**
 * A remote has requested XCM version change notification from us and we have honored it.
 * A version information message is sent to them and its cost is included.
 */
export interface XcmPalletEvent_VersionNotifyStarted {
    __kind: 'VersionNotifyStarted'
    destination: V4Location
    cost: V4Asset[]
    messageId: Bytes
}

/**
 * We have requested that a remote chain stops sending us XCM version change
 * notifications.
 */
export interface XcmPalletEvent_VersionNotifyUnrequested {
    __kind: 'VersionNotifyUnrequested'
    destination: V4Location
    cost: V4Asset[]
    messageId: Bytes
}

export type V4Instruction =
    | V4Instruction_AliasOrigin
    | V4Instruction_BurnAsset
    | V4Instruction_BuyExecution
    | V4Instruction_ClaimAsset
    | V4Instruction_ClearError
    | V4Instruction_ClearOrigin
    | V4Instruction_ClearTopic
    | V4Instruction_ClearTransactStatus
    | V4Instruction_DepositAsset
    | V4Instruction_DepositReserveAsset
    | V4Instruction_DescendOrigin
    | V4Instruction_ExchangeAsset
    | V4Instruction_ExpectAsset
    | V4Instruction_ExpectError
    | V4Instruction_ExpectOrigin
    | V4Instruction_ExpectPallet
    | V4Instruction_ExpectTransactStatus
    | V4Instruction_ExportMessage
    | V4Instruction_HrmpChannelAccepted
    | V4Instruction_HrmpChannelClosing
    | V4Instruction_HrmpNewChannelOpenRequest
    | V4Instruction_InitiateReserveWithdraw
    | V4Instruction_InitiateTeleport
    | V4Instruction_LockAsset
    | V4Instruction_NoteUnlockable
    | V4Instruction_QueryPallet
    | V4Instruction_QueryResponse
    | V4Instruction_ReceiveTeleportedAsset
    | V4Instruction_RefundSurplus
    | V4Instruction_ReportError
    | V4Instruction_ReportHolding
    | V4Instruction_ReportTransactStatus
    | V4Instruction_RequestUnlock
    | V4Instruction_ReserveAssetDeposited
    | V4Instruction_SetAppendix
    | V4Instruction_SetErrorHandler
    | V4Instruction_SetFeesMode
    | V4Instruction_SetTopic
    | V4Instruction_SubscribeVersion
    | V4Instruction_Transact
    | V4Instruction_TransferAsset
    | V4Instruction_TransferReserveAsset
    | V4Instruction_Trap
    | V4Instruction_UniversalOrigin
    | V4Instruction_UnlockAsset
    | V4Instruction_UnpaidExecution
    | V4Instruction_UnsubscribeVersion
    | V4Instruction_WithdrawAsset

export interface V4Instruction_AliasOrigin {
    __kind: 'AliasOrigin'
    value: V4Location
}

export interface V4Instruction_BurnAsset {
    __kind: 'BurnAsset'
    value: V4Asset[]
}

export interface V4Instruction_BuyExecution {
    __kind: 'BuyExecution'
    fees: V4Asset
    weightLimit: V3WeightLimit
}

export interface V4Instruction_ClaimAsset {
    __kind: 'ClaimAsset'
    assets: V4Asset[]
    ticket: V4Location
}

export interface V4Instruction_ClearError {
    __kind: 'ClearError'
}

export interface V4Instruction_ClearOrigin {
    __kind: 'ClearOrigin'
}

export interface V4Instruction_ClearTopic {
    __kind: 'ClearTopic'
}

export interface V4Instruction_ClearTransactStatus {
    __kind: 'ClearTransactStatus'
}

export interface V4Instruction_DepositAsset {
    __kind: 'DepositAsset'
    assets: V4AssetFilter
    beneficiary: V4Location
}

export interface V4Instruction_DepositReserveAsset {
    __kind: 'DepositReserveAsset'
    assets: V4AssetFilter
    dest: V4Location
    xcm: V4Instruction[]
}

export interface V4Instruction_DescendOrigin {
    __kind: 'DescendOrigin'
    value: V4Junctions
}

export interface V4Instruction_ExchangeAsset {
    __kind: 'ExchangeAsset'
    give: V4AssetFilter
    want: V4Asset[]
    maximal: boolean
}

export interface V4Instruction_ExpectAsset {
    __kind: 'ExpectAsset'
    value: V4Asset[]
}

export interface V4Instruction_ExpectError {
    __kind: 'ExpectError'
    value?: [number, V3Error] | undefined
}

export interface V4Instruction_ExpectOrigin {
    __kind: 'ExpectOrigin'
    value?: V4Location | undefined
}

export interface V4Instruction_ExpectPallet {
    __kind: 'ExpectPallet'
    index: number
    name: Bytes
    moduleName: Bytes
    crateMajor: number
    minCrateMinor: number
}

export interface V4Instruction_ExpectTransactStatus {
    __kind: 'ExpectTransactStatus'
    value: V3MaybeErrorCode
}

export interface V4Instruction_ExportMessage {
    __kind: 'ExportMessage'
    network: V4NetworkId
    destination: V4Junctions
    xcm: V4Instruction[]
}

export interface V4Instruction_HrmpChannelAccepted {
    __kind: 'HrmpChannelAccepted'
    recipient: number
}

export interface V4Instruction_HrmpChannelClosing {
    __kind: 'HrmpChannelClosing'
    initiator: number
    sender: number
    recipient: number
}

export interface V4Instruction_HrmpNewChannelOpenRequest {
    __kind: 'HrmpNewChannelOpenRequest'
    sender: number
    maxMessageSize: number
    maxCapacity: number
}

export interface V4Instruction_InitiateReserveWithdraw {
    __kind: 'InitiateReserveWithdraw'
    assets: V4AssetFilter
    reserve: V4Location
    xcm: V4Instruction[]
}

export interface V4Instruction_InitiateTeleport {
    __kind: 'InitiateTeleport'
    assets: V4AssetFilter
    dest: V4Location
    xcm: V4Instruction[]
}

export interface V4Instruction_LockAsset {
    __kind: 'LockAsset'
    asset: V4Asset
    unlocker: V4Location
}

export interface V4Instruction_NoteUnlockable {
    __kind: 'NoteUnlockable'
    asset: V4Asset
    owner: V4Location
}

export interface V4Instruction_QueryPallet {
    __kind: 'QueryPallet'
    moduleName: Bytes
    responseInfo: V4QueryResponseInfo
}

export interface V4Instruction_QueryResponse {
    __kind: 'QueryResponse'
    queryId: bigint
    response: V4Response
    maxWeight: Weight
    querier?: V4Location | undefined
}

export interface V4Instruction_ReceiveTeleportedAsset {
    __kind: 'ReceiveTeleportedAsset'
    value: V4Asset[]
}

export interface V4Instruction_RefundSurplus {
    __kind: 'RefundSurplus'
}

export interface V4Instruction_ReportError {
    __kind: 'ReportError'
    value: V4QueryResponseInfo
}

export interface V4Instruction_ReportHolding {
    __kind: 'ReportHolding'
    responseInfo: V4QueryResponseInfo
    assets: V4AssetFilter
}

export interface V4Instruction_ReportTransactStatus {
    __kind: 'ReportTransactStatus'
    value: V4QueryResponseInfo
}

export interface V4Instruction_RequestUnlock {
    __kind: 'RequestUnlock'
    asset: V4Asset
    locker: V4Location
}

export interface V4Instruction_ReserveAssetDeposited {
    __kind: 'ReserveAssetDeposited'
    value: V4Asset[]
}

export interface V4Instruction_SetAppendix {
    __kind: 'SetAppendix'
    value: V4Instruction[]
}

export interface V4Instruction_SetErrorHandler {
    __kind: 'SetErrorHandler'
    value: V4Instruction[]
}

export interface V4Instruction_SetFeesMode {
    __kind: 'SetFeesMode'
    jitWithdraw: boolean
}

export interface V4Instruction_SetTopic {
    __kind: 'SetTopic'
    value: Bytes
}

export interface V4Instruction_SubscribeVersion {
    __kind: 'SubscribeVersion'
    queryId: bigint
    maxResponseWeight: Weight
}

export interface V4Instruction_Transact {
    __kind: 'Transact'
    originKind: V2OriginKind
    requireWeightAtMost: Weight
    call: DoubleEncoded
}

export interface V4Instruction_TransferAsset {
    __kind: 'TransferAsset'
    assets: V4Asset[]
    beneficiary: V4Location
}

export interface V4Instruction_TransferReserveAsset {
    __kind: 'TransferReserveAsset'
    assets: V4Asset[]
    dest: V4Location
    xcm: V4Instruction[]
}

export interface V4Instruction_Trap {
    __kind: 'Trap'
    value: bigint
}

export interface V4Instruction_UniversalOrigin {
    __kind: 'UniversalOrigin'
    value: V4Junction
}

export interface V4Instruction_UnlockAsset {
    __kind: 'UnlockAsset'
    asset: V4Asset
    target: V4Location
}

export interface V4Instruction_UnpaidExecution {
    __kind: 'UnpaidExecution'
    weightLimit: V3WeightLimit
    checkOrigin?: V4Location | undefined
}

export interface V4Instruction_UnsubscribeVersion {
    __kind: 'UnsubscribeVersion'
}

export interface V4Instruction_WithdrawAsset {
    __kind: 'WithdrawAsset'
    value: V4Asset[]
}

export type V4Junction =
    | V4Junction_AccountId32
    | V4Junction_AccountIndex64
    | V4Junction_AccountKey20
    | V4Junction_GeneralIndex
    | V4Junction_GeneralKey
    | V4Junction_GlobalConsensus
    | V4Junction_OnlyChild
    | V4Junction_PalletInstance
    | V4Junction_Parachain
    | V4Junction_Plurality

export interface V4Junction_AccountId32 {
    __kind: 'AccountId32'
    network?: V4NetworkId | undefined
    id: Bytes
}

export interface V4Junction_AccountIndex64 {
    __kind: 'AccountIndex64'
    network?: V4NetworkId | undefined
    index: bigint
}

export interface V4Junction_AccountKey20 {
    __kind: 'AccountKey20'
    network?: V4NetworkId | undefined
    key: Bytes
}

export interface V4Junction_GeneralIndex {
    __kind: 'GeneralIndex'
    value: bigint
}

export interface V4Junction_GeneralKey {
    __kind: 'GeneralKey'
    length: number
    data: Bytes
}

export interface V4Junction_GlobalConsensus {
    __kind: 'GlobalConsensus'
    value: V4NetworkId
}

export interface V4Junction_OnlyChild {
    __kind: 'OnlyChild'
}

export interface V4Junction_PalletInstance {
    __kind: 'PalletInstance'
    value: number
}

export interface V4Junction_Parachain {
    __kind: 'Parachain'
    value: number
}

export interface V4Junction_Plurality {
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

export interface V4QueryResponseInfo {
    destination: V4Location
    queryId: bigint
    maxWeight: Weight
}

export type V4NetworkId =
    | V4NetworkId_BitcoinCash
    | V4NetworkId_BitcoinCore
    | V4NetworkId_ByFork
    | V4NetworkId_ByGenesis
    | V4NetworkId_Ethereum
    | V4NetworkId_Kusama
    | V4NetworkId_Polkadot
    | V4NetworkId_PolkadotBulletin
    | V4NetworkId_Rococo
    | V4NetworkId_Westend
    | V4NetworkId_Wococo

export interface V4NetworkId_BitcoinCash {
    __kind: 'BitcoinCash'
}

export interface V4NetworkId_BitcoinCore {
    __kind: 'BitcoinCore'
}

export interface V4NetworkId_ByFork {
    __kind: 'ByFork'
    blockNumber: bigint
    blockHash: Bytes
}

export interface V4NetworkId_ByGenesis {
    __kind: 'ByGenesis'
    value: Bytes
}

export interface V4NetworkId_Ethereum {
    __kind: 'Ethereum'
    chainId: bigint
}

export interface V4NetworkId_Kusama {
    __kind: 'Kusama'
}

export interface V4NetworkId_Polkadot {
    __kind: 'Polkadot'
}

export interface V4NetworkId_PolkadotBulletin {
    __kind: 'PolkadotBulletin'
}

export interface V4NetworkId_Rococo {
    __kind: 'Rococo'
}

export interface V4NetworkId_Westend {
    __kind: 'Westend'
}

export interface V4NetworkId_Wococo {
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

export type V4Junctions =
    | V4Junctions_Here
    | V4Junctions_X1
    | V4Junctions_X2
    | V4Junctions_X3
    | V4Junctions_X4
    | V4Junctions_X5
    | V4Junctions_X6
    | V4Junctions_X7
    | V4Junctions_X8

export interface V4Junctions_Here {
    __kind: 'Here'
}

export interface V4Junctions_X1 {
    __kind: 'X1'
    value: V4Junction[]
}

export interface V4Junctions_X2 {
    __kind: 'X2'
    value: V4Junction[]
}

export interface V4Junctions_X3 {
    __kind: 'X3'
    value: V4Junction[]
}

export interface V4Junctions_X4 {
    __kind: 'X4'
    value: V4Junction[]
}

export interface V4Junctions_X5 {
    __kind: 'X5'
    value: V4Junction[]
}

export interface V4Junctions_X6 {
    __kind: 'X6'
    value: V4Junction[]
}

export interface V4Junctions_X7 {
    __kind: 'X7'
    value: V4Junction[]
}

export interface V4Junctions_X8 {
    __kind: 'X8'
    value: V4Junction[]
}

export type V4AssetFilter = V4AssetFilter_Definite | V4AssetFilter_Wild

export interface V4AssetFilter_Definite {
    __kind: 'Definite'
    value: V4Asset[]
}

export interface V4AssetFilter_Wild {
    __kind: 'Wild'
    value: V4WildAsset
}

export type V4WildAsset = V4WildAsset_All | V4WildAsset_AllCounted | V4WildAsset_AllOf | V4WildAsset_AllOfCounted

export interface V4WildAsset_All {
    __kind: 'All'
}

export interface V4WildAsset_AllCounted {
    __kind: 'AllCounted'
    value: number
}

export interface V4WildAsset_AllOf {
    __kind: 'AllOf'
    id: V4AssetId
    fun: V4WildFungibility
}

export interface V4WildAsset_AllOfCounted {
    __kind: 'AllOfCounted'
    id: V4AssetId
    fun: V4WildFungibility
    count: number
}

export type V4WildFungibility = V4WildFungibility_Fungible | V4WildFungibility_NonFungible

export interface V4WildFungibility_Fungible {
    __kind: 'Fungible'
}

export interface V4WildFungibility_NonFungible {
    __kind: 'NonFungible'
}

export interface V4AssetId {
    parents: number
    interior: V4Junctions
}

export type V3WeightLimit = V3WeightLimit_Limited | V3WeightLimit_Unlimited

export interface V3WeightLimit_Limited {
    __kind: 'Limited'
    value: Weight
}

export interface V3WeightLimit_Unlimited {
    __kind: 'Unlimited'
}

export type V4Response =
    | V4Response_Assets
    | V4Response_DispatchResult
    | V4Response_ExecutionResult
    | V4Response_Null
    | V4Response_PalletsInfo
    | V4Response_Version

export interface V4Response_Assets {
    __kind: 'Assets'
    value: V4Asset[]
}

export interface V4Response_DispatchResult {
    __kind: 'DispatchResult'
    value: V3MaybeErrorCode
}

export interface V4Response_ExecutionResult {
    __kind: 'ExecutionResult'
    value?: [number, V3Error] | undefined
}

export interface V4Response_Null {
    __kind: 'Null'
}

export interface V4Response_PalletsInfo {
    __kind: 'PalletsInfo'
    value: V4PalletInfo[]
}

export interface V4Response_Version {
    __kind: 'Version'
    value: number
}

export interface V4PalletInfo {
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

export type VersionedLocation = VersionedLocation_V2 | VersionedLocation_V3 | VersionedLocation_V4

export interface VersionedLocation_V2 {
    __kind: 'V2'
    value: V2MultiLocation
}

export interface VersionedLocation_V3 {
    __kind: 'V3'
    value: V3MultiLocation
}

export interface VersionedLocation_V4 {
    __kind: 'V4'
    value: V4Location
}

export interface V3MultiLocation {
    parents: number
    interior: V3Junctions
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

export type V3NetworkId =
    | V3NetworkId_BitcoinCash
    | V3NetworkId_BitcoinCore
    | V3NetworkId_ByFork
    | V3NetworkId_ByGenesis
    | V3NetworkId_Ethereum
    | V3NetworkId_Kusama
    | V3NetworkId_Polkadot
    | V3NetworkId_PolkadotBulletin
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

export interface V3NetworkId_PolkadotBulletin {
    __kind: 'PolkadotBulletin'
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

export interface V4Asset {
    id: V4AssetId
    fun: V4Fungibility
}

export type V4Fungibility = V4Fungibility_Fungible | V4Fungibility_NonFungible

export interface V4Fungibility_Fungible {
    __kind: 'Fungible'
    value: bigint
}

export interface V4Fungibility_NonFungible {
    __kind: 'NonFungible'
    value: V4AssetInstance
}

export type V4AssetInstance =
    | V4AssetInstance_Array16
    | V4AssetInstance_Array32
    | V4AssetInstance_Array4
    | V4AssetInstance_Array8
    | V4AssetInstance_Index
    | V4AssetInstance_Undefined

export interface V4AssetInstance_Array16 {
    __kind: 'Array16'
    value: Bytes
}

export interface V4AssetInstance_Array32 {
    __kind: 'Array32'
    value: Bytes
}

export interface V4AssetInstance_Array4 {
    __kind: 'Array4'
    value: Bytes
}

export interface V4AssetInstance_Array8 {
    __kind: 'Array8'
    value: Bytes
}

export interface V4AssetInstance_Index {
    __kind: 'Index'
    value: bigint
}

export interface V4AssetInstance_Undefined {
    __kind: 'Undefined'
}

export type V4Outcome = V4Outcome_Complete | V4Outcome_Error | V4Outcome_Incomplete

export interface V4Outcome_Complete {
    __kind: 'Complete'
    used: Weight
}

export interface V4Outcome_Error {
    __kind: 'Error'
    error: V3Error
}

export interface V4Outcome_Incomplete {
    __kind: 'Incomplete'
    used: Weight
    error: V3Error
}

export type VersionedAssets = VersionedAssets_V2 | VersionedAssets_V3 | VersionedAssets_V4

export interface VersionedAssets_V2 {
    __kind: 'V2'
    value: V2MultiAsset[]
}

export interface VersionedAssets_V3 {
    __kind: 'V3'
    value: V3MultiAsset[]
}

export interface VersionedAssets_V4 {
    __kind: 'V4'
    value: V4Asset[]
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

export type V3AssetId = V3AssetId_Abstract | V3AssetId_Concrete

export interface V3AssetId_Abstract {
    __kind: 'Abstract'
    value: Bytes
}

export interface V3AssetId_Concrete {
    __kind: 'Concrete'
    value: V3MultiLocation
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

export interface V4Location {
    parents: number
    interior: V4Junctions
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
    | TreasuryEvent_AssetSpendApproved
    | TreasuryEvent_AssetSpendVoided
    | TreasuryEvent_Awarded
    | TreasuryEvent_Burnt
    | TreasuryEvent_Deposit
    | TreasuryEvent_Paid
    | TreasuryEvent_PaymentFailed
    | TreasuryEvent_Proposed
    | TreasuryEvent_Rejected
    | TreasuryEvent_Rollover
    | TreasuryEvent_SpendApproved
    | TreasuryEvent_SpendProcessed
    | TreasuryEvent_Spending
    | TreasuryEvent_UpdatedInactive

/**
 * A new asset spend proposal has been approved.
 */
export interface TreasuryEvent_AssetSpendApproved {
    __kind: 'AssetSpendApproved'
    index: number
    amount: bigint
    beneficiary: AccountId32
    validFrom: number
    expireAt: number
}

/**
 * An approved spend was voided.
 */
export interface TreasuryEvent_AssetSpendVoided {
    __kind: 'AssetSpendVoided'
    index: number
}

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
 * A payment happened.
 */
export interface TreasuryEvent_Paid {
    __kind: 'Paid'
    index: number
}

/**
 * A payment failed and can be retried.
 */
export interface TreasuryEvent_PaymentFailed {
    __kind: 'PaymentFailed'
    index: number
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
 * A spend was processed and removed from the storage. It might have been successfully
 * paid or it may have expired.
 */
export interface TreasuryEvent_SpendProcessed {
    __kind: 'SpendProcessed'
    index: number
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
    | SystemEvent_UpgradeAuthorized

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

/**
 * An upgrade was authorized.
 */
export interface SystemEvent_UpgradeAuthorized {
    __kind: 'UpgradeAuthorized'
    codeHash: H256
    checkVersion: boolean
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
export type SudoEvent = SudoEvent_KeyChanged | SudoEvent_KeyRemoved | SudoEvent_Sudid | SudoEvent_SudoAsDone

/**
 * The sudo key has been updated.
 */
export interface SudoEvent_KeyChanged {
    __kind: 'KeyChanged'
    /**
     * The old sudo key (if one was previously set).
     */
    old?: AccountId32 | undefined
    /**
     * The new sudo key (if one was set).
     */
    new: AccountId32
}

/**
 * The key was permanently removed.
 */
export interface SudoEvent_KeyRemoved {
    __kind: 'KeyRemoved'
}

/**
 * A sudo call just took place.
 */
export interface SudoEvent_Sudid {
    __kind: 'Sudid'
    /**
     * The result of the call made by the sudo user.
     */
    sudoResult: Result<null, DispatchError>
}

/**
 * A [sudo_as](Pallet::sudo_as) call just took place.
 */
export interface SudoEvent_SudoAsDone {
    __kind: 'SudoAsDone'
    /**
     * The result of the call made by the sudo user.
     */
    sudoResult: Result<null, DispatchError>
}

/**
 * The `Event` enum of this pallet
 */
export type StakingEvent =
    | StakingEvent_Bonded
    | StakingEvent_Chilled
    | StakingEvent_ControllerBatchDeprecated
    | StakingEvent_EraPaid
    | StakingEvent_ForceEra
    | StakingEvent_Kicked
    | StakingEvent_OldSlashingReportDiscarded
    | StakingEvent_PayoutStarted
    | StakingEvent_Rewarded
    | StakingEvent_SlashReported
    | StakingEvent_Slashed
    | StakingEvent_SnapshotTargetsSizeExceeded
    | StakingEvent_SnapshotVotersSizeExceeded
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
 * Report of a controller batch deprecation.
 */
export interface StakingEvent_ControllerBatchDeprecated {
    __kind: 'ControllerBatchDeprecated'
    failures: number
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
 * The nominator has been rewarded by this amount to this destination.
 */
export interface StakingEvent_Rewarded {
    __kind: 'Rewarded'
    stash: AccountId32
    dest: RewardDestination
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
 * Targets size limit reached.
 */
export interface StakingEvent_SnapshotTargetsSizeExceeded {
    __kind: 'SnapshotTargetsSizeExceeded'
    size: number
}

/**
 * Voters size limit reached.
 */
export interface StakingEvent_SnapshotVotersSizeExceeded {
    __kind: 'SnapshotVotersSizeExceeded'
    size: number
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
    /**
     * The offer Id
     */
    offerId: bigint
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
    | SchedulerEvent_RetryCancelled
    | SchedulerEvent_RetryFailed
    | SchedulerEvent_RetrySet
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
 * Cancel a retry configuration for some task.
 */
export interface SchedulerEvent_RetryCancelled {
    __kind: 'RetryCancelled'
    task: [number, number]
    id?: Bytes | undefined
}

/**
 * The given task was unable to be retried since the agenda is full at that block or there
 * was not enough weight to reschedule it.
 */
export interface SchedulerEvent_RetryFailed {
    __kind: 'RetryFailed'
    task: [number, number]
    id?: Bytes | undefined
}

/**
 * Set a retry configuration for some task.
 */
export interface SchedulerEvent_RetrySet {
    __kind: 'RetrySet'
    task: [number, number]
    id?: Bytes | undefined
    period: number
    retries: number
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
export type SafeModeEvent =
    | SafeModeEvent_CannotDeposit
    | SafeModeEvent_CannotRelease
    | SafeModeEvent_DepositPlaced
    | SafeModeEvent_DepositReleased
    | SafeModeEvent_DepositSlashed
    | SafeModeEvent_Entered
    | SafeModeEvent_Exited
    | SafeModeEvent_Extended

/**
 * Could not hold funds for entering or extending the safe-mode.
 *
 * This error comes from the underlying `Currency`.
 */
export interface SafeModeEvent_CannotDeposit {
    __kind: 'CannotDeposit'
}

/**
 * Could not release funds for entering or extending the safe-mode.
 *
 * This error comes from the underlying `Currency`.
 */
export interface SafeModeEvent_CannotRelease {
    __kind: 'CannotRelease'
}

/**
 * An account reserved funds for either entering or extending the safe-mode.
 */
export interface SafeModeEvent_DepositPlaced {
    __kind: 'DepositPlaced'
    account: AccountId32
    amount: bigint
}

/**
 * An account had a reserve released that was reserved.
 */
export interface SafeModeEvent_DepositReleased {
    __kind: 'DepositReleased'
    account: AccountId32
    amount: bigint
}

/**
 * An account had reserve slashed that was reserved.
 */
export interface SafeModeEvent_DepositSlashed {
    __kind: 'DepositSlashed'
    account: AccountId32
    amount: bigint
}

/**
 * The safe-mode was entered until inclusively this block.
 */
export interface SafeModeEvent_Entered {
    __kind: 'Entered'
    until: number
}

/**
 * Exited the safe-mode for a specific reason.
 */
export interface SafeModeEvent_Exited {
    __kind: 'Exited'
    reason: ExitReason
}

/**
 * The safe-mode was extended until inclusively this block.
 */
export interface SafeModeEvent_Extended {
    __kind: 'Extended'
    until: number
}

export type ExitReason = ExitReason_Force | ExitReason_Timeout

export interface ExitReason_Force {
    __kind: 'Force'
}

export interface ExitReason_Timeout {
    __kind: 'Timeout'
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
 * A deposit has been slashed.
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
export type ProxyEvent =
    | ProxyEvent_Announced
    | ProxyEvent_ProxyAdded
    | ProxyEvent_ProxyExecuted
    | ProxyEvent_ProxyRemoved
    | ProxyEvent_PureCreated

/**
 * An announcement was placed to make a call in the future.
 */
export interface ProxyEvent_Announced {
    __kind: 'Announced'
    real: AccountId32
    proxy: AccountId32
    callHash: H256
}

/**
 * A proxy was added.
 */
export interface ProxyEvent_ProxyAdded {
    __kind: 'ProxyAdded'
    delegator: AccountId32
    delegatee: AccountId32
    proxyType: ProxyType
    delay: number
}

/**
 * A proxy was executed correctly, with the given.
 */
export interface ProxyEvent_ProxyExecuted {
    __kind: 'ProxyExecuted'
    result: Result<null, DispatchError>
}

/**
 * A proxy was removed.
 */
export interface ProxyEvent_ProxyRemoved {
    __kind: 'ProxyRemoved'
    delegator: AccountId32
    delegatee: AccountId32
    proxyType: ProxyType
    delay: number
}

/**
 * A pure account has been created by new proxy with given
 * disambiguation index and proxy type.
 */
export interface ProxyEvent_PureCreated {
    __kind: 'PureCreated'
    pure: AccountId32
    who: AccountId32
    proxyType: ProxyType
    disambiguationIndex: number
}

export type ProxyType = ProxyType_Any | ProxyType_Governance | ProxyType_Tokens

export interface ProxyType_Any {
    __kind: 'Any'
}

export interface ProxyType_Governance {
    __kind: 'Governance'
}

export interface ProxyType_Tokens {
    __kind: 'Tokens'
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
    value: [V6CandidateReceipt, HeadData, V6CoreIndex, V6GroupIndex]
}

/**
 * A candidate was included. `[candidate, head_data]`
 */
export interface ParaInclusionEvent_CandidateIncluded {
    __kind: 'CandidateIncluded'
    value: [V6CandidateReceipt, HeadData, V6CoreIndex, V6GroupIndex]
}

/**
 * A candidate timed out. `[candidate, head_data]`
 */
export interface ParaInclusionEvent_CandidateTimedOut {
    __kind: 'CandidateTimedOut'
    value: [V6CandidateReceipt, HeadData, V6CoreIndex]
}

/**
 * Some upward messages have been received and will be processed.
 */
export interface ParaInclusionEvent_UpwardMessagesReceived {
    __kind: 'UpwardMessagesReceived'
    from: Id
    count: number
}

export type V6GroupIndex = number

export type V6CoreIndex = number

export type HeadData = Bytes

export interface V6CandidateReceipt {
    descriptor: V6CandidateDescriptor
    commitmentsHash: H256
}

export interface V6CandidateDescriptor {
    paraId: Id
    relayParent: H256
    collator: V6Public
    persistedValidationDataHash: H256
    povHash: H256
    erasureRoot: H256
    signature: V6Signature
    paraHead: H256
    validationCodeHash: ValidationCodeHash
}

export type V6Signature = Bytes

export type V6Public = Bytes

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
    | MultiTokensEvent_CollectionTransferCancelled
    | MultiTokensEvent_CollectionTransferred
    | MultiTokensEvent_CollectionUpdated
    | MultiTokensEvent_Deposit
    | MultiTokensEvent_Frozen
    | MultiTokensEvent_Infused
    | MultiTokensEvent_MigrationStep
    | MultiTokensEvent_Minted
    | MultiTokensEvent_MovedReserves
    | MultiTokensEvent_NextCollectionIdUpdated
    | MultiTokensEvent_ReserveRepatriated
    | MultiTokensEvent_Reserved
    | MultiTokensEvent_Slashed
    | MultiTokensEvent_Thawed
    | MultiTokensEvent_TokenAccountCreated
    | MultiTokensEvent_TokenAccountDepositUpdated
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
 * A pending collection transfer was cancelled
 */
export interface MultiTokensEvent_CollectionTransferCancelled {
    __kind: 'CollectionTransferCancelled'
    /**
     * The collection id of the cancelled transfer
     */
    collectionId: bigint
}

/**
 * Collection ownership was transferred
 */
export interface MultiTokensEvent_CollectionTransferred {
    __kind: 'CollectionTransferred'
    /**
     * The collection that was transferred
     */
    collectionId: bigint
    /**
     * The new owner of the collection
     */
    newOwner: AccountId32
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
 * The token was infused with ENJ
 */
export interface MultiTokensEvent_Infused {
    __kind: 'Infused'
    /**
     * The collection that was infused
     */
    collectionId: bigint
    /**
     * The token that was infused
     */
    tokenId: bigint
    /**
     * The account that infused the token
     */
    accountId: AccountId32
    /**
     * The amount that was infused
     */
    amount: bigint
}

/**
 * The migration step has completed
 */
export interface MultiTokensEvent_MigrationStep {
    __kind: 'MigrationStep'
    /**
     * The number of items processed within this step
     */
    itemsProcessed: number
    /**
     * The migration phase
     */
    phase: number
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
 * The deposit for number of accounts supported by a token changed
 */
export interface MultiTokensEvent_TokenAccountDepositUpdated {
    __kind: 'TokenAccountDepositUpdated'
    /**
     * The [`CollectionId`](Config::CollectionId) for which the account is created
     */
    collectionId: bigint
    /**
     * The [`TokenId`](Config::TokenId) fof the destroyed account
     */
    tokenId: bigint
    /**
     * The account that deposited or removed deposit
     */
    depositor: AccountId32
    /**
     * The change in the number of accounts
     */
    deltaAccountCount: number
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
    requiresDeposit: boolean
    creationDeposit: AmbiguousDeposit
    ownerDeposit: bigint
    totalTokenAccountDeposit: bigint
    attributeCount: number
    accountCount: number
    marketBehavior?: TokenMarketBehavior | undefined
    listingForbidden: boolean
    metadata: DefaultTokenMetadata
    infusion: bigint
    anyoneCanInfuse: boolean
    groups: bigint[]
}

export interface DefaultTokenMetadata {
    decimalCount: number
    name: BoundedString
    symbol: Bytes
    foreign?: DefaultForeignTokenMetadata | undefined
}

export interface DefaultForeignTokenMetadata {
    location?: V4Location | undefined
    unitsPerSecond?: bigint | undefined
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

export interface AmbiguousDeposit {
    depositor?: AccountId32 | undefined
    amount: bigint
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

export type TokenCap = TokenCap_CollapsingSupply | TokenCap_Supply

export interface TokenCap_CollapsingSupply {
    __kind: 'CollapsingSupply'
    value: bigint
}

export interface TokenCap_Supply {
    __kind: 'Supply'
    value: bigint
}

export interface DefaultTokenMutation {
    behavior: Type_218
    listingForbidden: Type_221
    anyoneCanInfuse: Type_221
    name: Type_222
}

export type Type_222 = Type_222_NoMutation | Type_222_SomeMutation

export interface Type_222_NoMutation {
    __kind: 'NoMutation'
}

export interface Type_222_SomeMutation {
    __kind: 'SomeMutation'
    value: BoundedString
}

export type Type_221 = Type_221_NoMutation | Type_221_SomeMutation

export interface Type_221_NoMutation {
    __kind: 'NoMutation'
}

export interface Type_221_SomeMutation {
    __kind: 'SomeMutation'
    value: boolean
}

export type Type_218 = Type_218_NoMutation | Type_218_SomeMutation

export interface Type_218_NoMutation {
    __kind: 'NoMutation'
}

export interface Type_218_SomeMutation {
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
    deposit?: Deposit | undefined
}

export interface Deposit {
    depositor: AccountId32
    amount: bigint
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
    creationDeposit: Deposit
    totalDeposit: bigint
    explicitRoyaltyCurrencies: [AssetId, null][]
    totalInfusion: bigint
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
    forceCollapsingSupply: boolean
}

export interface DefaultCollectionMutation {
    owner?: AccountId32 | undefined
    royalty: Type_210
    explicitRoyaltyCurrencies?: AssetId[] | undefined
}

export type Type_210 = Type_210_NoMutation | Type_210_SomeMutation

export interface Type_210_NoMutation {
    __kind: 'NoMutation'
}

export interface Type_210_SomeMutation {
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
export type MigrationsEvent =
    | MigrationsEvent_HistoricCleared
    | MigrationsEvent_MigrationAdvanced
    | MigrationsEvent_MigrationCompleted
    | MigrationsEvent_MigrationFailed
    | MigrationsEvent_MigrationSkipped
    | MigrationsEvent_UpgradeCompleted
    | MigrationsEvent_UpgradeFailed
    | MigrationsEvent_UpgradeStarted

/**
 * The set of historical migrations has been cleared.
 */
export interface MigrationsEvent_HistoricCleared {
    __kind: 'HistoricCleared'
    /**
     * Should be passed to `clear_historic` in a successive call.
     */
    nextCursor?: Bytes | undefined
}

/**
 * A migration progressed.
 */
export interface MigrationsEvent_MigrationAdvanced {
    __kind: 'MigrationAdvanced'
    /**
     * The index of the migration within the [`Config::Migrations`] list.
     */
    index: number
    /**
     * The number of blocks that this migration took so far.
     */
    took: number
}

/**
 * A Migration completed.
 */
export interface MigrationsEvent_MigrationCompleted {
    __kind: 'MigrationCompleted'
    /**
     * The index of the migration within the [`Config::Migrations`] list.
     */
    index: number
    /**
     * The number of blocks that this migration took so far.
     */
    took: number
}

/**
 * A Migration failed.
 *
 * This implies that the whole upgrade failed and governance intervention is required.
 */
export interface MigrationsEvent_MigrationFailed {
    __kind: 'MigrationFailed'
    /**
     * The index of the migration within the [`Config::Migrations`] list.
     */
    index: number
    /**
     * The number of blocks that this migration took so far.
     */
    took: number
}

/**
 * A migration was skipped since it was already executed in the past.
 */
export interface MigrationsEvent_MigrationSkipped {
    __kind: 'MigrationSkipped'
    /**
     * The index of the skipped migration within the [`Config::Migrations`] list.
     */
    index: number
}

/**
 * The current runtime upgrade completed.
 *
 * This implies that all of its migrations completed successfully as well.
 */
export interface MigrationsEvent_UpgradeCompleted {
    __kind: 'UpgradeCompleted'
}

/**
 * Runtime upgrade failed.
 *
 * This is very bad and will require governance intervention.
 */
export interface MigrationsEvent_UpgradeFailed {
    __kind: 'UpgradeFailed'
}

/**
 * A Runtime upgrade started.
 *
 * Its end is indicated by `UpgradeCompleted` or `UpgradeFailed`.
 */
export interface MigrationsEvent_UpgradeStarted {
    __kind: 'UpgradeStarted'
    /**
     * The number of migrations that this upgrade contains.
     *
     * This can be used to design a progress indicator in combination with counting the
     * `MigrationCompleted` and `MigrationSkipped` events.
     */
    migrations: number
}

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
    /**
     * The `blake2_256` hash of the message.
     */
    id: Bytes
    /**
     * The queue of the message.
     */
    origin: AggregateMessageOrigin
    /**
     * The page of the message.
     */
    pageIndex: number
    /**
     * The index of the message within the page.
     */
    messageIndex: number
}

/**
 * This page was reaped.
 */
export interface MessageQueueEvent_PageReaped {
    __kind: 'PageReaped'
    /**
     * The queue of the page.
     */
    origin: AggregateMessageOrigin
    /**
     * The index of the page.
     */
    index: number
}

/**
 * Message is processed.
 */
export interface MessageQueueEvent_Processed {
    __kind: 'Processed'
    /**
     * The `blake2_256` hash of the message.
     */
    id: H256
    /**
     * The queue of the message.
     */
    origin: AggregateMessageOrigin
    /**
     * How much weight was used to process the message.
     */
    weightUsed: Weight
    /**
     * Whether the message was processed.
     *
     * Note that this does not mean that the underlying `MessageProcessor` was internally
     * successful. It *solely* means that the MQ pallet will treat this as a success
     * condition and discard the message. Any internal error needs to be emitted as events
     * by the `MessageProcessor`.
     */
    success: boolean
}

/**
 * Message discarded due to an error in the `MessageProcessor` (usually a format error).
 */
export interface MessageQueueEvent_ProcessingFailed {
    __kind: 'ProcessingFailed'
    /**
     * The `blake2_256` hash of the message.
     */
    id: H256
    /**
     * The queue of the message.
     */
    origin: AggregateMessageOrigin
    /**
     * The error that occurred.
     *
     * This error is pretty opaque. More fine-grained errors need to be emitted as events
     * by the `MessageProcessor`.
     */
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
    | MarketplaceEvent_CounterOfferAnswered
    | MarketplaceEvent_CounterOfferPlaced
    | MarketplaceEvent_CounterOfferRemoved
    | MarketplaceEvent_ExpiredListingRemoved
    | MarketplaceEvent_ListingCancelled
    | MarketplaceEvent_ListingCreated
    | MarketplaceEvent_ListingFilled
    | MarketplaceEvent_MigrationStep
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
 * A response was issued for a counter offer
 */
export interface MarketplaceEvent_CounterOfferAnswered {
    __kind: 'CounterOfferAnswered'
    /**
     * Id of the listing
     */
    listingId: H256
    /**
     * The account that created the counter offer
     */
    creator: AccountId32
    /**
     * The response to the counter offer
     */
    response: CounterOfferResponse
}

/**
 * A counter offer was placed on a listing
 */
export interface MarketplaceEvent_CounterOfferPlaced {
    __kind: 'CounterOfferPlaced'
    /**
     * Id of the listing
     */
    listingId: H256
    /**
     * The counter offer
     */
    counterOffer: CounterOffer
}

/**
 * A counter offer was removed
 */
export interface MarketplaceEvent_CounterOfferRemoved {
    __kind: 'CounterOfferRemoved'
    /**
     * Id of the listing
     */
    listingId: H256
    /**
     * The account that created the counter offer
     */
    creator: AccountId32
}

/**
 * An expired listing was removed
 */
export interface MarketplaceEvent_ExpiredListingRemoved {
    __kind: 'ExpiredListingRemoved'
    /**
     * Id for the listing
     */
    listingId: H256
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
     * The price it was filled with
     */
    price: bigint
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
 * The migration step has completed
 */
export interface MarketplaceEvent_MigrationStep {
    __kind: 'MigrationStep'
    /**
     * The number of items processed within this step
     */
    itemsProcessed: number
    /**
     * The migration phase
     */
    phase: number
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
    creator: AccountId32
    makeAssetId: AssetId
    takeAssetId: AssetId
    amount: bigint
    price: bigint
    minReceived: bigint
    feeSide: FeeSide
    creationBlock: number
    deposit: Deposit
    salt: Bytes
    data: ListingData
    state: ListingState
}

export type ListingState = ListingState_Auction | ListingState_FixedPrice | ListingState_Offer

export interface ListingState_Auction {
    __kind: 'Auction'
    value: AuctionState
}

export interface ListingState_FixedPrice {
    __kind: 'FixedPrice'
    amountFilled: bigint
}

export interface ListingState_Offer {
    __kind: 'Offer'
    value: OfferState
}

export interface OfferState {
    counterOfferCount: number
}

export interface AuctionState {
    highBid?: Bid | undefined
}

export type ListingData = ListingData_Auction | ListingData_FixedPrice | ListingData_Offer

export interface ListingData_Auction {
    __kind: 'Auction'
    value: AuctionData
}

export interface ListingData_FixedPrice {
    __kind: 'FixedPrice'
}

export interface ListingData_Offer {
    __kind: 'Offer'
    value: OfferData
}

export interface OfferData {
    expiration?: number | undefined
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

export interface CounterOffer {
    sellerPrice: bigint
    buyerPrice?: bigint | undefined
    deposit: Deposit
}

export type CounterOfferResponse =
    | CounterOfferResponse_Accept
    | CounterOfferResponse_Counter
    | CounterOfferResponse_Reject

export interface CounterOfferResponse_Accept {
    __kind: 'Accept'
}

export interface CounterOfferResponse_Counter {
    __kind: 'Counter'
    value: bigint
}

export interface CounterOfferResponse_Reject {
    __kind: 'Reject'
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
    | IdentityEvent_AuthorityAdded
    | IdentityEvent_AuthorityRemoved
    | IdentityEvent_DanglingUsernameRemoved
    | IdentityEvent_IdentityCleared
    | IdentityEvent_IdentityKilled
    | IdentityEvent_IdentitySet
    | IdentityEvent_JudgementGiven
    | IdentityEvent_JudgementRequested
    | IdentityEvent_JudgementUnrequested
    | IdentityEvent_PreapprovalExpired
    | IdentityEvent_PrimaryUsernameSet
    | IdentityEvent_RegistrarAdded
    | IdentityEvent_SubIdentityAdded
    | IdentityEvent_SubIdentityRemoved
    | IdentityEvent_SubIdentityRevoked
    | IdentityEvent_UsernameQueued
    | IdentityEvent_UsernameSet

/**
 * A username authority was added.
 */
export interface IdentityEvent_AuthorityAdded {
    __kind: 'AuthorityAdded'
    authority: AccountId32
}

/**
 * A username authority was removed.
 */
export interface IdentityEvent_AuthorityRemoved {
    __kind: 'AuthorityRemoved'
    authority: AccountId32
}

/**
 * A dangling username (as in, a username corresponding to an account that has removed its
 * identity) has been removed.
 */
export interface IdentityEvent_DanglingUsernameRemoved {
    __kind: 'DanglingUsernameRemoved'
    who: AccountId32
    username: Bytes
}

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
 * A queued username passed its expiration without being claimed and was removed.
 */
export interface IdentityEvent_PreapprovalExpired {
    __kind: 'PreapprovalExpired'
    whose: AccountId32
}

/**
 * A username was set as a primary and can be looked up from `who`.
 */
export interface IdentityEvent_PrimaryUsernameSet {
    __kind: 'PrimaryUsernameSet'
    who: AccountId32
    username: Bytes
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
 * A username was queued, but `who` must accept it prior to `expiration`.
 */
export interface IdentityEvent_UsernameQueued {
    __kind: 'UsernameQueued'
    who: AccountId32
    username: Bytes
    expiration: number
}

/**
 * A username was set for `who`.
 */
export interface IdentityEvent_UsernameSet {
    __kind: 'UsernameSet'
    who: AccountId32
    username: Bytes
}

/**
 * The `Event` enum of this pallet
 */
export type HrmpEvent =
    | HrmpEvent_ChannelClosed
    | HrmpEvent_HrmpChannelForceOpened
    | HrmpEvent_HrmpSystemChannelOpened
    | HrmpEvent_OpenChannelAccepted
    | HrmpEvent_OpenChannelCanceled
    | HrmpEvent_OpenChannelDepositsUpdated
    | HrmpEvent_OpenChannelRequested

/**
 * HRMP channel closed.
 */
export interface HrmpEvent_ChannelClosed {
    __kind: 'ChannelClosed'
    byParachain: Id
    channelId: HrmpChannelId
}

/**
 * An HRMP channel was opened via Root origin.
 */
export interface HrmpEvent_HrmpChannelForceOpened {
    __kind: 'HrmpChannelForceOpened'
    sender: Id
    recipient: Id
    proposedMaxCapacity: number
    proposedMaxMessageSize: number
}

/**
 * An HRMP channel was opened between two system chains.
 */
export interface HrmpEvent_HrmpSystemChannelOpened {
    __kind: 'HrmpSystemChannelOpened'
    sender: Id
    recipient: Id
    proposedMaxCapacity: number
    proposedMaxMessageSize: number
}

/**
 * Open HRMP channel accepted.
 */
export interface HrmpEvent_OpenChannelAccepted {
    __kind: 'OpenChannelAccepted'
    sender: Id
    recipient: Id
}

/**
 * An HRMP channel request sent by the receiver was canceled by either party.
 */
export interface HrmpEvent_OpenChannelCanceled {
    __kind: 'OpenChannelCanceled'
    byParachain: Id
    channelId: HrmpChannelId
}

/**
 * An HRMP channel's deposits were updated.
 */
export interface HrmpEvent_OpenChannelDepositsUpdated {
    __kind: 'OpenChannelDepositsUpdated'
    sender: Id
    recipient: Id
}

/**
 * Open HRMP channel requested.
 */
export interface HrmpEvent_OpenChannelRequested {
    __kind: 'OpenChannelRequested'
    sender: Id
    recipient: Id
    proposedMaxCapacity: number
    proposedMaxMessageSize: number
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
    | FuelTanksEvent_MigrationStep
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
 * The migration step has completed
 */
export interface FuelTanksEvent_MigrationStep {
    __kind: 'MigrationStep'
    /**
     * The number of items processed within this step
     */
    itemsProcessed: number
    /**
     * The migration phase
     */
    phase: number
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
    userAccountManagement: Type_288
    coveragePolicy?: CoveragePolicy | undefined
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

export type CoveragePolicy = CoveragePolicy_Fees | CoveragePolicy_FeesAndDeposit

export interface CoveragePolicy_Fees {
    __kind: 'Fees'
}

export interface CoveragePolicy_FeesAndDeposit {
    __kind: 'FeesAndDeposit'
}

export type Type_288 = Type_288_NoMutation | Type_288_SomeMutation

export interface Type_288_NoMutation {
    __kind: 'NoMutation'
}

export interface Type_288_SomeMutation {
    __kind: 'SomeMutation'
    value?: UserAccountManagement | undefined
}

export interface UserAccountManagement {
    tankReservesAccountCreationDeposit: boolean
}

export interface Consumption {
    totalConsumed: bigint
    lastResetBlock?: number | undefined
}

export type DispatchRuleKind =
    | DispatchRuleKind_MaxFuelBurnPerTransaction
    | DispatchRuleKind_MinimumInfusion
    | DispatchRuleKind_PermittedCalls
    | DispatchRuleKind_PermittedExtrinsics
    | DispatchRuleKind_RequireSignature
    | DispatchRuleKind_RequireToken
    | DispatchRuleKind_TankFuelBudget
    | DispatchRuleKind_UserFuelBudget
    | DispatchRuleKind_WhitelistedCallers
    | DispatchRuleKind_WhitelistedCollections
    | DispatchRuleKind_WhitelistedPallets

export interface DispatchRuleKind_MaxFuelBurnPerTransaction {
    __kind: 'MaxFuelBurnPerTransaction'
}

export interface DispatchRuleKind_MinimumInfusion {
    __kind: 'MinimumInfusion'
}

export interface DispatchRuleKind_PermittedCalls {
    __kind: 'PermittedCalls'
}

export interface DispatchRuleKind_PermittedExtrinsics {
    __kind: 'PermittedExtrinsics'
}

export interface DispatchRuleKind_RequireSignature {
    __kind: 'RequireSignature'
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
    tally: Type_718
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
    tally: Type_718
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
    tally: Type_718
}

/**
 * A deposit has been slashed.
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
    tally: Type_718
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
    tally: Type_718
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
    tally: Type_718
}

export interface Type_718 {
    bareAyes: number
    ayes: number
    nays: number
}

/**
 * The `Event` enum of this pallet
 */
export type FellowshipCollectiveEvent =
    | FellowshipCollectiveEvent_MemberAdded
    | FellowshipCollectiveEvent_MemberExchanged
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
 * The member `who` had their `AccountId` changed to `new_who`.
 */
export interface FellowshipCollectiveEvent_MemberExchanged {
    __kind: 'MemberExchanged'
    who: AccountId32
    newWho: AccountId32
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
    tally: Type_718
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
    | BalancesEvent_TotalIssuanceForced
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
 * The `TotalIssuance` was forcefully changed.
 */
export interface BalancesEvent_TotalIssuanceForced {
    __kind: 'TotalIssuanceForced'
    old: bigint
    new: bigint
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
 * Someone attempted to lease the same slot twice for a parachain. The amount is held in
 * reserve but no parachain slot has been leased.
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
 * The winning offset was chosen for an auction. This will map into the `Winning` storage
 * map.
 */
export interface AuctionsEvent_WinningOffset {
    __kind: 'WinningOffset'
    auctionIndex: number
    blockNumber: number
}

/**
 * The `Event` enum of this pallet
 */
export type AssignedSlotsEvent =
    | AssignedSlotsEvent_MaxPermanentSlotsChanged
    | AssignedSlotsEvent_MaxTemporarySlotsChanged
    | AssignedSlotsEvent_PermanentSlotAssigned
    | AssignedSlotsEvent_TemporarySlotAssigned

/**
 * The maximum number of permanent slots has been changed
 */
export interface AssignedSlotsEvent_MaxPermanentSlotsChanged {
    __kind: 'MaxPermanentSlotsChanged'
    slots: number
}

/**
 * The maximum number of temporary slots has been changed
 */
export interface AssignedSlotsEvent_MaxTemporarySlotsChanged {
    __kind: 'MaxTemporarySlotsChanged'
    slots: number
}

/**
 * A parachain was assigned a permanent parachain slot
 */
export interface AssignedSlotsEvent_PermanentSlotAssigned {
    __kind: 'PermanentSlotAssigned'
    value: Id
}

/**
 * A parachain was assigned a temporary parachain slot
 */
export interface AssignedSlotsEvent_TemporarySlotAssigned {
    __kind: 'TemporarySlotAssigned'
    value: Id
}

export type Type_722 = Type_722_ApplyExtrinsic | Type_722_Finalization | Type_722_Initialization

export interface Type_722_ApplyExtrinsic {
    __kind: 'ApplyExtrinsic'
    value: number
}

export interface Type_722_Finalization {
    __kind: 'Finalization'
}

export interface Type_722_Initialization {
    __kind: 'Initialization'
}

export const EventRecord: sts.Type<EventRecord> = sts.struct(() => {
    return {
        phase: Type_722,
        event: Event,
        topics: sts.array(() => H256),
    }
})

export const H256 = sts.bytes()

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
        Migrations: MigrationsEvent,
        MultiTokens: MultiTokensEvent,
        Multisig: MultisigEvent,
        NominationPools: NominationPoolsEvent,
        Offences: OffencesEvent,
        ParaInclusion: ParaInclusionEvent,
        Paras: ParasEvent,
        ParasDisputes: ParasDisputesEvent,
        Preimage: PreimageEvent,
        Proxy: ProxyEvent,
        Referenda: ReferendaEvent,
        Registrar: RegistrarEvent,
        SafeMode: SafeModeEvent,
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
            origin: V4Location,
            assets: VersionedAssets,
        }),
        AssetsTrapped: sts.enumStruct({
            hash: H256,
            origin: V4Location,
            assets: VersionedAssets,
        }),
        Attempted: sts.enumStruct({
            outcome: V4Outcome,
        }),
        FeesPaid: sts.enumStruct({
            paying: V4Location,
            fees: sts.array(() => V4Asset),
        }),
        InvalidQuerier: sts.enumStruct({
            origin: V4Location,
            queryId: sts.bigint(),
            expectedQuerier: V4Location,
            maybeActualQuerier: sts.option(() => V4Location),
        }),
        InvalidQuerierVersion: sts.enumStruct({
            origin: V4Location,
            queryId: sts.bigint(),
        }),
        InvalidResponder: sts.enumStruct({
            origin: V4Location,
            queryId: sts.bigint(),
            expectedLocation: sts.option(() => V4Location),
        }),
        InvalidResponderVersion: sts.enumStruct({
            origin: V4Location,
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
            location: VersionedLocation,
            queryId: sts.bigint(),
        }),
        NotifyTargetSendFail: sts.enumStruct({
            location: V4Location,
            queryId: sts.bigint(),
            error: V3Error,
        }),
        ResponseReady: sts.enumStruct({
            queryId: sts.bigint(),
            response: V4Response,
        }),
        ResponseTaken: sts.enumStruct({
            queryId: sts.bigint(),
        }),
        Sent: sts.enumStruct({
            origin: V4Location,
            destination: V4Location,
            message: sts.array(() => V4Instruction),
            messageId: sts.bytes(),
        }),
        SupportedVersionChanged: sts.enumStruct({
            location: V4Location,
            version: sts.number(),
        }),
        UnexpectedResponse: sts.enumStruct({
            origin: V4Location,
            queryId: sts.bigint(),
        }),
        VersionChangeNotified: sts.enumStruct({
            destination: V4Location,
            result: sts.number(),
            cost: sts.array(() => V4Asset),
            messageId: sts.bytes(),
        }),
        VersionMigrationFinished: sts.enumStruct({
            version: sts.number(),
        }),
        VersionNotifyRequested: sts.enumStruct({
            destination: V4Location,
            cost: sts.array(() => V4Asset),
            messageId: sts.bytes(),
        }),
        VersionNotifyStarted: sts.enumStruct({
            destination: V4Location,
            cost: sts.array(() => V4Asset),
            messageId: sts.bytes(),
        }),
        VersionNotifyUnrequested: sts.enumStruct({
            destination: V4Location,
            cost: sts.array(() => V4Asset),
            messageId: sts.bytes(),
        }),
    }
})

export const V4Instruction: sts.Type<V4Instruction> = sts.closedEnum(() => {
    return {
        AliasOrigin: V4Location,
        BurnAsset: sts.array(() => V4Asset),
        BuyExecution: sts.enumStruct({
            fees: V4Asset,
            weightLimit: V3WeightLimit,
        }),
        ClaimAsset: sts.enumStruct({
            assets: sts.array(() => V4Asset),
            ticket: V4Location,
        }),
        ClearError: sts.unit(),
        ClearOrigin: sts.unit(),
        ClearTopic: sts.unit(),
        ClearTransactStatus: sts.unit(),
        DepositAsset: sts.enumStruct({
            assets: V4AssetFilter,
            beneficiary: V4Location,
        }),
        DepositReserveAsset: sts.enumStruct({
            assets: V4AssetFilter,
            dest: V4Location,
            xcm: sts.array(() => V4Instruction),
        }),
        DescendOrigin: V4Junctions,
        ExchangeAsset: sts.enumStruct({
            give: V4AssetFilter,
            want: sts.array(() => V4Asset),
            maximal: sts.boolean(),
        }),
        ExpectAsset: sts.array(() => V4Asset),
        ExpectError: sts.option(() => sts.tuple(() => [sts.number(), V3Error])),
        ExpectOrigin: sts.option(() => V4Location),
        ExpectPallet: sts.enumStruct({
            index: sts.number(),
            name: sts.bytes(),
            moduleName: sts.bytes(),
            crateMajor: sts.number(),
            minCrateMinor: sts.number(),
        }),
        ExpectTransactStatus: V3MaybeErrorCode,
        ExportMessage: sts.enumStruct({
            network: V4NetworkId,
            destination: V4Junctions,
            xcm: sts.array(() => V4Instruction),
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
            assets: V4AssetFilter,
            reserve: V4Location,
            xcm: sts.array(() => V4Instruction),
        }),
        InitiateTeleport: sts.enumStruct({
            assets: V4AssetFilter,
            dest: V4Location,
            xcm: sts.array(() => V4Instruction),
        }),
        LockAsset: sts.enumStruct({
            asset: V4Asset,
            unlocker: V4Location,
        }),
        NoteUnlockable: sts.enumStruct({
            asset: V4Asset,
            owner: V4Location,
        }),
        QueryPallet: sts.enumStruct({
            moduleName: sts.bytes(),
            responseInfo: V4QueryResponseInfo,
        }),
        QueryResponse: sts.enumStruct({
            queryId: sts.bigint(),
            response: V4Response,
            maxWeight: Weight,
            querier: sts.option(() => V4Location),
        }),
        ReceiveTeleportedAsset: sts.array(() => V4Asset),
        RefundSurplus: sts.unit(),
        ReportError: V4QueryResponseInfo,
        ReportHolding: sts.enumStruct({
            responseInfo: V4QueryResponseInfo,
            assets: V4AssetFilter,
        }),
        ReportTransactStatus: V4QueryResponseInfo,
        RequestUnlock: sts.enumStruct({
            asset: V4Asset,
            locker: V4Location,
        }),
        ReserveAssetDeposited: sts.array(() => V4Asset),
        SetAppendix: sts.array(() => V4Instruction),
        SetErrorHandler: sts.array(() => V4Instruction),
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
            assets: sts.array(() => V4Asset),
            beneficiary: V4Location,
        }),
        TransferReserveAsset: sts.enumStruct({
            assets: sts.array(() => V4Asset),
            dest: V4Location,
            xcm: sts.array(() => V4Instruction),
        }),
        Trap: sts.bigint(),
        UniversalOrigin: V4Junction,
        UnlockAsset: sts.enumStruct({
            asset: V4Asset,
            target: V4Location,
        }),
        UnpaidExecution: sts.enumStruct({
            weightLimit: V3WeightLimit,
            checkOrigin: sts.option(() => V4Location),
        }),
        UnsubscribeVersion: sts.unit(),
        WithdrawAsset: sts.array(() => V4Asset),
    }
})

export const V4Junction: sts.Type<V4Junction> = sts.closedEnum(() => {
    return {
        AccountId32: sts.enumStruct({
            network: sts.option(() => V4NetworkId),
            id: sts.bytes(),
        }),
        AccountIndex64: sts.enumStruct({
            network: sts.option(() => V4NetworkId),
            index: sts.bigint(),
        }),
        AccountKey20: sts.enumStruct({
            network: sts.option(() => V4NetworkId),
            key: sts.bytes(),
        }),
        GeneralIndex: sts.bigint(),
        GeneralKey: sts.enumStruct({
            length: sts.number(),
            data: sts.bytes(),
        }),
        GlobalConsensus: V4NetworkId,
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

export const V4QueryResponseInfo: sts.Type<V4QueryResponseInfo> = sts.struct(() => {
    return {
        destination: V4Location,
        queryId: sts.bigint(),
        maxWeight: Weight,
    }
})

export const V4NetworkId: sts.Type<V4NetworkId> = sts.closedEnum(() => {
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
        PolkadotBulletin: sts.unit(),
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

export const V4Junctions: sts.Type<V4Junctions> = sts.closedEnum(() => {
    return {
        Here: sts.unit(),
        X1: sts.array(() => V4Junction),
        X2: sts.array(() => V4Junction),
        X3: sts.array(() => V4Junction),
        X4: sts.array(() => V4Junction),
        X5: sts.array(() => V4Junction),
        X6: sts.array(() => V4Junction),
        X7: sts.array(() => V4Junction),
        X8: sts.array(() => V4Junction),
    }
})

export const V4AssetFilter: sts.Type<V4AssetFilter> = sts.closedEnum(() => {
    return {
        Definite: sts.array(() => V4Asset),
        Wild: V4WildAsset,
    }
})

export const V4WildAsset: sts.Type<V4WildAsset> = sts.closedEnum(() => {
    return {
        All: sts.unit(),
        AllCounted: sts.number(),
        AllOf: sts.enumStruct({
            id: V4AssetId,
            fun: V4WildFungibility,
        }),
        AllOfCounted: sts.enumStruct({
            id: V4AssetId,
            fun: V4WildFungibility,
            count: sts.number(),
        }),
    }
})

export const V4WildFungibility: sts.Type<V4WildFungibility> = sts.closedEnum(() => {
    return {
        Fungible: sts.unit(),
        NonFungible: sts.unit(),
    }
})

export const V4AssetId: sts.Type<V4AssetId> = sts.struct(() => {
    return {
        parents: sts.number(),
        interior: V4Junctions,
    }
})

export const V3WeightLimit: sts.Type<V3WeightLimit> = sts.closedEnum(() => {
    return {
        Limited: Weight,
        Unlimited: sts.unit(),
    }
})

export const V4Response: sts.Type<V4Response> = sts.closedEnum(() => {
    return {
        Assets: sts.array(() => V4Asset),
        DispatchResult: V3MaybeErrorCode,
        ExecutionResult: sts.option(() => sts.tuple(() => [sts.number(), V3Error])),
        Null: sts.unit(),
        PalletsInfo: sts.array(() => V4PalletInfo),
        Version: sts.number(),
    }
})

export const V4PalletInfo: sts.Type<V4PalletInfo> = sts.struct(() => {
    return {
        index: sts.number(),
        name: sts.bytes(),
        moduleName: sts.bytes(),
        major: sts.number(),
        minor: sts.number(),
        patch: sts.number(),
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

export const VersionedLocation: sts.Type<VersionedLocation> = sts.closedEnum(() => {
    return {
        V2: V2MultiLocation,
        V3: V3MultiLocation,
        V4: V4Location,
    }
})

export const V3MultiLocation: sts.Type<V3MultiLocation> = sts.struct(() => {
    return {
        parents: sts.number(),
        interior: V3Junctions,
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
        PolkadotBulletin: sts.unit(),
        Rococo: sts.unit(),
        Westend: sts.unit(),
        Wococo: sts.unit(),
    }
})

export const V2MultiLocation: sts.Type<V2MultiLocation> = sts.struct(() => {
    return {
        parents: sts.number(),
        interior: V2Junctions,
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

export const Weight: sts.Type<Weight> = sts.struct(() => {
    return {
        refTime: sts.bigint(),
        proofSize: sts.bigint(),
    }
})

export const V4Asset: sts.Type<V4Asset> = sts.struct(() => {
    return {
        id: V4AssetId,
        fun: V4Fungibility,
    }
})

export const V4Fungibility: sts.Type<V4Fungibility> = sts.closedEnum(() => {
    return {
        Fungible: sts.bigint(),
        NonFungible: V4AssetInstance,
    }
})

export const V4AssetInstance: sts.Type<V4AssetInstance> = sts.closedEnum(() => {
    return {
        Array16: sts.bytes(),
        Array32: sts.bytes(),
        Array4: sts.bytes(),
        Array8: sts.bytes(),
        Index: sts.bigint(),
        Undefined: sts.unit(),
    }
})

export const V4Outcome: sts.Type<V4Outcome> = sts.closedEnum(() => {
    return {
        Complete: sts.enumStruct({
            used: Weight,
        }),
        Error: sts.enumStruct({
            error: V3Error,
        }),
        Incomplete: sts.enumStruct({
            used: Weight,
            error: V3Error,
        }),
    }
})

export const VersionedAssets: sts.Type<VersionedAssets> = sts.closedEnum(() => {
    return {
        V2: sts.array(() => V2MultiAsset),
        V3: sts.array(() => V3MultiAsset),
        V4: sts.array(() => V4Asset),
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

export const V3AssetId: sts.Type<V3AssetId> = sts.closedEnum(() => {
    return {
        Abstract: sts.bytes(),
        Concrete: V3MultiLocation,
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

export const V2AssetId: sts.Type<V2AssetId> = sts.closedEnum(() => {
    return {
        Abstract: sts.bytes(),
        Concrete: V2MultiLocation,
    }
})

export const V4Location: sts.Type<V4Location> = sts.struct(() => {
    return {
        parents: sts.number(),
        interior: V4Junctions,
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
        AssetSpendApproved: sts.enumStruct({
            index: sts.number(),
            amount: sts.bigint(),
            beneficiary: AccountId32,
            validFrom: sts.number(),
            expireAt: sts.number(),
        }),
        AssetSpendVoided: sts.enumStruct({
            index: sts.number(),
        }),
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
        Paid: sts.enumStruct({
            index: sts.number(),
        }),
        PaymentFailed: sts.enumStruct({
            index: sts.number(),
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
        SpendProcessed: sts.enumStruct({
            index: sts.number(),
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
        UpgradeAuthorized: sts.enumStruct({
            codeHash: H256,
            checkVersion: sts.boolean(),
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
            old: sts.option(() => AccountId32),
            new: AccountId32,
        }),
        KeyRemoved: sts.unit(),
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
        ControllerBatchDeprecated: sts.enumStruct({
            failures: sts.number(),
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
            dest: RewardDestination,
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
        SnapshotTargetsSizeExceeded: sts.enumStruct({
            size: sts.number(),
        }),
        SnapshotVotersSizeExceeded: sts.enumStruct({
            size: sts.number(),
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

export const RewardDestination: sts.Type<RewardDestination> = sts.closedEnum(() => {
    return {
        Account: AccountId32,
        Controller: sts.unit(),
        None: sts.unit(),
        Staked: sts.unit(),
        Stash: sts.unit(),
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
            offerId: sts.bigint(),
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
        RetryCancelled: sts.enumStruct({
            task: sts.tuple(() => [sts.number(), sts.number()]),
            id: sts.option(() => sts.bytes()),
        }),
        RetryFailed: sts.enumStruct({
            task: sts.tuple(() => [sts.number(), sts.number()]),
            id: sts.option(() => sts.bytes()),
        }),
        RetrySet: sts.enumStruct({
            task: sts.tuple(() => [sts.number(), sts.number()]),
            id: sts.option(() => sts.bytes()),
            period: sts.number(),
            retries: sts.number(),
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
export const SafeModeEvent: sts.Type<SafeModeEvent> = sts.closedEnum(() => {
    return {
        CannotDeposit: sts.unit(),
        CannotRelease: sts.unit(),
        DepositPlaced: sts.enumStruct({
            account: AccountId32,
            amount: sts.bigint(),
        }),
        DepositReleased: sts.enumStruct({
            account: AccountId32,
            amount: sts.bigint(),
        }),
        DepositSlashed: sts.enumStruct({
            account: AccountId32,
            amount: sts.bigint(),
        }),
        Entered: sts.enumStruct({
            until: sts.number(),
        }),
        Exited: sts.enumStruct({
            reason: ExitReason,
        }),
        Extended: sts.enumStruct({
            until: sts.number(),
        }),
    }
})

export const ExitReason: sts.Type<ExitReason> = sts.closedEnum(() => {
    return {
        Force: sts.unit(),
        Timeout: sts.unit(),
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
export const ProxyEvent: sts.Type<ProxyEvent> = sts.closedEnum(() => {
    return {
        Announced: sts.enumStruct({
            real: AccountId32,
            proxy: AccountId32,
            callHash: H256,
        }),
        ProxyAdded: sts.enumStruct({
            delegator: AccountId32,
            delegatee: AccountId32,
            proxyType: ProxyType,
            delay: sts.number(),
        }),
        ProxyExecuted: sts.enumStruct({
            result: sts.result(
                () => sts.unit(),
                () => DispatchError
            ),
        }),
        ProxyRemoved: sts.enumStruct({
            delegator: AccountId32,
            delegatee: AccountId32,
            proxyType: ProxyType,
            delay: sts.number(),
        }),
        PureCreated: sts.enumStruct({
            pure: AccountId32,
            who: AccountId32,
            proxyType: ProxyType,
            disambiguationIndex: sts.number(),
        }),
    }
})

export const ProxyType: sts.Type<ProxyType> = sts.closedEnum(() => {
    return {
        Any: sts.unit(),
        Governance: sts.unit(),
        Tokens: sts.unit(),
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
        CandidateBacked: sts.tuple(() => [V6CandidateReceipt, HeadData, V6CoreIndex, V6GroupIndex]),
        CandidateIncluded: sts.tuple(() => [V6CandidateReceipt, HeadData, V6CoreIndex, V6GroupIndex]),
        CandidateTimedOut: sts.tuple(() => [V6CandidateReceipt, HeadData, V6CoreIndex]),
        UpwardMessagesReceived: sts.enumStruct({
            from: Id,
            count: sts.number(),
        }),
    }
})

export const V6GroupIndex = sts.number()

export const V6CoreIndex = sts.number()

export const HeadData = sts.bytes()

export const V6CandidateReceipt: sts.Type<V6CandidateReceipt> = sts.struct(() => {
    return {
        descriptor: V6CandidateDescriptor,
        commitmentsHash: H256,
    }
})

export const V6CandidateDescriptor: sts.Type<V6CandidateDescriptor> = sts.struct(() => {
    return {
        paraId: Id,
        relayParent: H256,
        collator: V6Public,
        persistedValidationDataHash: H256,
        povHash: H256,
        erasureRoot: H256,
        signature: V6Signature,
        paraHead: H256,
        validationCodeHash: ValidationCodeHash,
    }
})

export const V6Signature = sts.bytes()

export const V6Public = sts.bytes()

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

export const Timepoint: sts.Type<Timepoint> = sts.struct(() => {
    return {
        height: sts.number(),
        index: sts.number(),
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
        CollectionTransferCancelled: sts.enumStruct({
            collectionId: sts.bigint(),
        }),
        CollectionTransferred: sts.enumStruct({
            collectionId: sts.bigint(),
            newOwner: AccountId32,
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
        Infused: sts.enumStruct({
            collectionId: sts.bigint(),
            tokenId: sts.bigint(),
            accountId: AccountId32,
            amount: sts.bigint(),
        }),
        MigrationStep: sts.enumStruct({
            itemsProcessed: sts.number(),
            phase: sts.number(),
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
        TokenAccountDepositUpdated: sts.enumStruct({
            collectionId: sts.bigint(),
            tokenId: sts.bigint(),
            depositor: AccountId32,
            deltaAccountCount: sts.number(),
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
        requiresDeposit: sts.boolean(),
        creationDeposit: AmbiguousDeposit,
        ownerDeposit: sts.bigint(),
        totalTokenAccountDeposit: sts.bigint(),
        attributeCount: sts.number(),
        accountCount: sts.number(),
        marketBehavior: sts.option(() => TokenMarketBehavior),
        listingForbidden: sts.boolean(),
        metadata: DefaultTokenMetadata,
        infusion: sts.bigint(),
        anyoneCanInfuse: sts.boolean(),
        groups: sts.array(() => sts.bigint()),
    }
})

export const DefaultTokenMetadata: sts.Type<DefaultTokenMetadata> = sts.struct(() => {
    return {
        decimalCount: sts.number(),
        name: BoundedString,
        symbol: sts.bytes(),
        foreign: sts.option(() => DefaultForeignTokenMetadata),
    }
})

export const DefaultForeignTokenMetadata: sts.Type<DefaultForeignTokenMetadata> = sts.struct(() => {
    return {
        location: sts.option(() => V4Location),
        unitsPerSecond: sts.option(() => sts.bigint()),
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

export const AmbiguousDeposit: sts.Type<AmbiguousDeposit> = sts.struct(() => {
    return {
        depositor: sts.option(() => AccountId32),
        amount: sts.bigint(),
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
        Supply: sts.bigint(),
    }
})

export const DefaultTokenMutation: sts.Type<DefaultTokenMutation> = sts.struct(() => {
    return {
        behavior: Type_218,
        listingForbidden: Type_221,
        anyoneCanInfuse: Type_221,
        name: Type_222,
    }
})

export const Type_222: sts.Type<Type_222> = sts.closedEnum(() => {
    return {
        NoMutation: sts.unit(),
        SomeMutation: BoundedString,
    }
})

export const Type_221: sts.Type<Type_221> = sts.closedEnum(() => {
    return {
        NoMutation: sts.unit(),
        SomeMutation: sts.boolean(),
    }
})

export const Type_218: sts.Type<Type_218> = sts.closedEnum(() => {
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
        deposit: sts.option(() => Deposit),
    }
})

export const Deposit: sts.Type<Deposit> = sts.struct(() => {
    return {
        depositor: AccountId32,
        amount: sts.bigint(),
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
        creationDeposit: Deposit,
        totalDeposit: sts.bigint(),
        explicitRoyaltyCurrencies: sts.array(() => sts.tuple(() => [AssetId, sts.unit()])),
        totalInfusion: sts.bigint(),
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
        forceCollapsingSupply: sts.boolean(),
    }
})

export const DefaultCollectionMutation: sts.Type<DefaultCollectionMutation> = sts.struct(() => {
    return {
        owner: sts.option(() => AccountId32),
        royalty: Type_210,
        explicitRoyaltyCurrencies: sts.option(() => sts.array(() => AssetId)),
    }
})

export const Type_210: sts.Type<Type_210> = sts.closedEnum(() => {
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
export const MigrationsEvent: sts.Type<MigrationsEvent> = sts.closedEnum(() => {
    return {
        HistoricCleared: sts.enumStruct({
            nextCursor: sts.option(() => sts.bytes()),
        }),
        MigrationAdvanced: sts.enumStruct({
            index: sts.number(),
            took: sts.number(),
        }),
        MigrationCompleted: sts.enumStruct({
            index: sts.number(),
            took: sts.number(),
        }),
        MigrationFailed: sts.enumStruct({
            index: sts.number(),
            took: sts.number(),
        }),
        MigrationSkipped: sts.enumStruct({
            index: sts.number(),
        }),
        UpgradeCompleted: sts.unit(),
        UpgradeFailed: sts.unit(),
        UpgradeStarted: sts.enumStruct({
            migrations: sts.number(),
        }),
    }
})

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
            id: H256,
            origin: AggregateMessageOrigin,
            weightUsed: Weight,
            success: sts.boolean(),
        }),
        ProcessingFailed: sts.enumStruct({
            id: H256,
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
        CounterOfferAnswered: sts.enumStruct({
            listingId: H256,
            creator: AccountId32,
            response: CounterOfferResponse,
        }),
        CounterOfferPlaced: sts.enumStruct({
            listingId: H256,
            counterOffer: CounterOffer,
        }),
        CounterOfferRemoved: sts.enumStruct({
            listingId: H256,
            creator: AccountId32,
        }),
        ExpiredListingRemoved: sts.enumStruct({
            listingId: H256,
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
            price: sts.bigint(),
            amountFilled: sts.bigint(),
            amountRemaining: sts.bigint(),
            protocolFee: sts.bigint(),
            royalty: sts.bigint(),
        }),
        MigrationStep: sts.enumStruct({
            itemsProcessed: sts.number(),
            phase: sts.number(),
        }),
        ProtocolFeeSet: sts.enumStruct({
            protocolFee: Perbill,
        }),
    }
})

export const Listing: sts.Type<Listing> = sts.struct(() => {
    return {
        creator: AccountId32,
        makeAssetId: AssetId,
        takeAssetId: AssetId,
        amount: sts.bigint(),
        price: sts.bigint(),
        minReceived: sts.bigint(),
        feeSide: FeeSide,
        creationBlock: sts.number(),
        deposit: Deposit,
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
        Offer: OfferState,
    }
})

export const OfferState: sts.Type<OfferState> = sts.struct(() => {
    return {
        counterOfferCount: sts.number(),
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
        Offer: OfferData,
    }
})

export const OfferData: sts.Type<OfferData> = sts.struct(() => {
    return {
        expiration: sts.option(() => sts.number()),
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

export const CounterOffer: sts.Type<CounterOffer> = sts.struct(() => {
    return {
        sellerPrice: sts.bigint(),
        buyerPrice: sts.option(() => sts.bigint()),
        deposit: Deposit,
    }
})

export const CounterOfferResponse: sts.Type<CounterOfferResponse> = sts.closedEnum(() => {
    return {
        Accept: sts.unit(),
        Counter: sts.bigint(),
        Reject: sts.unit(),
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
        AuthorityAdded: sts.enumStruct({
            authority: AccountId32,
        }),
        AuthorityRemoved: sts.enumStruct({
            authority: AccountId32,
        }),
        DanglingUsernameRemoved: sts.enumStruct({
            who: AccountId32,
            username: sts.bytes(),
        }),
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
        PreapprovalExpired: sts.enumStruct({
            whose: AccountId32,
        }),
        PrimaryUsernameSet: sts.enumStruct({
            who: AccountId32,
            username: sts.bytes(),
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
        UsernameQueued: sts.enumStruct({
            who: AccountId32,
            username: sts.bytes(),
            expiration: sts.number(),
        }),
        UsernameSet: sts.enumStruct({
            who: AccountId32,
            username: sts.bytes(),
        }),
    }
})

/**
 * The `Event` enum of this pallet
 */
export const HrmpEvent: sts.Type<HrmpEvent> = sts.closedEnum(() => {
    return {
        ChannelClosed: sts.enumStruct({
            byParachain: Id,
            channelId: HrmpChannelId,
        }),
        HrmpChannelForceOpened: sts.enumStruct({
            sender: Id,
            recipient: Id,
            proposedMaxCapacity: sts.number(),
            proposedMaxMessageSize: sts.number(),
        }),
        HrmpSystemChannelOpened: sts.enumStruct({
            sender: Id,
            recipient: Id,
            proposedMaxCapacity: sts.number(),
            proposedMaxMessageSize: sts.number(),
        }),
        OpenChannelAccepted: sts.enumStruct({
            sender: Id,
            recipient: Id,
        }),
        OpenChannelCanceled: sts.enumStruct({
            byParachain: Id,
            channelId: HrmpChannelId,
        }),
        OpenChannelDepositsUpdated: sts.enumStruct({
            sender: Id,
            recipient: Id,
        }),
        OpenChannelRequested: sts.enumStruct({
            sender: Id,
            recipient: Id,
            proposedMaxCapacity: sts.number(),
            proposedMaxMessageSize: sts.number(),
        }),
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
        MigrationStep: sts.enumStruct({
            itemsProcessed: sts.number(),
            phase: sts.number(),
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
        userAccountManagement: Type_288,
        coveragePolicy: sts.option(() => CoveragePolicy),
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

export const CoveragePolicy: sts.Type<CoveragePolicy> = sts.closedEnum(() => {
    return {
        Fees: sts.unit(),
        FeesAndDeposit: sts.unit(),
    }
})

export const Type_288: sts.Type<Type_288> = sts.closedEnum(() => {
    return {
        NoMutation: sts.unit(),
        SomeMutation: sts.option(() => UserAccountManagement),
    }
})

export const UserAccountManagement: sts.Type<UserAccountManagement> = sts.struct(() => {
    return {
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
        MinimumInfusion: sts.unit(),
        PermittedCalls: sts.unit(),
        PermittedExtrinsics: sts.unit(),
        RequireSignature: sts.unit(),
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
            tally: Type_718,
        }),
        ConfirmAborted: sts.enumStruct({
            index: sts.number(),
        }),
        ConfirmStarted: sts.enumStruct({
            index: sts.number(),
        }),
        Confirmed: sts.enumStruct({
            index: sts.number(),
            tally: Type_718,
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
            tally: Type_718,
        }),
        DepositSlashed: sts.enumStruct({
            who: AccountId32,
            amount: sts.bigint(),
        }),
        Killed: sts.enumStruct({
            index: sts.number(),
            tally: Type_718,
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
            tally: Type_718,
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
            tally: Type_718,
        }),
    }
})

export const Type_718: sts.Type<Type_718> = sts.struct(() => {
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
        MemberExchanged: sts.enumStruct({
            who: AccountId32,
            newWho: AccountId32,
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
            tally: Type_718,
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
        TotalIssuanceForced: sts.enumStruct({
            old: sts.bigint(),
            new: sts.bigint(),
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
        MaxPermanentSlotsChanged: sts.enumStruct({
            slots: sts.number(),
        }),
        MaxTemporarySlotsChanged: sts.enumStruct({
            slots: sts.number(),
        }),
        PermanentSlotAssigned: Id,
        TemporarySlotAssigned: Id,
    }
})

export const Type_722: sts.Type<Type_722> = sts.closedEnum(() => {
    return {
        ApplyExtrinsic: sts.number(),
        Finalization: sts.unit(),
        Initialization: sts.unit(),
    }
})

export const Perbill = sts.number()

export const AccountId32 = sts.bytes()
