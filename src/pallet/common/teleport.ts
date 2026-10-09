import type { VersionedAssets, VersionedLocation } from '~/pallet/common/xcm'

export function teleportBeneficiary(location: VersionedLocation): string | null {
    const interior = location.value.interior
    if (interior.__kind !== 'X1') return null

    const junction = Array.isArray(interior.value) ? interior.value.at(0) : interior.value
    return junction?.__kind === 'AccountId32' ? junction.id : null
}

export function nativeTeleportAmount(assets: VersionedAssets): bigint | null {
    const asset = assets.value.at(0)
    if (!asset || asset.fun.__kind !== 'Fungible') return null

    if ('__kind' in asset.id) {
        return asset.id.__kind === 'Concrete' && asset.id.value.interior.__kind === 'Here' ? asset.fun.value : null
    }

    return asset.id.interior.__kind === 'Here' ? asset.fun.value : null
}
