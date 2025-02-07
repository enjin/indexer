import { BlockHeader, CommonContext, EventItem } from '../../common/types/contexts'
import {
    Era,
    Event as EventModel,
    NominationPool,
    PoolMember,
    PoolMemberRewards,
    StakeExchangeOffer,
    TokenAccount,
} from '../../model'
import { getOrCreateAccount } from '../../common/util/entities'
import { Sns } from '../../common/sns'
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
    if (!item.extrinsic) return undefined
    if (!item.extrinsic.call) return undefined

    const eventData = mappings.stakeExchange.events.buyOrderCompleted(item)

    let offerId = 'offerId' in eventData ? (eventData.offerId as bigint) : null

    if (offerId === null) {
        const callData = mappings.stakeExchange.calls.buy(item.extrinsic.call)
        if (!callData) throw new Error('Call data is undefined')
        offerId = callData.offerId
    }

    // change in rate from bigint to number (perBill) in v120
    const rate = typeof eventData.rate === 'bigint' ? eventData.rate : BigInt(eventData.rate * 10 ** 9)

    const points = (eventData.amount * rate) / 10n ** 18n

    const account = await getOrCreateAccount(ctx, eventData.who)

    const offer = await ctx.store.findOneOrFail(StakeExchangeOffer, {
        where: { id: offerId.toString() },
        relations: {
            account: true,
        },
    })
    offer.total -= eventData.amount

    await ctx.store.save(offer)

    const pool = await ctx.store.findOneBy(NominationPool, { id: eventData.tokenId.toString() })

    const existingMember = await ctx.store.findOne(PoolMember, {
        where: { id: `${eventData.tokenId}-${account.id}` },
        relations: {
            account: true,
            tokenAccount: true,
        },
    })

    if (!pool && !existingMember) {
        return mappings.stakeExchange.events.buyOrderCompletedEventModel(item, eventData, offerId)
    }

    if (!pool) {
        throw new Error(`Pool not found for token ${eventData.tokenId}`)
    }

    if (existingMember && existingMember.tokenAccount) {
        existingMember.bonded -= eventData.amount
        await ctx.store.save(existingMember)
    }

    if (
        existingMember &&
        existingMember.unbondingEras === null &&
        (!existingMember.tokenAccount || existingMember.tokenAccount.balance <= 0n)
    ) {
        const rewards = await ctx.store.findBy(PoolMemberRewards, { member: { id: existingMember.id } })
        const memeber = await ctx.store.findOneByOrFail(PoolMember, { id: existingMember.id })
        await ctx.store.remove(rewards)
        await ctx.store.remove(memeber)
        pool.totalMembers -= 1
    }

    let newMember = await ctx.store.findOneBy(PoolMember, { id: `${eventData.tokenId}-${offer.account.id}` })

    const bonded = eventData.amount

    if (!newMember) {
        const tokenAccount = await ctx.store.findOneBy(TokenAccount, { id: `${offer.account.id}-1-${eventData.tokenId}` })

        if (tokenAccount) {
            newMember = new PoolMember({
                id: `${eventData.tokenId}-${offer.account.id}`,
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
            amount: eventData.amount,
            account: account.id,
            rate,
            tokenId: eventData.tokenId,
            extrinsic: item.extrinsic.id,
            points,
        },
    })

    return mappings.stakeExchange.events.buyOrderCompletedEventModel(item, eventData, offerId)
}
