import {sts, Block, Bytes, Option, Result, ConstantType, RuntimeCtx} from '../support'

export const unsignedPriority =  {
    /**
     *  A configuration for base priority of unsigned transactions.
     * 
     *  This is exposed so that it can be tuned for particular runtime, when
     *  multiple pallets send unsigned transactions.
     */
    enjinV100: new ConstantType(
        'ImOnline.UnsignedPriority',
        sts.bigint()
    ),
}
