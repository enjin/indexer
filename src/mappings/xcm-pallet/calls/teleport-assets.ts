import { UnsupportedCallError } from '../../../utils/errors'
import { calls } from '../../../types'
import { CallItem } from '../../../contexts'
import { match } from 'ts-pattern'
import { TeleportAssets } from './types'

export function teleportAssets(call: CallItem): TeleportAssets {
    return match(call)
        .returnType<TeleportAssets>()
        .when(
            () => calls.xcmPallet.limitedTeleportAssets.enjinV1032.is(call),
            () => calls.xcmPallet.limitedTeleportAssets.enjinV1032.decode(call)
        )
        .when(
            () => calls.xcmPallet.limitedTeleportAssets.enjinV100.is(call),
            () => calls.xcmPallet.limitedTeleportAssets.enjinV100.decode(call)
        )
        .when(
            () => calls.xcmPallet.limitedTeleportAssets.v1030.is(call),
            () => calls.xcmPallet.limitedTeleportAssets.v1030.decode(call)
        )
        .when(
            () => calls.xcmPallet.limitedTeleportAssets.v100.is(call),
            () => calls.xcmPallet.limitedTeleportAssets.v100.decode(call)
        )
        .otherwise(() => {
            throw new UnsupportedCallError(call)
        })
}
