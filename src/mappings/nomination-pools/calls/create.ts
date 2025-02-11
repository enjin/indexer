import { UnsupportedCallError } from '../../../common/errors'
import { CallItem } from '../../../common/types/contexts'
import { calls } from '../../../types/generated'
import { match } from 'ts-pattern'
import { CreatePool } from './types'

export function create(call: CallItem): CreatePool {
    return match(call)
        .returnType<CreatePool>()
        .when(
            () => calls.nominationPools.create.enjinV1023.is(call),
            () => calls.nominationPools.create.enjinV1023.decode(call)
        )
        .when(
            () => calls.nominationPools.create.enjinV110.is(call),
            () => calls.nominationPools.create.enjinV110.decode(call)
        )
        .when(
            () => calls.nominationPools.create.enjinV100.is(call),
            () => calls.nominationPools.create.enjinV100.decode(call)
        )
        .when(
            () => calls.nominationPools.create.v1023.is(call),
            () => calls.nominationPools.create.v1023.decode(call)
        )
        .when(
            () => calls.nominationPools.create.v110.is(call),
            () => calls.nominationPools.create.v110.decode(call)
        )
        .when(
            () => calls.nominationPools.create.v102.is(call),
            () => calls.nominationPools.create.v102.decode(call)
        )
        .when(
            () => calls.nominationPools.create.v101.is(call),
            () => calls.nominationPools.create.v101.decode(call)
        )
        .otherwise(() => {
            throw new UnsupportedCallError(call)
        })
}
