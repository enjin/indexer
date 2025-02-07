import { UnsupportedCallError } from '@enjin/indexer/common/errors'
import { CallItem } from '@enjin/indexer/common/types/contexts'
import { calls } from '../../../types/generated'
import { match } from 'ts-pattern'

type UnbondCall = {
    poolId: number
    memberAccount: any
    unbondingPoints: bigint
}

export function unbond(call: CallItem): UnbondCall {
    return match(call)
        .returnType<UnbondCall>()
        .when(calls.nominationPools.unbond.enjinV100.is, calls.nominationPools.unbond.enjinV100.decode)
        .otherwise(() => {
            throw new UnsupportedCallError(call)
        })
}
