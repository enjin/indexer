'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.keyOwner =
    exports.nextKeys =
    exports.disabledValidators =
    exports.queuedKeys =
    exports.queuedChanged =
    exports.currentIndex =
    exports.validators =
        void 0
var support_1 = require('../support')
var enjinV100 = require('../enjinV100')
var matrixEnjinV603 = require('../matrixEnjinV603')
exports.validators = {
    /**
     *  The current set of validators.
     */
    matrixEnjinV603: new support_1.StorageType(
        'Session.Validators',
        'Default',
        [],
        support_1.sts.array(function () {
            return matrixEnjinV603.AccountId32
        })
    ),
}
exports.currentIndex = {
    /**
     *  Current index of the session.
     */
    matrixEnjinV603: new support_1.StorageType('Session.CurrentIndex', 'Default', [], support_1.sts.number()),
}
exports.queuedChanged = {
    /**
     *  True if the underlying economic identities or weighting behind the validators
     *  has changed in the queued validator set.
     */
    matrixEnjinV603: new support_1.StorageType('Session.QueuedChanged', 'Default', [], support_1.sts.boolean()),
}
exports.queuedKeys = {
    /**
     *  The queued keys for the next session. When the next session begins, these keys
     *  will be used to determine the validator's session keys.
     */
    matrixEnjinV603: new support_1.StorageType(
        'Session.QueuedKeys',
        'Default',
        [],
        support_1.sts.array(function () {
            return support_1.sts.tuple(function () {
                return [matrixEnjinV603.AccountId32, matrixEnjinV603.SessionKeys]
            })
        })
    ),
    /**
     *  The queued keys for the next session. When the next session begins, these keys
     *  will be used to determine the validator's session keys.
     */
    enjinV100: new support_1.StorageType(
        'Session.QueuedKeys',
        'Default',
        [],
        support_1.sts.array(function () {
            return support_1.sts.tuple(function () {
                return [enjinV100.AccountId32, enjinV100.SessionKeys]
            })
        })
    ),
}
exports.disabledValidators = {
    /**
     *  Indices of disabled validators.
     *
     *  The vec is always kept sorted so that we can find whether a given validator is
     *  disabled using binary search. It gets cleared when `on_session_ending` returns
     *  a new set of identities.
     */
    matrixEnjinV603: new support_1.StorageType(
        'Session.DisabledValidators',
        'Default',
        [],
        support_1.sts.array(function () {
            return support_1.sts.number()
        })
    ),
}
exports.nextKeys = {
    /**
     *  The next session keys for a validator.
     */
    matrixEnjinV603: new support_1.StorageType(
        'Session.NextKeys',
        'Optional',
        [matrixEnjinV603.AccountId32],
        matrixEnjinV603.SessionKeys
    ),
    /**
     *  The next session keys for a validator.
     */
    enjinV100: new support_1.StorageType(
        'Session.NextKeys',
        'Optional',
        [enjinV100.AccountId32],
        enjinV100.SessionKeys
    ),
}
exports.keyOwner = {
    /**
     *  The owner of a key. The key is the `KeyTypeId` + the encoded key.
     */
    matrixEnjinV603: new support_1.StorageType(
        'Session.KeyOwner',
        'Optional',
        [
            support_1.sts.tuple(function () {
                return [matrixEnjinV603.KeyTypeId, support_1.sts.bytes()]
            }),
        ],
        matrixEnjinV603.AccountId32
    ),
}
