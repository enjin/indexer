import { Block, CommonContext, EventItem } from '../../../contexts'
import { Era, Event as EventModel, PoolMember, PoolMemberRewards } from '../../../model'
import { getOrCreateAccount } from '../../../util/entities'
import { updatePool } from './pool'
import { Sns } from '../../../util/sns'
import * as mappings from '../../index'

function getActiveEra(ctx: CommonContext) {
    return ctx.store.find(Era, {
        order: {
            index: 'DESC',
        },
        take: 1,
    })
}

export async function withdrawn(ctx: CommonContext, block: Block, item: EventItem): Promise<EventModel | undefined> {
    if (!item.extrinsic || !item.extrinsic.call) return undefined

    const data = mappings.nominationPools.events.withdrawn(item)
    const pool = await updatePool(ctx, block, data.poolId.toString())
    const account = await getOrCreateAccount(ctx, data.member)

    const poolMember = await ctx.store.findOne<PoolMember>(PoolMember, {
        where: { id: `${data.poolId}-${account.id}` },
        relations: { tokenAccount: true },
    })
    if (!poolMember) {
        return undefined
    }

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
        const poolMemberRewards = await ctx.store.findBy<PoolMemberRewards>(PoolMemberRewards, {
            member: { id: poolMember.id },
        })

        await ctx.store.remove(poolMemberRewards)
        await ctx.store.remove(poolMember)

        pool.totalMembers -= 1
        await ctx.store.save(pool)
    }

    await Sns.getInstance().send({
        id: item.id,
        name: item.name,
        body: {
            pool: data.poolId.toString(),
            account: account.id,
            balance: data.balance,
            points: data.points,
            extrinsic: item.extrinsic.id,
        },
    })

    return mappings.nominationPools.events.withdrawnEventModel(item, data)
}
