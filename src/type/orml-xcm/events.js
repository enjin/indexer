'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.sent = void 0
var support_1 = require('../support')
var matrixV500 = require('../matrixV500')
var matrixEnjinV603 = require('../matrixEnjinV603')
var matrixV1010 = require('../matrixV1010')
var matrixEnjinV1012 = require('../matrixEnjinV1012')
exports.sent = {
    name: 'OrmlXcm.Sent',
    /**
     * XCM message sent. \[to, message\]
     */
    matrixEnjinV603: new support_1.EventType(
        'OrmlXcm.Sent',
        support_1.sts.struct({
            to: matrixEnjinV603.V3MultiLocation,
            message: support_1.sts.array(function () {
                return matrixEnjinV603.V3Instruction
            }),
        })
    ),
    /**
     * XCM message sent. \[to, message\]
     */
    matrixEnjinV1012: new support_1.EventType(
        'OrmlXcm.Sent',
        support_1.sts.struct({
            to: matrixEnjinV1012.V4Location,
            message: support_1.sts.array(function () {
                return matrixEnjinV1012.V4Instruction
            }),
        })
    ),
    /**
     * XCM message sent. \[to, message\]
     */
    matrixV500: new support_1.EventType(
        'OrmlXcm.Sent',
        support_1.sts.struct({
            to: matrixV500.V3MultiLocation,
            message: support_1.sts.array(function () {
                return matrixV500.V3Instruction
            }),
        })
    ),
    /**
     * XCM message sent. \[to, message\]
     */
    matrixV1010: new support_1.EventType(
        'OrmlXcm.Sent',
        support_1.sts.struct({
            to: matrixV1010.V4Location,
            message: support_1.sts.array(function () {
                return matrixV1010.V4Instruction
            }),
        })
    ),
}
