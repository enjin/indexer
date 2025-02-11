import { UnsupportedCallError } from '../../../common/errors'
import { calls } from '../../../types/generated'
import { CallItem } from '../../../common/types/contexts'
import { match } from 'ts-pattern'
import { WithdrawLiquidity } from '../../../mappings/stake-exchange/calls/types'

export function withdrawLiquidity(call: CallItem): WithdrawLiquidity {
    return match(call)
        .returnType<WithdrawLiquidity>()
        .when(
            () => calls.stakeExchange.withdrawLiquidity.enjinV100.is(call),
            () => calls.stakeExchange.withdrawLiquidity.enjinV100.decode(call)
        )
        .otherwise(() => {
            throw new UnsupportedCallError(call)
        })
}
