import { UnsupportedCallError } from '@enjin/indexer/common/errors'
import { CallItem } from '@enjin/indexer/common/types/contexts'
import { calls } from '../../../types/generated'
import { match } from 'ts-pattern'

type WithdrawDepositCall = {
    poolId: number
}

export function withdrawDeposit(call: CallItem): WithdrawDepositCall {
    return match(call)
        .returnType<WithdrawDepositCall>()
        .when(calls.nominationPools.withdrawDeposit.enjinV100.is, () =>
            calls.nominationPools.withdrawDeposit.enjinV100.decode(call)
        )
        .when(calls.nominationPools.withdrawUnbonded.enjinV100.is, () =>
            calls.nominationPools.withdrawUnbonded.enjinV100.decode(call)
        )
        .otherwise(() => {
            throw new UnsupportedCallError(call)
        })
}
