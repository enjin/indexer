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
var enjinV100 = require('../enjinV100')
var enjinV1032 = require('../enjinV1032')
exports.proposed = {
    name: 'Treasury.Proposed',
    /**
     * New proposal.
     */
    enjinV100: new support_1.EventType(
        'Treasury.Proposed',
        support_1.sts.struct({
            proposalIndex: support_1.sts.number(),
        })
    ),
}
exports.spending = {
    name: 'Treasury.Spending',
    /**
     * We have ended a spend period and will now allocate funds.
     */
    enjinV100: new support_1.EventType(
        'Treasury.Spending',
        support_1.sts.struct({
            budgetRemaining: support_1.sts.bigint(),
        })
    ),
}
exports.awarded = {
    name: 'Treasury.Awarded',
    /**
     * Some funds have been allocated.
     */
    enjinV100: new support_1.EventType(
        'Treasury.Awarded',
        support_1.sts.struct({
            proposalIndex: support_1.sts.number(),
            award: support_1.sts.bigint(),
            account: enjinV100.AccountId32,
        })
    ),
}
exports.rejected = {
    name: 'Treasury.Rejected',
    /**
     * A proposal was rejected; funds were slashed.
     */
    enjinV100: new support_1.EventType(
        'Treasury.Rejected',
        support_1.sts.struct({
            proposalIndex: support_1.sts.number(),
            slashed: support_1.sts.bigint(),
        })
    ),
}
exports.burnt = {
    name: 'Treasury.Burnt',
    /**
     * Some of our funds have been burnt.
     */
    enjinV100: new support_1.EventType(
        'Treasury.Burnt',
        support_1.sts.struct({
            burntFunds: support_1.sts.bigint(),
        })
    ),
}
exports.rollover = {
    name: 'Treasury.Rollover',
    /**
     * Spending has finished; this is the amount that rolls over until next spend.
     */
    enjinV100: new support_1.EventType(
        'Treasury.Rollover',
        support_1.sts.struct({
            rolloverBalance: support_1.sts.bigint(),
        })
    ),
}
exports.deposit = {
    name: 'Treasury.Deposit',
    /**
     * Some funds have been deposited.
     */
    enjinV100: new support_1.EventType(
        'Treasury.Deposit',
        support_1.sts.struct({
            value: support_1.sts.bigint(),
        })
    ),
}
exports.spendApproved = {
    name: 'Treasury.SpendApproved',
    /**
     * A new spend proposal has been approved.
     */
    enjinV100: new support_1.EventType(
        'Treasury.SpendApproved',
        support_1.sts.struct({
            proposalIndex: support_1.sts.number(),
            amount: support_1.sts.bigint(),
            beneficiary: enjinV100.AccountId32,
        })
    ),
}
exports.updatedInactive = {
    name: 'Treasury.UpdatedInactive',
    /**
     * The inactive funds of the pallet have been updated.
     */
    enjinV100: new support_1.EventType(
        'Treasury.UpdatedInactive',
        support_1.sts.struct({
            reactivated: support_1.sts.bigint(),
            deactivated: support_1.sts.bigint(),
        })
    ),
}
exports.assetSpendApproved = {
    name: 'Treasury.AssetSpendApproved',
    /**
     * A new asset spend proposal has been approved.
     */
    enjinV1032: new support_1.EventType(
        'Treasury.AssetSpendApproved',
        support_1.sts.struct({
            index: support_1.sts.number(),
            amount: support_1.sts.bigint(),
            beneficiary: enjinV1032.AccountId32,
            validFrom: support_1.sts.number(),
            expireAt: support_1.sts.number(),
        })
    ),
}
exports.assetSpendVoided = {
    name: 'Treasury.AssetSpendVoided',
    /**
     * An approved spend was voided.
     */
    enjinV1032: new support_1.EventType(
        'Treasury.AssetSpendVoided',
        support_1.sts.struct({
            index: support_1.sts.number(),
        })
    ),
}
exports.paid = {
    name: 'Treasury.Paid',
    /**
     * A payment happened.
     */
    enjinV1032: new support_1.EventType(
        'Treasury.Paid',
        support_1.sts.struct({
            index: support_1.sts.number(),
        })
    ),
}
exports.paymentFailed = {
    name: 'Treasury.PaymentFailed',
    /**
     * A payment failed and can be retried.
     */
    enjinV1032: new support_1.EventType(
        'Treasury.PaymentFailed',
        support_1.sts.struct({
            index: support_1.sts.number(),
        })
    ),
}
exports.spendProcessed = {
    name: 'Treasury.SpendProcessed',
    /**
     * A spend was processed and removed from the storage. It might have been successfully
     * paid or it may have expired.
     */
    enjinV1032: new support_1.EventType(
        'Treasury.SpendProcessed',
        support_1.sts.struct({
            index: support_1.sts.number(),
        })
    ),
}
