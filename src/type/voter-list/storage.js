'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.listBags = exports.counterForListNodes = exports.listNodes = void 0
var support_1 = require('../support')
var enjinV100 = require('../enjinV100')
exports.listNodes = {
    /**
     *  A single node, within some bag.
     *
     *  Nodes store links forward and back within their respective bags.
     */
    enjinV100: new support_1.StorageType('VoterList.ListNodes', 'Optional', [enjinV100.AccountId32], enjinV100.Node),
}
exports.counterForListNodes = {
    /**
     * Counter for the related counted storage map
     */
    enjinV100: new support_1.StorageType('VoterList.CounterForListNodes', 'Default', [], support_1.sts.number()),
}
exports.listBags = {
    /**
     *  A bag stored in storage.
     *
     *  Stores a `Bag` struct, which stores head and tail pointers to itself.
     */
    enjinV100: new support_1.StorageType('VoterList.ListBags', 'Optional', [support_1.sts.bigint()], enjinV100.Bag),
}
