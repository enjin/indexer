'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.voidSpend =
    exports.checkStatus =
    exports.payout =
    exports.spendLocal =
    exports.removeApproval =
    exports.spend =
    exports.approveProposal =
    exports.rejectProposal =
    exports.proposeSpend =
        void 0
var support_1 = require('../support')
var matrixV500 = require('../matrixV500')
var matrixEnjinV603 = require('../matrixEnjinV603')
var matrixV1010 = require('../matrixV1010')
var matrixEnjinV1012 = require('../matrixEnjinV1012')
exports.proposeSpend = {
    name: 'CommunityPool.propose_spend',
    /**
     * Put forward a suggestion for spending. A deposit proportional to the value
     * is reserved and slashed if the proposal is rejected. It is returned once the
     * proposal is awarded.
     *
     * ## Complexity
     * - O(1)
     */
    matrixEnjinV603: new support_1.CallType(
        'CommunityPool.propose_spend',
        support_1.sts.struct({
            value: support_1.sts.bigint(),
            beneficiary: matrixEnjinV603.MultiAddress,
        })
    ),
}
exports.rejectProposal = {
    name: 'CommunityPool.reject_proposal',
    /**
     * Reject a proposed spend. The original deposit will be slashed.
     *
     * May only be called from `T::RejectOrigin`.
     *
     * ## Complexity
     * - O(1)
     */
    matrixEnjinV603: new support_1.CallType(
        'CommunityPool.reject_proposal',
        support_1.sts.struct({
            proposalId: support_1.sts.number(),
        })
    ),
}
exports.approveProposal = {
    name: 'CommunityPool.approve_proposal',
    /**
     * Approve a proposal. At a later time, the proposal will be allocated to the beneficiary
     * and the original deposit will be returned.
     *
     * May only be called from `T::ApproveOrigin`.
     *
     * ## Complexity
     *  - O(1).
     */
    matrixEnjinV603: new support_1.CallType(
        'CommunityPool.approve_proposal',
        support_1.sts.struct({
            proposalId: support_1.sts.number(),
        })
    ),
}
exports.spend = {
    name: 'CommunityPool.spend',
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
    matrixEnjinV603: new support_1.CallType(
        'CommunityPool.spend',
        support_1.sts.struct({
            amount: support_1.sts.bigint(),
            beneficiary: matrixEnjinV603.MultiAddress,
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
    matrixEnjinV1012: new support_1.CallType(
        'CommunityPool.spend',
        support_1.sts.struct({
            amount: support_1.sts.bigint(),
            beneficiary: matrixEnjinV1012.AccountId32,
            validFrom: support_1.sts.option(function () {
                return support_1.sts.number()
            }),
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
    matrixV500: new support_1.CallType(
        'CommunityPool.spend',
        support_1.sts.struct({
            amount: support_1.sts.bigint(),
            beneficiary: matrixV500.MultiAddress,
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
    matrixV1010: new support_1.CallType(
        'CommunityPool.spend',
        support_1.sts.struct({
            amount: support_1.sts.bigint(),
            beneficiary: matrixV1010.AccountId32,
            validFrom: support_1.sts.option(function () {
                return support_1.sts.number()
            }),
        })
    ),
}
exports.removeApproval = {
    name: 'CommunityPool.remove_approval',
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
    matrixEnjinV603: new support_1.CallType(
        'CommunityPool.remove_approval',
        support_1.sts.struct({
            proposalId: support_1.sts.number(),
        })
    ),
}
exports.spendLocal = {
    name: 'CommunityPool.spend_local',
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
    matrixEnjinV1012: new support_1.CallType(
        'CommunityPool.spend_local',
        support_1.sts.struct({
            amount: support_1.sts.bigint(),
            beneficiary: matrixEnjinV1012.MultiAddress,
        })
    ),
}
exports.payout = {
    name: 'CommunityPool.payout',
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
    matrixEnjinV1012: new support_1.CallType(
        'CommunityPool.payout',
        support_1.sts.struct({
            index: support_1.sts.number(),
        })
    ),
}
exports.checkStatus = {
    name: 'CommunityPool.check_status',
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
    matrixEnjinV1012: new support_1.CallType(
        'CommunityPool.check_status',
        support_1.sts.struct({
            index: support_1.sts.number(),
        })
    ),
}
exports.voidSpend = {
    name: 'CommunityPool.void_spend',
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
    matrixEnjinV1012: new support_1.CallType(
        'CommunityPool.void_spend',
        support_1.sts.struct({
            index: support_1.sts.number(),
        })
    ),
}
