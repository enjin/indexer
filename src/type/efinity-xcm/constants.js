'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.nativeCurrencyId = void 0
var support_1 = require('../support')
var matrixV500 = require('../matrixV500')
exports.nativeCurrencyId = {
    /**
     *  ID of the native currency of the chain (EFI).
     */
    matrixV500: new support_1.ConstantType('EfinityXcm.NativeCurrencyId', matrixV500.AssetId),
}
