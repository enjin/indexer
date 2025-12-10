import { sts, Block, Bytes, Option, Result, EventType, RuntimeCtx } from '../support'
import * as matrixEnjinV603 from '../matrixEnjinV603'
import * as matrixV604 from '../matrixV604'
import * as matrixV1030 from '../matrixV1030'
import * as matrixEnjinV1031 from '../matrixEnjinV1031'

export const batchDispatched = {
    name: 'MatrixUtility.BatchDispatched',
    /**
     * Batch of calls dispatched without errors.
     */
    matrixEnjinV603: new EventType('MatrixUtility.BatchDispatched', sts.unit()),
}

export const batchPartiallyDispatched = {
    name: 'MatrixUtility.BatchPartiallyDispatched',
    /**
     * Batch of calls dispatched, but some calls resulted in error.
     * Indexes and errors of failing dispatch calls are provided.
     */
    matrixEnjinV603: new EventType(
        'MatrixUtility.BatchPartiallyDispatched',
        sts.array(() => sts.tuple(() => [sts.number(), matrixEnjinV603.DispatchError]))
    ),
    /**
     * Batch of calls dispatched, but some calls resulted in error.
     * Indexes and errors of failing dispatch calls are provided.
     */
    matrixEnjinV1031: new EventType(
        'MatrixUtility.BatchPartiallyDispatched',
        sts.array(() => sts.tuple(() => [sts.number(), matrixEnjinV1031.DispatchError]))
    ),
    /**
     * Batch of calls dispatched, but some calls resulted in error.
     * Indexes and errors of failing dispatch calls are provided.
     */
    matrixV604: new EventType(
        'MatrixUtility.BatchPartiallyDispatched',
        sts.array(() => sts.tuple(() => [sts.number(), matrixV604.DispatchError]))
    ),
    /**
     * Batch of calls dispatched, but some calls resulted in error.
     * Indexes and errors of failing dispatch calls are provided.
     */
    matrixV1030: new EventType(
        'MatrixUtility.BatchPartiallyDispatched',
        sts.array(() => sts.tuple(() => [sts.number(), matrixV1030.DispatchError]))
    ),
}

export const batchFailed = {
    name: 'MatrixUtility.BatchFailed',
    /**
     * Batch of calls did not disptach completely.
     * Index and error of the failing dispatch call is provided.
     */
    matrixEnjinV603: new EventType(
        'MatrixUtility.BatchFailed',
        sts.struct({
            index: sts.number(),
            error: matrixEnjinV603.DispatchError,
        })
    ),
    /**
     * Batch of calls did not disptach completely.
     * Index and error of the failing dispatch call is provided.
     */
    matrixEnjinV1031: new EventType(
        'MatrixUtility.BatchFailed',
        sts.struct({
            index: sts.number(),
            error: matrixEnjinV1031.DispatchError,
        })
    ),
    /**
     * Batch of calls did not disptach completely.
     * Index and error of the failing dispatch call is provided.
     */
    matrixV604: new EventType(
        'MatrixUtility.BatchFailed',
        sts.struct({
            index: sts.number(),
            error: matrixV604.DispatchError,
        })
    ),
    /**
     * Batch of calls did not disptach completely.
     * Index and error of the failing dispatch call is provided.
     */
    matrixV1030: new EventType(
        'MatrixUtility.BatchFailed',
        sts.struct({
            index: sts.number(),
            error: matrixV1030.DispatchError,
        })
    ),
}
