import { UnsupportedCallError } from '~/util/errors'
import { calls } from '~/type'
import { CallItem } from '~/contexts'
import { match } from 'ts-pattern'
import { LimitedTeleportAssets } from '~/pallet/polkadot-xcm/calls/types'
import { withDispatchCheck } from '~/pallet/fuel-tanks/utils'

export const limitedTeleportAssets = withDispatchCheck((call: CallItem): LimitedTeleportAssets => {
    return match(call)
        .returnType<LimitedTeleportAssets>()
        .when(
            () => calls.polkadotXcm.limitedTeleportAssets.matrixEnjinV1012.is(call),
            () => calls.polkadotXcm.limitedTeleportAssets.matrixEnjinV1012.decode(call)
        )
        .when(
            () => calls.polkadotXcm.limitedTeleportAssets.matrixEnjinV603.is(call),
            () => calls.polkadotXcm.limitedTeleportAssets.matrixEnjinV603.decode(call)
        )
        .when(
            () => calls.polkadotXcm.limitedTeleportAssets.matrixV1030.is(call),
            () => calls.polkadotXcm.limitedTeleportAssets.matrixV1030.decode(call)
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
