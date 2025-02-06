import { stakeExchange } from '../../../types/generated/events'
import { EventItem } from '../../../common/types/contexts'
import { UnsupportedEventError } from '../../../common/errors'

function getEventData(event: EventItem) {
    if (stakeExchange.liquidityConfigUpdated.enjinV100.is(event)) {
        return stakeExchange.liquidityConfigUpdated.enjinV100.decode(event)
    }

    throw new UnsupportedEventError(stakeExchange.liquidityConfigUpdated)
}
