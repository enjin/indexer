// Auto-generated via `yarn polkadot-types-from-chain`, do not edit
/* eslint-disable */

// import type lookup before we augment - in some environments
// this is required to allow for ambient/previous definitions
import '@polkadot/api-base/types/storage'

import type { ApiTypes, AugmentedQuery, QueryableStorageEntry } from '@polkadot/api-base/types'
import type { Data } from '@polkadot/types'
import type { BTreeMap, Bytes, Null, Option, U8aFixed, Vec, bool, u128, u16, u32, u64 } from '@polkadot/types-codec'
import type { AnyNumber, ITuple } from '@polkadot/types-codec/types'
import type { AccountId32, Call, H160, H256, Perbill } from '@polkadot/types/interfaces/runtime'
import type { Observable } from '@polkadot/types/types'
import type {
    CumulusPalletDmpQueueConfigData,
    CumulusPalletDmpQueuePageIndexData,
    CumulusPalletParachainSystemCodeUpgradeAuthorization,
    CumulusPalletParachainSystemRelayStateSnapshotMessagingStateSnapshot,
    CumulusPalletXcmpQueueInboundChannelDetails,
    CumulusPalletXcmpQueueOutboundChannelDetails,
    CumulusPalletXcmpQueueQueueConfigData,
    EnjinMatrixRuntimeSessionKeys,
    EpCoreFrameMigrationsMigration,
    EpCoreFrameMigrationsMigrationStage,
    EpCoreFrameTypesExtrinsicInfo,
    EpCoreFrameTypesPool,
    EpMultiTokensAttribute,
    EpMultiTokensCollection,
    EpMultiTokensToken,
    EpMultiTokensTokenAssetId,
    FrameSupportDispatchPerDispatchClassWeight,
    FrameSupportPreimagesBounded,
    FrameSystemAccountInfo,
    FrameSystemEventRecord,
    FrameSystemLastRuntimeUpgradeInfo,
    FrameSystemPhase,
    MatrixPalletXcmMinimumWeightFeePair,
    MatrixPalletXcmXcmOperation,
    PalletBalancesAccountData,
    PalletBalancesBalanceLock,
    PalletBalancesIdAmount,
    PalletBalancesReserveData,
    PalletBountiesBounty,
    PalletClaimsClaimData,
    PalletCollatorStakingCollator,
    PalletCollatorStakingCollatorSessionInfo,
    PalletCollatorStakingNomination,
    PalletCollatorStakingRound,
    PalletCollectiveVotes,
    PalletDemocracyMetadataOwner,
    PalletDemocracyReferendumInfo,
    PalletDemocracyVoteThreshold,
    PalletDemocracyVoteVoting,
    PalletFuelTanksFuelTank,
    PalletFuelTanksUserAccount,
    PalletIdentityRegistrarInfo,
    PalletIdentityRegistration,
    PalletMarketplaceFeaturesListing,
    PalletMarketplaceMarketPlaceInfo,
    PalletMultiTokensFeaturesCollectionTypesCollectionAccount,
    PalletMultiTokensFeaturesTokenTypesTokenAccount,
    PalletMultisigMultisig,
    PalletPreimageRequestStatus,
    PalletSchedulerScheduled,
    PalletTransactionPaymentReleases,
    PalletTreasuryProposal,
    PalletXcmQueryStatus,
    PalletXcmRemoteLockedFungibleRecord,
    PalletXcmVersionMigrationStage,
    PolkadotCorePrimitivesOutboundHrmpMessage,
    PolkadotPrimitivesV4AbridgedHostConfiguration,
    PolkadotPrimitivesV4PersistedValidationData,
    PolkadotPrimitivesV4UpgradeRestriction,
    SpCoreCryptoKeyTypeId,
    SpRuntimeDigest,
    SpTrieStorageProof,
    SpWeightsWeightV2Weight,
    XcmV3MultiLocation,
    XcmVersionedAssetId,
    XcmVersionedMultiLocation,
} from '@polkadot/types/lookup'

export type __AugmentedQuery<ApiType extends ApiTypes> = AugmentedQuery<ApiType, () => unknown>
export type __QueryableStorageEntry<ApiType extends ApiTypes> = QueryableStorageEntry<ApiType>

declare module '@polkadot/api-base/types/storage' {
    interface AugmentedQueries<ApiType extends ApiTypes> {
        authorship: {
            /**
             * Author of current block.
             **/
            author: AugmentedQuery<ApiType, () => Observable<Option<AccountId32>>, []> & QueryableStorageEntry<ApiType, []>
            /**
             * Generic query
             **/
            [key: string]: QueryableStorageEntry<ApiType>
        }
        balances: {
            /**
             * The Balances pallet example of storing the balance of an account.
             *
             * # Example
             *
             * ```nocompile
             * impl pallet_balances::Config for Runtime {
             * type AccountStore = StorageMapShim<Self::Account<Runtime>, frame_system::Provider<Runtime>, AccountId, Self::AccountData<Balance>>
             * }
             * ```
             *
             * You can also store the balance of an account in the `System` pallet.
             *
             * # Example
             *
             * ```nocompile
             * impl pallet_balances::Config for Runtime {
             * type AccountStore = System
             * }
             * ```
             *
             * But this comes with tradeoffs, storing account balances in the system pallet stores
             * `frame_system` data alongside the account data contrary to storing account balances in the
             * `Balances` pallet, which uses a `StorageMap` to store balances data only.
             * NOTE: This is only used in the case that this pallet is used to store balances.
             **/
            account: AugmentedQuery<
                ApiType,
                (arg: AccountId32 | string | Uint8Array) => Observable<PalletBalancesAccountData>,
                [AccountId32]
            > &
                QueryableStorageEntry<ApiType, [AccountId32]>
            /**
             * Freeze locks on account balances.
             **/
            freezes: AugmentedQuery<
                ApiType,
                (arg: AccountId32 | string | Uint8Array) => Observable<Vec<PalletBalancesIdAmount>>,
                [AccountId32]
            > &
                QueryableStorageEntry<ApiType, [AccountId32]>
            /**
             * Holds on account balances.
             **/
            holds: AugmentedQuery<
                ApiType,
                (arg: AccountId32 | string | Uint8Array) => Observable<Vec<PalletBalancesIdAmount>>,
                [AccountId32]
            > &
                QueryableStorageEntry<ApiType, [AccountId32]>
            /**
             * The total units of outstanding deactivated balance in the system.
             **/
            inactiveIssuance: AugmentedQuery<ApiType, () => Observable<u128>, []> & QueryableStorageEntry<ApiType, []>
            /**
             * Any liquidity locks on some account balances.
             * NOTE: Should only be accessed when setting, changing and freeing a lock.
             **/
            locks: AugmentedQuery<
                ApiType,
                (arg: AccountId32 | string | Uint8Array) => Observable<Vec<PalletBalancesBalanceLock>>,
                [AccountId32]
            > &
                QueryableStorageEntry<ApiType, [AccountId32]>
            /**
             * Named reserves on some account balances.
             **/
            reserves: AugmentedQuery<
                ApiType,
                (arg: AccountId32 | string | Uint8Array) => Observable<Vec<PalletBalancesReserveData>>,
                [AccountId32]
            > &
                QueryableStorageEntry<ApiType, [AccountId32]>
            /**
             * The total units issued in the system.
             **/
            totalIssuance: AugmentedQuery<ApiType, () => Observable<u128>, []> & QueryableStorageEntry<ApiType, []>
            /**
             * Generic query
             **/
            [key: string]: QueryableStorageEntry<ApiType>
        }
        bounties: {
            /**
             * Bounties that have been made.
             **/
            bounties: AugmentedQuery<
                ApiType,
                (arg: u32 | AnyNumber | Uint8Array) => Observable<Option<PalletBountiesBounty>>,
                [u32]
            > &
                QueryableStorageEntry<ApiType, [u32]>
            /**
             * Bounty indices that have been approved but not yet funded.
             **/
            bountyApprovals: AugmentedQuery<ApiType, () => Observable<Vec<u32>>, []> & QueryableStorageEntry<ApiType, []>
            /**
             * Number of bounty proposals that have been made.
             **/
            bountyCount: AugmentedQuery<ApiType, () => Observable<u32>, []> & QueryableStorageEntry<ApiType, []>
            /**
             * The description of each bounty.
             **/
            bountyDescriptions: AugmentedQuery<ApiType, (arg: u32 | AnyNumber | Uint8Array) => Observable<Option<Bytes>>, [u32]> &
                QueryableStorageEntry<ApiType, [u32]>
            /**
             * Generic query
             **/
            [key: string]: QueryableStorageEntry<ApiType>
        }
        claims: {
            /**
             * This stores nonce for each Ethereum account, which will increment every time when ENJ2 are
             * claimed.
             **/
            accountNonce: AugmentedQuery<ApiType, (arg: H160 | string | Uint8Array) => Observable<Option<u32>>, [H160]> &
                QueryableStorageEntry<ApiType, [H160]>
            /**
             * This stores claims. Maps an ethereum address to the vec of claim data.
             **/
            claims: AugmentedQuery<
                ApiType,
                (arg: H160 | string | Uint8Array) => Observable<Option<Vec<PalletClaimsClaimData>>>,
                [H160]
            > &
                QueryableStorageEntry<ApiType, [H160]>
            /**
             * Delay time in block numbers before the user could claim
             **/
            delayClaimsPeriod: AugmentedQuery<ApiType, () => Observable<Option<u32>>, []> & QueryableStorageEntry<ApiType, []>
            /**
             * Amount in ENJ equivalent to 1 EFI.
             **/
            exchangeRate: AugmentedQuery<ApiType, () => Observable<Option<Perbill>>, []> & QueryableStorageEntry<ApiType, []>
            /**
             * Latest block numbers for Ethereum for which requests claim has been made by the
             * relayer.
             **/
            latestBlockNumber: AugmentedQuery<ApiType, () => Observable<Option<u32>>, []> & QueryableStorageEntry<ApiType, []>
            /**
             * This is the total amount for which claims have been requested and are not yet claimed.
             **/
            totalUnclaimedAmount: AugmentedQuery<ApiType, () => Observable<u128>, []> & QueryableStorageEntry<ApiType, []>
            /**
             * This stores transaction hash. Is used to check if transaction hash is already present
             **/
            transactionHashLookup: AugmentedQuery<
                ApiType,
                (arg: H256 | string | Uint8Array) => Observable<Option<Null>>,
                [H256]
            > &
                QueryableStorageEntry<ApiType, [H256]>
            /**
             * Generic query
             **/
            [key: string]: QueryableStorageEntry<ApiType>
        }
        collatorStaking: {
            /**
             * The current set of candidates for collation.
             **/
            candidates: AugmentedQuery<ApiType, () => Observable<Vec<PalletCollatorStakingCollator>>, []> &
                QueryableStorageEntry<ApiType, []>
            /**
             * The list of collators who requested an exit.
             **/
            collatorExits: AugmentedQuery<
                ApiType,
                (arg: AccountId32 | string | Uint8Array) => Observable<Option<u32>>,
                [AccountId32]
            > &
                QueryableStorageEntry<ApiType, [AccountId32]>
            /**
             * The current set of collators
             **/
            collators: AugmentedQuery<ApiType, () => Observable<Vec<PalletCollatorStakingCollator>>, []> &
                QueryableStorageEntry<ApiType, []>
            /**
             * The current round information.
             **/
            currentRound: AugmentedQuery<ApiType, () => Observable<PalletCollatorStakingRound>, []> &
                QueryableStorageEntry<ApiType, []>
            /**
             * The current candidate limit, must be within 0 and [`MaxCandidates`](Config::MaxCandidates)
             **/
            desiredCandidatesCount: AugmentedQuery<ApiType, () => Observable<u32>, []> & QueryableStorageEntry<ApiType, []>
            /**
             * The invulnerable collators
             *
             * This is the list of collators who are invulnerable to being ejected from collation
             * either by unbonding or by having less stake.
             **/
            invulnerables: AugmentedQuery<ApiType, () => Observable<Vec<PalletCollatorStakingCollator>>, []> &
                QueryableStorageEntry<ApiType, []>
            /**
             * The min stake amount for collators
             **/
            minCollatorStake: AugmentedQuery<ApiType, () => Observable<u128>, []> & QueryableStorageEntry<ApiType, []>
            /**
             * The current set of nominators.
             *
             * Each nominator is allowed to nominate one collator.
             **/
            nominators: AugmentedQuery<
                ApiType,
                (arg: AccountId32 | string | Uint8Array) => Observable<Option<PalletCollatorStakingNomination>>,
                [AccountId32]
            > &
                QueryableStorageEntry<ApiType, [AccountId32]>
            /**
             * The session info of collators including produced blocks and uptime
             **/
            sessionInfo: AugmentedQuery<
                ApiType,
                (
                    arg1: AccountId32 | string | Uint8Array,
                    arg2: u32 | AnyNumber | Uint8Array
                ) => Observable<PalletCollatorStakingCollatorSessionInfo>,
                [AccountId32, u32]
            > &
                QueryableStorageEntry<ApiType, [AccountId32, u32]>
            /**
             * Generic query
             **/
            [key: string]: QueryableStorageEntry<ApiType>
        }
        communityPool: {
            /**
             * Proposal indices that have been approved but not yet awarded.
             **/
            approvals: AugmentedQuery<ApiType, () => Observable<Vec<u32>>, []> & QueryableStorageEntry<ApiType, []>
            /**
             * The amount which has been reported as inactive to Currency.
             **/
            deactivated: AugmentedQuery<ApiType, () => Observable<u128>, []> & QueryableStorageEntry<ApiType, []>
            /**
             * Number of proposals that have been made.
             **/
            proposalCount: AugmentedQuery<ApiType, () => Observable<u32>, []> & QueryableStorageEntry<ApiType, []>
            /**
             * Proposals that have been made.
             **/
            proposals: AugmentedQuery<
                ApiType,
                (arg: u32 | AnyNumber | Uint8Array) => Observable<Option<PalletTreasuryProposal>>,
                [u32]
            > &
                QueryableStorageEntry<ApiType, [u32]>
            /**
             * Generic query
             **/
            [key: string]: QueryableStorageEntry<ApiType>
        }
        council: {
            /**
             * The current members of the collective. This is stored sorted (just by value).
             **/
            members: AugmentedQuery<ApiType, () => Observable<Vec<AccountId32>>, []> & QueryableStorageEntry<ApiType, []>
            /**
             * The prime member that helps determine the default vote behavior in case of absentations.
             **/
            prime: AugmentedQuery<ApiType, () => Observable<Option<AccountId32>>, []> & QueryableStorageEntry<ApiType, []>
            /**
             * Proposals so far.
             **/
            proposalCount: AugmentedQuery<ApiType, () => Observable<u32>, []> & QueryableStorageEntry<ApiType, []>
            /**
             * Actual proposal for a given hash, if it's current.
             **/
            proposalOf: AugmentedQuery<ApiType, (arg: H256 | string | Uint8Array) => Observable<Option<Call>>, [H256]> &
                QueryableStorageEntry<ApiType, [H256]>
            /**
             * The hashes of the active proposals.
             **/
            proposals: AugmentedQuery<ApiType, () => Observable<Vec<H256>>, []> & QueryableStorageEntry<ApiType, []>
            /**
             * Votes on a given proposal, if it is ongoing.
             **/
            voting: AugmentedQuery<
                ApiType,
                (arg: H256 | string | Uint8Array) => Observable<Option<PalletCollectiveVotes>>,
                [H256]
            > &
                QueryableStorageEntry<ApiType, [H256]>
            /**
             * Generic query
             **/
            [key: string]: QueryableStorageEntry<ApiType>
        }
        democracy: {
            /**
             * A record of who vetoed what. Maps proposal hash to a possible existent block number
             * (until when it may not be resubmitted) and who vetoed it.
             **/
            blacklist: AugmentedQuery<
                ApiType,
                (arg: H256 | string | Uint8Array) => Observable<Option<ITuple<[u32, Vec<AccountId32>]>>>,
                [H256]
            > &
                QueryableStorageEntry<ApiType, [H256]>
            /**
             * Record of all proposals that have been subject to emergency cancellation.
             **/
            cancellations: AugmentedQuery<ApiType, (arg: H256 | string | Uint8Array) => Observable<bool>, [H256]> &
                QueryableStorageEntry<ApiType, [H256]>
            /**
             * Those who have locked a deposit.
             *
             * TWOX-NOTE: Safe, as increasing integer keys are safe.
             **/
            depositOf: AugmentedQuery<
                ApiType,
                (arg: u32 | AnyNumber | Uint8Array) => Observable<Option<ITuple<[Vec<AccountId32>, u128]>>>,
                [u32]
            > &
                QueryableStorageEntry<ApiType, [u32]>
            /**
             * True if the last referendum tabled was submitted externally. False if it was a public
             * proposal.
             **/
            lastTabledWasExternal: AugmentedQuery<ApiType, () => Observable<bool>, []> & QueryableStorageEntry<ApiType, []>
            /**
             * The lowest referendum index representing an unbaked referendum. Equal to
             * `ReferendumCount` if there isn't a unbaked referendum.
             **/
            lowestUnbaked: AugmentedQuery<ApiType, () => Observable<u32>, []> & QueryableStorageEntry<ApiType, []>
            /**
             * General information concerning any proposal or referendum.
             * The `PreimageHash` refers to the preimage of the `Preimages` provider which can be a JSON
             * dump or IPFS hash of a JSON file.
             *
             * Consider a garbage collection for a metadata of finished referendums to `unrequest` (remove)
             * large preimages.
             **/
            metadataOf: AugmentedQuery<
                ApiType,
                (
                    arg:
                        | PalletDemocracyMetadataOwner
                        | { External: any }
                        | { Proposal: any }
                        | { Referendum: any }
                        | string
                        | Uint8Array
                ) => Observable<Option<H256>>,
                [PalletDemocracyMetadataOwner]
            > &
                QueryableStorageEntry<ApiType, [PalletDemocracyMetadataOwner]>
            /**
             * The referendum to be tabled whenever it would be valid to table an external proposal.
             * This happens when a referendum needs to be tabled and one of two conditions are met:
             * - `LastTabledWasExternal` is `false`; or
             * - `PublicProps` is empty.
             **/
            nextExternal: AugmentedQuery<
                ApiType,
                () => Observable<Option<ITuple<[FrameSupportPreimagesBounded, PalletDemocracyVoteThreshold]>>>,
                []
            > &
                QueryableStorageEntry<ApiType, []>
            /**
             * The number of (public) proposals that have been made so far.
             **/
            publicPropCount: AugmentedQuery<ApiType, () => Observable<u32>, []> & QueryableStorageEntry<ApiType, []>
            /**
             * The public proposals. Unsorted. The second item is the proposal.
             **/
            publicProps: AugmentedQuery<
                ApiType,
                () => Observable<Vec<ITuple<[u32, FrameSupportPreimagesBounded, AccountId32]>>>,
                []
            > &
                QueryableStorageEntry<ApiType, []>
            /**
             * The next free referendum index, aka the number of referenda started so far.
             **/
            referendumCount: AugmentedQuery<ApiType, () => Observable<u32>, []> & QueryableStorageEntry<ApiType, []>
            /**
             * Information concerning any given referendum.
             *
             * TWOX-NOTE: SAFE as indexes are not under an attacker’s control.
             **/
            referendumInfoOf: AugmentedQuery<
                ApiType,
                (arg: u32 | AnyNumber | Uint8Array) => Observable<Option<PalletDemocracyReferendumInfo>>,
                [u32]
            > &
                QueryableStorageEntry<ApiType, [u32]>
            /**
             * All votes for a particular voter. We store the balance for the number of votes that we
             * have recorded. The second item is the total amount of delegations, that will be added.
             *
             * TWOX-NOTE: SAFE as `AccountId`s are crypto hashes anyway.
             **/
            votingOf: AugmentedQuery<
                ApiType,
                (arg: AccountId32 | string | Uint8Array) => Observable<PalletDemocracyVoteVoting>,
                [AccountId32]
            > &
                QueryableStorageEntry<ApiType, [AccountId32]>
            /**
             * Generic query
             **/
            [key: string]: QueryableStorageEntry<ApiType>
        }
        dmpQueue: {
            /**
             * The configuration.
             **/
            configuration: AugmentedQuery<ApiType, () => Observable<CumulusPalletDmpQueueConfigData>, []> &
                QueryableStorageEntry<ApiType, []>
            /**
             * Counter for the related counted storage map
             **/
            counterForOverweight: AugmentedQuery<ApiType, () => Observable<u32>, []> & QueryableStorageEntry<ApiType, []>
            /**
             * The overweight messages.
             **/
            overweight: AugmentedQuery<
                ApiType,
                (arg: u64 | AnyNumber | Uint8Array) => Observable<Option<ITuple<[u32, Bytes]>>>,
                [u64]
            > &
                QueryableStorageEntry<ApiType, [u64]>
            /**
             * The page index.
             **/
            pageIndex: AugmentedQuery<ApiType, () => Observable<CumulusPalletDmpQueuePageIndexData>, []> &
                QueryableStorageEntry<ApiType, []>
            /**
             * The queue pages.
             **/
            pages: AugmentedQuery<ApiType, (arg: u32 | AnyNumber | Uint8Array) => Observable<Vec<ITuple<[u32, Bytes]>>>, [u32]> &
                QueryableStorageEntry<ApiType, [u32]>
            /**
             * Generic query
             **/
            [key: string]: QueryableStorageEntry<ApiType>
        }
        extrinsicPause: {
            /**
             * Paused extrinsics map
             *
             * The key is tuple with the name of the pallet and the extrinsic name and value is
             * an Option<()> which is None if the extrinsic is not paused and Some(()) if it is.
             **/
            pausedExtrinsics: AugmentedQuery<
                ApiType,
                (
                    arg: EpCoreFrameTypesExtrinsicInfo | { palletName?: any; extrinsicName?: any } | string | Uint8Array
                ) => Observable<Option<Null>>,
                [EpCoreFrameTypesExtrinsicInfo]
            > &
                QueryableStorageEntry<ApiType, [EpCoreFrameTypesExtrinsicInfo]>
            /**
             * Generic query
             **/
            [key: string]: QueryableStorageEntry<ApiType>
        }
        fuelTanks: {
            /**
             * Mapping of Fuel Tanks and their user Accounts to account data
             **/
            accounts: AugmentedQuery<
                ApiType,
                (
                    arg1: AccountId32 | string | Uint8Array,
                    arg2: AccountId32 | string | Uint8Array
                ) => Observable<Option<PalletFuelTanksUserAccount>>,
                [AccountId32, AccountId32]
            > &
                QueryableStorageEntry<ApiType, [AccountId32, AccountId32]>
            /**
             * Mapping of Fuel Tanks accounts to their data
             **/
            tanks: AugmentedQuery<
                ApiType,
                (arg: AccountId32 | string | Uint8Array) => Observable<Option<PalletFuelTanksFuelTank>>,
                [AccountId32]
            > &
                QueryableStorageEntry<ApiType, [AccountId32]>
            /**
             * Generic query
             **/
            [key: string]: QueryableStorageEntry<ApiType>
        }
        identity: {
            /**
             * Information that is pertinent to identify the entity behind an account.
             *
             * TWOX-NOTE: OK ― `AccountId` is a secure hash.
             **/
            identityOf: AugmentedQuery<
                ApiType,
                (arg: AccountId32 | string | Uint8Array) => Observable<Option<PalletIdentityRegistration>>,
                [AccountId32]
            > &
                QueryableStorageEntry<ApiType, [AccountId32]>
            /**
             * The set of registrars. Not expected to get very big as can only be added through a
             * special origin (likely a council motion).
             *
             * The index into this can be cast to `RegistrarIndex` to get a valid value.
             **/
            registrars: AugmentedQuery<ApiType, () => Observable<Vec<Option<PalletIdentityRegistrarInfo>>>, []> &
                QueryableStorageEntry<ApiType, []>
            /**
             * Alternative "sub" identities of this account.
             *
             * The first item is the deposit, the second is a vector of the accounts.
             *
             * TWOX-NOTE: OK ― `AccountId` is a secure hash.
             **/
            subsOf: AugmentedQuery<
                ApiType,
                (arg: AccountId32 | string | Uint8Array) => Observable<ITuple<[u128, Vec<AccountId32>]>>,
                [AccountId32]
            > &
                QueryableStorageEntry<ApiType, [AccountId32]>
            /**
             * The super-identity of an alternative "sub" identity together with its name, within that
             * context. If the account is not some other account's sub-identity, then just `None`.
             **/
            superOf: AugmentedQuery<
                ApiType,
                (arg: AccountId32 | string | Uint8Array) => Observable<Option<ITuple<[AccountId32, Data]>>>,
                [AccountId32]
            > &
                QueryableStorageEntry<ApiType, [AccountId32]>
            /**
             * Generic query
             **/
            [key: string]: QueryableStorageEntry<ApiType>
        }
        marketplace: {
            /**
             * Stores information about the marketplace
             **/
            info: AugmentedQuery<ApiType, () => Observable<PalletMarketplaceMarketPlaceInfo>, []> &
                QueryableStorageEntry<ApiType, []>
            /**
             * Listings by ID
             **/
            listings: AugmentedQuery<
                ApiType,
                (arg: H256 | string | Uint8Array) => Observable<Option<PalletMarketplaceFeaturesListing>>,
                [H256]
            > &
                QueryableStorageEntry<ApiType, [H256]>
            /**
             * Generic query
             **/
            [key: string]: QueryableStorageEntry<ApiType>
        }
        matrixXcm: {
            /**
             * The `dest_weight` limit and fee for executing XCM msg sent by matrixXcm. Must be
             * sufficient, otherwise the execution of XCM msg on relaychain will fail. For example it is
             * used for setting the minimum fee (in DOT) for statemint.
             *
             * XcmWeightFee: map: XcmOperation => MinimumWeightFeePair
             **/
            minimumWeights: AugmentedQuery<
                ApiType,
                (
                    arg: MatrixPalletXcmXcmOperation | { XTokensTransfer: any } | { ParachainFee: any } | string | Uint8Array
                ) => Observable<MatrixPalletXcmMinimumWeightFeePair>,
                [MatrixPalletXcmXcmOperation]
            > &
                QueryableStorageEntry<ApiType, [MatrixPalletXcmXcmOperation]>
            /**
             * Generic query
             **/
            [key: string]: QueryableStorageEntry<ApiType>
        }
        multisig: {
            /**
             * The set of open multisig operations.
             **/
            multisigs: AugmentedQuery<
                ApiType,
                (
                    arg1: AccountId32 | string | Uint8Array,
                    arg2: U8aFixed | string | Uint8Array
                ) => Observable<Option<PalletMultisigMultisig>>,
                [AccountId32, U8aFixed]
            > &
                QueryableStorageEntry<ApiType, [AccountId32, U8aFixed]>
            /**
             * Generic query
             **/
            [key: string]: QueryableStorageEntry<ApiType>
        }
        multiTokens: {
            /**
             * Map of Locations to AssetIds of Foreign Tokens
             **/
            assetIdsByLocation: AugmentedQuery<
                ApiType,
                (
                    arg: XcmV3MultiLocation | { parents?: any; interior?: any } | string | Uint8Array
                ) => Observable<Option<EpMultiTokensTokenAssetId>>,
                [XcmV3MultiLocation]
            > &
                QueryableStorageEntry<ApiType, [XcmV3MultiLocation]>
            /**
             * Metadata of collections and tokens.
             **/
            attributes: AugmentedQuery<
                ApiType,
                (
                    arg1: u128 | AnyNumber | Uint8Array,
                    arg2: Option<u128> | null | Uint8Array | u128 | AnyNumber,
                    arg3: Bytes | string | Uint8Array
                ) => Observable<Option<EpMultiTokensAttribute>>,
                [u128, Option<u128>, Bytes]
            > &
                QueryableStorageEntry<ApiType, [u128, Option<u128>, Bytes]>
            /**
             * Stores data for an ethereum address
             **/
            claimableCollectionIds: AugmentedQuery<
                ApiType,
                (arg: H160 | string | Uint8Array) => Observable<Option<Vec<u128>>>,
                [H160]
            > &
                QueryableStorageEntry<ApiType, [H160]>
            /**
             * Stores information for an account per collection
             **/
            collectionAccounts: AugmentedQuery<
                ApiType,
                (
                    arg1: u128 | AnyNumber | Uint8Array,
                    arg2: AccountId32 | string | Uint8Array
                ) => Observable<Option<PalletMultiTokensFeaturesCollectionTypesCollectionAccount>>,
                [u128, AccountId32]
            > &
                QueryableStorageEntry<ApiType, [u128, AccountId32]>
            /**
             * The collections in existence and their ownership details.
             **/
            collections: AugmentedQuery<
                ApiType,
                (arg: u128 | AnyNumber | Uint8Array) => Observable<Option<EpMultiTokensCollection>>,
                [u128]
            > &
                QueryableStorageEntry<ApiType, [u128]>
            /**
             * Stores last iterated keys for migrations. Used by multi block migrations
             * to resume from the last iterated key.
             *
             * Key is the storage prefix, value is the status of migration and last iterated key, if any.
             * i.e `["MultiTokens", "TokenAccounts"] -> (collection_id, token_id, account_id)`
             **/
            migrations: AugmentedQuery<
                ApiType,
                (arg: Bytes | string | Uint8Array) => Observable<Option<EpCoreFrameMigrationsMigration>>,
                [Bytes]
            > &
                QueryableStorageEntry<ApiType, [Bytes]>
            /**
             * Status of the current multi-block migration
             **/
            migrationStatus: AugmentedQuery<ApiType, () => Observable<EpCoreFrameMigrationsMigrationStage>, []> &
                QueryableStorageEntry<ApiType, []>
            /**
             * Map of ethereum collection id to the native collection id
             **/
            nativeCollectionIds: AugmentedQuery<
                ApiType,
                (arg: u128 | AnyNumber | Uint8Array) => Observable<Option<u128>>,
                [u128]
            > &
                QueryableStorageEntry<ApiType, [u128]>
            /**
             * Sequencer for collectionID generators.
             **/
            nextCollectionId: AugmentedQuery<ApiType, () => Observable<u128>, []> & QueryableStorageEntry<ApiType, []>
            /**
             * Accounts per token
             **/
            tokenAccounts: AugmentedQuery<
                ApiType,
                (
                    arg1: u128 | AnyNumber | Uint8Array,
                    arg2: u128 | AnyNumber | Uint8Array,
                    arg3: AccountId32 | string | Uint8Array
                ) => Observable<Option<PalletMultiTokensFeaturesTokenTypesTokenAccount>>,
                [u128, u128, AccountId32]
            > &
                QueryableStorageEntry<ApiType, [u128, u128, AccountId32]>
            /**
             * Tokens storage
             **/
            tokens: AugmentedQuery<
                ApiType,
                (
                    arg1: u128 | AnyNumber | Uint8Array,
                    arg2: u128 | AnyNumber | Uint8Array
                ) => Observable<Option<EpMultiTokensToken>>,
                [u128, u128]
            > &
                QueryableStorageEntry<ApiType, [u128, u128]>
            /**
             * These token ids can only be minted by calling `force_mint`. The second key is an ethereum
             * base token id, and the value is the highest token index that cannot be minted. All token
             * indexes start from 1, so effectively it blocks token indexes from 1 to the value.
             **/
            unmintableTokenIds: AugmentedQuery<
                ApiType,
                (arg1: u128 | AnyNumber | Uint8Array, arg2: u64 | AnyNumber | Uint8Array) => Observable<Option<u64>>,
                [u128, u64]
            > &
                QueryableStorageEntry<ApiType, [u128, u64]>
            /**
             * Generic query
             **/
            [key: string]: QueryableStorageEntry<ApiType>
        }
        parachainInfo: {
            parachainId: AugmentedQuery<ApiType, () => Observable<u32>, []> & QueryableStorageEntry<ApiType, []>
            /**
             * Generic query
             **/
            [key: string]: QueryableStorageEntry<ApiType>
        }
        parachainSystem: {
            /**
             * The number of HRMP messages we observed in `on_initialize` and thus used that number for
             * announcing the weight of `on_initialize` and `on_finalize`.
             **/
            announcedHrmpMessagesPerCandidate: AugmentedQuery<ApiType, () => Observable<u32>, []> &
                QueryableStorageEntry<ApiType, []>
            /**
             * The next authorized upgrade, if there is one.
             **/
            authorizedUpgrade: AugmentedQuery<
                ApiType,
                () => Observable<Option<CumulusPalletParachainSystemCodeUpgradeAuthorization>>,
                []
            > &
                QueryableStorageEntry<ApiType, []>
            /**
             * A custom head data that should be returned as result of `validate_block`.
             *
             * See [`Pallet::set_custom_validation_head_data`] for more information.
             **/
            customValidationHeadData: AugmentedQuery<ApiType, () => Observable<Option<Bytes>>, []> &
                QueryableStorageEntry<ApiType, []>
            /**
             * Were the validation data set to notify the relay chain?
             **/
            didSetValidationCode: AugmentedQuery<ApiType, () => Observable<bool>, []> & QueryableStorageEntry<ApiType, []>
            /**
             * The parachain host configuration that was obtained from the relay parent.
             *
             * This field is meant to be updated each block with the validation data inherent. Therefore,
             * before processing of the inherent, e.g. in `on_initialize` this data may be stale.
             *
             * This data is also absent from the genesis.
             **/
            hostConfiguration: AugmentedQuery<
                ApiType,
                () => Observable<Option<PolkadotPrimitivesV4AbridgedHostConfiguration>>,
                []
            > &
                QueryableStorageEntry<ApiType, []>
            /**
             * HRMP messages that were sent in a block.
             *
             * This will be cleared in `on_initialize` of each new block.
             **/
            hrmpOutboundMessages: AugmentedQuery<ApiType, () => Observable<Vec<PolkadotCorePrimitivesOutboundHrmpMessage>>, []> &
                QueryableStorageEntry<ApiType, []>
            /**
             * HRMP watermark that was set in a block.
             *
             * This will be cleared in `on_initialize` of each new block.
             **/
            hrmpWatermark: AugmentedQuery<ApiType, () => Observable<u32>, []> & QueryableStorageEntry<ApiType, []>
            /**
             * The last downward message queue chain head we have observed.
             *
             * This value is loaded before and saved after processing inbound downward messages carried
             * by the system inherent.
             **/
            lastDmqMqcHead: AugmentedQuery<ApiType, () => Observable<H256>, []> & QueryableStorageEntry<ApiType, []>
            /**
             * The message queue chain heads we have observed per each channel incoming channel.
             *
             * This value is loaded before and saved after processing inbound downward messages carried
             * by the system inherent.
             **/
            lastHrmpMqcHeads: AugmentedQuery<ApiType, () => Observable<BTreeMap<u32, H256>>, []> &
                QueryableStorageEntry<ApiType, []>
            /**
             * The relay chain block number associated with the last parachain block.
             **/
            lastRelayChainBlockNumber: AugmentedQuery<ApiType, () => Observable<u32>, []> & QueryableStorageEntry<ApiType, []>
            /**
             * Validation code that is set by the parachain and is to be communicated to collator and
             * consequently the relay-chain.
             *
             * This will be cleared in `on_initialize` of each new block if no other pallet already set
             * the value.
             **/
            newValidationCode: AugmentedQuery<ApiType, () => Observable<Option<Bytes>>, []> & QueryableStorageEntry<ApiType, []>
            /**
             * Upward messages that are still pending and not yet send to the relay chain.
             **/
            pendingUpwardMessages: AugmentedQuery<ApiType, () => Observable<Vec<Bytes>>, []> & QueryableStorageEntry<ApiType, []>
            /**
             * In case of a scheduled upgrade, this storage field contains the validation code to be applied.
             *
             * As soon as the relay chain gives us the go-ahead signal, we will overwrite the [`:code`][well_known_keys::CODE]
             * which will result the next block process with the new validation code. This concludes the upgrade process.
             *
             * [well_known_keys::CODE]: sp_core::storage::well_known_keys::CODE
             **/
            pendingValidationCode: AugmentedQuery<ApiType, () => Observable<Bytes>, []> & QueryableStorageEntry<ApiType, []>
            /**
             * Number of downward messages processed in a block.
             *
             * This will be cleared in `on_initialize` of each new block.
             **/
            processedDownwardMessages: AugmentedQuery<ApiType, () => Observable<u32>, []> & QueryableStorageEntry<ApiType, []>
            /**
             * The state proof for the last relay parent block.
             *
             * This field is meant to be updated each block with the validation data inherent. Therefore,
             * before processing of the inherent, e.g. in `on_initialize` this data may be stale.
             *
             * This data is also absent from the genesis.
             **/
            relayStateProof: AugmentedQuery<ApiType, () => Observable<Option<SpTrieStorageProof>>, []> &
                QueryableStorageEntry<ApiType, []>
            /**
             * The snapshot of some state related to messaging relevant to the current parachain as per
             * the relay parent.
             *
             * This field is meant to be updated each block with the validation data inherent. Therefore,
             * before processing of the inherent, e.g. in `on_initialize` this data may be stale.
             *
             * This data is also absent from the genesis.
             **/
            relevantMessagingState: AugmentedQuery<
                ApiType,
                () => Observable<Option<CumulusPalletParachainSystemRelayStateSnapshotMessagingStateSnapshot>>,
                []
            > &
                QueryableStorageEntry<ApiType, []>
            /**
             * The weight we reserve at the beginning of the block for processing DMP messages. This
             * overrides the amount set in the Config trait.
             **/
            reservedDmpWeightOverride: AugmentedQuery<ApiType, () => Observable<Option<SpWeightsWeightV2Weight>>, []> &
                QueryableStorageEntry<ApiType, []>
            /**
             * The weight we reserve at the beginning of the block for processing XCMP messages. This
             * overrides the amount set in the Config trait.
             **/
            reservedXcmpWeightOverride: AugmentedQuery<ApiType, () => Observable<Option<SpWeightsWeightV2Weight>>, []> &
                QueryableStorageEntry<ApiType, []>
            /**
             * An option which indicates if the relay-chain restricts signalling a validation code upgrade.
             * In other words, if this is `Some` and [`NewValidationCode`] is `Some` then the produced
             * candidate will be invalid.
             *
             * This storage item is a mirror of the corresponding value for the current parachain from the
             * relay-chain. This value is ephemeral which means it doesn't hit the storage. This value is
             * set after the inherent.
             **/
            upgradeRestrictionSignal: AugmentedQuery<
                ApiType,
                () => Observable<Option<PolkadotPrimitivesV4UpgradeRestriction>>,
                []
            > &
                QueryableStorageEntry<ApiType, []>
            /**
             * Upward messages that were sent in a block.
             *
             * This will be cleared in `on_initialize` of each new block.
             **/
            upwardMessages: AugmentedQuery<ApiType, () => Observable<Vec<Bytes>>, []> & QueryableStorageEntry<ApiType, []>
            /**
             * The [`PersistedValidationData`] set for this block.
             * This value is expected to be set only once per block and it's never stored
             * in the trie.
             **/
            validationData: AugmentedQuery<ApiType, () => Observable<Option<PolkadotPrimitivesV4PersistedValidationData>>, []> &
                QueryableStorageEntry<ApiType, []>
            /**
             * Generic query
             **/
            [key: string]: QueryableStorageEntry<ApiType>
        }
        polkadotXcm: {
            /**
             * The existing asset traps.
             *
             * Key is the blake2 256 hash of (origin, versioned `MultiAssets`) pair. Value is the number of
             * times this pair has been trapped (usually just 1 if it exists at all).
             **/
            assetTraps: AugmentedQuery<ApiType, (arg: H256 | string | Uint8Array) => Observable<u32>, [H256]> &
                QueryableStorageEntry<ApiType, [H256]>
            /**
             * The current migration's stage, if any.
             **/
            currentMigration: AugmentedQuery<ApiType, () => Observable<Option<PalletXcmVersionMigrationStage>>, []> &
                QueryableStorageEntry<ApiType, []>
            /**
             * Fungible assets which we know are locked on this chain.
             **/
            lockedFungibles: AugmentedQuery<
                ApiType,
                (arg: AccountId32 | string | Uint8Array) => Observable<Option<Vec<ITuple<[u128, XcmVersionedMultiLocation]>>>>,
                [AccountId32]
            > &
                QueryableStorageEntry<ApiType, [AccountId32]>
            /**
             * The ongoing queries.
             **/
            queries: AugmentedQuery<
                ApiType,
                (arg: u64 | AnyNumber | Uint8Array) => Observable<Option<PalletXcmQueryStatus>>,
                [u64]
            > &
                QueryableStorageEntry<ApiType, [u64]>
            /**
             * The latest available query index.
             **/
            queryCounter: AugmentedQuery<ApiType, () => Observable<u64>, []> & QueryableStorageEntry<ApiType, []>
            /**
             * Fungible assets which we know are locked on a remote chain.
             **/
            remoteLockedFungibles: AugmentedQuery<
                ApiType,
                (
                    arg1: u32 | AnyNumber | Uint8Array,
                    arg2: AccountId32 | string | Uint8Array,
                    arg3: XcmVersionedAssetId | { V3: any } | string | Uint8Array
                ) => Observable<Option<PalletXcmRemoteLockedFungibleRecord>>,
                [u32, AccountId32, XcmVersionedAssetId]
            > &
                QueryableStorageEntry<ApiType, [u32, AccountId32, XcmVersionedAssetId]>
            /**
             * Default version to encode XCM when latest version of destination is unknown. If `None`,
             * then the destinations whose XCM version is unknown are considered unreachable.
             **/
            safeXcmVersion: AugmentedQuery<ApiType, () => Observable<Option<u32>>, []> & QueryableStorageEntry<ApiType, []>
            /**
             * The Latest versions that we know various locations support.
             **/
            supportedVersion: AugmentedQuery<
                ApiType,
                (
                    arg1: u32 | AnyNumber | Uint8Array,
                    arg2: XcmVersionedMultiLocation | { V2: any } | { V3: any } | string | Uint8Array
                ) => Observable<Option<u32>>,
                [u32, XcmVersionedMultiLocation]
            > &
                QueryableStorageEntry<ApiType, [u32, XcmVersionedMultiLocation]>
            /**
             * Destinations whose latest XCM version we would like to know. Duplicates not allowed, and
             * the `u32` counter is the number of times that a send to the destination has been attempted,
             * which is used as a prioritization.
             **/
            versionDiscoveryQueue: AugmentedQuery<ApiType, () => Observable<Vec<ITuple<[XcmVersionedMultiLocation, u32]>>>, []> &
                QueryableStorageEntry<ApiType, []>
            /**
             * All locations that we have requested version notifications from.
             **/
            versionNotifiers: AugmentedQuery<
                ApiType,
                (
                    arg1: u32 | AnyNumber | Uint8Array,
                    arg2: XcmVersionedMultiLocation | { V2: any } | { V3: any } | string | Uint8Array
                ) => Observable<Option<u64>>,
                [u32, XcmVersionedMultiLocation]
            > &
                QueryableStorageEntry<ApiType, [u32, XcmVersionedMultiLocation]>
            /**
             * The target locations that are subscribed to our version changes, as well as the most recent
             * of our versions we informed them of.
             **/
            versionNotifyTargets: AugmentedQuery<
                ApiType,
                (
                    arg1: u32 | AnyNumber | Uint8Array,
                    arg2: XcmVersionedMultiLocation | { V2: any } | { V3: any } | string | Uint8Array
                ) => Observable<Option<ITuple<[u64, SpWeightsWeightV2Weight, u32]>>>,
                [u32, XcmVersionedMultiLocation]
            > &
                QueryableStorageEntry<ApiType, [u32, XcmVersionedMultiLocation]>
            /**
             * Global suspension state of the XCM executor.
             **/
            xcmExecutionSuspended: AugmentedQuery<ApiType, () => Observable<bool>, []> & QueryableStorageEntry<ApiType, []>
            /**
             * Generic query
             **/
            [key: string]: QueryableStorageEntry<ApiType>
        }
        pools: {
            /**
             * Information about the pools
             **/
            pools: AugmentedQuery<ApiType, () => Observable<BTreeMap<AccountId32, EpCoreFrameTypesPool>>, []> &
                QueryableStorageEntry<ApiType, []>
            /**
             * Generic query
             **/
            [key: string]: QueryableStorageEntry<ApiType>
        }
        preimage: {
            preimageFor: AugmentedQuery<
                ApiType,
                (
                    arg: ITuple<[H256, u32]> | [H256 | string | Uint8Array, u32 | AnyNumber | Uint8Array]
                ) => Observable<Option<Bytes>>,
                [ITuple<[H256, u32]>]
            > &
                QueryableStorageEntry<ApiType, [ITuple<[H256, u32]>]>
            /**
             * The request status of a given hash.
             **/
            statusFor: AugmentedQuery<
                ApiType,
                (arg: H256 | string | Uint8Array) => Observable<Option<PalletPreimageRequestStatus>>,
                [H256]
            > &
                QueryableStorageEntry<ApiType, [H256]>
            /**
             * Generic query
             **/
            [key: string]: QueryableStorageEntry<ApiType>
        }
        scheduler: {
            /**
             * Items to be executed, indexed by the block number that they should be executed on.
             **/
            agenda: AugmentedQuery<
                ApiType,
                (arg: u32 | AnyNumber | Uint8Array) => Observable<Vec<Option<PalletSchedulerScheduled>>>,
                [u32]
            > &
                QueryableStorageEntry<ApiType, [u32]>
            incompleteSince: AugmentedQuery<ApiType, () => Observable<Option<u32>>, []> & QueryableStorageEntry<ApiType, []>
            /**
             * Lookup from a name to the block number and index of the task.
             *
             * For v3 -> v4 the previously unbounded identities are Blake2-256 hashed to form the v4
             * identities.
             **/
            lookup: AugmentedQuery<
                ApiType,
                (arg: U8aFixed | string | Uint8Array) => Observable<Option<ITuple<[u32, u32]>>>,
                [U8aFixed]
            > &
                QueryableStorageEntry<ApiType, [U8aFixed]>
            /**
             * Generic query
             **/
            [key: string]: QueryableStorageEntry<ApiType>
        }
        session: {
            /**
             * Current index of the session.
             **/
            currentIndex: AugmentedQuery<ApiType, () => Observable<u32>, []> & QueryableStorageEntry<ApiType, []>
            /**
             * Indices of disabled validators.
             *
             * The vec is always kept sorted so that we can find whether a given validator is
             * disabled using binary search. It gets cleared when `on_session_ending` returns
             * a new set of identities.
             **/
            disabledValidators: AugmentedQuery<ApiType, () => Observable<Vec<u32>>, []> & QueryableStorageEntry<ApiType, []>
            /**
             * The owner of a key. The key is the `KeyTypeId` + the encoded key.
             **/
            keyOwner: AugmentedQuery<
                ApiType,
                (
                    arg:
                        | ITuple<[SpCoreCryptoKeyTypeId, Bytes]>
                        | [SpCoreCryptoKeyTypeId | string | Uint8Array, Bytes | string | Uint8Array]
                ) => Observable<Option<AccountId32>>,
                [ITuple<[SpCoreCryptoKeyTypeId, Bytes]>]
            > &
                QueryableStorageEntry<ApiType, [ITuple<[SpCoreCryptoKeyTypeId, Bytes]>]>
            /**
             * The next session keys for a validator.
             **/
            nextKeys: AugmentedQuery<
                ApiType,
                (arg: AccountId32 | string | Uint8Array) => Observable<Option<EnjinMatrixRuntimeSessionKeys>>,
                [AccountId32]
            > &
                QueryableStorageEntry<ApiType, [AccountId32]>
            /**
             * True if the underlying economic identities or weighting behind the validators
             * has changed in the queued validator set.
             **/
            queuedChanged: AugmentedQuery<ApiType, () => Observable<bool>, []> & QueryableStorageEntry<ApiType, []>
            /**
             * The queued keys for the next session. When the next session begins, these keys
             * will be used to determine the validator's session keys.
             **/
            queuedKeys: AugmentedQuery<ApiType, () => Observable<Vec<ITuple<[AccountId32, EnjinMatrixRuntimeSessionKeys]>>>, []> &
                QueryableStorageEntry<ApiType, []>
            /**
             * The current set of validators.
             **/
            validators: AugmentedQuery<ApiType, () => Observable<Vec<AccountId32>>, []> & QueryableStorageEntry<ApiType, []>
            /**
             * Generic query
             **/
            [key: string]: QueryableStorageEntry<ApiType>
        }
        system: {
            /**
             * The full account information for a particular account ID.
             **/
            account: AugmentedQuery<
                ApiType,
                (arg: AccountId32 | string | Uint8Array) => Observable<FrameSystemAccountInfo>,
                [AccountId32]
            > &
                QueryableStorageEntry<ApiType, [AccountId32]>
            /**
             * Total length (in bytes) for all extrinsics put together, for the current block.
             **/
            allExtrinsicsLen: AugmentedQuery<ApiType, () => Observable<Option<u32>>, []> & QueryableStorageEntry<ApiType, []>
            /**
             * Map of block numbers to block hashes.
             **/
            blockHash: AugmentedQuery<ApiType, (arg: u32 | AnyNumber | Uint8Array) => Observable<H256>, [u32]> &
                QueryableStorageEntry<ApiType, [u32]>
            /**
             * The current weight for the block.
             **/
            blockWeight: AugmentedQuery<ApiType, () => Observable<FrameSupportDispatchPerDispatchClassWeight>, []> &
                QueryableStorageEntry<ApiType, []>
            /**
             * Digest of the current block, also part of the block header.
             **/
            digest: AugmentedQuery<ApiType, () => Observable<SpRuntimeDigest>, []> & QueryableStorageEntry<ApiType, []>
            /**
             * The number of events in the `Events<T>` list.
             **/
            eventCount: AugmentedQuery<ApiType, () => Observable<u32>, []> & QueryableStorageEntry<ApiType, []>
            /**
             * Events deposited for the current block.
             *
             * NOTE: The item is unbound and should therefore never be read on chain.
             * It could otherwise inflate the PoV size of a block.
             *
             * Events have a large in-memory size. Box the events to not go out-of-memory
             * just in case someone still reads them from within the runtime.
             **/
            events: AugmentedQuery<ApiType, () => Observable<Vec<FrameSystemEventRecord>>, []> &
                QueryableStorageEntry<ApiType, []>
            /**
             * Mapping between a topic (represented by T::Hash) and a vector of indexes
             * of events in the `<Events<T>>` list.
             *
             * All topic vectors have deterministic storage locations depending on the topic. This
             * allows light-clients to leverage the changes trie storage tracking mechanism and
             * in case of changes fetch the list of events of interest.
             *
             * The value has the type `(T::BlockNumber, EventIndex)` because if we used only just
             * the `EventIndex` then in case if the topic has the same contents on the next block
             * no notification will be triggered thus the event might be lost.
             **/
            eventTopics: AugmentedQuery<
                ApiType,
                (arg: H256 | string | Uint8Array) => Observable<Vec<ITuple<[u32, u32]>>>,
                [H256]
            > &
                QueryableStorageEntry<ApiType, [H256]>
            /**
             * The execution phase of the block.
             **/
            executionPhase: AugmentedQuery<ApiType, () => Observable<Option<FrameSystemPhase>>, []> &
                QueryableStorageEntry<ApiType, []>
            /**
             * Total extrinsics count for the current block.
             **/
            extrinsicCount: AugmentedQuery<ApiType, () => Observable<Option<u32>>, []> & QueryableStorageEntry<ApiType, []>
            /**
             * Extrinsics data for the current block (maps an extrinsic's index to its data).
             **/
            extrinsicData: AugmentedQuery<ApiType, (arg: u32 | AnyNumber | Uint8Array) => Observable<Bytes>, [u32]> &
                QueryableStorageEntry<ApiType, [u32]>
            /**
             * Stores the `spec_version` and `spec_name` of when the last runtime upgrade happened.
             **/
            lastRuntimeUpgrade: AugmentedQuery<ApiType, () => Observable<Option<FrameSystemLastRuntimeUpgradeInfo>>, []> &
                QueryableStorageEntry<ApiType, []>
            /**
             * The current block number being processed. Set by `execute_block`.
             **/
            number: AugmentedQuery<ApiType, () => Observable<u32>, []> & QueryableStorageEntry<ApiType, []>
            /**
             * Hash of the previous block.
             **/
            parentHash: AugmentedQuery<ApiType, () => Observable<H256>, []> & QueryableStorageEntry<ApiType, []>
            /**
             * True if we have upgraded so that AccountInfo contains three types of `RefCount`. False
             * (default) if not.
             **/
            upgradedToTripleRefCount: AugmentedQuery<ApiType, () => Observable<bool>, []> & QueryableStorageEntry<ApiType, []>
            /**
             * True if we have upgraded so that `type RefCount` is `u32`. False (default) if not.
             **/
            upgradedToU32RefCount: AugmentedQuery<ApiType, () => Observable<bool>, []> & QueryableStorageEntry<ApiType, []>
            /**
             * Generic query
             **/
            [key: string]: QueryableStorageEntry<ApiType>
        }
        technicalCommittee: {
            /**
             * The current members of the collective. This is stored sorted (just by value).
             **/
            members: AugmentedQuery<ApiType, () => Observable<Vec<AccountId32>>, []> & QueryableStorageEntry<ApiType, []>
            /**
             * The prime member that helps determine the default vote behavior in case of absentations.
             **/
            prime: AugmentedQuery<ApiType, () => Observable<Option<AccountId32>>, []> & QueryableStorageEntry<ApiType, []>
            /**
             * Proposals so far.
             **/
            proposalCount: AugmentedQuery<ApiType, () => Observable<u32>, []> & QueryableStorageEntry<ApiType, []>
            /**
             * Actual proposal for a given hash, if it's current.
             **/
            proposalOf: AugmentedQuery<ApiType, (arg: H256 | string | Uint8Array) => Observable<Option<Call>>, [H256]> &
                QueryableStorageEntry<ApiType, [H256]>
            /**
             * The hashes of the active proposals.
             **/
            proposals: AugmentedQuery<ApiType, () => Observable<Vec<H256>>, []> & QueryableStorageEntry<ApiType, []>
            /**
             * Votes on a given proposal, if it is ongoing.
             **/
            voting: AugmentedQuery<
                ApiType,
                (arg: H256 | string | Uint8Array) => Observable<Option<PalletCollectiveVotes>>,
                [H256]
            > &
                QueryableStorageEntry<ApiType, [H256]>
            /**
             * Generic query
             **/
            [key: string]: QueryableStorageEntry<ApiType>
        }
        technicalMembership: {
            /**
             * The current membership, stored as an ordered Vec.
             **/
            members: AugmentedQuery<ApiType, () => Observable<Vec<AccountId32>>, []> & QueryableStorageEntry<ApiType, []>
            /**
             * The current prime member, if one exists.
             **/
            prime: AugmentedQuery<ApiType, () => Observable<Option<AccountId32>>, []> & QueryableStorageEntry<ApiType, []>
            /**
             * Generic query
             **/
            [key: string]: QueryableStorageEntry<ApiType>
        }
        timestamp: {
            /**
             * Did the timestamp get updated in this block?
             **/
            didUpdate: AugmentedQuery<ApiType, () => Observable<bool>, []> & QueryableStorageEntry<ApiType, []>
            /**
             * Current time for the current block.
             **/
            now: AugmentedQuery<ApiType, () => Observable<u64>, []> & QueryableStorageEntry<ApiType, []>
            /**
             * Generic query
             **/
            [key: string]: QueryableStorageEntry<ApiType>
        }
        transactionPayment: {
            nextFeeMultiplier: AugmentedQuery<ApiType, () => Observable<u128>, []> & QueryableStorageEntry<ApiType, []>
            storageVersion: AugmentedQuery<ApiType, () => Observable<PalletTransactionPaymentReleases>, []> &
                QueryableStorageEntry<ApiType, []>
            /**
             * Generic query
             **/
            [key: string]: QueryableStorageEntry<ApiType>
        }
        xcmpQueue: {
            /**
             * Counter for the related counted storage map
             **/
            counterForOverweight: AugmentedQuery<ApiType, () => Observable<u32>, []> & QueryableStorageEntry<ApiType, []>
            /**
             * Inbound aggregate XCMP messages. It can only be one per ParaId/block.
             **/
            inboundXcmpMessages: AugmentedQuery<
                ApiType,
                (arg1: u32 | AnyNumber | Uint8Array, arg2: u32 | AnyNumber | Uint8Array) => Observable<Bytes>,
                [u32, u32]
            > &
                QueryableStorageEntry<ApiType, [u32, u32]>
            /**
             * Status of the inbound XCMP channels.
             **/
            inboundXcmpStatus: AugmentedQuery<ApiType, () => Observable<Vec<CumulusPalletXcmpQueueInboundChannelDetails>>, []> &
                QueryableStorageEntry<ApiType, []>
            /**
             * The messages outbound in a given XCMP channel.
             **/
            outboundXcmpMessages: AugmentedQuery<
                ApiType,
                (arg1: u32 | AnyNumber | Uint8Array, arg2: u16 | AnyNumber | Uint8Array) => Observable<Bytes>,
                [u32, u16]
            > &
                QueryableStorageEntry<ApiType, [u32, u16]>
            /**
             * The non-empty XCMP channels in order of becoming non-empty, and the index of the first
             * and last outbound message. If the two indices are equal, then it indicates an empty
             * queue and there must be a non-`Ok` `OutboundStatus`. We assume queues grow no greater
             * than 65535 items. Queue indices for normal messages begin at one; zero is reserved in
             * case of the need to send a high-priority signal message this block.
             * The bool is true if there is a signal message waiting to be sent.
             **/
            outboundXcmpStatus: AugmentedQuery<ApiType, () => Observable<Vec<CumulusPalletXcmpQueueOutboundChannelDetails>>, []> &
                QueryableStorageEntry<ApiType, []>
            /**
             * The messages that exceeded max individual message weight budget.
             *
             * These message stay in this storage map until they are manually dispatched via
             * `service_overweight`.
             **/
            overweight: AugmentedQuery<
                ApiType,
                (arg: u64 | AnyNumber | Uint8Array) => Observable<Option<ITuple<[u32, u32, Bytes]>>>,
                [u64]
            > &
                QueryableStorageEntry<ApiType, [u64]>
            /**
             * The number of overweight messages ever recorded in `Overweight`. Also doubles as the next
             * available free overweight index.
             **/
            overweightCount: AugmentedQuery<ApiType, () => Observable<u64>, []> & QueryableStorageEntry<ApiType, []>
            /**
             * The configuration which controls the dynamics of the outbound queue.
             **/
            queueConfig: AugmentedQuery<ApiType, () => Observable<CumulusPalletXcmpQueueQueueConfigData>, []> &
                QueryableStorageEntry<ApiType, []>
            /**
             * Whether or not the XCMP queue is suspended from executing incoming XCMs or not.
             **/
            queueSuspended: AugmentedQuery<ApiType, () => Observable<bool>, []> & QueryableStorageEntry<ApiType, []>
            /**
             * Any signal messages waiting to be sent.
             **/
            signalMessages: AugmentedQuery<ApiType, (arg: u32 | AnyNumber | Uint8Array) => Observable<Bytes>, [u32]> &
                QueryableStorageEntry<ApiType, [u32]>
            /**
             * Generic query
             **/
            [key: string]: QueryableStorageEntry<ApiType>
        }
        xTokens: {
            /**
             * Generic query
             **/
            [key: string]: QueryableStorageEntry<ApiType>
        }
    } // AugmentedQueries
} // declare module
