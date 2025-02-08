import { stakeExchange } from '../../../types/generated/events'
import { EventItem } from '../../../common/types/contexts'
import { UnsupportedEventError } from '../../../common/errors'
import { match } from 'ts-pattern'
import { TokenFilter } from '@enjin/indexer/mappings/stake-exchange/events/offer-created'

export type LiquidityConfigUpdatedEvent = {
    who: string
    config: {
        tokenFilter: TokenFilter
    }
}

export function liquidityConfigUpdated(event: EventItem): LiquidityConfigUpdatedEvent {
    return match(event)
        .returnType<LiquidityConfigUpdatedEvent>()
        .when(stakeExchange.liquidityConfigUpdated.enjinV100.is, () =>
            stakeExchange.liquidityConfigUpdated.enjinV100.decode(event)
        )
        .otherwise(() => {
            throw new UnsupportedEventError(event)
        })
}
