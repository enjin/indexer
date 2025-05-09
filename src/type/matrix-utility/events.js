'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.batchFailed = exports.batchPartiallyDispatched = exports.batchDispatched = void 0
var support_1 = require('../support')
var matrixEnjinV603 = require('../matrixEnjinV603')
exports.batchDispatched = {
    name: 'MatrixUtility.BatchDispatched',
    /**
     * Batch of calls dispatched without errors.
     */
    matrixEnjinV603: new support_1.EventType('MatrixUtility.BatchDispatched', support_1.sts.unit()),
}
exports.batchPartiallyDispatched = {
    name: 'MatrixUtility.BatchPartiallyDispatched',
    /**
     * Batch of calls dispatched, but some calls resulted in error.
     * Indexes and errors of failing dispatch calls are provided.
     */
    matrixEnjinV603: new support_1.EventType(
        'MatrixUtility.BatchPartiallyDispatched',
        support_1.sts.array(function () {
            return support_1.sts.tuple(function () {
                return [support_1.sts.number(), matrixEnjinV603.DispatchError]
            })
        })
    ),
}
exports.batchFailed = {
    name: 'MatrixUtility.BatchFailed',
    /**
     * Batch of calls did not disptach completely.
     * Index and error of the failing dispatch call is provided.
     */
    matrixEnjinV603: new support_1.EventType(
        'MatrixUtility.BatchFailed',
        support_1.sts.struct({
            index: support_1.sts.number(),
            error: matrixEnjinV603.DispatchError,
        })
    ),
}
