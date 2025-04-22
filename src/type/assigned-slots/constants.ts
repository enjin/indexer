import { sts, Block, Bytes, Option, Result, ConstantType, RuntimeCtx } from '../support'

export const permanentSlotLeasePeriodLength = {
    /**
     *  The number of lease periods a permanent parachain slot lasts.
     */
    enjinV100: new ConstantType('AssignedSlots.PermanentSlotLeasePeriodLength', sts.number()),
}

export const temporarySlotLeasePeriodLength = {
    /**
     *  The number of lease periods a temporary parachain slot lasts.
     */
    enjinV100: new ConstantType('AssignedSlots.TemporarySlotLeasePeriodLength', sts.number()),
}

export const maxPermanentSlots = {
    /**
     *  The max number of permanent slots that can be assigned.
     */
    enjinV100: new ConstantType('AssignedSlots.MaxPermanentSlots', sts.number()),
}

export const maxTemporarySlots = {
    /**
     *  The max number of temporary slots that can be assigned.
     */
    enjinV100: new ConstantType('AssignedSlots.MaxTemporarySlots', sts.number()),
}

export const maxTemporarySlotPerLeasePeriod = {
    /**
     *  The max number of temporary slots to be scheduled per lease periods.
     */
    enjinV100: new ConstantType('AssignedSlots.MaxTemporarySlotPerLeasePeriod', sts.number()),
}
