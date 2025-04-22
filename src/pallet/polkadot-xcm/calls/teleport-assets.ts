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
            () => calls.polkadotXcm.teleportAssets.matrixEnjinV1012.is(call),
            () => calls.polkadotXcm.teleportAssets.matrixEnjinV1012.decode(call)
        )
        .when(
            () => calls.polkadotXcm.teleportAssets.matrixEnjinV603.is(call),
            () => calls.polkadotXcm.teleportAssets.matrixEnjinV603.decode(call)
        )
        .when(
            () => calls.polkadotXcm.teleportAssets.matrixV1010.is(call),
            () => calls.polkadotXcm.teleportAssets.matrixV1010.decode(call)
        )
        .when(
            () => calls.polkadotXcm.teleportAssets.matrixV500.is(call),
            () => calls.polkadotXcm.teleportAssets.matrixV500.decode(call)
        )
        .otherwise(() => {
            throw new UnsupportedCallError(call)
        })
})
