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
var matrixEnjinV603 = require('../matrixEnjinV603')
var matrixEnjinV1012 = require('../matrixEnjinV1012')
exports.proposalCount = {
    /**
     *  Number of proposals that have been made.
     */
    matrixEnjinV603: new support_1.StorageType('CommunityPool.ProposalCount', 'Default', [], support_1.sts.number()),
}
exports.proposals = {
    /**
     *  Proposals that have been made.
     */
    matrixEnjinV603: new support_1.StorageType(
        'CommunityPool.Proposals',
        'Optional',
        [support_1.sts.number()],
        matrixEnjinV603.Proposal
    ),
}
exports.deactivated = {
    /**
     *  The amount which has been reported as inactive to Currency.
     */
    matrixEnjinV603: new support_1.StorageType('CommunityPool.Deactivated', 'Default', [], support_1.sts.bigint()),
}
exports.approvals = {
    /**
     *  Proposal indices that have been approved but not yet awarded.
     */
    matrixEnjinV603: new support_1.StorageType(
        'CommunityPool.Approvals',
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
    matrixEnjinV1012: new support_1.StorageType('CommunityPool.SpendCount', 'Default', [], support_1.sts.number()),
}
exports.spends = {
    /**
     *  Spends that have been approved and being processed.
     */
    matrixEnjinV1012: new support_1.StorageType(
        'CommunityPool.Spends',
        'Optional',
        [support_1.sts.number()],
        matrixEnjinV1012.SpendStatus
    ),
}
