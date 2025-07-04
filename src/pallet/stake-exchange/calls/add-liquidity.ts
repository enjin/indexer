import { UnsupportedCallError } from '~/util/errors'
import { CallItem } from '~/contexts'
import { calls } from '~/type'
import { match } from 'ts-pattern'
import { AddLiquidity } from '~/pallet/stake-exchange/calls/types'
import { withDispatchCheck } from '~/pallet/fuel-tanks/utils'

export const addLiquidity = withDispatchCheck((call: CallItem): AddLiquidity => {
    return match(call)
        .returnType<AddLiquidity>()
        .when(
            () => calls.stakeExchange.addLiquidity.enjinV100.is(call),
            () => calls.stakeExchange.addLiquidity.enjinV100.decode(call)
        )
        .otherwise(() => {
            throw new UnsupportedCallError(call)
        })
})
