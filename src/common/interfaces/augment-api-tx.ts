// Auto-generated via `yarn polkadot-types-from-chain`, do not edit
/* eslint-disable */

// import type lookup before we augment - in some environments
// this is required to allow for ambient/previous definitions
import '@polkadot/api-base/types/submittable'

import type { ApiTypes, AugmentedSubmittable, SubmittableExtrinsic, SubmittableExtrinsicFunction } from '@polkadot/api-base/types'
import type { Data } from '@polkadot/types'
import type { Bytes, Compact, Option, U8aFixed, Vec, bool, u128, u16, u32, u64, u8 } from '@polkadot/types-codec'
import type { AnyNumber, IMethod, ITuple } from '@polkadot/types-codec/types'
import type { AccountId32, Call, H160, H256, MultiAddress, Perbill } from '@polkadot/types/interfaces/runtime'
import type {
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
    PalletClaimsClaim,
    PalletClaimsRejectData,
    PalletDemocracyConviction,
    PalletDemocracyMetadataOwner,
    PalletDemocracyVoteAccountVote,
    PalletFuelTanksConsumption,
    PalletFuelTanksDispatchSettings,
    PalletFuelTanksFuelTankDescriptor,
    PalletFuelTanksImplsDefaultTankMutation,
    PalletFuelTanksRulesDispatchRuleDescriptor,
    PalletFuelTanksRulesDispatchRuleKind,
    PalletIdentityBitFlags,
    PalletIdentityIdentityInfo,
    PalletIdentityJudgement,
    PalletMarketplaceFeaturesAuctionAuctionData,
    PalletMultiTokensFeaturesCollectionTypesCollectionAccount,
    PalletMultiTokensFeaturesTokenTypesTokenAccount,
    PalletMultisigTimepoint,
    PalletPoolsPoolsMutation,
    SpCoreEcdsaSignature,
    SpWeightsWeightV2Weight,
    XcmV3MultiLocation,
    XcmV3WeightLimit,
    XcmVersionedMultiAsset,
    XcmVersionedMultiAssets,
    XcmVersionedMultiLocation,
    XcmVersionedXcm,
} from '@polkadot/types/lookup'

export type __AugmentedSubmittable = AugmentedSubmittable<() => unknown>
export type __SubmittableExtrinsic<ApiType extends ApiTypes> = SubmittableExtrinsic<ApiType>
export type __SubmittableExtrinsicFunction<ApiType extends ApiTypes> = SubmittableExtrinsicFunction<ApiType>

declare module '@polkadot/api-base/types/submittable' {
    interface AugmentedSubmittables<ApiType extends ApiTypes> {
        balances: {
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
             * Set the regular balance of a given account; it also takes a reserved balance but this
             * must be the same as the account's current reserved balance.
             *
             * The dispatch origin for this call is `root`.
             *
             * WARNING: This call is DEPRECATED! Use `force_set_balance` instead.
             **/
            setBalanceDeprecated: AugmentedSubmittable<
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
                    newFree: Compact<u128> | AnyNumber | Uint8Array,
                    oldReserved: Compact<u128> | AnyNumber | Uint8Array
                ) => SubmittableExtrinsic<ApiType>,
                [MultiAddress, Compact<u128>, Compact<u128>]
            >
            /**
             * Alias for `transfer_allow_death`, provided only for name-wise compatibility.
             *
             * WARNING: DEPRECATED! Will be released in approximately 3 months.
             **/
            transfer: AugmentedSubmittable<
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
             * Assign a curator to a funded bounty.
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
             * Mint a new claim to collect EFIs.
             *
             * The dispatch origin for this call must be _Root_.
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
             * of claims
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
             * `request_claims` is a function that allows a relayer to request claims for a batch of
             * transactions
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
             * Set the current max candidates, must be within 0 and
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
             * Approve a proposal. At a later time, the proposal will be allocated to the beneficiary
             * and the original deposit will be returned.
             *
             * May only be called from `T::ApproveOrigin`.
             *
             * ## Complexity
             * - O(1).
             **/
            approveProposal: AugmentedSubmittable<
                (proposalId: Compact<u32> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>,
                [Compact<u32>]
            >
            /**
             * Put forward a suggestion for spending. A deposit proportional to the value
             * is reserved and slashed if the proposal is rejected. It is returned once the
             * proposal is awarded.
             *
             * ## Complexity
             * - O(1)
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
             * Reject a proposed spend. The original deposit will be slashed.
             *
             * May only be called from `T::RejectOrigin`.
             *
             * ## Complexity
             * - O(1)
             **/
            rejectProposal: AugmentedSubmittable<
                (proposalId: Compact<u32> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>,
                [Compact<u32>]
            >
            /**
             * Force a previously approved proposal to be removed from the approval queue.
             * The original deposit will no longer be returned.
             *
             * May only be called from `T::RejectOrigin`.
             * - `proposal_id`: The index of a proposal
             *
             * ## Complexity
             * - O(A) where `A` is the number of approvals
             *
             * Errors:
             * - `ProposalNotApproved`: The `proposal_id` supplied was not found in the approval queue,
             * i.e., the proposal has not been approved. This could also mean the proposal does not
             * exist altogether, thus there is no way it would have been approved in the first place.
             **/
            removeApproval: AugmentedSubmittable<
                (proposalId: Compact<u32> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>,
                [Compact<u32>]
            >
            /**
             * Propose and approve a spend of treasury funds.
             *
             * - `origin`: Must be `SpendOrigin` with the `Success` value being at least `amount`.
             * - `amount`: The amount to be transferred from the treasury to the `beneficiary`.
             * - `beneficiary`: The destination account for the transfer.
             *
             * NOTE: For record-keeping purposes, the proposer is deemed to be equivalent to the
             * beneficiary.
             **/
            spend: AugmentedSubmittable<
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
             * Service a single overweight message.
             **/
            serviceOverweight: AugmentedSubmittable<
                (
                    index: u64 | AnyNumber | Uint8Array,
                    weightLimit: SpWeightsWeightV2Weight | { refTime?: any; proofSize?: any } | string | Uint8Array
                ) => SubmittableExtrinsic<ApiType>,
                [u64, SpWeightsWeightV2Weight]
            >
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
             * required to dispatch calls. A deposit is required, and may be paid by
             * the user or the fuel tank, depending on the settings.
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
             * Creates a fuel tank, given a descriptor
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
                        | { name?: any; userAccountManagement?: any; ruleSets?: any; providesDeposit?: any; accountRules?: any }
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
                        | { useNoneOrigin?: any; paysRemainingFee?: any }
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
                        | { useNoneOrigin?: any; paysRemainingFee?: any }
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
                        | { name?: any; userAccountManagement?: any; ruleSets?: any; providesDeposit?: any; accountRules?: any }
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
                    rules:
                        | Vec<PalletFuelTanksRulesDispatchRuleDescriptor>
                        | (
                              | PalletFuelTanksRulesDispatchRuleDescriptor
                              | { WhitelistedCallers: any }
                              | { WhitelistedCollections: any }
                              | { MaxFuelBurnPerTransaction: any }
                              | { UserFuelBudget: any }
                              | { TankFuelBudget: any }
                              | { RequireToken: any }
                              | { PermittedCalls: any }
                              | { PermittedExtrinsics: any }
                              | { WhitelistedPallets: any }
                              | string
                              | Uint8Array
                          )[]
                ) => SubmittableExtrinsic<ApiType>,
                [MultiAddress, u32, Vec<PalletFuelTanksRulesDispatchRuleDescriptor>]
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
             * # Errors
             *
             * - [`Error::FuelTankNotFound`] if `tank_id` does not exist.
             * - [`Error::NoPermission`] if `origin` is not the fuel tank owner
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
                        | { userAccountManagement?: any; providesDeposit?: any; accountRules?: any }
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
             * Add a registrar to the system.
             *
             * The dispatch origin for this call must be `T::RegistrarOrigin`.
             *
             * - `account`: the account of the registrar.
             *
             * Emits `RegistrarAdded` if successful.
             *
             * ## Complexity
             * - `O(R)` where `R` registrar-count (governance-bounded and code-bounded).
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
             *
             * ## Complexity
             * - `O(R + X)`.
             * - where `R` registrar-count (governance-bounded).
             * - where `X` additional-field-count (deposit-bounded and code-bounded).
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
             *
             * ## Complexity
             * - `O(R + S + X)`
             * - where `R` registrar-count (governance-bounded).
             * - where `S` subs-count (hard- and deposit-bounded).
             * - where `X` additional-field-count (deposit-bounded and code-bounded).
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
             *
             * ## Complexity
             * - `O(R + S + X)`
             * - where `R` registrar-count (governance-bounded).
             * - where `S` subs-count (hard- and deposit-bounded).
             * - where `X` additional-field-count (deposit-bounded and code-bounded).
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
             * - `identity`: The hash of the [`IdentityInfo`] for that the judgement is provided.
             *
             * Emits `JudgementGiven` if successful.
             *
             * ## Complexity
             * - `O(R + X)`.
             * - where `R` registrar-count (governance-bounded).
             * - where `X` additional-field-count (deposit-bounded and code-bounded).
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
             *
             * ## Complexity
             * - `O(R + X)`.
             * - where `R` registrar-count (governance-bounded).
             * - where `X` additional-field-count (deposit-bounded and code-bounded).
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
             *
             * ## Complexity
             * - `O(R)`.
             * - where `R` registrar-count (governance-bounded).
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
             *
             * ## Complexity
             * - `O(R)`.
             * - where `R` registrar-count (governance-bounded).
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
             *
             * ## Complexity
             * - `O(R)`.
             * - where `R` registrar-count (governance-bounded).
             **/
            setFields: AugmentedSubmittable<
                (index: Compact<u32> | AnyNumber | Uint8Array, fields: PalletIdentityBitFlags) => SubmittableExtrinsic<ApiType>,
                [Compact<u32>, PalletIdentityBitFlags]
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
             *
             * ## Complexity
             * - `O(X + X' + R)`
             * - where `X` additional-field-count (deposit-bounded and code-bounded)
             * - where `R` judgements-count (registrar-count-bounded)
             **/
            setIdentity: AugmentedSubmittable<
                (
                    info:
                        | PalletIdentityIdentityInfo
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
                [PalletIdentityIdentityInfo]
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
             *
             * ## Complexity
             * - `O(P + S)`
             * - where `P` old-subs-count (hard- and deposit-bounded).
             * - where `S` subs-count (hard- and deposit-bounded).
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
             * Generic tx
             **/
            [key: string]: SubmittableExtrinsicFunction<ApiType>
        }
        marketplace: {
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
             * # Parameters
             *
             * - `make_asset_id`: The id of the asset being sold
             * - `take_asset_id`: The id of the asset being requested
             * - `amount`: The number of units being sold
             * - `price`: The requested price for each unit. If it's an auction, this is the minimum
             * bid
             * - `salt`: Can be used to differentiate listings
             * - `auction_data`: Including this makes the listing an auction
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
                    auctionData:
                        | Option<PalletMarketplaceFeaturesAuctionAuctionData>
                        | null
                        | Uint8Array
                        | PalletMarketplaceFeaturesAuctionAuctionData
                        | { startBlock?: any; endBlock?: any }
                        | string
                ) => SubmittableExtrinsic<ApiType>,
                [
                    EpMultiTokensTokenAssetId,
                    EpMultiTokensTokenAssetId,
                    Compact<u128>,
                    Compact<u128>,
                    Bytes,
                    Option<PalletMarketplaceFeaturesAuctionAuctionData>,
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
             * - [`Error::TakeValueUnderMinimum`] if the listings `take` value is under the minimum
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
             * funds. It fails if the auction is not over.
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
             * - [`Error::TakeValueUnderMinimum`] if the take value is less than the minimum required
             **/
            finalizeAuction: AugmentedSubmittable<
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
                    auctionData:
                        | Option<PalletMarketplaceFeaturesAuctionAuctionData>
                        | null
                        | Uint8Array
                        | PalletMarketplaceFeaturesAuctionAuctionData
                        | { startBlock?: any; endBlock?: any }
                        | string,
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
                    Option<PalletMarketplaceFeaturesAuctionAuctionData>,
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
             * Change the protocol fee to `protocol_fee`. Fails if `origin` is invalid.
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
             * Update xcm fees amount to be used in xcm.Withdraw message
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
             * [`MultiLocation`]
             * - [`Error::NotTransferable`]: A corresponding multilocation could not be converted for
             * the asset.
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
             * Note: each [`MultiAsset`] must be registered as a foreign asset at the destination
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
             * [`MultiLocation`]
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
             * `origin` transfers `amount` of EFI to `beneficiary` on the `parachain`
             *
             * Note: EFI needs to be registered as foreign token in destination parachain
             *
             * - `para_id`: destination parachain
             * - `beneficiary`: account to receive EFI in destination parachain
             * - `amount`: amount of EFI to transfer
             * - `dest_weight`: optional weight to be paid in destination chain, unlimited in case it's
             * `None`
             *
             * # Errors
             *
             * - [`Error::InvalidAddress`]: `beneficiary` is invalid, i.e could not be converted to
             * [`MultiLocation`]
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
             * Approve the `operator` to manage all of `origin`'s tokens belonging to `collection_id`.
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
             * `collection_id`. An `expiration` can be provided. `current_amount` must match the
             * current approved amount.
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
                        | (EpMultiTokensBatchAttributeKeyValuePair | { key?: any; value?: any } | string | Uint8Array)[]
                ) => SubmittableExtrinsic<ApiType>,
                [Compact<u128>, Option<u128>, Vec<EpMultiTokensBatchAttributeKeyValuePair>]
            >
            /**
             * Transfers the specific amount of tokens of `collection` to `recipients` from `origin`
             * account. A single failure will fail all transfers.
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
                        | { tokenId?: any; amount?: any; keepAlive?: any; removeTokenStorage?: any }
                        | string
                        | Uint8Array
                ) => SubmittableExtrinsic<ApiType>,
                [Compact<u128>, EpMultiTokensPolicyBurnDefaultBurnParams]
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
             * # Errors
             *
             * - [`Error::DepositReserveFailed`] if the deposit cannot be reserved
             **/
            createCollection: AugmentedSubmittable<
                (
                    descriptor:
                        | EpMultiTokensCollectionDefaultCollectionDescriptor
                        | { policy?: any; explicitRoyaltyCurrencies?: any; attributes?: any }
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
                        | { tokenId?: any; amount?: any; keepAlive?: any; removeTokenStorage?: any }
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
                        | { policy?: any; explicitRoyaltyCurrencies?: any; attributes?: any }
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
                        | { policy?: any; explicitRoyaltyCurrencies?: any; attributes?: any }
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
                        | { CreateToken: any }
                        | { Mint: any }
                        | { CreateOrMint: any }
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
                        | { value?: any; deposit?: any }
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
                              totalDeposit?: any
                              explicitRoyaltyCurrencies?: any
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
                              minimumBalance?: any
                              sufficiency?: any
                              mintDeposit?: any
                              attributeCount?: any
                              marketBehavior?: any
                              listingForbidden?: any
                              metadata?: any
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
             * `origin` mints to `recipient` for `collection_id` with `params` using the pallet's
             * [`MintPolicy`](traits::CollectionPolicy::Mint).
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
             * Modify [`Collection`](ep_multi_tokens::Collection) with `id` by applying `mutation`
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
                        | { behavior?: any; listingForbidden?: any; metadata?: any }
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
                    value: Bytes | string | Uint8Array
                ) => SubmittableExtrinsic<ApiType>,
                [Compact<u128>, Option<u128>, Bytes, Bytes]
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
             * Unapprove the `operator` to manage all of `origin`'s tokens belonging to `collection`
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
             * Unapprove `operator` to transfer `origin`'s `token_id` of `collection_id`
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
             * Generic tx
             **/
            [key: string]: SubmittableExtrinsicFunction<ApiType>
        }
        multiTokensMigration: {
            /**
             * Finalizes the migration process by unpausing all related pallets, setting the next
             * collection ID, updating the migration status, and emitting a `MigrationFinished` event.
             *
             * # Arguments
             *
             * * `origin` - The origin of the transaction.
             * * `next_collection_id` - The ID of the next collection.
             *
             * # Errors
             * - [`Error::OnlyFinalizeOngoing`] if auction is not ongoing.
             **/
            finalize: AugmentedSubmittable<
                (nextCollectionId: u128 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>,
                [u128]
            >
            /**
             * Migrates [`Attributes`] by setting attribute values for the specified list of attributes
             **/
            migrateAttributes: AugmentedSubmittable<
                (
                    attributes:
                        | Vec<ITuple<[u128, Option<u128>, Bytes, EpMultiTokensAttribute]>>
                        | [
                              u128 | AnyNumber | Uint8Array,
                              Option<u128> | null | Uint8Array | u128 | AnyNumber,
                              Bytes | string | Uint8Array,
                              EpMultiTokensAttribute | { value?: any; deposit?: any } | string | Uint8Array,
                          ][]
                ) => SubmittableExtrinsic<ApiType>,
                [Vec<ITuple<[u128, Option<u128>, Bytes, EpMultiTokensAttribute]>>]
            >
            /**
             * Migrates [`CollectionAccounts`] by setting values for the given accounts
             **/
            migrateCollectionAccounts: AugmentedSubmittable<
                (
                    accounts:
                        | Vec<ITuple<[u128, AccountId32, PalletMultiTokensFeaturesCollectionTypesCollectionAccount]>>
                        | [
                              u128 | AnyNumber | Uint8Array,
                              AccountId32 | string | Uint8Array,
                              (
                                  | PalletMultiTokensFeaturesCollectionTypesCollectionAccount
                                  | { isFrozen?: any; approvals?: any; accountCount?: any }
                                  | string
                                  | Uint8Array
                              ),
                          ][]
                ) => SubmittableExtrinsic<ApiType>,
                [Vec<ITuple<[u128, AccountId32, PalletMultiTokensFeaturesCollectionTypesCollectionAccount]>>]
            >
            /**
             * Migrates [`Collections`] by setting values for the given collections
             **/
            migrateCollections: AugmentedSubmittable<
                (
                    collections:
                        | Vec<ITuple<[u128, EpMultiTokensCollection]>>
                        | [
                              u128 | AnyNumber | Uint8Array,
                              (
                                  | EpMultiTokensCollection
                                  | {
                                        owner?: any
                                        policy?: any
                                        tokenCount?: any
                                        attributeCount?: any
                                        totalDeposit?: any
                                        explicitRoyaltyCurrencies?: any
                                    }
                                  | string
                                  | Uint8Array
                              ),
                          ][]
                ) => SubmittableExtrinsic<ApiType>,
                [Vec<ITuple<[u128, EpMultiTokensCollection]>>]
            >
            /**
             * Migrates [`TokenAccounts`] by setting values for the given accounts
             **/
            migrateTokenAccounts: AugmentedSubmittable<
                (
                    accounts:
                        | Vec<ITuple<[u128, u128, AccountId32, PalletMultiTokensFeaturesTokenTypesTokenAccount]>>
                        | [
                              u128 | AnyNumber | Uint8Array,
                              u128 | AnyNumber | Uint8Array,
                              AccountId32 | string | Uint8Array,
                              (
                                  | PalletMultiTokensFeaturesTokenTypesTokenAccount
                                  | {
                                        balance?: any
                                        reservedBalance?: any
                                        lockedBalance?: any
                                        namedReserves?: any
                                        locks?: any
                                        approvals?: any
                                        isFrozen?: any
                                    }
                                  | string
                                  | Uint8Array
                              ),
                          ][]
                ) => SubmittableExtrinsic<ApiType>,
                [Vec<ITuple<[u128, u128, AccountId32, PalletMultiTokensFeaturesTokenTypesTokenAccount]>>]
            >
            /**
             * Migrates [`Tokens`] by setting values for the given tokens
             **/
            migrateTokens: AugmentedSubmittable<
                (
                    tokens:
                        | Vec<ITuple<[u128, u128, EpMultiTokensToken]>>
                        | [
                              u128 | AnyNumber | Uint8Array,
                              u128 | AnyNumber | Uint8Array,
                              (
                                  | EpMultiTokensToken
                                  | {
                                        supply?: any
                                        cap?: any
                                        freezeState?: any
                                        minimumBalance?: any
                                        sufficiency?: any
                                        mintDeposit?: any
                                        attributeCount?: any
                                        marketBehavior?: any
                                        listingForbidden?: any
                                        metadata?: any
                                    }
                                  | string
                                  | Uint8Array
                              ),
                          ][]
                ) => SubmittableExtrinsic<ApiType>,
                [Vec<ITuple<[u128, u128, EpMultiTokensToken]>>]
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
                    dest: XcmVersionedMultiLocation | { V2: any } | { V3: any } | string | Uint8Array,
                    message: XcmVersionedXcm | { V2: any } | { V3: any } | string | Uint8Array
                ) => SubmittableExtrinsic<ApiType>,
                [XcmVersionedMultiLocation, XcmVersionedXcm]
            >
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
             * Execute an XCM message from a local, signed, origin.
             *
             * An event is deposited indicating whether `msg` could be executed completely or only
             * partially.
             *
             * No more than `max_weight` will be used in its attempted execution. If this is less than the
             * maximum amount of weight that the message could take to be executed, then no execution
             * attempt will be made.
             *
             * NOTE: A successful return to this does *not* imply that the `msg` was executed successfully
             * to completion; only that *some* of it was executed.
             **/
            execute: AugmentedSubmittable<
                (
                    message: XcmVersionedXcm | { V2: any } | { V3: any } | string | Uint8Array,
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
                    location: XcmVersionedMultiLocation | { V2: any } | { V3: any } | string | Uint8Array
                ) => SubmittableExtrinsic<ApiType>,
                [XcmVersionedMultiLocation]
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
                    location: XcmVersionedMultiLocation | { V2: any } | { V3: any } | string | Uint8Array
                ) => SubmittableExtrinsic<ApiType>,
                [XcmVersionedMultiLocation]
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
                    location: XcmV3MultiLocation | { parents?: any; interior?: any } | string | Uint8Array,
                    xcmVersion: u32 | AnyNumber | Uint8Array
                ) => SubmittableExtrinsic<ApiType>,
                [XcmV3MultiLocation, u32]
            >
            /**
             * Transfer some assets from the local chain to the sovereign account of a destination
             * chain and forward a notification XCM.
             *
             * Fee payment on the destination side is made from the asset in the `assets` vector of
             * index `fee_asset_item`, up to enough to pay for `weight_limit` of weight. If more weight
             * is needed than `weight_limit`, then the operation will fail and the assets send may be
             * at risk.
             *
             * - `origin`: Must be capable of withdrawing the `assets` and executing XCM.
             * - `dest`: Destination context for the assets. Will typically be `X2(Parent, Parachain(..))` to send
             * from parachain to parachain, or `X1(Parachain(..))` to send from relay to parachain.
             * - `beneficiary`: A beneficiary location for the assets in the context of `dest`. Will generally be
             * an `AccountId32` value.
             * - `assets`: The assets to be withdrawn. This should include the assets used to pay the fee on the
             * `dest` side.
             * - `fee_asset_item`: The index into `assets` of the item which should be used to pay
             * fees.
             * - `weight_limit`: The remote-side weight limit, if any, for the XCM fee purchase.
             **/
            limitedReserveTransferAssets: AugmentedSubmittable<
                (
                    dest: XcmVersionedMultiLocation | { V2: any } | { V3: any } | string | Uint8Array,
                    beneficiary: XcmVersionedMultiLocation | { V2: any } | { V3: any } | string | Uint8Array,
                    assets: XcmVersionedMultiAssets | { V2: any } | { V3: any } | string | Uint8Array,
                    feeAssetItem: u32 | AnyNumber | Uint8Array,
                    weightLimit: XcmV3WeightLimit | { Unlimited: any } | { Limited: any } | string | Uint8Array
                ) => SubmittableExtrinsic<ApiType>,
                [XcmVersionedMultiLocation, XcmVersionedMultiLocation, XcmVersionedMultiAssets, u32, XcmV3WeightLimit]
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
             * - `dest`: Destination context for the assets. Will typically be `X2(Parent, Parachain(..))` to send
             * from parachain to parachain, or `X1(Parachain(..))` to send from relay to parachain.
             * - `beneficiary`: A beneficiary location for the assets in the context of `dest`. Will generally be
             * an `AccountId32` value.
             * - `assets`: The assets to be withdrawn. The first item should be the currency used to to pay the fee on the
             * `dest` side. May not be empty.
             * - `fee_asset_item`: The index into `assets` of the item which should be used to pay
             * fees.
             * - `weight_limit`: The remote-side weight limit, if any, for the XCM fee purchase.
             **/
            limitedTeleportAssets: AugmentedSubmittable<
                (
                    dest: XcmVersionedMultiLocation | { V2: any } | { V3: any } | string | Uint8Array,
                    beneficiary: XcmVersionedMultiLocation | { V2: any } | { V3: any } | string | Uint8Array,
                    assets: XcmVersionedMultiAssets | { V2: any } | { V3: any } | string | Uint8Array,
                    feeAssetItem: u32 | AnyNumber | Uint8Array,
                    weightLimit: XcmV3WeightLimit | { Unlimited: any } | { Limited: any } | string | Uint8Array
                ) => SubmittableExtrinsic<ApiType>,
                [XcmVersionedMultiLocation, XcmVersionedMultiLocation, XcmVersionedMultiAssets, u32, XcmV3WeightLimit]
            >
            /**
             * Transfer some assets from the local chain to the sovereign account of a destination
             * chain and forward a notification XCM.
             *
             * Fee payment on the destination side is made from the asset in the `assets` vector of
             * index `fee_asset_item`. The weight limit for fees is not provided and thus is unlimited,
             * with all fees taken as needed from the asset.
             *
             * - `origin`: Must be capable of withdrawing the `assets` and executing XCM.
             * - `dest`: Destination context for the assets. Will typically be `X2(Parent, Parachain(..))` to send
             * from parachain to parachain, or `X1(Parachain(..))` to send from relay to parachain.
             * - `beneficiary`: A beneficiary location for the assets in the context of `dest`. Will generally be
             * an `AccountId32` value.
             * - `assets`: The assets to be withdrawn. This should include the assets used to pay the fee on the
             * `dest` side.
             * - `fee_asset_item`: The index into `assets` of the item which should be used to pay
             * fees.
             **/
            reserveTransferAssets: AugmentedSubmittable<
                (
                    dest: XcmVersionedMultiLocation | { V2: any } | { V3: any } | string | Uint8Array,
                    beneficiary: XcmVersionedMultiLocation | { V2: any } | { V3: any } | string | Uint8Array,
                    assets: XcmVersionedMultiAssets | { V2: any } | { V3: any } | string | Uint8Array,
                    feeAssetItem: u32 | AnyNumber | Uint8Array
                ) => SubmittableExtrinsic<ApiType>,
                [XcmVersionedMultiLocation, XcmVersionedMultiLocation, XcmVersionedMultiAssets, u32]
            >
            send: AugmentedSubmittable<
                (
                    dest: XcmVersionedMultiLocation | { V2: any } | { V3: any } | string | Uint8Array,
                    message: XcmVersionedXcm | { V2: any } | { V3: any } | string | Uint8Array
                ) => SubmittableExtrinsic<ApiType>,
                [XcmVersionedMultiLocation, XcmVersionedXcm]
            >
            /**
             * Teleport some assets from the local chain to some destination chain.
             *
             * Fee payment on the destination side is made from the asset in the `assets` vector of
             * index `fee_asset_item`. The weight limit for fees is not provided and thus is unlimited,
             * with all fees taken as needed from the asset.
             *
             * - `origin`: Must be capable of withdrawing the `assets` and executing XCM.
             * - `dest`: Destination context for the assets. Will typically be `X2(Parent, Parachain(..))` to send
             * from parachain to parachain, or `X1(Parachain(..))` to send from relay to parachain.
             * - `beneficiary`: A beneficiary location for the assets in the context of `dest`. Will generally be
             * an `AccountId32` value.
             * - `assets`: The assets to be withdrawn. The first item should be the currency used to to pay the fee on the
             * `dest` side. May not be empty.
             * - `fee_asset_item`: The index into `assets` of the item which should be used to pay
             * fees.
             **/
            teleportAssets: AugmentedSubmittable<
                (
                    dest: XcmVersionedMultiLocation | { V2: any } | { V3: any } | string | Uint8Array,
                    beneficiary: XcmVersionedMultiLocation | { V2: any } | { V3: any } | string | Uint8Array,
                    assets: XcmVersionedMultiAssets | { V2: any } | { V3: any } | string | Uint8Array,
                    feeAssetItem: u32 | AnyNumber | Uint8Array
                ) => SubmittableExtrinsic<ApiType>,
                [XcmVersionedMultiLocation, XcmVersionedMultiLocation, XcmVersionedMultiAssets, u32]
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
             * - `O(1)`
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
             * `MinimumPeriod`.
             *
             * The dispatch origin for this call must be `Inherent`.
             *
             * ## Complexity
             * - `O(1)` (Note that implementations of `OnTimestampSet` must also be `O(1)`)
             * - 1 storage read and 1 storage mutation (codec `O(1)`). (because of `DidUpdate::take` in
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
             * Services a single overweight XCM.
             *
             * - `origin`: Must pass `ExecuteOverweightOrigin`.
             * - `index`: The index of the overweight XCM to service
             * - `weight_limit`: The amount of weight that XCM execution may take.
             *
             * Errors:
             * - `BadOverweightIndex`: XCM under `index` is not found in the `Overweight` storage map.
             * - `BadXcm`: XCM under `index` cannot be properly decoded into a valid XCM format.
             * - `WeightOverLimit`: XCM execution may use greater `weight_limit`.
             *
             * Events:
             * - `OverweightServiced`: On success.
             **/
            serviceOverweight: AugmentedSubmittable<
                (
                    index: u64 | AnyNumber | Uint8Array,
                    weightLimit: SpWeightsWeightV2Weight | { refTime?: any; proofSize?: any } | string | Uint8Array
                ) => SubmittableExtrinsic<ApiType>,
                [u64, SpWeightsWeightV2Weight]
            >
            /**
             * Suspends all XCM executions for the XCMP queue, regardless of the sender's origin.
             *
             * - `origin`: Must pass `ControllerOrigin`.
             **/
            suspendXcmExecution: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>
            /**
             * Overwrites the number of pages of messages which must be in the queue after which we drop any further
             * messages from the channel.
             *
             * - `origin`: Must pass `Root`.
             * - `new`: Desired value for `QueueConfigData.drop_threshold`
             **/
            updateDropThreshold: AugmentedSubmittable<
                (updated: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>,
                [u32]
            >
            /**
             * Overwrites the number of pages of messages which the queue must be reduced to before it signals that
             * message sending may recommence after it has been suspended.
             *
             * - `origin`: Must pass `Root`.
             * - `new`: Desired value for `QueueConfigData.resume_threshold`
             **/
            updateResumeThreshold: AugmentedSubmittable<
                (updated: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>,
                [u32]
            >
            /**
             * Overwrites the number of pages of messages which must be in the queue for the other side to be told to
             * suspend their sending.
             *
             * - `origin`: Must pass `Root`.
             * - `new`: Desired value for `QueueConfigData.suspend_value`
             **/
            updateSuspendThreshold: AugmentedSubmittable<
                (updated: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>,
                [u32]
            >
            /**
             * Overwrites the amount of remaining weight under which we stop processing messages.
             *
             * - `origin`: Must pass `Root`.
             * - `new`: Desired value for `QueueConfigData.threshold_weight`
             **/
            updateThresholdWeight: AugmentedSubmittable<
                (
                    updated: SpWeightsWeightV2Weight | { refTime?: any; proofSize?: any } | string | Uint8Array
                ) => SubmittableExtrinsic<ApiType>,
                [SpWeightsWeightV2Weight]
            >
            /**
             * Overwrites the speed to which the available weight approaches the maximum weight.
             * A lower number results in a faster progression. A value of 1 makes the entire weight available initially.
             *
             * - `origin`: Must pass `Root`.
             * - `new`: Desired value for `QueueConfigData.weight_restrict_decay`.
             **/
            updateWeightRestrictDecay: AugmentedSubmittable<
                (
                    updated: SpWeightsWeightV2Weight | { refTime?: any; proofSize?: any } | string | Uint8Array
                ) => SubmittableExtrinsic<ApiType>,
                [SpWeightsWeightV2Weight]
            >
            /**
             * Overwrite the maximum amount of weight any individual message may consume.
             * Messages above this weight go into the overweight queue and may only be serviced explicitly.
             *
             * - `origin`: Must pass `Root`.
             * - `new`: Desired value for `QueueConfigData.xcmp_max_individual_weight`.
             **/
            updateXcmpMaxIndividualWeight: AugmentedSubmittable<
                (
                    updated: SpWeightsWeightV2Weight | { refTime?: any; proofSize?: any } | string | Uint8Array
                ) => SubmittableExtrinsic<ApiType>,
                [SpWeightsWeightV2Weight]
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
                    dest: XcmVersionedMultiLocation | { V2: any } | { V3: any } | string | Uint8Array,
                    destWeightLimit: XcmV3WeightLimit | { Unlimited: any } | { Limited: any } | string | Uint8Array
                ) => SubmittableExtrinsic<ApiType>,
                [EpMultiTokensTokenAssetId, u128, XcmVersionedMultiLocation, XcmV3WeightLimit]
            >
            /**
             * Transfer `MultiAsset`.
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
                    asset: XcmVersionedMultiAsset | { V2: any } | { V3: any } | string | Uint8Array,
                    dest: XcmVersionedMultiLocation | { V2: any } | { V3: any } | string | Uint8Array,
                    destWeightLimit: XcmV3WeightLimit | { Unlimited: any } | { Limited: any } | string | Uint8Array
                ) => SubmittableExtrinsic<ApiType>,
                [XcmVersionedMultiAsset, XcmVersionedMultiLocation, XcmV3WeightLimit]
            >
            /**
             * Transfer several `MultiAsset` specifying the item to be used as fee
             *
             * `dest_weight_limit` is the weight for XCM execution on the dest
             * chain, and it would be charged from the transferred assets. If set
             * below requirements, the execution may fail and assets wouldn't be
             * received.
             *
             * `fee_item` is index of the MultiAssets that we want to use for
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
                    assets: XcmVersionedMultiAssets | { V2: any } | { V3: any } | string | Uint8Array,
                    feeItem: u32 | AnyNumber | Uint8Array,
                    dest: XcmVersionedMultiLocation | { V2: any } | { V3: any } | string | Uint8Array,
                    destWeightLimit: XcmV3WeightLimit | { Unlimited: any } | { Limited: any } | string | Uint8Array
                ) => SubmittableExtrinsic<ApiType>,
                [XcmVersionedMultiAssets, u32, XcmVersionedMultiLocation, XcmV3WeightLimit]
            >
            /**
             * Transfer `MultiAsset` specifying the fee and amount as separate.
             *
             * `dest_weight_limit` is the weight for XCM execution on the dest
             * chain, and it would be charged from the transferred assets. If set
             * below requirements, the execution may fail and assets wouldn't be
             * received.
             *
             * `fee` is the multiasset to be spent to pay for execution in
             * destination chain. Both fee and amount will be subtracted form the
             * callers balance For now we only accept fee and asset having the same
             * `MultiLocation` id.
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
                    asset: XcmVersionedMultiAsset | { V2: any } | { V3: any } | string | Uint8Array,
                    fee: XcmVersionedMultiAsset | { V2: any } | { V3: any } | string | Uint8Array,
                    dest: XcmVersionedMultiLocation | { V2: any } | { V3: any } | string | Uint8Array,
                    destWeightLimit: XcmV3WeightLimit | { Unlimited: any } | { Limited: any } | string | Uint8Array
                ) => SubmittableExtrinsic<ApiType>,
                [XcmVersionedMultiAsset, XcmVersionedMultiAsset, XcmVersionedMultiLocation, XcmV3WeightLimit]
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
                    dest: XcmVersionedMultiLocation | { V2: any } | { V3: any } | string | Uint8Array,
                    destWeightLimit: XcmV3WeightLimit | { Unlimited: any } | { Limited: any } | string | Uint8Array
                ) => SubmittableExtrinsic<ApiType>,
                [Vec<ITuple<[EpMultiTokensTokenAssetId, u128]>>, u32, XcmVersionedMultiLocation, XcmV3WeightLimit]
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
                    dest: XcmVersionedMultiLocation | { V2: any } | { V3: any } | string | Uint8Array,
                    destWeightLimit: XcmV3WeightLimit | { Unlimited: any } | { Limited: any } | string | Uint8Array
                ) => SubmittableExtrinsic<ApiType>,
                [EpMultiTokensTokenAssetId, u128, u128, XcmVersionedMultiLocation, XcmV3WeightLimit]
            >
            /**
             * Generic tx
             **/
            [key: string]: SubmittableExtrinsicFunction<ApiType>
        }
    } // AugmentedSubmittables
} // declare module
