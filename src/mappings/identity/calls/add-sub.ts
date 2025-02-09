import { UnsupportedCallError } from '@enjin/indexer/common/errors'
import { calls } from '../../../types/generated'
import { CallItem } from '@enjin/indexer/common/types/contexts'
import { match } from 'ts-pattern'
import { AddSub } from '@enjin/indexer/mappings/identity/calls/types'

export function addSub(call: CallItem): AddSub {
    return match(call)
        .returnType<AddSub>()
        .when(calls.identity.addSub.matrixEnjinV1000.is, calls.identity.addSub.matrixEnjinV1000.decode)
        .otherwise(() => {
            throw new UnsupportedCallError(call)
        })
}
