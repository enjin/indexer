import { UnsupportedCallError } from '@enjin/indexer/common/errors'
import { CallItem } from '@enjin/indexer/common/types/contexts'
import { calls } from '../../../types/generated'
import { match } from 'ts-pattern'
import { Unbond } from './types'

export function unbond(call: CallItem): Unbond {
    return match(call)
        .returnType<Unbond>()
        .when(calls.nominationPools.unbond.enjinV100.is, calls.nominationPools.unbond.enjinV100.decode)
        .otherwise(() => {
            throw new UnsupportedCallError(call)
        })
}
