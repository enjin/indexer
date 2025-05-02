'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.xcmTransferFailed = exports.minimumWeightUpdated = void 0
var support_1 = require('../support')
var matrixEnjinV603 = require('../matrixEnjinV603')
exports.minimumWeightUpdated = {
    name: 'MatrixXcm.MinimumWeightUpdated',
    /**
     * Xcm fee and weight updated
     */
    matrixEnjinV603: new support_1.EventType('MatrixXcm.MinimumWeightUpdated', matrixEnjinV603.MinimumWeightFeePair),
}
exports.xcmTransferFailed = {
    name: 'MatrixXcm.XcmTransferFailed',
    /**
     * XCM transfer failed
     */
    matrixEnjinV603: new support_1.EventType('MatrixXcm.XcmTransferFailed', matrixEnjinV603.DispatchError),
}
