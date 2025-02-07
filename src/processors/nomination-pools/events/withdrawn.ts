import { events, calls } from '../../../types/generated'
import { CommonContext, BlockHeader, EventItem, CallItem } from '../../types/contexts'
import { UnknownVersionError } from '../../../common/errors'
import { Era, Event as EventModel, Extrinsic, NominationPoolsWithdrawn, PoolMember, PoolMemberRewards } from '../../../model'
import { getOrCreateAccount } from '../../util/entities'
import { updatePool } from '../pool'
import { Sns } from '../../../common/sns'

function getCallData(call: CallItem) {
    if (call.name === 'NominationPools.withdraw_deposit') {
        if (calls.nominationPools.withdrawDeposit.enjinV100.is(call)) {
            return calls.nominationPools.withdrawDeposit.enjinV100.decode(call)
        }
    }

    if (calls.nominationPools.withdrawUnbonded.enjinV100.is(call)) {
        return calls.nominationPools.withdrawUnbonded.enjinV100.decode(call)
    }

    throw new UnknownVersionError(calls.nominationPools.withdrawUnbonded.name)
}

function getEventData(event: EventItem) {
    if (events.nominationPools.withdrawn.enjinV100.is(event)) {
        return events.nominationPools.withdrawn.enjinV100.decode(event)
    }

    throw new UnknownVersionError(events.nominationPools.withdrawn.name)
}

function getActiveEra(ctx: CommonContext) {
    return ctx.store.find(Era, {
        order: {
            index: 'DESC',
        },
        take: 1,
    })
}

function getEvent(item: EventItem, data: ReturnType<typeof getEventData>) {
    return new EventModel({
        id: item.id,
        name: NominationPoolsWithdrawn.name,
        extrinsic: item.extrinsic?.id ? new Extrinsic({ id: item.extrinsic.id }) : null,
        data: new NominationPoolsWithdrawn({
            account: data.member,
            pool: data.poolId.toString(),
            balance: data.balance,
            points: data.points,
        }),
    })
}

export async function withdrawn(ctx: CommonContext, block: BlockHeader, item: EventItem): Promise<EventModel | undefined> {
    if (!item.extrinsic) return undefined
    if (!item.extrinsic.call) return undefined

    const eventData = getEventData(item)
    const callData = getCallData(item.extrinsic.call)

    if (!eventData || !callData) return undefined

    const pool = await updatePool(ctx, block, eventData.poolId.toString())
    const account = await getOrCreateAccount(ctx, eventData.member)
    const poolMember = await ctx.store.findOneOrFail(PoolMember, {
        where: { id: `${eventData.poolId}-${account.id}` },
        relations: { tokenAccount: true },
    })

    const activeEra = await getActiveEra(ctx)

    if (poolMember.unbondingEras && poolMember.unbondingEras.length > 1) {
        poolMember.unbondingEras = poolMember.unbondingEras.filter((era) => {
            return era.era > activeEra[0].index
        })
        if (poolMember.unbondingEras.length === 0) {
            poolMember.unbondingEras = null
        }
    } else {
        poolMember.unbondingEras = null
    }

    await ctx.store.save(poolMember)

    if (poolMember.unbondingEras === null && (!poolMember.tokenAccount || poolMember.tokenAccount.balance <= 0n)) {
        const poolMemberRewards = await ctx.store.findBy(PoolMemberRewards, { member: { id: poolMember.id } })
        await ctx.store.remove(poolMemberRewards)
        await ctx.store.remove(poolMember)
        pool.totalMembers -= 1
        await ctx.store.save(pool)
    }

    Sns.getInstance().send({
        id: item.id,
        name: item.name,
        body: {
            pool: eventData.poolId.toString(),
            account: account.id,
            balance: eventData.balance,
            points: eventData.points,
            extrinsic: item.extrinsic.id,
        },
    })

    return getEvent(item, eventData)
}
