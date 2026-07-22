import { EarlyBirdMintEvent, Era, EraReward, NominationPool, PoolMember, PoolMemberRewards } from '~/model'
import { CommonContext, dataHandlerContext } from '~/contexts'
import { Job } from 'bullmq'
import { In, MoreThan } from 'typeorm'
import Rpc from '~/util/rpc'
import { encodeAddress, decodeAddress } from '@polkadot/util-crypto'
import { decode } from '@subsquid/ss58'
import { calculatePoolMemberReward } from '~/pallet/nomination-pools/member-rewards'

async function getMembersBalance(blockNumber: number, poolId: number): Promise<Record<string, bigint>> {
    const { api } = await Rpc.getInstance()

    // Get block hash at the specific block number
    const blockHash = await api.rpc.chain.getBlockHash(blockNumber)

    // Query tokenAccounts at that block
    const entries = await api.query.multiTokens.tokenAccounts.entriesAt(blockHash, 1n, BigInt(poolId))

    const accountMap: Record<string, bigint> = {}

    for (const [key, value] of entries) {
        const [, , accountId] = key.args
        const tokenAccount = value.toJSON() as { balance: string } | null

        if (tokenAccount && accountId) {
            const address = encodeAddress(decodeAddress(accountId.toString()), 2135)
            accountMap[address] = BigInt(tokenAccount.balance || 0)
        }
    }

    return accountMap
}

async function calculateMemberRewards(
    ctx: CommonContext,
    eraIndex: number,
    pool: NominationPool,
    memberBalances: Record<string, bigint>,
    reward: EraReward,
    _job: Job
) {
    const memberIds = Object.keys(memberBalances).map((accountId) => `${pool.id}-${decode(accountId).bytes}`)
    const members = await ctx.store.find(PoolMember, {
        relations: {
            account: true,
        },
        where: {
            id: In(memberIds), // NOTE: This is a workaround to include all accounts with balances, as some accounts may not be returned by isActive.
        },
    })

    const inserts: PoolMemberRewards[] = []
    const rewardDeltas = new Map<string, bigint>()
    const earlyBirdRewards = members.length
        ? await ctx.store.find(EarlyBirdMintEvent, {
              where: {
                  era: { id: eraIndex.toString() },
                  pool: { id: pool.id },
                  poolMember: { id: In(members.map((member) => member.id)) },
              },
              relations: { poolMember: true },
          })
        : []
    const earlyBirdRewardsByMember = new Map<string, bigint>()

    for (const earlyBirdReward of earlyBirdRewards) {
        const current = earlyBirdRewardsByMember.get(earlyBirdReward.poolMember.id) ?? 0n
        earlyBirdRewardsByMember.set(earlyBirdReward.poolMember.id, current + earlyBirdReward.reward)
    }

    for (const member of members) {
        // The previous reward is needed in case of duplicate rewards (there could be 2 events of RewardPaid from 2 validators or more)
        // therefore the previous reward need to be eliminated from the accumulated rewards
        let previousReward: bigint = 0n
        const pmrId = `${member.id}-${eraIndex}`

        const existingReward = await ctx.store.findOneBy(PoolMemberRewards, {
            id: pmrId,
        })

        if (existingReward) {
            previousReward = existingReward.rewards
        }

        const points = memberBalances[member.account.id] ?? 0n
        const stakingRewards = calculatePoolMemberReward(points, reward.changeInRate)
        const eraRewards = stakingRewards + (earlyBirdRewardsByMember.get(member.id) ?? 0n)
        const rewardDelta = eraRewards - previousReward
        const newAccumulated = (member.accumulatedRewards || 0n) + rewardDelta
        const historicalAccumulated = existingReward ? existingReward.accumulatedRewards + rewardDelta : newAccumulated

        member.accumulatedRewards = newAccumulated
        rewardDeltas.set(member.id, rewardDelta)

        const pmrData = {
            id: pmrId,
            eraIndex,
            pool,
            member,
            reward,
            points,
            rewards: eraRewards,
            accumulatedRewards: historicalAccumulated,
        }

        inserts.push(new PoolMemberRewards(pmrData))
    }

    const changedMemberIds = [...rewardDeltas.entries()]
        .filter(([, rewardDelta]) => rewardDelta !== 0n)
        .map(([memberId]) => memberId)
    const laterRewards = changedMemberIds.length
        ? await ctx.store.find(PoolMemberRewards, {
              where: {
                  member: { id: In(changedMemberIds) },
                  eraIndex: MoreThan(eraIndex),
              },
              relations: { member: true },
          })
        : []

    for (const laterReward of laterRewards) {
        laterReward.accumulatedRewards += rewardDeltas.get(laterReward.member.id) ?? 0n
    }

    return { inserts, members, laterRewards }
}

export async function computePoolMemberRewards(_job: Job, eraIndex: number): Promise<void> {
    const ctx = await dataHandlerContext()

    await _job.updateProgress(10)

    const era = await ctx.store.findOne(Era, {
        where: { index: eraIndex },
    })

    if (!era) {
        throw new Error(`Era not found: ${eraIndex}`)
    }

    await _job.updateProgress(25)

    const eraRewards = await ctx.store.find(EraReward, {
        where: { era: { index: eraIndex } },
        relations: {
            pool: true,
        },
    })

    if (eraRewards.length === 0) {
        throw new Error(`Era rewards not found: ${eraIndex}`)
    }

    await _job.updateProgress(40)

    const totalRewards = eraRewards.length
    let processed = 0

    for (const eraReward of eraRewards) {
        const pool = eraReward.pool

        if (!pool) {
            throw new Error(`Pool not found: ${eraReward.pool?.id}`)
        }

        const memberBalances = await getMembersBalance(era.startBlock, parseInt(pool.id))

        const { inserts, members, laterRewards } = await calculateMemberRewards(
            ctx,
            eraIndex,
            pool,
            memberBalances,
            eraReward,
            _job
        )

        if (inserts.length > 0) {
            await ctx.store.save(inserts)
        }

        if (members.length > 0) {
            await ctx.store.save(members)
        }

        if (laterRewards.length > 0) {
            await ctx.store.save(laterRewards)
        }

        processed++
        // Update progress (40% -> 90%)
        const progress = Math.min(90, 40 + Math.floor((processed / totalRewards) * 50))
        await _job.updateProgress(progress)
    }

    await _job.updateProgress(100)

    // const member = await ctx.store.findOne(PoolMember, {
    //     where: { id },
    //     relations: {
    //         rewards: {
    //             reward: {
    //                 era: true,
    //             },
    //         },
    //     },
    //     order: {
    //         rewards: {
    //             reward: {
    //                 era: {
    //                     index: 'ASC',
    //                 },
    //             },
    //         },
    //     },
    // })

    // if (!member) {
    //     throw new Error(`Member not found: ${id}`)
    // }

    // const totalRewards = member.rewards.reduce((acc, reward) => {
    //     return acc + (reward.points * reward.reward.changeInRate) / 10n ** 18n
    // }, 0n)

    // member.accumulatedRewards = totalRewards
    // await ctx.store.save(member)

    // await _job.log(`Computed rewards for ${member.id}`)
}
