'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.pageReaped = exports.overweightEnqueued = exports.processed = exports.processingFailed = void 0
var support_1 = require('../support')
var enjinV101 = require('../enjinV101')
var v105 = require('../v105')
var matrixV1010 = require('../matrixV1010')
var matrixEnjinV1012 = require('../matrixEnjinV1012')
var matrixV1020 = require('../matrixV1020')
var matrixEnjinV1022 = require('../matrixEnjinV1022')
var enjinV1050 = require('../enjinV1050')
var v1050 = require('../v1050')
exports.processingFailed = {
    name: 'MessageQueue.ProcessingFailed',
    /**
     * Message discarded due to an error in the `MessageProcessor` (usually a format error).
     */
    matrixEnjinV1012: new support_1.EventType(
        'MessageQueue.ProcessingFailed',
        support_1.sts.struct({
            /**
             * The `blake2_256` hash of the message.
             */
            id: matrixEnjinV1012.H256,
            /**
             * The queue of the message.
             */
            origin: matrixEnjinV1012.AggregateMessageOrigin,
            /**
             * The error that occurred.
             *
             * This error is pretty opaque. More fine-grained errors need to be emitted as events
             * by the `MessageProcessor`.
             */
            error: matrixEnjinV1012.ProcessMessageError,
        })
    ),
    /**
     * Message discarded due to an error in the `MessageProcessor` (usually a format error).
     */
    matrixEnjinV1022: new support_1.EventType(
        'MessageQueue.ProcessingFailed',
        support_1.sts.struct({
            /**
             * The `blake2_256` hash of the message.
             */
            id: matrixEnjinV1022.H256,
            /**
             * The queue of the message.
             */
            origin: matrixEnjinV1022.AggregateMessageOrigin,
            /**
             * The error that occurred.
             *
             * This error is pretty opaque. More fine-grained errors need to be emitted as events
             * by the `MessageProcessor`.
             */
            error: matrixEnjinV1022.ProcessMessageError,
        })
    ),
    /**
     * Message discarded due to an error in the `MessageProcessor` (usually a format error).
     */
    matrixV1010: new support_1.EventType(
        'MessageQueue.ProcessingFailed',
        support_1.sts.struct({
            /**
             * The `blake2_256` hash of the message.
             */
            id: matrixV1010.H256,
            /**
             * The queue of the message.
             */
            origin: matrixV1010.AggregateMessageOrigin,
            /**
             * The error that occurred.
             *
             * This error is pretty opaque. More fine-grained errors need to be emitted as events
             * by the `MessageProcessor`.
             */
            error: matrixV1010.ProcessMessageError,
        })
    ),
    /**
     * Message discarded due to an error in the `MessageProcessor` (usually a format error).
     */
    matrixV1020: new support_1.EventType(
        'MessageQueue.ProcessingFailed',
        support_1.sts.struct({
            /**
             * The `blake2_256` hash of the message.
             */
            id: matrixV1020.H256,
            /**
             * The queue of the message.
             */
            origin: matrixV1020.AggregateMessageOrigin,
            /**
             * The error that occurred.
             *
             * This error is pretty opaque. More fine-grained errors need to be emitted as events
             * by the `MessageProcessor`.
             */
            error: matrixV1020.ProcessMessageError,
        })
    ),
    /**
     * Message discarded due to an error in the `MessageProcessor` (usually a format error).
     */
    enjinV101: new support_1.EventType(
        'MessageQueue.ProcessingFailed',
        support_1.sts.struct({
            id: support_1.sts.bytes(),
            origin: enjinV101.AggregateMessageOrigin,
            error: enjinV101.ProcessMessageError,
        })
    ),
    /**
     * Message discarded due to an error in the `MessageProcessor` (usually a format error).
     */
    enjinV1050: new support_1.EventType(
        'MessageQueue.ProcessingFailed',
        support_1.sts.struct({
            /**
             * The `blake2_256` hash of the message.
             */
            id: enjinV1050.H256,
            /**
             * The queue of the message.
             */
            origin: enjinV1050.AggregateMessageOrigin,
            /**
             * The error that occurred.
             *
             * This error is pretty opaque. More fine-grained errors need to be emitted as events
             * by the `MessageProcessor`.
             */
            error: enjinV1050.ProcessMessageError,
        })
    ),
    /**
     * Message discarded due to an error in the `MessageProcessor` (usually a format error).
     */
    v105: new support_1.EventType(
        'MessageQueue.ProcessingFailed',
        support_1.sts.struct({
            id: support_1.sts.bytes(),
            origin: v105.AggregateMessageOrigin,
            error: v105.ProcessMessageError,
        })
    ),
    /**
     * Message discarded due to an error in the `MessageProcessor` (usually a format error).
     */
    v1050: new support_1.EventType(
        'MessageQueue.ProcessingFailed',
        support_1.sts.struct({
            /**
             * The `blake2_256` hash of the message.
             */
            id: v1050.H256,
            /**
             * The queue of the message.
             */
            origin: v1050.AggregateMessageOrigin,
            /**
             * The error that occurred.
             *
             * This error is pretty opaque. More fine-grained errors need to be emitted as events
             * by the `MessageProcessor`.
             */
            error: v1050.ProcessMessageError,
        })
    ),
}
exports.processed = {
    name: 'MessageQueue.Processed',
    /**
     * Message is processed.
     */
    matrixEnjinV1012: new support_1.EventType(
        'MessageQueue.Processed',
        support_1.sts.struct({
            /**
             * The `blake2_256` hash of the message.
             */
            id: matrixEnjinV1012.H256,
            /**
             * The queue of the message.
             */
            origin: matrixEnjinV1012.AggregateMessageOrigin,
            /**
             * How much weight was used to process the message.
             */
            weightUsed: matrixEnjinV1012.Weight,
            /**
             * Whether the message was processed.
             *
             * Note that this does not mean that the underlying `MessageProcessor` was internally
             * successful. It *solely* means that the MQ pallet will treat this as a success
             * condition and discard the message. Any internal error needs to be emitted as events
             * by the `MessageProcessor`.
             */
            success: support_1.sts.boolean(),
        })
    ),
    /**
     * Message is processed.
     */
    enjinV101: new support_1.EventType(
        'MessageQueue.Processed',
        support_1.sts.struct({
            id: support_1.sts.bytes(),
            origin: enjinV101.AggregateMessageOrigin,
            weightUsed: enjinV101.Weight,
            success: support_1.sts.boolean(),
        })
    ),
}
exports.overweightEnqueued = {
    name: 'MessageQueue.OverweightEnqueued',
    /**
     * Message placed in overweight queue.
     */
    matrixEnjinV1012: new support_1.EventType(
        'MessageQueue.OverweightEnqueued',
        support_1.sts.struct({
            /**
             * The `blake2_256` hash of the message.
             */
            id: support_1.sts.bytes(),
            /**
             * The queue of the message.
             */
            origin: matrixEnjinV1012.AggregateMessageOrigin,
            /**
             * The page of the message.
             */
            pageIndex: support_1.sts.number(),
            /**
             * The index of the message within the page.
             */
            messageIndex: support_1.sts.number(),
        })
    ),
    /**
     * Message placed in overweight queue.
     */
    enjinV101: new support_1.EventType(
        'MessageQueue.OverweightEnqueued',
        support_1.sts.struct({
            id: support_1.sts.bytes(),
            origin: enjinV101.AggregateMessageOrigin,
            pageIndex: support_1.sts.number(),
            messageIndex: support_1.sts.number(),
        })
    ),
}
exports.pageReaped = {
    name: 'MessageQueue.PageReaped',
    /**
     * This page was reaped.
     */
    matrixEnjinV1012: new support_1.EventType(
        'MessageQueue.PageReaped',
        support_1.sts.struct({
            /**
             * The queue of the page.
             */
            origin: matrixEnjinV1012.AggregateMessageOrigin,
            /**
             * The index of the page.
             */
            index: support_1.sts.number(),
        })
    ),
    /**
     * This page was reaped.
     */
    enjinV101: new support_1.EventType(
        'MessageQueue.PageReaped',
        support_1.sts.struct({
            origin: enjinV101.AggregateMessageOrigin,
            index: support_1.sts.number(),
        })
    ),
}
