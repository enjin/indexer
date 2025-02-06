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
    if (stakeExchange.offerCompleted.enjinV110.is(event)) {
        return stakeExchange.offerCompleted.enjinV110.decode(event)
    }

    throw new UnsupportedEventError(stakeExchange.offerCompleted)
}

function getEvent(item: EventItem, data: ReturnType<typeof getEventData>) {
    return new EventModel({
        id: item.id,
        name: StakeExchangeOfferCompleted.name,
        extrinsic: item.extrinsic?.id ? new Extrinsic({ id: item.extrinsic.id }) : null,
        data: new StakeExchangeOfferCompleted({
            offerId: data.offerId,
        }),
    })
}
