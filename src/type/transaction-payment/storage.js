'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.storageVersion = exports.nextFeeMultiplier = void 0
var support_1 = require('../support')
var matrixEnjinV603 = require('../matrixEnjinV603')
exports.nextFeeMultiplier = {
    matrixEnjinV603: new support_1.StorageType(
        'TransactionPayment.NextFeeMultiplier',
        'Default',
        [],
        matrixEnjinV603.FixedU128
    ),
}
exports.storageVersion = {
    matrixEnjinV603: new support_1.StorageType(
        'TransactionPayment.StorageVersion',
        'Default',
        [],
        matrixEnjinV603.Releases
    ),
}
