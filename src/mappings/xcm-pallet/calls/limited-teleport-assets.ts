import { UnsupportedCallError } from '../../../utils/errors'
import { calls } from '../../../types'
import { CallItem } from '../../../contexts'
import { match } from 'ts-pattern'
import { LimitedTeleportAssets } from './types'

export function limitedTeleportAssets(call: CallItem): LimitedTeleportAssets {
    console.log('Was dispatched: ', call.wasDispatched)

    return match(call)
        .returnType<LimitedTeleportAssets>()
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
