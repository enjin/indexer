import { Block, CommonContext, EventItem } from '~/contexts'
import {
    Account,
    Event as EventModel, NominationPool, PoolsOffers,
    StakeExchangeOffer,
    StakeExchangeOfferState,
    StakeExchangeTokenFilter,
    StakeExchangeTokenFilterType,
} from '~/model'
import { getOrCreateAccount } from '~/util/entities'
import { Sns } from '~/util/sns'
import * as mappings from '~/pallet/index'
import { TokenFilter } from '~/pallet/common/types'
import {OfferCreated} from "~/pallet/stake-exchange/events/types";

function getFilterFromType(tokenFilter: TokenFilter | undefined) {
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

export async function offerCreated(ctx: CommonContext, block: Block, item: EventItem): Promise<EventModel | undefined> {
    const event: OfferCreated = mappings.stakeExchange.events.offerCreated(item)

    let rewardRate: bigint

    if (event.offer.minAverageCommission !== undefined) {
        rewardRate = BigInt(event.offer.minAverageCommission) * BigInt(10 ** 9)
    } else if (typeof event.offer.minAverageRewardRate === 'number') {
        rewardRate = BigInt(event.offer.minAverageRewardRate) * BigInt(10 ** 9)
    } else {
        rewardRate = event.offer.minAverageRewardRate ?? 0n
    }

    const account: Account = await getOrCreateAccount(ctx, event.offer.account)
    const rate: bigint = typeof event.offer.rate === 'bigint' ? event.offer.rate : BigInt(event.offer.rate * 10 ** 9)

    const offer = new StakeExchangeOffer({
        id: event.offerId.toString(),
        state: StakeExchangeOfferState.Active,
        offerId: event.offerId,
        account,
        amount: event.offer.total,
        total: event.offer.total,
        rate,
        minAverageRewardRate: rewardRate,
        createdBlock: block.height,
        createdAt: new Date(block.timestamp ?? 0),
    })

    await ctx.store.save(offer)

    if ('tokenFilter' in event.offer) {
        const entity: StakeExchangeTokenFilter = getFilterFromType(event.offer.tokenFilter)
        entity.id = offer.id
        entity.offer = offer
        await ctx.store.save(entity)

        if (event.offer.tokenFilter?.__kind === StakeExchangeTokenFilterType.Whitelist) {
            for (const value of event.offer.tokenFilter.value) {
                const poolsOffers = new PoolsOffers({
                    offer: offer,
                    pool: await ctx.store.findOne(NominationPool, { where:{ id: value.toString() }})
                });
                await ctx.store.save(poolsOffers)
            }
        }
    } //TODO handle other StakeExchangeTokenFilterType cases

    await Sns.getInstance().send({
        id: item.id,
        name: item.name,
        body: {
            offerId: event.offerId.toString(),
            account: event.offer.account,
            total: event.offer.total.toString(),
            rate: rate.toString(),
            minAverageCommission: 0,
            minAverageRewardRate: rewardRate.toString(),
        },
    })

    return mappings.stakeExchange.events.offerCreatedEventModel(item, event, rewardRate, offer)
}
