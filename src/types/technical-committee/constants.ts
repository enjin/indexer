import {sts, Block, Bytes, Option, Result, ConstantType, RuntimeCtx} from '../support'
import * as matrixEnjinV603 from '../matrixEnjinV603'

export const maxProposalWeight =  {
    /**
     *  The maximum weight of a dispatch call that can be proposed and executed.
     */
    matrixEnjinV603: new ConstantType(
        'TechnicalCommittee.MaxProposalWeight',
        matrixEnjinV603.Weight
    ),
}
