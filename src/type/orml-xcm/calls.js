'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.sendAsSovereign = void 0
var support_1 = require('../support')
var matrixV500 = require('../matrixV500')
var matrixEnjinV603 = require('../matrixEnjinV603')
var matrixV1010 = require('../matrixV1010')
var matrixEnjinV1012 = require('../matrixEnjinV1012')
exports.sendAsSovereign = {
    name: 'OrmlXcm.send_as_sovereign',
    /**
     * Send an XCM message as parachain sovereign.
     */
    matrixEnjinV603: new support_1.CallType(
        'OrmlXcm.send_as_sovereign',
        support_1.sts.struct({
            dest: matrixEnjinV603.VersionedMultiLocation,
            message: matrixEnjinV603.VersionedXcm,
        })
    ),
    /**
     * Send an XCM message as parachain sovereign.
     */
    matrixEnjinV1012: new support_1.CallType(
        'OrmlXcm.send_as_sovereign',
        support_1.sts.struct({
            dest: matrixEnjinV1012.VersionedLocation,
            message: matrixEnjinV1012.VersionedXcm,
        })
    ),
    /**
     * Send an XCM message as parachain sovereign.
     */
    matrixV500: new support_1.CallType(
        'OrmlXcm.send_as_sovereign',
        support_1.sts.struct({
            dest: matrixV500.VersionedMultiLocation,
            message: matrixV500.VersionedXcm,
        })
    ),
    /**
     * Send an XCM message as parachain sovereign.
     */
    matrixV1010: new support_1.CallType(
        'OrmlXcm.send_as_sovereign',
        support_1.sts.struct({
            dest: matrixV1010.VersionedLocation,
            message: matrixV1010.VersionedXcm,
        })
    ),
}
