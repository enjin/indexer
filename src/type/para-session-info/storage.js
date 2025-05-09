'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.sessionExecutorParams =
    exports.accountKeys =
    exports.sessions =
    exports.earliestStoredSession =
    exports.assignmentKeysUnsafe =
        void 0
var support_1 = require('../support')
var enjinV100 = require('../enjinV100')
var v104 = require('../v104')
var v1030 = require('../v1030')
var enjinV1032 = require('../enjinV1032')
exports.assignmentKeysUnsafe = {
    /**
     *  Assignment keys for the current session.
     *  Note that this API is private due to it being prone to 'off-by-one' at session boundaries.
     *  When in doubt, use `Sessions` API instead.
     */
    enjinV100: new support_1.StorageType(
        'ParaSessionInfo.AssignmentKeysUnsafe',
        'Default',
        [],
        support_1.sts.array(function () {
            return support_1.sts.bytes()
        })
    ),
}
exports.earliestStoredSession = {
    /**
     *  The earliest session for which previous session info is stored.
     */
    enjinV100: new support_1.StorageType(
        'ParaSessionInfo.EarliestStoredSession',
        'Default',
        [],
        support_1.sts.number()
    ),
}
exports.sessions = {
    /**
     *  Session information in a rolling window.
     *  Should have an entry in range `EarliestStoredSession..=CurrentSessionIndex`.
     *  Does not have any entries before the session index in the first session change notification.
     */
    enjinV100: new support_1.StorageType(
        'ParaSessionInfo.Sessions',
        'Optional',
        [support_1.sts.number()],
        enjinV100.V4SessionInfo
    ),
}
exports.accountKeys = {
    /**
     *  The validator account keys of the validators actively participating in parachain consensus.
     */
    enjinV100: new support_1.StorageType(
        'ParaSessionInfo.AccountKeys',
        'Optional',
        [support_1.sts.number()],
        support_1.sts.array(function () {
            return enjinV100.AccountId32
        })
    ),
}
exports.sessionExecutorParams = {
    /**
     *  Executor parameter set for a given session index
     */
    enjinV100: new support_1.StorageType(
        'ParaSessionInfo.SessionExecutorParams',
        'Optional',
        [support_1.sts.number()],
        support_1.sts.array(function () {
            return enjinV100.V4ExecutorParam
        })
    ),
    /**
     *  Executor parameter set for a given session index
     */
    enjinV1032: new support_1.StorageType(
        'ParaSessionInfo.SessionExecutorParams',
        'Optional',
        [support_1.sts.number()],
        support_1.sts.array(function () {
            return enjinV1032.V6ExecutorParam
        })
    ),
    /**
     *  Executor parameter set for a given session index
     */
    v104: new support_1.StorageType(
        'ParaSessionInfo.SessionExecutorParams',
        'Optional',
        [support_1.sts.number()],
        support_1.sts.array(function () {
            return v104.V4ExecutorParam
        })
    ),
    /**
     *  Executor parameter set for a given session index
     */
    v1030: new support_1.StorageType(
        'ParaSessionInfo.SessionExecutorParams',
        'Optional',
        [support_1.sts.number()],
        support_1.sts.array(function () {
            return v1030.V6ExecutorParam
        })
    ),
}
