import { Block, CommonContext, EventItem } from '~/contexts'
import { Era, Event as EventModel, NominationPool, PoolMember, StakeExchangeOffer, TokenAccount } from '~/model'
import { getOrCreateAccount } from '~/util/entities'
import { Sns } from '~/util/sns'
import * as mappings from '~/pallet/index'

function getActiveEra(ctx: CommonContext) {
    return ctx.store.find(Era, {
        order: {
            index: 'DESC',
        },
        take: 1,
    })
}

export async function buyOrderCompleted(
    ctx: CommonContext,
    block: Block,
    item: EventItem
): Promise<EventModel | undefined> {
    if (!item.extrinsic || !item.extrinsic.call) return undefined

    const event = mappings.stakeExchange.events.buyOrderCompleted(item)
    let offerId = 'offerId' in event ? (event.offerId as bigint) : null

    if (offerId === null) {
        const callData = mappings.stakeExchange.utils.anyBuy(item.extrinsic.call, event.tokenId, event.amount)
        offerId = callData.offerId
    }

    // change in rate from bigint to number (perBill) in v120
    const rate = typeof event.rate === 'bigint' ? event.rate : BigInt(event.rate * 10 ** 9)
    const points = (event.amount * rate) / 10n ** 18n
    const account = await getOrCreateAccount(ctx, event.who)

    const offer = await ctx.store.findOneOrFail<StakeExchangeOffer>(StakeExchangeOffer, {
        where: { id: offerId.toString() },
        relations: {
            account: true,
        },
    })
    offer.total -= event.amount

    await ctx.store.save(offer)

    const pool = await ctx.store.findOneBy<NominationPool>(NominationPool, { id: event.tokenId.toString() })

    const existingMember = await ctx.store.findOne<PoolMember>(PoolMember, {
        where: { id: `${event.tokenId}-${account.id}` },
        relations: {
            account: true,
            tokenAccount: true,
        },
    })

    if (!existingMember) {
        throw new Error(`Member not found for token ${event.tokenId} and account ${account.id}`)
    }
    // if (!pool && !existingMember) {
    //     return mappings.stakeExchange.events.buyOrderCompletedEventModel(item, event, offerId, undefined)
    // }

    if (!pool) {
        throw new Error(`Pool not found for token ${event.tokenId}`)
    }

    if (existingMember && existingMember.tokenAccount) {
        existingMember.bonded -= event.amount
        await ctx.store.save(existingMember)
    }

    if (
        existingMember &&
        existingMember.unbondingEras === null &&
        (!existingMember.tokenAccount || existingMember.tokenAccount.balance <= 0n)
    ) {
        const poolMember = await ctx.store.findOneByOrFail<PoolMember>(PoolMember, { id: existingMember.id })
        poolMember.bonded = 0n
        poolMember.isActive = false
        pool.totalMembers -= 1
        await ctx.store.save(poolMember)
    }

    let newMember = await ctx.store.findOneBy<PoolMember>(PoolMember, { id: `${event.tokenId}-${offer.account.id}` })

    const bonded = event.amount

    if (!newMember) {
        const tokenAccount = await ctx.store.findOneBy<TokenAccount>(TokenAccount, {
            id: `${offer.account.id}-1-${event.tokenId}`,
        })

        if (tokenAccount) {
            newMember = new PoolMember({
                id: `${event.tokenId}-${offer.account.id}`,
                pool,
                account: offer.account,
                bonded,
                tokenAccount,
                accumulatedRewards: 0n,
                isStash: false,
                isActive: true,
                joinedEra: (await getActiveEra(ctx))[0],
            })
            pool.totalMembers += 1
            await ctx.store.save(newMember)
        }
    } else {
        newMember.bonded += bonded
        if (!newMember.isActive) {
            newMember.isActive = true
            pool.totalMembers += 1
        }

        await ctx.store.save(newMember)
    }

    await ctx.store.save(pool)

    await Sns.getInstance().send({
        id: item.id,
        name: item.name,
        body: {
            offerId: offer.offerId,
            amount: event.amount,
            account: account.id,
            rate,
            tokenId: event.tokenId,
            extrinsic: item.extrinsic.id,
            points,
        },
    })

    return mappings.stakeExchange.events.buyOrderCompletedEventModel(item, event, offerId, pool.id)
}
