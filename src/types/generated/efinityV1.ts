import type {Result} from './support'

export type AccountId32 = Uint8Array

export type MultiAddress = MultiAddress_Id | MultiAddress_Index | MultiAddress_Raw | MultiAddress_Address32 | MultiAddress_Address20

export interface MultiAddress_Id {
  __kind: 'Id'
  value: AccountId32
}

export interface MultiAddress_Index {
  __kind: 'Index'
  value: null
}

export interface MultiAddress_Raw {
  __kind: 'Raw'
  value: Uint8Array
}

export interface MultiAddress_Address32 {
  __kind: 'Address32'
  value: Uint8Array
}

export interface MultiAddress_Address20 {
  __kind: 'Address20'
  value: Uint8Array
}

export interface AccountData {
  free: bigint
  reserved: bigint
  miscFrozen: bigint
  feeFrozen: bigint
}

export interface AccountInfo {
  nonce: number
  consumers: number
  providers: number
  sufficients: number
  data: AccountData
}

export interface EventRecord {
  phase: Phase
  event: Event
  topics: H256[]
}

export interface LastRuntimeUpgradeInfo {
  specVersion: number
  specName: string
}

export type Phase = Phase_ApplyExtrinsic | Phase_Finalization | Phase_Initialization

export interface Phase_ApplyExtrinsic {
  __kind: 'ApplyExtrinsic'
  value: number
}

export interface Phase_Finalization {
  __kind: 'Finalization'
}

export interface Phase_Initialization {
  __kind: 'Initialization'
}

export type Event = Event_System | Event_ParachainSystem | Event_Sudo | Event_Balances | Event_CollatorStaking | Event_Pools | Event_XcmpQueue | Event_PolkadotXcm | Event_CumulusXcm | Event_DmpQueue | Event_MultiAssets | Event_MultiAssetsOperatorExt | Event_Tags | Event_Claims

export interface Event_System {
  __kind: 'System'
  value: SystemEvent
}

export interface Event_ParachainSystem {
  __kind: 'ParachainSystem'
  value: ParachainSystemEvent
}

export interface Event_Sudo {
  __kind: 'Sudo'
  value: SudoEvent
}

export interface Event_Balances {
  __kind: 'Balances'
  value: BalancesEvent
}

export interface Event_CollatorStaking {
  __kind: 'CollatorStaking'
  value: CollatorStakingEvent
}

export interface Event_Pools {
  __kind: 'Pools'
  value: PoolsEvent
}

export interface Event_XcmpQueue {
  __kind: 'XcmpQueue'
  value: XcmpQueueEvent
}

export interface Event_PolkadotXcm {
  __kind: 'PolkadotXcm'
  value: PolkadotXcmEvent
}

export interface Event_CumulusXcm {
  __kind: 'CumulusXcm'
  value: CumulusXcmEvent
}

export interface Event_DmpQueue {
  __kind: 'DmpQueue'
  value: DmpQueueEvent
}

export interface Event_MultiAssets {
  __kind: 'MultiAssets'
  value: MultiAssetsEvent
}

export interface Event_MultiAssetsOperatorExt {
  __kind: 'MultiAssetsOperatorExt'
  value: MultiAssetsOperatorExtEvent
}

export interface Event_Tags {
  __kind: 'Tags'
  value: TagsEvent
}

export interface Event_Claims {
  __kind: 'Claims'
  value: ClaimsEvent
}

export type H256 = Uint8Array

/**
 * Event for the System pallet.
 */
export type SystemEvent = SystemEvent_ExtrinsicSuccess | SystemEvent_ExtrinsicFailed | SystemEvent_CodeUpdated | SystemEvent_NewAccount | SystemEvent_KilledAccount | SystemEvent_Remarked

/**
 * An extrinsic completed successfully. \[info\]
 */
export interface SystemEvent_ExtrinsicSuccess {
  __kind: 'ExtrinsicSuccess'
  value: DispatchInfo
}

/**
 * An extrinsic failed. \[error, info\]
 */
export interface SystemEvent_ExtrinsicFailed {
  __kind: 'ExtrinsicFailed'
  value: [DispatchError, DispatchInfo]
}

/**
 * `:code` was updated.
 */
export interface SystemEvent_CodeUpdated {
  __kind: 'CodeUpdated'
}

/**
 * A new \[account\] was created.
 */
export interface SystemEvent_NewAccount {
  __kind: 'NewAccount'
  value: AccountId32
}

/**
 * An \[account\] was reaped.
 */
export interface SystemEvent_KilledAccount {
  __kind: 'KilledAccount'
  value: AccountId32
}

/**
 * On on-chain remark happened. \[origin, remark_hash\]
 */
export interface SystemEvent_Remarked {
  __kind: 'Remarked'
  value: [AccountId32, H256]
}

/**
 * 
			The [event](https://substrate.dev/docs/en/knowledgebase/runtime/events) emitted
			by this pallet.
			
 */
export type ParachainSystemEvent = ParachainSystemEvent_ValidationFunctionStored | ParachainSystemEvent_ValidationFunctionApplied | ParachainSystemEvent_UpgradeAuthorized | ParachainSystemEvent_DownwardMessagesReceived | ParachainSystemEvent_DownwardMessagesProcessed

/**
 * The validation function has been scheduled to apply as of the contained relay chain
 * block number.
 */
export interface ParachainSystemEvent_ValidationFunctionStored {
  __kind: 'ValidationFunctionStored'
  value: number
}

/**
 * The validation function was applied as of the contained relay chain block number.
 */
export interface ParachainSystemEvent_ValidationFunctionApplied {
  __kind: 'ValidationFunctionApplied'
  value: number
}

/**
 * An upgrade has been authorized.
 */
export interface ParachainSystemEvent_UpgradeAuthorized {
  __kind: 'UpgradeAuthorized'
  value: H256
}

/**
 * Some downward messages have been received and will be processed.
 * \[ count \]
 */
export interface ParachainSystemEvent_DownwardMessagesReceived {
  __kind: 'DownwardMessagesReceived'
  value: number
}

/**
 * Downward messages were processed using the given weight.
 * \[ weight_used, result_mqc_head \]
 */
export interface ParachainSystemEvent_DownwardMessagesProcessed {
  __kind: 'DownwardMessagesProcessed'
  value: [bigint, H256]
}

/**
 * 
			The [event](https://substrate.dev/docs/en/knowledgebase/runtime/events) emitted
			by this pallet.
			
 */
export type SudoEvent = SudoEvent_Sudid | SudoEvent_KeyChanged | SudoEvent_SudoAsDone

/**
 * A sudo just took place. \[result\]
 */
export interface SudoEvent_Sudid {
  __kind: 'Sudid'
  value: Result<null, DispatchError>
}

/**
 * The \[sudoer\] just switched identity; the old key is supplied.
 */
export interface SudoEvent_KeyChanged {
  __kind: 'KeyChanged'
  value: AccountId32
}

/**
 * A sudo just took place. \[result\]
 */
export interface SudoEvent_SudoAsDone {
  __kind: 'SudoAsDone'
  value: Result<null, DispatchError>
}

/**
 * 
			The [event](https://substrate.dev/docs/en/knowledgebase/runtime/events) emitted
			by this pallet.
			
 */
export type BalancesEvent = BalancesEvent_Endowed | BalancesEvent_DustLost | BalancesEvent_Transfer | BalancesEvent_BalanceSet | BalancesEvent_Deposit | BalancesEvent_Reserved | BalancesEvent_Unreserved | BalancesEvent_ReserveRepatriated

/**
 * An account was created with some free balance. \[account, free_balance\]
 */
export interface BalancesEvent_Endowed {
  __kind: 'Endowed'
  value: [AccountId32, bigint]
}

/**
 * An account was removed whose balance was non-zero but below ExistentialDeposit,
 * resulting in an outright loss. \[account, balance\]
 */
export interface BalancesEvent_DustLost {
  __kind: 'DustLost'
  value: [AccountId32, bigint]
}

/**
 * Transfer succeeded. \[from, to, value\]
 */
export interface BalancesEvent_Transfer {
  __kind: 'Transfer'
  value: [AccountId32, AccountId32, bigint]
}

/**
 * A balance was set by root. \[who, free, reserved\]
 */
export interface BalancesEvent_BalanceSet {
  __kind: 'BalanceSet'
  value: [AccountId32, bigint, bigint]
}

/**
 * Some amount was deposited (e.g. for transaction fees). \[who, deposit\]
 */
export interface BalancesEvent_Deposit {
  __kind: 'Deposit'
  value: [AccountId32, bigint]
}

/**
 * Some balance was reserved (moved from free to reserved). \[who, value\]
 */
export interface BalancesEvent_Reserved {
  __kind: 'Reserved'
  value: [AccountId32, bigint]
}

/**
 * Some balance was unreserved (moved from reserved to free). \[who, value\]
 */
export interface BalancesEvent_Unreserved {
  __kind: 'Unreserved'
  value: [AccountId32, bigint]
}

/**
 * Some balance was moved from the reserve of the first account to the second account.
 * Final argument indicates the destination balance type.
 * \[from, to, balance, destination_status\]
 */
export interface BalancesEvent_ReserveRepatriated {
  __kind: 'ReserveRepatriated'
  value: [AccountId32, AccountId32, bigint, BalanceStatus]
}

/**
 * 
			The [event](https://substrate.dev/docs/en/knowledgebase/runtime/events) emitted
			by this pallet.
			
 */
export type CollatorStakingEvent = CollatorStakingEvent_RoundFinalized | CollatorStakingEvent_CandidateJoined | CollatorStakingEvent_CandidateRemoved | CollatorStakingEvent_Nominated | CollatorStakingEvent_NominationRemoved | CollatorStakingEvent_CollatorSelected

/**
 * A new round was finalized
 */
export interface CollatorStakingEvent_RoundFinalized {
  __kind: 'RoundFinalized'
  value: number
}

/**
 * A new candidate joined the list of candidates.
 */
export interface CollatorStakingEvent_CandidateJoined {
  __kind: 'CandidateJoined'
  value: [AccountId32, bigint]
}

/**
 * Candidate was removed.
 */
export interface CollatorStakingEvent_CandidateRemoved {
  __kind: 'CandidateRemoved'
  value: AccountId32
}

/**
 * A new nomination was registered for a specific candidate.
 */
export interface CollatorStakingEvent_Nominated {
  __kind: 'Nominated'
  value: [AccountId32, AccountId32, bigint]
}

/**
 * Nomination was removed.
 */
export interface CollatorStakingEvent_NominationRemoved {
  __kind: 'NominationRemoved'
  value: [AccountId32, AccountId32, bigint]
}

/**
 * A candidate has been selected to become a collator for the current round.
 */
export interface CollatorStakingEvent_CollatorSelected {
  __kind: 'CollatorSelected'
  value: AccountId32
}

/**
 * 
			The [event](https://substrate.dev/docs/en/knowledgebase/runtime/events) emitted
			by this pallet.
			
 */
export type PoolsEvent = PoolsEvent_PoolCreated | PoolsEvent_PoolOwnershipChanged | PoolsEvent_PoolFundTransferred

/**
 * A pool has been created.
 */
export interface PoolsEvent_PoolCreated {
  __kind: 'PoolCreated'
  value: [bigint, PoolType]
}

/**
 * A new owner has been assigned to an existing pool.
 */
export interface PoolsEvent_PoolOwnershipChanged {
  __kind: 'PoolOwnershipChanged'
  value: [bigint, PoolType, AccountId32, AccountId32]
}

/**
 * Funds have been transferred from pool.
 */
export interface PoolsEvent_PoolFundTransferred {
  __kind: 'PoolFundTransferred'
  value: [bigint, PoolType, AccountId32, bigint]
}

/**
 * 
			The [event](https://substrate.dev/docs/en/knowledgebase/runtime/events) emitted
			by this pallet.
			
 */
export type XcmpQueueEvent = XcmpQueueEvent_Success | XcmpQueueEvent_Fail | XcmpQueueEvent_BadVersion | XcmpQueueEvent_BadFormat | XcmpQueueEvent_UpwardMessageSent | XcmpQueueEvent_XcmpMessageSent

/**
 * Some XCM was executed ok.
 */
export interface XcmpQueueEvent_Success {
  __kind: 'Success'
  value: (H256 | undefined)
}

/**
 * Some XCM failed.
 */
export interface XcmpQueueEvent_Fail {
  __kind: 'Fail'
  value: [(H256 | undefined), V2Error]
}

/**
 * Bad XCM version used.
 */
export interface XcmpQueueEvent_BadVersion {
  __kind: 'BadVersion'
  value: (H256 | undefined)
}

/**
 * Bad XCM format used.
 */
export interface XcmpQueueEvent_BadFormat {
  __kind: 'BadFormat'
  value: (H256 | undefined)
}

/**
 * An upward message was sent to the relay chain.
 */
export interface XcmpQueueEvent_UpwardMessageSent {
  __kind: 'UpwardMessageSent'
  value: (H256 | undefined)
}

/**
 * An HRMP message was sent to a sibling parachain.
 */
export interface XcmpQueueEvent_XcmpMessageSent {
  __kind: 'XcmpMessageSent'
  value: (H256 | undefined)
}

/**
 * 
			The [event](https://substrate.dev/docs/en/knowledgebase/runtime/events) emitted
			by this pallet.
			
 */
export type PolkadotXcmEvent = PolkadotXcmEvent_Attempted | PolkadotXcmEvent_Sent | PolkadotXcmEvent_UnexpectedResponse | PolkadotXcmEvent_ResponseReady | PolkadotXcmEvent_Notified | PolkadotXcmEvent_NotifyOverweight | PolkadotXcmEvent_NotifyDispatchError | PolkadotXcmEvent_NotifyDecodeFailed | PolkadotXcmEvent_InvalidResponder | PolkadotXcmEvent_InvalidResponderVersion | PolkadotXcmEvent_ResponseTaken | PolkadotXcmEvent_AssetsTrapped | PolkadotXcmEvent_VersionChangeNotified | PolkadotXcmEvent_SupportedVersionChanged | PolkadotXcmEvent_NotifyTargetSendFail | PolkadotXcmEvent_NotifyTargetMigrationFail

/**
 * Execution of an XCM message was attempted.
 * 
 * \[ outcome \]
 */
export interface PolkadotXcmEvent_Attempted {
  __kind: 'Attempted'
  value: V2Outcome
}

/**
 * A XCM message was sent.
 * 
 * \[ origin, destination, message \]
 */
export interface PolkadotXcmEvent_Sent {
  __kind: 'Sent'
  value: [V1MultiLocation, V1MultiLocation, V2Instruction_54[]]
}

/**
 * Query response received which does not match a registered query. This may be because a
 * matching query was never registered, it may be because it is a duplicate response, or
 * because the query timed out.
 * 
 * \[ origin location, id \]
 */
export interface PolkadotXcmEvent_UnexpectedResponse {
  __kind: 'UnexpectedResponse'
  value: [V1MultiLocation, bigint]
}

/**
 * Query response has been received and is ready for taking with `take_response`. There is
 * no registered notification call.
 * 
 * \[ id, response \]
 */
export interface PolkadotXcmEvent_ResponseReady {
  __kind: 'ResponseReady'
  value: [bigint, V2Response]
}

/**
 * Query response has been received and query is removed. The registered notification has
 * been dispatched and executed successfully.
 * 
 * \[ id, pallet index, call index \]
 */
export interface PolkadotXcmEvent_Notified {
  __kind: 'Notified'
  value: [bigint, number, number]
}

/**
 * Query response has been received and query is removed. The registered notification could
 * not be dispatched because the dispatch weight is greater than the maximum weight
 * originally budgeted by this runtime for the query result.
 * 
 * \[ id, pallet index, call index, actual weight, max budgeted weight \]
 */
export interface PolkadotXcmEvent_NotifyOverweight {
  __kind: 'NotifyOverweight'
  value: [bigint, number, number, bigint, bigint]
}

/**
 * Query response has been received and query is removed. There was a general error with
 * dispatching the notification call.
 * 
 * \[ id, pallet index, call index \]
 */
export interface PolkadotXcmEvent_NotifyDispatchError {
  __kind: 'NotifyDispatchError'
  value: [bigint, number, number]
}

/**
 * Query response has been received and query is removed. The dispatch was unable to be
 * decoded into a `Call`; this might be due to dispatch function having a signature which
 * is not `(origin, QueryId, Response)`.
 * 
 * \[ id, pallet index, call index \]
 */
export interface PolkadotXcmEvent_NotifyDecodeFailed {
  __kind: 'NotifyDecodeFailed'
  value: [bigint, number, number]
}

/**
 * Expected query response has been received but the origin location of the response does
 * not match that expected. The query remains registered for a later, valid, response to
 * be received and acted upon.
 * 
 * \[ origin location, id, expected location \]
 */
export interface PolkadotXcmEvent_InvalidResponder {
  __kind: 'InvalidResponder'
  value: [V1MultiLocation, bigint, (V1MultiLocation | undefined)]
}

/**
 * Expected query response has been received but the expected origin location placed in
 * storate by this runtime previously cannot be decoded. The query remains registered.
 * 
 * This is unexpected (since a location placed in storage in a previously executing
 * runtime should be readable prior to query timeout) and dangerous since the possibly
 * valid response will be dropped. Manual governance intervention is probably going to be
 * needed.
 * 
 * \[ origin location, id \]
 */
export interface PolkadotXcmEvent_InvalidResponderVersion {
  __kind: 'InvalidResponderVersion'
  value: [V1MultiLocation, bigint]
}

/**
 * Received query response has been read and removed.
 * 
 * \[ id \]
 */
export interface PolkadotXcmEvent_ResponseTaken {
  __kind: 'ResponseTaken'
  value: bigint
}

/**
 * Some assets have been placed in an asset trap.
 * 
 * \[ hash, origin, assets \]
 */
export interface PolkadotXcmEvent_AssetsTrapped {
  __kind: 'AssetsTrapped'
  value: [H256, V1MultiLocation, VersionedMultiAssets]
}

/**
 * An XCM version change notification message has been attempted to be sent.
 * 
 * \[ destination, result \]
 */
export interface PolkadotXcmEvent_VersionChangeNotified {
  __kind: 'VersionChangeNotified'
  value: [V1MultiLocation, number]
}

/**
 * The supported version of a location has been changed. This might be through an
 * automatic notification or a manual intervention.
 * 
 * \[ location, XCM version \]
 */
export interface PolkadotXcmEvent_SupportedVersionChanged {
  __kind: 'SupportedVersionChanged'
  value: [V1MultiLocation, number]
}

/**
 * A given location which had a version change subscription was dropped owing to an error
 * sending the notification to it.
 * 
 * \[ location, query ID, error \]
 */
export interface PolkadotXcmEvent_NotifyTargetSendFail {
  __kind: 'NotifyTargetSendFail'
  value: [V1MultiLocation, bigint, V2Error]
}

/**
 * A given location which had a version change subscription was dropped owing to an error
 * migrating the location to our new XCM format.
 * 
 * \[ location, query ID \]
 */
export interface PolkadotXcmEvent_NotifyTargetMigrationFail {
  __kind: 'NotifyTargetMigrationFail'
  value: [VersionedMultiLocation, bigint]
}

/**
 * 
			The [event](https://substrate.dev/docs/en/knowledgebase/runtime/events) emitted
			by this pallet.
			
 */
export type CumulusXcmEvent = CumulusXcmEvent_InvalidFormat | CumulusXcmEvent_UnsupportedVersion | CumulusXcmEvent_ExecutedDownward

/**
 * Downward message is invalid XCM.
 * \[ id \]
 */
export interface CumulusXcmEvent_InvalidFormat {
  __kind: 'InvalidFormat'
  value: Uint8Array
}

/**
 * Downward message is unsupported version of XCM.
 * \[ id \]
 */
export interface CumulusXcmEvent_UnsupportedVersion {
  __kind: 'UnsupportedVersion'
  value: Uint8Array
}

/**
 * Downward message executed with the given outcome.
 * \[ id, outcome \]
 */
export interface CumulusXcmEvent_ExecutedDownward {
  __kind: 'ExecutedDownward'
  value: [Uint8Array, V2Outcome]
}

/**
 * 
			The [event](https://substrate.dev/docs/en/knowledgebase/runtime/events) emitted
			by this pallet.
			
 */
export type DmpQueueEvent = DmpQueueEvent_InvalidFormat | DmpQueueEvent_UnsupportedVersion | DmpQueueEvent_ExecutedDownward | DmpQueueEvent_WeightExhausted | DmpQueueEvent_OverweightEnqueued | DmpQueueEvent_OverweightServiced

/**
 * Downward message is invalid XCM.
 * \[ id \]
 */
export interface DmpQueueEvent_InvalidFormat {
  __kind: 'InvalidFormat'
  value: Uint8Array
}

/**
 * Downward message is unsupported version of XCM.
 * \[ id \]
 */
export interface DmpQueueEvent_UnsupportedVersion {
  __kind: 'UnsupportedVersion'
  value: Uint8Array
}

/**
 * Downward message executed with the given outcome.
 * \[ id, outcome \]
 */
export interface DmpQueueEvent_ExecutedDownward {
  __kind: 'ExecutedDownward'
  value: [Uint8Array, V2Outcome]
}

/**
 * The weight limit for handling downward messages was reached.
 * \[ id, remaining, required \]
 */
export interface DmpQueueEvent_WeightExhausted {
  __kind: 'WeightExhausted'
  value: [Uint8Array, bigint, bigint]
}

/**
 * Downward message is overweight and was placed in the overweight queue.
 * \[ id, index, required \]
 */
export interface DmpQueueEvent_OverweightEnqueued {
  __kind: 'OverweightEnqueued'
  value: [Uint8Array, bigint, bigint]
}

/**
 * Downward message from the overweight queue was executed.
 * \[ index, used \]
 */
export interface DmpQueueEvent_OverweightServiced {
  __kind: 'OverweightServiced'
  value: [bigint, bigint]
}

/**
 * 
			The [event](https://substrate.dev/docs/en/knowledgebase/runtime/events) emitted
			by this pallet.
			
 */
export type MultiAssetsEvent = MultiAssetsEvent_AssetCreated | MultiAssetsEvent_Minted | MultiAssetsEvent_TokensMinted | MultiAssetsEvent_TransferredSingle | MultiAssetsEvent_TransferredSingleChunk | MultiAssetsEvent_TransferredBatch | MultiAssetsEvent_Burned | MultiAssetsEvent_TokensBurned | MultiAssetsEvent_AssetAttributeSet | MultiAssetsEvent_AssetAttributeCleared | MultiAssetsEvent_TokenAttributeSet | MultiAssetsEvent_TokenAttributeCleared | MultiAssetsEvent_OwnershipTransferred

/**
 * A new asset was created by `owner`. \[class_id, owner\]
 */
export interface MultiAssetsEvent_AssetCreated {
  __kind: 'AssetCreated'
  value: [UUAID, AccountId32]
}

/**
 * The balance of the asset was minted by owner. \[owner, asset, amount\]
 */
export interface MultiAssetsEvent_Minted {
  __kind: 'Minted'
  value: [AccountId32, UUAID, bigint]
}

/**
 * New tokens were minted on asset. \[owner, asset, from_token, to_token \]
 */
export interface MultiAssetsEvent_TokensMinted {
  __kind: 'TokensMinted'
  value: [AccountId32, UUAID, number, number]
}

/**
 * The given amount of `token` from `asset` was transferred. \[from, to, asset, token, amount\]
 */
export interface MultiAssetsEvent_TransferredSingle {
  __kind: 'TransferredSingle'
  value: [AccountId32, AccountId32, UUAID, (number | undefined), bigint]
}

/**
 * Tokens from `chunk` of `asset` were transfered from `source` to `destination`.
 * \[source, destination, asset, chunk\]
 */
export interface MultiAssetsEvent_TransferredSingleChunk {
  __kind: 'TransferredSingleChunk'
  value: [AccountId32, AccountId32, UUAID, Chunk]
}

/**
 * The given `recipients` were transfer from `from` account. \[from, asset, recipients\]
 */
export interface MultiAssetsEvent_TransferredBatch {
  __kind: 'TransferredBatch'
  value: [AccountId32, UUAID, Recipient[]]
}

/**
 * An `asset` was destroyed. \[ asset, amount, owner \]
 */
export interface MultiAssetsEvent_Burned {
  __kind: 'Burned'
  value: [AccountId32, UUAID, bigint]
}

/**
 * `tokens` of `asset` from `account` were burned. \[ account, asset, tokens \]
 */
export interface MultiAssetsEvent_TokensBurned {
  __kind: 'TokensBurned'
  value: [AccountId32, UUAID, Chunk]
}

/**
 * New asset attribute has been set for an asset. \[asset_id, key, value\]
 */
export interface MultiAssetsEvent_AssetAttributeSet {
  __kind: 'AssetAttributeSet'
  value: [UUAID, Uint8Array, Uint8Array]
}

/**
 * Asset attribute has been cleared for an asset. \[asset_id, key\]
 */
export interface MultiAssetsEvent_AssetAttributeCleared {
  __kind: 'AssetAttributeCleared'
  value: [UUAID, Uint8Array]
}

/**
 * New token attribute has been set for an asset. \[asset_id, token, key, value\]
 */
export interface MultiAssetsEvent_TokenAttributeSet {
  __kind: 'TokenAttributeSet'
  value: [UUAID, number, Uint8Array, Uint8Array]
}

/**
 * Token attribute has been cleared for an asset. \[asset_id, token, key\]
 */
export interface MultiAssetsEvent_TokenAttributeCleared {
  __kind: 'TokenAttributeCleared'
  value: [UUAID, number, Uint8Array]
}

/**
 * Ownership of the given `asset` was transferred. \[from, to, asset\]
 */
export interface MultiAssetsEvent_OwnershipTransferred {
  __kind: 'OwnershipTransferred'
  value: [AccountId32, AccountId32, UUAID]
}

/**
 * The Event for this pallet
 */
export type MultiAssetsOperatorExtEvent = MultiAssetsOperatorExtEvent_Approved | MultiAssetsOperatorExtEvent_Unapproved

/**
 * Asset(s) were approved. If `asset` and `token` are None, it applies to all.
 */
export interface MultiAssetsOperatorExtEvent_Approved {
  __kind: 'Approved'
  /**
   * The account that owns the asset(s)
   */
  owner: AccountId32
  /**
   * The account that was approved to operate
   */
  operator: AccountId32
  /**
   * The asset that was approved
   */
  asset: (UUAID | undefined)
  /**
   * The token that was approved
   */
  token: (number | undefined)
  /**
   * The amount approved for
   */
  amount: (bigint | undefined)
  /**
   * The expiration of the approval
   */
  expiration: Expiration
}

/**
 * Asset(s) were unapproved. If `asset` and `token` are None, it applies to all.
 */
export interface MultiAssetsOperatorExtEvent_Unapproved {
  __kind: 'Unapproved'
  /**
   * The account that owns the asset(s)
   */
  owner: AccountId32
  /**
   * The account that was unapproved to operate
   */
  operator: AccountId32
  /**
   * The asset that was unapproved
   */
  asset: (UUAID | undefined)
  /**
   * The token that was unapproved
   */
  token: (number | undefined)
}

/**
 * Event for this pallet
 */
export type TagsEvent = TagsEvent_TagCreated | TagsEvent_AssetTagged | TagsEvent_AssetUntagged

/**
 * A new `Tag` with `id` was created by `owner`
 */
export interface TagsEvent_TagCreated {
  __kind: 'TagCreated'
  id: bigint
  owner: AccountId32
}

/**
 * `asset_id` was tagged with `tag_id`
 */
export interface TagsEvent_AssetTagged {
  __kind: 'AssetTagged'
  assetId: UUAID
  tagId: bigint
}

/**
 * `asset_id` was untagged with `tag_id`
 */
export interface TagsEvent_AssetUntagged {
  __kind: 'AssetUntagged'
  assetId: UUAID
  tagId: bigint
}

/**
 * 
			The [event](https://substrate.dev/docs/en/knowledgebase/runtime/events) emitted
			by this pallet.
			
 */
export type ClaimsEvent = ClaimsEvent_Claimed

/**
 * Someone claimed some EFIs. `[who, ethereum_address, amount]`
 */
export interface ClaimsEvent_Claimed {
  __kind: 'Claimed'
  value: [AccountId32, H160, bigint]
}

export interface DispatchInfo {
  weight: bigint
  class: DispatchClass
  paysFee: Pays
}

export type DispatchError = DispatchError_Other | DispatchError_CannotLookup | DispatchError_BadOrigin | DispatchError_Module | DispatchError_ConsumerRemaining | DispatchError_NoProviders | DispatchError_Token | DispatchError_Arithmetic

export interface DispatchError_Other {
  __kind: 'Other'
}

export interface DispatchError_CannotLookup {
  __kind: 'CannotLookup'
}

export interface DispatchError_BadOrigin {
  __kind: 'BadOrigin'
}

export interface DispatchError_Module {
  __kind: 'Module'
  index: number
  error: number
}

export interface DispatchError_ConsumerRemaining {
  __kind: 'ConsumerRemaining'
}

export interface DispatchError_NoProviders {
  __kind: 'NoProviders'
}

export interface DispatchError_Token {
  __kind: 'Token'
  value: TokenError
}

export interface DispatchError_Arithmetic {
  __kind: 'Arithmetic'
  value: ArithmeticError
}

export type BalanceStatus = BalanceStatus_Free | BalanceStatus_Reserved

export interface BalanceStatus_Free {
  __kind: 'Free'
}

export interface BalanceStatus_Reserved {
  __kind: 'Reserved'
}

export type PoolType = PoolType_Collator | PoolType_Fuel | PoolType_Community | PoolType_PriceDiscovery

export interface PoolType_Collator {
  __kind: 'Collator'
}

export interface PoolType_Fuel {
  __kind: 'Fuel'
}

export interface PoolType_Community {
  __kind: 'Community'
}

export interface PoolType_PriceDiscovery {
  __kind: 'PriceDiscovery'
}

export type V2Error = V2Error_Overflow | V2Error_Unimplemented | V2Error_UntrustedReserveLocation | V2Error_UntrustedTeleportLocation | V2Error_MultiLocationFull | V2Error_MultiLocationNotInvertible | V2Error_BadOrigin | V2Error_InvalidLocation | V2Error_AssetNotFound | V2Error_FailedToTransactAsset | V2Error_NotWithdrawable | V2Error_LocationCannotHold | V2Error_ExceedsMaxMessageSize | V2Error_DestinationUnsupported | V2Error_Transport | V2Error_Unroutable | V2Error_UnknownClaim | V2Error_FailedToDecode | V2Error_TooMuchWeightRequired | V2Error_NotHoldingFees | V2Error_TooExpensive | V2Error_Trap | V2Error_UnhandledXcmVersion | V2Error_WeightLimitReached | V2Error_Barrier | V2Error_WeightNotComputable

export interface V2Error_Overflow {
  __kind: 'Overflow'
}

export interface V2Error_Unimplemented {
  __kind: 'Unimplemented'
}

export interface V2Error_UntrustedReserveLocation {
  __kind: 'UntrustedReserveLocation'
}

export interface V2Error_UntrustedTeleportLocation {
  __kind: 'UntrustedTeleportLocation'
}

export interface V2Error_MultiLocationFull {
  __kind: 'MultiLocationFull'
}

export interface V2Error_MultiLocationNotInvertible {
  __kind: 'MultiLocationNotInvertible'
}

export interface V2Error_BadOrigin {
  __kind: 'BadOrigin'
}

export interface V2Error_InvalidLocation {
  __kind: 'InvalidLocation'
}

export interface V2Error_AssetNotFound {
  __kind: 'AssetNotFound'
}

export interface V2Error_FailedToTransactAsset {
  __kind: 'FailedToTransactAsset'
}

export interface V2Error_NotWithdrawable {
  __kind: 'NotWithdrawable'
}

export interface V2Error_LocationCannotHold {
  __kind: 'LocationCannotHold'
}

export interface V2Error_ExceedsMaxMessageSize {
  __kind: 'ExceedsMaxMessageSize'
}

export interface V2Error_DestinationUnsupported {
  __kind: 'DestinationUnsupported'
}

export interface V2Error_Transport {
  __kind: 'Transport'
}

export interface V2Error_Unroutable {
  __kind: 'Unroutable'
}

export interface V2Error_UnknownClaim {
  __kind: 'UnknownClaim'
}

export interface V2Error_FailedToDecode {
  __kind: 'FailedToDecode'
}

export interface V2Error_TooMuchWeightRequired {
  __kind: 'TooMuchWeightRequired'
}

export interface V2Error_NotHoldingFees {
  __kind: 'NotHoldingFees'
}

export interface V2Error_TooExpensive {
  __kind: 'TooExpensive'
}

export interface V2Error_Trap {
  __kind: 'Trap'
  value: bigint
}

export interface V2Error_UnhandledXcmVersion {
  __kind: 'UnhandledXcmVersion'
}

export interface V2Error_WeightLimitReached {
  __kind: 'WeightLimitReached'
  value: bigint
}

export interface V2Error_Barrier {
  __kind: 'Barrier'
}

export interface V2Error_WeightNotComputable {
  __kind: 'WeightNotComputable'
}

export type V2Outcome = V2Outcome_Complete | V2Outcome_Incomplete | V2Outcome_Error

export interface V2Outcome_Complete {
  __kind: 'Complete'
  value: bigint
}

export interface V2Outcome_Incomplete {
  __kind: 'Incomplete'
  value: [bigint, V2Error]
}

export interface V2Outcome_Error {
  __kind: 'Error'
  value: V2Error
}

export interface V1MultiLocation {
  parents: number
  interior: V1Junctions
}

export type V2Instruction_54 = V2Instruction_54_WithdrawAsset | V2Instruction_54_ReserveAssetDeposited | V2Instruction_54_ReceiveTeleportedAsset | V2Instruction_54_QueryResponse | V2Instruction_54_TransferAsset | V2Instruction_54_TransferReserveAsset | V2Instruction_54_Transact | V2Instruction_54_HrmpNewChannelOpenRequest | V2Instruction_54_HrmpChannelAccepted | V2Instruction_54_HrmpChannelClosing | V2Instruction_54_ClearOrigin | V2Instruction_54_DescendOrigin | V2Instruction_54_ReportError | V2Instruction_54_DepositAsset | V2Instruction_54_DepositReserveAsset | V2Instruction_54_ExchangeAsset | V2Instruction_54_InitiateReserveWithdraw | V2Instruction_54_InitiateTeleport | V2Instruction_54_QueryHolding | V2Instruction_54_BuyExecution | V2Instruction_54_RefundSurplus | V2Instruction_54_SetErrorHandler | V2Instruction_54_SetAppendix | V2Instruction_54_ClearError | V2Instruction_54_ClaimAsset | V2Instruction_54_Trap | V2Instruction_54_SubscribeVersion | V2Instruction_54_UnsubscribeVersion

export interface V2Instruction_54_WithdrawAsset {
  __kind: 'WithdrawAsset'
  value: V1MultiAssets
}

export interface V2Instruction_54_ReserveAssetDeposited {
  __kind: 'ReserveAssetDeposited'
  value: V1MultiAssets
}

export interface V2Instruction_54_ReceiveTeleportedAsset {
  __kind: 'ReceiveTeleportedAsset'
  value: V1MultiAssets
}

export interface V2Instruction_54_QueryResponse {
  __kind: 'QueryResponse'
  queryId: bigint
  response: V2Response
  maxWeight: bigint
}

export interface V2Instruction_54_TransferAsset {
  __kind: 'TransferAsset'
  assets: V1MultiAssets
  beneficiary: V1MultiLocation
}

export interface V2Instruction_54_TransferReserveAsset {
  __kind: 'TransferReserveAsset'
  assets: V1MultiAssets
  dest: V1MultiLocation
  xcm: V2Instruction_54[]
}

export interface V2Instruction_54_Transact {
  __kind: 'Transact'
  originType: V0OriginKind
  requireWeightAtMost: bigint
  call: DoubleEncoded
}

export interface V2Instruction_54_HrmpNewChannelOpenRequest {
  __kind: 'HrmpNewChannelOpenRequest'
  sender: number
  maxMessageSize: number
  maxCapacity: number
}

export interface V2Instruction_54_HrmpChannelAccepted {
  __kind: 'HrmpChannelAccepted'
  recipient: number
}

export interface V2Instruction_54_HrmpChannelClosing {
  __kind: 'HrmpChannelClosing'
  initiator: number
  sender: number
  recipient: number
}

export interface V2Instruction_54_ClearOrigin {
  __kind: 'ClearOrigin'
}

export interface V2Instruction_54_DescendOrigin {
  __kind: 'DescendOrigin'
  value: V1Junctions
}

export interface V2Instruction_54_ReportError {
  __kind: 'ReportError'
  queryId: bigint
  dest: V1MultiLocation
  maxResponseWeight: bigint
}

export interface V2Instruction_54_DepositAsset {
  __kind: 'DepositAsset'
  assets: V1MultiAssetFilter
  maxAssets: number
  beneficiary: V1MultiLocation
}

export interface V2Instruction_54_DepositReserveAsset {
  __kind: 'DepositReserveAsset'
  assets: V1MultiAssetFilter
  maxAssets: number
  dest: V1MultiLocation
  xcm: V2Instruction_54[]
}

export interface V2Instruction_54_ExchangeAsset {
  __kind: 'ExchangeAsset'
  give: V1MultiAssetFilter
  receive: V1MultiAssets
}

export interface V2Instruction_54_InitiateReserveWithdraw {
  __kind: 'InitiateReserveWithdraw'
  assets: V1MultiAssetFilter
  reserve: V1MultiLocation
  xcm: V2Instruction_54[]
}

export interface V2Instruction_54_InitiateTeleport {
  __kind: 'InitiateTeleport'
  assets: V1MultiAssetFilter
  dest: V1MultiLocation
  xcm: V2Instruction_54[]
}

export interface V2Instruction_54_QueryHolding {
  __kind: 'QueryHolding'
  queryId: bigint
  dest: V1MultiLocation
  assets: V1MultiAssetFilter
  maxResponseWeight: bigint
}

export interface V2Instruction_54_BuyExecution {
  __kind: 'BuyExecution'
  fees: V1MultiAsset
  weightLimit: V2WeightLimit
}

export interface V2Instruction_54_RefundSurplus {
  __kind: 'RefundSurplus'
}

export interface V2Instruction_54_SetErrorHandler {
  __kind: 'SetErrorHandler'
  value: V2Instruction_54[]
}

export interface V2Instruction_54_SetAppendix {
  __kind: 'SetAppendix'
  value: V2Instruction_54[]
}

export interface V2Instruction_54_ClearError {
  __kind: 'ClearError'
}

export interface V2Instruction_54_ClaimAsset {
  __kind: 'ClaimAsset'
  assets: V1MultiAssets
  ticket: V1MultiLocation
}

export interface V2Instruction_54_Trap {
  __kind: 'Trap'
  value: bigint
}

export interface V2Instruction_54_SubscribeVersion {
  __kind: 'SubscribeVersion'
  queryId: bigint
  maxResponseWeight: bigint
}

export interface V2Instruction_54_UnsubscribeVersion {
  __kind: 'UnsubscribeVersion'
}

export type V2Response = V2Response_Null | V2Response_Assets | V2Response_ExecutionResult | V2Response_Version

export interface V2Response_Null {
  __kind: 'Null'
}

export interface V2Response_Assets {
  __kind: 'Assets'
  value: V1MultiAssets
}

export interface V2Response_ExecutionResult {
  __kind: 'ExecutionResult'
  value: ([number, V2Error] | undefined)
}

export interface V2Response_Version {
  __kind: 'Version'
  value: number
}

export type VersionedMultiAssets = VersionedMultiAssets_V0 | VersionedMultiAssets_V1

export interface VersionedMultiAssets_V0 {
  __kind: 'V0'
  value: V0MultiAsset[]
}

export interface VersionedMultiAssets_V1 {
  __kind: 'V1'
  value: V1MultiAssets
}

export type VersionedMultiLocation = VersionedMultiLocation_V0 | VersionedMultiLocation_V1

export interface VersionedMultiLocation_V0 {
  __kind: 'V0'
  value: V0MultiLocation
}

export interface VersionedMultiLocation_V1 {
  __kind: 'V1'
  value: V1MultiLocation
}

export type UUAID = bigint

export interface Range {
  start: number
  end: number
}

export type Chunk = Range[]

export interface Recipient {
  to: AccountId32
  value: TypedBalanceWithChunk
}

export type Expiration = Expiration_Never | Expiration_At

export interface Expiration_Never {
  __kind: 'Never'
}

export interface Expiration_At {
  __kind: 'At'
  value: number
}

export type H160 = Uint8Array

export type DispatchClass = DispatchClass_Normal | DispatchClass_Operational | DispatchClass_Mandatory

export interface DispatchClass_Normal {
  __kind: 'Normal'
}

export interface DispatchClass_Operational {
  __kind: 'Operational'
}

export interface DispatchClass_Mandatory {
  __kind: 'Mandatory'
}

export type Pays = Pays_Yes | Pays_No

export interface Pays_Yes {
  __kind: 'Yes'
}

export interface Pays_No {
  __kind: 'No'
}

export type TokenError = TokenError_NoFunds | TokenError_WouldDie | TokenError_BelowMinimum | TokenError_CannotCreate | TokenError_UnknownAsset | TokenError_Frozen | TokenError_Unsupported

export interface TokenError_NoFunds {
  __kind: 'NoFunds'
}

export interface TokenError_WouldDie {
  __kind: 'WouldDie'
}

export interface TokenError_BelowMinimum {
  __kind: 'BelowMinimum'
}

export interface TokenError_CannotCreate {
  __kind: 'CannotCreate'
}

export interface TokenError_UnknownAsset {
  __kind: 'UnknownAsset'
}

export interface TokenError_Frozen {
  __kind: 'Frozen'
}

export interface TokenError_Unsupported {
  __kind: 'Unsupported'
}

export type ArithmeticError = ArithmeticError_Underflow | ArithmeticError_Overflow | ArithmeticError_DivisionByZero

export interface ArithmeticError_Underflow {
  __kind: 'Underflow'
}

export interface ArithmeticError_Overflow {
  __kind: 'Overflow'
}

export interface ArithmeticError_DivisionByZero {
  __kind: 'DivisionByZero'
}

export type V1Junctions = V1Junctions_Here | V1Junctions_X1 | V1Junctions_X2 | V1Junctions_X3 | V1Junctions_X4 | V1Junctions_X5 | V1Junctions_X6 | V1Junctions_X7 | V1Junctions_X8

export interface V1Junctions_Here {
  __kind: 'Here'
}

export interface V1Junctions_X1 {
  __kind: 'X1'
  value: V1Junction
}

export interface V1Junctions_X2 {
  __kind: 'X2'
  value: [V1Junction, V1Junction]
}

export interface V1Junctions_X3 {
  __kind: 'X3'
  value: [V1Junction, V1Junction, V1Junction]
}

export interface V1Junctions_X4 {
  __kind: 'X4'
  value: [V1Junction, V1Junction, V1Junction, V1Junction]
}

export interface V1Junctions_X5 {
  __kind: 'X5'
  value: [V1Junction, V1Junction, V1Junction, V1Junction, V1Junction]
}

export interface V1Junctions_X6 {
  __kind: 'X6'
  value: [V1Junction, V1Junction, V1Junction, V1Junction, V1Junction, V1Junction]
}

export interface V1Junctions_X7 {
  __kind: 'X7'
  value: [V1Junction, V1Junction, V1Junction, V1Junction, V1Junction, V1Junction, V1Junction]
}

export interface V1Junctions_X8 {
  __kind: 'X8'
  value: [V1Junction, V1Junction, V1Junction, V1Junction, V1Junction, V1Junction, V1Junction, V1Junction]
}

export interface V1MultiAsset {
  id: V1AssetId
  fun: V1Fungibility
}

export type V1MultiAssets = V1MultiAsset[]

export type V0OriginKind = V0OriginKind_Native | V0OriginKind_SovereignAccount | V0OriginKind_Superuser | V0OriginKind_Xcm

export interface V0OriginKind_Native {
  __kind: 'Native'
}

export interface V0OriginKind_SovereignAccount {
  __kind: 'SovereignAccount'
}

export interface V0OriginKind_Superuser {
  __kind: 'Superuser'
}

export interface V0OriginKind_Xcm {
  __kind: 'Xcm'
}

export interface DoubleEncoded {
  encoded: Uint8Array
}

export type V1MultiAssetFilter = V1MultiAssetFilter_Definite | V1MultiAssetFilter_Wild

export interface V1MultiAssetFilter_Definite {
  __kind: 'Definite'
  value: V1MultiAssets
}

export interface V1MultiAssetFilter_Wild {
  __kind: 'Wild'
  value: V1WildMultiAsset
}

export type V2WeightLimit = V2WeightLimit_Unlimited | V2WeightLimit_Limited

export interface V2WeightLimit_Unlimited {
  __kind: 'Unlimited'
}

export interface V2WeightLimit_Limited {
  __kind: 'Limited'
  value: bigint
}

export type V0MultiAsset = V0MultiAsset_None | V0MultiAsset_All | V0MultiAsset_AllFungible | V0MultiAsset_AllNonFungible | V0MultiAsset_AllAbstractFungible | V0MultiAsset_AllAbstractNonFungible | V0MultiAsset_AllConcreteFungible | V0MultiAsset_AllConcreteNonFungible | V0MultiAsset_AbstractFungible | V0MultiAsset_AbstractNonFungible | V0MultiAsset_ConcreteFungible | V0MultiAsset_ConcreteNonFungible

export interface V0MultiAsset_None {
  __kind: 'None'
}

export interface V0MultiAsset_All {
  __kind: 'All'
}

export interface V0MultiAsset_AllFungible {
  __kind: 'AllFungible'
}

export interface V0MultiAsset_AllNonFungible {
  __kind: 'AllNonFungible'
}

export interface V0MultiAsset_AllAbstractFungible {
  __kind: 'AllAbstractFungible'
  id: Uint8Array
}

export interface V0MultiAsset_AllAbstractNonFungible {
  __kind: 'AllAbstractNonFungible'
  class: Uint8Array
}

export interface V0MultiAsset_AllConcreteFungible {
  __kind: 'AllConcreteFungible'
  id: V0MultiLocation
}

export interface V0MultiAsset_AllConcreteNonFungible {
  __kind: 'AllConcreteNonFungible'
  class: V0MultiLocation
}

export interface V0MultiAsset_AbstractFungible {
  __kind: 'AbstractFungible'
  id: Uint8Array
  amount: bigint
}

export interface V0MultiAsset_AbstractNonFungible {
  __kind: 'AbstractNonFungible'
  class: Uint8Array
  instance: V1AssetInstance
}

export interface V0MultiAsset_ConcreteFungible {
  __kind: 'ConcreteFungible'
  id: V0MultiLocation
  amount: bigint
}

export interface V0MultiAsset_ConcreteNonFungible {
  __kind: 'ConcreteNonFungible'
  class: V0MultiLocation
  instance: V1AssetInstance
}

export type V0MultiLocation = V0MultiLocation_Null | V0MultiLocation_X1 | V0MultiLocation_X2 | V0MultiLocation_X3 | V0MultiLocation_X4 | V0MultiLocation_X5 | V0MultiLocation_X6 | V0MultiLocation_X7 | V0MultiLocation_X8

export interface V0MultiLocation_Null {
  __kind: 'Null'
}

export interface V0MultiLocation_X1 {
  __kind: 'X1'
  value: V0Junction
}

export interface V0MultiLocation_X2 {
  __kind: 'X2'
  value: [V0Junction, V0Junction]
}

export interface V0MultiLocation_X3 {
  __kind: 'X3'
  value: [V0Junction, V0Junction, V0Junction]
}

export interface V0MultiLocation_X4 {
  __kind: 'X4'
  value: [V0Junction, V0Junction, V0Junction, V0Junction]
}

export interface V0MultiLocation_X5 {
  __kind: 'X5'
  value: [V0Junction, V0Junction, V0Junction, V0Junction, V0Junction]
}

export interface V0MultiLocation_X6 {
  __kind: 'X6'
  value: [V0Junction, V0Junction, V0Junction, V0Junction, V0Junction, V0Junction]
}

export interface V0MultiLocation_X7 {
  __kind: 'X7'
  value: [V0Junction, V0Junction, V0Junction, V0Junction, V0Junction, V0Junction, V0Junction]
}

export interface V0MultiLocation_X8 {
  __kind: 'X8'
  value: [V0Junction, V0Junction, V0Junction, V0Junction, V0Junction, V0Junction, V0Junction, V0Junction]
}

export type TypedBalanceWithChunk = TypedBalanceWithChunk_Fungible | TypedBalanceWithChunk_NonFungible

export interface TypedBalanceWithChunk_Fungible {
  __kind: 'Fungible'
  value: bigint
}

export interface TypedBalanceWithChunk_NonFungible {
  __kind: 'NonFungible'
  value: Chunk
}

export type V1Junction = V1Junction_Parachain | V1Junction_AccountId32 | V1Junction_AccountIndex64 | V1Junction_AccountKey20 | V1Junction_PalletInstance | V1Junction_GeneralIndex | V1Junction_GeneralKey | V1Junction_OnlyChild | V1Junction_Plurality

export interface V1Junction_Parachain {
  __kind: 'Parachain'
  value: number
}

export interface V1Junction_AccountId32 {
  __kind: 'AccountId32'
  network: V0NetworkId
  id: Uint8Array
}

export interface V1Junction_AccountIndex64 {
  __kind: 'AccountIndex64'
  network: V0NetworkId
  index: bigint
}

export interface V1Junction_AccountKey20 {
  __kind: 'AccountKey20'
  network: V0NetworkId
  key: Uint8Array
}

export interface V1Junction_PalletInstance {
  __kind: 'PalletInstance'
  value: number
}

export interface V1Junction_GeneralIndex {
  __kind: 'GeneralIndex'
  value: bigint
}

export interface V1Junction_GeneralKey {
  __kind: 'GeneralKey'
  value: Uint8Array
}

export interface V1Junction_OnlyChild {
  __kind: 'OnlyChild'
}

export interface V1Junction_Plurality {
  __kind: 'Plurality'
  id: V0BodyId
  part: V0BodyPart
}

export type V1AssetId = V1AssetId_Concrete | V1AssetId_Abstract

export interface V1AssetId_Concrete {
  __kind: 'Concrete'
  value: V1MultiLocation
}

export interface V1AssetId_Abstract {
  __kind: 'Abstract'
  value: Uint8Array
}

export type V1Fungibility = V1Fungibility_Fungible | V1Fungibility_NonFungible

export interface V1Fungibility_Fungible {
  __kind: 'Fungible'
  value: bigint
}

export interface V1Fungibility_NonFungible {
  __kind: 'NonFungible'
  value: V1AssetInstance
}

export type V1WildMultiAsset = V1WildMultiAsset_All | V1WildMultiAsset_AllOf

export interface V1WildMultiAsset_All {
  __kind: 'All'
}

export interface V1WildMultiAsset_AllOf {
  __kind: 'AllOf'
  id: V1AssetId
  fun: V1WildFungibility
}

export type V1AssetInstance = V1AssetInstance_Undefined | V1AssetInstance_Index | V1AssetInstance_Array4 | V1AssetInstance_Array8 | V1AssetInstance_Array16 | V1AssetInstance_Array32 | V1AssetInstance_Blob

export interface V1AssetInstance_Undefined {
  __kind: 'Undefined'
}

export interface V1AssetInstance_Index {
  __kind: 'Index'
  value: bigint
}

export interface V1AssetInstance_Array4 {
  __kind: 'Array4'
  value: Uint8Array
}

export interface V1AssetInstance_Array8 {
  __kind: 'Array8'
  value: Uint8Array
}

export interface V1AssetInstance_Array16 {
  __kind: 'Array16'
  value: Uint8Array
}

export interface V1AssetInstance_Array32 {
  __kind: 'Array32'
  value: Uint8Array
}

export interface V1AssetInstance_Blob {
  __kind: 'Blob'
  value: Uint8Array
}

export type V0Junction = V0Junction_Parent | V0Junction_Parachain | V0Junction_AccountId32 | V0Junction_AccountIndex64 | V0Junction_AccountKey20 | V0Junction_PalletInstance | V0Junction_GeneralIndex | V0Junction_GeneralKey | V0Junction_OnlyChild | V0Junction_Plurality

export interface V0Junction_Parent {
  __kind: 'Parent'
}

export interface V0Junction_Parachain {
  __kind: 'Parachain'
  value: number
}

export interface V0Junction_AccountId32 {
  __kind: 'AccountId32'
  network: V0NetworkId
  id: Uint8Array
}

export interface V0Junction_AccountIndex64 {
  __kind: 'AccountIndex64'
  network: V0NetworkId
  index: bigint
}

export interface V0Junction_AccountKey20 {
  __kind: 'AccountKey20'
  network: V0NetworkId
  key: Uint8Array
}

export interface V0Junction_PalletInstance {
  __kind: 'PalletInstance'
  value: number
}

export interface V0Junction_GeneralIndex {
  __kind: 'GeneralIndex'
  value: bigint
}

export interface V0Junction_GeneralKey {
  __kind: 'GeneralKey'
  value: Uint8Array
}

export interface V0Junction_OnlyChild {
  __kind: 'OnlyChild'
}

export interface V0Junction_Plurality {
  __kind: 'Plurality'
  id: V0BodyId
  part: V0BodyPart
}

export type V0NetworkId = V0NetworkId_Any | V0NetworkId_Named | V0NetworkId_Polkadot | V0NetworkId_Kusama

export interface V0NetworkId_Any {
  __kind: 'Any'
}

export interface V0NetworkId_Named {
  __kind: 'Named'
  value: Uint8Array
}

export interface V0NetworkId_Polkadot {
  __kind: 'Polkadot'
}

export interface V0NetworkId_Kusama {
  __kind: 'Kusama'
}

export type V0BodyId = V0BodyId_Unit | V0BodyId_Named | V0BodyId_Index | V0BodyId_Executive | V0BodyId_Technical | V0BodyId_Legislative | V0BodyId_Judicial

export interface V0BodyId_Unit {
  __kind: 'Unit'
}

export interface V0BodyId_Named {
  __kind: 'Named'
  value: Uint8Array
}

export interface V0BodyId_Index {
  __kind: 'Index'
  value: number
}

export interface V0BodyId_Executive {
  __kind: 'Executive'
}

export interface V0BodyId_Technical {
  __kind: 'Technical'
}

export interface V0BodyId_Legislative {
  __kind: 'Legislative'
}

export interface V0BodyId_Judicial {
  __kind: 'Judicial'
}

export type V0BodyPart = V0BodyPart_Voice | V0BodyPart_Members | V0BodyPart_Fraction | V0BodyPart_AtLeastProportion | V0BodyPart_MoreThanProportion

export interface V0BodyPart_Voice {
  __kind: 'Voice'
}

export interface V0BodyPart_Members {
  __kind: 'Members'
  count: number
}

export interface V0BodyPart_Fraction {
  __kind: 'Fraction'
  nom: number
  denom: number
}

export interface V0BodyPart_AtLeastProportion {
  __kind: 'AtLeastProportion'
  nom: number
  denom: number
}

export interface V0BodyPart_MoreThanProportion {
  __kind: 'MoreThanProportion'
  nom: number
  denom: number
}

export type V1WildFungibility = V1WildFungibility_Fungible | V1WildFungibility_NonFungible

export interface V1WildFungibility_Fungible {
  __kind: 'Fungible'
}

export interface V1WildFungibility_NonFungible {
  __kind: 'NonFungible'
}
