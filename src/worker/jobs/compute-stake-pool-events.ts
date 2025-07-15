import { Era, NominationPool, PoolState, TokenAccount } from '~/model'
import { dataHandlerContext } from '~/contexts'
import { Job } from 'bullmq'
import { Sns } from '~/util/sns'
import { staking } from '~/type/events'
import { DataService } from '~/util/data'

export async function computeStakePoolsEvents(_job: Job, extrinsicId?: string): Promise<void> {
    const ctx = await dataHandlerContext()

    const dataService = DataService.getInstance()
    await dataService.initialize()

    const pools = await ctx.store.find(NominationPool, {
        relations: {
            members: {
                account: true,
            },
            degenToken: true,
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
        if (pool.state !== PoolState.Destroying) {
            const unbondingMembers = pool.members.filter((member) => member.unbondingEras)
            await _job.log(`Processing ${unbondingMembers.length} unbonding members for pool ${pool.id}`)
            for (const member of unbondingMembers) {
                if (member.unbondingEras?.length) {
                    const unbondingComplete = member.unbondingEras.some(
                        (unbondingEra) => currentEra[0].index >= unbondingEra.era
                    )
                    const totalUnbondingBalance = member.unbondingEras.reduce((acc, unbondingEra) => {
                        if (currentEra[0].index >= unbondingEra.era) {
                            return acc + unbondingEra.balance
                        }

                        return acc
                    }, 0n)
                    if (unbondingComplete) {
                        await Sns.getInstance().send({
                            id: `${pool.id}-${currentEra[0].index}`,
                            name: staking.eraPaid.name,
                            body: {
                                pool: pool.id,
                                member: member.account.id,
                                balance: totalUnbondingBalance,
                                era: currentEra[0].index,
                                memberUnbondingCompleted: true,
                                extrinsic: extrinsicId,
                                name: pool.name,
                                tokenId: pool.degenToken.id,
                                poolState: pool.state,
                            },
                        })
                    }
                }
            }
        } else {
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
                const owner = await ctx.store.findOne(TokenAccount, {
                    where: {
                        balance: 1n,
                        token: {
                            id: pool.degenToken.id,
                        },
                    },
                    relations: {
                        account: true,
                    },
                })
                if (!owner) {
                    throw new Error('Owner not found')
                }
                if (unbondingMembers.length && isStashBonded.length === 1) {
                    await Sns.getInstance().send({
                        id: `${pool.id}-${currentEra[0].index}`,
                        name: staking.eraPaid.name,
                        body: {
                            pool: pool.id,
                            era: currentEra[0].index,
                            membersUnbondingCompleted: true,
                            extrinsic: extrinsicId,
                            name: pool.name,
                            tokenId: pool.degenToken.id,
                            state: pool.state,
                            owner: owner.account.id,
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
                            name: pool.name,
                            tokenId: pool.degenToken.id,
                            state: pool.state,
                            owner: owner.account.id,
                        },
                    })
                }
            }
        }
    }

    await _job.log(`Processed stake pool rewards for ${pools.length} pools`)
}
