import { stakeExchange } from '../../../types/generated/events'
import { EventItem } from '../../../common/types/contexts'
import { UnsupportedEventError } from '../../../common/errors'
import { match } from 'ts-pattern'

type LiquidityConfigUpdatedEvent = {
    who: string
    config: any
}

function liquidityConfigUpdated(event: EventItem) {
    return match(event)
        .returnType<LiquidityConfigUpdatedEvent>()
        .when(stakeExchange.liquidityConfigUpdated.enjinV100.is, () =>
            stakeExchange.liquidityConfigUpdated.enjinV100.decode(event)
        )
        .otherwise(() => {
            throw new UnsupportedEventError(stakeExchange.liquidityConfigUpdated)
        })
}
