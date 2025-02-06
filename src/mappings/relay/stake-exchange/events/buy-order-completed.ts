import { calls, events } from '../../../types/generated'
import { CommonContext, BlockHeader, EventItem, CallItem } from '../../types/contexts'
import { UnknownVersionError } from '../../../common/errors'
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
import { getOrCreateAccount } from '../../util/entities'
import { Sns } from '../../../common/sns'
import { StakeExchangeCall_buy } from '../../../types/generated/enjinV1026'

function getEventData(event: EventItem) {
    if (events.stakeExchange.buyOrderCompleted.enjinV1033.is(event)) {
        return events.stakeExchange.buyOrderCompleted.enjinV1033.decode(event)
    }

    if (events.stakeExchange.buyOrderCompleted.enjinV1026.is(event)) {
        return events.stakeExchange.buyOrderCompleted.enjinV1026.decode(event)
    }

    if (events.stakeExchange.buyOrderCompleted.enjinV120.is(event)) {
        return events.stakeExchange.buyOrderCompleted.enjinV120.decode(event)
    }

    if (events.stakeExchange.buyOrderCompleted.enjinV100.is(event)) {
        return events.stakeExchange.buyOrderCompleted.enjinV100.decode(event)
    }

    if (events.stakeExchange.buyOrderCompleted.v1033.is(event)) {
        return events.stakeExchange.buyOrderCompleted.v1033.decode(event)
    }

    if (events.stakeExchange.buyOrderCompleted.v1026.is(event)) {
        return events.stakeExchange.buyOrderCompleted.v1026.decode(event)
    }

    if (events.stakeExchange.buyOrderCompleted.v120.is(event)) {
        return events.stakeExchange.buyOrderCompleted.v120.decode(event)
    }

    if (events.stakeExchange.buyOrderCompleted.v100.is(event)) {
        return events.stakeExchange.buyOrderCompleted.v100.decode(event)
    }

    throw new UnknownVersionError(events.stakeExchange.buyOrderCompleted.name)
}

function getCallData(call: CallItem, eventData: ReturnType<typeof getEventData>) {
    if (call.name === 'Utility.batch_all') {
        if (calls.utility.batchAll.enjinV1026.is(call)) {
            const data = calls.utility.batchAll.enjinV1026.decode(call)

            const findCall = data.calls.find(
                (c) => c.__kind === 'StakeExchange' && c.value.__kind === 'buy' && c.value.amount === eventData.amount
            )

            if (findCall) {
                return findCall.value as StakeExchangeCall_buy
            }

            throw new Error('findCall not found')
        }
    }

    if (calls.stakeExchange.buy.enjinV100.is(call)) {
        return calls.stakeExchange.buy.enjinV100.decode(call)
    }

    throw new UnknownVersionError(calls.stakeExchange.buy.name)
}

function getActiveEra(ctx: CommonContext) {
    return ctx.store.find(Era, {
        order: {
            index: 'DESC',
        },
        take: 1,
    })
}

function getEvent(item: EventItem, data: ReturnType<typeof getEventData>, offerId: bigint) {
    const rate = typeof data.rate === 'bigint' ? data.rate : BigInt(data.rate * 10 ** 9)
    return new EventModel({
        id: item.id,
        name: StakeExchangeBuyOrderCompleted.name,
        extrinsic: item.extrinsic?.id ? new Extrinsic({ id: item.extrinsic.id }) : null,
        data: new StakeExchangeBuyOrderCompleted({
            offerId,
            amount: data.amount,
            account: data.who,
            rate,
            tokenId: data.tokenId,
            points: (data.amount * rate) / 10n ** 18n,
        }),
    })
}

export async function buyOrderCompleted(
    ctx: CommonContext,
    block: BlockHeader,
    item: EventItem
): Promise<EventModel | undefined> {
    if (!item.extrinsic) return undefined
    if (!item.extrinsic.call) return undefined

    const eventData = getEventData(item)

    if (!eventData) throw new Error('Event data is undefined')

    let offerId = 'offerId' in eventData ? (eventData.offerId as bigint) : null

    if (offerId === null) {
        const callData = getCallData(item.extrinsic.call, eventData)
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
        return getEvent(item, eventData, offerId)
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

    return getEvent(item, eventData, offerId)
}
