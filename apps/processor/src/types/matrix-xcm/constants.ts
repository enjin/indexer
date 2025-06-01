import {sts, Block, Bytes, Option, Result, ConstantType, RuntimeCtx} from '../support'
import * as matrixEnjinV603 from '../matrixEnjinV603'

export const nativeCurrencyId =  {
    /**
     *  ID of the native currency of the chain (EFI).
     */
    matrixEnjinV603: new ConstantType(
        'MatrixXcm.NativeCurrencyId',
        matrixEnjinV603.AssetId
    ),
}
