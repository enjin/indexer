'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.maxTemporarySlotsChanged =
    exports.maxPermanentSlotsChanged =
    exports.temporarySlotAssigned =
    exports.permanentSlotAssigned =
        void 0
var support_1 = require('../support')
var enjinV100 = require('../enjinV100')
exports.permanentSlotAssigned = {
    name: 'AssignedSlots.PermanentSlotAssigned',
    /**
     * A para was assigned a permanent parachain slot
     */
    enjinV100: new support_1.EventType('AssignedSlots.PermanentSlotAssigned', enjinV100.Id),
}
exports.temporarySlotAssigned = {
    name: 'AssignedSlots.TemporarySlotAssigned',
    /**
     * A para was assigned a temporary parachain slot
     */
    enjinV100: new support_1.EventType('AssignedSlots.TemporarySlotAssigned', enjinV100.Id),
}
exports.maxPermanentSlotsChanged = {
    name: 'AssignedSlots.MaxPermanentSlotsChanged',
    /**
     * The maximum number of permanent slots has been changed
     */
    enjinV1032: new support_1.EventType(
        'AssignedSlots.MaxPermanentSlotsChanged',
        support_1.sts.struct({
            slots: support_1.sts.number(),
        })
    ),
}
exports.maxTemporarySlotsChanged = {
    name: 'AssignedSlots.MaxTemporarySlotsChanged',
    /**
     * The maximum number of temporary slots has been changed
     */
    enjinV1032: new support_1.EventType(
        'AssignedSlots.MaxTemporarySlotsChanged',
        support_1.sts.struct({
            slots: support_1.sts.number(),
        })
    ),
}
