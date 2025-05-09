'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.didUpdate = exports.now = void 0
var support_1 = require('../support')
exports.now = {
    /**
     *  Current time for the current block.
     */
    matrixEnjinV603: new support_1.StorageType('Timestamp.Now', 'Default', [], support_1.sts.bigint()),
}
exports.didUpdate = {
    /**
     *  Did the timestamp get updated in this block?
     */
    matrixEnjinV603: new support_1.StorageType('Timestamp.DidUpdate', 'Default', [], support_1.sts.boolean()),
}
