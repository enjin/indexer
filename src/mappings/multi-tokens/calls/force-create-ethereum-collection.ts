import { CallItem } from '../../../common/types/contexts'
import { UnsupportedCallError } from '../../../common/errors'
import { calls } from '../../../types/generated'
import { match } from 'ts-pattern'
import { ForceCreateEthereumCollection } from './types'

export function forceCreateEthereumCollection(call: CallItem): ForceCreateEthereumCollection {
    return match(call)
        .returnType<ForceCreateEthereumCollection>()
        .when(
            calls.multiTokens.forceCreateEthereumCollection.matrixEnjinV1012.is,
            calls.multiTokens.forceCreateEthereumCollection.matrixEnjinV1012.decode
        )
        .when(
            calls.multiTokens.forceCreateEthereumCollection.matrixEnjinV1000.is,
            calls.multiTokens.forceCreateEthereumCollection.matrixEnjinV1000.decode
        )
        .when(
            calls.multiTokens.forceCreateEthereumCollection.matrixV1010.is,
            calls.multiTokens.forceCreateEthereumCollection.matrixV1010.decode
        )
        .when(
            calls.multiTokens.forceCreateEthereumCollection.matrixV1000.is,
            calls.multiTokens.forceCreateEthereumCollection.matrixV1000.decode
        )
        .when(
            calls.multiTokens.forceCreateEthereumCollection.enjinV1032.is,
            calls.multiTokens.forceCreateEthereumCollection.enjinV1032.decode
        )
        .when(
            calls.multiTokens.forceCreateEthereumCollection.enjinV1021.is,
            calls.multiTokens.forceCreateEthereumCollection.enjinV1021.decode
        )
        .when(
            calls.multiTokens.forceCreateEthereumCollection.enjinV120.is,
            calls.multiTokens.forceCreateEthereumCollection.enjinV120.decode
        )
        .when(
            calls.multiTokens.forceCreateEthereumCollection.v1050.is,
            calls.multiTokens.forceCreateEthereumCollection.v1050.decode
        )
        .when(
            calls.multiTokens.forceCreateEthereumCollection.v1030.is,
            calls.multiTokens.forceCreateEthereumCollection.v1030.decode
        )
        .when(
            calls.multiTokens.forceCreateEthereumCollection.v1021.is,
            calls.multiTokens.forceCreateEthereumCollection.v1021.decode
        )
        .when(
            calls.multiTokens.forceCreateEthereumCollection.v120.is,
            calls.multiTokens.forceCreateEthereumCollection.v120.decode
        )
        .otherwise(() => {
            throw new UnsupportedCallError(call)
        })
}
