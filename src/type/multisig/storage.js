'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.multisigs = void 0
var support_1 = require('../support')
var matrixEnjinV603 = require('../matrixEnjinV603')
exports.multisigs = {
    /**
     *  The set of open multisig operations.
     */
    matrixEnjinV603: new support_1.StorageType(
        'Multisig.Multisigs',
        'Optional',
        [matrixEnjinV603.AccountId32, support_1.sts.bytes()],
        matrixEnjinV603.Multisig
    ),
}
