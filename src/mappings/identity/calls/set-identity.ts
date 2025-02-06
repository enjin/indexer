import { UnsupportedCallError } from '@enjin/indexer/common/errors'
import { calls } from '../../../types/generated'
import { CallItem } from '@enjin/indexer/common/types/contexts'
import { match } from 'ts-pattern'

type SetIdentityCall = {
    info: any
}

export function setIdentity(call: CallItem) {
    return match(call)
        .returnType<SetIdentityCall>()
        .when(calls.identity.setIdentity.matrixEnjinV1000.is, () => calls.identity.setIdentity.matrixEnjinV1000.decode(call))
        .otherwise(() => {
            throw new UnsupportedCallError(call)
        })
}
