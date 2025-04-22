import { sts, Block, Bytes, Option, Result, ConstantType, RuntimeCtx } from '../support'

export const maxNameLength = {
    /**
     *  Max number of characters in pallet or extrinsic name.
     */
    matrixEnjinV603: new ConstantType('ExtrinsicPause.MaxNameLength', sts.number()),
}
