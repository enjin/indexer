import { UnsupportedCallError, UnsupportedEventError } from '@enjin/indexer/common/errors'
import { calls } from '../../../types/generated'
import { CallItem } from '@enjin/indexer/common/types/contexts'
import { match } from 'ts-pattern'

type AddSubCall = {
    sub: any
    data: any
}

export function addSub(call: CallItem) {
    return match(call)
        .returnType<AddSubCall>()
        .when(calls.identity.addSub.matrixEnjinV1000.is, () => calls.identity.addSub.matrixEnjinV1000.decode(call))
        .otherwise(() => {
            throw new UnsupportedCallError(call)
        })
}
