import { UnsupportedCallError } from '../../../utils/errors'
import { calls } from '../../../types'
import { CallItem } from '../../../contexts'
import { match } from 'ts-pattern'
import { LimitedReserveTransferAssets } from './types'
import { withDispatchCheck } from '../../fuel-tanks/utils'

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
