import { UnsupportedCallError } from '@enjin/indexer/common/errors'
import { calls } from '../../../types/generated'
import { CallItem } from '@enjin/indexer/common/types/contexts'
import { match } from 'ts-pattern'

type RenameSubCall = {
    sub: any
    data: any
}

export function renameSub(call: CallItem): RenameSubCall {
    return match(call)
        .returnType<RenameSubCall>()
        .when(calls.identity.renameSub.matrixEnjinV1000.is, calls.identity.renameSub.matrixEnjinV1000.decode)
        .otherwise(() => {
            throw new UnsupportedCallError(call)
        })
}
