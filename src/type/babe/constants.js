'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.maxNominators = exports.maxAuthorities = exports.expectedBlockTime = exports.epochDuration = void 0
var support_1 = require('../support')
exports.epochDuration = {
    /**
     *  The amount of time, in slots, that each epoch should last.
     *  NOTE: Currently it is not possible to change the epoch duration after
     *  the chain has started. Attempting to do so will brick block production.
     */
    enjinV100: new support_1.ConstantType('Babe.EpochDuration', support_1.sts.bigint()),
}
exports.expectedBlockTime = {
    /**
     *  The expected average block time at which BABE should be creating
     *  blocks. Since BABE is probabilistic it is not trivial to figure out
     *  what the expected average block time should be based on the slot
     *  duration and the security parameter `c` (where `1 - c` represents
     *  the probability of a slot being empty).
     */
    enjinV100: new support_1.ConstantType('Babe.ExpectedBlockTime', support_1.sts.bigint()),
}
exports.maxAuthorities = {
    /**
     *  Max number of authorities allowed
     */
    enjinV100: new support_1.ConstantType('Babe.MaxAuthorities', support_1.sts.number()),
}
exports.maxNominators = {
    /**
     *  The maximum number of nominators for each validator.
     */
    enjinV1032: new support_1.ConstantType('Babe.MaxNominators', support_1.sts.number()),
}
