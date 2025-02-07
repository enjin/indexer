import { BlockHeader, CommonContext, EventItem } from '../../common/types/contexts'
import { Event as EventModel, StakeExchangeOffer, StakeExchangeOfferState } from '../../model'
import { getOrCreateAccount } from '../../util/entities'
import { Offer } from '../../types/generated/enjinV1023'
import { getFilterFromType } from './liquidity-config-updated'
import { Sns } from '../../common/sns'
import * as mappings from '../../mappings'

function hasTokenFilter(offer: ReturnType<typeof getEventData>['offer']): offer is Offer {
    return 'tokenFilter' in offer
}

export async function offerCreated(ctx: CommonContext, block: BlockHeader, item: EventItem): Promise<EventModel | undefined> {
    if (!item.extrinsic) return undefined

    const eventData = mappings.stakeExchange.events.offerCreated(item)

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

    return mappings.stakeExchange.events.offerCreatedEventModel(item, eventData, rewardRateAsFixedu128)
}
