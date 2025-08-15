import { sts, Block, Bytes, Option, Result, CallType, RuntimeCtx } from '../support'
import * as enjinV100 from '../enjinV100'
import * as v100 from '../v100'
import * as enjinV101 from '../enjinV101'
import * as v105 from '../v105'
import * as v1030 from '../v1030'
import * as enjinV1032 from '../enjinV1032'
import * as v1060 from '../v1060'

export const submit = {
    name: 'Referenda.submit',
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
    enjinV100: new CallType(
        'Referenda.submit',
        sts.struct({
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
    enjinV101: new CallType(
        'Referenda.submit',
        sts.struct({
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
    enjinV1032: new CallType(
        'Referenda.submit',
        sts.struct({
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
    v100: new CallType(
        'Referenda.submit',
        sts.struct({
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
    v105: new CallType(
        'Referenda.submit',
        sts.struct({
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
    v1030: new CallType(
        'Referenda.submit',
        sts.struct({
            proposalOrigin: v1030.OriginCaller,
            proposal: v1030.Bounded,
            enactmentMoment: v1030.DispatchTime,
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
    v1060: new CallType(
        'Referenda.submit',
        sts.struct({
            proposalOrigin: v1060.OriginCaller,
            proposal: v1060.Bounded,
            enactmentMoment: v1060.DispatchTime,
        })
    ),
}

export const placeDecisionDeposit = {
    name: 'Referenda.place_decision_deposit',
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
    enjinV100: new CallType(
        'Referenda.place_decision_deposit',
        sts.struct({
            index: sts.number(),
        })
    ),
}

export const refundDecisionDeposit = {
    name: 'Referenda.refund_decision_deposit',
    /**
     * Refund the Decision Deposit for a closed referendum back to the depositor.
     *
     * - `origin`: must be `Signed` or `Root`.
     * - `index`: The index of a closed referendum whose Decision Deposit has not yet been
     *   refunded.
     *
     * Emits `DecisionDepositRefunded`.
     */
    enjinV100: new CallType(
        'Referenda.refund_decision_deposit',
        sts.struct({
            index: sts.number(),
        })
    ),
}

export const cancel = {
    name: 'Referenda.cancel',
    /**
     * Cancel an ongoing referendum.
     *
     * - `origin`: must be the `CancelOrigin`.
     * - `index`: The index of the referendum to be cancelled.
     *
     * Emits `Cancelled`.
     */
    enjinV100: new CallType(
        'Referenda.cancel',
        sts.struct({
            index: sts.number(),
        })
    ),
}

export const kill = {
    name: 'Referenda.kill',
    /**
     * Cancel an ongoing referendum and slash the deposits.
     *
     * - `origin`: must be the `KillOrigin`.
     * - `index`: The index of the referendum to be cancelled.
     *
     * Emits `Killed` and `DepositSlashed`.
     */
    enjinV100: new CallType(
        'Referenda.kill',
        sts.struct({
            index: sts.number(),
        })
    ),
}

export const nudgeReferendum = {
    name: 'Referenda.nudge_referendum',
    /**
     * Advance a referendum onto its next logical state. Only used internally.
     *
     * - `origin`: must be `Root`.
     * - `index`: the referendum to be advanced.
     */
    enjinV100: new CallType(
        'Referenda.nudge_referendum',
        sts.struct({
            index: sts.number(),
        })
    ),
}

export const oneFewerDeciding = {
    name: 'Referenda.one_fewer_deciding',
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
    enjinV100: new CallType(
        'Referenda.one_fewer_deciding',
        sts.struct({
            track: sts.number(),
        })
    ),
}

export const refundSubmissionDeposit = {
    name: 'Referenda.refund_submission_deposit',
    /**
     * Refund the Submission Deposit for a closed referendum back to the depositor.
     *
     * - `origin`: must be `Signed` or `Root`.
     * - `index`: The index of a closed referendum whose Submission Deposit has not yet been
     *   refunded.
     *
     * Emits `SubmissionDepositRefunded`.
     */
    enjinV100: new CallType(
        'Referenda.refund_submission_deposit',
        sts.struct({
            index: sts.number(),
        })
    ),
}

export const setMetadata = {
    name: 'Referenda.set_metadata',
    /**
     * Set or clear metadata of a referendum.
     *
     * Parameters:
     * - `origin`: Must be `Signed` by a creator of a referendum or by anyone to clear a
     *   metadata of a finished referendum.
     * - `index`:  The index of a referendum to set or clear metadata for.
     * - `maybe_hash`: The hash of an on-chain stored preimage. `None` to clear a metadata.
     */
    enjinV100: new CallType(
        'Referenda.set_metadata',
        sts.struct({
            index: sts.number(),
            maybeHash: sts.option(() => enjinV100.H256),
        })
    ),
}
