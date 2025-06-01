import { Block, CommonContext, EventItem } from '../../../contexts'
import { Event as EventModel, PoolMember, UnbondingEras } from '../../../model'
import { getOrCreateAccount } from '../../../utils/entities'
import { updatePool } from './pool'
import { Sns } from '../../../utils/sns'
import * as mappings from '../../index'

export async function unbonded(ctx: CommonContext, block: Block, item: EventItem): Promise<EventModel | undefined> {
    if (!item.extrinsic) return undefined
    if (!item.extrinsic.call) return undefined

    const eventData = mappings.nominationPools.events.unbonded(item)

    // This event should never be emitted, but since it is, we are just going to ignore events with balance 0
    if (eventData.balance === 0n) {
        return mappings.nominationPools.events.unbondedEventModel(item, eventData)
    }

    const pool = await updatePool(ctx, block, eventData.poolId.toString())
    const account = await getOrCreateAccount(ctx, eventData.member)
    const poolMember = await ctx.store.findOneOrFail(PoolMember, {
        relations: { tokenAccount: true },
        where: { id: `${pool.id}-${account.id}` },
    })
    // TODO: prefer findOrfail but using findOne because of a weird case in canary,
    // when pool deposit is unbonded, the member becomes stash account but on bonded it's pool creator
    // if (!poolMember) return undefined

    poolMember.bonded -= eventData.balance
    if (poolMember.tokenAccount?.totalBalance === 0n) {
        poolMember.bonded = 0n
    }

    poolMember.unbondingEras = (poolMember.unbondingEras || []).concat([
        new UnbondingEras({ era: eventData.era, balance: eventData.balance }),
    ])

    await Promise.all([ctx.store.save(pool), ctx.store.save(poolMember)])
    await Sns.getInstance().send({
        id: item.id,
        name: item.name,
        body: {
            pool: pool.id,
            account: account.id,
            balance: eventData.balance,
            unbondingPoints: eventData.points,
            extrinsic: item.extrinsic.id,
        },
    })

    return mappings.nominationPools.events.unbondedEventModel(item, eventData)
}
