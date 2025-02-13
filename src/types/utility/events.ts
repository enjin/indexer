import { sts, Block, Bytes, Option, Result, EventType, RuntimeCtx } from '../support'
import * as enjinV100 from '../enjinV100'
import * as v100 from '../v100'
import * as enjinV101 from '../enjinV101'
import * as v104 from '../v104'
import * as v105 from '../v105'
import * as matrixV500 from '../matrixV500'
import * as matrixV602 from '../matrixV602'
import * as matrixEnjinV603 from '../matrixEnjinV603'
import * as matrixV604 from '../matrixV604'

export const batchInterrupted = {
    name: 'Utility.BatchInterrupted',
    /**
     * Batch of dispatches did not complete fully. Index of first failing dispatch given, as
     * well as the error.
     */
    matrixEnjinV603: new EventType(
        'Utility.BatchInterrupted',
        sts.struct({
            index: sts.number(),
            error: matrixEnjinV603.DispatchError,
        })
    ),
    /**
     * Batch of dispatches did not complete fully. Index of first failing dispatch given, as
     * well as the error.
     */
    matrixV500: new EventType(
        'Utility.BatchInterrupted',
        sts.struct({
            index: sts.number(),
            error: matrixV500.DispatchError,
        })
    ),
    /**
     * Batch of dispatches did not complete fully. Index of first failing dispatch given, as
     * well as the error.
     */
    matrixV602: new EventType(
        'Utility.BatchInterrupted',
        sts.struct({
            index: sts.number(),
            error: matrixV602.DispatchError,
        })
    ),
    /**
     * Batch of dispatches did not complete fully. Index of first failing dispatch given, as
     * well as the error.
     */
    matrixV604: new EventType(
        'Utility.BatchInterrupted',
        sts.struct({
            index: sts.number(),
            error: matrixV604.DispatchError,
        })
    ),
    /**
     * Batch of dispatches did not complete fully. Index of first failing dispatch given, as
     * well as the error.
     */
    enjinV100: new EventType(
        'Utility.BatchInterrupted',
        sts.struct({
            index: sts.number(),
            error: enjinV100.DispatchError,
        })
    ),
    /**
     * Batch of dispatches did not complete fully. Index of first failing dispatch given, as
     * well as the error.
     */
    enjinV101: new EventType(
        'Utility.BatchInterrupted',
        sts.struct({
            index: sts.number(),
            error: enjinV101.DispatchError,
        })
    ),
    /**
     * Batch of dispatches did not complete fully. Index of first failing dispatch given, as
     * well as the error.
     */
    v100: new EventType(
        'Utility.BatchInterrupted',
        sts.struct({
            index: sts.number(),
            error: v100.DispatchError,
        })
    ),
    /**
     * Batch of dispatches did not complete fully. Index of first failing dispatch given, as
     * well as the error.
     */
    v104: new EventType(
        'Utility.BatchInterrupted',
        sts.struct({
            index: sts.number(),
            error: v104.DispatchError,
        })
    ),
    /**
     * Batch of dispatches did not complete fully. Index of first failing dispatch given, as
     * well as the error.
     */
    v105: new EventType(
        'Utility.BatchInterrupted',
        sts.struct({
            index: sts.number(),
            error: v105.DispatchError,
        })
    ),
}

export const batchCompleted = {
    name: 'Utility.BatchCompleted',
    /**
     * Batch of dispatches completed fully with no error.
     */
    matrixEnjinV603: new EventType('Utility.BatchCompleted', sts.unit()),
}

export const batchCompletedWithErrors = {
    name: 'Utility.BatchCompletedWithErrors',
    /**
     * Batch of dispatches completed but has errors.
     */
    matrixEnjinV603: new EventType('Utility.BatchCompletedWithErrors', sts.unit()),
}

export const itemCompleted = {
    name: 'Utility.ItemCompleted',
    /**
     * A single item within a Batch of dispatches has completed with no error.
     */
    matrixEnjinV603: new EventType('Utility.ItemCompleted', sts.unit()),
}

export const itemFailed = {
    name: 'Utility.ItemFailed',
    /**
     * A single item within a Batch of dispatches has completed with error.
     */
    matrixEnjinV603: new EventType(
        'Utility.ItemFailed',
        sts.struct({
            error: matrixEnjinV603.DispatchError,
        })
    ),
    /**
     * A single item within a Batch of dispatches has completed with error.
     */
    matrixV500: new EventType(
        'Utility.ItemFailed',
        sts.struct({
            error: matrixV500.DispatchError,
        })
    ),
    /**
     * A single item within a Batch of dispatches has completed with error.
     */
    matrixV602: new EventType(
        'Utility.ItemFailed',
        sts.struct({
            error: matrixV602.DispatchError,
        })
    ),
    /**
     * A single item within a Batch of dispatches has completed with error.
     */
    matrixV604: new EventType(
        'Utility.ItemFailed',
        sts.struct({
            error: matrixV604.DispatchError,
        })
    ),
    /**
     * A single item within a Batch of dispatches has completed with error.
     */
    enjinV100: new EventType(
        'Utility.ItemFailed',
        sts.struct({
            error: enjinV100.DispatchError,
        })
    ),
    /**
     * A single item within a Batch of dispatches has completed with error.
     */
    enjinV101: new EventType(
        'Utility.ItemFailed',
        sts.struct({
            error: enjinV101.DispatchError,
        })
    ),
    /**
     * A single item within a Batch of dispatches has completed with error.
     */
    v100: new EventType(
        'Utility.ItemFailed',
        sts.struct({
            error: v100.DispatchError,
        })
    ),
    /**
     * A single item within a Batch of dispatches has completed with error.
     */
    v104: new EventType(
        'Utility.ItemFailed',
        sts.struct({
            error: v104.DispatchError,
        })
    ),
    /**
     * A single item within a Batch of dispatches has completed with error.
     */
    v105: new EventType(
        'Utility.ItemFailed',
        sts.struct({
            error: v105.DispatchError,
        })
    ),
}

export const dispatchedAs = {
    name: 'Utility.DispatchedAs',
    /**
     * A call was dispatched.
     */
    matrixEnjinV603: new EventType(
        'Utility.DispatchedAs',
        sts.struct({
            result: sts.result(
                () => sts.unit(),
                () => matrixEnjinV603.DispatchError
            ),
        })
    ),
    /**
     * A call was dispatched.
     */
    matrixV500: new EventType(
        'Utility.DispatchedAs',
        sts.struct({
            result: sts.result(
                () => sts.unit(),
                () => matrixV500.DispatchError
            ),
        })
    ),
    /**
     * A call was dispatched.
     */
    matrixV602: new EventType(
        'Utility.DispatchedAs',
        sts.struct({
            result: sts.result(
                () => sts.unit(),
                () => matrixV602.DispatchError
            ),
        })
    ),
    /**
     * A call was dispatched.
     */
    matrixV604: new EventType(
        'Utility.DispatchedAs',
        sts.struct({
            result: sts.result(
                () => sts.unit(),
                () => matrixV604.DispatchError
            ),
        })
    ),
    /**
     * A call was dispatched.
     */
    enjinV100: new EventType(
        'Utility.DispatchedAs',
        sts.struct({
            result: sts.result(
                () => sts.unit(),
                () => enjinV100.DispatchError
            ),
        })
    ),
    /**
     * A call was dispatched.
     */
    enjinV101: new EventType(
        'Utility.DispatchedAs',
        sts.struct({
            result: sts.result(
                () => sts.unit(),
                () => enjinV101.DispatchError
            ),
        })
    ),
    /**
     * A call was dispatched.
     */
    v100: new EventType(
        'Utility.DispatchedAs',
        sts.struct({
            result: sts.result(
                () => sts.unit(),
                () => v100.DispatchError
            ),
        })
    ),
    /**
     * A call was dispatched.
     */
    v104: new EventType(
        'Utility.DispatchedAs',
        sts.struct({
            result: sts.result(
                () => sts.unit(),
                () => v104.DispatchError
            ),
        })
    ),
    /**
     * A call was dispatched.
     */
    v105: new EventType(
        'Utility.DispatchedAs',
        sts.struct({
            result: sts.result(
                () => sts.unit(),
                () => v105.DispatchError
            ),
        })
    ),
}
