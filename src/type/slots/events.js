'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.leased = exports.newLeasePeriod = void 0
var support_1 = require('../support')
var enjinV100 = require('../enjinV100')
exports.newLeasePeriod = {
    name: 'Slots.NewLeasePeriod',
    /**
     * A new `[lease_period]` is beginning.
     */
    enjinV100: new support_1.EventType(
        'Slots.NewLeasePeriod',
        support_1.sts.struct({
            leasePeriod: support_1.sts.number(),
        })
    ),
}
exports.leased = {
    name: 'Slots.Leased',
    /**
     * A para has won the right to a continuous set of lease periods as a parachain.
     * First balance is any extra amount reserved on top of the para's existing deposit.
     * Second balance is the total amount reserved.
     */
    enjinV100: new support_1.EventType(
        'Slots.Leased',
        support_1.sts.struct({
            paraId: enjinV100.Id,
            leaser: enjinV100.AccountId32,
            periodBegin: support_1.sts.number(),
            periodCount: support_1.sts.number(),
            extraReserved: support_1.sts.bigint(),
            totalAmount: support_1.sts.bigint(),
        })
    ),
}
