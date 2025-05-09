'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.executedDownward = exports.unsupportedVersion = exports.invalidFormat = void 0
var support_1 = require('../support')
var matrixV500 = require('../matrixV500')
var matrixEnjinV603 = require('../matrixEnjinV603')
var matrixV1010 = require('../matrixV1010')
var matrixEnjinV1012 = require('../matrixEnjinV1012')
exports.invalidFormat = {
    name: 'CumulusXcm.InvalidFormat',
    /**
     * Downward message is invalid XCM.
     * \[ id \]
     */
    matrixEnjinV603: new support_1.EventType('CumulusXcm.InvalidFormat', support_1.sts.bytes()),
}
exports.unsupportedVersion = {
    name: 'CumulusXcm.UnsupportedVersion',
    /**
     * Downward message is unsupported version of XCM.
     * \[ id \]
     */
    matrixEnjinV603: new support_1.EventType('CumulusXcm.UnsupportedVersion', support_1.sts.bytes()),
}
exports.executedDownward = {
    name: 'CumulusXcm.ExecutedDownward',
    /**
     * Downward message executed with the given outcome.
     * \[ id, outcome \]
     */
    matrixEnjinV603: new support_1.EventType(
        'CumulusXcm.ExecutedDownward',
        support_1.sts.tuple([support_1.sts.bytes(), matrixEnjinV603.V3Outcome])
    ),
    /**
     * Downward message executed with the given outcome.
     * \[ id, outcome \]
     */
    matrixEnjinV1012: new support_1.EventType(
        'CumulusXcm.ExecutedDownward',
        support_1.sts.tuple([support_1.sts.bytes(), matrixEnjinV1012.V4Outcome])
    ),
    /**
     * Downward message executed with the given outcome.
     * \[ id, outcome \]
     */
    matrixV500: new support_1.EventType(
        'CumulusXcm.ExecutedDownward',
        support_1.sts.tuple([support_1.sts.bytes(), matrixV500.V3Outcome])
    ),
    /**
     * Downward message executed with the given outcome.
     * \[ id, outcome \]
     */
    matrixV1010: new support_1.EventType(
        'CumulusXcm.ExecutedDownward',
        support_1.sts.tuple([support_1.sts.bytes(), matrixV1010.V4Outcome])
    ),
}
