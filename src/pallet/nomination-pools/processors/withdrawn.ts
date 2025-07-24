import { Block, CommonContext, EventItem } from '~/contexts'
import { Era, PoolMember, PoolState, TokenAccount } from '~/model'
import { getOrCreateAccount } from '~/util/entities'
import { updatePool } from '~/pallet/nomination-pools/processors/pool'
import { Sns, SnsEvent } from '~/util/sns'
import * as mappings from '~/pallet/index'
import { IsNull, Not } from 'typeorm'
import { EventHandlerResult } from '~/processor.handler'
import { CustomStakingEvent } from '~/pallet/common/types'

function getActiveEra(ctx: CommonContext) {
    return ctx.store.find(Era, {
        order: {
            index: 'DESC',
        },
        take: 1,
    })
}

export async function withdrawn(ctx: CommonContext, block: Block, item: EventItem): Promise<EventHandlerResult> {
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

    const isStashWithdrawing = await (async () => {
        const unbondingMembers = await ctx.store.find(PoolMember, {
            where: { pool: { id: pool.id }, unbondingEras: Not(IsNull()), isStash: false },
        })

        const unbondingStash = await ctx.store.findOne(PoolMember, {
            where: { pool: { id: pool.id }, unbondingEras: Not(IsNull()), isStash: true },
        })

        return unbondingMembers.length === 0 && unbondingStash
    })()

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
        poolMember.bonded = 0n
        poolMember.isActive = false
        pool.totalMembers -= 1
        await ctx.store.save(poolMember)
        await ctx.store.save(pool)
    }

    const owner = await ctx.store.findOne(TokenAccount, {
        where: { token: { id: `2-${pool.tokenId}` } },
        relations: { account: true },
    })

    const unbondingMembers = await ctx.store.find(PoolMember, {
        where: { pool: { id: pool.id }, unbondingEras: Not(IsNull()), isStash: false },
    })

    const snsEvent: SnsEvent = {
        id: item.id,
        name: isStashWithdrawing ? CustomStakingEvent.DepositWithdrawn : item.name,
        body: {
            pool: data.poolId.toString(),
            account: account.id,
            balance: data.balance,
            points: data.points,
            extrinsic: item.extrinsic.id,
            hash: item.extrinsic.hash,
            name: pool.name,
            tokenId: `2-${pool.tokenId}`,
            state: pool.state,
            owner: owner?.account.id,
        },
    }

    if (!isStashWithdrawing && unbondingMembers.length === 0 && pool.state === PoolState.Destroying) {
        await Sns.getInstance().send({
            id: `${item.id}-all-members-withdrawn`,
            name: CustomStakingEvent.AllMembersWithdrawn,
            body: {
                pool: pool.id,
                extrinsic: item.extrinsic.id,
                hash: item.extrinsic.hash,
                name: pool.name,
                tokenId: `2-${pool.tokenId}`,
                state: pool.state,
                owner: owner?.account.id,
            },
        })
    }

    return [mappings.nominationPools.events.withdrawnEventModel(item, data, pool.tokenId), snsEvent]
}
