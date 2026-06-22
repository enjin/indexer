import { VersionedAssets, VersionedLocation } from '~/pallet/common/xcm'

export type TransferAssets = {
    dest: VersionedLocation
    beneficiary: VersionedLocation
    assets: VersionedAssets
}
