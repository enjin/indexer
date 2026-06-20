import { UnsupportedCallError } from '~/util/errors'
import { calls } from '~/type'
import { CallItem } from '~/contexts'
import { match } from 'ts-pattern'
import { TransferAssets } from '~/pallet/xcm-pallet/calls/types'
import { withDispatchCheck } from '~/pallet/fuel-tanks/utils'

export const transferAssets = withDispatchCheck((call: CallItem): TransferAssets => {
    return match(call)
        .returnType<TransferAssets>()
        .when(
            () => calls.xcmPallet.transferAssets.enjinV1032.is(call),
            () => calls.xcmPallet.transferAssets.enjinV1032.decode(call)
        )
        .when(
            () => calls.xcmPallet.transferAssets.enjinV1062.is(call),
            () => calls.xcmPallet.transferAssets.enjinV1062.decode(call)
        )
        .when(
            () => calls.xcmPallet.transferAssets.v1030.is(call),
            () => calls.xcmPallet.transferAssets.v1030.decode(call)
        )
        .when(
            () => calls.xcmPallet.transferAssets.v1060.is(call),
            () => calls.xcmPallet.transferAssets.v1060.decode(call)
        )
        .otherwise(() => {
            throw new UnsupportedCallError(call)
        })
})
