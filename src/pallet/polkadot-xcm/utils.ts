import { CallItem } from '../../contexts'
import { LimitedReserveTransferAssets, LimitedTeleportAssets, TeleportAssets } from './calls'
import { match } from 'ts-pattern'
import * as mappings from '../index'
import { UnsupportedCallError } from '../../util/errors'
import { calls } from '../../type'
import { withDispatchCheck } from '../fuel-tanks/utils'

export function anyTeleportAssets(
    call: CallItem
): LimitedReserveTransferAssets | LimitedTeleportAssets | TeleportAssets {
    const processCall = withDispatchCheck(
        (call: CallItem): LimitedReserveTransferAssets | LimitedTeleportAssets | TeleportAssets => {
            return match(call.name)
                .returnType<LimitedReserveTransferAssets | LimitedTeleportAssets | TeleportAssets>()
                .with(calls.polkadotXcm.limitedReserveTransferAssets.name, () =>
                    mappings.polkadotXcm.calls.limitedReserveTransferAssets(call)
                )
                .with(calls.polkadotXcm.limitedTeleportAssets.name, () =>
                    mappings.polkadotXcm.calls.limitedTeleportAssets(call)
                )
                .with(calls.polkadotXcm.teleportAssets.name, () => mappings.polkadotXcm.calls.teleportAssets(call))
                .otherwise(() => {
                    throw new UnsupportedCallError(call)
                })
        }
    )

    return processCall(call)
}
