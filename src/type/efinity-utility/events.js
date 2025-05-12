'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.batchFailed = exports.batchPartiallyDispatched = exports.batchDispatched = void 0
var support_1 = require('../support')
var matrixV500 = require('../matrixV500')
var matrixV602 = require('../matrixV602')
exports.batchDispatched = {
    name: 'EfinityUtility.BatchDispatched',
    /**
     * Batch of calls dispatched without errors.
     */
    matrixV500: new support_1.EventType('EfinityUtility.BatchDispatched', support_1.sts.unit()),
}
exports.batchPartiallyDispatched = {
    name: 'EfinityUtility.BatchPartiallyDispatched',
    /**
     * Batch of calls dispatched, but some calls resulted in error.
     * Indexes and errors of failing dispatch calls are provided.
     */
    matrixV500: new support_1.EventType(
        'EfinityUtility.BatchPartiallyDispatched',
        support_1.sts.array(function () {
            return support_1.sts.tuple(function () {
                return [support_1.sts.number(), matrixV500.DispatchError]
            })
        })
    ),
    /**
     * Batch of calls dispatched, but some calls resulted in error.
     * Indexes and errors of failing dispatch calls are provided.
     */
    matrixV602: new support_1.EventType(
        'EfinityUtility.BatchPartiallyDispatched',
        support_1.sts.array(function () {
            return support_1.sts.tuple(function () {
                return [support_1.sts.number(), matrixV602.DispatchError]
            })
        })
    ),
}
exports.batchFailed = {
    name: 'EfinityUtility.BatchFailed',
    /**
     * Batch of calls did not disptach completely.
     * Index and error of the failing dispatch call is provided.
     */
    matrixV500: new support_1.EventType(
        'EfinityUtility.BatchFailed',
        support_1.sts.struct({
            index: support_1.sts.number(),
            error: matrixV500.DispatchError,
        })
    ),
    /**
     * Batch of calls did not disptach completely.
     * Index and error of the failing dispatch call is provided.
     */
    matrixV602: new support_1.EventType(
        'EfinityUtility.BatchFailed',
        support_1.sts.struct({
            index: support_1.sts.number(),
            error: matrixV602.DispatchError,
        })
    ),
}
