'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.sessionInfo =
    exports.minCollatorStake =
    exports.collatorExits =
    exports.currentRound =
    exports.nominators =
    exports.desiredCandidatesCount =
    exports.candidates =
    exports.invulnerables =
    exports.collators =
        void 0
var support_1 = require('../support')
var matrixEnjinV603 = require('../matrixEnjinV603')
exports.collators = {
    /**
     *  The current set of collators
     */
    matrixEnjinV603: new support_1.StorageType(
        'CollatorStaking.Collators',
        'Default',
        [],
        support_1.sts.array(function () {
            return matrixEnjinV603.Collator
        })
    ),
}
exports.invulnerables = {
    /**
     *  The invulnerable collators
     *
     *  This is the list of collators who are invulnerable to being ejected from collation
     *  either by unbonding or by having less stake.
     */
    matrixEnjinV603: new support_1.StorageType(
        'CollatorStaking.Invulnerables',
        'Default',
        [],
        support_1.sts.array(function () {
            return matrixEnjinV603.Collator
        })
    ),
}
exports.candidates = {
    /**
     *  The current set of candidates for collation.
     */
    matrixEnjinV603: new support_1.StorageType(
        'CollatorStaking.Candidates',
        'Default',
        [],
        support_1.sts.array(function () {
            return matrixEnjinV603.Collator
        })
    ),
}
exports.desiredCandidatesCount = {
    /**
     *  The current candidate limit, must be within 0 and [`MaxCandidates`](Config::MaxCandidates)
     */
    matrixEnjinV603: new support_1.StorageType(
        'CollatorStaking.DesiredCandidatesCount',
        'Default',
        [],
        support_1.sts.number()
    ),
}
exports.nominators = {
    /**
     *  The current set of nominators.
     *
     *  Each nominator is allowed to nominate one collator.
     */
    matrixEnjinV603: new support_1.StorageType(
        'CollatorStaking.Nominators',
        'Optional',
        [matrixEnjinV603.AccountId32],
        matrixEnjinV603.Nomination
    ),
}
exports.currentRound = {
    /**
     *  The current round information.
     */
    matrixEnjinV603: new support_1.StorageType('CollatorStaking.CurrentRound', 'Default', [], matrixEnjinV603.Round),
}
exports.collatorExits = {
    /**
     *  The list of collators who requested an exit.
     */
    matrixEnjinV603: new support_1.StorageType(
        'CollatorStaking.CollatorExits',
        'Optional',
        [matrixEnjinV603.AccountId32],
        support_1.sts.number()
    ),
}
exports.minCollatorStake = {
    /**
     *  The min stake amount for collators
     */
    matrixEnjinV603: new support_1.StorageType(
        'CollatorStaking.MinCollatorStake',
        'Default',
        [],
        support_1.sts.bigint()
    ),
}
exports.sessionInfo = {
    /**
     *  The session info of collators including produced blocks and uptime
     */
    matrixEnjinV603: new support_1.StorageType(
        'CollatorStaking.SessionInfo',
        'Default',
        [matrixEnjinV603.AccountId32, support_1.sts.number()],
        matrixEnjinV603.CollatorSessionInfo
    ),
}
