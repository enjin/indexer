import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as matrixV500 from '../matrixV500'
import * as matrixV602 from '../matrixV602'

export const batchDispatched =  {
    name: 'EfinityUtility.BatchDispatched',
    /**
     * Batch of calls dispatched without errors.
     */
    matrixV500: new EventType(
        'EfinityUtility.BatchDispatched',
        sts.unit()
    ),
}

export const batchPartiallyDispatched =  {
    name: 'EfinityUtility.BatchPartiallyDispatched',
    /**
     * Batch of calls dispatched, but some calls resulted in error.
     * Indexes and errors of failing dispatch calls are provided.
     */
    matrixV500: new EventType(
        'EfinityUtility.BatchPartiallyDispatched',
        sts.array(() => sts.tuple(() => [sts.number(), matrixV500.DispatchError]))
    ),
    /**
     * Batch of calls dispatched, but some calls resulted in error.
     * Indexes and errors of failing dispatch calls are provided.
     */
    matrixV602: new EventType(
        'EfinityUtility.BatchPartiallyDispatched',
        sts.array(() => sts.tuple(() => [sts.number(), matrixV602.DispatchError]))
    ),
}

export const batchFailed =  {
    name: 'EfinityUtility.BatchFailed',
    /**
     * Batch of calls did not disptach completely.
     * Index and error of the failing dispatch call is provided.
     */
    matrixV500: new EventType(
        'EfinityUtility.BatchFailed',
        sts.struct({
            index: sts.number(),
            error: matrixV500.DispatchError,
        })
    ),
    /**
     * Batch of calls did not disptach completely.
     * Index and error of the failing dispatch call is provided.
     */
    matrixV602: new EventType(
        'EfinityUtility.BatchFailed',
        sts.struct({
            index: sts.number(),
            error: matrixV602.DispatchError,
        })
    ),
}
