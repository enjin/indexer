'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.maxPermanentSlots =
    exports.maxTemporarySlots =
    exports.activeTemporarySlotCount =
    exports.temporarySlotCount =
    exports.temporarySlots =
    exports.permanentSlotCount =
    exports.permanentSlots =
        void 0
var support_1 = require('../support')
var enjinV100 = require('../enjinV100')
exports.permanentSlots = {
    /**
     *  Assigned permanent slots, with their start lease period, and duration.
     */
    enjinV100: new support_1.StorageType(
        'AssignedSlots.PermanentSlots',
        'Optional',
        [enjinV100.Id],
        support_1.sts.tuple(function () {
            return [support_1.sts.number(), support_1.sts.number()]
        })
    ),
}
exports.permanentSlotCount = {
    /**
     *  Number of assigned (and active) permanent slots.
     */
    enjinV100: new support_1.StorageType('AssignedSlots.PermanentSlotCount', 'Default', [], support_1.sts.number()),
}
exports.temporarySlots = {
    /**
     *  Assigned temporary slots.
     */
    enjinV100: new support_1.StorageType(
        'AssignedSlots.TemporarySlots',
        'Optional',
        [enjinV100.Id],
        enjinV100.ParachainTemporarySlot
    ),
}
exports.temporarySlotCount = {
    /**
     *  Number of assigned temporary slots.
     */
    enjinV100: new support_1.StorageType('AssignedSlots.TemporarySlotCount', 'Default', [], support_1.sts.number()),
}
exports.activeTemporarySlotCount = {
    /**
     *  Number of active temporary slots in current slot lease period.
     */
    enjinV100: new support_1.StorageType(
        'AssignedSlots.ActiveTemporarySlotCount',
        'Default',
        [],
        support_1.sts.number()
    ),
}
exports.maxTemporarySlots = {
    /**
     *   The max number of temporary slots that can be assigned.
     */
    enjinV1032: new support_1.StorageType('AssignedSlots.MaxTemporarySlots', 'Default', [], support_1.sts.number()),
}
exports.maxPermanentSlots = {
    /**
     *  The max number of permanent slots that can be assigned.
     */
    enjinV1032: new support_1.StorageType('AssignedSlots.MaxPermanentSlots', 'Default', [], support_1.sts.number()),
}
