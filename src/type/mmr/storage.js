'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.nodes = exports.numberOfLeaves = exports.rootHash = void 0
var support_1 = require('../support')
var enjinV100 = require('../enjinV100')
exports.rootHash = {
    /**
     *  Latest MMR Root hash.
     */
    enjinV100: new support_1.StorageType('Mmr.RootHash', 'Default', [], enjinV100.H256),
}
exports.numberOfLeaves = {
    /**
     *  Current size of the MMR (number of leaves).
     */
    enjinV100: new support_1.StorageType('Mmr.NumberOfLeaves', 'Default', [], support_1.sts.bigint()),
}
exports.nodes = {
    /**
     *  Hashes of the nodes in the MMR.
     *
     *  Note this collection only contains MMR peaks, the inner nodes (and leaves)
     *  are pruned and only stored in the Offchain DB.
     */
    enjinV100: new support_1.StorageType('Mmr.Nodes', 'Optional', [support_1.sts.bigint()], enjinV100.H256),
}
