import { UnsupportedCallError } from '../../../util/errors'
import { calls } from '../../../type'
import { CallItem } from '../../../contexts'
import { match } from 'ts-pattern'
import { LimitedReserveTransferAssets } from './types'
import { withDispatchCheck } from '../../fuel-tanks/utils'

export const limitedReserveTransferAssets = withDispatchCheck((call: CallItem): LimitedReserveTransferAssets => {
    return match(call)
        .returnType<LimitedReserveTransferAssets>()
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
