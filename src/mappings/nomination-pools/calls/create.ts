import { UnsupportedCallError } from '@enjin/indexer/common/errors'
import { CallItem } from '@enjin/indexer/common/types/contexts'
import { calls } from '../../../types/generated'
import { match } from 'ts-pattern'

type CreatePoolCall = {
    tokenId: bigint
    deposit: bigint
    capacity: bigint
    duration: number
    name?: string
}

export function create(call: CallItem): CreatePoolCall {
    return match(call)
        .returnType<CreatePoolCall>()
        .when(calls.nominationPools.create.enjinV1023.is, calls.nominationPools.create.enjinV1023.decode)
        .when(calls.nominationPools.create.enjinV110.is, calls.nominationPools.create.enjinV110.decode)
        .when(calls.nominationPools.create.enjinV100.is, calls.nominationPools.create.enjinV100.decode)
        .when(calls.nominationPools.create.v1023.is, calls.nominationPools.create.v1023.decode)
        .when(calls.nominationPools.create.v110.is, calls.nominationPools.create.v110.decode)
        .when(calls.nominationPools.create.v102.is, calls.nominationPools.create.v102.decode)
        .when(calls.nominationPools.create.v101.is, calls.nominationPools.create.v101.decode(call))
        .otherwise(() => {
            throw new UnsupportedCallError(call)
        })
}
