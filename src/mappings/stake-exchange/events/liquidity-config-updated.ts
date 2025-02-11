import { stakeExchange } from '../../../types/generated/events'
import { EventItem } from '../../../common/types/contexts'
import { UnsupportedEventError } from '../../../common/errors'
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
