import { CallItem } from '@enjin/indexer/common/types/contexts'
import { UnsupportedCallError } from '@enjin/indexer/common/errors'
import { calls } from '../../../types/generated'
import { match } from 'ts-pattern'

type MintCall = {
    recipient: any
    collectionId: any
    params: any
}

export async function mint(call: CallItem) {
    return match(call)
        .returnType<MintCall>()
        .when(calls.multiTokens.mint.matrixEnjinV1012.is, () => calls.multiTokens.mint.matrixEnjinV1012.decode(call))
        .when(calls.multiTokens.mint.matrixEnjinV603.is, () => calls.multiTokens.mint.matrixEnjinV603.decode(call))
        .when(calls.multiTokens.mint.matrixV1010.is, () => calls.multiTokens.mint.matrixV1010.decode(call))
        .when(calls.multiTokens.mint.matrixV600.is, () => calls.multiTokens.mint.matrixV600.decode(call))
        .when(calls.multiTokens.mint.matrixV500.is, () => calls.multiTokens.mint.matrixV500.decode(call))
        .when(calls.multiTokens.mint.enjinV1032.is, () => calls.multiTokens.mint.enjinV1032.decode(call))
        .when(calls.multiTokens.mint.enjinV100.is, () => calls.multiTokens.mint.enjinV100.decode(call))
        .when(calls.multiTokens.mint.v1050.is, () => calls.multiTokens.mint.v1050.decode(call))
        .when(calls.multiTokens.mint.v1030.is, () => calls.multiTokens.mint.v1030.decode(call))
        .when(calls.multiTokens.mint.v102.is, () => calls.multiTokens.mint.v102.decode(call))
        .when(calls.multiTokens.mint.v100.is, () => calls.multiTokens.mint.v100.decode(call))
        .otherwise(() => {
            throw new UnsupportedCallError(call)
        })
}
