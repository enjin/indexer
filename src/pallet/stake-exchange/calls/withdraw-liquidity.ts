import { UnsupportedCallError } from '~/util/errors'
import { calls } from '~/type'
import { CallItem } from '~/contexts'
import { match } from 'ts-pattern'
import { WithdrawLiquidity } from '~/pallet/stake-exchange/calls/types'
import { withDispatchCheck } from '~/pallet/fuel-tanks/utils'

export const withdrawLiquidity = withDispatchCheck((call: CallItem): WithdrawLiquidity => {
    return match(call)
        .returnType<WithdrawLiquidity>()
        .when(
            () => calls.stakeExchange.withdrawLiquidity.enjinV100.is(call),
            () => calls.stakeExchange.withdrawLiquidity.enjinV100.decode(call)
        )
        .otherwise(() => {
            throw new UnsupportedCallError(call)
        })
})
