import { UnsupportedCallError } from '../../../common/errors'
import { calls } from '../../../types/generated'
import { CallItem } from '../../../common/types/contexts'
import { match } from 'ts-pattern'
import { TeleportAssets } from '../../../mappings/xcm/calls/types'

export function teleportAssets(call: CallItem): TeleportAssets {
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
}
