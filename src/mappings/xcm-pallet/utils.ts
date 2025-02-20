import { CallItem } from '../../contexts'
import { match } from 'ts-pattern'
import * as mappings from '../index'
import { UnsupportedCallError } from '../../utils/errors'
import { calls } from '../../types'
import { LimitedReserveTransferAssets, LimitedTeleportAssets, TeleportAssets } from './calls'

export function anyTeleportAssets(
    call: CallItem
): LimitedReserveTransferAssets | LimitedTeleportAssets | TeleportAssets {
    return match(call.name)
        .returnType<LimitedReserveTransferAssets | LimitedTeleportAssets | TeleportAssets>()
        .with(calls.xcmPallet.limitedReserveTransferAssets.name, () =>
            mappings.xcmPallet.calls.limitedReserveTransferAssets(call)
        )
        .with(calls.xcmPallet.limitedTeleportAssets.name, () => mappings.xcmPallet.calls.limitedTeleportAssets(call))
        .with(calls.xcmPallet.teleportAssets.name, () => mappings.xcmPallet.calls.teleportAssets(call))
        .otherwise(() => {
            throw new UnsupportedCallError(call)
        })
}
