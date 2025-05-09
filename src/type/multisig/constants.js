'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.maxSignatories = exports.depositFactor = exports.depositBase = void 0
var support_1 = require('../support')
exports.depositBase = {
    /**
     *  The base amount of currency needed to reserve for creating a multisig execution or to
     *  store a dispatch call for later.
     *
     *  This is held for an additional storage item whose value size is
     *  `4 + sizeof((BlockNumber, Balance, AccountId))` bytes and whose key size is
     *  `32 + sizeof(AccountId)` bytes.
     */
    matrixEnjinV603: new support_1.ConstantType('Multisig.DepositBase', support_1.sts.bigint()),
}
exports.depositFactor = {
    /**
     *  The amount of currency needed per unit threshold when creating a multisig execution.
     *
     *  This is held for adding 32 bytes more into a pre-existing storage value.
     */
    matrixEnjinV603: new support_1.ConstantType('Multisig.DepositFactor', support_1.sts.bigint()),
}
exports.maxSignatories = {
    /**
     *  The maximum amount of signatories allowed in the multisig.
     */
    matrixEnjinV603: new support_1.ConstantType('Multisig.MaxSignatories', support_1.sts.number()),
}
