'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.recordedXcm =
    exports.shouldRecordXcm =
    exports.xcmExecutionSuspended =
    exports.lockedFungibles =
    exports.remoteLockedFungibles =
    exports.currentMigration =
    exports.versionDiscoveryQueue =
    exports.versionNotifyTargets =
    exports.versionNotifiers =
    exports.supportedVersion =
    exports.safeXcmVersion =
    exports.assetTraps =
    exports.queries =
    exports.queryCounter =
        void 0
var support_1 = require('../support')
var enjinV100 = require('../enjinV100')
var v100 = require('../v100')
var enjinV101 = require('../enjinV101')
var v105 = require('../v105')
var v1030 = require('../v1030')
var enjinV1032 = require('../enjinV1032')
var enjinV1050 = require('../enjinV1050')
exports.queryCounter = {
    /**
     *  The latest available query index.
     */
    enjinV100: new support_1.StorageType('XcmPallet.QueryCounter', 'Default', [], support_1.sts.bigint()),
}
exports.queries = {
    /**
     *  The ongoing queries.
     */
    enjinV100: new support_1.StorageType(
        'XcmPallet.Queries',
        'Optional',
        [support_1.sts.bigint()],
        enjinV100.QueryStatus
    ),
    /**
     *  The ongoing queries.
     */
    enjinV1032: new support_1.StorageType(
        'XcmPallet.Queries',
        'Optional',
        [support_1.sts.bigint()],
        enjinV1032.QueryStatus
    ),
    /**
     *  The ongoing queries.
     */
    v100: new support_1.StorageType('XcmPallet.Queries', 'Optional', [support_1.sts.bigint()], v100.QueryStatus),
    /**
     *  The ongoing queries.
     */
    v1030: new support_1.StorageType('XcmPallet.Queries', 'Optional', [support_1.sts.bigint()], v1030.QueryStatus),
}
exports.assetTraps = {
    /**
     *  The existing asset traps.
     *
     *  Key is the blake2 256 hash of (origin, versioned `MultiAssets`) pair. Value is the number of
     *  times this pair has been trapped (usually just 1 if it exists at all).
     */
    enjinV100: new support_1.StorageType('XcmPallet.AssetTraps', 'Default', [enjinV100.H256], support_1.sts.number()),
}
exports.safeXcmVersion = {
    /**
     *  Default version to encode XCM when latest version of destination is unknown. If `None`,
     *  then the destinations whose XCM version is unknown are considered unreachable.
     */
    enjinV100: new support_1.StorageType('XcmPallet.SafeXcmVersion', 'Optional', [], support_1.sts.number()),
}
exports.supportedVersion = {
    /**
     *  The Latest versions that we know various locations support.
     */
    enjinV100: new support_1.StorageType(
        'XcmPallet.SupportedVersion',
        'Optional',
        [support_1.sts.number(), enjinV100.VersionedMultiLocation],
        support_1.sts.number()
    ),
    /**
     *  The Latest versions that we know various locations support.
     */
    enjinV1032: new support_1.StorageType(
        'XcmPallet.SupportedVersion',
        'Optional',
        [support_1.sts.number(), enjinV1032.VersionedLocation],
        support_1.sts.number()
    ),
    /**
     *  The Latest versions that we know various locations support.
     */
    v100: new support_1.StorageType(
        'XcmPallet.SupportedVersion',
        'Optional',
        [support_1.sts.number(), v100.VersionedMultiLocation],
        support_1.sts.number()
    ),
    /**
     *  The Latest versions that we know various locations support.
     */
    v1030: new support_1.StorageType(
        'XcmPallet.SupportedVersion',
        'Optional',
        [support_1.sts.number(), v1030.VersionedLocation],
        support_1.sts.number()
    ),
}
exports.versionNotifiers = {
    /**
     *  All locations that we have requested version notifications from.
     */
    enjinV100: new support_1.StorageType(
        'XcmPallet.VersionNotifiers',
        'Optional',
        [support_1.sts.number(), enjinV100.VersionedMultiLocation],
        support_1.sts.bigint()
    ),
    /**
     *  All locations that we have requested version notifications from.
     */
    enjinV1032: new support_1.StorageType(
        'XcmPallet.VersionNotifiers',
        'Optional',
        [support_1.sts.number(), enjinV1032.VersionedLocation],
        support_1.sts.bigint()
    ),
    /**
     *  All locations that we have requested version notifications from.
     */
    v100: new support_1.StorageType(
        'XcmPallet.VersionNotifiers',
        'Optional',
        [support_1.sts.number(), v100.VersionedMultiLocation],
        support_1.sts.bigint()
    ),
    /**
     *  All locations that we have requested version notifications from.
     */
    v1030: new support_1.StorageType(
        'XcmPallet.VersionNotifiers',
        'Optional',
        [support_1.sts.number(), v1030.VersionedLocation],
        support_1.sts.bigint()
    ),
}
exports.versionNotifyTargets = {
    /**
     *  The target locations that are subscribed to our version changes, as well as the most recent
     *  of our versions we informed them of.
     */
    enjinV100: new support_1.StorageType(
        'XcmPallet.VersionNotifyTargets',
        'Optional',
        [support_1.sts.number(), enjinV100.VersionedMultiLocation],
        support_1.sts.tuple(function () {
            return [support_1.sts.bigint(), enjinV100.Weight, support_1.sts.number()]
        })
    ),
    /**
     *  The target locations that are subscribed to our version changes, as well as the most recent
     *  of our versions we informed them of.
     */
    enjinV1032: new support_1.StorageType(
        'XcmPallet.VersionNotifyTargets',
        'Optional',
        [support_1.sts.number(), enjinV1032.VersionedLocation],
        support_1.sts.tuple(function () {
            return [support_1.sts.bigint(), enjinV1032.Weight, support_1.sts.number()]
        })
    ),
    /**
     *  The target locations that are subscribed to our version changes, as well as the most recent
     *  of our versions we informed them of.
     */
    v100: new support_1.StorageType(
        'XcmPallet.VersionNotifyTargets',
        'Optional',
        [support_1.sts.number(), v100.VersionedMultiLocation],
        support_1.sts.tuple(function () {
            return [support_1.sts.bigint(), v100.Weight, support_1.sts.number()]
        })
    ),
    /**
     *  The target locations that are subscribed to our version changes, as well as the most recent
     *  of our versions we informed them of.
     */
    v1030: new support_1.StorageType(
        'XcmPallet.VersionNotifyTargets',
        'Optional',
        [support_1.sts.number(), v1030.VersionedLocation],
        support_1.sts.tuple(function () {
            return [support_1.sts.bigint(), v1030.Weight, support_1.sts.number()]
        })
    ),
}
exports.versionDiscoveryQueue = {
    /**
     *  Destinations whose latest XCM version we would like to know. Duplicates not allowed, and
     *  the `u32` counter is the number of times that a send to the destination has been attempted,
     *  which is used as a prioritization.
     */
    enjinV100: new support_1.StorageType(
        'XcmPallet.VersionDiscoveryQueue',
        'Default',
        [],
        support_1.sts.array(function () {
            return support_1.sts.tuple(function () {
                return [enjinV100.VersionedMultiLocation, support_1.sts.number()]
            })
        })
    ),
    /**
     *  Destinations whose latest XCM version we would like to know. Duplicates not allowed, and
     *  the `u32` counter is the number of times that a send to the destination has been attempted,
     *  which is used as a prioritization.
     */
    enjinV1032: new support_1.StorageType(
        'XcmPallet.VersionDiscoveryQueue',
        'Default',
        [],
        support_1.sts.array(function () {
            return support_1.sts.tuple(function () {
                return [enjinV1032.VersionedLocation, support_1.sts.number()]
            })
        })
    ),
    /**
     *  Destinations whose latest XCM version we would like to know. Duplicates not allowed, and
     *  the `u32` counter is the number of times that a send to the destination has been attempted,
     *  which is used as a prioritization.
     */
    v100: new support_1.StorageType(
        'XcmPallet.VersionDiscoveryQueue',
        'Default',
        [],
        support_1.sts.array(function () {
            return support_1.sts.tuple(function () {
                return [v100.VersionedMultiLocation, support_1.sts.number()]
            })
        })
    ),
    /**
     *  Destinations whose latest XCM version we would like to know. Duplicates not allowed, and
     *  the `u32` counter is the number of times that a send to the destination has been attempted,
     *  which is used as a prioritization.
     */
    v1030: new support_1.StorageType(
        'XcmPallet.VersionDiscoveryQueue',
        'Default',
        [],
        support_1.sts.array(function () {
            return support_1.sts.tuple(function () {
                return [v1030.VersionedLocation, support_1.sts.number()]
            })
        })
    ),
}
exports.currentMigration = {
    /**
     *  The current migration's stage, if any.
     */
    enjinV100: new support_1.StorageType('XcmPallet.CurrentMigration', 'Optional', [], enjinV100.VersionMigrationStage),
}
exports.remoteLockedFungibles = {
    /**
     *  Fungible assets which we know are locked on a remote chain.
     */
    enjinV100: new support_1.StorageType(
        'XcmPallet.RemoteLockedFungibles',
        'Optional',
        [support_1.sts.number(), enjinV100.AccountId32, enjinV100.VersionedAssetId],
        enjinV100.RemoteLockedFungibleRecord
    ),
    /**
     *  Fungible assets which we know are locked on a remote chain.
     */
    enjinV101: new support_1.StorageType(
        'XcmPallet.RemoteLockedFungibles',
        'Optional',
        [support_1.sts.number(), enjinV101.AccountId32, enjinV101.VersionedAssetId],
        enjinV101.RemoteLockedFungibleRecord
    ),
    /**
     *  Fungible assets which we know are locked on a remote chain.
     */
    enjinV1032: new support_1.StorageType(
        'XcmPallet.RemoteLockedFungibles',
        'Optional',
        [support_1.sts.number(), enjinV1032.AccountId32, enjinV1032.VersionedAssetId],
        enjinV1032.RemoteLockedFungibleRecord
    ),
    /**
     *  Fungible assets which we know are locked on a remote chain.
     */
    v100: new support_1.StorageType(
        'XcmPallet.RemoteLockedFungibles',
        'Optional',
        [support_1.sts.number(), v100.AccountId32, v100.VersionedAssetId],
        v100.RemoteLockedFungibleRecord
    ),
    /**
     *  Fungible assets which we know are locked on a remote chain.
     */
    v105: new support_1.StorageType(
        'XcmPallet.RemoteLockedFungibles',
        'Optional',
        [support_1.sts.number(), v105.AccountId32, v105.VersionedAssetId],
        v105.RemoteLockedFungibleRecord
    ),
    /**
     *  Fungible assets which we know are locked on a remote chain.
     */
    v1030: new support_1.StorageType(
        'XcmPallet.RemoteLockedFungibles',
        'Optional',
        [support_1.sts.number(), v1030.AccountId32, v1030.VersionedAssetId],
        v1030.RemoteLockedFungibleRecord
    ),
}
exports.lockedFungibles = {
    /**
     *  Fungible assets which we know are locked on this chain.
     */
    enjinV100: new support_1.StorageType(
        'XcmPallet.LockedFungibles',
        'Optional',
        [enjinV100.AccountId32],
        support_1.sts.array(function () {
            return support_1.sts.tuple(function () {
                return [support_1.sts.bigint(), enjinV100.VersionedMultiLocation]
            })
        })
    ),
    /**
     *  Fungible assets which we know are locked on this chain.
     */
    enjinV1032: new support_1.StorageType(
        'XcmPallet.LockedFungibles',
        'Optional',
        [enjinV1032.AccountId32],
        support_1.sts.array(function () {
            return support_1.sts.tuple(function () {
                return [support_1.sts.bigint(), enjinV1032.VersionedLocation]
            })
        })
    ),
    /**
     *  Fungible assets which we know are locked on this chain.
     */
    v100: new support_1.StorageType(
        'XcmPallet.LockedFungibles',
        'Optional',
        [v100.AccountId32],
        support_1.sts.array(function () {
            return support_1.sts.tuple(function () {
                return [support_1.sts.bigint(), v100.VersionedMultiLocation]
            })
        })
    ),
    /**
     *  Fungible assets which we know are locked on this chain.
     */
    v1030: new support_1.StorageType(
        'XcmPallet.LockedFungibles',
        'Optional',
        [v1030.AccountId32],
        support_1.sts.array(function () {
            return support_1.sts.tuple(function () {
                return [support_1.sts.bigint(), v1030.VersionedLocation]
            })
        })
    ),
}
exports.xcmExecutionSuspended = {
    /**
     *  Global suspension state of the XCM executor.
     */
    enjinV100: new support_1.StorageType('XcmPallet.XcmExecutionSuspended', 'Default', [], support_1.sts.boolean()),
}
exports.shouldRecordXcm = {
    /**
     *  Whether or not incoming XCMs (both executed locally and received) should be recorded.
     *  Only one XCM program will be recorded at a time.
     *  This is meant to be used in runtime APIs, and it's advised it stays false
     *  for all other use cases, so as to not degrade regular performance.
     *
     *  Only relevant if this pallet is being used as the [`xcm_executor::traits::RecordXcm`]
     *  implementation in the XCM executor configuration.
     */
    enjinV1050: new support_1.StorageType('XcmPallet.ShouldRecordXcm', 'Default', [], support_1.sts.boolean()),
}
exports.recordedXcm = {
    /**
     *  If [`ShouldRecordXcm`] is set to true, then the last XCM program executed locally
     *  will be stored here.
     *  Runtime APIs can fetch the XCM that was executed by accessing this value.
     *
     *  Only relevant if this pallet is being used as the [`xcm_executor::traits::RecordXcm`]
     *  implementation in the XCM executor configuration.
     */
    enjinV1050: new support_1.StorageType(
        'XcmPallet.RecordedXcm',
        'Optional',
        [],
        support_1.sts.array(function () {
            return enjinV1050.V4Instruction
        })
    ),
}
