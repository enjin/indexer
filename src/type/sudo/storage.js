'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.key = void 0
var support_1 = require('../support')
var matrixV500 = require('../matrixV500')
exports.key = {
    /**
     *  The `AccountId` of the sudo key.
     */
    matrixV500: new support_1.StorageType('Sudo.Key', 'Optional', [], matrixV500.AccountId32),
}
