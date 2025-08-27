import { Block, CommonContext, EventItem } from '~/contexts'
import {
    CommissionPayment,
    Era,
    EraReward,
    Event as EventModel,
    NominationPool,
    PoolMember,
    PoolMemberRewards,
    PoolState,
    TokenAccount,
} from '~/model'
import { getOrCreateAccount } from '~/util/entities'
import * as mappings from '~/pallet/index'
import { EventHandlerResult } from '~/processor.handler'
import { rewardPaidEventModel } from '~/pallet/nomination-pools/events/reward-paid'
import { updatePool } from './pool'
import Big from 'big.js'
import processorConfig from '~/util/config'
import * as Sentry from '@sentry/node'
import { In, LessThan } from 'typeorm'
import { Sns } from '~/util/sns'
import { nominationPools } from '~/type/events'
import { computeEraApy } from '~/pallet/nomination-pools/processors/era-rewards-processed'
import { RewardPaid } from '~/pallet/nomination-pools/events/types'

async function getMembersBalance(block: Block, poolId: number): Promise<Record<string, bigint>> {
    type StorageEntry = [k: [bigint, bigint, string], v: TokenAccount | undefined]

    const result = await mappings.multiTokens.storage.tokenAccounts(block, {
        collectionId: 1n,
        tokenId: BigInt(poolId),
    })

    const accountMap: Record<string, bigint> = {}

    // Check if a result exists and is an array or iterable
    // Check if result is an async generator
    if (Symbol.asyncIterator in result) {
        for await (const batch of result as AsyncIterable<StorageEntry[]>) {
            for (const storageEntry of batch) {
                if (storageEntry[0][2] && storageEntry[0][1] == BigInt(poolId) && storageEntry[0][0] == 1n) {
                    const [[, , accountId], tokenAccount] = storageEntry
                    accountMap[accountId] = BigInt(tokenAccount?.balance || 0)
                }
            }
        }
    } else if (Symbol.iterator in result) {
        // Check if a result exists and is a sync iterable
        for (const storageEntry of result as StorageEntry[]) {
            if (storageEntry[0][2] && storageEntry[0][1] == BigInt(poolId) && storageEntry[0][0] == 1n) {
                const [[, , accountId], tokenAccount] = storageEntry
                accountMap[accountId] = BigInt(tokenAccount?.balance || 0)
            }
        }
    }

    return accountMap
}

async function getReward(
    ctx: CommonContext,
    existReward: EraReward | undefined,
    eventData: RewardPaid,
    pool: NominationPool
): Promise<EraReward> {
    let reward: EraReward

    if (existReward) {
        const newCommission = eventData.commission
            ? new CommissionPayment({
                  beneficiary: eventData.commission.beneficiary,
                  amount: eventData.commission.amount,
              })
            : null

        if (existReward.commission) {
            existReward.commission = new CommissionPayment({
                beneficiary: newCommission?.beneficiary,
                amount: existReward.commission.amount + (newCommission?.amount ?? 0n),
            })
        } else {
            existReward.commission = newCommission
        }
        existReward.reinvested = newCommission?.amount ?? 0n + eventData.reward
        existReward.rate = pool.rate

        await ctx.store.save(existReward)

        reward = existReward
    } else {
        reward = new EraReward({
            id: `${eventData.poolId}-${eventData.era}`,
            era: new Era({ id: eventData.era.toString() }),
            rate: pool.rate,
            commission: eventData.commission
                ? new CommissionPayment({
                      beneficiary: eventData.commission.beneficiary,
                      amount: eventData.commission.amount,
                  })
                : null,
            pool,
            apy: 0,
            averageApy: 0,
            active: pool.balance.active,
            reinvested: eventData.reward + (eventData.commission?.amount ?? 0n),
            changeInRate: 0n,
        })
    }

    return reward
}

async function calculateMemberRewards(
    ctx: CommonContext,
    eventData: RewardPaid,
    pool: NominationPool,
    memberBalances: Record<string, bigint>,
    reward: EraReward
) {
    const memberIds = Object.keys(memberBalances).map((accountId) => `${pool.id}-${accountId}`)
    const members = await ctx.store.find(PoolMember, {
        relations: {
            account: true,
        },
        where: {
            id: In(memberIds), // NOTE: This is a workaround to include all accounts with balances, as some accounts may not be returned by isActive.
        },
    })

    const totalPoolPoints = (pool.balance.active * 10n ** 18n) / pool.rate

    const inserts: PoolMemberRewards[] = []

    for (const member of members) {
        // The previous reward is needed in case of duplicate rewards (there could be 2 events of RewardPaid from 2 validators or more)
        // therefore the previous reward need to be eliminated from the accumulated rewards
        let previousReward: bigint = 0n
        const pmrId = `${member.id}-${eventData.era}`

        const existingReward = await ctx.store.findOneBy(PoolMemberRewards, {
            id: pmrId,
        })

        if (existingReward) {
            previousReward = existingReward.rewards
        }

        const points = memberBalances[member.account.id] ?? 0n
        const eraRewards = (points * reward.reinvested) / totalPoolPoints
        const newAccumulated = (member.accumulatedRewards || 0n) + eraRewards - previousReward

        member.accumulatedRewards = newAccumulated

        const pmrData = {
            id: pmrId,
            pool,
            member,
            reward,
            points,
            rewards: eraRewards,
            accumulatedRewards: newAccumulated,
        }

        inserts.push(new PoolMemberRewards(pmrData))
    }

    return { inserts, members }
}

async function updatePoolApy(
    ctx: CommonContext,
    eventData: RewardPaid,
    pool: NominationPool,
    reward: EraReward
): Promise<{ pool: NominationPool; reward: EraReward }> {
    const eraRewards = await ctx.store.find(EraReward, {
        where: {
            pool: { id: pool.id },
            era: { index: LessThan(eventData.era) },
        },
        relations: {
            era: true,
        },
        order: { era: { index: 'desc' } },
        take: 14,
    })

    const changeInRate =
        eraRewards.length > 0
            ? Big(pool.rate.toString()).minus(Big(eraRewards[0].rate.toString()))
            : Big(pool.rate.toString()).minus(10 ** 18)

    reward.changeInRate = BigInt(changeInRate.toString())

    let apy: Big.Big

    if (eraRewards.length === 0) {
        // First era for this pool
        const rate = Big(pool.rate.toString())
        const decimals = Big(10).pow(18)
        apy = rate.div(decimals).pow(processorConfig.erasPerYear).sub(1).mul(100)
        reward.apy = apy.toNumber()
    } else {
        // Calculate APY based on balance change from previous era
        const previousBalance = Big(eraRewards[0].active.toString())
        const newBalance = Big(reward.reinvested.toString()).plus(previousBalance)

        const currentApy = newBalance.div(previousBalance).pow(processorConfig.erasPerYear).sub(1).mul(100)
        reward.apy = currentApy.toNumber()

        eraRewards.unshift(reward)
        apy = computeEraApy(eraRewards, pool.apy)
    }

    if (
        apy.toNumber() < 0 ||
        apy.toNumber() > 200 ||
        (pool.apy > 1 && Big(apy).minus(pool.apy).times(2).div(Big(apy).plus(pool.apy)).times(100).abs().gt(50))
        // && block.height > processorConfig.lastBlockHeight
    ) {
        Sentry.captureMessage(`Pool ${pool.id} has apy: ${apy.toNumber()}%, previous: ${pool.apy}%`, 'warning')
    }

    pool.apy = Math.max(apy.toNumber(), 0)
    reward.averageApy = apy.toNumber()

    if (eventData.commission) {
        pool.accumulatedCommission = (pool.accumulatedCommission ?? 0n) + eventData.commission.amount
    }

    return { pool, reward }
}

export async function rewardPaid(ctx: CommonContext, block: Block, item: EventItem): Promise<EventModel | undefined> {
export async function rewardPaid(ctx: CommonContext, block: Block, item: EventItem): Promise<EventHandlerResult> {
    if (!item.extrinsic) return undefined

    const eventData = mappings.nominationPools.events.rewardPaid(item)

    const stashValidator = await getOrCreateAccount(ctx, eventData.validatorStash)

    if (!nominationPools.rewardPaid.v1060.is(item)) {
        return rewardPaidEventModel(item, eventData, stashValidator.id)
    }

    let reward: EraReward | undefined = undefined

    const [existReward, memberBalances, era] = await Promise.all([
        ctx.store.findOneBy(EraReward, { id: `${eventData.poolId}-${eventData.era}` }),
        getMembersBalance(block, eventData.poolId),
        ctx.store.findOneBy(Era, { id: eventData.era.toString() }),
    ])

    let pool = await updatePool(ctx, block, eventData.poolId.toString())

    if (pool.state === PoolState.Destroying) {
        return undefined
    }

    reward = await getReward(ctx, existReward, eventData, pool)

    if (!era) {
        await ctx.store.save(
            new Era({
                id: eventData.era.toString(),
                index: eventData.era,
                startAt: new Date(block.timestamp ?? 0),
                startBlock: block.height,
                nodeCount: 0,
            })
        )
    }

    const poolApyRes = await updatePoolApy(ctx, eventData, pool, reward)

    pool = poolApyRes.pool
    reward = poolApyRes.reward

    const { inserts, members } = await calculateMemberRewards(ctx, eventData, pool, memberBalances, reward)

    // Save the reward first is necessary for pmr
    await ctx.store.insert(reward)

    await Promise.all([ctx.store.save(pool), ctx.store.save(members), inserts.length && ctx.store.insert(inserts)])

    await Sns.getInstance().send({
        id: item.id,
        name: item.name,
        body: {
            pool: eventData.poolId.toString(),
            era: eventData.era,
            rate: pool.rate,
            extrinsic: item.extrinsic.id,
            name: pool.name,
            tokenId: `2-${pool.tokenId}`,
        },
    })

    return rewardPaidEventModel(item, eventData, stashValidator.id)
}
