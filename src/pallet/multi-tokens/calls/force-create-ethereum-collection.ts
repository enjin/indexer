import { CallItem } from '~/contexts'
import { UnsupportedCallError } from '~/util/errors'
import { calls } from '~/type'
import { match } from 'ts-pattern'
import { ForceCreateEthereumCollection } from '~/pallet/multi-tokens/calls/types'
import { withDispatchCheck } from '~/pallet/fuel-tanks/utils'

export const forceCreateEthereumCollection = withDispatchCheck((call: CallItem): ForceCreateEthereumCollection => {
    return match(call)
        .returnType<ForceCreateEthereumCollection>()
        .when(
            () => calls.multiTokens.forceCreateEthereumCollection.matrixEnjinV1022.is(call),
            () => calls.multiTokens.forceCreateEthereumCollection.matrixEnjinV1022.decode(call)
        )
        .when(
            () => calls.multiTokens.forceCreateEthereumCollection.matrixEnjinV1012.is(call),
            () => calls.multiTokens.forceCreateEthereumCollection.matrixEnjinV1012.decode(call)
        )
        .when(
            () => calls.multiTokens.forceCreateEthereumCollection.matrixEnjinV1000.is(call),
            () => calls.multiTokens.forceCreateEthereumCollection.matrixEnjinV1000.decode(call)
        )
        .when(
            () => calls.multiTokens.forceCreateEthereumCollection.matrixV1020.is(call),
            () => calls.multiTokens.forceCreateEthereumCollection.matrixV1020.decode(call)
        )
        .when(
            () => calls.multiTokens.forceCreateEthereumCollection.matrixV1010.is(call),
            () => calls.multiTokens.forceCreateEthereumCollection.matrixV1010.decode(call)
        )
        .when(
            () => calls.multiTokens.forceCreateEthereumCollection.matrixV1000.is(call),
            () => calls.multiTokens.forceCreateEthereumCollection.matrixV1000.decode(call)
        )
        .when(
            () => calls.multiTokens.forceCreateEthereumCollection.enjinV1032.is(call),
            () => calls.multiTokens.forceCreateEthereumCollection.enjinV1032.decode(call)
        )
        .when(
            () => calls.multiTokens.forceCreateEthereumCollection.enjinV1021.is(call),
            () => calls.multiTokens.forceCreateEthereumCollection.enjinV1021.decode(call)
        )
        .when(
            () => calls.multiTokens.forceCreateEthereumCollection.enjinV120.is(call),
            () => calls.multiTokens.forceCreateEthereumCollection.enjinV120.decode(call)
        )
        .when(
            () => calls.multiTokens.forceCreateEthereumCollection.v1050.is(call),
            () => calls.multiTokens.forceCreateEthereumCollection.v1050.decode(call)
        )
        .when(
            () => calls.multiTokens.forceCreateEthereumCollection.v1030.is(call),
            () => calls.multiTokens.forceCreateEthereumCollection.v1030.decode(call)
        )
        .when(
            () => calls.multiTokens.forceCreateEthereumCollection.v1021.is(call),
            () => calls.multiTokens.forceCreateEthereumCollection.v1021.decode(call)
        )
        .when(
            () => calls.multiTokens.forceCreateEthereumCollection.v120.is(call),
            () => calls.multiTokens.forceCreateEthereumCollection.v120.decode(call)
        )
        .when(
            () => calls.multiTokens.forceCreateEthereumCollection.matrixEnjinV1031.is(call),
            () => calls.multiTokens.forceCreateEthereumCollection.matrixEnjinV1031.decode(call)
        )
        .when(
            () => calls.multiTokens.forceCreateEthereumCollection.matrixEnjinV1041.is(call),
            () => calls.multiTokens.forceCreateEthereumCollection.matrixEnjinV1041.decode(call)
        )
        .when(
            () => calls.multiTokens.forceCreateEthereumCollection.matrixV1030.is(call),
            () => calls.multiTokens.forceCreateEthereumCollection.matrixV1030.decode(call)
        )
        .when(
            () => calls.multiTokens.forceCreateEthereumCollection.matrixV1040.is(call),
            () => calls.multiTokens.forceCreateEthereumCollection.matrixV1040.decode(call)
        )
        .when(
            () => calls.multiTokens.forceCreateEthereumCollection.enjinV1050.is(call),
            () => calls.multiTokens.forceCreateEthereumCollection.enjinV1050.decode(call)
        )
        .when(
            () => calls.multiTokens.forceCreateEthereumCollection.enjinV1062.is(call),
            () => calls.multiTokens.forceCreateEthereumCollection.enjinV1062.decode(call)
        )
        .when(
            () => calls.multiTokens.forceCreateEthereumCollection.enjinV1080.is(call),
            () => calls.multiTokens.forceCreateEthereumCollection.enjinV1080.decode(call)
        )
        .when(
            () => calls.multiTokens.forceCreateEthereumCollection.v1060.is(call),
            () => calls.multiTokens.forceCreateEthereumCollection.v1060.decode(call)
        )
        .when(
            () => calls.multiTokens.forceCreateEthereumCollection.v1080.is(call),
            () => calls.multiTokens.forceCreateEthereumCollection.v1080.decode(call)
        )
        .otherwise(() => {
            throw new UnsupportedCallError(call)
        })
})
