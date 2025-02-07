import { UnsupportedCallError } from '@enjin/indexer/common/errors'
import { calls } from '../../../types/generated'
import { CallItem } from '@enjin/indexer/common/types/contexts'
import { match } from 'ts-pattern'

type WithdrawLiquidityCall = {
    offerId: bigint
    amount: bigint
}

export function withdrawLiquidity(call: CallItem): WithdrawLiquidityCall {
    return match(call)
        .returnType<WithdrawLiquidityCall>()
        .when(calls.stakeExchange.withdrawLiquidity.enjinV100.is, () =>
            calls.stakeExchange.withdrawLiquidity.enjinV100.decode(call)
        )
        .otherwise(() => {
            throw new UnsupportedCallError(call)
        })
}
