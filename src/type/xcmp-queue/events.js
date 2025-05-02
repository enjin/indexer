'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.overweightServiced =
    exports.overweightEnqueued =
    exports.xcmpMessageSent =
    exports.badFormat =
    exports.badVersion =
    exports.fail =
    exports.success =
        void 0
var support_1 = require('../support')
var matrixV500 = require('../matrixV500')
var matrixEnjinV603 = require('../matrixEnjinV603')
var matrixEnjinV1004 = require('../matrixEnjinV1004')
var matrixV1004 = require('../matrixV1004')
exports.success = {
    name: 'XcmpQueue.Success',
    /**
     * Some XCM was executed ok.
     */
    matrixEnjinV603: new support_1.EventType(
        'XcmpQueue.Success',
        support_1.sts.struct({
            messageHash: support_1.sts.option(function () {
                return support_1.sts.bytes()
            }),
            weight: matrixEnjinV603.Weight,
        })
    ),
    /**
     * Some XCM was executed ok.
     */
    matrixEnjinV1004: new support_1.EventType(
        'XcmpQueue.Success',
        support_1.sts.struct({
            messageHash: support_1.sts.bytes(),
            messageId: support_1.sts.bytes(),
            weight: matrixEnjinV1004.Weight,
        })
    ),
    /**
     * Some XCM was executed ok.
     */
    matrixV500: new support_1.EventType(
        'XcmpQueue.Success',
        support_1.sts.struct({
            messageHash: support_1.sts.option(function () {
                return support_1.sts.bytes()
            }),
            weight: matrixV500.Weight,
        })
    ),
    /**
     * Some XCM was executed ok.
     */
    matrixV1004: new support_1.EventType(
        'XcmpQueue.Success',
        support_1.sts.struct({
            messageHash: support_1.sts.bytes(),
            messageId: support_1.sts.bytes(),
            weight: matrixV1004.Weight,
        })
    ),
}
exports.fail = {
    name: 'XcmpQueue.Fail',
    /**
     * Some XCM failed.
     */
    matrixEnjinV603: new support_1.EventType(
        'XcmpQueue.Fail',
        support_1.sts.struct({
            messageHash: support_1.sts.option(function () {
                return support_1.sts.bytes()
            }),
            error: matrixEnjinV603.V3Error,
            weight: matrixEnjinV603.Weight,
        })
    ),
    /**
     * Some XCM failed.
     */
    matrixEnjinV1004: new support_1.EventType(
        'XcmpQueue.Fail',
        support_1.sts.struct({
            messageHash: support_1.sts.bytes(),
            messageId: support_1.sts.bytes(),
            error: matrixEnjinV1004.V3Error,
            weight: matrixEnjinV1004.Weight,
        })
    ),
    /**
     * Some XCM failed.
     */
    matrixV500: new support_1.EventType(
        'XcmpQueue.Fail',
        support_1.sts.struct({
            messageHash: support_1.sts.option(function () {
                return support_1.sts.bytes()
            }),
            error: matrixV500.V3Error,
            weight: matrixV500.Weight,
        })
    ),
    /**
     * Some XCM failed.
     */
    matrixV1004: new support_1.EventType(
        'XcmpQueue.Fail',
        support_1.sts.struct({
            messageHash: support_1.sts.bytes(),
            messageId: support_1.sts.bytes(),
            error: matrixV1004.V3Error,
            weight: matrixV1004.Weight,
        })
    ),
}
exports.badVersion = {
    name: 'XcmpQueue.BadVersion',
    /**
     * Bad XCM version used.
     */
    matrixEnjinV603: new support_1.EventType(
        'XcmpQueue.BadVersion',
        support_1.sts.struct({
            messageHash: support_1.sts.option(function () {
                return support_1.sts.bytes()
            }),
        })
    ),
    /**
     * Bad XCM version used.
     */
    matrixEnjinV1004: new support_1.EventType(
        'XcmpQueue.BadVersion',
        support_1.sts.struct({
            messageHash: support_1.sts.bytes(),
        })
    ),
    /**
     * Bad XCM version used.
     */
    matrixV500: new support_1.EventType(
        'XcmpQueue.BadVersion',
        support_1.sts.struct({
            messageHash: support_1.sts.option(function () {
                return support_1.sts.bytes()
            }),
        })
    ),
    /**
     * Bad XCM version used.
     */
    matrixV1004: new support_1.EventType(
        'XcmpQueue.BadVersion',
        support_1.sts.struct({
            messageHash: support_1.sts.bytes(),
        })
    ),
}
exports.badFormat = {
    name: 'XcmpQueue.BadFormat',
    /**
     * Bad XCM format used.
     */
    matrixEnjinV603: new support_1.EventType(
        'XcmpQueue.BadFormat',
        support_1.sts.struct({
            messageHash: support_1.sts.option(function () {
                return support_1.sts.bytes()
            }),
        })
    ),
    /**
     * Bad XCM format used.
     */
    matrixEnjinV1004: new support_1.EventType(
        'XcmpQueue.BadFormat',
        support_1.sts.struct({
            messageHash: support_1.sts.bytes(),
        })
    ),
    /**
     * Bad XCM format used.
     */
    matrixV500: new support_1.EventType(
        'XcmpQueue.BadFormat',
        support_1.sts.struct({
            messageHash: support_1.sts.option(function () {
                return support_1.sts.bytes()
            }),
        })
    ),
    /**
     * Bad XCM format used.
     */
    matrixV1004: new support_1.EventType(
        'XcmpQueue.BadFormat',
        support_1.sts.struct({
            messageHash: support_1.sts.bytes(),
        })
    ),
}
exports.xcmpMessageSent = {
    name: 'XcmpQueue.XcmpMessageSent',
    /**
     * An HRMP message was sent to a sibling parachain.
     */
    matrixEnjinV603: new support_1.EventType(
        'XcmpQueue.XcmpMessageSent',
        support_1.sts.struct({
            messageHash: support_1.sts.option(function () {
                return support_1.sts.bytes()
            }),
        })
    ),
    /**
     * An HRMP message was sent to a sibling parachain.
     */
    matrixEnjinV1004: new support_1.EventType(
        'XcmpQueue.XcmpMessageSent',
        support_1.sts.struct({
            messageHash: support_1.sts.bytes(),
        })
    ),
    /**
     * An HRMP message was sent to a sibling parachain.
     */
    matrixV500: new support_1.EventType(
        'XcmpQueue.XcmpMessageSent',
        support_1.sts.struct({
            messageHash: support_1.sts.option(function () {
                return support_1.sts.bytes()
            }),
        })
    ),
    /**
     * An HRMP message was sent to a sibling parachain.
     */
    matrixV1004: new support_1.EventType(
        'XcmpQueue.XcmpMessageSent',
        support_1.sts.struct({
            messageHash: support_1.sts.bytes(),
        })
    ),
}
exports.overweightEnqueued = {
    name: 'XcmpQueue.OverweightEnqueued',
    /**
     * An XCM exceeded the individual message weight budget.
     */
    matrixEnjinV603: new support_1.EventType(
        'XcmpQueue.OverweightEnqueued',
        support_1.sts.struct({
            sender: matrixEnjinV603.Id,
            sentAt: support_1.sts.number(),
            index: support_1.sts.bigint(),
            required: matrixEnjinV603.Weight,
        })
    ),
}
exports.overweightServiced = {
    name: 'XcmpQueue.OverweightServiced',
    /**
     * An XCM from the overweight queue was executed with the given actual weight used.
     */
    matrixEnjinV603: new support_1.EventType(
        'XcmpQueue.OverweightServiced',
        support_1.sts.struct({
            index: support_1.sts.bigint(),
            used: matrixEnjinV603.Weight,
        })
    ),
}
