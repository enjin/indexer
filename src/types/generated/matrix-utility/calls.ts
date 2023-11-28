import {sts, Block, Bytes, Option, Result, CallType, RuntimeCtx} from '../support'
import * as matrixEnjinV603 from '../matrixEnjinV603'

export const batch =  {
    name: 'MatrixUtility.batch',
    /**
     * Dispatch a batch of calls.
     * 
     * May be called from any origin except [`None`].
     * 
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     * 
     * If origin is root then the calls are dispatched without checking origin filter. (This
     * includes bypassing [`frame_system::Config::BaseCallFilter`]).
     * 
     * # Errors
     * 
     * - [`Error::TooManyCalls`]: If the number of calls exceeds the limit.
     */
    matrixEnjinV603: new CallType(
        'MatrixUtility.batch',
        sts.struct({
            calls: sts.array(() => matrixEnjinV603.Call),
            continueOnFailure: sts.boolean(),
        })
    ),
}
