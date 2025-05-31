import {sts, Block, Bytes, Option, Result, ConstantType, RuntimeCtx} from '../support'

export const leasePeriod =  {
    /**
     *  The number of blocks over which a single period lasts.
     */
    enjinV100: new ConstantType(
        'Slots.LeasePeriod',
        sts.number()
    ),
}

export const leaseOffset =  {
    /**
     *  The number of blocks to offset each lease period by.
     */
    enjinV100: new ConstantType(
        'Slots.LeaseOffset',
        sts.number()
    ),
}
