import { CallItem } from '@enjin/indexer/common/types/contexts'
import { UnsupportedCallError } from '@enjin/indexer/common/errors'
import { calls } from '../../../types/generated'
import { match } from 'ts-pattern'

type ForceMintCall = {
    recipient: any
    collectionId: any
    params: any
}

export async function forceMint(call: CallItem) {
    return match(call)
        .returnType<ForceMintCall>()
        .when(calls.multiTokens.forceMint.matrixEnjinV1012.is, () => calls.multiTokens.forceMint.matrixEnjinV1012.decode(call))
        .when(calls.multiTokens.forceMint.matrixEnjinV1003.is, () => calls.multiTokens.forceMint.matrixEnjinV1003.decode(call))
        .when(calls.multiTokens.forceMint.matrixEnjinV603.is, () => calls.multiTokens.forceMint.matrixEnjinV603.decode(call))
        .when(calls.multiTokens.forceMint.matrixV1010.is, () => calls.multiTokens.forceMint.matrixV1010.decode(call))
        .when(calls.multiTokens.forceMint.matrixV1003.is, () => calls.multiTokens.forceMint.matrixV1003.decode(call))
        .when(calls.multiTokens.forceMint.matrixV604.is, () => calls.multiTokens.forceMint.matrixV604.decode(call))
        .when(calls.multiTokens.forceMint.enjinV1032.is, () => calls.multiTokens.forceMint.enjinV1032.decode(call))
        .when(calls.multiTokens.forceMint.enjinV1023.is, () => calls.multiTokens.forceMint.enjinV1023.decode(call))
        .when(calls.multiTokens.forceMint.enjinV101.is, () => calls.multiTokens.forceMint.enjinV101.decode(call))
        .when(calls.multiTokens.forceMint.v1050.is, () => calls.multiTokens.forceMint.v1050.decode(call))
        .when(calls.multiTokens.forceMint.v1030.is, () => calls.multiTokens.forceMint.v1030.decode(call))
        .when(calls.multiTokens.forceMint.v1023.is, () => calls.multiTokens.forceMint.v1023.decode(call))
        .when(calls.multiTokens.forceMint.v105.is, () => calls.multiTokens.forceMint.v105.decode(call))
        .otherwise(() => {
            throw new UnsupportedCallError(call)
        })
}
