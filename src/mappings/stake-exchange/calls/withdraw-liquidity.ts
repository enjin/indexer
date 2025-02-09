import { UnsupportedCallError } from '@enjin/indexer/common/errors'
import { calls } from '../../../types/generated'
import { CallItem } from '@enjin/indexer/common/types/contexts'
import { match } from 'ts-pattern'
import { WithdrawLiquidity } from '@enjin/indexer/mappings/stake-exchange/calls/types'

export function withdrawLiquidity(call: CallItem): WithdrawLiquidity {
    return match(call)
        .returnType<WithdrawLiquidity>()
        .when(calls.stakeExchange.withdrawLiquidity.enjinV100.is, calls.stakeExchange.withdrawLiquidity.enjinV100.decode)
        .otherwise(() => {
            throw new UnsupportedCallError(call)
        })
}
