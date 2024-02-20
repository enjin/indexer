// Auto-generated via `yarn polkadot-types-from-chain`, do not edit
/* eslint-disable */

// import type lookup before we augment - in some environments
// this is required to allow for ambient/previous definitions
import '@polkadot/api-base/types/events'

import type { ApiTypes, AugmentedEvent } from '@polkadot/api-base/types'
import type { Bytes, Null, Option, Result, U8aFixed, Vec, bool, u128, u32, u64, u8 } from '@polkadot/types-codec'
import type { ITuple } from '@polkadot/types-codec/types'
import type { AccountId32, H160, H256, Perbill } from '@polkadot/types/interfaces/runtime'
import type {
    EpCoreFrameMigrationsMigrationStage,
    EpMultiTokensCollection,
    EpMultiTokensCollectionDefaultCollectionMutation,
    EpMultiTokensFreeze,
    EpMultiTokensRootOrSigned,
    EpMultiTokensToken,
    EpMultiTokensTokenDefaultTokenMutation,
    FrameSupportDispatchDispatchInfo,
    FrameSupportTokensMiscBalanceStatus,
    MatrixPalletXcmMinimumWeightFeePair,
    PalletDemocracyMetadataOwner,
    PalletDemocracyVoteAccountVote,
    PalletDemocracyVoteThreshold,
    PalletFuelTanksConsumption,
    PalletFuelTanksImplsDefaultTankMutation,
    PalletFuelTanksRulesDispatchRuleKind,
    PalletMarketplaceFeaturesAuctionBid,
    PalletMarketplaceFeaturesListing,
    PalletMultiTokensFeaturesClaimAssetIdWithEth,
    PalletMultiTokensFeaturesCollectionTypesCollectionAccount,
    PalletMultiTokensFeaturesTokenTypesTokenAccount,
    PalletMultisigTimepoint,
    PalletPoolsPoolsMutation,
    SpRuntimeDispatchError,
    SpWeightsWeightV2Weight,
    XcmV3MultiAsset,
    XcmV3MultiLocation,
    XcmV3MultiassetMultiAssets,
    XcmV3Response,
    XcmV3TraitsError,
    XcmV3TraitsOutcome,
    XcmV3Xcm,
    XcmVersionedMultiAssets,
    XcmVersionedMultiLocation,
} from '@polkadot/types/lookup'

export type __AugmentedEvent<ApiType extends ApiTypes> = AugmentedEvent<ApiType>

declare module '@polkadot/api-base/types/events' {
    interface AugmentedEvents<ApiType extends ApiTypes> {
        balances: {
            /**
             * A balance was set by root.
             **/
            BalanceSet: AugmentedEvent<ApiType, [who: AccountId32, free: u128], { who: AccountId32; free: u128 }>
            /**
             * Some amount was burned from an account.
             **/
            Burned: AugmentedEvent<ApiType, [who: AccountId32, amount: u128], { who: AccountId32; amount: u128 }>
            /**
             * Some amount was deposited (e.g. for transaction fees).
             **/
            Deposit: AugmentedEvent<ApiType, [who: AccountId32, amount: u128], { who: AccountId32; amount: u128 }>
            /**
             * An account was removed whose balance was non-zero but below ExistentialDeposit,
             * resulting in an outright loss.
             **/
            DustLost: AugmentedEvent<ApiType, [account: AccountId32, amount: u128], { account: AccountId32; amount: u128 }>
            /**
             * An account was created with some free balance.
             **/
            Endowed: AugmentedEvent<
                ApiType,
                [account: AccountId32, freeBalance: u128],
                { account: AccountId32; freeBalance: u128 }
            >
            /**
             * Some balance was frozen.
             **/
            Frozen: AugmentedEvent<ApiType, [who: AccountId32, amount: u128], { who: AccountId32; amount: u128 }>
            /**
             * Total issuance was increased by `amount`, creating a credit to be balanced.
             **/
            Issued: AugmentedEvent<ApiType, [amount: u128], { amount: u128 }>
            /**
             * Some balance was locked.
             **/
            Locked: AugmentedEvent<ApiType, [who: AccountId32, amount: u128], { who: AccountId32; amount: u128 }>
            /**
             * Some amount was minted into an account.
             **/
            Minted: AugmentedEvent<ApiType, [who: AccountId32, amount: u128], { who: AccountId32; amount: u128 }>
            /**
             * Total issuance was decreased by `amount`, creating a debt to be balanced.
             **/
            Rescinded: AugmentedEvent<ApiType, [amount: u128], { amount: u128 }>
            /**
             * Some balance was reserved (moved from free to reserved).
             **/
            Reserved: AugmentedEvent<ApiType, [who: AccountId32, amount: u128], { who: AccountId32; amount: u128 }>
            /**
             * Some balance was moved from the reserve of the first account to the second account.
             * Final argument indicates the destination balance type.
             **/
            ReserveRepatriated: AugmentedEvent<
                ApiType,
                [from: AccountId32, to: AccountId32, amount: u128, destinationStatus: FrameSupportTokensMiscBalanceStatus],
                { from: AccountId32; to: AccountId32; amount: u128; destinationStatus: FrameSupportTokensMiscBalanceStatus }
            >
            /**
             * Some amount was restored into an account.
             **/
            Restored: AugmentedEvent<ApiType, [who: AccountId32, amount: u128], { who: AccountId32; amount: u128 }>
            /**
             * Some amount was removed from the account (e.g. for misbehavior).
             **/
            Slashed: AugmentedEvent<ApiType, [who: AccountId32, amount: u128], { who: AccountId32; amount: u128 }>
            /**
             * Some amount was suspended from an account (it can be restored later).
             **/
            Suspended: AugmentedEvent<ApiType, [who: AccountId32, amount: u128], { who: AccountId32; amount: u128 }>
            /**
             * Some balance was thawed.
             **/
            Thawed: AugmentedEvent<ApiType, [who: AccountId32, amount: u128], { who: AccountId32; amount: u128 }>
            /**
             * Transfer succeeded.
             **/
            Transfer: AugmentedEvent<
                ApiType,
                [from: AccountId32, to: AccountId32, amount: u128],
                { from: AccountId32; to: AccountId32; amount: u128 }
            >
            /**
             * Some balance was unlocked.
             **/
            Unlocked: AugmentedEvent<ApiType, [who: AccountId32, amount: u128], { who: AccountId32; amount: u128 }>
            /**
             * Some balance was unreserved (moved from reserved to free).
             **/
            Unreserved: AugmentedEvent<ApiType, [who: AccountId32, amount: u128], { who: AccountId32; amount: u128 }>
            /**
             * An account was upgraded.
             **/
            Upgraded: AugmentedEvent<ApiType, [who: AccountId32], { who: AccountId32 }>
            /**
             * Some amount was withdrawn from the account (e.g. for transaction fees).
             **/
            Withdraw: AugmentedEvent<ApiType, [who: AccountId32, amount: u128], { who: AccountId32; amount: u128 }>
            /**
             * Generic event
             **/
            [key: string]: AugmentedEvent<ApiType>
        }
        bounties: {
            /**
             * A bounty is awarded to a beneficiary.
             **/
            BountyAwarded: AugmentedEvent<
                ApiType,
                [index: u32, beneficiary: AccountId32],
                { index: u32; beneficiary: AccountId32 }
            >
            /**
             * A bounty proposal is funded and became active.
             **/
            BountyBecameActive: AugmentedEvent<ApiType, [index: u32], { index: u32 }>
            /**
             * A bounty is cancelled.
             **/
            BountyCanceled: AugmentedEvent<ApiType, [index: u32], { index: u32 }>
            /**
             * A bounty is claimed by beneficiary.
             **/
            BountyClaimed: AugmentedEvent<
                ApiType,
                [index: u32, payout: u128, beneficiary: AccountId32],
                { index: u32; payout: u128; beneficiary: AccountId32 }
            >
            /**
             * A bounty expiry is extended.
             **/
            BountyExtended: AugmentedEvent<ApiType, [index: u32], { index: u32 }>
            /**
             * New bounty proposal.
             **/
            BountyProposed: AugmentedEvent<ApiType, [index: u32], { index: u32 }>
            /**
             * A bounty proposal was rejected; funds were slashed.
             **/
            BountyRejected: AugmentedEvent<ApiType, [index: u32, bond: u128], { index: u32; bond: u128 }>
            /**
             * Generic event
             **/
            [key: string]: AugmentedEvent<ApiType>
        }
        claims: {
            /**
             * Someone claimed some ENJ2 from EFI. `[who, ethereum_address, amount]`
             **/
            Claimed: AugmentedEvent<
                ApiType,
                [who: AccountId32, ethereumAddress: Option<H160>, amount: u128],
                { who: AccountId32; ethereumAddress: Option<H160>; amount: u128 }
            >
            /**
             * Claim has been minted for someone by the root. `[who, amount]`
             **/
            ClaimMinted: AugmentedEvent<ApiType, [who: H160, amount: u128], { who: H160; amount: u128 }>
            /**
             * Someone's claim has been moved to another address. `[old, new]`
             **/
            ClaimMoved: AugmentedEvent<ApiType, [old: H160, new_: H160], { old: H160; new_: H160 }>
            /**
             * Someone's claim has been rejected. `[account, transaction_hash]`
             **/
            ClaimRejected: AugmentedEvent<
                ApiType,
                [account: H160, transactionHash: H256],
                { account: H160; transactionHash: H256 }
            >
            /**
             * Claim has been requested by an account through the Relayer. `[who, amount,
             * transaction_hash, is_efi_token]`
             **/
            ClaimRequested: AugmentedEvent<
                ApiType,
                [who: H160, amountBurned: u128, transactionHash: H256, isEfiToken: bool, amountClaimable: u128],
                { who: H160; amountBurned: u128; transactionHash: H256; isEfiToken: bool; amountClaimable: u128 }
            >
            /**
             * Delay time for claim is set. `[delay_time]`
             **/
            DelayTimeForClaimSet: AugmentedEvent<ApiType, [delayTime: u32], { delayTime: u32 }>
            /**
             * Claims have been processed for the Ethereum block by the Relayer.
             **/
            EthereumBlocksProcessed: AugmentedEvent<ApiType, [blockNumber: u32], { blockNumber: u32 }>
            /**
             * Exchange rate is set. `[exchange_rate]`
             **/
            ExchangeRateSet: AugmentedEvent<ApiType, [exchangeRate: Perbill], { exchangeRate: Perbill }>
            /**
             * Generic event
             **/
            [key: string]: AugmentedEvent<ApiType>
        }
        collatorStaking: {
            /**
             * A new candidate joined the list of candidates.
             **/
            CandidateJoined: AugmentedEvent<
                ApiType,
                [accountId: AccountId32, amount: u128, rewardsCut: Perbill],
                { accountId: AccountId32; amount: u128; rewardsCut: Perbill }
            >
            /**
             * Candidate was removed.
             **/
            CandidateRemoved: AugmentedEvent<ApiType, [accountId: AccountId32], { accountId: AccountId32 }>
            /**
             * A candidate has been selected to become a collator for the current round.
             **/
            CollatorSelected: AugmentedEvent<ApiType, [accountId: AccountId32], { accountId: AccountId32 }>
            /**
             * A new list of invulnerables has been set by root.
             **/
            NewInvulnerables: AugmentedEvent<ApiType, [new_: Vec<AccountId32>], { new_: Vec<AccountId32> }>
            /**
             * A new nomination was registered for a specific candidate.
             **/
            Nominated: AugmentedEvent<
                ApiType,
                [accountId: AccountId32, collatorId: AccountId32, amount: u128],
                { accountId: AccountId32; collatorId: AccountId32; amount: u128 }
            >
            /**
             * Nomination was removed.
             **/
            NominationRemoved: AugmentedEvent<
                ApiType,
                [accountId: AccountId32, collatorId: AccountId32, amount: u128],
                { accountId: AccountId32; collatorId: AccountId32; amount: u128 }
            >
            /**
             * A new round was finalized
             **/
            RoundFinalized: AugmentedEvent<ApiType, [number: u32], { number: u32 }>
            /**
             * Generic event
             **/
            [key: string]: AugmentedEvent<ApiType>
        }
        communityPool: {
            /**
             * Some funds have been allocated.
             **/
            Awarded: AugmentedEvent<
                ApiType,
                [proposalIndex: u32, award: u128, account: AccountId32],
                { proposalIndex: u32; award: u128; account: AccountId32 }
            >
            /**
             * Some of our funds have been burnt.
             **/
            Burnt: AugmentedEvent<ApiType, [burntFunds: u128], { burntFunds: u128 }>
            /**
             * Some funds have been deposited.
             **/
            Deposit: AugmentedEvent<ApiType, [value: u128], { value: u128 }>
            /**
             * New proposal.
             **/
            Proposed: AugmentedEvent<ApiType, [proposalIndex: u32], { proposalIndex: u32 }>
            /**
             * A proposal was rejected; funds were slashed.
             **/
            Rejected: AugmentedEvent<ApiType, [proposalIndex: u32, slashed: u128], { proposalIndex: u32; slashed: u128 }>
            /**
             * Spending has finished; this is the amount that rolls over until next spend.
             **/
            Rollover: AugmentedEvent<ApiType, [rolloverBalance: u128], { rolloverBalance: u128 }>
            /**
             * A new spend proposal has been approved.
             **/
            SpendApproved: AugmentedEvent<
                ApiType,
                [proposalIndex: u32, amount: u128, beneficiary: AccountId32],
                { proposalIndex: u32; amount: u128; beneficiary: AccountId32 }
            >
            /**
             * We have ended a spend period and will now allocate funds.
             **/
            Spending: AugmentedEvent<ApiType, [budgetRemaining: u128], { budgetRemaining: u128 }>
            /**
             * The inactive funds of the pallet have been updated.
             **/
            UpdatedInactive: AugmentedEvent<
                ApiType,
                [reactivated: u128, deactivated: u128],
                { reactivated: u128; deactivated: u128 }
            >
            /**
             * Generic event
             **/
            [key: string]: AugmentedEvent<ApiType>
        }
        council: {
            /**
             * A motion was approved by the required threshold.
             **/
            Approved: AugmentedEvent<ApiType, [proposalHash: H256], { proposalHash: H256 }>
            /**
             * A proposal was closed because its threshold was reached or after its duration was up.
             **/
            Closed: AugmentedEvent<ApiType, [proposalHash: H256, yes: u32, no: u32], { proposalHash: H256; yes: u32; no: u32 }>
            /**
             * A motion was not approved by the required threshold.
             **/
            Disapproved: AugmentedEvent<ApiType, [proposalHash: H256], { proposalHash: H256 }>
            /**
             * A motion was executed; result will be `Ok` if it returned without error.
             **/
            Executed: AugmentedEvent<
                ApiType,
                [proposalHash: H256, result: Result<Null, SpRuntimeDispatchError>],
                { proposalHash: H256; result: Result<Null, SpRuntimeDispatchError> }
            >
            /**
             * A single member did some action; result will be `Ok` if it returned without error.
             **/
            MemberExecuted: AugmentedEvent<
                ApiType,
                [proposalHash: H256, result: Result<Null, SpRuntimeDispatchError>],
                { proposalHash: H256; result: Result<Null, SpRuntimeDispatchError> }
            >
            /**
             * A motion (given hash) has been proposed (by given account) with a threshold (given
             * `MemberCount`).
             **/
            Proposed: AugmentedEvent<
                ApiType,
                [account: AccountId32, proposalIndex: u32, proposalHash: H256, threshold: u32],
                { account: AccountId32; proposalIndex: u32; proposalHash: H256; threshold: u32 }
            >
            /**
             * A motion (given hash) has been voted on by given account, leaving
             * a tally (yes votes and no votes given respectively as `MemberCount`).
             **/
            Voted: AugmentedEvent<
                ApiType,
                [account: AccountId32, proposalHash: H256, voted: bool, yes: u32, no: u32],
                { account: AccountId32; proposalHash: H256; voted: bool; yes: u32; no: u32 }
            >
            /**
             * Generic event
             **/
            [key: string]: AugmentedEvent<ApiType>
        }
        cumulusXcm: {
            /**
             * Downward message executed with the given outcome.
             * \[ id, outcome \]
             **/
            ExecutedDownward: AugmentedEvent<ApiType, [U8aFixed, XcmV3TraitsOutcome]>
            /**
             * Downward message is invalid XCM.
             * \[ id \]
             **/
            InvalidFormat: AugmentedEvent<ApiType, [U8aFixed]>
            /**
             * Downward message is unsupported version of XCM.
             * \[ id \]
             **/
            UnsupportedVersion: AugmentedEvent<ApiType, [U8aFixed]>
            /**
             * Generic event
             **/
            [key: string]: AugmentedEvent<ApiType>
        }
        democracy: {
            /**
             * A proposal_hash has been blacklisted permanently.
             **/
            Blacklisted: AugmentedEvent<ApiType, [proposalHash: H256], { proposalHash: H256 }>
            /**
             * A referendum has been cancelled.
             **/
            Cancelled: AugmentedEvent<ApiType, [refIndex: u32], { refIndex: u32 }>
            /**
             * An account has delegated their vote to another account.
             **/
            Delegated: AugmentedEvent<ApiType, [who: AccountId32, target: AccountId32], { who: AccountId32; target: AccountId32 }>
            /**
             * An external proposal has been tabled.
             **/
            ExternalTabled: AugmentedEvent<ApiType, []>
            /**
             * Metadata for a proposal or a referendum has been cleared.
             **/
            MetadataCleared: AugmentedEvent<
                ApiType,
                [owner: PalletDemocracyMetadataOwner, hash_: H256],
                { owner: PalletDemocracyMetadataOwner; hash_: H256 }
            >
            /**
             * Metadata for a proposal or a referendum has been set.
             **/
            MetadataSet: AugmentedEvent<
                ApiType,
                [owner: PalletDemocracyMetadataOwner, hash_: H256],
                { owner: PalletDemocracyMetadataOwner; hash_: H256 }
            >
            /**
             * Metadata has been transferred to new owner.
             **/
            MetadataTransferred: AugmentedEvent<
                ApiType,
                [prevOwner: PalletDemocracyMetadataOwner, owner: PalletDemocracyMetadataOwner, hash_: H256],
                { prevOwner: PalletDemocracyMetadataOwner; owner: PalletDemocracyMetadataOwner; hash_: H256 }
            >
            /**
             * A proposal has been rejected by referendum.
             **/
            NotPassed: AugmentedEvent<ApiType, [refIndex: u32], { refIndex: u32 }>
            /**
             * A proposal has been approved by referendum.
             **/
            Passed: AugmentedEvent<ApiType, [refIndex: u32], { refIndex: u32 }>
            /**
             * A proposal got canceled.
             **/
            ProposalCanceled: AugmentedEvent<ApiType, [propIndex: u32], { propIndex: u32 }>
            /**
             * A motion has been proposed by a public account.
             **/
            Proposed: AugmentedEvent<ApiType, [proposalIndex: u32, deposit: u128], { proposalIndex: u32; deposit: u128 }>
            /**
             * An account has secconded a proposal
             **/
            Seconded: AugmentedEvent<ApiType, [seconder: AccountId32, propIndex: u32], { seconder: AccountId32; propIndex: u32 }>
            /**
             * A referendum has begun.
             **/
            Started: AugmentedEvent<
                ApiType,
                [refIndex: u32, threshold: PalletDemocracyVoteThreshold],
                { refIndex: u32; threshold: PalletDemocracyVoteThreshold }
            >
            /**
             * A public proposal has been tabled for referendum vote.
             **/
            Tabled: AugmentedEvent<ApiType, [proposalIndex: u32, deposit: u128], { proposalIndex: u32; deposit: u128 }>
            /**
             * An account has cancelled a previous delegation operation.
             **/
            Undelegated: AugmentedEvent<ApiType, [account: AccountId32], { account: AccountId32 }>
            /**
             * An external proposal has been vetoed.
             **/
            Vetoed: AugmentedEvent<
                ApiType,
                [who: AccountId32, proposalHash: H256, until: u32],
                { who: AccountId32; proposalHash: H256; until: u32 }
            >
            /**
             * An account has voted in a referendum
             **/
            Voted: AugmentedEvent<
                ApiType,
                [voter: AccountId32, refIndex: u32, vote: PalletDemocracyVoteAccountVote],
                { voter: AccountId32; refIndex: u32; vote: PalletDemocracyVoteAccountVote }
            >
            /**
             * Generic event
             **/
            [key: string]: AugmentedEvent<ApiType>
        }
        dmpQueue: {
            /**
             * Downward message executed with the given outcome.
             **/
            ExecutedDownward: AugmentedEvent<
                ApiType,
                [messageId: U8aFixed, outcome: XcmV3TraitsOutcome],
                { messageId: U8aFixed; outcome: XcmV3TraitsOutcome }
            >
            /**
             * Downward message is invalid XCM.
             **/
            InvalidFormat: AugmentedEvent<ApiType, [messageId: U8aFixed], { messageId: U8aFixed }>
            /**
             * The maximum number of downward messages was.
             **/
            MaxMessagesExhausted: AugmentedEvent<ApiType, [messageId: U8aFixed], { messageId: U8aFixed }>
            /**
             * Downward message is overweight and was placed in the overweight queue.
             **/
            OverweightEnqueued: AugmentedEvent<
                ApiType,
                [messageId: U8aFixed, overweightIndex: u64, requiredWeight: SpWeightsWeightV2Weight],
                { messageId: U8aFixed; overweightIndex: u64; requiredWeight: SpWeightsWeightV2Weight }
            >
            /**
             * Downward message from the overweight queue was executed.
             **/
            OverweightServiced: AugmentedEvent<
                ApiType,
                [overweightIndex: u64, weightUsed: SpWeightsWeightV2Weight],
                { overweightIndex: u64; weightUsed: SpWeightsWeightV2Weight }
            >
            /**
             * Downward message is unsupported version of XCM.
             **/
            UnsupportedVersion: AugmentedEvent<ApiType, [messageId: U8aFixed], { messageId: U8aFixed }>
            /**
             * The weight limit for handling downward messages was reached.
             **/
            WeightExhausted: AugmentedEvent<
                ApiType,
                [messageId: U8aFixed, remainingWeight: SpWeightsWeightV2Weight, requiredWeight: SpWeightsWeightV2Weight],
                { messageId: U8aFixed; remainingWeight: SpWeightsWeightV2Weight; requiredWeight: SpWeightsWeightV2Weight }
            >
            /**
             * Generic event
             **/
            [key: string]: AugmentedEvent<ApiType>
        }
        extrinsicPause: {
            /**
             * Extrinsic is paused.
             **/
            ExtrinsicPaused: AugmentedEvent<
                ApiType,
                [palletName: Bytes, extrinsicName: Bytes],
                { palletName: Bytes; extrinsicName: Bytes }
            >
            /**
             * Extrinsic is resumed
             **/
            ExtrinsicResumed: AugmentedEvent<
                ApiType,
                [palletName: Bytes, extrinsicName: Bytes],
                { palletName: Bytes; extrinsicName: Bytes }
            >
            /**
             * All pallet extrinsics are paused.
             **/
            PalletPaused: AugmentedEvent<ApiType, [palletName: Bytes], { palletName: Bytes }>
            /**
             * All pallet extrinsics are resumed.
             **/
            PalletResumed: AugmentedEvent<ApiType, [palletName: Bytes], { palletName: Bytes }>
            /**
             * Generic event
             **/
            [key: string]: AugmentedEvent<ApiType>
        }
        fuelTanks: {
            /**
             * An account was added to a [`FuelTank`]
             **/
            AccountAdded: AugmentedEvent<
                ApiType,
                [tankId: AccountId32, userId: AccountId32, tankDeposit: u128, userDeposit: u128, totalReceived: u128],
                { tankId: AccountId32; userId: AccountId32; tankDeposit: u128; userDeposit: u128; totalReceived: u128 }
            >
            /**
             * An account was removed from a [`FuelTank`]
             **/
            AccountRemoved: AugmentedEvent<
                ApiType,
                [tankId: AccountId32, userId: AccountId32],
                { tankId: AccountId32; userId: AccountId32 }
            >
            /**
             * Account data of [`AccountId`](frame_system::Config::AccountId) was removed from
             * [`RuleSetId`](Config::RuleSetId)
             **/
            AccountRuleDataRemoved: AugmentedEvent<
                ApiType,
                [tankId: AccountId32, userId: AccountId32, ruleSetId: u32, ruleKind: PalletFuelTanksRulesDispatchRuleKind],
                { tankId: AccountId32; userId: AccountId32; ruleSetId: u32; ruleKind: PalletFuelTanksRulesDispatchRuleKind }
            >
            /**
             * A call was dispatched through a [`FuelTank`].
             **/
            CallDispatched: AugmentedEvent<
                ApiType,
                [caller: AccountId32, tankId: AccountId32],
                { caller: AccountId32; tankId: AccountId32 }
            >
            /**
             * The consumption for an account was set for a rule set on a [`FuelTank`]
             **/
            ConsumptionSet: AugmentedEvent<
                ApiType,
                [tankId: AccountId32, userId: Option<AccountId32>, ruleSetId: u32, consumption: PalletFuelTanksConsumption],
                { tankId: AccountId32; userId: Option<AccountId32>; ruleSetId: u32; consumption: PalletFuelTanksConsumption }
            >
            /**
             * The dispatch of a call has failed
             **/
            DispatchFailed: AugmentedEvent<
                ApiType,
                [tankId: AccountId32, caller: AccountId32, error: SpRuntimeDispatchError],
                { tankId: AccountId32; caller: AccountId32; error: SpRuntimeDispatchError }
            >
            /**
             * The freeze state change for fuel tank or its rule set was executed in `on_finalize`
             **/
            FreezeStateMutated: AugmentedEvent<
                ApiType,
                [tankId: AccountId32, ruleSetId: Option<u32>, isFrozen: bool],
                { tankId: AccountId32; ruleSetId: Option<u32>; isFrozen: bool }
            >
            /**
             * A new [`FuelTank`] was created.
             **/
            FuelTankCreated: AugmentedEvent<
                ApiType,
                [owner: AccountId32, name: Bytes, tankId: AccountId32],
                { owner: AccountId32; name: Bytes; tankId: AccountId32 }
            >
            /**
             * A [`FuelTank`] was destroyed
             **/
            FuelTankDestroyed: AugmentedEvent<ApiType, [tankId: AccountId32], { tankId: AccountId32 }>
            /**
             * A [`FuelTank`] was mutated
             **/
            FuelTankMutated: AugmentedEvent<
                ApiType,
                [tankId: AccountId32, mutation: PalletFuelTanksImplsDefaultTankMutation],
                { tankId: AccountId32; mutation: PalletFuelTanksImplsDefaultTankMutation }
            >
            /**
             * A new rule set was added to [`FuelTank`]
             **/
            RuleSetInserted: AugmentedEvent<
                ApiType,
                [tankId: AccountId32, ruleSetId: u32],
                { tankId: AccountId32; ruleSetId: u32 }
            >
            /**
             * A rule set was removed from [`FuelTank`]
             **/
            RuleSetRemoved: AugmentedEvent<
                ApiType,
                [tankId: AccountId32, ruleSetId: u32],
                { tankId: AccountId32; ruleSetId: u32 }
            >
            /**
             * Generic event
             **/
            [key: string]: AugmentedEvent<ApiType>
        }
        identity: {
            /**
             * A name was cleared, and the given balance returned.
             **/
            IdentityCleared: AugmentedEvent<ApiType, [who: AccountId32, deposit: u128], { who: AccountId32; deposit: u128 }>
            /**
             * A name was removed and the given balance slashed.
             **/
            IdentityKilled: AugmentedEvent<ApiType, [who: AccountId32, deposit: u128], { who: AccountId32; deposit: u128 }>
            /**
             * A name was set or reset (which will remove all judgements).
             **/
            IdentitySet: AugmentedEvent<ApiType, [who: AccountId32], { who: AccountId32 }>
            /**
             * A judgement was given by a registrar.
             **/
            JudgementGiven: AugmentedEvent<
                ApiType,
                [target: AccountId32, registrarIndex: u32],
                { target: AccountId32; registrarIndex: u32 }
            >
            /**
             * A judgement was asked from a registrar.
             **/
            JudgementRequested: AugmentedEvent<
                ApiType,
                [who: AccountId32, registrarIndex: u32],
                { who: AccountId32; registrarIndex: u32 }
            >
            /**
             * A judgement request was retracted.
             **/
            JudgementUnrequested: AugmentedEvent<
                ApiType,
                [who: AccountId32, registrarIndex: u32],
                { who: AccountId32; registrarIndex: u32 }
            >
            /**
             * A registrar was added.
             **/
            RegistrarAdded: AugmentedEvent<ApiType, [registrarIndex: u32], { registrarIndex: u32 }>
            /**
             * A sub-identity was added to an identity and the deposit paid.
             **/
            SubIdentityAdded: AugmentedEvent<
                ApiType,
                [sub: AccountId32, main: AccountId32, deposit: u128],
                { sub: AccountId32; main: AccountId32; deposit: u128 }
            >
            /**
             * A sub-identity was removed from an identity and the deposit freed.
             **/
            SubIdentityRemoved: AugmentedEvent<
                ApiType,
                [sub: AccountId32, main: AccountId32, deposit: u128],
                { sub: AccountId32; main: AccountId32; deposit: u128 }
            >
            /**
             * A sub-identity was cleared, and the given deposit repatriated from the
             * main identity account to the sub-identity account.
             **/
            SubIdentityRevoked: AugmentedEvent<
                ApiType,
                [sub: AccountId32, main: AccountId32, deposit: u128],
                { sub: AccountId32; main: AccountId32; deposit: u128 }
            >
            /**
             * Generic event
             **/
            [key: string]: AugmentedEvent<ApiType>
        }
        marketplace: {
            /**
             * An auction was finalized
             **/
            AuctionFinalized: AugmentedEvent<
                ApiType,
                [listingId: H256, winningBid: Option<PalletMarketplaceFeaturesAuctionBid>, protocolFee: u128, royalty: u128],
                { listingId: H256; winningBid: Option<PalletMarketplaceFeaturesAuctionBid>; protocolFee: u128; royalty: u128 }
            >
            /**
             * A bid was placed
             **/
            BidPlaced: AugmentedEvent<
                ApiType,
                [listingId: H256, bid: PalletMarketplaceFeaturesAuctionBid],
                { listingId: H256; bid: PalletMarketplaceFeaturesAuctionBid }
            >
            /**
             * A listing was cancelled
             **/
            ListingCancelled: AugmentedEvent<ApiType, [listingId: H256], { listingId: H256 }>
            /**
             * A listing was created
             **/
            ListingCreated: AugmentedEvent<
                ApiType,
                [listingId: H256, listing: PalletMarketplaceFeaturesListing],
                { listingId: H256; listing: PalletMarketplaceFeaturesListing }
            >
            /**
             * A listing was filled or partially filled
             **/
            ListingFilled: AugmentedEvent<
                ApiType,
                [
                    listingId: H256,
                    buyer: AccountId32,
                    amountFilled: u128,
                    amountRemaining: u128,
                    protocolFee: u128,
                    royalty: u128,
                ],
                {
                    listingId: H256
                    buyer: AccountId32
                    amountFilled: u128
                    amountRemaining: u128
                    protocolFee: u128
                    royalty: u128
                }
            >
            /**
             * Protocol fee was set
             **/
            ProtocolFeeSet: AugmentedEvent<ApiType, [protocolFee: Perbill], { protocolFee: Perbill }>
            /**
             * Generic event
             **/
            [key: string]: AugmentedEvent<ApiType>
        }
        matrixUtility: {
            /**
             * Batch of calls dispatched without errors.
             **/
            BatchDispatched: AugmentedEvent<ApiType, []>
            /**
             * Batch of calls did not disptach completely.
             * Index and error of the failing dispatch call is provided.
             **/
            BatchFailed: AugmentedEvent<
                ApiType,
                [index: u32, error: SpRuntimeDispatchError],
                { index: u32; error: SpRuntimeDispatchError }
            >
            /**
             * Batch of calls dispatched, but some calls resulted in error.
             * Indexes and errors of failing dispatch calls are provided.
             **/
            BatchPartiallyDispatched: AugmentedEvent<ApiType, [Vec<ITuple<[u32, SpRuntimeDispatchError]>>]>
            /**
             * Generic event
             **/
            [key: string]: AugmentedEvent<ApiType>
        }
        matrixXcm: {
            /**
             * Xcm fee and weight updated
             **/
            MinimumWeightUpdated: AugmentedEvent<ApiType, [MatrixPalletXcmMinimumWeightFeePair]>
            /**
             * XCM transfer failed
             **/
            XcmTransferFailed: AugmentedEvent<ApiType, [SpRuntimeDispatchError]>
            /**
             * Generic event
             **/
            [key: string]: AugmentedEvent<ApiType>
        }
        multisig: {
            /**
             * A multisig operation has been approved by someone.
             **/
            MultisigApproval: AugmentedEvent<
                ApiType,
                [approving: AccountId32, timepoint: PalletMultisigTimepoint, multisig: AccountId32, callHash: U8aFixed],
                { approving: AccountId32; timepoint: PalletMultisigTimepoint; multisig: AccountId32; callHash: U8aFixed }
            >
            /**
             * A multisig operation has been cancelled.
             **/
            MultisigCancelled: AugmentedEvent<
                ApiType,
                [cancelling: AccountId32, timepoint: PalletMultisigTimepoint, multisig: AccountId32, callHash: U8aFixed],
                { cancelling: AccountId32; timepoint: PalletMultisigTimepoint; multisig: AccountId32; callHash: U8aFixed }
            >
            /**
             * A multisig operation has been executed.
             **/
            MultisigExecuted: AugmentedEvent<
                ApiType,
                [
                    approving: AccountId32,
                    timepoint: PalletMultisigTimepoint,
                    multisig: AccountId32,
                    callHash: U8aFixed,
                    result: Result<Null, SpRuntimeDispatchError>,
                ],
                {
                    approving: AccountId32
                    timepoint: PalletMultisigTimepoint
                    multisig: AccountId32
                    callHash: U8aFixed
                    result: Result<Null, SpRuntimeDispatchError>
                }
            >
            /**
             * A new multisig operation has begun.
             **/
            NewMultisig: AugmentedEvent<
                ApiType,
                [approving: AccountId32, multisig: AccountId32, callHash: U8aFixed],
                { approving: AccountId32; multisig: AccountId32; callHash: U8aFixed }
            >
            /**
             * Generic event
             **/
            [key: string]: AugmentedEvent<ApiType>
        }
        multiTokens: {
            /**
             * An approval took place. If `token_id` is `None`, it applies to the whole collection.
             **/
            Approved: AugmentedEvent<
                ApiType,
                [
                    collectionId: u128,
                    tokenId: Option<u128>,
                    owner: AccountId32,
                    operator: AccountId32,
                    amount: Option<u128>,
                    expiration: Option<u32>,
                ],
                {
                    collectionId: u128
                    tokenId: Option<u128>
                    owner: AccountId32
                    operator: AccountId32
                    amount: Option<u128>
                    expiration: Option<u32>
                }
            >
            /**
             * An attribute has been removed
             **/
            AttributeRemoved: AugmentedEvent<
                ApiType,
                [collectionId: u128, tokenId: Option<u128>, key: Bytes],
                { collectionId: u128; tokenId: Option<u128>; key: Bytes }
            >
            /**
             * New attribute has been set
             **/
            AttributeSet: AugmentedEvent<
                ApiType,
                [collectionId: u128, tokenId: Option<u128>, key: Bytes, value: Bytes],
                { collectionId: u128; tokenId: Option<u128>; key: Bytes; value: Bytes }
            >
            /**
             * The balance of an account was set
             **/
            BalanceSet: AugmentedEvent<
                ApiType,
                [collectionId: u128, tokenId: u128, accountId: AccountId32, balance: u128, reservedBalance: u128],
                { collectionId: u128; tokenId: u128; accountId: AccountId32; balance: u128; reservedBalance: u128 }
            >
            /**
             * Units of a token were burned
             **/
            Burned: AugmentedEvent<
                ApiType,
                [collectionId: u128, tokenId: u128, accountId: AccountId32, amount: u128],
                { collectionId: u128; tokenId: u128; accountId: AccountId32; amount: u128 }
            >
            /**
             * Collections were claimed
             **/
            ClaimedCollections: AugmentedEvent<
                ApiType,
                [accountId: AccountId32, ethereumAddress: H160, collectionIds: Vec<u128>],
                { accountId: AccountId32; ethereumAddress: H160; collectionIds: Vec<u128> }
            >
            /**
             * Tokens were claimed
             **/
            ClaimedTokens: AugmentedEvent<
                ApiType,
                [
                    accountId: AccountId32,
                    ethereumAddress: H160,
                    assetIds: Vec<PalletMultiTokensFeaturesClaimAssetIdWithEth>,
                    moreTokensRemain: bool,
                ],
                {
                    accountId: AccountId32
                    ethereumAddress: H160
                    assetIds: Vec<PalletMultiTokensFeaturesClaimAssetIdWithEth>
                    moreTokensRemain: bool
                }
            >
            /**
             * Finished claiming the tokens
             **/
            ClaimTokensCompleted: AugmentedEvent<
                ApiType,
                [destination: AccountId32, ethereumAddress: H160],
                { destination: AccountId32; ethereumAddress: H160 }
            >
            /**
             * Claims tokens initiated
             **/
            ClaimTokensInitiated: AugmentedEvent<
                ApiType,
                [accountId: AccountId32, ethereumAddress: H160],
                { accountId: AccountId32; ethereumAddress: H160 }
            >
            /**
             * A new collection account was created
             **/
            CollectionAccountCreated: AugmentedEvent<
                ApiType,
                [collectionId: u128, accountId: AccountId32],
                { collectionId: u128; accountId: AccountId32 }
            >
            /**
             * A collection account was destroyed
             **/
            CollectionAccountDestroyed: AugmentedEvent<
                ApiType,
                [collectionId: u128, accountId: AccountId32],
                { collectionId: u128; accountId: AccountId32 }
            >
            /**
             * TokenAccount storage was set to `value`
             **/
            CollectionAccountUpdated: AugmentedEvent<
                ApiType,
                [
                    collectionId: u128,
                    accountId: AccountId32,
                    value: Option<PalletMultiTokensFeaturesCollectionTypesCollectionAccount>,
                ],
                {
                    collectionId: u128
                    accountId: AccountId32
                    value: Option<PalletMultiTokensFeaturesCollectionTypesCollectionAccount>
                }
            >
            /**
             * A new collection was created
             **/
            CollectionCreated: AugmentedEvent<
                ApiType,
                [collectionId: u128, owner: AccountId32],
                { collectionId: u128; owner: AccountId32 }
            >
            /**
             * A collection was destroyed.
             **/
            CollectionDestroyed: AugmentedEvent<
                ApiType,
                [collectionId: u128, caller: AccountId32],
                { collectionId: u128; caller: AccountId32 }
            >
            /**
             * A collection was mutated
             **/
            CollectionMutated: AugmentedEvent<
                ApiType,
                [collectionId: u128, mutation: EpMultiTokensCollectionDefaultCollectionMutation],
                { collectionId: u128; mutation: EpMultiTokensCollectionDefaultCollectionMutation }
            >
            /**
             * Collection storage was set to `value`
             **/
            CollectionUpdated: AugmentedEvent<
                ApiType,
                [collectionId: u128, value: Option<EpMultiTokensCollection>],
                { collectionId: u128; value: Option<EpMultiTokensCollection> }
            >
            /**
             * Token units were deposited
             **/
            Deposit: AugmentedEvent<
                ApiType,
                [collectionId: u128, tokenId: u128, accountId: AccountId32, amount: u128],
                { collectionId: u128; tokenId: u128; accountId: AccountId32; amount: u128 }
            >
            /**
             * Collection, token or account was frozen
             **/
            Frozen: AugmentedEvent<ApiType, [EpMultiTokensFreeze]>
            /**
             * Migration stage updated
             **/
            MigrationStatusUpdated: AugmentedEvent<
                ApiType,
                [stage: EpCoreFrameMigrationsMigrationStage],
                { stage: EpCoreFrameMigrationsMigrationStage }
            >
            /**
             * Units of a token were minted
             **/
            Minted: AugmentedEvent<
                ApiType,
                [collectionId: u128, tokenId: u128, issuer: EpMultiTokensRootOrSigned, recipient: AccountId32, amount: u128],
                { collectionId: u128; tokenId: u128; issuer: EpMultiTokensRootOrSigned; recipient: AccountId32; amount: u128 }
            >
            /**
             * Reserved token units were moved
             **/
            MovedReserves: AugmentedEvent<
                ApiType,
                [
                    collectionId: u128,
                    tokenId: u128,
                    source: AccountId32,
                    destination: AccountId32,
                    amount: u128,
                    reserveId: Option<U8aFixed>,
                ],
                {
                    collectionId: u128
                    tokenId: u128
                    source: AccountId32
                    destination: AccountId32
                    amount: u128
                    reserveId: Option<U8aFixed>
                }
            >
            /**
             * NextCollectionId storage was set to `collection_id`
             **/
            NextCollectionIdUpdated: AugmentedEvent<ApiType, [collectionId: u128], { collectionId: u128 }>
            /**
             * Token units were reserved
             **/
            Reserved: AugmentedEvent<
                ApiType,
                [collectionId: u128, tokenId: u128, accountId: AccountId32, amount: u128, reserveId: Option<U8aFixed>],
                { collectionId: u128; tokenId: u128; accountId: AccountId32; amount: u128; reserveId: Option<U8aFixed> }
            >
            /**
             * Reserved token units were transferred
             **/
            ReserveRepatriated: AugmentedEvent<
                ApiType,
                [
                    collectionId: u128,
                    tokenId: u128,
                    source: AccountId32,
                    destination: AccountId32,
                    amount: u128,
                    reserveId: Option<U8aFixed>,
                ],
                {
                    collectionId: u128
                    tokenId: u128
                    source: AccountId32
                    destination: AccountId32
                    amount: u128
                    reserveId: Option<U8aFixed>
                }
            >
            /**
             * An amount of tokens were slashed from account
             **/
            Slashed: AugmentedEvent<
                ApiType,
                [collectionId: u128, tokenId: u128, accountId: AccountId32, amount: u128],
                { collectionId: u128; tokenId: u128; accountId: AccountId32; amount: u128 }
            >
            /**
             * Collection, token or account was unfrozen
             **/
            Thawed: AugmentedEvent<ApiType, [EpMultiTokensFreeze]>
            /**
             * A new token account was created
             **/
            TokenAccountCreated: AugmentedEvent<
                ApiType,
                [collectionId: u128, tokenId: u128, accountId: AccountId32, balance: u128],
                { collectionId: u128; tokenId: u128; accountId: AccountId32; balance: u128 }
            >
            /**
             * A token account was destroyed
             **/
            TokenAccountDestroyed: AugmentedEvent<
                ApiType,
                [collectionId: u128, tokenId: u128, accountId: AccountId32],
                { collectionId: u128; tokenId: u128; accountId: AccountId32 }
            >
            /**
             * TokenAccount storage was set to `value`
             **/
            TokenAccountUpdated: AugmentedEvent<
                ApiType,
                [
                    collectionId: u128,
                    tokenId: u128,
                    accountId: AccountId32,
                    value: Option<PalletMultiTokensFeaturesTokenTypesTokenAccount>,
                ],
                {
                    collectionId: u128
                    tokenId: u128
                    accountId: AccountId32
                    value: Option<PalletMultiTokensFeaturesTokenTypesTokenAccount>
                }
            >
            /**
             * A token was created
             **/
            TokenCreated: AugmentedEvent<
                ApiType,
                [collectionId: u128, tokenId: u128, issuer: EpMultiTokensRootOrSigned, initialSupply: u128],
                { collectionId: u128; tokenId: u128; issuer: EpMultiTokensRootOrSigned; initialSupply: u128 }
            >
            /**
             * A token was destroyed
             **/
            TokenDestroyed: AugmentedEvent<
                ApiType,
                [collectionId: u128, tokenId: u128, caller: AccountId32],
                { collectionId: u128; tokenId: u128; caller: AccountId32 }
            >
            /**
             * A token was mutated
             **/
            TokenMutated: AugmentedEvent<
                ApiType,
                [collectionId: u128, tokenId: u128, mutation: EpMultiTokensTokenDefaultTokenMutation],
                { collectionId: u128; tokenId: u128; mutation: EpMultiTokensTokenDefaultTokenMutation }
            >
            /**
             * Token storage was set to `value`
             **/
            TokenUpdated: AugmentedEvent<
                ApiType,
                [collectionId: u128, tokenId: u128, value: Option<EpMultiTokensToken>],
                { collectionId: u128; tokenId: u128; value: Option<EpMultiTokensToken> }
            >
            /**
             * Units of a token were transferred
             **/
            Transferred: AugmentedEvent<
                ApiType,
                [collectionId: u128, tokenId: u128, operator: AccountId32, from: AccountId32, to: AccountId32, amount: u128],
                { collectionId: u128; tokenId: u128; operator: AccountId32; from: AccountId32; to: AccountId32; amount: u128 }
            >
            /**
             * An unapproval took place. If `token_id` is `None`, it applies to the collection.
             **/
            Unapproved: AugmentedEvent<
                ApiType,
                [collectionId: u128, tokenId: Option<u128>, owner: AccountId32, operator: AccountId32],
                { collectionId: u128; tokenId: Option<u128>; owner: AccountId32; operator: AccountId32 }
            >
            /**
             * Token units were unreserved
             **/
            Unreserved: AugmentedEvent<
                ApiType,
                [collectionId: u128, tokenId: u128, accountId: AccountId32, amount: u128, reserveId: Option<U8aFixed>],
                { collectionId: u128; tokenId: u128; accountId: AccountId32; amount: u128; reserveId: Option<U8aFixed> }
            >
            /**
             * Token units were withdrawn
             **/
            Withdraw: AugmentedEvent<
                ApiType,
                [collectionId: u128, tokenId: u128, accountId: AccountId32, amount: u128],
                { collectionId: u128; tokenId: u128; accountId: AccountId32; amount: u128 }
            >
            /**
             * Generic event
             **/
            [key: string]: AugmentedEvent<ApiType>
        }
        multiTokensMigration: {
            /**
             * Number of attributes have been migrated
             **/
            MigratedAttributes: AugmentedEvent<ApiType, [u32]>
            /**
             * Number of collection accounts have been migrated
             **/
            MigratedCollectionAccounts: AugmentedEvent<ApiType, [u32]>
            /**
             * Number of collections that have been migrated
             **/
            MigratedCollections: AugmentedEvent<ApiType, [u32]>
            /**
             * Number of token accounts have been migrated
             **/
            MigratedTokenAccounts: AugmentedEvent<ApiType, [u32]>
            /**
             * Number of tokens have been migrated
             **/
            MigratedTokens: AugmentedEvent<ApiType, [u32]>
            /**
             * Indicates that the migration is finished
             **/
            MigrationFinished: AugmentedEvent<ApiType, []>
            /**
             * Generic event
             **/
            [key: string]: AugmentedEvent<ApiType>
        }
        ormlXcm: {
            /**
             * XCM message sent. \[to, message\]
             **/
            Sent: AugmentedEvent<
                ApiType,
                [to: XcmV3MultiLocation, message: XcmV3Xcm],
                { to: XcmV3MultiLocation; message: XcmV3Xcm }
            >
            /**
             * Generic event
             **/
            [key: string]: AugmentedEvent<ApiType>
        }
        parachainSystem: {
            /**
             * Downward messages were processed using the given weight.
             **/
            DownwardMessagesProcessed: AugmentedEvent<
                ApiType,
                [weightUsed: SpWeightsWeightV2Weight, dmqHead: H256],
                { weightUsed: SpWeightsWeightV2Weight; dmqHead: H256 }
            >
            /**
             * Some downward messages have been received and will be processed.
             **/
            DownwardMessagesReceived: AugmentedEvent<ApiType, [count: u32], { count: u32 }>
            /**
             * An upgrade has been authorized.
             **/
            UpgradeAuthorized: AugmentedEvent<ApiType, [codeHash: H256], { codeHash: H256 }>
            /**
             * An upward message was sent to the relay chain.
             **/
            UpwardMessageSent: AugmentedEvent<ApiType, [messageHash: Option<U8aFixed>], { messageHash: Option<U8aFixed> }>
            /**
             * The validation function was applied as of the contained relay chain block number.
             **/
            ValidationFunctionApplied: AugmentedEvent<ApiType, [relayChainBlockNum: u32], { relayChainBlockNum: u32 }>
            /**
             * The relay-chain aborted the upgrade process.
             **/
            ValidationFunctionDiscarded: AugmentedEvent<ApiType, []>
            /**
             * The validation function has been scheduled to apply.
             **/
            ValidationFunctionStored: AugmentedEvent<ApiType, []>
            /**
             * Generic event
             **/
            [key: string]: AugmentedEvent<ApiType>
        }
        polkadotXcm: {
            /**
             * Some assets have been claimed from an asset trap
             *
             * \[ hash, origin, assets \]
             **/
            AssetsClaimed: AugmentedEvent<ApiType, [H256, XcmV3MultiLocation, XcmVersionedMultiAssets]>
            /**
             * Some assets have been placed in an asset trap.
             *
             * \[ hash, origin, assets \]
             **/
            AssetsTrapped: AugmentedEvent<ApiType, [H256, XcmV3MultiLocation, XcmVersionedMultiAssets]>
            /**
             * Execution of an XCM message was attempted.
             *
             * \[ outcome \]
             **/
            Attempted: AugmentedEvent<ApiType, [XcmV3TraitsOutcome]>
            /**
             * Fees were paid from a location for an operation (often for using `SendXcm`).
             *
             * \[ paying location, fees \]
             **/
            FeesPaid: AugmentedEvent<ApiType, [XcmV3MultiLocation, XcmV3MultiassetMultiAssets]>
            /**
             * Expected query response has been received but the querier location of the response does
             * not match the expected. The query remains registered for a later, valid, response to
             * be received and acted upon.
             *
             * \[ origin location, id, expected querier, maybe actual querier \]
             **/
            InvalidQuerier: AugmentedEvent<ApiType, [XcmV3MultiLocation, u64, XcmV3MultiLocation, Option<XcmV3MultiLocation>]>
            /**
             * Expected query response has been received but the expected querier location placed in
             * storage by this runtime previously cannot be decoded. The query remains registered.
             *
             * This is unexpected (since a location placed in storage in a previously executing
             * runtime should be readable prior to query timeout) and dangerous since the possibly
             * valid response will be dropped. Manual governance intervention is probably going to be
             * needed.
             *
             * \[ origin location, id \]
             **/
            InvalidQuerierVersion: AugmentedEvent<ApiType, [XcmV3MultiLocation, u64]>
            /**
             * Expected query response has been received but the origin location of the response does
             * not match that expected. The query remains registered for a later, valid, response to
             * be received and acted upon.
             *
             * \[ origin location, id, expected location \]
             **/
            InvalidResponder: AugmentedEvent<ApiType, [XcmV3MultiLocation, u64, Option<XcmV3MultiLocation>]>
            /**
             * Expected query response has been received but the expected origin location placed in
             * storage by this runtime previously cannot be decoded. The query remains registered.
             *
             * This is unexpected (since a location placed in storage in a previously executing
             * runtime should be readable prior to query timeout) and dangerous since the possibly
             * valid response will be dropped. Manual governance intervention is probably going to be
             * needed.
             *
             * \[ origin location, id \]
             **/
            InvalidResponderVersion: AugmentedEvent<ApiType, [XcmV3MultiLocation, u64]>
            /**
             * Query response has been received and query is removed. The registered notification has
             * been dispatched and executed successfully.
             *
             * \[ id, pallet index, call index \]
             **/
            Notified: AugmentedEvent<ApiType, [u64, u8, u8]>
            /**
             * Query response has been received and query is removed. The dispatch was unable to be
             * decoded into a `Call`; this might be due to dispatch function having a signature which
             * is not `(origin, QueryId, Response)`.
             *
             * \[ id, pallet index, call index \]
             **/
            NotifyDecodeFailed: AugmentedEvent<ApiType, [u64, u8, u8]>
            /**
             * Query response has been received and query is removed. There was a general error with
             * dispatching the notification call.
             *
             * \[ id, pallet index, call index \]
             **/
            NotifyDispatchError: AugmentedEvent<ApiType, [u64, u8, u8]>
            /**
             * Query response has been received and query is removed. The registered notification could
             * not be dispatched because the dispatch weight is greater than the maximum weight
             * originally budgeted by this runtime for the query result.
             *
             * \[ id, pallet index, call index, actual weight, max budgeted weight \]
             **/
            NotifyOverweight: AugmentedEvent<ApiType, [u64, u8, u8, SpWeightsWeightV2Weight, SpWeightsWeightV2Weight]>
            /**
             * A given location which had a version change subscription was dropped owing to an error
             * migrating the location to our new XCM format.
             *
             * \[ location, query ID \]
             **/
            NotifyTargetMigrationFail: AugmentedEvent<ApiType, [XcmVersionedMultiLocation, u64]>
            /**
             * A given location which had a version change subscription was dropped owing to an error
             * sending the notification to it.
             *
             * \[ location, query ID, error \]
             **/
            NotifyTargetSendFail: AugmentedEvent<ApiType, [XcmV3MultiLocation, u64, XcmV3TraitsError]>
            /**
             * Query response has been received and is ready for taking with `take_response`. There is
             * no registered notification call.
             *
             * \[ id, response \]
             **/
            ResponseReady: AugmentedEvent<ApiType, [u64, XcmV3Response]>
            /**
             * Received query response has been read and removed.
             *
             * \[ id \]
             **/
            ResponseTaken: AugmentedEvent<ApiType, [u64]>
            /**
             * A XCM message was sent.
             *
             * \[ origin, destination, message \]
             **/
            Sent: AugmentedEvent<ApiType, [XcmV3MultiLocation, XcmV3MultiLocation, XcmV3Xcm]>
            /**
             * The supported version of a location has been changed. This might be through an
             * automatic notification or a manual intervention.
             *
             * \[ location, XCM version \]
             **/
            SupportedVersionChanged: AugmentedEvent<ApiType, [XcmV3MultiLocation, u32]>
            /**
             * Query response received which does not match a registered query. This may be because a
             * matching query was never registered, it may be because it is a duplicate response, or
             * because the query timed out.
             *
             * \[ origin location, id \]
             **/
            UnexpectedResponse: AugmentedEvent<ApiType, [XcmV3MultiLocation, u64]>
            /**
             * An XCM version change notification message has been attempted to be sent.
             *
             * The cost of sending it (borne by the chain) is included.
             *
             * \[ destination, result, cost \]
             **/
            VersionChangeNotified: AugmentedEvent<ApiType, [XcmV3MultiLocation, u32, XcmV3MultiassetMultiAssets]>
            /**
             * We have requested that a remote chain sends us XCM version change notifications.
             *
             * \[ destination location, cost \]
             **/
            VersionNotifyRequested: AugmentedEvent<ApiType, [XcmV3MultiLocation, XcmV3MultiassetMultiAssets]>
            /**
             * A remote has requested XCM version change notification from us and we have honored it.
             * A version information message is sent to them and its cost is included.
             *
             * \[ destination location, cost \]
             **/
            VersionNotifyStarted: AugmentedEvent<ApiType, [XcmV3MultiLocation, XcmV3MultiassetMultiAssets]>
            /**
             * We have requested that a remote chain stops sending us XCM version change notifications.
             *
             * \[ destination location, cost \]
             **/
            VersionNotifyUnrequested: AugmentedEvent<ApiType, [XcmV3MultiLocation, XcmV3MultiassetMultiAssets]>
            /**
             * Generic event
             **/
            [key: string]: AugmentedEvent<ApiType>
        }
        pools: {
            /**
             * Pools storage was modified by [`PoolsMutation`]
             **/
            PoolsMutated: AugmentedEvent<ApiType, [PalletPoolsPoolsMutation]>
            /**
             * Generic event
             **/
            [key: string]: AugmentedEvent<ApiType>
        }
        preimage: {
            /**
             * A preimage has ben cleared.
             **/
            Cleared: AugmentedEvent<ApiType, [hash_: H256], { hash_: H256 }>
            /**
             * A preimage has been noted.
             **/
            Noted: AugmentedEvent<ApiType, [hash_: H256], { hash_: H256 }>
            /**
             * A preimage has been requested.
             **/
            Requested: AugmentedEvent<ApiType, [hash_: H256], { hash_: H256 }>
            /**
             * Generic event
             **/
            [key: string]: AugmentedEvent<ApiType>
        }
        scheduler: {
            /**
             * The call for the provided hash was not found so the task has been aborted.
             **/
            CallUnavailable: AugmentedEvent<
                ApiType,
                [task: ITuple<[u32, u32]>, id: Option<U8aFixed>],
                { task: ITuple<[u32, u32]>; id: Option<U8aFixed> }
            >
            /**
             * Canceled some task.
             **/
            Canceled: AugmentedEvent<ApiType, [when: u32, index: u32], { when: u32; index: u32 }>
            /**
             * Dispatched some task.
             **/
            Dispatched: AugmentedEvent<
                ApiType,
                [task: ITuple<[u32, u32]>, id: Option<U8aFixed>, result: Result<Null, SpRuntimeDispatchError>],
                { task: ITuple<[u32, u32]>; id: Option<U8aFixed>; result: Result<Null, SpRuntimeDispatchError> }
            >
            /**
             * The given task was unable to be renewed since the agenda is full at that block.
             **/
            PeriodicFailed: AugmentedEvent<
                ApiType,
                [task: ITuple<[u32, u32]>, id: Option<U8aFixed>],
                { task: ITuple<[u32, u32]>; id: Option<U8aFixed> }
            >
            /**
             * The given task can never be executed since it is overweight.
             **/
            PermanentlyOverweight: AugmentedEvent<
                ApiType,
                [task: ITuple<[u32, u32]>, id: Option<U8aFixed>],
                { task: ITuple<[u32, u32]>; id: Option<U8aFixed> }
            >
            /**
             * Scheduled some task.
             **/
            Scheduled: AugmentedEvent<ApiType, [when: u32, index: u32], { when: u32; index: u32 }>
            /**
             * Generic event
             **/
            [key: string]: AugmentedEvent<ApiType>
        }
        session: {
            /**
             * New session has happened. Note that the argument is the session index, not the
             * block number as the type might suggest.
             **/
            NewSession: AugmentedEvent<ApiType, [sessionIndex: u32], { sessionIndex: u32 }>
            /**
             * Generic event
             **/
            [key: string]: AugmentedEvent<ApiType>
        }
        system: {
            /**
             * `:code` was updated.
             **/
            CodeUpdated: AugmentedEvent<ApiType, []>
            /**
             * An extrinsic failed.
             **/
            ExtrinsicFailed: AugmentedEvent<
                ApiType,
                [dispatchError: SpRuntimeDispatchError, dispatchInfo: FrameSupportDispatchDispatchInfo],
                { dispatchError: SpRuntimeDispatchError; dispatchInfo: FrameSupportDispatchDispatchInfo }
            >
            /**
             * An extrinsic completed successfully.
             **/
            ExtrinsicSuccess: AugmentedEvent<
                ApiType,
                [dispatchInfo: FrameSupportDispatchDispatchInfo],
                { dispatchInfo: FrameSupportDispatchDispatchInfo }
            >
            /**
             * An account was reaped.
             **/
            KilledAccount: AugmentedEvent<ApiType, [account: AccountId32], { account: AccountId32 }>
            /**
             * A new account was created.
             **/
            NewAccount: AugmentedEvent<ApiType, [account: AccountId32], { account: AccountId32 }>
            /**
             * On on-chain remark happened.
             **/
            Remarked: AugmentedEvent<ApiType, [sender: AccountId32, hash_: H256], { sender: AccountId32; hash_: H256 }>
            /**
             * Generic event
             **/
            [key: string]: AugmentedEvent<ApiType>
        }
        technicalCommittee: {
            /**
             * A motion was approved by the required threshold.
             **/
            Approved: AugmentedEvent<ApiType, [proposalHash: H256], { proposalHash: H256 }>
            /**
             * A proposal was closed because its threshold was reached or after its duration was up.
             **/
            Closed: AugmentedEvent<ApiType, [proposalHash: H256, yes: u32, no: u32], { proposalHash: H256; yes: u32; no: u32 }>
            /**
             * A motion was not approved by the required threshold.
             **/
            Disapproved: AugmentedEvent<ApiType, [proposalHash: H256], { proposalHash: H256 }>
            /**
             * A motion was executed; result will be `Ok` if it returned without error.
             **/
            Executed: AugmentedEvent<
                ApiType,
                [proposalHash: H256, result: Result<Null, SpRuntimeDispatchError>],
                { proposalHash: H256; result: Result<Null, SpRuntimeDispatchError> }
            >
            /**
             * A single member did some action; result will be `Ok` if it returned without error.
             **/
            MemberExecuted: AugmentedEvent<
                ApiType,
                [proposalHash: H256, result: Result<Null, SpRuntimeDispatchError>],
                { proposalHash: H256; result: Result<Null, SpRuntimeDispatchError> }
            >
            /**
             * A motion (given hash) has been proposed (by given account) with a threshold (given
             * `MemberCount`).
             **/
            Proposed: AugmentedEvent<
                ApiType,
                [account: AccountId32, proposalIndex: u32, proposalHash: H256, threshold: u32],
                { account: AccountId32; proposalIndex: u32; proposalHash: H256; threshold: u32 }
            >
            /**
             * A motion (given hash) has been voted on by given account, leaving
             * a tally (yes votes and no votes given respectively as `MemberCount`).
             **/
            Voted: AugmentedEvent<
                ApiType,
                [account: AccountId32, proposalHash: H256, voted: bool, yes: u32, no: u32],
                { account: AccountId32; proposalHash: H256; voted: bool; yes: u32; no: u32 }
            >
            /**
             * Generic event
             **/
            [key: string]: AugmentedEvent<ApiType>
        }
        technicalMembership: {
            /**
             * Phantom member, never used.
             **/
            Dummy: AugmentedEvent<ApiType, []>
            /**
             * One of the members' keys changed.
             **/
            KeyChanged: AugmentedEvent<ApiType, []>
            /**
             * The given member was added; see the transaction for who.
             **/
            MemberAdded: AugmentedEvent<ApiType, []>
            /**
             * The given member was removed; see the transaction for who.
             **/
            MemberRemoved: AugmentedEvent<ApiType, []>
            /**
             * The membership was reset; see the transaction for who the new set is.
             **/
            MembersReset: AugmentedEvent<ApiType, []>
            /**
             * Two members were swapped; see the transaction for who.
             **/
            MembersSwapped: AugmentedEvent<ApiType, []>
            /**
             * Generic event
             **/
            [key: string]: AugmentedEvent<ApiType>
        }
        transactionPayment: {
            /**
             * A transaction fee `actual_fee`, of which `tip` was added to the minimum inclusion fee,
             * has been paid by `who`.
             **/
            TransactionFeePaid: AugmentedEvent<
                ApiType,
                [who: AccountId32, actualFee: u128, tip: u128],
                { who: AccountId32; actualFee: u128; tip: u128 }
            >
            /**
             * Generic event
             **/
            [key: string]: AugmentedEvent<ApiType>
        }
        unknownTokens: {
            /**
             * Deposit success.
             **/
            Deposited: AugmentedEvent<
                ApiType,
                [asset: XcmV3MultiAsset, who: XcmV3MultiLocation],
                { asset: XcmV3MultiAsset; who: XcmV3MultiLocation }
            >
            /**
             * Withdraw success.
             **/
            Withdrawn: AugmentedEvent<
                ApiType,
                [asset: XcmV3MultiAsset, who: XcmV3MultiLocation],
                { asset: XcmV3MultiAsset; who: XcmV3MultiLocation }
            >
            /**
             * Generic event
             **/
            [key: string]: AugmentedEvent<ApiType>
        }
        utility: {
            /**
             * Batch of dispatches completed fully with no error.
             **/
            BatchCompleted: AugmentedEvent<ApiType, []>
            /**
             * Batch of dispatches completed but has errors.
             **/
            BatchCompletedWithErrors: AugmentedEvent<ApiType, []>
            /**
             * Batch of dispatches did not complete fully. Index of first failing dispatch given, as
             * well as the error.
             **/
            BatchInterrupted: AugmentedEvent<
                ApiType,
                [index: u32, error: SpRuntimeDispatchError],
                { index: u32; error: SpRuntimeDispatchError }
            >
            /**
             * A call was dispatched.
             **/
            DispatchedAs: AugmentedEvent<
                ApiType,
                [result: Result<Null, SpRuntimeDispatchError>],
                { result: Result<Null, SpRuntimeDispatchError> }
            >
            /**
             * A single item within a Batch of dispatches has completed with no error.
             **/
            ItemCompleted: AugmentedEvent<ApiType, []>
            /**
             * A single item within a Batch of dispatches has completed with error.
             **/
            ItemFailed: AugmentedEvent<ApiType, [error: SpRuntimeDispatchError], { error: SpRuntimeDispatchError }>
            /**
             * Generic event
             **/
            [key: string]: AugmentedEvent<ApiType>
        }
        xcmpQueue: {
            /**
             * Bad XCM format used.
             **/
            BadFormat: AugmentedEvent<ApiType, [messageHash: Option<U8aFixed>], { messageHash: Option<U8aFixed> }>
            /**
             * Bad XCM version used.
             **/
            BadVersion: AugmentedEvent<ApiType, [messageHash: Option<U8aFixed>], { messageHash: Option<U8aFixed> }>
            /**
             * Some XCM failed.
             **/
            Fail: AugmentedEvent<
                ApiType,
                [messageHash: Option<U8aFixed>, error: XcmV3TraitsError, weight: SpWeightsWeightV2Weight],
                { messageHash: Option<U8aFixed>; error: XcmV3TraitsError; weight: SpWeightsWeightV2Weight }
            >
            /**
             * An XCM exceeded the individual message weight budget.
             **/
            OverweightEnqueued: AugmentedEvent<
                ApiType,
                [sender: u32, sentAt: u32, index: u64, required: SpWeightsWeightV2Weight],
                { sender: u32; sentAt: u32; index: u64; required: SpWeightsWeightV2Weight }
            >
            /**
             * An XCM from the overweight queue was executed with the given actual weight used.
             **/
            OverweightServiced: AugmentedEvent<
                ApiType,
                [index: u64, used: SpWeightsWeightV2Weight],
                { index: u64; used: SpWeightsWeightV2Weight }
            >
            /**
             * Some XCM was executed ok.
             **/
            Success: AugmentedEvent<
                ApiType,
                [messageHash: Option<U8aFixed>, weight: SpWeightsWeightV2Weight],
                { messageHash: Option<U8aFixed>; weight: SpWeightsWeightV2Weight }
            >
            /**
             * An HRMP message was sent to a sibling parachain.
             **/
            XcmpMessageSent: AugmentedEvent<ApiType, [messageHash: Option<U8aFixed>], { messageHash: Option<U8aFixed> }>
            /**
             * Generic event
             **/
            [key: string]: AugmentedEvent<ApiType>
        }
        xTokens: {
            /**
             * Transferred `MultiAsset` with fee.
             **/
            TransferredMultiAssets: AugmentedEvent<
                ApiType,
                [sender: AccountId32, assets: XcmV3MultiassetMultiAssets, fee: XcmV3MultiAsset, dest: XcmV3MultiLocation],
                { sender: AccountId32; assets: XcmV3MultiassetMultiAssets; fee: XcmV3MultiAsset; dest: XcmV3MultiLocation }
            >
            /**
             * Generic event
             **/
            [key: string]: AugmentedEvent<ApiType>
        }
    } // AugmentedEvents
} // declare module
