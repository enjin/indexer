import { UnsupportedCallError } from '../../../utils/errors'
import { calls } from '../../../types'
import { CallItem } from '../../../contexts'
import { match } from 'ts-pattern'
import { WithdrawLiquidity } from './types'
import { withDispatchCheck } from '../../fuel-tanks/utils'

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
