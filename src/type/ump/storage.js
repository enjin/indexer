'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.overweightCount =
    exports.counterForOverweight =
    exports.overweight =
    exports.nextDispatchRoundStartWith =
    exports.needsDispatch =
    exports.relayDispatchQueueSize =
    exports.relayDispatchQueues =
        void 0
var support_1 = require('../support')
var enjinV100 = require('../enjinV100')
exports.relayDispatchQueues = {
    /**
     *  The messages waiting to be handled by the relay-chain originating from a certain parachain.
     *
     *  Note that some upward messages might have been already processed by the inclusion logic. E.g.
     *  channel management messages.
     *
     *  The messages are processed in FIFO order.
     */
    enjinV100: new support_1.StorageType(
        'Ump.RelayDispatchQueues',
        'Default',
        [enjinV100.Id],
        support_1.sts.array(function () {
            return support_1.sts.bytes()
        })
    ),
}
exports.relayDispatchQueueSize = {
    /**
     *  Size of the dispatch queues. Caches sizes of the queues in `RelayDispatchQueue`.
     *
     *  First item in the tuple is the count of messages and second
     *  is the total length (in bytes) of the message payloads.
     *
     *  Note that this is an auxiliary mapping: it's possible to tell the byte size and the number of
     *  messages only looking at `RelayDispatchQueues`. This mapping is separate to avoid the cost of
     *  loading the whole message queue if only the total size and count are required.
     *
     *  Invariant:
     *  - The set of keys should exactly match the set of keys of `RelayDispatchQueues`.
     */
    enjinV100: new support_1.StorageType(
        'Ump.RelayDispatchQueueSize',
        'Default',
        [enjinV100.Id],
        support_1.sts.tuple(function () {
            return [support_1.sts.number(), support_1.sts.number()]
        })
    ),
}
exports.needsDispatch = {
    /**
     *  The ordered list of `ParaId`s that have a `RelayDispatchQueue` entry.
     *
     *  Invariant:
     *  - The set of items from this vector should be exactly the set of the keys in
     *    `RelayDispatchQueues` and `RelayDispatchQueueSize`.
     */
    enjinV100: new support_1.StorageType(
        'Ump.NeedsDispatch',
        'Default',
        [],
        support_1.sts.array(function () {
            return enjinV100.Id
        })
    ),
}
exports.nextDispatchRoundStartWith = {
    /**
     *  This is the para that gets will get dispatched first during the next upward dispatchable queue
     *  execution round.
     *
     *  Invariant:
     *  - If `Some(para)`, then `para` must be present in `NeedsDispatch`.
     */
    enjinV100: new support_1.StorageType('Ump.NextDispatchRoundStartWith', 'Optional', [], enjinV100.Id),
}
exports.overweight = {
    /**
     *  The messages that exceeded max individual message weight budget.
     *
     *  These messages stay there until manually dispatched.
     */
    enjinV100: new support_1.StorageType(
        'Ump.Overweight',
        'Optional',
        [support_1.sts.bigint()],
        support_1.sts.tuple(function () {
            return [enjinV100.Id, support_1.sts.bytes()]
        })
    ),
}
exports.counterForOverweight = {
    /**
     * Counter for the related counted storage map
     */
    enjinV100: new support_1.StorageType('Ump.CounterForOverweight', 'Default', [], support_1.sts.number()),
}
exports.overweightCount = {
    /**
     *  The number of overweight messages ever recorded in `Overweight` (and thus the lowest free
     *  index).
     */
    enjinV100: new support_1.StorageType('Ump.OverweightCount', 'Default', [], support_1.sts.bigint()),
}
