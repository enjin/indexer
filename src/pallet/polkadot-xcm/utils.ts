import { CallItem } from '~/contexts'
import { LimitedReserveTransferAssets, LimitedTeleportAssets, TeleportAssets } from '~/pallet/polkadot-xcm/calls'
import * as mappings from '~/pallet/index'
import { calls } from '~/type'
import { anyDispatch, isDispatchCall } from '~/pallet/fuel-tanks/utils'

type TeleportCall = LimitedReserveTransferAssets | LimitedTeleportAssets | TeleportAssets

// This registry is shared by direct-call decoding and sponsored-call validation.
const decoders = new Map<string, (call: CallItem) => TeleportCall>([
    [
        calls.polkadotXcm.limitedReserveTransferAssets.name,
        (call) => mappings.polkadotXcm.calls.limitedReserveTransferAssets(call),
    ],
    [calls.polkadotXcm.limitedTeleportAssets.name, (call) => mappings.polkadotXcm.calls.limitedTeleportAssets(call)],
    [calls.polkadotXcm.teleportAssets.name, (call) => mappings.polkadotXcm.calls.teleportAssets(call)],
])

export function anyTeleportAssets(call: CallItem): TeleportCall | undefined {
    if (isDispatchCall(call)) {
        const inner = anyDispatch(call).call
        const name = `${inner.__kind}.${inner.value.__kind}`
        // The fuel-tank decoder already decoded the nested runtime call's arguments.
        return decoders.has(name) ? (inner.value as unknown as TeleportCall) : undefined
    }
    return decoders.get(call.name)?.(call)
}
