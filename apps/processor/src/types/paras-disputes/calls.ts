import {sts, Block, Bytes, Option, Result, CallType, RuntimeCtx} from '../support'

export const forceUnfreeze =  {
    name: 'ParasDisputes.force_unfreeze',
    enjinV100: new CallType(
        'ParasDisputes.force_unfreeze',
        sts.unit()
    ),
}
