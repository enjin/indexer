import { VersionedAssets, VersionedLocation } from '../../../common/xcm'

export type TeleportAssets = {
    dest: VersionedLocation
    beneficiary: VersionedLocation
    assets: VersionedAssets
    // feeAssetItem: number - We don't need this
    // weightLimit: matrixEnjinV1012.V3WeightLimit - We don't need this
}
