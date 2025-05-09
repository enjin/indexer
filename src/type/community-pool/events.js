'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.spendProcessed =
    exports.paymentFailed =
    exports.paid =
    exports.assetSpendVoided =
    exports.assetSpendApproved =
    exports.updatedInactive =
    exports.spendApproved =
    exports.deposit =
    exports.rollover =
    exports.burnt =
    exports.rejected =
    exports.awarded =
    exports.spending =
    exports.proposed =
        void 0
var support_1 = require('../support')
var matrixEnjinV603 = require('../matrixEnjinV603')
var matrixEnjinV1012 = require('../matrixEnjinV1012')
exports.proposed = {
    name: 'CommunityPool.Proposed',
    /**
     * New proposal.
     */
    matrixEnjinV603: new support_1.EventType(
        'CommunityPool.Proposed',
        support_1.sts.struct({
            proposalIndex: support_1.sts.number(),
        })
    ),
}
exports.spending = {
    name: 'CommunityPool.Spending',
    /**
     * We have ended a spend period and will now allocate funds.
     */
    matrixEnjinV603: new support_1.EventType(
        'CommunityPool.Spending',
        support_1.sts.struct({
            budgetRemaining: support_1.sts.bigint(),
        })
    ),
}
exports.awarded = {
    name: 'CommunityPool.Awarded',
    /**
     * Some funds have been allocated.
     */
    matrixEnjinV603: new support_1.EventType(
        'CommunityPool.Awarded',
        support_1.sts.struct({
            proposalIndex: support_1.sts.number(),
            award: support_1.sts.bigint(),
            account: matrixEnjinV603.AccountId32,
        })
    ),
}
exports.rejected = {
    name: 'CommunityPool.Rejected',
    /**
     * A proposal was rejected; funds were slashed.
     */
    matrixEnjinV603: new support_1.EventType(
        'CommunityPool.Rejected',
        support_1.sts.struct({
            proposalIndex: support_1.sts.number(),
            slashed: support_1.sts.bigint(),
        })
    ),
}
exports.burnt = {
    name: 'CommunityPool.Burnt',
    /**
     * Some of our funds have been burnt.
     */
    matrixEnjinV603: new support_1.EventType(
        'CommunityPool.Burnt',
        support_1.sts.struct({
            burntFunds: support_1.sts.bigint(),
        })
    ),
}
exports.rollover = {
    name: 'CommunityPool.Rollover',
    /**
     * Spending has finished; this is the amount that rolls over until next spend.
     */
    matrixEnjinV603: new support_1.EventType(
        'CommunityPool.Rollover',
        support_1.sts.struct({
            rolloverBalance: support_1.sts.bigint(),
        })
    ),
}
exports.deposit = {
    name: 'CommunityPool.Deposit',
    /**
     * Some funds have been deposited.
     */
    matrixEnjinV603: new support_1.EventType(
        'CommunityPool.Deposit',
        support_1.sts.struct({
            value: support_1.sts.bigint(),
        })
    ),
}
exports.spendApproved = {
    name: 'CommunityPool.SpendApproved',
    /**
     * A new spend proposal has been approved.
     */
    matrixEnjinV603: new support_1.EventType(
        'CommunityPool.SpendApproved',
        support_1.sts.struct({
            proposalIndex: support_1.sts.number(),
            amount: support_1.sts.bigint(),
            beneficiary: matrixEnjinV603.AccountId32,
        })
    ),
}
exports.updatedInactive = {
    name: 'CommunityPool.UpdatedInactive',
    /**
     * The inactive funds of the pallet have been updated.
     */
    matrixEnjinV603: new support_1.EventType(
        'CommunityPool.UpdatedInactive',
        support_1.sts.struct({
            reactivated: support_1.sts.bigint(),
            deactivated: support_1.sts.bigint(),
        })
    ),
}
exports.assetSpendApproved = {
    name: 'CommunityPool.AssetSpendApproved',
    /**
     * A new asset spend proposal has been approved.
     */
    matrixEnjinV1012: new support_1.EventType(
        'CommunityPool.AssetSpendApproved',
        support_1.sts.struct({
            index: support_1.sts.number(),
            amount: support_1.sts.bigint(),
            beneficiary: matrixEnjinV1012.AccountId32,
            validFrom: support_1.sts.number(),
            expireAt: support_1.sts.number(),
        })
    ),
}
exports.assetSpendVoided = {
    name: 'CommunityPool.AssetSpendVoided',
    /**
     * An approved spend was voided.
     */
    matrixEnjinV1012: new support_1.EventType(
        'CommunityPool.AssetSpendVoided',
        support_1.sts.struct({
            index: support_1.sts.number(),
        })
    ),
}
exports.paid = {
    name: 'CommunityPool.Paid',
    /**
     * A payment happened.
     */
    matrixEnjinV1012: new support_1.EventType(
        'CommunityPool.Paid',
        support_1.sts.struct({
            index: support_1.sts.number(),
        })
    ),
}
exports.paymentFailed = {
    name: 'CommunityPool.PaymentFailed',
    /**
     * A payment failed and can be retried.
     */
    matrixEnjinV1012: new support_1.EventType(
        'CommunityPool.PaymentFailed',
        support_1.sts.struct({
            index: support_1.sts.number(),
        })
    ),
}
exports.spendProcessed = {
    name: 'CommunityPool.SpendProcessed',
    /**
     * A spend was processed and removed from the storage. It might have been successfully
     * paid or it may have expired.
     */
    matrixEnjinV1012: new support_1.EventType(
        'CommunityPool.SpendProcessed',
        support_1.sts.struct({
            index: support_1.sts.number(),
        })
    ),
}
