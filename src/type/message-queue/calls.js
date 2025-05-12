'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.executeOverweight = exports.reapPage = void 0
var support_1 = require('../support')
var enjinV101 = require('../enjinV101')
var matrixEnjinV1012 = require('../matrixEnjinV1012')
exports.reapPage = {
    name: 'MessageQueue.reap_page',
    /**
     * Remove a page which has no more messages remaining to be processed or is stale.
     */
    matrixEnjinV1012: new support_1.CallType(
        'MessageQueue.reap_page',
        support_1.sts.struct({
            messageOrigin: matrixEnjinV1012.AggregateMessageOrigin,
            pageIndex: support_1.sts.number(),
        })
    ),
    /**
     * Remove a page which has no more messages remaining to be processed or is stale.
     */
    enjinV101: new support_1.CallType(
        'MessageQueue.reap_page',
        support_1.sts.struct({
            messageOrigin: enjinV101.AggregateMessageOrigin,
            pageIndex: support_1.sts.number(),
        })
    ),
}
exports.executeOverweight = {
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
    matrixEnjinV1012: new support_1.CallType(
        'MessageQueue.execute_overweight',
        support_1.sts.struct({
            messageOrigin: matrixEnjinV1012.AggregateMessageOrigin,
            page: support_1.sts.number(),
            index: support_1.sts.number(),
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
    enjinV101: new support_1.CallType(
        'MessageQueue.execute_overweight',
        support_1.sts.struct({
            messageOrigin: enjinV101.AggregateMessageOrigin,
            page: support_1.sts.number(),
            index: support_1.sts.number(),
            weightLimit: enjinV101.Weight,
        })
    ),
}
