import {
    Era,
    NominationPool,
    PoolState,
    Event as EventModel,
    NominationPoolsMembersUnbondedCompleted,
    NominationPoolsDepositUnbondedCompleted,
} from '../../model'
import { CommonContext, dataHandlerContext } from '../../contexts'
import { Job } from 'bullmq'
import { Not, IsNull } from 'typeorm'

export async function computeDestroyedPoolsEvents(_job: Job): Promise<void> {
    const ctx = await dataHandlerContext()

    const pools = await ctx.store.find(NominationPool, {
        where: {
            state: PoolState.Destroying,
            members: {
                unbondingEras: {
                    era: Not(IsNull()),
                },
            },
        },
        relations: {
            members: true,
        },
    })

    const currentEra = await ctx.store.findOne(Era, {
        order: {
            startBlock: 'DESC',
        },
    })

    if (!currentEra) {
        throw new Error('No current era found')
    }

    for (const pool of pools) {
        // check pool for unbonding complete
        const unbondingComplete = pool.members.every(
            (member) => currentEra.startBlock === member.unbondingEras?.[0]?.era
        )
        if (unbondingComplete) {
            if (pool.members.length > 1) {
                await createUnbondingCompleteEvent(ctx, pool, currentEra)
                _job.log(`Unbonding complete for pool ${pool.id}`)
            } else if (pool.members.length === 1) {
                await createUnbondingDepositCompleteEvent(ctx, pool, currentEra)
                _job.log(`Unbonding deposit complete for pool ${pool.id}`)
            }
        }
    }
}

async function createUnbondingCompleteEvent(ctx: CommonContext, pool: NominationPool, currentEra: Era): Promise<void> {
    const event = new EventModel({
        id: `${pool.id}-${currentEra.startBlock}`,
        name: NominationPoolsMembersUnbondedCompleted.name,
        data: new NominationPoolsMembersUnbondedCompleted({
            pool: pool.id,
            era: currentEra.startBlock,
        }),
    })

    await ctx.store.insert(event)
}

async function createUnbondingDepositCompleteEvent(
    ctx: CommonContext,
    pool: NominationPool,
    currentEra: Era
): Promise<void> {
    const event = new EventModel({
        id: `${pool.id}-${currentEra.startBlock}`,
        name: NominationPoolsDepositUnbondedCompleted.name,
        data: new NominationPoolsDepositUnbondedCompleted({
            pool: pool.id,
            era: currentEra.startBlock,
        }),
    })

    await ctx.store.insert(event)
}
