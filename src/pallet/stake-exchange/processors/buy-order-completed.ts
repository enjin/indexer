import { Block, CommonContext, EventItem } from '~/contexts'
import { Account, Era, NominationPool, PoolMember, StakeExchangeOffer, TokenAccount } from '~/model'
import { getOrCreateAccount } from '~/util/entities'
import { SnsEvent } from '~/util/sns'
import * as mappings from '~/pallet/index'
import { BuyOrderCompleted } from '~/pallet/stake-exchange/events/types'
import { Buy } from '~/pallet/stake-exchange/calls'
import { EventHandlerResult } from '~/processor.handler'

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
): Promise<EventHandlerResult> {
    if (!item.extrinsic || !item.extrinsic.call) return undefined

    const event: BuyOrderCompleted = mappings.stakeExchange.events.buyOrderCompleted(item)
    let offerId: bigint | null = 'offerId' in event ? (event.offerId as bigint) : null

    if (offerId === null) {
        // pre-v1033 events carry no offer id; take it from the buy call that emitted the event
        const callData: Buy = mappings.stakeExchange.utils.anyBuy(
            item.call ?? item.extrinsic.call,
            event.tokenId,
            event.amount
        )
        offerId = callData.offerId
    }

    // change in rate from bigint (FixedU128) to number (Perbill) in v120; both scaled to 1e18 here
    const rate: bigint = typeof event.rate === 'bigint' ? event.rate : BigInt(event.rate) * 10n ** 9n
    // `amount` is the ENJ paid out by the offer creator; the buyer (`who`) sends `tokens_required =
    // rate.mul_floor(amount)` sENJ (pool points) to the offer creator in exchange (`do_buy`)
    const points: bigint = (event.amount * rate) / 10n ** 18n
    const account: Account = await getOrCreateAccount(ctx, event.who)

    const offer: StakeExchangeOffer = await ctx.store.findOneOrFail<StakeExchangeOffer>(StakeExchangeOffer, {
        where: { id: offerId.toString() },
        relations: {
            account: true,
        },
    })
    offer.total -= event.amount

    await ctx.store.save(offer)

    const pool: NominationPool | undefined = await ctx.store.findOneBy<NominationPool>(NominationPool, {
        id: event.tokenId.toString(),
    })

    const existingMember: PoolMember | undefined = await ctx.store.findOne<PoolMember>(PoolMember, {
        where: { id: `${event.tokenId}-${account.id}` },
        relations: {
            account: true,
            tokenAccount: true,
        },
    })

    if (!pool) {
        throw new Error(`Pool not found for token ${event.tokenId}`)
    }

    // `bonded` is the ENJ value of a member's points, so both sides move by the value of the sENJ transferred,
    // not by the ENJ the offer paid out
    const bonded: bigint = (points * pool.rate) / 10n ** 18n

    if (existingMember?.tokenAccount) {
        // the dust rule in `do_buy` may transfer the whole balance; nothing is left bonded then
        existingMember.bonded =
            existingMember.tokenAccount.balance <= 0n || existingMember.bonded <= bonded
                ? 0n
                : existingMember.bonded - bonded
        await ctx.store.save(existingMember)
    }

    if (
        existingMember?.unbondingEras === null &&
        (!existingMember.tokenAccount || existingMember.tokenAccount.balance <= 0n)
    ) {
        const poolMember = await ctx.store.findOneByOrFail<PoolMember>(PoolMember, { id: existingMember.id })
        poolMember.bonded = 0n
        poolMember.isActive = false
        pool.totalMembers -= 1
        await ctx.store.save(poolMember)
    }

    let newMember: PoolMember | undefined = await ctx.store.findOneBy<PoolMember>(PoolMember, {
        id: `${event.tokenId}-${offer.account.id}`,
    })

    if (!newMember) {
        const tokenAccount: TokenAccount | undefined = await ctx.store.findOneBy<TokenAccount>(TokenAccount, {
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

    const snsEvent: SnsEvent = {
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
    }

    return [mappings.stakeExchange.events.buyOrderCompletedEventModel(item, event, offerId, pool.id), snsEvent]
}
