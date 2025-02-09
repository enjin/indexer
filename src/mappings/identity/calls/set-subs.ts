import { UnsupportedCallError } from '@enjin/indexer/common/errors'
import { calls } from '../../../types/generated'
import { CallItem } from '@enjin/indexer/common/types/contexts'
import { match } from 'ts-pattern'
import { SetSubs } from '@enjin/indexer/mappings/identity/calls/types'

export function setSubs(call: CallItem): SetSubs {
    return match(call)
        .returnType<SetSubs>()
        .when(calls.identity.setSubs.matrixEnjinV1000.is, calls.identity.setSubs.matrixEnjinV1000.decode)
        .otherwise(() => {
            throw new UnsupportedCallError(call)
        })
}
