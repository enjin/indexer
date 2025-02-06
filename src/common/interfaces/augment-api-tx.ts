// Auto-generated via `yarn polkadot-types-from-chain`, do not edit
/* eslint-disable */

// import type lookup before we augment - in some environments
// this is required to allow for ambient/previous definitions
import '@polkadot/api-base/types/submittable'

import type { ApiTypes, AugmentedSubmittable, SubmittableExtrinsic, SubmittableExtrinsicFunction } from '@polkadot/api-base/types'
import type { Data } from '@polkadot/types'
import type { Bytes, Compact, Null, Option, U8aFixed, Vec, bool, i32, u128, u16, u32, u64, u8 } from '@polkadot/types-codec'
import type { AnyNumber, IMethod, ITuple } from '@polkadot/types-codec/types'
import type { AccountId32, Call, H160, H256, MultiAddress, Perbill } from '@polkadot/types/interfaces/runtime'
import type {
    CumulusPrimitivesCoreAggregateMessageOrigin,
    CumulusPrimitivesParachainInherentParachainInherentData,
    EnjinMatrixRuntimeOriginCaller,
    EnjinMatrixRuntimeSessionKeys,
    EpCoreFrameTypesAccount,
    EpMultiTokensAttribute,
    EpMultiTokensBatchAttributeKeyValuePair,
    EpMultiTokensBatchRecipientDefaultMintParams,
    EpMultiTokensBatchRecipientDefaultTransferParams,
    EpMultiTokensCollection,
    EpMultiTokensCollectionDefaultCollectionDescriptor,
    EpMultiTokensCollectionDefaultCollectionMutation,
    EpMultiTokensFreeze,
    EpMultiTokensPolicyBurnDefaultBurnParams,
    EpMultiTokensPolicyMintDefaultMintParams,
    EpMultiTokensPolicyMintFlexibleMintParams,
    EpMultiTokensPolicyTransferDefaultTransferParams,
    EpMultiTokensToken,
    EpMultiTokensTokenAssetId,
    EpMultiTokensTokenDefaultTokenMutation,
    FrameSupportPreimagesBounded,
    MatrixPalletXcmCurrencyIdAmountPair,
    MatrixPalletXcmImplsParachainId,
    MatrixPalletXcmMinimumWeightFeePair,
    MatrixPalletXcmXcmOperation,
    PalletBalancesAdjustmentDirection,
    PalletClaimsClaim,
    PalletClaimsRejectData,
    PalletDemocracyConviction,
    PalletDemocracyMetadataOwner,
    PalletDemocracyVoteAccountVote,
    PalletFuelTanksConsumption,
    PalletFuelTanksDispatchSettings,
    PalletFuelTanksFuelTankDescriptor,
    PalletFuelTanksImplsDefaultTankMutation,
    PalletFuelTanksRulesDispatchRuleKind,
    PalletFuelTanksRulesRuleSetDescriptor,
    PalletIdentityJudgement,
    PalletIdentityLegacyIdentityInfo,
    PalletMarketplaceFeaturesListingListingData,
    PalletMarketplaceFeaturesOfferCounterOfferResponse,
    PalletMigrationsHistoricCleanupSelector,
    PalletMigrationsMigrationCursor,
    PalletMultiTokensFeaturesCollectionTypesCollectionAccount,
    PalletMultiTokensFeaturesTokenTypesTokenAccount,
    PalletMultisigTimepoint,
    PalletPoolsPoolsMutation,
    RuntimeCommonImplsProxyProxyType,
    SpCoreEcdsaSignature,
    SpRuntimeMultiSignature,
    SpWeightsWeightV2Weight,
    StagingXcmV4Location,
    XcmV3WeightLimit,
    XcmVersionedAsset,
    XcmVersionedAssets,
    XcmVersionedLocation,
    XcmVersionedXcm,
} from '@polkadot/types/lookup'

export type __AugmentedSubmittable = AugmentedSubmittable<() => unknown>
export type __SubmittableExtrinsic<ApiType extends ApiTypes> = SubmittableExtrinsic<ApiType>
export type __SubmittableExtrinsicFunction<ApiType extends ApiTypes> = SubmittableExtrinsicFunction<ApiType>

declare module '@polkadot/api-base/types/submittable' {
    interface AugmentedSubmittables<ApiType extends ApiTypes> {
        balances: {
            /**
             * Adjust the total issuance in a saturating way.
             *
             * Can only be called by root and always needs a positive `delta`.
             *
             * # Example
             **/
            forceAdjustTotalIssuance: AugmentedSubmittable<
                (
                    direction: PalletBalancesAdjustmentDirection | 'Increase' | 'Decrease' | number | Uint8Array,
                    delta: Compact<u128> | AnyNumber | Uint8Array
                ) => SubmittableExtrinsic<ApiType>,
                [PalletBalancesAdjustmentDirection, Compact<u128>]
            >
            /**
             * Set the regular balance of a given account.
             *
             * The dispatch origin for this call is `root`.
             **/
            forceSetBalance: AugmentedSubmittable<
                (
                    who:
                        | MultiAddress
                        | { Id: any }
                        | { Index: any }
                        | { Raw: any }
                        | { Address32: any }
                        | { Address20: any }
                        | string
                        | Uint8Array,
                    newFree: Compact<u128> | AnyNumber | Uint8Array
                ) => SubmittableExtrinsic<ApiType>,
                [MultiAddress, Compact<u128>]
            >
            /**
             * Exactly as `transfer_allow_death`, except the origin must be root and the source account
             * may be specified.
             **/
            forceTransfer: AugmentedSubmittable<
                (
                    source:
                        | MultiAddress
                        | { Id: any }
                        | { Index: any }
                        | { Raw: any }
                        | { Address32: any }
                        | { Address20: any }
                        | string
                        | Uint8Array,
                    dest:
                        | MultiAddress
                        | { Id: any }
                        | { Index: any }
                        | { Raw: any }
                        | { Address32: any }
                        | { Address20: any }
                        | string
                        | Uint8Array,
                    value: Compact<u128> | AnyNumber | Uint8Array
                ) => SubmittableExtrinsic<ApiType>,
                [MultiAddress, MultiAddress, Compact<u128>]
            >
            /**
             * Unreserve some balance from a user by force.
             *
             * Can only be called by ROOT.
             **/
            forceUnreserve: AugmentedSubmittable<
                (
                    who:
                        | MultiAddress
                        | { Id: any }
                        | { Index: any }
                        | { Raw: any }
                        | { Address32: any }
                        | { Address20: any }
                        | string
                        | Uint8Array,
                    amount: u128 | AnyNumber | Uint8Array
                ) => SubmittableExtrinsic<ApiType>,
                [MultiAddress, u128]
            >
            /**
             * Transfer the entire transferable balance from the caller account.
             *
             * NOTE: This function only attempts to transfer _transferable_ balances. This means that
             * any locked, reserved, or existential deposits (when `keep_alive` is `true`), will not be
             * transferred by this function. To ensure that this function results in a killed account,
             * you might need to prepare the account by removing any reference counters, storage
             * deposits, etc...
             *
             * The dispatch origin of this call must be Signed.
             *
             * - `dest`: The recipient of the transfer.
             * - `keep_alive`: A boolean to determine if the `transfer_all` operation should send all
             * of the funds the account has, causing the sender account to be killed (false), or
             * transfer everything except at least the existential deposit, which will guarantee to
             * keep the sender account alive (true).
             **/
            transferAll: AugmentedSubmittable<
                (
                    dest:
                        | MultiAddress
                        | { Id: any }
                        | { Index: any }
                        | { Raw: any }
                        | { Address32: any }
                        | { Address20: any }
                        | string
                        | Uint8Array,
                    keepAlive: bool | boolean | Uint8Array
                ) => SubmittableExtrinsic<ApiType>,
                [MultiAddress, bool]
            >
            /**
             * Transfer some liquid free balance to another account.
             *
             * `transfer_allow_death` will set the `FreeBalance` of the sender and receiver.
             * If the sender's account is below the existential deposit as a result
             * of the transfer, the account will be reaped.
             *
             * The dispatch origin for this call must be `Signed` by the transactor.
             **/
            transferAllowDeath: AugmentedSubmittable<
                (
                    dest:
                        | MultiAddress
                        | { Id: any }
                        | { Index: any }
                        | { Raw: any }
                        | { Address32: any }
                        | { Address20: any }
                        | string
                        | Uint8Array,
                    value: Compact<u128> | AnyNumber | Uint8Array
                ) => SubmittableExtrinsic<ApiType>,
                [MultiAddress, Compact<u128>]
            >
            /**
             * Same as the [`transfer_allow_death`] call, but with a check that the transfer will not
             * kill the origin account.
             *
             * 99% of the time you want [`transfer_allow_death`] instead.
             *
             * [`transfer_allow_death`]: struct.Pallet.html#method.transfer
             **/
            transferKeepAlive: AugmentedSubmittable<
                (
                    dest:
                        | MultiAddress
                        | { Id: any }
                        | { Index: any }
                        | { Raw: any }
                        | { Address32: any }
                        | { Address20: any }
                        | string
                        | Uint8Array,
                    value: Compact<u128> | AnyNumber | Uint8Array
                ) => SubmittableExtrinsic<ApiType>,
                [MultiAddress, Compact<u128>]
            >
            /**
             * Upgrade a specified account.
             *
             * - `origin`: Must be `Signed`.
             * - `who`: The account to be upgraded.
             *
             * This will waive the transaction fee if at least all but 10% of the accounts needed to
             * be upgraded. (We let some not have to be upgraded just in order to allow for the
             * possibililty of churn).
             **/
            upgradeAccounts: AugmentedSubmittable<
                (who: Vec<AccountId32> | (AccountId32 | string | Uint8Array)[]) => SubmittableExtrinsic<ApiType>,
                [Vec<AccountId32>]
            >
            /**
             * Generic tx
             **/
            [key: string]: SubmittableExtrinsicFunction<ApiType>
        }
        bounties: {
            /**
             * Accept the curator role for a bounty.
             * A deposit will be reserved from curator and refund upon successful payout.
             *
             * May only be called from the curator.
             *
             * ## Complexity
             * - O(1).
             **/
            acceptCurator: AugmentedSubmittable<
                (bountyId: Compact<u32> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>,
                [Compact<u32>]
            >
            /**
             * Approve a bounty proposal. At a later time, the bounty will be funded and become active
             * and the original deposit will be returned.
             *
             * May only be called from `T::SpendOrigin`.
             *
             * ## Complexity
             * - O(1).
             **/
            approveBounty: AugmentedSubmittable<
                (bountyId: Compact<u32> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>,
                [Compact<u32>]
            >
            /**
             * Award bounty to a beneficiary account. The beneficiary will be able to claim the funds
             * after a delay.
             *
             * The dispatch origin for this call must be the curator of this bounty.
             *
             * - `bounty_id`: Bounty ID to award.
             * - `beneficiary`: The beneficiary account whom will receive the payout.
             *
             * ## Complexity
             * - O(1).
             **/
            awardBounty: AugmentedSubmittable<
                (
                    bountyId: Compact<u32> | AnyNumber | Uint8Array,
                    beneficiary:
                        | MultiAddress
                        | { Id: any }
                        | { Index: any }
                        | { Raw: any }
                        | { Address32: any }
                        | { Address20: any }
                        | string
                        | Uint8Array
                ) => SubmittableExtrinsic<ApiType>,
                [Compact<u32>, MultiAddress]
            >
            /**
             * Claim the payout from an awarded bounty after payout delay.
             *
             * The dispatch origin for this call must be the beneficiary of this bounty.
             *
             * - `bounty_id`: Bounty ID to claim.
             *
             * ## Complexity
             * - O(1).
             **/
            claimBounty: AugmentedSubmittable<
                (bountyId: Compact<u32> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>,
                [Compact<u32>]
            >
            /**
             * Cancel a proposed or active bounty. All the funds will be sent to treasury and
             * the curator deposit will be unreserved if possible.
             *
             * Only `T::RejectOrigin` is able to cancel a bounty.
             *
             * - `bounty_id`: Bounty ID to cancel.
             *
             * ## Complexity
             * - O(1).
             **/
            closeBounty: AugmentedSubmittable<
                (bountyId: Compact<u32> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>,
                [Compact<u32>]
            >
            /**
             * Extend the expiry time of an active bounty.
             *
             * The dispatch origin for this call must be the curator of this bounty.
             *
             * - `bounty_id`: Bounty ID to extend.
             * - `remark`: additional information.
             *
             * ## Complexity
             * - O(1).
             **/
            extendBountyExpiry: AugmentedSubmittable<
                (
                    bountyId: Compact<u32> | AnyNumber | Uint8Array,
                    remark: Bytes | string | Uint8Array
                ) => SubmittableExtrinsic<ApiType>,
                [Compact<u32>, Bytes]
            >
            /**
             * Propose a new bounty.
             *
             * The dispatch origin for this call must be _Signed_.
             *
             * Payment: `TipReportDepositBase` will be reserved from the origin account, as well as
             * `DataDepositPerByte` for each byte in `reason`. It will be unreserved upon approval,
             * or slashed when rejected.
             *
             * - `curator`: The curator account whom will manage this bounty.
             * - `fee`: The curator fee.
             * - `value`: The total payment amount of this bounty, curator fee included.
             * - `description`: The description of this bounty.
             **/
            proposeBounty: AugmentedSubmittable<
                (
                    value: Compact<u128> | AnyNumber | Uint8Array,
                    description: Bytes | string | Uint8Array
                ) => SubmittableExtrinsic<ApiType>,
                [Compact<u128>, Bytes]
            >
            /**
             * Propose a curator to a funded bounty.
             *
             * May only be called from `T::SpendOrigin`.
             *
             * ## Complexity
             * - O(1).
             **/
            proposeCurator: AugmentedSubmittable<
                (
                    bountyId: Compact<u32> | AnyNumber | Uint8Array,
                    curator:
                        | MultiAddress
                        | { Id: any }
                        | { Index: any }
                        | { Raw: any }
                        | { Address32: any }
                        | { Address20: any }
                        | string
                        | Uint8Array,
                    fee: Compact<u128> | AnyNumber | Uint8Array
                ) => SubmittableExtrinsic<ApiType>,
                [Compact<u32>, MultiAddress, Compact<u128>]
            >
            /**
             * Unassign curator from a bounty.
             *
             * This function can only be called by the `RejectOrigin` a signed origin.
             *
             * If this function is called by the `RejectOrigin`, we assume that the curator is
             * malicious or inactive. As a result, we will slash the curator when possible.
             *
             * If the origin is the curator, we take this as a sign they are unable to do their job and
             * they willingly give up. We could slash them, but for now we allow them to recover their
             * deposit and exit without issue. (We may want to change this if it is abused.)
             *
             * Finally, the origin can be anyone if and only if the curator is "inactive". This allows
             * anyone in the community to call out that a curator is not doing their due diligence, and
             * we should pick a new curator. In this case the curator should also be slashed.
             *
             * ## Complexity
             * - O(1).
             **/
            unassignCurator: AugmentedSubmittable<
                (bountyId: Compact<u32> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>,
                [Compact<u32>]
            >
            /**
             * Generic tx
             **/
            [key: string]: SubmittableExtrinsicFunction<ApiType>
        }
        claims: {
            /**
             * Make a claim to collect your EFI.
             *
             * The dispatch origin for this call must be _None_.
             *
             * Unsigned Validation:
             * A call to claim is deemed valid if the signature provided matches
             * the expected signed message of:
             *
             * > Ethereum Signed Message:
             * > (configured prefix string)(address)
             *
             * and `address` matches the `dest` account.
             *
             * Parameters:
             * - `dest`: The destination account to payout the claim.
             * - `ethereum_signature`: The signature of an ethereum signed message matching the format
             * described above.
             * - `ethereum_address` : The Ethereum address from which the message is signed.
             *
             * <weight>
             * The weight of this call is invariant over the input parameters.
             * Weight includes logic to validate unsigned `claim` call.
             *
             * Total Complexity: O(1)
             * </weight>
             **/
            claim: AugmentedSubmittable<
                (
                    dest: AccountId32 | string | Uint8Array,
                    ethereumSignature: SpCoreEcdsaSignature | string | Uint8Array,
                    ethereumAddress: H160 | string | Uint8Array
                ) => SubmittableExtrinsic<ApiType>,
                [AccountId32, SpCoreEcdsaSignature, H160]
            >
            /**
             * Mint a new claim for an Ethereum address to collect EFIs. The dispatch origin for this
             * call must be _Root_. This extrinsic is in the pallet in case an event was somehow missed
             * by the relayer and now the root or the governance admin want to mint a claim for a user
             * directly without going through the request claim process.
             *
             * Parameters:
             * - `who`: The Ethereum address allowed to collect this claim.
             * - `value`: The number of EFIs that will be claimed.
             *
             * <weight>
             * The weight of this call is invariant over the input parameters.
             *
             * Total Complexity: O(1)
             * </weight>
             **/
            mintClaim: AugmentedSubmittable<
                (who: H160 | string | Uint8Array, value: u128 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>,
                [H160, u128]
            >
            /**
             * `move_claim` moves the claim from one Ethereum address to another
             *
             * Arguments:
             *
             * * `old`: EthereumAddress,
             * * `new`: EthereumAddress,
             *
             * The weight of this call is invariant over the input parameters.
             *
             * Total Complexity: O(1)
             **/
            moveClaim: AugmentedSubmittable<
                (old: H160 | string | Uint8Array, updated: H160 | string | Uint8Array) => SubmittableExtrinsic<ApiType>,
                [H160, H160]
            >
            /**
             * `reject_claims` is a function that is called by ForceOrigin and allows to reject a batch
             * of claims that were rejected upon verification
             *
             * Arguments:
             *
             * * `batch_data`: A vector of user accounts and transaction hashes.
             *
             * The weight of this call is invariant over the input parameters.
             * Weight includes logic to iterate over pending approval ETH transaction
             * And REMOVE the pending ETH transaction
             *
             * Total Complexity: O(N)
             **/
            rejectClaims: AugmentedSubmittable<
                (
                    batchData:
                        | Vec<PalletClaimsRejectData>
                        | (PalletClaimsRejectData | { account?: any; hash_?: any } | string | Uint8Array)[]
                ) => SubmittableExtrinsic<ApiType>,
                [Vec<PalletClaimsRejectData>]
            >
            /**
             * `request_claims` is only accessible by the relayer and allows them to request claims for
             * a batch of transactions.
             *
             * The users burns their Ethereum EFI/ENJ holdings to get them onto Enjin relay as
             * ENJ2 tokens. The relayer listens to the burn events batches them and calls this
             * extrinsic to requests claim for them. Relayer also sends the block number upto which all
             * the burn events were processed as a parameter. This block is stored on pallet to prevent
             * replay attack. Also it is important to set the exchange rate before this extrinsic is
             * called.
             *
             * Parameters:
             *
             * * `block_number`: The block number of Ethereum or Parachain block that contains the
             * transaction.
             * * `batch_data`: A vector of EthereumTransactionDataOf structs.
             *
             * The weight of this call is invariant over the input parameters.
             * Weight includes logic to iterate over pending approval ETH transaction
             *
             * Total Complexity: O(N)
             **/
            requestClaims: AugmentedSubmittable<
                (
                    blockNumber: u32 | AnyNumber | Uint8Array,
                    batchData:
                        | Vec<PalletClaimsClaim>
                        | (PalletClaimsClaim | { hash_?: any; claim?: any; isEfiToken?: any } | string | Uint8Array)[]
                ) => SubmittableExtrinsic<ApiType>,
                [u32, Vec<PalletClaimsClaim>]
            >
            /**
             * This function sets a delay time for claims and requires a governance origin to execute.
             *
             * Arguments:
             *
             * * `delay_time`: The delay_time parameter is the number of blocks that must pass before a
             * certain action can be taken. In this case, it is being used to set the delay time for
             * claims in the governance pallet.
             *
             * Returns:
             *
             * either `Ok(())` if the delay time is successfully set, or an `Err` with a
             * `DispatchError` if the delay time is less than 24 hours.
             **/
            setDelayTime: AugmentedSubmittable<(delayTime: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>
            /**
             * `set_exchange_rate` is a function that can be called by ForceOrigin and
             * it sets the exchange rate
             *
             * Parameters:
             *
             * * `numerator`: u128,
             * * `denominator`: u128,
             *
             * The weight of this call is invariant over the input parameters.
             *
             * Total Complexity: O(1)
             **/
            setExchangeRate: AugmentedSubmittable<
                (
                    numerator: u128 | AnyNumber | Uint8Array,
                    denominator: u128 | AnyNumber | Uint8Array
                ) => SubmittableExtrinsic<ApiType>,
                [u128, u128]
            >
            /**
             * Generic tx
             **/
            [key: string]: SubmittableExtrinsicFunction<ApiType>
        }
        collatorStaking: {
            /**
             * Set the current maximum number of candidates, must be within 0 and
             * [`MaxCandidates`](Config::MaxCandidates)
             *
             * Only [`ForceOrigin`](Config::ForceOrigin) can call this function.
             *
             * # Errors
             *
             * - [`Error::TooManyCandidates`] if the number of candidates is already at the maximum.
             **/
            forceSetCurrentMaxCandidates: AugmentedSubmittable<
                (maxCandidates: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>,
                [u32]
            >
            /**
             * Set the minimum collator stake amount
             *
             * [`T::ForceOrigin`](Config::ForceOrigin) call only
             **/
            forceSetMinCollatorStake: AugmentedSubmittable<
                (minCollatorStake: u128 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>,
                [u128]
            >
            /**
             * Join the list of candidates for collation.
             *
             * Being added to the candidate set means the caller may be selected to be a collator from
             * the next session onwards.
             *
             * # Errors
             *
             * - [`Error::BelowMinStakeAmount`] if `amount` is below the minimum required amount.
             * - [`Error::NominationExists`] if nomination already exists.
             * - [`Error::AccountIdNotRegistered`] if `AccountId` is not registered as a collator.
             * - [`Error::NoAssociatedValidatorId`] if no associated validator ID for `AccountId`.
             * - [`Error::TooManyCandidates`] if the number of candidates is already at the maximum.
             **/
            joinCandidates: AugmentedSubmittable<
                (
                    amount: u128 | AnyNumber | Uint8Array,
                    rewardsCut: Perbill | AnyNumber | Uint8Array
                ) => SubmittableExtrinsic<ApiType>,
                [u128, Perbill]
            >
            /**
             * Nominate a specific candidate to be selected for collation and block production.
             *
             * This allows the caller to put up a stake to nominate an existing collator, this
             * increases the `total_stake` of the collation candidate and increases the chance to get
             * selected as a collator.
             *
             * # Errors
             *
             * - [`Error::CandidateDoesNotExist`] if the candidate does not exist.
             * - [`Error::NominationExists`] if the nomination already exists.
             * - [`Error::BelowMinNominationStakeAmount`] if the nomination amount is below the
             * minimum.
             * - [`Error::TooManyNominations`] if there are too many nominations for the candidate.
             **/
            nominate: AugmentedSubmittable<
                (
                    collatorId: AccountId32 | string | Uint8Array,
                    amount: u128 | AnyNumber | Uint8Array
                ) => SubmittableExtrinsic<ApiType>,
                [AccountId32, u128]
            >
            /**
             * Remove a nomination previously registered for a specific collator candidate.
             *
             * The call will also refund the stake to the caller.
             *
             * # Errors
             *
             * - [`Error::CandidateDoesNotExist`] if the candidate does not exist.
             * - [`Error::NominationDoesNotExist`] if the nomination does not exist.
             * - [`Error::TooManyCandidates`] if there are too many candidates in the set.
             **/
            removeNomination: AugmentedSubmittable<
                (collatorId: AccountId32 | string | Uint8Array) => SubmittableExtrinsic<ApiType>,
                [AccountId32]
            >
            /**
             * Force set the invulnerables.
             *
             * These accounts will always be in the collator set and do not require a stake.
             *
             * [`ForceOrigin`](Config::ForceOrigin) call only.
             *
             * # Errors
             *
             * - [`Error::TooManyInvulnerables`] if the number of invulnerables exceeds the maximum
             **/
            setInvulnerables: AugmentedSubmittable<
                (accounts: Vec<AccountId32> | (AccountId32 | string | Uint8Array)[]) => SubmittableExtrinsic<ApiType>,
                [Vec<AccountId32>]
            >
            /**
             * Leave the collator set of this parachain.
             *
             * In this case, if the calling account is already a collator, an exit
             * is registered so that this account is not selected for the next set of collators.
             * Otherwise, if the account is only a candidate, this candidate will be removed
             * and the nominations would be freed up.
             *
             * # Errors
             *
             * - [`Error::CandidateDoesNotExist`] if candidate does not exist.
             * - [`Error::CannotUnbondInvulnerable`] cannot unbond an invulnerable collator.
             * - [`Error::ExitInProgress`] if unbonding for collator already in progress.
             **/
            unbond: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>
            /**
             * Generic tx
             **/
            [key: string]: SubmittableExtrinsicFunction<ApiType>
        }
        communityPool: {
            /**
             * Approve a proposal.
             *
             * ## Dispatch Origin
             *
             * Must be [`Config::ApproveOrigin`].
             *
             * ## Details
             *
             * At a later time, the proposal will be allocated to the beneficiary and the original
             * deposit will be returned.
             *
             * ### Complexity
             * - O(1).
             *
             * ## Events
             *
             * No events are emitted from this dispatch.
             **/
            approveProposal: AugmentedSubmittable<
                (proposalId: Compact<u32> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>,
                [Compact<u32>]
            >
            /**
             * Check the status of the spend and remove it from the storage if processed.
             *
             * ## Dispatch Origin
             *
             * Must be signed.
             *
             * ## Details
             *
             * The status check is a prerequisite for retrying a failed payout.
             * If a spend has either succeeded or expired, it is removed from the storage by this
             * function. In such instances, transaction fees are refunded.
             *
             * ### Parameters
             * - `index`: The spend index.
             *
             * ## Events
             *
             * Emits [`Event::PaymentFailed`] if the spend payout has failed.
             * Emits [`Event::SpendProcessed`] if the spend payout has succeed.
             **/
            checkStatus: AugmentedSubmittable<(index: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>
            /**
             * Claim a spend.
             *
             * ## Dispatch Origin
             *
             * Must be signed.
             *
             * ## Details
             *
             * Spends must be claimed within some temporal bounds. A spend may be claimed within one
             * [`Config::PayoutPeriod`] from the `valid_from` block.
             * In case of a payout failure, the spend status must be updated with the `check_status`
             * dispatchable before retrying with the current function.
             *
             * ### Parameters
             * - `index`: The spend index.
             *
             * ## Events
             *
             * Emits [`Event::Paid`] if successful.
             **/
            payout: AugmentedSubmittable<(index: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>
            /**
             * Put forward a suggestion for spending.
             *
             * ## Dispatch Origin
             *
             * Must be signed.
             *
             * ## Details
             * A deposit proportional to the value is reserved and slashed if the proposal is rejected.
             * It is returned once the proposal is awarded.
             *
             * ### Complexity
             * - O(1)
             *
             * ## Events
             *
             * Emits [`Event::Proposed`] if successful.
             **/
            proposeSpend: AugmentedSubmittable<
                (
                    value: Compact<u128> | AnyNumber | Uint8Array,
                    beneficiary:
                        | MultiAddress
                        | { Id: any }
                        | { Index: any }
                        | { Raw: any }
                        | { Address32: any }
                        | { Address20: any }
                        | string
                        | Uint8Array
                ) => SubmittableExtrinsic<ApiType>,
                [Compact<u128>, MultiAddress]
            >
            /**
             * Reject a proposed spend.
             *
             * ## Dispatch Origin
             *
             * Must be [`Config::RejectOrigin`].
             *
             * ## Details
             * The original deposit will be slashed.
             *
             * ### Complexity
             * - O(1)
             *
             * ## Events
             *
             * Emits [`Event::Rejected`] if successful.
             **/
            rejectProposal: AugmentedSubmittable<
                (proposalId: Compact<u32> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>,
                [Compact<u32>]
            >
            /**
             * Force a previously approved proposal to be removed from the approval queue.
             *
             * ## Dispatch Origin
             *
             * Must be [`Config::RejectOrigin`].
             *
             * ## Details
             *
             * The original deposit will no longer be returned.
             *
             * ### Parameters
             * - `proposal_id`: The index of a proposal
             *
             * ### Complexity
             * - O(A) where `A` is the number of approvals
             *
             * ### Errors
             * - [`Error::ProposalNotApproved`]: The `proposal_id` supplied was not found in the
             * approval queue, i.e., the proposal has not been approved. This could also mean the
             * proposal does not exist altogether, thus there is no way it would have been approved
             * in the first place.
             **/
            removeApproval: AugmentedSubmittable<
                (proposalId: Compact<u32> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>,
                [Compact<u32>]
            >
            /**
             * Propose and approve a spend of treasury funds.
             *
             * ## Dispatch Origin
             *
             * Must be [`Config::SpendOrigin`] with the `Success` value being at least
             * `amount` of `asset_kind` in the native asset. The amount of `asset_kind` is converted
             * for assertion using the [`Config::BalanceConverter`].
             *
             * ## Details
             *
             * Create an approved spend for transferring a specific `amount` of `asset_kind` to a
             * designated beneficiary. The spend must be claimed using the `payout` dispatchable within
             * the [`Config::PayoutPeriod`].
             *
             * ### Parameters
             * - `asset_kind`: An indicator of the specific asset class to be spent.
             * - `amount`: The amount to be transferred from the treasury to the `beneficiary`.
             * - `beneficiary`: The beneficiary of the spend.
             * - `valid_from`: The block number from which the spend can be claimed. It can refer to
             * the past if the resulting spend has not yet expired according to the
             * [`Config::PayoutPeriod`]. If `None`, the spend can be claimed immediately after
             * approval.
             *
             * ## Events
             *
             * Emits [`Event::AssetSpendApproved`] if successful.
             **/
            spend: AugmentedSubmittable<
                (
                    assetKind: Null | null,
                    amount: Compact<u128> | AnyNumber | Uint8Array,
                    beneficiary: AccountId32 | string | Uint8Array,
                    validFrom: Option<u32> | null | Uint8Array | u32 | AnyNumber
                ) => SubmittableExtrinsic<ApiType>,
                [Null, Compact<u128>, AccountId32, Option<u32>]
            >
            /**
             * Propose and approve a spend of treasury funds.
             *
             * ## Dispatch Origin
             *
             * Must be [`Config::SpendOrigin`] with the `Success` value being at least `amount`.
             *
             * ### Details
             * NOTE: For record-keeping purposes, the proposer is deemed to be equivalent to the
             * beneficiary.
             *
             * ### Parameters
             * - `amount`: The amount to be transferred from the treasury to the `beneficiary`.
             * - `beneficiary`: The destination account for the transfer.
             *
             * ## Events
             *
             * Emits [`Event::SpendApproved`] if successful.
             **/
            spendLocal: AugmentedSubmittable<
                (
                    amount: Compact<u128> | AnyNumber | Uint8Array,
                    beneficiary:
                        | MultiAddress
                        | { Id: any }
                        | { Index: any }
                        | { Raw: any }
                        | { Address32: any }
                        | { Address20: any }
                        | string
                        | Uint8Array
                ) => SubmittableExtrinsic<ApiType>,
                [Compact<u128>, MultiAddress]
            >
            /**
             * Void previously approved spend.
             *
             * ## Dispatch Origin
             *
             * Must be [`Config::RejectOrigin`].
             *
             * ## Details
             *
             * A spend void is only possible if the payout has not been attempted yet.
             *
             * ### Parameters
             * - `index`: The spend index.
             *
             * ## Events
             *
             * Emits [`Event::AssetSpendVoided`] if successful.
             **/
            voidSpend: AugmentedSubmittable<(index: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>
            /**
             * Generic tx
             **/
            [key: string]: SubmittableExtrinsicFunction<ApiType>
        }
        council: {
            /**
             * Close a vote that is either approved, disapproved or whose voting period has ended.
             *
             * May be called by any signed account in order to finish voting and close the proposal.
             *
             * If called before the end of the voting period it will only close the vote if it is
             * has enough votes to be approved or disapproved.
             *
             * If called after the end of the voting period abstentions are counted as rejections
             * unless there is a prime member set and the prime member cast an approval.
             *
             * If the close operation completes successfully with disapproval, the transaction fee will
             * be waived. Otherwise execution of the approved operation will be charged to the caller.
             *
             * + `proposal_weight_bound`: The maximum amount of weight consumed by executing the closed
             * proposal.
             * + `length_bound`: The upper bound for the length of the proposal in storage. Checked via
             * `storage::read` so it is `size_of::<u32>() == 4` larger than the pure length.
             *
             * ## Complexity
             * - `O(B + M + P1 + P2)` where:
             * - `B` is `proposal` size in bytes (length-fee-bounded)
             * - `M` is members-count (code- and governance-bounded)
             * - `P1` is the complexity of `proposal` preimage.
             * - `P2` is proposal-count (code-bounded)
             **/
            close: AugmentedSubmittable<
                (
                    proposalHash: H256 | string | Uint8Array,
                    index: Compact<u32> | AnyNumber | Uint8Array,
                    proposalWeightBound: SpWeightsWeightV2Weight | { refTime?: any; proofSize?: any } | string | Uint8Array,
                    lengthBound: Compact<u32> | AnyNumber | Uint8Array
                ) => SubmittableExtrinsic<ApiType>,
                [H256, Compact<u32>, SpWeightsWeightV2Weight, Compact<u32>]
            >
            /**
             * Disapprove a proposal, close, and remove it from the system, regardless of its current
             * state.
             *
             * Must be called by the Root origin.
             *
             * Parameters:
             * * `proposal_hash`: The hash of the proposal that should be disapproved.
             *
             * ## Complexity
             * O(P) where P is the number of max proposals
             **/
            disapproveProposal: AugmentedSubmittable<
                (proposalHash: H256 | string | Uint8Array) => SubmittableExtrinsic<ApiType>,
                [H256]
            >
            /**
             * Dispatch a proposal from a member using the `Member` origin.
             *
             * Origin must be a member of the collective.
             *
             * ## Complexity:
             * - `O(B + M + P)` where:
             * - `B` is `proposal` size in bytes (length-fee-bounded)
             * - `M` members-count (code-bounded)
             * - `P` complexity of dispatching `proposal`
             **/
            execute: AugmentedSubmittable<
                (
                    proposal: Call | IMethod | string | Uint8Array,
                    lengthBound: Compact<u32> | AnyNumber | Uint8Array
                ) => SubmittableExtrinsic<ApiType>,
                [Call, Compact<u32>]
            >
            /**
             * Add a new proposal to either be voted on or executed directly.
             *
             * Requires the sender to be member.
             *
             * `threshold` determines whether `proposal` is executed directly (`threshold < 2`)
             * or put up for voting.
             *
             * ## Complexity
             * - `O(B + M + P1)` or `O(B + M + P2)` where:
             * - `B` is `proposal` size in bytes (length-fee-bounded)
             * - `M` is members-count (code- and governance-bounded)
             * - branching is influenced by `threshold` where:
             * - `P1` is proposal execution complexity (`threshold < 2`)
             * - `P2` is proposals-count (code-bounded) (`threshold >= 2`)
             **/
            propose: AugmentedSubmittable<
                (
                    threshold: Compact<u32> | AnyNumber | Uint8Array,
                    proposal: Call | IMethod | string | Uint8Array,
                    lengthBound: Compact<u32> | AnyNumber | Uint8Array
                ) => SubmittableExtrinsic<ApiType>,
                [Compact<u32>, Call, Compact<u32>]
            >
            /**
             * Set the collective's membership.
             *
             * - `new_members`: The new member list. Be nice to the chain and provide it sorted.
             * - `prime`: The prime member whose vote sets the default.
             * - `old_count`: The upper bound for the previous number of members in storage. Used for
             * weight estimation.
             *
             * The dispatch of this call must be `SetMembersOrigin`.
             *
             * NOTE: Does not enforce the expected `MaxMembers` limit on the amount of members, but
             * the weight estimations rely on it to estimate dispatchable weight.
             *
             * # WARNING:
             *
             * The `pallet-collective` can also be managed by logic outside of the pallet through the
             * implementation of the trait [`ChangeMembers`].
             * Any call to `set_members` must be careful that the member set doesn't get out of sync
             * with other logic managing the member set.
             *
             * ## Complexity:
             * - `O(MP + N)` where:
             * - `M` old-members-count (code- and governance-bounded)
             * - `N` new-members-count (code- and governance-bounded)
             * - `P` proposals-count (code-bounded)
             **/
            setMembers: AugmentedSubmittable<
                (
                    newMembers: Vec<AccountId32> | (AccountId32 | string | Uint8Array)[],
                    prime: Option<AccountId32> | null | Uint8Array | AccountId32 | string,
                    oldCount: u32 | AnyNumber | Uint8Array
                ) => SubmittableExtrinsic<ApiType>,
                [Vec<AccountId32>, Option<AccountId32>, u32]
            >
            /**
             * Add an aye or nay vote for the sender to the given proposal.
             *
             * Requires the sender to be a member.
             *
             * Transaction fees will be waived if the member is voting on any particular proposal
             * for the first time and the call is successful. Subsequent vote changes will charge a
             * fee.
             * ## Complexity
             * - `O(M)` where `M` is members-count (code- and governance-bounded)
             **/
            vote: AugmentedSubmittable<
                (
                    proposal: H256 | string | Uint8Array,
                    index: Compact<u32> | AnyNumber | Uint8Array,
                    approve: bool | boolean | Uint8Array
                ) => SubmittableExtrinsic<ApiType>,
                [H256, Compact<u32>, bool]
            >
            /**
             * Generic tx
             **/
            [key: string]: SubmittableExtrinsicFunction<ApiType>
        }
        cumulusXcm: {
            /**
             * Generic tx
             **/
            [key: string]: SubmittableExtrinsicFunction<ApiType>
        }
        democracy: {
            /**
             * Permanently place a proposal into the blacklist. This prevents it from ever being
             * proposed again.
             *
             * If called on a queued public or external proposal, then this will result in it being
             * removed. If the `ref_index` supplied is an active referendum with the proposal hash,
             * then it will be cancelled.
             *
             * The dispatch origin of this call must be `BlacklistOrigin`.
             *
             * - `proposal_hash`: The proposal hash to blacklist permanently.
             * - `ref_index`: An ongoing referendum whose hash is `proposal_hash`, which will be
             * cancelled.
             *
             * Weight: `O(p)` (though as this is an high-privilege dispatch, we assume it has a
             * reasonable value).
             **/
            blacklist: AugmentedSubmittable<
                (
                    proposalHash: H256 | string | Uint8Array,
                    maybeRefIndex: Option<u32> | null | Uint8Array | u32 | AnyNumber
                ) => SubmittableExtrinsic<ApiType>,
                [H256, Option<u32>]
            >
            /**
             * Remove a proposal.
             *
             * The dispatch origin of this call must be `CancelProposalOrigin`.
             *
             * - `prop_index`: The index of the proposal to cancel.
             *
             * Weight: `O(p)` where `p = PublicProps::<T>::decode_len()`
             **/
            cancelProposal: AugmentedSubmittable<
                (propIndex: Compact<u32> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>,
                [Compact<u32>]
            >
            /**
             * Remove a referendum.
             *
             * The dispatch origin of this call must be _Root_.
             *
             * - `ref_index`: The index of the referendum to cancel.
             *
             * # Weight: `O(1)`.
             **/
            cancelReferendum: AugmentedSubmittable<
                (refIndex: Compact<u32> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>,
                [Compact<u32>]
            >
            /**
             * Clears all public proposals.
             *
             * The dispatch origin of this call must be _Root_.
             *
             * Weight: `O(1)`.
             **/
            clearPublicProposals: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>
            /**
             * Delegate the voting power (with some given conviction) of the sending account.
             *
             * The balance delegated is locked for as long as it's delegated, and thereafter for the
             * time appropriate for the conviction's lock period.
             *
             * The dispatch origin of this call must be _Signed_, and the signing account must either:
             * - be delegating already; or
             * - have no voting activity (if there is, then it will need to be removed/consolidated
             * through `reap_vote` or `unvote`).
             *
             * - `to`: The account whose voting the `target` account's voting power will follow.
             * - `conviction`: The conviction that will be attached to the delegated votes. When the
             * account is undelegated, the funds will be locked for the corresponding period.
             * - `balance`: The amount of the account's balance to be used in delegating. This must not
             * be more than the account's current balance.
             *
             * Emits `Delegated`.
             *
             * Weight: `O(R)` where R is the number of referendums the voter delegating to has
             * voted on. Weight is charged as if maximum votes.
             **/
            delegate: AugmentedSubmittable<
                (
                    to:
                        | MultiAddress
                        | { Id: any }
                        | { Index: any }
                        | { Raw: any }
                        | { Address32: any }
                        | { Address20: any }
                        | string
                        | Uint8Array,
                    conviction:
                        | PalletDemocracyConviction
                        | 'None'
                        | 'Locked1x'
                        | 'Locked2x'
                        | 'Locked3x'
                        | 'Locked4x'
                        | 'Locked5x'
                        | 'Locked6x'
                        | number
                        | Uint8Array,
                    balance: u128 | AnyNumber | Uint8Array
                ) => SubmittableExtrinsic<ApiType>,
                [MultiAddress, PalletDemocracyConviction, u128]
            >
            /**
             * Schedule an emergency cancellation of a referendum. Cannot happen twice to the same
             * referendum.
             *
             * The dispatch origin of this call must be `CancellationOrigin`.
             *
             * -`ref_index`: The index of the referendum to cancel.
             *
             * Weight: `O(1)`.
             **/
            emergencyCancel: AugmentedSubmittable<
                (refIndex: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>,
                [u32]
            >
            /**
             * Schedule a referendum to be tabled once it is legal to schedule an external
             * referendum.
             *
             * The dispatch origin of this call must be `ExternalOrigin`.
             *
             * - `proposal_hash`: The preimage hash of the proposal.
             **/
            externalPropose: AugmentedSubmittable<
                (
                    proposal:
                        | FrameSupportPreimagesBounded
                        | { Legacy: any }
                        | { Inline: any }
                        | { Lookup: any }
                        | string
                        | Uint8Array
                ) => SubmittableExtrinsic<ApiType>,
                [FrameSupportPreimagesBounded]
            >
            /**
             * Schedule a negative-turnout-bias referendum to be tabled next once it is legal to
             * schedule an external referendum.
             *
             * The dispatch of this call must be `ExternalDefaultOrigin`.
             *
             * - `proposal_hash`: The preimage hash of the proposal.
             *
             * Unlike `external_propose`, blacklisting has no effect on this and it may replace a
             * pre-scheduled `external_propose` call.
             *
             * Weight: `O(1)`
             **/
            externalProposeDefault: AugmentedSubmittable<
                (
                    proposal:
                        | FrameSupportPreimagesBounded
                        | { Legacy: any }
                        | { Inline: any }
                        | { Lookup: any }
                        | string
                        | Uint8Array
                ) => SubmittableExtrinsic<ApiType>,
                [FrameSupportPreimagesBounded]
            >
            /**
             * Schedule a majority-carries referendum to be tabled next once it is legal to schedule
             * an external referendum.
             *
             * The dispatch of this call must be `ExternalMajorityOrigin`.
             *
             * - `proposal_hash`: The preimage hash of the proposal.
             *
             * Unlike `external_propose`, blacklisting has no effect on this and it may replace a
             * pre-scheduled `external_propose` call.
             *
             * Weight: `O(1)`
             **/
            externalProposeMajority: AugmentedSubmittable<
                (
                    proposal:
                        | FrameSupportPreimagesBounded
                        | { Legacy: any }
                        | { Inline: any }
                        | { Lookup: any }
                        | string
                        | Uint8Array
                ) => SubmittableExtrinsic<ApiType>,
                [FrameSupportPreimagesBounded]
            >
            /**
             * Schedule the currently externally-proposed majority-carries referendum to be tabled
             * immediately. If there is no externally-proposed referendum currently, or if there is one
             * but it is not a majority-carries referendum then it fails.
             *
             * The dispatch of this call must be `FastTrackOrigin`.
             *
             * - `proposal_hash`: The hash of the current external proposal.
             * - `voting_period`: The period that is allowed for voting on this proposal. Increased to
             * Must be always greater than zero.
             * For `FastTrackOrigin` must be equal or greater than `FastTrackVotingPeriod`.
             * - `delay`: The number of block after voting has ended in approval and this should be
             * enacted. This doesn't have a minimum amount.
             *
             * Emits `Started`.
             *
             * Weight: `O(1)`
             **/
            fastTrack: AugmentedSubmittable<
                (
                    proposalHash: H256 | string | Uint8Array,
                    votingPeriod: u32 | AnyNumber | Uint8Array,
                    delay: u32 | AnyNumber | Uint8Array
                ) => SubmittableExtrinsic<ApiType>,
                [H256, u32, u32]
            >
            /**
             * Propose a sensitive action to be taken.
             *
             * The dispatch origin of this call must be _Signed_ and the sender must
             * have funds to cover the deposit.
             *
             * - `proposal_hash`: The hash of the proposal preimage.
             * - `value`: The amount of deposit (must be at least `MinimumDeposit`).
             *
             * Emits `Proposed`.
             **/
            propose: AugmentedSubmittable<
                (
                    proposal:
                        | FrameSupportPreimagesBounded
                        | { Legacy: any }
                        | { Inline: any }
                        | { Lookup: any }
                        | string
                        | Uint8Array,
                    value: Compact<u128> | AnyNumber | Uint8Array
                ) => SubmittableExtrinsic<ApiType>,
                [FrameSupportPreimagesBounded, Compact<u128>]
            >
            /**
             * Remove a vote for a referendum.
             *
             * If the `target` is equal to the signer, then this function is exactly equivalent to
             * `remove_vote`. If not equal to the signer, then the vote must have expired,
             * either because the referendum was cancelled, because the voter lost the referendum or
             * because the conviction period is over.
             *
             * The dispatch origin of this call must be _Signed_.
             *
             * - `target`: The account of the vote to be removed; this account must have voted for
             * referendum `index`.
             * - `index`: The index of referendum of the vote to be removed.
             *
             * Weight: `O(R + log R)` where R is the number of referenda that `target` has voted on.
             * Weight is calculated for the maximum number of vote.
             **/
            removeOtherVote: AugmentedSubmittable<
                (
                    target:
                        | MultiAddress
                        | { Id: any }
                        | { Index: any }
                        | { Raw: any }
                        | { Address32: any }
                        | { Address20: any }
                        | string
                        | Uint8Array,
                    index: u32 | AnyNumber | Uint8Array
                ) => SubmittableExtrinsic<ApiType>,
                [MultiAddress, u32]
            >
            /**
             * Remove a vote for a referendum.
             *
             * If:
             * - the referendum was cancelled, or
             * - the referendum is ongoing, or
             * - the referendum has ended such that
             * - the vote of the account was in opposition to the result; or
             * - there was no conviction to the account's vote; or
             * - the account made a split vote
             * ...then the vote is removed cleanly and a following call to `unlock` may result in more
             * funds being available.
             *
             * If, however, the referendum has ended and:
             * - it finished corresponding to the vote of the account, and
             * - the account made a standard vote with conviction, and
             * - the lock period of the conviction is not over
             * ...then the lock will be aggregated into the overall account's lock, which may involve
             * *overlocking* (where the two locks are combined into a single lock that is the maximum
             * of both the amount locked and the time is it locked for).
             *
             * The dispatch origin of this call must be _Signed_, and the signer must have a vote
             * registered for referendum `index`.
             *
             * - `index`: The index of referendum of the vote to be removed.
             *
             * Weight: `O(R + log R)` where R is the number of referenda that `target` has voted on.
             * Weight is calculated for the maximum number of vote.
             **/
            removeVote: AugmentedSubmittable<(index: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>
            /**
             * Signals agreement with a particular proposal.
             *
             * The dispatch origin of this call must be _Signed_ and the sender
             * must have funds to cover the deposit, equal to the original deposit.
             *
             * - `proposal`: The index of the proposal to second.
             **/
            second: AugmentedSubmittable<
                (proposal: Compact<u32> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>,
                [Compact<u32>]
            >
            /**
             * Set or clear a metadata of a proposal or a referendum.
             *
             * Parameters:
             * - `origin`: Must correspond to the `MetadataOwner`.
             * - `ExternalOrigin` for an external proposal with the `SuperMajorityApprove`
             * threshold.
             * - `ExternalDefaultOrigin` for an external proposal with the `SuperMajorityAgainst`
             * threshold.
             * - `ExternalMajorityOrigin` for an external proposal with the `SimpleMajority`
             * threshold.
             * - `Signed` by a creator for a public proposal.
             * - `Signed` to clear a metadata for a finished referendum.
             * - `Root` to set a metadata for an ongoing referendum.
             * - `owner`: an identifier of a metadata owner.
             * - `maybe_hash`: The hash of an on-chain stored preimage. `None` to clear a metadata.
             **/
            setMetadata: AugmentedSubmittable<
                (
                    owner:
                        | PalletDemocracyMetadataOwner
                        | { External: any }
                        | { Proposal: any }
                        | { Referendum: any }
                        | string
                        | Uint8Array,
                    maybeHash: Option<H256> | null | Uint8Array | H256 | string
                ) => SubmittableExtrinsic<ApiType>,
                [PalletDemocracyMetadataOwner, Option<H256>]
            >
            /**
             * Undelegate the voting power of the sending account.
             *
             * Tokens may be unlocked following once an amount of time consistent with the lock period
             * of the conviction with which the delegation was issued.
             *
             * The dispatch origin of this call must be _Signed_ and the signing account must be
             * currently delegating.
             *
             * Emits `Undelegated`.
             *
             * Weight: `O(R)` where R is the number of referendums the voter delegating to has
             * voted on. Weight is charged as if maximum votes.
             **/
            undelegate: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>
            /**
             * Unlock tokens that have an expired lock.
             *
             * The dispatch origin of this call must be _Signed_.
             *
             * - `target`: The account to remove the lock on.
             *
             * Weight: `O(R)` with R number of vote of target.
             **/
            unlock: AugmentedSubmittable<
                (
                    target:
                        | MultiAddress
                        | { Id: any }
                        | { Index: any }
                        | { Raw: any }
                        | { Address32: any }
                        | { Address20: any }
                        | string
                        | Uint8Array
                ) => SubmittableExtrinsic<ApiType>,
                [MultiAddress]
            >
            /**
             * Veto and blacklist the external proposal hash.
             *
             * The dispatch origin of this call must be `VetoOrigin`.
             *
             * - `proposal_hash`: The preimage hash of the proposal to veto and blacklist.
             *
             * Emits `Vetoed`.
             *
             * Weight: `O(V + log(V))` where V is number of `existing vetoers`
             **/
            vetoExternal: AugmentedSubmittable<
                (proposalHash: H256 | string | Uint8Array) => SubmittableExtrinsic<ApiType>,
                [H256]
            >
            /**
             * Vote in a referendum. If `vote.is_aye()`, the vote is to enact the proposal;
             * otherwise it is a vote to keep the status quo.
             *
             * The dispatch origin of this call must be _Signed_.
             *
             * - `ref_index`: The index of the referendum to vote for.
             * - `vote`: The vote configuration.
             **/
            vote: AugmentedSubmittable<
                (
                    refIndex: Compact<u32> | AnyNumber | Uint8Array,
                    vote: PalletDemocracyVoteAccountVote | { Standard: any } | { Split: any } | string | Uint8Array
                ) => SubmittableExtrinsic<ApiType>,
                [Compact<u32>, PalletDemocracyVoteAccountVote]
            >
            /**
             * Generic tx
             **/
            [key: string]: SubmittableExtrinsicFunction<ApiType>
        }
        dmpQueue: {
            /**
             * Generic tx
             **/
            [key: string]: SubmittableExtrinsicFunction<ApiType>
        }
        extrinsicPause: {
            /**
             * Pause execution of extrinsic(s)
             *
             * The values of pallet_name and extrinsic_name are extracted from the `call` parameter.
             * Ex : To pause the multi_tokens pallet, the `call` parameter should be of the type
             * `pallet_multi_tokens::Call` If `pause_only_extrinsic` is true, then only the extrinsic
             * is paused, else the entire pallet is paused.
             *
             * # Errors
             *
             * - [`Error::CannotProcessInput`] if the pallet name or extrinsic name is faulty.
             * - [`Error::CannotPauseSelf`] if the pallet name is the same as the name of this pallet.
             **/
            pauseExtrinsic: AugmentedSubmittable<
                (
                    call: Call | IMethod | string | Uint8Array,
                    pauseOnlyExtrinsic: bool | boolean | Uint8Array
                ) => SubmittableExtrinsic<ApiType>,
                [Call, bool]
            >
            /**
             * Resume execution of extrinsic(s)
             *
             * The values of pallet_name and extrinsic_name are extracted from the `call` parameter.
             * Ex : To resume the multi_tokens pallet, the `call` parameter should be of the type
             * `pallet_multi_tokens::Call` If `pause_only_extrinsic` is true, then only the extrinsic
             * is resumed, else the entire pallet is resumed.
             *
             * # Errors
             *
             * - [`Error::CannotProcessInput`] if the pallet name or extrinsic name is faulty.
             **/
            resumeExtrinsic: AugmentedSubmittable<
                (
                    call: Call | IMethod | string | Uint8Array,
                    resumeOnlyExtrinsic: bool | boolean | Uint8Array
                ) => SubmittableExtrinsic<ApiType>,
                [Call, bool]
            >
            /**
             * Generic tx
             **/
            [key: string]: SubmittableExtrinsicFunction<ApiType>
        }
        fuelTanks: {
            /**
             * Adds new account for `user_id` to fuel tank at `tank_id`. An account is
             * required to dispatch calls. A deposit of [`Config::AccountCreationDeposit`] is required.
             *
             * If called by the owner, the deposit is always paid from the fuel tank, otherwise it may
             * be paid by the user or the fuel tank, depending on the tank's `user_account_management`.
             *
             * ### Errors
             *
             * - [`Error::FuelTankNotFound`] if fuel tank at `tank_id` does not exist
             * - [`Error::NoPermission`] if `origin` does not have permission to add an account
             * - [`Error::AccountAlreadyExists`] if account at `user_id` already exists
             **/
            addAccount: AugmentedSubmittable<
                (
                    tankId:
                        | MultiAddress
                        | { Id: any }
                        | { Index: any }
                        | { Raw: any }
                        | { Address32: any }
                        | { Address20: any }
                        | string
                        | Uint8Array,
                    userId:
                        | MultiAddress
                        | { Id: any }
                        | { Index: any }
                        | { Raw: any }
                        | { Address32: any }
                        | { Address20: any }
                        | string
                        | Uint8Array
                ) => SubmittableExtrinsic<ApiType>,
                [MultiAddress, MultiAddress]
            >
            /**
             * Similar to add_account but takes a list of
             * [`AccountId`](frame_system::Config::AccountId)s to insert into a fuel tank.
             * ### Errors
             * - [`Error::FuelTankNotFound`] if fuel tank at `tank_id` does not exist
             * - [`Error::NoPermission`] if `origin` does not have permission to add an account
             * - [`Error::AccountAlreadyExists`] if account at `user_id` already exists
             **/
            batchAddAccount: AugmentedSubmittable<
                (
                    tankId:
                        | MultiAddress
                        | { Id: any }
                        | { Index: any }
                        | { Raw: any }
                        | { Address32: any }
                        | { Address20: any }
                        | string
                        | Uint8Array,
                    userIds:
                        | Vec<MultiAddress>
                        | (
                              | MultiAddress
                              | { Id: any }
                              | { Index: any }
                              | { Raw: any }
                              | { Address32: any }
                              | { Address20: any }
                              | string
                              | Uint8Array
                          )[]
                ) => SubmittableExtrinsic<ApiType>,
                [MultiAddress, Vec<MultiAddress>]
            >
            /**
             * Similar to remove_account but takes a list of
             * [`AccountId`](frame_system::Config::AccountId)s to remove from a fuel tank.
             * ### Errors
             * - [`Error::FuelTankNotFound`] if fuel tank at `tank_id` does not exist
             * - [`Error::NoPermission`] if `origin` does not have permission to add an account
             * - [`Error::AccountNotFound`] if account at `user_id` does not exist
             **/
            batchRemoveAccount: AugmentedSubmittable<
                (
                    tankId:
                        | MultiAddress
                        | { Id: any }
                        | { Index: any }
                        | { Raw: any }
                        | { Address32: any }
                        | { Address20: any }
                        | string
                        | Uint8Array,
                    userIds:
                        | Vec<MultiAddress>
                        | (
                              | MultiAddress
                              | { Id: any }
                              | { Index: any }
                              | { Raw: any }
                              | { Address32: any }
                              | { Address20: any }
                              | string
                              | Uint8Array
                          )[]
                ) => SubmittableExtrinsic<ApiType>,
                [MultiAddress, Vec<MultiAddress>]
            >
            /**
             * Creates a fuel tank, given a `descriptor`.
             *
             * Generates a discrete `AccountId` for the fuel tank based on passed in parameters, it
             * takes a storage deposit and emits `FuelTankCreated` event in the success case.
             *
             * # Errors
             *
             * - [`Error::FuelTankAlreadyExists`] if `tank_id` already exists
             * - [`Error::DuplicateRuleKinds`] if a rule set has multiple rules of the same kind
             **/
            createFuelTank: AugmentedSubmittable<
                (
                    descriptor:
                        | PalletFuelTanksFuelTankDescriptor
                        | { name?: any; userAccountManagement?: any; ruleSets?: any; coveragePolicy?: any; accountRules?: any }
                        | string
                        | Uint8Array
                ) => SubmittableExtrinsic<ApiType>,
                [PalletFuelTanksFuelTankDescriptor]
            >
            /**
             * Destroy the fuel tank by scheduling the deletion for `on_finalize` to execute
             * Only callable by owner
             * The fuel tank must be frozen
             * Can only be destroyed if all accounts are removed
             *
             * # Errors
             *
             * - [`Error::FuelTankNotFound`] if tank_id does not exist
             * - [`Error::NoPermission`] if caller is not owner
             * - [`Error::DestroyUnfrozenTank`] if tank is not frozen
             * - [`Error::DestroyWithExistingAccounts`] if there are still accounts on the tank
             **/
            destroyFuelTank: AugmentedSubmittable<
                (
                    tankId:
                        | MultiAddress
                        | { Id: any }
                        | { Index: any }
                        | { Raw: any }
                        | { Address32: any }
                        | { Address20: any }
                        | string
                        | Uint8Array
                ) => SubmittableExtrinsic<ApiType>,
                [MultiAddress]
            >
            /**
             * Dispatch a call using the `tank_id` subject to the rules of `rule_set_id`
             *
             * # Errors
             * - [`Error::FuelTankNotFound`] if `tank_id` does not exist.
             * - [`Error::UsageRestricted`] if caller is not part of ruleset whitelist
             * - [`Error::CallerDoesNotHaveRuleSetTokenBalance`] if caller does not own the tokens to
             * use the ruleset for remaining_fee when `pays_remaining_fee` is true
             * - [`Error::FuelTankOutOfFunds`] if the fuel tank account cannot pay fees
             **/
            dispatch: AugmentedSubmittable<
                (
                    tankId:
                        | MultiAddress
                        | { Id: any }
                        | { Index: any }
                        | { Raw: any }
                        | { Address32: any }
                        | { Address20: any }
                        | string
                        | Uint8Array,
                    ruleSetId: u32 | AnyNumber | Uint8Array,
                    call: Call | IMethod | string | Uint8Array,
                    settings:
                        | Option<PalletFuelTanksDispatchSettings>
                        | null
                        | Uint8Array
                        | PalletFuelTanksDispatchSettings
                        | { useNoneOrigin?: any; paysRemainingFee?: any; signature?: any }
                        | string
                ) => SubmittableExtrinsic<ApiType>,
                [MultiAddress, u32, Call, Option<PalletFuelTanksDispatchSettings>]
            >
            /**
             * Same as [dispatch](Self::dispatch), but creates an account for `origin` if it does not
             * exist and is allowed by the fuel tank's `user_account_management` settings.
             *
             * # Errors
             *
             * Returns the same errors as [dispatch](Self::dispatch) and
             * [add_account](Self::add_account)
             **/
            dispatchAndTouch: AugmentedSubmittable<
                (
                    tankId:
                        | MultiAddress
                        | { Id: any }
                        | { Index: any }
                        | { Raw: any }
                        | { Address32: any }
                        | { Address20: any }
                        | string
                        | Uint8Array,
                    ruleSetId: u32 | AnyNumber | Uint8Array,
                    call: Call | IMethod | string | Uint8Array,
                    settings:
                        | Option<PalletFuelTanksDispatchSettings>
                        | null
                        | Uint8Array
                        | PalletFuelTanksDispatchSettings
                        | { useNoneOrigin?: any; paysRemainingFee?: any; signature?: any }
                        | string
                ) => SubmittableExtrinsic<ApiType>,
                [MultiAddress, u32, Call, Option<PalletFuelTanksDispatchSettings>]
            >
            /**
             * Sets the account storage for give tank_id and account
             **/
            forceBatchAddAccount: AugmentedSubmittable<
                (
                    owner:
                        | MultiAddress
                        | { Id: any }
                        | { Index: any }
                        | { Raw: any }
                        | { Address32: any }
                        | { Address20: any }
                        | string
                        | Uint8Array,
                    tankId:
                        | MultiAddress
                        | { Id: any }
                        | { Index: any }
                        | { Raw: any }
                        | { Address32: any }
                        | { Address20: any }
                        | string
                        | Uint8Array,
                    userIds:
                        | Vec<MultiAddress>
                        | (
                              | MultiAddress
                              | { Id: any }
                              | { Index: any }
                              | { Raw: any }
                              | { Address32: any }
                              | { Address20: any }
                              | string
                              | Uint8Array
                          )[]
                ) => SubmittableExtrinsic<ApiType>,
                [MultiAddress, MultiAddress, Vec<MultiAddress>]
            >
            /**
             * Force creates a fuel tank
             *
             * # Errors
             *
             * - [`Error::FuelTankAlreadyExists`] if `tank_id` already exists
             **/
            forceCreateFuelTank: AugmentedSubmittable<
                (
                    owner:
                        | MultiAddress
                        | { Id: any }
                        | { Index: any }
                        | { Raw: any }
                        | { Address32: any }
                        | { Address20: any }
                        | string
                        | Uint8Array,
                    descriptor:
                        | PalletFuelTanksFuelTankDescriptor
                        | { name?: any; userAccountManagement?: any; ruleSets?: any; coveragePolicy?: any; accountRules?: any }
                        | string
                        | Uint8Array
                ) => SubmittableExtrinsic<ApiType>,
                [MultiAddress, PalletFuelTanksFuelTankDescriptor]
            >
            /**
             * Force set the fuel tank consumption
             * If `user_id` is [`Some`], it sets the consumption for that account.
             * If it is [`None`], it sets the consumption on the fuel tank directly.
             *
             * # Errors
             *
             * - [`Error::AccountNotFound`] if `user_id` is `Some` and account does not exist
             * - [`Error::FuelTankNotFound`] if tank_id does not exist
             * - [`Error::NoPermission`] if caller is not ForceOrigin or fuel tank owner
             * - [`Error::InvalidRuleSet`] if `rule_set_id` does not exist
             * - [`Error::MissingRequiredRule`] if `rule_set_id` does not have the required role
             **/
            forceSetConsumption: AugmentedSubmittable<
                (
                    tankId:
                        | MultiAddress
                        | { Id: any }
                        | { Index: any }
                        | { Raw: any }
                        | { Address32: any }
                        | { Address20: any }
                        | string
                        | Uint8Array,
                    userId:
                        | Option<MultiAddress>
                        | null
                        | Uint8Array
                        | MultiAddress
                        | { Id: any }
                        | { Index: any }
                        | { Raw: any }
                        | { Address32: any }
                        | { Address20: any }
                        | string,
                    ruleSetId: u32 | AnyNumber | Uint8Array,
                    consumption: PalletFuelTanksConsumption | { totalConsumed?: any; lastResetBlock?: any } | string | Uint8Array
                ) => SubmittableExtrinsic<ApiType>,
                [MultiAddress, Option<MultiAddress>, u32, PalletFuelTanksConsumption]
            >
            /**
             * Insert a new rule set for `tank_id` and `rule_set_id`. It can be a new rule set
             * or it can replace an existing one. If it is replacing a rule set, a rule that is storing
             * data on any accounts cannot be removed. Use [Self::remove_account_rule_data] to remove
             * the data first. If a rule is being replaced, it will be mutated with the new parameters,
             * and it will maintain any persistent data it already has.
             *
             * This is only callable by the fuel tank's owner.
             * ### Errors
             * - [`Error::FuelTankNotFound`] if `tank_id` does not exist.
             * - [`Error::NoPermission`] if caller is not the fuel tank owner
             * - [`Error::RequiresFrozenTankOrRuleset`] if tank or rule set is not frozen
             * - [`Error::CannotRemoveRuleThatIsStoringAccountData`] if removing a rule that is storing
             * account data
             * - [`Error::MaxRuleSetsExceeded`] if max number of rule sets was exceeded
             * - [`Error::DuplicateRuleKinds`] if adding a rule set with multiple rules of the same
             * kind
             **/
            insertRuleSet: AugmentedSubmittable<
                (
                    tankId:
                        | MultiAddress
                        | { Id: any }
                        | { Index: any }
                        | { Raw: any }
                        | { Address32: any }
                        | { Address20: any }
                        | string
                        | Uint8Array,
                    ruleSetId: u32 | AnyNumber | Uint8Array,
                    ruleSet: PalletFuelTanksRulesRuleSetDescriptor | { rules?: any; requireAccount?: any } | string | Uint8Array
                ) => SubmittableExtrinsic<ApiType>,
                [MultiAddress, u32, PalletFuelTanksRulesRuleSetDescriptor]
            >
            /**
             * Mutate `is_frozen` state that determines if fuel tank or rule set can be used
             *
             * # Errors
             * - [`Error::FuelTankNotFound`] if `tank_id` does not exist.
             * - [`Error::NoPermission`] if caller is not a fuel tank owner
             **/
            mutateFreezeState: AugmentedSubmittable<
                (
                    tankId:
                        | MultiAddress
                        | { Id: any }
                        | { Index: any }
                        | { Raw: any }
                        | { Address32: any }
                        | { Address20: any }
                        | string
                        | Uint8Array,
                    ruleSetId: Option<u32> | null | Uint8Array | u32 | AnyNumber,
                    isFrozen: bool | boolean | Uint8Array
                ) => SubmittableExtrinsic<ApiType>,
                [MultiAddress, Option<u32>, bool]
            >
            /**
             * Apply `mutation` to fuel tank with `tank_id`.
             *
             * Caller must be the owner of the fuel tank, and the tank must be frozen.
             *
             * # Errors
             *
             * - [`Error::FuelTankNotFound`] if `tank_id` does not exist.
             * - [`Error::NoPermission`] if `origin` is not the fuel tank owner
             * - [`Error::RequiresFrozenTankOrRuleset`] if tank is not frozen
             **/
            mutateFuelTank: AugmentedSubmittable<
                (
                    tankId:
                        | MultiAddress
                        | { Id: any }
                        | { Index: any }
                        | { Raw: any }
                        | { Address32: any }
                        | { Address20: any }
                        | string
                        | Uint8Array,
                    mutation:
                        | PalletFuelTanksImplsDefaultTankMutation
                        | { userAccountManagement?: any; coveragePolicy?: any; accountRules?: any }
                        | string
                        | Uint8Array
                ) => SubmittableExtrinsic<ApiType>,
                [MultiAddress, PalletFuelTanksImplsDefaultTankMutation]
            >
            /**
             * Removes account for `user_id` from fuel tank at `tank_id`. Any deposits
             * are returned.
             *
             * ### Errors
             *
             * - [`Error::FuelTankNotFound`] if fuel tank at `tank_id` does not exist
             * - [`Error::NoPermission`] if `origin` does not have permission to add an account
             * - [`Error::AccountNotFound`] if account at `user_id` does not exist
             **/
            removeAccount: AugmentedSubmittable<
                (
                    tankId:
                        | MultiAddress
                        | { Id: any }
                        | { Index: any }
                        | { Raw: any }
                        | { Address32: any }
                        | { Address20: any }
                        | string
                        | Uint8Array,
                    userId:
                        | MultiAddress
                        | { Id: any }
                        | { Index: any }
                        | { Raw: any }
                        | { Address32: any }
                        | { Address20: any }
                        | string
                        | Uint8Array
                ) => SubmittableExtrinsic<ApiType>,
                [MultiAddress, MultiAddress]
            >
            /**
             * Remove account rule data if it exists. Only callable by the fuel tank's owner. Requires
             * the fuel tank or the rule set to be frozen.
             *
             * ### Errors
             *
             * - [`Error::FuelTankNotFound`] if fuel tank for `tank_id` doesn't exist
             * - [`Error::NoPermission`] if called by non-owner
             * - [`Error::AccountNotFound`] if account does not exist for `user_id`
             * - [`Error::RuleSetNotFound`] if rule set does not exist for `rule_set_id`
             * - [`Error::RequiresFrozenTankOrRuleset`] if tank or rule set is not frozen
             * - [`Error::RuleNotFound`] if rule does not exist for `rule_kind`
             **/
            removeAccountRuleData: AugmentedSubmittable<
                (
                    tankId:
                        | MultiAddress
                        | { Id: any }
                        | { Index: any }
                        | { Raw: any }
                        | { Address32: any }
                        | { Address20: any }
                        | string
                        | Uint8Array,
                    userId:
                        | MultiAddress
                        | { Id: any }
                        | { Index: any }
                        | { Raw: any }
                        | { Address32: any }
                        | { Address20: any }
                        | string
                        | Uint8Array,
                    ruleSetId: u32 | AnyNumber | Uint8Array,
                    ruleKind:
                        | PalletFuelTanksRulesDispatchRuleKind
                        | 'WhitelistedCallers'
                        | 'WhitelistedCollections'
                        | 'MaxFuelBurnPerTransaction'
                        | 'UserFuelBudget'
                        | 'TankFuelBudget'
                        | 'RequireToken'
                        | 'PermittedCalls'
                        | 'PermittedExtrinsics'
                        | 'WhitelistedPallets'
                        | 'RequireSignature'
                        | 'MinimumInfusion'
                        | number
                        | Uint8Array
                ) => SubmittableExtrinsic<ApiType>,
                [MultiAddress, MultiAddress, u32, PalletFuelTanksRulesDispatchRuleKind]
            >
            /**
             * Remove rule set for `tank_id` and `rule_set_id`. A rule that is storing data on
             * any accounts cannot be removed. Use [Self::remove_account_rule_data] to remove the
             * data first. This is only callable by the fuel tank's owner.
             * # Errors
             *
             * - [`Error::FuelTankNotFound`] if `tank_id` does not exist.
             * - [`Error::NoPermission`] if caller is not the fuel tank owner
             * - [`Error::RequiresFrozenTankOrRuleset`] if tank or rule set is not frozen
             * - [`Error::CannotRemoveRuleThatIsStoringAccountData`] if removing a rule that is storing
             * account data
             **/
            removeRuleSet: AugmentedSubmittable<
                (
                    tankId:
                        | MultiAddress
                        | { Id: any }
                        | { Index: any }
                        | { Raw: any }
                        | { Address32: any }
                        | { Address20: any }
                        | string
                        | Uint8Array,
                    ruleSetId: u32 | AnyNumber | Uint8Array
                ) => SubmittableExtrinsic<ApiType>,
                [MultiAddress, u32]
            >
            /**
             * Generic tx
             **/
            [key: string]: SubmittableExtrinsicFunction<ApiType>
        }
        identity: {
            /**
             * Accept a given username that an `authority` granted. The call must include the full
             * username, as in `username.suffix`.
             **/
            acceptUsername: AugmentedSubmittable<
                (username: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>,
                [Bytes]
            >
            /**
             * Add a registrar to the system.
             *
             * The dispatch origin for this call must be `T::RegistrarOrigin`.
             *
             * - `account`: the account of the registrar.
             *
             * Emits `RegistrarAdded` if successful.
             **/
            addRegistrar: AugmentedSubmittable<
                (
                    account:
                        | MultiAddress
                        | { Id: any }
                        | { Index: any }
                        | { Raw: any }
                        | { Address32: any }
                        | { Address20: any }
                        | string
                        | Uint8Array
                ) => SubmittableExtrinsic<ApiType>,
                [MultiAddress]
            >
            /**
             * Add the given account to the sender's subs.
             *
             * Payment: Balance reserved by a previous `set_subs` call for one sub will be repatriated
             * to the sender.
             *
             * The dispatch origin for this call must be _Signed_ and the sender must have a registered
             * sub identity of `sub`.
             **/
            addSub: AugmentedSubmittable<
                (
                    sub:
                        | MultiAddress
                        | { Id: any }
                        | { Index: any }
                        | { Raw: any }
                        | { Address32: any }
                        | { Address20: any }
                        | string
                        | Uint8Array,
                    data:
                        | Data
                        | { None: any }
                        | { Raw: any }
                        | { BlakeTwo256: any }
                        | { Sha256: any }
                        | { Keccak256: any }
                        | { ShaThree256: any }
                        | string
                        | Uint8Array
                ) => SubmittableExtrinsic<ApiType>,
                [MultiAddress, Data]
            >
            /**
             * Add an `AccountId` with permission to grant usernames with a given `suffix` appended.
             *
             * The authority can grant up to `allocation` usernames. To top up their allocation, they
             * should just issue (or request via governance) a new `add_username_authority` call.
             **/
            addUsernameAuthority: AugmentedSubmittable<
                (
                    authority:
                        | MultiAddress
                        | { Id: any }
                        | { Index: any }
                        | { Raw: any }
                        | { Address32: any }
                        | { Address20: any }
                        | string
                        | Uint8Array,
                    suffix: Bytes | string | Uint8Array,
                    allocation: u32 | AnyNumber | Uint8Array
                ) => SubmittableExtrinsic<ApiType>,
                [MultiAddress, Bytes, u32]
            >
            /**
             * Cancel a previous request.
             *
             * Payment: A previously reserved deposit is returned on success.
             *
             * The dispatch origin for this call must be _Signed_ and the sender must have a
             * registered identity.
             *
             * - `reg_index`: The index of the registrar whose judgement is no longer requested.
             *
             * Emits `JudgementUnrequested` if successful.
             **/
            cancelRequest: AugmentedSubmittable<(regIndex: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>
            /**
             * Clear an account's identity info and all sub-accounts and return all deposits.
             *
             * Payment: All reserved balances on the account are returned.
             *
             * The dispatch origin for this call must be _Signed_ and the sender must have a registered
             * identity.
             *
             * Emits `IdentityCleared` if successful.
             **/
            clearIdentity: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>
            /**
             * Remove an account's identity and sub-account information and slash the deposits.
             *
             * Payment: Reserved balances from `set_subs` and `set_identity` are slashed and handled by
             * `Slash`. Verification request deposits are not returned; they should be cancelled
             * manually using `cancel_request`.
             *
             * The dispatch origin for this call must match `T::ForceOrigin`.
             *
             * - `target`: the account whose identity the judgement is upon. This must be an account
             * with a registered identity.
             *
             * Emits `IdentityKilled` if successful.
             **/
            killIdentity: AugmentedSubmittable<
                (
                    target:
                        | MultiAddress
                        | { Id: any }
                        | { Index: any }
                        | { Raw: any }
                        | { Address32: any }
                        | { Address20: any }
                        | string
                        | Uint8Array
                ) => SubmittableExtrinsic<ApiType>,
                [MultiAddress]
            >
            /**
             * Provide a judgement for an account's identity.
             *
             * The dispatch origin for this call must be _Signed_ and the sender must be the account
             * of the registrar whose index is `reg_index`.
             *
             * - `reg_index`: the index of the registrar whose judgement is being made.
             * - `target`: the account whose identity the judgement is upon. This must be an account
             * with a registered identity.
             * - `judgement`: the judgement of the registrar of index `reg_index` about `target`.
             * - `identity`: The hash of the [`IdentityInformationProvider`] for that the judgement is
             * provided.
             *
             * Note: Judgements do not apply to a username.
             *
             * Emits `JudgementGiven` if successful.
             **/
            provideJudgement: AugmentedSubmittable<
                (
                    regIndex: Compact<u32> | AnyNumber | Uint8Array,
                    target:
                        | MultiAddress
                        | { Id: any }
                        | { Index: any }
                        | { Raw: any }
                        | { Address32: any }
                        | { Address20: any }
                        | string
                        | Uint8Array,
                    judgement:
                        | PalletIdentityJudgement
                        | { Unknown: any }
                        | { FeePaid: any }
                        | { Reasonable: any }
                        | { KnownGood: any }
                        | { OutOfDate: any }
                        | { LowQuality: any }
                        | { Erroneous: any }
                        | string
                        | Uint8Array,
                    identity: H256 | string | Uint8Array
                ) => SubmittableExtrinsic<ApiType>,
                [Compact<u32>, MultiAddress, PalletIdentityJudgement, H256]
            >
            /**
             * Remove the sender as a sub-account.
             *
             * Payment: Balance reserved by a previous `set_subs` call for one sub will be repatriated
             * to the sender (*not* the original depositor).
             *
             * The dispatch origin for this call must be _Signed_ and the sender must have a registered
             * super-identity.
             *
             * NOTE: This should not normally be used, but is provided in the case that the non-
             * controller of an account is maliciously registered as a sub-account.
             **/
            quitSub: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>
            /**
             * Remove a username that corresponds to an account with no identity. Exists when a user
             * gets a username but then calls `clear_identity`.
             **/
            removeDanglingUsername: AugmentedSubmittable<
                (username: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>,
                [Bytes]
            >
            /**
             * Remove an expired username approval. The username was approved by an authority but never
             * accepted by the user and must now be beyond its expiration. The call must include the
             * full username, as in `username.suffix`.
             **/
            removeExpiredApproval: AugmentedSubmittable<
                (username: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>,
                [Bytes]
            >
            /**
             * Remove the given account from the sender's subs.
             *
             * Payment: Balance reserved by a previous `set_subs` call for one sub will be repatriated
             * to the sender.
             *
             * The dispatch origin for this call must be _Signed_ and the sender must have a registered
             * sub identity of `sub`.
             **/
            removeSub: AugmentedSubmittable<
                (
                    sub:
                        | MultiAddress
                        | { Id: any }
                        | { Index: any }
                        | { Raw: any }
                        | { Address32: any }
                        | { Address20: any }
                        | string
                        | Uint8Array
                ) => SubmittableExtrinsic<ApiType>,
                [MultiAddress]
            >
            /**
             * Remove `authority` from the username authorities.
             **/
            removeUsernameAuthority: AugmentedSubmittable<
                (
                    authority:
                        | MultiAddress
                        | { Id: any }
                        | { Index: any }
                        | { Raw: any }
                        | { Address32: any }
                        | { Address20: any }
                        | string
                        | Uint8Array
                ) => SubmittableExtrinsic<ApiType>,
                [MultiAddress]
            >
            /**
             * Alter the associated name of the given sub-account.
             *
             * The dispatch origin for this call must be _Signed_ and the sender must have a registered
             * sub identity of `sub`.
             **/
            renameSub: AugmentedSubmittable<
                (
                    sub:
                        | MultiAddress
                        | { Id: any }
                        | { Index: any }
                        | { Raw: any }
                        | { Address32: any }
                        | { Address20: any }
                        | string
                        | Uint8Array,
                    data:
                        | Data
                        | { None: any }
                        | { Raw: any }
                        | { BlakeTwo256: any }
                        | { Sha256: any }
                        | { Keccak256: any }
                        | { ShaThree256: any }
                        | string
                        | Uint8Array
                ) => SubmittableExtrinsic<ApiType>,
                [MultiAddress, Data]
            >
            /**
             * Request a judgement from a registrar.
             *
             * Payment: At most `max_fee` will be reserved for payment to the registrar if judgement
             * given.
             *
             * The dispatch origin for this call must be _Signed_ and the sender must have a
             * registered identity.
             *
             * - `reg_index`: The index of the registrar whose judgement is requested.
             * - `max_fee`: The maximum fee that may be paid. This should just be auto-populated as:
             *
             * ```nocompile
             * Self::registrars().get(reg_index).unwrap().fee
             * ```
             *
             * Emits `JudgementRequested` if successful.
             **/
            requestJudgement: AugmentedSubmittable<
                (
                    regIndex: Compact<u32> | AnyNumber | Uint8Array,
                    maxFee: Compact<u128> | AnyNumber | Uint8Array
                ) => SubmittableExtrinsic<ApiType>,
                [Compact<u32>, Compact<u128>]
            >
            /**
             * Change the account associated with a registrar.
             *
             * The dispatch origin for this call must be _Signed_ and the sender must be the account
             * of the registrar whose index is `index`.
             *
             * - `index`: the index of the registrar whose fee is to be set.
             * - `new`: the new account ID.
             **/
            setAccountId: AugmentedSubmittable<
                (
                    index: Compact<u32> | AnyNumber | Uint8Array,
                    updated:
                        | MultiAddress
                        | { Id: any }
                        | { Index: any }
                        | { Raw: any }
                        | { Address32: any }
                        | { Address20: any }
                        | string
                        | Uint8Array
                ) => SubmittableExtrinsic<ApiType>,
                [Compact<u32>, MultiAddress]
            >
            /**
             * Set the fee required for a judgement to be requested from a registrar.
             *
             * The dispatch origin for this call must be _Signed_ and the sender must be the account
             * of the registrar whose index is `index`.
             *
             * - `index`: the index of the registrar whose fee is to be set.
             * - `fee`: the new fee.
             **/
            setFee: AugmentedSubmittable<
                (
                    index: Compact<u32> | AnyNumber | Uint8Array,
                    fee: Compact<u128> | AnyNumber | Uint8Array
                ) => SubmittableExtrinsic<ApiType>,
                [Compact<u32>, Compact<u128>]
            >
            /**
             * Set the field information for a registrar.
             *
             * The dispatch origin for this call must be _Signed_ and the sender must be the account
             * of the registrar whose index is `index`.
             *
             * - `index`: the index of the registrar whose fee is to be set.
             * - `fields`: the fields that the registrar concerns themselves with.
             **/
            setFields: AugmentedSubmittable<
                (
                    index: Compact<u32> | AnyNumber | Uint8Array,
                    fields: u64 | AnyNumber | Uint8Array
                ) => SubmittableExtrinsic<ApiType>,
                [Compact<u32>, u64]
            >
            /**
             * Set an account's identity information and reserve the appropriate deposit.
             *
             * If the account already has identity information, the deposit is taken as part payment
             * for the new deposit.
             *
             * The dispatch origin for this call must be _Signed_.
             *
             * - `info`: The identity information.
             *
             * Emits `IdentitySet` if successful.
             **/
            setIdentity: AugmentedSubmittable<
                (
                    info:
                        | PalletIdentityLegacyIdentityInfo
                        | {
                              additional?: any
                              display?: any
                              legal?: any
                              web?: any
                              riot?: any
                              email?: any
                              pgpFingerprint?: any
                              image?: any
                              twitter?: any
                          }
                        | string
                        | Uint8Array
                ) => SubmittableExtrinsic<ApiType>,
                [PalletIdentityLegacyIdentityInfo]
            >
            /**
             * Set a given username as the primary. The username should include the suffix.
             **/
            setPrimaryUsername: AugmentedSubmittable<
                (username: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>,
                [Bytes]
            >
            /**
             * Set the sub-accounts of the sender.
             *
             * Payment: Any aggregate balance reserved by previous `set_subs` calls will be returned
             * and an amount `SubAccountDeposit` will be reserved for each item in `subs`.
             *
             * The dispatch origin for this call must be _Signed_ and the sender must have a registered
             * identity.
             *
             * - `subs`: The identity's (new) sub-accounts.
             **/
            setSubs: AugmentedSubmittable<
                (
                    subs:
                        | Vec<ITuple<[AccountId32, Data]>>
                        | [
                              AccountId32 | string | Uint8Array,
                              (
                                  | Data
                                  | { None: any }
                                  | { Raw: any }
                                  | { BlakeTwo256: any }
                                  | { Sha256: any }
                                  | { Keccak256: any }
                                  | { ShaThree256: any }
                                  | string
                                  | Uint8Array
                              ),
                          ][]
                ) => SubmittableExtrinsic<ApiType>,
                [Vec<ITuple<[AccountId32, Data]>>]
            >
            /**
             * Set the username for `who`. Must be called by a username authority.
             *
             * The authority must have an `allocation`. Users can either pre-sign their usernames or
             * accept them later.
             *
             * Usernames must:
             * - Only contain lowercase ASCII characters or digits.
             * - When combined with the suffix of the issuing authority be _less than_ the
             * `MaxUsernameLength`.
             **/
            setUsernameFor: AugmentedSubmittable<
                (
                    who:
                        | MultiAddress
                        | { Id: any }
                        | { Index: any }
                        | { Raw: any }
                        | { Address32: any }
                        | { Address20: any }
                        | string
                        | Uint8Array,
                    username: Bytes | string | Uint8Array,
                    signature:
                        | Option<SpRuntimeMultiSignature>
                        | null
                        | Uint8Array
                        | SpRuntimeMultiSignature
                        | { Ed25519: any }
                        | { Sr25519: any }
                        | { Ecdsa: any }
                        | string
                ) => SubmittableExtrinsic<ApiType>,
                [MultiAddress, Bytes, Option<SpRuntimeMultiSignature>]
            >
            /**
             * Generic tx
             **/
            [key: string]: SubmittableExtrinsicFunction<ApiType>
        }
        marketplace: {
            /**
             * Responds to a counter offer on a listing. If the counter offer is accepted, the listing
             * will be filled. If it's rejected, the counter offer is deleted. It can also be updated
             * with a `Counter` response. Only the buyer and seller may call this extrinsic.
             *
             * ### Parameters
             * - `listing_id` - the id of the offer that will be countered
             * - `creator` - the account that created the counter offer (the seller)
             * - `response` - whether the counter is accepted, rejected, or countered
             * - `current_price` - must match the price being countered
             **/
            answerCounterOffer: AugmentedSubmittable<
                (
                    listingId: H256 | string | Uint8Array,
                    creator: AccountId32 | string | Uint8Array,
                    response:
                        | PalletMarketplaceFeaturesOfferCounterOfferResponse
                        | { Accept: any }
                        | { Reject: any }
                        | { Counter: any }
                        | string
                        | Uint8Array,
                    currentPrice: Compact<u128> | AnyNumber | Uint8Array
                ) => SubmittableExtrinsic<ApiType>,
                [H256, AccountId32, PalletMarketplaceFeaturesOfferCounterOfferResponse, Compact<u128>]
            >
            /**
             * Cancels the listing with `listing_id`. Only callable by the seller.
             *
             * # Parameters
             *
             * - `listing_id`: The ID of the listing to cancel
             *
             * # Errors
             *
             * - [`Error::ListingNotFound`] if the listing under `listing_id` does not exist
             * - [`Error::NoPermission`] if the listing seller is not the caller, `origin`
             **/
            cancelListing: AugmentedSubmittable<(listingId: H256 | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [H256]>
            /**
             * Places a sell order. Requires `make_asset_id` or `take_asset_id` to be a currency.
             * The id for the listing is generated by hashing the encoded bytes of the listing.
             *
             * The listing does not become active until after the `listingActiveDelay` (5 blocks) has
             * passed. If it's an auction, it starts when its `start_block` is reached.
             *
             * A `Token` cannot be listed on the marketplace if its `listing_forbidden` field is set to
             * true.
             *
             * # Parameters
             *
             * - `make_asset_id`: The id of the asset being sold
             * - `take_asset_id`: The id of the asset being requested
             * - `amount`: The number of units being sold
             * - `price`: The requested price for each unit. If it's an auction, this is the minimum
             * bid
             * - `salt`: Can be used to differentiate listings
             * - `listing_data`: This determines the type of listing
             * - `depositor`: The account that will reserve the deposit. This must be set to None and
             * can only be set internally by a fuel tank.
             *
             * # Errors
             *
             * - [`Error::InvalidAuctionStart`] if the start is less than the current block +
             * `T::ListingActiveDelay`
             * - [`Error::NoCurrency`] Neither the make or take side is considered a currency
             * - [`Error::ListingForbidden`] if make or take side tokens are not allowed to be listed
             * - [`Error::CurrencyNotAllowedAsRoyalty`] if currency cannot be used as a royalty
             * - [`Error::LowBaseCurrencyBalance`] if base currency balance is too low
             * - [`Error::LowTokenBalance`] token balance is too low for reserve
             * - [`Error::ListingAlreadyExists`] if a listing with the same ID already exists
             **/
            createListing: AugmentedSubmittable<
                (
                    makeAssetId: EpMultiTokensTokenAssetId | { collectionId?: any; tokenId?: any } | string | Uint8Array,
                    takeAssetId: EpMultiTokensTokenAssetId | { collectionId?: any; tokenId?: any } | string | Uint8Array,
                    amount: Compact<u128> | AnyNumber | Uint8Array,
                    price: Compact<u128> | AnyNumber | Uint8Array,
                    salt: Bytes | string | Uint8Array,
                    listingData:
                        | PalletMarketplaceFeaturesListingListingData
                        | { FixedPrice: any }
                        | { Auction: any }
                        | { Offer: any }
                        | string
                        | Uint8Array,
                    depositor:
                        | Option<MultiAddress>
                        | null
                        | Uint8Array
                        | MultiAddress
                        | { Id: any }
                        | { Index: any }
                        | { Raw: any }
                        | { Address32: any }
                        | { Address20: any }
                        | string
                ) => SubmittableExtrinsic<ApiType>,
                [
                    EpMultiTokensTokenAssetId,
                    EpMultiTokensTokenAssetId,
                    Compact<u128>,
                    Compact<u128>,
                    Bytes,
                    PalletMarketplaceFeaturesListingListingData,
                    Option<MultiAddress>,
                ]
            >
            /**
             * Fills a fixed price listing. This will execute immediately.
             * # Parameters
             *
             * - `listing_id`: The id for the listing to buy from
             * - `amount`: The number of units purchased
             *
             * # Errors
             *
             * - [`Error::ListingNotFound`] if the listing under `listing_id` does not exist
             * - [`Error::BuyerIsSeller`] if the buyer is the seller of the listing
             * - [`Error::ListingIsWrongType`] if the listing is not under auction
             * - [`Error::InvalidAmount`] if the amount that still needs to be filled is greater than
             * `amount`
             * - [`Error::ListingNotActive`] if the listing has not passed the `ListingActiveDelay` yet
             * - [`Error::ReceivedValueUnderMinimum`] if the listings `take` value is under the minimum
             * required
             * - [`Error::LowTokenBalance`] if the buyer does not have enough tokens for reserve
             **/
            fillListing: AugmentedSubmittable<
                (
                    listingId: H256 | string | Uint8Array,
                    amount: Compact<u128> | AnyNumber | Uint8Array
                ) => SubmittableExtrinsic<ApiType>,
                [H256, Compact<u128>]
            >
            /**
             * Finalize the auction with id: `listing_id`. This will end the auction and transfer
             * funds. It fails if the auction is not over. It can be called by anyone.
             *
             * # Parameters
             *
             * - `listing_id`: The ID for the listing to finalize
             *
             * # Errors
             *
             * - [`Error::ListingNotFound`] if listing under `listing_id` does not exist
             * - [`Error::ListingIsWrongType`] if listing is not an auction
             * - [`Error::AuctionNotOver`] if the auction has not finished yet
             * - [`Error::ReceivedValueUnderMinimum`] if the take value is less than the minimum
             * required
             **/
            finalizeAuction: AugmentedSubmittable<
                (listingId: H256 | string | Uint8Array) => SubmittableExtrinsic<ApiType>,
                [H256]
            >
            /**
             * Force cancel a listing. This is only callable by the [`Config::ForceOrigin`].
             **/
            forceCancelListing: AugmentedSubmittable<
                (listingId: H256 | string | Uint8Array) => SubmittableExtrinsic<ApiType>,
                [H256]
            >
            /**
             * Force create a listing. This is only callable by the [`Config::ForceOrigin`].
             *
             * # Parameters
             *
             * Mostly the same as [`Self::create_listing`], but `deposit_backer` can be included to pay
             * a deposit if `seller` does not have enough.
             *
             * # Errors
             *
             * Same as [`Self::create_listing`], except `BadOrigin` if the origin is not
             * [`Config::ForceOrigin`]
             **/
            forceCreateListing: AugmentedSubmittable<
                (
                    seller:
                        | MultiAddress
                        | { Id: any }
                        | { Index: any }
                        | { Raw: any }
                        | { Address32: any }
                        | { Address20: any }
                        | string
                        | Uint8Array,
                    makeAssetId: EpMultiTokensTokenAssetId | { collectionId?: any; tokenId?: any } | string | Uint8Array,
                    takeAssetId: EpMultiTokensTokenAssetId | { collectionId?: any; tokenId?: any } | string | Uint8Array,
                    amount: Compact<u128> | AnyNumber | Uint8Array,
                    price: Compact<u128> | AnyNumber | Uint8Array,
                    salt: Bytes | string | Uint8Array,
                    listingData:
                        | PalletMarketplaceFeaturesListingListingData
                        | { FixedPrice: any }
                        | { Auction: any }
                        | { Offer: any }
                        | string
                        | Uint8Array,
                    depositBacker:
                        | Option<MultiAddress>
                        | null
                        | Uint8Array
                        | MultiAddress
                        | { Id: any }
                        | { Index: any }
                        | { Raw: any }
                        | { Address32: any }
                        | { Address20: any }
                        | string
                ) => SubmittableExtrinsic<ApiType>,
                [
                    MultiAddress,
                    EpMultiTokensTokenAssetId,
                    EpMultiTokensTokenAssetId,
                    Compact<u128>,
                    Compact<u128>,
                    Bytes,
                    PalletMarketplaceFeaturesListingListingData,
                    Option<MultiAddress>,
                ]
            >
            /**
             * Same as [create_listing](Self::place_bid), but allows specifying the `bidder` and can
             * place a bid in an inactive auction. Only callable by [`Config::ForceOrigin`]. If
             * `funds_backer` is `Some`, it will transfer balance if `bidder` does not have enough.
             **/
            forcePlaceBid: AugmentedSubmittable<
                (
                    bidder:
                        | MultiAddress
                        | { Id: any }
                        | { Index: any }
                        | { Raw: any }
                        | { Address32: any }
                        | { Address20: any }
                        | string
                        | Uint8Array,
                    listingId: H256 | string | Uint8Array,
                    price: Compact<u128> | AnyNumber | Uint8Array,
                    fundsBacker:
                        | Option<MultiAddress>
                        | null
                        | Uint8Array
                        | MultiAddress
                        | { Id: any }
                        | { Index: any }
                        | { Raw: any }
                        | { Address32: any }
                        | { Address20: any }
                        | string
                ) => SubmittableExtrinsic<ApiType>,
                [MultiAddress, H256, Compact<u128>, Option<MultiAddress>]
            >
            /**
             * Places a bid on a listing. The listing must be an auction, and it must be currently
             * active.
             * An auction is considered active if the current block is between the start and end blocks
             * of the auction. Only the latest bid is stored on an auction. All bids must increase by
             * the `minimumBidIncreasePercentage`, and the first bid must be higher than the price set
             * when the listing was created.
             *
             * # Parameters
             *
             * - `listing_id`: The id for the listing to buy from
             * - `price`: The price for a single unit
             *
             * # Errors
             *
             * - [`Error::ListingNotFound`] if listing under `listing_id` does not exist
             * - [`Error::BuyerIsSeller`] if the bidder is the seller of the listing
             * - [`Error::InactiveAuction`] if listing operates outside of specified start and end
             * block
             * - [`Error::InvalidPrice`] if price is less than minimum_price for a bid
             **/
            placeBid: AugmentedSubmittable<
                (
                    listingId: H256 | string | Uint8Array,
                    price: Compact<u128> | AnyNumber | Uint8Array
                ) => SubmittableExtrinsic<ApiType>,
                [H256, Compact<u128>]
            >
            /**
             * Places a counter offer on a listing. The listing must be an offer. The caller must own
             * the token that the offer is requesting. The counter offer can only be updated by calling
             * [`Self::answer_counter_offer`]. Only one counter offer can be made at a time and it
             * cannot be replaced.
             *
             * ### Parameters
             * - `listing_id` - the id of the offer that will be countered
             * - `price` - the price for the counter offer. It must be higher than the offer price.
             * - `depositor` - must be set to `None`. It is only usable internally by fuel tanks.
             **/
            placeCounterOffer: AugmentedSubmittable<
                (
                    listingId: H256 | string | Uint8Array,
                    price: Compact<u128> | AnyNumber | Uint8Array,
                    depositor:
                        | Option<MultiAddress>
                        | null
                        | Uint8Array
                        | MultiAddress
                        | { Id: any }
                        | { Index: any }
                        | { Raw: any }
                        | { Address32: any }
                        | { Address20: any }
                        | string
                ) => SubmittableExtrinsic<ApiType>,
                [H256, Compact<u128>, Option<MultiAddress>]
            >
            /**
             * Remove a listing that is expired. It only works for offers. This call is permissionless.
             **/
            removeExpiredListing: AugmentedSubmittable<
                (listingId: H256 | string | Uint8Array) => SubmittableExtrinsic<ApiType>,
                [H256]
            >
            /**
             * Change the protocol fee to `protocol_fee`. Can only be called by `ForceOrigin`.
             *
             * #Parameters
             *
             * - `protocol_fee`: Percentage of fee to set
             **/
            setProtocolFee: AugmentedSubmittable<
                (protocolFee: Perbill | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>,
                [Perbill]
            >
            /**
             * Generic tx
             **/
            [key: string]: SubmittableExtrinsicFunction<ApiType>
        }
        matrixUtility: {
            /**
             * Dispatch a batch of calls.
             *
             * May be called from any origin except [`None`].
             *
             * - `calls`: The calls to be dispatched from the same origin. The number of call must not
             * exceed the constant: `batched_calls_limit` (available in constant metadata).
             *
             * If origin is root then the calls are dispatched without checking origin filter. (This
             * includes bypassing [`frame_system::Config::BaseCallFilter`]).
             *
             * # Errors
             *
             * - [`Error::TooManyCalls`]: If the number of calls exceeds the limit.
             **/
            batch: AugmentedSubmittable<
                (
                    calls: Vec<Call> | (Call | IMethod | string | Uint8Array)[],
                    continueOnFailure: bool | boolean | Uint8Array
                ) => SubmittableExtrinsic<ApiType>,
                [Vec<Call>, bool]
            >
            /**
             * Generic tx
             **/
            [key: string]: SubmittableExtrinsicFunction<ApiType>
        }
        matrixXcm: {
            /**
             * Used by governance/sudo in order to set the minimum weight for an [XcmOperation](https://s3.ap-southeast-1.amazonaws.com/docs.rust.dev.efinity.io/efinity_pallet_xcm/enum.XcmOperation.html).
             * Primarily used for chains like Statemint when transferring multiple assets as a way to determine the correct fee for the fee-payment asset. Emits the [`MinimumWeightUpdated`](https://s3.ap-southeast-1.amazonaws.com/docs.rust.dev.efinity.io/efinity_pallet_xcm/pallet/enum.Event.html#variant.MinimumWeightUpdated) event.
             **/
            forceSetMinimumWeight: AugmentedSubmittable<
                (
                    xcmCall: MatrixPalletXcmXcmOperation | { XTokensTransfer: any } | { ParachainFee: any } | string | Uint8Array,
                    xcmWeightFeeMisc:
                        | MatrixPalletXcmMinimumWeightFeePair
                        | { minimumWeight?: any; fee?: any }
                        | string
                        | Uint8Array
                ) => SubmittableExtrinsic<ApiType>,
                [MatrixPalletXcmXcmOperation, MatrixPalletXcmMinimumWeightFeePair]
            >
            /**
             * `origin` transfers `amount` of `asset` to `beneficiary` on the `parachain`
             *
             * Unlike `transfer_to_parachain`, this extrinsic has the ability to transfer any asset on
             * Efinity to another chain. It may be used for transferring NFTs and foreign tokens. It
             * requires specifying the [Account](ep_core::Account) format in addition to other standard
             * parameters for an xcm transfer.
             *
             * Note: `asset` needs to be registered as foreign token in destination parachain
             *
             * - `para_id`: destination parachain
             * - `beneficiary`: account to receive `asset` in destination parachain
             * - `asset`: asset to transfer
             * - `amount`: amount of `asset` to transfer
             * - `dest_weight`: optional weight to be paid in destination chain, unlimited in case it's
             * `None`
             *
             * # Errors
             *
             * - [`Error::InvalidAddress`]: `beneficiary` is invalid, i.e could not be converted to
             * [`Location`]
             * - [`Error::NotTransferable`]: A corresponding Location could not be converted for the
             * asset.
             **/
            transferAssetToParachain: AugmentedSubmittable<
                (
                    paraId: MatrixPalletXcmImplsParachainId | 'Acala' | 'Moonbeam' | 'Statemint' | number | Uint8Array,
                    beneficiary: EpCoreFrameTypesAccount | { Substrate: any } | { EVM: any } | string | Uint8Array,
                    currencyId: EpMultiTokensTokenAssetId | { collectionId?: any; tokenId?: any } | string | Uint8Array,
                    amount: u128 | AnyNumber | Uint8Array,
                    destWeight: Option<u64> | null | Uint8Array | u64 | AnyNumber
                ) => SubmittableExtrinsic<ApiType>,
                [MatrixPalletXcmImplsParachainId, EpCoreFrameTypesAccount, EpMultiTokensTokenAssetId, u128, Option<u64>]
            >
            /**
             * `origin` transfers `asset` to `beneficiary` at `parachain` using `fee_asset` for
             * the fee. This allows the transfer of custom assets like a non-fungible which
             * cannot be used to pay fees.
             *
             * Note: each [`Asset`] must be registered as a foreign asset at the destination
             * parachain.
             *
             * - `asset`: asset to transfer
             * - `fee_asset`: asset to be used as fee
             * - `beneficiary`: account to receive `asset` in destination parachain
             * - `para_id`: destination parachain
             * - `dest_weight`: optional weight to be paid in destination chain, unlimited in case it's
             *
             * # Errors
             * - [`Error::InvalidAddress`]: `beneficiary` is invalid, i.e could not be converted to
             * [`Location`]
             **/
            transferAssetWithFee: AugmentedSubmittable<
                (
                    assetPair: MatrixPalletXcmCurrencyIdAmountPair | { currencyId?: any; amount?: any } | string | Uint8Array,
                    feePair: MatrixPalletXcmCurrencyIdAmountPair | { currencyId?: any; amount?: any } | string | Uint8Array,
                    paraId: MatrixPalletXcmImplsParachainId | 'Acala' | 'Moonbeam' | 'Statemint' | number | Uint8Array,
                    beneficiary: EpCoreFrameTypesAccount | { Substrate: any } | { EVM: any } | string | Uint8Array,
                    destWeight: Option<u64> | null | Uint8Array | u64 | AnyNumber
                ) => SubmittableExtrinsic<ApiType>,
                [
                    MatrixPalletXcmCurrencyIdAmountPair,
                    MatrixPalletXcmCurrencyIdAmountPair,
                    MatrixPalletXcmImplsParachainId,
                    EpCoreFrameTypesAccount,
                    Option<u64>,
                ]
            >
            /**
             * `origin` transfers `amount` of ENJ to `beneficiary` on the `parachain`.
             *
             * This extrinsic requires specifying the correct account format, see
             * [Account](ep_core::Account) in addition to other standard parameters for an xcm
             * transfer.
             *
             * Note: ENJ needs to be registered as foreign token in destination parachain
             *
             * - `para_id`: destination parachain
             * - `beneficiary`: account to receive ENJ in destination parachain
             * - `amount`: amount of ENJ to transfer
             * - `dest_weight`: optional weight to be paid in destination chain, unlimited in case it's
             * `None`
             *
             * # Errors
             *
             * - [`Error::InvalidAddress`]: `beneficiary` is invalid, i.e could not be converted to
             * [`Location`]
             **/
            transferToParachain: AugmentedSubmittable<
                (
                    paraId: MatrixPalletXcmImplsParachainId | 'Acala' | 'Moonbeam' | 'Statemint' | number | Uint8Array,
                    beneficiary: EpCoreFrameTypesAccount | { Substrate: any } | { EVM: any } | string | Uint8Array,
                    amount: u128 | AnyNumber | Uint8Array,
                    destWeight: Option<u64> | null | Uint8Array | u64 | AnyNumber
                ) => SubmittableExtrinsic<ApiType>,
                [MatrixPalletXcmImplsParachainId, EpCoreFrameTypesAccount, u128, Option<u64>]
            >
            /**
             * Generic tx
             **/
            [key: string]: SubmittableExtrinsicFunction<ApiType>
        }
        messageQueue: {
            /**
             * Execute an overweight message.
             *
             * Temporary processing errors will be propagated whereas permanent errors are treated
             * as success condition.
             *
             * - `origin`: Must be `Signed`.
             * - `message_origin`: The origin from which the message to be executed arrived.
             * - `page`: The page in the queue in which the message to be executed is sitting.
             * - `index`: The index into the queue of the message to be executed.
             * - `weight_limit`: The maximum amount of weight allowed to be consumed in the execution
             * of the message.
             *
             * Benchmark complexity considerations: O(index + weight_limit).
             **/
            executeOverweight: AugmentedSubmittable<
                (
                    messageOrigin:
                        | CumulusPrimitivesCoreAggregateMessageOrigin
                        | { Here: any }
                        | { Parent: any }
                        | { Sibling: any }
                        | string
                        | Uint8Array,
                    page: u32 | AnyNumber | Uint8Array,
                    index: u32 | AnyNumber | Uint8Array,
                    weightLimit: SpWeightsWeightV2Weight | { refTime?: any; proofSize?: any } | string | Uint8Array
                ) => SubmittableExtrinsic<ApiType>,
                [CumulusPrimitivesCoreAggregateMessageOrigin, u32, u32, SpWeightsWeightV2Weight]
            >
            /**
             * Remove a page which has no more messages remaining to be processed or is stale.
             **/
            reapPage: AugmentedSubmittable<
                (
                    messageOrigin:
                        | CumulusPrimitivesCoreAggregateMessageOrigin
                        | { Here: any }
                        | { Parent: any }
                        | { Sibling: any }
                        | string
                        | Uint8Array,
                    pageIndex: u32 | AnyNumber | Uint8Array
                ) => SubmittableExtrinsic<ApiType>,
                [CumulusPrimitivesCoreAggregateMessageOrigin, u32]
            >
            /**
             * Generic tx
             **/
            [key: string]: SubmittableExtrinsicFunction<ApiType>
        }
        migrations: {
            /**
             * Clears the `Historic` set.
             *
             * `map_cursor` must be set to the last value that was returned by the
             * `HistoricCleared` event. The first time `None` can be used. `limit` must be chosen in a
             * way that will result in a sensible weight.
             **/
            clearHistoric: AugmentedSubmittable<
                (
                    selector:
                        | PalletMigrationsHistoricCleanupSelector
                        | { Specific: any }
                        | { Wildcard: any }
                        | string
                        | Uint8Array
                ) => SubmittableExtrinsic<ApiType>,
                [PalletMigrationsHistoricCleanupSelector]
            >
            /**
             * Forces the onboarding of the migrations.
             *
             * This process happens automatically on a runtime upgrade. It is in place as an emergency
             * measurement. The cursor needs to be `None` for this to succeed.
             **/
            forceOnboardMbms: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>
            /**
             * Allows root to set an active cursor to forcefully start/forward the migration process.
             *
             * This is an edge-case version of [`Self::force_set_cursor`] that allows to set the
             * `started_at` value to the next block number. Otherwise this would not be possible, since
             * `force_set_cursor` takes an absolute block number. Setting `started_at` to `None`
             * indicates that the current block number plus one should be used.
             **/
            forceSetActiveCursor: AugmentedSubmittable<
                (
                    index: u32 | AnyNumber | Uint8Array,
                    innerCursor: Option<Bytes> | null | Uint8Array | Bytes | string,
                    startedAt: Option<u32> | null | Uint8Array | u32 | AnyNumber
                ) => SubmittableExtrinsic<ApiType>,
                [u32, Option<Bytes>, Option<u32>]
            >
            /**
             * Allows root to set a cursor to forcefully start, stop or forward the migration process.
             *
             * Should normally not be needed and is only in place as emergency measure. Note that
             * restarting the migration process in this manner will not call the
             * [`MigrationStatusHandler::started`] hook or emit an `UpgradeStarted` event.
             **/
            forceSetCursor: AugmentedSubmittable<
                (
                    cursor:
                        | Option<PalletMigrationsMigrationCursor>
                        | null
                        | Uint8Array
                        | PalletMigrationsMigrationCursor
                        | { Active: any }
                        | { Stuck: any }
                        | string
                ) => SubmittableExtrinsic<ApiType>,
                [Option<PalletMigrationsMigrationCursor>]
            >
            /**
             * Generic tx
             **/
            [key: string]: SubmittableExtrinsicFunction<ApiType>
        }
        multisig: {
            /**
             * Register approval for a dispatch to be made from a deterministic composite account if
             * approved by a total of `threshold - 1` of `other_signatories`.
             *
             * Payment: `DepositBase` will be reserved if this is the first approval, plus
             * `threshold` times `DepositFactor`. It is returned once this dispatch happens or
             * is cancelled.
             *
             * The dispatch origin for this call must be _Signed_.
             *
             * - `threshold`: The total number of approvals for this dispatch before it is executed.
             * - `other_signatories`: The accounts (other than the sender) who can approve this
             * dispatch. May not be empty.
             * - `maybe_timepoint`: If this is the first approval, then this must be `None`. If it is
             * not the first approval, then it must be `Some`, with the timepoint (block number and
             * transaction index) of the first approval transaction.
             * - `call_hash`: The hash of the call to be executed.
             *
             * NOTE: If this is the final approval, you will want to use `as_multi` instead.
             *
             * ## Complexity
             * - `O(S)`.
             * - Up to one balance-reserve or unreserve operation.
             * - One passthrough operation, one insert, both `O(S)` where `S` is the number of
             * signatories. `S` is capped by `MaxSignatories`, with weight being proportional.
             * - One encode & hash, both of complexity `O(S)`.
             * - Up to one binary search and insert (`O(logS + S)`).
             * - I/O: 1 read `O(S)`, up to 1 mutate `O(S)`. Up to one remove.
             * - One event.
             * - Storage: inserts one item, value size bounded by `MaxSignatories`, with a deposit
             * taken for its lifetime of `DepositBase + threshold * DepositFactor`.
             **/
            approveAsMulti: AugmentedSubmittable<
                (
                    threshold: u16 | AnyNumber | Uint8Array,
                    otherSignatories: Vec<AccountId32> | (AccountId32 | string | Uint8Array)[],
                    maybeTimepoint:
                        | Option<PalletMultisigTimepoint>
                        | null
                        | Uint8Array
                        | PalletMultisigTimepoint
                        | { height?: any; index?: any }
                        | string,
                    callHash: U8aFixed | string | Uint8Array,
                    maxWeight: SpWeightsWeightV2Weight | { refTime?: any; proofSize?: any } | string | Uint8Array
                ) => SubmittableExtrinsic<ApiType>,
                [u16, Vec<AccountId32>, Option<PalletMultisigTimepoint>, U8aFixed, SpWeightsWeightV2Weight]
            >
            /**
             * Register approval for a dispatch to be made from a deterministic composite account if
             * approved by a total of `threshold - 1` of `other_signatories`.
             *
             * If there are enough, then dispatch the call.
             *
             * Payment: `DepositBase` will be reserved if this is the first approval, plus
             * `threshold` times `DepositFactor`. It is returned once this dispatch happens or
             * is cancelled.
             *
             * The dispatch origin for this call must be _Signed_.
             *
             * - `threshold`: The total number of approvals for this dispatch before it is executed.
             * - `other_signatories`: The accounts (other than the sender) who can approve this
             * dispatch. May not be empty.
             * - `maybe_timepoint`: If this is the first approval, then this must be `None`. If it is
             * not the first approval, then it must be `Some`, with the timepoint (block number and
             * transaction index) of the first approval transaction.
             * - `call`: The call to be executed.
             *
             * NOTE: Unless this is the final approval, you will generally want to use
             * `approve_as_multi` instead, since it only requires a hash of the call.
             *
             * Result is equivalent to the dispatched result if `threshold` is exactly `1`. Otherwise
             * on success, result is `Ok` and the result from the interior call, if it was executed,
             * may be found in the deposited `MultisigExecuted` event.
             *
             * ## Complexity
             * - `O(S + Z + Call)`.
             * - Up to one balance-reserve or unreserve operation.
             * - One passthrough operation, one insert, both `O(S)` where `S` is the number of
             * signatories. `S` is capped by `MaxSignatories`, with weight being proportional.
             * - One call encode & hash, both of complexity `O(Z)` where `Z` is tx-len.
             * - One encode & hash, both of complexity `O(S)`.
             * - Up to one binary search and insert (`O(logS + S)`).
             * - I/O: 1 read `O(S)`, up to 1 mutate `O(S)`. Up to one remove.
             * - One event.
             * - The weight of the `call`.
             * - Storage: inserts one item, value size bounded by `MaxSignatories`, with a deposit
             * taken for its lifetime of `DepositBase + threshold * DepositFactor`.
             **/
            asMulti: AugmentedSubmittable<
                (
                    threshold: u16 | AnyNumber | Uint8Array,
                    otherSignatories: Vec<AccountId32> | (AccountId32 | string | Uint8Array)[],
                    maybeTimepoint:
                        | Option<PalletMultisigTimepoint>
                        | null
                        | Uint8Array
                        | PalletMultisigTimepoint
                        | { height?: any; index?: any }
                        | string,
                    call: Call | IMethod | string | Uint8Array,
                    maxWeight: SpWeightsWeightV2Weight | { refTime?: any; proofSize?: any } | string | Uint8Array
                ) => SubmittableExtrinsic<ApiType>,
                [u16, Vec<AccountId32>, Option<PalletMultisigTimepoint>, Call, SpWeightsWeightV2Weight]
            >
            /**
             * Immediately dispatch a multi-signature call using a single approval from the caller.
             *
             * The dispatch origin for this call must be _Signed_.
             *
             * - `other_signatories`: The accounts (other than the sender) who are part of the
             * multi-signature, but do not participate in the approval process.
             * - `call`: The call to be executed.
             *
             * Result is equivalent to the dispatched result.
             *
             * ## Complexity
             * O(Z + C) where Z is the length of the call and C its execution weight.
             **/
            asMultiThreshold1: AugmentedSubmittable<
                (
                    otherSignatories: Vec<AccountId32> | (AccountId32 | string | Uint8Array)[],
                    call: Call | IMethod | string | Uint8Array
                ) => SubmittableExtrinsic<ApiType>,
                [Vec<AccountId32>, Call]
            >
            /**
             * Cancel a pre-existing, on-going multisig transaction. Any deposit reserved previously
             * for this operation will be unreserved on success.
             *
             * The dispatch origin for this call must be _Signed_.
             *
             * - `threshold`: The total number of approvals for this dispatch before it is executed.
             * - `other_signatories`: The accounts (other than the sender) who can approve this
             * dispatch. May not be empty.
             * - `timepoint`: The timepoint (block number and transaction index) of the first approval
             * transaction for this dispatch.
             * - `call_hash`: The hash of the call to be executed.
             *
             * ## Complexity
             * - `O(S)`.
             * - Up to one balance-reserve or unreserve operation.
             * - One passthrough operation, one insert, both `O(S)` where `S` is the number of
             * signatories. `S` is capped by `MaxSignatories`, with weight being proportional.
             * - One encode & hash, both of complexity `O(S)`.
             * - One event.
             * - I/O: 1 read `O(S)`, one remove.
             * - Storage: removes one item.
             **/
            cancelAsMulti: AugmentedSubmittable<
                (
                    threshold: u16 | AnyNumber | Uint8Array,
                    otherSignatories: Vec<AccountId32> | (AccountId32 | string | Uint8Array)[],
                    timepoint: PalletMultisigTimepoint | { height?: any; index?: any } | string | Uint8Array,
                    callHash: U8aFixed | string | Uint8Array
                ) => SubmittableExtrinsic<ApiType>,
                [u16, Vec<AccountId32>, PalletMultisigTimepoint, U8aFixed]
            >
            /**
             * Generic tx
             **/
            [key: string]: SubmittableExtrinsicFunction<ApiType>
        }
        multiTokens: {
            /**
             * Accepts a pending collection transfer. Requires calling [`Self::mutate_collection`]
             * first. Only callable by the new owner.
             **/
            acceptCollectionTransfer: AugmentedSubmittable<
                (collectionId: Compact<u128> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>,
                [Compact<u128>]
            >
            /**
             * Allow `operator` to manage all of `origin`'s tokens belonging to `collection_id`.
             * If an `expiration` is provided, the approval will end when it expires.
             *
             * # Errors
             *
             * - [`Error::CannotApproveSelf`] if `origin == operator`
             * - [`Error::AlreadyExpired`] if `expiration` is earlier than now
             * - [`Error::CollectionAccountNotFound`] if the collection account does not exist
             * - [`Error::MaxApprovalsExceeded`] if approval count has exceeded the maximum
             **/
            approveCollection: AugmentedSubmittable<
                (
                    collectionId: Compact<u128> | AnyNumber | Uint8Array,
                    operator: AccountId32 | string | Uint8Array,
                    expiration: Option<u32> | null | Uint8Array | u32 | AnyNumber
                ) => SubmittableExtrinsic<ApiType>,
                [Compact<u128>, AccountId32, Option<u32>]
            >
            /**
             * Approve `operator` to transfer up to `amount` of `caller`'s balance for `token_id` of
             * `collection_id`. An `expiration` can be provided.
             *
             * For security reasons, `current_amount` must match the amount of the previous approval,
             * or `0` if there's none.
             *
             * # Errors
             * - [`Error::CannotApproveSelf`] if `origin == operator`
             * - [`Error::CollectionAlreadyApproved`] if `collection_id` is already approved
             * - [`Error::AlreadyExpired`] if `expiration` is earlier than now
             * - [`Error::TokenAccountNotFound`] if the token account does not exist
             * - [`Error::MaxApprovalsExceeded`] if approval count has exceeded the maximum
             * - [`Error::WrongCurrentApprovedAmount`] if `current_amount` does not match the current
             * approval amount
             **/
            approveToken: AugmentedSubmittable<
                (
                    collectionId: Compact<u128> | AnyNumber | Uint8Array,
                    tokenId: Compact<u128> | AnyNumber | Uint8Array,
                    operator: AccountId32 | string | Uint8Array,
                    amount: Compact<u128> | AnyNumber | Uint8Array,
                    expiration: Option<u32> | null | Uint8Array | u32 | AnyNumber,
                    currentAmount: Compact<u128> | AnyNumber | Uint8Array
                ) => SubmittableExtrinsic<ApiType>,
                [Compact<u128>, Compact<u128>, AccountId32, Compact<u128>, Option<u32>, Compact<u128>]
            >
            /**
             * Collection owner mints tokens of `collection_id` to `recipients` consisting of an
             * [`AccountId`](frame_system::Config::AccountId) and [`MintParams`]. A single mint failure
             * will fail all of them in the batch.
             *
             * Batch minting is slightly less expensive than performing the same number of mint calls
             * sequentially.
             *
             * # Errors
             * - [`Error::AmountZero`] if `amount == 0`.
             * - [`Error::CollectionNotFound`] if `collection` does **not** exist.
             * - [`Error::NoPermission`] if `caller` is not allowed to mint the `collection`.
             * - [`Error::TokenMintCapExceeded`] if the mint policy TokenCap does not allow minting
             * - [`Error::MaxTokenCountExceeded`] if the mint policy max_token_count is exceeded
             * - [`Error::DepositReserveFailed`] if the issuer does not have sufficient balance for
             * token deposit
             **/
            batchMint: AugmentedSubmittable<
                (
                    collectionId: Compact<u128> | AnyNumber | Uint8Array,
                    recipients:
                        | Vec<EpMultiTokensBatchRecipientDefaultMintParams>
                        | (
                              | EpMultiTokensBatchRecipientDefaultMintParams
                              | { accountId?: any; params?: any }
                              | string
                              | Uint8Array
                          )[]
                ) => SubmittableExtrinsic<ApiType>,
                [Compact<u128>, Vec<EpMultiTokensBatchRecipientDefaultMintParams>]
            >
            /**
             * Collection owner sets `attributes` to `collection_id`
             *
             * If `token_id` is [`None`], the attribute is added to the collection. If it is [`Some`],
             * the attribute is added to the token.
             *
             * # Errors
             *
             * - [`Error::InvalidAttributeKey`] if `key.len() == 0`
             * - [`Error::CollectionNotFound`] if `collection_id` does not exist.
             * - [`Error::TokenNotFound`] if `token_id` is `Some` and does not exist.
             * - [`Error::NoPermission`] if `source` account is not the owner of the collection.
             * - [`Error::DepositReserveFailed`] if unable to reserve the deposit for the attribute
             * storage.
             **/
            batchSetAttribute: AugmentedSubmittable<
                (
                    collectionId: Compact<u128> | AnyNumber | Uint8Array,
                    tokenId: Option<u128> | null | Uint8Array | u128 | AnyNumber,
                    attributes:
                        | Vec<EpMultiTokensBatchAttributeKeyValuePair>
                        | (EpMultiTokensBatchAttributeKeyValuePair | { key?: any; value?: any } | string | Uint8Array)[],
                    depositor:
                        | Option<MultiAddress>
                        | null
                        | Uint8Array
                        | MultiAddress
                        | { Id: any }
                        | { Index: any }
                        | { Raw: any }
                        | { Address32: any }
                        | { Address20: any }
                        | string
                ) => SubmittableExtrinsic<ApiType>,
                [Compact<u128>, Option<u128>, Vec<EpMultiTokensBatchAttributeKeyValuePair>, Option<MultiAddress>]
            >
            /**
             * Transfers the specific amount of tokens of `collection` to `recipients` from `origin`
             * account. A single failure will fail all transfers.
             *
             * Performs multiple transfers in a single call. Can optionally continue if any calls fail,
             * depending on the `continueOnFailure` parameter.
             *
             * # Errors
             *
             * - [`Error::AmountZero`] if `amount == 0`.
             * - [`Error::BalanceLow`] if `source` does not own enough amount of `collection`.
             **/
            batchTransfer: AugmentedSubmittable<
                (
                    collectionId: Compact<u128> | AnyNumber | Uint8Array,
                    recipients:
                        | Vec<EpMultiTokensBatchRecipientDefaultTransferParams>
                        | (
                              | EpMultiTokensBatchRecipientDefaultTransferParams
                              | { accountId?: any; params?: any }
                              | string
                              | Uint8Array
                          )[]
                ) => SubmittableExtrinsic<ApiType>,
                [Compact<u128>, Vec<EpMultiTokensBatchRecipientDefaultTransferParams>]
            >
            /**
             * Reduces the balance of `owner` by `amount` of `token_id` from `collection_id`.
             * It also updates the total supply of `collection_id`.
             *
             * # Errors
             * - [`Error::CollectionNotFound`] if `collection` does not exist.
             * - [`Error::BalanceLow`] if `owner` account does not has enough amount of any token in
             * `tokens` of `collection`.
             * - [`Error::DepositUnreserveFailed`] if caller does not have enough reserved balance to
             * unreserve
             * - [`Error::DestroyForbiddenByAttributeCount`] if removing token from storage but the
             * attribute count is greater than zero
             **/
            burn: AugmentedSubmittable<
                (
                    collectionId: Compact<u128> | AnyNumber | Uint8Array,
                    params:
                        | EpMultiTokensPolicyBurnDefaultBurnParams
                        | { tokenId?: any; amount?: any; removeTokenStorage?: any }
                        | string
                        | Uint8Array
                ) => SubmittableExtrinsic<ApiType>,
                [Compact<u128>, EpMultiTokensPolicyBurnDefaultBurnParams]
            >
            /**
             * Cancels a pending collection transfer. Requires calling [`Self::mutate_collection`]
             * first. Only callable by the new owner or the current collection owner.
             **/
            cancelCollectionTransfer: AugmentedSubmittable<
                (collectionId: Compact<u128> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>,
                [Compact<u128>]
            >
            /**
             * Transfers ownership of collections to `destination` if the signature and
             * `collection_count` matches.
             *
             * The dispatch origin for this call must be _None_.
             *
             * Unsigned Validation:
             * A call to claim is deemed valid if the signature provided matches
             * the expected signed message of:
             *
             * > Ethereum Signed Message:
             * > (configured prefix string)(address)
             *
             * and `address` matches the `destination` account.
             *
             * This will always execute with weight of [`Config::MaxClaimableCollectionsPerAccount`]
             * and it will reimburse weight for collections under that number.
             *
             * ### Parameters:
             * - `destination`: The account that will receive ownership of the collections
             * - `ethereum_signature`: The signature of an ethereum signed message matching the format
             * described above.
             * - `ethereum_address`: The Ethereum address from which the message is signed.
             * - `collection_count`: The number of collections that will be claimed. It can also be
             * higher than the actual number, but if it's lower it will fail.
             **/
            claimCollections: AugmentedSubmittable<
                (
                    destination: AccountId32 | string | Uint8Array,
                    ethereumSignature: SpCoreEcdsaSignature | string | Uint8Array,
                    ethereumAddress: H160 | string | Uint8Array,
                    collectionCount: Compact<u32> | AnyNumber | Uint8Array
                ) => SubmittableExtrinsic<ApiType>,
                [AccountId32, SpCoreEcdsaSignature, H160, Compact<u32>]
            >
            /**
             * Sends [`Event::ClaimTokensInitiated`] event if validation of the params succeeds.
             *
             * The dispatch origin for this call must be _None_.
             *
             * Unsigned Validation:
             * A call to claim is deemed valid if the signature provided matches
             * the expected signed message of:
             *
             * > Ethereum Signed Message:
             * > (configured prefix string)(address)
             *
             * and `address` matches the `destination` account.
             *
             * ### Parameters:
             * - `destination`: The account that will receive token balances
             * - `ethereum_signature`: The signature of an ethereum signed message matching the format
             * described above.
             * - `ethereum_address` : The Ethereum address from which the message is signed.
             **/
            claimTokens: AugmentedSubmittable<
                (
                    destination: AccountId32 | string | Uint8Array,
                    ethereumSignature: SpCoreEcdsaSignature | string | Uint8Array,
                    ethereumAddress: H160 | string | Uint8Array
                ) => SubmittableExtrinsic<ApiType>,
                [AccountId32, SpCoreEcdsaSignature, H160]
            >
            /**
             * Creates a new [`Collection`](ep_multi_tokens::Collection) from `descriptor`
             *
             * See [`CollectionDescriptor`](ep_multi_tokens::DefaultCollectionDescriptor) and
             * [`CollectionPolicyDescriptor`](ep_multi_tokens::DefaultCollectionPolicyDescriptor)
             * for more info about specific parameters. The [Mint
             * Policy](ep_multi_tokens::DefaultMintPolicyDescriptor) has the most parameters.
             *
             * **Minting Policy**
             *
             * - Max token count (optional)
             * - Max token supply (optional)
             * - Force Single Mint
             * - If Yes, each token minted in the collection MUST be an NFT with a cap of 1.
             *
             * **Royalty (optional)**
             *
             * - Beneficiary address
             * - The percentage of marketplace sale royalty that will be sent to the beneficiary.
             *
             * **Explicit Royalty Currencies (optional)**
             *
             * Optionally provide a list of tokens (must be currencies).
             * - If no currencies are provided here, then ALL currencies are allowed for royalties.
             * - If one or more currencies are provided here, they will be whitelisted for use as a
             * royalty currency and ONLY this list of currencies will be allowed for royalties.
             *
             * # Errors
             *
             * - [`Error::DepositReserveFailed`] if the deposit cannot be reserved
             **/
            createCollection: AugmentedSubmittable<
                (
                    descriptor:
                        | EpMultiTokensCollectionDefaultCollectionDescriptor
                        | { policy?: any; depositor?: any; explicitRoyaltyCurrencies?: any; attributes?: any }
                        | string
                        | Uint8Array
                ) => SubmittableExtrinsic<ApiType>,
                [EpMultiTokensCollectionDefaultCollectionDescriptor]
            >
            /**
             * Destroys [`Collection`](ep_multi_tokens::Collection) with `id`. `origin` must be the
             * owner of the [`Collection`](ep_multi_tokens::Collection).
             *
             * # Errors
             *
             * - [`Error::NoPermission`] if `origin` is not the owner of the collection.
             * - [`Error::CollectionNotFound`] if `Collection` with `id` does not exist.
             * - [`Error::DestroyForbiddenByCollectionEvent`] if another pallet is blocking the
             * collection's destruction
             * - [`Error::DestroyForbiddenByRemainingTokens`] if collection still has tokens when
             * destroying
             * - [`Error::DestroyForbiddenByAttributeCount`] if collection still has attributes when
             * destroying
             * current number of collection attributes.
             **/
            destroyCollection: AugmentedSubmittable<
                (collectionId: Compact<u128> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>,
                [Compact<u128>]
            >
            /**
             * Sends an event that signifies claiming the tokens was completed. Only callable by
             * [`Config::EthereumMigrationOrigin`].
             **/
            finishClaimTokens: AugmentedSubmittable<
                (
                    destination: AccountId32 | string | Uint8Array,
                    ethereumAddress: H160 | string | Uint8Array
                ) => SubmittableExtrinsic<ApiType>,
                [AccountId32, H160]
            >
            /**
             * Same as [`approve_collection`](Self::approve_collection), but it is callable by
             * [`Config::ForceOrigin`].
             **/
            forceApproveCollection: AugmentedSubmittable<
                (
                    caller:
                        | MultiAddress
                        | { Id: any }
                        | { Index: any }
                        | { Raw: any }
                        | { Address32: any }
                        | { Address20: any }
                        | string
                        | Uint8Array,
                    collectionId: Compact<u128> | AnyNumber | Uint8Array,
                    operator: AccountId32 | string | Uint8Array,
                    expiration: Option<u32> | null | Uint8Array | u32 | AnyNumber
                ) => SubmittableExtrinsic<ApiType>,
                [MultiAddress, Compact<u128>, AccountId32, Option<u32>]
            >
            /**
             * Same as [`burn`](Self::burn), but it is only callable by
             * [`Config::ForceOrigin`]. Executes the burn by `caller`.
             **/
            forceBurn: AugmentedSubmittable<
                (
                    caller:
                        | MultiAddress
                        | { Id: any }
                        | { Index: any }
                        | { Raw: any }
                        | { Address32: any }
                        | { Address20: any }
                        | string
                        | Uint8Array,
                    collectionId: Compact<u128> | AnyNumber | Uint8Array,
                    params:
                        | EpMultiTokensPolicyBurnDefaultBurnParams
                        | { tokenId?: any; amount?: any; removeTokenStorage?: any }
                        | string
                        | Uint8Array
                ) => SubmittableExtrinsic<ApiType>,
                [MultiAddress, Compact<u128>, EpMultiTokensPolicyBurnDefaultBurnParams]
            >
            /**
             * Creates a new collection from `descriptor` at `collection_id`, origin must be root
             *
             * # Errors
             * - [`Error::DepositReserveFailed`] if the deposit cannot be reserved
             * - [`Error::CollectionIdAlreadyInUse`] if the collection id is already in use
             **/
            forceCreateCollection: AugmentedSubmittable<
                (
                    owner: AccountId32 | string | Uint8Array,
                    collectionId: Compact<u128> | AnyNumber | Uint8Array,
                    descriptor:
                        | EpMultiTokensCollectionDefaultCollectionDescriptor
                        | { policy?: any; depositor?: any; explicitRoyaltyCurrencies?: any; attributes?: any }
                        | string
                        | Uint8Array
                ) => SubmittableExtrinsic<ApiType>,
                [AccountId32, Compact<u128>, EpMultiTokensCollectionDefaultCollectionDescriptor]
            >
            /**
             * Creates a new collection from `descriptor` at `collection_id`, origin must be
             * [`Config::EthereumMigrationOrigin`]. It differs from `force_create_collection`
             * since it writes to `NativeCollectionIds` and `ClaimableCollectionIds`.
             *
             * # Params
             * - `owner` - the account that will own the new collection
             * - `claimer` - the ethereum address that will be able to claim the collection
             * - `ethereum_collection_id` - the collection id on ethereum
             *
             * # Errors
             * - [`Error::DepositReserveFailed`] if the deposit cannot be reserved
             * - [`Error::CollectionIdAlreadyInUse`] if the collection id is already in use
             **/
            forceCreateEthereumCollection: AugmentedSubmittable<
                (
                    owner: AccountId32 | string | Uint8Array,
                    claimer: H160 | string | Uint8Array,
                    ethereumCollectionId: Compact<u128> | AnyNumber | Uint8Array,
                    descriptor:
                        | EpMultiTokensCollectionDefaultCollectionDescriptor
                        | { policy?: any; depositor?: any; explicitRoyaltyCurrencies?: any; attributes?: any }
                        | string
                        | Uint8Array
                ) => SubmittableExtrinsic<ApiType>,
                [AccountId32, H160, Compact<u128>, EpMultiTokensCollectionDefaultCollectionDescriptor]
            >
            /**
             * Same as [`freeze`](Self::freeze), but it is callable by [`Config::ForceOrigin`]
             **/
            forceFreeze: AugmentedSubmittable<
                (
                    info: EpMultiTokensFreeze | { collectionId?: any; freezeType?: any } | string | Uint8Array
                ) => SubmittableExtrinsic<ApiType>,
                [EpMultiTokensFreeze]
            >
            /**
             * Same as [`mint`](Self::mint), but it is callable by
             * [`Config::EthereumMigrationOrigin`]. If `caller` is None, it will use the collection
             * owner. If `depositor` is `Some`, they will pay the deposit for minting.
             **/
            forceMint: AugmentedSubmittable<
                (
                    caller:
                        | Option<MultiAddress>
                        | null
                        | Uint8Array
                        | MultiAddress
                        | { Id: any }
                        | { Index: any }
                        | { Raw: any }
                        | { Address32: any }
                        | { Address20: any }
                        | string,
                    recipient:
                        | MultiAddress
                        | { Id: any }
                        | { Index: any }
                        | { Raw: any }
                        | { Address32: any }
                        | { Address20: any }
                        | string
                        | Uint8Array,
                    collectionId: Compact<u128> | AnyNumber | Uint8Array,
                    params:
                        | EpMultiTokensPolicyMintFlexibleMintParams
                        | { CreateOrMint: any }
                        | { Mint: any }
                        | string
                        | Uint8Array,
                    depositor:
                        | Option<MultiAddress>
                        | null
                        | Uint8Array
                        | MultiAddress
                        | { Id: any }
                        | { Index: any }
                        | { Raw: any }
                        | { Address32: any }
                        | { Address20: any }
                        | string
                ) => SubmittableExtrinsic<ApiType>,
                [
                    Option<MultiAddress>,
                    MultiAddress,
                    Compact<u128>,
                    EpMultiTokensPolicyMintFlexibleMintParams,
                    Option<MultiAddress>,
                ]
            >
            /**
             * Exactly as [`mutate_collection`](Self::mutate_collection), except the origin must be
             * root and the `caller` account should be specified.
             *
             * # Errors
             *
             * Same as [`mutate_collection`](Self::mutate_collection)
             **/
            forceMutateCollection: AugmentedSubmittable<
                (
                    collectionId: Compact<u128> | AnyNumber | Uint8Array,
                    mutation:
                        | EpMultiTokensCollectionDefaultCollectionMutation
                        | { owner?: any; royalty?: any; explicitRoyaltyCurrencies?: any }
                        | string
                        | Uint8Array
                ) => SubmittableExtrinsic<ApiType>,
                [Compact<u128>, EpMultiTokensCollectionDefaultCollectionMutation]
            >
            /**
             * Set the Tokens storage to the given `value`, origin must be root
             **/
            forceSetAttribute: AugmentedSubmittable<
                (
                    collectionId: Compact<u128> | AnyNumber | Uint8Array,
                    tokenId: Option<u128> | null | Uint8Array | u128 | AnyNumber,
                    key: Bytes | string | Uint8Array,
                    value:
                        | Option<EpMultiTokensAttribute>
                        | null
                        | Uint8Array
                        | EpMultiTokensAttribute
                        | { value?: any; deposit?: any; depositor?: any }
                        | string
                ) => SubmittableExtrinsic<ApiType>,
                [Compact<u128>, Option<u128>, Bytes, Option<EpMultiTokensAttribute>]
            >
            /**
             * Set the Collections storage to the given `value`, origin must be root
             **/
            forceSetCollection: AugmentedSubmittable<
                (
                    collectionId: Compact<u128> | AnyNumber | Uint8Array,
                    value:
                        | Option<EpMultiTokensCollection>
                        | null
                        | Uint8Array
                        | EpMultiTokensCollection
                        | {
                              owner?: any
                              policy?: any
                              tokenCount?: any
                              attributeCount?: any
                              creationDeposit?: any
                              totalDeposit?: any
                              explicitRoyaltyCurrencies?: any
                              totalInfusion?: any
                          }
                        | string
                ) => SubmittableExtrinsic<ApiType>,
                [Compact<u128>, Option<EpMultiTokensCollection>]
            >
            /**
             * Set the CollectionAccounts storage to the given `value`, origin must be root
             **/
            forceSetCollectionAccount: AugmentedSubmittable<
                (
                    collectionId: Compact<u128> | AnyNumber | Uint8Array,
                    accountId:
                        | MultiAddress
                        | { Id: any }
                        | { Index: any }
                        | { Raw: any }
                        | { Address32: any }
                        | { Address20: any }
                        | string
                        | Uint8Array,
                    value:
                        | Option<PalletMultiTokensFeaturesCollectionTypesCollectionAccount>
                        | null
                        | Uint8Array
                        | PalletMultiTokensFeaturesCollectionTypesCollectionAccount
                        | { isFrozen?: any; approvals?: any; accountCount?: any }
                        | string
                ) => SubmittableExtrinsic<ApiType>,
                [Compact<u128>, MultiAddress, Option<PalletMultiTokensFeaturesCollectionTypesCollectionAccount>]
            >
            /**
             * Sets [`ClaimableCollectionIds`] to `value`. Only callable by [`Config::ForceOrigin`].
             **/
            forceSetEthereumAccount: AugmentedSubmittable<
                (
                    address: H160 | string | Uint8Array,
                    value: Option<Vec<u128>> | null | Uint8Array | Vec<u128> | (u128 | AnyNumber | Uint8Array)[]
                ) => SubmittableExtrinsic<ApiType>,
                [H160, Option<Vec<u128>>]
            >
            /**
             * Sets [`NativeCollectionIds`] to `native_collection_id`. Only callable by
             * [`Config::ForceOrigin`].
             **/
            forceSetEthereumCollectionId: AugmentedSubmittable<
                (
                    ethereumCollectionId: Compact<u128> | AnyNumber | Uint8Array,
                    nativeCollectionId: Option<u128> | null | Uint8Array | u128 | AnyNumber
                ) => SubmittableExtrinsic<ApiType>,
                [Compact<u128>, Option<u128>]
            >
            /**
             * Sets [`UnmintableTokenIds`] using ethereum_collection_id, the function will fail if the
             * ethereum_collection_id is invalid
             **/
            forceSetEthereumUnmintableTokenIds: AugmentedSubmittable<
                (
                    ethereumCollectionId: Compact<u128> | AnyNumber | Uint8Array,
                    baseTokenId: Compact<u64> | AnyNumber | Uint8Array,
                    tokenIndex: Compact<u64> | AnyNumber | Uint8Array
                ) => SubmittableExtrinsic<ApiType>,
                [Compact<u128>, Compact<u64>, Compact<u64>]
            >
            /**
             * Sets [`NextCollectionId`] to `value`. Only callable by [`Config::ForceOrigin`].
             **/
            forceSetNextCollectionId: AugmentedSubmittable<
                (value: Compact<u128> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>,
                [Compact<u128>]
            >
            /**
             * Set the Tokens storage to the given `value`, origin must be root
             **/
            forceSetToken: AugmentedSubmittable<
                (
                    collectionId: Compact<u128> | AnyNumber | Uint8Array,
                    tokenId: Compact<u128> | AnyNumber | Uint8Array,
                    value:
                        | Option<EpMultiTokensToken>
                        | null
                        | Uint8Array
                        | EpMultiTokensToken
                        | {
                              supply?: any
                              cap?: any
                              freezeState?: any
                              requiresDeposit?: any
                              creationDeposit?: any
                              ownerDeposit?: any
                              totalTokenAccountDeposit?: any
                              attributeCount?: any
                              accountCount?: any
                              marketBehavior?: any
                              listingForbidden?: any
                              metadata?: any
                              infusion?: any
                              anyoneCanInfuse?: any
                              groups?: any
                          }
                        | string
                ) => SubmittableExtrinsic<ApiType>,
                [Compact<u128>, Compact<u128>, Option<EpMultiTokensToken>]
            >
            /**
             * Set the TokenAccounts storage to the given `value`, origin must be root
             **/
            forceSetTokenAccount: AugmentedSubmittable<
                (
                    collectionId: Compact<u128> | AnyNumber | Uint8Array,
                    tokenId: Compact<u128> | AnyNumber | Uint8Array,
                    accountId:
                        | MultiAddress
                        | { Id: any }
                        | { Index: any }
                        | { Raw: any }
                        | { Address32: any }
                        | { Address20: any }
                        | string
                        | Uint8Array,
                    value:
                        | Option<PalletMultiTokensFeaturesTokenTypesTokenAccount>
                        | null
                        | Uint8Array
                        | PalletMultiTokensFeaturesTokenTypesTokenAccount
                        | {
                              balance?: any
                              reservedBalance?: any
                              lockedBalance?: any
                              namedReserves?: any
                              locks?: any
                              approvals?: any
                              isFrozen?: any
                              deposit?: any
                          }
                        | string
                ) => SubmittableExtrinsic<ApiType>,
                [Compact<u128>, Compact<u128>, MultiAddress, Option<PalletMultiTokensFeaturesTokenTypesTokenAccount>]
            >
            /**
             * Sets [`UnmintableTokenIds`] storage. Only callable by
             * [`Config::ForceOrigin`].
             **/
            forceSetUnmintableTokenIds: AugmentedSubmittable<
                (
                    collectionId: Compact<u128> | AnyNumber | Uint8Array,
                    baseTokenId: Compact<u64> | AnyNumber | Uint8Array,
                    tokenIndex: Compact<u64> | AnyNumber | Uint8Array
                ) => SubmittableExtrinsic<ApiType>,
                [Compact<u128>, Compact<u64>, Compact<u64>]
            >
            /**
             * Exactly as [`transfer`](Self::transfer), except the origin must be root and the source
             * account should be specified.
             *
             * # Errors
             *
             * Same as [`transfer`](Self::transfer)
             **/
            forceTransfer: AugmentedSubmittable<
                (
                    source:
                        | MultiAddress
                        | { Id: any }
                        | { Index: any }
                        | { Raw: any }
                        | { Address32: any }
                        | { Address20: any }
                        | string
                        | Uint8Array,
                    destination:
                        | MultiAddress
                        | { Id: any }
                        | { Index: any }
                        | { Raw: any }
                        | { Address32: any }
                        | { Address20: any }
                        | string
                        | Uint8Array,
                    collectionId: Compact<u128> | AnyNumber | Uint8Array,
                    params:
                        | EpMultiTokensPolicyTransferDefaultTransferParams
                        | { Simple: any }
                        | { Operator: any }
                        | string
                        | Uint8Array
                ) => SubmittableExtrinsic<ApiType>,
                [MultiAddress, MultiAddress, Compact<u128>, EpMultiTokensPolicyTransferDefaultTransferParams]
            >
            /**
             * Freeze collection, token or account
             **/
            freeze: AugmentedSubmittable<
                (
                    info: EpMultiTokensFreeze | { collectionId?: any; freezeType?: any } | string | Uint8Array
                ) => SubmittableExtrinsic<ApiType>,
                [EpMultiTokensFreeze]
            >
            /**
             * Infuses ENJ into the token. The actual amount reserved is amount * supply
             * It is permissionless if the anyone_can_infuse is true
             *
             * See [Infusion](crate#infusions)
             *
             * The function calculates the total amount to be reserved by multiplying the infusion
             * amount by the token's supply.
             *
             * Note: If the caller is not the collection owner, the infusion amount is transferred from
             * the caller to the owner. The amount is then reserved in the owner's account.
             **/
            infuse: AugmentedSubmittable<
                (
                    collectionId: Compact<u128> | AnyNumber | Uint8Array,
                    tokenId: Compact<u128> | AnyNumber | Uint8Array,
                    amount: Compact<u128> | AnyNumber | Uint8Array
                ) => SubmittableExtrinsic<ApiType>,
                [Compact<u128>, Compact<u128>, Compact<u128>]
            >
            /**
             * `origin` mints to `recipient` for `collection_id` with `params` using the pallet's
             * [`MintPolicy`](traits::CollectionPolicy::Mint).
             *
             * Tokens are minted using [`MintParams`], and it may only be done by the collection's
             * owner. There are two types of mint operations:
             *
             * **Create**
             *
             * This must be called the first time a token is being created. Any token id can be chosen
             * when creating a token. They do not have to be sequential.
             *
             * You can specify additional parameters that can apply constraints to the token or give it
             * a royalty. Some of these values can be changed later using the
             * [`mutateToken`](Self::mutate_token) extrinsic.
             *
             * **Mint**
             *
             * After a token is created, you can mint additional balance using this variant.
             *
             * # Errors
             *
             * - [`Error::AmountZero`] if `amount == 0`.
             * - [`Error::CollectionNotFound`] if `Collection` does not exist.
             * - [`Error::TokenNotFound`] if `Token` does not exist.
             * - [`Error::TokenAlreadyExists`] if attempting to create a token that already exists
             * - [`Error::NoPermission`] if `caller` is not allowed to mint the `collection`.
             * - [`Error::TokenMintCapExceeded`] if the mint policy TokenCap does not allow minting
             * - `MaxTokenCountExceeded` if the mint policy max_token_count is exceeded
             * - [`Error::DepositReserveFailed`] if the issuer does not have sufficient balance for
             * token deposit
             * - [`Error::ConflictingLocation`] if the token is foreign and the location is already
             * mapped to another asset in `AssetIdsByLocation`
             **/
            mint: AugmentedSubmittable<
                (
                    recipient:
                        | MultiAddress
                        | { Id: any }
                        | { Index: any }
                        | { Raw: any }
                        | { Address32: any }
                        | { Address20: any }
                        | string
                        | Uint8Array,
                    collectionId: Compact<u128> | AnyNumber | Uint8Array,
                    params: EpMultiTokensPolicyMintDefaultMintParams | { CreateToken: any } | { Mint: any } | string | Uint8Array
                ) => SubmittableExtrinsic<ApiType>,
                [MultiAddress, Compact<u128>, EpMultiTokensPolicyMintDefaultMintParams]
            >
            /**
             * Modify [`Collection`](ep_multi_tokens::Collection) with `id` by applying `mutation`. See
             * ['CollectionMutation'] for more info.
             *
             * A new owner of the collection can be assigned. (optional)
             * Explicit Royalty Currencies can be set for the entire collection (see the Explicit
             * Royalty Currencies section for a detailed description)
             *
             * # Errors
             *
             * - [`Error::CollectionNotFound`] if `collection_id` does not exist.
             * - [`Error::NoPermission`] if `origin` is not the owner of `collection`.
             **/
            mutateCollection: AugmentedSubmittable<
                (
                    collectionId: Compact<u128> | AnyNumber | Uint8Array,
                    mutation:
                        | EpMultiTokensCollectionDefaultCollectionMutation
                        | { owner?: any; royalty?: any; explicitRoyaltyCurrencies?: any }
                        | string
                        | Uint8Array
                ) => SubmittableExtrinsic<ApiType>,
                [Compact<u128>, EpMultiTokensCollectionDefaultCollectionMutation]
            >
            /**
             * Modify [`Token`](ep_multi_tokens::Token) with `token_id`  from
             * [`Collection`](ep_multi_tokens::Collection) with `collection_id` by applying `mutation`
             *
             * The collection creator/owner can mutate the settings of a token.
             * See [DefaultTokenMutation](ep_multi_tokens::DefaultTokenMutation) for specific fields
             * and descriptions.
             *
             * Note that `behavior` is a nested option of type
             * [TokenMarketBehavior](ep_multi_tokens::TokenMarketBehavior). This can either be set to
             * `None`, a `Currency`, or a royalty.
             *
             * All fields are `Optional`, so only set the specific fields you want to change to `Some`.
             *
             * # Errors
             *
             * - [`Error::CurrencyIncompatibleWithCollectionRoyalty`] if token has already been
             * assigned a royalty
             * - [`Error::NoPermission`] if not the collection owner
             * - [`Error::TokenNotFound`] if Token does not exist
             * - [`Error::ConflictingLocation`] if the new location is already occupied
             **/
            mutateToken: AugmentedSubmittable<
                (
                    collectionId: Compact<u128> | AnyNumber | Uint8Array,
                    tokenId: Compact<u128> | AnyNumber | Uint8Array,
                    mutation:
                        | EpMultiTokensTokenDefaultTokenMutation
                        | { behavior?: any; listingForbidden?: any; anyoneCanInfuse?: any; name?: any }
                        | string
                        | Uint8Array
                ) => SubmittableExtrinsic<ApiType>,
                [Compact<u128>, Compact<u128>, EpMultiTokensTokenDefaultTokenMutation]
            >
            /**
             * Removes all attributes from the given `collection_id` or `token_id`.
             *
             * # Errors
             * - `InvalidAttributeCount` if `attribute_count` doesn't match the number of attributes
             * - [`Error::CollectionNotFound`] if Collection with `collection_id` does not exist.
             * - [`Error::TokenNotFound`] if Token with `token_id` does not exist.
             * - [`Error::NoPermission`] if `origin` account is not the owner of the Collection or
             * Token
             * - other errors from `remove_attribute`
             **/
            removeAllAttributes: AugmentedSubmittable<
                (
                    collectionId: Compact<u128> | AnyNumber | Uint8Array,
                    tokenId: Option<u128> | null | Uint8Array | u128 | AnyNumber,
                    attributeCount: u32 | AnyNumber | Uint8Array
                ) => SubmittableExtrinsic<ApiType>,
                [Compact<u128>, Option<u128>, u32]
            >
            /**
             * Removes the `key` attribute from the given `collection_id` or `token_id`.
             * Only callable by the collection owner.
             *
             * # Errors
             * - [`Error::InvalidAttributeKey`] if `key.len() == 0`
             * - [`Error::CollectionNotFound`] if `collection_id` does not exist.
             * - [`Error::TokenNotFound`] if `token_id` is `Some` and does not exist.
             * - [`Error::NoPermission`] if `caller` is not the owner of the collection.
             * - `Underflow` if an attribute counter underflows
             **/
            removeAttribute: AugmentedSubmittable<
                (
                    collectionId: Compact<u128> | AnyNumber | Uint8Array,
                    tokenId: Option<u128> | null | Uint8Array | u128 | AnyNumber,
                    key: Bytes | string | Uint8Array
                ) => SubmittableExtrinsic<ApiType>,
                [Compact<u128>, Option<u128>, Bytes]
            >
            /**
             * Sets the attribute `key` to `value` for `collection_id`.
             * If `token_id` is [`None`], the attribute is added to the collection. If it is [`Some`],
             * the attribute is added to the token.
             * Only callable by the collection's owner.
             *
             * # Errors
             * - [`Error::InvalidAttributeKey`] if `key.len() == 0`
             * - [`Error::CollectionNotFound`] if `collection_id` does not exist.
             * - [`Error::TokenNotFound`] if `token_id` is `Some` and does not exist.
             * - [`Error::NoPermission`] if `source` account is not the owner of the collection.
             * - [`Error::DepositReserveFailed`] if unable to reserve the deposit for the attribute
             * storage.
             **/
            setAttribute: AugmentedSubmittable<
                (
                    collectionId: Compact<u128> | AnyNumber | Uint8Array,
                    tokenId: Option<u128> | null | Uint8Array | u128 | AnyNumber,
                    key: Bytes | string | Uint8Array,
                    value: Bytes | string | Uint8Array,
                    depositor:
                        | Option<MultiAddress>
                        | null
                        | Uint8Array
                        | MultiAddress
                        | { Id: any }
                        | { Index: any }
                        | { Raw: any }
                        | { Address32: any }
                        | { Address20: any }
                        | string
                ) => SubmittableExtrinsic<ApiType>,
                [Compact<u128>, Option<u128>, Bytes, Bytes, Option<MultiAddress>]
            >
            /**
             * Thaw collection, token or account
             **/
            thaw: AugmentedSubmittable<
                (
                    info: EpMultiTokensFreeze | { collectionId?: any; freezeType?: any } | string | Uint8Array
                ) => SubmittableExtrinsic<ApiType>,
                [EpMultiTokensFreeze]
            >
            /**
             * `operator` transfers to `recipient` for `collection_id` with `params`
             *
             * Can accept [`DefaultTransferParams`](ep_multi_tokens::DefaultTransferParams):
             *
             * - The `Simple` transfer is a regular transfer
             * - The `Operator` transfer is the same as `transfer_from` and requires approval. See
             * [Operator](crate#operator) in the pallet's documentation for more info.
             *
             * # Errors
             *
             * - [`Error::AmountZero`] if `amount == 0`.
             * - [`Error::BalanceLow`] if `source` does not own enough amount of `collection`.
             **/
            transfer: AugmentedSubmittable<
                (
                    recipient:
                        | MultiAddress
                        | { Id: any }
                        | { Index: any }
                        | { Raw: any }
                        | { Address32: any }
                        | { Address20: any }
                        | string
                        | Uint8Array,
                    collectionId: Compact<u128> | AnyNumber | Uint8Array,
                    params:
                        | EpMultiTokensPolicyTransferDefaultTransferParams
                        | { Simple: any }
                        | { Operator: any }
                        | string
                        | Uint8Array
                ) => SubmittableExtrinsic<ApiType>,
                [MultiAddress, Compact<u128>, EpMultiTokensPolicyTransferDefaultTransferParams]
            >
            /**
             * Disallows `operator` from managing all of `origin`'s tokens belonging to `collection`.
             * It will only undo a previous `approveCollection` call. It does not affect individual
             * token approvals.
             *
             * # Errors
             *
             * - [`Error::CollectionAccountNotFound`] if the collection account cannot be found
             **/
            unapproveCollection: AugmentedSubmittable<
                (
                    collectionId: Compact<u128> | AnyNumber | Uint8Array,
                    operator: AccountId32 | string | Uint8Array
                ) => SubmittableExtrinsic<ApiType>,
                [Compact<u128>, AccountId32]
            >
            /**
             * Disallows `operator` from transfering previously approved `origin`'s `token_id` of
             * `collection_id`. Completely removes any previous approval.
             *
             * # Errors
             *
             * - [`Error::TokenAccountNotFound`] if the token account does not exist
             **/
            unapproveToken: AugmentedSubmittable<
                (
                    collectionId: Compact<u128> | AnyNumber | Uint8Array,
                    tokenId: Compact<u128> | AnyNumber | Uint8Array,
                    operator: AccountId32 | string | Uint8Array
                ) => SubmittableExtrinsic<ApiType>,
                [Compact<u128>, Compact<u128>, AccountId32]
            >
            /**
             * Can add or remove deposit for the number of accounts the token can accommodate. It is
             * permissionless if increased. Only the collection owner can decrease.
             * The locked amount is stored in the collection owner's account.
             **/
            updateAccountDeposit: AugmentedSubmittable<
                (
                    collectionId: Compact<u128> | AnyNumber | Uint8Array,
                    tokenId: Compact<u128> | AnyNumber | Uint8Array,
                    deltaAccountCount: i32 | AnyNumber | Uint8Array
                ) => SubmittableExtrinsic<ApiType>,
                [Compact<u128>, Compact<u128>, i32]
            >
            /**
             * Generic tx
             **/
            [key: string]: SubmittableExtrinsicFunction<ApiType>
        }
        ormlXcm: {
            /**
             * Send an XCM message as parachain sovereign.
             **/
            sendAsSovereign: AugmentedSubmittable<
                (
                    dest: XcmVersionedLocation | { V2: any } | { V3: any } | { V4: any } | string | Uint8Array,
                    message: XcmVersionedXcm | { V2: any } | { V3: any } | { V4: any } | string | Uint8Array
                ) => SubmittableExtrinsic<ApiType>,
                [XcmVersionedLocation, XcmVersionedXcm]
            >
            /**
             * Generic tx
             **/
            [key: string]: SubmittableExtrinsicFunction<ApiType>
        }
        parachainInfo: {
            /**
             * Generic tx
             **/
            [key: string]: SubmittableExtrinsicFunction<ApiType>
        }
        parachainSystem: {
            /**
             * Authorize an upgrade to a given `code_hash` for the runtime. The runtime can be supplied
             * later.
             *
             * The `check_version` parameter sets a boolean flag for whether or not the runtime's spec
             * version and name should be verified on upgrade. Since the authorization only has a hash,
             * it cannot actually perform the verification.
             *
             * This call requires Root origin.
             **/
            authorizeUpgrade: AugmentedSubmittable<
                (
                    codeHash: H256 | string | Uint8Array,
                    checkVersion: bool | boolean | Uint8Array
                ) => SubmittableExtrinsic<ApiType>,
                [H256, bool]
            >
            /**
             * Provide the preimage (runtime binary) `code` for an upgrade that has been authorized.
             *
             * If the authorization required a version check, this call will ensure the spec name
             * remains unchanged and that the spec version has increased.
             *
             * Note that this function will not apply the new `code`, but only attempt to schedule the
             * upgrade with the Relay Chain.
             *
             * All origins are allowed.
             **/
            enactAuthorizedUpgrade: AugmentedSubmittable<
                (code: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>,
                [Bytes]
            >
            /**
             * Set the current validation data.
             *
             * This should be invoked exactly once per block. It will panic at the finalization
             * phase if the call was not invoked.
             *
             * The dispatch origin for this call must be `Inherent`
             *
             * As a side effect, this function upgrades the current validation function
             * if the appropriate time has come.
             **/
            setValidationData: AugmentedSubmittable<
                (
                    data:
                        | CumulusPrimitivesParachainInherentParachainInherentData
                        | { validationData?: any; relayChainState?: any; downwardMessages?: any; horizontalMessages?: any }
                        | string
                        | Uint8Array
                ) => SubmittableExtrinsic<ApiType>,
                [CumulusPrimitivesParachainInherentParachainInherentData]
            >
            sudoSendUpwardMessage: AugmentedSubmittable<
                (message: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>,
                [Bytes]
            >
            /**
             * Generic tx
             **/
            [key: string]: SubmittableExtrinsicFunction<ApiType>
        }
        polkadotXcm: {
            /**
             * Claims assets trapped on this pallet because of leftover assets during XCM execution.
             *
             * - `origin`: Anyone can call this extrinsic.
             * - `assets`: The exact assets that were trapped. Use the version to specify what version
             * was the latest when they were trapped.
             * - `beneficiary`: The location/account where the claimed assets will be deposited.
             **/
            claimAssets: AugmentedSubmittable<
                (
                    assets: XcmVersionedAssets | { V2: any } | { V3: any } | { V4: any } | string | Uint8Array,
                    beneficiary: XcmVersionedLocation | { V2: any } | { V3: any } | { V4: any } | string | Uint8Array
                ) => SubmittableExtrinsic<ApiType>,
                [XcmVersionedAssets, XcmVersionedLocation]
            >
            /**
             * Execute an XCM message from a local, signed, origin.
             *
             * An event is deposited indicating whether `msg` could be executed completely or only
             * partially.
             *
             * No more than `max_weight` will be used in its attempted execution. If this is less than
             * the maximum amount of weight that the message could take to be executed, then no
             * execution attempt will be made.
             **/
            execute: AugmentedSubmittable<
                (
                    message: XcmVersionedXcm | { V2: any } | { V3: any } | { V4: any } | string | Uint8Array,
                    maxWeight: SpWeightsWeightV2Weight | { refTime?: any; proofSize?: any } | string | Uint8Array
                ) => SubmittableExtrinsic<ApiType>,
                [XcmVersionedXcm, SpWeightsWeightV2Weight]
            >
            /**
             * Set a safe XCM version (the version that XCM should be encoded with if the most recent
             * version a destination can accept is unknown).
             *
             * - `origin`: Must be an origin specified by AdminOrigin.
             * - `maybe_xcm_version`: The default XCM encoding version, or `None` to disable.
             **/
            forceDefaultXcmVersion: AugmentedSubmittable<
                (maybeXcmVersion: Option<u32> | null | Uint8Array | u32 | AnyNumber) => SubmittableExtrinsic<ApiType>,
                [Option<u32>]
            >
            /**
             * Ask a location to notify us regarding their XCM version and any changes to it.
             *
             * - `origin`: Must be an origin specified by AdminOrigin.
             * - `location`: The location to which we should subscribe for XCM version notifications.
             **/
            forceSubscribeVersionNotify: AugmentedSubmittable<
                (
                    location: XcmVersionedLocation | { V2: any } | { V3: any } | { V4: any } | string | Uint8Array
                ) => SubmittableExtrinsic<ApiType>,
                [XcmVersionedLocation]
            >
            /**
             * Set or unset the global suspension state of the XCM executor.
             *
             * - `origin`: Must be an origin specified by AdminOrigin.
             * - `suspended`: `true` to suspend, `false` to resume.
             **/
            forceSuspension: AugmentedSubmittable<
                (suspended: bool | boolean | Uint8Array) => SubmittableExtrinsic<ApiType>,
                [bool]
            >
            /**
             * Require that a particular destination should no longer notify us regarding any XCM
             * version changes.
             *
             * - `origin`: Must be an origin specified by AdminOrigin.
             * - `location`: The location to which we are currently subscribed for XCM version
             * notifications which we no longer desire.
             **/
            forceUnsubscribeVersionNotify: AugmentedSubmittable<
                (
                    location: XcmVersionedLocation | { V2: any } | { V3: any } | { V4: any } | string | Uint8Array
                ) => SubmittableExtrinsic<ApiType>,
                [XcmVersionedLocation]
            >
            /**
             * Extoll that a particular destination can be communicated with through a particular
             * version of XCM.
             *
             * - `origin`: Must be an origin specified by AdminOrigin.
             * - `location`: The destination that is being described.
             * - `xcm_version`: The latest version of XCM that `location` supports.
             **/
            forceXcmVersion: AugmentedSubmittable<
                (
                    location: StagingXcmV4Location | { parents?: any; interior?: any } | string | Uint8Array,
                    version: u32 | AnyNumber | Uint8Array
                ) => SubmittableExtrinsic<ApiType>,
                [StagingXcmV4Location, u32]
            >
            /**
             * Transfer some assets from the local chain to the destination chain through their local,
             * destination or remote reserve.
             *
             * `assets` must have same reserve location and may not be teleportable to `dest`.
             * - `assets` have local reserve: transfer assets to sovereign account of destination
             * chain and forward a notification XCM to `dest` to mint and deposit reserve-based
             * assets to `beneficiary`.
             * - `assets` have destination reserve: burn local assets and forward a notification to
             * `dest` chain to withdraw the reserve assets from this chain's sovereign account and
             * deposit them to `beneficiary`.
             * - `assets` have remote reserve: burn local assets, forward XCM to reserve chain to move
             * reserves from this chain's SA to `dest` chain's SA, and forward another XCM to `dest`
             * to mint and deposit reserve-based assets to `beneficiary`.
             *
             * Fee payment on the destination side is made from the asset in the `assets` vector of
             * index `fee_asset_item`, up to enough to pay for `weight_limit` of weight. If more weight
             * is needed than `weight_limit`, then the operation will fail and the assets send may be
             * at risk.
             *
             * - `origin`: Must be capable of withdrawing the `assets` and executing XCM.
             * - `dest`: Destination context for the assets. Will typically be `[Parent,
             * Parachain(..)]` to send from parachain to parachain, or `[Parachain(..)]` to send from
             * relay to parachain.
             * - `beneficiary`: A beneficiary location for the assets in the context of `dest`. Will
             * generally be an `AccountId32` value.
             * - `assets`: The assets to be withdrawn. This should include the assets used to pay the
             * fee on the `dest` (and possibly reserve) chains.
             * - `fee_asset_item`: The index into `assets` of the item which should be used to pay
             * fees.
             * - `weight_limit`: The remote-side weight limit, if any, for the XCM fee purchase.
             **/
            limitedReserveTransferAssets: AugmentedSubmittable<
                (
                    dest: XcmVersionedLocation | { V2: any } | { V3: any } | { V4: any } | string | Uint8Array,
                    beneficiary: XcmVersionedLocation | { V2: any } | { V3: any } | { V4: any } | string | Uint8Array,
                    assets: XcmVersionedAssets | { V2: any } | { V3: any } | { V4: any } | string | Uint8Array,
                    feeAssetItem: u32 | AnyNumber | Uint8Array,
                    weightLimit: XcmV3WeightLimit | { Unlimited: any } | { Limited: any } | string | Uint8Array
                ) => SubmittableExtrinsic<ApiType>,
                [XcmVersionedLocation, XcmVersionedLocation, XcmVersionedAssets, u32, XcmV3WeightLimit]
            >
            /**
             * Teleport some assets from the local chain to some destination chain.
             *
             * Fee payment on the destination side is made from the asset in the `assets` vector of
             * index `fee_asset_item`, up to enough to pay for `weight_limit` of weight. If more weight
             * is needed than `weight_limit`, then the operation will fail and the assets send may be
             * at risk.
             *
             * - `origin`: Must be capable of withdrawing the `assets` and executing XCM.
             * - `dest`: Destination context for the assets. Will typically be `[Parent,
             * Parachain(..)]` to send from parachain to parachain, or `[Parachain(..)]` to send from
             * relay to parachain.
             * - `beneficiary`: A beneficiary location for the assets in the context of `dest`. Will
             * generally be an `AccountId32` value.
             * - `assets`: The assets to be withdrawn. This should include the assets used to pay the
             * fee on the `dest` chain.
             * - `fee_asset_item`: The index into `assets` of the item which should be used to pay
             * fees.
             * - `weight_limit`: The remote-side weight limit, if any, for the XCM fee purchase.
             **/
            limitedTeleportAssets: AugmentedSubmittable<
                (
                    dest: XcmVersionedLocation | { V2: any } | { V3: any } | { V4: any } | string | Uint8Array,
                    beneficiary: XcmVersionedLocation | { V2: any } | { V3: any } | { V4: any } | string | Uint8Array,
                    assets: XcmVersionedAssets | { V2: any } | { V3: any } | { V4: any } | string | Uint8Array,
                    feeAssetItem: u32 | AnyNumber | Uint8Array,
                    weightLimit: XcmV3WeightLimit | { Unlimited: any } | { Limited: any } | string | Uint8Array
                ) => SubmittableExtrinsic<ApiType>,
                [XcmVersionedLocation, XcmVersionedLocation, XcmVersionedAssets, u32, XcmV3WeightLimit]
            >
            /**
             * Transfer some assets from the local chain to the destination chain through their local,
             * destination or remote reserve.
             *
             * `assets` must have same reserve location and may not be teleportable to `dest`.
             * - `assets` have local reserve: transfer assets to sovereign account of destination
             * chain and forward a notification XCM to `dest` to mint and deposit reserve-based
             * assets to `beneficiary`.
             * - `assets` have destination reserve: burn local assets and forward a notification to
             * `dest` chain to withdraw the reserve assets from this chain's sovereign account and
             * deposit them to `beneficiary`.
             * - `assets` have remote reserve: burn local assets, forward XCM to reserve chain to move
             * reserves from this chain's SA to `dest` chain's SA, and forward another XCM to `dest`
             * to mint and deposit reserve-based assets to `beneficiary`.
             *
             * **This function is deprecated: Use `limited_reserve_transfer_assets` instead.**
             *
             * Fee payment on the destination side is made from the asset in the `assets` vector of
             * index `fee_asset_item`. The weight limit for fees is not provided and thus is unlimited,
             * with all fees taken as needed from the asset.
             *
             * - `origin`: Must be capable of withdrawing the `assets` and executing XCM.
             * - `dest`: Destination context for the assets. Will typically be `[Parent,
             * Parachain(..)]` to send from parachain to parachain, or `[Parachain(..)]` to send from
             * relay to parachain.
             * - `beneficiary`: A beneficiary location for the assets in the context of `dest`. Will
             * generally be an `AccountId32` value.
             * - `assets`: The assets to be withdrawn. This should include the assets used to pay the
             * fee on the `dest` (and possibly reserve) chains.
             * - `fee_asset_item`: The index into `assets` of the item which should be used to pay
             * fees.
             **/
            reserveTransferAssets: AugmentedSubmittable<
                (
                    dest: XcmVersionedLocation | { V2: any } | { V3: any } | { V4: any } | string | Uint8Array,
                    beneficiary: XcmVersionedLocation | { V2: any } | { V3: any } | { V4: any } | string | Uint8Array,
                    assets: XcmVersionedAssets | { V2: any } | { V3: any } | { V4: any } | string | Uint8Array,
                    feeAssetItem: u32 | AnyNumber | Uint8Array
                ) => SubmittableExtrinsic<ApiType>,
                [XcmVersionedLocation, XcmVersionedLocation, XcmVersionedAssets, u32]
            >
            send: AugmentedSubmittable<
                (
                    dest: XcmVersionedLocation | { V2: any } | { V3: any } | { V4: any } | string | Uint8Array,
                    message: XcmVersionedXcm | { V2: any } | { V3: any } | { V4: any } | string | Uint8Array
                ) => SubmittableExtrinsic<ApiType>,
                [XcmVersionedLocation, XcmVersionedXcm]
            >
            /**
             * Teleport some assets from the local chain to some destination chain.
             *
             * **This function is deprecated: Use `limited_teleport_assets` instead.**
             *
             * Fee payment on the destination side is made from the asset in the `assets` vector of
             * index `fee_asset_item`. The weight limit for fees is not provided and thus is unlimited,
             * with all fees taken as needed from the asset.
             *
             * - `origin`: Must be capable of withdrawing the `assets` and executing XCM.
             * - `dest`: Destination context for the assets. Will typically be `[Parent,
             * Parachain(..)]` to send from parachain to parachain, or `[Parachain(..)]` to send from
             * relay to parachain.
             * - `beneficiary`: A beneficiary location for the assets in the context of `dest`. Will
             * generally be an `AccountId32` value.
             * - `assets`: The assets to be withdrawn. This should include the assets used to pay the
             * fee on the `dest` chain.
             * - `fee_asset_item`: The index into `assets` of the item which should be used to pay
             * fees.
             **/
            teleportAssets: AugmentedSubmittable<
                (
                    dest: XcmVersionedLocation | { V2: any } | { V3: any } | { V4: any } | string | Uint8Array,
                    beneficiary: XcmVersionedLocation | { V2: any } | { V3: any } | { V4: any } | string | Uint8Array,
                    assets: XcmVersionedAssets | { V2: any } | { V3: any } | { V4: any } | string | Uint8Array,
                    feeAssetItem: u32 | AnyNumber | Uint8Array
                ) => SubmittableExtrinsic<ApiType>,
                [XcmVersionedLocation, XcmVersionedLocation, XcmVersionedAssets, u32]
            >
            /**
             * Transfer some assets from the local chain to the destination chain through their local,
             * destination or remote reserve, or through teleports.
             *
             * Fee payment on the destination side is made from the asset in the `assets` vector of
             * index `fee_asset_item` (hence referred to as `fees`), up to enough to pay for
             * `weight_limit` of weight. If more weight is needed than `weight_limit`, then the
             * operation will fail and the assets sent may be at risk.
             *
             * `assets` (excluding `fees`) must have same reserve location or otherwise be teleportable
             * to `dest`, no limitations imposed on `fees`.
             * - for local reserve: transfer assets to sovereign account of destination chain and
             * forward a notification XCM to `dest` to mint and deposit reserve-based assets to
             * `beneficiary`.
             * - for destination reserve: burn local assets and forward a notification to `dest` chain
             * to withdraw the reserve assets from this chain's sovereign account and deposit them
             * to `beneficiary`.
             * - for remote reserve: burn local assets, forward XCM to reserve chain to move reserves
             * from this chain's SA to `dest` chain's SA, and forward another XCM to `dest` to mint
             * and deposit reserve-based assets to `beneficiary`.
             * - for teleports: burn local assets and forward XCM to `dest` chain to mint/teleport
             * assets and deposit them to `beneficiary`.
             *
             * - `origin`: Must be capable of withdrawing the `assets` and executing XCM.
             * - `dest`: Destination context for the assets. Will typically be `X2(Parent,
             * Parachain(..))` to send from parachain to parachain, or `X1(Parachain(..))` to send
             * from relay to parachain.
             * - `beneficiary`: A beneficiary location for the assets in the context of `dest`. Will
             * generally be an `AccountId32` value.
             * - `assets`: The assets to be withdrawn. This should include the assets used to pay the
             * fee on the `dest` (and possibly reserve) chains.
             * - `fee_asset_item`: The index into `assets` of the item which should be used to pay
             * fees.
             * - `weight_limit`: The remote-side weight limit, if any, for the XCM fee purchase.
             **/
            transferAssets: AugmentedSubmittable<
                (
                    dest: XcmVersionedLocation | { V2: any } | { V3: any } | { V4: any } | string | Uint8Array,
                    beneficiary: XcmVersionedLocation | { V2: any } | { V3: any } | { V4: any } | string | Uint8Array,
                    assets: XcmVersionedAssets | { V2: any } | { V3: any } | { V4: any } | string | Uint8Array,
                    feeAssetItem: u32 | AnyNumber | Uint8Array,
                    weightLimit: XcmV3WeightLimit | { Unlimited: any } | { Limited: any } | string | Uint8Array
                ) => SubmittableExtrinsic<ApiType>,
                [XcmVersionedLocation, XcmVersionedLocation, XcmVersionedAssets, u32, XcmV3WeightLimit]
            >
            /**
             * Generic tx
             **/
            [key: string]: SubmittableExtrinsicFunction<ApiType>
        }
        pools: {
            /**
             * Mutate the pools. Can only be called by root.
             *
             * This extrinsic can udpate the fee share of each pool, by applying provided `mutation`
             * consisting of all pools and their `fee_share`, which is a percentage value. This allows
             * changing how fees are split between pools. Total percentage must be 100%, otherwise
             * `InvalidFeeShares` error is returned. Emits `PoolsMutated` event in the success case.
             *
             * # Errors
             *
             * - [`Error::InvalidFeeShares`] if the fee shares do not add up to 100%
             **/
            mutatePools: AugmentedSubmittable<
                (
                    mutation:
                        | PalletPoolsPoolsMutation
                        | { community?: any; collator?: any; fuelTanks?: any; priceDiscovery?: any }
                        | string
                        | Uint8Array
                ) => SubmittableExtrinsic<ApiType>,
                [PalletPoolsPoolsMutation]
            >
            /**
             * Generic tx
             **/
            [key: string]: SubmittableExtrinsicFunction<ApiType>
        }
        preimage: {
            /**
             * Ensure that the a bulk of pre-images is upgraded.
             *
             * The caller pays no fee if at least 90% of pre-images were successfully updated.
             **/
            ensureUpdated: AugmentedSubmittable<
                (hashes: Vec<H256> | (H256 | string | Uint8Array)[]) => SubmittableExtrinsic<ApiType>,
                [Vec<H256>]
            >
            /**
             * Register a preimage on-chain.
             *
             * If the preimage was previously requested, no fees or deposits are taken for providing
             * the preimage. Otherwise, a deposit is taken proportional to the size of the preimage.
             **/
            notePreimage: AugmentedSubmittable<(bytes: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Bytes]>
            /**
             * Request a preimage be uploaded to the chain without paying any fees or deposits.
             *
             * If the preimage requests has already been provided on-chain, we unreserve any deposit
             * a user may have paid, and take the control of the preimage out of their hands.
             **/
            requestPreimage: AugmentedSubmittable<(hash: H256 | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [H256]>
            /**
             * Clear an unrequested preimage from the runtime storage.
             *
             * If `len` is provided, then it will be a much cheaper operation.
             *
             * - `hash`: The hash of the preimage to be removed from the store.
             * - `len`: The length of the preimage of `hash`.
             **/
            unnotePreimage: AugmentedSubmittable<(hash: H256 | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [H256]>
            /**
             * Clear a previously made request for a preimage.
             *
             * NOTE: THIS MUST NOT BE CALLED ON `hash` MORE TIMES THAN `request_preimage`.
             **/
            unrequestPreimage: AugmentedSubmittable<(hash: H256 | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [H256]>
            /**
             * Generic tx
             **/
            [key: string]: SubmittableExtrinsicFunction<ApiType>
        }
        proxy: {
            /**
             * Register a proxy account for the sender that is able to make calls on its behalf.
             *
             * The dispatch origin for this call must be _Signed_.
             *
             * Parameters:
             * - `proxy`: The account that the `caller` would like to make a proxy.
             * - `proxy_type`: The permissions allowed for this proxy account.
             * - `delay`: The announcement period required of the initial proxy. Will generally be
             * zero.
             **/
            addProxy: AugmentedSubmittable<
                (
                    delegate:
                        | MultiAddress
                        | { Id: any }
                        | { Index: any }
                        | { Raw: any }
                        | { Address32: any }
                        | { Address20: any }
                        | string
                        | Uint8Array,
                    proxyType: RuntimeCommonImplsProxyProxyType | 'Any' | 'Tokens' | 'Governance' | number | Uint8Array,
                    delay: u32 | AnyNumber | Uint8Array
                ) => SubmittableExtrinsic<ApiType>,
                [MultiAddress, RuntimeCommonImplsProxyProxyType, u32]
            >
            /**
             * Publish the hash of a proxy-call that will be made in the future.
             *
             * This must be called some number of blocks before the corresponding `proxy` is attempted
             * if the delay associated with the proxy relationship is greater than zero.
             *
             * No more than `MaxPending` announcements may be made at any one time.
             *
             * This will take a deposit of `AnnouncementDepositFactor` as well as
             * `AnnouncementDepositBase` if there are no other pending announcements.
             *
             * The dispatch origin for this call must be _Signed_ and a proxy of `real`.
             *
             * Parameters:
             * - `real`: The account that the proxy will make a call on behalf of.
             * - `call_hash`: The hash of the call to be made by the `real` account.
             **/
            announce: AugmentedSubmittable<
                (
                    real:
                        | MultiAddress
                        | { Id: any }
                        | { Index: any }
                        | { Raw: any }
                        | { Address32: any }
                        | { Address20: any }
                        | string
                        | Uint8Array,
                    callHash: H256 | string | Uint8Array
                ) => SubmittableExtrinsic<ApiType>,
                [MultiAddress, H256]
            >
            /**
             * Spawn a fresh new account that is guaranteed to be otherwise inaccessible, and
             * initialize it with a proxy of `proxy_type` for `origin` sender.
             *
             * Requires a `Signed` origin.
             *
             * - `proxy_type`: The type of the proxy that the sender will be registered as over the
             * new account. This will almost always be the most permissive `ProxyType` possible to
             * allow for maximum flexibility.
             * - `index`: A disambiguation index, in case this is called multiple times in the same
             * transaction (e.g. with `utility::batch`). Unless you're using `batch` you probably just
             * want to use `0`.
             * - `delay`: The announcement period required of the initial proxy. Will generally be
             * zero.
             *
             * Fails with `Duplicate` if this has already been called in this transaction, from the
             * same sender, with the same parameters.
             *
             * Fails if there are insufficient funds to pay for deposit.
             **/
            createPure: AugmentedSubmittable<
                (
                    proxyType: RuntimeCommonImplsProxyProxyType | 'Any' | 'Tokens' | 'Governance' | number | Uint8Array,
                    delay: u32 | AnyNumber | Uint8Array,
                    index: u16 | AnyNumber | Uint8Array
                ) => SubmittableExtrinsic<ApiType>,
                [RuntimeCommonImplsProxyProxyType, u32, u16]
            >
            /**
             * Removes a previously spawned pure proxy.
             *
             * WARNING: **All access to this account will be lost.** Any funds held in it will be
             * inaccessible.
             *
             * Requires a `Signed` origin, and the sender account must have been created by a call to
             * `pure` with corresponding parameters.
             *
             * - `spawner`: The account that originally called `pure` to create this account.
             * - `index`: The disambiguation index originally passed to `pure`. Probably `0`.
             * - `proxy_type`: The proxy type originally passed to `pure`.
             * - `height`: The height of the chain when the call to `pure` was processed.
             * - `ext_index`: The extrinsic index in which the call to `pure` was processed.
             *
             * Fails with `NoPermission` in case the caller is not a previously created pure
             * account whose `pure` call has corresponding parameters.
             **/
            killPure: AugmentedSubmittable<
                (
                    spawner:
                        | MultiAddress
                        | { Id: any }
                        | { Index: any }
                        | { Raw: any }
                        | { Address32: any }
                        | { Address20: any }
                        | string
                        | Uint8Array,
                    proxyType: RuntimeCommonImplsProxyProxyType | 'Any' | 'Tokens' | 'Governance' | number | Uint8Array,
                    index: u16 | AnyNumber | Uint8Array,
                    height: Compact<u32> | AnyNumber | Uint8Array,
                    extIndex: Compact<u32> | AnyNumber | Uint8Array
                ) => SubmittableExtrinsic<ApiType>,
                [MultiAddress, RuntimeCommonImplsProxyProxyType, u16, Compact<u32>, Compact<u32>]
            >
            /**
             * Dispatch the given `call` from an account that the sender is authorised for through
             * `add_proxy`.
             *
             * The dispatch origin for this call must be _Signed_.
             *
             * Parameters:
             * - `real`: The account that the proxy will make a call on behalf of.
             * - `force_proxy_type`: Specify the exact proxy type to be used and checked for this call.
             * - `call`: The call to be made by the `real` account.
             **/
            proxy: AugmentedSubmittable<
                (
                    real:
                        | MultiAddress
                        | { Id: any }
                        | { Index: any }
                        | { Raw: any }
                        | { Address32: any }
                        | { Address20: any }
                        | string
                        | Uint8Array,
                    forceProxyType:
                        | Option<RuntimeCommonImplsProxyProxyType>
                        | null
                        | Uint8Array
                        | RuntimeCommonImplsProxyProxyType
                        | 'Any'
                        | 'Tokens'
                        | 'Governance'
                        | number,
                    call: Call | IMethod | string | Uint8Array
                ) => SubmittableExtrinsic<ApiType>,
                [MultiAddress, Option<RuntimeCommonImplsProxyProxyType>, Call]
            >
            /**
             * Dispatch the given `call` from an account that the sender is authorized for through
             * `add_proxy`.
             *
             * Removes any corresponding announcement(s).
             *
             * The dispatch origin for this call must be _Signed_.
             *
             * Parameters:
             * - `real`: The account that the proxy will make a call on behalf of.
             * - `force_proxy_type`: Specify the exact proxy type to be used and checked for this call.
             * - `call`: The call to be made by the `real` account.
             **/
            proxyAnnounced: AugmentedSubmittable<
                (
                    delegate:
                        | MultiAddress
                        | { Id: any }
                        | { Index: any }
                        | { Raw: any }
                        | { Address32: any }
                        | { Address20: any }
                        | string
                        | Uint8Array,
                    real:
                        | MultiAddress
                        | { Id: any }
                        | { Index: any }
                        | { Raw: any }
                        | { Address32: any }
                        | { Address20: any }
                        | string
                        | Uint8Array,
                    forceProxyType:
                        | Option<RuntimeCommonImplsProxyProxyType>
                        | null
                        | Uint8Array
                        | RuntimeCommonImplsProxyProxyType
                        | 'Any'
                        | 'Tokens'
                        | 'Governance'
                        | number,
                    call: Call | IMethod | string | Uint8Array
                ) => SubmittableExtrinsic<ApiType>,
                [MultiAddress, MultiAddress, Option<RuntimeCommonImplsProxyProxyType>, Call]
            >
            /**
             * Remove the given announcement of a delegate.
             *
             * May be called by a target (proxied) account to remove a call that one of their delegates
             * (`delegate`) has announced they want to execute. The deposit is returned.
             *
             * The dispatch origin for this call must be _Signed_.
             *
             * Parameters:
             * - `delegate`: The account that previously announced the call.
             * - `call_hash`: The hash of the call to be made.
             **/
            rejectAnnouncement: AugmentedSubmittable<
                (
                    delegate:
                        | MultiAddress
                        | { Id: any }
                        | { Index: any }
                        | { Raw: any }
                        | { Address32: any }
                        | { Address20: any }
                        | string
                        | Uint8Array,
                    callHash: H256 | string | Uint8Array
                ) => SubmittableExtrinsic<ApiType>,
                [MultiAddress, H256]
            >
            /**
             * Remove a given announcement.
             *
             * May be called by a proxy account to remove a call they previously announced and return
             * the deposit.
             *
             * The dispatch origin for this call must be _Signed_.
             *
             * Parameters:
             * - `real`: The account that the proxy will make a call on behalf of.
             * - `call_hash`: The hash of the call to be made by the `real` account.
             **/
            removeAnnouncement: AugmentedSubmittable<
                (
                    real:
                        | MultiAddress
                        | { Id: any }
                        | { Index: any }
                        | { Raw: any }
                        | { Address32: any }
                        | { Address20: any }
                        | string
                        | Uint8Array,
                    callHash: H256 | string | Uint8Array
                ) => SubmittableExtrinsic<ApiType>,
                [MultiAddress, H256]
            >
            /**
             * Unregister all proxy accounts for the sender.
             *
             * The dispatch origin for this call must be _Signed_.
             *
             * WARNING: This may be called on accounts created by `pure`, however if done, then
             * the unreserved fees will be inaccessible. **All access to this account will be lost.**
             **/
            removeProxies: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>
            /**
             * Unregister a proxy account for the sender.
             *
             * The dispatch origin for this call must be _Signed_.
             *
             * Parameters:
             * - `proxy`: The account that the `caller` would like to remove as a proxy.
             * - `proxy_type`: The permissions currently enabled for the removed proxy account.
             **/
            removeProxy: AugmentedSubmittable<
                (
                    delegate:
                        | MultiAddress
                        | { Id: any }
                        | { Index: any }
                        | { Raw: any }
                        | { Address32: any }
                        | { Address20: any }
                        | string
                        | Uint8Array,
                    proxyType: RuntimeCommonImplsProxyProxyType | 'Any' | 'Tokens' | 'Governance' | number | Uint8Array,
                    delay: u32 | AnyNumber | Uint8Array
                ) => SubmittableExtrinsic<ApiType>,
                [MultiAddress, RuntimeCommonImplsProxyProxyType, u32]
            >
            /**
             * Generic tx
             **/
            [key: string]: SubmittableExtrinsicFunction<ApiType>
        }
        safeMode: {
            /**
             * Enter safe-mode permissionlessly for [`Config::EnterDuration`] blocks.
             *
             * Reserves [`Config::EnterDepositAmount`] from the caller's account.
             * Emits an [`Event::Entered`] event on success.
             * Errors with [`Error::Entered`] if the safe-mode is already entered.
             * Errors with [`Error::NotConfigured`] if the deposit amount is `None`.
             **/
            enter: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>
            /**
             * Extend the safe-mode permissionlessly for [`Config::ExtendDuration`] blocks.
             *
             * This accumulates on top of the current remaining duration.
             * Reserves [`Config::ExtendDepositAmount`] from the caller's account.
             * Emits an [`Event::Extended`] event on success.
             * Errors with [`Error::Exited`] if the safe-mode is entered.
             * Errors with [`Error::NotConfigured`] if the deposit amount is `None`.
             *
             * This may be called by any signed origin with [`Config::ExtendDepositAmount`] free
             * currency to reserve. This call can be disabled for all origins by configuring
             * [`Config::ExtendDepositAmount`] to `None`.
             **/
            extend: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>
            /**
             * Enter safe-mode by force for a per-origin configured number of blocks.
             *
             * Emits an [`Event::Entered`] event on success.
             * Errors with [`Error::Entered`] if the safe-mode is already entered.
             *
             * Can only be called by the [`Config::ForceEnterOrigin`] origin.
             **/
            forceEnter: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>
            /**
             * Exit safe-mode by force.
             *
             * Emits an [`Event::Exited`] with [`ExitReason::Force`] event on success.
             * Errors with [`Error::Exited`] if the safe-mode is inactive.
             *
             * Note: `safe-mode` will be automatically deactivated by [`Pallet::on_initialize`] hook
             * after the block height is greater than the [`EnteredUntil`] storage item.
             * Emits an [`Event::Exited`] with [`ExitReason::Timeout`] event when deactivated in the
             * hook.
             **/
            forceExit: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>
            /**
             * Extend the safe-mode by force for a per-origin configured number of blocks.
             *
             * Emits an [`Event::Extended`] event on success.
             * Errors with [`Error::Exited`] if the safe-mode is inactive.
             *
             * Can only be called by the [`Config::ForceExtendOrigin`] origin.
             **/
            forceExtend: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>
            /**
             * Force to release a deposit for an account that entered safe-mode at a given
             * historical block.
             *
             * This can be called while safe-mode is still entered.
             *
             * Emits a [`Event::DepositReleased`] event on success.
             * Errors with [`Error::Entered`] if safe-mode is entered.
             * Errors with [`Error::NoDeposit`] if the payee has no reserved currency at the
             * specified block.
             *
             * Can only be called by the [`Config::ForceDepositOrigin`] origin.
             **/
            forceReleaseDeposit: AugmentedSubmittable<
                (
                    account: AccountId32 | string | Uint8Array,
                    block: u32 | AnyNumber | Uint8Array
                ) => SubmittableExtrinsic<ApiType>,
                [AccountId32, u32]
            >
            /**
             * Slash a deposit for an account that entered or extended safe-mode at a given
             * historical block.
             *
             * This can only be called while safe-mode is entered.
             *
             * Emits a [`Event::DepositSlashed`] event on success.
             * Errors with [`Error::Entered`] if safe-mode is entered.
             *
             * Can only be called by the [`Config::ForceDepositOrigin`] origin.
             **/
            forceSlashDeposit: AugmentedSubmittable<
                (
                    account: AccountId32 | string | Uint8Array,
                    block: u32 | AnyNumber | Uint8Array
                ) => SubmittableExtrinsic<ApiType>,
                [AccountId32, u32]
            >
            /**
             * Permissionlessly release a deposit for an account that entered safe-mode at a
             * given historical block.
             *
             * The call can be completely disabled by setting [`Config::ReleaseDelay`] to `None`.
             * This cannot be called while safe-mode is entered and not until
             * [`Config::ReleaseDelay`] blocks have passed since safe-mode was entered.
             *
             * Emits a [`Event::DepositReleased`] event on success.
             * Errors with [`Error::Entered`] if the safe-mode is entered.
             * Errors with [`Error::CannotReleaseYet`] if [`Config::ReleaseDelay`] block have not
             * passed since safe-mode was entered. Errors with [`Error::NoDeposit`] if the payee has no
             * reserved currency at the block specified.
             **/
            releaseDeposit: AugmentedSubmittable<
                (
                    account: AccountId32 | string | Uint8Array,
                    block: u32 | AnyNumber | Uint8Array
                ) => SubmittableExtrinsic<ApiType>,
                [AccountId32, u32]
            >
            /**
             * Generic tx
             **/
            [key: string]: SubmittableExtrinsicFunction<ApiType>
        }
        scheduler: {
            /**
             * Cancel an anonymously scheduled task.
             **/
            cancel: AugmentedSubmittable<
                (when: u32 | AnyNumber | Uint8Array, index: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>,
                [u32, u32]
            >
            /**
             * Cancel a named scheduled task.
             **/
            cancelNamed: AugmentedSubmittable<(id: U8aFixed | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [U8aFixed]>
            /**
             * Removes the retry configuration of a task.
             **/
            cancelRetry: AugmentedSubmittable<
                (
                    task: ITuple<[u32, u32]> | [u32 | AnyNumber | Uint8Array, u32 | AnyNumber | Uint8Array]
                ) => SubmittableExtrinsic<ApiType>,
                [ITuple<[u32, u32]>]
            >
            /**
             * Cancel the retry configuration of a named task.
             **/
            cancelRetryNamed: AugmentedSubmittable<
                (id: U8aFixed | string | Uint8Array) => SubmittableExtrinsic<ApiType>,
                [U8aFixed]
            >
            /**
             * Anonymously schedule a task.
             **/
            schedule: AugmentedSubmittable<
                (
                    when: u32 | AnyNumber | Uint8Array,
                    maybePeriodic:
                        | Option<ITuple<[u32, u32]>>
                        | null
                        | Uint8Array
                        | ITuple<[u32, u32]>
                        | [u32 | AnyNumber | Uint8Array, u32 | AnyNumber | Uint8Array],
                    priority: u8 | AnyNumber | Uint8Array,
                    call: Call | IMethod | string | Uint8Array
                ) => SubmittableExtrinsic<ApiType>,
                [u32, Option<ITuple<[u32, u32]>>, u8, Call]
            >
            /**
             * Anonymously schedule a task after a delay.
             **/
            scheduleAfter: AugmentedSubmittable<
                (
                    after: u32 | AnyNumber | Uint8Array,
                    maybePeriodic:
                        | Option<ITuple<[u32, u32]>>
                        | null
                        | Uint8Array
                        | ITuple<[u32, u32]>
                        | [u32 | AnyNumber | Uint8Array, u32 | AnyNumber | Uint8Array],
                    priority: u8 | AnyNumber | Uint8Array,
                    call: Call | IMethod | string | Uint8Array
                ) => SubmittableExtrinsic<ApiType>,
                [u32, Option<ITuple<[u32, u32]>>, u8, Call]
            >
            /**
             * Schedule a named task.
             **/
            scheduleNamed: AugmentedSubmittable<
                (
                    id: U8aFixed | string | Uint8Array,
                    when: u32 | AnyNumber | Uint8Array,
                    maybePeriodic:
                        | Option<ITuple<[u32, u32]>>
                        | null
                        | Uint8Array
                        | ITuple<[u32, u32]>
                        | [u32 | AnyNumber | Uint8Array, u32 | AnyNumber | Uint8Array],
                    priority: u8 | AnyNumber | Uint8Array,
                    call: Call | IMethod | string | Uint8Array
                ) => SubmittableExtrinsic<ApiType>,
                [U8aFixed, u32, Option<ITuple<[u32, u32]>>, u8, Call]
            >
            /**
             * Schedule a named task after a delay.
             **/
            scheduleNamedAfter: AugmentedSubmittable<
                (
                    id: U8aFixed | string | Uint8Array,
                    after: u32 | AnyNumber | Uint8Array,
                    maybePeriodic:
                        | Option<ITuple<[u32, u32]>>
                        | null
                        | Uint8Array
                        | ITuple<[u32, u32]>
                        | [u32 | AnyNumber | Uint8Array, u32 | AnyNumber | Uint8Array],
                    priority: u8 | AnyNumber | Uint8Array,
                    call: Call | IMethod | string | Uint8Array
                ) => SubmittableExtrinsic<ApiType>,
                [U8aFixed, u32, Option<ITuple<[u32, u32]>>, u8, Call]
            >
            /**
             * Set a retry configuration for a task so that, in case its scheduled run fails, it will
             * be retried after `period` blocks, for a total amount of `retries` retries or until it
             * succeeds.
             *
             * Tasks which need to be scheduled for a retry are still subject to weight metering and
             * agenda space, same as a regular task. If a periodic task fails, it will be scheduled
             * normally while the task is retrying.
             *
             * Tasks scheduled as a result of a retry for a periodic task are unnamed, non-periodic
             * clones of the original task. Their retry configuration will be derived from the
             * original task's configuration, but will have a lower value for `remaining` than the
             * original `total_retries`.
             **/
            setRetry: AugmentedSubmittable<
                (
                    task: ITuple<[u32, u32]> | [u32 | AnyNumber | Uint8Array, u32 | AnyNumber | Uint8Array],
                    retries: u8 | AnyNumber | Uint8Array,
                    period: u32 | AnyNumber | Uint8Array
                ) => SubmittableExtrinsic<ApiType>,
                [ITuple<[u32, u32]>, u8, u32]
            >
            /**
             * Set a retry configuration for a named task so that, in case its scheduled run fails, it
             * will be retried after `period` blocks, for a total amount of `retries` retries or until
             * it succeeds.
             *
             * Tasks which need to be scheduled for a retry are still subject to weight metering and
             * agenda space, same as a regular task. If a periodic task fails, it will be scheduled
             * normally while the task is retrying.
             *
             * Tasks scheduled as a result of a retry for a periodic task are unnamed, non-periodic
             * clones of the original task. Their retry configuration will be derived from the
             * original task's configuration, but will have a lower value for `remaining` than the
             * original `total_retries`.
             **/
            setRetryNamed: AugmentedSubmittable<
                (
                    id: U8aFixed | string | Uint8Array,
                    retries: u8 | AnyNumber | Uint8Array,
                    period: u32 | AnyNumber | Uint8Array
                ) => SubmittableExtrinsic<ApiType>,
                [U8aFixed, u8, u32]
            >
            /**
             * Generic tx
             **/
            [key: string]: SubmittableExtrinsicFunction<ApiType>
        }
        session: {
            /**
             * Removes any session key(s) of the function caller.
             *
             * This doesn't take effect until the next session.
             *
             * The dispatch origin of this function must be Signed and the account must be either be
             * convertible to a validator ID using the chain's typical addressing system (this usually
             * means being a controller account) or directly convertible into a validator ID (which
             * usually means being a stash account).
             *
             * ## Complexity
             * - `O(1)` in number of key types. Actual cost depends on the number of length of
             * `T::Keys::key_ids()` which is fixed.
             **/
            purgeKeys: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>
            /**
             * Sets the session key(s) of the function caller to `keys`.
             * Allows an account to set its session key prior to becoming a validator.
             * This doesn't take effect until the next session.
             *
             * The dispatch origin of this function must be signed.
             *
             * ## Complexity
             * - `O(1)`. Actual cost depends on the number of length of `T::Keys::key_ids()` which is
             * fixed.
             **/
            setKeys: AugmentedSubmittable<
                (
                    keys: EnjinMatrixRuntimeSessionKeys | { aura?: any; pools?: any } | string | Uint8Array,
                    proof: Bytes | string | Uint8Array
                ) => SubmittableExtrinsic<ApiType>,
                [EnjinMatrixRuntimeSessionKeys, Bytes]
            >
            /**
             * Generic tx
             **/
            [key: string]: SubmittableExtrinsicFunction<ApiType>
        }
        system: {
            /**
             * Provide the preimage (runtime binary) `code` for an upgrade that has been authorized.
             *
             * If the authorization required a version check, this call will ensure the spec name
             * remains unchanged and that the spec version has increased.
             *
             * Depending on the runtime's `OnSetCode` configuration, this function may directly apply
             * the new `code` in the same block or attempt to schedule the upgrade.
             *
             * All origins are allowed.
             **/
            applyAuthorizedUpgrade: AugmentedSubmittable<
                (code: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>,
                [Bytes]
            >
            /**
             * Authorize an upgrade to a given `code_hash` for the runtime. The runtime can be supplied
             * later.
             *
             * This call requires Root origin.
             **/
            authorizeUpgrade: AugmentedSubmittable<
                (codeHash: H256 | string | Uint8Array) => SubmittableExtrinsic<ApiType>,
                [H256]
            >
            /**
             * Authorize an upgrade to a given `code_hash` for the runtime. The runtime can be supplied
             * later.
             *
             * WARNING: This authorizes an upgrade that will take place without any safety checks, for
             * example that the spec name remains the same and that the version number increases. Not
             * recommended for normal use. Use `authorize_upgrade` instead.
             *
             * This call requires Root origin.
             **/
            authorizeUpgradeWithoutChecks: AugmentedSubmittable<
                (codeHash: H256 | string | Uint8Array) => SubmittableExtrinsic<ApiType>,
                [H256]
            >
            /**
             * Kill all storage items with a key that starts with the given prefix.
             *
             * **NOTE:** We rely on the Root origin to provide us the number of subkeys under
             * the prefix we are removing to accurately calculate the weight of this function.
             **/
            killPrefix: AugmentedSubmittable<
                (prefix: Bytes | string | Uint8Array, subkeys: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>,
                [Bytes, u32]
            >
            /**
             * Kill some items from storage.
             **/
            killStorage: AugmentedSubmittable<
                (keys: Vec<Bytes> | (Bytes | string | Uint8Array)[]) => SubmittableExtrinsic<ApiType>,
                [Vec<Bytes>]
            >
            /**
             * Make some on-chain remark.
             *
             * Can be executed by every `origin`.
             **/
            remark: AugmentedSubmittable<(remark: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Bytes]>
            /**
             * Make some on-chain remark and emit event.
             **/
            remarkWithEvent: AugmentedSubmittable<(remark: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Bytes]>
            /**
             * Set the new runtime code.
             **/
            setCode: AugmentedSubmittable<(code: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Bytes]>
            /**
             * Set the new runtime code without doing any checks of the given `code`.
             *
             * Note that runtime upgrades will not run if this is called with a not-increasing spec
             * version!
             **/
            setCodeWithoutChecks: AugmentedSubmittable<
                (code: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>,
                [Bytes]
            >
            /**
             * Set the number of pages in the WebAssembly environment's heap.
             **/
            setHeapPages: AugmentedSubmittable<(pages: u64 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u64]>
            /**
             * Set some items of storage.
             **/
            setStorage: AugmentedSubmittable<
                (
                    items: Vec<ITuple<[Bytes, Bytes]>> | [Bytes | string | Uint8Array, Bytes | string | Uint8Array][]
                ) => SubmittableExtrinsic<ApiType>,
                [Vec<ITuple<[Bytes, Bytes]>>]
            >
            /**
             * Generic tx
             **/
            [key: string]: SubmittableExtrinsicFunction<ApiType>
        }
        technicalCommittee: {
            /**
             * Close a vote that is either approved, disapproved or whose voting period has ended.
             *
             * May be called by any signed account in order to finish voting and close the proposal.
             *
             * If called before the end of the voting period it will only close the vote if it is
             * has enough votes to be approved or disapproved.
             *
             * If called after the end of the voting period abstentions are counted as rejections
             * unless there is a prime member set and the prime member cast an approval.
             *
             * If the close operation completes successfully with disapproval, the transaction fee will
             * be waived. Otherwise execution of the approved operation will be charged to the caller.
             *
             * + `proposal_weight_bound`: The maximum amount of weight consumed by executing the closed
             * proposal.
             * + `length_bound`: The upper bound for the length of the proposal in storage. Checked via
             * `storage::read` so it is `size_of::<u32>() == 4` larger than the pure length.
             *
             * ## Complexity
             * - `O(B + M + P1 + P2)` where:
             * - `B` is `proposal` size in bytes (length-fee-bounded)
             * - `M` is members-count (code- and governance-bounded)
             * - `P1` is the complexity of `proposal` preimage.
             * - `P2` is proposal-count (code-bounded)
             **/
            close: AugmentedSubmittable<
                (
                    proposalHash: H256 | string | Uint8Array,
                    index: Compact<u32> | AnyNumber | Uint8Array,
                    proposalWeightBound: SpWeightsWeightV2Weight | { refTime?: any; proofSize?: any } | string | Uint8Array,
                    lengthBound: Compact<u32> | AnyNumber | Uint8Array
                ) => SubmittableExtrinsic<ApiType>,
                [H256, Compact<u32>, SpWeightsWeightV2Weight, Compact<u32>]
            >
            /**
             * Disapprove a proposal, close, and remove it from the system, regardless of its current
             * state.
             *
             * Must be called by the Root origin.
             *
             * Parameters:
             * * `proposal_hash`: The hash of the proposal that should be disapproved.
             *
             * ## Complexity
             * O(P) where P is the number of max proposals
             **/
            disapproveProposal: AugmentedSubmittable<
                (proposalHash: H256 | string | Uint8Array) => SubmittableExtrinsic<ApiType>,
                [H256]
            >
            /**
             * Dispatch a proposal from a member using the `Member` origin.
             *
             * Origin must be a member of the collective.
             *
             * ## Complexity:
             * - `O(B + M + P)` where:
             * - `B` is `proposal` size in bytes (length-fee-bounded)
             * - `M` members-count (code-bounded)
             * - `P` complexity of dispatching `proposal`
             **/
            execute: AugmentedSubmittable<
                (
                    proposal: Call | IMethod | string | Uint8Array,
                    lengthBound: Compact<u32> | AnyNumber | Uint8Array
                ) => SubmittableExtrinsic<ApiType>,
                [Call, Compact<u32>]
            >
            /**
             * Add a new proposal to either be voted on or executed directly.
             *
             * Requires the sender to be member.
             *
             * `threshold` determines whether `proposal` is executed directly (`threshold < 2`)
             * or put up for voting.
             *
             * ## Complexity
             * - `O(B + M + P1)` or `O(B + M + P2)` where:
             * - `B` is `proposal` size in bytes (length-fee-bounded)
             * - `M` is members-count (code- and governance-bounded)
             * - branching is influenced by `threshold` where:
             * - `P1` is proposal execution complexity (`threshold < 2`)
             * - `P2` is proposals-count (code-bounded) (`threshold >= 2`)
             **/
            propose: AugmentedSubmittable<
                (
                    threshold: Compact<u32> | AnyNumber | Uint8Array,
                    proposal: Call | IMethod | string | Uint8Array,
                    lengthBound: Compact<u32> | AnyNumber | Uint8Array
                ) => SubmittableExtrinsic<ApiType>,
                [Compact<u32>, Call, Compact<u32>]
            >
            /**
             * Set the collective's membership.
             *
             * - `new_members`: The new member list. Be nice to the chain and provide it sorted.
             * - `prime`: The prime member whose vote sets the default.
             * - `old_count`: The upper bound for the previous number of members in storage. Used for
             * weight estimation.
             *
             * The dispatch of this call must be `SetMembersOrigin`.
             *
             * NOTE: Does not enforce the expected `MaxMembers` limit on the amount of members, but
             * the weight estimations rely on it to estimate dispatchable weight.
             *
             * # WARNING:
             *
             * The `pallet-collective` can also be managed by logic outside of the pallet through the
             * implementation of the trait [`ChangeMembers`].
             * Any call to `set_members` must be careful that the member set doesn't get out of sync
             * with other logic managing the member set.
             *
             * ## Complexity:
             * - `O(MP + N)` where:
             * - `M` old-members-count (code- and governance-bounded)
             * - `N` new-members-count (code- and governance-bounded)
             * - `P` proposals-count (code-bounded)
             **/
            setMembers: AugmentedSubmittable<
                (
                    newMembers: Vec<AccountId32> | (AccountId32 | string | Uint8Array)[],
                    prime: Option<AccountId32> | null | Uint8Array | AccountId32 | string,
                    oldCount: u32 | AnyNumber | Uint8Array
                ) => SubmittableExtrinsic<ApiType>,
                [Vec<AccountId32>, Option<AccountId32>, u32]
            >
            /**
             * Add an aye or nay vote for the sender to the given proposal.
             *
             * Requires the sender to be a member.
             *
             * Transaction fees will be waived if the member is voting on any particular proposal
             * for the first time and the call is successful. Subsequent vote changes will charge a
             * fee.
             * ## Complexity
             * - `O(M)` where `M` is members-count (code- and governance-bounded)
             **/
            vote: AugmentedSubmittable<
                (
                    proposal: H256 | string | Uint8Array,
                    index: Compact<u32> | AnyNumber | Uint8Array,
                    approve: bool | boolean | Uint8Array
                ) => SubmittableExtrinsic<ApiType>,
                [H256, Compact<u32>, bool]
            >
            /**
             * Generic tx
             **/
            [key: string]: SubmittableExtrinsicFunction<ApiType>
        }
        technicalMembership: {
            /**
             * Add a member `who` to the set.
             *
             * May only be called from `T::AddOrigin`.
             **/
            addMember: AugmentedSubmittable<
                (
                    who:
                        | MultiAddress
                        | { Id: any }
                        | { Index: any }
                        | { Raw: any }
                        | { Address32: any }
                        | { Address20: any }
                        | string
                        | Uint8Array
                ) => SubmittableExtrinsic<ApiType>,
                [MultiAddress]
            >
            /**
             * Swap out the sending member for some other key `new`.
             *
             * May only be called from `Signed` origin of a current member.
             *
             * Prime membership is passed from the origin account to `new`, if extant.
             **/
            changeKey: AugmentedSubmittable<
                (
                    updated:
                        | MultiAddress
                        | { Id: any }
                        | { Index: any }
                        | { Raw: any }
                        | { Address32: any }
                        | { Address20: any }
                        | string
                        | Uint8Array
                ) => SubmittableExtrinsic<ApiType>,
                [MultiAddress]
            >
            /**
             * Remove the prime member if it exists.
             *
             * May only be called from `T::PrimeOrigin`.
             **/
            clearPrime: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>
            /**
             * Remove a member `who` from the set.
             *
             * May only be called from `T::RemoveOrigin`.
             **/
            removeMember: AugmentedSubmittable<
                (
                    who:
                        | MultiAddress
                        | { Id: any }
                        | { Index: any }
                        | { Raw: any }
                        | { Address32: any }
                        | { Address20: any }
                        | string
                        | Uint8Array
                ) => SubmittableExtrinsic<ApiType>,
                [MultiAddress]
            >
            /**
             * Change the membership to a new set, disregarding the existing membership. Be nice and
             * pass `members` pre-sorted.
             *
             * May only be called from `T::ResetOrigin`.
             **/
            resetMembers: AugmentedSubmittable<
                (members: Vec<AccountId32> | (AccountId32 | string | Uint8Array)[]) => SubmittableExtrinsic<ApiType>,
                [Vec<AccountId32>]
            >
            /**
             * Set the prime member. Must be a current member.
             *
             * May only be called from `T::PrimeOrigin`.
             **/
            setPrime: AugmentedSubmittable<
                (
                    who:
                        | MultiAddress
                        | { Id: any }
                        | { Index: any }
                        | { Raw: any }
                        | { Address32: any }
                        | { Address20: any }
                        | string
                        | Uint8Array
                ) => SubmittableExtrinsic<ApiType>,
                [MultiAddress]
            >
            /**
             * Swap out one member `remove` for another `add`.
             *
             * May only be called from `T::SwapOrigin`.
             *
             * Prime membership is *not* passed from `remove` to `add`, if extant.
             **/
            swapMember: AugmentedSubmittable<
                (
                    remove:
                        | MultiAddress
                        | { Id: any }
                        | { Index: any }
                        | { Raw: any }
                        | { Address32: any }
                        | { Address20: any }
                        | string
                        | Uint8Array,
                    add:
                        | MultiAddress
                        | { Id: any }
                        | { Index: any }
                        | { Raw: any }
                        | { Address32: any }
                        | { Address20: any }
                        | string
                        | Uint8Array
                ) => SubmittableExtrinsic<ApiType>,
                [MultiAddress, MultiAddress]
            >
            /**
             * Generic tx
             **/
            [key: string]: SubmittableExtrinsicFunction<ApiType>
        }
        timestamp: {
            /**
             * Set the current time.
             *
             * This call should be invoked exactly once per block. It will panic at the finalization
             * phase, if this call hasn't been invoked by that time.
             *
             * The timestamp should be greater than the previous one by the amount specified by
             * [`Config::MinimumPeriod`].
             *
             * The dispatch origin for this call must be _None_.
             *
             * This dispatch class is _Mandatory_ to ensure it gets executed in the block. Be aware
             * that changing the complexity of this call could result exhausting the resources in a
             * block to execute any other calls.
             *
             * ## Complexity
             * - `O(1)` (Note that implementations of `OnTimestampSet` must also be `O(1)`)
             * - 1 storage read and 1 storage mutation (codec `O(1)` because of `DidUpdate::take` in
             * `on_finalize`)
             * - 1 event handler `on_timestamp_set`. Must be `O(1)`.
             **/
            set: AugmentedSubmittable<
                (now: Compact<u64> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>,
                [Compact<u64>]
            >
            /**
             * Generic tx
             **/
            [key: string]: SubmittableExtrinsicFunction<ApiType>
        }
        utility: {
            /**
             * Send a call through an indexed pseudonym of the sender.
             *
             * Filter from origin are passed along. The call will be dispatched with an origin which
             * use the same filter as the origin of this call.
             *
             * NOTE: If you need to ensure that any account-based filtering is not honored (i.e.
             * because you expect `proxy` to have been used prior in the call stack and you do not want
             * the call restrictions to apply to any sub-accounts), then use `as_multi_threshold_1`
             * in the Multisig pallet instead.
             *
             * NOTE: Prior to version *12, this was called `as_limited_sub`.
             *
             * The dispatch origin for this call must be _Signed_.
             **/
            asDerivative: AugmentedSubmittable<
                (
                    index: u16 | AnyNumber | Uint8Array,
                    call: Call | IMethod | string | Uint8Array
                ) => SubmittableExtrinsic<ApiType>,
                [u16, Call]
            >
            /**
             * Send a batch of dispatch calls.
             *
             * May be called from any origin except `None`.
             *
             * - `calls`: The calls to be dispatched from the same origin. The number of call must not
             * exceed the constant: `batched_calls_limit` (available in constant metadata).
             *
             * If origin is root then the calls are dispatched without checking origin filter. (This
             * includes bypassing `frame_system::Config::BaseCallFilter`).
             *
             * ## Complexity
             * - O(C) where C is the number of calls to be batched.
             *
             * This will return `Ok` in all circumstances. To determine the success of the batch, an
             * event is deposited. If a call failed and the batch was interrupted, then the
             * `BatchInterrupted` event is deposited, along with the number of successful calls made
             * and the error of the failed call. If all were successful, then the `BatchCompleted`
             * event is deposited.
             **/
            batch: AugmentedSubmittable<
                (calls: Vec<Call> | (Call | IMethod | string | Uint8Array)[]) => SubmittableExtrinsic<ApiType>,
                [Vec<Call>]
            >
            /**
             * Send a batch of dispatch calls and atomically execute them.
             * The whole transaction will rollback and fail if any of the calls failed.
             *
             * May be called from any origin except `None`.
             *
             * - `calls`: The calls to be dispatched from the same origin. The number of call must not
             * exceed the constant: `batched_calls_limit` (available in constant metadata).
             *
             * If origin is root then the calls are dispatched without checking origin filter. (This
             * includes bypassing `frame_system::Config::BaseCallFilter`).
             *
             * ## Complexity
             * - O(C) where C is the number of calls to be batched.
             **/
            batchAll: AugmentedSubmittable<
                (calls: Vec<Call> | (Call | IMethod | string | Uint8Array)[]) => SubmittableExtrinsic<ApiType>,
                [Vec<Call>]
            >
            /**
             * Dispatches a function call with a provided origin.
             *
             * The dispatch origin for this call must be _Root_.
             *
             * ## Complexity
             * - O(1).
             **/
            dispatchAs: AugmentedSubmittable<
                (
                    asOrigin:
                        | EnjinMatrixRuntimeOriginCaller
                        | { system: any }
                        | { Void: any }
                        | { Council: any }
                        | { TechnicalCommittee: any }
                        | { PolkadotXcm: any }
                        | { CumulusXcm: any }
                        | string
                        | Uint8Array,
                    call: Call | IMethod | string | Uint8Array
                ) => SubmittableExtrinsic<ApiType>,
                [EnjinMatrixRuntimeOriginCaller, Call]
            >
            /**
             * Send a batch of dispatch calls.
             * Unlike `batch`, it allows errors and won't interrupt.
             *
             * May be called from any origin except `None`.
             *
             * - `calls`: The calls to be dispatched from the same origin. The number of call must not
             * exceed the constant: `batched_calls_limit` (available in constant metadata).
             *
             * If origin is root then the calls are dispatch without checking origin filter. (This
             * includes bypassing `frame_system::Config::BaseCallFilter`).
             *
             * ## Complexity
             * - O(C) where C is the number of calls to be batched.
             **/
            forceBatch: AugmentedSubmittable<
                (calls: Vec<Call> | (Call | IMethod | string | Uint8Array)[]) => SubmittableExtrinsic<ApiType>,
                [Vec<Call>]
            >
            /**
             * Dispatch a function call with a specified weight.
             *
             * This function does not check the weight of the call, and instead allows the
             * Root origin to specify the weight of the call.
             *
             * The dispatch origin for this call must be _Root_.
             **/
            withWeight: AugmentedSubmittable<
                (
                    call: Call | IMethod | string | Uint8Array,
                    weight: SpWeightsWeightV2Weight | { refTime?: any; proofSize?: any } | string | Uint8Array
                ) => SubmittableExtrinsic<ApiType>,
                [Call, SpWeightsWeightV2Weight]
            >
            /**
             * Generic tx
             **/
            [key: string]: SubmittableExtrinsicFunction<ApiType>
        }
        xcmpQueue: {
            /**
             * Resumes all XCM executions for the XCMP queue.
             *
             * Note that this function doesn't change the status of the in/out bound channels.
             *
             * - `origin`: Must pass `ControllerOrigin`.
             **/
            resumeXcmExecution: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>
            /**
             * Suspends all XCM executions for the XCMP queue, regardless of the sender's origin.
             *
             * - `origin`: Must pass `ControllerOrigin`.
             **/
            suspendXcmExecution: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>
            /**
             * Overwrites the number of pages which must be in the queue after which we drop any
             * further messages from the channel.
             *
             * - `origin`: Must pass `Root`.
             * - `new`: Desired value for `QueueConfigData.drop_threshold`
             **/
            updateDropThreshold: AugmentedSubmittable<
                (updated: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>,
                [u32]
            >
            /**
             * Overwrites the number of pages which the queue must be reduced to before it signals
             * that message sending may recommence after it has been suspended.
             *
             * - `origin`: Must pass `Root`.
             * - `new`: Desired value for `QueueConfigData.resume_threshold`
             **/
            updateResumeThreshold: AugmentedSubmittable<
                (updated: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>,
                [u32]
            >
            /**
             * Overwrites the number of pages which must be in the queue for the other side to be
             * told to suspend their sending.
             *
             * - `origin`: Must pass `Root`.
             * - `new`: Desired value for `QueueConfigData.suspend_value`
             **/
            updateSuspendThreshold: AugmentedSubmittable<
                (updated: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>,
                [u32]
            >
            /**
             * Generic tx
             **/
            [key: string]: SubmittableExtrinsicFunction<ApiType>
        }
        xTokens: {
            /**
             * Transfer native currencies.
             *
             * `dest_weight_limit` is the weight for XCM execution on the dest
             * chain, and it would be charged from the transferred assets. If set
             * below requirements, the execution may fail and assets wouldn't be
             * received.
             *
             * It's a no-op if any error on local XCM execution or message sending.
             * Note sending assets out per se doesn't guarantee they would be
             * received. Receiving depends on if the XCM message could be delivered
             * by the network, and if the receiving chain would handle
             * messages correctly.
             **/
            transfer: AugmentedSubmittable<
                (
                    currencyId: EpMultiTokensTokenAssetId | { collectionId?: any; tokenId?: any } | string | Uint8Array,
                    amount: u128 | AnyNumber | Uint8Array,
                    dest: XcmVersionedLocation | { V2: any } | { V3: any } | { V4: any } | string | Uint8Array,
                    destWeightLimit: XcmV3WeightLimit | { Unlimited: any } | { Limited: any } | string | Uint8Array
                ) => SubmittableExtrinsic<ApiType>,
                [EpMultiTokensTokenAssetId, u128, XcmVersionedLocation, XcmV3WeightLimit]
            >
            /**
             * Transfer `Asset`.
             *
             * `dest_weight_limit` is the weight for XCM execution on the dest
             * chain, and it would be charged from the transferred assets. If set
             * below requirements, the execution may fail and assets wouldn't be
             * received.
             *
             * It's a no-op if any error on local XCM execution or message sending.
             * Note sending assets out per se doesn't guarantee they would be
             * received. Receiving depends on if the XCM message could be delivered
             * by the network, and if the receiving chain would handle
             * messages correctly.
             **/
            transferMultiasset: AugmentedSubmittable<
                (
                    asset: XcmVersionedAsset | { V2: any } | { V3: any } | { V4: any } | string | Uint8Array,
                    dest: XcmVersionedLocation | { V2: any } | { V3: any } | { V4: any } | string | Uint8Array,
                    destWeightLimit: XcmV3WeightLimit | { Unlimited: any } | { Limited: any } | string | Uint8Array
                ) => SubmittableExtrinsic<ApiType>,
                [XcmVersionedAsset, XcmVersionedLocation, XcmV3WeightLimit]
            >
            /**
             * Transfer several `Asset` specifying the item to be used as fee
             *
             * `dest_weight_limit` is the weight for XCM execution on the dest
             * chain, and it would be charged from the transferred assets. If set
             * below requirements, the execution may fail and assets wouldn't be
             * received.
             *
             * `fee_item` is index of the Assets that we want to use for
             * payment
             *
             * It's a no-op if any error on local XCM execution or message sending.
             * Note sending assets out per se doesn't guarantee they would be
             * received. Receiving depends on if the XCM message could be delivered
             * by the network, and if the receiving chain would handle
             * messages correctly.
             **/
            transferMultiassets: AugmentedSubmittable<
                (
                    assets: XcmVersionedAssets | { V2: any } | { V3: any } | { V4: any } | string | Uint8Array,
                    feeItem: u32 | AnyNumber | Uint8Array,
                    dest: XcmVersionedLocation | { V2: any } | { V3: any } | { V4: any } | string | Uint8Array,
                    destWeightLimit: XcmV3WeightLimit | { Unlimited: any } | { Limited: any } | string | Uint8Array
                ) => SubmittableExtrinsic<ApiType>,
                [XcmVersionedAssets, u32, XcmVersionedLocation, XcmV3WeightLimit]
            >
            /**
             * Transfer `Asset` specifying the fee and amount as separate.
             *
             * `dest_weight_limit` is the weight for XCM execution on the dest
             * chain, and it would be charged from the transferred assets. If set
             * below requirements, the execution may fail and assets wouldn't be
             * received.
             *
             * `fee` is the Asset to be spent to pay for execution in
             * destination chain. Both fee and amount will be subtracted form the
             * callers balance For now we only accept fee and asset having the same
             * `Location` id.
             *
             * If `fee` is not high enough to cover for the execution costs in the
             * destination chain, then the assets will be trapped in the
             * destination chain
             *
             * It's a no-op if any error on local XCM execution or message sending.
             * Note sending assets out per se doesn't guarantee they would be
             * received. Receiving depends on if the XCM message could be delivered
             * by the network, and if the receiving chain would handle
             * messages correctly.
             **/
            transferMultiassetWithFee: AugmentedSubmittable<
                (
                    asset: XcmVersionedAsset | { V2: any } | { V3: any } | { V4: any } | string | Uint8Array,
                    fee: XcmVersionedAsset | { V2: any } | { V3: any } | { V4: any } | string | Uint8Array,
                    dest: XcmVersionedLocation | { V2: any } | { V3: any } | { V4: any } | string | Uint8Array,
                    destWeightLimit: XcmV3WeightLimit | { Unlimited: any } | { Limited: any } | string | Uint8Array
                ) => SubmittableExtrinsic<ApiType>,
                [XcmVersionedAsset, XcmVersionedAsset, XcmVersionedLocation, XcmV3WeightLimit]
            >
            /**
             * Transfer several currencies specifying the item to be used as fee
             *
             * `dest_weight_limit` is the weight for XCM execution on the dest
             * chain, and it would be charged from the transferred assets. If set
             * below requirements, the execution may fail and assets wouldn't be
             * received.
             *
             * `fee_item` is index of the currencies tuple that we want to use for
             * payment
             *
             * It's a no-op if any error on local XCM execution or message sending.
             * Note sending assets out per se doesn't guarantee they would be
             * received. Receiving depends on if the XCM message could be delivered
             * by the network, and if the receiving chain would handle
             * messages correctly.
             **/
            transferMulticurrencies: AugmentedSubmittable<
                (
                    currencies:
                        | Vec<ITuple<[EpMultiTokensTokenAssetId, u128]>>
                        | [
                              EpMultiTokensTokenAssetId | { collectionId?: any; tokenId?: any } | string | Uint8Array,
                              u128 | AnyNumber | Uint8Array,
                          ][],
                    feeItem: u32 | AnyNumber | Uint8Array,
                    dest: XcmVersionedLocation | { V2: any } | { V3: any } | { V4: any } | string | Uint8Array,
                    destWeightLimit: XcmV3WeightLimit | { Unlimited: any } | { Limited: any } | string | Uint8Array
                ) => SubmittableExtrinsic<ApiType>,
                [Vec<ITuple<[EpMultiTokensTokenAssetId, u128]>>, u32, XcmVersionedLocation, XcmV3WeightLimit]
            >
            /**
             * Transfer native currencies specifying the fee and amount as
             * separate.
             *
             * `dest_weight_limit` is the weight for XCM execution on the dest
             * chain, and it would be charged from the transferred assets. If set
             * below requirements, the execution may fail and assets wouldn't be
             * received.
             *
             * `fee` is the amount to be spent to pay for execution in destination
             * chain. Both fee and amount will be subtracted form the callers
             * balance.
             *
             * If `fee` is not high enough to cover for the execution costs in the
             * destination chain, then the assets will be trapped in the
             * destination chain
             *
             * It's a no-op if any error on local XCM execution or message sending.
             * Note sending assets out per se doesn't guarantee they would be
             * received. Receiving depends on if the XCM message could be delivered
             * by the network, and if the receiving chain would handle
             * messages correctly.
             **/
            transferWithFee: AugmentedSubmittable<
                (
                    currencyId: EpMultiTokensTokenAssetId | { collectionId?: any; tokenId?: any } | string | Uint8Array,
                    amount: u128 | AnyNumber | Uint8Array,
                    fee: u128 | AnyNumber | Uint8Array,
                    dest: XcmVersionedLocation | { V2: any } | { V3: any } | { V4: any } | string | Uint8Array,
                    destWeightLimit: XcmV3WeightLimit | { Unlimited: any } | { Limited: any } | string | Uint8Array
                ) => SubmittableExtrinsic<ApiType>,
                [EpMultiTokensTokenAssetId, u128, u128, XcmVersionedLocation, XcmV3WeightLimit]
            >
            /**
             * Generic tx
             **/
            [key: string]: SubmittableExtrinsicFunction<ApiType>
        }
    } // AugmentedSubmittables
} // declare module
