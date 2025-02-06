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
    if (stakeExchange.liquidityWithdrawn.enjinV100.is(event)) {
        return stakeExchange.liquidityWithdrawn.enjinV100.decode(event)
    }

    throw new UnsupportedEventError(stakeExchange.liquidityWithdrawn)
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
