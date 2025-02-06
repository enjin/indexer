import { UnsupportedCallError, UnsupportedEventError } from '@enjin/indexer/common/errors'
import { calls } from '../../../types/generated'
import { CallItem } from '@enjin/indexer/common/types/contexts'
import { match } from 'ts-pattern'

type SetSubsCall = {
    subs: any[]
}

export function setSubs(call: CallItem) {
    return match(call)
        .returnType<SetSubsCall>()
        .when(calls.identity.setSubs.matrixEnjinV1000.is, () => calls.identity.setSubs.matrixEnjinV1000.decode(call))
        .otherwise(() => {
            throw new UnsupportedCallError(call)
        })
}
