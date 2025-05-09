'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.leaseOffset = exports.leasePeriod = void 0
var support_1 = require('../support')
exports.leasePeriod = {
    /**
     *  The number of blocks over which a single period lasts.
     */
    enjinV100: new support_1.ConstantType('Slots.LeasePeriod', support_1.sts.number()),
}
exports.leaseOffset = {
    /**
     *  The number of blocks to offset each lease period by.
     */
    enjinV100: new support_1.ConstantType('Slots.LeaseOffset', support_1.sts.number()),
}
