import {sts, Block, Bytes, Option, Result, ConstantType, RuntimeCtx} from '../support'
import * as matrixEnjinV1012 from '../matrixEnjinV1012'
import * as v1050 from '../v1050'

export const heapSize =  {
    /**
     *  The size of the page; this implies the maximum message size which can be sent.
     * 
     *  A good value depends on the expected message sizes, their weights, the weight that is
     *  available for processing them and the maximal needed message size. The maximal message
     *  size is slightly lower than this as defined by [`MaxMessageLenOf`].
     */
    matrixEnjinV1012: new ConstantType(
        'MessageQueue.HeapSize',
        sts.number()
    ),
}

export const maxStale =  {
    /**
     *  The maximum number of stale pages (i.e. of overweight messages) allowed before culling
     *  can happen. Once there are more stale pages than this, then historical pages may be
     *  dropped, even if they contain unprocessed overweight messages.
     */
    matrixEnjinV1012: new ConstantType(
        'MessageQueue.MaxStale',
        sts.number()
    ),
}

export const serviceWeight =  {
    /**
     *  The amount of weight (if any) which should be provided to the message queue for
     *  servicing enqueued items.
     * 
     *  This may be legitimately `None` in the case that you will call
     *  `ServiceQueues::service_queues` manually.
     */
    matrixEnjinV1012: new ConstantType(
        'MessageQueue.ServiceWeight',
        sts.option(() => matrixEnjinV1012.Weight)
    ),
}

export const idleMaxServiceWeight =  {
    /**
     *  The maximum amount of weight (if any) to be used from remaining weight `on_idle` which
     *  should be provided to the message queue for servicing enqueued items `on_idle`.
     *  Useful for parachains to process messages at the same block they are received.
     * 
     *  If `None`, it will not call `ServiceQueues::service_queues` in `on_idle`.
     */
    v1050: new ConstantType(
        'MessageQueue.IdleMaxServiceWeight',
        sts.option(() => v1050.Weight)
    ),
}
