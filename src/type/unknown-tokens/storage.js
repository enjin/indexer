'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.abstractFungibleBalances = exports.concreteFungibleBalances = void 0
var support_1 = require('../support')
var matrixEnjinV1012 = require('../matrixEnjinV1012')
exports.concreteFungibleBalances = {
    /**
     *  Concrete fungible balances under a given location and a concrete
     *  fungible id.
     *
     *  double_map: who, asset_id => u128
     */
    matrixEnjinV1012: new support_1.StorageType(
        'UnknownTokens.ConcreteFungibleBalances',
        'Default',
        [matrixEnjinV1012.V4Location, matrixEnjinV1012.V4Location],
        support_1.sts.bigint()
    ),
}
exports.abstractFungibleBalances = {
    /**
     *  Abstract fungible balances under a given location and a abstract
     *  fungible id.
     *
     *  double_map: who, asset_id => u128
     */
    matrixEnjinV1012: new support_1.StorageType(
        'UnknownTokens.AbstractFungibleBalances',
        'Default',
        [matrixEnjinV1012.V4Location, support_1.sts.bytes()],
        support_1.sts.bigint()
    ),
}
