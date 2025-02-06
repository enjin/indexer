import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as matrixV500 from '../matrixV500'
import * as matrixV602 from '../matrixV602'
import * as matrixEnjinV603 from '../matrixEnjinV603'
import * as matrixV604 from '../matrixV604'

export const newMultisig =  {
    name: 'Multisig.NewMultisig',
    /**
     * A new multisig operation has begun.
     */
    matrixEnjinV603: new EventType(
        'Multisig.NewMultisig',
        sts.struct({
            approving: matrixEnjinV603.AccountId32,
            multisig: matrixEnjinV603.AccountId32,
            callHash: sts.bytes(),
        })
    ),
}

export const multisigApproval =  {
    name: 'Multisig.MultisigApproval',
    /**
     * A multisig operation has been approved by someone.
     */
    matrixEnjinV603: new EventType(
        'Multisig.MultisigApproval',
        sts.struct({
            approving: matrixEnjinV603.AccountId32,
            timepoint: matrixEnjinV603.Timepoint,
            multisig: matrixEnjinV603.AccountId32,
            callHash: sts.bytes(),
        })
    ),
}

export const multisigExecuted =  {
    name: 'Multisig.MultisigExecuted',
    /**
     * A multisig operation has been executed.
     */
    matrixEnjinV603: new EventType(
        'Multisig.MultisigExecuted',
        sts.struct({
            approving: matrixEnjinV603.AccountId32,
            timepoint: matrixEnjinV603.Timepoint,
            multisig: matrixEnjinV603.AccountId32,
            callHash: sts.bytes(),
            result: sts.result(() => sts.unit(), () => matrixEnjinV603.DispatchError),
        })
    ),
    /**
     * A multisig operation has been executed.
     */
    matrixV500: new EventType(
        'Multisig.MultisigExecuted',
        sts.struct({
            approving: matrixV500.AccountId32,
            timepoint: matrixV500.Timepoint,
            multisig: matrixV500.AccountId32,
            callHash: sts.bytes(),
            result: sts.result(() => sts.unit(), () => matrixV500.DispatchError),
        })
    ),
    /**
     * A multisig operation has been executed.
     */
    matrixV602: new EventType(
        'Multisig.MultisigExecuted',
        sts.struct({
            approving: matrixV602.AccountId32,
            timepoint: matrixV602.Timepoint,
            multisig: matrixV602.AccountId32,
            callHash: sts.bytes(),
            result: sts.result(() => sts.unit(), () => matrixV602.DispatchError),
        })
    ),
    /**
     * A multisig operation has been executed.
     */
    matrixV604: new EventType(
        'Multisig.MultisigExecuted',
        sts.struct({
            approving: matrixV604.AccountId32,
            timepoint: matrixV604.Timepoint,
            multisig: matrixV604.AccountId32,
            callHash: sts.bytes(),
            result: sts.result(() => sts.unit(), () => matrixV604.DispatchError),
        })
    ),
}

export const multisigCancelled =  {
    name: 'Multisig.MultisigCancelled',
    /**
     * A multisig operation has been cancelled.
     */
    matrixEnjinV603: new EventType(
        'Multisig.MultisigCancelled',
        sts.struct({
            cancelling: matrixEnjinV603.AccountId32,
            timepoint: matrixEnjinV603.Timepoint,
            multisig: matrixEnjinV603.AccountId32,
            callHash: sts.bytes(),
        })
    ),
}
