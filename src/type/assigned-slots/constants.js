'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.maxTemporarySlotPerLeasePeriod =
    exports.maxTemporarySlots =
    exports.maxPermanentSlots =
    exports.temporarySlotLeasePeriodLength =
    exports.permanentSlotLeasePeriodLength =
        void 0
var support_1 = require('../support')
exports.permanentSlotLeasePeriodLength = {
    /**
     *  The number of lease periods a permanent parachain slot lasts.
     */
    enjinV100: new support_1.ConstantType('AssignedSlots.PermanentSlotLeasePeriodLength', support_1.sts.number()),
}
exports.temporarySlotLeasePeriodLength = {
    /**
     *  The number of lease periods a temporary parachain slot lasts.
     */
    enjinV100: new support_1.ConstantType('AssignedSlots.TemporarySlotLeasePeriodLength', support_1.sts.number()),
}
exports.maxPermanentSlots = {
    /**
     *  The max number of permanent slots that can be assigned.
     */
    enjinV100: new support_1.ConstantType('AssignedSlots.MaxPermanentSlots', support_1.sts.number()),
}
exports.maxTemporarySlots = {
    /**
     *  The max number of temporary slots that can be assigned.
     */
    enjinV100: new support_1.ConstantType('AssignedSlots.MaxTemporarySlots', support_1.sts.number()),
}
exports.maxTemporarySlotPerLeasePeriod = {
    /**
     *  The max number of temporary slots to be scheduled per lease periods.
     */
    enjinV100: new support_1.ConstantType('AssignedSlots.MaxTemporarySlotPerLeasePeriod', support_1.sts.number()),
}
