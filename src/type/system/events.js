'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.upgradeAuthorized =
    exports.remarked =
    exports.killedAccount =
    exports.newAccount =
    exports.codeUpdated =
    exports.extrinsicFailed =
    exports.extrinsicSuccess =
        void 0
var support_1 = require('../support')
var enjinV100 = require('../enjinV100')
var v100 = require('../v100')
var enjinV101 = require('../enjinV101')
var v104 = require('../v104')
var v105 = require('../v105')
var matrixV500 = require('../matrixV500')
var matrixV602 = require('../matrixV602')
var matrixEnjinV603 = require('../matrixEnjinV603')
var matrixV604 = require('../matrixV604')
var matrixEnjinV1012 = require('../matrixEnjinV1012')
exports.extrinsicSuccess = {
    name: 'System.ExtrinsicSuccess',
    /**
     * An extrinsic completed successfully.
     */
    matrixEnjinV603: new support_1.EventType(
        'System.ExtrinsicSuccess',
        support_1.sts.struct({
            dispatchInfo: matrixEnjinV603.DispatchInfo,
        })
    ),
}
exports.extrinsicFailed = {
    name: 'System.ExtrinsicFailed',
    /**
     * An extrinsic failed.
     */
    matrixEnjinV603: new support_1.EventType(
        'System.ExtrinsicFailed',
        support_1.sts.struct({
            dispatchError: matrixEnjinV603.DispatchError,
            dispatchInfo: matrixEnjinV603.DispatchInfo,
        })
    ),
    /**
     * An extrinsic failed.
     */
    matrixV500: new support_1.EventType(
        'System.ExtrinsicFailed',
        support_1.sts.struct({
            dispatchError: matrixV500.DispatchError,
            dispatchInfo: matrixV500.DispatchInfo,
        })
    ),
    /**
     * An extrinsic failed.
     */
    matrixV602: new support_1.EventType(
        'System.ExtrinsicFailed',
        support_1.sts.struct({
            dispatchError: matrixV602.DispatchError,
            dispatchInfo: matrixV602.DispatchInfo,
        })
    ),
    /**
     * An extrinsic failed.
     */
    matrixV604: new support_1.EventType(
        'System.ExtrinsicFailed',
        support_1.sts.struct({
            dispatchError: matrixV604.DispatchError,
            dispatchInfo: matrixV604.DispatchInfo,
        })
    ),
    /**
     * An extrinsic failed.
     */
    enjinV100: new support_1.EventType(
        'System.ExtrinsicFailed',
        support_1.sts.struct({
            dispatchError: enjinV100.DispatchError,
            dispatchInfo: enjinV100.DispatchInfo,
        })
    ),
    /**
     * An extrinsic failed.
     */
    enjinV101: new support_1.EventType(
        'System.ExtrinsicFailed',
        support_1.sts.struct({
            dispatchError: enjinV101.DispatchError,
            dispatchInfo: enjinV101.DispatchInfo,
        })
    ),
    /**
     * An extrinsic failed.
     */
    v100: new support_1.EventType(
        'System.ExtrinsicFailed',
        support_1.sts.struct({
            dispatchError: v100.DispatchError,
            dispatchInfo: v100.DispatchInfo,
        })
    ),
    /**
     * An extrinsic failed.
     */
    v104: new support_1.EventType(
        'System.ExtrinsicFailed',
        support_1.sts.struct({
            dispatchError: v104.DispatchError,
            dispatchInfo: v104.DispatchInfo,
        })
    ),
    /**
     * An extrinsic failed.
     */
    v105: new support_1.EventType(
        'System.ExtrinsicFailed',
        support_1.sts.struct({
            dispatchError: v105.DispatchError,
            dispatchInfo: v105.DispatchInfo,
        })
    ),
}
exports.codeUpdated = {
    name: 'System.CodeUpdated',
    /**
     * `:code` was updated.
     */
    matrixEnjinV603: new support_1.EventType('System.CodeUpdated', support_1.sts.unit()),
}
exports.newAccount = {
    name: 'System.NewAccount',
    /**
     * A new account was created.
     */
    matrixEnjinV603: new support_1.EventType(
        'System.NewAccount',
        support_1.sts.struct({
            account: matrixEnjinV603.AccountId32,
        })
    ),
}
exports.killedAccount = {
    name: 'System.KilledAccount',
    /**
     * An account was reaped.
     */
    matrixEnjinV603: new support_1.EventType(
        'System.KilledAccount',
        support_1.sts.struct({
            account: matrixEnjinV603.AccountId32,
        })
    ),
}
exports.remarked = {
    name: 'System.Remarked',
    /**
     * On on-chain remark happened.
     */
    matrixEnjinV603: new support_1.EventType(
        'System.Remarked',
        support_1.sts.struct({
            sender: matrixEnjinV603.AccountId32,
            hash: matrixEnjinV603.H256,
        })
    ),
}
exports.upgradeAuthorized = {
    name: 'System.UpgradeAuthorized',
    /**
     * An upgrade was authorized.
     */
    matrixEnjinV1012: new support_1.EventType(
        'System.UpgradeAuthorized',
        support_1.sts.struct({
            codeHash: matrixEnjinV1012.H256,
            checkVersion: support_1.sts.boolean(),
        })
    ),
}
