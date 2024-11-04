// Auto-generated via `yarn polkadot-types-from-chain`, do not edit
/* eslint-disable */

// import type lookup before we augment - in some environments
// this is required to allow for ambient/previous definitions
import '@polkadot/api-base/types/events';

import type { ApiTypes, AugmentedEvent } from '@polkadot/api-base/types';
import type { Bytes, Null, Option, Result, U8aFixed, Vec, bool, i32, u128, u16, u32, u64, u8 } from '@polkadot/types-codec';
import type { ITuple } from '@polkadot/types-codec/types';
import type { AccountId32, H160, H256, Perbill } from '@polkadot/types/interfaces/runtime';
import type { CumulusPrimitivesCoreAggregateMessageOrigin, EpMultiTokensCollection, EpMultiTokensCollectionDefaultCollectionMutation, EpMultiTokensFreeze, EpMultiTokensRootOrSigned, EpMultiTokensToken, EpMultiTokensTokenDefaultTokenMutation, FrameSupportDispatchDispatchInfo, FrameSupportMessagesProcessMessageError, FrameSupportTokensMiscBalanceStatus, MatrixPalletXcmMinimumWeightFeePair, PalletDemocracyMetadataOwner, PalletDemocracyVoteAccountVote, PalletDemocracyVoteThreshold, PalletFuelTanksConsumption, PalletFuelTanksImplsDefaultTankMutation, PalletFuelTanksRulesDispatchRuleKind, PalletMarketplaceFeaturesAuctionBid, PalletMarketplaceFeaturesListing, PalletMarketplaceFeaturesOfferCounterOffer, PalletMarketplaceFeaturesOfferCounterOfferResponse, PalletMultiTokensFeaturesClaimAssetIdWithEth, PalletMultiTokensFeaturesCollectionTypesCollectionAccount, PalletMultiTokensFeaturesTokenTypesTokenAccount, PalletMultisigTimepoint, PalletPoolsPoolsMutation, PalletSafeModeExitReason, RuntimeCommonImplsProxyProxyType, SpRuntimeDispatchError, SpWeightsWeightV2Weight, StagingXcmV4Asset, StagingXcmV4AssetAssets, StagingXcmV4Location, StagingXcmV4Response, StagingXcmV4TraitsOutcome, StagingXcmV4Xcm, XcmV3TraitsError, XcmVersionedAssets, XcmVersionedLocation } from '@polkadot/types/lookup';

export type __AugmentedEvent<ApiType extends ApiTypes> = AugmentedEvent<ApiType>;

declare module '@polkadot/api-base/types/events' {
  interface AugmentedEvents<ApiType extends ApiTypes> {
    balances: {
      /**
       * A balance was set by root.
       **/
      BalanceSet: AugmentedEvent<ApiType, [who: AccountId32, free: u128], { who: AccountId32, free: u128 }>;
      /**
       * Some amount was burned from an account.
       **/
      Burned: AugmentedEvent<ApiType, [who: AccountId32, amount: u128], { who: AccountId32, amount: u128 }>;
      /**
       * Some amount was deposited (e.g. for transaction fees).
       **/
      Deposit: AugmentedEvent<ApiType, [who: AccountId32, amount: u128], { who: AccountId32, amount: u128 }>;
      /**
       * An account was removed whose balance was non-zero but below ExistentialDeposit,
       * resulting in an outright loss.
       **/
      DustLost: AugmentedEvent<ApiType, [account: AccountId32, amount: u128], { account: AccountId32, amount: u128 }>;
      /**
       * An account was created with some free balance.
       **/
      Endowed: AugmentedEvent<ApiType, [account: AccountId32, freeBalance: u128], { account: AccountId32, freeBalance: u128 }>;
      /**
       * Some balance was frozen.
       **/
      Frozen: AugmentedEvent<ApiType, [who: AccountId32, amount: u128], { who: AccountId32, amount: u128 }>;
      /**
       * Total issuance was increased by `amount`, creating a credit to be balanced.
       **/
      Issued: AugmentedEvent<ApiType, [amount: u128], { amount: u128 }>;
      /**
       * Some balance was locked.
       **/
      Locked: AugmentedEvent<ApiType, [who: AccountId32, amount: u128], { who: AccountId32, amount: u128 }>;
      /**
       * Some amount was minted into an account.
       **/
      Minted: AugmentedEvent<ApiType, [who: AccountId32, amount: u128], { who: AccountId32, amount: u128 }>;
      /**
       * Total issuance was decreased by `amount`, creating a debt to be balanced.
       **/
      Rescinded: AugmentedEvent<ApiType, [amount: u128], { amount: u128 }>;
      /**
       * Some balance was reserved (moved from free to reserved).
       **/
      Reserved: AugmentedEvent<ApiType, [who: AccountId32, amount: u128], { who: AccountId32, amount: u128 }>;
      /**
       * Some balance was moved from the reserve of the first account to the second account.
       * Final argument indicates the destination balance type.
       **/
      ReserveRepatriated: AugmentedEvent<ApiType, [from: AccountId32, to: AccountId32, amount: u128, destinationStatus: FrameSupportTokensMiscBalanceStatus], { from: AccountId32, to: AccountId32, amount: u128, destinationStatus: FrameSupportTokensMiscBalanceStatus }>;
      /**
       * Some amount was restored into an account.
       **/
      Restored: AugmentedEvent<ApiType, [who: AccountId32, amount: u128], { who: AccountId32, amount: u128 }>;
      /**
       * Some amount was removed from the account (e.g. for misbehavior).
       **/
      Slashed: AugmentedEvent<ApiType, [who: AccountId32, amount: u128], { who: AccountId32, amount: u128 }>;
      /**
       * Some amount was suspended from an account (it can be restored later).
       **/
      Suspended: AugmentedEvent<ApiType, [who: AccountId32, amount: u128], { who: AccountId32, amount: u128 }>;
      /**
       * Some balance was thawed.
       **/
      Thawed: AugmentedEvent<ApiType, [who: AccountId32, amount: u128], { who: AccountId32, amount: u128 }>;
      /**
       * The `TotalIssuance` was forcefully changed.
       **/
      TotalIssuanceForced: AugmentedEvent<ApiType, [old: u128, new_: u128], { old: u128, new_: u128 }>;
      /**
       * Transfer succeeded.
       **/
      Transfer: AugmentedEvent<ApiType, [from: AccountId32, to: AccountId32, amount: u128], { from: AccountId32, to: AccountId32, amount: u128 }>;
      /**
       * Some balance was unlocked.
       **/
      Unlocked: AugmentedEvent<ApiType, [who: AccountId32, amount: u128], { who: AccountId32, amount: u128 }>;
      /**
       * Some balance was unreserved (moved from reserved to free).
       **/
      Unreserved: AugmentedEvent<ApiType, [who: AccountId32, amount: u128], { who: AccountId32, amount: u128 }>;
      /**
       * An account was upgraded.
       **/
      Upgraded: AugmentedEvent<ApiType, [who: AccountId32], { who: AccountId32 }>;
      /**
       * Some amount was withdrawn from the account (e.g. for transaction fees).
       **/
      Withdraw: AugmentedEvent<ApiType, [who: AccountId32, amount: u128], { who: AccountId32, amount: u128 }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    bounties: {
      /**
       * A bounty is approved.
       **/
      BountyApproved: AugmentedEvent<ApiType, [index: u32], { index: u32 }>;
      /**
       * A bounty is awarded to a beneficiary.
       **/
      BountyAwarded: AugmentedEvent<ApiType, [index: u32, beneficiary: AccountId32], { index: u32, beneficiary: AccountId32 }>;
      /**
       * A bounty proposal is funded and became active.
       **/
      BountyBecameActive: AugmentedEvent<ApiType, [index: u32], { index: u32 }>;
      /**
       * A bounty is cancelled.
       **/
      BountyCanceled: AugmentedEvent<ApiType, [index: u32], { index: u32 }>;
      /**
       * A bounty is claimed by beneficiary.
       **/
      BountyClaimed: AugmentedEvent<ApiType, [index: u32, payout: u128, beneficiary: AccountId32], { index: u32, payout: u128, beneficiary: AccountId32 }>;
      /**
       * A bounty expiry is extended.
       **/
      BountyExtended: AugmentedEvent<ApiType, [index: u32], { index: u32 }>;
      /**
       * New bounty proposal.
       **/
      BountyProposed: AugmentedEvent<ApiType, [index: u32], { index: u32 }>;
      /**
       * A bounty proposal was rejected; funds were slashed.
       **/
      BountyRejected: AugmentedEvent<ApiType, [index: u32, bond: u128], { index: u32, bond: u128 }>;
      /**
       * A bounty curator is accepted.
       **/
      CuratorAccepted: AugmentedEvent<ApiType, [bountyId: u32, curator: AccountId32], { bountyId: u32, curator: AccountId32 }>;
      /**
       * A bounty curator is proposed.
       **/
      CuratorProposed: AugmentedEvent<ApiType, [bountyId: u32, curator: AccountId32], { bountyId: u32, curator: AccountId32 }>;
      /**
       * A bounty curator is unassigned.
       **/
      CuratorUnassigned: AugmentedEvent<ApiType, [bountyId: u32], { bountyId: u32 }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    claims: {
      /**
       * Someone claimed some ENJ2 from EFI. `[who, ethereum_address, amount]`
       **/
      Claimed: AugmentedEvent<ApiType, [who: AccountId32, ethereumAddress: Option<H160>, amount: u128], { who: AccountId32, ethereumAddress: Option<H160>, amount: u128 }>;
      /**
       * Claim has been minted for someone by the root. `[who, amount]`
       **/
      ClaimMinted: AugmentedEvent<ApiType, [who: H160, amount: u128], { who: H160, amount: u128 }>;
      /**
       * Someone's claim has been moved to another address. `[old, new]`
       **/
      ClaimMoved: AugmentedEvent<ApiType, [old: H160, new_: H160], { old: H160, new_: H160 }>;
      /**
       * Someone's claim has been rejected. `[account, transaction_hash]`
       **/
      ClaimRejected: AugmentedEvent<ApiType, [account: H160, transactionHash: H256], { account: H160, transactionHash: H256 }>;
      /**
       * Claim has been requested by an account through the Relayer. `[who, amount,
       * transaction_hash, is_efi_token]`
       **/
      ClaimRequested: AugmentedEvent<ApiType, [who: H160, amountBurned: u128, transactionHash: H256, isEfiToken: bool, amountClaimable: u128], { who: H160, amountBurned: u128, transactionHash: H256, isEfiToken: bool, amountClaimable: u128 }>;
      /**
       * Delay time for claim is set. `[delay_time]`
       **/
      DelayTimeForClaimSet: AugmentedEvent<ApiType, [delayTime: u32], { delayTime: u32 }>;
      /**
       * Claims have been processed for the Ethereum block by the Relayer.
       **/
      EthereumBlocksProcessed: AugmentedEvent<ApiType, [blockNumber: u32], { blockNumber: u32 }>;
      /**
       * Exchange rate is set. `[exchange_rate]`
       **/
      ExchangeRateSet: AugmentedEvent<ApiType, [exchangeRate: Perbill], { exchangeRate: Perbill }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    collatorStaking: {
      /**
       * A new candidate joined the list of candidates.
       **/
      CandidateJoined: AugmentedEvent<ApiType, [accountId: AccountId32, amount: u128, rewardsCut: Perbill], { accountId: AccountId32, amount: u128, rewardsCut: Perbill }>;
      /**
       * Candidate was removed.
       **/
      CandidateRemoved: AugmentedEvent<ApiType, [accountId: AccountId32], { accountId: AccountId32 }>;
      /**
       * A candidate has been selected to become a collator for the current round.
       **/
      CollatorSelected: AugmentedEvent<ApiType, [accountId: AccountId32], { accountId: AccountId32 }>;
      /**
       * A new list of invulnerables has been set by root.
       **/
      NewInvulnerables: AugmentedEvent<ApiType, [new_: Vec<AccountId32>], { new_: Vec<AccountId32> }>;
      /**
       * A new nomination was registered for a specific candidate.
       **/
      Nominated: AugmentedEvent<ApiType, [accountId: AccountId32, collatorId: AccountId32, amount: u128], { accountId: AccountId32, collatorId: AccountId32, amount: u128 }>;
      /**
       * Nomination was removed.
       **/
      NominationRemoved: AugmentedEvent<ApiType, [accountId: AccountId32, collatorId: AccountId32, amount: u128], { accountId: AccountId32, collatorId: AccountId32, amount: u128 }>;
      /**
       * A new round was finalized
       **/
      RoundFinalized: AugmentedEvent<ApiType, [number: u32], { number: u32 }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    communityPool: {
      /**
       * A new asset spend proposal has been approved.
       **/
      AssetSpendApproved: AugmentedEvent<ApiType, [index: u32, assetKind: Null, amount: u128, beneficiary: AccountId32, validFrom: u32, expireAt: u32], { index: u32, assetKind: Null, amount: u128, beneficiary: AccountId32, validFrom: u32, expireAt: u32 }>;
      /**
       * An approved spend was voided.
       **/
      AssetSpendVoided: AugmentedEvent<ApiType, [index: u32], { index: u32 }>;
      /**
       * Some funds have been allocated.
       **/
      Awarded: AugmentedEvent<ApiType, [proposalIndex: u32, award: u128, account: AccountId32], { proposalIndex: u32, award: u128, account: AccountId32 }>;
      /**
       * Some of our funds have been burnt.
       **/
      Burnt: AugmentedEvent<ApiType, [burntFunds: u128], { burntFunds: u128 }>;
      /**
       * Some funds have been deposited.
       **/
      Deposit: AugmentedEvent<ApiType, [value: u128], { value: u128 }>;
      /**
       * A payment happened.
       **/
      Paid: AugmentedEvent<ApiType, [index: u32, paymentId: Null], { index: u32, paymentId: Null }>;
      /**
       * A payment failed and can be retried.
       **/
      PaymentFailed: AugmentedEvent<ApiType, [index: u32, paymentId: Null], { index: u32, paymentId: Null }>;
      /**
       * New proposal.
       **/
      Proposed: AugmentedEvent<ApiType, [proposalIndex: u32], { proposalIndex: u32 }>;
      /**
       * A proposal was rejected; funds were slashed.
       **/
      Rejected: AugmentedEvent<ApiType, [proposalIndex: u32, slashed: u128], { proposalIndex: u32, slashed: u128 }>;
      /**
       * Spending has finished; this is the amount that rolls over until next spend.
       **/
      Rollover: AugmentedEvent<ApiType, [rolloverBalance: u128], { rolloverBalance: u128 }>;
      /**
       * A new spend proposal has been approved.
       **/
      SpendApproved: AugmentedEvent<ApiType, [proposalIndex: u32, amount: u128, beneficiary: AccountId32], { proposalIndex: u32, amount: u128, beneficiary: AccountId32 }>;
      /**
       * We have ended a spend period and will now allocate funds.
       **/
      Spending: AugmentedEvent<ApiType, [budgetRemaining: u128], { budgetRemaining: u128 }>;
      /**
       * A spend was processed and removed from the storage. It might have been successfully
       * paid or it may have expired.
       **/
      SpendProcessed: AugmentedEvent<ApiType, [index: u32], { index: u32 }>;
      /**
       * The inactive funds of the pallet have been updated.
       **/
      UpdatedInactive: AugmentedEvent<ApiType, [reactivated: u128, deactivated: u128], { reactivated: u128, deactivated: u128 }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    council: {
      /**
       * A motion was approved by the required threshold.
       **/
      Approved: AugmentedEvent<ApiType, [proposalHash: H256], { proposalHash: H256 }>;
      /**
       * A proposal was closed because its threshold was reached or after its duration was up.
       **/
      Closed: AugmentedEvent<ApiType, [proposalHash: H256, yes: u32, no: u32], { proposalHash: H256, yes: u32, no: u32 }>;
      /**
       * A motion was not approved by the required threshold.
       **/
      Disapproved: AugmentedEvent<ApiType, [proposalHash: H256], { proposalHash: H256 }>;
      /**
       * A motion was executed; result will be `Ok` if it returned without error.
       **/
      Executed: AugmentedEvent<ApiType, [proposalHash: H256, result: Result<Null, SpRuntimeDispatchError>], { proposalHash: H256, result: Result<Null, SpRuntimeDispatchError> }>;
      /**
       * A single member did some action; result will be `Ok` if it returned without error.
       **/
      MemberExecuted: AugmentedEvent<ApiType, [proposalHash: H256, result: Result<Null, SpRuntimeDispatchError>], { proposalHash: H256, result: Result<Null, SpRuntimeDispatchError> }>;
      /**
       * A motion (given hash) has been proposed (by given account) with a threshold (given
       * `MemberCount`).
       **/
      Proposed: AugmentedEvent<ApiType, [account: AccountId32, proposalIndex: u32, proposalHash: H256, threshold: u32], { account: AccountId32, proposalIndex: u32, proposalHash: H256, threshold: u32 }>;
      /**
       * A motion (given hash) has been voted on by given account, leaving
       * a tally (yes votes and no votes given respectively as `MemberCount`).
       **/
      Voted: AugmentedEvent<ApiType, [account: AccountId32, proposalHash: H256, voted: bool, yes: u32, no: u32], { account: AccountId32, proposalHash: H256, voted: bool, yes: u32, no: u32 }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    cumulusXcm: {
      /**
       * Downward message executed with the given outcome.
       * \[ id, outcome \]
       **/
      ExecutedDownward: AugmentedEvent<ApiType, [U8aFixed, StagingXcmV4TraitsOutcome]>;
      /**
       * Downward message is invalid XCM.
       * \[ id \]
       **/
      InvalidFormat: AugmentedEvent<ApiType, [U8aFixed]>;
      /**
       * Downward message is unsupported version of XCM.
       * \[ id \]
       **/
      UnsupportedVersion: AugmentedEvent<ApiType, [U8aFixed]>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    democracy: {
      /**
       * A proposal_hash has been blacklisted permanently.
       **/
      Blacklisted: AugmentedEvent<ApiType, [proposalHash: H256], { proposalHash: H256 }>;
      /**
       * A referendum has been cancelled.
       **/
      Cancelled: AugmentedEvent<ApiType, [refIndex: u32], { refIndex: u32 }>;
      /**
       * An account has delegated their vote to another account.
       **/
      Delegated: AugmentedEvent<ApiType, [who: AccountId32, target: AccountId32], { who: AccountId32, target: AccountId32 }>;
      /**
       * An external proposal has been tabled.
       **/
      ExternalTabled: AugmentedEvent<ApiType, []>;
      /**
       * Metadata for a proposal or a referendum has been cleared.
       **/
      MetadataCleared: AugmentedEvent<ApiType, [owner: PalletDemocracyMetadataOwner, hash_: H256], { owner: PalletDemocracyMetadataOwner, hash_: H256 }>;
      /**
       * Metadata for a proposal or a referendum has been set.
       **/
      MetadataSet: AugmentedEvent<ApiType, [owner: PalletDemocracyMetadataOwner, hash_: H256], { owner: PalletDemocracyMetadataOwner, hash_: H256 }>;
      /**
       * Metadata has been transferred to new owner.
       **/
      MetadataTransferred: AugmentedEvent<ApiType, [prevOwner: PalletDemocracyMetadataOwner, owner: PalletDemocracyMetadataOwner, hash_: H256], { prevOwner: PalletDemocracyMetadataOwner, owner: PalletDemocracyMetadataOwner, hash_: H256 }>;
      /**
       * A proposal has been rejected by referendum.
       **/
      NotPassed: AugmentedEvent<ApiType, [refIndex: u32], { refIndex: u32 }>;
      /**
       * A proposal has been approved by referendum.
       **/
      Passed: AugmentedEvent<ApiType, [refIndex: u32], { refIndex: u32 }>;
      /**
       * A proposal got canceled.
       **/
      ProposalCanceled: AugmentedEvent<ApiType, [propIndex: u32], { propIndex: u32 }>;
      /**
       * A motion has been proposed by a public account.
       **/
      Proposed: AugmentedEvent<ApiType, [proposalIndex: u32, deposit: u128], { proposalIndex: u32, deposit: u128 }>;
      /**
       * An account has secconded a proposal
       **/
      Seconded: AugmentedEvent<ApiType, [seconder: AccountId32, propIndex: u32], { seconder: AccountId32, propIndex: u32 }>;
      /**
       * A referendum has begun.
       **/
      Started: AugmentedEvent<ApiType, [refIndex: u32, threshold: PalletDemocracyVoteThreshold], { refIndex: u32, threshold: PalletDemocracyVoteThreshold }>;
      /**
       * A public proposal has been tabled for referendum vote.
       **/
      Tabled: AugmentedEvent<ApiType, [proposalIndex: u32, deposit: u128], { proposalIndex: u32, deposit: u128 }>;
      /**
       * An account has cancelled a previous delegation operation.
       **/
      Undelegated: AugmentedEvent<ApiType, [account: AccountId32], { account: AccountId32 }>;
      /**
       * An external proposal has been vetoed.
       **/
      Vetoed: AugmentedEvent<ApiType, [who: AccountId32, proposalHash: H256, until: u32], { who: AccountId32, proposalHash: H256, until: u32 }>;
      /**
       * An account has voted in a referendum
       **/
      Voted: AugmentedEvent<ApiType, [voter: AccountId32, refIndex: u32, vote: PalletDemocracyVoteAccountVote], { voter: AccountId32, refIndex: u32, vote: PalletDemocracyVoteAccountVote }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    dmpQueue: {
      /**
       * Some debris was cleaned up.
       **/
      CleanedSome: AugmentedEvent<ApiType, [keysRemoved: u32], { keysRemoved: u32 }>;
      /**
       * The cleanup of remaining pallet storage completed.
       **/
      Completed: AugmentedEvent<ApiType, [error: bool], { error: bool }>;
      /**
       * The export of pages completed.
       **/
      CompletedExport: AugmentedEvent<ApiType, []>;
      /**
       * The export of overweight messages completed.
       **/
      CompletedOverweightExport: AugmentedEvent<ApiType, []>;
      /**
       * The export of a page completed.
       **/
      Exported: AugmentedEvent<ApiType, [page: u32], { page: u32 }>;
      /**
       * The export of an overweight message completed.
       **/
      ExportedOverweight: AugmentedEvent<ApiType, [index: u64], { index: u64 }>;
      /**
       * The export of a page failed.
       * 
       * This should never be emitted.
       **/
      ExportFailed: AugmentedEvent<ApiType, [page: u32], { page: u32 }>;
      /**
       * The export of an overweight message failed.
       * 
       * This should never be emitted.
       **/
      ExportOverweightFailed: AugmentedEvent<ApiType, [index: u64], { index: u64 }>;
      /**
       * The cleanup of remaining pallet storage started.
       **/
      StartedCleanup: AugmentedEvent<ApiType, []>;
      /**
       * The export of pages started.
       **/
      StartedExport: AugmentedEvent<ApiType, []>;
      /**
       * The export of overweight messages started.
       **/
      StartedOverweightExport: AugmentedEvent<ApiType, []>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    extrinsicPause: {
      /**
       * Extrinsic is paused.
       **/
      ExtrinsicPaused: AugmentedEvent<ApiType, [palletName: Bytes, extrinsicName: Bytes], { palletName: Bytes, extrinsicName: Bytes }>;
      /**
       * Extrinsic is resumed
       **/
      ExtrinsicResumed: AugmentedEvent<ApiType, [palletName: Bytes, extrinsicName: Bytes], { palletName: Bytes, extrinsicName: Bytes }>;
      /**
       * All pallet extrinsics are paused.
       **/
      PalletPaused: AugmentedEvent<ApiType, [palletName: Bytes], { palletName: Bytes }>;
      /**
       * All pallet extrinsics are resumed.
       **/
      PalletResumed: AugmentedEvent<ApiType, [palletName: Bytes], { palletName: Bytes }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    fuelTanks: {
      /**
       * An account was added to a [`FuelTank`]
       **/
      AccountAdded: AugmentedEvent<ApiType, [tankId: AccountId32, userId: AccountId32, tankDeposit: u128, userDeposit: u128, totalReceived: u128], { tankId: AccountId32, userId: AccountId32, tankDeposit: u128, userDeposit: u128, totalReceived: u128 }>;
      /**
       * An account was removed from a [`FuelTank`]
       **/
      AccountRemoved: AugmentedEvent<ApiType, [tankId: AccountId32, userId: AccountId32], { tankId: AccountId32, userId: AccountId32 }>;
      /**
       * Account data of [`AccountId`](frame_system::Config::AccountId) was removed from
       * [`RuleSetId`](Config::RuleSetId)
       **/
      AccountRuleDataRemoved: AugmentedEvent<ApiType, [tankId: AccountId32, userId: AccountId32, ruleSetId: u32, ruleKind: PalletFuelTanksRulesDispatchRuleKind], { tankId: AccountId32, userId: AccountId32, ruleSetId: u32, ruleKind: PalletFuelTanksRulesDispatchRuleKind }>;
      /**
       * A call was dispatched through a [`FuelTank`].
       **/
      CallDispatched: AugmentedEvent<ApiType, [caller: AccountId32, tankId: AccountId32], { caller: AccountId32, tankId: AccountId32 }>;
      /**
       * The consumption for an account was set for a rule set on a [`FuelTank`]
       **/
      ConsumptionSet: AugmentedEvent<ApiType, [tankId: AccountId32, userId: Option<AccountId32>, ruleSetId: u32, consumption: PalletFuelTanksConsumption], { tankId: AccountId32, userId: Option<AccountId32>, ruleSetId: u32, consumption: PalletFuelTanksConsumption }>;
      /**
       * The dispatch of a call has failed
       **/
      DispatchFailed: AugmentedEvent<ApiType, [tankId: AccountId32, caller: AccountId32, error: SpRuntimeDispatchError], { tankId: AccountId32, caller: AccountId32, error: SpRuntimeDispatchError }>;
      /**
       * The freeze state change for fuel tank or its rule set was executed in `on_finalize`
       **/
      FreezeStateMutated: AugmentedEvent<ApiType, [tankId: AccountId32, ruleSetId: Option<u32>, isFrozen: bool], { tankId: AccountId32, ruleSetId: Option<u32>, isFrozen: bool }>;
      /**
       * A new [`FuelTank`] was created.
       **/
      FuelTankCreated: AugmentedEvent<ApiType, [owner: AccountId32, name: Bytes, tankId: AccountId32], { owner: AccountId32, name: Bytes, tankId: AccountId32 }>;
      /**
       * A [`FuelTank`] was destroyed
       **/
      FuelTankDestroyed: AugmentedEvent<ApiType, [tankId: AccountId32], { tankId: AccountId32 }>;
      /**
       * A [`FuelTank`] was mutated
       **/
      FuelTankMutated: AugmentedEvent<ApiType, [tankId: AccountId32, mutation: PalletFuelTanksImplsDefaultTankMutation], { tankId: AccountId32, mutation: PalletFuelTanksImplsDefaultTankMutation }>;
      /**
       * The migration step has completed
       **/
      MigrationStep: AugmentedEvent<ApiType, [itemsProcessed: u32, phase: u8], { itemsProcessed: u32, phase: u8 }>;
      /**
       * A new rule set was added to [`FuelTank`]
       **/
      RuleSetInserted: AugmentedEvent<ApiType, [tankId: AccountId32, ruleSetId: u32], { tankId: AccountId32, ruleSetId: u32 }>;
      /**
       * A rule set was removed from [`FuelTank`]
       **/
      RuleSetRemoved: AugmentedEvent<ApiType, [tankId: AccountId32, ruleSetId: u32], { tankId: AccountId32, ruleSetId: u32 }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    identity: {
      /**
       * A username authority was added.
       **/
      AuthorityAdded: AugmentedEvent<ApiType, [authority: AccountId32], { authority: AccountId32 }>;
      /**
       * A username authority was removed.
       **/
      AuthorityRemoved: AugmentedEvent<ApiType, [authority: AccountId32], { authority: AccountId32 }>;
      /**
       * A dangling username (as in, a username corresponding to an account that has removed its
       * identity) has been removed.
       **/
      DanglingUsernameRemoved: AugmentedEvent<ApiType, [who: AccountId32, username: Bytes], { who: AccountId32, username: Bytes }>;
      /**
       * A name was cleared, and the given balance returned.
       **/
      IdentityCleared: AugmentedEvent<ApiType, [who: AccountId32, deposit: u128], { who: AccountId32, deposit: u128 }>;
      /**
       * A name was removed and the given balance slashed.
       **/
      IdentityKilled: AugmentedEvent<ApiType, [who: AccountId32, deposit: u128], { who: AccountId32, deposit: u128 }>;
      /**
       * A name was set or reset (which will remove all judgements).
       **/
      IdentitySet: AugmentedEvent<ApiType, [who: AccountId32], { who: AccountId32 }>;
      /**
       * A judgement was given by a registrar.
       **/
      JudgementGiven: AugmentedEvent<ApiType, [target: AccountId32, registrarIndex: u32], { target: AccountId32, registrarIndex: u32 }>;
      /**
       * A judgement was asked from a registrar.
       **/
      JudgementRequested: AugmentedEvent<ApiType, [who: AccountId32, registrarIndex: u32], { who: AccountId32, registrarIndex: u32 }>;
      /**
       * A judgement request was retracted.
       **/
      JudgementUnrequested: AugmentedEvent<ApiType, [who: AccountId32, registrarIndex: u32], { who: AccountId32, registrarIndex: u32 }>;
      /**
       * A queued username passed its expiration without being claimed and was removed.
       **/
      PreapprovalExpired: AugmentedEvent<ApiType, [whose: AccountId32], { whose: AccountId32 }>;
      /**
       * A username was set as a primary and can be looked up from `who`.
       **/
      PrimaryUsernameSet: AugmentedEvent<ApiType, [who: AccountId32, username: Bytes], { who: AccountId32, username: Bytes }>;
      /**
       * A registrar was added.
       **/
      RegistrarAdded: AugmentedEvent<ApiType, [registrarIndex: u32], { registrarIndex: u32 }>;
      /**
       * A sub-identity was added to an identity and the deposit paid.
       **/
      SubIdentityAdded: AugmentedEvent<ApiType, [sub: AccountId32, main: AccountId32, deposit: u128], { sub: AccountId32, main: AccountId32, deposit: u128 }>;
      /**
       * A sub-identity was removed from an identity and the deposit freed.
       **/
      SubIdentityRemoved: AugmentedEvent<ApiType, [sub: AccountId32, main: AccountId32, deposit: u128], { sub: AccountId32, main: AccountId32, deposit: u128 }>;
      /**
       * A sub-identity was cleared, and the given deposit repatriated from the
       * main identity account to the sub-identity account.
       **/
      SubIdentityRevoked: AugmentedEvent<ApiType, [sub: AccountId32, main: AccountId32, deposit: u128], { sub: AccountId32, main: AccountId32, deposit: u128 }>;
      /**
       * A username was queued, but `who` must accept it prior to `expiration`.
       **/
      UsernameQueued: AugmentedEvent<ApiType, [who: AccountId32, username: Bytes, expiration: u32], { who: AccountId32, username: Bytes, expiration: u32 }>;
      /**
       * A username was set for `who`.
       **/
      UsernameSet: AugmentedEvent<ApiType, [who: AccountId32, username: Bytes], { who: AccountId32, username: Bytes }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    marketplace: {
      /**
       * An auction was finalized
       **/
      AuctionFinalized: AugmentedEvent<ApiType, [listingId: H256, winningBid: Option<PalletMarketplaceFeaturesAuctionBid>, protocolFee: u128, royalty: u128], { listingId: H256, winningBid: Option<PalletMarketplaceFeaturesAuctionBid>, protocolFee: u128, royalty: u128 }>;
      /**
       * A bid was placed
       **/
      BidPlaced: AugmentedEvent<ApiType, [listingId: H256, bid: PalletMarketplaceFeaturesAuctionBid], { listingId: H256, bid: PalletMarketplaceFeaturesAuctionBid }>;
      /**
       * A response was issued for a counter offer
       **/
      CounterOfferAnswered: AugmentedEvent<ApiType, [listingId: H256, creator: AccountId32, response: PalletMarketplaceFeaturesOfferCounterOfferResponse], { listingId: H256, creator: AccountId32, response: PalletMarketplaceFeaturesOfferCounterOfferResponse }>;
      /**
       * A counter offer was placed on a listing
       **/
      CounterOfferPlaced: AugmentedEvent<ApiType, [listingId: H256, counterOffer: PalletMarketplaceFeaturesOfferCounterOffer], { listingId: H256, counterOffer: PalletMarketplaceFeaturesOfferCounterOffer }>;
      /**
       * A counter offer was removed
       **/
      CounterOfferRemoved: AugmentedEvent<ApiType, [listingId: H256, creator: AccountId32], { listingId: H256, creator: AccountId32 }>;
      /**
       * An expired listing was removed
       **/
      ExpiredListingRemoved: AugmentedEvent<ApiType, [listingId: H256], { listingId: H256 }>;
      /**
       * A listing was cancelled
       **/
      ListingCancelled: AugmentedEvent<ApiType, [listingId: H256], { listingId: H256 }>;
      /**
       * A listing was created
       **/
      ListingCreated: AugmentedEvent<ApiType, [listingId: H256, listing: PalletMarketplaceFeaturesListing], { listingId: H256, listing: PalletMarketplaceFeaturesListing }>;
      /**
       * A listing was filled or partially filled
       **/
      ListingFilled: AugmentedEvent<ApiType, [listingId: H256, buyer: AccountId32, price: u128, amountFilled: u128, amountRemaining: u128, protocolFee: u128, royalty: u128], { listingId: H256, buyer: AccountId32, price: u128, amountFilled: u128, amountRemaining: u128, protocolFee: u128, royalty: u128 }>;
      /**
       * The migration step has completed
       **/
      MigrationStep: AugmentedEvent<ApiType, [itemsProcessed: u32, phase: u8], { itemsProcessed: u32, phase: u8 }>;
      /**
       * Protocol fee was set
       **/
      ProtocolFeeSet: AugmentedEvent<ApiType, [protocolFee: Perbill], { protocolFee: Perbill }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    matrixUtility: {
      /**
       * Batch of calls dispatched without errors.
       **/
      BatchDispatched: AugmentedEvent<ApiType, []>;
      /**
       * Batch of calls did not disptach completely.
       * Index and error of the failing dispatch call is provided.
       **/
      BatchFailed: AugmentedEvent<ApiType, [index: u32, error: SpRuntimeDispatchError], { index: u32, error: SpRuntimeDispatchError }>;
      /**
       * Batch of calls dispatched, but some calls resulted in error.
       * Indexes and errors of failing dispatch calls are provided.
       **/
      BatchPartiallyDispatched: AugmentedEvent<ApiType, [Vec<ITuple<[u32, SpRuntimeDispatchError]>>]>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    matrixXcm: {
      /**
       * Xcm fee and weight updated
       **/
      MinimumWeightUpdated: AugmentedEvent<ApiType, [MatrixPalletXcmMinimumWeightFeePair]>;
      /**
       * XCM transfer failed
       **/
      XcmTransferFailed: AugmentedEvent<ApiType, [SpRuntimeDispatchError]>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    messageQueue: {
      /**
       * Message placed in overweight queue.
       **/
      OverweightEnqueued: AugmentedEvent<ApiType, [id: U8aFixed, origin: CumulusPrimitivesCoreAggregateMessageOrigin, pageIndex: u32, messageIndex: u32], { id: U8aFixed, origin: CumulusPrimitivesCoreAggregateMessageOrigin, pageIndex: u32, messageIndex: u32 }>;
      /**
       * This page was reaped.
       **/
      PageReaped: AugmentedEvent<ApiType, [origin: CumulusPrimitivesCoreAggregateMessageOrigin, index: u32], { origin: CumulusPrimitivesCoreAggregateMessageOrigin, index: u32 }>;
      /**
       * Message is processed.
       **/
      Processed: AugmentedEvent<ApiType, [id: H256, origin: CumulusPrimitivesCoreAggregateMessageOrigin, weightUsed: SpWeightsWeightV2Weight, success: bool], { id: H256, origin: CumulusPrimitivesCoreAggregateMessageOrigin, weightUsed: SpWeightsWeightV2Weight, success: bool }>;
      /**
       * Message discarded due to an error in the `MessageProcessor` (usually a format error).
       **/
      ProcessingFailed: AugmentedEvent<ApiType, [id: H256, origin: CumulusPrimitivesCoreAggregateMessageOrigin, error: FrameSupportMessagesProcessMessageError], { id: H256, origin: CumulusPrimitivesCoreAggregateMessageOrigin, error: FrameSupportMessagesProcessMessageError }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    migrations: {
      /**
       * The set of historical migrations has been cleared.
       **/
      HistoricCleared: AugmentedEvent<ApiType, [nextCursor: Option<Bytes>], { nextCursor: Option<Bytes> }>;
      /**
       * A migration progressed.
       **/
      MigrationAdvanced: AugmentedEvent<ApiType, [index: u32, took: u32], { index: u32, took: u32 }>;
      /**
       * A Migration completed.
       **/
      MigrationCompleted: AugmentedEvent<ApiType, [index: u32, took: u32], { index: u32, took: u32 }>;
      /**
       * A Migration failed.
       * 
       * This implies that the whole upgrade failed and governance intervention is required.
       **/
      MigrationFailed: AugmentedEvent<ApiType, [index: u32, took: u32], { index: u32, took: u32 }>;
      /**
       * A migration was skipped since it was already executed in the past.
       **/
      MigrationSkipped: AugmentedEvent<ApiType, [index: u32], { index: u32 }>;
      /**
       * The current runtime upgrade completed.
       * 
       * This implies that all of its migrations completed successfully as well.
       **/
      UpgradeCompleted: AugmentedEvent<ApiType, []>;
      /**
       * Runtime upgrade failed.
       * 
       * This is very bad and will require governance intervention.
       **/
      UpgradeFailed: AugmentedEvent<ApiType, []>;
      /**
       * A Runtime upgrade started.
       * 
       * Its end is indicated by `UpgradeCompleted` or `UpgradeFailed`.
       **/
      UpgradeStarted: AugmentedEvent<ApiType, [migrations: u32], { migrations: u32 }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    multisig: {
      /**
       * A multisig operation has been approved by someone.
       **/
      MultisigApproval: AugmentedEvent<ApiType, [approving: AccountId32, timepoint: PalletMultisigTimepoint, multisig: AccountId32, callHash: U8aFixed], { approving: AccountId32, timepoint: PalletMultisigTimepoint, multisig: AccountId32, callHash: U8aFixed }>;
      /**
       * A multisig operation has been cancelled.
       **/
      MultisigCancelled: AugmentedEvent<ApiType, [cancelling: AccountId32, timepoint: PalletMultisigTimepoint, multisig: AccountId32, callHash: U8aFixed], { cancelling: AccountId32, timepoint: PalletMultisigTimepoint, multisig: AccountId32, callHash: U8aFixed }>;
      /**
       * A multisig operation has been executed.
       **/
      MultisigExecuted: AugmentedEvent<ApiType, [approving: AccountId32, timepoint: PalletMultisigTimepoint, multisig: AccountId32, callHash: U8aFixed, result: Result<Null, SpRuntimeDispatchError>], { approving: AccountId32, timepoint: PalletMultisigTimepoint, multisig: AccountId32, callHash: U8aFixed, result: Result<Null, SpRuntimeDispatchError> }>;
      /**
       * A new multisig operation has begun.
       **/
      NewMultisig: AugmentedEvent<ApiType, [approving: AccountId32, multisig: AccountId32, callHash: U8aFixed], { approving: AccountId32, multisig: AccountId32, callHash: U8aFixed }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    multiTokens: {
      /**
       * An approval took place. If `token_id` is `None`, it applies to the whole collection.
       **/
      Approved: AugmentedEvent<ApiType, [collectionId: u128, tokenId: Option<u128>, owner: AccountId32, operator: AccountId32, amount: Option<u128>, expiration: Option<u32>], { collectionId: u128, tokenId: Option<u128>, owner: AccountId32, operator: AccountId32, amount: Option<u128>, expiration: Option<u32> }>;
      /**
       * An attribute has been removed
       **/
      AttributeRemoved: AugmentedEvent<ApiType, [collectionId: u128, tokenId: Option<u128>, key: Bytes], { collectionId: u128, tokenId: Option<u128>, key: Bytes }>;
      /**
       * New attribute has been set
       **/
      AttributeSet: AugmentedEvent<ApiType, [collectionId: u128, tokenId: Option<u128>, key: Bytes, value: Bytes], { collectionId: u128, tokenId: Option<u128>, key: Bytes, value: Bytes }>;
      /**
       * The balance of an account was set
       **/
      BalanceSet: AugmentedEvent<ApiType, [collectionId: u128, tokenId: u128, accountId: AccountId32, balance: u128, reservedBalance: u128], { collectionId: u128, tokenId: u128, accountId: AccountId32, balance: u128, reservedBalance: u128 }>;
      /**
       * Units of a token were burned
       **/
      Burned: AugmentedEvent<ApiType, [collectionId: u128, tokenId: u128, accountId: AccountId32, amount: u128], { collectionId: u128, tokenId: u128, accountId: AccountId32, amount: u128 }>;
      /**
       * Collections were claimed
       **/
      ClaimedCollections: AugmentedEvent<ApiType, [accountId: AccountId32, ethereumAddress: H160, collectionIds: Vec<u128>], { accountId: AccountId32, ethereumAddress: H160, collectionIds: Vec<u128> }>;
      /**
       * Tokens were claimed
       **/
      ClaimedTokens: AugmentedEvent<ApiType, [accountId: AccountId32, ethereumAddress: H160, assetIds: Vec<PalletMultiTokensFeaturesClaimAssetIdWithEth>, moreTokensRemain: bool], { accountId: AccountId32, ethereumAddress: H160, assetIds: Vec<PalletMultiTokensFeaturesClaimAssetIdWithEth>, moreTokensRemain: bool }>;
      /**
       * Finished claiming the tokens
       **/
      ClaimTokensCompleted: AugmentedEvent<ApiType, [destination: AccountId32, ethereumAddress: H160], { destination: AccountId32, ethereumAddress: H160 }>;
      /**
       * Claims tokens initiated
       **/
      ClaimTokensInitiated: AugmentedEvent<ApiType, [accountId: AccountId32, ethereumAddress: H160], { accountId: AccountId32, ethereumAddress: H160 }>;
      /**
       * A new collection account was created
       **/
      CollectionAccountCreated: AugmentedEvent<ApiType, [collectionId: u128, accountId: AccountId32], { collectionId: u128, accountId: AccountId32 }>;
      /**
       * A collection account was destroyed
       **/
      CollectionAccountDestroyed: AugmentedEvent<ApiType, [collectionId: u128, accountId: AccountId32], { collectionId: u128, accountId: AccountId32 }>;
      /**
       * TokenAccount storage was set to `value`
       **/
      CollectionAccountUpdated: AugmentedEvent<ApiType, [collectionId: u128, accountId: AccountId32, value: Option<PalletMultiTokensFeaturesCollectionTypesCollectionAccount>], { collectionId: u128, accountId: AccountId32, value: Option<PalletMultiTokensFeaturesCollectionTypesCollectionAccount> }>;
      /**
       * A new collection was created
       **/
      CollectionCreated: AugmentedEvent<ApiType, [collectionId: u128, owner: AccountId32], { collectionId: u128, owner: AccountId32 }>;
      /**
       * A collection was destroyed.
       **/
      CollectionDestroyed: AugmentedEvent<ApiType, [collectionId: u128, caller: AccountId32], { collectionId: u128, caller: AccountId32 }>;
      /**
       * A collection was mutated
       **/
      CollectionMutated: AugmentedEvent<ApiType, [collectionId: u128, mutation: EpMultiTokensCollectionDefaultCollectionMutation], { collectionId: u128, mutation: EpMultiTokensCollectionDefaultCollectionMutation }>;
      /**
       * A pending collection transfer was cancelled
       **/
      CollectionTransferCancelled: AugmentedEvent<ApiType, [collectionId: u128], { collectionId: u128 }>;
      /**
       * Collection ownership was transferred
       **/
      CollectionTransferred: AugmentedEvent<ApiType, [collectionId: u128, newOwner: AccountId32], { collectionId: u128, newOwner: AccountId32 }>;
      /**
       * Collection storage was set to `value`
       **/
      CollectionUpdated: AugmentedEvent<ApiType, [collectionId: u128, value: Option<EpMultiTokensCollection>], { collectionId: u128, value: Option<EpMultiTokensCollection> }>;
      /**
       * Token units were deposited
       **/
      Deposit: AugmentedEvent<ApiType, [collectionId: u128, tokenId: u128, accountId: AccountId32, amount: u128], { collectionId: u128, tokenId: u128, accountId: AccountId32, amount: u128 }>;
      /**
       * Collection, token or account was frozen
       **/
      Frozen: AugmentedEvent<ApiType, [EpMultiTokensFreeze]>;
      /**
       * The token was infused with ENJ
       **/
      Infused: AugmentedEvent<ApiType, [collectionId: u128, tokenId: u128, accountId: AccountId32, amount: u128], { collectionId: u128, tokenId: u128, accountId: AccountId32, amount: u128 }>;
      /**
       * The migration step has completed
       **/
      MigrationStep: AugmentedEvent<ApiType, [itemsProcessed: u32, phase: u8], { itemsProcessed: u32, phase: u8 }>;
      /**
       * Units of a token were minted
       **/
      Minted: AugmentedEvent<ApiType, [collectionId: u128, tokenId: u128, issuer: EpMultiTokensRootOrSigned, recipient: AccountId32, amount: u128], { collectionId: u128, tokenId: u128, issuer: EpMultiTokensRootOrSigned, recipient: AccountId32, amount: u128 }>;
      /**
       * Reserved token units were moved
       **/
      MovedReserves: AugmentedEvent<ApiType, [collectionId: u128, tokenId: u128, source: AccountId32, destination: AccountId32, amount: u128, reserveId: Option<U8aFixed>], { collectionId: u128, tokenId: u128, source: AccountId32, destination: AccountId32, amount: u128, reserveId: Option<U8aFixed> }>;
      /**
       * NextCollectionId storage was set to `collection_id`
       **/
      NextCollectionIdUpdated: AugmentedEvent<ApiType, [collectionId: u128], { collectionId: u128 }>;
      /**
       * Token units were reserved
       **/
      Reserved: AugmentedEvent<ApiType, [collectionId: u128, tokenId: u128, accountId: AccountId32, amount: u128, reserveId: Option<U8aFixed>], { collectionId: u128, tokenId: u128, accountId: AccountId32, amount: u128, reserveId: Option<U8aFixed> }>;
      /**
       * Reserved token units were transferred
       **/
      ReserveRepatriated: AugmentedEvent<ApiType, [collectionId: u128, tokenId: u128, source: AccountId32, destination: AccountId32, amount: u128, reserveId: Option<U8aFixed>], { collectionId: u128, tokenId: u128, source: AccountId32, destination: AccountId32, amount: u128, reserveId: Option<U8aFixed> }>;
      /**
       * An amount of tokens were slashed from account
       **/
      Slashed: AugmentedEvent<ApiType, [collectionId: u128, tokenId: u128, accountId: AccountId32, amount: u128], { collectionId: u128, tokenId: u128, accountId: AccountId32, amount: u128 }>;
      /**
       * Collection, token or account was unfrozen
       **/
      Thawed: AugmentedEvent<ApiType, [EpMultiTokensFreeze]>;
      /**
       * A new token account was created
       **/
      TokenAccountCreated: AugmentedEvent<ApiType, [collectionId: u128, tokenId: u128, accountId: AccountId32, balance: u128], { collectionId: u128, tokenId: u128, accountId: AccountId32, balance: u128 }>;
      /**
       * The deposit for number of accounts supported by a token changed
       **/
      TokenAccountDepositUpdated: AugmentedEvent<ApiType, [collectionId: u128, tokenId: u128, depositor: AccountId32, deltaAccountCount: i32], { collectionId: u128, tokenId: u128, depositor: AccountId32, deltaAccountCount: i32 }>;
      /**
       * A token account was destroyed
       **/
      TokenAccountDestroyed: AugmentedEvent<ApiType, [collectionId: u128, tokenId: u128, accountId: AccountId32], { collectionId: u128, tokenId: u128, accountId: AccountId32 }>;
      /**
       * TokenAccount storage was set to `value`
       **/
      TokenAccountUpdated: AugmentedEvent<ApiType, [collectionId: u128, tokenId: u128, accountId: AccountId32, value: Option<PalletMultiTokensFeaturesTokenTypesTokenAccount>], { collectionId: u128, tokenId: u128, accountId: AccountId32, value: Option<PalletMultiTokensFeaturesTokenTypesTokenAccount> }>;
      /**
       * A token was created
       **/
      TokenCreated: AugmentedEvent<ApiType, [collectionId: u128, tokenId: u128, issuer: EpMultiTokensRootOrSigned, initialSupply: u128], { collectionId: u128, tokenId: u128, issuer: EpMultiTokensRootOrSigned, initialSupply: u128 }>;
      /**
       * A token was destroyed
       **/
      TokenDestroyed: AugmentedEvent<ApiType, [collectionId: u128, tokenId: u128, caller: AccountId32], { collectionId: u128, tokenId: u128, caller: AccountId32 }>;
      /**
       * A token was mutated
       **/
      TokenMutated: AugmentedEvent<ApiType, [collectionId: u128, tokenId: u128, mutation: EpMultiTokensTokenDefaultTokenMutation], { collectionId: u128, tokenId: u128, mutation: EpMultiTokensTokenDefaultTokenMutation }>;
      /**
       * Token storage was set to `value`
       **/
      TokenUpdated: AugmentedEvent<ApiType, [collectionId: u128, tokenId: u128, value: Option<EpMultiTokensToken>], { collectionId: u128, tokenId: u128, value: Option<EpMultiTokensToken> }>;
      /**
       * Units of a token were transferred
       **/
      Transferred: AugmentedEvent<ApiType, [collectionId: u128, tokenId: u128, operator: AccountId32, from: AccountId32, to: AccountId32, amount: u128], { collectionId: u128, tokenId: u128, operator: AccountId32, from: AccountId32, to: AccountId32, amount: u128 }>;
      /**
       * An unapproval took place. If `token_id` is `None`, it applies to the collection.
       **/
      Unapproved: AugmentedEvent<ApiType, [collectionId: u128, tokenId: Option<u128>, owner: AccountId32, operator: AccountId32], { collectionId: u128, tokenId: Option<u128>, owner: AccountId32, operator: AccountId32 }>;
      /**
       * Token units were unreserved
       **/
      Unreserved: AugmentedEvent<ApiType, [collectionId: u128, tokenId: u128, accountId: AccountId32, amount: u128, reserveId: Option<U8aFixed>], { collectionId: u128, tokenId: u128, accountId: AccountId32, amount: u128, reserveId: Option<U8aFixed> }>;
      /**
       * Token units were withdrawn
       **/
      Withdraw: AugmentedEvent<ApiType, [collectionId: u128, tokenId: u128, accountId: AccountId32, amount: u128], { collectionId: u128, tokenId: u128, accountId: AccountId32, amount: u128 }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    ormlXcm: {
      /**
       * XCM message sent. \[to, message\]
       **/
      Sent: AugmentedEvent<ApiType, [to: StagingXcmV4Location, message: StagingXcmV4Xcm], { to: StagingXcmV4Location, message: StagingXcmV4Xcm }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    parachainSystem: {
      /**
       * Downward messages were processed using the given weight.
       **/
      DownwardMessagesProcessed: AugmentedEvent<ApiType, [weightUsed: SpWeightsWeightV2Weight, dmqHead: H256], { weightUsed: SpWeightsWeightV2Weight, dmqHead: H256 }>;
      /**
       * Some downward messages have been received and will be processed.
       **/
      DownwardMessagesReceived: AugmentedEvent<ApiType, [count: u32], { count: u32 }>;
      /**
       * An upward message was sent to the relay chain.
       **/
      UpwardMessageSent: AugmentedEvent<ApiType, [messageHash: Option<U8aFixed>], { messageHash: Option<U8aFixed> }>;
      /**
       * The validation function was applied as of the contained relay chain block number.
       **/
      ValidationFunctionApplied: AugmentedEvent<ApiType, [relayChainBlockNum: u32], { relayChainBlockNum: u32 }>;
      /**
       * The relay-chain aborted the upgrade process.
       **/
      ValidationFunctionDiscarded: AugmentedEvent<ApiType, []>;
      /**
       * The validation function has been scheduled to apply.
       **/
      ValidationFunctionStored: AugmentedEvent<ApiType, []>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    polkadotXcm: {
      /**
       * Some assets have been claimed from an asset trap
       **/
      AssetsClaimed: AugmentedEvent<ApiType, [hash_: H256, origin: StagingXcmV4Location, assets: XcmVersionedAssets], { hash_: H256, origin: StagingXcmV4Location, assets: XcmVersionedAssets }>;
      /**
       * Some assets have been placed in an asset trap.
       **/
      AssetsTrapped: AugmentedEvent<ApiType, [hash_: H256, origin: StagingXcmV4Location, assets: XcmVersionedAssets], { hash_: H256, origin: StagingXcmV4Location, assets: XcmVersionedAssets }>;
      /**
       * Execution of an XCM message was attempted.
       **/
      Attempted: AugmentedEvent<ApiType, [outcome: StagingXcmV4TraitsOutcome], { outcome: StagingXcmV4TraitsOutcome }>;
      /**
       * Fees were paid from a location for an operation (often for using `SendXcm`).
       **/
      FeesPaid: AugmentedEvent<ApiType, [paying: StagingXcmV4Location, fees: StagingXcmV4AssetAssets], { paying: StagingXcmV4Location, fees: StagingXcmV4AssetAssets }>;
      /**
       * Expected query response has been received but the querier location of the response does
       * not match the expected. The query remains registered for a later, valid, response to
       * be received and acted upon.
       **/
      InvalidQuerier: AugmentedEvent<ApiType, [origin: StagingXcmV4Location, queryId: u64, expectedQuerier: StagingXcmV4Location, maybeActualQuerier: Option<StagingXcmV4Location>], { origin: StagingXcmV4Location, queryId: u64, expectedQuerier: StagingXcmV4Location, maybeActualQuerier: Option<StagingXcmV4Location> }>;
      /**
       * Expected query response has been received but the expected querier location placed in
       * storage by this runtime previously cannot be decoded. The query remains registered.
       * 
       * This is unexpected (since a location placed in storage in a previously executing
       * runtime should be readable prior to query timeout) and dangerous since the possibly
       * valid response will be dropped. Manual governance intervention is probably going to be
       * needed.
       **/
      InvalidQuerierVersion: AugmentedEvent<ApiType, [origin: StagingXcmV4Location, queryId: u64], { origin: StagingXcmV4Location, queryId: u64 }>;
      /**
       * Expected query response has been received but the origin location of the response does
       * not match that expected. The query remains registered for a later, valid, response to
       * be received and acted upon.
       **/
      InvalidResponder: AugmentedEvent<ApiType, [origin: StagingXcmV4Location, queryId: u64, expectedLocation: Option<StagingXcmV4Location>], { origin: StagingXcmV4Location, queryId: u64, expectedLocation: Option<StagingXcmV4Location> }>;
      /**
       * Expected query response has been received but the expected origin location placed in
       * storage by this runtime previously cannot be decoded. The query remains registered.
       * 
       * This is unexpected (since a location placed in storage in a previously executing
       * runtime should be readable prior to query timeout) and dangerous since the possibly
       * valid response will be dropped. Manual governance intervention is probably going to be
       * needed.
       **/
      InvalidResponderVersion: AugmentedEvent<ApiType, [origin: StagingXcmV4Location, queryId: u64], { origin: StagingXcmV4Location, queryId: u64 }>;
      /**
       * Query response has been received and query is removed. The registered notification has
       * been dispatched and executed successfully.
       **/
      Notified: AugmentedEvent<ApiType, [queryId: u64, palletIndex: u8, callIndex: u8], { queryId: u64, palletIndex: u8, callIndex: u8 }>;
      /**
       * Query response has been received and query is removed. The dispatch was unable to be
       * decoded into a `Call`; this might be due to dispatch function having a signature which
       * is not `(origin, QueryId, Response)`.
       **/
      NotifyDecodeFailed: AugmentedEvent<ApiType, [queryId: u64, palletIndex: u8, callIndex: u8], { queryId: u64, palletIndex: u8, callIndex: u8 }>;
      /**
       * Query response has been received and query is removed. There was a general error with
       * dispatching the notification call.
       **/
      NotifyDispatchError: AugmentedEvent<ApiType, [queryId: u64, palletIndex: u8, callIndex: u8], { queryId: u64, palletIndex: u8, callIndex: u8 }>;
      /**
       * Query response has been received and query is removed. The registered notification
       * could not be dispatched because the dispatch weight is greater than the maximum weight
       * originally budgeted by this runtime for the query result.
       **/
      NotifyOverweight: AugmentedEvent<ApiType, [queryId: u64, palletIndex: u8, callIndex: u8, actualWeight: SpWeightsWeightV2Weight, maxBudgetedWeight: SpWeightsWeightV2Weight], { queryId: u64, palletIndex: u8, callIndex: u8, actualWeight: SpWeightsWeightV2Weight, maxBudgetedWeight: SpWeightsWeightV2Weight }>;
      /**
       * A given location which had a version change subscription was dropped owing to an error
       * migrating the location to our new XCM format.
       **/
      NotifyTargetMigrationFail: AugmentedEvent<ApiType, [location: XcmVersionedLocation, queryId: u64], { location: XcmVersionedLocation, queryId: u64 }>;
      /**
       * A given location which had a version change subscription was dropped owing to an error
       * sending the notification to it.
       **/
      NotifyTargetSendFail: AugmentedEvent<ApiType, [location: StagingXcmV4Location, queryId: u64, error: XcmV3TraitsError], { location: StagingXcmV4Location, queryId: u64, error: XcmV3TraitsError }>;
      /**
       * Query response has been received and is ready for taking with `take_response`. There is
       * no registered notification call.
       **/
      ResponseReady: AugmentedEvent<ApiType, [queryId: u64, response: StagingXcmV4Response], { queryId: u64, response: StagingXcmV4Response }>;
      /**
       * Received query response has been read and removed.
       **/
      ResponseTaken: AugmentedEvent<ApiType, [queryId: u64], { queryId: u64 }>;
      /**
       * A XCM message was sent.
       **/
      Sent: AugmentedEvent<ApiType, [origin: StagingXcmV4Location, destination: StagingXcmV4Location, message: StagingXcmV4Xcm, messageId: U8aFixed], { origin: StagingXcmV4Location, destination: StagingXcmV4Location, message: StagingXcmV4Xcm, messageId: U8aFixed }>;
      /**
       * The supported version of a location has been changed. This might be through an
       * automatic notification or a manual intervention.
       **/
      SupportedVersionChanged: AugmentedEvent<ApiType, [location: StagingXcmV4Location, version: u32], { location: StagingXcmV4Location, version: u32 }>;
      /**
       * Query response received which does not match a registered query. This may be because a
       * matching query was never registered, it may be because it is a duplicate response, or
       * because the query timed out.
       **/
      UnexpectedResponse: AugmentedEvent<ApiType, [origin: StagingXcmV4Location, queryId: u64], { origin: StagingXcmV4Location, queryId: u64 }>;
      /**
       * An XCM version change notification message has been attempted to be sent.
       * 
       * The cost of sending it (borne by the chain) is included.
       **/
      VersionChangeNotified: AugmentedEvent<ApiType, [destination: StagingXcmV4Location, result: u32, cost: StagingXcmV4AssetAssets, messageId: U8aFixed], { destination: StagingXcmV4Location, result: u32, cost: StagingXcmV4AssetAssets, messageId: U8aFixed }>;
      /**
       * A XCM version migration finished.
       **/
      VersionMigrationFinished: AugmentedEvent<ApiType, [version: u32], { version: u32 }>;
      /**
       * We have requested that a remote chain send us XCM version change notifications.
       **/
      VersionNotifyRequested: AugmentedEvent<ApiType, [destination: StagingXcmV4Location, cost: StagingXcmV4AssetAssets, messageId: U8aFixed], { destination: StagingXcmV4Location, cost: StagingXcmV4AssetAssets, messageId: U8aFixed }>;
      /**
       * A remote has requested XCM version change notification from us and we have honored it.
       * A version information message is sent to them and its cost is included.
       **/
      VersionNotifyStarted: AugmentedEvent<ApiType, [destination: StagingXcmV4Location, cost: StagingXcmV4AssetAssets, messageId: U8aFixed], { destination: StagingXcmV4Location, cost: StagingXcmV4AssetAssets, messageId: U8aFixed }>;
      /**
       * We have requested that a remote chain stops sending us XCM version change
       * notifications.
       **/
      VersionNotifyUnrequested: AugmentedEvent<ApiType, [destination: StagingXcmV4Location, cost: StagingXcmV4AssetAssets, messageId: U8aFixed], { destination: StagingXcmV4Location, cost: StagingXcmV4AssetAssets, messageId: U8aFixed }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    pools: {
      /**
       * Pools storage was modified by [`PoolsMutation`]
       **/
      PoolsMutated: AugmentedEvent<ApiType, [PalletPoolsPoolsMutation]>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    preimage: {
      /**
       * A preimage has ben cleared.
       **/
      Cleared: AugmentedEvent<ApiType, [hash_: H256], { hash_: H256 }>;
      /**
       * A preimage has been noted.
       **/
      Noted: AugmentedEvent<ApiType, [hash_: H256], { hash_: H256 }>;
      /**
       * A preimage has been requested.
       **/
      Requested: AugmentedEvent<ApiType, [hash_: H256], { hash_: H256 }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    proxy: {
      /**
       * An announcement was placed to make a call in the future.
       **/
      Announced: AugmentedEvent<ApiType, [real: AccountId32, proxy: AccountId32, callHash: H256], { real: AccountId32, proxy: AccountId32, callHash: H256 }>;
      /**
       * A proxy was added.
       **/
      ProxyAdded: AugmentedEvent<ApiType, [delegator: AccountId32, delegatee: AccountId32, proxyType: RuntimeCommonImplsProxyProxyType, delay: u32], { delegator: AccountId32, delegatee: AccountId32, proxyType: RuntimeCommonImplsProxyProxyType, delay: u32 }>;
      /**
       * A proxy was executed correctly, with the given.
       **/
      ProxyExecuted: AugmentedEvent<ApiType, [result: Result<Null, SpRuntimeDispatchError>], { result: Result<Null, SpRuntimeDispatchError> }>;
      /**
       * A proxy was removed.
       **/
      ProxyRemoved: AugmentedEvent<ApiType, [delegator: AccountId32, delegatee: AccountId32, proxyType: RuntimeCommonImplsProxyProxyType, delay: u32], { delegator: AccountId32, delegatee: AccountId32, proxyType: RuntimeCommonImplsProxyProxyType, delay: u32 }>;
      /**
       * A pure account has been created by new proxy with given
       * disambiguation index and proxy type.
       **/
      PureCreated: AugmentedEvent<ApiType, [pure: AccountId32, who: AccountId32, proxyType: RuntimeCommonImplsProxyProxyType, disambiguationIndex: u16], { pure: AccountId32, who: AccountId32, proxyType: RuntimeCommonImplsProxyProxyType, disambiguationIndex: u16 }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    safeMode: {
      /**
       * Could not hold funds for entering or extending the safe-mode.
       * 
       * This error comes from the underlying `Currency`.
       **/
      CannotDeposit: AugmentedEvent<ApiType, []>;
      /**
       * Could not release funds for entering or extending the safe-mode.
       * 
       * This error comes from the underlying `Currency`.
       **/
      CannotRelease: AugmentedEvent<ApiType, []>;
      /**
       * An account reserved funds for either entering or extending the safe-mode.
       **/
      DepositPlaced: AugmentedEvent<ApiType, [account: AccountId32, amount: u128], { account: AccountId32, amount: u128 }>;
      /**
       * An account had a reserve released that was reserved.
       **/
      DepositReleased: AugmentedEvent<ApiType, [account: AccountId32, amount: u128], { account: AccountId32, amount: u128 }>;
      /**
       * An account had reserve slashed that was reserved.
       **/
      DepositSlashed: AugmentedEvent<ApiType, [account: AccountId32, amount: u128], { account: AccountId32, amount: u128 }>;
      /**
       * The safe-mode was entered until inclusively this block.
       **/
      Entered: AugmentedEvent<ApiType, [until: u32], { until: u32 }>;
      /**
       * Exited the safe-mode for a specific reason.
       **/
      Exited: AugmentedEvent<ApiType, [reason: PalletSafeModeExitReason], { reason: PalletSafeModeExitReason }>;
      /**
       * The safe-mode was extended until inclusively this block.
       **/
      Extended: AugmentedEvent<ApiType, [until: u32], { until: u32 }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    scheduler: {
      /**
       * The call for the provided hash was not found so the task has been aborted.
       **/
      CallUnavailable: AugmentedEvent<ApiType, [task: ITuple<[u32, u32]>, id: Option<U8aFixed>], { task: ITuple<[u32, u32]>, id: Option<U8aFixed> }>;
      /**
       * Canceled some task.
       **/
      Canceled: AugmentedEvent<ApiType, [when: u32, index: u32], { when: u32, index: u32 }>;
      /**
       * Dispatched some task.
       **/
      Dispatched: AugmentedEvent<ApiType, [task: ITuple<[u32, u32]>, id: Option<U8aFixed>, result: Result<Null, SpRuntimeDispatchError>], { task: ITuple<[u32, u32]>, id: Option<U8aFixed>, result: Result<Null, SpRuntimeDispatchError> }>;
      /**
       * The given task was unable to be renewed since the agenda is full at that block.
       **/
      PeriodicFailed: AugmentedEvent<ApiType, [task: ITuple<[u32, u32]>, id: Option<U8aFixed>], { task: ITuple<[u32, u32]>, id: Option<U8aFixed> }>;
      /**
       * The given task can never be executed since it is overweight.
       **/
      PermanentlyOverweight: AugmentedEvent<ApiType, [task: ITuple<[u32, u32]>, id: Option<U8aFixed>], { task: ITuple<[u32, u32]>, id: Option<U8aFixed> }>;
      /**
       * Cancel a retry configuration for some task.
       **/
      RetryCancelled: AugmentedEvent<ApiType, [task: ITuple<[u32, u32]>, id: Option<U8aFixed>], { task: ITuple<[u32, u32]>, id: Option<U8aFixed> }>;
      /**
       * The given task was unable to be retried since the agenda is full at that block or there
       * was not enough weight to reschedule it.
       **/
      RetryFailed: AugmentedEvent<ApiType, [task: ITuple<[u32, u32]>, id: Option<U8aFixed>], { task: ITuple<[u32, u32]>, id: Option<U8aFixed> }>;
      /**
       * Set a retry configuration for some task.
       **/
      RetrySet: AugmentedEvent<ApiType, [task: ITuple<[u32, u32]>, id: Option<U8aFixed>, period: u32, retries: u8], { task: ITuple<[u32, u32]>, id: Option<U8aFixed>, period: u32, retries: u8 }>;
      /**
       * Scheduled some task.
       **/
      Scheduled: AugmentedEvent<ApiType, [when: u32, index: u32], { when: u32, index: u32 }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    session: {
      /**
       * New session has happened. Note that the argument is the session index, not the
       * block number as the type might suggest.
       **/
      NewSession: AugmentedEvent<ApiType, [sessionIndex: u32], { sessionIndex: u32 }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    system: {
      /**
       * `:code` was updated.
       **/
      CodeUpdated: AugmentedEvent<ApiType, []>;
      /**
       * An extrinsic failed.
       **/
      ExtrinsicFailed: AugmentedEvent<ApiType, [dispatchError: SpRuntimeDispatchError, dispatchInfo: FrameSupportDispatchDispatchInfo], { dispatchError: SpRuntimeDispatchError, dispatchInfo: FrameSupportDispatchDispatchInfo }>;
      /**
       * An extrinsic completed successfully.
       **/
      ExtrinsicSuccess: AugmentedEvent<ApiType, [dispatchInfo: FrameSupportDispatchDispatchInfo], { dispatchInfo: FrameSupportDispatchDispatchInfo }>;
      /**
       * An account was reaped.
       **/
      KilledAccount: AugmentedEvent<ApiType, [account: AccountId32], { account: AccountId32 }>;
      /**
       * A new account was created.
       **/
      NewAccount: AugmentedEvent<ApiType, [account: AccountId32], { account: AccountId32 }>;
      /**
       * On on-chain remark happened.
       **/
      Remarked: AugmentedEvent<ApiType, [sender: AccountId32, hash_: H256], { sender: AccountId32, hash_: H256 }>;
      /**
       * An upgrade was authorized.
       **/
      UpgradeAuthorized: AugmentedEvent<ApiType, [codeHash: H256, checkVersion: bool], { codeHash: H256, checkVersion: bool }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    technicalCommittee: {
      /**
       * A motion was approved by the required threshold.
       **/
      Approved: AugmentedEvent<ApiType, [proposalHash: H256], { proposalHash: H256 }>;
      /**
       * A proposal was closed because its threshold was reached or after its duration was up.
       **/
      Closed: AugmentedEvent<ApiType, [proposalHash: H256, yes: u32, no: u32], { proposalHash: H256, yes: u32, no: u32 }>;
      /**
       * A motion was not approved by the required threshold.
       **/
      Disapproved: AugmentedEvent<ApiType, [proposalHash: H256], { proposalHash: H256 }>;
      /**
       * A motion was executed; result will be `Ok` if it returned without error.
       **/
      Executed: AugmentedEvent<ApiType, [proposalHash: H256, result: Result<Null, SpRuntimeDispatchError>], { proposalHash: H256, result: Result<Null, SpRuntimeDispatchError> }>;
      /**
       * A single member did some action; result will be `Ok` if it returned without error.
       **/
      MemberExecuted: AugmentedEvent<ApiType, [proposalHash: H256, result: Result<Null, SpRuntimeDispatchError>], { proposalHash: H256, result: Result<Null, SpRuntimeDispatchError> }>;
      /**
       * A motion (given hash) has been proposed (by given account) with a threshold (given
       * `MemberCount`).
       **/
      Proposed: AugmentedEvent<ApiType, [account: AccountId32, proposalIndex: u32, proposalHash: H256, threshold: u32], { account: AccountId32, proposalIndex: u32, proposalHash: H256, threshold: u32 }>;
      /**
       * A motion (given hash) has been voted on by given account, leaving
       * a tally (yes votes and no votes given respectively as `MemberCount`).
       **/
      Voted: AugmentedEvent<ApiType, [account: AccountId32, proposalHash: H256, voted: bool, yes: u32, no: u32], { account: AccountId32, proposalHash: H256, voted: bool, yes: u32, no: u32 }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    technicalMembership: {
      /**
       * Phantom member, never used.
       **/
      Dummy: AugmentedEvent<ApiType, []>;
      /**
       * One of the members' keys changed.
       **/
      KeyChanged: AugmentedEvent<ApiType, []>;
      /**
       * The given member was added; see the transaction for who.
       **/
      MemberAdded: AugmentedEvent<ApiType, []>;
      /**
       * The given member was removed; see the transaction for who.
       **/
      MemberRemoved: AugmentedEvent<ApiType, []>;
      /**
       * The membership was reset; see the transaction for who the new set is.
       **/
      MembersReset: AugmentedEvent<ApiType, []>;
      /**
       * Two members were swapped; see the transaction for who.
       **/
      MembersSwapped: AugmentedEvent<ApiType, []>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    transactionPayment: {
      /**
       * A transaction fee `actual_fee`, of which `tip` was added to the minimum inclusion fee,
       * has been paid by `who`.
       **/
      TransactionFeePaid: AugmentedEvent<ApiType, [who: AccountId32, actualFee: u128, tip: u128], { who: AccountId32, actualFee: u128, tip: u128 }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    unknownTokens: {
      /**
       * Deposit success.
       **/
      Deposited: AugmentedEvent<ApiType, [asset: StagingXcmV4Asset, who: StagingXcmV4Location], { asset: StagingXcmV4Asset, who: StagingXcmV4Location }>;
      /**
       * Withdraw success.
       **/
      Withdrawn: AugmentedEvent<ApiType, [asset: StagingXcmV4Asset, who: StagingXcmV4Location], { asset: StagingXcmV4Asset, who: StagingXcmV4Location }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    utility: {
      /**
       * Batch of dispatches completed fully with no error.
       **/
      BatchCompleted: AugmentedEvent<ApiType, []>;
      /**
       * Batch of dispatches completed but has errors.
       **/
      BatchCompletedWithErrors: AugmentedEvent<ApiType, []>;
      /**
       * Batch of dispatches did not complete fully. Index of first failing dispatch given, as
       * well as the error.
       **/
      BatchInterrupted: AugmentedEvent<ApiType, [index: u32, error: SpRuntimeDispatchError], { index: u32, error: SpRuntimeDispatchError }>;
      /**
       * A call was dispatched.
       **/
      DispatchedAs: AugmentedEvent<ApiType, [result: Result<Null, SpRuntimeDispatchError>], { result: Result<Null, SpRuntimeDispatchError> }>;
      /**
       * A single item within a Batch of dispatches has completed with no error.
       **/
      ItemCompleted: AugmentedEvent<ApiType, []>;
      /**
       * A single item within a Batch of dispatches has completed with error.
       **/
      ItemFailed: AugmentedEvent<ApiType, [error: SpRuntimeDispatchError], { error: SpRuntimeDispatchError }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    xcmpQueue: {
      /**
       * An HRMP message was sent to a sibling parachain.
       **/
      XcmpMessageSent: AugmentedEvent<ApiType, [messageHash: U8aFixed], { messageHash: U8aFixed }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    xTokens: {
      /**
       * Transferred `Asset` with fee.
       **/
      TransferredAssets: AugmentedEvent<ApiType, [sender: AccountId32, assets: StagingXcmV4AssetAssets, fee: StagingXcmV4Asset, dest: StagingXcmV4Location], { sender: AccountId32, assets: StagingXcmV4AssetAssets, fee: StagingXcmV4Asset, dest: StagingXcmV4Location }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
  } // AugmentedEvents
} // declare module
