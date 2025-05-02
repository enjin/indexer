'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.feeDistributorAccountId = exports.poolAccountIds = exports.poolCount = void 0
var support_1 = require('../support')
var matrixEnjinV603 = require('../matrixEnjinV603')
exports.poolCount = {
    /**
     *  The number of pools
     */
    matrixEnjinV603: new support_1.ConstantType('Pools.PoolCount', support_1.sts.number()),
}
exports.poolAccountIds = {
    /**
     *  The [`AccountId`](frame_system::Config::AccountId) for each pool
     */
    matrixEnjinV603: new support_1.ConstantType('Pools.PoolAccountIds', matrixEnjinV603.PoolAccountIds),
}
exports.feeDistributorAccountId = {
    /**
     *  The [`AccountId`](frame_system::Config::AccountId) that holds fees until they are
     *  distributed
     */
    matrixEnjinV603: new support_1.ConstantType('Pools.FeeDistributorAccountId', matrixEnjinV603.AccountId32),
}
