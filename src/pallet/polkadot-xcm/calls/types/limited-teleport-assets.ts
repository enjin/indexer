import { VersionedAssets, VersionedLocation } from '~/pallet/common/xcm'

export type LimitedTeleportAssets = {
    dest: VersionedLocation
    beneficiary: VersionedLocation
    assets: VersionedAssets
    // feeAssetItem: number - We don't need this
    // weightLimit: matrixEnjinV1012.V3WeightLimit - We don't need this
}
