import { Block, CommonContext, EventItem } from '~/contexts'
import { Era, Event as EventModel, PoolMember, NominationPool } from '~/model'
import { getOrCreateAccount } from '~/util/entities'
import { updatePool } from '~/pallet/nomination-pools/processors/pool'
import { Sns } from '~/util/sns'
import * as mappings from '~/pallet/index'

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
        poolMember.bonded = 0n
        poolMember.isActive = false
        pool.totalMembers -= 1
        await ctx.store.save(poolMember)
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
            name: pool.name,
            tokenId: pool.degenToken.id,
            state: pool.state,
        },
    })

    // check if all members are withdrawn
    await handleWithdrawalComplete(ctx, item)

    return mappings.nominationPools.events.withdrawnEventModel(item, data, pool.degenToken.tokenId)
}

async function handleWithdrawalComplete(ctx: CommonContext, item: EventItem): Promise<void> {
    if (!item.extrinsic || !item.extrinsic.call) return

    const data = mappings.nominationPools.events.withdrawn(item)

    const pool = await ctx.store.findOneOrFail<NominationPool>(NominationPool, {
        where: { id: data.poolId.toString() },
        relations: {
            members: true,
            degenToken: true,
        },
    })

    const allMembersUnbondedBool = pool.members.every((member) => member.bonded === 0n && member.unbondingEras === null)
    const isStashBonded = pool.members.filter((member) => member.bonded !== 0n)

    if (isStashBonded.length === 1) {
        await Sns.getInstance().send({
            id: item.id,
            name: item.extrinsic.getCall().name, // Members withdrawn
            body: {
                pool: data.poolId.toString(),
                allMembersWithdrawn: true,
                extrinsic: item.extrinsic.id,
                name: pool.name,
                tokenId: pool.degenToken.id,
                state: pool.state,
            },
        })
    } else if (allMembersUnbondedBool) {
        await Sns.getInstance().send({
            id: item.id,
            name: item.extrinsic.getCall().name, // Deposit withdrawn
            body: {
                pool: data.poolId.toString(),
                depositWithdrawn: true,
                extrinsic: item.extrinsic.id,
                name: pool.name,
                tokenId: pool.degenToken.id,
                state: pool.state,
            },
        })
    }
}
