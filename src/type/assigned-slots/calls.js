'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.setMaxTemporarySlots =
    exports.setMaxPermanentSlots =
    exports.unassignParachainSlot =
    exports.assignTempParachainSlot =
    exports.assignPermParachainSlot =
        void 0
var support_1 = require('../support')
var enjinV100 = require('../enjinV100')
exports.assignPermParachainSlot = {
    name: 'AssignedSlots.assign_perm_parachain_slot',
    /**
     * Assign a permanent parachain slot and immediately create a lease for it.
     */
    enjinV100: new support_1.CallType(
        'AssignedSlots.assign_perm_parachain_slot',
        support_1.sts.struct({
            id: enjinV100.Id,
        })
    ),
}
exports.assignTempParachainSlot = {
    name: 'AssignedSlots.assign_temp_parachain_slot',
    /**
     * Assign a temporary parachain slot. The function tries to create a lease for it
     * immediately if `SlotLeasePeriodStart::Current` is specified, and if the number
     * of currently active temporary slots is below `MaxTemporarySlotPerLeasePeriod`.
     */
    enjinV100: new support_1.CallType(
        'AssignedSlots.assign_temp_parachain_slot',
        support_1.sts.struct({
            id: enjinV100.Id,
            leasePeriodStart: enjinV100.SlotLeasePeriodStart,
        })
    ),
}
exports.unassignParachainSlot = {
    name: 'AssignedSlots.unassign_parachain_slot',
    /**
     * Unassign a permanent or temporary parachain slot
     */
    enjinV100: new support_1.CallType(
        'AssignedSlots.unassign_parachain_slot',
        support_1.sts.struct({
            id: enjinV100.Id,
        })
    ),
}
exports.setMaxPermanentSlots = {
    name: 'AssignedSlots.set_max_permanent_slots',
    /**
     * Sets the storage value [`MaxPermanentSlots`].
     */
    enjinV1032: new support_1.CallType(
        'AssignedSlots.set_max_permanent_slots',
        support_1.sts.struct({
            slots: support_1.sts.number(),
        })
    ),
}
exports.setMaxTemporarySlots = {
    name: 'AssignedSlots.set_max_temporary_slots',
    /**
     * Sets the storage value [`MaxTemporarySlots`].
     */
    enjinV1032: new support_1.CallType(
        'AssignedSlots.set_max_temporary_slots',
        support_1.sts.struct({
            slots: support_1.sts.number(),
        })
    ),
}
