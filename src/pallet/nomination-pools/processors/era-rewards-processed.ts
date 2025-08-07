import Big from 'big.js'
import * as Sentry from '@sentry/node'
import {
    BonusCycle,
    CommissionPayment,
    Era,
    EraReward,
    Event as EventModel,
    PoolMember,
    PoolMemberRewards,
    PoolState,
} from '~/model'
import { updatePool } from '~/pallet/nomination-pools/processors/pool'
import { Block, CommonContext, EventItem } from '~/contexts'
import { Sns } from '~/util/sns'
import processorConfig from '~/util/config'
import * as mappings from '~/pallet/index'
import { TokenAccount } from '~/pallet/multi-tokens/storage/types'
import { needEarlyBirdMerge } from '~/util/earlyBird'
import { In } from 'typeorm'

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

export async function eraRewardsProcessed(
    ctx: CommonContext,
    block: Block,
    item: EventItem
): Promise<EventModel | undefined> {
    if (!item.extrinsic) return undefined

    const data = mappings.nominationPools.events.eraRewardsProcessed(item)

    const [existReward, memberBalances, era] = await Promise.all([
        ctx.store.findOneBy(EraReward, { id: `${data.poolId}-${data.era}` }),
        getMembersBalance(block, data.poolId),
        ctx.store.findOneBy(Era, { id: data.era.toString() }),
    ])
    const pool = await updatePool(ctx, block, data.poolId.toString())

    if ('bonusCycleEnded' in data && data.bonusCycleEnded) {
        const poolInfo = await mappings.nominationPools.storage.bondedPools(block, data.poolId)
        if (!poolInfo) throw new Error('Pool info not found')
        if (poolInfo.bonusCycle !== undefined) {
            pool.bonusCycle = new BonusCycle({
                start: poolInfo.bonusCycle.start,
                end: poolInfo.bonusCycle.end,
                previousStart: poolInfo.bonusCycle.previousStart,
                pendingDuration: poolInfo.bonusCycle.pendingDuration,
            })
            await ctx.store.save(pool)
        }
    }

    if (existReward) {
        existReward.bonus = data.bonus
        existReward.commission = data.commission
            ? new CommissionPayment({
                  beneficiary: data.commission.beneficiary,
                  amount: data.commission.amount,
              })
            : null
        existReward.reinvested = data.reinvested
        existReward.rate = pool.rate

        await ctx.store.save(existReward)
        if (data.commission) {
            await ctx.store.save(pool)
        }
        return undefined
    }

    if (!era) {
        await ctx.store.save(
            new Era({
                id: data.era.toString(),
                index: data.era,
                startAt: new Date(block.timestamp ?? 0),
                startBlock: block.height,
                nodeCount: 0,
            })
        )
    }

    if (pool.state === PoolState.Destroying) {
        return undefined
    }

    // Query for previous era rewards BEFORE inserting the new one to avoid race condition
    const eraRewards = await ctx.store.find(EraReward, {
        where: { pool: { id: pool.id } },
        relations: {
            era: true,
        },
        order: { era: { index: 'desc' } },
        take: 14,
    })

    // Calculate changeInRate consistently: current rate - previous rate
    // For first era, use 1 as baseline (no previous rate to compare against)
    const changeInRate =
        eraRewards.length > 0
            ? Big(pool.rate.toString()).minus(Big(eraRewards[0].rate.toString()))
            : Big(pool.rate.toString()).minus(10 ** 18)

    const reward = new EraReward({
        id: `${data.poolId}-${data.era}`,
        era: new Era({ id: data.era.toString() }),
        bonus: data.bonus,
        rate: pool.rate,
        commission: data.commission
            ? new CommissionPayment({
                  beneficiary: data.commission.beneficiary,
                  amount: data.commission.amount,
              })
            : null,
        pool,
        apy: 0,
        averageApy: 0,
        active: pool.balance.active,
        changeInRate: BigInt(changeInRate.toString()),
        reinvested: data.reinvested,
    })

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

    if (data.commission) {
        pool.accumulatedCommission = (pool.accumulatedCommission ?? 0n) + data.commission.amount
    }

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

    // Check if we need to merge with early bird rewards
    const earlyBirdMergeNeeded = await needEarlyBirdMerge(ctx, data.era)

    // Use inserts and updates as inserts is faster than saves
    const inserts: PoolMemberRewards[] = []
    const updates: PoolMemberRewards[] = []

    for (const member of members) {
        const points = memberBalances[member.account.id] ?? 0n
        const eraRewards = (points * data.reinvested) / totalPoolPoints
        const newAccumulated = (member.accumulatedRewards || 0n) + eraRewards

        member.accumulatedRewards = newAccumulated

        const pmrId = `${member.id}-${data.era}`
        const pmrData = {
            id: pmrId,
            pool,
            member,
            reward,
            points,
            rewards: eraRewards,
            accumulatedRewards: newAccumulated,
        }

        if (earlyBirdMergeNeeded) {
            const existing = await ctx.store.findOneBy(PoolMemberRewards, { id: pmrId })
            if (existing) {
                // update existing record as it was created with empty values
                existing.reward = reward
                existing.points = points
                existing.rewards += eraRewards // it was set in the minted so we increment with the era rewards now
                existing.accumulatedRewards = newAccumulated
                updates.push(existing)
                continue
            }
        }
        inserts.push(new PoolMemberRewards(pmrData))
    }

    // Save the reward first is necessary for pmr
    await ctx.store.insert(reward)

    await Promise.all([
        ctx.store.save(pool),
        ctx.store.save(members),
        inserts.length && ctx.store.insert(inserts),
        updates.length && ctx.store.save(updates),
    ])

    await Sns.getInstance().send({
        id: item.id,
        name: item.name,
        body: {
            pool: data.poolId.toString(),
            era: data.era,
            rate: pool.rate,
            extrinsic: item.extrinsic.id,
            name: pool.name,
            tokenId: `2-${pool.tokenId}`,
        },
    })

    return mappings.nominationPools.events.eraRewardsProcessedEventModel(item, data, pool.rate, pool.tokenId)
}

export const discardEra = (apy: number, totalApy: number) => {
    if (totalApy === 0) {
        return false
    }
    const apyDifferencePercent = Math.abs((apy - totalApy) / totalApy) * 100
    return apyDifferencePercent >= 50
}

export const computeEraApy = (eraRewards: EraReward[], poolApy: number): Big => {
    if (eraRewards.length === 1) {
        return Big(eraRewards[0].apy)
    }

    const validApys = eraRewards.filter((era) => !discardEra(era.apy, poolApy))
    const sumOfApy = validApys.reduce((acc, era) => acc + era.apy, 0)

    return Big(sumOfApy).div(validApys.length)
}
