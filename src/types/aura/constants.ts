import {sts, Block, Bytes, Option, Result, ConstantType, RuntimeCtx} from '../support'

export const slotDuration =  {
    /**
     *  The slot duration Aura should run with, expressed in milliseconds.
     *  The effective value of this type should not change while the chain is running.
     * 
     *  For backwards compatibility either use [`MinimumPeriodTimesTwo`] or a const.
     */
    matrixV1020: new ConstantType(
        'Aura.SlotDuration',
        sts.bigint()
    ),
}
