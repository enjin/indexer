'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.collatorExitThreshold =
    exports.sessionPeriod =
    exports.defaultMinCollatorStake =
    exports.feeDistributorAccountId =
    exports.collatorPoolAccountId =
    exports.minNominationStakeAmount =
    exports.maxNominationsPerCollator =
    exports.maxCollators =
    exports.maxCandidates =
    exports.maxInvulnerables =
        void 0
var support_1 = require('../support')
var matrixEnjinV603 = require('../matrixEnjinV603')
exports.maxInvulnerables = {
    /**
     *  Maximum number of invulnerables.
     */
    matrixEnjinV603: new support_1.ConstantType('CollatorStaking.MaxInvulnerables', support_1.sts.number()),
}
exports.maxCandidates = {
    /**
     *  The number of selected collators
     */
    matrixEnjinV603: new support_1.ConstantType('CollatorStaking.MaxCandidates', support_1.sts.number()),
}
exports.maxCollators = {
    /**
     *  The number of selected collators
     */
    matrixEnjinV603: new support_1.ConstantType('CollatorStaking.MaxCollators', support_1.sts.number()),
}
exports.maxNominationsPerCollator = {
    /**
     *  Maximum nominators per collator
     */
    matrixEnjinV603: new support_1.ConstantType('CollatorStaking.MaxNominationsPerCollator', support_1.sts.number()),
}
exports.minNominationStakeAmount = {
    /**
     *  Minimum nomination stake required
     */
    matrixEnjinV603: new support_1.ConstantType('CollatorStaking.MinNominationStakeAmount', support_1.sts.bigint()),
}
exports.collatorPoolAccountId = {
    /**
     *  The [`AccountId`](frame_system::Config::AccountId) for the collator pool
     */
    matrixEnjinV603: new support_1.ConstantType('CollatorStaking.CollatorPoolAccountId', matrixEnjinV603.AccountId32),
}
exports.feeDistributorAccountId = {
    /**
     *  The [`AccountId`](frame_system::Config::AccountId) for the fee distributor
     */
    matrixEnjinV603: new support_1.ConstantType('CollatorStaking.FeeDistributorAccountId', matrixEnjinV603.AccountId32),
}
exports.defaultMinCollatorStake = {
    /**
     *  The default minimum collator stake amount
     */
    matrixEnjinV603: new support_1.ConstantType('CollatorStaking.DefaultMinCollatorStake', support_1.sts.bigint()),
}
exports.sessionPeriod = {
    /**
     *  The total number of blocks within a session
     */
    matrixEnjinV603: new support_1.ConstantType('CollatorStaking.SessionPeriod', support_1.sts.number()),
}
exports.collatorExitThreshold = {
    /**
     *  The number of rounds that have to pass after the collator has requested
     *  unbonding for the bonded stake to be released.
     */
    matrixEnjinV603: new support_1.ConstantType('CollatorStaking.CollatorExitThreshold', support_1.sts.number()),
}
