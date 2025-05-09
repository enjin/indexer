'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.dispatchedAs =
    exports.itemFailed =
    exports.itemCompleted =
    exports.batchCompletedWithErrors =
    exports.batchCompleted =
    exports.batchInterrupted =
        void 0
var support_1 = require('../support')
var enjinV100 = require('../enjinV100')
var v100 = require('../v100')
var enjinV101 = require('../enjinV101')
var v104 = require('../v104')
var v105 = require('../v105')
var matrixV500 = require('../matrixV500')
var matrixV602 = require('../matrixV602')
var matrixEnjinV603 = require('../matrixEnjinV603')
var matrixV604 = require('../matrixV604')
exports.batchInterrupted = {
    name: 'Utility.BatchInterrupted',
    /**
     * Batch of dispatches did not complete fully. Index of first failing dispatch given, as
     * well as the error.
     */
    matrixEnjinV603: new support_1.EventType(
        'Utility.BatchInterrupted',
        support_1.sts.struct({
            index: support_1.sts.number(),
            error: matrixEnjinV603.DispatchError,
        })
    ),
    /**
     * Batch of dispatches did not complete fully. Index of first failing dispatch given, as
     * well as the error.
     */
    matrixV500: new support_1.EventType(
        'Utility.BatchInterrupted',
        support_1.sts.struct({
            index: support_1.sts.number(),
            error: matrixV500.DispatchError,
        })
    ),
    /**
     * Batch of dispatches did not complete fully. Index of first failing dispatch given, as
     * well as the error.
     */
    matrixV602: new support_1.EventType(
        'Utility.BatchInterrupted',
        support_1.sts.struct({
            index: support_1.sts.number(),
            error: matrixV602.DispatchError,
        })
    ),
    /**
     * Batch of dispatches did not complete fully. Index of first failing dispatch given, as
     * well as the error.
     */
    matrixV604: new support_1.EventType(
        'Utility.BatchInterrupted',
        support_1.sts.struct({
            index: support_1.sts.number(),
            error: matrixV604.DispatchError,
        })
    ),
    /**
     * Batch of dispatches did not complete fully. Index of first failing dispatch given, as
     * well as the error.
     */
    enjinV100: new support_1.EventType(
        'Utility.BatchInterrupted',
        support_1.sts.struct({
            index: support_1.sts.number(),
            error: enjinV100.DispatchError,
        })
    ),
    /**
     * Batch of dispatches did not complete fully. Index of first failing dispatch given, as
     * well as the error.
     */
    enjinV101: new support_1.EventType(
        'Utility.BatchInterrupted',
        support_1.sts.struct({
            index: support_1.sts.number(),
            error: enjinV101.DispatchError,
        })
    ),
    /**
     * Batch of dispatches did not complete fully. Index of first failing dispatch given, as
     * well as the error.
     */
    v100: new support_1.EventType(
        'Utility.BatchInterrupted',
        support_1.sts.struct({
            index: support_1.sts.number(),
            error: v100.DispatchError,
        })
    ),
    /**
     * Batch of dispatches did not complete fully. Index of first failing dispatch given, as
     * well as the error.
     */
    v104: new support_1.EventType(
        'Utility.BatchInterrupted',
        support_1.sts.struct({
            index: support_1.sts.number(),
            error: v104.DispatchError,
        })
    ),
    /**
     * Batch of dispatches did not complete fully. Index of first failing dispatch given, as
     * well as the error.
     */
    v105: new support_1.EventType(
        'Utility.BatchInterrupted',
        support_1.sts.struct({
            index: support_1.sts.number(),
            error: v105.DispatchError,
        })
    ),
}
exports.batchCompleted = {
    name: 'Utility.BatchCompleted',
    /**
     * Batch of dispatches completed fully with no error.
     */
    matrixEnjinV603: new support_1.EventType('Utility.BatchCompleted', support_1.sts.unit()),
}
exports.batchCompletedWithErrors = {
    name: 'Utility.BatchCompletedWithErrors',
    /**
     * Batch of dispatches completed but has errors.
     */
    matrixEnjinV603: new support_1.EventType('Utility.BatchCompletedWithErrors', support_1.sts.unit()),
}
exports.itemCompleted = {
    name: 'Utility.ItemCompleted',
    /**
     * A single item within a Batch of dispatches has completed with no error.
     */
    matrixEnjinV603: new support_1.EventType('Utility.ItemCompleted', support_1.sts.unit()),
}
exports.itemFailed = {
    name: 'Utility.ItemFailed',
    /**
     * A single item within a Batch of dispatches has completed with error.
     */
    matrixEnjinV603: new support_1.EventType(
        'Utility.ItemFailed',
        support_1.sts.struct({
            error: matrixEnjinV603.DispatchError,
        })
    ),
    /**
     * A single item within a Batch of dispatches has completed with error.
     */
    matrixV500: new support_1.EventType(
        'Utility.ItemFailed',
        support_1.sts.struct({
            error: matrixV500.DispatchError,
        })
    ),
    /**
     * A single item within a Batch of dispatches has completed with error.
     */
    matrixV602: new support_1.EventType(
        'Utility.ItemFailed',
        support_1.sts.struct({
            error: matrixV602.DispatchError,
        })
    ),
    /**
     * A single item within a Batch of dispatches has completed with error.
     */
    matrixV604: new support_1.EventType(
        'Utility.ItemFailed',
        support_1.sts.struct({
            error: matrixV604.DispatchError,
        })
    ),
    /**
     * A single item within a Batch of dispatches has completed with error.
     */
    enjinV100: new support_1.EventType(
        'Utility.ItemFailed',
        support_1.sts.struct({
            error: enjinV100.DispatchError,
        })
    ),
    /**
     * A single item within a Batch of dispatches has completed with error.
     */
    enjinV101: new support_1.EventType(
        'Utility.ItemFailed',
        support_1.sts.struct({
            error: enjinV101.DispatchError,
        })
    ),
    /**
     * A single item within a Batch of dispatches has completed with error.
     */
    v100: new support_1.EventType(
        'Utility.ItemFailed',
        support_1.sts.struct({
            error: v100.DispatchError,
        })
    ),
    /**
     * A single item within a Batch of dispatches has completed with error.
     */
    v104: new support_1.EventType(
        'Utility.ItemFailed',
        support_1.sts.struct({
            error: v104.DispatchError,
        })
    ),
    /**
     * A single item within a Batch of dispatches has completed with error.
     */
    v105: new support_1.EventType(
        'Utility.ItemFailed',
        support_1.sts.struct({
            error: v105.DispatchError,
        })
    ),
}
exports.dispatchedAs = {
    name: 'Utility.DispatchedAs',
    /**
     * A call was dispatched.
     */
    matrixEnjinV603: new support_1.EventType(
        'Utility.DispatchedAs',
        support_1.sts.struct({
            result: support_1.sts.result(
                function () {
                    return support_1.sts.unit()
                },
                function () {
                    return matrixEnjinV603.DispatchError
                }
            ),
        })
    ),
    /**
     * A call was dispatched.
     */
    matrixV500: new support_1.EventType(
        'Utility.DispatchedAs',
        support_1.sts.struct({
            result: support_1.sts.result(
                function () {
                    return support_1.sts.unit()
                },
                function () {
                    return matrixV500.DispatchError
                }
            ),
        })
    ),
    /**
     * A call was dispatched.
     */
    matrixV602: new support_1.EventType(
        'Utility.DispatchedAs',
        support_1.sts.struct({
            result: support_1.sts.result(
                function () {
                    return support_1.sts.unit()
                },
                function () {
                    return matrixV602.DispatchError
                }
            ),
        })
    ),
    /**
     * A call was dispatched.
     */
    matrixV604: new support_1.EventType(
        'Utility.DispatchedAs',
        support_1.sts.struct({
            result: support_1.sts.result(
                function () {
                    return support_1.sts.unit()
                },
                function () {
                    return matrixV604.DispatchError
                }
            ),
        })
    ),
    /**
     * A call was dispatched.
     */
    enjinV100: new support_1.EventType(
        'Utility.DispatchedAs',
        support_1.sts.struct({
            result: support_1.sts.result(
                function () {
                    return support_1.sts.unit()
                },
                function () {
                    return enjinV100.DispatchError
                }
            ),
        })
    ),
    /**
     * A call was dispatched.
     */
    enjinV101: new support_1.EventType(
        'Utility.DispatchedAs',
        support_1.sts.struct({
            result: support_1.sts.result(
                function () {
                    return support_1.sts.unit()
                },
                function () {
                    return enjinV101.DispatchError
                }
            ),
        })
    ),
    /**
     * A call was dispatched.
     */
    v100: new support_1.EventType(
        'Utility.DispatchedAs',
        support_1.sts.struct({
            result: support_1.sts.result(
                function () {
                    return support_1.sts.unit()
                },
                function () {
                    return v100.DispatchError
                }
            ),
        })
    ),
    /**
     * A call was dispatched.
     */
    v104: new support_1.EventType(
        'Utility.DispatchedAs',
        support_1.sts.struct({
            result: support_1.sts.result(
                function () {
                    return support_1.sts.unit()
                },
                function () {
                    return v104.DispatchError
                }
            ),
        })
    ),
    /**
     * A call was dispatched.
     */
    v105: new support_1.EventType(
        'Utility.DispatchedAs',
        support_1.sts.struct({
            result: support_1.sts.result(
                function () {
                    return support_1.sts.unit()
                },
                function () {
                    return v105.DispatchError
                }
            ),
        })
    ),
}
