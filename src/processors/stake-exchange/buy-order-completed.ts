import { BlockHeader, CommonContext, EventItem } from '../../contexts'
import {
    Era,
    Event as EventModel,
    NominationPool,
    PoolMember,
    PoolMemberRewards,
    StakeExchangeOffer,
    TokenAccount,
} from '../../model'
import { getOrCreateAccount } from '../../utils/entities'
import { Sns } from '../../utils/sns'
import * as mappings from '../../mappings'

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
    block: BlockHeader,
    item: EventItem
): Promise<EventModel | undefined> {
    if (!item.extrinsic || !item.extrinsic.call) return undefined

    const event = mappings.stakeExchange.events.buyOrderCompleted(item)
    let offerId = 'offerId' in event ? (event.offerId as bigint) : null

    if (offerId === null) {
        const callData = mappings.stakeExchange.calls.buy(item.extrinsic.call)
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

    if (!pool && !existingMember) {
        return mappings.stakeExchange.events.buyOrderCompletedEventModel(item, event)
    }

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
        const poolMemberRewards = await ctx.store.findBy<PoolMemberRewards>(PoolMemberRewards, {
            member: { id: existingMember.id },
        })
        const poolMember = await ctx.store.findOneByOrFail<PoolMember>(PoolMember, { id: existingMember.id })
        await ctx.store.remove(poolMemberRewards)
        await ctx.store.remove(poolMember)
        pool.totalMembers -= 1
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
                joinedEra: (await getActiveEra(ctx))[0],
            })
            pool.totalMembers += 1
            await ctx.store.save(newMember)
        }
    } else {
        newMember.bonded += bonded
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

    return mappings.stakeExchange.events.buyOrderCompletedEventModel(item, event)
}
