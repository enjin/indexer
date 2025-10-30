import { sts, Block, Bytes, Option, Result, ConstantType, RuntimeCtx } from '../support'

export const decimals = {
    /**
     *  The decimals of the native currency
     */
    matrixV1030: new ConstantType('TokenGateway.Decimals', sts.number()),
}
