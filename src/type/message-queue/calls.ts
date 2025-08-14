import { sts, Block, Bytes, Option, Result, CallType, RuntimeCtx } from '../support'
import * as enjinV101 from '../enjinV101'
import * as matrixEnjinV1012 from '../matrixEnjinV1012'
import * as matrixV1030 from '../matrixV1030'
import * as v1060 from '../v1060'

export const reapPage = {
    name: 'MessageQueue.reap_page',
    /**
     * Remove a page which has no more messages remaining to be processed or is stale.
     */
    matrixEnjinV1012: new CallType(
        'MessageQueue.reap_page',
        sts.struct({
            messageOrigin: matrixEnjinV1012.AggregateMessageOrigin,
            pageIndex: sts.number(),
        })
    ),
    /**
     * Remove a page which has no more messages remaining to be processed or is stale.
     */
    enjinV101: new CallType(
        'MessageQueue.reap_page',
        sts.struct({
            messageOrigin: enjinV101.AggregateMessageOrigin,
            pageIndex: sts.number(),
        })
    ),
    /**
     * Remove a page which has no more messages remaining to be processed or is stale.
     */
    matrixV1030: new CallType(
        'MessageQueue.reap_page',
        sts.struct({
            messageOrigin: matrixV1030.AggregateMessageOrigin,
            pageIndex: sts.number(),
        })
    ),
    /**
     * Remove a page which has no more messages remaining to be processed or is stale.
     */
    v1060: new CallType(
        'MessageQueue.reap_page',
        sts.struct({
            messageOrigin: v1060.AggregateMessageOrigin,
            pageIndex: sts.number(),
        })
    ),
}

export const executeOverweight = {
    name: 'MessageQueue.execute_overweight',
    /**
     * Execute an overweight message.
     *
     * Temporary processing errors will be propagated whereas permanent errors are treated
     * as success condition.
     *
     * - `origin`: Must be `Signed`.
     * - `message_origin`: The origin from which the message to be executed arrived.
     * - `page`: The page in the queue in which the message to be executed is sitting.
     * - `index`: The index into the queue of the message to be executed.
     * - `weight_limit`: The maximum amount of weight allowed to be consumed in the execution
     *   of the message.
     *
     * Benchmark complexity considerations: O(index + weight_limit).
     */
    matrixEnjinV1012: new CallType(
        'MessageQueue.execute_overweight',
        sts.struct({
            messageOrigin: matrixEnjinV1012.AggregateMessageOrigin,
            page: sts.number(),
            index: sts.number(),
            weightLimit: matrixEnjinV1012.Weight,
        })
    ),
    /**
     * Execute an overweight message.
     *
     * Temporary processing errors will be propagated whereas permanent errors are treated
     * as success condition.
     *
     * - `origin`: Must be `Signed`.
     * - `message_origin`: The origin from which the message to be executed arrived.
     * - `page`: The page in the queue in which the message to be executed is sitting.
     * - `index`: The index into the queue of the message to be executed.
     * - `weight_limit`: The maximum amount of weight allowed to be consumed in the execution
     *   of the message.
     *
     * Benchmark complexity considerations: O(index + weight_limit).
     */
    enjinV101: new CallType(
        'MessageQueue.execute_overweight',
        sts.struct({
            messageOrigin: enjinV101.AggregateMessageOrigin,
            page: sts.number(),
            index: sts.number(),
            weightLimit: enjinV101.Weight,
        })
    ),
    /**
     * Execute an overweight message.
     *
     * Temporary processing errors will be propagated whereas permanent errors are treated
     * as success condition.
     *
     * - `origin`: Must be `Signed`.
     * - `message_origin`: The origin from which the message to be executed arrived.
     * - `page`: The page in the queue in which the message to be executed is sitting.
     * - `index`: The index into the queue of the message to be executed.
     * - `weight_limit`: The maximum amount of weight allowed to be consumed in the execution
     *   of the message.
     *
     * Benchmark complexity considerations: O(index + weight_limit).
     */
    matrixV1030: new CallType(
        'MessageQueue.execute_overweight',
        sts.struct({
            messageOrigin: matrixV1030.AggregateMessageOrigin,
            page: sts.number(),
            index: sts.number(),
            weightLimit: matrixV1030.Weight,
        })
    ),
    /**
     * Execute an overweight message.
     *
     * Temporary processing errors will be propagated whereas permanent errors are treated
     * as success condition.
     *
     * - `origin`: Must be `Signed`.
     * - `message_origin`: The origin from which the message to be executed arrived.
     * - `page`: The page in the queue in which the message to be executed is sitting.
     * - `index`: The index into the queue of the message to be executed.
     * - `weight_limit`: The maximum amount of weight allowed to be consumed in the execution
     *   of the message.
     *
     * Benchmark complexity considerations: O(index + weight_limit).
     */
    v1060: new CallType(
        'MessageQueue.execute_overweight',
        sts.struct({
            messageOrigin: v1060.AggregateMessageOrigin,
            page: sts.number(),
            index: sts.number(),
            weightLimit: v1060.Weight,
        })
    ),
}
