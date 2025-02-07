import { UnsupportedCallError } from '@enjin/indexer/common/errors'
import { calls } from '../../../types/generated'
import { CallItem } from '@enjin/indexer/common/types/contexts'
import { match } from 'ts-pattern'

type AddSubCall = {
    sub: {
        __kind: string
        value?: string
    }
    data: {
        __kind: string
        value?: string
    }
}

export function addSub(call: CallItem): AddSubCall {
    return match(call)
        .returnType<AddSubCall>()
        .when(calls.identity.addSub.matrixEnjinV1000.is, calls.identity.addSub.matrixEnjinV1000.decode)
        .otherwise(() => {
            throw new UnsupportedCallError(call)
        })
}
