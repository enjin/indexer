'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.deposits = exports.enteredUntil = void 0
var support_1 = require('../support')
var matrixEnjinV1012 = require('../matrixEnjinV1012')
exports.enteredUntil = {
    /**
     *  Contains the last block number that the safe-mode will remain entered in.
     *
     *   Set to `None` when safe-mode is exited.
     *
     *  Safe-mode is automatically exited when the current block number exceeds this value.
     */
    matrixEnjinV1012: new support_1.StorageType('SafeMode.EnteredUntil', 'Optional', [], support_1.sts.number()),
}
exports.deposits = {
    /**
     *  Holds the reserve that was taken from an account at a specific block number.
     *
     *  This helps governance to have an overview of outstanding deposits that should be returned or
     *  slashed.
     */
    matrixEnjinV1012: new support_1.StorageType(
        'SafeMode.Deposits',
        'Optional',
        [matrixEnjinV1012.AccountId32, support_1.sts.number()],
        support_1.sts.bigint()
    ),
}
