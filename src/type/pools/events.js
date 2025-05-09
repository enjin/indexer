'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.poolsMutated = void 0
var support_1 = require('../support')
var matrixEnjinV603 = require('../matrixEnjinV603')
exports.poolsMutated = {
    name: 'Pools.PoolsMutated',
    /**
     * Pools storage was modified by [`PoolsMutation`]
     */
    matrixEnjinV603: new support_1.EventType('Pools.PoolsMutated', matrixEnjinV603.PoolsMutation),
}
