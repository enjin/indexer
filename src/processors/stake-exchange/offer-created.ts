import { BlockHeader, CommonContext, EventItem } from '../../common/types/contexts'
import {
    Event as EventModel,
    StakeExchangeOffer,
    StakeExchangeOfferState,
    StakeExchangeTokenFilter,
    StakeExchangeTokenFilterType,
} from '../../model'
import { getOrCreateAccount } from '../../common/util/entities'
import { Sns } from '../../common/sns'
import * as mappings from '../../mappings'
import { OfferCreatedEvent } from '@enjin/indexer/mappings/stake-exchange/events'

function getFilterFromType(tokenFilter: OfferCreatedEvent['offer']['tokenFilter']) {
    let entity: StakeExchangeTokenFilter | null = null

    switch (tokenFilter?.__kind) {
        case 'All':
            entity = new StakeExchangeTokenFilter({
                type: StakeExchangeTokenFilterType.All,
            })
            break
        case 'Whitelist':
            entity = new StakeExchangeTokenFilter({
                type: StakeExchangeTokenFilterType.Whitelist,
                value: tokenFilter.value.map((v) => v.toString()),
            })
            break
        case 'BlockList':
            entity = new StakeExchangeTokenFilter({
                type: StakeExchangeTokenFilterType.BlockList,
                value: tokenFilter.value.map((v) => v.toString()),
            })
            break
        default:
            throw new Error('Unknown token filter type')
    }

    return entity
}

export async function offerCreated(ctx: CommonContext, block: BlockHeader, item: EventItem): Promise<EventModel | undefined> {
    if (!item.extrinsic) return undefined

    const eventData = mappings.stakeExchange.events.offerCreated(item)

    let rewardRate: bigint

    if (eventData.offer.minAverageCommission !== undefined) {
        rewardRate = BigInt(eventData.offer.minAverageCommission) * BigInt(10 ** 9)
    } else if (typeof eventData.offer.minAverageRewardRate === 'number') {
        rewardRate = BigInt(eventData.offer.minAverageRewardRate) * BigInt(10 ** 9)
    } else {
        rewardRate = eventData.offer.minAverageRewardRate ?? 0n
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
        minAverageRewardRate: rewardRate,
        createdBlock: block.height,
        createdAt: new Date(block.timestamp ?? 0),
    })

    await ctx.store.save(offer)

    if ('tokenFilter' in eventData.offer) {
        const entity = getFilterFromType(eventData.offer.tokenFilter)
        entity.id = offer.id
        entity.offer = offer
        await ctx.store.save(entity)
    }

    await Sns.getInstance().send({
        id: item.id,
        name: item.name,
        body: {
            offerId: eventData.offerId.toString(),
            account: eventData.offer.account,
            total: eventData.offer.total.toString(),
            rate: rate.toString(),
            minAverageCommission: 0,
            minAverageRewardRate: rewardRate.toString(),
        },
    })

    return mappings.stakeExchange.events.offerCreatedEventModel(item, eventData, rewardRate)
}
