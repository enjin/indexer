import { UnsupportedCallError } from '../../../utils/errors'
import { calls } from '../../../types'
import { CallItem } from '../../../contexts'
import { match } from 'ts-pattern'
import { TeleportAssets } from './types'
import { withDispatchCheck } from '../../fuel-tanks/utils'

export const teleportAssets = withDispatchCheck((call: CallItem): TeleportAssets => {
    return match(call)
        .returnType<TeleportAssets>()
        .when(
            () => calls.polkadotXcm.limitedTeleportAssets.matrixEnjinV1012.is(call),
            () => calls.polkadotXcm.limitedTeleportAssets.matrixEnjinV1012.decode(call)
        )
        .when(
            () => calls.polkadotXcm.limitedTeleportAssets.matrixEnjinV603.is(call),
            () => calls.polkadotXcm.limitedTeleportAssets.matrixEnjinV603.decode(call)
        )
        .when(
            () => calls.polkadotXcm.limitedTeleportAssets.matrixV1010.is(call),
            () => calls.polkadotXcm.limitedTeleportAssets.matrixV1010.decode(call)
        )
        .when(
            () => calls.polkadotXcm.limitedTeleportAssets.matrixV500.is(call),
            () => calls.polkadotXcm.limitedTeleportAssets.matrixV500.decode(call)
        )
        .otherwise(() => {
            throw new UnsupportedCallError(call)
        })
})
