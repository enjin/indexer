'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.multisigCancelled = exports.multisigExecuted = exports.multisigApproval = exports.newMultisig = void 0
var support_1 = require('../support')
var matrixV500 = require('../matrixV500')
var matrixV602 = require('../matrixV602')
var matrixEnjinV603 = require('../matrixEnjinV603')
var matrixV604 = require('../matrixV604')
exports.newMultisig = {
    name: 'Multisig.NewMultisig',
    /**
     * A new multisig operation has begun.
     */
    matrixEnjinV603: new support_1.EventType(
        'Multisig.NewMultisig',
        support_1.sts.struct({
            approving: matrixEnjinV603.AccountId32,
            multisig: matrixEnjinV603.AccountId32,
            callHash: support_1.sts.bytes(),
        })
    ),
}
exports.multisigApproval = {
    name: 'Multisig.MultisigApproval',
    /**
     * A multisig operation has been approved by someone.
     */
    matrixEnjinV603: new support_1.EventType(
        'Multisig.MultisigApproval',
        support_1.sts.struct({
            approving: matrixEnjinV603.AccountId32,
            timepoint: matrixEnjinV603.Timepoint,
            multisig: matrixEnjinV603.AccountId32,
            callHash: support_1.sts.bytes(),
        })
    ),
}
exports.multisigExecuted = {
    name: 'Multisig.MultisigExecuted',
    /**
     * A multisig operation has been executed.
     */
    matrixEnjinV603: new support_1.EventType(
        'Multisig.MultisigExecuted',
        support_1.sts.struct({
            approving: matrixEnjinV603.AccountId32,
            timepoint: matrixEnjinV603.Timepoint,
            multisig: matrixEnjinV603.AccountId32,
            callHash: support_1.sts.bytes(),
            result: support_1.sts.result(
                function () {
                    return support_1.sts.unit()
                },
                function () {
                    return matrixEnjinV603.DispatchError
                }
            ),
        })
    ),
    /**
     * A multisig operation has been executed.
     */
    matrixV500: new support_1.EventType(
        'Multisig.MultisigExecuted',
        support_1.sts.struct({
            approving: matrixV500.AccountId32,
            timepoint: matrixV500.Timepoint,
            multisig: matrixV500.AccountId32,
            callHash: support_1.sts.bytes(),
            result: support_1.sts.result(
                function () {
                    return support_1.sts.unit()
                },
                function () {
                    return matrixV500.DispatchError
                }
            ),
        })
    ),
    /**
     * A multisig operation has been executed.
     */
    matrixV602: new support_1.EventType(
        'Multisig.MultisigExecuted',
        support_1.sts.struct({
            approving: matrixV602.AccountId32,
            timepoint: matrixV602.Timepoint,
            multisig: matrixV602.AccountId32,
            callHash: support_1.sts.bytes(),
            result: support_1.sts.result(
                function () {
                    return support_1.sts.unit()
                },
                function () {
                    return matrixV602.DispatchError
                }
            ),
        })
    ),
    /**
     * A multisig operation has been executed.
     */
    matrixV604: new support_1.EventType(
        'Multisig.MultisigExecuted',
        support_1.sts.struct({
            approving: matrixV604.AccountId32,
            timepoint: matrixV604.Timepoint,
            multisig: matrixV604.AccountId32,
            callHash: support_1.sts.bytes(),
            result: support_1.sts.result(
                function () {
                    return support_1.sts.unit()
                },
                function () {
                    return matrixV604.DispatchError
                }
            ),
        })
    ),
}
exports.multisigCancelled = {
    name: 'Multisig.MultisigCancelled',
    /**
     * A multisig operation has been cancelled.
     */
    matrixEnjinV603: new support_1.EventType(
        'Multisig.MultisigCancelled',
        support_1.sts.struct({
            cancelling: matrixEnjinV603.AccountId32,
            timepoint: matrixEnjinV603.Timepoint,
            multisig: matrixEnjinV603.AccountId32,
            callHash: support_1.sts.bytes(),
        })
    ),
}
