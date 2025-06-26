import { Era, NominationPool, PoolState } from '../../model'
import { dataHandlerContext } from '../../contexts'
import { Job } from 'bullmq'
import { Sns } from '../../util/sns'
import { staking } from '../../type/events'

export async function computeDestroyedPoolsEvents(_job: Job, extrinsicId?: string): Promise<void> {
    const ctx = await dataHandlerContext()

    const pools = await ctx.store.find(NominationPool, {
        where: {
            state: PoolState.Destroying,
        },
        relations: {
            members: true,
        },
    })

    const currentEra = await ctx.store.find(Era, {
        order: {
            startBlock: 'DESC',
        },
        take: 1,
    })

    if (!currentEra.length) {
        throw new Error('No current era found')
    }

    for (const pool of pools) {
        // check pool for unbonding complete
        const unbondingMembers = pool.members.filter((member) => member.unbondingEras)
        const isStashBonded = pool.members.filter((member) => member.bonded !== 0n)
        if (unbondingMembers.length === 0 || unbondingMembers.length < pool.members.length - 1) {
            continue
        }

        const unbondingComplete = unbondingMembers.every((member) =>
            member.unbondingEras?.every((unbondingEra) => currentEra[0].index >= unbondingEra.era)
        )
        if (unbondingComplete) {
            if (unbondingMembers.length && isStashBonded.length === 1) {
                await Sns.getInstance().send({
                    id: `${pool.id}-${currentEra[0].index}`,
                    name: staking.eraPaid.name,
                    body: {
                        pool: pool.id,
                        era: currentEra[0].index,
                        membersUnbondingCompleted: true,
                        extrinsic: extrinsicId,
                    },
                })
            } else if (isStashBonded.length === 1 && unbondingMembers.length === 1) {
                await Sns.getInstance().send({
                    id: `${pool.id}-${currentEra[0].index}`,
                    name: staking.eraPaid.name,
                    body: {
                        pool: pool.id,
                        era: currentEra[0].index,
                        depositUnbondingCompleted: true,
                        extrinsic: extrinsicId,
                    },
                })
            }
        }
    }
}
