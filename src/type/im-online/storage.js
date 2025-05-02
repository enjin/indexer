'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.authoredBlocks = exports.receivedHeartbeats = exports.keys = exports.heartbeatAfter = void 0
var support_1 = require('../support')
var enjinV100 = require('../enjinV100')
var v100 = require('../v100')
exports.heartbeatAfter = {
    /**
     *  The block number after which it's ok to send heartbeats in the current
     *  session.
     *
     *  At the beginning of each session we set this to a value that should fall
     *  roughly in the middle of the session duration. The idea is to first wait for
     *  the validators to produce a block in the current session, so that the
     *  heartbeat later on will not be necessary.
     *
     *  This value will only be used as a fallback if we fail to get a proper session
     *  progress estimate from `NextSessionRotation`, as those estimates should be
     *  more accurate then the value we calculate for `HeartbeatAfter`.
     */
    enjinV100: new support_1.StorageType('ImOnline.HeartbeatAfter', 'Default', [], support_1.sts.number()),
}
exports.keys = {
    /**
     *  The current set of keys that may issue a heartbeat.
     */
    enjinV100: new support_1.StorageType(
        'ImOnline.Keys',
        'Default',
        [],
        support_1.sts.array(function () {
            return support_1.sts.bytes()
        })
    ),
}
exports.receivedHeartbeats = {
    /**
     *  For each session index, we keep a mapping of `SessionIndex` and `AuthIndex` to
     *  `WrapperOpaque<BoundedOpaqueNetworkState>`.
     */
    enjinV100: new support_1.StorageType(
        'ImOnline.ReceivedHeartbeats',
        'Optional',
        [support_1.sts.number(), support_1.sts.number()],
        enjinV100.WrapperOpaque
    ),
    /**
     *  For each session index, we keep a mapping of `SessionIndex` and `AuthIndex`.
     */
    enjinV1026: new support_1.StorageType(
        'ImOnline.ReceivedHeartbeats',
        'Optional',
        [support_1.sts.number(), support_1.sts.number()],
        support_1.sts.boolean()
    ),
    /**
     *  For each session index, we keep a mapping of `SessionIndex` and `AuthIndex` to
     *  `WrapperOpaque<BoundedOpaqueNetworkState>`.
     */
    v100: new support_1.StorageType(
        'ImOnline.ReceivedHeartbeats',
        'Optional',
        [support_1.sts.number(), support_1.sts.number()],
        v100.WrapperOpaque
    ),
    /**
     *  For each session index, we keep a mapping of `SessionIndex` and `AuthIndex`.
     */
    v1026: new support_1.StorageType(
        'ImOnline.ReceivedHeartbeats',
        'Optional',
        [support_1.sts.number(), support_1.sts.number()],
        support_1.sts.boolean()
    ),
}
exports.authoredBlocks = {
    /**
     *  For each session index, we keep a mapping of `ValidatorId<T>` to the
     *  number of blocks authored by the given authority.
     */
    enjinV100: new support_1.StorageType(
        'ImOnline.AuthoredBlocks',
        'Default',
        [support_1.sts.number(), enjinV100.AccountId32],
        support_1.sts.number()
    ),
}
