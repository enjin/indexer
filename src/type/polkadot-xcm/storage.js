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
var matrixV500 = require('../matrixV500')
var matrixEnjinV603 = require('../matrixEnjinV603')
var matrixV604 = require('../matrixV604')
var matrixV1010 = require('../matrixV1010')
var matrixEnjinV1012 = require('../matrixEnjinV1012')
var matrixEnjinV1022 = require('../matrixEnjinV1022')
exports.queryCounter = {
    /**
     *  The latest available query index.
     */
    matrixEnjinV603: new support_1.StorageType('PolkadotXcm.QueryCounter', 'Default', [], support_1.sts.bigint()),
}
exports.queries = {
    /**
     *  The ongoing queries.
     */
    matrixEnjinV603: new support_1.StorageType(
        'PolkadotXcm.Queries',
        'Optional',
        [support_1.sts.bigint()],
        matrixEnjinV603.QueryStatus
    ),
    /**
     *  The ongoing queries.
     */
    matrixEnjinV1012: new support_1.StorageType(
        'PolkadotXcm.Queries',
        'Optional',
        [support_1.sts.bigint()],
        matrixEnjinV1012.QueryStatus
    ),
    /**
     *  The ongoing queries.
     */
    matrixV500: new support_1.StorageType(
        'PolkadotXcm.Queries',
        'Optional',
        [support_1.sts.bigint()],
        matrixV500.QueryStatus
    ),
    /**
     *  The ongoing queries.
     */
    matrixV1010: new support_1.StorageType(
        'PolkadotXcm.Queries',
        'Optional',
        [support_1.sts.bigint()],
        matrixV1010.QueryStatus
    ),
}
exports.assetTraps = {
    /**
     *  The existing asset traps.
     *
     *  Key is the blake2 256 hash of (origin, versioned `MultiAssets`) pair. Value is the number of
     *  times this pair has been trapped (usually just 1 if it exists at all).
     */
    matrixEnjinV603: new support_1.StorageType(
        'PolkadotXcm.AssetTraps',
        'Default',
        [matrixEnjinV603.H256],
        support_1.sts.number()
    ),
}
exports.safeXcmVersion = {
    /**
     *  Default version to encode XCM when latest version of destination is unknown. If `None`,
     *  then the destinations whose XCM version is unknown are considered unreachable.
     */
    matrixEnjinV603: new support_1.StorageType('PolkadotXcm.SafeXcmVersion', 'Optional', [], support_1.sts.number()),
}
exports.supportedVersion = {
    /**
     *  The Latest versions that we know various locations support.
     */
    matrixEnjinV603: new support_1.StorageType(
        'PolkadotXcm.SupportedVersion',
        'Optional',
        [support_1.sts.number(), matrixEnjinV603.VersionedMultiLocation],
        support_1.sts.number()
    ),
    /**
     *  The Latest versions that we know various locations support.
     */
    matrixEnjinV1012: new support_1.StorageType(
        'PolkadotXcm.SupportedVersion',
        'Optional',
        [support_1.sts.number(), matrixEnjinV1012.VersionedLocation],
        support_1.sts.number()
    ),
    /**
     *  The Latest versions that we know various locations support.
     */
    matrixV500: new support_1.StorageType(
        'PolkadotXcm.SupportedVersion',
        'Optional',
        [support_1.sts.number(), matrixV500.VersionedMultiLocation],
        support_1.sts.number()
    ),
    /**
     *  The Latest versions that we know various locations support.
     */
    matrixV1010: new support_1.StorageType(
        'PolkadotXcm.SupportedVersion',
        'Optional',
        [support_1.sts.number(), matrixV1010.VersionedLocation],
        support_1.sts.number()
    ),
}
exports.versionNotifiers = {
    /**
     *  All locations that we have requested version notifications from.
     */
    matrixEnjinV603: new support_1.StorageType(
        'PolkadotXcm.VersionNotifiers',
        'Optional',
        [support_1.sts.number(), matrixEnjinV603.VersionedMultiLocation],
        support_1.sts.bigint()
    ),
    /**
     *  All locations that we have requested version notifications from.
     */
    matrixEnjinV1012: new support_1.StorageType(
        'PolkadotXcm.VersionNotifiers',
        'Optional',
        [support_1.sts.number(), matrixEnjinV1012.VersionedLocation],
        support_1.sts.bigint()
    ),
    /**
     *  All locations that we have requested version notifications from.
     */
    matrixV500: new support_1.StorageType(
        'PolkadotXcm.VersionNotifiers',
        'Optional',
        [support_1.sts.number(), matrixV500.VersionedMultiLocation],
        support_1.sts.bigint()
    ),
    /**
     *  All locations that we have requested version notifications from.
     */
    matrixV1010: new support_1.StorageType(
        'PolkadotXcm.VersionNotifiers',
        'Optional',
        [support_1.sts.number(), matrixV1010.VersionedLocation],
        support_1.sts.bigint()
    ),
}
exports.versionNotifyTargets = {
    /**
     *  The target locations that are subscribed to our version changes, as well as the most recent
     *  of our versions we informed them of.
     */
    matrixEnjinV603: new support_1.StorageType(
        'PolkadotXcm.VersionNotifyTargets',
        'Optional',
        [support_1.sts.number(), matrixEnjinV603.VersionedMultiLocation],
        support_1.sts.tuple(function () {
            return [support_1.sts.bigint(), matrixEnjinV603.Weight, support_1.sts.number()]
        })
    ),
    /**
     *  The target locations that are subscribed to our version changes, as well as the most recent
     *  of our versions we informed them of.
     */
    matrixEnjinV1012: new support_1.StorageType(
        'PolkadotXcm.VersionNotifyTargets',
        'Optional',
        [support_1.sts.number(), matrixEnjinV1012.VersionedLocation],
        support_1.sts.tuple(function () {
            return [support_1.sts.bigint(), matrixEnjinV1012.Weight, support_1.sts.number()]
        })
    ),
    /**
     *  The target locations that are subscribed to our version changes, as well as the most recent
     *  of our versions we informed them of.
     */
    matrixV500: new support_1.StorageType(
        'PolkadotXcm.VersionNotifyTargets',
        'Optional',
        [support_1.sts.number(), matrixV500.VersionedMultiLocation],
        support_1.sts.tuple(function () {
            return [support_1.sts.bigint(), matrixV500.Weight, support_1.sts.number()]
        })
    ),
    /**
     *  The target locations that are subscribed to our version changes, as well as the most recent
     *  of our versions we informed them of.
     */
    matrixV1010: new support_1.StorageType(
        'PolkadotXcm.VersionNotifyTargets',
        'Optional',
        [support_1.sts.number(), matrixV1010.VersionedLocation],
        support_1.sts.tuple(function () {
            return [support_1.sts.bigint(), matrixV1010.Weight, support_1.sts.number()]
        })
    ),
}
exports.versionDiscoveryQueue = {
    /**
     *  Destinations whose latest XCM version we would like to know. Duplicates not allowed, and
     *  the `u32` counter is the number of times that a send to the destination has been attempted,
     *  which is used as a prioritization.
     */
    matrixEnjinV603: new support_1.StorageType(
        'PolkadotXcm.VersionDiscoveryQueue',
        'Default',
        [],
        support_1.sts.array(function () {
            return support_1.sts.tuple(function () {
                return [matrixEnjinV603.VersionedMultiLocation, support_1.sts.number()]
            })
        })
    ),
    /**
     *  Destinations whose latest XCM version we would like to know. Duplicates not allowed, and
     *  the `u32` counter is the number of times that a send to the destination has been attempted,
     *  which is used as a prioritization.
     */
    matrixEnjinV1012: new support_1.StorageType(
        'PolkadotXcm.VersionDiscoveryQueue',
        'Default',
        [],
        support_1.sts.array(function () {
            return support_1.sts.tuple(function () {
                return [matrixEnjinV1012.VersionedLocation, support_1.sts.number()]
            })
        })
    ),
    /**
     *  Destinations whose latest XCM version we would like to know. Duplicates not allowed, and
     *  the `u32` counter is the number of times that a send to the destination has been attempted,
     *  which is used as a prioritization.
     */
    matrixV500: new support_1.StorageType(
        'PolkadotXcm.VersionDiscoveryQueue',
        'Default',
        [],
        support_1.sts.array(function () {
            return support_1.sts.tuple(function () {
                return [matrixV500.VersionedMultiLocation, support_1.sts.number()]
            })
        })
    ),
    /**
     *  Destinations whose latest XCM version we would like to know. Duplicates not allowed, and
     *  the `u32` counter is the number of times that a send to the destination has been attempted,
     *  which is used as a prioritization.
     */
    matrixV1010: new support_1.StorageType(
        'PolkadotXcm.VersionDiscoveryQueue',
        'Default',
        [],
        support_1.sts.array(function () {
            return support_1.sts.tuple(function () {
                return [matrixV1010.VersionedLocation, support_1.sts.number()]
            })
        })
    ),
}
exports.currentMigration = {
    /**
     *  The current migration's stage, if any.
     */
    matrixEnjinV603: new support_1.StorageType(
        'PolkadotXcm.CurrentMigration',
        'Optional',
        [],
        matrixEnjinV603.VersionMigrationStage
    ),
}
exports.remoteLockedFungibles = {
    /**
     *  Fungible assets which we know are locked on a remote chain.
     */
    matrixEnjinV603: new support_1.StorageType(
        'PolkadotXcm.RemoteLockedFungibles',
        'Optional',
        [support_1.sts.number(), matrixEnjinV603.AccountId32, matrixEnjinV603.VersionedAssetId],
        matrixEnjinV603.RemoteLockedFungibleRecord
    ),
    /**
     *  Fungible assets which we know are locked on a remote chain.
     */
    matrixEnjinV1012: new support_1.StorageType(
        'PolkadotXcm.RemoteLockedFungibles',
        'Optional',
        [support_1.sts.number(), matrixEnjinV1012.AccountId32, matrixEnjinV1012.VersionedAssetId],
        matrixEnjinV1012.RemoteLockedFungibleRecord
    ),
    /**
     *  Fungible assets which we know are locked on a remote chain.
     */
    matrixV500: new support_1.StorageType(
        'PolkadotXcm.RemoteLockedFungibles',
        'Optional',
        [support_1.sts.number(), matrixV500.AccountId32, matrixV500.VersionedAssetId],
        matrixV500.RemoteLockedFungibleRecord
    ),
    /**
     *  Fungible assets which we know are locked on a remote chain.
     */
    matrixV604: new support_1.StorageType(
        'PolkadotXcm.RemoteLockedFungibles',
        'Optional',
        [support_1.sts.number(), matrixV604.AccountId32, matrixV604.VersionedAssetId],
        matrixV604.RemoteLockedFungibleRecord
    ),
    /**
     *  Fungible assets which we know are locked on a remote chain.
     */
    matrixV1010: new support_1.StorageType(
        'PolkadotXcm.RemoteLockedFungibles',
        'Optional',
        [support_1.sts.number(), matrixV1010.AccountId32, matrixV1010.VersionedAssetId],
        matrixV1010.RemoteLockedFungibleRecord
    ),
}
exports.lockedFungibles = {
    /**
     *  Fungible assets which we know are locked on this chain.
     */
    matrixEnjinV603: new support_1.StorageType(
        'PolkadotXcm.LockedFungibles',
        'Optional',
        [matrixEnjinV603.AccountId32],
        support_1.sts.array(function () {
            return support_1.sts.tuple(function () {
                return [support_1.sts.bigint(), matrixEnjinV603.VersionedMultiLocation]
            })
        })
    ),
    /**
     *  Fungible assets which we know are locked on this chain.
     */
    matrixEnjinV1012: new support_1.StorageType(
        'PolkadotXcm.LockedFungibles',
        'Optional',
        [matrixEnjinV1012.AccountId32],
        support_1.sts.array(function () {
            return support_1.sts.tuple(function () {
                return [support_1.sts.bigint(), matrixEnjinV1012.VersionedLocation]
            })
        })
    ),
    /**
     *  Fungible assets which we know are locked on this chain.
     */
    matrixV500: new support_1.StorageType(
        'PolkadotXcm.LockedFungibles',
        'Optional',
        [matrixV500.AccountId32],
        support_1.sts.array(function () {
            return support_1.sts.tuple(function () {
                return [support_1.sts.bigint(), matrixV500.VersionedMultiLocation]
            })
        })
    ),
    /**
     *  Fungible assets which we know are locked on this chain.
     */
    matrixV1010: new support_1.StorageType(
        'PolkadotXcm.LockedFungibles',
        'Optional',
        [matrixV1010.AccountId32],
        support_1.sts.array(function () {
            return support_1.sts.tuple(function () {
                return [support_1.sts.bigint(), matrixV1010.VersionedLocation]
            })
        })
    ),
}
exports.xcmExecutionSuspended = {
    /**
     *  Global suspension state of the XCM executor.
     */
    matrixEnjinV603: new support_1.StorageType(
        'PolkadotXcm.XcmExecutionSuspended',
        'Default',
        [],
        support_1.sts.boolean()
    ),
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
    matrixEnjinV1022: new support_1.StorageType('PolkadotXcm.ShouldRecordXcm', 'Default', [], support_1.sts.boolean()),
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
    matrixEnjinV1022: new support_1.StorageType(
        'PolkadotXcm.RecordedXcm',
        'Optional',
        [],
        support_1.sts.array(function () {
            return matrixEnjinV1022.V4Instruction
        })
    ),
}
