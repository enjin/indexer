import { CallItem } from '~/contexts'
import { match } from 'ts-pattern'
import * as mappings from '~/pallet/index'
import { UnsupportedCallError } from '~/util/errors'
import { calls } from '~/type'
import { LimitedReserveTransferAssets, LimitedTeleportAssets, TeleportAssets } from '~/pallet/xcm-pallet/calls'
import { withDispatchCheck } from '~/pallet/fuel-tanks/utils'

export function anyTeleportAssets(
    call: CallItem
): LimitedReserveTransferAssets | LimitedTeleportAssets | TeleportAssets {
    const processCall = withDispatchCheck(
        (call: CallItem): LimitedReserveTransferAssets | LimitedTeleportAssets | TeleportAssets => {
            return match(call.name)
                .returnType<LimitedReserveTransferAssets | LimitedTeleportAssets | TeleportAssets>()
                .with(calls.xcmPallet.limitedReserveTransferAssets.name, () =>
                    mappings.xcmPallet.calls.limitedReserveTransferAssets(call)
                )
                .with(calls.xcmPallet.limitedTeleportAssets.name, () =>
                    mappings.xcmPallet.calls.limitedTeleportAssets(call)
                )
                .with(calls.xcmPallet.teleportAssets.name, () => mappings.xcmPallet.calls.teleportAssets(call))
                .otherwise(() => {
                    throw new UnsupportedCallError(call)
                })
        }
    )

    return processCall(call)
}
