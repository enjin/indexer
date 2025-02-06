import { CallItem } from '@enjin/indexer/common/types/contexts'
import { UnsupportedCallError } from '@enjin/indexer/common/errors'
import { calls } from '../../../types/generated'
import { match } from 'ts-pattern'

type ForceCreateEthereumCollectionCall = {
    descriptor: any
}

export async function forceCreateEthereumCollection(call: CallItem) {
    return match(call)
        .returnType<ForceCreateEthereumCollectionCall>()
        .when(calls.multiTokens.forceCreateEthereumCollection.matrixEnjinV1012.is, () =>
            calls.multiTokens.forceCreateEthereumCollection.matrixEnjinV1012.decode(call)
        )
        .when(calls.multiTokens.forceCreateEthereumCollection.matrixEnjinV1000.is, () =>
            calls.multiTokens.forceCreateEthereumCollection.matrixEnjinV1000.decode(call)
        )
        .when(calls.multiTokens.forceCreateEthereumCollection.matrixV1010.is, () =>
            calls.multiTokens.forceCreateEthereumCollection.matrixV1010.decode(call)
        )
        .when(calls.multiTokens.forceCreateEthereumCollection.matrixV1000.is, () =>
            calls.multiTokens.forceCreateEthereumCollection.matrixV1000.decode(call)
        )
        .when(calls.multiTokens.forceCreateEthereumCollection.enjinV1032.is, () =>
            calls.multiTokens.forceCreateEthereumCollection.enjinV1032.decode(call)
        )
        .when(calls.multiTokens.forceCreateEthereumCollection.enjinV1021.is, () =>
            calls.multiTokens.forceCreateEthereumCollection.enjinV1021.decode(call)
        )
        .when(calls.multiTokens.forceCreateEthereumCollection.enjinV120.is, () =>
            calls.multiTokens.forceCreateEthereumCollection.enjinV120.decode(call)
        )
        .when(calls.multiTokens.forceCreateEthereumCollection.v1050.is, () =>
            calls.multiTokens.forceCreateEthereumCollection.v1050.decode(call)
        )
        .when(calls.multiTokens.forceCreateEthereumCollection.v1030.is, () =>
            calls.multiTokens.forceCreateEthereumCollection.v1030.decode(call)
        )
        .when(calls.multiTokens.forceCreateEthereumCollection.v1021.is, () =>
            calls.multiTokens.forceCreateEthereumCollection.v1021.decode(call)
        )
        .when(calls.multiTokens.forceCreateEthereumCollection.v120.is, () =>
            calls.multiTokens.forceCreateEthereumCollection.v120.decode(call)
        )
        .otherwise(() => {
            throw new UnsupportedCallError(call)
        })
}
