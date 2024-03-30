import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v500 from '../v500'
import * as matrixEnjinV603 from '../matrixEnjinV603'
import * as matrixEnjinV1004 from '../matrixEnjinV1004'
import * as v1004 from '../v1004'

export const invalidFormat =  {
    name: 'DmpQueue.InvalidFormat',
    /**
     * Downward message is invalid XCM.
     */
    matrixEnjinV603: new EventType(
        'DmpQueue.InvalidFormat',
        sts.struct({
            messageId: sts.bytes(),
        })
    ),
    /**
     * Downward message is invalid XCM.
     */
    matrixEnjinV1004: new EventType(
        'DmpQueue.InvalidFormat',
        sts.struct({
            messageHash: sts.bytes(),
        })
    ),
    /**
     * Downward message is invalid XCM.
     */
    v500: new EventType(
        'DmpQueue.InvalidFormat',
        sts.struct({
            messageId: sts.bytes(),
        })
    ),
    /**
     * Downward message is invalid XCM.
     */
    v1004: new EventType(
        'DmpQueue.InvalidFormat',
        sts.struct({
            messageHash: sts.bytes(),
        })
    ),
}

export const unsupportedVersion =  {
    name: 'DmpQueue.UnsupportedVersion',
    /**
     * Downward message is unsupported version of XCM.
     */
    matrixEnjinV603: new EventType(
        'DmpQueue.UnsupportedVersion',
        sts.struct({
            messageId: sts.bytes(),
        })
    ),
    /**
     * Downward message is unsupported version of XCM.
     */
    matrixEnjinV1004: new EventType(
        'DmpQueue.UnsupportedVersion',
        sts.struct({
            messageHash: sts.bytes(),
        })
    ),
    /**
     * Downward message is unsupported version of XCM.
     */
    v500: new EventType(
        'DmpQueue.UnsupportedVersion',
        sts.struct({
            messageId: sts.bytes(),
        })
    ),
    /**
     * Downward message is unsupported version of XCM.
     */
    v1004: new EventType(
        'DmpQueue.UnsupportedVersion',
        sts.struct({
            messageHash: sts.bytes(),
        })
    ),
}

export const executedDownward =  {
    name: 'DmpQueue.ExecutedDownward',
    /**
     * Downward message executed with the given outcome.
     */
    matrixEnjinV603: new EventType(
        'DmpQueue.ExecutedDownward',
        sts.struct({
            messageId: sts.bytes(),
            outcome: matrixEnjinV603.V3Outcome,
        })
    ),
    /**
     * Downward message executed with the given outcome.
     */
    matrixEnjinV1004: new EventType(
        'DmpQueue.ExecutedDownward',
        sts.struct({
            messageHash: sts.bytes(),
            messageId: sts.bytes(),
            outcome: matrixEnjinV1004.V3Outcome,
        })
    ),
    /**
     * Downward message executed with the given outcome.
     */
    v500: new EventType(
        'DmpQueue.ExecutedDownward',
        sts.struct({
            messageId: sts.bytes(),
            outcome: v500.V3Outcome,
        })
    ),
    /**
     * Downward message executed with the given outcome.
     */
    v1004: new EventType(
        'DmpQueue.ExecutedDownward',
        sts.struct({
            messageHash: sts.bytes(),
            messageId: sts.bytes(),
            outcome: v1004.V3Outcome,
        })
    ),
}

export const weightExhausted =  {
    name: 'DmpQueue.WeightExhausted',
    /**
     * The weight limit for handling downward messages was reached.
     */
    matrixEnjinV603: new EventType(
        'DmpQueue.WeightExhausted',
        sts.struct({
            messageId: sts.bytes(),
            remainingWeight: matrixEnjinV603.Weight,
            requiredWeight: matrixEnjinV603.Weight,
        })
    ),
    /**
     * The weight limit for handling downward messages was reached.
     */
    matrixEnjinV1004: new EventType(
        'DmpQueue.WeightExhausted',
        sts.struct({
            messageHash: sts.bytes(),
            messageId: sts.bytes(),
            remainingWeight: matrixEnjinV1004.Weight,
            requiredWeight: matrixEnjinV1004.Weight,
        })
    ),
    /**
     * The weight limit for handling downward messages was reached.
     */
    v500: new EventType(
        'DmpQueue.WeightExhausted',
        sts.struct({
            messageId: sts.bytes(),
            remainingWeight: v500.Weight,
            requiredWeight: v500.Weight,
        })
    ),
    /**
     * The weight limit for handling downward messages was reached.
     */
    v1004: new EventType(
        'DmpQueue.WeightExhausted',
        sts.struct({
            messageHash: sts.bytes(),
            messageId: sts.bytes(),
            remainingWeight: v1004.Weight,
            requiredWeight: v1004.Weight,
        })
    ),
}

export const overweightEnqueued =  {
    name: 'DmpQueue.OverweightEnqueued',
    /**
     * Downward message is overweight and was placed in the overweight queue.
     */
    matrixEnjinV603: new EventType(
        'DmpQueue.OverweightEnqueued',
        sts.struct({
            messageId: sts.bytes(),
            overweightIndex: sts.bigint(),
            requiredWeight: matrixEnjinV603.Weight,
        })
    ),
    /**
     * Downward message is overweight and was placed in the overweight queue.
     */
    matrixEnjinV1004: new EventType(
        'DmpQueue.OverweightEnqueued',
        sts.struct({
            messageHash: sts.bytes(),
            messageId: sts.bytes(),
            overweightIndex: sts.bigint(),
            requiredWeight: matrixEnjinV1004.Weight,
        })
    ),
    /**
     * Downward message is overweight and was placed in the overweight queue.
     */
    v500: new EventType(
        'DmpQueue.OverweightEnqueued',
        sts.struct({
            messageId: sts.bytes(),
            overweightIndex: sts.bigint(),
            requiredWeight: v500.Weight,
        })
    ),
    /**
     * Downward message is overweight and was placed in the overweight queue.
     */
    v1004: new EventType(
        'DmpQueue.OverweightEnqueued',
        sts.struct({
            messageHash: sts.bytes(),
            messageId: sts.bytes(),
            overweightIndex: sts.bigint(),
            requiredWeight: v1004.Weight,
        })
    ),
}

export const overweightServiced =  {
    name: 'DmpQueue.OverweightServiced',
    /**
     * Downward message from the overweight queue was executed.
     */
    matrixEnjinV603: new EventType(
        'DmpQueue.OverweightServiced',
        sts.struct({
            overweightIndex: sts.bigint(),
            weightUsed: matrixEnjinV603.Weight,
        })
    ),
}

export const maxMessagesExhausted =  {
    name: 'DmpQueue.MaxMessagesExhausted',
    /**
     * The maximum number of downward messages was.
     */
    matrixEnjinV603: new EventType(
        'DmpQueue.MaxMessagesExhausted',
        sts.struct({
            messageId: sts.bytes(),
        })
    ),
    /**
     * The maximum number of downward messages was reached.
     */
    matrixEnjinV1004: new EventType(
        'DmpQueue.MaxMessagesExhausted',
        sts.struct({
            messageHash: sts.bytes(),
        })
    ),
    /**
     * The maximum number of downward messages was.
     */
    v602: new EventType(
        'DmpQueue.MaxMessagesExhausted',
        sts.struct({
            messageId: sts.bytes(),
        })
    ),
    /**
     * The maximum number of downward messages was reached.
     */
    v1004: new EventType(
        'DmpQueue.MaxMessagesExhausted',
        sts.struct({
            messageHash: sts.bytes(),
        })
    ),
}
