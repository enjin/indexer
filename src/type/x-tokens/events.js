'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.transferredAssets = exports.transferredMultiAssets = void 0
var support_1 = require('../support')
var matrixEnjinV603 = require('../matrixEnjinV603')
var matrixEnjinV1012 = require('../matrixEnjinV1012')
exports.transferredMultiAssets = {
    name: 'XTokens.TransferredMultiAssets',
    /**
     * Transferred `MultiAsset` with fee.
     */
    matrixEnjinV603: new support_1.EventType(
        'XTokens.TransferredMultiAssets',
        support_1.sts.struct({
            sender: matrixEnjinV603.AccountId32,
            assets: support_1.sts.array(function () {
                return matrixEnjinV603.V3MultiAsset
            }),
            fee: matrixEnjinV603.V3MultiAsset,
            dest: matrixEnjinV603.V3MultiLocation,
        })
    ),
}
exports.transferredAssets = {
    name: 'XTokens.TransferredAssets',
    /**
     * Transferred `Asset` with fee.
     */
    matrixEnjinV1012: new support_1.EventType(
        'XTokens.TransferredAssets',
        support_1.sts.struct({
            sender: matrixEnjinV1012.AccountId32,
            assets: support_1.sts.array(function () {
                return matrixEnjinV1012.V4Asset
            }),
            fee: matrixEnjinV1012.V4Asset,
            dest: matrixEnjinV1012.V4Location,
        })
    ),
}
