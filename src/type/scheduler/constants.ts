import { sts, Block, Bytes, Option, Result, ConstantType, RuntimeCtx } from '../support'
import * as matrixEnjinV603 from '../matrixEnjinV603'

export const maximumWeight = {
    /**
     *  The maximum weight that may be scheduled per block for any dispatchables.
     */
    matrixEnjinV603: new ConstantType('Scheduler.MaximumWeight', matrixEnjinV603.Weight),
}

export const maxScheduledPerBlock = {
    /**
     *  The maximum number of scheduled calls in the queue for a single block.
     *
     *  NOTE:
     *  + Dependent pallets' benchmarks might require a higher limit for the setting. Set a
     *  higher limit under `runtime-benchmarks` feature.
     */
    matrixEnjinV603: new ConstantType('Scheduler.MaxScheduledPerBlock', sts.number()),
}
