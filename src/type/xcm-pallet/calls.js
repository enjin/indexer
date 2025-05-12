'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.transferAssetsUsingTypeAndThen =
    exports.claimAssets =
    exports.transferAssets =
    exports.forceSuspension =
    exports.limitedTeleportAssets =
    exports.limitedReserveTransferAssets =
    exports.forceUnsubscribeVersionNotify =
    exports.forceSubscribeVersionNotify =
    exports.forceDefaultXcmVersion =
    exports.forceXcmVersion =
    exports.execute =
    exports.reserveTransferAssets =
    exports.teleportAssets =
    exports.send =
        void 0
var support_1 = require('../support')
var enjinV100 = require('../enjinV100')
var v100 = require('../v100')
var enjinV1026 = require('../enjinV1026')
var v1026 = require('../v1026')
var v1030 = require('../v1030')
var enjinV1032 = require('../enjinV1032')
var enjinV1050 = require('../enjinV1050')
exports.send = {
    name: 'XcmPallet.send',
    enjinV100: new support_1.CallType(
        'XcmPallet.send',
        support_1.sts.struct({
            dest: enjinV100.VersionedMultiLocation,
            message: enjinV100.VersionedXcm,
        })
    ),
    enjinV1032: new support_1.CallType(
        'XcmPallet.send',
        support_1.sts.struct({
            dest: enjinV1032.VersionedLocation,
            message: enjinV1032.VersionedXcm,
        })
    ),
    v100: new support_1.CallType(
        'XcmPallet.send',
        support_1.sts.struct({
            dest: v100.VersionedMultiLocation,
            message: v100.VersionedXcm,
        })
    ),
    v1030: new support_1.CallType(
        'XcmPallet.send',
        support_1.sts.struct({
            dest: v1030.VersionedLocation,
            message: v1030.VersionedXcm,
        })
    ),
}
exports.teleportAssets = {
    name: 'XcmPallet.teleport_assets',
    /**
     * Teleport some assets from the local chain to some destination chain.
     *
     * Fee payment on the destination side is made from the asset in the `assets` vector of
     * index `fee_asset_item`. The weight limit for fees is not provided and thus is unlimited,
     * with all fees taken as needed from the asset.
     *
     * - `origin`: Must be capable of withdrawing the `assets` and executing XCM.
     * - `dest`: Destination context for the assets. Will typically be `X2(Parent, Parachain(..))` to send
     *   from parachain to parachain, or `X1(Parachain(..))` to send from relay to parachain.
     * - `beneficiary`: A beneficiary location for the assets in the context of `dest`. Will generally be
     *   an `AccountId32` value.
     * - `assets`: The assets to be withdrawn. The first item should be the currency used to to pay the fee on the
     *   `dest` side. May not be empty.
     * - `fee_asset_item`: The index into `assets` of the item which should be used to pay
     *   fees.
     */
    enjinV100: new support_1.CallType(
        'XcmPallet.teleport_assets',
        support_1.sts.struct({
            dest: enjinV100.VersionedMultiLocation,
            beneficiary: enjinV100.VersionedMultiLocation,
            assets: enjinV100.VersionedMultiAssets,
            feeAssetItem: support_1.sts.number(),
        })
    ),
    /**
     * Teleport some assets from the local chain to some destination chain.
     *
     * **This function is deprecated: Use `limited_teleport_assets` instead.**
     *
     * Fee payment on the destination side is made from the asset in the `assets` vector of
     * index `fee_asset_item`. The weight limit for fees is not provided and thus is unlimited,
     * with all fees taken as needed from the asset.
     *
     * - `origin`: Must be capable of withdrawing the `assets` and executing XCM.
     * - `dest`: Destination context for the assets. Will typically be `[Parent,
     *   Parachain(..)]` to send from parachain to parachain, or `[Parachain(..)]` to send from
     *   relay to parachain.
     * - `beneficiary`: A beneficiary location for the assets in the context of `dest`. Will
     *   generally be an `AccountId32` value.
     * - `assets`: The assets to be withdrawn. This should include the assets used to pay the
     *   fee on the `dest` chain.
     * - `fee_asset_item`: The index into `assets` of the item which should be used to pay
     *   fees.
     */
    enjinV1032: new support_1.CallType(
        'XcmPallet.teleport_assets',
        support_1.sts.struct({
            dest: enjinV1032.VersionedLocation,
            beneficiary: enjinV1032.VersionedLocation,
            assets: enjinV1032.VersionedAssets,
            feeAssetItem: support_1.sts.number(),
        })
    ),
    /**
     * Teleport some assets from the local chain to some destination chain.
     *
     * Fee payment on the destination side is made from the asset in the `assets` vector of
     * index `fee_asset_item`. The weight limit for fees is not provided and thus is unlimited,
     * with all fees taken as needed from the asset.
     *
     * - `origin`: Must be capable of withdrawing the `assets` and executing XCM.
     * - `dest`: Destination context for the assets. Will typically be `X2(Parent, Parachain(..))` to send
     *   from parachain to parachain, or `X1(Parachain(..))` to send from relay to parachain.
     * - `beneficiary`: A beneficiary location for the assets in the context of `dest`. Will generally be
     *   an `AccountId32` value.
     * - `assets`: The assets to be withdrawn. The first item should be the currency used to to pay the fee on the
     *   `dest` side. May not be empty.
     * - `fee_asset_item`: The index into `assets` of the item which should be used to pay
     *   fees.
     */
    v100: new support_1.CallType(
        'XcmPallet.teleport_assets',
        support_1.sts.struct({
            dest: v100.VersionedMultiLocation,
            beneficiary: v100.VersionedMultiLocation,
            assets: v100.VersionedMultiAssets,
            feeAssetItem: support_1.sts.number(),
        })
    ),
    /**
     * Teleport some assets from the local chain to some destination chain.
     *
     * **This function is deprecated: Use `limited_teleport_assets` instead.**
     *
     * Fee payment on the destination side is made from the asset in the `assets` vector of
     * index `fee_asset_item`. The weight limit for fees is not provided and thus is unlimited,
     * with all fees taken as needed from the asset.
     *
     * - `origin`: Must be capable of withdrawing the `assets` and executing XCM.
     * - `dest`: Destination context for the assets. Will typically be `[Parent,
     *   Parachain(..)]` to send from parachain to parachain, or `[Parachain(..)]` to send from
     *   relay to parachain.
     * - `beneficiary`: A beneficiary location for the assets in the context of `dest`. Will
     *   generally be an `AccountId32` value.
     * - `assets`: The assets to be withdrawn. This should include the assets used to pay the
     *   fee on the `dest` chain.
     * - `fee_asset_item`: The index into `assets` of the item which should be used to pay
     *   fees.
     */
    v1030: new support_1.CallType(
        'XcmPallet.teleport_assets',
        support_1.sts.struct({
            dest: v1030.VersionedLocation,
            beneficiary: v1030.VersionedLocation,
            assets: v1030.VersionedAssets,
            feeAssetItem: support_1.sts.number(),
        })
    ),
}
exports.reserveTransferAssets = {
    name: 'XcmPallet.reserve_transfer_assets',
    /**
     * Transfer some assets from the local chain to the sovereign account of a destination
     * chain and forward a notification XCM.
     *
     * Fee payment on the destination side is made from the asset in the `assets` vector of
     * index `fee_asset_item`. The weight limit for fees is not provided and thus is unlimited,
     * with all fees taken as needed from the asset.
     *
     * - `origin`: Must be capable of withdrawing the `assets` and executing XCM.
     * - `dest`: Destination context for the assets. Will typically be `X2(Parent, Parachain(..))` to send
     *   from parachain to parachain, or `X1(Parachain(..))` to send from relay to parachain.
     * - `beneficiary`: A beneficiary location for the assets in the context of `dest`. Will generally be
     *   an `AccountId32` value.
     * - `assets`: The assets to be withdrawn. This should include the assets used to pay the fee on the
     *   `dest` side.
     * - `fee_asset_item`: The index into `assets` of the item which should be used to pay
     *   fees.
     */
    enjinV100: new support_1.CallType(
        'XcmPallet.reserve_transfer_assets',
        support_1.sts.struct({
            dest: enjinV100.VersionedMultiLocation,
            beneficiary: enjinV100.VersionedMultiLocation,
            assets: enjinV100.VersionedMultiAssets,
            feeAssetItem: support_1.sts.number(),
        })
    ),
    /**
     * Transfer some assets from the local chain to the destination chain through their local,
     * destination or remote reserve.
     *
     * `assets` must have same reserve location and may not be teleportable to `dest`.
     *  - `assets` have local reserve: transfer assets to sovereign account of destination
     *    chain and forward a notification XCM to `dest` to mint and deposit reserve-based
     *    assets to `beneficiary`.
     *  - `assets` have destination reserve: burn local assets and forward a notification to
     *    `dest` chain to withdraw the reserve assets from this chain's sovereign account and
     *    deposit them to `beneficiary`.
     *  - `assets` have remote reserve: burn local assets, forward XCM to reserve chain to move
     *    reserves from this chain's SA to `dest` chain's SA, and forward another XCM to `dest`
     *    to mint and deposit reserve-based assets to `beneficiary`.
     *
     * **This function is deprecated: Use `limited_reserve_transfer_assets` instead.**
     *
     * Fee payment on the destination side is made from the asset in the `assets` vector of
     * index `fee_asset_item`. The weight limit for fees is not provided and thus is unlimited,
     * with all fees taken as needed from the asset.
     *
     * - `origin`: Must be capable of withdrawing the `assets` and executing XCM.
     * - `dest`: Destination context for the assets. Will typically be `[Parent,
     *   Parachain(..)]` to send from parachain to parachain, or `[Parachain(..)]` to send from
     *   relay to parachain.
     * - `beneficiary`: A beneficiary location for the assets in the context of `dest`. Will
     *   generally be an `AccountId32` value.
     * - `assets`: The assets to be withdrawn. This should include the assets used to pay the
     *   fee on the `dest` (and possibly reserve) chains.
     * - `fee_asset_item`: The index into `assets` of the item which should be used to pay
     *   fees.
     */
    enjinV1032: new support_1.CallType(
        'XcmPallet.reserve_transfer_assets',
        support_1.sts.struct({
            dest: enjinV1032.VersionedLocation,
            beneficiary: enjinV1032.VersionedLocation,
            assets: enjinV1032.VersionedAssets,
            feeAssetItem: support_1.sts.number(),
        })
    ),
    /**
     * Transfer some assets from the local chain to the sovereign account of a destination
     * chain and forward a notification XCM.
     *
     * Fee payment on the destination side is made from the asset in the `assets` vector of
     * index `fee_asset_item`. The weight limit for fees is not provided and thus is unlimited,
     * with all fees taken as needed from the asset.
     *
     * - `origin`: Must be capable of withdrawing the `assets` and executing XCM.
     * - `dest`: Destination context for the assets. Will typically be `X2(Parent, Parachain(..))` to send
     *   from parachain to parachain, or `X1(Parachain(..))` to send from relay to parachain.
     * - `beneficiary`: A beneficiary location for the assets in the context of `dest`. Will generally be
     *   an `AccountId32` value.
     * - `assets`: The assets to be withdrawn. This should include the assets used to pay the fee on the
     *   `dest` side.
     * - `fee_asset_item`: The index into `assets` of the item which should be used to pay
     *   fees.
     */
    v100: new support_1.CallType(
        'XcmPallet.reserve_transfer_assets',
        support_1.sts.struct({
            dest: v100.VersionedMultiLocation,
            beneficiary: v100.VersionedMultiLocation,
            assets: v100.VersionedMultiAssets,
            feeAssetItem: support_1.sts.number(),
        })
    ),
    /**
     * Transfer some assets from the local chain to the destination chain through their local,
     * destination or remote reserve.
     *
     * `assets` must have same reserve location and may not be teleportable to `dest`.
     *  - `assets` have local reserve: transfer assets to sovereign account of destination
     *    chain and forward a notification XCM to `dest` to mint and deposit reserve-based
     *    assets to `beneficiary`.
     *  - `assets` have destination reserve: burn local assets and forward a notification to
     *    `dest` chain to withdraw the reserve assets from this chain's sovereign account and
     *    deposit them to `beneficiary`.
     *  - `assets` have remote reserve: burn local assets, forward XCM to reserve chain to move
     *    reserves from this chain's SA to `dest` chain's SA, and forward another XCM to `dest`
     *    to mint and deposit reserve-based assets to `beneficiary`.
     *
     * **This function is deprecated: Use `limited_reserve_transfer_assets` instead.**
     *
     * Fee payment on the destination side is made from the asset in the `assets` vector of
     * index `fee_asset_item`. The weight limit for fees is not provided and thus is unlimited,
     * with all fees taken as needed from the asset.
     *
     * - `origin`: Must be capable of withdrawing the `assets` and executing XCM.
     * - `dest`: Destination context for the assets. Will typically be `[Parent,
     *   Parachain(..)]` to send from parachain to parachain, or `[Parachain(..)]` to send from
     *   relay to parachain.
     * - `beneficiary`: A beneficiary location for the assets in the context of `dest`. Will
     *   generally be an `AccountId32` value.
     * - `assets`: The assets to be withdrawn. This should include the assets used to pay the
     *   fee on the `dest` (and possibly reserve) chains.
     * - `fee_asset_item`: The index into `assets` of the item which should be used to pay
     *   fees.
     */
    v1030: new support_1.CallType(
        'XcmPallet.reserve_transfer_assets',
        support_1.sts.struct({
            dest: v1030.VersionedLocation,
            beneficiary: v1030.VersionedLocation,
            assets: v1030.VersionedAssets,
            feeAssetItem: support_1.sts.number(),
        })
    ),
}
exports.execute = {
    name: 'XcmPallet.execute',
    /**
     * Execute an XCM message from a local, signed, origin.
     *
     * An event is deposited indicating whether `msg` could be executed completely or only
     * partially.
     *
     * No more than `max_weight` will be used in its attempted execution. If this is less than the
     * maximum amount of weight that the message could take to be executed, then no execution
     * attempt will be made.
     *
     * NOTE: A successful return to this does *not* imply that the `msg` was executed successfully
     * to completion; only that *some* of it was executed.
     */
    enjinV100: new support_1.CallType(
        'XcmPallet.execute',
        support_1.sts.struct({
            message: enjinV100.Type_489,
            maxWeight: enjinV100.Weight,
        })
    ),
    /**
     * Execute an XCM message from a local, signed, origin.
     *
     * An event is deposited indicating whether `msg` could be executed completely or only
     * partially.
     *
     * No more than `max_weight` will be used in its attempted execution. If this is less than
     * the maximum amount of weight that the message could take to be executed, then no
     * execution attempt will be made.
     */
    enjinV1032: new support_1.CallType(
        'XcmPallet.execute',
        support_1.sts.struct({
            message: enjinV1032.Type_556,
            maxWeight: enjinV1032.Weight,
        })
    ),
    /**
     * Execute an XCM message from a local, signed, origin.
     *
     * An event is deposited indicating whether `msg` could be executed completely or only
     * partially.
     *
     * No more than `max_weight` will be used in its attempted execution. If this is less than the
     * maximum amount of weight that the message could take to be executed, then no execution
     * attempt will be made.
     *
     * NOTE: A successful return to this does *not* imply that the `msg` was executed successfully
     * to completion; only that *some* of it was executed.
     */
    v100: new support_1.CallType(
        'XcmPallet.execute',
        support_1.sts.struct({
            message: v100.Type_435,
            maxWeight: v100.Weight,
        })
    ),
    /**
     * Execute an XCM message from a local, signed, origin.
     *
     * An event is deposited indicating whether `msg` could be executed completely or only
     * partially.
     *
     * No more than `max_weight` will be used in its attempted execution. If this is less than
     * the maximum amount of weight that the message could take to be executed, then no
     * execution attempt will be made.
     */
    v1030: new support_1.CallType(
        'XcmPallet.execute',
        support_1.sts.struct({
            message: v1030.Type_556,
            maxWeight: v1030.Weight,
        })
    ),
}
exports.forceXcmVersion = {
    name: 'XcmPallet.force_xcm_version',
    /**
     * Extoll that a particular destination can be communicated with through a particular
     * version of XCM.
     *
     * - `origin`: Must be an origin specified by AdminOrigin.
     * - `location`: The destination that is being described.
     * - `xcm_version`: The latest version of XCM that `location` supports.
     */
    enjinV100: new support_1.CallType(
        'XcmPallet.force_xcm_version',
        support_1.sts.struct({
            location: enjinV100.V3MultiLocation,
            xcmVersion: support_1.sts.number(),
        })
    ),
    /**
     * See [`Pallet::force_xcm_version`].
     */
    enjinV1026: new support_1.CallType(
        'XcmPallet.force_xcm_version',
        support_1.sts.struct({
            location: enjinV1026.V3MultiLocation,
            version: support_1.sts.number(),
        })
    ),
    /**
     * Extoll that a particular destination can be communicated with through a particular
     * version of XCM.
     *
     * - `origin`: Must be an origin specified by AdminOrigin.
     * - `location`: The destination that is being described.
     * - `xcm_version`: The latest version of XCM that `location` supports.
     */
    enjinV1032: new support_1.CallType(
        'XcmPallet.force_xcm_version',
        support_1.sts.struct({
            location: enjinV1032.V4Location,
            version: support_1.sts.number(),
        })
    ),
    /**
     * Extoll that a particular destination can be communicated with through a particular
     * version of XCM.
     *
     * - `origin`: Must be Root.
     * - `location`: The destination that is being described.
     * - `xcm_version`: The latest version of XCM that `location` supports.
     */
    v100: new support_1.CallType(
        'XcmPallet.force_xcm_version',
        support_1.sts.struct({
            location: v100.V3MultiLocation,
            xcmVersion: support_1.sts.number(),
        })
    ),
    /**
     * See [`Pallet::force_xcm_version`].
     */
    v1026: new support_1.CallType(
        'XcmPallet.force_xcm_version',
        support_1.sts.struct({
            location: v1026.V3MultiLocation,
            version: support_1.sts.number(),
        })
    ),
    /**
     * Extoll that a particular destination can be communicated with through a particular
     * version of XCM.
     *
     * - `origin`: Must be an origin specified by AdminOrigin.
     * - `location`: The destination that is being described.
     * - `xcm_version`: The latest version of XCM that `location` supports.
     */
    v1030: new support_1.CallType(
        'XcmPallet.force_xcm_version',
        support_1.sts.struct({
            location: v1030.V4Location,
            version: support_1.sts.number(),
        })
    ),
}
exports.forceDefaultXcmVersion = {
    name: 'XcmPallet.force_default_xcm_version',
    /**
     * Set a safe XCM version (the version that XCM should be encoded with if the most recent
     * version a destination can accept is unknown).
     *
     * - `origin`: Must be an origin specified by AdminOrigin.
     * - `maybe_xcm_version`: The default XCM encoding version, or `None` to disable.
     */
    enjinV100: new support_1.CallType(
        'XcmPallet.force_default_xcm_version',
        support_1.sts.struct({
            maybeXcmVersion: support_1.sts.option(function () {
                return support_1.sts.number()
            }),
        })
    ),
}
exports.forceSubscribeVersionNotify = {
    name: 'XcmPallet.force_subscribe_version_notify',
    /**
     * Ask a location to notify us regarding their XCM version and any changes to it.
     *
     * - `origin`: Must be an origin specified by AdminOrigin.
     * - `location`: The location to which we should subscribe for XCM version notifications.
     */
    enjinV100: new support_1.CallType(
        'XcmPallet.force_subscribe_version_notify',
        support_1.sts.struct({
            location: enjinV100.VersionedMultiLocation,
        })
    ),
    /**
     * Ask a location to notify us regarding their XCM version and any changes to it.
     *
     * - `origin`: Must be an origin specified by AdminOrigin.
     * - `location`: The location to which we should subscribe for XCM version notifications.
     */
    enjinV1032: new support_1.CallType(
        'XcmPallet.force_subscribe_version_notify',
        support_1.sts.struct({
            location: enjinV1032.VersionedLocation,
        })
    ),
    /**
     * Ask a location to notify us regarding their XCM version and any changes to it.
     *
     * - `origin`: Must be Root.
     * - `location`: The location to which we should subscribe for XCM version notifications.
     */
    v100: new support_1.CallType(
        'XcmPallet.force_subscribe_version_notify',
        support_1.sts.struct({
            location: v100.VersionedMultiLocation,
        })
    ),
    /**
     * Ask a location to notify us regarding their XCM version and any changes to it.
     *
     * - `origin`: Must be an origin specified by AdminOrigin.
     * - `location`: The location to which we should subscribe for XCM version notifications.
     */
    v1030: new support_1.CallType(
        'XcmPallet.force_subscribe_version_notify',
        support_1.sts.struct({
            location: v1030.VersionedLocation,
        })
    ),
}
exports.forceUnsubscribeVersionNotify = {
    name: 'XcmPallet.force_unsubscribe_version_notify',
    /**
     * Require that a particular destination should no longer notify us regarding any XCM
     * version changes.
     *
     * - `origin`: Must be an origin specified by AdminOrigin.
     * - `location`: The location to which we are currently subscribed for XCM version
     *   notifications which we no longer desire.
     */
    enjinV100: new support_1.CallType(
        'XcmPallet.force_unsubscribe_version_notify',
        support_1.sts.struct({
            location: enjinV100.VersionedMultiLocation,
        })
    ),
    /**
     * Require that a particular destination should no longer notify us regarding any XCM
     * version changes.
     *
     * - `origin`: Must be an origin specified by AdminOrigin.
     * - `location`: The location to which we are currently subscribed for XCM version
     *   notifications which we no longer desire.
     */
    enjinV1032: new support_1.CallType(
        'XcmPallet.force_unsubscribe_version_notify',
        support_1.sts.struct({
            location: enjinV1032.VersionedLocation,
        })
    ),
    /**
     * Require that a particular destination should no longer notify us regarding any XCM
     * version changes.
     *
     * - `origin`: Must be Root.
     * - `location`: The location to which we are currently subscribed for XCM version
     *   notifications which we no longer desire.
     */
    v100: new support_1.CallType(
        'XcmPallet.force_unsubscribe_version_notify',
        support_1.sts.struct({
            location: v100.VersionedMultiLocation,
        })
    ),
    /**
     * Require that a particular destination should no longer notify us regarding any XCM
     * version changes.
     *
     * - `origin`: Must be an origin specified by AdminOrigin.
     * - `location`: The location to which we are currently subscribed for XCM version
     *   notifications which we no longer desire.
     */
    v1030: new support_1.CallType(
        'XcmPallet.force_unsubscribe_version_notify',
        support_1.sts.struct({
            location: v1030.VersionedLocation,
        })
    ),
}
exports.limitedReserveTransferAssets = {
    name: 'XcmPallet.limited_reserve_transfer_assets',
    /**
     * Transfer some assets from the local chain to the sovereign account of a destination
     * chain and forward a notification XCM.
     *
     * Fee payment on the destination side is made from the asset in the `assets` vector of
     * index `fee_asset_item`, up to enough to pay for `weight_limit` of weight. If more weight
     * is needed than `weight_limit`, then the operation will fail and the assets send may be
     * at risk.
     *
     * - `origin`: Must be capable of withdrawing the `assets` and executing XCM.
     * - `dest`: Destination context for the assets. Will typically be `X2(Parent, Parachain(..))` to send
     *   from parachain to parachain, or `X1(Parachain(..))` to send from relay to parachain.
     * - `beneficiary`: A beneficiary location for the assets in the context of `dest`. Will generally be
     *   an `AccountId32` value.
     * - `assets`: The assets to be withdrawn. This should include the assets used to pay the fee on the
     *   `dest` side.
     * - `fee_asset_item`: The index into `assets` of the item which should be used to pay
     *   fees.
     * - `weight_limit`: The remote-side weight limit, if any, for the XCM fee purchase.
     */
    enjinV100: new support_1.CallType(
        'XcmPallet.limited_reserve_transfer_assets',
        support_1.sts.struct({
            dest: enjinV100.VersionedMultiLocation,
            beneficiary: enjinV100.VersionedMultiLocation,
            assets: enjinV100.VersionedMultiAssets,
            feeAssetItem: support_1.sts.number(),
            weightLimit: enjinV100.V3WeightLimit,
        })
    ),
    /**
     * Transfer some assets from the local chain to the destination chain through their local,
     * destination or remote reserve.
     *
     * `assets` must have same reserve location and may not be teleportable to `dest`.
     *  - `assets` have local reserve: transfer assets to sovereign account of destination
     *    chain and forward a notification XCM to `dest` to mint and deposit reserve-based
     *    assets to `beneficiary`.
     *  - `assets` have destination reserve: burn local assets and forward a notification to
     *    `dest` chain to withdraw the reserve assets from this chain's sovereign account and
     *    deposit them to `beneficiary`.
     *  - `assets` have remote reserve: burn local assets, forward XCM to reserve chain to move
     *    reserves from this chain's SA to `dest` chain's SA, and forward another XCM to `dest`
     *    to mint and deposit reserve-based assets to `beneficiary`.
     *
     * Fee payment on the destination side is made from the asset in the `assets` vector of
     * index `fee_asset_item`, up to enough to pay for `weight_limit` of weight. If more weight
     * is needed than `weight_limit`, then the operation will fail and the assets send may be
     * at risk.
     *
     * - `origin`: Must be capable of withdrawing the `assets` and executing XCM.
     * - `dest`: Destination context for the assets. Will typically be `[Parent,
     *   Parachain(..)]` to send from parachain to parachain, or `[Parachain(..)]` to send from
     *   relay to parachain.
     * - `beneficiary`: A beneficiary location for the assets in the context of `dest`. Will
     *   generally be an `AccountId32` value.
     * - `assets`: The assets to be withdrawn. This should include the assets used to pay the
     *   fee on the `dest` (and possibly reserve) chains.
     * - `fee_asset_item`: The index into `assets` of the item which should be used to pay
     *   fees.
     * - `weight_limit`: The remote-side weight limit, if any, for the XCM fee purchase.
     */
    enjinV1032: new support_1.CallType(
        'XcmPallet.limited_reserve_transfer_assets',
        support_1.sts.struct({
            dest: enjinV1032.VersionedLocation,
            beneficiary: enjinV1032.VersionedLocation,
            assets: enjinV1032.VersionedAssets,
            feeAssetItem: support_1.sts.number(),
            weightLimit: enjinV1032.V3WeightLimit,
        })
    ),
    /**
     * Transfer some assets from the local chain to the sovereign account of a destination
     * chain and forward a notification XCM.
     *
     * Fee payment on the destination side is made from the asset in the `assets` vector of
     * index `fee_asset_item`, up to enough to pay for `weight_limit` of weight. If more weight
     * is needed than `weight_limit`, then the operation will fail and the assets send may be
     * at risk.
     *
     * - `origin`: Must be capable of withdrawing the `assets` and executing XCM.
     * - `dest`: Destination context for the assets. Will typically be `X2(Parent, Parachain(..))` to send
     *   from parachain to parachain, or `X1(Parachain(..))` to send from relay to parachain.
     * - `beneficiary`: A beneficiary location for the assets in the context of `dest`. Will generally be
     *   an `AccountId32` value.
     * - `assets`: The assets to be withdrawn. This should include the assets used to pay the fee on the
     *   `dest` side.
     * - `fee_asset_item`: The index into `assets` of the item which should be used to pay
     *   fees.
     * - `weight_limit`: The remote-side weight limit, if any, for the XCM fee purchase.
     */
    v100: new support_1.CallType(
        'XcmPallet.limited_reserve_transfer_assets',
        support_1.sts.struct({
            dest: v100.VersionedMultiLocation,
            beneficiary: v100.VersionedMultiLocation,
            assets: v100.VersionedMultiAssets,
            feeAssetItem: support_1.sts.number(),
            weightLimit: v100.V3WeightLimit,
        })
    ),
    /**
     * Transfer some assets from the local chain to the destination chain through their local,
     * destination or remote reserve.
     *
     * `assets` must have same reserve location and may not be teleportable to `dest`.
     *  - `assets` have local reserve: transfer assets to sovereign account of destination
     *    chain and forward a notification XCM to `dest` to mint and deposit reserve-based
     *    assets to `beneficiary`.
     *  - `assets` have destination reserve: burn local assets and forward a notification to
     *    `dest` chain to withdraw the reserve assets from this chain's sovereign account and
     *    deposit them to `beneficiary`.
     *  - `assets` have remote reserve: burn local assets, forward XCM to reserve chain to move
     *    reserves from this chain's SA to `dest` chain's SA, and forward another XCM to `dest`
     *    to mint and deposit reserve-based assets to `beneficiary`.
     *
     * Fee payment on the destination side is made from the asset in the `assets` vector of
     * index `fee_asset_item`, up to enough to pay for `weight_limit` of weight. If more weight
     * is needed than `weight_limit`, then the operation will fail and the assets send may be
     * at risk.
     *
     * - `origin`: Must be capable of withdrawing the `assets` and executing XCM.
     * - `dest`: Destination context for the assets. Will typically be `[Parent,
     *   Parachain(..)]` to send from parachain to parachain, or `[Parachain(..)]` to send from
     *   relay to parachain.
     * - `beneficiary`: A beneficiary location for the assets in the context of `dest`. Will
     *   generally be an `AccountId32` value.
     * - `assets`: The assets to be withdrawn. This should include the assets used to pay the
     *   fee on the `dest` (and possibly reserve) chains.
     * - `fee_asset_item`: The index into `assets` of the item which should be used to pay
     *   fees.
     * - `weight_limit`: The remote-side weight limit, if any, for the XCM fee purchase.
     */
    v1030: new support_1.CallType(
        'XcmPallet.limited_reserve_transfer_assets',
        support_1.sts.struct({
            dest: v1030.VersionedLocation,
            beneficiary: v1030.VersionedLocation,
            assets: v1030.VersionedAssets,
            feeAssetItem: support_1.sts.number(),
            weightLimit: v1030.V3WeightLimit,
        })
    ),
}
exports.limitedTeleportAssets = {
    name: 'XcmPallet.limited_teleport_assets',
    /**
     * Teleport some assets from the local chain to some destination chain.
     *
     * Fee payment on the destination side is made from the asset in the `assets` vector of
     * index `fee_asset_item`, up to enough to pay for `weight_limit` of weight. If more weight
     * is needed than `weight_limit`, then the operation will fail and the assets send may be
     * at risk.
     *
     * - `origin`: Must be capable of withdrawing the `assets` and executing XCM.
     * - `dest`: Destination context for the assets. Will typically be `X2(Parent, Parachain(..))` to send
     *   from parachain to parachain, or `X1(Parachain(..))` to send from relay to parachain.
     * - `beneficiary`: A beneficiary location for the assets in the context of `dest`. Will generally be
     *   an `AccountId32` value.
     * - `assets`: The assets to be withdrawn. The first item should be the currency used to to pay the fee on the
     *   `dest` side. May not be empty.
     * - `fee_asset_item`: The index into `assets` of the item which should be used to pay
     *   fees.
     * - `weight_limit`: The remote-side weight limit, if any, for the XCM fee purchase.
     */
    enjinV100: new support_1.CallType(
        'XcmPallet.limited_teleport_assets',
        support_1.sts.struct({
            dest: enjinV100.VersionedMultiLocation,
            beneficiary: enjinV100.VersionedMultiLocation,
            assets: enjinV100.VersionedMultiAssets,
            feeAssetItem: support_1.sts.number(),
            weightLimit: enjinV100.V3WeightLimit,
        })
    ),
    /**
     * Teleport some assets from the local chain to some destination chain.
     *
     * Fee payment on the destination side is made from the asset in the `assets` vector of
     * index `fee_asset_item`, up to enough to pay for `weight_limit` of weight. If more weight
     * is needed than `weight_limit`, then the operation will fail and the assets send may be
     * at risk.
     *
     * - `origin`: Must be capable of withdrawing the `assets` and executing XCM.
     * - `dest`: Destination context for the assets. Will typically be `[Parent,
     *   Parachain(..)]` to send from parachain to parachain, or `[Parachain(..)]` to send from
     *   relay to parachain.
     * - `beneficiary`: A beneficiary location for the assets in the context of `dest`. Will
     *   generally be an `AccountId32` value.
     * - `assets`: The assets to be withdrawn. This should include the assets used to pay the
     *   fee on the `dest` chain.
     * - `fee_asset_item`: The index into `assets` of the item which should be used to pay
     *   fees.
     * - `weight_limit`: The remote-side weight limit, if any, for the XCM fee purchase.
     */
    enjinV1032: new support_1.CallType(
        'XcmPallet.limited_teleport_assets',
        support_1.sts.struct({
            dest: enjinV1032.VersionedLocation,
            beneficiary: enjinV1032.VersionedLocation,
            assets: enjinV1032.VersionedAssets,
            feeAssetItem: support_1.sts.number(),
            weightLimit: enjinV1032.V3WeightLimit,
        })
    ),
    /**
     * Teleport some assets from the local chain to some destination chain.
     *
     * Fee payment on the destination side is made from the asset in the `assets` vector of
     * index `fee_asset_item`, up to enough to pay for `weight_limit` of weight. If more weight
     * is needed than `weight_limit`, then the operation will fail and the assets send may be
     * at risk.
     *
     * - `origin`: Must be capable of withdrawing the `assets` and executing XCM.
     * - `dest`: Destination context for the assets. Will typically be `X2(Parent, Parachain(..))` to send
     *   from parachain to parachain, or `X1(Parachain(..))` to send from relay to parachain.
     * - `beneficiary`: A beneficiary location for the assets in the context of `dest`. Will generally be
     *   an `AccountId32` value.
     * - `assets`: The assets to be withdrawn. The first item should be the currency used to to pay the fee on the
     *   `dest` side. May not be empty.
     * - `fee_asset_item`: The index into `assets` of the item which should be used to pay
     *   fees.
     * - `weight_limit`: The remote-side weight limit, if any, for the XCM fee purchase.
     */
    v100: new support_1.CallType(
        'XcmPallet.limited_teleport_assets',
        support_1.sts.struct({
            dest: v100.VersionedMultiLocation,
            beneficiary: v100.VersionedMultiLocation,
            assets: v100.VersionedMultiAssets,
            feeAssetItem: support_1.sts.number(),
            weightLimit: v100.V3WeightLimit,
        })
    ),
    /**
     * Teleport some assets from the local chain to some destination chain.
     *
     * Fee payment on the destination side is made from the asset in the `assets` vector of
     * index `fee_asset_item`, up to enough to pay for `weight_limit` of weight. If more weight
     * is needed than `weight_limit`, then the operation will fail and the assets send may be
     * at risk.
     *
     * - `origin`: Must be capable of withdrawing the `assets` and executing XCM.
     * - `dest`: Destination context for the assets. Will typically be `[Parent,
     *   Parachain(..)]` to send from parachain to parachain, or `[Parachain(..)]` to send from
     *   relay to parachain.
     * - `beneficiary`: A beneficiary location for the assets in the context of `dest`. Will
     *   generally be an `AccountId32` value.
     * - `assets`: The assets to be withdrawn. This should include the assets used to pay the
     *   fee on the `dest` chain.
     * - `fee_asset_item`: The index into `assets` of the item which should be used to pay
     *   fees.
     * - `weight_limit`: The remote-side weight limit, if any, for the XCM fee purchase.
     */
    v1030: new support_1.CallType(
        'XcmPallet.limited_teleport_assets',
        support_1.sts.struct({
            dest: v1030.VersionedLocation,
            beneficiary: v1030.VersionedLocation,
            assets: v1030.VersionedAssets,
            feeAssetItem: support_1.sts.number(),
            weightLimit: v1030.V3WeightLimit,
        })
    ),
}
exports.forceSuspension = {
    name: 'XcmPallet.force_suspension',
    /**
     * Set or unset the global suspension state of the XCM executor.
     *
     * - `origin`: Must be an origin specified by AdminOrigin.
     * - `suspended`: `true` to suspend, `false` to resume.
     */
    enjinV100: new support_1.CallType(
        'XcmPallet.force_suspension',
        support_1.sts.struct({
            suspended: support_1.sts.boolean(),
        })
    ),
}
exports.transferAssets = {
    name: 'XcmPallet.transfer_assets',
    /**
     * Transfer some assets from the local chain to the destination chain through their local,
     * destination or remote reserve, or through teleports.
     *
     * Fee payment on the destination side is made from the asset in the `assets` vector of
     * index `fee_asset_item` (hence referred to as `fees`), up to enough to pay for
     * `weight_limit` of weight. If more weight is needed than `weight_limit`, then the
     * operation will fail and the assets sent may be at risk.
     *
     * `assets` (excluding `fees`) must have same reserve location or otherwise be teleportable
     * to `dest`, no limitations imposed on `fees`.
     *  - for local reserve: transfer assets to sovereign account of destination chain and
     *    forward a notification XCM to `dest` to mint and deposit reserve-based assets to
     *    `beneficiary`.
     *  - for destination reserve: burn local assets and forward a notification to `dest` chain
     *    to withdraw the reserve assets from this chain's sovereign account and deposit them
     *    to `beneficiary`.
     *  - for remote reserve: burn local assets, forward XCM to reserve chain to move reserves
     *    from this chain's SA to `dest` chain's SA, and forward another XCM to `dest` to mint
     *    and deposit reserve-based assets to `beneficiary`.
     *  - for teleports: burn local assets and forward XCM to `dest` chain to mint/teleport
     *    assets and deposit them to `beneficiary`.
     *
     * - `origin`: Must be capable of withdrawing the `assets` and executing XCM.
     * - `dest`: Destination context for the assets. Will typically be `X2(Parent,
     *   Parachain(..))` to send from parachain to parachain, or `X1(Parachain(..))` to send
     *   from relay to parachain.
     * - `beneficiary`: A beneficiary location for the assets in the context of `dest`. Will
     *   generally be an `AccountId32` value.
     * - `assets`: The assets to be withdrawn. This should include the assets used to pay the
     *   fee on the `dest` (and possibly reserve) chains.
     * - `fee_asset_item`: The index into `assets` of the item which should be used to pay
     *   fees.
     * - `weight_limit`: The remote-side weight limit, if any, for the XCM fee purchase.
     */
    enjinV1032: new support_1.CallType(
        'XcmPallet.transfer_assets',
        support_1.sts.struct({
            dest: enjinV1032.VersionedLocation,
            beneficiary: enjinV1032.VersionedLocation,
            assets: enjinV1032.VersionedAssets,
            feeAssetItem: support_1.sts.number(),
            weightLimit: enjinV1032.V3WeightLimit,
        })
    ),
}
exports.claimAssets = {
    name: 'XcmPallet.claim_assets',
    /**
     * Claims assets trapped on this pallet because of leftover assets during XCM execution.
     *
     * - `origin`: Anyone can call this extrinsic.
     * - `assets`: The exact assets that were trapped. Use the version to specify what version
     * was the latest when they were trapped.
     * - `beneficiary`: The location/account where the claimed assets will be deposited.
     */
    enjinV1032: new support_1.CallType(
        'XcmPallet.claim_assets',
        support_1.sts.struct({
            assets: enjinV1032.VersionedAssets,
            beneficiary: enjinV1032.VersionedLocation,
        })
    ),
}
exports.transferAssetsUsingTypeAndThen = {
    name: 'XcmPallet.transfer_assets_using_type_and_then',
    /**
     * Transfer assets from the local chain to the destination chain using explicit transfer
     * types for assets and fees.
     *
     * `assets` must have same reserve location or may be teleportable to `dest`. Caller must
     * provide the `assets_transfer_type` to be used for `assets`:
     *  - `TransferType::LocalReserve`: transfer assets to sovereign account of destination
     *    chain and forward a notification XCM to `dest` to mint and deposit reserve-based
     *    assets to `beneficiary`.
     *  - `TransferType::DestinationReserve`: burn local assets and forward a notification to
     *    `dest` chain to withdraw the reserve assets from this chain's sovereign account and
     *    deposit them to `beneficiary`.
     *  - `TransferType::RemoteReserve(reserve)`: burn local assets, forward XCM to `reserve`
     *    chain to move reserves from this chain's SA to `dest` chain's SA, and forward another
     *    XCM to `dest` to mint and deposit reserve-based assets to `beneficiary`. Typically
     *    the remote `reserve` is Asset Hub.
     *  - `TransferType::Teleport`: burn local assets and forward XCM to `dest` chain to
     *    mint/teleport assets and deposit them to `beneficiary`.
     *
     * On the destination chain, as well as any intermediary hops, `BuyExecution` is used to
     * buy execution using transferred `assets` identified by `remote_fees_id`.
     * Make sure enough of the specified `remote_fees_id` asset is included in the given list
     * of `assets`. `remote_fees_id` should be enough to pay for `weight_limit`. If more weight
     * is needed than `weight_limit`, then the operation will fail and the sent assets may be
     * at risk.
     *
     * `remote_fees_id` may use different transfer type than rest of `assets` and can be
     * specified through `fees_transfer_type`.
     *
     * The caller needs to specify what should happen to the transferred assets once they reach
     * the `dest` chain. This is done through the `custom_xcm_on_dest` parameter, which
     * contains the instructions to execute on `dest` as a final step.
     *   This is usually as simple as:
     *   `Xcm(vec![DepositAsset { assets: Wild(AllCounted(assets.len())), beneficiary }])`,
     *   but could be something more exotic like sending the `assets` even further.
     *
     * - `origin`: Must be capable of withdrawing the `assets` and executing XCM.
     * - `dest`: Destination context for the assets. Will typically be `[Parent,
     *   Parachain(..)]` to send from parachain to parachain, or `[Parachain(..)]` to send from
     *   relay to parachain, or `(parents: 2, (GlobalConsensus(..), ..))` to send from
     *   parachain across a bridge to another ecosystem destination.
     * - `assets`: The assets to be withdrawn. This should include the assets used to pay the
     *   fee on the `dest` (and possibly reserve) chains.
     * - `assets_transfer_type`: The XCM `TransferType` used to transfer the `assets`.
     * - `remote_fees_id`: One of the included `assets` to be used to pay fees.
     * - `fees_transfer_type`: The XCM `TransferType` used to transfer the `fees` assets.
     * - `custom_xcm_on_dest`: The XCM to be executed on `dest` chain as the last step of the
     *   transfer, which also determines what happens to the assets on the destination chain.
     * - `weight_limit`: The remote-side weight limit, if any, for the XCM fee purchase.
     */
    enjinV1050: new support_1.CallType(
        'XcmPallet.transfer_assets_using_type_and_then',
        support_1.sts.struct({
            dest: enjinV1050.VersionedLocation,
            assets: enjinV1050.VersionedAssets,
            assetsTransferType: enjinV1050.TransferType,
            remoteFeesId: enjinV1050.VersionedAssetId,
            feesTransferType: enjinV1050.TransferType,
            customXcmOnDest: enjinV1050.VersionedXcm,
            weightLimit: enjinV1050.V3WeightLimit,
        })
    ),
}
