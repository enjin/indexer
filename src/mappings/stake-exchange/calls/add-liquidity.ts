import { UnsupportedCallError } from '../../../common/errors'
import { CallItem } from '../../../common/types/contexts'
import { calls } from '../../../types/generated'
import { match } from 'ts-pattern'
import { AddLiquidity } from './types'

export function addLiquidity(call: CallItem): AddLiquidity {
    return match(call)
        .returnType<AddLiquidity>()
        .when(
            () => calls.stakeExchange.addLiquidity.enjinV100.is(call),
            () => calls.stakeExchange.addLiquidity.enjinV100.decode(call)
        )
        .otherwise(() => {
            throw new UnsupportedCallError(call)
        })
}
