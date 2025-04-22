import { stakeExchange } from '../../../type/events'
import { EventItem } from '../../../contexts'
import { UnsupportedEventError } from '../../../util/errors'
import { match } from 'ts-pattern'
import { LiquidityConfigUpdated } from './types'

export function liquidityConfigUpdated(event: EventItem): LiquidityConfigUpdated {
    return match(event)
        .returnType<LiquidityConfigUpdated>()
        .when(
            () => stakeExchange.liquidityConfigUpdated.enjinV100.is(event),
            () => stakeExchange.liquidityConfigUpdated.enjinV100.decode(event)
        )
        .otherwise(() => {
            throw new UnsupportedEventError(event)
        })
}
