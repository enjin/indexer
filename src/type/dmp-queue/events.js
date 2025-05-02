'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.completed =
    exports.cleanedSome =
    exports.startedCleanup =
    exports.completedOverweightExport =
    exports.exportOverweightFailed =
    exports.exportedOverweight =
    exports.startedOverweightExport =
    exports.completedExport =
    exports.exportFailed =
    exports.exported =
    exports.startedExport =
    exports.maxMessagesExhausted =
    exports.overweightServiced =
    exports.overweightEnqueued =
    exports.weightExhausted =
    exports.executedDownward =
    exports.unsupportedVersion =
    exports.invalidFormat =
        void 0
var support_1 = require('../support')
var matrixV500 = require('../matrixV500')
var matrixEnjinV603 = require('../matrixEnjinV603')
var matrixEnjinV1004 = require('../matrixEnjinV1004')
var matrixV1004 = require('../matrixV1004')
exports.invalidFormat = {
    name: 'DmpQueue.InvalidFormat',
    /**
     * Downward message is invalid XCM.
     */
    matrixEnjinV603: new support_1.EventType(
        'DmpQueue.InvalidFormat',
        support_1.sts.struct({
            messageId: support_1.sts.bytes(),
        })
    ),
    /**
     * Downward message is invalid XCM.
     */
    matrixEnjinV1004: new support_1.EventType(
        'DmpQueue.InvalidFormat',
        support_1.sts.struct({
            messageHash: support_1.sts.bytes(),
        })
    ),
    /**
     * Downward message is invalid XCM.
     */
    matrixV500: new support_1.EventType(
        'DmpQueue.InvalidFormat',
        support_1.sts.struct({
            messageId: support_1.sts.bytes(),
        })
    ),
    /**
     * Downward message is invalid XCM.
     */
    matrixV1004: new support_1.EventType(
        'DmpQueue.InvalidFormat',
        support_1.sts.struct({
            messageHash: support_1.sts.bytes(),
        })
    ),
}
exports.unsupportedVersion = {
    name: 'DmpQueue.UnsupportedVersion',
    /**
     * Downward message is unsupported version of XCM.
     */
    matrixEnjinV603: new support_1.EventType(
        'DmpQueue.UnsupportedVersion',
        support_1.sts.struct({
            messageId: support_1.sts.bytes(),
        })
    ),
    /**
     * Downward message is unsupported version of XCM.
     */
    matrixEnjinV1004: new support_1.EventType(
        'DmpQueue.UnsupportedVersion',
        support_1.sts.struct({
            messageHash: support_1.sts.bytes(),
        })
    ),
    /**
     * Downward message is unsupported version of XCM.
     */
    matrixV500: new support_1.EventType(
        'DmpQueue.UnsupportedVersion',
        support_1.sts.struct({
            messageId: support_1.sts.bytes(),
        })
    ),
    /**
     * Downward message is unsupported version of XCM.
     */
    matrixV1004: new support_1.EventType(
        'DmpQueue.UnsupportedVersion',
        support_1.sts.struct({
            messageHash: support_1.sts.bytes(),
        })
    ),
}
exports.executedDownward = {
    name: 'DmpQueue.ExecutedDownward',
    /**
     * Downward message executed with the given outcome.
     */
    matrixEnjinV603: new support_1.EventType(
        'DmpQueue.ExecutedDownward',
        support_1.sts.struct({
            messageId: support_1.sts.bytes(),
            outcome: matrixEnjinV603.V3Outcome,
        })
    ),
    /**
     * Downward message executed with the given outcome.
     */
    matrixEnjinV1004: new support_1.EventType(
        'DmpQueue.ExecutedDownward',
        support_1.sts.struct({
            messageHash: support_1.sts.bytes(),
            messageId: support_1.sts.bytes(),
            outcome: matrixEnjinV1004.V3Outcome,
        })
    ),
    /**
     * Downward message executed with the given outcome.
     */
    matrixV500: new support_1.EventType(
        'DmpQueue.ExecutedDownward',
        support_1.sts.struct({
            messageId: support_1.sts.bytes(),
            outcome: matrixV500.V3Outcome,
        })
    ),
    /**
     * Downward message executed with the given outcome.
     */
    matrixV1004: new support_1.EventType(
        'DmpQueue.ExecutedDownward',
        support_1.sts.struct({
            messageHash: support_1.sts.bytes(),
            messageId: support_1.sts.bytes(),
            outcome: matrixV1004.V3Outcome,
        })
    ),
}
exports.weightExhausted = {
    name: 'DmpQueue.WeightExhausted',
    /**
     * The weight limit for handling downward messages was reached.
     */
    matrixEnjinV603: new support_1.EventType(
        'DmpQueue.WeightExhausted',
        support_1.sts.struct({
            messageId: support_1.sts.bytes(),
            remainingWeight: matrixEnjinV603.Weight,
            requiredWeight: matrixEnjinV603.Weight,
        })
    ),
    /**
     * The weight limit for handling downward messages was reached.
     */
    matrixEnjinV1004: new support_1.EventType(
        'DmpQueue.WeightExhausted',
        support_1.sts.struct({
            messageHash: support_1.sts.bytes(),
            messageId: support_1.sts.bytes(),
            remainingWeight: matrixEnjinV1004.Weight,
            requiredWeight: matrixEnjinV1004.Weight,
        })
    ),
    /**
     * The weight limit for handling downward messages was reached.
     */
    matrixV500: new support_1.EventType(
        'DmpQueue.WeightExhausted',
        support_1.sts.struct({
            messageId: support_1.sts.bytes(),
            remainingWeight: matrixV500.Weight,
            requiredWeight: matrixV500.Weight,
        })
    ),
    /**
     * The weight limit for handling downward messages was reached.
     */
    matrixV1004: new support_1.EventType(
        'DmpQueue.WeightExhausted',
        support_1.sts.struct({
            messageHash: support_1.sts.bytes(),
            messageId: support_1.sts.bytes(),
            remainingWeight: matrixV1004.Weight,
            requiredWeight: matrixV1004.Weight,
        })
    ),
}
exports.overweightEnqueued = {
    name: 'DmpQueue.OverweightEnqueued',
    /**
     * Downward message is overweight and was placed in the overweight queue.
     */
    matrixEnjinV603: new support_1.EventType(
        'DmpQueue.OverweightEnqueued',
        support_1.sts.struct({
            messageId: support_1.sts.bytes(),
            overweightIndex: support_1.sts.bigint(),
            requiredWeight: matrixEnjinV603.Weight,
        })
    ),
    /**
     * Downward message is overweight and was placed in the overweight queue.
     */
    matrixEnjinV1004: new support_1.EventType(
        'DmpQueue.OverweightEnqueued',
        support_1.sts.struct({
            messageHash: support_1.sts.bytes(),
            messageId: support_1.sts.bytes(),
            overweightIndex: support_1.sts.bigint(),
            requiredWeight: matrixEnjinV1004.Weight,
        })
    ),
    /**
     * Downward message is overweight and was placed in the overweight queue.
     */
    matrixV500: new support_1.EventType(
        'DmpQueue.OverweightEnqueued',
        support_1.sts.struct({
            messageId: support_1.sts.bytes(),
            overweightIndex: support_1.sts.bigint(),
            requiredWeight: matrixV500.Weight,
        })
    ),
    /**
     * Downward message is overweight and was placed in the overweight queue.
     */
    matrixV1004: new support_1.EventType(
        'DmpQueue.OverweightEnqueued',
        support_1.sts.struct({
            messageHash: support_1.sts.bytes(),
            messageId: support_1.sts.bytes(),
            overweightIndex: support_1.sts.bigint(),
            requiredWeight: matrixV1004.Weight,
        })
    ),
}
exports.overweightServiced = {
    name: 'DmpQueue.OverweightServiced',
    /**
     * Downward message from the overweight queue was executed.
     */
    matrixEnjinV603: new support_1.EventType(
        'DmpQueue.OverweightServiced',
        support_1.sts.struct({
            overweightIndex: support_1.sts.bigint(),
            weightUsed: matrixEnjinV603.Weight,
        })
    ),
}
exports.maxMessagesExhausted = {
    name: 'DmpQueue.MaxMessagesExhausted',
    /**
     * The maximum number of downward messages was.
     */
    matrixEnjinV603: new support_1.EventType(
        'DmpQueue.MaxMessagesExhausted',
        support_1.sts.struct({
            messageId: support_1.sts.bytes(),
        })
    ),
    /**
     * The maximum number of downward messages was reached.
     */
    matrixEnjinV1004: new support_1.EventType(
        'DmpQueue.MaxMessagesExhausted',
        support_1.sts.struct({
            messageHash: support_1.sts.bytes(),
        })
    ),
    /**
     * The maximum number of downward messages was.
     */
    matrixV602: new support_1.EventType(
        'DmpQueue.MaxMessagesExhausted',
        support_1.sts.struct({
            messageId: support_1.sts.bytes(),
        })
    ),
    /**
     * The maximum number of downward messages was reached.
     */
    matrixV1004: new support_1.EventType(
        'DmpQueue.MaxMessagesExhausted',
        support_1.sts.struct({
            messageHash: support_1.sts.bytes(),
        })
    ),
}
exports.startedExport = {
    name: 'DmpQueue.StartedExport',
    /**
     * The export of pages started.
     */
    matrixEnjinV1012: new support_1.EventType('DmpQueue.StartedExport', support_1.sts.unit()),
}
exports.exported = {
    name: 'DmpQueue.Exported',
    /**
     * The export of a page completed.
     */
    matrixEnjinV1012: new support_1.EventType(
        'DmpQueue.Exported',
        support_1.sts.struct({
            page: support_1.sts.number(),
        })
    ),
}
exports.exportFailed = {
    name: 'DmpQueue.ExportFailed',
    /**
     * The export of a page failed.
     *
     * This should never be emitted.
     */
    matrixEnjinV1012: new support_1.EventType(
        'DmpQueue.ExportFailed',
        support_1.sts.struct({
            page: support_1.sts.number(),
        })
    ),
}
exports.completedExport = {
    name: 'DmpQueue.CompletedExport',
    /**
     * The export of pages completed.
     */
    matrixEnjinV1012: new support_1.EventType('DmpQueue.CompletedExport', support_1.sts.unit()),
}
exports.startedOverweightExport = {
    name: 'DmpQueue.StartedOverweightExport',
    /**
     * The export of overweight messages started.
     */
    matrixEnjinV1012: new support_1.EventType('DmpQueue.StartedOverweightExport', support_1.sts.unit()),
}
exports.exportedOverweight = {
    name: 'DmpQueue.ExportedOverweight',
    /**
     * The export of an overweight message completed.
     */
    matrixEnjinV1012: new support_1.EventType(
        'DmpQueue.ExportedOverweight',
        support_1.sts.struct({
            index: support_1.sts.bigint(),
        })
    ),
}
exports.exportOverweightFailed = {
    name: 'DmpQueue.ExportOverweightFailed',
    /**
     * The export of an overweight message failed.
     *
     * This should never be emitted.
     */
    matrixEnjinV1012: new support_1.EventType(
        'DmpQueue.ExportOverweightFailed',
        support_1.sts.struct({
            index: support_1.sts.bigint(),
        })
    ),
}
exports.completedOverweightExport = {
    name: 'DmpQueue.CompletedOverweightExport',
    /**
     * The export of overweight messages completed.
     */
    matrixEnjinV1012: new support_1.EventType('DmpQueue.CompletedOverweightExport', support_1.sts.unit()),
}
exports.startedCleanup = {
    name: 'DmpQueue.StartedCleanup',
    /**
     * The cleanup of remaining pallet storage started.
     */
    matrixEnjinV1012: new support_1.EventType('DmpQueue.StartedCleanup', support_1.sts.unit()),
}
exports.cleanedSome = {
    name: 'DmpQueue.CleanedSome',
    /**
     * Some debris was cleaned up.
     */
    matrixEnjinV1012: new support_1.EventType(
        'DmpQueue.CleanedSome',
        support_1.sts.struct({
            keysRemoved: support_1.sts.number(),
        })
    ),
}
exports.completed = {
    name: 'DmpQueue.Completed',
    /**
     * The cleanup of remaining pallet storage completed.
     */
    matrixEnjinV1012: new support_1.EventType(
        'DmpQueue.Completed',
        support_1.sts.struct({
            error: support_1.sts.boolean(),
        })
    ),
}
