import { Block, CommonContext, EventItem } from '~/contexts'
import { Event as EventModel, NominationPool, PoolMember, UnbondingEras } from '~/model'
import { getOrCreateAccount } from '~/util/entities'
import { updatePool } from '~/pallet/nomination-pools/processors/pool'
import { Sns } from '~/util/sns'
import * as mappings from '~/pallet/index'

export async function unbonded(ctx: CommonContext, block: Block, item: EventItem): Promise<EventModel | undefined> {
    if (!item.extrinsic || !item.extrinsic.call) return undefined

    const data = mappings.nominationPools.events.unbonded(item)
    // This event should never be emitted, but since it is, we are just going to ignore events with balance 0
    if (data.balance === 0n) {
        return mappings.nominationPools.events.unbondedEventModel(item, data, 0n)
    }

    const pool = await updatePool(ctx, block, data.poolId.toString())
    const account = await getOrCreateAccount(ctx, data.member)
    const poolMember = await ctx.store.findOne(PoolMember, {
        relations: { tokenAccount: true },
        where: { id: `${pool.id}-${account.id}` },
    })
    if (!poolMember) return undefined

    poolMember.bonded -= data.balance
    if (poolMember.tokenAccount?.totalBalance === 0n) {
        poolMember.bonded = 0n
    }

    poolMember.unbondingEras = (poolMember.unbondingEras || []).concat([
        new UnbondingEras({ era: data.era, balance: data.balance }),
    ])

    await ctx.store.save(poolMember)
    await ctx.store.save(pool)

    await Sns.getInstance().send({
        id: item.id,
        name: item.name,
        body: {
            pool: pool.id,
            account: account.id,
            balance: data.balance,
            unbondingPoints: data.points,
            extrinsic: item.extrinsic.id,
            name: pool.name,
            tokenId: pool.degenToken.id,
            poolState: pool.state,
        },
    })

    // check if all members are unbonded
    await notifyUnbondingCompletion(ctx, item)

    return mappings.nominationPools.events.unbondedEventModel(item, data, pool.degenToken.tokenId)
}

async function notifyUnbondingCompletion(ctx: CommonContext, item: EventItem): Promise<void> {
    if (!item.extrinsic || !item.extrinsic.call) return

    const data = mappings.nominationPools.events.unbonded(item)

    const pool = await ctx.store.findOneOrFail<NominationPool>(NominationPool, {
        where: { id: data.poolId.toString() },
        relations: {
            members: true,
        },
    })

    const memberStillBonded = pool.members.filter((member) => member.bonded !== 0n)

    if (memberStillBonded.length <= 1) {
        await Sns.getInstance().send({
            id: item.id,
            name: item.name,
            body: {
                pool: data.poolId.toString(),
                memberStillBonded: memberStillBonded.length,
                extrinsic: item.extrinsic.id,
                name: pool.name,
                tokenId: pool.degenToken.id,
                poolState: pool.state,
            },
        })
    }
}
