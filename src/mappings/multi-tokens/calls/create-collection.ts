import { CallItem } from '@enjin/indexer/common/types/contexts'
import { UnsupportedCallError } from '@enjin/indexer/common/errors'
import { calls } from '../../../types/generated'
import { match } from 'ts-pattern'
import { CreateCollection } from './types'

export function createCollection(call: CallItem): CreateCollection {
    return match(call)
        .returnType<CreateCollection>()
        .when(calls.multiTokens.createCollection.matrixEnjinV1012.is, calls.multiTokens.createCollection.matrixEnjinV1012.decode)
        .when(calls.multiTokens.createCollection.matrixEnjinV603.is, calls.multiTokens.createCollection.matrixEnjinV603.decode)
        .when(calls.multiTokens.createCollection.matrixV1010.is, calls.multiTokens.createCollection.matrixV1010.decode)
        .when(calls.multiTokens.createCollection.matrixV500.is, calls.multiTokens.createCollection.matrixV500.decode)
        .when(calls.multiTokens.createCollection.enjinV1032.is, calls.multiTokens.createCollection.enjinV1032.decode)
        .when(calls.multiTokens.createCollection.enjinV100.is, calls.multiTokens.createCollection.enjinV100.decode)
        .when(calls.multiTokens.createCollection.v1050.is, calls.multiTokens.createCollection.v1050.decode)
        .when(calls.multiTokens.createCollection.v1030.is, calls.multiTokens.createCollection.v1030.decode)
        .when(calls.multiTokens.createCollection.v100.is, calls.multiTokens.createCollection.v100.decode)
        .otherwise(() => {
            throw new UnsupportedCallError(call)
        })
}
