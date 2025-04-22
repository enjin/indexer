import { sts, Block, Bytes, Option, Result, ConstantType, RuntimeCtx } from '../support'

export const endingPeriod = {
    /**
     *  The number of blocks over which an auction may be retroactively ended.
     */
    enjinV100: new ConstantType('Auctions.EndingPeriod', sts.number()),
}

export const sampleLength = {
    /**
     *  The length of each sample to take during the ending period.
     *
     *  `EndingPeriod` / `SampleLength` = Total # of Samples
     */
    enjinV100: new ConstantType('Auctions.SampleLength', sts.number()),
}

export const slotRangeCount = {
    enjinV100: new ConstantType('Auctions.SlotRangeCount', sts.number()),
}

export const leasePeriodsPerSlot = {
    enjinV100: new ConstantType('Auctions.LeasePeriodsPerSlot', sts.number()),
}
