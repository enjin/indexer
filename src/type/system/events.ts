import { sts, Block, Bytes, Option, Result, EventType, RuntimeCtx } from '../support'
import * as enjinV100 from '../enjinV100'
import * as v100 from '../v100'
import * as enjinV101 from '../enjinV101'
import * as v104 from '../v104'
import * as v105 from '../v105'
import * as matrixV500 from '../matrixV500'
import * as matrixV602 from '../matrixV602'
import * as matrixEnjinV603 from '../matrixEnjinV603'
import * as matrixV604 from '../matrixV604'
import * as matrixEnjinV1012 from '../matrixEnjinV1012'

export const extrinsicSuccess = {
    name: 'System.ExtrinsicSuccess',
    /**
     * An extrinsic completed successfully.
     */
    matrixEnjinV603: new EventType(
        'System.ExtrinsicSuccess',
        sts.struct({
            dispatchInfo: matrixEnjinV603.DispatchInfo,
        })
    ),
}

export const extrinsicFailed = {
    name: 'System.ExtrinsicFailed',
    /**
     * An extrinsic failed.
     */
    matrixEnjinV603: new EventType(
        'System.ExtrinsicFailed',
        sts.struct({
            dispatchError: matrixEnjinV603.DispatchError,
            dispatchInfo: matrixEnjinV603.DispatchInfo,
        })
    ),
    /**
     * An extrinsic failed.
     */
    matrixV500: new EventType(
        'System.ExtrinsicFailed',
        sts.struct({
            dispatchError: matrixV500.DispatchError,
            dispatchInfo: matrixV500.DispatchInfo,
        })
    ),
    /**
     * An extrinsic failed.
     */
    matrixV602: new EventType(
        'System.ExtrinsicFailed',
        sts.struct({
            dispatchError: matrixV602.DispatchError,
            dispatchInfo: matrixV602.DispatchInfo,
        })
    ),
    /**
     * An extrinsic failed.
     */
    matrixV604: new EventType(
        'System.ExtrinsicFailed',
        sts.struct({
            dispatchError: matrixV604.DispatchError,
            dispatchInfo: matrixV604.DispatchInfo,
        })
    ),
    /**
     * An extrinsic failed.
     */
    enjinV100: new EventType(
        'System.ExtrinsicFailed',
        sts.struct({
            dispatchError: enjinV100.DispatchError,
            dispatchInfo: enjinV100.DispatchInfo,
        })
    ),
    /**
     * An extrinsic failed.
     */
    enjinV101: new EventType(
        'System.ExtrinsicFailed',
        sts.struct({
            dispatchError: enjinV101.DispatchError,
            dispatchInfo: enjinV101.DispatchInfo,
        })
    ),
    /**
     * An extrinsic failed.
     */
    v100: new EventType(
        'System.ExtrinsicFailed',
        sts.struct({
            dispatchError: v100.DispatchError,
            dispatchInfo: v100.DispatchInfo,
        })
    ),
    /**
     * An extrinsic failed.
     */
    v104: new EventType(
        'System.ExtrinsicFailed',
        sts.struct({
            dispatchError: v104.DispatchError,
            dispatchInfo: v104.DispatchInfo,
        })
    ),
    /**
     * An extrinsic failed.
     */
    v105: new EventType(
        'System.ExtrinsicFailed',
        sts.struct({
            dispatchError: v105.DispatchError,
            dispatchInfo: v105.DispatchInfo,
        })
    ),
}

export const codeUpdated = {
    name: 'System.CodeUpdated',
    /**
     * `:code` was updated.
     */
    matrixEnjinV603: new EventType('System.CodeUpdated', sts.unit()),
}

export const newAccount = {
    name: 'System.NewAccount',
    /**
     * A new account was created.
     */
    matrixEnjinV603: new EventType(
        'System.NewAccount',
        sts.struct({
            account: matrixEnjinV603.AccountId32,
        })
    ),
}

export const killedAccount = {
    name: 'System.KilledAccount',
    /**
     * An account was reaped.
     */
    matrixEnjinV603: new EventType(
        'System.KilledAccount',
        sts.struct({
            account: matrixEnjinV603.AccountId32,
        })
    ),
}

export const remarked = {
    name: 'System.Remarked',
    /**
     * On on-chain remark happened.
     */
    matrixEnjinV603: new EventType(
        'System.Remarked',
        sts.struct({
            sender: matrixEnjinV603.AccountId32,
            hash: matrixEnjinV603.H256,
        })
    ),
}

export const upgradeAuthorized = {
    name: 'System.UpgradeAuthorized',
    /**
     * An upgrade was authorized.
     */
    matrixEnjinV1012: new EventType(
        'System.UpgradeAuthorized',
        sts.struct({
            codeHash: matrixEnjinV1012.H256,
            checkVersion: sts.boolean(),
        })
    ),
}
