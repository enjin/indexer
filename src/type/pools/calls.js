'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.mutatePools = void 0
var support_1 = require('../support')
var matrixEnjinV603 = require('../matrixEnjinV603')
exports.mutatePools = {
    name: 'Pools.mutate_pools',
    /**
     * Mutate the pools. Can only be called by root.
     *
     * # Errors
     *
     * - [`Error::InvalidFeeShares`] if the fee shares do not add up to 100%
     */
    matrixEnjinV603: new support_1.CallType(
        'Pools.mutate_pools',
        support_1.sts.struct({
            mutation: matrixEnjinV603.PoolsMutation,
        })
    ),
}
