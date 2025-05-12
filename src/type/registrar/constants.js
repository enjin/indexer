'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.dataDepositPerByte = exports.paraDeposit = void 0
var support_1 = require('../support')
exports.paraDeposit = {
    /**
     *  The deposit to be paid to run a parathread.
     *  This should include the cost for storing the genesis head and validation code.
     */
    enjinV100: new support_1.ConstantType('Registrar.ParaDeposit', support_1.sts.bigint()),
}
exports.dataDepositPerByte = {
    /**
     *  The deposit to be paid per byte stored on chain.
     */
    enjinV100: new support_1.ConstantType('Registrar.DataDepositPerByte', support_1.sts.bigint()),
}
