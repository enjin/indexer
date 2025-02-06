import { events, calls } from '../../../types/generated'
import { CommonContext, BlockHeader, EventItem, CallItem } from '../../types/contexts'
import { UnknownVersionError } from '../../../common/errors'
import { Event as EventModel, Extrinsic, StakeExchangeLiquidityWithdrawn, StakeExchangeOffer } from '../../../model'
import { Sns } from '../../../common/sns'

function getEventData(event: EventItem) {
    if (events.stakeExchange.liquidityWithdrawn.enjinV100.is(event)) {
        return events.stakeExchange.liquidityWithdrawn.enjinV100.decode(event)
    }

    throw new UnknownVersionError(events.stakeExchange.liquidityWithdrawn.name)
}



function getEvent(item: EventItem, data: ReturnType<typeof getEventData>, callData: ReturnType<typeof getCallData>) {
    return new EventModel({
        id: item.id,
        name: StakeExchangeLiquidityWithdrawn.name,
        extrinsic: item.extrinsic?.id ? new Extrinsic({ id: item.extrinsic.id }) : null,
        data: new StakeExchangeLiquidityWithdrawn({
            offerId: data.offerId,
            amount: callData.amount,
            account: data.who,
        }),
    })
}
