'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.author = void 0
var support_1 = require('../support')
var matrixEnjinV603 = require('../matrixEnjinV603')
exports.author = {
    /**
     *  Author of current block.
     */
    matrixEnjinV603: new support_1.StorageType('Authorship.Author', 'Optional', [], matrixEnjinV603.AccountId32),
}
