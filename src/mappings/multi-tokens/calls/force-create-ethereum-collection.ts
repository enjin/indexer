import { CallItem } from '../../../common/types/contexts'
import { UnsupportedCallError } from '../../../common/errors'
import { calls } from '../../../types/generated'
import { match } from 'ts-pattern'
import { ForceCreateEthereumCollection } from './types'

export function forceCreateEthereumCollection(call: CallItem): ForceCreateEthereumCollection {
    return match(call)
        .returnType<ForceCreateEthereumCollection>()
        .when(
            () => calls.multiTokens.forceCreateEthereumCollection.matrixEnjinV1012.is(call),
            () => calls.multiTokens.forceCreateEthereumCollection.matrixEnjinV1012.decode(call)
        )
        .when(
            () => calls.multiTokens.forceCreateEthereumCollection.matrixEnjinV1000.is(call),
            () => calls.multiTokens.forceCreateEthereumCollection.matrixEnjinV1000.decode(call)
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
        .otherwise(() => {
            throw new UnsupportedCallError(call)
        })
}
