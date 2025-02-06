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

function hasTokenFilter(offer: ReturnType<typeof getEventData>['offer']): offer is Offer {
    return 'tokenFilter' in offer
}

export async function offerCreated(ctx: CommonContext, block: BlockHeader, item: EventItem): Promise<EventModel | undefined> {
    if (!item.extrinsic) return undefined

    const eventData = getEventData(item)

    if (!eventData) return undefined

    let rewardRateAsPerbill: number
    let rewardRateAsFixedu128: bigint

    if ('minAverageCommission' in eventData.offer) {
        rewardRateAsPerbill = eventData.offer.minAverageCommission
        rewardRateAsFixedu128 = BigInt(rewardRateAsPerbill) * BigInt(10 ** 9)
    } else if (typeof eventData.offer.minAverageRewardRate === 'number') {
        rewardRateAsPerbill = eventData.offer.minAverageRewardRate
        rewardRateAsFixedu128 = BigInt(rewardRateAsPerbill) * BigInt(10 ** 9)
    } else {
        rewardRateAsFixedu128 = eventData.offer.minAverageRewardRate
        rewardRateAsPerbill = Number(eventData.offer.minAverageRewardRate / BigInt(10 ** 9))
    }

    const account = await getOrCreateAccount(ctx, eventData.offer.account)
    const rate = typeof eventData.offer.rate === 'bigint' ? eventData.offer.rate : BigInt(eventData.offer.rate * 10 ** 9)

    const offer = new StakeExchangeOffer({
        id: eventData.offerId.toString(),
        state: StakeExchangeOfferState.Active,
        offerId: eventData.offerId,
        account,
        total: eventData.offer.total,
        rate,
        minAverageRewardRate: rewardRateAsFixedu128,
        createdBlock: block.height,
        createdAt: new Date(block.timestamp ?? 0),
    })

    await ctx.store.save(offer)

    if (hasTokenFilter(eventData.offer)) {
        const entity = getFilterFromType(eventData.offer.tokenFilter)
        entity.id = offer.id
        entity.offer = offer
        await ctx.store.save(entity)
    }

    Sns.getInstance().send({
        id: item.id,
        name: item.name,
        body: {
            offerId: eventData.offerId.toString(),
            account: eventData.offer.account,
            total: eventData.offer.total.toString(),
            rate: rate.toString(),
            minAverageCommission: 0,
            minAverageRewardRate: rewardRateAsFixedu128.toString(),
        },
    })

    return getEvent(item, eventData, rewardRateAsFixedu128)
}
