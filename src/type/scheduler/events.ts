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

export const scheduled = {
    name: 'Scheduler.Scheduled',
    /**
     * Scheduled some task.
     */
    matrixEnjinV603: new EventType(
        'Scheduler.Scheduled',
        sts.struct({
            when: sts.number(),
            index: sts.number(),
        })
    ),
}

export const canceled = {
    name: 'Scheduler.Canceled',
    /**
     * Canceled some task.
     */
    matrixEnjinV603: new EventType(
        'Scheduler.Canceled',
        sts.struct({
            when: sts.number(),
            index: sts.number(),
        })
    ),
}

export const dispatched = {
    name: 'Scheduler.Dispatched',
    /**
     * Dispatched some task.
     */
    matrixEnjinV603: new EventType(
        'Scheduler.Dispatched',
        sts.struct({
            task: sts.tuple(() => [sts.number(), sts.number()]),
            id: sts.option(() => sts.bytes()),
            result: sts.result(
                () => sts.unit(),
                () => matrixEnjinV603.DispatchError
            ),
        })
    ),
    /**
     * Dispatched some task.
     */
    matrixV500: new EventType(
        'Scheduler.Dispatched',
        sts.struct({
            task: sts.tuple(() => [sts.number(), sts.number()]),
            id: sts.option(() => sts.bytes()),
            result: sts.result(
                () => sts.unit(),
                () => matrixV500.DispatchError
            ),
        })
    ),
    /**
     * Dispatched some task.
     */
    matrixV602: new EventType(
        'Scheduler.Dispatched',
        sts.struct({
            task: sts.tuple(() => [sts.number(), sts.number()]),
            id: sts.option(() => sts.bytes()),
            result: sts.result(
                () => sts.unit(),
                () => matrixV602.DispatchError
            ),
        })
    ),
    /**
     * Dispatched some task.
     */
    matrixV604: new EventType(
        'Scheduler.Dispatched',
        sts.struct({
            task: sts.tuple(() => [sts.number(), sts.number()]),
            id: sts.option(() => sts.bytes()),
            result: sts.result(
                () => sts.unit(),
                () => matrixV604.DispatchError
            ),
        })
    ),
    /**
     * Dispatched some task.
     */
    enjinV100: new EventType(
        'Scheduler.Dispatched',
        sts.struct({
            task: sts.tuple(() => [sts.number(), sts.number()]),
            id: sts.option(() => sts.bytes()),
            result: sts.result(
                () => sts.unit(),
                () => enjinV100.DispatchError
            ),
        })
    ),
    /**
     * Dispatched some task.
     */
    enjinV101: new EventType(
        'Scheduler.Dispatched',
        sts.struct({
            task: sts.tuple(() => [sts.number(), sts.number()]),
            id: sts.option(() => sts.bytes()),
            result: sts.result(
                () => sts.unit(),
                () => enjinV101.DispatchError
            ),
        })
    ),
    /**
     * Dispatched some task.
     */
    v100: new EventType(
        'Scheduler.Dispatched',
        sts.struct({
            task: sts.tuple(() => [sts.number(), sts.number()]),
            id: sts.option(() => sts.bytes()),
            result: sts.result(
                () => sts.unit(),
                () => v100.DispatchError
            ),
        })
    ),
    /**
     * Dispatched some task.
     */
    v104: new EventType(
        'Scheduler.Dispatched',
        sts.struct({
            task: sts.tuple(() => [sts.number(), sts.number()]),
            id: sts.option(() => sts.bytes()),
            result: sts.result(
                () => sts.unit(),
                () => v104.DispatchError
            ),
        })
    ),
    /**
     * Dispatched some task.
     */
    v105: new EventType(
        'Scheduler.Dispatched',
        sts.struct({
            task: sts.tuple(() => [sts.number(), sts.number()]),
            id: sts.option(() => sts.bytes()),
            result: sts.result(
                () => sts.unit(),
                () => v105.DispatchError
            ),
        })
    ),
}

export const callUnavailable = {
    name: 'Scheduler.CallUnavailable',
    /**
     * The call for the provided hash was not found so the task has been aborted.
     */
    matrixEnjinV603: new EventType(
        'Scheduler.CallUnavailable',
        sts.struct({
            task: sts.tuple(() => [sts.number(), sts.number()]),
            id: sts.option(() => sts.bytes()),
        })
    ),
}

export const periodicFailed = {
    name: 'Scheduler.PeriodicFailed',
    /**
     * The given task was unable to be renewed since the agenda is full at that block.
     */
    matrixEnjinV603: new EventType(
        'Scheduler.PeriodicFailed',
        sts.struct({
            task: sts.tuple(() => [sts.number(), sts.number()]),
            id: sts.option(() => sts.bytes()),
        })
    ),
}

export const permanentlyOverweight = {
    name: 'Scheduler.PermanentlyOverweight',
    /**
     * The given task can never be executed since it is overweight.
     */
    matrixEnjinV603: new EventType(
        'Scheduler.PermanentlyOverweight',
        sts.struct({
            task: sts.tuple(() => [sts.number(), sts.number()]),
            id: sts.option(() => sts.bytes()),
        })
    ),
}

export const retrySet = {
    name: 'Scheduler.RetrySet',
    /**
     * Set a retry configuration for some task.
     */
    matrixEnjinV1012: new EventType(
        'Scheduler.RetrySet',
        sts.struct({
            task: sts.tuple(() => [sts.number(), sts.number()]),
            id: sts.option(() => sts.bytes()),
            period: sts.number(),
            retries: sts.number(),
        })
    ),
}

export const retryCancelled = {
    name: 'Scheduler.RetryCancelled',
    /**
     * Cancel a retry configuration for some task.
     */
    matrixEnjinV1012: new EventType(
        'Scheduler.RetryCancelled',
        sts.struct({
            task: sts.tuple(() => [sts.number(), sts.number()]),
            id: sts.option(() => sts.bytes()),
        })
    ),
}

export const retryFailed = {
    name: 'Scheduler.RetryFailed',
    /**
     * The given task was unable to be retried since the agenda is full at that block or there
     * was not enough weight to reschedule it.
     */
    matrixEnjinV1012: new EventType(
        'Scheduler.RetryFailed',
        sts.struct({
            task: sts.tuple(() => [sts.number(), sts.number()]),
            id: sts.option(() => sts.bytes()),
        })
    ),
}
