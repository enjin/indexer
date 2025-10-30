import { sts, Block, Bytes, Option, Result, CallType, RuntimeCtx } from '../support'
import * as matrixV500 from '../matrixV500'
import * as matrixEnjinV603 from '../matrixEnjinV603'
import * as matrixEnjinV1004 from '../matrixEnjinV1004'
import * as matrixV1004 from '../matrixV1004'
import * as matrixV1010 from '../matrixV1010'
import * as matrixEnjinV1012 from '../matrixEnjinV1012'
import * as matrixEnjinV1022 from '../matrixEnjinV1022'
import * as matrixV1030 from '../matrixV1030'

export const send = {
    name: 'PolkadotXcm.send',
    matrixEnjinV603: new CallType(
        'PolkadotXcm.send',
        sts.struct({
            dest: matrixEnjinV603.VersionedMultiLocation,
            message: matrixEnjinV603.VersionedXcm,
        })
    ),
    matrixEnjinV1012: new CallType(
        'PolkadotXcm.send',
        sts.struct({
            dest: matrixEnjinV1012.VersionedLocation,
            message: matrixEnjinV1012.VersionedXcm,
        })
    ),
    matrixV500: new CallType(
        'PolkadotXcm.send',
        sts.struct({
            dest: matrixV500.VersionedMultiLocation,
            message: matrixV500.VersionedXcm,
        })
    ),
    matrixV1010: new CallType(
        'PolkadotXcm.send',
        sts.struct({
            dest: matrixV1010.VersionedLocation,
            message: matrixV1010.VersionedXcm,
        })
    ),
    matrixV1030: new CallType(
        'PolkadotXcm.send',
        sts.struct({
            dest: matrixV1030.VersionedLocation,
            message: matrixV1030.VersionedXcm,
        })
    ),
}

export const teleportAssets = {
    name: 'PolkadotXcm.teleport_assets',
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
    matrixEnjinV603: new CallType(
        'PolkadotXcm.teleport_assets',
        sts.struct({
            dest: matrixEnjinV603.VersionedMultiLocation,
            beneficiary: matrixEnjinV603.VersionedMultiLocation,
            assets: matrixEnjinV603.VersionedMultiAssets,
            feeAssetItem: sts.number(),
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
    matrixEnjinV1012: new CallType(
        'PolkadotXcm.teleport_assets',
        sts.struct({
            dest: matrixEnjinV1012.VersionedLocation,
            beneficiary: matrixEnjinV1012.VersionedLocation,
            assets: matrixEnjinV1012.VersionedAssets,
            feeAssetItem: sts.number(),
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
    matrixV500: new CallType(
        'PolkadotXcm.teleport_assets',
        sts.struct({
            dest: matrixV500.VersionedMultiLocation,
            beneficiary: matrixV500.VersionedMultiLocation,
            assets: matrixV500.VersionedMultiAssets,
            feeAssetItem: sts.number(),
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
    matrixV1010: new CallType(
        'PolkadotXcm.teleport_assets',
        sts.struct({
            dest: matrixV1010.VersionedLocation,
            beneficiary: matrixV1010.VersionedLocation,
            assets: matrixV1010.VersionedAssets,
            feeAssetItem: sts.number(),
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
    matrixV1030: new CallType(
        'PolkadotXcm.teleport_assets',
        sts.struct({
            dest: matrixV1030.VersionedLocation,
            beneficiary: matrixV1030.VersionedLocation,
            assets: matrixV1030.VersionedAssets,
            feeAssetItem: sts.number(),
        })
    ),
}

export const reserveTransferAssets = {
    name: 'PolkadotXcm.reserve_transfer_assets',
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
    matrixEnjinV603: new CallType(
        'PolkadotXcm.reserve_transfer_assets',
        sts.struct({
            dest: matrixEnjinV603.VersionedMultiLocation,
            beneficiary: matrixEnjinV603.VersionedMultiLocation,
            assets: matrixEnjinV603.VersionedMultiAssets,
            feeAssetItem: sts.number(),
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
    matrixEnjinV1012: new CallType(
        'PolkadotXcm.reserve_transfer_assets',
        sts.struct({
            dest: matrixEnjinV1012.VersionedLocation,
            beneficiary: matrixEnjinV1012.VersionedLocation,
            assets: matrixEnjinV1012.VersionedAssets,
            feeAssetItem: sts.number(),
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
    matrixV500: new CallType(
        'PolkadotXcm.reserve_transfer_assets',
        sts.struct({
            dest: matrixV500.VersionedMultiLocation,
            beneficiary: matrixV500.VersionedMultiLocation,
            assets: matrixV500.VersionedMultiAssets,
            feeAssetItem: sts.number(),
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
    matrixV1010: new CallType(
        'PolkadotXcm.reserve_transfer_assets',
        sts.struct({
            dest: matrixV1010.VersionedLocation,
            beneficiary: matrixV1010.VersionedLocation,
            assets: matrixV1010.VersionedAssets,
            feeAssetItem: sts.number(),
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
    matrixV1030: new CallType(
        'PolkadotXcm.reserve_transfer_assets',
        sts.struct({
            dest: matrixV1030.VersionedLocation,
            beneficiary: matrixV1030.VersionedLocation,
            assets: matrixV1030.VersionedAssets,
            feeAssetItem: sts.number(),
        })
    ),
}

export const execute = {
    name: 'PolkadotXcm.execute',
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
    matrixEnjinV603: new CallType(
        'PolkadotXcm.execute',
        sts.struct({
            message: matrixEnjinV603.Type_353,
            maxWeight: matrixEnjinV603.Weight,
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
    matrixEnjinV1012: new CallType(
        'PolkadotXcm.execute',
        sts.struct({
            message: matrixEnjinV1012.Type_423,
            maxWeight: matrixEnjinV1012.Weight,
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
    matrixV500: new CallType(
        'PolkadotXcm.execute',
        sts.struct({
            message: matrixV500.Type_338,
            maxWeight: matrixV500.Weight,
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
    matrixV1010: new CallType(
        'PolkadotXcm.execute',
        sts.struct({
            message: matrixV1010.Type_414,
            maxWeight: matrixV1010.Weight,
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
    matrixV1030: new CallType(
        'PolkadotXcm.execute',
        sts.struct({
            message: matrixV1030.Type_484,
            maxWeight: matrixV1030.Weight,
        })
    ),
}

export const forceXcmVersion = {
    name: 'PolkadotXcm.force_xcm_version',
    /**
     * Extoll that a particular destination can be communicated with through a particular
     * version of XCM.
     *
     * - `origin`: Must be an origin specified by AdminOrigin.
     * - `location`: The destination that is being described.
     * - `xcm_version`: The latest version of XCM that `location` supports.
     */
    matrixEnjinV603: new CallType(
        'PolkadotXcm.force_xcm_version',
        sts.struct({
            location: matrixEnjinV603.V3MultiLocation,
            xcmVersion: sts.number(),
        })
    ),
    /**
     * See [`Pallet::force_xcm_version`].
     */
    matrixEnjinV1004: new CallType(
        'PolkadotXcm.force_xcm_version',
        sts.struct({
            location: matrixEnjinV1004.V3MultiLocation,
            version: sts.number(),
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
    matrixEnjinV1012: new CallType(
        'PolkadotXcm.force_xcm_version',
        sts.struct({
            location: matrixEnjinV1012.V4Location,
            version: sts.number(),
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
    matrixV500: new CallType(
        'PolkadotXcm.force_xcm_version',
        sts.struct({
            location: matrixV500.V3MultiLocation,
            xcmVersion: sts.number(),
        })
    ),
    /**
     * See [`Pallet::force_xcm_version`].
     */
    matrixV1004: new CallType(
        'PolkadotXcm.force_xcm_version',
        sts.struct({
            location: matrixV1004.V3MultiLocation,
            version: sts.number(),
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
    matrixV1010: new CallType(
        'PolkadotXcm.force_xcm_version',
        sts.struct({
            location: matrixV1010.V4Location,
            version: sts.number(),
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
    matrixV1030: new CallType(
        'PolkadotXcm.force_xcm_version',
        sts.struct({
            location: matrixV1030.V5Location,
            version: sts.number(),
        })
    ),
}

export const forceDefaultXcmVersion = {
    name: 'PolkadotXcm.force_default_xcm_version',
    /**
     * Set a safe XCM version (the version that XCM should be encoded with if the most recent
     * version a destination can accept is unknown).
     *
     * - `origin`: Must be an origin specified by AdminOrigin.
     * - `maybe_xcm_version`: The default XCM encoding version, or `None` to disable.
     */
    matrixEnjinV603: new CallType(
        'PolkadotXcm.force_default_xcm_version',
        sts.struct({
            maybeXcmVersion: sts.option(() => sts.number()),
        })
    ),
}

export const forceSubscribeVersionNotify = {
    name: 'PolkadotXcm.force_subscribe_version_notify',
    /**
     * Ask a location to notify us regarding their XCM version and any changes to it.
     *
     * - `origin`: Must be an origin specified by AdminOrigin.
     * - `location`: The location to which we should subscribe for XCM version notifications.
     */
    matrixEnjinV603: new CallType(
        'PolkadotXcm.force_subscribe_version_notify',
        sts.struct({
            location: matrixEnjinV603.VersionedMultiLocation,
        })
    ),
    /**
     * Ask a location to notify us regarding their XCM version and any changes to it.
     *
     * - `origin`: Must be an origin specified by AdminOrigin.
     * - `location`: The location to which we should subscribe for XCM version notifications.
     */
    matrixEnjinV1012: new CallType(
        'PolkadotXcm.force_subscribe_version_notify',
        sts.struct({
            location: matrixEnjinV1012.VersionedLocation,
        })
    ),
    /**
     * Ask a location to notify us regarding their XCM version and any changes to it.
     *
     * - `origin`: Must be Root.
     * - `location`: The location to which we should subscribe for XCM version notifications.
     */
    matrixV500: new CallType(
        'PolkadotXcm.force_subscribe_version_notify',
        sts.struct({
            location: matrixV500.VersionedMultiLocation,
        })
    ),
    /**
     * Ask a location to notify us regarding their XCM version and any changes to it.
     *
     * - `origin`: Must be an origin specified by AdminOrigin.
     * - `location`: The location to which we should subscribe for XCM version notifications.
     */
    matrixV1010: new CallType(
        'PolkadotXcm.force_subscribe_version_notify',
        sts.struct({
            location: matrixV1010.VersionedLocation,
        })
    ),
    /**
     * Ask a location to notify us regarding their XCM version and any changes to it.
     *
     * - `origin`: Must be an origin specified by AdminOrigin.
     * - `location`: The location to which we should subscribe for XCM version notifications.
     */
    matrixV1030: new CallType(
        'PolkadotXcm.force_subscribe_version_notify',
        sts.struct({
            location: matrixV1030.VersionedLocation,
        })
    ),
}

export const forceUnsubscribeVersionNotify = {
    name: 'PolkadotXcm.force_unsubscribe_version_notify',
    /**
     * Require that a particular destination should no longer notify us regarding any XCM
     * version changes.
     *
     * - `origin`: Must be an origin specified by AdminOrigin.
     * - `location`: The location to which we are currently subscribed for XCM version
     *   notifications which we no longer desire.
     */
    matrixEnjinV603: new CallType(
        'PolkadotXcm.force_unsubscribe_version_notify',
        sts.struct({
            location: matrixEnjinV603.VersionedMultiLocation,
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
    matrixEnjinV1012: new CallType(
        'PolkadotXcm.force_unsubscribe_version_notify',
        sts.struct({
            location: matrixEnjinV1012.VersionedLocation,
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
    matrixV500: new CallType(
        'PolkadotXcm.force_unsubscribe_version_notify',
        sts.struct({
            location: matrixV500.VersionedMultiLocation,
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
    matrixV1010: new CallType(
        'PolkadotXcm.force_unsubscribe_version_notify',
        sts.struct({
            location: matrixV1010.VersionedLocation,
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
    matrixV1030: new CallType(
        'PolkadotXcm.force_unsubscribe_version_notify',
        sts.struct({
            location: matrixV1030.VersionedLocation,
        })
    ),
}

export const limitedReserveTransferAssets = {
    name: 'PolkadotXcm.limited_reserve_transfer_assets',
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
    matrixEnjinV603: new CallType(
        'PolkadotXcm.limited_reserve_transfer_assets',
        sts.struct({
            dest: matrixEnjinV603.VersionedMultiLocation,
            beneficiary: matrixEnjinV603.VersionedMultiLocation,
            assets: matrixEnjinV603.VersionedMultiAssets,
            feeAssetItem: sts.number(),
            weightLimit: matrixEnjinV603.V3WeightLimit,
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
    matrixEnjinV1012: new CallType(
        'PolkadotXcm.limited_reserve_transfer_assets',
        sts.struct({
            dest: matrixEnjinV1012.VersionedLocation,
            beneficiary: matrixEnjinV1012.VersionedLocation,
            assets: matrixEnjinV1012.VersionedAssets,
            feeAssetItem: sts.number(),
            weightLimit: matrixEnjinV1012.V3WeightLimit,
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
    matrixV500: new CallType(
        'PolkadotXcm.limited_reserve_transfer_assets',
        sts.struct({
            dest: matrixV500.VersionedMultiLocation,
            beneficiary: matrixV500.VersionedMultiLocation,
            assets: matrixV500.VersionedMultiAssets,
            feeAssetItem: sts.number(),
            weightLimit: matrixV500.V3WeightLimit,
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
    matrixV1010: new CallType(
        'PolkadotXcm.limited_reserve_transfer_assets',
        sts.struct({
            dest: matrixV1010.VersionedLocation,
            beneficiary: matrixV1010.VersionedLocation,
            assets: matrixV1010.VersionedAssets,
            feeAssetItem: sts.number(),
            weightLimit: matrixV1010.V3WeightLimit,
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
     * is needed than `weight_limit`, then the operation will fail and the sent assets may be
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
    matrixV1030: new CallType(
        'PolkadotXcm.limited_reserve_transfer_assets',
        sts.struct({
            dest: matrixV1030.VersionedLocation,
            beneficiary: matrixV1030.VersionedLocation,
            assets: matrixV1030.VersionedAssets,
            feeAssetItem: sts.number(),
            weightLimit: matrixV1030.V3WeightLimit,
        })
    ),
}

export const limitedTeleportAssets = {
    name: 'PolkadotXcm.limited_teleport_assets',
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
    matrixEnjinV603: new CallType(
        'PolkadotXcm.limited_teleport_assets',
        sts.struct({
            dest: matrixEnjinV603.VersionedMultiLocation,
            beneficiary: matrixEnjinV603.VersionedMultiLocation,
            assets: matrixEnjinV603.VersionedMultiAssets,
            feeAssetItem: sts.number(),
            weightLimit: matrixEnjinV603.V3WeightLimit,
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
    matrixEnjinV1012: new CallType(
        'PolkadotXcm.limited_teleport_assets',
        sts.struct({
            dest: matrixEnjinV1012.VersionedLocation,
            beneficiary: matrixEnjinV1012.VersionedLocation,
            assets: matrixEnjinV1012.VersionedAssets,
            feeAssetItem: sts.number(),
            weightLimit: matrixEnjinV1012.V3WeightLimit,
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
    matrixV500: new CallType(
        'PolkadotXcm.limited_teleport_assets',
        sts.struct({
            dest: matrixV500.VersionedMultiLocation,
            beneficiary: matrixV500.VersionedMultiLocation,
            assets: matrixV500.VersionedMultiAssets,
            feeAssetItem: sts.number(),
            weightLimit: matrixV500.V3WeightLimit,
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
    matrixV1010: new CallType(
        'PolkadotXcm.limited_teleport_assets',
        sts.struct({
            dest: matrixV1010.VersionedLocation,
            beneficiary: matrixV1010.VersionedLocation,
            assets: matrixV1010.VersionedAssets,
            feeAssetItem: sts.number(),
            weightLimit: matrixV1010.V3WeightLimit,
        })
    ),
    /**
     * Teleport some assets from the local chain to some destination chain.
     *
     * Fee payment on the destination side is made from the asset in the `assets` vector of
     * index `fee_asset_item`, up to enough to pay for `weight_limit` of weight. If more weight
     * is needed than `weight_limit`, then the operation will fail and the sent assets may be
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
    matrixV1030: new CallType(
        'PolkadotXcm.limited_teleport_assets',
        sts.struct({
            dest: matrixV1030.VersionedLocation,
            beneficiary: matrixV1030.VersionedLocation,
            assets: matrixV1030.VersionedAssets,
            feeAssetItem: sts.number(),
            weightLimit: matrixV1030.V3WeightLimit,
        })
    ),
}

export const forceSuspension = {
    name: 'PolkadotXcm.force_suspension',
    /**
     * Set or unset the global suspension state of the XCM executor.
     *
     * - `origin`: Must be an origin specified by AdminOrigin.
     * - `suspended`: `true` to suspend, `false` to resume.
     */
    matrixEnjinV603: new CallType(
        'PolkadotXcm.force_suspension',
        sts.struct({
            suspended: sts.boolean(),
        })
    ),
}

export const transferAssets = {
    name: 'PolkadotXcm.transfer_assets',
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
    matrixEnjinV1012: new CallType(
        'PolkadotXcm.transfer_assets',
        sts.struct({
            dest: matrixEnjinV1012.VersionedLocation,
            beneficiary: matrixEnjinV1012.VersionedLocation,
            assets: matrixEnjinV1012.VersionedAssets,
            feeAssetItem: sts.number(),
            weightLimit: matrixEnjinV1012.V3WeightLimit,
        })
    ),
    /**
     * Transfer some assets from the local chain to the destination chain through their local,
     * destination or remote reserve, or through teleports.
     *
     * Fee payment on the destination side is made from the asset in the `assets` vector of
     * index `fee_asset_item` (hence referred to as `fees`), up to enough to pay for
     * `weight_limit` of weight. If more weight is needed than `weight_limit`, then the
     * operation will fail and the sent assets may be at risk.
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
    matrixV1030: new CallType(
        'PolkadotXcm.transfer_assets',
        sts.struct({
            dest: matrixV1030.VersionedLocation,
            beneficiary: matrixV1030.VersionedLocation,
            assets: matrixV1030.VersionedAssets,
            feeAssetItem: sts.number(),
            weightLimit: matrixV1030.V3WeightLimit,
        })
    ),
}

export const claimAssets = {
    name: 'PolkadotXcm.claim_assets',
    /**
     * Claims assets trapped on this pallet because of leftover assets during XCM execution.
     *
     * - `origin`: Anyone can call this extrinsic.
     * - `assets`: The exact assets that were trapped. Use the version to specify what version
     * was the latest when they were trapped.
     * - `beneficiary`: The location/account where the claimed assets will be deposited.
     */
    matrixEnjinV1012: new CallType(
        'PolkadotXcm.claim_assets',
        sts.struct({
            assets: matrixEnjinV1012.VersionedAssets,
            beneficiary: matrixEnjinV1012.VersionedLocation,
        })
    ),
    /**
     * Claims assets trapped on this pallet because of leftover assets during XCM execution.
     *
     * - `origin`: Anyone can call this extrinsic.
     * - `assets`: The exact assets that were trapped. Use the version to specify what version
     * was the latest when they were trapped.
     * - `beneficiary`: The location/account where the claimed assets will be deposited.
     */
    matrixV1030: new CallType(
        'PolkadotXcm.claim_assets',
        sts.struct({
            assets: matrixV1030.VersionedAssets,
            beneficiary: matrixV1030.VersionedLocation,
        })
    ),
}

export const transferAssetsUsingTypeAndThen = {
    name: 'PolkadotXcm.transfer_assets_using_type_and_then',
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
    matrixEnjinV1022: new CallType(
        'PolkadotXcm.transfer_assets_using_type_and_then',
        sts.struct({
            dest: matrixEnjinV1022.VersionedLocation,
            assets: matrixEnjinV1022.VersionedAssets,
            assetsTransferType: matrixEnjinV1022.TransferType,
            remoteFeesId: matrixEnjinV1022.VersionedAssetId,
            feesTransferType: matrixEnjinV1022.TransferType,
            customXcmOnDest: matrixEnjinV1022.VersionedXcm,
            weightLimit: matrixEnjinV1022.V3WeightLimit,
        })
    ),
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
    matrixV1030: new CallType(
        'PolkadotXcm.transfer_assets_using_type_and_then',
        sts.struct({
            dest: matrixV1030.VersionedLocation,
            assets: matrixV1030.VersionedAssets,
            assetsTransferType: matrixV1030.TransferType,
            remoteFeesId: matrixV1030.VersionedAssetId,
            feesTransferType: matrixV1030.TransferType,
            customXcmOnDest: matrixV1030.VersionedXcm,
            weightLimit: matrixV1030.V3WeightLimit,
        })
    ),
}

export const addAuthorizedAlias = {
    name: 'PolkadotXcm.add_authorized_alias',
    /**
     * Authorize another `aliaser` location to alias into the local `origin` making this call.
     * The `aliaser` is only authorized until the provided `expiry` block number.
     * The call can also be used for a previously authorized alias in order to update its
     * `expiry` block number.
     *
     * Usually useful to allow your local account to be aliased into from a remote location
     * also under your control (like your account on another chain).
     *
     * WARNING: make sure the caller `origin` (you) trusts the `aliaser` location to act in
     * their/your name. Once authorized using this call, the `aliaser` can freely impersonate
     * `origin` in XCM programs executed on the local chain.
     */
    matrixV1030: new CallType(
        'PolkadotXcm.add_authorized_alias',
        sts.struct({
            aliaser: matrixV1030.VersionedLocation,
            expires: sts.option(() => sts.bigint()),
        })
    ),
}

export const removeAuthorizedAlias = {
    name: 'PolkadotXcm.remove_authorized_alias',
    /**
     * Remove a previously authorized `aliaser` from the list of locations that can alias into
     * the local `origin` making this call.
     */
    matrixV1030: new CallType(
        'PolkadotXcm.remove_authorized_alias',
        sts.struct({
            aliaser: matrixV1030.VersionedLocation,
        })
    ),
}

export const removeAllAuthorizedAliases = {
    name: 'PolkadotXcm.remove_all_authorized_aliases',
    /**
     * Remove all previously authorized `aliaser`s that can alias into the local `origin`
     * making this call.
     */
    matrixV1030: new CallType('PolkadotXcm.remove_all_authorized_aliases', sts.unit()),
}
