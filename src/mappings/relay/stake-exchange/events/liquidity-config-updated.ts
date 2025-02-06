import { events } from '../../../types/generated'
import { CommonContext, BlockHeader, EventItem } from '../../types/contexts'
import { UnknownVersionError } from '../../../common/errors'
import {
    Event as EventModel,
    Extrinsic,
    StakeExchangeTokenFilterType,
    StakeExchangeLiquidityConfigUpdated,
    StakeExchangeTokenFilter,
} from '../../../model'
import { getOrCreateAccount } from '../../util/entities'
import { Sns } from '../../../common/sns'

function getEventData(event: EventItem) {
    if (events.stakeExchange.liquidityConfigUpdated.enjinV100.is(event)) {
        return events.stakeExchange.liquidityConfigUpdated.enjinV100.decode(event)
    }

    throw new UnknownVersionError(events.stakeExchange.liquidityConfigUpdated.name)
}
