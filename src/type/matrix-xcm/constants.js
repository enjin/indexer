'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.nativeCurrencyId = void 0
var support_1 = require('../support')
var matrixEnjinV603 = require('../matrixEnjinV603')
exports.nativeCurrencyId = {
    /**
     *  ID of the native currency of the chain (EFI).
     */
    matrixEnjinV603: new support_1.ConstantType('MatrixXcm.NativeCurrencyId', matrixEnjinV603.AssetId),
}
