'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.payoutPeriod =
    exports.maxApprovals =
    exports.palletId =
    exports.burn =
    exports.spendPeriod =
    exports.proposalBondMaximum =
    exports.proposalBondMinimum =
    exports.proposalBond =
        void 0
var support_1 = require('../support')
var matrixEnjinV603 = require('../matrixEnjinV603')
exports.proposalBond = {
    /**
     *  Fraction of a proposal's value that should be bonded in order to place the proposal.
     *  An accepted proposal gets these back. A rejected proposal does not.
     */
    matrixEnjinV603: new support_1.ConstantType('CommunityPool.ProposalBond', matrixEnjinV603.Permill),
}
exports.proposalBondMinimum = {
    /**
     *  Minimum amount of funds that should be placed in a deposit for making a proposal.
     */
    matrixEnjinV603: new support_1.ConstantType('CommunityPool.ProposalBondMinimum', support_1.sts.bigint()),
}
exports.proposalBondMaximum = {
    /**
     *  Maximum amount of funds that should be placed in a deposit for making a proposal.
     */
    matrixEnjinV603: new support_1.ConstantType(
        'CommunityPool.ProposalBondMaximum',
        support_1.sts.option(function () {
            return support_1.sts.bigint()
        })
    ),
}
exports.spendPeriod = {
    /**
     *  Period between successive spends.
     */
    matrixEnjinV603: new support_1.ConstantType('CommunityPool.SpendPeriod', support_1.sts.number()),
}
exports.burn = {
    /**
     *  Percentage of spare funds (if any) that are burnt per spend period.
     */
    matrixEnjinV603: new support_1.ConstantType('CommunityPool.Burn', matrixEnjinV603.Permill),
}
exports.palletId = {
    /**
     *  The treasury's pallet id, used for deriving its sovereign account ID.
     */
    matrixEnjinV603: new support_1.ConstantType('CommunityPool.PalletId', matrixEnjinV603.PalletId),
}
exports.maxApprovals = {
    /**
     *  The maximum number of approvals that can wait in the spending queue.
     *
     *  NOTE: This parameter is also used within the Bounties Pallet extension if enabled.
     */
    matrixEnjinV603: new support_1.ConstantType('CommunityPool.MaxApprovals', support_1.sts.number()),
}
exports.payoutPeriod = {
    /**
     *  The period during which an approved treasury spend has to be claimed.
     */
    matrixEnjinV1012: new support_1.ConstantType('CommunityPool.PayoutPeriod', support_1.sts.number()),
}
