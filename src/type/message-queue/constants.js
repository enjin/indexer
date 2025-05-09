'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.idleMaxServiceWeight = exports.serviceWeight = exports.maxStale = exports.heapSize = void 0
var support_1 = require('../support')
var matrixEnjinV1012 = require('../matrixEnjinV1012')
var matrixEnjinV1022 = require('../matrixEnjinV1022')
exports.heapSize = {
    /**
     *  The size of the page; this implies the maximum message size which can be sent.
     *
     *  A good value depends on the expected message sizes, their weights, the weight that is
     *  available for processing them and the maximal needed message size. The maximal message
     *  size is slightly lower than this as defined by [`MaxMessageLenOf`].
     */
    matrixEnjinV1012: new support_1.ConstantType('MessageQueue.HeapSize', support_1.sts.number()),
}
exports.maxStale = {
    /**
     *  The maximum number of stale pages (i.e. of overweight messages) allowed before culling
     *  can happen. Once there are more stale pages than this, then historical pages may be
     *  dropped, even if they contain unprocessed overweight messages.
     */
    matrixEnjinV1012: new support_1.ConstantType('MessageQueue.MaxStale', support_1.sts.number()),
}
exports.serviceWeight = {
    /**
     *  The amount of weight (if any) which should be provided to the message queue for
     *  servicing enqueued items.
     *
     *  This may be legitimately `None` in the case that you will call
     *  `ServiceQueues::service_queues` manually.
     */
    matrixEnjinV1012: new support_1.ConstantType(
        'MessageQueue.ServiceWeight',
        support_1.sts.option(function () {
            return matrixEnjinV1012.Weight
        })
    ),
}
exports.idleMaxServiceWeight = {
    /**
     *  The maximum amount of weight (if any) to be used from remaining weight `on_idle` which
     *  should be provided to the message queue for servicing enqueued items `on_idle`.
     *  Useful for parachains to process messages at the same block they are received.
     *
     *  If `None`, it will not call `ServiceQueues::service_queues` in `on_idle`.
     */
    matrixEnjinV1022: new support_1.ConstantType(
        'MessageQueue.IdleMaxServiceWeight',
        support_1.sts.option(function () {
            return matrixEnjinV1022.Weight
        })
    ),
}
