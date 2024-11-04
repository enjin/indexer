// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

// import type lookup before we augment - in some environments
// this is required to allow for ambient/previous definitions
import '@polkadot/types/lookup';

import type { Data } from '@polkadot/types';
import type { BTreeMap, BTreeSet, Bytes, Compact, Enum, Null, Option, Result, Struct, Text, U8aFixed, Vec, bool, i32, u128, u16, u32, u64, u8 } from '@polkadot/types-codec';
import type { ITuple } from '@polkadot/types-codec/types';
import type { Vote } from '@polkadot/types/interfaces/elections';
import type { AccountId32, Call, H160, H256, MultiAddress, Perbill } from '@polkadot/types/interfaces/runtime';
import type { Event } from '@polkadot/types/interfaces/system';

declare module '@polkadot/types/lookup' {
  /** @name FrameSystemAccountInfo (3) */
  interface FrameSystemAccountInfo extends Struct {
    readonly nonce: u32;
    readonly consumers: u32;
    readonly providers: u32;
    readonly sufficients: u32;
    readonly data: PalletBalancesAccountData;
  }

  /** @name PalletBalancesAccountData (5) */
  interface PalletBalancesAccountData extends Struct {
    readonly free: u128;
    readonly reserved: u128;
    readonly frozen: u128;
    readonly flags: u128;
  }

  /** @name FrameSupportDispatchPerDispatchClassWeight (9) */
  interface FrameSupportDispatchPerDispatchClassWeight extends Struct {
    readonly normal: SpWeightsWeightV2Weight;
    readonly operational: SpWeightsWeightV2Weight;
    readonly mandatory: SpWeightsWeightV2Weight;
  }

  /** @name SpWeightsWeightV2Weight (10) */
  interface SpWeightsWeightV2Weight extends Struct {
    readonly refTime: Compact<u64>;
    readonly proofSize: Compact<u64>;
  }

  /** @name SpRuntimeDigest (15) */
  interface SpRuntimeDigest extends Struct {
    readonly logs: Vec<SpRuntimeDigestDigestItem>;
  }

  /** @name SpRuntimeDigestDigestItem (17) */
  interface SpRuntimeDigestDigestItem extends Enum {
    readonly isOther: boolean;
    readonly asOther: Bytes;
    readonly isConsensus: boolean;
    readonly asConsensus: ITuple<[U8aFixed, Bytes]>;
    readonly isSeal: boolean;
    readonly asSeal: ITuple<[U8aFixed, Bytes]>;
    readonly isPreRuntime: boolean;
    readonly asPreRuntime: ITuple<[U8aFixed, Bytes]>;
    readonly isRuntimeEnvironmentUpdated: boolean;
    readonly type: 'Other' | 'Consensus' | 'Seal' | 'PreRuntime' | 'RuntimeEnvironmentUpdated';
  }

  /** @name FrameSystemEventRecord (20) */
  interface FrameSystemEventRecord extends Struct {
    readonly phase: FrameSystemPhase;
    readonly event: Event;
    readonly topics: Vec<H256>;
  }

  /** @name FrameSystemEvent (22) */
  interface FrameSystemEvent extends Enum {
    readonly isExtrinsicSuccess: boolean;
    readonly asExtrinsicSuccess: {
      readonly dispatchInfo: FrameSupportDispatchDispatchInfo;
    } & Struct;
    readonly isExtrinsicFailed: boolean;
    readonly asExtrinsicFailed: {
      readonly dispatchError: SpRuntimeDispatchError;
      readonly dispatchInfo: FrameSupportDispatchDispatchInfo;
    } & Struct;
    readonly isCodeUpdated: boolean;
    readonly isNewAccount: boolean;
    readonly asNewAccount: {
      readonly account: AccountId32;
    } & Struct;
    readonly isKilledAccount: boolean;
    readonly asKilledAccount: {
      readonly account: AccountId32;
    } & Struct;
    readonly isRemarked: boolean;
    readonly asRemarked: {
      readonly sender: AccountId32;
      readonly hash_: H256;
    } & Struct;
    readonly isUpgradeAuthorized: boolean;
    readonly asUpgradeAuthorized: {
      readonly codeHash: H256;
      readonly checkVersion: bool;
    } & Struct;
    readonly type: 'ExtrinsicSuccess' | 'ExtrinsicFailed' | 'CodeUpdated' | 'NewAccount' | 'KilledAccount' | 'Remarked' | 'UpgradeAuthorized';
  }

  /** @name FrameSupportDispatchDispatchInfo (23) */
  interface FrameSupportDispatchDispatchInfo extends Struct {
    readonly weight: SpWeightsWeightV2Weight;
    readonly class: FrameSupportDispatchDispatchClass;
    readonly paysFee: FrameSupportDispatchPays;
  }

  /** @name FrameSupportDispatchDispatchClass (24) */
  interface FrameSupportDispatchDispatchClass extends Enum {
    readonly isNormal: boolean;
    readonly isOperational: boolean;
    readonly isMandatory: boolean;
    readonly type: 'Normal' | 'Operational' | 'Mandatory';
  }

  /** @name FrameSupportDispatchPays (25) */
  interface FrameSupportDispatchPays extends Enum {
    readonly isYes: boolean;
    readonly isNo: boolean;
    readonly type: 'Yes' | 'No';
  }

  /** @name SpRuntimeDispatchError (26) */
  interface SpRuntimeDispatchError extends Enum {
    readonly isOther: boolean;
    readonly isCannotLookup: boolean;
    readonly isBadOrigin: boolean;
    readonly isModule: boolean;
    readonly asModule: SpRuntimeModuleError;
    readonly isConsumerRemaining: boolean;
    readonly isNoProviders: boolean;
    readonly isTooManyConsumers: boolean;
    readonly isToken: boolean;
    readonly asToken: SpRuntimeTokenError;
    readonly isArithmetic: boolean;
    readonly asArithmetic: SpArithmeticArithmeticError;
    readonly isTransactional: boolean;
    readonly asTransactional: SpRuntimeTransactionalError;
    readonly isExhausted: boolean;
    readonly isCorruption: boolean;
    readonly isUnavailable: boolean;
    readonly isRootNotAllowed: boolean;
    readonly type: 'Other' | 'CannotLookup' | 'BadOrigin' | 'Module' | 'ConsumerRemaining' | 'NoProviders' | 'TooManyConsumers' | 'Token' | 'Arithmetic' | 'Transactional' | 'Exhausted' | 'Corruption' | 'Unavailable' | 'RootNotAllowed';
  }

  /** @name SpRuntimeModuleError (27) */
  interface SpRuntimeModuleError extends Struct {
    readonly index: u8;
    readonly error: U8aFixed;
  }

  /** @name SpRuntimeTokenError (28) */
  interface SpRuntimeTokenError extends Enum {
    readonly isFundsUnavailable: boolean;
    readonly isOnlyProvider: boolean;
    readonly isBelowMinimum: boolean;
    readonly isCannotCreate: boolean;
    readonly isUnknownAsset: boolean;
    readonly isFrozen: boolean;
    readonly isUnsupported: boolean;
    readonly isCannotCreateHold: boolean;
    readonly isNotExpendable: boolean;
    readonly isBlocked: boolean;
    readonly type: 'FundsUnavailable' | 'OnlyProvider' | 'BelowMinimum' | 'CannotCreate' | 'UnknownAsset' | 'Frozen' | 'Unsupported' | 'CannotCreateHold' | 'NotExpendable' | 'Blocked';
  }

  /** @name SpArithmeticArithmeticError (29) */
  interface SpArithmeticArithmeticError extends Enum {
    readonly isUnderflow: boolean;
    readonly isOverflow: boolean;
    readonly isDivisionByZero: boolean;
    readonly type: 'Underflow' | 'Overflow' | 'DivisionByZero';
  }

  /** @name SpRuntimeTransactionalError (30) */
  interface SpRuntimeTransactionalError extends Enum {
    readonly isLimitReached: boolean;
    readonly isNoLayer: boolean;
    readonly type: 'LimitReached' | 'NoLayer';
  }

  /** @name CumulusPalletParachainSystemEvent (31) */
  interface CumulusPalletParachainSystemEvent extends Enum {
    readonly isValidationFunctionStored: boolean;
    readonly isValidationFunctionApplied: boolean;
    readonly asValidationFunctionApplied: {
      readonly relayChainBlockNum: u32;
    } & Struct;
    readonly isValidationFunctionDiscarded: boolean;
    readonly isDownwardMessagesReceived: boolean;
    readonly asDownwardMessagesReceived: {
      readonly count: u32;
    } & Struct;
    readonly isDownwardMessagesProcessed: boolean;
    readonly asDownwardMessagesProcessed: {
      readonly weightUsed: SpWeightsWeightV2Weight;
      readonly dmqHead: H256;
    } & Struct;
    readonly isUpwardMessageSent: boolean;
    readonly asUpwardMessageSent: {
      readonly messageHash: Option<U8aFixed>;
    } & Struct;
    readonly type: 'ValidationFunctionStored' | 'ValidationFunctionApplied' | 'ValidationFunctionDiscarded' | 'DownwardMessagesReceived' | 'DownwardMessagesProcessed' | 'UpwardMessageSent';
  }

  /** @name PalletPreimageEvent (33) */
  interface PalletPreimageEvent extends Enum {
    readonly isNoted: boolean;
    readonly asNoted: {
      readonly hash_: H256;
    } & Struct;
    readonly isRequested: boolean;
    readonly asRequested: {
      readonly hash_: H256;
    } & Struct;
    readonly isCleared: boolean;
    readonly asCleared: {
      readonly hash_: H256;
    } & Struct;
    readonly type: 'Noted' | 'Requested' | 'Cleared';
  }

  /** @name PalletSchedulerEvent (34) */
  interface PalletSchedulerEvent extends Enum {
    readonly isScheduled: boolean;
    readonly asScheduled: {
      readonly when: u32;
      readonly index: u32;
    } & Struct;
    readonly isCanceled: boolean;
    readonly asCanceled: {
      readonly when: u32;
      readonly index: u32;
    } & Struct;
    readonly isDispatched: boolean;
    readonly asDispatched: {
      readonly task: ITuple<[u32, u32]>;
      readonly id: Option<U8aFixed>;
      readonly result: Result<Null, SpRuntimeDispatchError>;
    } & Struct;
    readonly isRetrySet: boolean;
    readonly asRetrySet: {
      readonly task: ITuple<[u32, u32]>;
      readonly id: Option<U8aFixed>;
      readonly period: u32;
      readonly retries: u8;
    } & Struct;
    readonly isRetryCancelled: boolean;
    readonly asRetryCancelled: {
      readonly task: ITuple<[u32, u32]>;
      readonly id: Option<U8aFixed>;
    } & Struct;
    readonly isCallUnavailable: boolean;
    readonly asCallUnavailable: {
      readonly task: ITuple<[u32, u32]>;
      readonly id: Option<U8aFixed>;
    } & Struct;
    readonly isPeriodicFailed: boolean;
    readonly asPeriodicFailed: {
      readonly task: ITuple<[u32, u32]>;
      readonly id: Option<U8aFixed>;
    } & Struct;
    readonly isRetryFailed: boolean;
    readonly asRetryFailed: {
      readonly task: ITuple<[u32, u32]>;
      readonly id: Option<U8aFixed>;
    } & Struct;
    readonly isPermanentlyOverweight: boolean;
    readonly asPermanentlyOverweight: {
      readonly task: ITuple<[u32, u32]>;
      readonly id: Option<U8aFixed>;
    } & Struct;
    readonly type: 'Scheduled' | 'Canceled' | 'Dispatched' | 'RetrySet' | 'RetryCancelled' | 'CallUnavailable' | 'PeriodicFailed' | 'RetryFailed' | 'PermanentlyOverweight';
  }

  /** @name PalletUtilityEvent (38) */
  interface PalletUtilityEvent extends Enum {
    readonly isBatchInterrupted: boolean;
    readonly asBatchInterrupted: {
      readonly index: u32;
      readonly error: SpRuntimeDispatchError;
    } & Struct;
    readonly isBatchCompleted: boolean;
    readonly isBatchCompletedWithErrors: boolean;
    readonly isItemCompleted: boolean;
    readonly isItemFailed: boolean;
    readonly asItemFailed: {
      readonly error: SpRuntimeDispatchError;
    } & Struct;
    readonly isDispatchedAs: boolean;
    readonly asDispatchedAs: {
      readonly result: Result<Null, SpRuntimeDispatchError>;
    } & Struct;
    readonly type: 'BatchInterrupted' | 'BatchCompleted' | 'BatchCompletedWithErrors' | 'ItemCompleted' | 'ItemFailed' | 'DispatchedAs';
  }

  /** @name PalletSafeModeEvent (39) */
  interface PalletSafeModeEvent extends Enum {
    readonly isEntered: boolean;
    readonly asEntered: {
      readonly until: u32;
    } & Struct;
    readonly isExtended: boolean;
    readonly asExtended: {
      readonly until: u32;
    } & Struct;
    readonly isExited: boolean;
    readonly asExited: {
      readonly reason: PalletSafeModeExitReason;
    } & Struct;
    readonly isDepositPlaced: boolean;
    readonly asDepositPlaced: {
      readonly account: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isDepositReleased: boolean;
    readonly asDepositReleased: {
      readonly account: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isDepositSlashed: boolean;
    readonly asDepositSlashed: {
      readonly account: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isCannotDeposit: boolean;
    readonly isCannotRelease: boolean;
    readonly type: 'Entered' | 'Extended' | 'Exited' | 'DepositPlaced' | 'DepositReleased' | 'DepositSlashed' | 'CannotDeposit' | 'CannotRelease';
  }

  /** @name PalletSafeModeExitReason (40) */
  interface PalletSafeModeExitReason extends Enum {
    readonly isTimeout: boolean;
    readonly isForce: boolean;
    readonly type: 'Timeout' | 'Force';
  }

  /** @name PalletBalancesEvent (41) */
  interface PalletBalancesEvent extends Enum {
    readonly isEndowed: boolean;
    readonly asEndowed: {
      readonly account: AccountId32;
      readonly freeBalance: u128;
    } & Struct;
    readonly isDustLost: boolean;
    readonly asDustLost: {
      readonly account: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isTransfer: boolean;
    readonly asTransfer: {
      readonly from: AccountId32;
      readonly to: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isBalanceSet: boolean;
    readonly asBalanceSet: {
      readonly who: AccountId32;
      readonly free: u128;
    } & Struct;
    readonly isReserved: boolean;
    readonly asReserved: {
      readonly who: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isUnreserved: boolean;
    readonly asUnreserved: {
      readonly who: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isReserveRepatriated: boolean;
    readonly asReserveRepatriated: {
      readonly from: AccountId32;
      readonly to: AccountId32;
      readonly amount: u128;
      readonly destinationStatus: FrameSupportTokensMiscBalanceStatus;
    } & Struct;
    readonly isDeposit: boolean;
    readonly asDeposit: {
      readonly who: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isWithdraw: boolean;
    readonly asWithdraw: {
      readonly who: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isSlashed: boolean;
    readonly asSlashed: {
      readonly who: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isMinted: boolean;
    readonly asMinted: {
      readonly who: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isBurned: boolean;
    readonly asBurned: {
      readonly who: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isSuspended: boolean;
    readonly asSuspended: {
      readonly who: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isRestored: boolean;
    readonly asRestored: {
      readonly who: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isUpgraded: boolean;
    readonly asUpgraded: {
      readonly who: AccountId32;
    } & Struct;
    readonly isIssued: boolean;
    readonly asIssued: {
      readonly amount: u128;
    } & Struct;
    readonly isRescinded: boolean;
    readonly asRescinded: {
      readonly amount: u128;
    } & Struct;
    readonly isLocked: boolean;
    readonly asLocked: {
      readonly who: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isUnlocked: boolean;
    readonly asUnlocked: {
      readonly who: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isFrozen: boolean;
    readonly asFrozen: {
      readonly who: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isThawed: boolean;
    readonly asThawed: {
      readonly who: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isTotalIssuanceForced: boolean;
    readonly asTotalIssuanceForced: {
      readonly old: u128;
      readonly new_: u128;
    } & Struct;
    readonly type: 'Endowed' | 'DustLost' | 'Transfer' | 'BalanceSet' | 'Reserved' | 'Unreserved' | 'ReserveRepatriated' | 'Deposit' | 'Withdraw' | 'Slashed' | 'Minted' | 'Burned' | 'Suspended' | 'Restored' | 'Upgraded' | 'Issued' | 'Rescinded' | 'Locked' | 'Unlocked' | 'Frozen' | 'Thawed' | 'TotalIssuanceForced';
  }

  /** @name FrameSupportTokensMiscBalanceStatus (42) */
  interface FrameSupportTokensMiscBalanceStatus extends Enum {
    readonly isFree: boolean;
    readonly isReserved: boolean;
    readonly type: 'Free' | 'Reserved';
  }

  /** @name PalletTransactionPaymentEvent (43) */
  interface PalletTransactionPaymentEvent extends Enum {
    readonly isTransactionFeePaid: boolean;
    readonly asTransactionFeePaid: {
      readonly who: AccountId32;
      readonly actualFee: u128;
      readonly tip: u128;
    } & Struct;
    readonly type: 'TransactionFeePaid';
  }

  /** @name PalletDemocracyEvent (44) */
  interface PalletDemocracyEvent extends Enum {
    readonly isProposed: boolean;
    readonly asProposed: {
      readonly proposalIndex: u32;
      readonly deposit: u128;
    } & Struct;
    readonly isTabled: boolean;
    readonly asTabled: {
      readonly proposalIndex: u32;
      readonly deposit: u128;
    } & Struct;
    readonly isExternalTabled: boolean;
    readonly isStarted: boolean;
    readonly asStarted: {
      readonly refIndex: u32;
      readonly threshold: PalletDemocracyVoteThreshold;
    } & Struct;
    readonly isPassed: boolean;
    readonly asPassed: {
      readonly refIndex: u32;
    } & Struct;
    readonly isNotPassed: boolean;
    readonly asNotPassed: {
      readonly refIndex: u32;
    } & Struct;
    readonly isCancelled: boolean;
    readonly asCancelled: {
      readonly refIndex: u32;
    } & Struct;
    readonly isDelegated: boolean;
    readonly asDelegated: {
      readonly who: AccountId32;
      readonly target: AccountId32;
    } & Struct;
    readonly isUndelegated: boolean;
    readonly asUndelegated: {
      readonly account: AccountId32;
    } & Struct;
    readonly isVetoed: boolean;
    readonly asVetoed: {
      readonly who: AccountId32;
      readonly proposalHash: H256;
      readonly until: u32;
    } & Struct;
    readonly isBlacklisted: boolean;
    readonly asBlacklisted: {
      readonly proposalHash: H256;
    } & Struct;
    readonly isVoted: boolean;
    readonly asVoted: {
      readonly voter: AccountId32;
      readonly refIndex: u32;
      readonly vote: PalletDemocracyVoteAccountVote;
    } & Struct;
    readonly isSeconded: boolean;
    readonly asSeconded: {
      readonly seconder: AccountId32;
      readonly propIndex: u32;
    } & Struct;
    readonly isProposalCanceled: boolean;
    readonly asProposalCanceled: {
      readonly propIndex: u32;
    } & Struct;
    readonly isMetadataSet: boolean;
    readonly asMetadataSet: {
      readonly owner: PalletDemocracyMetadataOwner;
      readonly hash_: H256;
    } & Struct;
    readonly isMetadataCleared: boolean;
    readonly asMetadataCleared: {
      readonly owner: PalletDemocracyMetadataOwner;
      readonly hash_: H256;
    } & Struct;
    readonly isMetadataTransferred: boolean;
    readonly asMetadataTransferred: {
      readonly prevOwner: PalletDemocracyMetadataOwner;
      readonly owner: PalletDemocracyMetadataOwner;
      readonly hash_: H256;
    } & Struct;
    readonly type: 'Proposed' | 'Tabled' | 'ExternalTabled' | 'Started' | 'Passed' | 'NotPassed' | 'Cancelled' | 'Delegated' | 'Undelegated' | 'Vetoed' | 'Blacklisted' | 'Voted' | 'Seconded' | 'ProposalCanceled' | 'MetadataSet' | 'MetadataCleared' | 'MetadataTransferred';
  }

  /** @name PalletDemocracyVoteThreshold (45) */
  interface PalletDemocracyVoteThreshold extends Enum {
    readonly isSuperMajorityApprove: boolean;
    readonly isSuperMajorityAgainst: boolean;
    readonly isSimpleMajority: boolean;
    readonly type: 'SuperMajorityApprove' | 'SuperMajorityAgainst' | 'SimpleMajority';
  }

  /** @name PalletDemocracyVoteAccountVote (46) */
  interface PalletDemocracyVoteAccountVote extends Enum {
    readonly isStandard: boolean;
    readonly asStandard: {
      readonly vote: Vote;
      readonly balance: u128;
    } & Struct;
    readonly isSplit: boolean;
    readonly asSplit: {
      readonly aye: u128;
      readonly nay: u128;
    } & Struct;
    readonly type: 'Standard' | 'Split';
  }

  /** @name PalletDemocracyMetadataOwner (48) */
  interface PalletDemocracyMetadataOwner extends Enum {
    readonly isExternal: boolean;
    readonly isProposal: boolean;
    readonly asProposal: u32;
    readonly isReferendum: boolean;
    readonly asReferendum: u32;
    readonly type: 'External' | 'Proposal' | 'Referendum';
  }

  /** @name PalletCollectiveEvent (49) */
  interface PalletCollectiveEvent extends Enum {
    readonly isProposed: boolean;
    readonly asProposed: {
      readonly account: AccountId32;
      readonly proposalIndex: u32;
      readonly proposalHash: H256;
      readonly threshold: u32;
    } & Struct;
    readonly isVoted: boolean;
    readonly asVoted: {
      readonly account: AccountId32;
      readonly proposalHash: H256;
      readonly voted: bool;
      readonly yes: u32;
      readonly no: u32;
    } & Struct;
    readonly isApproved: boolean;
    readonly asApproved: {
      readonly proposalHash: H256;
    } & Struct;
    readonly isDisapproved: boolean;
    readonly asDisapproved: {
      readonly proposalHash: H256;
    } & Struct;
    readonly isExecuted: boolean;
    readonly asExecuted: {
      readonly proposalHash: H256;
      readonly result: Result<Null, SpRuntimeDispatchError>;
    } & Struct;
    readonly isMemberExecuted: boolean;
    readonly asMemberExecuted: {
      readonly proposalHash: H256;
      readonly result: Result<Null, SpRuntimeDispatchError>;
    } & Struct;
    readonly isClosed: boolean;
    readonly asClosed: {
      readonly proposalHash: H256;
      readonly yes: u32;
      readonly no: u32;
    } & Struct;
    readonly type: 'Proposed' | 'Voted' | 'Approved' | 'Disapproved' | 'Executed' | 'MemberExecuted' | 'Closed';
  }

  /** @name PalletTreasuryEvent (51) */
  interface PalletTreasuryEvent extends Enum {
    readonly isProposed: boolean;
    readonly asProposed: {
      readonly proposalIndex: u32;
    } & Struct;
    readonly isSpending: boolean;
    readonly asSpending: {
      readonly budgetRemaining: u128;
    } & Struct;
    readonly isAwarded: boolean;
    readonly asAwarded: {
      readonly proposalIndex: u32;
      readonly award: u128;
      readonly account: AccountId32;
    } & Struct;
    readonly isRejected: boolean;
    readonly asRejected: {
      readonly proposalIndex: u32;
      readonly slashed: u128;
    } & Struct;
    readonly isBurnt: boolean;
    readonly asBurnt: {
      readonly burntFunds: u128;
    } & Struct;
    readonly isRollover: boolean;
    readonly asRollover: {
      readonly rolloverBalance: u128;
    } & Struct;
    readonly isDeposit: boolean;
    readonly asDeposit: {
      readonly value: u128;
    } & Struct;
    readonly isSpendApproved: boolean;
    readonly asSpendApproved: {
      readonly proposalIndex: u32;
      readonly amount: u128;
      readonly beneficiary: AccountId32;
    } & Struct;
    readonly isUpdatedInactive: boolean;
    readonly asUpdatedInactive: {
      readonly reactivated: u128;
      readonly deactivated: u128;
    } & Struct;
    readonly isAssetSpendApproved: boolean;
    readonly asAssetSpendApproved: {
      readonly index: u32;
      readonly assetKind: Null;
      readonly amount: u128;
      readonly beneficiary: AccountId32;
      readonly validFrom: u32;
      readonly expireAt: u32;
    } & Struct;
    readonly isAssetSpendVoided: boolean;
    readonly asAssetSpendVoided: {
      readonly index: u32;
    } & Struct;
    readonly isPaid: boolean;
    readonly asPaid: {
      readonly index: u32;
      readonly paymentId: Null;
    } & Struct;
    readonly isPaymentFailed: boolean;
    readonly asPaymentFailed: {
      readonly index: u32;
      readonly paymentId: Null;
    } & Struct;
    readonly isSpendProcessed: boolean;
    readonly asSpendProcessed: {
      readonly index: u32;
    } & Struct;
    readonly type: 'Proposed' | 'Spending' | 'Awarded' | 'Rejected' | 'Burnt' | 'Rollover' | 'Deposit' | 'SpendApproved' | 'UpdatedInactive' | 'AssetSpendApproved' | 'AssetSpendVoided' | 'Paid' | 'PaymentFailed' | 'SpendProcessed';
  }

  /** @name PalletMembershipEvent (52) */
  interface PalletMembershipEvent extends Enum {
    readonly isMemberAdded: boolean;
    readonly isMemberRemoved: boolean;
    readonly isMembersSwapped: boolean;
    readonly isMembersReset: boolean;
    readonly isKeyChanged: boolean;
    readonly isDummy: boolean;
    readonly type: 'MemberAdded' | 'MemberRemoved' | 'MembersSwapped' | 'MembersReset' | 'KeyChanged' | 'Dummy';
  }

  /** @name PalletMultisigEvent (53) */
  interface PalletMultisigEvent extends Enum {
    readonly isNewMultisig: boolean;
    readonly asNewMultisig: {
      readonly approving: AccountId32;
      readonly multisig: AccountId32;
      readonly callHash: U8aFixed;
    } & Struct;
    readonly isMultisigApproval: boolean;
    readonly asMultisigApproval: {
      readonly approving: AccountId32;
      readonly timepoint: PalletMultisigTimepoint;
      readonly multisig: AccountId32;
      readonly callHash: U8aFixed;
    } & Struct;
    readonly isMultisigExecuted: boolean;
    readonly asMultisigExecuted: {
      readonly approving: AccountId32;
      readonly timepoint: PalletMultisigTimepoint;
      readonly multisig: AccountId32;
      readonly callHash: U8aFixed;
      readonly result: Result<Null, SpRuntimeDispatchError>;
    } & Struct;
    readonly isMultisigCancelled: boolean;
    readonly asMultisigCancelled: {
      readonly cancelling: AccountId32;
      readonly timepoint: PalletMultisigTimepoint;
      readonly multisig: AccountId32;
      readonly callHash: U8aFixed;
    } & Struct;
    readonly type: 'NewMultisig' | 'MultisigApproval' | 'MultisigExecuted' | 'MultisigCancelled';
  }

  /** @name PalletMultisigTimepoint (54) */
  interface PalletMultisigTimepoint extends Struct {
    readonly height: u32;
    readonly index: u32;
  }

  /** @name PalletCollatorStakingEvent (55) */
  interface PalletCollatorStakingEvent extends Enum {
    readonly isNewInvulnerables: boolean;
    readonly asNewInvulnerables: {
      readonly new_: Vec<AccountId32>;
    } & Struct;
    readonly isRoundFinalized: boolean;
    readonly asRoundFinalized: {
      readonly number: u32;
    } & Struct;
    readonly isCandidateJoined: boolean;
    readonly asCandidateJoined: {
      readonly accountId: AccountId32;
      readonly amount: u128;
      readonly rewardsCut: Perbill;
    } & Struct;
    readonly isCandidateRemoved: boolean;
    readonly asCandidateRemoved: {
      readonly accountId: AccountId32;
    } & Struct;
    readonly isNominated: boolean;
    readonly asNominated: {
      readonly accountId: AccountId32;
      readonly collatorId: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isNominationRemoved: boolean;
    readonly asNominationRemoved: {
      readonly accountId: AccountId32;
      readonly collatorId: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isCollatorSelected: boolean;
    readonly asCollatorSelected: {
      readonly accountId: AccountId32;
    } & Struct;
    readonly type: 'NewInvulnerables' | 'RoundFinalized' | 'CandidateJoined' | 'CandidateRemoved' | 'Nominated' | 'NominationRemoved' | 'CollatorSelected';
  }

  /** @name PalletSessionEvent (58) */
  interface PalletSessionEvent extends Enum {
    readonly isNewSession: boolean;
    readonly asNewSession: {
      readonly sessionIndex: u32;
    } & Struct;
    readonly type: 'NewSession';
  }

  /** @name CumulusPalletXcmpQueueEvent (59) */
  interface CumulusPalletXcmpQueueEvent extends Enum {
    readonly isXcmpMessageSent: boolean;
    readonly asXcmpMessageSent: {
      readonly messageHash: U8aFixed;
    } & Struct;
    readonly type: 'XcmpMessageSent';
  }

  /** @name PalletXcmEvent (60) */
  interface PalletXcmEvent extends Enum {
    readonly isAttempted: boolean;
    readonly asAttempted: {
      readonly outcome: StagingXcmV4TraitsOutcome;
    } & Struct;
    readonly isSent: boolean;
    readonly asSent: {
      readonly origin: StagingXcmV4Location;
      readonly destination: StagingXcmV4Location;
      readonly message: StagingXcmV4Xcm;
      readonly messageId: U8aFixed;
    } & Struct;
    readonly isUnexpectedResponse: boolean;
    readonly asUnexpectedResponse: {
      readonly origin: StagingXcmV4Location;
      readonly queryId: u64;
    } & Struct;
    readonly isResponseReady: boolean;
    readonly asResponseReady: {
      readonly queryId: u64;
      readonly response: StagingXcmV4Response;
    } & Struct;
    readonly isNotified: boolean;
    readonly asNotified: {
      readonly queryId: u64;
      readonly palletIndex: u8;
      readonly callIndex: u8;
    } & Struct;
    readonly isNotifyOverweight: boolean;
    readonly asNotifyOverweight: {
      readonly queryId: u64;
      readonly palletIndex: u8;
      readonly callIndex: u8;
      readonly actualWeight: SpWeightsWeightV2Weight;
      readonly maxBudgetedWeight: SpWeightsWeightV2Weight;
    } & Struct;
    readonly isNotifyDispatchError: boolean;
    readonly asNotifyDispatchError: {
      readonly queryId: u64;
      readonly palletIndex: u8;
      readonly callIndex: u8;
    } & Struct;
    readonly isNotifyDecodeFailed: boolean;
    readonly asNotifyDecodeFailed: {
      readonly queryId: u64;
      readonly palletIndex: u8;
      readonly callIndex: u8;
    } & Struct;
    readonly isInvalidResponder: boolean;
    readonly asInvalidResponder: {
      readonly origin: StagingXcmV4Location;
      readonly queryId: u64;
      readonly expectedLocation: Option<StagingXcmV4Location>;
    } & Struct;
    readonly isInvalidResponderVersion: boolean;
    readonly asInvalidResponderVersion: {
      readonly origin: StagingXcmV4Location;
      readonly queryId: u64;
    } & Struct;
    readonly isResponseTaken: boolean;
    readonly asResponseTaken: {
      readonly queryId: u64;
    } & Struct;
    readonly isAssetsTrapped: boolean;
    readonly asAssetsTrapped: {
      readonly hash_: H256;
      readonly origin: StagingXcmV4Location;
      readonly assets: XcmVersionedAssets;
    } & Struct;
    readonly isVersionChangeNotified: boolean;
    readonly asVersionChangeNotified: {
      readonly destination: StagingXcmV4Location;
      readonly result: u32;
      readonly cost: StagingXcmV4AssetAssets;
      readonly messageId: U8aFixed;
    } & Struct;
    readonly isSupportedVersionChanged: boolean;
    readonly asSupportedVersionChanged: {
      readonly location: StagingXcmV4Location;
      readonly version: u32;
    } & Struct;
    readonly isNotifyTargetSendFail: boolean;
    readonly asNotifyTargetSendFail: {
      readonly location: StagingXcmV4Location;
      readonly queryId: u64;
      readonly error: XcmV3TraitsError;
    } & Struct;
    readonly isNotifyTargetMigrationFail: boolean;
    readonly asNotifyTargetMigrationFail: {
      readonly location: XcmVersionedLocation;
      readonly queryId: u64;
    } & Struct;
    readonly isInvalidQuerierVersion: boolean;
    readonly asInvalidQuerierVersion: {
      readonly origin: StagingXcmV4Location;
      readonly queryId: u64;
    } & Struct;
    readonly isInvalidQuerier: boolean;
    readonly asInvalidQuerier: {
      readonly origin: StagingXcmV4Location;
      readonly queryId: u64;
      readonly expectedQuerier: StagingXcmV4Location;
      readonly maybeActualQuerier: Option<StagingXcmV4Location>;
    } & Struct;
    readonly isVersionNotifyStarted: boolean;
    readonly asVersionNotifyStarted: {
      readonly destination: StagingXcmV4Location;
      readonly cost: StagingXcmV4AssetAssets;
      readonly messageId: U8aFixed;
    } & Struct;
    readonly isVersionNotifyRequested: boolean;
    readonly asVersionNotifyRequested: {
      readonly destination: StagingXcmV4Location;
      readonly cost: StagingXcmV4AssetAssets;
      readonly messageId: U8aFixed;
    } & Struct;
    readonly isVersionNotifyUnrequested: boolean;
    readonly asVersionNotifyUnrequested: {
      readonly destination: StagingXcmV4Location;
      readonly cost: StagingXcmV4AssetAssets;
      readonly messageId: U8aFixed;
    } & Struct;
    readonly isFeesPaid: boolean;
    readonly asFeesPaid: {
      readonly paying: StagingXcmV4Location;
      readonly fees: StagingXcmV4AssetAssets;
    } & Struct;
    readonly isAssetsClaimed: boolean;
    readonly asAssetsClaimed: {
      readonly hash_: H256;
      readonly origin: StagingXcmV4Location;
      readonly assets: XcmVersionedAssets;
    } & Struct;
    readonly isVersionMigrationFinished: boolean;
    readonly asVersionMigrationFinished: {
      readonly version: u32;
    } & Struct;
    readonly type: 'Attempted' | 'Sent' | 'UnexpectedResponse' | 'ResponseReady' | 'Notified' | 'NotifyOverweight' | 'NotifyDispatchError' | 'NotifyDecodeFailed' | 'InvalidResponder' | 'InvalidResponderVersion' | 'ResponseTaken' | 'AssetsTrapped' | 'VersionChangeNotified' | 'SupportedVersionChanged' | 'NotifyTargetSendFail' | 'NotifyTargetMigrationFail' | 'InvalidQuerierVersion' | 'InvalidQuerier' | 'VersionNotifyStarted' | 'VersionNotifyRequested' | 'VersionNotifyUnrequested' | 'FeesPaid' | 'AssetsClaimed' | 'VersionMigrationFinished';
  }

  /** @name StagingXcmV4TraitsOutcome (61) */
  interface StagingXcmV4TraitsOutcome extends Enum {
    readonly isComplete: boolean;
    readonly asComplete: {
      readonly used: SpWeightsWeightV2Weight;
    } & Struct;
    readonly isIncomplete: boolean;
    readonly asIncomplete: {
      readonly used: SpWeightsWeightV2Weight;
      readonly error: XcmV3TraitsError;
    } & Struct;
    readonly isError: boolean;
    readonly asError: {
      readonly error: XcmV3TraitsError;
    } & Struct;
    readonly type: 'Complete' | 'Incomplete' | 'Error';
  }

  /** @name XcmV3TraitsError (62) */
  interface XcmV3TraitsError extends Enum {
    readonly isOverflow: boolean;
    readonly isUnimplemented: boolean;
    readonly isUntrustedReserveLocation: boolean;
    readonly isUntrustedTeleportLocation: boolean;
    readonly isLocationFull: boolean;
    readonly isLocationNotInvertible: boolean;
    readonly isBadOrigin: boolean;
    readonly isInvalidLocation: boolean;
    readonly isAssetNotFound: boolean;
    readonly isFailedToTransactAsset: boolean;
    readonly isNotWithdrawable: boolean;
    readonly isLocationCannotHold: boolean;
    readonly isExceedsMaxMessageSize: boolean;
    readonly isDestinationUnsupported: boolean;
    readonly isTransport: boolean;
    readonly isUnroutable: boolean;
    readonly isUnknownClaim: boolean;
    readonly isFailedToDecode: boolean;
    readonly isMaxWeightInvalid: boolean;
    readonly isNotHoldingFees: boolean;
    readonly isTooExpensive: boolean;
    readonly isTrap: boolean;
    readonly asTrap: u64;
    readonly isExpectationFalse: boolean;
    readonly isPalletNotFound: boolean;
    readonly isNameMismatch: boolean;
    readonly isVersionIncompatible: boolean;
    readonly isHoldingWouldOverflow: boolean;
    readonly isExportError: boolean;
    readonly isReanchorFailed: boolean;
    readonly isNoDeal: boolean;
    readonly isFeesNotMet: boolean;
    readonly isLockError: boolean;
    readonly isNoPermission: boolean;
    readonly isUnanchored: boolean;
    readonly isNotDepositable: boolean;
    readonly isUnhandledXcmVersion: boolean;
    readonly isWeightLimitReached: boolean;
    readonly asWeightLimitReached: SpWeightsWeightV2Weight;
    readonly isBarrier: boolean;
    readonly isWeightNotComputable: boolean;
    readonly isExceedsStackLimit: boolean;
    readonly type: 'Overflow' | 'Unimplemented' | 'UntrustedReserveLocation' | 'UntrustedTeleportLocation' | 'LocationFull' | 'LocationNotInvertible' | 'BadOrigin' | 'InvalidLocation' | 'AssetNotFound' | 'FailedToTransactAsset' | 'NotWithdrawable' | 'LocationCannotHold' | 'ExceedsMaxMessageSize' | 'DestinationUnsupported' | 'Transport' | 'Unroutable' | 'UnknownClaim' | 'FailedToDecode' | 'MaxWeightInvalid' | 'NotHoldingFees' | 'TooExpensive' | 'Trap' | 'ExpectationFalse' | 'PalletNotFound' | 'NameMismatch' | 'VersionIncompatible' | 'HoldingWouldOverflow' | 'ExportError' | 'ReanchorFailed' | 'NoDeal' | 'FeesNotMet' | 'LockError' | 'NoPermission' | 'Unanchored' | 'NotDepositable' | 'UnhandledXcmVersion' | 'WeightLimitReached' | 'Barrier' | 'WeightNotComputable' | 'ExceedsStackLimit';
  }

  /** @name StagingXcmV4Location (63) */
  interface StagingXcmV4Location extends Struct {
    readonly parents: u8;
    readonly interior: StagingXcmV4Junctions;
  }

  /** @name StagingXcmV4Junctions (64) */
  interface StagingXcmV4Junctions extends Enum {
    readonly isHere: boolean;
    readonly isX1: boolean;
    readonly asX1: StagingXcmV4Junction;
    readonly isX2: boolean;
    readonly asX2: StagingXcmV4Junction;
    readonly isX3: boolean;
    readonly asX3: StagingXcmV4Junction;
    readonly isX4: boolean;
    readonly asX4: StagingXcmV4Junction;
    readonly isX5: boolean;
    readonly asX5: StagingXcmV4Junction;
    readonly isX6: boolean;
    readonly asX6: StagingXcmV4Junction;
    readonly isX7: boolean;
    readonly asX7: StagingXcmV4Junction;
    readonly isX8: boolean;
    readonly asX8: StagingXcmV4Junction;
    readonly type: 'Here' | 'X1' | 'X2' | 'X3' | 'X4' | 'X5' | 'X6' | 'X7' | 'X8';
  }

  /** @name StagingXcmV4Junction (66) */
  interface StagingXcmV4Junction extends Enum {
    readonly isParachain: boolean;
    readonly asParachain: Compact<u32>;
    readonly isAccountId32: boolean;
    readonly asAccountId32: {
      readonly network: Option<StagingXcmV4JunctionNetworkId>;
      readonly id: U8aFixed;
    } & Struct;
    readonly isAccountIndex64: boolean;
    readonly asAccountIndex64: {
      readonly network: Option<StagingXcmV4JunctionNetworkId>;
      readonly index: Compact<u64>;
    } & Struct;
    readonly isAccountKey20: boolean;
    readonly asAccountKey20: {
      readonly network: Option<StagingXcmV4JunctionNetworkId>;
      readonly key: U8aFixed;
    } & Struct;
    readonly isPalletInstance: boolean;
    readonly asPalletInstance: u8;
    readonly isGeneralIndex: boolean;
    readonly asGeneralIndex: Compact<u128>;
    readonly isGeneralKey: boolean;
    readonly asGeneralKey: {
      readonly length: u8;
      readonly data: U8aFixed;
    } & Struct;
    readonly isOnlyChild: boolean;
    readonly isPlurality: boolean;
    readonly asPlurality: {
      readonly id: XcmV3JunctionBodyId;
      readonly part: XcmV3JunctionBodyPart;
    } & Struct;
    readonly isGlobalConsensus: boolean;
    readonly asGlobalConsensus: StagingXcmV4JunctionNetworkId;
    readonly type: 'Parachain' | 'AccountId32' | 'AccountIndex64' | 'AccountKey20' | 'PalletInstance' | 'GeneralIndex' | 'GeneralKey' | 'OnlyChild' | 'Plurality' | 'GlobalConsensus';
  }

  /** @name StagingXcmV4JunctionNetworkId (69) */
  interface StagingXcmV4JunctionNetworkId extends Enum {
    readonly isByGenesis: boolean;
    readonly asByGenesis: U8aFixed;
    readonly isByFork: boolean;
    readonly asByFork: {
      readonly blockNumber: u64;
      readonly blockHash: U8aFixed;
    } & Struct;
    readonly isPolkadot: boolean;
    readonly isKusama: boolean;
    readonly isWestend: boolean;
    readonly isRococo: boolean;
    readonly isWococo: boolean;
    readonly isEthereum: boolean;
    readonly asEthereum: {
      readonly chainId: Compact<u64>;
    } & Struct;
    readonly isBitcoinCore: boolean;
    readonly isBitcoinCash: boolean;
    readonly isPolkadotBulletin: boolean;
    readonly type: 'ByGenesis' | 'ByFork' | 'Polkadot' | 'Kusama' | 'Westend' | 'Rococo' | 'Wococo' | 'Ethereum' | 'BitcoinCore' | 'BitcoinCash' | 'PolkadotBulletin';
  }

  /** @name XcmV3JunctionBodyId (72) */
  interface XcmV3JunctionBodyId extends Enum {
    readonly isUnit: boolean;
    readonly isMoniker: boolean;
    readonly asMoniker: U8aFixed;
    readonly isIndex: boolean;
    readonly asIndex: Compact<u32>;
    readonly isExecutive: boolean;
    readonly isTechnical: boolean;
    readonly isLegislative: boolean;
    readonly isJudicial: boolean;
    readonly isDefense: boolean;
    readonly isAdministration: boolean;
    readonly isTreasury: boolean;
    readonly type: 'Unit' | 'Moniker' | 'Index' | 'Executive' | 'Technical' | 'Legislative' | 'Judicial' | 'Defense' | 'Administration' | 'Treasury';
  }

  /** @name XcmV3JunctionBodyPart (73) */
  interface XcmV3JunctionBodyPart extends Enum {
    readonly isVoice: boolean;
    readonly isMembers: boolean;
    readonly asMembers: {
      readonly count: Compact<u32>;
    } & Struct;
    readonly isFraction: boolean;
    readonly asFraction: {
      readonly nom: Compact<u32>;
      readonly denom: Compact<u32>;
    } & Struct;
    readonly isAtLeastProportion: boolean;
    readonly asAtLeastProportion: {
      readonly nom: Compact<u32>;
      readonly denom: Compact<u32>;
    } & Struct;
    readonly isMoreThanProportion: boolean;
    readonly asMoreThanProportion: {
      readonly nom: Compact<u32>;
      readonly denom: Compact<u32>;
    } & Struct;
    readonly type: 'Voice' | 'Members' | 'Fraction' | 'AtLeastProportion' | 'MoreThanProportion';
  }

  /** @name StagingXcmV4Xcm (81) */
  interface StagingXcmV4Xcm extends Vec<StagingXcmV4Instruction> {}

  /** @name StagingXcmV4Instruction (83) */
  interface StagingXcmV4Instruction extends Enum {
    readonly isWithdrawAsset: boolean;
    readonly asWithdrawAsset: StagingXcmV4AssetAssets;
    readonly isReserveAssetDeposited: boolean;
    readonly asReserveAssetDeposited: StagingXcmV4AssetAssets;
    readonly isReceiveTeleportedAsset: boolean;
    readonly asReceiveTeleportedAsset: StagingXcmV4AssetAssets;
    readonly isQueryResponse: boolean;
    readonly asQueryResponse: {
      readonly queryId: Compact<u64>;
      readonly response: StagingXcmV4Response;
      readonly maxWeight: SpWeightsWeightV2Weight;
      readonly querier: Option<StagingXcmV4Location>;
    } & Struct;
    readonly isTransferAsset: boolean;
    readonly asTransferAsset: {
      readonly assets: StagingXcmV4AssetAssets;
      readonly beneficiary: StagingXcmV4Location;
    } & Struct;
    readonly isTransferReserveAsset: boolean;
    readonly asTransferReserveAsset: {
      readonly assets: StagingXcmV4AssetAssets;
      readonly dest: StagingXcmV4Location;
      readonly xcm: StagingXcmV4Xcm;
    } & Struct;
    readonly isTransact: boolean;
    readonly asTransact: {
      readonly originKind: XcmV2OriginKind;
      readonly requireWeightAtMost: SpWeightsWeightV2Weight;
      readonly call: XcmDoubleEncoded;
    } & Struct;
    readonly isHrmpNewChannelOpenRequest: boolean;
    readonly asHrmpNewChannelOpenRequest: {
      readonly sender: Compact<u32>;
      readonly maxMessageSize: Compact<u32>;
      readonly maxCapacity: Compact<u32>;
    } & Struct;
    readonly isHrmpChannelAccepted: boolean;
    readonly asHrmpChannelAccepted: {
      readonly recipient: Compact<u32>;
    } & Struct;
    readonly isHrmpChannelClosing: boolean;
    readonly asHrmpChannelClosing: {
      readonly initiator: Compact<u32>;
      readonly sender: Compact<u32>;
      readonly recipient: Compact<u32>;
    } & Struct;
    readonly isClearOrigin: boolean;
    readonly isDescendOrigin: boolean;
    readonly asDescendOrigin: StagingXcmV4Junctions;
    readonly isReportError: boolean;
    readonly asReportError: StagingXcmV4QueryResponseInfo;
    readonly isDepositAsset: boolean;
    readonly asDepositAsset: {
      readonly assets: StagingXcmV4AssetAssetFilter;
      readonly beneficiary: StagingXcmV4Location;
    } & Struct;
    readonly isDepositReserveAsset: boolean;
    readonly asDepositReserveAsset: {
      readonly assets: StagingXcmV4AssetAssetFilter;
      readonly dest: StagingXcmV4Location;
      readonly xcm: StagingXcmV4Xcm;
    } & Struct;
    readonly isExchangeAsset: boolean;
    readonly asExchangeAsset: {
      readonly give: StagingXcmV4AssetAssetFilter;
      readonly want: StagingXcmV4AssetAssets;
      readonly maximal: bool;
    } & Struct;
    readonly isInitiateReserveWithdraw: boolean;
    readonly asInitiateReserveWithdraw: {
      readonly assets: StagingXcmV4AssetAssetFilter;
      readonly reserve: StagingXcmV4Location;
      readonly xcm: StagingXcmV4Xcm;
    } & Struct;
    readonly isInitiateTeleport: boolean;
    readonly asInitiateTeleport: {
      readonly assets: StagingXcmV4AssetAssetFilter;
      readonly dest: StagingXcmV4Location;
      readonly xcm: StagingXcmV4Xcm;
    } & Struct;
    readonly isReportHolding: boolean;
    readonly asReportHolding: {
      readonly responseInfo: StagingXcmV4QueryResponseInfo;
      readonly assets: StagingXcmV4AssetAssetFilter;
    } & Struct;
    readonly isBuyExecution: boolean;
    readonly asBuyExecution: {
      readonly fees: StagingXcmV4Asset;
      readonly weightLimit: XcmV3WeightLimit;
    } & Struct;
    readonly isRefundSurplus: boolean;
    readonly isSetErrorHandler: boolean;
    readonly asSetErrorHandler: StagingXcmV4Xcm;
    readonly isSetAppendix: boolean;
    readonly asSetAppendix: StagingXcmV4Xcm;
    readonly isClearError: boolean;
    readonly isClaimAsset: boolean;
    readonly asClaimAsset: {
      readonly assets: StagingXcmV4AssetAssets;
      readonly ticket: StagingXcmV4Location;
    } & Struct;
    readonly isTrap: boolean;
    readonly asTrap: Compact<u64>;
    readonly isSubscribeVersion: boolean;
    readonly asSubscribeVersion: {
      readonly queryId: Compact<u64>;
      readonly maxResponseWeight: SpWeightsWeightV2Weight;
    } & Struct;
    readonly isUnsubscribeVersion: boolean;
    readonly isBurnAsset: boolean;
    readonly asBurnAsset: StagingXcmV4AssetAssets;
    readonly isExpectAsset: boolean;
    readonly asExpectAsset: StagingXcmV4AssetAssets;
    readonly isExpectOrigin: boolean;
    readonly asExpectOrigin: Option<StagingXcmV4Location>;
    readonly isExpectError: boolean;
    readonly asExpectError: Option<ITuple<[u32, XcmV3TraitsError]>>;
    readonly isExpectTransactStatus: boolean;
    readonly asExpectTransactStatus: XcmV3MaybeErrorCode;
    readonly isQueryPallet: boolean;
    readonly asQueryPallet: {
      readonly moduleName: Bytes;
      readonly responseInfo: StagingXcmV4QueryResponseInfo;
    } & Struct;
    readonly isExpectPallet: boolean;
    readonly asExpectPallet: {
      readonly index: Compact<u32>;
      readonly name: Bytes;
      readonly moduleName: Bytes;
      readonly crateMajor: Compact<u32>;
      readonly minCrateMinor: Compact<u32>;
    } & Struct;
    readonly isReportTransactStatus: boolean;
    readonly asReportTransactStatus: StagingXcmV4QueryResponseInfo;
    readonly isClearTransactStatus: boolean;
    readonly isUniversalOrigin: boolean;
    readonly asUniversalOrigin: StagingXcmV4Junction;
    readonly isExportMessage: boolean;
    readonly asExportMessage: {
      readonly network: StagingXcmV4JunctionNetworkId;
      readonly destination: StagingXcmV4Junctions;
      readonly xcm: StagingXcmV4Xcm;
    } & Struct;
    readonly isLockAsset: boolean;
    readonly asLockAsset: {
      readonly asset: StagingXcmV4Asset;
      readonly unlocker: StagingXcmV4Location;
    } & Struct;
    readonly isUnlockAsset: boolean;
    readonly asUnlockAsset: {
      readonly asset: StagingXcmV4Asset;
      readonly target: StagingXcmV4Location;
    } & Struct;
    readonly isNoteUnlockable: boolean;
    readonly asNoteUnlockable: {
      readonly asset: StagingXcmV4Asset;
      readonly owner: StagingXcmV4Location;
    } & Struct;
    readonly isRequestUnlock: boolean;
    readonly asRequestUnlock: {
      readonly asset: StagingXcmV4Asset;
      readonly locker: StagingXcmV4Location;
    } & Struct;
    readonly isSetFeesMode: boolean;
    readonly asSetFeesMode: {
      readonly jitWithdraw: bool;
    } & Struct;
    readonly isSetTopic: boolean;
    readonly asSetTopic: U8aFixed;
    readonly isClearTopic: boolean;
    readonly isAliasOrigin: boolean;
    readonly asAliasOrigin: StagingXcmV4Location;
    readonly isUnpaidExecution: boolean;
    readonly asUnpaidExecution: {
      readonly weightLimit: XcmV3WeightLimit;
      readonly checkOrigin: Option<StagingXcmV4Location>;
    } & Struct;
    readonly type: 'WithdrawAsset' | 'ReserveAssetDeposited' | 'ReceiveTeleportedAsset' | 'QueryResponse' | 'TransferAsset' | 'TransferReserveAsset' | 'Transact' | 'HrmpNewChannelOpenRequest' | 'HrmpChannelAccepted' | 'HrmpChannelClosing' | 'ClearOrigin' | 'DescendOrigin' | 'ReportError' | 'DepositAsset' | 'DepositReserveAsset' | 'ExchangeAsset' | 'InitiateReserveWithdraw' | 'InitiateTeleport' | 'ReportHolding' | 'BuyExecution' | 'RefundSurplus' | 'SetErrorHandler' | 'SetAppendix' | 'ClearError' | 'ClaimAsset' | 'Trap' | 'SubscribeVersion' | 'UnsubscribeVersion' | 'BurnAsset' | 'ExpectAsset' | 'ExpectOrigin' | 'ExpectError' | 'ExpectTransactStatus' | 'QueryPallet' | 'ExpectPallet' | 'ReportTransactStatus' | 'ClearTransactStatus' | 'UniversalOrigin' | 'ExportMessage' | 'LockAsset' | 'UnlockAsset' | 'NoteUnlockable' | 'RequestUnlock' | 'SetFeesMode' | 'SetTopic' | 'ClearTopic' | 'AliasOrigin' | 'UnpaidExecution';
  }

  /** @name StagingXcmV4AssetAssets (84) */
  interface StagingXcmV4AssetAssets extends Vec<StagingXcmV4Asset> {}

  /** @name StagingXcmV4Asset (86) */
  interface StagingXcmV4Asset extends Struct {
    readonly id: StagingXcmV4AssetAssetId;
    readonly fun: StagingXcmV4AssetFungibility;
  }

  /** @name StagingXcmV4AssetAssetId (87) */
  interface StagingXcmV4AssetAssetId extends StagingXcmV4Location {}

  /** @name StagingXcmV4AssetFungibility (88) */
  interface StagingXcmV4AssetFungibility extends Enum {
    readonly isFungible: boolean;
    readonly asFungible: Compact<u128>;
    readonly isNonFungible: boolean;
    readonly asNonFungible: StagingXcmV4AssetAssetInstance;
    readonly type: 'Fungible' | 'NonFungible';
  }

  /** @name StagingXcmV4AssetAssetInstance (89) */
  interface StagingXcmV4AssetAssetInstance extends Enum {
    readonly isUndefined: boolean;
    readonly isIndex: boolean;
    readonly asIndex: Compact<u128>;
    readonly isArray4: boolean;
    readonly asArray4: U8aFixed;
    readonly isArray8: boolean;
    readonly asArray8: U8aFixed;
    readonly isArray16: boolean;
    readonly asArray16: U8aFixed;
    readonly isArray32: boolean;
    readonly asArray32: U8aFixed;
    readonly type: 'Undefined' | 'Index' | 'Array4' | 'Array8' | 'Array16' | 'Array32';
  }

  /** @name StagingXcmV4Response (92) */
  interface StagingXcmV4Response extends Enum {
    readonly isNull: boolean;
    readonly isAssets: boolean;
    readonly asAssets: StagingXcmV4AssetAssets;
    readonly isExecutionResult: boolean;
    readonly asExecutionResult: Option<ITuple<[u32, XcmV3TraitsError]>>;
    readonly isVersion: boolean;
    readonly asVersion: u32;
    readonly isPalletsInfo: boolean;
    readonly asPalletsInfo: Vec<StagingXcmV4PalletInfo>;
    readonly isDispatchResult: boolean;
    readonly asDispatchResult: XcmV3MaybeErrorCode;
    readonly type: 'Null' | 'Assets' | 'ExecutionResult' | 'Version' | 'PalletsInfo' | 'DispatchResult';
  }

  /** @name StagingXcmV4PalletInfo (96) */
  interface StagingXcmV4PalletInfo extends Struct {
    readonly index: Compact<u32>;
    readonly name: Bytes;
    readonly moduleName: Bytes;
    readonly major: Compact<u32>;
    readonly minor: Compact<u32>;
    readonly patch: Compact<u32>;
  }

  /** @name XcmV3MaybeErrorCode (99) */
  interface XcmV3MaybeErrorCode extends Enum {
    readonly isSuccess: boolean;
    readonly isError: boolean;
    readonly asError: Bytes;
    readonly isTruncatedError: boolean;
    readonly asTruncatedError: Bytes;
    readonly type: 'Success' | 'Error' | 'TruncatedError';
  }

  /** @name XcmV2OriginKind (102) */
  interface XcmV2OriginKind extends Enum {
    readonly isNative: boolean;
    readonly isSovereignAccount: boolean;
    readonly isSuperuser: boolean;
    readonly isXcm: boolean;
    readonly type: 'Native' | 'SovereignAccount' | 'Superuser' | 'Xcm';
  }

  /** @name XcmDoubleEncoded (103) */
  interface XcmDoubleEncoded extends Struct {
    readonly encoded: Bytes;
  }

  /** @name StagingXcmV4QueryResponseInfo (104) */
  interface StagingXcmV4QueryResponseInfo extends Struct {
    readonly destination: StagingXcmV4Location;
    readonly queryId: Compact<u64>;
    readonly maxWeight: SpWeightsWeightV2Weight;
  }

  /** @name StagingXcmV4AssetAssetFilter (105) */
  interface StagingXcmV4AssetAssetFilter extends Enum {
    readonly isDefinite: boolean;
    readonly asDefinite: StagingXcmV4AssetAssets;
    readonly isWild: boolean;
    readonly asWild: StagingXcmV4AssetWildAsset;
    readonly type: 'Definite' | 'Wild';
  }

  /** @name StagingXcmV4AssetWildAsset (106) */
  interface StagingXcmV4AssetWildAsset extends Enum {
    readonly isAll: boolean;
    readonly isAllOf: boolean;
    readonly asAllOf: {
      readonly id: StagingXcmV4AssetAssetId;
      readonly fun: StagingXcmV4AssetWildFungibility;
    } & Struct;
    readonly isAllCounted: boolean;
    readonly asAllCounted: Compact<u32>;
    readonly isAllOfCounted: boolean;
    readonly asAllOfCounted: {
      readonly id: StagingXcmV4AssetAssetId;
      readonly fun: StagingXcmV4AssetWildFungibility;
      readonly count: Compact<u32>;
    } & Struct;
    readonly type: 'All' | 'AllOf' | 'AllCounted' | 'AllOfCounted';
  }

  /** @name StagingXcmV4AssetWildFungibility (107) */
  interface StagingXcmV4AssetWildFungibility extends Enum {
    readonly isFungible: boolean;
    readonly isNonFungible: boolean;
    readonly type: 'Fungible' | 'NonFungible';
  }

  /** @name XcmV3WeightLimit (108) */
  interface XcmV3WeightLimit extends Enum {
    readonly isUnlimited: boolean;
    readonly isLimited: boolean;
    readonly asLimited: SpWeightsWeightV2Weight;
    readonly type: 'Unlimited' | 'Limited';
  }

  /** @name XcmVersionedAssets (109) */
  interface XcmVersionedAssets extends Enum {
    readonly isV2: boolean;
    readonly asV2: XcmV2MultiassetMultiAssets;
    readonly isV3: boolean;
    readonly asV3: XcmV3MultiassetMultiAssets;
    readonly isV4: boolean;
    readonly asV4: StagingXcmV4AssetAssets;
    readonly type: 'V2' | 'V3' | 'V4';
  }

  /** @name XcmV2MultiassetMultiAssets (110) */
  interface XcmV2MultiassetMultiAssets extends Vec<XcmV2MultiAsset> {}

  /** @name XcmV2MultiAsset (112) */
  interface XcmV2MultiAsset extends Struct {
    readonly id: XcmV2MultiassetAssetId;
    readonly fun: XcmV2MultiassetFungibility;
  }

  /** @name XcmV2MultiassetAssetId (113) */
  interface XcmV2MultiassetAssetId extends Enum {
    readonly isConcrete: boolean;
    readonly asConcrete: XcmV2MultiLocation;
    readonly isAbstract: boolean;
    readonly asAbstract: Bytes;
    readonly type: 'Concrete' | 'Abstract';
  }

  /** @name XcmV2MultiLocation (114) */
  interface XcmV2MultiLocation extends Struct {
    readonly parents: u8;
    readonly interior: XcmV2MultilocationJunctions;
  }

  /** @name XcmV2MultilocationJunctions (115) */
  interface XcmV2MultilocationJunctions extends Enum {
    readonly isHere: boolean;
    readonly isX1: boolean;
    readonly asX1: XcmV2Junction;
    readonly isX2: boolean;
    readonly asX2: ITuple<[XcmV2Junction, XcmV2Junction]>;
    readonly isX3: boolean;
    readonly asX3: ITuple<[XcmV2Junction, XcmV2Junction, XcmV2Junction]>;
    readonly isX4: boolean;
    readonly asX4: ITuple<[XcmV2Junction, XcmV2Junction, XcmV2Junction, XcmV2Junction]>;
    readonly isX5: boolean;
    readonly asX5: ITuple<[XcmV2Junction, XcmV2Junction, XcmV2Junction, XcmV2Junction, XcmV2Junction]>;
    readonly isX6: boolean;
    readonly asX6: ITuple<[XcmV2Junction, XcmV2Junction, XcmV2Junction, XcmV2Junction, XcmV2Junction, XcmV2Junction]>;
    readonly isX7: boolean;
    readonly asX7: ITuple<[XcmV2Junction, XcmV2Junction, XcmV2Junction, XcmV2Junction, XcmV2Junction, XcmV2Junction, XcmV2Junction]>;
    readonly isX8: boolean;
    readonly asX8: ITuple<[XcmV2Junction, XcmV2Junction, XcmV2Junction, XcmV2Junction, XcmV2Junction, XcmV2Junction, XcmV2Junction, XcmV2Junction]>;
    readonly type: 'Here' | 'X1' | 'X2' | 'X3' | 'X4' | 'X5' | 'X6' | 'X7' | 'X8';
  }

  /** @name XcmV2Junction (116) */
  interface XcmV2Junction extends Enum {
    readonly isParachain: boolean;
    readonly asParachain: Compact<u32>;
    readonly isAccountId32: boolean;
    readonly asAccountId32: {
      readonly network: XcmV2NetworkId;
      readonly id: U8aFixed;
    } & Struct;
    readonly isAccountIndex64: boolean;
    readonly asAccountIndex64: {
      readonly network: XcmV2NetworkId;
      readonly index: Compact<u64>;
    } & Struct;
    readonly isAccountKey20: boolean;
    readonly asAccountKey20: {
      readonly network: XcmV2NetworkId;
      readonly key: U8aFixed;
    } & Struct;
    readonly isPalletInstance: boolean;
    readonly asPalletInstance: u8;
    readonly isGeneralIndex: boolean;
    readonly asGeneralIndex: Compact<u128>;
    readonly isGeneralKey: boolean;
    readonly asGeneralKey: Bytes;
    readonly isOnlyChild: boolean;
    readonly isPlurality: boolean;
    readonly asPlurality: {
      readonly id: XcmV2BodyId;
      readonly part: XcmV2BodyPart;
    } & Struct;
    readonly type: 'Parachain' | 'AccountId32' | 'AccountIndex64' | 'AccountKey20' | 'PalletInstance' | 'GeneralIndex' | 'GeneralKey' | 'OnlyChild' | 'Plurality';
  }

  /** @name XcmV2NetworkId (117) */
  interface XcmV2NetworkId extends Enum {
    readonly isAny: boolean;
    readonly isNamed: boolean;
    readonly asNamed: Bytes;
    readonly isPolkadot: boolean;
    readonly isKusama: boolean;
    readonly type: 'Any' | 'Named' | 'Polkadot' | 'Kusama';
  }

  /** @name XcmV2BodyId (119) */
  interface XcmV2BodyId extends Enum {
    readonly isUnit: boolean;
    readonly isNamed: boolean;
    readonly asNamed: Bytes;
    readonly isIndex: boolean;
    readonly asIndex: Compact<u32>;
    readonly isExecutive: boolean;
    readonly isTechnical: boolean;
    readonly isLegislative: boolean;
    readonly isJudicial: boolean;
    readonly isDefense: boolean;
    readonly isAdministration: boolean;
    readonly isTreasury: boolean;
    readonly type: 'Unit' | 'Named' | 'Index' | 'Executive' | 'Technical' | 'Legislative' | 'Judicial' | 'Defense' | 'Administration' | 'Treasury';
  }

  /** @name XcmV2BodyPart (120) */
  interface XcmV2BodyPart extends Enum {
    readonly isVoice: boolean;
    readonly isMembers: boolean;
    readonly asMembers: {
      readonly count: Compact<u32>;
    } & Struct;
    readonly isFraction: boolean;
    readonly asFraction: {
      readonly nom: Compact<u32>;
      readonly denom: Compact<u32>;
    } & Struct;
    readonly isAtLeastProportion: boolean;
    readonly asAtLeastProportion: {
      readonly nom: Compact<u32>;
      readonly denom: Compact<u32>;
    } & Struct;
    readonly isMoreThanProportion: boolean;
    readonly asMoreThanProportion: {
      readonly nom: Compact<u32>;
      readonly denom: Compact<u32>;
    } & Struct;
    readonly type: 'Voice' | 'Members' | 'Fraction' | 'AtLeastProportion' | 'MoreThanProportion';
  }

  /** @name XcmV2MultiassetFungibility (121) */
  interface XcmV2MultiassetFungibility extends Enum {
    readonly isFungible: boolean;
    readonly asFungible: Compact<u128>;
    readonly isNonFungible: boolean;
    readonly asNonFungible: XcmV2MultiassetAssetInstance;
    readonly type: 'Fungible' | 'NonFungible';
  }

  /** @name XcmV2MultiassetAssetInstance (122) */
  interface XcmV2MultiassetAssetInstance extends Enum {
    readonly isUndefined: boolean;
    readonly isIndex: boolean;
    readonly asIndex: Compact<u128>;
    readonly isArray4: boolean;
    readonly asArray4: U8aFixed;
    readonly isArray8: boolean;
    readonly asArray8: U8aFixed;
    readonly isArray16: boolean;
    readonly asArray16: U8aFixed;
    readonly isArray32: boolean;
    readonly asArray32: U8aFixed;
    readonly isBlob: boolean;
    readonly asBlob: Bytes;
    readonly type: 'Undefined' | 'Index' | 'Array4' | 'Array8' | 'Array16' | 'Array32' | 'Blob';
  }

  /** @name XcmV3MultiassetMultiAssets (123) */
  interface XcmV3MultiassetMultiAssets extends Vec<XcmV3MultiAsset> {}

  /** @name XcmV3MultiAsset (125) */
  interface XcmV3MultiAsset extends Struct {
    readonly id: XcmV3MultiassetAssetId;
    readonly fun: XcmV3MultiassetFungibility;
  }

  /** @name XcmV3MultiassetAssetId (126) */
  interface XcmV3MultiassetAssetId extends Enum {
    readonly isConcrete: boolean;
    readonly asConcrete: StagingXcmV3MultiLocation;
    readonly isAbstract: boolean;
    readonly asAbstract: U8aFixed;
    readonly type: 'Concrete' | 'Abstract';
  }

  /** @name StagingXcmV3MultiLocation (127) */
  interface StagingXcmV3MultiLocation extends Struct {
    readonly parents: u8;
    readonly interior: XcmV3Junctions;
  }

  /** @name XcmV3Junctions (128) */
  interface XcmV3Junctions extends Enum {
    readonly isHere: boolean;
    readonly isX1: boolean;
    readonly asX1: XcmV3Junction;
    readonly isX2: boolean;
    readonly asX2: ITuple<[XcmV3Junction, XcmV3Junction]>;
    readonly isX3: boolean;
    readonly asX3: ITuple<[XcmV3Junction, XcmV3Junction, XcmV3Junction]>;
    readonly isX4: boolean;
    readonly asX4: ITuple<[XcmV3Junction, XcmV3Junction, XcmV3Junction, XcmV3Junction]>;
    readonly isX5: boolean;
    readonly asX5: ITuple<[XcmV3Junction, XcmV3Junction, XcmV3Junction, XcmV3Junction, XcmV3Junction]>;
    readonly isX6: boolean;
    readonly asX6: ITuple<[XcmV3Junction, XcmV3Junction, XcmV3Junction, XcmV3Junction, XcmV3Junction, XcmV3Junction]>;
    readonly isX7: boolean;
    readonly asX7: ITuple<[XcmV3Junction, XcmV3Junction, XcmV3Junction, XcmV3Junction, XcmV3Junction, XcmV3Junction, XcmV3Junction]>;
    readonly isX8: boolean;
    readonly asX8: ITuple<[XcmV3Junction, XcmV3Junction, XcmV3Junction, XcmV3Junction, XcmV3Junction, XcmV3Junction, XcmV3Junction, XcmV3Junction]>;
    readonly type: 'Here' | 'X1' | 'X2' | 'X3' | 'X4' | 'X5' | 'X6' | 'X7' | 'X8';
  }

  /** @name XcmV3Junction (129) */
  interface XcmV3Junction extends Enum {
    readonly isParachain: boolean;
    readonly asParachain: Compact<u32>;
    readonly isAccountId32: boolean;
    readonly asAccountId32: {
      readonly network: Option<XcmV3JunctionNetworkId>;
      readonly id: U8aFixed;
    } & Struct;
    readonly isAccountIndex64: boolean;
    readonly asAccountIndex64: {
      readonly network: Option<XcmV3JunctionNetworkId>;
      readonly index: Compact<u64>;
    } & Struct;
    readonly isAccountKey20: boolean;
    readonly asAccountKey20: {
      readonly network: Option<XcmV3JunctionNetworkId>;
      readonly key: U8aFixed;
    } & Struct;
    readonly isPalletInstance: boolean;
    readonly asPalletInstance: u8;
    readonly isGeneralIndex: boolean;
    readonly asGeneralIndex: Compact<u128>;
    readonly isGeneralKey: boolean;
    readonly asGeneralKey: {
      readonly length: u8;
      readonly data: U8aFixed;
    } & Struct;
    readonly isOnlyChild: boolean;
    readonly isPlurality: boolean;
    readonly asPlurality: {
      readonly id: XcmV3JunctionBodyId;
      readonly part: XcmV3JunctionBodyPart;
    } & Struct;
    readonly isGlobalConsensus: boolean;
    readonly asGlobalConsensus: XcmV3JunctionNetworkId;
    readonly type: 'Parachain' | 'AccountId32' | 'AccountIndex64' | 'AccountKey20' | 'PalletInstance' | 'GeneralIndex' | 'GeneralKey' | 'OnlyChild' | 'Plurality' | 'GlobalConsensus';
  }

  /** @name XcmV3JunctionNetworkId (131) */
  interface XcmV3JunctionNetworkId extends Enum {
    readonly isByGenesis: boolean;
    readonly asByGenesis: U8aFixed;
    readonly isByFork: boolean;
    readonly asByFork: {
      readonly blockNumber: u64;
      readonly blockHash: U8aFixed;
    } & Struct;
    readonly isPolkadot: boolean;
    readonly isKusama: boolean;
    readonly isWestend: boolean;
    readonly isRococo: boolean;
    readonly isWococo: boolean;
    readonly isEthereum: boolean;
    readonly asEthereum: {
      readonly chainId: Compact<u64>;
    } & Struct;
    readonly isBitcoinCore: boolean;
    readonly isBitcoinCash: boolean;
    readonly isPolkadotBulletin: boolean;
    readonly type: 'ByGenesis' | 'ByFork' | 'Polkadot' | 'Kusama' | 'Westend' | 'Rococo' | 'Wococo' | 'Ethereum' | 'BitcoinCore' | 'BitcoinCash' | 'PolkadotBulletin';
  }

  /** @name XcmV3MultiassetFungibility (132) */
  interface XcmV3MultiassetFungibility extends Enum {
    readonly isFungible: boolean;
    readonly asFungible: Compact<u128>;
    readonly isNonFungible: boolean;
    readonly asNonFungible: XcmV3MultiassetAssetInstance;
    readonly type: 'Fungible' | 'NonFungible';
  }

  /** @name XcmV3MultiassetAssetInstance (133) */
  interface XcmV3MultiassetAssetInstance extends Enum {
    readonly isUndefined: boolean;
    readonly isIndex: boolean;
    readonly asIndex: Compact<u128>;
    readonly isArray4: boolean;
    readonly asArray4: U8aFixed;
    readonly isArray8: boolean;
    readonly asArray8: U8aFixed;
    readonly isArray16: boolean;
    readonly asArray16: U8aFixed;
    readonly isArray32: boolean;
    readonly asArray32: U8aFixed;
    readonly type: 'Undefined' | 'Index' | 'Array4' | 'Array8' | 'Array16' | 'Array32';
  }

  /** @name XcmVersionedLocation (134) */
  interface XcmVersionedLocation extends Enum {
    readonly isV2: boolean;
    readonly asV2: XcmV2MultiLocation;
    readonly isV3: boolean;
    readonly asV3: StagingXcmV3MultiLocation;
    readonly isV4: boolean;
    readonly asV4: StagingXcmV4Location;
    readonly type: 'V2' | 'V3' | 'V4';
  }

  /** @name CumulusPalletXcmEvent (135) */
  interface CumulusPalletXcmEvent extends Enum {
    readonly isInvalidFormat: boolean;
    readonly asInvalidFormat: U8aFixed;
    readonly isUnsupportedVersion: boolean;
    readonly asUnsupportedVersion: U8aFixed;
    readonly isExecutedDownward: boolean;
    readonly asExecutedDownward: ITuple<[U8aFixed, StagingXcmV4TraitsOutcome]>;
    readonly type: 'InvalidFormat' | 'UnsupportedVersion' | 'ExecutedDownward';
  }

  /** @name CumulusPalletDmpQueueEvent (136) */
  interface CumulusPalletDmpQueueEvent extends Enum {
    readonly isStartedExport: boolean;
    readonly isExported: boolean;
    readonly asExported: {
      readonly page: u32;
    } & Struct;
    readonly isExportFailed: boolean;
    readonly asExportFailed: {
      readonly page: u32;
    } & Struct;
    readonly isCompletedExport: boolean;
    readonly isStartedOverweightExport: boolean;
    readonly isExportedOverweight: boolean;
    readonly asExportedOverweight: {
      readonly index: u64;
    } & Struct;
    readonly isExportOverweightFailed: boolean;
    readonly asExportOverweightFailed: {
      readonly index: u64;
    } & Struct;
    readonly isCompletedOverweightExport: boolean;
    readonly isStartedCleanup: boolean;
    readonly isCleanedSome: boolean;
    readonly asCleanedSome: {
      readonly keysRemoved: u32;
    } & Struct;
    readonly isCompleted: boolean;
    readonly asCompleted: {
      readonly error: bool;
    } & Struct;
    readonly type: 'StartedExport' | 'Exported' | 'ExportFailed' | 'CompletedExport' | 'StartedOverweightExport' | 'ExportedOverweight' | 'ExportOverweightFailed' | 'CompletedOverweightExport' | 'StartedCleanup' | 'CleanedSome' | 'Completed';
  }

  /** @name OrmlXcmModuleEvent (137) */
  interface OrmlXcmModuleEvent extends Enum {
    readonly isSent: boolean;
    readonly asSent: {
      readonly to: StagingXcmV4Location;
      readonly message: StagingXcmV4Xcm;
    } & Struct;
    readonly type: 'Sent';
  }

  /** @name MatrixPalletXcmEvent (138) */
  interface MatrixPalletXcmEvent extends Enum {
    readonly isMinimumWeightUpdated: boolean;
    readonly asMinimumWeightUpdated: MatrixPalletXcmMinimumWeightFeePair;
    readonly isXcmTransferFailed: boolean;
    readonly asXcmTransferFailed: SpRuntimeDispatchError;
    readonly type: 'MinimumWeightUpdated' | 'XcmTransferFailed';
  }

  /** @name MatrixPalletXcmMinimumWeightFeePair (139) */
  interface MatrixPalletXcmMinimumWeightFeePair extends Struct {
    readonly minimumWeight: SpWeightsWeightV2Weight;
    readonly fee: Compact<u128>;
  }

  /** @name OrmlUnknownTokensModuleEvent (140) */
  interface OrmlUnknownTokensModuleEvent extends Enum {
    readonly isDeposited: boolean;
    readonly asDeposited: {
      readonly asset: StagingXcmV4Asset;
      readonly who: StagingXcmV4Location;
    } & Struct;
    readonly isWithdrawn: boolean;
    readonly asWithdrawn: {
      readonly asset: StagingXcmV4Asset;
      readonly who: StagingXcmV4Location;
    } & Struct;
    readonly type: 'Deposited' | 'Withdrawn';
  }

  /** @name OrmlXtokensModuleEvent (141) */
  interface OrmlXtokensModuleEvent extends Enum {
    readonly isTransferredAssets: boolean;
    readonly asTransferredAssets: {
      readonly sender: AccountId32;
      readonly assets: StagingXcmV4AssetAssets;
      readonly fee: StagingXcmV4Asset;
      readonly dest: StagingXcmV4Location;
    } & Struct;
    readonly type: 'TransferredAssets';
  }

  /** @name PalletMessageQueueEvent (142) */
  interface PalletMessageQueueEvent extends Enum {
    readonly isProcessingFailed: boolean;
    readonly asProcessingFailed: {
      readonly id: H256;
      readonly origin: CumulusPrimitivesCoreAggregateMessageOrigin;
      readonly error: FrameSupportMessagesProcessMessageError;
    } & Struct;
    readonly isProcessed: boolean;
    readonly asProcessed: {
      readonly id: H256;
      readonly origin: CumulusPrimitivesCoreAggregateMessageOrigin;
      readonly weightUsed: SpWeightsWeightV2Weight;
      readonly success: bool;
    } & Struct;
    readonly isOverweightEnqueued: boolean;
    readonly asOverweightEnqueued: {
      readonly id: U8aFixed;
      readonly origin: CumulusPrimitivesCoreAggregateMessageOrigin;
      readonly pageIndex: u32;
      readonly messageIndex: u32;
    } & Struct;
    readonly isPageReaped: boolean;
    readonly asPageReaped: {
      readonly origin: CumulusPrimitivesCoreAggregateMessageOrigin;
      readonly index: u32;
    } & Struct;
    readonly type: 'ProcessingFailed' | 'Processed' | 'OverweightEnqueued' | 'PageReaped';
  }

  /** @name CumulusPrimitivesCoreAggregateMessageOrigin (143) */
  interface CumulusPrimitivesCoreAggregateMessageOrigin extends Enum {
    readonly isHere: boolean;
    readonly isParent: boolean;
    readonly isSibling: boolean;
    readonly asSibling: u32;
    readonly type: 'Here' | 'Parent' | 'Sibling';
  }

  /** @name FrameSupportMessagesProcessMessageError (145) */
  interface FrameSupportMessagesProcessMessageError extends Enum {
    readonly isBadFormat: boolean;
    readonly isCorrupt: boolean;
    readonly isUnsupported: boolean;
    readonly isOverweight: boolean;
    readonly asOverweight: SpWeightsWeightV2Weight;
    readonly isYield: boolean;
    readonly type: 'BadFormat' | 'Corrupt' | 'Unsupported' | 'Overweight' | 'Yield';
  }

  /** @name PalletBountiesEvent (146) */
  interface PalletBountiesEvent extends Enum {
    readonly isBountyProposed: boolean;
    readonly asBountyProposed: {
      readonly index: u32;
    } & Struct;
    readonly isBountyRejected: boolean;
    readonly asBountyRejected: {
      readonly index: u32;
      readonly bond: u128;
    } & Struct;
    readonly isBountyBecameActive: boolean;
    readonly asBountyBecameActive: {
      readonly index: u32;
    } & Struct;
    readonly isBountyAwarded: boolean;
    readonly asBountyAwarded: {
      readonly index: u32;
      readonly beneficiary: AccountId32;
    } & Struct;
    readonly isBountyClaimed: boolean;
    readonly asBountyClaimed: {
      readonly index: u32;
      readonly payout: u128;
      readonly beneficiary: AccountId32;
    } & Struct;
    readonly isBountyCanceled: boolean;
    readonly asBountyCanceled: {
      readonly index: u32;
    } & Struct;
    readonly isBountyExtended: boolean;
    readonly asBountyExtended: {
      readonly index: u32;
    } & Struct;
    readonly isBountyApproved: boolean;
    readonly asBountyApproved: {
      readonly index: u32;
    } & Struct;
    readonly isCuratorProposed: boolean;
    readonly asCuratorProposed: {
      readonly bountyId: u32;
      readonly curator: AccountId32;
    } & Struct;
    readonly isCuratorUnassigned: boolean;
    readonly asCuratorUnassigned: {
      readonly bountyId: u32;
    } & Struct;
    readonly isCuratorAccepted: boolean;
    readonly asCuratorAccepted: {
      readonly bountyId: u32;
      readonly curator: AccountId32;
    } & Struct;
    readonly type: 'BountyProposed' | 'BountyRejected' | 'BountyBecameActive' | 'BountyAwarded' | 'BountyClaimed' | 'BountyCanceled' | 'BountyExtended' | 'BountyApproved' | 'CuratorProposed' | 'CuratorUnassigned' | 'CuratorAccepted';
  }

  /** @name PalletMultiTokensEvent (147) */
  interface PalletMultiTokensEvent extends Enum {
    readonly isCollectionCreated: boolean;
    readonly asCollectionCreated: {
      readonly collectionId: u128;
      readonly owner: AccountId32;
    } & Struct;
    readonly isCollectionDestroyed: boolean;
    readonly asCollectionDestroyed: {
      readonly collectionId: u128;
      readonly caller: AccountId32;
    } & Struct;
    readonly isCollectionMutated: boolean;
    readonly asCollectionMutated: {
      readonly collectionId: u128;
      readonly mutation: EpMultiTokensCollectionDefaultCollectionMutation;
    } & Struct;
    readonly isMinted: boolean;
    readonly asMinted: {
      readonly collectionId: u128;
      readonly tokenId: u128;
      readonly issuer: EpMultiTokensRootOrSigned;
      readonly recipient: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isTokenCreated: boolean;
    readonly asTokenCreated: {
      readonly collectionId: u128;
      readonly tokenId: u128;
      readonly issuer: EpMultiTokensRootOrSigned;
      readonly initialSupply: u128;
    } & Struct;
    readonly isTokenMutated: boolean;
    readonly asTokenMutated: {
      readonly collectionId: u128;
      readonly tokenId: u128;
      readonly mutation: EpMultiTokensTokenDefaultTokenMutation;
    } & Struct;
    readonly isBurned: boolean;
    readonly asBurned: {
      readonly collectionId: u128;
      readonly tokenId: u128;
      readonly accountId: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isTokenDestroyed: boolean;
    readonly asTokenDestroyed: {
      readonly collectionId: u128;
      readonly tokenId: u128;
      readonly caller: AccountId32;
    } & Struct;
    readonly isTransferred: boolean;
    readonly asTransferred: {
      readonly collectionId: u128;
      readonly tokenId: u128;
      readonly operator: AccountId32;
      readonly from: AccountId32;
      readonly to: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isFrozen: boolean;
    readonly asFrozen: EpMultiTokensFreeze;
    readonly isThawed: boolean;
    readonly asThawed: EpMultiTokensFreeze;
    readonly isAttributeSet: boolean;
    readonly asAttributeSet: {
      readonly collectionId: u128;
      readonly tokenId: Option<u128>;
      readonly key: Bytes;
      readonly value: Bytes;
    } & Struct;
    readonly isAttributeRemoved: boolean;
    readonly asAttributeRemoved: {
      readonly collectionId: u128;
      readonly tokenId: Option<u128>;
      readonly key: Bytes;
    } & Struct;
    readonly isApproved: boolean;
    readonly asApproved: {
      readonly collectionId: u128;
      readonly tokenId: Option<u128>;
      readonly owner: AccountId32;
      readonly operator: AccountId32;
      readonly amount: Option<u128>;
      readonly expiration: Option<u32>;
    } & Struct;
    readonly isUnapproved: boolean;
    readonly asUnapproved: {
      readonly collectionId: u128;
      readonly tokenId: Option<u128>;
      readonly owner: AccountId32;
      readonly operator: AccountId32;
    } & Struct;
    readonly isCollectionAccountCreated: boolean;
    readonly asCollectionAccountCreated: {
      readonly collectionId: u128;
      readonly accountId: AccountId32;
    } & Struct;
    readonly isTokenAccountCreated: boolean;
    readonly asTokenAccountCreated: {
      readonly collectionId: u128;
      readonly tokenId: u128;
      readonly accountId: AccountId32;
      readonly balance: u128;
    } & Struct;
    readonly isCollectionAccountDestroyed: boolean;
    readonly asCollectionAccountDestroyed: {
      readonly collectionId: u128;
      readonly accountId: AccountId32;
    } & Struct;
    readonly isTokenAccountDestroyed: boolean;
    readonly asTokenAccountDestroyed: {
      readonly collectionId: u128;
      readonly tokenId: u128;
      readonly accountId: AccountId32;
    } & Struct;
    readonly isTokenAccountDepositUpdated: boolean;
    readonly asTokenAccountDepositUpdated: {
      readonly collectionId: u128;
      readonly tokenId: u128;
      readonly depositor: AccountId32;
      readonly deltaAccountCount: i32;
    } & Struct;
    readonly isReserved: boolean;
    readonly asReserved: {
      readonly collectionId: u128;
      readonly tokenId: u128;
      readonly accountId: AccountId32;
      readonly amount: u128;
      readonly reserveId: Option<U8aFixed>;
    } & Struct;
    readonly isUnreserved: boolean;
    readonly asUnreserved: {
      readonly collectionId: u128;
      readonly tokenId: u128;
      readonly accountId: AccountId32;
      readonly amount: u128;
      readonly reserveId: Option<U8aFixed>;
    } & Struct;
    readonly isMovedReserves: boolean;
    readonly asMovedReserves: {
      readonly collectionId: u128;
      readonly tokenId: u128;
      readonly source: AccountId32;
      readonly destination: AccountId32;
      readonly amount: u128;
      readonly reserveId: Option<U8aFixed>;
    } & Struct;
    readonly isReserveRepatriated: boolean;
    readonly asReserveRepatriated: {
      readonly collectionId: u128;
      readonly tokenId: u128;
      readonly source: AccountId32;
      readonly destination: AccountId32;
      readonly amount: u128;
      readonly reserveId: Option<U8aFixed>;
    } & Struct;
    readonly isBalanceSet: boolean;
    readonly asBalanceSet: {
      readonly collectionId: u128;
      readonly tokenId: u128;
      readonly accountId: AccountId32;
      readonly balance: u128;
      readonly reservedBalance: u128;
    } & Struct;
    readonly isWithdraw: boolean;
    readonly asWithdraw: {
      readonly collectionId: u128;
      readonly tokenId: u128;
      readonly accountId: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isDeposit: boolean;
    readonly asDeposit: {
      readonly collectionId: u128;
      readonly tokenId: u128;
      readonly accountId: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isSlashed: boolean;
    readonly asSlashed: {
      readonly collectionId: u128;
      readonly tokenId: u128;
      readonly accountId: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isCollectionUpdated: boolean;
    readonly asCollectionUpdated: {
      readonly collectionId: u128;
      readonly value: Option<EpMultiTokensCollection>;
    } & Struct;
    readonly isTokenUpdated: boolean;
    readonly asTokenUpdated: {
      readonly collectionId: u128;
      readonly tokenId: u128;
      readonly value: Option<EpMultiTokensToken>;
    } & Struct;
    readonly isNextCollectionIdUpdated: boolean;
    readonly asNextCollectionIdUpdated: {
      readonly collectionId: u128;
    } & Struct;
    readonly isCollectionAccountUpdated: boolean;
    readonly asCollectionAccountUpdated: {
      readonly collectionId: u128;
      readonly accountId: AccountId32;
      readonly value: Option<PalletMultiTokensFeaturesCollectionTypesCollectionAccount>;
    } & Struct;
    readonly isTokenAccountUpdated: boolean;
    readonly asTokenAccountUpdated: {
      readonly collectionId: u128;
      readonly tokenId: u128;
      readonly accountId: AccountId32;
      readonly value: Option<PalletMultiTokensFeaturesTokenTypesTokenAccount>;
    } & Struct;
    readonly isClaimedCollections: boolean;
    readonly asClaimedCollections: {
      readonly accountId: AccountId32;
      readonly ethereumAddress: H160;
      readonly collectionIds: Vec<u128>;
    } & Struct;
    readonly isClaimedTokens: boolean;
    readonly asClaimedTokens: {
      readonly accountId: AccountId32;
      readonly ethereumAddress: H160;
      readonly assetIds: Vec<PalletMultiTokensFeaturesClaimAssetIdWithEth>;
      readonly moreTokensRemain: bool;
    } & Struct;
    readonly isClaimTokensInitiated: boolean;
    readonly asClaimTokensInitiated: {
      readonly accountId: AccountId32;
      readonly ethereumAddress: H160;
    } & Struct;
    readonly isClaimTokensCompleted: boolean;
    readonly asClaimTokensCompleted: {
      readonly destination: AccountId32;
      readonly ethereumAddress: H160;
    } & Struct;
    readonly isCollectionTransferred: boolean;
    readonly asCollectionTransferred: {
      readonly collectionId: u128;
      readonly newOwner: AccountId32;
    } & Struct;
    readonly isCollectionTransferCancelled: boolean;
    readonly asCollectionTransferCancelled: {
      readonly collectionId: u128;
    } & Struct;
    readonly isInfused: boolean;
    readonly asInfused: {
      readonly collectionId: u128;
      readonly tokenId: u128;
      readonly accountId: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isMigrationStep: boolean;
    readonly asMigrationStep: {
      readonly itemsProcessed: u32;
      readonly phase: u8;
    } & Struct;
    readonly type: 'CollectionCreated' | 'CollectionDestroyed' | 'CollectionMutated' | 'Minted' | 'TokenCreated' | 'TokenMutated' | 'Burned' | 'TokenDestroyed' | 'Transferred' | 'Frozen' | 'Thawed' | 'AttributeSet' | 'AttributeRemoved' | 'Approved' | 'Unapproved' | 'CollectionAccountCreated' | 'TokenAccountCreated' | 'CollectionAccountDestroyed' | 'TokenAccountDestroyed' | 'TokenAccountDepositUpdated' | 'Reserved' | 'Unreserved' | 'MovedReserves' | 'ReserveRepatriated' | 'BalanceSet' | 'Withdraw' | 'Deposit' | 'Slashed' | 'CollectionUpdated' | 'TokenUpdated' | 'NextCollectionIdUpdated' | 'CollectionAccountUpdated' | 'TokenAccountUpdated' | 'ClaimedCollections' | 'ClaimedTokens' | 'ClaimTokensInitiated' | 'ClaimTokensCompleted' | 'CollectionTransferred' | 'CollectionTransferCancelled' | 'Infused' | 'MigrationStep';
  }

  /** @name EpMultiTokensCollectionDefaultCollectionMutation (148) */
  interface EpMultiTokensCollectionDefaultCollectionMutation extends Struct {
    readonly owner: Option<AccountId32>;
    readonly royalty: {
      readonly isNoMutation: boolean;
      readonly isSomeMutation: boolean;
      readonly asSomeMutation: Option<EpMultiTokensPolicyMarketDefaultRoyalty>;
      readonly type: 'NoMutation' | 'SomeMutation';
    } & Enum;
    readonly explicitRoyaltyCurrencies: Option<Vec<EpMultiTokensTokenAssetId>>;
  }

  /** @name EpMultiTokensPolicyMarketDefaultRoyalty (149) */
  interface EpMultiTokensPolicyMarketDefaultRoyalty extends Struct {
    readonly beneficiary: AccountId32;
    readonly percentage: Compact<Perbill>;
  }

  /** @name EpMultiTokensTokenAssetId (152) */
  interface EpMultiTokensTokenAssetId extends Struct {
    readonly collectionId: Compact<u128>;
    readonly tokenId: Compact<u128>;
  }

  /** @name EpMultiTokensRootOrSigned (158) */
  interface EpMultiTokensRootOrSigned extends Enum {
    readonly isRoot: boolean;
    readonly isSigned: boolean;
    readonly asSigned: AccountId32;
    readonly type: 'Root' | 'Signed';
  }

  /** @name EpMultiTokensTokenDefaultTokenMutation (159) */
  interface EpMultiTokensTokenDefaultTokenMutation extends Struct {
    readonly behavior: {
      readonly isNoMutation: boolean;
      readonly isSomeMutation: boolean;
      readonly asSomeMutation: Option<EpMultiTokensTokenTokenMarketBehavior>;
      readonly type: 'NoMutation' | 'SomeMutation';
    } & Enum;
    readonly listingForbidden: EpMultiTokensShouldMutateBool;
    readonly anyoneCanInfuse: EpMultiTokensShouldMutateBool;
    readonly name: EpMultiTokensShouldMutateBoundedString;
  }

  /** @name EnjinMatrixRuntimeForeignTokenNameLength (161) */
  type EnjinMatrixRuntimeForeignTokenNameLength = Null;

  /** @name EpMultiTokensTokenTokenMarketBehavior (165) */
  interface EpMultiTokensTokenTokenMarketBehavior extends Enum {
    readonly isHasRoyalty: boolean;
    readonly asHasRoyalty: EpMultiTokensPolicyMarketDefaultRoyalty;
    readonly isIsCurrency: boolean;
    readonly type: 'HasRoyalty' | 'IsCurrency';
  }

  /** @name EpMultiTokensShouldMutateBool (166) */
  interface EpMultiTokensShouldMutateBool extends Enum {
    readonly isNoMutation: boolean;
    readonly isSomeMutation: boolean;
    readonly asSomeMutation: bool;
    readonly type: 'NoMutation' | 'SomeMutation';
  }

  /** @name EpMultiTokensShouldMutateBoundedString (167) */
  interface EpMultiTokensShouldMutateBoundedString extends Enum {
    readonly isNoMutation: boolean;
    readonly isSomeMutation: boolean;
    readonly asSomeMutation: Bytes;
    readonly type: 'NoMutation' | 'SomeMutation';
  }

  /** @name EpMultiTokensFreeze (168) */
  interface EpMultiTokensFreeze extends Struct {
    readonly collectionId: Compact<u128>;
    readonly freezeType: EpMultiTokensFreezeType;
  }

  /** @name EpMultiTokensFreezeType (169) */
  interface EpMultiTokensFreezeType extends Enum {
    readonly isCollection: boolean;
    readonly isToken: boolean;
    readonly asToken: {
      readonly tokenId: u128;
      readonly freezeState: Option<EpMultiTokensTokenFreezeState>;
    } & Struct;
    readonly isCollectionAccount: boolean;
    readonly asCollectionAccount: AccountId32;
    readonly isTokenAccount: boolean;
    readonly asTokenAccount: {
      readonly tokenId: Compact<u128>;
      readonly accountId: AccountId32;
    } & Struct;
    readonly type: 'Collection' | 'Token' | 'CollectionAccount' | 'TokenAccount';
  }

  /** @name EpMultiTokensTokenFreezeState (171) */
  interface EpMultiTokensTokenFreezeState extends Enum {
    readonly isPermanent: boolean;
    readonly isTemporary: boolean;
    readonly isNever: boolean;
    readonly type: 'Permanent' | 'Temporary' | 'Never';
  }

  /** @name EpMultiTokensCollection (179) */
  interface EpMultiTokensCollection extends Struct {
    readonly owner: AccountId32;
    readonly policy: EpMultiTokensPolicyDefaultCollectionPolicy;
    readonly tokenCount: Compact<u64>;
    readonly attributeCount: Compact<u32>;
    readonly creationDeposit: EpCoreFrameTypesDeposit;
    readonly totalDeposit: Compact<u128>;
    readonly explicitRoyaltyCurrencies: BTreeMap<EpMultiTokensTokenAssetId, Null>;
    readonly totalInfusion: Compact<u128>;
  }

  /** @name EpMultiTokensPolicyDefaultCollectionPolicy (180) */
  interface EpMultiTokensPolicyDefaultCollectionPolicy extends Struct {
    readonly mint: EpMultiTokensPolicyMintDefaultMintPolicy;
    readonly burn: EpMultiTokensPolicyBurnDefaultBurnPolicy;
    readonly transfer: EpMultiTokensPolicyTransferDefaultTransferPolicy;
    readonly attribute: EpMultiTokensPolicyAttributeDefaultAttributePolicy;
    readonly market: EpMultiTokensPolicyMarketDefaultMarketPolicy;
  }

  /** @name EpMultiTokensPolicyMintDefaultMintPolicy (181) */
  interface EpMultiTokensPolicyMintDefaultMintPolicy extends Struct {
    readonly maxTokenCount: Option<u64>;
    readonly maxTokenSupply: Option<u128>;
    readonly forceCollapsingSupply: bool;
  }

  /** @name EpMultiTokensPolicyBurnDefaultBurnPolicy (183) */
  type EpMultiTokensPolicyBurnDefaultBurnPolicy = Null;

  /** @name EpMultiTokensPolicyTransferDefaultTransferPolicy (184) */
  interface EpMultiTokensPolicyTransferDefaultTransferPolicy extends Struct {
    readonly isFrozen: bool;
  }

  /** @name EpMultiTokensPolicyAttributeDefaultAttributePolicy (185) */
  type EpMultiTokensPolicyAttributeDefaultAttributePolicy = Null;

  /** @name EpMultiTokensPolicyMarketDefaultMarketPolicy (186) */
  interface EpMultiTokensPolicyMarketDefaultMarketPolicy extends Struct {
    readonly royalty: Option<EpMultiTokensPolicyMarketDefaultRoyalty>;
  }

  /** @name EpCoreFrameTypesDeposit (191) */
  interface EpCoreFrameTypesDeposit extends Struct {
    readonly depositor: AccountId32;
    readonly amount: Compact<u128>;
  }

  /** @name EpMultiTokensToken (193) */
  interface EpMultiTokensToken extends Struct {
    readonly supply: Compact<u128>;
    readonly cap: Option<EpMultiTokensTokenTokenCap>;
    readonly freezeState: Option<EpMultiTokensTokenFreezeState>;
    readonly requiresDeposit: bool;
    readonly creationDeposit: EpCoreFrameTypesAmbiguousDeposit;
    readonly ownerDeposit: Compact<u128>;
    readonly totalTokenAccountDeposit: Compact<u128>;
    readonly attributeCount: Compact<u32>;
    readonly accountCount: Compact<u32>;
    readonly marketBehavior: Option<EpMultiTokensTokenTokenMarketBehavior>;
    readonly listingForbidden: bool;
    readonly metadata: EpMultiTokensFrameDefaultTokenMetadata;
    readonly infusion: u128;
    readonly anyoneCanInfuse: bool;
    readonly groups: BTreeSet<u128>;
  }

  /** @name EpMultiTokensFrameDefaultTokenMetadata (194) */
  interface EpMultiTokensFrameDefaultTokenMetadata extends Struct {
    readonly decimalCount: u8;
    readonly name: Bytes;
    readonly symbol: Bytes;
    readonly foreign: Option<EpMultiTokensFrameDefaultForeignTokenMetadata>;
  }

  /** @name EnjinMatrixRuntimeForeignTokenSymbolLength (196) */
  type EnjinMatrixRuntimeForeignTokenSymbolLength = Null;

  /** @name EpMultiTokensFrameDefaultForeignTokenMetadata (198) */
  interface EpMultiTokensFrameDefaultForeignTokenMetadata extends Struct {
    readonly location: Option<StagingXcmV4Location>;
    readonly unitsPerSecond: Option<u128>;
  }

  /** @name EpMultiTokensTokenTokenCap (204) */
  interface EpMultiTokensTokenTokenCap extends Enum {
    readonly isSupply: boolean;
    readonly asSupply: Compact<u128>;
    readonly isCollapsingSupply: boolean;
    readonly asCollapsingSupply: Compact<u128>;
    readonly type: 'Supply' | 'CollapsingSupply';
  }

  /** @name EpCoreFrameTypesAmbiguousDeposit (205) */
  interface EpCoreFrameTypesAmbiguousDeposit extends Struct {
    readonly depositor: Option<AccountId32>;
    readonly amount: Compact<u128>;
  }

  /** @name PalletMultiTokensFeaturesCollectionTypesCollectionAccount (207) */
  interface PalletMultiTokensFeaturesCollectionTypesCollectionAccount extends Struct {
    readonly isFrozen: bool;
    readonly approvals: BTreeMap<AccountId32, Option<u32>>;
    readonly accountCount: Compact<u32>;
  }

  /** @name EnjinMatrixRuntimeMaxOperatorsPerAccount (208) */
  type EnjinMatrixRuntimeMaxOperatorsPerAccount = Null;

  /** @name PalletMultiTokensFeaturesTokenTypesTokenAccount (214) */
  interface PalletMultiTokensFeaturesTokenTypesTokenAccount extends Struct {
    readonly balance: Compact<u128>;
    readonly reservedBalance: Compact<u128>;
    readonly lockedBalance: Compact<u128>;
    readonly namedReserves: BTreeMap<U8aFixed, u128>;
    readonly locks: BTreeMap<U8aFixed, u128>;
    readonly approvals: BTreeMap<AccountId32, PalletMultiTokensFeaturesOperatorTypesApproval>;
    readonly isFrozen: bool;
    readonly deposit: Option<EpCoreFrameTypesDeposit>;
  }

  /** @name PalletMultiTokensFeaturesOperatorTypesApproval (215) */
  interface PalletMultiTokensFeaturesOperatorTypesApproval extends Struct {
    readonly amount: Compact<u128>;
    readonly expiration: Option<u32>;
  }

  /** @name EnjinMatrixRuntimeMaxReserves (216) */
  type EnjinMatrixRuntimeMaxReserves = Null;

  /** @name EnjinMatrixRuntimeMaxLocks (217) */
  type EnjinMatrixRuntimeMaxLocks = Null;

  /** @name PalletMultiTokensFeaturesClaimAssetIdWithEth (230) */
  interface PalletMultiTokensFeaturesClaimAssetIdWithEth extends Struct {
    readonly ethereumCollectionId: u128;
    readonly collectionId: u128;
    readonly tokenId: u128;
  }

  /** @name PalletPoolsEvent (231) */
  interface PalletPoolsEvent extends Enum {
    readonly isPoolsMutated: boolean;
    readonly asPoolsMutated: PalletPoolsPoolsMutation;
    readonly type: 'PoolsMutated';
  }

  /** @name PalletPoolsPoolsMutation (232) */
  interface PalletPoolsPoolsMutation extends Struct {
    readonly community: EpCoreFrameTypesPool;
    readonly collator: EpCoreFrameTypesPool;
    readonly fuelTanks: EpCoreFrameTypesPool;
    readonly priceDiscovery: EpCoreFrameTypesPool;
  }

  /** @name EpCoreFrameTypesPool (233) */
  interface EpCoreFrameTypesPool extends Struct {
    readonly feeShare: Perbill;
  }

  /** @name PalletFuelTanksEvent (234) */
  interface PalletFuelTanksEvent extends Enum {
    readonly isFuelTankCreated: boolean;
    readonly asFuelTankCreated: {
      readonly owner: AccountId32;
      readonly name: Bytes;
      readonly tankId: AccountId32;
    } & Struct;
    readonly isFuelTankMutated: boolean;
    readonly asFuelTankMutated: {
      readonly tankId: AccountId32;
      readonly mutation: PalletFuelTanksImplsDefaultTankMutation;
    } & Struct;
    readonly isFuelTankDestroyed: boolean;
    readonly asFuelTankDestroyed: {
      readonly tankId: AccountId32;
    } & Struct;
    readonly isCallDispatched: boolean;
    readonly asCallDispatched: {
      readonly caller: AccountId32;
      readonly tankId: AccountId32;
    } & Struct;
    readonly isAccountAdded: boolean;
    readonly asAccountAdded: {
      readonly tankId: AccountId32;
      readonly userId: AccountId32;
      readonly tankDeposit: u128;
      readonly userDeposit: u128;
      readonly totalReceived: u128;
    } & Struct;
    readonly isAccountRemoved: boolean;
    readonly asAccountRemoved: {
      readonly tankId: AccountId32;
      readonly userId: AccountId32;
    } & Struct;
    readonly isAccountRuleDataRemoved: boolean;
    readonly asAccountRuleDataRemoved: {
      readonly tankId: AccountId32;
      readonly userId: AccountId32;
      readonly ruleSetId: u32;
      readonly ruleKind: PalletFuelTanksRulesDispatchRuleKind;
    } & Struct;
    readonly isRuleSetInserted: boolean;
    readonly asRuleSetInserted: {
      readonly tankId: AccountId32;
      readonly ruleSetId: u32;
    } & Struct;
    readonly isRuleSetRemoved: boolean;
    readonly asRuleSetRemoved: {
      readonly tankId: AccountId32;
      readonly ruleSetId: u32;
    } & Struct;
    readonly isFreezeStateMutated: boolean;
    readonly asFreezeStateMutated: {
      readonly tankId: AccountId32;
      readonly ruleSetId: Option<u32>;
      readonly isFrozen: bool;
    } & Struct;
    readonly isDispatchFailed: boolean;
    readonly asDispatchFailed: {
      readonly tankId: AccountId32;
      readonly caller: AccountId32;
      readonly error: SpRuntimeDispatchError;
    } & Struct;
    readonly isConsumptionSet: boolean;
    readonly asConsumptionSet: {
      readonly tankId: AccountId32;
      readonly userId: Option<AccountId32>;
      readonly ruleSetId: u32;
      readonly consumption: PalletFuelTanksConsumption;
    } & Struct;
    readonly isMigrationStep: boolean;
    readonly asMigrationStep: {
      readonly itemsProcessed: u32;
      readonly phase: u8;
    } & Struct;
    readonly type: 'FuelTankCreated' | 'FuelTankMutated' | 'FuelTankDestroyed' | 'CallDispatched' | 'AccountAdded' | 'AccountRemoved' | 'AccountRuleDataRemoved' | 'RuleSetInserted' | 'RuleSetRemoved' | 'FreezeStateMutated' | 'DispatchFailed' | 'ConsumptionSet' | 'MigrationStep';
  }

  /** @name EnjinMatrixRuntimeMaxFuelTankNameLength (236) */
  type EnjinMatrixRuntimeMaxFuelTankNameLength = Null;

  /** @name PalletFuelTanksImplsDefaultTankMutation (238) */
  interface PalletFuelTanksImplsDefaultTankMutation extends Struct {
    readonly userAccountManagement: EpMultiTokensShouldMutateOption;
    readonly coveragePolicy: Option<PalletFuelTanksCoveragePolicy>;
    readonly accountRules: Option<Vec<PalletFuelTanksRulesAccountRuleDescriptor>>;
  }

  /** @name EnjinMatrixRuntimeRuntime (239) */
  type EnjinMatrixRuntimeRuntime = Null;

  /** @name EpMultiTokensShouldMutateOption (240) */
  interface EpMultiTokensShouldMutateOption extends Enum {
    readonly isNoMutation: boolean;
    readonly isSomeMutation: boolean;
    readonly asSomeMutation: Option<PalletFuelTanksUserAccountManagement>;
    readonly type: 'NoMutation' | 'SomeMutation';
  }

  /** @name PalletFuelTanksUserAccountManagement (242) */
  interface PalletFuelTanksUserAccountManagement extends Struct {
    readonly tankReservesAccountCreationDeposit: bool;
  }

  /** @name PalletFuelTanksCoveragePolicy (244) */
  interface PalletFuelTanksCoveragePolicy extends Enum {
    readonly isFees: boolean;
    readonly isFeesAndDeposit: boolean;
    readonly type: 'Fees' | 'FeesAndDeposit';
  }

  /** @name PalletFuelTanksRulesAccountRuleDescriptor (247) */
  interface PalletFuelTanksRulesAccountRuleDescriptor extends Enum {
    readonly isWhitelistedCallers: boolean;
    readonly asWhitelistedCallers: PalletFuelTanksRulesWhitelistedCallersWhitelistedCallersRule;
    readonly isRequireToken: boolean;
    readonly asRequireToken: PalletFuelTanksRulesRequireTokenRequireTokenRule;
    readonly type: 'WhitelistedCallers' | 'RequireToken';
  }

  /** @name PalletFuelTanksRulesWhitelistedCallersWhitelistedCallersRule (248) */
  interface PalletFuelTanksRulesWhitelistedCallersWhitelistedCallersRule extends BTreeSet<AccountId32> {}

  /** @name EnjinMatrixRuntimeMaxWhitelistedCallers (249) */
  type EnjinMatrixRuntimeMaxWhitelistedCallers = Null;

  /** @name PalletFuelTanksRulesRequireTokenRequireTokenRule (252) */
  interface PalletFuelTanksRulesRequireTokenRequireTokenRule extends Struct {
    readonly collectionId: u128;
    readonly tokenId: u128;
  }

  /** @name PalletFuelTanksRulesDispatchRuleKind (254) */
  interface PalletFuelTanksRulesDispatchRuleKind extends Enum {
    readonly isWhitelistedCallers: boolean;
    readonly isWhitelistedCollections: boolean;
    readonly isMaxFuelBurnPerTransaction: boolean;
    readonly isUserFuelBudget: boolean;
    readonly isTankFuelBudget: boolean;
    readonly isRequireToken: boolean;
    readonly isPermittedCalls: boolean;
    readonly isPermittedExtrinsics: boolean;
    readonly isWhitelistedPallets: boolean;
    readonly isRequireSignature: boolean;
    readonly isMinimumInfusion: boolean;
    readonly type: 'WhitelistedCallers' | 'WhitelistedCollections' | 'MaxFuelBurnPerTransaction' | 'UserFuelBudget' | 'TankFuelBudget' | 'RequireToken' | 'PermittedCalls' | 'PermittedExtrinsics' | 'WhitelistedPallets' | 'RequireSignature' | 'MinimumInfusion';
  }

  /** @name PalletFuelTanksConsumption (255) */
  interface PalletFuelTanksConsumption extends Struct {
    readonly totalConsumed: Compact<u128>;
    readonly lastResetBlock: Option<u32>;
  }

  /** @name PalletMarketplaceEvent (256) */
  interface PalletMarketplaceEvent extends Enum {
    readonly isListingCreated: boolean;
    readonly asListingCreated: {
      readonly listingId: H256;
      readonly listing: PalletMarketplaceFeaturesListing;
    } & Struct;
    readonly isListingCancelled: boolean;
    readonly asListingCancelled: {
      readonly listingId: H256;
    } & Struct;
    readonly isListingFilled: boolean;
    readonly asListingFilled: {
      readonly listingId: H256;
      readonly buyer: AccountId32;
      readonly price: u128;
      readonly amountFilled: u128;
      readonly amountRemaining: u128;
      readonly protocolFee: u128;
      readonly royalty: u128;
    } & Struct;
    readonly isBidPlaced: boolean;
    readonly asBidPlaced: {
      readonly listingId: H256;
      readonly bid: PalletMarketplaceFeaturesAuctionBid;
    } & Struct;
    readonly isAuctionFinalized: boolean;
    readonly asAuctionFinalized: {
      readonly listingId: H256;
      readonly winningBid: Option<PalletMarketplaceFeaturesAuctionBid>;
      readonly protocolFee: u128;
      readonly royalty: u128;
    } & Struct;
    readonly isProtocolFeeSet: boolean;
    readonly asProtocolFeeSet: {
      readonly protocolFee: Perbill;
    } & Struct;
    readonly isExpiredListingRemoved: boolean;
    readonly asExpiredListingRemoved: {
      readonly listingId: H256;
    } & Struct;
    readonly isCounterOfferPlaced: boolean;
    readonly asCounterOfferPlaced: {
      readonly listingId: H256;
      readonly counterOffer: PalletMarketplaceFeaturesOfferCounterOffer;
    } & Struct;
    readonly isCounterOfferAnswered: boolean;
    readonly asCounterOfferAnswered: {
      readonly listingId: H256;
      readonly creator: AccountId32;
      readonly response: PalletMarketplaceFeaturesOfferCounterOfferResponse;
    } & Struct;
    readonly isCounterOfferRemoved: boolean;
    readonly asCounterOfferRemoved: {
      readonly listingId: H256;
      readonly creator: AccountId32;
    } & Struct;
    readonly isMigrationStep: boolean;
    readonly asMigrationStep: {
      readonly itemsProcessed: u32;
      readonly phase: u8;
    } & Struct;
    readonly type: 'ListingCreated' | 'ListingCancelled' | 'ListingFilled' | 'BidPlaced' | 'AuctionFinalized' | 'ProtocolFeeSet' | 'ExpiredListingRemoved' | 'CounterOfferPlaced' | 'CounterOfferAnswered' | 'CounterOfferRemoved' | 'MigrationStep';
  }

  /** @name PalletMarketplaceFeaturesListing (257) */
  interface PalletMarketplaceFeaturesListing extends Struct {
    readonly creator: AccountId32;
    readonly makeAssetId: EpMultiTokensTokenAssetId;
    readonly takeAssetId: EpMultiTokensTokenAssetId;
    readonly amount: Compact<u128>;
    readonly price: Compact<u128>;
    readonly minReceived: Compact<u128>;
    readonly feeSide: PalletMarketplaceFeaturesListingFeeSide;
    readonly creationBlock: Compact<u32>;
    readonly deposit: EpCoreFrameTypesDeposit;
    readonly salt: Bytes;
    readonly data: PalletMarketplaceFeaturesListingListingData;
    readonly state: PalletMarketplaceFeaturesListingListingState;
  }

  /** @name PalletMarketplaceFeaturesListingFeeSide (258) */
  interface PalletMarketplaceFeaturesListingFeeSide extends Enum {
    readonly isNoFee: boolean;
    readonly isMake: boolean;
    readonly isTake: boolean;
    readonly type: 'NoFee' | 'Make' | 'Take';
  }

  /** @name PalletMarketplaceFeaturesListingListingData (260) */
  interface PalletMarketplaceFeaturesListingListingData extends Enum {
    readonly isFixedPrice: boolean;
    readonly isAuction: boolean;
    readonly asAuction: PalletMarketplaceFeaturesAuctionAuctionData;
    readonly isOffer: boolean;
    readonly asOffer: PalletMarketplaceFeaturesOfferOfferData;
    readonly type: 'FixedPrice' | 'Auction' | 'Offer';
  }

  /** @name PalletMarketplaceFeaturesAuctionAuctionData (261) */
  interface PalletMarketplaceFeaturesAuctionAuctionData extends Struct {
    readonly startBlock: Compact<u32>;
    readonly endBlock: Compact<u32>;
  }

  /** @name PalletMarketplaceFeaturesOfferOfferData (262) */
  interface PalletMarketplaceFeaturesOfferOfferData extends Struct {
    readonly expiration: Option<u32>;
  }

  /** @name PalletMarketplaceFeaturesListingListingState (263) */
  interface PalletMarketplaceFeaturesListingListingState extends Enum {
    readonly isFixedPrice: boolean;
    readonly asFixedPrice: {
      readonly amountFilled: Compact<u128>;
    } & Struct;
    readonly isAuction: boolean;
    readonly asAuction: PalletMarketplaceFeaturesAuctionAuctionState;
    readonly isOffer: boolean;
    readonly asOffer: PalletMarketplaceFeaturesOfferOfferState;
    readonly type: 'FixedPrice' | 'Auction' | 'Offer';
  }

  /** @name PalletMarketplaceFeaturesAuctionAuctionState (264) */
  interface PalletMarketplaceFeaturesAuctionAuctionState extends Struct {
    readonly highBid: Option<PalletMarketplaceFeaturesAuctionBid>;
  }

  /** @name PalletMarketplaceFeaturesAuctionBid (266) */
  interface PalletMarketplaceFeaturesAuctionBid extends Struct {
    readonly bidder: AccountId32;
    readonly price: Compact<u128>;
  }

  /** @name PalletMarketplaceFeaturesOfferOfferState (267) */
  interface PalletMarketplaceFeaturesOfferOfferState extends Struct {
    readonly counterOfferCount: Compact<u32>;
  }

  /** @name PalletMarketplaceFeaturesOfferCounterOffer (268) */
  interface PalletMarketplaceFeaturesOfferCounterOffer extends Struct {
    readonly sellerPrice: Compact<u128>;
    readonly buyerPrice: Option<u128>;
    readonly deposit: EpCoreFrameTypesDeposit;
  }

  /** @name PalletMarketplaceFeaturesOfferCounterOfferResponse (269) */
  interface PalletMarketplaceFeaturesOfferCounterOfferResponse extends Enum {
    readonly isAccept: boolean;
    readonly isReject: boolean;
    readonly isCounter: boolean;
    readonly asCounter: Compact<u128>;
    readonly type: 'Accept' | 'Reject' | 'Counter';
  }

  /** @name PalletExtrinsicPauseEvent (270) */
  interface PalletExtrinsicPauseEvent extends Enum {
    readonly isPalletPaused: boolean;
    readonly asPalletPaused: {
      readonly palletName: Bytes;
    } & Struct;
    readonly isPalletResumed: boolean;
    readonly asPalletResumed: {
      readonly palletName: Bytes;
    } & Struct;
    readonly isExtrinsicPaused: boolean;
    readonly asExtrinsicPaused: {
      readonly palletName: Bytes;
      readonly extrinsicName: Bytes;
    } & Struct;
    readonly isExtrinsicResumed: boolean;
    readonly asExtrinsicResumed: {
      readonly palletName: Bytes;
      readonly extrinsicName: Bytes;
    } & Struct;
    readonly type: 'PalletPaused' | 'PalletResumed' | 'ExtrinsicPaused' | 'ExtrinsicResumed';
  }

  /** @name EnjinMatrixRuntimeMaxNameLength (272) */
  type EnjinMatrixRuntimeMaxNameLength = Null;

  /** @name PalletMatrixUtilityEvent (274) */
  interface PalletMatrixUtilityEvent extends Enum {
    readonly isBatchDispatched: boolean;
    readonly isBatchPartiallyDispatched: boolean;
    readonly asBatchPartiallyDispatched: Vec<ITuple<[u32, SpRuntimeDispatchError]>>;
    readonly isBatchFailed: boolean;
    readonly asBatchFailed: {
      readonly index: u32;
      readonly error: SpRuntimeDispatchError;
    } & Struct;
    readonly type: 'BatchDispatched' | 'BatchPartiallyDispatched' | 'BatchFailed';
  }

  /** @name PalletClaimsEvent (277) */
  interface PalletClaimsEvent extends Enum {
    readonly isClaimRequested: boolean;
    readonly asClaimRequested: {
      readonly who: H160;
      readonly amountBurned: u128;
      readonly transactionHash: H256;
      readonly isEfiToken: bool;
      readonly amountClaimable: u128;
    } & Struct;
    readonly isClaimed: boolean;
    readonly asClaimed: {
      readonly who: AccountId32;
      readonly ethereumAddress: Option<H160>;
      readonly amount: u128;
    } & Struct;
    readonly isEthereumBlocksProcessed: boolean;
    readonly asEthereumBlocksProcessed: {
      readonly blockNumber: u32;
    } & Struct;
    readonly isClaimMinted: boolean;
    readonly asClaimMinted: {
      readonly who: H160;
      readonly amount: u128;
    } & Struct;
    readonly isClaimMoved: boolean;
    readonly asClaimMoved: {
      readonly old: H160;
      readonly new_: H160;
    } & Struct;
    readonly isExchangeRateSet: boolean;
    readonly asExchangeRateSet: {
      readonly exchangeRate: Perbill;
    } & Struct;
    readonly isDelayTimeForClaimSet: boolean;
    readonly asDelayTimeForClaimSet: {
      readonly delayTime: u32;
    } & Struct;
    readonly isClaimRejected: boolean;
    readonly asClaimRejected: {
      readonly account: H160;
      readonly transactionHash: H256;
    } & Struct;
    readonly type: 'ClaimRequested' | 'Claimed' | 'EthereumBlocksProcessed' | 'ClaimMinted' | 'ClaimMoved' | 'ExchangeRateSet' | 'DelayTimeForClaimSet' | 'ClaimRejected';
  }

  /** @name PalletIdentityEvent (279) */
  interface PalletIdentityEvent extends Enum {
    readonly isIdentitySet: boolean;
    readonly asIdentitySet: {
      readonly who: AccountId32;
    } & Struct;
    readonly isIdentityCleared: boolean;
    readonly asIdentityCleared: {
      readonly who: AccountId32;
      readonly deposit: u128;
    } & Struct;
    readonly isIdentityKilled: boolean;
    readonly asIdentityKilled: {
      readonly who: AccountId32;
      readonly deposit: u128;
    } & Struct;
    readonly isJudgementRequested: boolean;
    readonly asJudgementRequested: {
      readonly who: AccountId32;
      readonly registrarIndex: u32;
    } & Struct;
    readonly isJudgementUnrequested: boolean;
    readonly asJudgementUnrequested: {
      readonly who: AccountId32;
      readonly registrarIndex: u32;
    } & Struct;
    readonly isJudgementGiven: boolean;
    readonly asJudgementGiven: {
      readonly target: AccountId32;
      readonly registrarIndex: u32;
    } & Struct;
    readonly isRegistrarAdded: boolean;
    readonly asRegistrarAdded: {
      readonly registrarIndex: u32;
    } & Struct;
    readonly isSubIdentityAdded: boolean;
    readonly asSubIdentityAdded: {
      readonly sub: AccountId32;
      readonly main: AccountId32;
      readonly deposit: u128;
    } & Struct;
    readonly isSubIdentityRemoved: boolean;
    readonly asSubIdentityRemoved: {
      readonly sub: AccountId32;
      readonly main: AccountId32;
      readonly deposit: u128;
    } & Struct;
    readonly isSubIdentityRevoked: boolean;
    readonly asSubIdentityRevoked: {
      readonly sub: AccountId32;
      readonly main: AccountId32;
      readonly deposit: u128;
    } & Struct;
    readonly isAuthorityAdded: boolean;
    readonly asAuthorityAdded: {
      readonly authority: AccountId32;
    } & Struct;
    readonly isAuthorityRemoved: boolean;
    readonly asAuthorityRemoved: {
      readonly authority: AccountId32;
    } & Struct;
    readonly isUsernameSet: boolean;
    readonly asUsernameSet: {
      readonly who: AccountId32;
      readonly username: Bytes;
    } & Struct;
    readonly isUsernameQueued: boolean;
    readonly asUsernameQueued: {
      readonly who: AccountId32;
      readonly username: Bytes;
      readonly expiration: u32;
    } & Struct;
    readonly isPreapprovalExpired: boolean;
    readonly asPreapprovalExpired: {
      readonly whose: AccountId32;
    } & Struct;
    readonly isPrimaryUsernameSet: boolean;
    readonly asPrimaryUsernameSet: {
      readonly who: AccountId32;
      readonly username: Bytes;
    } & Struct;
    readonly isDanglingUsernameRemoved: boolean;
    readonly asDanglingUsernameRemoved: {
      readonly who: AccountId32;
      readonly username: Bytes;
    } & Struct;
    readonly type: 'IdentitySet' | 'IdentityCleared' | 'IdentityKilled' | 'JudgementRequested' | 'JudgementUnrequested' | 'JudgementGiven' | 'RegistrarAdded' | 'SubIdentityAdded' | 'SubIdentityRemoved' | 'SubIdentityRevoked' | 'AuthorityAdded' | 'AuthorityRemoved' | 'UsernameSet' | 'UsernameQueued' | 'PreapprovalExpired' | 'PrimaryUsernameSet' | 'DanglingUsernameRemoved';
  }

  /** @name PalletProxyEvent (281) */
  interface PalletProxyEvent extends Enum {
    readonly isProxyExecuted: boolean;
    readonly asProxyExecuted: {
      readonly result: Result<Null, SpRuntimeDispatchError>;
    } & Struct;
    readonly isPureCreated: boolean;
    readonly asPureCreated: {
      readonly pure: AccountId32;
      readonly who: AccountId32;
      readonly proxyType: RuntimeCommonImplsProxyProxyType;
      readonly disambiguationIndex: u16;
    } & Struct;
    readonly isAnnounced: boolean;
    readonly asAnnounced: {
      readonly real: AccountId32;
      readonly proxy: AccountId32;
      readonly callHash: H256;
    } & Struct;
    readonly isProxyAdded: boolean;
    readonly asProxyAdded: {
      readonly delegator: AccountId32;
      readonly delegatee: AccountId32;
      readonly proxyType: RuntimeCommonImplsProxyProxyType;
      readonly delay: u32;
    } & Struct;
    readonly isProxyRemoved: boolean;
    readonly asProxyRemoved: {
      readonly delegator: AccountId32;
      readonly delegatee: AccountId32;
      readonly proxyType: RuntimeCommonImplsProxyProxyType;
      readonly delay: u32;
    } & Struct;
    readonly type: 'ProxyExecuted' | 'PureCreated' | 'Announced' | 'ProxyAdded' | 'ProxyRemoved';
  }

  /** @name RuntimeCommonImplsProxyProxyType (282) */
  interface RuntimeCommonImplsProxyProxyType extends Enum {
    readonly isAny: boolean;
    readonly isTokens: boolean;
    readonly isGovernance: boolean;
    readonly type: 'Any' | 'Tokens' | 'Governance';
  }

  /** @name PalletMigrationsEvent (284) */
  interface PalletMigrationsEvent extends Enum {
    readonly isUpgradeStarted: boolean;
    readonly asUpgradeStarted: {
      readonly migrations: u32;
    } & Struct;
    readonly isUpgradeCompleted: boolean;
    readonly isUpgradeFailed: boolean;
    readonly isMigrationSkipped: boolean;
    readonly asMigrationSkipped: {
      readonly index: u32;
    } & Struct;
    readonly isMigrationAdvanced: boolean;
    readonly asMigrationAdvanced: {
      readonly index: u32;
      readonly took: u32;
    } & Struct;
    readonly isMigrationCompleted: boolean;
    readonly asMigrationCompleted: {
      readonly index: u32;
      readonly took: u32;
    } & Struct;
    readonly isMigrationFailed: boolean;
    readonly asMigrationFailed: {
      readonly index: u32;
      readonly took: u32;
    } & Struct;
    readonly isHistoricCleared: boolean;
    readonly asHistoricCleared: {
      readonly nextCursor: Option<Bytes>;
    } & Struct;
    readonly type: 'UpgradeStarted' | 'UpgradeCompleted' | 'UpgradeFailed' | 'MigrationSkipped' | 'MigrationAdvanced' | 'MigrationCompleted' | 'MigrationFailed' | 'HistoricCleared';
  }

  /** @name FrameSystemPhase (286) */
  interface FrameSystemPhase extends Enum {
    readonly isApplyExtrinsic: boolean;
    readonly asApplyExtrinsic: u32;
    readonly isFinalization: boolean;
    readonly isInitialization: boolean;
    readonly type: 'ApplyExtrinsic' | 'Finalization' | 'Initialization';
  }

  /** @name FrameSystemLastRuntimeUpgradeInfo (289) */
  interface FrameSystemLastRuntimeUpgradeInfo extends Struct {
    readonly specVersion: Compact<u32>;
    readonly specName: Text;
  }

  /** @name FrameSystemCodeUpgradeAuthorization (291) */
  interface FrameSystemCodeUpgradeAuthorization extends Struct {
    readonly codeHash: H256;
    readonly checkVersion: bool;
  }

  /** @name FrameSystemCall (292) */
  interface FrameSystemCall extends Enum {
    readonly isRemark: boolean;
    readonly asRemark: {
      readonly remark: Bytes;
    } & Struct;
    readonly isSetHeapPages: boolean;
    readonly asSetHeapPages: {
      readonly pages: u64;
    } & Struct;
    readonly isSetCode: boolean;
    readonly asSetCode: {
      readonly code: Bytes;
    } & Struct;
    readonly isSetCodeWithoutChecks: boolean;
    readonly asSetCodeWithoutChecks: {
      readonly code: Bytes;
    } & Struct;
    readonly isSetStorage: boolean;
    readonly asSetStorage: {
      readonly items: Vec<ITuple<[Bytes, Bytes]>>;
    } & Struct;
    readonly isKillStorage: boolean;
    readonly asKillStorage: {
      readonly keys_: Vec<Bytes>;
    } & Struct;
    readonly isKillPrefix: boolean;
    readonly asKillPrefix: {
      readonly prefix: Bytes;
      readonly subkeys: u32;
    } & Struct;
    readonly isRemarkWithEvent: boolean;
    readonly asRemarkWithEvent: {
      readonly remark: Bytes;
    } & Struct;
    readonly isAuthorizeUpgrade: boolean;
    readonly asAuthorizeUpgrade: {
      readonly codeHash: H256;
    } & Struct;
    readonly isAuthorizeUpgradeWithoutChecks: boolean;
    readonly asAuthorizeUpgradeWithoutChecks: {
      readonly codeHash: H256;
    } & Struct;
    readonly isApplyAuthorizedUpgrade: boolean;
    readonly asApplyAuthorizedUpgrade: {
      readonly code: Bytes;
    } & Struct;
    readonly type: 'Remark' | 'SetHeapPages' | 'SetCode' | 'SetCodeWithoutChecks' | 'SetStorage' | 'KillStorage' | 'KillPrefix' | 'RemarkWithEvent' | 'AuthorizeUpgrade' | 'AuthorizeUpgradeWithoutChecks' | 'ApplyAuthorizedUpgrade';
  }

  /** @name FrameSystemLimitsBlockWeights (296) */
  interface FrameSystemLimitsBlockWeights extends Struct {
    readonly baseBlock: SpWeightsWeightV2Weight;
    readonly maxBlock: SpWeightsWeightV2Weight;
    readonly perClass: FrameSupportDispatchPerDispatchClassWeightsPerClass;
  }

  /** @name FrameSupportDispatchPerDispatchClassWeightsPerClass (297) */
  interface FrameSupportDispatchPerDispatchClassWeightsPerClass extends Struct {
    readonly normal: FrameSystemLimitsWeightsPerClass;
    readonly operational: FrameSystemLimitsWeightsPerClass;
    readonly mandatory: FrameSystemLimitsWeightsPerClass;
  }

  /** @name FrameSystemLimitsWeightsPerClass (298) */
  interface FrameSystemLimitsWeightsPerClass extends Struct {
    readonly baseExtrinsic: SpWeightsWeightV2Weight;
    readonly maxExtrinsic: Option<SpWeightsWeightV2Weight>;
    readonly maxTotal: Option<SpWeightsWeightV2Weight>;
    readonly reserved: Option<SpWeightsWeightV2Weight>;
  }

  /** @name FrameSystemLimitsBlockLength (300) */
  interface FrameSystemLimitsBlockLength extends Struct {
    readonly max: FrameSupportDispatchPerDispatchClassU32;
  }

  /** @name FrameSupportDispatchPerDispatchClassU32 (301) */
  interface FrameSupportDispatchPerDispatchClassU32 extends Struct {
    readonly normal: u32;
    readonly operational: u32;
    readonly mandatory: u32;
  }

  /** @name SpWeightsRuntimeDbWeight (302) */
  interface SpWeightsRuntimeDbWeight extends Struct {
    readonly read: u64;
    readonly write: u64;
  }

  /** @name SpVersionRuntimeVersion (303) */
  interface SpVersionRuntimeVersion extends Struct {
    readonly specName: Text;
    readonly implName: Text;
    readonly authoringVersion: u32;
    readonly specVersion: u32;
    readonly implVersion: u32;
    readonly apis: Vec<ITuple<[U8aFixed, u32]>>;
    readonly transactionVersion: u32;
    readonly stateVersion: u8;
  }

  /** @name FrameSystemError (307) */
  interface FrameSystemError extends Enum {
    readonly isInvalidSpecName: boolean;
    readonly isSpecVersionNeedsToIncrease: boolean;
    readonly isFailedToExtractRuntimeVersion: boolean;
    readonly isNonDefaultComposite: boolean;
    readonly isNonZeroRefCount: boolean;
    readonly isCallFiltered: boolean;
    readonly isMultiBlockMigrationsOngoing: boolean;
    readonly isNothingAuthorized: boolean;
    readonly isUnauthorized: boolean;
    readonly type: 'InvalidSpecName' | 'SpecVersionNeedsToIncrease' | 'FailedToExtractRuntimeVersion' | 'NonDefaultComposite' | 'NonZeroRefCount' | 'CallFiltered' | 'MultiBlockMigrationsOngoing' | 'NothingAuthorized' | 'Unauthorized';
  }

  /** @name CumulusPalletParachainSystemUnincludedSegmentAncestor (309) */
  interface CumulusPalletParachainSystemUnincludedSegmentAncestor extends Struct {
    readonly usedBandwidth: CumulusPalletParachainSystemUnincludedSegmentUsedBandwidth;
    readonly paraHeadHash: Option<H256>;
    readonly consumedGoAheadSignal: Option<PolkadotPrimitivesV6UpgradeGoAhead>;
  }

  /** @name CumulusPalletParachainSystemUnincludedSegmentUsedBandwidth (310) */
  interface CumulusPalletParachainSystemUnincludedSegmentUsedBandwidth extends Struct {
    readonly umpMsgCount: u32;
    readonly umpTotalBytes: u32;
    readonly hrmpOutgoing: BTreeMap<u32, CumulusPalletParachainSystemUnincludedSegmentHrmpChannelUpdate>;
  }

  /** @name CumulusPalletParachainSystemUnincludedSegmentHrmpChannelUpdate (312) */
  interface CumulusPalletParachainSystemUnincludedSegmentHrmpChannelUpdate extends Struct {
    readonly msgCount: u32;
    readonly totalBytes: u32;
  }

  /** @name PolkadotPrimitivesV6UpgradeGoAhead (317) */
  interface PolkadotPrimitivesV6UpgradeGoAhead extends Enum {
    readonly isAbort: boolean;
    readonly isGoAhead: boolean;
    readonly type: 'Abort' | 'GoAhead';
  }

  /** @name CumulusPalletParachainSystemUnincludedSegmentSegmentTracker (318) */
  interface CumulusPalletParachainSystemUnincludedSegmentSegmentTracker extends Struct {
    readonly usedBandwidth: CumulusPalletParachainSystemUnincludedSegmentUsedBandwidth;
    readonly hrmpWatermark: Option<u32>;
    readonly consumedGoAheadSignal: Option<PolkadotPrimitivesV6UpgradeGoAhead>;
  }

  /** @name PolkadotPrimitivesV6PersistedValidationData (319) */
  interface PolkadotPrimitivesV6PersistedValidationData extends Struct {
    readonly parentHead: Bytes;
    readonly relayParentNumber: u32;
    readonly relayParentStorageRoot: H256;
    readonly maxPovSize: u32;
  }

  /** @name PolkadotPrimitivesV6UpgradeRestriction (322) */
  interface PolkadotPrimitivesV6UpgradeRestriction extends Enum {
    readonly isPresent: boolean;
    readonly type: 'Present';
  }

  /** @name SpTrieStorageProof (323) */
  interface SpTrieStorageProof extends Struct {
    readonly trieNodes: BTreeSet<Bytes>;
  }

  /** @name CumulusPalletParachainSystemRelayStateSnapshotMessagingStateSnapshot (325) */
  interface CumulusPalletParachainSystemRelayStateSnapshotMessagingStateSnapshot extends Struct {
    readonly dmqMqcHead: H256;
    readonly relayDispatchQueueRemainingCapacity: CumulusPalletParachainSystemRelayStateSnapshotRelayDispatchQueueRemainingCapacity;
    readonly ingressChannels: Vec<ITuple<[u32, PolkadotPrimitivesV6AbridgedHrmpChannel]>>;
    readonly egressChannels: Vec<ITuple<[u32, PolkadotPrimitivesV6AbridgedHrmpChannel]>>;
  }

  /** @name CumulusPalletParachainSystemRelayStateSnapshotRelayDispatchQueueRemainingCapacity (326) */
  interface CumulusPalletParachainSystemRelayStateSnapshotRelayDispatchQueueRemainingCapacity extends Struct {
    readonly remainingCount: u32;
    readonly remainingSize: u32;
  }

  /** @name PolkadotPrimitivesV6AbridgedHrmpChannel (329) */
  interface PolkadotPrimitivesV6AbridgedHrmpChannel extends Struct {
    readonly maxCapacity: u32;
    readonly maxTotalSize: u32;
    readonly maxMessageSize: u32;
    readonly msgCount: u32;
    readonly totalSize: u32;
    readonly mqcHead: Option<H256>;
  }

  /** @name PolkadotPrimitivesV6AbridgedHostConfiguration (330) */
  interface PolkadotPrimitivesV6AbridgedHostConfiguration extends Struct {
    readonly maxCodeSize: u32;
    readonly maxHeadDataSize: u32;
    readonly maxUpwardQueueCount: u32;
    readonly maxUpwardQueueSize: u32;
    readonly maxUpwardMessageSize: u32;
    readonly maxUpwardMessageNumPerCandidate: u32;
    readonly hrmpMaxMessageNumPerCandidate: u32;
    readonly validationUpgradeCooldown: u32;
    readonly validationUpgradeDelay: u32;
    readonly asyncBackingParams: PolkadotPrimitivesV6AsyncBackingAsyncBackingParams;
  }

  /** @name PolkadotPrimitivesV6AsyncBackingAsyncBackingParams (331) */
  interface PolkadotPrimitivesV6AsyncBackingAsyncBackingParams extends Struct {
    readonly maxCandidateDepth: u32;
    readonly allowedAncestryLen: u32;
  }

  /** @name PolkadotCorePrimitivesOutboundHrmpMessage (337) */
  interface PolkadotCorePrimitivesOutboundHrmpMessage extends Struct {
    readonly recipient: u32;
    readonly data: Bytes;
  }

  /** @name CumulusPalletParachainSystemCall (339) */
  interface CumulusPalletParachainSystemCall extends Enum {
    readonly isSetValidationData: boolean;
    readonly asSetValidationData: {
      readonly data: CumulusPrimitivesParachainInherentParachainInherentData;
    } & Struct;
    readonly isSudoSendUpwardMessage: boolean;
    readonly asSudoSendUpwardMessage: {
      readonly message: Bytes;
    } & Struct;
    readonly isAuthorizeUpgrade: boolean;
    readonly asAuthorizeUpgrade: {
      readonly codeHash: H256;
      readonly checkVersion: bool;
    } & Struct;
    readonly isEnactAuthorizedUpgrade: boolean;
    readonly asEnactAuthorizedUpgrade: {
      readonly code: Bytes;
    } & Struct;
    readonly type: 'SetValidationData' | 'SudoSendUpwardMessage' | 'AuthorizeUpgrade' | 'EnactAuthorizedUpgrade';
  }

  /** @name CumulusPrimitivesParachainInherentParachainInherentData (340) */
  interface CumulusPrimitivesParachainInherentParachainInherentData extends Struct {
    readonly validationData: PolkadotPrimitivesV6PersistedValidationData;
    readonly relayChainState: SpTrieStorageProof;
    readonly downwardMessages: Vec<PolkadotCorePrimitivesInboundDownwardMessage>;
    readonly horizontalMessages: BTreeMap<u32, Vec<PolkadotCorePrimitivesInboundHrmpMessage>>;
  }

  /** @name PolkadotCorePrimitivesInboundDownwardMessage (342) */
  interface PolkadotCorePrimitivesInboundDownwardMessage extends Struct {
    readonly sentAt: u32;
    readonly msg: Bytes;
  }

  /** @name PolkadotCorePrimitivesInboundHrmpMessage (345) */
  interface PolkadotCorePrimitivesInboundHrmpMessage extends Struct {
    readonly sentAt: u32;
    readonly data: Bytes;
  }

  /** @name CumulusPalletParachainSystemError (348) */
  interface CumulusPalletParachainSystemError extends Enum {
    readonly isOverlappingUpgrades: boolean;
    readonly isProhibitedByPolkadot: boolean;
    readonly isTooBig: boolean;
    readonly isValidationDataNotAvailable: boolean;
    readonly isHostConfigurationNotAvailable: boolean;
    readonly isNotScheduled: boolean;
    readonly isNothingAuthorized: boolean;
    readonly isUnauthorized: boolean;
    readonly type: 'OverlappingUpgrades' | 'ProhibitedByPolkadot' | 'TooBig' | 'ValidationDataNotAvailable' | 'HostConfigurationNotAvailable' | 'NotScheduled' | 'NothingAuthorized' | 'Unauthorized';
  }

  /** @name PalletTimestampCall (349) */
  interface PalletTimestampCall extends Enum {
    readonly isSet: boolean;
    readonly asSet: {
      readonly now: Compact<u64>;
    } & Struct;
    readonly type: 'Set';
  }

  /** @name StagingParachainInfoCall (350) */
  type StagingParachainInfoCall = Null;

  /** @name PalletPreimageOldRequestStatus (351) */
  interface PalletPreimageOldRequestStatus extends Enum {
    readonly isUnrequested: boolean;
    readonly asUnrequested: {
      readonly deposit: ITuple<[AccountId32, u128]>;
      readonly len: u32;
    } & Struct;
    readonly isRequested: boolean;
    readonly asRequested: {
      readonly deposit: Option<ITuple<[AccountId32, u128]>>;
      readonly count: u32;
      readonly len: Option<u32>;
    } & Struct;
    readonly type: 'Unrequested' | 'Requested';
  }

  /** @name PalletPreimageRequestStatus (354) */
  interface PalletPreimageRequestStatus extends Enum {
    readonly isUnrequested: boolean;
    readonly asUnrequested: {
      readonly ticket: ITuple<[AccountId32, u128]>;
      readonly len: u32;
    } & Struct;
    readonly isRequested: boolean;
    readonly asRequested: {
      readonly maybeTicket: Option<ITuple<[AccountId32, u128]>>;
      readonly count: u32;
      readonly maybeLen: Option<u32>;
    } & Struct;
    readonly type: 'Unrequested' | 'Requested';
  }

  /** @name PalletPreimageCall (360) */
  interface PalletPreimageCall extends Enum {
    readonly isNotePreimage: boolean;
    readonly asNotePreimage: {
      readonly bytes: Bytes;
    } & Struct;
    readonly isUnnotePreimage: boolean;
    readonly asUnnotePreimage: {
      readonly hash_: H256;
    } & Struct;
    readonly isRequestPreimage: boolean;
    readonly asRequestPreimage: {
      readonly hash_: H256;
    } & Struct;
    readonly isUnrequestPreimage: boolean;
    readonly asUnrequestPreimage: {
      readonly hash_: H256;
    } & Struct;
    readonly isEnsureUpdated: boolean;
    readonly asEnsureUpdated: {
      readonly hashes: Vec<H256>;
    } & Struct;
    readonly type: 'NotePreimage' | 'UnnotePreimage' | 'RequestPreimage' | 'UnrequestPreimage' | 'EnsureUpdated';
  }

  /** @name PalletPreimageError (361) */
  interface PalletPreimageError extends Enum {
    readonly isTooBig: boolean;
    readonly isAlreadyNoted: boolean;
    readonly isNotAuthorized: boolean;
    readonly isNotNoted: boolean;
    readonly isRequested: boolean;
    readonly isNotRequested: boolean;
    readonly isTooMany: boolean;
    readonly isTooFew: boolean;
    readonly type: 'TooBig' | 'AlreadyNoted' | 'NotAuthorized' | 'NotNoted' | 'Requested' | 'NotRequested' | 'TooMany' | 'TooFew';
  }

  /** @name PalletSchedulerScheduled (364) */
  interface PalletSchedulerScheduled extends Struct {
    readonly maybeId: Option<U8aFixed>;
    readonly priority: u8;
    readonly call: FrameSupportPreimagesBounded;
    readonly maybePeriodic: Option<ITuple<[u32, u32]>>;
    readonly origin: EnjinMatrixRuntimeOriginCaller;
  }

  /** @name FrameSupportPreimagesBounded (365) */
  interface FrameSupportPreimagesBounded extends Enum {
    readonly isLegacy: boolean;
    readonly asLegacy: {
      readonly hash_: H256;
    } & Struct;
    readonly isInline: boolean;
    readonly asInline: Bytes;
    readonly isLookup: boolean;
    readonly asLookup: {
      readonly hash_: H256;
      readonly len: u32;
    } & Struct;
    readonly type: 'Legacy' | 'Inline' | 'Lookup';
  }

  /** @name PalletSchedulerCall (367) */
  interface PalletSchedulerCall extends Enum {
    readonly isSchedule: boolean;
    readonly asSchedule: {
      readonly when: u32;
      readonly maybePeriodic: Option<ITuple<[u32, u32]>>;
      readonly priority: u8;
      readonly call: Call;
    } & Struct;
    readonly isCancel: boolean;
    readonly asCancel: {
      readonly when: u32;
      readonly index: u32;
    } & Struct;
    readonly isScheduleNamed: boolean;
    readonly asScheduleNamed: {
      readonly id: U8aFixed;
      readonly when: u32;
      readonly maybePeriodic: Option<ITuple<[u32, u32]>>;
      readonly priority: u8;
      readonly call: Call;
    } & Struct;
    readonly isCancelNamed: boolean;
    readonly asCancelNamed: {
      readonly id: U8aFixed;
    } & Struct;
    readonly isScheduleAfter: boolean;
    readonly asScheduleAfter: {
      readonly after: u32;
      readonly maybePeriodic: Option<ITuple<[u32, u32]>>;
      readonly priority: u8;
      readonly call: Call;
    } & Struct;
    readonly isScheduleNamedAfter: boolean;
    readonly asScheduleNamedAfter: {
      readonly id: U8aFixed;
      readonly after: u32;
      readonly maybePeriodic: Option<ITuple<[u32, u32]>>;
      readonly priority: u8;
      readonly call: Call;
    } & Struct;
    readonly isSetRetry: boolean;
    readonly asSetRetry: {
      readonly task: ITuple<[u32, u32]>;
      readonly retries: u8;
      readonly period: u32;
    } & Struct;
    readonly isSetRetryNamed: boolean;
    readonly asSetRetryNamed: {
      readonly id: U8aFixed;
      readonly retries: u8;
      readonly period: u32;
    } & Struct;
    readonly isCancelRetry: boolean;
    readonly asCancelRetry: {
      readonly task: ITuple<[u32, u32]>;
    } & Struct;
    readonly isCancelRetryNamed: boolean;
    readonly asCancelRetryNamed: {
      readonly id: U8aFixed;
    } & Struct;
    readonly type: 'Schedule' | 'Cancel' | 'ScheduleNamed' | 'CancelNamed' | 'ScheduleAfter' | 'ScheduleNamedAfter' | 'SetRetry' | 'SetRetryNamed' | 'CancelRetry' | 'CancelRetryNamed';
  }

  /** @name PalletUtilityCall (369) */
  interface PalletUtilityCall extends Enum {
    readonly isBatch: boolean;
    readonly asBatch: {
      readonly calls: Vec<Call>;
    } & Struct;
    readonly isAsDerivative: boolean;
    readonly asAsDerivative: {
      readonly index: u16;
      readonly call: Call;
    } & Struct;
    readonly isBatchAll: boolean;
    readonly asBatchAll: {
      readonly calls: Vec<Call>;
    } & Struct;
    readonly isDispatchAs: boolean;
    readonly asDispatchAs: {
      readonly asOrigin: EnjinMatrixRuntimeOriginCaller;
      readonly call: Call;
    } & Struct;
    readonly isForceBatch: boolean;
    readonly asForceBatch: {
      readonly calls: Vec<Call>;
    } & Struct;
    readonly isWithWeight: boolean;
    readonly asWithWeight: {
      readonly call: Call;
      readonly weight: SpWeightsWeightV2Weight;
    } & Struct;
    readonly type: 'Batch' | 'AsDerivative' | 'BatchAll' | 'DispatchAs' | 'ForceBatch' | 'WithWeight';
  }

  /** @name EnjinMatrixRuntimeOriginCaller (371) */
  interface EnjinMatrixRuntimeOriginCaller extends Enum {
    readonly isSystem: boolean;
    readonly asSystem: FrameSupportDispatchRawOrigin;
    readonly isVoid: boolean;
    readonly isCouncil: boolean;
    readonly asCouncil: PalletCollectiveRawOrigin;
    readonly isTechnicalCommittee: boolean;
    readonly asTechnicalCommittee: PalletCollectiveRawOrigin;
    readonly isPolkadotXcm: boolean;
    readonly asPolkadotXcm: PalletXcmOrigin;
    readonly isCumulusXcm: boolean;
    readonly asCumulusXcm: CumulusPalletXcmOrigin;
    readonly type: 'System' | 'Void' | 'Council' | 'TechnicalCommittee' | 'PolkadotXcm' | 'CumulusXcm';
  }

  /** @name FrameSupportDispatchRawOrigin (372) */
  interface FrameSupportDispatchRawOrigin extends Enum {
    readonly isRoot: boolean;
    readonly isSigned: boolean;
    readonly asSigned: AccountId32;
    readonly isNone: boolean;
    readonly type: 'Root' | 'Signed' | 'None';
  }

  /** @name PalletCollectiveRawOrigin (373) */
  interface PalletCollectiveRawOrigin extends Enum {
    readonly isMembers: boolean;
    readonly asMembers: ITuple<[u32, u32]>;
    readonly isMember: boolean;
    readonly asMember: AccountId32;
    readonly isPhantom: boolean;
    readonly type: 'Members' | 'Member' | 'Phantom';
  }

  /** @name PalletXcmOrigin (375) */
  interface PalletXcmOrigin extends Enum {
    readonly isXcm: boolean;
    readonly asXcm: StagingXcmV4Location;
    readonly isResponse: boolean;
    readonly asResponse: StagingXcmV4Location;
    readonly type: 'Xcm' | 'Response';
  }

  /** @name CumulusPalletXcmOrigin (376) */
  interface CumulusPalletXcmOrigin extends Enum {
    readonly isRelay: boolean;
    readonly isSiblingParachain: boolean;
    readonly asSiblingParachain: u32;
    readonly type: 'Relay' | 'SiblingParachain';
  }

  /** @name SpCoreVoid (377) */
  type SpCoreVoid = Null;

  /** @name PalletSafeModeCall (378) */
  interface PalletSafeModeCall extends Enum {
    readonly isEnter: boolean;
    readonly isForceEnter: boolean;
    readonly isExtend: boolean;
    readonly isForceExtend: boolean;
    readonly isForceExit: boolean;
    readonly isForceSlashDeposit: boolean;
    readonly asForceSlashDeposit: {
      readonly account: AccountId32;
      readonly block: u32;
    } & Struct;
    readonly isReleaseDeposit: boolean;
    readonly asReleaseDeposit: {
      readonly account: AccountId32;
      readonly block: u32;
    } & Struct;
    readonly isForceReleaseDeposit: boolean;
    readonly asForceReleaseDeposit: {
      readonly account: AccountId32;
      readonly block: u32;
    } & Struct;
    readonly type: 'Enter' | 'ForceEnter' | 'Extend' | 'ForceExtend' | 'ForceExit' | 'ForceSlashDeposit' | 'ReleaseDeposit' | 'ForceReleaseDeposit';
  }

  /** @name PalletBalancesCall (379) */
  interface PalletBalancesCall extends Enum {
    readonly isTransferAllowDeath: boolean;
    readonly asTransferAllowDeath: {
      readonly dest: MultiAddress;
      readonly value: Compact<u128>;
    } & Struct;
    readonly isForceTransfer: boolean;
    readonly asForceTransfer: {
      readonly source: MultiAddress;
      readonly dest: MultiAddress;
      readonly value: Compact<u128>;
    } & Struct;
    readonly isTransferKeepAlive: boolean;
    readonly asTransferKeepAlive: {
      readonly dest: MultiAddress;
      readonly value: Compact<u128>;
    } & Struct;
    readonly isTransferAll: boolean;
    readonly asTransferAll: {
      readonly dest: MultiAddress;
      readonly keepAlive: bool;
    } & Struct;
    readonly isForceUnreserve: boolean;
    readonly asForceUnreserve: {
      readonly who: MultiAddress;
      readonly amount: u128;
    } & Struct;
    readonly isUpgradeAccounts: boolean;
    readonly asUpgradeAccounts: {
      readonly who: Vec<AccountId32>;
    } & Struct;
    readonly isForceSetBalance: boolean;
    readonly asForceSetBalance: {
      readonly who: MultiAddress;
      readonly newFree: Compact<u128>;
    } & Struct;
    readonly isForceAdjustTotalIssuance: boolean;
    readonly asForceAdjustTotalIssuance: {
      readonly direction: PalletBalancesAdjustmentDirection;
      readonly delta: Compact<u128>;
    } & Struct;
    readonly type: 'TransferAllowDeath' | 'ForceTransfer' | 'TransferKeepAlive' | 'TransferAll' | 'ForceUnreserve' | 'UpgradeAccounts' | 'ForceSetBalance' | 'ForceAdjustTotalIssuance';
  }

  /** @name PalletBalancesAdjustmentDirection (382) */
  interface PalletBalancesAdjustmentDirection extends Enum {
    readonly isIncrease: boolean;
    readonly isDecrease: boolean;
    readonly type: 'Increase' | 'Decrease';
  }

  /** @name PalletDemocracyCall (383) */
  interface PalletDemocracyCall extends Enum {
    readonly isPropose: boolean;
    readonly asPropose: {
      readonly proposal: FrameSupportPreimagesBounded;
      readonly value: Compact<u128>;
    } & Struct;
    readonly isSecond: boolean;
    readonly asSecond: {
      readonly proposal: Compact<u32>;
    } & Struct;
    readonly isVote: boolean;
    readonly asVote: {
      readonly refIndex: Compact<u32>;
      readonly vote: PalletDemocracyVoteAccountVote;
    } & Struct;
    readonly isEmergencyCancel: boolean;
    readonly asEmergencyCancel: {
      readonly refIndex: u32;
    } & Struct;
    readonly isExternalPropose: boolean;
    readonly asExternalPropose: {
      readonly proposal: FrameSupportPreimagesBounded;
    } & Struct;
    readonly isExternalProposeMajority: boolean;
    readonly asExternalProposeMajority: {
      readonly proposal: FrameSupportPreimagesBounded;
    } & Struct;
    readonly isExternalProposeDefault: boolean;
    readonly asExternalProposeDefault: {
      readonly proposal: FrameSupportPreimagesBounded;
    } & Struct;
    readonly isFastTrack: boolean;
    readonly asFastTrack: {
      readonly proposalHash: H256;
      readonly votingPeriod: u32;
      readonly delay: u32;
    } & Struct;
    readonly isVetoExternal: boolean;
    readonly asVetoExternal: {
      readonly proposalHash: H256;
    } & Struct;
    readonly isCancelReferendum: boolean;
    readonly asCancelReferendum: {
      readonly refIndex: Compact<u32>;
    } & Struct;
    readonly isDelegate: boolean;
    readonly asDelegate: {
      readonly to: MultiAddress;
      readonly conviction: PalletDemocracyConviction;
      readonly balance: u128;
    } & Struct;
    readonly isUndelegate: boolean;
    readonly isClearPublicProposals: boolean;
    readonly isUnlock: boolean;
    readonly asUnlock: {
      readonly target: MultiAddress;
    } & Struct;
    readonly isRemoveVote: boolean;
    readonly asRemoveVote: {
      readonly index: u32;
    } & Struct;
    readonly isRemoveOtherVote: boolean;
    readonly asRemoveOtherVote: {
      readonly target: MultiAddress;
      readonly index: u32;
    } & Struct;
    readonly isBlacklist: boolean;
    readonly asBlacklist: {
      readonly proposalHash: H256;
      readonly maybeRefIndex: Option<u32>;
    } & Struct;
    readonly isCancelProposal: boolean;
    readonly asCancelProposal: {
      readonly propIndex: Compact<u32>;
    } & Struct;
    readonly isSetMetadata: boolean;
    readonly asSetMetadata: {
      readonly owner: PalletDemocracyMetadataOwner;
      readonly maybeHash: Option<H256>;
    } & Struct;
    readonly type: 'Propose' | 'Second' | 'Vote' | 'EmergencyCancel' | 'ExternalPropose' | 'ExternalProposeMajority' | 'ExternalProposeDefault' | 'FastTrack' | 'VetoExternal' | 'CancelReferendum' | 'Delegate' | 'Undelegate' | 'ClearPublicProposals' | 'Unlock' | 'RemoveVote' | 'RemoveOtherVote' | 'Blacklist' | 'CancelProposal' | 'SetMetadata';
  }

  /** @name PalletDemocracyConviction (384) */
  interface PalletDemocracyConviction extends Enum {
    readonly isNone: boolean;
    readonly isLocked1x: boolean;
    readonly isLocked2x: boolean;
    readonly isLocked3x: boolean;
    readonly isLocked4x: boolean;
    readonly isLocked5x: boolean;
    readonly isLocked6x: boolean;
    readonly type: 'None' | 'Locked1x' | 'Locked2x' | 'Locked3x' | 'Locked4x' | 'Locked5x' | 'Locked6x';
  }

  /** @name PalletCollectiveCall (385) */
  interface PalletCollectiveCall extends Enum {
    readonly isSetMembers: boolean;
    readonly asSetMembers: {
      readonly newMembers: Vec<AccountId32>;
      readonly prime: Option<AccountId32>;
      readonly oldCount: u32;
    } & Struct;
    readonly isExecute: boolean;
    readonly asExecute: {
      readonly proposal: Call;
      readonly lengthBound: Compact<u32>;
    } & Struct;
    readonly isPropose: boolean;
    readonly asPropose: {
      readonly threshold: Compact<u32>;
      readonly proposal: Call;
      readonly lengthBound: Compact<u32>;
    } & Struct;
    readonly isVote: boolean;
    readonly asVote: {
      readonly proposal: H256;
      readonly index: Compact<u32>;
      readonly approve: bool;
    } & Struct;
    readonly isDisapproveProposal: boolean;
    readonly asDisapproveProposal: {
      readonly proposalHash: H256;
    } & Struct;
    readonly isClose: boolean;
    readonly asClose: {
      readonly proposalHash: H256;
      readonly index: Compact<u32>;
      readonly proposalWeightBound: SpWeightsWeightV2Weight;
      readonly lengthBound: Compact<u32>;
    } & Struct;
    readonly type: 'SetMembers' | 'Execute' | 'Propose' | 'Vote' | 'DisapproveProposal' | 'Close';
  }

  /** @name PalletTreasuryCall (387) */
  interface PalletTreasuryCall extends Enum {
    readonly isProposeSpend: boolean;
    readonly asProposeSpend: {
      readonly value: Compact<u128>;
      readonly beneficiary: MultiAddress;
    } & Struct;
    readonly isRejectProposal: boolean;
    readonly asRejectProposal: {
      readonly proposalId: Compact<u32>;
    } & Struct;
    readonly isApproveProposal: boolean;
    readonly asApproveProposal: {
      readonly proposalId: Compact<u32>;
    } & Struct;
    readonly isSpendLocal: boolean;
    readonly asSpendLocal: {
      readonly amount: Compact<u128>;
      readonly beneficiary: MultiAddress;
    } & Struct;
    readonly isRemoveApproval: boolean;
    readonly asRemoveApproval: {
      readonly proposalId: Compact<u32>;
    } & Struct;
    readonly isSpend: boolean;
    readonly asSpend: {
      readonly assetKind: Null;
      readonly amount: Compact<u128>;
      readonly beneficiary: AccountId32;
      readonly validFrom: Option<u32>;
    } & Struct;
    readonly isPayout: boolean;
    readonly asPayout: {
      readonly index: u32;
    } & Struct;
    readonly isCheckStatus: boolean;
    readonly asCheckStatus: {
      readonly index: u32;
    } & Struct;
    readonly isVoidSpend: boolean;
    readonly asVoidSpend: {
      readonly index: u32;
    } & Struct;
    readonly type: 'ProposeSpend' | 'RejectProposal' | 'ApproveProposal' | 'SpendLocal' | 'RemoveApproval' | 'Spend' | 'Payout' | 'CheckStatus' | 'VoidSpend';
  }

  /** @name PalletMembershipCall (388) */
  interface PalletMembershipCall extends Enum {
    readonly isAddMember: boolean;
    readonly asAddMember: {
      readonly who: MultiAddress;
    } & Struct;
    readonly isRemoveMember: boolean;
    readonly asRemoveMember: {
      readonly who: MultiAddress;
    } & Struct;
    readonly isSwapMember: boolean;
    readonly asSwapMember: {
      readonly remove: MultiAddress;
      readonly add: MultiAddress;
    } & Struct;
    readonly isResetMembers: boolean;
    readonly asResetMembers: {
      readonly members: Vec<AccountId32>;
    } & Struct;
    readonly isChangeKey: boolean;
    readonly asChangeKey: {
      readonly new_: MultiAddress;
    } & Struct;
    readonly isSetPrime: boolean;
    readonly asSetPrime: {
      readonly who: MultiAddress;
    } & Struct;
    readonly isClearPrime: boolean;
    readonly type: 'AddMember' | 'RemoveMember' | 'SwapMember' | 'ResetMembers' | 'ChangeKey' | 'SetPrime' | 'ClearPrime';
  }

  /** @name PalletMultisigCall (389) */
  interface PalletMultisigCall extends Enum {
    readonly isAsMultiThreshold1: boolean;
    readonly asAsMultiThreshold1: {
      readonly otherSignatories: Vec<AccountId32>;
      readonly call: Call;
    } & Struct;
    readonly isAsMulti: boolean;
    readonly asAsMulti: {
      readonly threshold: u16;
      readonly otherSignatories: Vec<AccountId32>;
      readonly maybeTimepoint: Option<PalletMultisigTimepoint>;
      readonly call: Call;
      readonly maxWeight: SpWeightsWeightV2Weight;
    } & Struct;
    readonly isApproveAsMulti: boolean;
    readonly asApproveAsMulti: {
      readonly threshold: u16;
      readonly otherSignatories: Vec<AccountId32>;
      readonly maybeTimepoint: Option<PalletMultisigTimepoint>;
      readonly callHash: U8aFixed;
      readonly maxWeight: SpWeightsWeightV2Weight;
    } & Struct;
    readonly isCancelAsMulti: boolean;
    readonly asCancelAsMulti: {
      readonly threshold: u16;
      readonly otherSignatories: Vec<AccountId32>;
      readonly timepoint: PalletMultisigTimepoint;
      readonly callHash: U8aFixed;
    } & Struct;
    readonly type: 'AsMultiThreshold1' | 'AsMulti' | 'ApproveAsMulti' | 'CancelAsMulti';
  }

  /** @name PalletCollatorStakingCall (391) */
  interface PalletCollatorStakingCall extends Enum {
    readonly isSetInvulnerables: boolean;
    readonly asSetInvulnerables: {
      readonly accounts: Vec<AccountId32>;
    } & Struct;
    readonly isJoinCandidates: boolean;
    readonly asJoinCandidates: {
      readonly amount: u128;
      readonly rewardsCut: Perbill;
    } & Struct;
    readonly isUnbond: boolean;
    readonly isNominate: boolean;
    readonly asNominate: {
      readonly collatorId: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isRemoveNomination: boolean;
    readonly asRemoveNomination: {
      readonly collatorId: AccountId32;
    } & Struct;
    readonly isForceSetCurrentMaxCandidates: boolean;
    readonly asForceSetCurrentMaxCandidates: {
      readonly maxCandidates: u32;
    } & Struct;
    readonly isForceSetMinCollatorStake: boolean;
    readonly asForceSetMinCollatorStake: {
      readonly minCollatorStake: u128;
    } & Struct;
    readonly type: 'SetInvulnerables' | 'JoinCandidates' | 'Unbond' | 'Nominate' | 'RemoveNomination' | 'ForceSetCurrentMaxCandidates' | 'ForceSetMinCollatorStake';
  }

  /** @name PalletSessionCall (392) */
  interface PalletSessionCall extends Enum {
    readonly isSetKeys: boolean;
    readonly asSetKeys: {
      readonly keys_: EnjinMatrixRuntimeSessionKeys;
      readonly proof: Bytes;
    } & Struct;
    readonly isPurgeKeys: boolean;
    readonly type: 'SetKeys' | 'PurgeKeys';
  }

  /** @name EnjinMatrixRuntimeSessionKeys (393) */
  interface EnjinMatrixRuntimeSessionKeys extends Struct {
    readonly aura: SpConsensusAuraSr25519AppSr25519Public;
    readonly pools: SpConsensusAuraSr25519AppSr25519Public;
  }

  /** @name SpConsensusAuraSr25519AppSr25519Public (394) */
  interface SpConsensusAuraSr25519AppSr25519Public extends SpCoreSr25519Public {}

  /** @name SpCoreSr25519Public (395) */
  interface SpCoreSr25519Public extends U8aFixed {}

  /** @name CumulusPalletXcmpQueueCall (396) */
  interface CumulusPalletXcmpQueueCall extends Enum {
    readonly isSuspendXcmExecution: boolean;
    readonly isResumeXcmExecution: boolean;
    readonly isUpdateSuspendThreshold: boolean;
    readonly asUpdateSuspendThreshold: {
      readonly new_: u32;
    } & Struct;
    readonly isUpdateDropThreshold: boolean;
    readonly asUpdateDropThreshold: {
      readonly new_: u32;
    } & Struct;
    readonly isUpdateResumeThreshold: boolean;
    readonly asUpdateResumeThreshold: {
      readonly new_: u32;
    } & Struct;
    readonly type: 'SuspendXcmExecution' | 'ResumeXcmExecution' | 'UpdateSuspendThreshold' | 'UpdateDropThreshold' | 'UpdateResumeThreshold';
  }

  /** @name PalletXcmCall (397) */
  interface PalletXcmCall extends Enum {
    readonly isSend: boolean;
    readonly asSend: {
      readonly dest: XcmVersionedLocation;
      readonly message: XcmVersionedXcm;
    } & Struct;
    readonly isTeleportAssets: boolean;
    readonly asTeleportAssets: {
      readonly dest: XcmVersionedLocation;
      readonly beneficiary: XcmVersionedLocation;
      readonly assets: XcmVersionedAssets;
      readonly feeAssetItem: u32;
    } & Struct;
    readonly isReserveTransferAssets: boolean;
    readonly asReserveTransferAssets: {
      readonly dest: XcmVersionedLocation;
      readonly beneficiary: XcmVersionedLocation;
      readonly assets: XcmVersionedAssets;
      readonly feeAssetItem: u32;
    } & Struct;
    readonly isExecute: boolean;
    readonly asExecute: {
      readonly message: XcmVersionedXcm;
      readonly maxWeight: SpWeightsWeightV2Weight;
    } & Struct;
    readonly isForceXcmVersion: boolean;
    readonly asForceXcmVersion: {
      readonly location: StagingXcmV4Location;
      readonly version: u32;
    } & Struct;
    readonly isForceDefaultXcmVersion: boolean;
    readonly asForceDefaultXcmVersion: {
      readonly maybeXcmVersion: Option<u32>;
    } & Struct;
    readonly isForceSubscribeVersionNotify: boolean;
    readonly asForceSubscribeVersionNotify: {
      readonly location: XcmVersionedLocation;
    } & Struct;
    readonly isForceUnsubscribeVersionNotify: boolean;
    readonly asForceUnsubscribeVersionNotify: {
      readonly location: XcmVersionedLocation;
    } & Struct;
    readonly isLimitedReserveTransferAssets: boolean;
    readonly asLimitedReserveTransferAssets: {
      readonly dest: XcmVersionedLocation;
      readonly beneficiary: XcmVersionedLocation;
      readonly assets: XcmVersionedAssets;
      readonly feeAssetItem: u32;
      readonly weightLimit: XcmV3WeightLimit;
    } & Struct;
    readonly isLimitedTeleportAssets: boolean;
    readonly asLimitedTeleportAssets: {
      readonly dest: XcmVersionedLocation;
      readonly beneficiary: XcmVersionedLocation;
      readonly assets: XcmVersionedAssets;
      readonly feeAssetItem: u32;
      readonly weightLimit: XcmV3WeightLimit;
    } & Struct;
    readonly isForceSuspension: boolean;
    readonly asForceSuspension: {
      readonly suspended: bool;
    } & Struct;
    readonly isTransferAssets: boolean;
    readonly asTransferAssets: {
      readonly dest: XcmVersionedLocation;
      readonly beneficiary: XcmVersionedLocation;
      readonly assets: XcmVersionedAssets;
      readonly feeAssetItem: u32;
      readonly weightLimit: XcmV3WeightLimit;
    } & Struct;
    readonly isClaimAssets: boolean;
    readonly asClaimAssets: {
      readonly assets: XcmVersionedAssets;
      readonly beneficiary: XcmVersionedLocation;
    } & Struct;
    readonly type: 'Send' | 'TeleportAssets' | 'ReserveTransferAssets' | 'Execute' | 'ForceXcmVersion' | 'ForceDefaultXcmVersion' | 'ForceSubscribeVersionNotify' | 'ForceUnsubscribeVersionNotify' | 'LimitedReserveTransferAssets' | 'LimitedTeleportAssets' | 'ForceSuspension' | 'TransferAssets' | 'ClaimAssets';
  }

  /** @name XcmVersionedXcm (398) */
  interface XcmVersionedXcm extends Enum {
    readonly isV2: boolean;
    readonly asV2: XcmV2Xcm;
    readonly isV3: boolean;
    readonly asV3: XcmV3Xcm;
    readonly isV4: boolean;
    readonly asV4: StagingXcmV4Xcm;
    readonly type: 'V2' | 'V3' | 'V4';
  }

  /** @name XcmV2Xcm (399) */
  interface XcmV2Xcm extends Vec<XcmV2Instruction> {}

  /** @name XcmV2Instruction (401) */
  interface XcmV2Instruction extends Enum {
    readonly isWithdrawAsset: boolean;
    readonly asWithdrawAsset: XcmV2MultiassetMultiAssets;
    readonly isReserveAssetDeposited: boolean;
    readonly asReserveAssetDeposited: XcmV2MultiassetMultiAssets;
    readonly isReceiveTeleportedAsset: boolean;
    readonly asReceiveTeleportedAsset: XcmV2MultiassetMultiAssets;
    readonly isQueryResponse: boolean;
    readonly asQueryResponse: {
      readonly queryId: Compact<u64>;
      readonly response: XcmV2Response;
      readonly maxWeight: Compact<u64>;
    } & Struct;
    readonly isTransferAsset: boolean;
    readonly asTransferAsset: {
      readonly assets: XcmV2MultiassetMultiAssets;
      readonly beneficiary: XcmV2MultiLocation;
    } & Struct;
    readonly isTransferReserveAsset: boolean;
    readonly asTransferReserveAsset: {
      readonly assets: XcmV2MultiassetMultiAssets;
      readonly dest: XcmV2MultiLocation;
      readonly xcm: XcmV2Xcm;
    } & Struct;
    readonly isTransact: boolean;
    readonly asTransact: {
      readonly originType: XcmV2OriginKind;
      readonly requireWeightAtMost: Compact<u64>;
      readonly call: XcmDoubleEncoded;
    } & Struct;
    readonly isHrmpNewChannelOpenRequest: boolean;
    readonly asHrmpNewChannelOpenRequest: {
      readonly sender: Compact<u32>;
      readonly maxMessageSize: Compact<u32>;
      readonly maxCapacity: Compact<u32>;
    } & Struct;
    readonly isHrmpChannelAccepted: boolean;
    readonly asHrmpChannelAccepted: {
      readonly recipient: Compact<u32>;
    } & Struct;
    readonly isHrmpChannelClosing: boolean;
    readonly asHrmpChannelClosing: {
      readonly initiator: Compact<u32>;
      readonly sender: Compact<u32>;
      readonly recipient: Compact<u32>;
    } & Struct;
    readonly isClearOrigin: boolean;
    readonly isDescendOrigin: boolean;
    readonly asDescendOrigin: XcmV2MultilocationJunctions;
    readonly isReportError: boolean;
    readonly asReportError: {
      readonly queryId: Compact<u64>;
      readonly dest: XcmV2MultiLocation;
      readonly maxResponseWeight: Compact<u64>;
    } & Struct;
    readonly isDepositAsset: boolean;
    readonly asDepositAsset: {
      readonly assets: XcmV2MultiassetMultiAssetFilter;
      readonly maxAssets: Compact<u32>;
      readonly beneficiary: XcmV2MultiLocation;
    } & Struct;
    readonly isDepositReserveAsset: boolean;
    readonly asDepositReserveAsset: {
      readonly assets: XcmV2MultiassetMultiAssetFilter;
      readonly maxAssets: Compact<u32>;
      readonly dest: XcmV2MultiLocation;
      readonly xcm: XcmV2Xcm;
    } & Struct;
    readonly isExchangeAsset: boolean;
    readonly asExchangeAsset: {
      readonly give: XcmV2MultiassetMultiAssetFilter;
      readonly receive: XcmV2MultiassetMultiAssets;
    } & Struct;
    readonly isInitiateReserveWithdraw: boolean;
    readonly asInitiateReserveWithdraw: {
      readonly assets: XcmV2MultiassetMultiAssetFilter;
      readonly reserve: XcmV2MultiLocation;
      readonly xcm: XcmV2Xcm;
    } & Struct;
    readonly isInitiateTeleport: boolean;
    readonly asInitiateTeleport: {
      readonly assets: XcmV2MultiassetMultiAssetFilter;
      readonly dest: XcmV2MultiLocation;
      readonly xcm: XcmV2Xcm;
    } & Struct;
    readonly isQueryHolding: boolean;
    readonly asQueryHolding: {
      readonly queryId: Compact<u64>;
      readonly dest: XcmV2MultiLocation;
      readonly assets: XcmV2MultiassetMultiAssetFilter;
      readonly maxResponseWeight: Compact<u64>;
    } & Struct;
    readonly isBuyExecution: boolean;
    readonly asBuyExecution: {
      readonly fees: XcmV2MultiAsset;
      readonly weightLimit: XcmV2WeightLimit;
    } & Struct;
    readonly isRefundSurplus: boolean;
    readonly isSetErrorHandler: boolean;
    readonly asSetErrorHandler: XcmV2Xcm;
    readonly isSetAppendix: boolean;
    readonly asSetAppendix: XcmV2Xcm;
    readonly isClearError: boolean;
    readonly isClaimAsset: boolean;
    readonly asClaimAsset: {
      readonly assets: XcmV2MultiassetMultiAssets;
      readonly ticket: XcmV2MultiLocation;
    } & Struct;
    readonly isTrap: boolean;
    readonly asTrap: Compact<u64>;
    readonly isSubscribeVersion: boolean;
    readonly asSubscribeVersion: {
      readonly queryId: Compact<u64>;
      readonly maxResponseWeight: Compact<u64>;
    } & Struct;
    readonly isUnsubscribeVersion: boolean;
    readonly type: 'WithdrawAsset' | 'ReserveAssetDeposited' | 'ReceiveTeleportedAsset' | 'QueryResponse' | 'TransferAsset' | 'TransferReserveAsset' | 'Transact' | 'HrmpNewChannelOpenRequest' | 'HrmpChannelAccepted' | 'HrmpChannelClosing' | 'ClearOrigin' | 'DescendOrigin' | 'ReportError' | 'DepositAsset' | 'DepositReserveAsset' | 'ExchangeAsset' | 'InitiateReserveWithdraw' | 'InitiateTeleport' | 'QueryHolding' | 'BuyExecution' | 'RefundSurplus' | 'SetErrorHandler' | 'SetAppendix' | 'ClearError' | 'ClaimAsset' | 'Trap' | 'SubscribeVersion' | 'UnsubscribeVersion';
  }

  /** @name XcmV2Response (402) */
  interface XcmV2Response extends Enum {
    readonly isNull: boolean;
    readonly isAssets: boolean;
    readonly asAssets: XcmV2MultiassetMultiAssets;
    readonly isExecutionResult: boolean;
    readonly asExecutionResult: Option<ITuple<[u32, XcmV2TraitsError]>>;
    readonly isVersion: boolean;
    readonly asVersion: u32;
    readonly type: 'Null' | 'Assets' | 'ExecutionResult' | 'Version';
  }

  /** @name XcmV2TraitsError (405) */
  interface XcmV2TraitsError extends Enum {
    readonly isOverflow: boolean;
    readonly isUnimplemented: boolean;
    readonly isUntrustedReserveLocation: boolean;
    readonly isUntrustedTeleportLocation: boolean;
    readonly isMultiLocationFull: boolean;
    readonly isMultiLocationNotInvertible: boolean;
    readonly isBadOrigin: boolean;
    readonly isInvalidLocation: boolean;
    readonly isAssetNotFound: boolean;
    readonly isFailedToTransactAsset: boolean;
    readonly isNotWithdrawable: boolean;
    readonly isLocationCannotHold: boolean;
    readonly isExceedsMaxMessageSize: boolean;
    readonly isDestinationUnsupported: boolean;
    readonly isTransport: boolean;
    readonly isUnroutable: boolean;
    readonly isUnknownClaim: boolean;
    readonly isFailedToDecode: boolean;
    readonly isMaxWeightInvalid: boolean;
    readonly isNotHoldingFees: boolean;
    readonly isTooExpensive: boolean;
    readonly isTrap: boolean;
    readonly asTrap: u64;
    readonly isUnhandledXcmVersion: boolean;
    readonly isWeightLimitReached: boolean;
    readonly asWeightLimitReached: u64;
    readonly isBarrier: boolean;
    readonly isWeightNotComputable: boolean;
    readonly type: 'Overflow' | 'Unimplemented' | 'UntrustedReserveLocation' | 'UntrustedTeleportLocation' | 'MultiLocationFull' | 'MultiLocationNotInvertible' | 'BadOrigin' | 'InvalidLocation' | 'AssetNotFound' | 'FailedToTransactAsset' | 'NotWithdrawable' | 'LocationCannotHold' | 'ExceedsMaxMessageSize' | 'DestinationUnsupported' | 'Transport' | 'Unroutable' | 'UnknownClaim' | 'FailedToDecode' | 'MaxWeightInvalid' | 'NotHoldingFees' | 'TooExpensive' | 'Trap' | 'UnhandledXcmVersion' | 'WeightLimitReached' | 'Barrier' | 'WeightNotComputable';
  }

  /** @name XcmV2MultiassetMultiAssetFilter (406) */
  interface XcmV2MultiassetMultiAssetFilter extends Enum {
    readonly isDefinite: boolean;
    readonly asDefinite: XcmV2MultiassetMultiAssets;
    readonly isWild: boolean;
    readonly asWild: XcmV2MultiassetWildMultiAsset;
    readonly type: 'Definite' | 'Wild';
  }

  /** @name XcmV2MultiassetWildMultiAsset (407) */
  interface XcmV2MultiassetWildMultiAsset extends Enum {
    readonly isAll: boolean;
    readonly isAllOf: boolean;
    readonly asAllOf: {
      readonly id: XcmV2MultiassetAssetId;
      readonly fun: XcmV2MultiassetWildFungibility;
    } & Struct;
    readonly type: 'All' | 'AllOf';
  }

  /** @name XcmV2MultiassetWildFungibility (408) */
  interface XcmV2MultiassetWildFungibility extends Enum {
    readonly isFungible: boolean;
    readonly isNonFungible: boolean;
    readonly type: 'Fungible' | 'NonFungible';
  }

  /** @name XcmV2WeightLimit (409) */
  interface XcmV2WeightLimit extends Enum {
    readonly isUnlimited: boolean;
    readonly isLimited: boolean;
    readonly asLimited: Compact<u64>;
    readonly type: 'Unlimited' | 'Limited';
  }

  /** @name XcmV3Xcm (410) */
  interface XcmV3Xcm extends Vec<XcmV3Instruction> {}

  /** @name XcmV3Instruction (412) */
  interface XcmV3Instruction extends Enum {
    readonly isWithdrawAsset: boolean;
    readonly asWithdrawAsset: XcmV3MultiassetMultiAssets;
    readonly isReserveAssetDeposited: boolean;
    readonly asReserveAssetDeposited: XcmV3MultiassetMultiAssets;
    readonly isReceiveTeleportedAsset: boolean;
    readonly asReceiveTeleportedAsset: XcmV3MultiassetMultiAssets;
    readonly isQueryResponse: boolean;
    readonly asQueryResponse: {
      readonly queryId: Compact<u64>;
      readonly response: XcmV3Response;
      readonly maxWeight: SpWeightsWeightV2Weight;
      readonly querier: Option<StagingXcmV3MultiLocation>;
    } & Struct;
    readonly isTransferAsset: boolean;
    readonly asTransferAsset: {
      readonly assets: XcmV3MultiassetMultiAssets;
      readonly beneficiary: StagingXcmV3MultiLocation;
    } & Struct;
    readonly isTransferReserveAsset: boolean;
    readonly asTransferReserveAsset: {
      readonly assets: XcmV3MultiassetMultiAssets;
      readonly dest: StagingXcmV3MultiLocation;
      readonly xcm: XcmV3Xcm;
    } & Struct;
    readonly isTransact: boolean;
    readonly asTransact: {
      readonly originKind: XcmV2OriginKind;
      readonly requireWeightAtMost: SpWeightsWeightV2Weight;
      readonly call: XcmDoubleEncoded;
    } & Struct;
    readonly isHrmpNewChannelOpenRequest: boolean;
    readonly asHrmpNewChannelOpenRequest: {
      readonly sender: Compact<u32>;
      readonly maxMessageSize: Compact<u32>;
      readonly maxCapacity: Compact<u32>;
    } & Struct;
    readonly isHrmpChannelAccepted: boolean;
    readonly asHrmpChannelAccepted: {
      readonly recipient: Compact<u32>;
    } & Struct;
    readonly isHrmpChannelClosing: boolean;
    readonly asHrmpChannelClosing: {
      readonly initiator: Compact<u32>;
      readonly sender: Compact<u32>;
      readonly recipient: Compact<u32>;
    } & Struct;
    readonly isClearOrigin: boolean;
    readonly isDescendOrigin: boolean;
    readonly asDescendOrigin: XcmV3Junctions;
    readonly isReportError: boolean;
    readonly asReportError: XcmV3QueryResponseInfo;
    readonly isDepositAsset: boolean;
    readonly asDepositAsset: {
      readonly assets: XcmV3MultiassetMultiAssetFilter;
      readonly beneficiary: StagingXcmV3MultiLocation;
    } & Struct;
    readonly isDepositReserveAsset: boolean;
    readonly asDepositReserveAsset: {
      readonly assets: XcmV3MultiassetMultiAssetFilter;
      readonly dest: StagingXcmV3MultiLocation;
      readonly xcm: XcmV3Xcm;
    } & Struct;
    readonly isExchangeAsset: boolean;
    readonly asExchangeAsset: {
      readonly give: XcmV3MultiassetMultiAssetFilter;
      readonly want: XcmV3MultiassetMultiAssets;
      readonly maximal: bool;
    } & Struct;
    readonly isInitiateReserveWithdraw: boolean;
    readonly asInitiateReserveWithdraw: {
      readonly assets: XcmV3MultiassetMultiAssetFilter;
      readonly reserve: StagingXcmV3MultiLocation;
      readonly xcm: XcmV3Xcm;
    } & Struct;
    readonly isInitiateTeleport: boolean;
    readonly asInitiateTeleport: {
      readonly assets: XcmV3MultiassetMultiAssetFilter;
      readonly dest: StagingXcmV3MultiLocation;
      readonly xcm: XcmV3Xcm;
    } & Struct;
    readonly isReportHolding: boolean;
    readonly asReportHolding: {
      readonly responseInfo: XcmV3QueryResponseInfo;
      readonly assets: XcmV3MultiassetMultiAssetFilter;
    } & Struct;
    readonly isBuyExecution: boolean;
    readonly asBuyExecution: {
      readonly fees: XcmV3MultiAsset;
      readonly weightLimit: XcmV3WeightLimit;
    } & Struct;
    readonly isRefundSurplus: boolean;
    readonly isSetErrorHandler: boolean;
    readonly asSetErrorHandler: XcmV3Xcm;
    readonly isSetAppendix: boolean;
    readonly asSetAppendix: XcmV3Xcm;
    readonly isClearError: boolean;
    readonly isClaimAsset: boolean;
    readonly asClaimAsset: {
      readonly assets: XcmV3MultiassetMultiAssets;
      readonly ticket: StagingXcmV3MultiLocation;
    } & Struct;
    readonly isTrap: boolean;
    readonly asTrap: Compact<u64>;
    readonly isSubscribeVersion: boolean;
    readonly asSubscribeVersion: {
      readonly queryId: Compact<u64>;
      readonly maxResponseWeight: SpWeightsWeightV2Weight;
    } & Struct;
    readonly isUnsubscribeVersion: boolean;
    readonly isBurnAsset: boolean;
    readonly asBurnAsset: XcmV3MultiassetMultiAssets;
    readonly isExpectAsset: boolean;
    readonly asExpectAsset: XcmV3MultiassetMultiAssets;
    readonly isExpectOrigin: boolean;
    readonly asExpectOrigin: Option<StagingXcmV3MultiLocation>;
    readonly isExpectError: boolean;
    readonly asExpectError: Option<ITuple<[u32, XcmV3TraitsError]>>;
    readonly isExpectTransactStatus: boolean;
    readonly asExpectTransactStatus: XcmV3MaybeErrorCode;
    readonly isQueryPallet: boolean;
    readonly asQueryPallet: {
      readonly moduleName: Bytes;
      readonly responseInfo: XcmV3QueryResponseInfo;
    } & Struct;
    readonly isExpectPallet: boolean;
    readonly asExpectPallet: {
      readonly index: Compact<u32>;
      readonly name: Bytes;
      readonly moduleName: Bytes;
      readonly crateMajor: Compact<u32>;
      readonly minCrateMinor: Compact<u32>;
    } & Struct;
    readonly isReportTransactStatus: boolean;
    readonly asReportTransactStatus: XcmV3QueryResponseInfo;
    readonly isClearTransactStatus: boolean;
    readonly isUniversalOrigin: boolean;
    readonly asUniversalOrigin: XcmV3Junction;
    readonly isExportMessage: boolean;
    readonly asExportMessage: {
      readonly network: XcmV3JunctionNetworkId;
      readonly destination: XcmV3Junctions;
      readonly xcm: XcmV3Xcm;
    } & Struct;
    readonly isLockAsset: boolean;
    readonly asLockAsset: {
      readonly asset: XcmV3MultiAsset;
      readonly unlocker: StagingXcmV3MultiLocation;
    } & Struct;
    readonly isUnlockAsset: boolean;
    readonly asUnlockAsset: {
      readonly asset: XcmV3MultiAsset;
      readonly target: StagingXcmV3MultiLocation;
    } & Struct;
    readonly isNoteUnlockable: boolean;
    readonly asNoteUnlockable: {
      readonly asset: XcmV3MultiAsset;
      readonly owner: StagingXcmV3MultiLocation;
    } & Struct;
    readonly isRequestUnlock: boolean;
    readonly asRequestUnlock: {
      readonly asset: XcmV3MultiAsset;
      readonly locker: StagingXcmV3MultiLocation;
    } & Struct;
    readonly isSetFeesMode: boolean;
    readonly asSetFeesMode: {
      readonly jitWithdraw: bool;
    } & Struct;
    readonly isSetTopic: boolean;
    readonly asSetTopic: U8aFixed;
    readonly isClearTopic: boolean;
    readonly isAliasOrigin: boolean;
    readonly asAliasOrigin: StagingXcmV3MultiLocation;
    readonly isUnpaidExecution: boolean;
    readonly asUnpaidExecution: {
      readonly weightLimit: XcmV3WeightLimit;
      readonly checkOrigin: Option<StagingXcmV3MultiLocation>;
    } & Struct;
    readonly type: 'WithdrawAsset' | 'ReserveAssetDeposited' | 'ReceiveTeleportedAsset' | 'QueryResponse' | 'TransferAsset' | 'TransferReserveAsset' | 'Transact' | 'HrmpNewChannelOpenRequest' | 'HrmpChannelAccepted' | 'HrmpChannelClosing' | 'ClearOrigin' | 'DescendOrigin' | 'ReportError' | 'DepositAsset' | 'DepositReserveAsset' | 'ExchangeAsset' | 'InitiateReserveWithdraw' | 'InitiateTeleport' | 'ReportHolding' | 'BuyExecution' | 'RefundSurplus' | 'SetErrorHandler' | 'SetAppendix' | 'ClearError' | 'ClaimAsset' | 'Trap' | 'SubscribeVersion' | 'UnsubscribeVersion' | 'BurnAsset' | 'ExpectAsset' | 'ExpectOrigin' | 'ExpectError' | 'ExpectTransactStatus' | 'QueryPallet' | 'ExpectPallet' | 'ReportTransactStatus' | 'ClearTransactStatus' | 'UniversalOrigin' | 'ExportMessage' | 'LockAsset' | 'UnlockAsset' | 'NoteUnlockable' | 'RequestUnlock' | 'SetFeesMode' | 'SetTopic' | 'ClearTopic' | 'AliasOrigin' | 'UnpaidExecution';
  }

  /** @name XcmV3Response (413) */
  interface XcmV3Response extends Enum {
    readonly isNull: boolean;
    readonly isAssets: boolean;
    readonly asAssets: XcmV3MultiassetMultiAssets;
    readonly isExecutionResult: boolean;
    readonly asExecutionResult: Option<ITuple<[u32, XcmV3TraitsError]>>;
    readonly isVersion: boolean;
    readonly asVersion: u32;
    readonly isPalletsInfo: boolean;
    readonly asPalletsInfo: Vec<XcmV3PalletInfo>;
    readonly isDispatchResult: boolean;
    readonly asDispatchResult: XcmV3MaybeErrorCode;
    readonly type: 'Null' | 'Assets' | 'ExecutionResult' | 'Version' | 'PalletsInfo' | 'DispatchResult';
  }

  /** @name XcmV3PalletInfo (415) */
  interface XcmV3PalletInfo extends Struct {
    readonly index: Compact<u32>;
    readonly name: Bytes;
    readonly moduleName: Bytes;
    readonly major: Compact<u32>;
    readonly minor: Compact<u32>;
    readonly patch: Compact<u32>;
  }

  /** @name XcmV3QueryResponseInfo (419) */
  interface XcmV3QueryResponseInfo extends Struct {
    readonly destination: StagingXcmV3MultiLocation;
    readonly queryId: Compact<u64>;
    readonly maxWeight: SpWeightsWeightV2Weight;
  }

  /** @name XcmV3MultiassetMultiAssetFilter (420) */
  interface XcmV3MultiassetMultiAssetFilter extends Enum {
    readonly isDefinite: boolean;
    readonly asDefinite: XcmV3MultiassetMultiAssets;
    readonly isWild: boolean;
    readonly asWild: XcmV3MultiassetWildMultiAsset;
    readonly type: 'Definite' | 'Wild';
  }

  /** @name XcmV3MultiassetWildMultiAsset (421) */
  interface XcmV3MultiassetWildMultiAsset extends Enum {
    readonly isAll: boolean;
    readonly isAllOf: boolean;
    readonly asAllOf: {
      readonly id: XcmV3MultiassetAssetId;
      readonly fun: XcmV3MultiassetWildFungibility;
    } & Struct;
    readonly isAllCounted: boolean;
    readonly asAllCounted: Compact<u32>;
    readonly isAllOfCounted: boolean;
    readonly asAllOfCounted: {
      readonly id: XcmV3MultiassetAssetId;
      readonly fun: XcmV3MultiassetWildFungibility;
      readonly count: Compact<u32>;
    } & Struct;
    readonly type: 'All' | 'AllOf' | 'AllCounted' | 'AllOfCounted';
  }

  /** @name XcmV3MultiassetWildFungibility (422) */
  interface XcmV3MultiassetWildFungibility extends Enum {
    readonly isFungible: boolean;
    readonly isNonFungible: boolean;
    readonly type: 'Fungible' | 'NonFungible';
  }

  /** @name CumulusPalletXcmCall (434) */
  type CumulusPalletXcmCall = Null;

  /** @name CumulusPalletDmpQueueCall (435) */
  type CumulusPalletDmpQueueCall = Null;

  /** @name OrmlXcmModuleCall (436) */
  interface OrmlXcmModuleCall extends Enum {
    readonly isSendAsSovereign: boolean;
    readonly asSendAsSovereign: {
      readonly dest: XcmVersionedLocation;
      readonly message: XcmVersionedXcm;
    } & Struct;
    readonly type: 'SendAsSovereign';
  }

  /** @name MatrixPalletXcmCall (437) */
  interface MatrixPalletXcmCall extends Enum {
    readonly isTransferToParachain: boolean;
    readonly asTransferToParachain: {
      readonly paraId: MatrixPalletXcmImplsParachainId;
      readonly beneficiary: EpCoreFrameTypesAccount;
      readonly amount: u128;
      readonly destWeight: Option<u64>;
    } & Struct;
    readonly isTransferAssetToParachain: boolean;
    readonly asTransferAssetToParachain: {
      readonly paraId: MatrixPalletXcmImplsParachainId;
      readonly beneficiary: EpCoreFrameTypesAccount;
      readonly currencyId: EpMultiTokensTokenAssetId;
      readonly amount: u128;
      readonly destWeight: Option<u64>;
    } & Struct;
    readonly isForceSetMinimumWeight: boolean;
    readonly asForceSetMinimumWeight: {
      readonly xcmCall: MatrixPalletXcmXcmOperation;
      readonly xcmWeightFeeMisc: MatrixPalletXcmMinimumWeightFeePair;
    } & Struct;
    readonly isTransferAssetWithFee: boolean;
    readonly asTransferAssetWithFee: {
      readonly assetPair: MatrixPalletXcmCurrencyIdAmountPair;
      readonly feePair: MatrixPalletXcmCurrencyIdAmountPair;
      readonly paraId: MatrixPalletXcmImplsParachainId;
      readonly beneficiary: EpCoreFrameTypesAccount;
      readonly destWeight: Option<u64>;
    } & Struct;
    readonly type: 'TransferToParachain' | 'TransferAssetToParachain' | 'ForceSetMinimumWeight' | 'TransferAssetWithFee';
  }

  /** @name MatrixPalletXcmImplsParachainId (438) */
  interface MatrixPalletXcmImplsParachainId extends Enum {
    readonly isAcala: boolean;
    readonly isMoonbeam: boolean;
    readonly isStatemint: boolean;
    readonly type: 'Acala' | 'Moonbeam' | 'Statemint';
  }

  /** @name EpCoreFrameTypesAccount (439) */
  interface EpCoreFrameTypesAccount extends Enum {
    readonly isSubstrate: boolean;
    readonly asSubstrate: AccountId32;
    readonly isEvm: boolean;
    readonly asEvm: H160;
    readonly type: 'Substrate' | 'Evm';
  }

  /** @name MatrixPalletXcmCurrencyIdAmountPair (440) */
  interface MatrixPalletXcmCurrencyIdAmountPair extends Struct {
    readonly currencyId: EpMultiTokensTokenAssetId;
    readonly amount: Compact<u128>;
  }

  /** @name MatrixPalletXcmXcmOperation (441) */
  interface MatrixPalletXcmXcmOperation extends Enum {
    readonly isXTokensTransfer: boolean;
    readonly isParachainFee: boolean;
    readonly asParachainFee: StagingXcmV4Location;
    readonly type: 'XTokensTransfer' | 'ParachainFee';
  }

  /** @name OrmlXtokensModuleCall (442) */
  interface OrmlXtokensModuleCall extends Enum {
    readonly isTransfer: boolean;
    readonly asTransfer: {
      readonly currencyId: EpMultiTokensTokenAssetId;
      readonly amount: u128;
      readonly dest: XcmVersionedLocation;
      readonly destWeightLimit: XcmV3WeightLimit;
    } & Struct;
    readonly isTransferMultiasset: boolean;
    readonly asTransferMultiasset: {
      readonly asset: XcmVersionedAsset;
      readonly dest: XcmVersionedLocation;
      readonly destWeightLimit: XcmV3WeightLimit;
    } & Struct;
    readonly isTransferWithFee: boolean;
    readonly asTransferWithFee: {
      readonly currencyId: EpMultiTokensTokenAssetId;
      readonly amount: u128;
      readonly fee: u128;
      readonly dest: XcmVersionedLocation;
      readonly destWeightLimit: XcmV3WeightLimit;
    } & Struct;
    readonly isTransferMultiassetWithFee: boolean;
    readonly asTransferMultiassetWithFee: {
      readonly asset: XcmVersionedAsset;
      readonly fee: XcmVersionedAsset;
      readonly dest: XcmVersionedLocation;
      readonly destWeightLimit: XcmV3WeightLimit;
    } & Struct;
    readonly isTransferMulticurrencies: boolean;
    readonly asTransferMulticurrencies: {
      readonly currencies: Vec<ITuple<[EpMultiTokensTokenAssetId, u128]>>;
      readonly feeItem: u32;
      readonly dest: XcmVersionedLocation;
      readonly destWeightLimit: XcmV3WeightLimit;
    } & Struct;
    readonly isTransferMultiassets: boolean;
    readonly asTransferMultiassets: {
      readonly assets: XcmVersionedAssets;
      readonly feeItem: u32;
      readonly dest: XcmVersionedLocation;
      readonly destWeightLimit: XcmV3WeightLimit;
    } & Struct;
    readonly type: 'Transfer' | 'TransferMultiasset' | 'TransferWithFee' | 'TransferMultiassetWithFee' | 'TransferMulticurrencies' | 'TransferMultiassets';
  }

  /** @name XcmVersionedAsset (443) */
  interface XcmVersionedAsset extends Enum {
    readonly isV2: boolean;
    readonly asV2: XcmV2MultiAsset;
    readonly isV3: boolean;
    readonly asV3: XcmV3MultiAsset;
    readonly isV4: boolean;
    readonly asV4: StagingXcmV4Asset;
    readonly type: 'V2' | 'V3' | 'V4';
  }

  /** @name PalletMessageQueueCall (446) */
  interface PalletMessageQueueCall extends Enum {
    readonly isReapPage: boolean;
    readonly asReapPage: {
      readonly messageOrigin: CumulusPrimitivesCoreAggregateMessageOrigin;
      readonly pageIndex: u32;
    } & Struct;
    readonly isExecuteOverweight: boolean;
    readonly asExecuteOverweight: {
      readonly messageOrigin: CumulusPrimitivesCoreAggregateMessageOrigin;
      readonly page: u32;
      readonly index: u32;
      readonly weightLimit: SpWeightsWeightV2Weight;
    } & Struct;
    readonly type: 'ReapPage' | 'ExecuteOverweight';
  }

  /** @name PalletBountiesCall (447) */
  interface PalletBountiesCall extends Enum {
    readonly isProposeBounty: boolean;
    readonly asProposeBounty: {
      readonly value: Compact<u128>;
      readonly description: Bytes;
    } & Struct;
    readonly isApproveBounty: boolean;
    readonly asApproveBounty: {
      readonly bountyId: Compact<u32>;
    } & Struct;
    readonly isProposeCurator: boolean;
    readonly asProposeCurator: {
      readonly bountyId: Compact<u32>;
      readonly curator: MultiAddress;
      readonly fee: Compact<u128>;
    } & Struct;
    readonly isUnassignCurator: boolean;
    readonly asUnassignCurator: {
      readonly bountyId: Compact<u32>;
    } & Struct;
    readonly isAcceptCurator: boolean;
    readonly asAcceptCurator: {
      readonly bountyId: Compact<u32>;
    } & Struct;
    readonly isAwardBounty: boolean;
    readonly asAwardBounty: {
      readonly bountyId: Compact<u32>;
      readonly beneficiary: MultiAddress;
    } & Struct;
    readonly isClaimBounty: boolean;
    readonly asClaimBounty: {
      readonly bountyId: Compact<u32>;
    } & Struct;
    readonly isCloseBounty: boolean;
    readonly asCloseBounty: {
      readonly bountyId: Compact<u32>;
    } & Struct;
    readonly isExtendBountyExpiry: boolean;
    readonly asExtendBountyExpiry: {
      readonly bountyId: Compact<u32>;
      readonly remark: Bytes;
    } & Struct;
    readonly type: 'ProposeBounty' | 'ApproveBounty' | 'ProposeCurator' | 'UnassignCurator' | 'AcceptCurator' | 'AwardBounty' | 'ClaimBounty' | 'CloseBounty' | 'ExtendBountyExpiry';
  }

  /** @name PalletMultiTokensCall (448) */
  interface PalletMultiTokensCall extends Enum {
    readonly isCreateCollection: boolean;
    readonly asCreateCollection: {
      readonly descriptor: EpMultiTokensCollectionDefaultCollectionDescriptor;
    } & Struct;
    readonly isDestroyCollection: boolean;
    readonly asDestroyCollection: {
      readonly collectionId: Compact<u128>;
    } & Struct;
    readonly isMutateCollection: boolean;
    readonly asMutateCollection: {
      readonly collectionId: Compact<u128>;
      readonly mutation: EpMultiTokensCollectionDefaultCollectionMutation;
    } & Struct;
    readonly isMutateToken: boolean;
    readonly asMutateToken: {
      readonly collectionId: Compact<u128>;
      readonly tokenId: Compact<u128>;
      readonly mutation: EpMultiTokensTokenDefaultTokenMutation;
    } & Struct;
    readonly isMint: boolean;
    readonly asMint: {
      readonly recipient: MultiAddress;
      readonly collectionId: Compact<u128>;
      readonly params: EpMultiTokensPolicyMintDefaultMintParams;
    } & Struct;
    readonly isBurn: boolean;
    readonly asBurn: {
      readonly collectionId: Compact<u128>;
      readonly params: EpMultiTokensPolicyBurnDefaultBurnParams;
    } & Struct;
    readonly isTransfer: boolean;
    readonly asTransfer: {
      readonly recipient: MultiAddress;
      readonly collectionId: Compact<u128>;
      readonly params: EpMultiTokensPolicyTransferDefaultTransferParams;
    } & Struct;
    readonly isFreeze: boolean;
    readonly asFreeze: {
      readonly info: EpMultiTokensFreeze;
    } & Struct;
    readonly isThaw: boolean;
    readonly asThaw: {
      readonly info: EpMultiTokensFreeze;
    } & Struct;
    readonly isSetAttribute: boolean;
    readonly asSetAttribute: {
      readonly collectionId: Compact<u128>;
      readonly tokenId: Option<u128>;
      readonly key: Bytes;
      readonly value: Bytes;
      readonly depositor: Option<MultiAddress>;
    } & Struct;
    readonly isRemoveAttribute: boolean;
    readonly asRemoveAttribute: {
      readonly collectionId: Compact<u128>;
      readonly tokenId: Option<u128>;
      readonly key: Bytes;
    } & Struct;
    readonly isRemoveAllAttributes: boolean;
    readonly asRemoveAllAttributes: {
      readonly collectionId: Compact<u128>;
      readonly tokenId: Option<u128>;
      readonly attributeCount: u32;
    } & Struct;
    readonly isBatchTransfer: boolean;
    readonly asBatchTransfer: {
      readonly collectionId: Compact<u128>;
      readonly recipients: Vec<EpMultiTokensBatchRecipientDefaultTransferParams>;
    } & Struct;
    readonly isBatchMint: boolean;
    readonly asBatchMint: {
      readonly collectionId: Compact<u128>;
      readonly recipients: Vec<EpMultiTokensBatchRecipientDefaultMintParams>;
    } & Struct;
    readonly isBatchSetAttribute: boolean;
    readonly asBatchSetAttribute: {
      readonly collectionId: Compact<u128>;
      readonly tokenId: Option<u128>;
      readonly attributes: Vec<EpMultiTokensBatchAttributeKeyValuePair>;
      readonly depositor: Option<MultiAddress>;
    } & Struct;
    readonly isApproveCollection: boolean;
    readonly asApproveCollection: {
      readonly collectionId: Compact<u128>;
      readonly operator: AccountId32;
      readonly expiration: Option<u32>;
    } & Struct;
    readonly isUnapproveCollection: boolean;
    readonly asUnapproveCollection: {
      readonly collectionId: Compact<u128>;
      readonly operator: AccountId32;
    } & Struct;
    readonly isApproveToken: boolean;
    readonly asApproveToken: {
      readonly collectionId: Compact<u128>;
      readonly tokenId: Compact<u128>;
      readonly operator: AccountId32;
      readonly amount: Compact<u128>;
      readonly expiration: Option<u32>;
      readonly currentAmount: Compact<u128>;
    } & Struct;
    readonly isUnapproveToken: boolean;
    readonly asUnapproveToken: {
      readonly collectionId: Compact<u128>;
      readonly tokenId: Compact<u128>;
      readonly operator: AccountId32;
    } & Struct;
    readonly isForceMutateCollection: boolean;
    readonly asForceMutateCollection: {
      readonly collectionId: Compact<u128>;
      readonly mutation: EpMultiTokensCollectionDefaultCollectionMutation;
    } & Struct;
    readonly isForceTransfer: boolean;
    readonly asForceTransfer: {
      readonly source: MultiAddress;
      readonly destination: MultiAddress;
      readonly collectionId: Compact<u128>;
      readonly params: EpMultiTokensPolicyTransferDefaultTransferParams;
    } & Struct;
    readonly isForceSetCollection: boolean;
    readonly asForceSetCollection: {
      readonly collectionId: Compact<u128>;
      readonly value: Option<EpMultiTokensCollection>;
    } & Struct;
    readonly isForceSetToken: boolean;
    readonly asForceSetToken: {
      readonly collectionId: Compact<u128>;
      readonly tokenId: Compact<u128>;
      readonly value: Option<EpMultiTokensToken>;
    } & Struct;
    readonly isForceSetAttribute: boolean;
    readonly asForceSetAttribute: {
      readonly collectionId: Compact<u128>;
      readonly tokenId: Option<u128>;
      readonly key: Bytes;
      readonly value: Option<EpMultiTokensAttribute>;
    } & Struct;
    readonly isForceSetCollectionAccount: boolean;
    readonly asForceSetCollectionAccount: {
      readonly collectionId: Compact<u128>;
      readonly accountId: MultiAddress;
      readonly value: Option<PalletMultiTokensFeaturesCollectionTypesCollectionAccount>;
    } & Struct;
    readonly isForceSetTokenAccount: boolean;
    readonly asForceSetTokenAccount: {
      readonly collectionId: Compact<u128>;
      readonly tokenId: Compact<u128>;
      readonly accountId: MultiAddress;
      readonly value: Option<PalletMultiTokensFeaturesTokenTypesTokenAccount>;
    } & Struct;
    readonly isForceCreateCollection: boolean;
    readonly asForceCreateCollection: {
      readonly owner: AccountId32;
      readonly collectionId: Compact<u128>;
      readonly descriptor: EpMultiTokensCollectionDefaultCollectionDescriptor;
    } & Struct;
    readonly isForceMint: boolean;
    readonly asForceMint: {
      readonly caller: Option<MultiAddress>;
      readonly recipient: MultiAddress;
      readonly collectionId: Compact<u128>;
      readonly params: EpMultiTokensPolicyMintFlexibleMintParams;
      readonly depositor: Option<MultiAddress>;
    } & Struct;
    readonly isForceBurn: boolean;
    readonly asForceBurn: {
      readonly caller: MultiAddress;
      readonly collectionId: Compact<u128>;
      readonly params: EpMultiTokensPolicyBurnDefaultBurnParams;
    } & Struct;
    readonly isForceApproveCollection: boolean;
    readonly asForceApproveCollection: {
      readonly caller: MultiAddress;
      readonly collectionId: Compact<u128>;
      readonly operator: AccountId32;
      readonly expiration: Option<u32>;
    } & Struct;
    readonly isForceFreeze: boolean;
    readonly asForceFreeze: {
      readonly info: EpMultiTokensFreeze;
    } & Struct;
    readonly isForceSetNextCollectionId: boolean;
    readonly asForceSetNextCollectionId: {
      readonly value: Compact<u128>;
    } & Struct;
    readonly isClaimCollections: boolean;
    readonly asClaimCollections: {
      readonly destination: AccountId32;
      readonly ethereumSignature: SpCoreEcdsaSignature;
      readonly ethereumAddress: H160;
      readonly collectionCount: Compact<u32>;
    } & Struct;
    readonly isClaimTokens: boolean;
    readonly asClaimTokens: {
      readonly destination: AccountId32;
      readonly ethereumSignature: SpCoreEcdsaSignature;
      readonly ethereumAddress: H160;
    } & Struct;
    readonly isForceSetEthereumAccount: boolean;
    readonly asForceSetEthereumAccount: {
      readonly address: H160;
      readonly value: Option<Vec<u128>>;
    } & Struct;
    readonly isForceSetEthereumCollectionId: boolean;
    readonly asForceSetEthereumCollectionId: {
      readonly ethereumCollectionId: Compact<u128>;
      readonly nativeCollectionId: Option<u128>;
    } & Struct;
    readonly isFinishClaimTokens: boolean;
    readonly asFinishClaimTokens: {
      readonly destination: AccountId32;
      readonly ethereumAddress: H160;
    } & Struct;
    readonly isForceSetUnmintableTokenIds: boolean;
    readonly asForceSetUnmintableTokenIds: {
      readonly collectionId: Compact<u128>;
      readonly baseTokenId: Compact<u64>;
      readonly tokenIndex: Compact<u64>;
    } & Struct;
    readonly isForceCreateEthereumCollection: boolean;
    readonly asForceCreateEthereumCollection: {
      readonly owner: AccountId32;
      readonly claimer: H160;
      readonly ethereumCollectionId: Compact<u128>;
      readonly descriptor: EpMultiTokensCollectionDefaultCollectionDescriptor;
    } & Struct;
    readonly isForceSetEthereumUnmintableTokenIds: boolean;
    readonly asForceSetEthereumUnmintableTokenIds: {
      readonly ethereumCollectionId: Compact<u128>;
      readonly baseTokenId: Compact<u64>;
      readonly tokenIndex: Compact<u64>;
    } & Struct;
    readonly isAcceptCollectionTransfer: boolean;
    readonly asAcceptCollectionTransfer: {
      readonly collectionId: Compact<u128>;
    } & Struct;
    readonly isCancelCollectionTransfer: boolean;
    readonly asCancelCollectionTransfer: {
      readonly collectionId: Compact<u128>;
    } & Struct;
    readonly isUpdateAccountDeposit: boolean;
    readonly asUpdateAccountDeposit: {
      readonly collectionId: Compact<u128>;
      readonly tokenId: Compact<u128>;
      readonly deltaAccountCount: i32;
    } & Struct;
    readonly isInfuse: boolean;
    readonly asInfuse: {
      readonly collectionId: Compact<u128>;
      readonly tokenId: Compact<u128>;
      readonly amount: Compact<u128>;
    } & Struct;
    readonly type: 'CreateCollection' | 'DestroyCollection' | 'MutateCollection' | 'MutateToken' | 'Mint' | 'Burn' | 'Transfer' | 'Freeze' | 'Thaw' | 'SetAttribute' | 'RemoveAttribute' | 'RemoveAllAttributes' | 'BatchTransfer' | 'BatchMint' | 'BatchSetAttribute' | 'ApproveCollection' | 'UnapproveCollection' | 'ApproveToken' | 'UnapproveToken' | 'ForceMutateCollection' | 'ForceTransfer' | 'ForceSetCollection' | 'ForceSetToken' | 'ForceSetAttribute' | 'ForceSetCollectionAccount' | 'ForceSetTokenAccount' | 'ForceCreateCollection' | 'ForceMint' | 'ForceBurn' | 'ForceApproveCollection' | 'ForceFreeze' | 'ForceSetNextCollectionId' | 'ClaimCollections' | 'ClaimTokens' | 'ForceSetEthereumAccount' | 'ForceSetEthereumCollectionId' | 'FinishClaimTokens' | 'ForceSetUnmintableTokenIds' | 'ForceCreateEthereumCollection' | 'ForceSetEthereumUnmintableTokenIds' | 'AcceptCollectionTransfer' | 'CancelCollectionTransfer' | 'UpdateAccountDeposit' | 'Infuse';
  }

  /** @name EpMultiTokensCollectionDefaultCollectionDescriptor (449) */
  interface EpMultiTokensCollectionDefaultCollectionDescriptor extends Struct {
    readonly policy: EpMultiTokensPolicyDefaultCollectionPolicyDescriptor;
    readonly depositor: Option<AccountId32>;
    readonly explicitRoyaltyCurrencies: Vec<EpMultiTokensTokenAssetId>;
    readonly attributes: Vec<EpMultiTokensBatchAttributeKeyValuePair>;
  }

  /** @name EpMultiTokensBatchAttributeKeyValuePair (451) */
  interface EpMultiTokensBatchAttributeKeyValuePair extends Struct {
    readonly key: Bytes;
    readonly value: Bytes;
  }

  /** @name EpMultiTokensPolicyDefaultCollectionPolicyDescriptor (453) */
  interface EpMultiTokensPolicyDefaultCollectionPolicyDescriptor extends Struct {
    readonly mint: EpMultiTokensPolicyMintDefaultMintPolicyDescriptor;
    readonly burn: EpMultiTokensPolicyBurnDefaultBurnPolicyDescriptor;
    readonly transfer: EpMultiTokensPolicyTransferDefaultTransferPolicyDescriptor;
    readonly attribute: EpMultiTokensPolicyAttributeDefaultAttributePolicyDescriptor;
    readonly market: EpMultiTokensPolicyMarketDefaultMarketPolicyDescriptor;
  }

  /** @name EpMultiTokensPolicyMintDefaultMintPolicyDescriptor (454) */
  interface EpMultiTokensPolicyMintDefaultMintPolicyDescriptor extends Struct {
    readonly maxTokenCount: Option<u64>;
    readonly maxTokenSupply: Option<u128>;
    readonly forceCollapsingSupply: bool;
  }

  /** @name EpMultiTokensPolicyBurnDefaultBurnPolicyDescriptor (455) */
  type EpMultiTokensPolicyBurnDefaultBurnPolicyDescriptor = Null;

  /** @name EpMultiTokensPolicyTransferDefaultTransferPolicyDescriptor (456) */
  type EpMultiTokensPolicyTransferDefaultTransferPolicyDescriptor = Null;

  /** @name EpMultiTokensPolicyAttributeDefaultAttributePolicyDescriptor (457) */
  type EpMultiTokensPolicyAttributeDefaultAttributePolicyDescriptor = Null;

  /** @name EpMultiTokensPolicyMarketDefaultMarketPolicyDescriptor (458) */
  interface EpMultiTokensPolicyMarketDefaultMarketPolicyDescriptor extends Struct {
    readonly royalty: Option<EpMultiTokensPolicyMarketDefaultRoyalty>;
  }

  /** @name EpMultiTokensPolicyMintDefaultMintParams (459) */
  interface EpMultiTokensPolicyMintDefaultMintParams extends Enum {
    readonly isCreateToken: boolean;
    readonly asCreateToken: {
      readonly tokenId: Compact<u128>;
      readonly initialSupply: Compact<u128>;
      readonly accountDepositCount: Compact<u32>;
      readonly cap: Option<EpMultiTokensTokenTokenCap>;
      readonly behavior: Option<EpMultiTokensTokenTokenMarketBehavior>;
      readonly listingForbidden: bool;
      readonly freezeState: Option<EpMultiTokensTokenFreezeState>;
      readonly attributes: Vec<EpMultiTokensBatchAttributeKeyValuePair>;
      readonly infusion: Compact<u128>;
      readonly anyoneCanInfuse: bool;
      readonly metadata: EpMultiTokensPolicyMintCreateTokenMetadata;
      readonly privilegedParams: Option<EpMultiTokensPolicyMintPrivilegedCreateTokenParams>;
    } & Struct;
    readonly isMint: boolean;
    readonly asMint: {
      readonly tokenId: Compact<u128>;
      readonly amount: Compact<u128>;
      readonly depositor: Option<AccountId32>;
    } & Struct;
    readonly type: 'CreateToken' | 'Mint';
  }

  /** @name EpMultiTokensPolicyMintCreateTokenMetadata (460) */
  interface EpMultiTokensPolicyMintCreateTokenMetadata extends Struct {
    readonly name: Bytes;
    readonly symbol: Bytes;
    readonly decimalCount: u8;
  }

  /** @name EpMultiTokensPolicyMintPrivilegedCreateTokenParams (462) */
  interface EpMultiTokensPolicyMintPrivilegedCreateTokenParams extends Struct {
    readonly requiresDeposit: bool;
    readonly foreignParams: Option<EpMultiTokensPolicyMintForeignTokenCreationParams>;
    readonly depositor: Option<AccountId32>;
  }

  /** @name EpMultiTokensPolicyMintForeignTokenCreationParams (464) */
  interface EpMultiTokensPolicyMintForeignTokenCreationParams extends Struct {
    readonly location: Option<StagingXcmV4Location>;
    readonly unitsPerSecond: Option<u128>;
  }

  /** @name EpMultiTokensPolicyBurnDefaultBurnParams (465) */
  interface EpMultiTokensPolicyBurnDefaultBurnParams extends Struct {
    readonly tokenId: Compact<u128>;
    readonly amount: Compact<u128>;
    readonly removeTokenStorage: bool;
  }

  /** @name EpMultiTokensPolicyTransferDefaultTransferParams (466) */
  interface EpMultiTokensPolicyTransferDefaultTransferParams extends Enum {
    readonly isSimple: boolean;
    readonly asSimple: {
      readonly tokenId: Compact<u128>;
      readonly amount: Compact<u128>;
      readonly depositor: Option<AccountId32>;
    } & Struct;
    readonly isOperator: boolean;
    readonly asOperator: {
      readonly tokenId: Compact<u128>;
      readonly source: AccountId32;
      readonly amount: Compact<u128>;
      readonly depositor: Option<AccountId32>;
    } & Struct;
    readonly type: 'Simple' | 'Operator';
  }

  /** @name EpMultiTokensBatchRecipientDefaultTransferParams (469) */
  interface EpMultiTokensBatchRecipientDefaultTransferParams extends Struct {
    readonly accountId: AccountId32;
    readonly params: EpMultiTokensPolicyTransferDefaultTransferParams;
  }

  /** @name EpMultiTokensBatchRecipientDefaultMintParams (472) */
  interface EpMultiTokensBatchRecipientDefaultMintParams extends Struct {
    readonly accountId: AccountId32;
    readonly params: EpMultiTokensPolicyMintDefaultMintParams;
  }

  /** @name SpCoreEcdsaSignature (474) */
  interface SpCoreEcdsaSignature extends U8aFixed {}

  /** @name EpMultiTokensAttribute (478) */
  interface EpMultiTokensAttribute extends Struct {
    readonly value: Bytes;
    readonly deposit: Compact<u128>;
    readonly depositor: Option<AccountId32>;
  }

  /** @name EpMultiTokensPolicyMintFlexibleMintParams (479) */
  interface EpMultiTokensPolicyMintFlexibleMintParams extends Enum {
    readonly isCreateOrMint: boolean;
    readonly asCreateOrMint: EpMultiTokensPolicyMintCreateTokenParams;
    readonly isMint: boolean;
    readonly asMint: {
      readonly tokenId: Compact<u128>;
      readonly amount: Compact<u128>;
      readonly depositor: Option<AccountId32>;
    } & Struct;
    readonly type: 'CreateOrMint' | 'Mint';
  }

  /** @name EpMultiTokensPolicyMintCreateTokenParams (480) */
  interface EpMultiTokensPolicyMintCreateTokenParams extends Struct {
    readonly tokenId: Compact<u128>;
    readonly amount: Compact<u128>;
    readonly accountDepositCount: Compact<u32>;
    readonly cap: Option<EpMultiTokensTokenTokenCap>;
    readonly behavior: Option<EpMultiTokensTokenTokenMarketBehavior>;
    readonly listingForbidden: bool;
    readonly freezeState: Option<EpMultiTokensTokenFreezeState>;
    readonly attributes: Vec<EpMultiTokensBatchAttributeKeyValuePair>;
    readonly infusion: Compact<u128>;
    readonly anyoneCanInfuse: bool;
    readonly metadata: EpMultiTokensPolicyMintCreateTokenMetadata;
    readonly privilegedParams: Option<EpMultiTokensPolicyMintPrivilegedCreateTokenParams>;
  }

  /** @name PalletPoolsCall (483) */
  interface PalletPoolsCall extends Enum {
    readonly isMutatePools: boolean;
    readonly asMutatePools: {
      readonly mutation: PalletPoolsPoolsMutation;
    } & Struct;
    readonly type: 'MutatePools';
  }

  /** @name PalletFuelTanksCall (484) */
  interface PalletFuelTanksCall extends Enum {
    readonly isCreateFuelTank: boolean;
    readonly asCreateFuelTank: {
      readonly descriptor: PalletFuelTanksFuelTankDescriptor;
    } & Struct;
    readonly isMutateFuelTank: boolean;
    readonly asMutateFuelTank: {
      readonly tankId: MultiAddress;
      readonly mutation: PalletFuelTanksImplsDefaultTankMutation;
    } & Struct;
    readonly isAddAccount: boolean;
    readonly asAddAccount: {
      readonly tankId: MultiAddress;
      readonly userId: MultiAddress;
    } & Struct;
    readonly isRemoveAccount: boolean;
    readonly asRemoveAccount: {
      readonly tankId: MultiAddress;
      readonly userId: MultiAddress;
    } & Struct;
    readonly isRemoveAccountRuleData: boolean;
    readonly asRemoveAccountRuleData: {
      readonly tankId: MultiAddress;
      readonly userId: MultiAddress;
      readonly ruleSetId: u32;
      readonly ruleKind: PalletFuelTanksRulesDispatchRuleKind;
    } & Struct;
    readonly isDispatch: boolean;
    readonly asDispatch: {
      readonly tankId: MultiAddress;
      readonly ruleSetId: u32;
      readonly call: Call;
      readonly settings: Option<PalletFuelTanksDispatchSettings>;
    } & Struct;
    readonly isDispatchAndTouch: boolean;
    readonly asDispatchAndTouch: {
      readonly tankId: MultiAddress;
      readonly ruleSetId: u32;
      readonly call: Call;
      readonly settings: Option<PalletFuelTanksDispatchSettings>;
    } & Struct;
    readonly isMutateFreezeState: boolean;
    readonly asMutateFreezeState: {
      readonly tankId: MultiAddress;
      readonly ruleSetId: Option<u32>;
      readonly isFrozen: bool;
    } & Struct;
    readonly isInsertRuleSet: boolean;
    readonly asInsertRuleSet: {
      readonly tankId: MultiAddress;
      readonly ruleSetId: u32;
      readonly ruleSet: PalletFuelTanksRulesRuleSetDescriptor;
    } & Struct;
    readonly isRemoveRuleSet: boolean;
    readonly asRemoveRuleSet: {
      readonly tankId: MultiAddress;
      readonly ruleSetId: u32;
    } & Struct;
    readonly isBatchAddAccount: boolean;
    readonly asBatchAddAccount: {
      readonly tankId: MultiAddress;
      readonly userIds: Vec<MultiAddress>;
    } & Struct;
    readonly isBatchRemoveAccount: boolean;
    readonly asBatchRemoveAccount: {
      readonly tankId: MultiAddress;
      readonly userIds: Vec<MultiAddress>;
    } & Struct;
    readonly isForceSetConsumption: boolean;
    readonly asForceSetConsumption: {
      readonly tankId: MultiAddress;
      readonly userId: Option<MultiAddress>;
      readonly ruleSetId: u32;
      readonly consumption: PalletFuelTanksConsumption;
    } & Struct;
    readonly isDestroyFuelTank: boolean;
    readonly asDestroyFuelTank: {
      readonly tankId: MultiAddress;
    } & Struct;
    readonly isForceCreateFuelTank: boolean;
    readonly asForceCreateFuelTank: {
      readonly owner: MultiAddress;
      readonly descriptor: PalletFuelTanksFuelTankDescriptor;
    } & Struct;
    readonly isForceBatchAddAccount: boolean;
    readonly asForceBatchAddAccount: {
      readonly owner: MultiAddress;
      readonly tankId: MultiAddress;
      readonly userIds: Vec<MultiAddress>;
    } & Struct;
    readonly type: 'CreateFuelTank' | 'MutateFuelTank' | 'AddAccount' | 'RemoveAccount' | 'RemoveAccountRuleData' | 'Dispatch' | 'DispatchAndTouch' | 'MutateFreezeState' | 'InsertRuleSet' | 'RemoveRuleSet' | 'BatchAddAccount' | 'BatchRemoveAccount' | 'ForceSetConsumption' | 'DestroyFuelTank' | 'ForceCreateFuelTank' | 'ForceBatchAddAccount';
  }

  /** @name PalletFuelTanksFuelTankDescriptor (485) */
  interface PalletFuelTanksFuelTankDescriptor extends Struct {
    readonly name: Bytes;
    readonly userAccountManagement: Option<PalletFuelTanksUserAccountManagement>;
    readonly ruleSets: BTreeMap<u32, PalletFuelTanksRulesRuleSetDescriptor>;
    readonly coveragePolicy: PalletFuelTanksCoveragePolicy;
    readonly accountRules: Vec<PalletFuelTanksRulesAccountRuleDescriptor>;
  }

  /** @name PalletFuelTanksRulesRuleSetDescriptor (487) */
  interface PalletFuelTanksRulesRuleSetDescriptor extends Struct {
    readonly rules: Vec<PalletFuelTanksRulesDispatchRuleDescriptor>;
    readonly requireAccount: bool;
  }

  /** @name PalletFuelTanksRulesDispatchRuleDescriptor (488) */
  interface PalletFuelTanksRulesDispatchRuleDescriptor extends Enum {
    readonly isWhitelistedCallers: boolean;
    readonly asWhitelistedCallers: PalletFuelTanksRulesWhitelistedCallersWhitelistedCallersRule;
    readonly isWhitelistedCollections: boolean;
    readonly asWhitelistedCollections: PalletFuelTanksRulesWhitelistedCollectionsWhitelistedCollectionsRule;
    readonly isMaxFuelBurnPerTransaction: boolean;
    readonly asMaxFuelBurnPerTransaction: u128;
    readonly isUserFuelBudget: boolean;
    readonly asUserFuelBudget: PalletFuelTanksRulesUserFuelBudgetUserFuelBudgetRuleDescriptor;
    readonly isTankFuelBudget: boolean;
    readonly asTankFuelBudget: PalletFuelTanksRulesTankFuelBudgetTankFuelBudgetRuleDescriptor;
    readonly isRequireToken: boolean;
    readonly asRequireToken: PalletFuelTanksRulesRequireTokenRequireTokenRule;
    readonly isPermittedCalls: boolean;
    readonly asPermittedCalls: PalletFuelTanksRulesPermittedCallsPermittedCallsRule;
    readonly isPermittedExtrinsics: boolean;
    readonly asPermittedExtrinsics: PalletFuelTanksRulesPermittedExtrinsicsPermittedExtrinsicsDescriptor;
    readonly isWhitelistedPallets: boolean;
    readonly asWhitelistedPallets: PalletFuelTanksRulesWhitelistedPalletsWhitelistedPalletsDescriptor;
    readonly isRequireSignature: boolean;
    readonly asRequireSignature: PalletFuelTanksRulesRequireSignatureRequireSignatureRule;
    readonly isMinimumInfusion: boolean;
    readonly asMinimumInfusion: u128;
    readonly type: 'WhitelistedCallers' | 'WhitelistedCollections' | 'MaxFuelBurnPerTransaction' | 'UserFuelBudget' | 'TankFuelBudget' | 'RequireToken' | 'PermittedCalls' | 'PermittedExtrinsics' | 'WhitelistedPallets' | 'RequireSignature' | 'MinimumInfusion';
  }

  /** @name PalletFuelTanksRulesWhitelistedCollectionsWhitelistedCollectionsRule (489) */
  interface PalletFuelTanksRulesWhitelistedCollectionsWhitelistedCollectionsRule extends BTreeSet<u128> {}

  /** @name EnjinMatrixRuntimeMaxCollectionIds (490) */
  type EnjinMatrixRuntimeMaxCollectionIds = Null;

  /** @name PalletFuelTanksRulesUserFuelBudgetUserFuelBudgetRuleDescriptor (493) */
  interface PalletFuelTanksRulesUserFuelBudgetUserFuelBudgetRuleDescriptor extends PalletFuelTanksBudget {}

  /** @name PalletFuelTanksBudget (494) */
  interface PalletFuelTanksBudget extends Struct {
    readonly amount: Compact<u128>;
    readonly resetPeriod: u32;
  }

  /** @name PalletFuelTanksRulesTankFuelBudgetTankFuelBudgetRuleDescriptor (495) */
  interface PalletFuelTanksRulesTankFuelBudgetTankFuelBudgetRuleDescriptor extends PalletFuelTanksBudget {}

  /** @name PalletFuelTanksRulesPermittedCallsPermittedCallsRule (496) */
  interface PalletFuelTanksRulesPermittedCallsPermittedCallsRule extends BTreeSet<Bytes> {}

  /** @name EnjinMatrixRuntimeMaxCallFilters (498) */
  type EnjinMatrixRuntimeMaxCallFilters = Null;

  /** @name PalletFuelTanksRulesPermittedExtrinsicsPermittedExtrinsicsDescriptor (502) */
  interface PalletFuelTanksRulesPermittedExtrinsicsPermittedExtrinsicsDescriptor extends Vec<Call> {}

  /** @name EnjinMatrixRuntimeMaxPermittedExtrinsicLength (503) */
  type EnjinMatrixRuntimeMaxPermittedExtrinsicLength = Null;

  /** @name PalletFuelTanksRulesWhitelistedPalletsWhitelistedPalletsDescriptor (505) */
  interface PalletFuelTanksRulesWhitelistedPalletsWhitelistedPalletsDescriptor extends Vec<Call> {}

  /** @name PalletFuelTanksRulesRequireSignatureRequireSignatureRule (506) */
  interface PalletFuelTanksRulesRequireSignatureRequireSignatureRule extends SpCoreSr25519Public {}

  /** @name EnjinMatrixRuntimeMaxRulesPerSet (508) */
  type EnjinMatrixRuntimeMaxRulesPerSet = Null;

  /** @name PalletFuelTanksDispatchSettings (515) */
  interface PalletFuelTanksDispatchSettings extends Struct {
    readonly useNoneOrigin: bool;
    readonly paysRemainingFee: bool;
    readonly signature: Option<PalletFuelTanksExpirableSignature>;
  }

  /** @name SpCoreSr25519Signature (516) */
  interface SpCoreSr25519Signature extends U8aFixed {}

  /** @name PalletFuelTanksExpirableSignature (519) */
  interface PalletFuelTanksExpirableSignature extends Struct {
    readonly signature: SpCoreSr25519Signature;
    readonly expiryBlock: u32;
  }

  /** @name PalletMarketplaceCall (522) */
  interface PalletMarketplaceCall extends Enum {
    readonly isCreateListing: boolean;
    readonly asCreateListing: {
      readonly makeAssetId: EpMultiTokensTokenAssetId;
      readonly takeAssetId: EpMultiTokensTokenAssetId;
      readonly amount: Compact<u128>;
      readonly price: Compact<u128>;
      readonly salt: Bytes;
      readonly listingData: PalletMarketplaceFeaturesListingListingData;
      readonly depositor: Option<MultiAddress>;
    } & Struct;
    readonly isCancelListing: boolean;
    readonly asCancelListing: {
      readonly listingId: H256;
    } & Struct;
    readonly isFillListing: boolean;
    readonly asFillListing: {
      readonly listingId: H256;
      readonly amount: Compact<u128>;
    } & Struct;
    readonly isPlaceBid: boolean;
    readonly asPlaceBid: {
      readonly listingId: H256;
      readonly price: Compact<u128>;
    } & Struct;
    readonly isFinalizeAuction: boolean;
    readonly asFinalizeAuction: {
      readonly listingId: H256;
    } & Struct;
    readonly isSetProtocolFee: boolean;
    readonly asSetProtocolFee: {
      readonly protocolFee: Perbill;
    } & Struct;
    readonly isForceCreateListing: boolean;
    readonly asForceCreateListing: {
      readonly seller: MultiAddress;
      readonly makeAssetId: EpMultiTokensTokenAssetId;
      readonly takeAssetId: EpMultiTokensTokenAssetId;
      readonly amount: Compact<u128>;
      readonly price: Compact<u128>;
      readonly salt: Bytes;
      readonly listingData: PalletMarketplaceFeaturesListingListingData;
      readonly depositBacker: Option<MultiAddress>;
    } & Struct;
    readonly isForcePlaceBid: boolean;
    readonly asForcePlaceBid: {
      readonly bidder: MultiAddress;
      readonly listingId: H256;
      readonly price: Compact<u128>;
      readonly fundsBacker: Option<MultiAddress>;
    } & Struct;
    readonly isRemoveExpiredListing: boolean;
    readonly asRemoveExpiredListing: {
      readonly listingId: H256;
    } & Struct;
    readonly isPlaceCounterOffer: boolean;
    readonly asPlaceCounterOffer: {
      readonly listingId: H256;
      readonly price: Compact<u128>;
      readonly depositor: Option<MultiAddress>;
    } & Struct;
    readonly isAnswerCounterOffer: boolean;
    readonly asAnswerCounterOffer: {
      readonly listingId: H256;
      readonly creator: AccountId32;
      readonly response: PalletMarketplaceFeaturesOfferCounterOfferResponse;
      readonly currentPrice: Compact<u128>;
    } & Struct;
    readonly isForceCancelListing: boolean;
    readonly asForceCancelListing: {
      readonly listingId: H256;
    } & Struct;
    readonly type: 'CreateListing' | 'CancelListing' | 'FillListing' | 'PlaceBid' | 'FinalizeAuction' | 'SetProtocolFee' | 'ForceCreateListing' | 'ForcePlaceBid' | 'RemoveExpiredListing' | 'PlaceCounterOffer' | 'AnswerCounterOffer' | 'ForceCancelListing';
  }

  /** @name PalletExtrinsicPauseCall (523) */
  interface PalletExtrinsicPauseCall extends Enum {
    readonly isPauseExtrinsic: boolean;
    readonly asPauseExtrinsic: {
      readonly call: Call;
      readonly pauseOnlyExtrinsic: bool;
    } & Struct;
    readonly isResumeExtrinsic: boolean;
    readonly asResumeExtrinsic: {
      readonly call: Call;
      readonly resumeOnlyExtrinsic: bool;
    } & Struct;
    readonly type: 'PauseExtrinsic' | 'ResumeExtrinsic';
  }

  /** @name PalletMatrixUtilityCall (524) */
  interface PalletMatrixUtilityCall extends Enum {
    readonly isBatch: boolean;
    readonly asBatch: {
      readonly calls: Vec<Call>;
      readonly continueOnFailure: bool;
    } & Struct;
    readonly type: 'Batch';
  }

  /** @name PalletClaimsCall (525) */
  interface PalletClaimsCall extends Enum {
    readonly isClaim: boolean;
    readonly asClaim: {
      readonly dest: AccountId32;
      readonly ethereumSignature: SpCoreEcdsaSignature;
      readonly ethereumAddress: H160;
    } & Struct;
    readonly isMintClaim: boolean;
    readonly asMintClaim: {
      readonly who: H160;
      readonly value: u128;
    } & Struct;
    readonly isMoveClaim: boolean;
    readonly asMoveClaim: {
      readonly old: H160;
      readonly new_: H160;
    } & Struct;
    readonly isRequestClaims: boolean;
    readonly asRequestClaims: {
      readonly blockNumber: u32;
      readonly batchData: Vec<PalletClaimsClaim>;
    } & Struct;
    readonly isRejectClaims: boolean;
    readonly asRejectClaims: {
      readonly batchData: Vec<PalletClaimsRejectData>;
    } & Struct;
    readonly isSetExchangeRate: boolean;
    readonly asSetExchangeRate: {
      readonly numerator: u128;
      readonly denominator: u128;
    } & Struct;
    readonly isSetDelayTime: boolean;
    readonly asSetDelayTime: {
      readonly delayTime: u32;
    } & Struct;
    readonly type: 'Claim' | 'MintClaim' | 'MoveClaim' | 'RequestClaims' | 'RejectClaims' | 'SetExchangeRate' | 'SetDelayTime';
  }

  /** @name PalletClaimsClaim (527) */
  interface PalletClaimsClaim extends Struct {
    readonly hash_: H256;
    readonly claim: PalletClaimsTransactionData;
    readonly isEfiToken: bool;
  }

  /** @name PalletClaimsTransactionData (528) */
  interface PalletClaimsTransactionData extends Struct {
    readonly account: H160;
    readonly amount: u128;
  }

  /** @name PalletClaimsRejectData (531) */
  interface PalletClaimsRejectData extends Struct {
    readonly account: H160;
    readonly hash_: H256;
  }

  /** @name PalletIdentityCall (533) */
  interface PalletIdentityCall extends Enum {
    readonly isAddRegistrar: boolean;
    readonly asAddRegistrar: {
      readonly account: MultiAddress;
    } & Struct;
    readonly isSetIdentity: boolean;
    readonly asSetIdentity: {
      readonly info: PalletIdentityLegacyIdentityInfo;
    } & Struct;
    readonly isSetSubs: boolean;
    readonly asSetSubs: {
      readonly subs: Vec<ITuple<[AccountId32, Data]>>;
    } & Struct;
    readonly isClearIdentity: boolean;
    readonly isRequestJudgement: boolean;
    readonly asRequestJudgement: {
      readonly regIndex: Compact<u32>;
      readonly maxFee: Compact<u128>;
    } & Struct;
    readonly isCancelRequest: boolean;
    readonly asCancelRequest: {
      readonly regIndex: u32;
    } & Struct;
    readonly isSetFee: boolean;
    readonly asSetFee: {
      readonly index: Compact<u32>;
      readonly fee: Compact<u128>;
    } & Struct;
    readonly isSetAccountId: boolean;
    readonly asSetAccountId: {
      readonly index: Compact<u32>;
      readonly new_: MultiAddress;
    } & Struct;
    readonly isSetFields: boolean;
    readonly asSetFields: {
      readonly index: Compact<u32>;
      readonly fields: u64;
    } & Struct;
    readonly isProvideJudgement: boolean;
    readonly asProvideJudgement: {
      readonly regIndex: Compact<u32>;
      readonly target: MultiAddress;
      readonly judgement: PalletIdentityJudgement;
      readonly identity: H256;
    } & Struct;
    readonly isKillIdentity: boolean;
    readonly asKillIdentity: {
      readonly target: MultiAddress;
    } & Struct;
    readonly isAddSub: boolean;
    readonly asAddSub: {
      readonly sub: MultiAddress;
      readonly data: Data;
    } & Struct;
    readonly isRenameSub: boolean;
    readonly asRenameSub: {
      readonly sub: MultiAddress;
      readonly data: Data;
    } & Struct;
    readonly isRemoveSub: boolean;
    readonly asRemoveSub: {
      readonly sub: MultiAddress;
    } & Struct;
    readonly isQuitSub: boolean;
    readonly isAddUsernameAuthority: boolean;
    readonly asAddUsernameAuthority: {
      readonly authority: MultiAddress;
      readonly suffix: Bytes;
      readonly allocation: u32;
    } & Struct;
    readonly isRemoveUsernameAuthority: boolean;
    readonly asRemoveUsernameAuthority: {
      readonly authority: MultiAddress;
    } & Struct;
    readonly isSetUsernameFor: boolean;
    readonly asSetUsernameFor: {
      readonly who: MultiAddress;
      readonly username: Bytes;
      readonly signature: Option<SpRuntimeMultiSignature>;
    } & Struct;
    readonly isAcceptUsername: boolean;
    readonly asAcceptUsername: {
      readonly username: Bytes;
    } & Struct;
    readonly isRemoveExpiredApproval: boolean;
    readonly asRemoveExpiredApproval: {
      readonly username: Bytes;
    } & Struct;
    readonly isSetPrimaryUsername: boolean;
    readonly asSetPrimaryUsername: {
      readonly username: Bytes;
    } & Struct;
    readonly isRemoveDanglingUsername: boolean;
    readonly asRemoveDanglingUsername: {
      readonly username: Bytes;
    } & Struct;
    readonly type: 'AddRegistrar' | 'SetIdentity' | 'SetSubs' | 'ClearIdentity' | 'RequestJudgement' | 'CancelRequest' | 'SetFee' | 'SetAccountId' | 'SetFields' | 'ProvideJudgement' | 'KillIdentity' | 'AddSub' | 'RenameSub' | 'RemoveSub' | 'QuitSub' | 'AddUsernameAuthority' | 'RemoveUsernameAuthority' | 'SetUsernameFor' | 'AcceptUsername' | 'RemoveExpiredApproval' | 'SetPrimaryUsername' | 'RemoveDanglingUsername';
  }

  /** @name PalletIdentityLegacyIdentityInfo (534) */
  interface PalletIdentityLegacyIdentityInfo extends Struct {
    readonly additional: Vec<ITuple<[Data, Data]>>;
    readonly display: Data;
    readonly legal: Data;
    readonly web: Data;
    readonly riot: Data;
    readonly email: Data;
    readonly pgpFingerprint: Option<U8aFixed>;
    readonly image: Data;
    readonly twitter: Data;
  }

  /** @name PalletIdentityJudgement (570) */
  interface PalletIdentityJudgement extends Enum {
    readonly isUnknown: boolean;
    readonly isFeePaid: boolean;
    readonly asFeePaid: u128;
    readonly isReasonable: boolean;
    readonly isKnownGood: boolean;
    readonly isOutOfDate: boolean;
    readonly isLowQuality: boolean;
    readonly isErroneous: boolean;
    readonly type: 'Unknown' | 'FeePaid' | 'Reasonable' | 'KnownGood' | 'OutOfDate' | 'LowQuality' | 'Erroneous';
  }

  /** @name SpRuntimeMultiSignature (572) */
  interface SpRuntimeMultiSignature extends Enum {
    readonly isEd25519: boolean;
    readonly asEd25519: SpCoreEd25519Signature;
    readonly isSr25519: boolean;
    readonly asSr25519: SpCoreSr25519Signature;
    readonly isEcdsa: boolean;
    readonly asEcdsa: SpCoreEcdsaSignature;
    readonly type: 'Ed25519' | 'Sr25519' | 'Ecdsa';
  }

  /** @name SpCoreEd25519Signature (573) */
  interface SpCoreEd25519Signature extends U8aFixed {}

  /** @name PalletProxyCall (574) */
  interface PalletProxyCall extends Enum {
    readonly isProxy: boolean;
    readonly asProxy: {
      readonly real: MultiAddress;
      readonly forceProxyType: Option<RuntimeCommonImplsProxyProxyType>;
      readonly call: Call;
    } & Struct;
    readonly isAddProxy: boolean;
    readonly asAddProxy: {
      readonly delegate: MultiAddress;
      readonly proxyType: RuntimeCommonImplsProxyProxyType;
      readonly delay: u32;
    } & Struct;
    readonly isRemoveProxy: boolean;
    readonly asRemoveProxy: {
      readonly delegate: MultiAddress;
      readonly proxyType: RuntimeCommonImplsProxyProxyType;
      readonly delay: u32;
    } & Struct;
    readonly isRemoveProxies: boolean;
    readonly isCreatePure: boolean;
    readonly asCreatePure: {
      readonly proxyType: RuntimeCommonImplsProxyProxyType;
      readonly delay: u32;
      readonly index: u16;
    } & Struct;
    readonly isKillPure: boolean;
    readonly asKillPure: {
      readonly spawner: MultiAddress;
      readonly proxyType: RuntimeCommonImplsProxyProxyType;
      readonly index: u16;
      readonly height: Compact<u32>;
      readonly extIndex: Compact<u32>;
    } & Struct;
    readonly isAnnounce: boolean;
    readonly asAnnounce: {
      readonly real: MultiAddress;
      readonly callHash: H256;
    } & Struct;
    readonly isRemoveAnnouncement: boolean;
    readonly asRemoveAnnouncement: {
      readonly real: MultiAddress;
      readonly callHash: H256;
    } & Struct;
    readonly isRejectAnnouncement: boolean;
    readonly asRejectAnnouncement: {
      readonly delegate: MultiAddress;
      readonly callHash: H256;
    } & Struct;
    readonly isProxyAnnounced: boolean;
    readonly asProxyAnnounced: {
      readonly delegate: MultiAddress;
      readonly real: MultiAddress;
      readonly forceProxyType: Option<RuntimeCommonImplsProxyProxyType>;
      readonly call: Call;
    } & Struct;
    readonly type: 'Proxy' | 'AddProxy' | 'RemoveProxy' | 'RemoveProxies' | 'CreatePure' | 'KillPure' | 'Announce' | 'RemoveAnnouncement' | 'RejectAnnouncement' | 'ProxyAnnounced';
  }

  /** @name PalletMigrationsCall (576) */
  interface PalletMigrationsCall extends Enum {
    readonly isForceSetCursor: boolean;
    readonly asForceSetCursor: {
      readonly cursor: Option<PalletMigrationsMigrationCursor>;
    } & Struct;
    readonly isForceSetActiveCursor: boolean;
    readonly asForceSetActiveCursor: {
      readonly index: u32;
      readonly innerCursor: Option<Bytes>;
      readonly startedAt: Option<u32>;
    } & Struct;
    readonly isForceOnboardMbms: boolean;
    readonly isClearHistoric: boolean;
    readonly asClearHistoric: {
      readonly selector: PalletMigrationsHistoricCleanupSelector;
    } & Struct;
    readonly type: 'ForceSetCursor' | 'ForceSetActiveCursor' | 'ForceOnboardMbms' | 'ClearHistoric';
  }

  /** @name PalletMigrationsMigrationCursor (578) */
  interface PalletMigrationsMigrationCursor extends Enum {
    readonly isActive: boolean;
    readonly asActive: PalletMigrationsActiveCursor;
    readonly isStuck: boolean;
    readonly type: 'Active' | 'Stuck';
  }

  /** @name PalletMigrationsActiveCursor (580) */
  interface PalletMigrationsActiveCursor extends Struct {
    readonly index: u32;
    readonly innerCursor: Option<Bytes>;
    readonly startedAt: u32;
  }

  /** @name PalletMigrationsHistoricCleanupSelector (582) */
  interface PalletMigrationsHistoricCleanupSelector extends Enum {
    readonly isSpecific: boolean;
    readonly asSpecific: Vec<Bytes>;
    readonly isWildcard: boolean;
    readonly asWildcard: {
      readonly limit: Option<u32>;
      readonly previousCursor: Option<Bytes>;
    } & Struct;
    readonly type: 'Specific' | 'Wildcard';
  }

  /** @name SpRuntimeBlakeTwo256 (585) */
  type SpRuntimeBlakeTwo256 = Null;

  /** @name PalletSchedulerRetryConfig (588) */
  interface PalletSchedulerRetryConfig extends Struct {
    readonly totalRetries: u8;
    readonly remaining: u8;
    readonly period: u32;
  }

  /** @name PalletSchedulerError (589) */
  interface PalletSchedulerError extends Enum {
    readonly isFailedToSchedule: boolean;
    readonly isNotFound: boolean;
    readonly isTargetBlockNumberInPast: boolean;
    readonly isRescheduleNoChange: boolean;
    readonly isNamed: boolean;
    readonly type: 'FailedToSchedule' | 'NotFound' | 'TargetBlockNumberInPast' | 'RescheduleNoChange' | 'Named';
  }

  /** @name PalletUtilityError (590) */
  interface PalletUtilityError extends Enum {
    readonly isTooManyCalls: boolean;
    readonly type: 'TooManyCalls';
  }

  /** @name PalletSafeModeError (592) */
  interface PalletSafeModeError extends Enum {
    readonly isEntered: boolean;
    readonly isExited: boolean;
    readonly isNotConfigured: boolean;
    readonly isNoDeposit: boolean;
    readonly isAlreadyDeposited: boolean;
    readonly isCannotReleaseYet: boolean;
    readonly isCurrencyError: boolean;
    readonly type: 'Entered' | 'Exited' | 'NotConfigured' | 'NoDeposit' | 'AlreadyDeposited' | 'CannotReleaseYet' | 'CurrencyError';
  }

  /** @name PalletBalancesBalanceLock (594) */
  interface PalletBalancesBalanceLock extends Struct {
    readonly id: U8aFixed;
    readonly amount: u128;
    readonly reasons: PalletBalancesReasons;
  }

  /** @name PalletBalancesReasons (595) */
  interface PalletBalancesReasons extends Enum {
    readonly isFee: boolean;
    readonly isMisc: boolean;
    readonly isAll: boolean;
    readonly type: 'Fee' | 'Misc' | 'All';
  }

  /** @name PalletBalancesReserveData (598) */
  interface PalletBalancesReserveData extends Struct {
    readonly id: U8aFixed;
    readonly amount: u128;
  }

  /** @name EnjinMatrixRuntimeRuntimeHoldReason (602) */
  interface EnjinMatrixRuntimeRuntimeHoldReason extends Enum {
    readonly isPreimage: boolean;
    readonly asPreimage: PalletPreimageHoldReason;
    readonly isSafeMode: boolean;
    readonly asSafeMode: PalletSafeModeHoldReason;
    readonly type: 'Preimage' | 'SafeMode';
  }

  /** @name PalletPreimageHoldReason (603) */
  interface PalletPreimageHoldReason extends Enum {
    readonly isPreimage: boolean;
    readonly type: 'Preimage';
  }

  /** @name PalletSafeModeHoldReason (604) */
  interface PalletSafeModeHoldReason extends Enum {
    readonly isEnterOrExtend: boolean;
    readonly type: 'EnterOrExtend';
  }

  /** @name PalletBalancesIdAmount (607) */
  interface PalletBalancesIdAmount extends Struct {
    readonly id: Null;
    readonly amount: u128;
  }

  /** @name PalletBalancesError (609) */
  interface PalletBalancesError extends Enum {
    readonly isVestingBalance: boolean;
    readonly isLiquidityRestrictions: boolean;
    readonly isInsufficientBalance: boolean;
    readonly isExistentialDeposit: boolean;
    readonly isExpendability: boolean;
    readonly isExistingVestingSchedule: boolean;
    readonly isDeadAccount: boolean;
    readonly isTooManyReserves: boolean;
    readonly isTooManyHolds: boolean;
    readonly isTooManyFreezes: boolean;
    readonly isIssuanceDeactivated: boolean;
    readonly isDeltaZero: boolean;
    readonly type: 'VestingBalance' | 'LiquidityRestrictions' | 'InsufficientBalance' | 'ExistentialDeposit' | 'Expendability' | 'ExistingVestingSchedule' | 'DeadAccount' | 'TooManyReserves' | 'TooManyHolds' | 'TooManyFreezes' | 'IssuanceDeactivated' | 'DeltaZero';
  }

  /** @name PalletTransactionPaymentReleases (610) */
  interface PalletTransactionPaymentReleases extends Enum {
    readonly isV1Ancient: boolean;
    readonly isV2: boolean;
    readonly type: 'V1Ancient' | 'V2';
  }

  /** @name PalletDemocracyReferendumInfo (616) */
  interface PalletDemocracyReferendumInfo extends Enum {
    readonly isOngoing: boolean;
    readonly asOngoing: PalletDemocracyReferendumStatus;
    readonly isFinished: boolean;
    readonly asFinished: {
      readonly approved: bool;
      readonly end: u32;
    } & Struct;
    readonly type: 'Ongoing' | 'Finished';
  }

  /** @name PalletDemocracyReferendumStatus (617) */
  interface PalletDemocracyReferendumStatus extends Struct {
    readonly end: u32;
    readonly proposal: FrameSupportPreimagesBounded;
    readonly threshold: PalletDemocracyVoteThreshold;
    readonly delay: u32;
    readonly tally: PalletDemocracyTally;
  }

  /** @name PalletDemocracyTally (618) */
  interface PalletDemocracyTally extends Struct {
    readonly ayes: u128;
    readonly nays: u128;
    readonly turnout: u128;
  }

  /** @name PalletDemocracyVoteVoting (619) */
  interface PalletDemocracyVoteVoting extends Enum {
    readonly isDirect: boolean;
    readonly asDirect: {
      readonly votes: Vec<ITuple<[u32, PalletDemocracyVoteAccountVote]>>;
      readonly delegations: PalletDemocracyDelegations;
      readonly prior: PalletDemocracyVotePriorLock;
    } & Struct;
    readonly isDelegating: boolean;
    readonly asDelegating: {
      readonly balance: u128;
      readonly target: AccountId32;
      readonly conviction: PalletDemocracyConviction;
      readonly delegations: PalletDemocracyDelegations;
      readonly prior: PalletDemocracyVotePriorLock;
    } & Struct;
    readonly type: 'Direct' | 'Delegating';
  }

  /** @name PalletDemocracyDelegations (623) */
  interface PalletDemocracyDelegations extends Struct {
    readonly votes: u128;
    readonly capital: u128;
  }

  /** @name PalletDemocracyVotePriorLock (624) */
  interface PalletDemocracyVotePriorLock extends ITuple<[u32, u128]> {}

  /** @name PalletDemocracyError (627) */
  interface PalletDemocracyError extends Enum {
    readonly isValueLow: boolean;
    readonly isProposalMissing: boolean;
    readonly isAlreadyCanceled: boolean;
    readonly isDuplicateProposal: boolean;
    readonly isProposalBlacklisted: boolean;
    readonly isNotSimpleMajority: boolean;
    readonly isInvalidHash: boolean;
    readonly isNoProposal: boolean;
    readonly isAlreadyVetoed: boolean;
    readonly isReferendumInvalid: boolean;
    readonly isNoneWaiting: boolean;
    readonly isNotVoter: boolean;
    readonly isNoPermission: boolean;
    readonly isAlreadyDelegating: boolean;
    readonly isInsufficientFunds: boolean;
    readonly isNotDelegating: boolean;
    readonly isVotesExist: boolean;
    readonly isInstantNotAllowed: boolean;
    readonly isNonsense: boolean;
    readonly isWrongUpperBound: boolean;
    readonly isMaxVotesReached: boolean;
    readonly isTooMany: boolean;
    readonly isVotingPeriodLow: boolean;
    readonly isPreimageNotExist: boolean;
    readonly type: 'ValueLow' | 'ProposalMissing' | 'AlreadyCanceled' | 'DuplicateProposal' | 'ProposalBlacklisted' | 'NotSimpleMajority' | 'InvalidHash' | 'NoProposal' | 'AlreadyVetoed' | 'ReferendumInvalid' | 'NoneWaiting' | 'NotVoter' | 'NoPermission' | 'AlreadyDelegating' | 'InsufficientFunds' | 'NotDelegating' | 'VotesExist' | 'InstantNotAllowed' | 'Nonsense' | 'WrongUpperBound' | 'MaxVotesReached' | 'TooMany' | 'VotingPeriodLow' | 'PreimageNotExist';
  }

  /** @name PalletCollectiveVotes (629) */
  interface PalletCollectiveVotes extends Struct {
    readonly index: u32;
    readonly threshold: u32;
    readonly ayes: Vec<AccountId32>;
    readonly nays: Vec<AccountId32>;
    readonly end: u32;
  }

  /** @name PalletCollectiveError (630) */
  interface PalletCollectiveError extends Enum {
    readonly isNotMember: boolean;
    readonly isDuplicateProposal: boolean;
    readonly isProposalMissing: boolean;
    readonly isWrongIndex: boolean;
    readonly isDuplicateVote: boolean;
    readonly isAlreadyInitialized: boolean;
    readonly isTooEarly: boolean;
    readonly isTooManyProposals: boolean;
    readonly isWrongProposalWeight: boolean;
    readonly isWrongProposalLength: boolean;
    readonly isPrimeAccountNotMember: boolean;
    readonly type: 'NotMember' | 'DuplicateProposal' | 'ProposalMissing' | 'WrongIndex' | 'DuplicateVote' | 'AlreadyInitialized' | 'TooEarly' | 'TooManyProposals' | 'WrongProposalWeight' | 'WrongProposalLength' | 'PrimeAccountNotMember';
  }

  /** @name PalletTreasuryProposal (633) */
  interface PalletTreasuryProposal extends Struct {
    readonly proposer: AccountId32;
    readonly value: u128;
    readonly beneficiary: AccountId32;
    readonly bond: u128;
  }

  /** @name PalletTreasurySpendStatus (636) */
  interface PalletTreasurySpendStatus extends Struct {
    readonly assetKind: Null;
    readonly amount: u128;
    readonly beneficiary: AccountId32;
    readonly validFrom: u32;
    readonly expireAt: u32;
    readonly status: PalletTreasuryPaymentState;
  }

  /** @name PalletTreasuryPaymentState (637) */
  interface PalletTreasuryPaymentState extends Enum {
    readonly isPending: boolean;
    readonly isAttempted: boolean;
    readonly asAttempted: {
      readonly id: Null;
    } & Struct;
    readonly isFailed: boolean;
    readonly type: 'Pending' | 'Attempted' | 'Failed';
  }

  /** @name FrameSupportPalletId (639) */
  interface FrameSupportPalletId extends U8aFixed {}

  /** @name PalletTreasuryError (640) */
  interface PalletTreasuryError extends Enum {
    readonly isInsufficientProposersBalance: boolean;
    readonly isInvalidIndex: boolean;
    readonly isTooManyApprovals: boolean;
    readonly isInsufficientPermission: boolean;
    readonly isProposalNotApproved: boolean;
    readonly isFailedToConvertBalance: boolean;
    readonly isSpendExpired: boolean;
    readonly isEarlyPayout: boolean;
    readonly isAlreadyAttempted: boolean;
    readonly isPayoutError: boolean;
    readonly isNotAttempted: boolean;
    readonly isInconclusive: boolean;
    readonly type: 'InsufficientProposersBalance' | 'InvalidIndex' | 'TooManyApprovals' | 'InsufficientPermission' | 'ProposalNotApproved' | 'FailedToConvertBalance' | 'SpendExpired' | 'EarlyPayout' | 'AlreadyAttempted' | 'PayoutError' | 'NotAttempted' | 'Inconclusive';
  }

  /** @name PalletMembershipError (642) */
  interface PalletMembershipError extends Enum {
    readonly isAlreadyMember: boolean;
    readonly isNotMember: boolean;
    readonly isTooManyMembers: boolean;
    readonly type: 'AlreadyMember' | 'NotMember' | 'TooManyMembers';
  }

  /** @name PalletMultisigMultisig (644) */
  interface PalletMultisigMultisig extends Struct {
    readonly when: PalletMultisigTimepoint;
    readonly deposit: u128;
    readonly depositor: AccountId32;
    readonly approvals: Vec<AccountId32>;
  }

  /** @name PalletMultisigError (646) */
  interface PalletMultisigError extends Enum {
    readonly isMinimumThreshold: boolean;
    readonly isAlreadyApproved: boolean;
    readonly isNoApprovalsNeeded: boolean;
    readonly isTooFewSignatories: boolean;
    readonly isTooManySignatories: boolean;
    readonly isSignatoriesOutOfOrder: boolean;
    readonly isSenderInSignatories: boolean;
    readonly isNotFound: boolean;
    readonly isNotOwner: boolean;
    readonly isNoTimepoint: boolean;
    readonly isWrongTimepoint: boolean;
    readonly isUnexpectedTimepoint: boolean;
    readonly isMaxWeightTooLow: boolean;
    readonly isAlreadyStored: boolean;
    readonly type: 'MinimumThreshold' | 'AlreadyApproved' | 'NoApprovalsNeeded' | 'TooFewSignatories' | 'TooManySignatories' | 'SignatoriesOutOfOrder' | 'SenderInSignatories' | 'NotFound' | 'NotOwner' | 'NoTimepoint' | 'WrongTimepoint' | 'UnexpectedTimepoint' | 'MaxWeightTooLow' | 'AlreadyStored';
  }

  /** @name PalletCollatorStakingCollator (648) */
  interface PalletCollatorStakingCollator extends Struct {
    readonly account: AccountId32;
    readonly amount: u128;
    readonly totalStake: u128;
    readonly rewardsCut: Perbill;
    readonly nominators: Vec<AccountId32>;
  }

  /** @name EnjinMatrixRuntimeMaxNominationPerCollator (649) */
  type EnjinMatrixRuntimeMaxNominationPerCollator = Null;

  /** @name PalletCollatorStakingCandidateSet (653) */
  interface PalletCollatorStakingCandidateSet extends Vec<PalletCollatorStakingCollator> {}

  /** @name EnjinMatrixRuntimeMaxCandidates (654) */
  type EnjinMatrixRuntimeMaxCandidates = Null;

  /** @name PalletCollatorStakingNomination (656) */
  interface PalletCollatorStakingNomination extends Struct {
    readonly account: AccountId32;
    readonly amount: u128;
  }

  /** @name PalletCollatorStakingRound (657) */
  interface PalletCollatorStakingRound extends Struct {
    readonly number: u32;
    readonly startingBlock: u32;
    readonly collators: Vec<PalletCollatorStakingCollator>;
  }

  /** @name EnjinMatrixRuntimeMaxCollators (658) */
  type EnjinMatrixRuntimeMaxCollators = Null;

  /** @name PalletCollatorStakingCollatorSessionInfo (659) */
  interface PalletCollatorStakingCollatorSessionInfo extends Struct {
    readonly authoredBlockCount: Compact<u32>;
    readonly uptime: Compact<Perbill>;
  }

  /** @name PalletCollatorStakingError (660) */
  interface PalletCollatorStakingError extends Enum {
    readonly isCandidateExists: boolean;
    readonly isCandidateDoesNotExist: boolean;
    readonly isNominationExists: boolean;
    readonly isNominationDoesNotExist: boolean;
    readonly isBelowMinStakeAmount: boolean;
    readonly isBelowMinNominationStakeAmount: boolean;
    readonly isExitInProgress: boolean;
    readonly isTooManyInvulnerables: boolean;
    readonly isTooManyCandidates: boolean;
    readonly isTooManyNominations: boolean;
    readonly isNotCollator: boolean;
    readonly isCannotUnbondInvulnerable: boolean;
    readonly isAccountIdNotRegistered: boolean;
    readonly isNoAssociatedValidatorId: boolean;
    readonly type: 'CandidateExists' | 'CandidateDoesNotExist' | 'NominationExists' | 'NominationDoesNotExist' | 'BelowMinStakeAmount' | 'BelowMinNominationStakeAmount' | 'ExitInProgress' | 'TooManyInvulnerables' | 'TooManyCandidates' | 'TooManyNominations' | 'NotCollator' | 'CannotUnbondInvulnerable' | 'AccountIdNotRegistered' | 'NoAssociatedValidatorId';
  }

  /** @name SpCoreCryptoKeyTypeId (664) */
  interface SpCoreCryptoKeyTypeId extends U8aFixed {}

  /** @name PalletSessionError (665) */
  interface PalletSessionError extends Enum {
    readonly isInvalidProof: boolean;
    readonly isNoAssociatedValidatorId: boolean;
    readonly isDuplicatedKey: boolean;
    readonly isNoKeys: boolean;
    readonly isNoAccount: boolean;
    readonly type: 'InvalidProof' | 'NoAssociatedValidatorId' | 'DuplicatedKey' | 'NoKeys' | 'NoAccount';
  }

  /** @name CumulusPalletXcmpQueueOutboundChannelDetails (674) */
  interface CumulusPalletXcmpQueueOutboundChannelDetails extends Struct {
    readonly recipient: u32;
    readonly state: CumulusPalletXcmpQueueOutboundState;
    readonly signalsExist: bool;
    readonly firstIndex: u16;
    readonly lastIndex: u16;
  }

  /** @name CumulusPalletXcmpQueueOutboundState (675) */
  interface CumulusPalletXcmpQueueOutboundState extends Enum {
    readonly isOk: boolean;
    readonly isSuspended: boolean;
    readonly type: 'Ok' | 'Suspended';
  }

  /** @name CumulusPalletXcmpQueueQueueConfigData (677) */
  interface CumulusPalletXcmpQueueQueueConfigData extends Struct {
    readonly suspendThreshold: u32;
    readonly dropThreshold: u32;
    readonly resumeThreshold: u32;
  }

  /** @name CumulusPalletXcmpQueueError (678) */
  interface CumulusPalletXcmpQueueError extends Enum {
    readonly isBadQueueConfig: boolean;
    readonly isAlreadySuspended: boolean;
    readonly isAlreadyResumed: boolean;
    readonly type: 'BadQueueConfig' | 'AlreadySuspended' | 'AlreadyResumed';
  }

  /** @name PalletXcmQueryStatus (679) */
  interface PalletXcmQueryStatus extends Enum {
    readonly isPending: boolean;
    readonly asPending: {
      readonly responder: XcmVersionedLocation;
      readonly maybeMatchQuerier: Option<XcmVersionedLocation>;
      readonly maybeNotify: Option<ITuple<[u8, u8]>>;
      readonly timeout: u32;
    } & Struct;
    readonly isVersionNotifier: boolean;
    readonly asVersionNotifier: {
      readonly origin: XcmVersionedLocation;
      readonly isActive: bool;
    } & Struct;
    readonly isReady: boolean;
    readonly asReady: {
      readonly response: XcmVersionedResponse;
      readonly at: u32;
    } & Struct;
    readonly type: 'Pending' | 'VersionNotifier' | 'Ready';
  }

  /** @name XcmVersionedResponse (683) */
  interface XcmVersionedResponse extends Enum {
    readonly isV2: boolean;
    readonly asV2: XcmV2Response;
    readonly isV3: boolean;
    readonly asV3: XcmV3Response;
    readonly isV4: boolean;
    readonly asV4: StagingXcmV4Response;
    readonly type: 'V2' | 'V3' | 'V4';
  }

  /** @name PalletXcmVersionMigrationStage (689) */
  interface PalletXcmVersionMigrationStage extends Enum {
    readonly isMigrateSupportedVersion: boolean;
    readonly isMigrateVersionNotifiers: boolean;
    readonly isNotifyCurrentTargets: boolean;
    readonly asNotifyCurrentTargets: Option<Bytes>;
    readonly isMigrateAndNotifyOldTargets: boolean;
    readonly type: 'MigrateSupportedVersion' | 'MigrateVersionNotifiers' | 'NotifyCurrentTargets' | 'MigrateAndNotifyOldTargets';
  }

  /** @name XcmVersionedAssetId (691) */
  interface XcmVersionedAssetId extends Enum {
    readonly isV3: boolean;
    readonly asV3: XcmV3MultiassetAssetId;
    readonly isV4: boolean;
    readonly asV4: StagingXcmV4AssetAssetId;
    readonly type: 'V3' | 'V4';
  }

  /** @name PalletXcmRemoteLockedFungibleRecord (692) */
  interface PalletXcmRemoteLockedFungibleRecord extends Struct {
    readonly amount: u128;
    readonly owner: XcmVersionedLocation;
    readonly locker: XcmVersionedLocation;
    readonly consumers: Vec<ITuple<[Null, u128]>>;
  }

  /** @name PalletXcmError (699) */
  interface PalletXcmError extends Enum {
    readonly isUnreachable: boolean;
    readonly isSendFailure: boolean;
    readonly isFiltered: boolean;
    readonly isUnweighableMessage: boolean;
    readonly isDestinationNotInvertible: boolean;
    readonly isEmpty: boolean;
    readonly isCannotReanchor: boolean;
    readonly isTooManyAssets: boolean;
    readonly isInvalidOrigin: boolean;
    readonly isBadVersion: boolean;
    readonly isBadLocation: boolean;
    readonly isNoSubscription: boolean;
    readonly isAlreadySubscribed: boolean;
    readonly isCannotCheckOutTeleport: boolean;
    readonly isLowBalance: boolean;
    readonly isTooManyLocks: boolean;
    readonly isAccountNotSovereign: boolean;
    readonly isFeesNotMet: boolean;
    readonly isLockNotFound: boolean;
    readonly isInUse: boolean;
    readonly isInvalidAssetNotConcrete: boolean;
    readonly isInvalidAssetUnknownReserve: boolean;
    readonly isInvalidAssetUnsupportedReserve: boolean;
    readonly isTooManyReserves: boolean;
    readonly isLocalExecutionIncomplete: boolean;
    readonly type: 'Unreachable' | 'SendFailure' | 'Filtered' | 'UnweighableMessage' | 'DestinationNotInvertible' | 'Empty' | 'CannotReanchor' | 'TooManyAssets' | 'InvalidOrigin' | 'BadVersion' | 'BadLocation' | 'NoSubscription' | 'AlreadySubscribed' | 'CannotCheckOutTeleport' | 'LowBalance' | 'TooManyLocks' | 'AccountNotSovereign' | 'FeesNotMet' | 'LockNotFound' | 'InUse' | 'InvalidAssetNotConcrete' | 'InvalidAssetUnknownReserve' | 'InvalidAssetUnsupportedReserve' | 'TooManyReserves' | 'LocalExecutionIncomplete';
  }

  /** @name CumulusPalletDmpQueueMigrationState (700) */
  interface CumulusPalletDmpQueueMigrationState extends Enum {
    readonly isNotStarted: boolean;
    readonly isStartedExport: boolean;
    readonly asStartedExport: {
      readonly nextBeginUsed: u32;
    } & Struct;
    readonly isCompletedExport: boolean;
    readonly isStartedOverweightExport: boolean;
    readonly asStartedOverweightExport: {
      readonly nextOverweightIndex: u64;
    } & Struct;
    readonly isCompletedOverweightExport: boolean;
    readonly isStartedCleanup: boolean;
    readonly asStartedCleanup: {
      readonly cursor: Option<Bytes>;
    } & Struct;
    readonly isCompleted: boolean;
    readonly type: 'NotStarted' | 'StartedExport' | 'CompletedExport' | 'StartedOverweightExport' | 'CompletedOverweightExport' | 'StartedCleanup' | 'Completed';
  }

  /** @name OrmlXcmModuleError (703) */
  interface OrmlXcmModuleError extends Enum {
    readonly isUnreachable: boolean;
    readonly isSendFailure: boolean;
    readonly isBadVersion: boolean;
    readonly type: 'Unreachable' | 'SendFailure' | 'BadVersion';
  }

  /** @name MatrixPalletXcmError (704) */
  interface MatrixPalletXcmError extends Enum {
    readonly isInvalidAddress: boolean;
    readonly isNotTransferable: boolean;
    readonly type: 'InvalidAddress' | 'NotTransferable';
  }

  /** @name OrmlUnknownTokensModuleError (707) */
  interface OrmlUnknownTokensModuleError extends Enum {
    readonly isBalanceTooLow: boolean;
    readonly isBalanceOverflow: boolean;
    readonly isUnhandledAsset: boolean;
    readonly type: 'BalanceTooLow' | 'BalanceOverflow' | 'UnhandledAsset';
  }

  /** @name OrmlXtokensModuleError (708) */
  interface OrmlXtokensModuleError extends Enum {
    readonly isAssetHasNoReserve: boolean;
    readonly isNotCrossChainTransfer: boolean;
    readonly isInvalidDest: boolean;
    readonly isNotCrossChainTransferableCurrency: boolean;
    readonly isUnweighableMessage: boolean;
    readonly isXcmExecutionFailed: boolean;
    readonly isCannotReanchor: boolean;
    readonly isInvalidAncestry: boolean;
    readonly isInvalidAsset: boolean;
    readonly isDestinationNotInvertible: boolean;
    readonly isBadVersion: boolean;
    readonly isDistinctReserveForAssetAndFee: boolean;
    readonly isZeroFee: boolean;
    readonly isZeroAmount: boolean;
    readonly isTooManyAssetsBeingSent: boolean;
    readonly isAssetIndexNonExistent: boolean;
    readonly isFeeNotEnough: boolean;
    readonly isNotSupportedLocation: boolean;
    readonly isMinXcmFeeNotDefined: boolean;
    readonly isRateLimited: boolean;
    readonly type: 'AssetHasNoReserve' | 'NotCrossChainTransfer' | 'InvalidDest' | 'NotCrossChainTransferableCurrency' | 'UnweighableMessage' | 'XcmExecutionFailed' | 'CannotReanchor' | 'InvalidAncestry' | 'InvalidAsset' | 'DestinationNotInvertible' | 'BadVersion' | 'DistinctReserveForAssetAndFee' | 'ZeroFee' | 'ZeroAmount' | 'TooManyAssetsBeingSent' | 'AssetIndexNonExistent' | 'FeeNotEnough' | 'NotSupportedLocation' | 'MinXcmFeeNotDefined' | 'RateLimited';
  }

  /** @name PalletMessageQueueBookState (709) */
  interface PalletMessageQueueBookState extends Struct {
    readonly begin: u32;
    readonly end: u32;
    readonly count: u32;
    readonly readyNeighbours: Option<PalletMessageQueueNeighbours>;
    readonly messageCount: u64;
    readonly size_: u64;
  }

  /** @name PalletMessageQueueNeighbours (711) */
  interface PalletMessageQueueNeighbours extends Struct {
    readonly prev: CumulusPrimitivesCoreAggregateMessageOrigin;
    readonly next: CumulusPrimitivesCoreAggregateMessageOrigin;
  }

  /** @name PalletMessageQueuePage (713) */
  interface PalletMessageQueuePage extends Struct {
    readonly remaining: u32;
    readonly remainingSize: u32;
    readonly firstIndex: u32;
    readonly first: u32;
    readonly last: u32;
    readonly heap: Bytes;
  }

  /** @name PalletMessageQueueError (715) */
  interface PalletMessageQueueError extends Enum {
    readonly isNotReapable: boolean;
    readonly isNoPage: boolean;
    readonly isNoMessage: boolean;
    readonly isAlreadyProcessed: boolean;
    readonly isQueued: boolean;
    readonly isInsufficientWeight: boolean;
    readonly isTemporarilyUnprocessable: boolean;
    readonly isQueuePaused: boolean;
    readonly isRecursiveDisallowed: boolean;
    readonly type: 'NotReapable' | 'NoPage' | 'NoMessage' | 'AlreadyProcessed' | 'Queued' | 'InsufficientWeight' | 'TemporarilyUnprocessable' | 'QueuePaused' | 'RecursiveDisallowed';
  }

  /** @name PalletBountiesBounty (716) */
  interface PalletBountiesBounty extends Struct {
    readonly proposer: AccountId32;
    readonly value: u128;
    readonly fee: u128;
    readonly curatorDeposit: u128;
    readonly bond: u128;
    readonly status: PalletBountiesBountyStatus;
  }

  /** @name PalletBountiesBountyStatus (717) */
  interface PalletBountiesBountyStatus extends Enum {
    readonly isProposed: boolean;
    readonly isApproved: boolean;
    readonly isFunded: boolean;
    readonly isCuratorProposed: boolean;
    readonly asCuratorProposed: {
      readonly curator: AccountId32;
    } & Struct;
    readonly isActive: boolean;
    readonly asActive: {
      readonly curator: AccountId32;
      readonly updateDue: u32;
    } & Struct;
    readonly isPendingPayout: boolean;
    readonly asPendingPayout: {
      readonly curator: AccountId32;
      readonly beneficiary: AccountId32;
      readonly unlockAt: u32;
    } & Struct;
    readonly type: 'Proposed' | 'Approved' | 'Funded' | 'CuratorProposed' | 'Active' | 'PendingPayout';
  }

  /** @name PalletBountiesError (719) */
  interface PalletBountiesError extends Enum {
    readonly isInsufficientProposersBalance: boolean;
    readonly isInvalidIndex: boolean;
    readonly isReasonTooBig: boolean;
    readonly isUnexpectedStatus: boolean;
    readonly isRequireCurator: boolean;
    readonly isInvalidValue: boolean;
    readonly isInvalidFee: boolean;
    readonly isPendingPayout: boolean;
    readonly isPremature: boolean;
    readonly isHasActiveChildBounty: boolean;
    readonly isTooManyQueued: boolean;
    readonly type: 'InsufficientProposersBalance' | 'InvalidIndex' | 'ReasonTooBig' | 'UnexpectedStatus' | 'RequireCurator' | 'InvalidValue' | 'InvalidFee' | 'PendingPayout' | 'Premature' | 'HasActiveChildBounty' | 'TooManyQueued';
  }

  /** @name EpMultiTokensNativeAssetInfo (725) */
  interface EpMultiTokensNativeAssetInfo extends Struct {
    readonly id: EpMultiTokensTokenAssetId;
    readonly unitsPerSecond: u128;
  }

  /** @name PalletMultiTokensError (726) */
  interface PalletMultiTokensError extends Enum {
    readonly isCollectionNotFound: boolean;
    readonly isCollectionAccountNotFound: boolean;
    readonly isTokenNotFound: boolean;
    readonly isTokenAccountNotFound: boolean;
    readonly isNoPermission: boolean;
    readonly isBalanceLow: boolean;
    readonly isFrozen: boolean;
    readonly isHasNeverFreezeState: boolean;
    readonly isPermanentlyFrozen: boolean;
    readonly isInvalidFreezeState: boolean;
    readonly isAmountZero: boolean;
    readonly isInvalidAttributeKey: boolean;
    readonly isMaxTokenCountExceeded: boolean;
    readonly isTokenMintCapExceeded: boolean;
    readonly isTokenAlreadyExists: boolean;
    readonly isDestroyForbiddenByAttributeCount: boolean;
    readonly isDestroyForbiddenByRemainingTokens: boolean;
    readonly isDestroyForbiddenByCollectionEvent: boolean;
    readonly isDepositReserveFailed: boolean;
    readonly isDepositUnreserveFailed: boolean;
    readonly isMintFailedRequirements: boolean;
    readonly isIdleOperationQueueFull: boolean;
    readonly isReservesLow: boolean;
    readonly isTooManyReserves: boolean;
    readonly isTooManyLocks: boolean;
    readonly isLiquidityRestrictions: boolean;
    readonly isPercentageOutOfBounds: boolean;
    readonly isCurrencyIncompatibleWithCollectionRoyalty: boolean;
    readonly isMaxApprovalsExceeded: boolean;
    readonly isAlreadyExpired: boolean;
    readonly isCollectionAlreadyApproved: boolean;
    readonly isInsufficientAllowance: boolean;
    readonly isWrongCurrentApprovedAmount: boolean;
    readonly isCannotApproveSelf: boolean;
    readonly isCannotTransferToSelf: boolean;
    readonly isTransferParamCreationFailed: boolean;
    readonly isOperationNotAllowedForNativeToken: boolean;
    readonly isInvalidExplicitRoyaltyCurrencies: boolean;
    readonly isInvalidAttributeCount: boolean;
    readonly isConflictingLocation: boolean;
    readonly isCollectionIdAlreadyInUse: boolean;
    readonly isFreezeStateRequired: boolean;
    readonly isPremintExceeded: boolean;
    readonly isTokenMetadataCreationFailed: boolean;
    readonly isNoClaimAvailable: boolean;
    readonly isInvalidEthereumSignature: boolean;
    readonly isInvalidEthereumAddress: boolean;
    readonly isTokenIdReservedForClaim: boolean;
    readonly isCollectionCountExceeded: boolean;
    readonly isWrongCount: boolean;
    readonly isInvalidMintParams: boolean;
    readonly isNoPendingCollectionTransfer: boolean;
    readonly isAlreadyCollectionOwner: boolean;
    readonly isInsufficientDeposit: boolean;
    readonly isIncompatibleToken: boolean;
    readonly isMaxDecimalCountExceeded: boolean;
    readonly isAccountDepositNotAllowedWithDepositor: boolean;
    readonly type: 'CollectionNotFound' | 'CollectionAccountNotFound' | 'TokenNotFound' | 'TokenAccountNotFound' | 'NoPermission' | 'BalanceLow' | 'Frozen' | 'HasNeverFreezeState' | 'PermanentlyFrozen' | 'InvalidFreezeState' | 'AmountZero' | 'InvalidAttributeKey' | 'MaxTokenCountExceeded' | 'TokenMintCapExceeded' | 'TokenAlreadyExists' | 'DestroyForbiddenByAttributeCount' | 'DestroyForbiddenByRemainingTokens' | 'DestroyForbiddenByCollectionEvent' | 'DepositReserveFailed' | 'DepositUnreserveFailed' | 'MintFailedRequirements' | 'IdleOperationQueueFull' | 'ReservesLow' | 'TooManyReserves' | 'TooManyLocks' | 'LiquidityRestrictions' | 'PercentageOutOfBounds' | 'CurrencyIncompatibleWithCollectionRoyalty' | 'MaxApprovalsExceeded' | 'AlreadyExpired' | 'CollectionAlreadyApproved' | 'InsufficientAllowance' | 'WrongCurrentApprovedAmount' | 'CannotApproveSelf' | 'CannotTransferToSelf' | 'TransferParamCreationFailed' | 'OperationNotAllowedForNativeToken' | 'InvalidExplicitRoyaltyCurrencies' | 'InvalidAttributeCount' | 'ConflictingLocation' | 'CollectionIdAlreadyInUse' | 'FreezeStateRequired' | 'PremintExceeded' | 'TokenMetadataCreationFailed' | 'NoClaimAvailable' | 'InvalidEthereumSignature' | 'InvalidEthereumAddress' | 'TokenIdReservedForClaim' | 'CollectionCountExceeded' | 'WrongCount' | 'InvalidMintParams' | 'NoPendingCollectionTransfer' | 'AlreadyCollectionOwner' | 'InsufficientDeposit' | 'IncompatibleToken' | 'MaxDecimalCountExceeded' | 'AccountDepositNotAllowedWithDepositor';
  }

  /** @name EpCoreFrameTypesPoolAccountIds (731) */
  interface EpCoreFrameTypesPoolAccountIds extends Struct {
    readonly collator: AccountId32;
    readonly community: AccountId32;
    readonly fuelTanks: AccountId32;
    readonly priceDiscovery: AccountId32;
  }

  /** @name PalletPoolsError (732) */
  interface PalletPoolsError extends Enum {
    readonly isInvalidFeeShares: boolean;
    readonly isPoolCountExceeded: boolean;
    readonly type: 'InvalidFeeShares' | 'PoolCountExceeded';
  }

  /** @name PalletFuelTanksFuelTank (733) */
  interface PalletFuelTanksFuelTank extends Struct {
    readonly owner: AccountId32;
    readonly name: Bytes;
    readonly ruleSets: BTreeMap<u32, PalletFuelTanksRulesRuleSet>;
    readonly totalReserved: Compact<u128>;
    readonly accountCount: Compact<u32>;
    readonly userAccountManagement: Option<PalletFuelTanksUserAccountManagement>;
    readonly isFrozen: bool;
    readonly coveragePolicy: PalletFuelTanksCoveragePolicy;
    readonly accountRules: BTreeMap<PalletFuelTanksRulesAccountRuleKind, PalletFuelTanksRulesAccountRuleWrapper>;
  }

  /** @name PalletFuelTanksRulesRuleSet (735) */
  interface PalletFuelTanksRulesRuleSet extends Struct {
    readonly rules: BTreeMap<PalletFuelTanksRulesDispatchRuleKind, PalletFuelTanksRulesDispatchRuleWrapper>;
    readonly isFrozen: bool;
    readonly requireAccount: bool;
  }

  /** @name PalletFuelTanksRulesDispatchRuleWrapper (736) */
  interface PalletFuelTanksRulesDispatchRuleWrapper extends Enum {
    readonly isWhitelistedCallers: boolean;
    readonly asWhitelistedCallers: PalletFuelTanksRulesWhitelistedCallersWhitelistedCallersRule;
    readonly isWhitelistedCollections: boolean;
    readonly asWhitelistedCollections: PalletFuelTanksRulesWhitelistedCollectionsWhitelistedCollectionsRule;
    readonly isMaxFuelBurnPerTransaction: boolean;
    readonly asMaxFuelBurnPerTransaction: u128;
    readonly isUserFuelBudget: boolean;
    readonly asUserFuelBudget: PalletFuelTanksRulesUserFuelBudgetUserFuelBudgetRule;
    readonly isTankFuelBudget: boolean;
    readonly asTankFuelBudget: PalletFuelTanksRulesTankFuelBudgetTankFuelBudgetRule;
    readonly isRequireToken: boolean;
    readonly asRequireToken: PalletFuelTanksRulesRequireTokenRequireTokenRule;
    readonly isPermittedCalls: boolean;
    readonly asPermittedCalls: PalletFuelTanksRulesPermittedCallsPermittedCallsRule;
    readonly isPermittedExtrinsics: boolean;
    readonly asPermittedExtrinsics: PalletFuelTanksRulesPermittedExtrinsicsPermittedExtrinsicsRule;
    readonly isWhitelistedPallets: boolean;
    readonly asWhitelistedPallets: PalletFuelTanksRulesWhitelistedPalletsWhitelistedPalletsRule;
    readonly isRequireSignature: boolean;
    readonly asRequireSignature: PalletFuelTanksRulesRequireSignatureRequireSignatureRule;
    readonly isMinimumInfusion: boolean;
    readonly asMinimumInfusion: u128;
    readonly type: 'WhitelistedCallers' | 'WhitelistedCollections' | 'MaxFuelBurnPerTransaction' | 'UserFuelBudget' | 'TankFuelBudget' | 'RequireToken' | 'PermittedCalls' | 'PermittedExtrinsics' | 'WhitelistedPallets' | 'RequireSignature' | 'MinimumInfusion';
  }

  /** @name PalletFuelTanksRulesUserFuelBudgetUserFuelBudgetRule (737) */
  interface PalletFuelTanksRulesUserFuelBudgetUserFuelBudgetRule extends Struct {
    readonly budget: PalletFuelTanksBudget;
    readonly userCount: Compact<u32>;
  }

  /** @name PalletFuelTanksRulesTankFuelBudgetTankFuelBudgetRule (738) */
  interface PalletFuelTanksRulesTankFuelBudgetTankFuelBudgetRule extends Struct {
    readonly budget: PalletFuelTanksBudget;
    readonly consumption: PalletFuelTanksConsumption;
  }

  /** @name PalletFuelTanksRulesPermittedExtrinsicsPermittedExtrinsicsRule (739) */
  interface PalletFuelTanksRulesPermittedExtrinsicsPermittedExtrinsicsRule extends Vec<PalletFuelTanksExtrinsicInfo> {}

  /** @name PalletFuelTanksExtrinsicInfo (740) */
  interface PalletFuelTanksExtrinsicInfo extends Struct {
    readonly palletName: Bytes;
    readonly extrinsicName: Bytes;
  }

  /** @name EnjinMatrixRuntimeMaxExtrinsicNameLength (741) */
  type EnjinMatrixRuntimeMaxExtrinsicNameLength = Null;

  /** @name PalletFuelTanksRulesWhitelistedPalletsWhitelistedPalletsRule (746) */
  interface PalletFuelTanksRulesWhitelistedPalletsWhitelistedPalletsRule extends Vec<Bytes> {}

  /** @name PalletFuelTanksRulesAccountRuleKind (757) */
  interface PalletFuelTanksRulesAccountRuleKind extends Enum {
    readonly isWhitelistedCallers: boolean;
    readonly isRequireToken: boolean;
    readonly type: 'WhitelistedCallers' | 'RequireToken';
  }

  /** @name PalletFuelTanksRulesAccountRuleWrapper (758) */
  interface PalletFuelTanksRulesAccountRuleWrapper extends Enum {
    readonly isWhitelistedCallers: boolean;
    readonly asWhitelistedCallers: PalletFuelTanksRulesWhitelistedCallersWhitelistedCallersRule;
    readonly isRequireToken: boolean;
    readonly asRequireToken: PalletFuelTanksRulesRequireTokenRequireTokenRule;
    readonly type: 'WhitelistedCallers' | 'RequireToken';
  }

  /** @name PalletFuelTanksUserAccount (763) */
  interface PalletFuelTanksUserAccount extends Struct {
    readonly tankDeposit: Compact<u128>;
    readonly userDeposit: Compact<u128>;
    readonly totalReceived: Compact<u128>;
    readonly ruleDataSets: BTreeMap<u32, BTreeMap<PalletFuelTanksRulesDispatchRuleKind, Bytes>>;
  }

  /** @name EnjinMatrixRuntimeMaxRuleSets (764) */
  type EnjinMatrixRuntimeMaxRuleSets = Null;

  /** @name EnjinMatrixRuntimeMaxAccountRuleDataLength (765) */
  type EnjinMatrixRuntimeMaxAccountRuleDataLength = Null;

  /** @name PalletFuelTanksError (775) */
  interface PalletFuelTanksError extends Enum {
    readonly isFuelTankNotFound: boolean;
    readonly isFuelTankAlreadyExists: boolean;
    readonly isInsufficientBalance: boolean;
    readonly isUsageRestricted: boolean;
    readonly isFuelTankOutOfFunds: boolean;
    readonly isRuleSetNotFound: boolean;
    readonly isRuleNotFound: boolean;
    readonly isNoPermission: boolean;
    readonly isAccountAlreadyExists: boolean;
    readonly isAccountNotFound: boolean;
    readonly isDestroyWithExistingAccounts: boolean;
    readonly isDestroyUnfrozenTank: boolean;
    readonly isMaxRuleSetsExceeded: boolean;
    readonly isUserRuleDataExceededMaxSize: boolean;
    readonly isDecodeUserRuleDataFailed: boolean;
    readonly isRequiresFrozenTankOrRuleset: boolean;
    readonly isRequiresFrozenTank: boolean;
    readonly isMissingRequiredRule: boolean;
    readonly isMissingRequiredRuleUserData: boolean;
    readonly isInvalidRuleSet: boolean;
    readonly isAccountContainsRuleData: boolean;
    readonly isCannotRemoveRuleThatIsStoringAccountData: boolean;
    readonly isDuplicateRuleKinds: boolean;
    readonly isDepositCalculationError: boolean;
    readonly isFuelTankFrozen: boolean;
    readonly isCallerDoesNotHaveRuleSetTokenBalance: boolean;
    readonly isNoDataToRemove: boolean;
    readonly type: 'FuelTankNotFound' | 'FuelTankAlreadyExists' | 'InsufficientBalance' | 'UsageRestricted' | 'FuelTankOutOfFunds' | 'RuleSetNotFound' | 'RuleNotFound' | 'NoPermission' | 'AccountAlreadyExists' | 'AccountNotFound' | 'DestroyWithExistingAccounts' | 'DestroyUnfrozenTank' | 'MaxRuleSetsExceeded' | 'UserRuleDataExceededMaxSize' | 'DecodeUserRuleDataFailed' | 'RequiresFrozenTankOrRuleset' | 'RequiresFrozenTank' | 'MissingRequiredRule' | 'MissingRequiredRuleUserData' | 'InvalidRuleSet' | 'AccountContainsRuleData' | 'CannotRemoveRuleThatIsStoringAccountData' | 'DuplicateRuleKinds' | 'DepositCalculationError' | 'FuelTankFrozen' | 'CallerDoesNotHaveRuleSetTokenBalance' | 'NoDataToRemove';
  }

  /** @name PalletMarketplaceMarketPlaceInfo (776) */
  interface PalletMarketplaceMarketPlaceInfo extends Struct {
    readonly protocolFee: Compact<Perbill>;
  }

  /** @name PalletMarketplaceError (779) */
  interface PalletMarketplaceError extends Enum {
    readonly isUnableToFill: boolean;
    readonly isListingNotFound: boolean;
    readonly isNoPermission: boolean;
    readonly isMaxRoundingErrorExceeded: boolean;
    readonly isLowBaseCurrencyBalance: boolean;
    readonly isLowTokenBalance: boolean;
    readonly isTransferParamCreationFailed: boolean;
    readonly isReceivedValueUnderMinimum: boolean;
    readonly isListingAlreadyExists: boolean;
    readonly isInvalidAuctionStart: boolean;
    readonly isInvalidAuctionEnd: boolean;
    readonly isInactiveAuction: boolean;
    readonly isAuctionNotOver: boolean;
    readonly isListingIsWrongType: boolean;
    readonly isInvalidAmount: boolean;
    readonly isInvalidPrice: boolean;
    readonly isListingForbidden: boolean;
    readonly isNoCurrency: boolean;
    readonly isListingNotActive: boolean;
    readonly isCurrencyNotAllowedAsRoyalty: boolean;
    readonly isBuyerIsSeller: boolean;
    readonly isMakeAssetFrozen: boolean;
    readonly isTakeAssetFrozen: boolean;
    readonly isCannotCancelAuctionWithBid: boolean;
    readonly isCannotCancelAuctionAfterEndBlock: boolean;
    readonly isInvalidExpiration: boolean;
    readonly isNotExpired: boolean;
    readonly isNoCounterOffer: boolean;
    readonly isPartialFillNotAllowed: boolean;
    readonly isInvalidFeeSide: boolean;
    readonly isWrongCurrentPrice: boolean;
    readonly isCannotCounterSelf: boolean;
    readonly isMaxPendingListingIdsExceeded: boolean;
    readonly isCounterOfferExists: boolean;
    readonly type: 'UnableToFill' | 'ListingNotFound' | 'NoPermission' | 'MaxRoundingErrorExceeded' | 'LowBaseCurrencyBalance' | 'LowTokenBalance' | 'TransferParamCreationFailed' | 'ReceivedValueUnderMinimum' | 'ListingAlreadyExists' | 'InvalidAuctionStart' | 'InvalidAuctionEnd' | 'InactiveAuction' | 'AuctionNotOver' | 'ListingIsWrongType' | 'InvalidAmount' | 'InvalidPrice' | 'ListingForbidden' | 'NoCurrency' | 'ListingNotActive' | 'CurrencyNotAllowedAsRoyalty' | 'BuyerIsSeller' | 'MakeAssetFrozen' | 'TakeAssetFrozen' | 'CannotCancelAuctionWithBid' | 'CannotCancelAuctionAfterEndBlock' | 'InvalidExpiration' | 'NotExpired' | 'NoCounterOffer' | 'PartialFillNotAllowed' | 'InvalidFeeSide' | 'WrongCurrentPrice' | 'CannotCounterSelf' | 'MaxPendingListingIdsExceeded' | 'CounterOfferExists';
  }

  /** @name EpCoreFrameTypesExtrinsicInfo (780) */
  interface EpCoreFrameTypesExtrinsicInfo extends Struct {
    readonly palletName: Bytes;
    readonly extrinsicName: Option<Bytes>;
  }

  /** @name PalletExtrinsicPauseError (782) */
  interface PalletExtrinsicPauseError extends Enum {
    readonly isCannotPauseSelf: boolean;
    readonly isCannotProcessInput: boolean;
    readonly type: 'CannotPauseSelf' | 'CannotProcessInput';
  }

  /** @name PalletMatrixUtilityError (783) */
  interface PalletMatrixUtilityError extends Enum {
    readonly isTooManyCalls: boolean;
    readonly type: 'TooManyCalls';
  }

  /** @name PalletClaimsClaimData (785) */
  interface PalletClaimsClaimData extends Struct {
    readonly hash_: Option<H256>;
    readonly amount: u128;
    readonly isEfiToken: bool;
    readonly startBlockNumber: u32;
  }

  /** @name PalletClaimsError (787) */
  interface PalletClaimsError extends Enum {
    readonly isInvalidEthereumSignature: boolean;
    readonly isSignerHasNoClaim: boolean;
    readonly isAmountZero: boolean;
    readonly isInvalidClaimRequestTimestamp: boolean;
    readonly isExchangeRateIsNotSet: boolean;
    readonly isOutOfBounds: boolean;
    readonly isInvalidClaimTimestamp: boolean;
    readonly isDelayTimeForClaimNotSet: boolean;
    readonly isDelayTimeSetTooLow: boolean;
    readonly isInvalidEthereumAddress: boolean;
    readonly isDelayTimeForClaimNotEnded: boolean;
    readonly isSameEthereumAddress: boolean;
    readonly type: 'InvalidEthereumSignature' | 'SignerHasNoClaim' | 'AmountZero' | 'InvalidClaimRequestTimestamp' | 'ExchangeRateIsNotSet' | 'OutOfBounds' | 'InvalidClaimTimestamp' | 'DelayTimeForClaimNotSet' | 'DelayTimeSetTooLow' | 'InvalidEthereumAddress' | 'DelayTimeForClaimNotEnded' | 'SameEthereumAddress';
  }

  /** @name PalletIdentityRegistration (789) */
  interface PalletIdentityRegistration extends Struct {
    readonly judgements: Vec<ITuple<[u32, PalletIdentityJudgement]>>;
    readonly deposit: u128;
    readonly info: PalletIdentityLegacyIdentityInfo;
  }

  /** @name PalletIdentityRegistrarInfo (798) */
  interface PalletIdentityRegistrarInfo extends Struct {
    readonly account: AccountId32;
    readonly fee: u128;
    readonly fields: u64;
  }

  /** @name PalletIdentityAuthorityProperties (800) */
  interface PalletIdentityAuthorityProperties extends Struct {
    readonly suffix: Bytes;
    readonly allocation: u32;
  }

  /** @name PalletIdentityError (802) */
  interface PalletIdentityError extends Enum {
    readonly isTooManySubAccounts: boolean;
    readonly isNotFound: boolean;
    readonly isNotNamed: boolean;
    readonly isEmptyIndex: boolean;
    readonly isFeeChanged: boolean;
    readonly isNoIdentity: boolean;
    readonly isStickyJudgement: boolean;
    readonly isJudgementGiven: boolean;
    readonly isInvalidJudgement: boolean;
    readonly isInvalidIndex: boolean;
    readonly isInvalidTarget: boolean;
    readonly isTooManyRegistrars: boolean;
    readonly isAlreadyClaimed: boolean;
    readonly isNotSub: boolean;
    readonly isNotOwned: boolean;
    readonly isJudgementForDifferentIdentity: boolean;
    readonly isJudgementPaymentFailed: boolean;
    readonly isInvalidSuffix: boolean;
    readonly isNotUsernameAuthority: boolean;
    readonly isNoAllocation: boolean;
    readonly isInvalidSignature: boolean;
    readonly isRequiresSignature: boolean;
    readonly isInvalidUsername: boolean;
    readonly isUsernameTaken: boolean;
    readonly isNoUsername: boolean;
    readonly isNotExpired: boolean;
    readonly type: 'TooManySubAccounts' | 'NotFound' | 'NotNamed' | 'EmptyIndex' | 'FeeChanged' | 'NoIdentity' | 'StickyJudgement' | 'JudgementGiven' | 'InvalidJudgement' | 'InvalidIndex' | 'InvalidTarget' | 'TooManyRegistrars' | 'AlreadyClaimed' | 'NotSub' | 'NotOwned' | 'JudgementForDifferentIdentity' | 'JudgementPaymentFailed' | 'InvalidSuffix' | 'NotUsernameAuthority' | 'NoAllocation' | 'InvalidSignature' | 'RequiresSignature' | 'InvalidUsername' | 'UsernameTaken' | 'NoUsername' | 'NotExpired';
  }

  /** @name PalletProxyProxyDefinition (805) */
  interface PalletProxyProxyDefinition extends Struct {
    readonly delegate: AccountId32;
    readonly proxyType: RuntimeCommonImplsProxyProxyType;
    readonly delay: u32;
  }

  /** @name PalletProxyAnnouncement (809) */
  interface PalletProxyAnnouncement extends Struct {
    readonly real: AccountId32;
    readonly callHash: H256;
    readonly height: u32;
  }

  /** @name PalletProxyError (811) */
  interface PalletProxyError extends Enum {
    readonly isTooMany: boolean;
    readonly isNotFound: boolean;
    readonly isNotProxy: boolean;
    readonly isUnproxyable: boolean;
    readonly isDuplicate: boolean;
    readonly isNoPermission: boolean;
    readonly isUnannounced: boolean;
    readonly isNoSelfProxy: boolean;
    readonly type: 'TooMany' | 'NotFound' | 'NotProxy' | 'Unproxyable' | 'Duplicate' | 'NoPermission' | 'Unannounced' | 'NoSelfProxy';
  }

  /** @name PalletMigrationsError (812) */
  interface PalletMigrationsError extends Enum {
    readonly isOngoing: boolean;
    readonly type: 'Ongoing';
  }

  /** @name FrameSystemExtensionsCheckSpecVersion (815) */
  type FrameSystemExtensionsCheckSpecVersion = Null;

  /** @name FrameSystemExtensionsCheckTxVersion (816) */
  type FrameSystemExtensionsCheckTxVersion = Null;

  /** @name FrameSystemExtensionsCheckGenesis (817) */
  type FrameSystemExtensionsCheckGenesis = Null;

  /** @name FrameSystemExtensionsCheckNonce (820) */
  interface FrameSystemExtensionsCheckNonce extends Compact<u32> {}

  /** @name FrameSystemExtensionsCheckWeight (821) */
  type FrameSystemExtensionsCheckWeight = Null;

  /** @name PalletTransactionPaymentChargeTransactionPayment (822) */
  interface PalletTransactionPaymentChargeTransactionPayment extends Compact<u128> {}

  /** @name PalletFuelTanksExtensionCheckFuelTank (823) */
  type PalletFuelTanksExtensionCheckFuelTank = Null;

  /** @name FrameMetadataHashExtensionCheckMetadataHash (824) */
  interface FrameMetadataHashExtensionCheckMetadataHash extends Struct {
    readonly mode: FrameMetadataHashExtensionMode;
  }

  /** @name FrameMetadataHashExtensionMode (825) */
  interface FrameMetadataHashExtensionMode extends Enum {
    readonly isDisabled: boolean;
    readonly isEnabled: boolean;
    readonly type: 'Disabled' | 'Enabled';
  }

} // declare module
