import { UnsupportedCallError } from '@enjin/indexer/common/errors'
import { CallItem } from '@enjin/indexer/common/types/contexts'
import { calls } from '../../../types/generated'
import { match } from 'ts-pattern'

type UnbondDepositCall = {
    poolId: number
}

export function unbondDeposit(call: CallItem): UnbondDepositCall {
    return match(call)
        .returnType<UnbondDepositCall>()
        .when(calls.nominationPools.unbondDeposit.enjinV100.is, () => calls.nominationPools.unbondDeposit.enjinV100.decode(call))
        .otherwise(() => {
            throw new UnsupportedCallError(call)
        })
}
