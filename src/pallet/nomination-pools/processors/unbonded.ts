import { Block, CommonContext, EventItem } from '~/contexts'
import { Event as EventModel, PoolMember, TokenAccount, UnbondingEras } from '~/model'
import { getOrCreateAccount } from '~/util/entities'
import { updatePool } from '~/pallet/nomination-pools/processors/pool'
import { Sns } from '~/util/sns'
import * as mappings from '~/pallet/index'
import { MoreThan } from 'typeorm'

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

    const owner = await ctx.store.findOne(TokenAccount, {
        where: { token: { id: pool.degenToken.id }, balance: 1n },
        relations: { account: true },
    })

    await ctx.store.save(poolMember)
    await ctx.store.save(pool)

    const bondedMembers = await ctx.store.find(PoolMember, {
        where: { pool: { id: pool.id }, bonded: MoreThan(0n), isStash: false },
    })

    await Sns.getInstance().send({
        id: item.id,
        name: poolMember.isStash ? 'NominationPools.DepositUnbond' : 'NominationPools.Unbond',
        body: {
            pool: pool.id,
            account: account.id,
            balance: data.balance,
            unbondingPoints: data.points,
            extrinsic: item.extrinsic.id,
            name: pool.name,
            tokenId: pool.degenToken.id,
            state: pool.state,
            owner: owner?.account.id,
        },
    })

    if (!poolMember.isStash && bondedMembers.length === 0) {
        await Sns.getInstance().send({
            id: `${item.id}-all-members-unbonded`,
            name: 'NominationPools.AllMembersUnbond',
            body: {
                pool: pool.id,
                extrinsic: item.extrinsic.id,
                name: pool.name,
                tokenId: pool.degenToken.id,
                state: pool.state,
                owner: owner?.account.id,
            },
        })
    }

    return mappings.nominationPools.events.unbondedEventModel(item, data, pool.degenToken.tokenId)
}
