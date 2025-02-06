import { events } from '../../../types/generated'
import { CommonContext, BlockHeader, EventItem } from '../../types/contexts'
import { UnknownVersionError } from '../../../common/errors'
import {
    Event as EventModel,
    Extrinsic,
    StakeExchangeOffer,
    StakeExchangeOfferCreated,
    StakeExchangeOfferState,
} from '../../../model'
import { getOrCreateAccount } from '../../util/entities'
import { Offer } from '../../../types/generated/enjinV1023'
import { getFilterFromType } from './liquidityConfigUpdated'
import { Sns } from '../../../common/sns'

function getEventData(event: EventItem) {
    if (events.stakeExchange.offerCreated.enjinV1023.is(event)) {
        return events.stakeExchange.offerCreated.enjinV1023.decode(event)
    }

    if (events.stakeExchange.offerCreated.enjinV1021.is(event)) {
        return events.stakeExchange.offerCreated.enjinV1021.decode(event)
    }

    if (events.stakeExchange.offerCreated.enjinV120.is(event)) {
        return events.stakeExchange.offerCreated.enjinV120.decode(event)
    }

    if (events.stakeExchange.offerCreated.enjinV100.is(event)) {
        return events.stakeExchange.offerCreated.enjinV100.decode(event)
    }

    if (events.stakeExchange.offerCreated.v1023.is(event)) {
        return events.stakeExchange.offerCreated.v1023.decode(event)
    }

    if (events.stakeExchange.offerCreated.v1021.is(event)) {
        return events.stakeExchange.offerCreated.v1021.decode(event)
    }

    if (events.stakeExchange.offerCreated.v120.is(event)) {
        return events.stakeExchange.offerCreated.v120.decode(event)
    }

    if (events.stakeExchange.offerCreated.v101.is(event)) {
        return events.stakeExchange.offerCreated.v101.decode(event)
    }

    if (events.stakeExchange.offerCreated.v100.is(event)) {
        return events.stakeExchange.offerCreated.v100.decode(event)
    }

    throw new UnknownVersionError(events.stakeExchange.offerCreated.name)
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
