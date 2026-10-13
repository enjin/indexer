import { CallItem } from '~/contexts'
import {
    LimitedReserveTransferAssets,
    LimitedTeleportAssets,
    TeleportAssets,
    TransferAssets,
} from '~/pallet/xcm-pallet/calls'
import * as mappings from '~/pallet/index'
import { calls } from '~/type'
import { anyDispatch, isDispatchCall } from '~/pallet/fuel-tanks/utils'

type TeleportCall = LimitedReserveTransferAssets | LimitedTeleportAssets | TeleportAssets | TransferAssets

// This registry is shared by direct-call decoding and sponsored-call validation.
const decoders = new Map<string, (call: CallItem) => TeleportCall>([
    [
        calls.xcmPallet.limitedReserveTransferAssets.name,
        (call) => mappings.xcmPallet.calls.limitedReserveTransferAssets(call),
    ],
    [calls.xcmPallet.limitedTeleportAssets.name, (call) => mappings.xcmPallet.calls.limitedTeleportAssets(call)],
    [calls.xcmPallet.teleportAssets.name, (call) => mappings.xcmPallet.calls.teleportAssets(call)],
    [calls.xcmPallet.transferAssets.name, (call) => mappings.xcmPallet.calls.transferAssets(call)],
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
