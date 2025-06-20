import { Block, CommonContext, EventItem } from '../../../contexts'
import { Event as EventModel, NominationPool, PoolMember, UnbondingEras } from '../../../model'
import { getOrCreateAccount } from '../../../util/entities'
import { updatePool } from './pool'
import { Sns } from '../../../util/sns'
import * as mappings from '../../index'

export async function unbonded(ctx: CommonContext, block: Block, item: EventItem): Promise<EventModel | undefined> {
    if (!item.extrinsic || !item.extrinsic.call) return undefined

    const data = mappings.nominationPools.events.unbonded(item)
    // This event should never be emitted, but since it is, we are just going to ignore events with balance 0
    if (data.balance === 0n) {
        return mappings.nominationPools.events.unbondedEventModel(item, data)
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
        },
    })

    // check all unbonded members
    unbondedAll(ctx, block, item)

    return mappings.nominationPools.events.unbondedEventModel(item, data)
}

export async function unbondedAll(ctx: CommonContext, block: Block, item: EventItem): Promise<EventModel | undefined> {
    if (!item.extrinsic || !item.extrinsic.call) return undefined

    const data = mappings.nominationPools.events.unbonded(item)

    const pool = await ctx.store.findOneOrFail<NominationPool>(NominationPool, {
        where: { id: data.poolId.toString() },
        relations: {
            members: {
                tokenAccount: true,
            },
        },
    })

    const memberStillBonded = pool.members.filter((member) => member.tokenAccount?.balance !== 0n)

    if (memberStillBonded.length === 0) {
        const event = mappings.nominationPools.events.allMembersUnbonded(item, data)
        if (event) {
            await ctx.store.save(event)
        }
    }
}
