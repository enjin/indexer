import { sts, Block, Bytes, Option, Result, ConstantType, RuntimeCtx } from '../support'
import * as matrixV500 from '../matrixV500'

export const nativeCurrencyId = {
    /**
     *  ID of the native currency of the chain (EFI).
     */
    matrixV500: new ConstantType('EfinityXcm.NativeCurrencyId', matrixV500.AssetId),
}
