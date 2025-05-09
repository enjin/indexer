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
var enjinV100 = require('../enjinV100')
exports.proposalBond = {
    /**
     *  Fraction of a proposal's value that should be bonded in order to place the proposal.
     *  An accepted proposal gets these back. A rejected proposal does not.
     */
    enjinV100: new support_1.ConstantType('Treasury.ProposalBond', enjinV100.Permill),
}
exports.proposalBondMinimum = {
    /**
     *  Minimum amount of funds that should be placed in a deposit for making a proposal.
     */
    enjinV100: new support_1.ConstantType('Treasury.ProposalBondMinimum', support_1.sts.bigint()),
}
exports.proposalBondMaximum = {
    /**
     *  Maximum amount of funds that should be placed in a deposit for making a proposal.
     */
    enjinV100: new support_1.ConstantType(
        'Treasury.ProposalBondMaximum',
        support_1.sts.option(function () {
            return support_1.sts.bigint()
        })
    ),
}
exports.spendPeriod = {
    /**
     *  Period between successive spends.
     */
    enjinV100: new support_1.ConstantType('Treasury.SpendPeriod', support_1.sts.number()),
}
exports.burn = {
    /**
     *  Percentage of spare funds (if any) that are burnt per spend period.
     */
    enjinV100: new support_1.ConstantType('Treasury.Burn', enjinV100.Permill),
}
exports.palletId = {
    /**
     *  The treasury's pallet id, used for deriving its sovereign account ID.
     */
    enjinV100: new support_1.ConstantType('Treasury.PalletId', enjinV100.PalletId),
}
exports.maxApprovals = {
    /**
     *  The maximum number of approvals that can wait in the spending queue.
     *
     *  NOTE: This parameter is also used within the Bounties Pallet extension if enabled.
     */
    enjinV100: new support_1.ConstantType('Treasury.MaxApprovals', support_1.sts.number()),
}
exports.payoutPeriod = {
    /**
     *  The period during which an approved treasury spend has to be claimed.
     */
    enjinV1032: new support_1.ConstantType('Treasury.PayoutPeriod', support_1.sts.number()),
}
