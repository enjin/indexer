'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.xcmTransferFailed = exports.minimumWeightUpdated = void 0
var support_1 = require('../support')
var matrixV500 = require('../matrixV500')
var matrixV602 = require('../matrixV602')
exports.minimumWeightUpdated = {
    name: 'EfinityXcm.MinimumWeightUpdated',
    /**
     * Xcm fee and weight updated
     */
    matrixV500: new support_1.EventType('EfinityXcm.MinimumWeightUpdated', matrixV500.MinimumWeightFeePair),
}
exports.xcmTransferFailed = {
    name: 'EfinityXcm.XcmTransferFailed',
    /**
     * XCM transfer failed
     */
    matrixV500: new support_1.EventType('EfinityXcm.XcmTransferFailed', matrixV500.DispatchError),
    /**
     * XCM transfer failed
     */
    matrixV602: new support_1.EventType('EfinityXcm.XcmTransferFailed', matrixV602.DispatchError),
}
