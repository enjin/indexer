'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.maxFreezes = exports.maxHolds = exports.maxReserves = exports.maxLocks = exports.existentialDeposit = void 0
var support_1 = require('../support')
exports.existentialDeposit = {
    /**
     *  The minimum amount required to keep an account open. MUST BE GREATER THAN ZERO!
     *
     *  If you *really* need it to be zero, you can enable the feature `insecure_zero_ed` for
     *  this pallet. However, you do so at your own risk: this will open up a major DoS vector.
     *  In case you have multiple sources of provider references, you may also get unexpected
     *  behaviour if you set this to zero.
     *
     *  Bottom line: Do yourself a favour and make it at least one!
     */
    matrixEnjinV603: new support_1.ConstantType('Balances.ExistentialDeposit', support_1.sts.bigint()),
}
exports.maxLocks = {
    /**
     *  The maximum number of locks that should exist on an account.
     *  Not strictly enforced, but used for weight estimation.
     */
    matrixEnjinV603: new support_1.ConstantType('Balances.MaxLocks', support_1.sts.number()),
}
exports.maxReserves = {
    /**
     *  The maximum number of named reserves that can exist on an account.
     */
    matrixEnjinV603: new support_1.ConstantType('Balances.MaxReserves', support_1.sts.number()),
}
exports.maxHolds = {
    /**
     *  The maximum number of holds that can exist on an account at any time.
     */
    matrixEnjinV603: new support_1.ConstantType('Balances.MaxHolds', support_1.sts.number()),
}
exports.maxFreezes = {
    /**
     *  The maximum number of individual freeze locks that can exist on an account at any time.
     */
    matrixEnjinV603: new support_1.ConstantType('Balances.MaxFreezes', support_1.sts.number()),
}
