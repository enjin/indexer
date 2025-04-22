import { sts, Block, Bytes, Option, Result, CallType, RuntimeCtx } from '../support'
import * as enjinV100 from '../enjinV100'
import * as v100 from '../v100'
import * as v1030 from '../v1030'
import * as enjinV1032 from '../enjinV1032'

export const proposeSpend = {
    name: 'Treasury.propose_spend',
    /**
     * Put forward a suggestion for spending. A deposit proportional to the value
     * is reserved and slashed if the proposal is rejected. It is returned once the
     * proposal is awarded.
     *
     * ## Complexity
     * - O(1)
     */
    enjinV100: new CallType(
        'Treasury.propose_spend',
        sts.struct({
            value: sts.bigint(),
            beneficiary: enjinV100.MultiAddress,
        })
    ),
}

export const rejectProposal = {
    name: 'Treasury.reject_proposal',
    /**
     * Reject a proposed spend. The original deposit will be slashed.
     *
     * May only be called from `T::RejectOrigin`.
     *
     * ## Complexity
     * - O(1)
     */
    enjinV100: new CallType(
        'Treasury.reject_proposal',
        sts.struct({
            proposalId: sts.number(),
        })
    ),
}

export const approveProposal = {
    name: 'Treasury.approve_proposal',
    /**
     * Approve a proposal. At a later time, the proposal will be allocated to the beneficiary
     * and the original deposit will be returned.
     *
     * May only be called from `T::ApproveOrigin`.
     *
     * ## Complexity
     *  - O(1).
     */
    enjinV100: new CallType(
        'Treasury.approve_proposal',
        sts.struct({
            proposalId: sts.number(),
        })
    ),
}

export const spend = {
    name: 'Treasury.spend',
    /**
     * Propose and approve a spend of treasury funds.
     *
     * - `origin`: Must be `SpendOrigin` with the `Success` value being at least `amount`.
     * - `amount`: The amount to be transferred from the treasury to the `beneficiary`.
     * - `beneficiary`: The destination account for the transfer.
     *
     * NOTE: For record-keeping purposes, the proposer is deemed to be equivalent to the
     * beneficiary.
     */
    enjinV100: new CallType(
        'Treasury.spend',
        sts.struct({
            amount: sts.bigint(),
            beneficiary: enjinV100.MultiAddress,
        })
    ),
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
     *   the past if the resulting spend has not yet expired according to the
     *   [`Config::PayoutPeriod`]. If `None`, the spend can be claimed immediately after
     *   approval.
     *
     * ## Events
     *
     * Emits [`Event::AssetSpendApproved`] if successful.
     */
    enjinV1032: new CallType(
        'Treasury.spend',
        sts.struct({
            amount: sts.bigint(),
            beneficiary: enjinV1032.AccountId32,
            validFrom: sts.option(() => sts.number()),
        })
    ),
    /**
     * Propose and approve a spend of treasury funds.
     *
     * - `origin`: Must be `SpendOrigin` with the `Success` value being at least `amount`.
     * - `amount`: The amount to be transferred from the treasury to the `beneficiary`.
     * - `beneficiary`: The destination account for the transfer.
     *
     * NOTE: For record-keeping purposes, the proposer is deemed to be equivalent to the
     * beneficiary.
     */
    v100: new CallType(
        'Treasury.spend',
        sts.struct({
            amount: sts.bigint(),
            beneficiary: v100.MultiAddress,
        })
    ),
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
     *   the past if the resulting spend has not yet expired according to the
     *   [`Config::PayoutPeriod`]. If `None`, the spend can be claimed immediately after
     *   approval.
     *
     * ## Events
     *
     * Emits [`Event::AssetSpendApproved`] if successful.
     */
    v1030: new CallType(
        'Treasury.spend',
        sts.struct({
            amount: sts.bigint(),
            beneficiary: v1030.AccountId32,
            validFrom: sts.option(() => sts.number()),
        })
    ),
}

export const removeApproval = {
    name: 'Treasury.remove_approval',
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
     */
    enjinV100: new CallType(
        'Treasury.remove_approval',
        sts.struct({
            proposalId: sts.number(),
        })
    ),
}

export const spendLocal = {
    name: 'Treasury.spend_local',
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
     */
    enjinV1032: new CallType(
        'Treasury.spend_local',
        sts.struct({
            amount: sts.bigint(),
            beneficiary: enjinV1032.MultiAddress,
        })
    ),
}

export const payout = {
    name: 'Treasury.payout',
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
     */
    enjinV1032: new CallType(
        'Treasury.payout',
        sts.struct({
            index: sts.number(),
        })
    ),
}

export const checkStatus = {
    name: 'Treasury.check_status',
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
     */
    enjinV1032: new CallType(
        'Treasury.check_status',
        sts.struct({
            index: sts.number(),
        })
    ),
}

export const voidSpend = {
    name: 'Treasury.void_spend',
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
     */
    enjinV1032: new CallType(
        'Treasury.void_spend',
        sts.struct({
            index: sts.number(),
        })
    ),
}
