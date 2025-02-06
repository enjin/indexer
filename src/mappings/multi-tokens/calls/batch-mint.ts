import { CallItem } from '@enjin/indexer/common/types/contexts'
import { UnsupportedCallError } from '@enjin/indexer/common/errors'
import { calls } from '../../../types/generated'
import { match } from 'ts-pattern'

type BatchMintCall = {
    collectionId: any
    recipients: any
}

export async function batchMint(call: CallItem) {
    return match(call)
        .returnType<BatchMintCall>()
        .when(calls.multiTokens.batchMint.matrixEnjinV1012.is, () => calls.multiTokens.batchMint.matrixEnjinV1012.decode(call))
        .when(calls.multiTokens.batchMint.matrixEnjinV603.is, () => calls.multiTokens.batchMint.matrixEnjinV603.decode(call))
        .when(calls.multiTokens.batchMint.matrixV1010.is, () => calls.multiTokens.batchMint.matrixV1010.decode(call))
        .when(calls.multiTokens.batchMint.matrixV600.is, () => calls.multiTokens.batchMint.matrixV600.decode(call))
        .when(calls.multiTokens.batchMint.matrixV500.is, () => calls.multiTokens.batchMint.matrixV500.decode(call))
        .when(calls.multiTokens.batchMint.enjinV1032.is, () => calls.multiTokens.batchMint.enjinV1032.decode(call))
        .when(calls.multiTokens.batchMint.enjinV100.is, () => calls.multiTokens.batchMint.enjinV100.decode(call))
        .when(calls.multiTokens.batchMint.v1050.is, () => calls.multiTokens.batchMint.v1050.decode(call))
        .when(calls.multiTokens.batchMint.v1030.is, () => calls.multiTokens.batchMint.v1030.decode(call))
        .when(calls.multiTokens.batchMint.v102.is, () => calls.multiTokens.batchMint.v102.decode(call))
        .when(calls.multiTokens.batchMint.v100.is, () => calls.multiTokens.batchMint.v100.decode(call))
        .otherwise(() => {
            throw new UnsupportedCallError(call)
        })
}
