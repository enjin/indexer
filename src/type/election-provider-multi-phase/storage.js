'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.minimumUntrustedScore =
    exports.signedSubmissionsMap =
    exports.signedSubmissionIndices =
    exports.signedSubmissionNextIndex =
    exports.snapshotMetadata =
    exports.desiredTargets =
    exports.snapshot =
    exports.queuedSolution =
    exports.currentPhase =
    exports.round =
        void 0
var support_1 = require('../support')
var enjinV100 = require('../enjinV100')
exports.round = {
    /**
     *  Internal counter for the number of rounds.
     *
     *  This is useful for de-duplication of transactions submitted to the pool, and general
     *  diagnostics of the pallet.
     *
     *  This is merely incremented once per every time that an upstream `elect` is called.
     */
    enjinV100: new support_1.StorageType('ElectionProviderMultiPhase.Round', 'Default', [], support_1.sts.number()),
}
exports.currentPhase = {
    /**
     *  Current phase.
     */
    enjinV100: new support_1.StorageType('ElectionProviderMultiPhase.CurrentPhase', 'Default', [], enjinV100.Phase),
}
exports.queuedSolution = {
    /**
     *  Current best solution, signed or unsigned, queued to be returned upon `elect`.
     */
    enjinV100: new support_1.StorageType(
        'ElectionProviderMultiPhase.QueuedSolution',
        'Optional',
        [],
        enjinV100.ReadySolution
    ),
}
exports.snapshot = {
    /**
     *  Snapshot data of the round.
     *
     *  This is created at the beginning of the signed phase and cleared upon calling `elect`.
     */
    enjinV100: new support_1.StorageType(
        'ElectionProviderMultiPhase.Snapshot',
        'Optional',
        [],
        enjinV100.RoundSnapshot
    ),
}
exports.desiredTargets = {
    /**
     *  Desired number of targets to elect for this round.
     *
     *  Only exists when [`Snapshot`] is present.
     */
    enjinV100: new support_1.StorageType(
        'ElectionProviderMultiPhase.DesiredTargets',
        'Optional',
        [],
        support_1.sts.number()
    ),
}
exports.snapshotMetadata = {
    /**
     *  The metadata of the [`RoundSnapshot`]
     *
     *  Only exists when [`Snapshot`] is present.
     */
    enjinV100: new support_1.StorageType(
        'ElectionProviderMultiPhase.SnapshotMetadata',
        'Optional',
        [],
        enjinV100.SolutionOrSnapshotSize
    ),
}
exports.signedSubmissionNextIndex = {
    /**
     *  The next index to be assigned to an incoming signed submission.
     *
     *  Every accepted submission is assigned a unique index; that index is bound to that particular
     *  submission for the duration of the election. On election finalization, the next index is
     *  reset to 0.
     *
     *  We can't just use `SignedSubmissionIndices.len()`, because that's a bounded set; past its
     *  capacity, it will simply saturate. We can't just iterate over `SignedSubmissionsMap`,
     *  because iteration is slow. Instead, we store the value here.
     */
    enjinV100: new support_1.StorageType(
        'ElectionProviderMultiPhase.SignedSubmissionNextIndex',
        'Default',
        [],
        support_1.sts.number()
    ),
}
exports.signedSubmissionIndices = {
    /**
     *  A sorted, bounded vector of `(score, block_number, index)`, where each `index` points to a
     *  value in `SignedSubmissions`.
     *
     *  We never need to process more than a single signed submission at a time. Signed submissions
     *  can be quite large, so we're willing to pay the cost of multiple database accesses to access
     *  them one at a time instead of reading and decoding all of them at once.
     */
    enjinV100: new support_1.StorageType(
        'ElectionProviderMultiPhase.SignedSubmissionIndices',
        'Default',
        [],
        support_1.sts.array(function () {
            return support_1.sts.tuple(function () {
                return [enjinV100.ElectionScore, support_1.sts.number(), support_1.sts.number()]
            })
        })
    ),
}
exports.signedSubmissionsMap = {
    /**
     *  Unchecked, signed solutions.
     *
     *  Together with `SubmissionIndices`, this stores a bounded set of `SignedSubmissions` while
     *  allowing us to keep only a single one in memory at a time.
     *
     *  Twox note: the key of the map is an auto-incrementing index which users cannot inspect or
     *  affect; we shouldn't need a cryptographically secure hasher.
     */
    enjinV100: new support_1.StorageType(
        'ElectionProviderMultiPhase.SignedSubmissionsMap',
        'Optional',
        [support_1.sts.number()],
        enjinV100.SignedSubmission
    ),
}
exports.minimumUntrustedScore = {
    /**
     *  The minimum score that each 'untrusted' solution must attain in order to be considered
     *  feasible.
     *
     *  Can be set via `set_minimum_untrusted_score`.
     */
    enjinV100: new support_1.StorageType(
        'ElectionProviderMultiPhase.MinimumUntrustedScore',
        'Optional',
        [],
        enjinV100.ElectionScore
    ),
}
