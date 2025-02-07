import { CallItem } from '@enjin/indexer/common/types/contexts'
import { UnsupportedCallError } from '@enjin/indexer/common/errors'
import { calls } from '../../../types/generated'
import { match } from 'ts-pattern'

type ForceCreateCollectionCall = {
    descriptor: any
}

export async function forceCreateCollection(call: CallItem) {
    return match(call)
        .returnType<ForceCreateCollectionCall>()
        .when(calls.multiTokens.forceCreateCollection.matrixEnjinV1012.is, () =>
            calls.multiTokens.forceCreateCollection.matrixEnjinV1012.decode(call)
        )
        .when(calls.multiTokens.forceCreateCollection.matrixEnjinV603.is, () =>
            calls.multiTokens.forceCreateCollection.matrixEnjinV603.decode(call)
        )
        .when(calls.multiTokens.forceCreateCollection.matrixV1010.is, () =>
            calls.multiTokens.forceCreateCollection.matrixV1010.decode(call)
        )
        .when(calls.multiTokens.forceCreateCollection.matrixV500.is, () =>
            calls.multiTokens.forceCreateCollection.matrixV500.decode(call)
        )
        .when(calls.multiTokens.forceCreateCollection.enjinV1032.is, () =>
            calls.multiTokens.forceCreateCollection.enjinV1032.decode(call)
        )
        .when(calls.multiTokens.forceCreateCollection.enjinV100.is, () =>
            calls.multiTokens.forceCreateCollection.enjinV100.decode(call)
        )
        .when(calls.multiTokens.forceCreateCollection.v1050.is, calls.multiTokens.forceCreateCollection.v1050.decode)
        .when(calls.multiTokens.forceCreateCollection.v1030.is, calls.multiTokens.forceCreateCollection.v1030.decode)
        .when(calls.multiTokens.forceCreateCollection.v100.is, calls.multiTokens.forceCreateCollection.v100.decode)
        .otherwise(() => {
            throw new UnsupportedCallError(call)
        })
}
