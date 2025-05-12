'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.deliveryFeeFactor =
    exports.inboundXcmpSuspended =
    exports.queueSuspended =
    exports.overweightCount =
    exports.counterForOverweight =
    exports.overweight =
    exports.queueConfig =
    exports.signalMessages =
    exports.outboundXcmpMessages =
    exports.outboundXcmpStatus =
    exports.inboundXcmpMessages =
    exports.inboundXcmpStatus =
        void 0
var support_1 = require('../support')
var matrixV500 = require('../matrixV500')
var matrixEnjinV603 = require('../matrixEnjinV603')
var matrixV1010 = require('../matrixV1010')
var matrixEnjinV1012 = require('../matrixEnjinV1012')
exports.inboundXcmpStatus = {
    /**
     *  Status of the inbound XCMP channels.
     */
    matrixEnjinV603: new support_1.StorageType(
        'XcmpQueue.InboundXcmpStatus',
        'Default',
        [],
        support_1.sts.array(function () {
            return matrixEnjinV603.InboundChannelDetails
        })
    ),
}
exports.inboundXcmpMessages = {
    /**
     *  Inbound aggregate XCMP messages. It can only be one per ParaId/block.
     */
    matrixEnjinV603: new support_1.StorageType(
        'XcmpQueue.InboundXcmpMessages',
        'Default',
        [matrixEnjinV603.Id, support_1.sts.number()],
        support_1.sts.bytes()
    ),
}
exports.outboundXcmpStatus = {
    /**
     *  The non-empty XCMP channels in order of becoming non-empty, and the index of the first
     *  and last outbound message. If the two indices are equal, then it indicates an empty
     *  queue and there must be a non-`Ok` `OutboundStatus`. We assume queues grow no greater
     *  than 65535 items. Queue indices for normal messages begin at one; zero is reserved in
     *  case of the need to send a high-priority signal message this block.
     *  The bool is true if there is a signal message waiting to be sent.
     */
    matrixEnjinV603: new support_1.StorageType(
        'XcmpQueue.OutboundXcmpStatus',
        'Default',
        [],
        support_1.sts.array(function () {
            return matrixEnjinV603.OutboundChannelDetails
        })
    ),
}
exports.outboundXcmpMessages = {
    /**
     *  The messages outbound in a given XCMP channel.
     */
    matrixEnjinV603: new support_1.StorageType(
        'XcmpQueue.OutboundXcmpMessages',
        'Default',
        [matrixEnjinV603.Id, support_1.sts.number()],
        support_1.sts.bytes()
    ),
}
exports.signalMessages = {
    /**
     *  Any signal messages waiting to be sent.
     */
    matrixEnjinV603: new support_1.StorageType(
        'XcmpQueue.SignalMessages',
        'Default',
        [matrixEnjinV603.Id],
        support_1.sts.bytes()
    ),
}
exports.queueConfig = {
    /**
     *  The configuration which controls the dynamics of the outbound queue.
     */
    matrixEnjinV603: new support_1.StorageType('XcmpQueue.QueueConfig', 'Default', [], matrixEnjinV603.QueueConfigData),
    /**
     *  The configuration which controls the dynamics of the outbound queue.
     */
    matrixEnjinV1012: new support_1.StorageType(
        'XcmpQueue.QueueConfig',
        'Default',
        [],
        matrixEnjinV1012.QueueConfigData
    ),
    /**
     *  The configuration which controls the dynamics of the outbound queue.
     */
    matrixV500: new support_1.StorageType('XcmpQueue.QueueConfig', 'Default', [], matrixV500.QueueConfigData),
    /**
     *  The configuration which controls the dynamics of the outbound queue.
     */
    matrixV1010: new support_1.StorageType('XcmpQueue.QueueConfig', 'Default', [], matrixV1010.QueueConfigData),
}
exports.overweight = {
    /**
     *  The messages that exceeded max individual message weight budget.
     *
     *  These message stay in this storage map until they are manually dispatched via
     *  `service_overweight`.
     */
    matrixEnjinV603: new support_1.StorageType(
        'XcmpQueue.Overweight',
        'Optional',
        [support_1.sts.bigint()],
        support_1.sts.tuple(function () {
            return [matrixEnjinV603.Id, support_1.sts.number(), support_1.sts.bytes()]
        })
    ),
}
exports.counterForOverweight = {
    /**
     * Counter for the related counted storage map
     */
    matrixEnjinV603: new support_1.StorageType('XcmpQueue.CounterForOverweight', 'Default', [], support_1.sts.number()),
}
exports.overweightCount = {
    /**
     *  The number of overweight messages ever recorded in `Overweight`. Also doubles as the next
     *  available free overweight index.
     */
    matrixEnjinV603: new support_1.StorageType('XcmpQueue.OverweightCount', 'Default', [], support_1.sts.bigint()),
}
exports.queueSuspended = {
    /**
     *  Whether or not the XCMP queue is suspended from executing incoming XCMs or not.
     */
    matrixEnjinV603: new support_1.StorageType('XcmpQueue.QueueSuspended', 'Default', [], support_1.sts.boolean()),
}
exports.inboundXcmpSuspended = {
    /**
     *  The suspended inbound XCMP channels. All others are not suspended.
     *
     *  This is a `StorageValue` instead of a `StorageMap` since we expect multiple reads per block
     *  to different keys with a one byte payload. The access to `BoundedBTreeSet` will be cached
     *  within the block and therefore only included once in the proof size.
     *
     *  NOTE: The PoV benchmarking cannot know this and will over-estimate, but the actual proof
     *  will be smaller.
     */
    matrixEnjinV1012: new support_1.StorageType(
        'XcmpQueue.InboundXcmpSuspended',
        'Default',
        [],
        support_1.sts.array(function () {
            return matrixEnjinV1012.Id
        })
    ),
}
exports.deliveryFeeFactor = {
    /**
     *  The factor to multiply the base delivery fee by.
     */
    matrixEnjinV1012: new support_1.StorageType(
        'XcmpQueue.DeliveryFeeFactor',
        'Default',
        [matrixEnjinV1012.Id],
        matrixEnjinV1012.FixedU128
    ),
}
