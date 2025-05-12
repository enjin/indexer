'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.transactionFeePaid = void 0
var support_1 = require('../support')
var matrixEnjinV603 = require('../matrixEnjinV603')
exports.transactionFeePaid = {
    name: 'TransactionPayment.TransactionFeePaid',
    /**
     * A transaction fee `actual_fee`, of which `tip` was added to the minimum inclusion fee,
     * has been paid by `who`.
     */
    matrixEnjinV603: new support_1.EventType(
        'TransactionPayment.TransactionFeePaid',
        support_1.sts.struct({
            who: matrixEnjinV603.AccountId32,
            actualFee: support_1.sts.bigint(),
            tip: support_1.sts.bigint(),
        })
    ),
}
