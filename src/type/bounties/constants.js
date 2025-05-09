'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.maximumReasonLength =
    exports.dataDepositPerByte =
    exports.bountyValueMinimum =
    exports.curatorDepositMin =
    exports.curatorDepositMax =
    exports.curatorDepositMultiplier =
    exports.bountyUpdatePeriod =
    exports.bountyDepositPayoutDelay =
    exports.bountyDepositBase =
        void 0
var support_1 = require('../support')
var matrixEnjinV603 = require('../matrixEnjinV603')
exports.bountyDepositBase = {
    /**
     *  The amount held on deposit for placing a bounty proposal.
     */
    matrixEnjinV603: new support_1.ConstantType('Bounties.BountyDepositBase', support_1.sts.bigint()),
}
exports.bountyDepositPayoutDelay = {
    /**
     *  The delay period for which a bounty beneficiary need to wait before claim the payout.
     */
    matrixEnjinV603: new support_1.ConstantType('Bounties.BountyDepositPayoutDelay', support_1.sts.number()),
}
exports.bountyUpdatePeriod = {
    /**
     *  Bounty duration in blocks.
     */
    matrixEnjinV603: new support_1.ConstantType('Bounties.BountyUpdatePeriod', support_1.sts.number()),
}
exports.curatorDepositMultiplier = {
    /**
     *  The curator deposit is calculated as a percentage of the curator fee.
     *
     *  This deposit has optional upper and lower bounds with `CuratorDepositMax` and
     *  `CuratorDepositMin`.
     */
    matrixEnjinV603: new support_1.ConstantType('Bounties.CuratorDepositMultiplier', matrixEnjinV603.Permill),
}
exports.curatorDepositMax = {
    /**
     *  Maximum amount of funds that should be placed in a deposit for making a proposal.
     */
    matrixEnjinV603: new support_1.ConstantType(
        'Bounties.CuratorDepositMax',
        support_1.sts.option(function () {
            return support_1.sts.bigint()
        })
    ),
}
exports.curatorDepositMin = {
    /**
     *  Minimum amount of funds that should be placed in a deposit for making a proposal.
     */
    matrixEnjinV603: new support_1.ConstantType(
        'Bounties.CuratorDepositMin',
        support_1.sts.option(function () {
            return support_1.sts.bigint()
        })
    ),
}
exports.bountyValueMinimum = {
    /**
     *  Minimum value for a bounty.
     */
    matrixEnjinV603: new support_1.ConstantType('Bounties.BountyValueMinimum', support_1.sts.bigint()),
}
exports.dataDepositPerByte = {
    /**
     *  The amount held on deposit per byte within the tip report reason or bounty description.
     */
    matrixEnjinV603: new support_1.ConstantType('Bounties.DataDepositPerByte', support_1.sts.bigint()),
}
exports.maximumReasonLength = {
    /**
     *  Maximum acceptable reason length.
     *
     *  Benchmarks depend on this value, be sure to update weights file when changing this value
     */
    matrixEnjinV603: new support_1.ConstantType('Bounties.MaximumReasonLength', support_1.sts.number()),
}
