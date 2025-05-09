'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.phaseTransitioned =
    exports.slashed =
    exports.rewarded =
    exports.electionFailed =
    exports.electionFinalized =
    exports.solutionStored =
        void 0
var support_1 = require('../support')
var enjinV100 = require('../enjinV100')
exports.solutionStored = {
    name: 'ElectionProviderMultiPhase.SolutionStored',
    /**
     * A solution was stored with the given compute.
     *
     * The `origin` indicates the origin of the solution. If `origin` is `Some(AccountId)`,
     * the stored solution was submited in the signed phase by a miner with the `AccountId`.
     * Otherwise, the solution was stored either during the unsigned phase or by
     * `T::ForceOrigin`. The `bool` is `true` when a previous solution was ejected to make
     * room for this one.
     */
    enjinV100: new support_1.EventType(
        'ElectionProviderMultiPhase.SolutionStored',
        support_1.sts.struct({
            compute: enjinV100.ElectionCompute,
            origin: support_1.sts.option(function () {
                return enjinV100.AccountId32
            }),
            prevEjected: support_1.sts.boolean(),
        })
    ),
}
exports.electionFinalized = {
    name: 'ElectionProviderMultiPhase.ElectionFinalized',
    /**
     * The election has been finalized, with the given computation and score.
     */
    enjinV100: new support_1.EventType(
        'ElectionProviderMultiPhase.ElectionFinalized',
        support_1.sts.struct({
            compute: enjinV100.ElectionCompute,
            score: enjinV100.ElectionScore,
        })
    ),
}
exports.electionFailed = {
    name: 'ElectionProviderMultiPhase.ElectionFailed',
    /**
     * An election failed.
     *
     * Not much can be said about which computes failed in the process.
     */
    enjinV100: new support_1.EventType('ElectionProviderMultiPhase.ElectionFailed', support_1.sts.unit()),
}
exports.rewarded = {
    name: 'ElectionProviderMultiPhase.Rewarded',
    /**
     * An account has been rewarded for their signed submission being finalized.
     */
    enjinV100: new support_1.EventType(
        'ElectionProviderMultiPhase.Rewarded',
        support_1.sts.struct({
            account: enjinV100.AccountId32,
            value: support_1.sts.bigint(),
        })
    ),
}
exports.slashed = {
    name: 'ElectionProviderMultiPhase.Slashed',
    /**
     * An account has been slashed for submitting an invalid signed submission.
     */
    enjinV100: new support_1.EventType(
        'ElectionProviderMultiPhase.Slashed',
        support_1.sts.struct({
            account: enjinV100.AccountId32,
            value: support_1.sts.bigint(),
        })
    ),
}
exports.phaseTransitioned = {
    name: 'ElectionProviderMultiPhase.PhaseTransitioned',
    /**
     * There was a phase transition in a given round.
     */
    enjinV100: new support_1.EventType(
        'ElectionProviderMultiPhase.PhaseTransitioned',
        support_1.sts.struct({
            from: enjinV100.Phase,
            to: enjinV100.Phase,
            round: support_1.sts.number(),
        })
    ),
}
