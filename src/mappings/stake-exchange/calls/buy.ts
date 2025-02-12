import { UnsupportedCallError } from '../../../common/errors'
import { CallItem } from '../../../common/types/contexts'
import { calls } from '../../../types/generated'
import { match } from 'ts-pattern'
import { Buy } from './types'

export function buy(call: CallItem): Buy {
    return match(call)
        .returnType<Buy>()
        .when(
            () => calls.stakeExchange.buy.enjinV100.is(call),
            () => calls.stakeExchange.buy.enjinV100.decode(call)
        )
        .otherwise(() => {
            throw new UnsupportedCallError(call)
        })

    // if (call.name === 'Utility.batch_all') {
    //     if (calls.utility.batchAll.enjinV1026.is) {
    //         const data = calls.utility.batchAll.enjinV1026.decode(call)
    //
    //         const findCall = data.calls.find(
    //             (c) => c.__kind === 'StakeExchange' && c.value.__kind === 'buy' && c.value.amount === eventData.amount
    //         )
    //
    //         if (findCall) {
    //             return findCall.value as StakeExchangeCall_buy
    //         }
    //
    //         throw new Error('findCall not found')
    //     }
    // }
    //
    // if (calls.stakeExchange.buy.enjinV100.is(call)) {
    //     return calls.stakeExchange.buy.enjinV100.decode(call)
    // }
    //
    // throw new UnsupportedCallError(call)
}
