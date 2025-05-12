'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.withdrawn = exports.deposited = void 0
var support_1 = require('../support')
var matrixV500 = require('../matrixV500')
var matrixEnjinV603 = require('../matrixEnjinV603')
var matrixV1010 = require('../matrixV1010')
var matrixEnjinV1012 = require('../matrixEnjinV1012')
exports.deposited = {
    name: 'UnknownTokens.Deposited',
    /**
     * Deposit success.
     */
    matrixEnjinV603: new support_1.EventType(
        'UnknownTokens.Deposited',
        support_1.sts.struct({
            asset: matrixEnjinV603.V3MultiAsset,
            who: matrixEnjinV603.V3MultiLocation,
        })
    ),
    /**
     * Deposit success.
     */
    matrixEnjinV1012: new support_1.EventType(
        'UnknownTokens.Deposited',
        support_1.sts.struct({
            asset: matrixEnjinV1012.V4Asset,
            who: matrixEnjinV1012.V4Location,
        })
    ),
    /**
     * Deposit success.
     */
    matrixV500: new support_1.EventType(
        'UnknownTokens.Deposited',
        support_1.sts.struct({
            asset: matrixV500.V3MultiAsset,
            who: matrixV500.V3MultiLocation,
        })
    ),
    /**
     * Deposit success.
     */
    matrixV1010: new support_1.EventType(
        'UnknownTokens.Deposited',
        support_1.sts.struct({
            asset: matrixV1010.V4Asset,
            who: matrixV1010.V4Location,
        })
    ),
}
exports.withdrawn = {
    name: 'UnknownTokens.Withdrawn',
    /**
     * Withdraw success.
     */
    matrixEnjinV603: new support_1.EventType(
        'UnknownTokens.Withdrawn',
        support_1.sts.struct({
            asset: matrixEnjinV603.V3MultiAsset,
            who: matrixEnjinV603.V3MultiLocation,
        })
    ),
    /**
     * Withdraw success.
     */
    matrixEnjinV1012: new support_1.EventType(
        'UnknownTokens.Withdrawn',
        support_1.sts.struct({
            asset: matrixEnjinV1012.V4Asset,
            who: matrixEnjinV1012.V4Location,
        })
    ),
    /**
     * Withdraw success.
     */
    matrixV500: new support_1.EventType(
        'UnknownTokens.Withdrawn',
        support_1.sts.struct({
            asset: matrixV500.V3MultiAsset,
            who: matrixV500.V3MultiLocation,
        })
    ),
    /**
     * Withdraw success.
     */
    matrixV1010: new support_1.EventType(
        'UnknownTokens.Withdrawn',
        support_1.sts.struct({
            asset: matrixV1010.V4Asset,
            who: matrixV1010.V4Location,
        })
    ),
}
