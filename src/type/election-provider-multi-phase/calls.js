'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.governanceFallback =
    exports.submit =
    exports.setEmergencyElectionResult =
    exports.setMinimumUntrustedScore =
    exports.submitUnsigned =
        void 0
var support_1 = require('../support')
var enjinV100 = require('../enjinV100')
exports.submitUnsigned = {
    name: 'ElectionProviderMultiPhase.submit_unsigned',
    /**
     * Submit a solution for the unsigned phase.
     *
     * The dispatch origin fo this call must be __none__.
     *
     * This submission is checked on the fly. Moreover, this unsigned solution is only
     * validated when submitted to the pool from the **local** node. Effectively, this means
     * that only active validators can submit this transaction when authoring a block (similar
     * to an inherent).
     *
     * To prevent any incorrect solution (and thus wasted time/weight), this transaction will
     * panic if the solution submitted by the validator is invalid in any way, effectively
     * putting their authoring reward at risk.
     *
     * No deposit or reward is associated with this submission.
     */
    enjinV100: new support_1.CallType(
        'ElectionProviderMultiPhase.submit_unsigned',
        support_1.sts.struct({
            rawSolution: enjinV100.RawSolution,
            witness: enjinV100.SolutionOrSnapshotSize,
        })
    ),
}
exports.setMinimumUntrustedScore = {
    name: 'ElectionProviderMultiPhase.set_minimum_untrusted_score',
    /**
     * Set a new value for `MinimumUntrustedScore`.
     *
     * Dispatch origin must be aligned with `T::ForceOrigin`.
     *
     * This check can be turned off by setting the value to `None`.
     */
    enjinV100: new support_1.CallType(
        'ElectionProviderMultiPhase.set_minimum_untrusted_score',
        support_1.sts.struct({
            maybeNextScore: support_1.sts.option(function () {
                return enjinV100.ElectionScore
            }),
        })
    ),
}
exports.setEmergencyElectionResult = {
    name: 'ElectionProviderMultiPhase.set_emergency_election_result',
    /**
     * Set a solution in the queue, to be handed out to the client of this pallet in the next
     * call to `ElectionProvider::elect`.
     *
     * This can only be set by `T::ForceOrigin`, and only when the phase is `Emergency`.
     *
     * The solution is not checked for any feasibility and is assumed to be trustworthy, as any
     * feasibility check itself can in principle cause the election process to fail (due to
     * memory/weight constrains).
     */
    enjinV100: new support_1.CallType(
        'ElectionProviderMultiPhase.set_emergency_election_result',
        support_1.sts.struct({
            supports: support_1.sts.array(function () {
                return support_1.sts.tuple(function () {
                    return [enjinV100.AccountId32, enjinV100.Support]
                })
            }),
        })
    ),
}
exports.submit = {
    name: 'ElectionProviderMultiPhase.submit',
    /**
     * Submit a solution for the signed phase.
     *
     * The dispatch origin fo this call must be __signed__.
     *
     * The solution is potentially queued, based on the claimed score and processed at the end
     * of the signed phase.
     *
     * A deposit is reserved and recorded for the solution. Based on the outcome, the solution
     * might be rewarded, slashed, or get all or a part of the deposit back.
     */
    enjinV100: new support_1.CallType(
        'ElectionProviderMultiPhase.submit',
        support_1.sts.struct({
            rawSolution: enjinV100.RawSolution,
        })
    ),
}
exports.governanceFallback = {
    name: 'ElectionProviderMultiPhase.governance_fallback',
    /**
     * Trigger the governance fallback.
     *
     * This can only be called when [`Phase::Emergency`] is enabled, as an alternative to
     * calling [`Call::set_emergency_election_result`].
     */
    enjinV100: new support_1.CallType(
        'ElectionProviderMultiPhase.governance_fallback',
        support_1.sts.struct({
            maybeMaxVoters: support_1.sts.option(function () {
                return support_1.sts.number()
            }),
            maybeMaxTargets: support_1.sts.option(function () {
                return support_1.sts.number()
            }),
        })
    ),
}
