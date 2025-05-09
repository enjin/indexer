'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.batchedCallsLimit = void 0
var support_1 = require('../support')
exports.batchedCallsLimit = {
    /**
     *  The limit on the number of batched calls.
     */
    matrixV500: new support_1.ConstantType('EfinityUtility.batched_calls_limit', support_1.sts.number()),
}
