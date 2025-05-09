'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.minerMaxWinners =
    exports.minerMaxVotesPerVoter =
    exports.minerMaxWeight =
    exports.minerMaxLength =
    exports.maxWinners =
    exports.maxElectableTargets =
    exports.maxElectingVoters =
    exports.signedDepositWeight =
    exports.signedDepositByte =
    exports.signedDepositBase =
    exports.signedRewardBase =
    exports.signedMaxRefunds =
    exports.signedMaxWeight =
    exports.signedMaxSubmissions =
    exports.minerTxPriority =
    exports.offchainRepeat =
    exports.betterUnsignedThreshold =
    exports.betterSignedThreshold =
    exports.signedPhase =
    exports.unsignedPhase =
        void 0
var support_1 = require('../support')
var enjinV100 = require('../enjinV100')
exports.unsignedPhase = {
    /**
     *  Duration of the unsigned phase.
     */
    enjinV100: new support_1.ConstantType('ElectionProviderMultiPhase.UnsignedPhase', support_1.sts.number()),
}
exports.signedPhase = {
    /**
     *  Duration of the signed phase.
     */
    enjinV100: new support_1.ConstantType('ElectionProviderMultiPhase.SignedPhase', support_1.sts.number()),
}
exports.betterSignedThreshold = {
    /**
     *  The minimum amount of improvement to the solution score that defines a solution as
     *  "better" in the Signed phase.
     */
    enjinV100: new support_1.ConstantType('ElectionProviderMultiPhase.BetterSignedThreshold', enjinV100.Perbill),
}
exports.betterUnsignedThreshold = {
    /**
     *  The minimum amount of improvement to the solution score that defines a solution as
     *  "better" in the Unsigned phase.
     */
    enjinV100: new support_1.ConstantType('ElectionProviderMultiPhase.BetterUnsignedThreshold', enjinV100.Perbill),
}
exports.offchainRepeat = {
    /**
     *  The repeat threshold of the offchain worker.
     *
     *  For example, if it is 5, that means that at least 5 blocks will elapse between attempts
     *  to submit the worker's solution.
     */
    enjinV100: new support_1.ConstantType('ElectionProviderMultiPhase.OffchainRepeat', support_1.sts.number()),
}
exports.minerTxPriority = {
    /**
     *  The priority of the unsigned transaction submitted in the unsigned-phase
     */
    enjinV100: new support_1.ConstantType('ElectionProviderMultiPhase.MinerTxPriority', support_1.sts.bigint()),
}
exports.signedMaxSubmissions = {
    /**
     *  Maximum number of signed submissions that can be queued.
     *
     *  It is best to avoid adjusting this during an election, as it impacts downstream data
     *  structures. In particular, `SignedSubmissionIndices<T>` is bounded on this value. If you
     *  update this value during an election, you _must_ ensure that
     *  `SignedSubmissionIndices.len()` is less than or equal to the new value. Otherwise,
     *  attempts to submit new solutions may cause a runtime panic.
     */
    enjinV100: new support_1.ConstantType('ElectionProviderMultiPhase.SignedMaxSubmissions', support_1.sts.number()),
}
exports.signedMaxWeight = {
    /**
     *  Maximum weight of a signed solution.
     *
     *  If [`Config::MinerConfig`] is being implemented to submit signed solutions (outside of
     *  this pallet), then [`MinerConfig::solution_weight`] is used to compare against
     *  this value.
     */
    enjinV100: new support_1.ConstantType('ElectionProviderMultiPhase.SignedMaxWeight', enjinV100.Weight),
}
exports.signedMaxRefunds = {
    /**
     *  The maximum amount of unchecked solutions to refund the call fee for.
     */
    enjinV100: new support_1.ConstantType('ElectionProviderMultiPhase.SignedMaxRefunds', support_1.sts.number()),
}
exports.signedRewardBase = {
    /**
     *  Base reward for a signed solution
     */
    enjinV100: new support_1.ConstantType('ElectionProviderMultiPhase.SignedRewardBase', support_1.sts.bigint()),
}
exports.signedDepositBase = {
    /**
     *  Base deposit for a signed solution.
     */
    enjinV100: new support_1.ConstantType('ElectionProviderMultiPhase.SignedDepositBase', support_1.sts.bigint()),
}
exports.signedDepositByte = {
    /**
     *  Per-byte deposit for a signed solution.
     */
    enjinV100: new support_1.ConstantType('ElectionProviderMultiPhase.SignedDepositByte', support_1.sts.bigint()),
}
exports.signedDepositWeight = {
    /**
     *  Per-weight deposit for a signed solution.
     */
    enjinV100: new support_1.ConstantType('ElectionProviderMultiPhase.SignedDepositWeight', support_1.sts.bigint()),
}
exports.maxElectingVoters = {
    /**
     *  The maximum number of electing voters to put in the snapshot. At the moment, snapshots
     *  are only over a single block, but once multi-block elections are introduced they will
     *  take place over multiple blocks.
     */
    enjinV100: new support_1.ConstantType('ElectionProviderMultiPhase.MaxElectingVoters', support_1.sts.number()),
}
exports.maxElectableTargets = {
    /**
     *  The maximum number of electable targets to put in the snapshot.
     */
    enjinV100: new support_1.ConstantType('ElectionProviderMultiPhase.MaxElectableTargets', support_1.sts.number()),
}
exports.maxWinners = {
    /**
     *  The maximum number of winners that can be elected by this `ElectionProvider`
     *  implementation.
     *
     *  Note: This must always be greater or equal to `T::DataProvider::desired_targets()`.
     */
    enjinV100: new support_1.ConstantType('ElectionProviderMultiPhase.MaxWinners', support_1.sts.number()),
}
exports.minerMaxLength = {
    enjinV100: new support_1.ConstantType('ElectionProviderMultiPhase.MinerMaxLength', support_1.sts.number()),
}
exports.minerMaxWeight = {
    enjinV100: new support_1.ConstantType('ElectionProviderMultiPhase.MinerMaxWeight', enjinV100.Weight),
}
exports.minerMaxVotesPerVoter = {
    enjinV100: new support_1.ConstantType('ElectionProviderMultiPhase.MinerMaxVotesPerVoter', support_1.sts.number()),
}
exports.minerMaxWinners = {
    enjinV100: new support_1.ConstantType('ElectionProviderMultiPhase.MinerMaxWinners', support_1.sts.number()),
}
