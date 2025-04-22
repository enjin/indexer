import { sts, Block, Bytes, Option, Result, EventType, RuntimeCtx } from '../support'
import * as enjinV100 from '../enjinV100'

export const permanentSlotAssigned = {
    name: 'AssignedSlots.PermanentSlotAssigned',
    /**
     * A para was assigned a permanent parachain slot
     */
    enjinV100: new EventType('AssignedSlots.PermanentSlotAssigned', enjinV100.Id),
}

export const temporarySlotAssigned = {
    name: 'AssignedSlots.TemporarySlotAssigned',
    /**
     * A para was assigned a temporary parachain slot
     */
    enjinV100: new EventType('AssignedSlots.TemporarySlotAssigned', enjinV100.Id),
}

export const maxPermanentSlotsChanged = {
    name: 'AssignedSlots.MaxPermanentSlotsChanged',
    /**
     * The maximum number of permanent slots has been changed
     */
    enjinV1032: new EventType(
        'AssignedSlots.MaxPermanentSlotsChanged',
        sts.struct({
            slots: sts.number(),
        })
    ),
}

export const maxTemporarySlotsChanged = {
    name: 'AssignedSlots.MaxTemporarySlotsChanged',
    /**
     * The maximum number of temporary slots has been changed
     */
    enjinV1032: new EventType(
        'AssignedSlots.MaxTemporarySlotsChanged',
        sts.struct({
            slots: sts.number(),
        })
    ),
}
