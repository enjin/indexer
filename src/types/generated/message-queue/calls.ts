import {sts, Block, Bytes, Option, Result, CallType, RuntimeCtx} from '../support'
import * as v1010 from '../v1010'

export const reapPage =  {
    name: 'MessageQueue.reap_page',
    /**
     * Remove a page which has no more messages remaining to be processed or is stale.
     */
    v1010: new CallType(
        'MessageQueue.reap_page',
        sts.struct({
            messageOrigin: v1010.AggregateMessageOrigin,
            pageIndex: sts.number(),
        })
    ),
}

export const executeOverweight =  {
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
    v1010: new CallType(
        'MessageQueue.execute_overweight',
        sts.struct({
            messageOrigin: v1010.AggregateMessageOrigin,
            page: sts.number(),
            index: sts.number(),
            weightLimit: v1010.Weight,
        })
    ),
}
