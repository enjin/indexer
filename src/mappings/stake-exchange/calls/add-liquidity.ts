import { UnsupportedCallError } from '@enjin/indexer/common/errors'
import { CallItem } from '@enjin/indexer/common/types/contexts'
import { calls } from '../../../types/generated'
import { match } from 'ts-pattern'

type AddLiquidityCall = {
    offerId: bigint
    amount: bigint
}

export function addLiquidity(call: CallItem): AddLiquidityCall {
    return match(call)
        .returnType<AddLiquidityCall>()
        .when(calls.stakeExchange.addLiquidity.enjinV100.is, calls.stakeExchange.addLiquidity.enjinV100.decode)
        .otherwise(() => {
            throw new UnsupportedCallError(call)
        })
}
