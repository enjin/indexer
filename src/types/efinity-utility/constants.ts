import { sts, Block, Bytes, Option, Result, ConstantType, RuntimeCtx } from '../support'

export const batchedCallsLimit = {
    /**
     *  The limit on the number of batched calls.
     */
    matrixV500: new ConstantType('EfinityUtility.batched_calls_limit', sts.number()),
}
