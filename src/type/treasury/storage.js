'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.spends =
    exports.spendCount =
    exports.approvals =
    exports.deactivated =
    exports.proposals =
    exports.proposalCount =
        void 0
var support_1 = require('../support')
var enjinV100 = require('../enjinV100')
var enjinV1032 = require('../enjinV1032')
exports.proposalCount = {
    /**
     *  Number of proposals that have been made.
     */
    enjinV100: new support_1.StorageType('Treasury.ProposalCount', 'Default', [], support_1.sts.number()),
}
exports.proposals = {
    /**
     *  Proposals that have been made.
     */
    enjinV100: new support_1.StorageType(
        'Treasury.Proposals',
        'Optional',
        [support_1.sts.number()],
        enjinV100.Proposal
    ),
}
exports.deactivated = {
    /**
     *  The amount which has been reported as inactive to Currency.
     */
    enjinV100: new support_1.StorageType('Treasury.Deactivated', 'Default', [], support_1.sts.bigint()),
}
exports.approvals = {
    /**
     *  Proposal indices that have been approved but not yet awarded.
     */
    enjinV100: new support_1.StorageType(
        'Treasury.Approvals',
        'Default',
        [],
        support_1.sts.array(function () {
            return support_1.sts.number()
        })
    ),
}
exports.spendCount = {
    /**
     *  The count of spends that have been made.
     */
    enjinV1032: new support_1.StorageType('Treasury.SpendCount', 'Default', [], support_1.sts.number()),
}
exports.spends = {
    /**
     *  Spends that have been approved and being processed.
     */
    enjinV1032: new support_1.StorageType(
        'Treasury.Spends',
        'Optional',
        [support_1.sts.number()],
        enjinV1032.SpendStatus
    ),
}
