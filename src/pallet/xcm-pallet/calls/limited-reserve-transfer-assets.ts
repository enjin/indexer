import { UnsupportedCallError } from '~/util/errors'
import { calls } from '~/type'
import { CallItem } from '~/contexts'
import { match } from 'ts-pattern'
import { LimitedReserveTransferAssets } from '~/pallet/xcm-pallet/calls/types'
import { withDispatchCheck } from '~/pallet/fuel-tanks/utils'

export const limitedReserveTransferAssets = withDispatchCheck((call: CallItem): LimitedReserveTransferAssets => {
    return match(call)
        .returnType<LimitedReserveTransferAssets>()
        .when(
            () => calls.xcmPallet.limitedReserveTransferAssets.enjinV1032.is(call),
            () => calls.xcmPallet.limitedReserveTransferAssets.enjinV1032.decode(call)
        )
        .when(
            () => calls.xcmPallet.limitedReserveTransferAssets.enjinV100.is(call),
            () => calls.xcmPallet.limitedReserveTransferAssets.enjinV100.decode(call)
        )
        .when(
            () => calls.xcmPallet.limitedReserveTransferAssets.v1060.is(call),
            () => calls.xcmPallet.limitedReserveTransferAssets.v1060.decode(call)
        )
        .when(
            () => calls.xcmPallet.limitedReserveTransferAssets.v1030.is(call),
            () => calls.xcmPallet.limitedReserveTransferAssets.v1030.decode(call)
        )
        .when(
            () => calls.xcmPallet.limitedReserveTransferAssets.v100.is(call),
            () => calls.xcmPallet.limitedReserveTransferAssets.v100.decode(call)
        )
        .when(
            () => calls.xcmPallet.limitedReserveTransferAssets.enjinV1062.is(call),
            () => calls.xcmPallet.limitedReserveTransferAssets.enjinV1062.decode(call)
        )
        .otherwise(() => {
            throw new UnsupportedCallError(call)
        })
})
