import { UnsupportedCallError } from '../../../common/errors'
import { CallItem } from '../../../common/types/contexts'
import { calls } from '../../../types/generated'
import { match } from 'ts-pattern'
import { AddLiquidity } from '../../../mappings/stake-exchange/calls/types'

export function addLiquidity(call: CallItem): AddLiquidity {
    return match(call)
        .returnType<AddLiquidity>()
        .when(calls.stakeExchange.addLiquidity.enjinV100.is, calls.stakeExchange.addLiquidity.enjinV100.decode)
        .otherwise(() => {
            throw new UnsupportedCallError(call)
        })
}
