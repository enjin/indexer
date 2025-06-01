import {sts, Block, Bytes, Option, Result, ConstantType, RuntimeCtx} from '../support'
import * as matrixEnjinV1012 from '../matrixEnjinV1012'

export const selfParaId =  {
    /**
     *  Returns the parachain ID we are running with.
     */
    matrixEnjinV1012: new ConstantType(
        'ParachainSystem.SelfParaId',
        matrixEnjinV1012.Id
    ),
}
