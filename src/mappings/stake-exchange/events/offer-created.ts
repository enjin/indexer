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
    if (stakeExchange.offerCreated.enjinV1023.is(event)) {
        return stakeExchange.offerCreated.enjinV1023.decode(event)
    }

    if (stakeExchange.offerCreated.enjinV1021.is(event)) {
        return stakeExchange.offerCreated.enjinV1021.decode(event)
    }

    if (stakeExchange.offerCreated.enjinV120.is(event)) {
        return stakeExchange.offerCreated.enjinV120.decode(event)
    }

    if (stakeExchange.offerCreated.enjinV100.is(event)) {
        return stakeExchange.offerCreated.enjinV100.decode(event)
    }

    if (stakeExchange.offerCreated.v1023.is(event)) {
        return stakeExchange.offerCreated.v1023.decode(event)
    }

    if (stakeExchange.offerCreated.v1021.is(event)) {
        return stakeExchange.offerCreated.v1021.decode(event)
    }

    if (stakeExchange.offerCreated.v120.is(event)) {
        return stakeExchange.offerCreated.v120.decode(event)
    }

    if (stakeExchange.offerCreated.v101.is(event)) {
        return stakeExchange.offerCreated.v101.decode(event)
    }

    if (stakeExchange.offerCreated.v100.is(event)) {
        return stakeExchange.offerCreated.v100.decode(event)
    }

    throw new UnsupportedEventError(stakeExchange.offerCreated)
}

function getEvent(item: EventItem, data: ReturnType<typeof getEventData>, rewardRateAsFixedu128: bigint) {
    const rate = typeof data.offer.rate === 'bigint' ? data.offer.rate : BigInt(data.offer.rate * 10 ** 9)
    return new EventModel({
        id: item.id,
        name: StakeExchangeOfferCreated.name,
        extrinsic: item.extrinsic?.id ? new Extrinsic({ id: item.extrinsic.id }) : null,
        data: new StakeExchangeOfferCreated({
            offerId: data.offerId,
            account: data.offer.account,
            total: data.offer.total,
            minAverageCommission: 0,
            rate,
            minAverageRewardRate: rewardRateAsFixedu128,
        }),
    })
}
