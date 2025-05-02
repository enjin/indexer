'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.maxBlacklisted =
    exports.maxDeposits =
    exports.maxProposals =
    exports.maxVotes =
    exports.cooloffPeriod =
    exports.fastTrackVotingPeriod =
    exports.instantAllowed =
    exports.minimumDeposit =
    exports.voteLockingPeriod =
    exports.votingPeriod =
    exports.launchPeriod =
    exports.enactmentPeriod =
        void 0
var support_1 = require('../support')
exports.enactmentPeriod = {
    /**
     *  The period between a proposal being approved and enacted.
     *
     *  It should generally be a little more than the unstake period to ensure that
     *  voting stakers have an opportunity to remove themselves from the system in the case
     *  where they are on the losing side of a vote.
     */
    matrixEnjinV603: new support_1.ConstantType('Democracy.EnactmentPeriod', support_1.sts.number()),
}
exports.launchPeriod = {
    /**
     *  How often (in blocks) new public referenda are launched.
     */
    matrixEnjinV603: new support_1.ConstantType('Democracy.LaunchPeriod', support_1.sts.number()),
}
exports.votingPeriod = {
    /**
     *  How often (in blocks) to check for new votes.
     */
    matrixEnjinV603: new support_1.ConstantType('Democracy.VotingPeriod', support_1.sts.number()),
}
exports.voteLockingPeriod = {
    /**
     *  The minimum period of vote locking.
     *
     *  It should be no shorter than enactment period to ensure that in the case of an approval,
     *  those successful voters are locked into the consequences that their votes entail.
     */
    matrixEnjinV603: new support_1.ConstantType('Democracy.VoteLockingPeriod', support_1.sts.number()),
}
exports.minimumDeposit = {
    /**
     *  The minimum amount to be used as a deposit for a public referendum proposal.
     */
    matrixEnjinV603: new support_1.ConstantType('Democracy.MinimumDeposit', support_1.sts.bigint()),
}
exports.instantAllowed = {
    /**
     *  Indicator for whether an emergency origin is even allowed to happen. Some chains may
     *  want to set this permanently to `false`, others may want to condition it on things such
     *  as an upgrade having happened recently.
     */
    matrixEnjinV603: new support_1.ConstantType('Democracy.InstantAllowed', support_1.sts.boolean()),
}
exports.fastTrackVotingPeriod = {
    /**
     *  Minimum voting period allowed for a fast-track referendum.
     */
    matrixEnjinV603: new support_1.ConstantType('Democracy.FastTrackVotingPeriod', support_1.sts.number()),
}
exports.cooloffPeriod = {
    /**
     *  Period in blocks where an external proposal may not be re-submitted after being vetoed.
     */
    matrixEnjinV603: new support_1.ConstantType('Democracy.CooloffPeriod', support_1.sts.number()),
}
exports.maxVotes = {
    /**
     *  The maximum number of votes for an account.
     *
     *  Also used to compute weight, an overly big value can
     *  lead to extrinsic with very big weight: see `delegate` for instance.
     */
    matrixEnjinV603: new support_1.ConstantType('Democracy.MaxVotes', support_1.sts.number()),
}
exports.maxProposals = {
    /**
     *  The maximum number of public proposals that can exist at any time.
     */
    matrixEnjinV603: new support_1.ConstantType('Democracy.MaxProposals', support_1.sts.number()),
}
exports.maxDeposits = {
    /**
     *  The maximum number of deposits a public proposal may have at any time.
     */
    matrixEnjinV603: new support_1.ConstantType('Democracy.MaxDeposits', support_1.sts.number()),
}
exports.maxBlacklisted = {
    /**
     *  The maximum number of items which can be blacklisted.
     */
    matrixEnjinV603: new support_1.ConstantType('Democracy.MaxBlacklisted', support_1.sts.number()),
}
