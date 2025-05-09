'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.maxNominators = exports.maxSetIdSessionEntries = exports.maxAuthorities = void 0
var support_1 = require('../support')
exports.maxAuthorities = {
    /**
     *  The maximum number of authorities that can be added.
     */
    enjinV100: new support_1.ConstantType('Beefy.MaxAuthorities', support_1.sts.number()),
}
exports.maxSetIdSessionEntries = {
    /**
     *  The maximum number of entries to keep in the set id to session index mapping.
     *
     *  Since the `SetIdSession` map is only used for validating equivocations this
     *  value should relate to the bonding duration of whatever staking system is
     *  being used (if any). If equivocation handling is not enabled then this value
     *  can be zero.
     */
    enjinV100: new support_1.ConstantType('Beefy.MaxSetIdSessionEntries', support_1.sts.bigint()),
}
exports.maxNominators = {
    /**
     *  The maximum number of nominators for each validator.
     */
    enjinV1032: new support_1.ConstantType('Beefy.MaxNominators', support_1.sts.number()),
}
