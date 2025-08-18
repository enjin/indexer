import { Not } from 'typeorm'
import { Block, CommonContext, EventItem } from '~/contexts'
import { Era, NominationPool, PoolState, TokenAccount } from '~/model'
import * as mappings from '~/pallet/index'
import { QueueUtils } from '~/queue'
import { Sns } from '~/util/sns'

export async function eraPaid(ctx: CommonContext, block: Block, item: EventItem) {
    const event = mappings.staking.events.eraPaid(item)

    const lastEra = await ctx.store.find<Era>(Era, {
        order: {
            index: 'DESC',
        },
        take: 1,
    })

    if (lastEra.length === 0) return undefined

    const era = lastEra[0]

    era.endAt = new Date(block.timestamp ?? 0)
    era.endBlock = block.height
    await ctx.store.save(era)

    // const chainInfo = await ctx.store.findOneByOrFail<ChainInfo>(ChainInfo, { blockNumber: block.height })

    // if (chainInfo.validator) {
    //     const validator = await ctx.store.findOneByOrFail<Validator>(Validator, { id: chainInfo.validator })
    //     if (!validator.accumulatedRewards) {
    //         validator.accumulatedRewards = 0n
    //     }
    //     validator.accumulatedRewards += event.validatorPayout
    //     await ctx.store.save(validator)
    // }

    const newEra = new Era({
        id: `${event.eraIndex + 1}`,
        index: event.eraIndex + 1,
        startAt: new Date(block.timestamp ?? 0),
        startBlock: block.height,
        nodeCount: 0,
    })

    await ctx.store.save(newEra)
    await QueueUtils.dispatchComputeValidators()
    await dispatchStakePoolsEvents(ctx, newEra.index, item)

    return mappings.staking.events.eraPaidEventModel(item, event)
}

async function dispatchStakePoolsEvents(ctx: CommonContext, eraIndex: number, item: EventItem) {
    const pools = await ctx.store.find(NominationPool, {
        where: {
            state: Not(PoolState.Destroyed),
        },
        relations: {
            members: {
                account: true,
            },
            degenToken: true,
        },
    })

    for (const pool of pools) {
        if (pool.state !== PoolState.Destroying) {
            const unbondingMembers = pool.members.filter((member) => member.unbondingEras && !member.isStash)
            for (const member of unbondingMembers) {
                if (member.unbondingEras?.length) {
                    const unbondingComplete = member.unbondingEras.some((unbondingEra) => eraIndex === unbondingEra.era)
                    if (!unbondingComplete) {
                        continue
                    }
                    const totalUnbondingBalance = member.unbondingEras.reduce((acc, unbondingEra) => {
                        if (eraIndex >= unbondingEra.era) {
                            return acc + unbondingEra.balance
                        }

                        return acc
                    }, 0n)

                    await Sns.getInstance().send({
                        id: `${pool.id}-${eraIndex}`,
                        name: 'NominationPools.MemberUnbonded',
                        body: {
                            pool: pool.id,
                            member: member.account.id,
                            balance: totalUnbondingBalance,
                            era: eraIndex,
                            extrinsic: item.extrinsic?.id,
                            name: pool.name,
                            tokenId: `2-${pool.tokenId}`,
                            state: pool.state,
                        },
                    })
                }
            }
        } else {
            const unbondingMembers = pool.members.filter((member) => member.unbondingEras)
            if (unbondingMembers.length === 0) {
                continue
            }

            const maxUnbondingEra = Math.max(
                ...unbondingMembers.flatMap(
                    (member) => member.unbondingEras?.map((unbondingEra) => unbondingEra.era) || []
                )
            )
            const unbondingComplete = eraIndex === maxUnbondingEra
            if (unbondingComplete) {
                const owner = await ctx.store.findOne(TokenAccount, {
                    where: {
                        balance: 1n,
                        token: {
                            id: `2-${pool.tokenId}`,
                        },
                    },
                    relations: {
                        account: true,
                    },
                })
                if (!owner) {
                    throw new Error('Owner not found')
                }
                const eventName = unbondingMembers.find((member) => member.isStash)
                    ? 'NominationPools.DepositUnbonded'
                    : 'NominationPools.AllMembersUnbonded'

                await Sns.getInstance().send({
                    id: `${pool.id}-${eraIndex}`,
                    name: eventName,
                    body: {
                        pool: pool.id,
                        era: eraIndex,
                        extrinsic: item.extrinsic?.id,
                        name: pool.name,
                        tokenId: `2-${pool.tokenId}`,
                        state: pool.state,
                        owner: owner.account.id,
                    },
                })
            }
        }
    }
}
