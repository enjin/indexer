'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.randomMaterial = void 0
var support_1 = require('../support')
var enjinV100 = require('../enjinV100')
exports.randomMaterial = {
    /**
     *  Series of block headers from the last 81 blocks that acts as random seed material. This
     *  is arranged as a ring buffer with `block_number % 81` being the index into the `Vec` of
     *  the oldest hash.
     */
    enjinV100: new support_1.StorageType(
        'RandomnessCollectiveFlip.RandomMaterial',
        'Default',
        [],
        support_1.sts.array(function () {
            return enjinV100.H256
        })
    ),
}
