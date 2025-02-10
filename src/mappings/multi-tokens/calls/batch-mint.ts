import { CallItem } from '@enjin/indexer/common/types/contexts'
import { UnsupportedCallError } from '@enjin/indexer/common/errors'
import { calls } from '../../../types/generated'
import { match } from 'ts-pattern'
import { BatchMint } from './types'

export function batchMint(call: CallItem): BatchMint {
    return match(call)
        .returnType<BatchMint>()
        .when(calls.multiTokens.batchMint.matrixEnjinV1012.is, calls.multiTokens.batchMint.matrixEnjinV1012.decode)
        .when(calls.multiTokens.batchMint.matrixEnjinV603.is, calls.multiTokens.batchMint.matrixEnjinV603.decode)
        .when(calls.multiTokens.batchMint.matrixV1010.is, calls.multiTokens.batchMint.matrixV1010.decode)
        .when(calls.multiTokens.batchMint.matrixV600.is, calls.multiTokens.batchMint.matrixV600.decode)
        .when(calls.multiTokens.batchMint.matrixV500.is, calls.multiTokens.batchMint.matrixV500.decode)
        .when(calls.multiTokens.batchMint.enjinV1032.is, calls.multiTokens.batchMint.enjinV1032.decode)
        .when(calls.multiTokens.batchMint.enjinV100.is, calls.multiTokens.batchMint.enjinV100.decode)
        .when(calls.multiTokens.batchMint.v1050.is, calls.multiTokens.batchMint.v1050.decode)
        .when(calls.multiTokens.batchMint.v1030.is, calls.multiTokens.batchMint.v1030.decode)
        .when(calls.multiTokens.batchMint.v102.is, calls.multiTokens.batchMint.v102.decode)
        .when(calls.multiTokens.batchMint.v100.is, calls.multiTokens.batchMint.v100.decode)
        .otherwise(() => {
            throw new UnsupportedCallError(call)
        })
}
