import { UnsupportedCallError } from '@enjin/indexer/common/errors'
import { calls } from '../../../types/generated'
import { CallItem } from '@enjin/indexer/common/types/contexts'
import { match } from 'ts-pattern'
import { RenameSub } from '@enjin/indexer/mappings/identity/calls/types'

export function renameSub(call: CallItem): RenameSub {
    return match(call)
        .returnType<RenameSub>()
        .when(calls.identity.renameSub.matrixEnjinV1000.is, calls.identity.renameSub.matrixEnjinV1000.decode)
        .otherwise(() => {
            throw new UnsupportedCallError(call)
        })
}
