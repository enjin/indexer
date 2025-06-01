import {sts, Block, Bytes, Option, Result, CallType, RuntimeCtx} from '../support'
import * as enjinV100 from '../enjinV100'

export const assignPermParachainSlot =  {
    name: 'AssignedSlots.assign_perm_parachain_slot',
    /**
     * Assign a permanent parachain slot and immediately create a lease for it.
     */
    enjinV100: new CallType(
        'AssignedSlots.assign_perm_parachain_slot',
        sts.struct({
            id: enjinV100.Id,
        })
    ),
}

export const assignTempParachainSlot =  {
    name: 'AssignedSlots.assign_temp_parachain_slot',
    /**
     * Assign a temporary parachain slot. The function tries to create a lease for it
     * immediately if `SlotLeasePeriodStart::Current` is specified, and if the number
     * of currently active temporary slots is below `MaxTemporarySlotPerLeasePeriod`.
     */
    enjinV100: new CallType(
        'AssignedSlots.assign_temp_parachain_slot',
        sts.struct({
            id: enjinV100.Id,
            leasePeriodStart: enjinV100.SlotLeasePeriodStart,
        })
    ),
}

export const unassignParachainSlot =  {
    name: 'AssignedSlots.unassign_parachain_slot',
    /**
     * Unassign a permanent or temporary parachain slot
     */
    enjinV100: new CallType(
        'AssignedSlots.unassign_parachain_slot',
        sts.struct({
            id: enjinV100.Id,
        })
    ),
}

export const setMaxPermanentSlots =  {
    name: 'AssignedSlots.set_max_permanent_slots',
    /**
     * Sets the storage value [`MaxPermanentSlots`].
     */
    enjinV1032: new CallType(
        'AssignedSlots.set_max_permanent_slots',
        sts.struct({
            slots: sts.number(),
        })
    ),
}

export const setMaxTemporarySlots =  {
    name: 'AssignedSlots.set_max_temporary_slots',
    /**
     * Sets the storage value [`MaxTemporarySlots`].
     */
    enjinV1032: new CallType(
        'AssignedSlots.set_max_temporary_slots',
        sts.struct({
            slots: sts.number(),
        })
    ),
}
