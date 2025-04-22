import { UnsupportedCallError } from '../../../util/errors'
import { calls } from '../../../type'
import { CallItem } from '../../../contexts'
import { match } from 'ts-pattern'
import { TeleportAssets } from './types'
import { withDispatchCheck } from '../../fuel-tanks/utils'

export const teleportAssets = withDispatchCheck((call: CallItem): TeleportAssets => {
    return match(call)
        .returnType<TeleportAssets>()
        .when(
            () => calls.xcmPallet.teleportAssets.enjinV1032.is(call),
            () => calls.xcmPallet.teleportAssets.enjinV1032.decode(call)
        )
        .when(
            () => calls.xcmPallet.teleportAssets.enjinV100.is(call),
            () => calls.xcmPallet.teleportAssets.enjinV100.decode(call)
        )
        .when(
            () => calls.xcmPallet.teleportAssets.v1030.is(call),
            () => calls.xcmPallet.teleportAssets.v1030.decode(call)
        )
        .when(
            () => calls.xcmPallet.teleportAssets.v100.is(call),
            () => calls.xcmPallet.teleportAssets.v100.decode(call)
        )
        .otherwise(() => {
            throw new UnsupportedCallError(call)
        })
})
