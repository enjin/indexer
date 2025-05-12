'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.pools = void 0
var support_1 = require('../support')
var matrixEnjinV603 = require('../matrixEnjinV603')
exports.pools = {
    /**
     *  Information about the pools
     */
    matrixEnjinV603: new support_1.StorageType(
        'Pools.Pools',
        'Default',
        [],
        support_1.sts.array(function () {
            return support_1.sts.tuple(function () {
                return [matrixEnjinV603.AccountId32, matrixEnjinV603.Pool]
            })
        })
    ),
}
