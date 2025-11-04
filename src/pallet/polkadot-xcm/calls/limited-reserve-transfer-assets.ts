import { UnsupportedCallError } from '~/util/errors'
import { calls } from '~/type'
import { CallItem } from '~/contexts'
import { match } from 'ts-pattern'
import { LimitedReserveTransferAssets } from '~/pallet/polkadot-xcm/calls/types'
import { withDispatchCheck } from '~/pallet/fuel-tanks/utils'

export const limitedReserveTransferAssets = withDispatchCheck((call: CallItem): LimitedReserveTransferAssets => {
    return match(call)
        .returnType<LimitedReserveTransferAssets>()
        .when(
            () => calls.polkadotXcm.limitedReserveTransferAssets.matrixEnjinV1012.is(call),
            () => calls.polkadotXcm.limitedReserveTransferAssets.matrixEnjinV1012.decode(call)
        )
        .when(
            () => calls.polkadotXcm.limitedReserveTransferAssets.matrixEnjinV603.is(call),
            () => calls.polkadotXcm.limitedReserveTransferAssets.matrixEnjinV603.decode(call)
        )
        .when(
            () => calls.polkadotXcm.limitedReserveTransferAssets.matrixV1030.is(call),
            () => calls.polkadotXcm.limitedReserveTransferAssets.matrixV1030.decode(call)
        )
        .when(
            () => calls.polkadotXcm.limitedReserveTransferAssets.matrixV1010.is(call),
            () => calls.polkadotXcm.limitedReserveTransferAssets.matrixV1010.decode(call)
        )
        .when(
            () => calls.polkadotXcm.limitedReserveTransferAssets.matrixV500.is(call),
            () => calls.polkadotXcm.limitedReserveTransferAssets.matrixV500.decode(call)
        )
        .otherwise(() => {
            throw new UnsupportedCallError(call)
        })
})
