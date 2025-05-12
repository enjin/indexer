'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.setMetadata =
    exports.refundSubmissionDeposit =
    exports.oneFewerDeciding =
    exports.nudgeReferendum =
    exports.kill =
    exports.cancel =
    exports.refundDecisionDeposit =
    exports.placeDecisionDeposit =
    exports.submit =
        void 0
var support_1 = require('../support')
var enjinV100 = require('../enjinV100')
var v100 = require('../v100')
var enjinV101 = require('../enjinV101')
var v105 = require('../v105')
var v1030 = require('../v1030')
var enjinV1032 = require('../enjinV1032')
exports.submit = {
    name: 'FellowshipReferenda.submit',
    /**
     * Propose a referendum on a privileged action.
     *
     * - `origin`: must be `SubmitOrigin` and the account must have `SubmissionDeposit` funds
     *   available.
     * - `proposal_origin`: The origin from which the proposal should be executed.
     * - `proposal`: The proposal.
     * - `enactment_moment`: The moment that the proposal should be enacted.
     *
     * Emits `Submitted`.
     */
    enjinV100: new support_1.CallType(
        'FellowshipReferenda.submit',
        support_1.sts.struct({
            proposalOrigin: enjinV100.OriginCaller,
            proposal: enjinV100.Bounded,
            enactmentMoment: enjinV100.DispatchTime,
        })
    ),
    /**
     * Propose a referendum on a privileged action.
     *
     * - `origin`: must be `SubmitOrigin` and the account must have `SubmissionDeposit` funds
     *   available.
     * - `proposal_origin`: The origin from which the proposal should be executed.
     * - `proposal`: The proposal.
     * - `enactment_moment`: The moment that the proposal should be enacted.
     *
     * Emits `Submitted`.
     */
    enjinV101: new support_1.CallType(
        'FellowshipReferenda.submit',
        support_1.sts.struct({
            proposalOrigin: enjinV101.OriginCaller,
            proposal: enjinV101.Bounded,
            enactmentMoment: enjinV101.DispatchTime,
        })
    ),
    /**
     * Propose a referendum on a privileged action.
     *
     * - `origin`: must be `SubmitOrigin` and the account must have `SubmissionDeposit` funds
     *   available.
     * - `proposal_origin`: The origin from which the proposal should be executed.
     * - `proposal`: The proposal.
     * - `enactment_moment`: The moment that the proposal should be enacted.
     *
     * Emits `Submitted`.
     */
    enjinV1032: new support_1.CallType(
        'FellowshipReferenda.submit',
        support_1.sts.struct({
            proposalOrigin: enjinV1032.OriginCaller,
            proposal: enjinV1032.Bounded,
            enactmentMoment: enjinV1032.DispatchTime,
        })
    ),
    /**
     * Propose a referendum on a privileged action.
     *
     * - `origin`: must be `SubmitOrigin` and the account must have `SubmissionDeposit` funds
     *   available.
     * - `proposal_origin`: The origin from which the proposal should be executed.
     * - `proposal`: The proposal.
     * - `enactment_moment`: The moment that the proposal should be enacted.
     *
     * Emits `Submitted`.
     */
    v100: new support_1.CallType(
        'FellowshipReferenda.submit',
        support_1.sts.struct({
            proposalOrigin: v100.OriginCaller,
            proposal: v100.Bounded,
            enactmentMoment: v100.DispatchTime,
        })
    ),
    /**
     * Propose a referendum on a privileged action.
     *
     * - `origin`: must be `SubmitOrigin` and the account must have `SubmissionDeposit` funds
     *   available.
     * - `proposal_origin`: The origin from which the proposal should be executed.
     * - `proposal`: The proposal.
     * - `enactment_moment`: The moment that the proposal should be enacted.
     *
     * Emits `Submitted`.
     */
    v105: new support_1.CallType(
        'FellowshipReferenda.submit',
        support_1.sts.struct({
            proposalOrigin: v105.OriginCaller,
            proposal: v105.Bounded,
            enactmentMoment: v105.DispatchTime,
        })
    ),
    /**
     * Propose a referendum on a privileged action.
     *
     * - `origin`: must be `SubmitOrigin` and the account must have `SubmissionDeposit` funds
     *   available.
     * - `proposal_origin`: The origin from which the proposal should be executed.
     * - `proposal`: The proposal.
     * - `enactment_moment`: The moment that the proposal should be enacted.
     *
     * Emits `Submitted`.
     */
    v1030: new support_1.CallType(
        'FellowshipReferenda.submit',
        support_1.sts.struct({
            proposalOrigin: v1030.OriginCaller,
            proposal: v1030.Bounded,
            enactmentMoment: v1030.DispatchTime,
        })
    ),
}
exports.placeDecisionDeposit = {
    name: 'FellowshipReferenda.place_decision_deposit',
    /**
     * Post the Decision Deposit for a referendum.
     *
     * - `origin`: must be `Signed` and the account must have funds available for the
     *   referendum's track's Decision Deposit.
     * - `index`: The index of the submitted referendum whose Decision Deposit is yet to be
     *   posted.
     *
     * Emits `DecisionDepositPlaced`.
     */
    enjinV100: new support_1.CallType(
        'FellowshipReferenda.place_decision_deposit',
        support_1.sts.struct({
            index: support_1.sts.number(),
        })
    ),
}
exports.refundDecisionDeposit = {
    name: 'FellowshipReferenda.refund_decision_deposit',
    /**
     * Refund the Decision Deposit for a closed referendum back to the depositor.
     *
     * - `origin`: must be `Signed` or `Root`.
     * - `index`: The index of a closed referendum whose Decision Deposit has not yet been
     *   refunded.
     *
     * Emits `DecisionDepositRefunded`.
     */
    enjinV100: new support_1.CallType(
        'FellowshipReferenda.refund_decision_deposit',
        support_1.sts.struct({
            index: support_1.sts.number(),
        })
    ),
}
exports.cancel = {
    name: 'FellowshipReferenda.cancel',
    /**
     * Cancel an ongoing referendum.
     *
     * - `origin`: must be the `CancelOrigin`.
     * - `index`: The index of the referendum to be cancelled.
     *
     * Emits `Cancelled`.
     */
    enjinV100: new support_1.CallType(
        'FellowshipReferenda.cancel',
        support_1.sts.struct({
            index: support_1.sts.number(),
        })
    ),
}
exports.kill = {
    name: 'FellowshipReferenda.kill',
    /**
     * Cancel an ongoing referendum and slash the deposits.
     *
     * - `origin`: must be the `KillOrigin`.
     * - `index`: The index of the referendum to be cancelled.
     *
     * Emits `Killed` and `DepositSlashed`.
     */
    enjinV100: new support_1.CallType(
        'FellowshipReferenda.kill',
        support_1.sts.struct({
            index: support_1.sts.number(),
        })
    ),
}
exports.nudgeReferendum = {
    name: 'FellowshipReferenda.nudge_referendum',
    /**
     * Advance a referendum onto its next logical state. Only used internally.
     *
     * - `origin`: must be `Root`.
     * - `index`: the referendum to be advanced.
     */
    enjinV100: new support_1.CallType(
        'FellowshipReferenda.nudge_referendum',
        support_1.sts.struct({
            index: support_1.sts.number(),
        })
    ),
}
exports.oneFewerDeciding = {
    name: 'FellowshipReferenda.one_fewer_deciding',
    /**
     * Advance a track onto its next logical state. Only used internally.
     *
     * - `origin`: must be `Root`.
     * - `track`: the track to be advanced.
     *
     * Action item for when there is now one fewer referendum in the deciding phase and the
     * `DecidingCount` is not yet updated. This means that we should either:
     * - begin deciding another referendum (and leave `DecidingCount` alone); or
     * - decrement `DecidingCount`.
     */
    enjinV100: new support_1.CallType(
        'FellowshipReferenda.one_fewer_deciding',
        support_1.sts.struct({
            track: support_1.sts.number(),
        })
    ),
}
exports.refundSubmissionDeposit = {
    name: 'FellowshipReferenda.refund_submission_deposit',
    /**
     * Refund the Submission Deposit for a closed referendum back to the depositor.
     *
     * - `origin`: must be `Signed` or `Root`.
     * - `index`: The index of a closed referendum whose Submission Deposit has not yet been
     *   refunded.
     *
     * Emits `SubmissionDepositRefunded`.
     */
    enjinV100: new support_1.CallType(
        'FellowshipReferenda.refund_submission_deposit',
        support_1.sts.struct({
            index: support_1.sts.number(),
        })
    ),
}
exports.setMetadata = {
    name: 'FellowshipReferenda.set_metadata',
    /**
     * Set or clear metadata of a referendum.
     *
     * Parameters:
     * - `origin`: Must be `Signed` by a creator of a referendum or by anyone to clear a
     *   metadata of a finished referendum.
     * - `index`:  The index of a referendum to set or clear metadata for.
     * - `maybe_hash`: The hash of an on-chain stored preimage. `None` to clear a metadata.
     */
    enjinV100: new support_1.CallType(
        'FellowshipReferenda.set_metadata',
        support_1.sts.struct({
            index: support_1.sts.number(),
            maybeHash: support_1.sts.option(function () {
                return enjinV100.H256
            }),
        })
    ),
}
