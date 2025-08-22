import { Block, CommonContext, EventItem } from '~/contexts'
import {
    Account,
    NominationPool,
    PoolsOffers,
    PoolState,
    StakeExchangeOffer,
    StakeExchangeOfferState,
    StakeExchangeTokenFilter,
    StakeExchangeTokenFilterType,
} from '~/model'
import { getOrCreateAccount } from '~/util/entities'
import { SnsEvent } from '~/util/sns'
import * as mappings from '~/pallet/index'
import { TokenFilter } from '~/pallet/common/types'
import { OfferCreated } from '~/pallet/stake-exchange/events/types'
import { In, Not } from 'typeorm'
import { EventHandlerResult } from '~/processor.handler'

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

async function savePoolsOffersForStakeExchange(
    event: OfferCreated,
    ctx: CommonContext,
    offer: StakeExchangeOffer
): Promise<void> {
    async function savePoolsOfferIntoPivotTable(pools: NominationPool[]): Promise<void> {
        for (const pool of pools) {
            const poolsOffers = new PoolsOffers({ id: `${pool.id}-${offer.id}`, offer, pool })
            await ctx.store.save(poolsOffers)
        }
    }

    if (event.offer.tokenFilter?.__kind === StakeExchangeTokenFilterType.Whitelist) {
        const pools: NominationPool[] = await ctx.store.find(NominationPool, {
            where: {
                state: PoolState.Open,
                id: In(event.offer.tokenFilter.value),
            },
        })

        await savePoolsOfferIntoPivotTable(pools)
    } else if (event.offer.tokenFilter?.__kind === StakeExchangeTokenFilterType.All) {
        const pools: NominationPool[] = await ctx.store.find(NominationPool, { where: { state: PoolState.Open } })

        await savePoolsOfferIntoPivotTable(pools)
    } else if (event.offer.tokenFilter?.__kind === StakeExchangeTokenFilterType.BlockList) {
        const pools: NominationPool[] = await ctx.store.find(NominationPool, {
            where: {
                state: PoolState.Open,
                id: Not(In(event.offer.tokenFilter.value)),
            },
        })

        await savePoolsOfferIntoPivotTable(pools)
    }
}

export async function offerCreated(ctx: CommonContext, block: Block, item: EventItem): Promise<EventHandlerResult> {
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

        await savePoolsOffersForStakeExchange(event, ctx, offer)
    }

    const snsEvent: SnsEvent = {
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
    }

    return [mappings.stakeExchange.events.offerCreatedEventModel(item, event, rewardRate, offer), snsEvent]
}
