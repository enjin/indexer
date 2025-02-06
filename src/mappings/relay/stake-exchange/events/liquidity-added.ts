import { events, calls } from '../../../types/generated'
import { CommonContext, BlockHeader, EventItem, CallItem } from '../../types/contexts'
import { UnknownVersionError } from '../../../common/errors'
import { Event as EventModel, Extrinsic, StakeExchangeLiquidityAdded, StakeExchangeOffer } from '../../../model'
import { Sns } from '../../../common/sns'

function getEventData(event: EventItem) {
    if (events.stakeExchange.liquidityAdded.enjinV100.is(event)) {
        return events.stakeExchange.liquidityAdded.enjinV100.decode(event)
    }

    throw new UnknownVersionError(events.stakeExchange.liquidityAdded.name)
}

function getEvent(item: EventItem, data: ReturnType<typeof getEventData>, callData: ReturnType<typeof getCallData>) {
    return new EventModel({
        id: item.id,
        name: StakeExchangeLiquidityAdded.name,
        extrinsic: item.extrinsic?.id ? new Extrinsic({ id: item.extrinsic.id }) : null,
        data: new StakeExchangeLiquidityAdded({
            offerId: data.offerId,
            amount: callData.amount,
            account: data.who,
        }),
    })
}
