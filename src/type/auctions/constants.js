'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.leasePeriodsPerSlot = exports.slotRangeCount = exports.sampleLength = exports.endingPeriod = void 0
var support_1 = require('../support')
exports.endingPeriod = {
    /**
     *  The number of blocks over which an auction may be retroactively ended.
     */
    enjinV100: new support_1.ConstantType('Auctions.EndingPeriod', support_1.sts.number()),
}
exports.sampleLength = {
    /**
     *  The length of each sample to take during the ending period.
     *
     *  `EndingPeriod` / `SampleLength` = Total # of Samples
     */
    enjinV100: new support_1.ConstantType('Auctions.SampleLength', support_1.sts.number()),
}
exports.slotRangeCount = {
    enjinV100: new support_1.ConstantType('Auctions.SlotRangeCount', support_1.sts.number()),
}
exports.leasePeriodsPerSlot = {
    enjinV100: new support_1.ConstantType('Auctions.LeasePeriodsPerSlot', support_1.sts.number()),
}
