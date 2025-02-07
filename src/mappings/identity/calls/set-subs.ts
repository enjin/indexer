import { UnsupportedCallError } from '@enjin/indexer/common/errors'
import { calls } from '../../../types/generated'
import { CallItem } from '@enjin/indexer/common/types/contexts'
import { match } from 'ts-pattern'

type SetSubsCall = {
    subs: [
        string,
        {
            __kind: string
            value?: string
        },
    ][]
}

export function setSubs(call: CallItem): SetSubsCall {
    return match(call)
        .returnType<SetSubsCall>()
        .when(calls.identity.setSubs.matrixEnjinV1000.is, calls.identity.setSubs.matrixEnjinV1000.decode)
        .otherwise(() => {
            throw new UnsupportedCallError(call)
        })
}
