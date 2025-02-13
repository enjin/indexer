import { sts, Block, Bytes, Option, Result, ConstantType, RuntimeCtx } from '../support'

export const unsignedPriority = {
    enjinV100: new ConstantType('Paras.UnsignedPriority', sts.bigint()),
}
