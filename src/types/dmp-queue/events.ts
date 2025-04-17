import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as matrixV500 from '../matrixV500'
import * as matrixEnjinV603 from '../matrixEnjinV603'
import * as matrixEnjinV1004 from '../matrixEnjinV1004'
import * as matrixV1004 from '../matrixV1004'

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
    matrixV500: new EventType(
        'DmpQueue.InvalidFormat',
        sts.struct({
            messageId: sts.bytes(),
        })
    ),
    /**
     * Downward message is invalid XCM.
     */
    matrixV1004: new EventType(
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
    matrixV500: new EventType(
        'DmpQueue.UnsupportedVersion',
        sts.struct({
            messageId: sts.bytes(),
        })
    ),
    /**
     * Downward message is unsupported version of XCM.
     */
    matrixV1004: new EventType(
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
    matrixV500: new EventType(
        'DmpQueue.ExecutedDownward',
        sts.struct({
            messageId: sts.bytes(),
            outcome: matrixV500.V3Outcome,
        })
    ),
    /**
     * Downward message executed with the given outcome.
     */
    matrixV1004: new EventType(
        'DmpQueue.ExecutedDownward',
        sts.struct({
            messageHash: sts.bytes(),
            messageId: sts.bytes(),
            outcome: matrixV1004.V3Outcome,
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
    matrixV500: new EventType(
        'DmpQueue.WeightExhausted',
        sts.struct({
            messageId: sts.bytes(),
            remainingWeight: matrixV500.Weight,
            requiredWeight: matrixV500.Weight,
        })
    ),
    /**
     * The weight limit for handling downward messages was reached.
     */
    matrixV1004: new EventType(
        'DmpQueue.WeightExhausted',
        sts.struct({
            messageHash: sts.bytes(),
            messageId: sts.bytes(),
            remainingWeight: matrixV1004.Weight,
            requiredWeight: matrixV1004.Weight,
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
    matrixV500: new EventType(
        'DmpQueue.OverweightEnqueued',
        sts.struct({
            messageId: sts.bytes(),
            overweightIndex: sts.bigint(),
            requiredWeight: matrixV500.Weight,
        })
    ),
    /**
     * Downward message is overweight and was placed in the overweight queue.
     */
    matrixV1004: new EventType(
        'DmpQueue.OverweightEnqueued',
        sts.struct({
            messageHash: sts.bytes(),
            messageId: sts.bytes(),
            overweightIndex: sts.bigint(),
            requiredWeight: matrixV1004.Weight,
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
    matrixV602: new EventType(
        'DmpQueue.MaxMessagesExhausted',
        sts.struct({
            messageId: sts.bytes(),
        })
    ),
    /**
     * The maximum number of downward messages was reached.
     */
    matrixV1004: new EventType(
        'DmpQueue.MaxMessagesExhausted',
        sts.struct({
            messageHash: sts.bytes(),
        })
    ),
}

export const startedExport =  {
    name: 'DmpQueue.StartedExport',
    /**
     * The export of pages started.
     */
    matrixEnjinV1012: new EventType(
        'DmpQueue.StartedExport',
        sts.unit()
    ),
}

export const exported =  {
    name: 'DmpQueue.Exported',
    /**
     * The export of a page completed.
     */
    matrixEnjinV1012: new EventType(
        'DmpQueue.Exported',
        sts.struct({
            page: sts.number(),
        })
    ),
}

export const exportFailed =  {
    name: 'DmpQueue.ExportFailed',
    /**
     * The export of a page failed.
     * 
     * This should never be emitted.
     */
    matrixEnjinV1012: new EventType(
        'DmpQueue.ExportFailed',
        sts.struct({
            page: sts.number(),
        })
    ),
}

export const completedExport =  {
    name: 'DmpQueue.CompletedExport',
    /**
     * The export of pages completed.
     */
    matrixEnjinV1012: new EventType(
        'DmpQueue.CompletedExport',
        sts.unit()
    ),
}

export const startedOverweightExport =  {
    name: 'DmpQueue.StartedOverweightExport',
    /**
     * The export of overweight messages started.
     */
    matrixEnjinV1012: new EventType(
        'DmpQueue.StartedOverweightExport',
        sts.unit()
    ),
}

export const exportedOverweight =  {
    name: 'DmpQueue.ExportedOverweight',
    /**
     * The export of an overweight message completed.
     */
    matrixEnjinV1012: new EventType(
        'DmpQueue.ExportedOverweight',
        sts.struct({
            index: sts.bigint(),
        })
    ),
}

export const exportOverweightFailed =  {
    name: 'DmpQueue.ExportOverweightFailed',
    /**
     * The export of an overweight message failed.
     * 
     * This should never be emitted.
     */
    matrixEnjinV1012: new EventType(
        'DmpQueue.ExportOverweightFailed',
        sts.struct({
            index: sts.bigint(),
        })
    ),
}

export const completedOverweightExport =  {
    name: 'DmpQueue.CompletedOverweightExport',
    /**
     * The export of overweight messages completed.
     */
    matrixEnjinV1012: new EventType(
        'DmpQueue.CompletedOverweightExport',
        sts.unit()
    ),
}

export const startedCleanup =  {
    name: 'DmpQueue.StartedCleanup',
    /**
     * The cleanup of remaining pallet storage started.
     */
    matrixEnjinV1012: new EventType(
        'DmpQueue.StartedCleanup',
        sts.unit()
    ),
}

export const cleanedSome =  {
    name: 'DmpQueue.CleanedSome',
    /**
     * Some debris was cleaned up.
     */
    matrixEnjinV1012: new EventType(
        'DmpQueue.CleanedSome',
        sts.struct({
            keysRemoved: sts.number(),
        })
    ),
}

export const completed =  {
    name: 'DmpQueue.Completed',
    /**
     * The cleanup of remaining pallet storage completed.
     */
    matrixEnjinV1012: new EventType(
        'DmpQueue.Completed',
        sts.struct({
            error: sts.boolean(),
        })
    ),
}
