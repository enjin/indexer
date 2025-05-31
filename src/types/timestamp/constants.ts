import {sts, Block, Bytes, Option, Result, ConstantType, RuntimeCtx} from '../support'

export const minimumPeriod =  {
    /**
     *  The minimum period between blocks. Beware that this is different to the *expected*
     *  period that the block production apparatus provides. Your chosen consensus system will
     *  generally work with this to determine a sensible block time. e.g. For Aura, it will be
     *  double this period on default settings.
     */
    matrixEnjinV603: new ConstantType(
        'Timestamp.MinimumPeriod',
        sts.bigint()
    ),
}
