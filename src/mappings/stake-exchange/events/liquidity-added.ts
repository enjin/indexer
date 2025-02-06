import { stakeExchange } from '../../../types/generated/events'
import { EventItem } from '../../../common/types/contexts'
import { UnsupportedEventError } from '../../../common/errors'
import {
    Era,
    Event as EventModel,
    Extrinsic,
    NominationPool,
    PoolMember,
    PoolMemberRewards,
    StakeExchangeBuyOrderCompleted,
    StakeExchangeOffer,
    TokenAccount,
} from '../../../model'

function getEventData(event: EventItem) {
    if (stakeExchange.liquidityAdded.enjinV100.is(event)) {
        return stakeExchange.liquidityAdded.enjinV100.decode(event)
    }

    throw new UnsupportedEventError(stakeExchange.liquidityAdded)
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
