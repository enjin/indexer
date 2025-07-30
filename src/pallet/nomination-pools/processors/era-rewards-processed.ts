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

        apy = computeEraApy(eraRewards, reward)
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

    const members = await ctx.store.find(PoolMember, {
        relations: { account: true },
        where: { pool: { id: pool.id }, isActive: true },
    })

    const poolMemberRewards = members.map((member) => {
        const points = memberBalances[member.account.id] ?? 0n
        const eraRewards = (points * reward.changeInRate) / 10n ** 18n
        const newAccumulated = (member.accumulatedRewards || 0n) + eraRewards

        member.accumulatedRewards = newAccumulated

        return new PoolMemberRewards({
            id: `${member.id}-${reward.id}`,
            member,
            reward,
            pool,
            points,
            accumulatedRewards: newAccumulated,
            rewards: eraRewards,
        })
    })

    await ctx.store.insert(reward)

    await Promise.all([ctx.store.insert(poolMemberRewards), ctx.store.save(pool), ctx.store.save(members)])

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

    return mappings.nominationPools.events.eraRewardsProcessedEventModel(item, data, pool.rate)
}

export const discardEra = (apy: number, previousEraApy: number) => {
    const apyDifferencePercent = Math.abs((apy - previousEraApy) / previousEraApy) * 100
    return apyDifferencePercent >= 50
}

export const computeEraApy = (eraRewards: EraReward[], reward: EraReward | undefined | null): Big => {
    if (reward) {
        eraRewards.unshift(reward)
    }

    const { sumOfApy } = eraRewards.reduce(
        (acc, era, i) => {
            if (discardEra(era.apy, acc.previousValidApy) && i > 0) {
                return {
                    sumOfApy: acc.sumOfApy + acc.previousValidApy,
                    previousValidApy: acc.previousValidApy,
                }
            }

            return { sumOfApy: acc.sumOfApy + era.apy, previousValidApy: era.apy }
        },
        { sumOfApy: 0, previousValidApy: 0 }
    )

    return Big(sumOfApy).div(eraRewards.length)
}
