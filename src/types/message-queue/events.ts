import { sts, Block, Bytes, Option, Result, EventType, RuntimeCtx } from '../support'
import * as enjinV101 from '../enjinV101'
import * as v105 from '../v105'
import * as matrixEnjinV1012 from '../matrixEnjinV1012'
import * as matrixV1020 from '../matrixV1020'
import * as enjinV1050 from '../enjinV1050'
import * as v1050 from '../v1050'

export const processingFailed = {
    name: 'MessageQueue.ProcessingFailed',
    /**
     * Message discarded due to an error in the `MessageProcessor` (usually a format error).
     */
    matrixEnjinV1012: new EventType(
        'MessageQueue.ProcessingFailed',
        sts.struct({
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
    matrixV1020: new EventType(
        'MessageQueue.ProcessingFailed',
        sts.struct({
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
    enjinV101: new EventType(
        'MessageQueue.ProcessingFailed',
        sts.struct({
            id: sts.bytes(),
            origin: enjinV101.AggregateMessageOrigin,
            error: enjinV101.ProcessMessageError,
        })
    ),
    /**
     * Message discarded due to an error in the `MessageProcessor` (usually a format error).
     */
    enjinV1050: new EventType(
        'MessageQueue.ProcessingFailed',
        sts.struct({
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
    v105: new EventType(
        'MessageQueue.ProcessingFailed',
        sts.struct({
            id: sts.bytes(),
            origin: v105.AggregateMessageOrigin,
            error: v105.ProcessMessageError,
        })
    ),
    /**
     * Message discarded due to an error in the `MessageProcessor` (usually a format error).
     */
    v1050: new EventType(
        'MessageQueue.ProcessingFailed',
        sts.struct({
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

export const processed = {
    name: 'MessageQueue.Processed',
    /**
     * Message is processed.
     */
    matrixEnjinV1012: new EventType(
        'MessageQueue.Processed',
        sts.struct({
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
            success: sts.boolean(),
        })
    ),
    /**
     * Message is processed.
     */
    enjinV101: new EventType(
        'MessageQueue.Processed',
        sts.struct({
            id: sts.bytes(),
            origin: enjinV101.AggregateMessageOrigin,
            weightUsed: enjinV101.Weight,
            success: sts.boolean(),
        })
    ),
}

export const overweightEnqueued = {
    name: 'MessageQueue.OverweightEnqueued',
    /**
     * Message placed in overweight queue.
     */
    matrixEnjinV1012: new EventType(
        'MessageQueue.OverweightEnqueued',
        sts.struct({
            /**
             * The `blake2_256` hash of the message.
             */
            id: sts.bytes(),
            /**
             * The queue of the message.
             */
            origin: matrixEnjinV1012.AggregateMessageOrigin,
            /**
             * The page of the message.
             */
            pageIndex: sts.number(),
            /**
             * The index of the message within the page.
             */
            messageIndex: sts.number(),
        })
    ),
    /**
     * Message placed in overweight queue.
     */
    enjinV101: new EventType(
        'MessageQueue.OverweightEnqueued',
        sts.struct({
            id: sts.bytes(),
            origin: enjinV101.AggregateMessageOrigin,
            pageIndex: sts.number(),
            messageIndex: sts.number(),
        })
    ),
}

export const pageReaped = {
    name: 'MessageQueue.PageReaped',
    /**
     * This page was reaped.
     */
    matrixEnjinV1012: new EventType(
        'MessageQueue.PageReaped',
        sts.struct({
            /**
             * The queue of the page.
             */
            origin: matrixEnjinV1012.AggregateMessageOrigin,
            /**
             * The index of the page.
             */
            index: sts.number(),
        })
    ),
    /**
     * This page was reaped.
     */
    enjinV101: new EventType(
        'MessageQueue.PageReaped',
        sts.struct({
            origin: enjinV101.AggregateMessageOrigin,
            index: sts.number(),
        })
    ),
}
