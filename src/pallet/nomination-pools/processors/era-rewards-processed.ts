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

async function getMembersBalance(block: Block, poolId: number): Promise<Record<string, bigint>> {
    const result = await mappings.multiTokens.storage.tokenAccounts(block, {
        collectionId: 1n,
        tokenId: BigInt(poolId),
    })

    const accountMap: Record<string, bigint> = {}

    // Check if a result exists and is an array or iterable
    if (typeof result[Symbol.iterator] === 'function') {
        for (const pair of result) {
            if (Array.isArray(pair) && pair[0][2]) {
                const key = pair[0]
                const value = pair[1]
                accountMap[key[2]] = value?.balance ?? 0n
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
        changeInRate: 0n,
        reinvested: data.reinvested,
    })
    await ctx.store.insert(reward)
    const eraRewards = await ctx.store.find(EraReward, {
        where: { pool: { id: pool.id } },
        relations: {
            era: true,
        },
        order: { era: { index: 'desc' } },
        take: 14,
    })

    let apy: Big.Big

    if (eraRewards.length === 1) {
        const rate = Big(eraRewards[0].rate.toString())
        const decimals = Big(10).pow(18)
        const changeInRate = rate.minus(decimals)
        apy = rate.div(decimals).pow(processorConfig.erasPerYear).sub(1).mul(100)
        reward.changeInRate = BigInt(changeInRate.toString())
        reward.apy = apy.toNumber()
    } else {
        const previousBalance = Big(eraRewards[1].active.toString())
        const newBalance = Big(reward.reinvested.toString()).plus(previousBalance)

        const currentApy = newBalance.div(previousBalance).pow(processorConfig.erasPerYear).sub(1).mul(100)
        reward.apy = currentApy.toNumber()

        const lastRewards = Big(eraRewards[0].rate.toString())
        const prevRewards = Big(eraRewards[1].rate.toString())
        const changeInRate = lastRewards.minus(prevRewards)
        reward.changeInRate = BigInt(changeInRate.toString())

        // take the average apy of the last n eras
        const sumOfRewards = eraRewards.reduce((acc, era) => {
            return acc + era.apy
        }, 0)
        // add the current apy to the sum because the current apy is 0 in the eraRewards
        apy = new Big(sumOfRewards).plus(reward.apy).div(eraRewards.length)
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

    const members = await ctx.store.find(PoolMember, {
        relations: { account: true },
        where: { pool: { id: pool.id }, isActive: true },
    })

    const rewardPromise = members.map((member) => {
        let points = 0n
        // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
        if (memberBalances[member.account.id] !== undefined) {
            points = memberBalances[member.account.id]
        }

        return new PoolMemberRewards({
            id: `${member.id}-${reward.id}`,
            member,
            reward,
            pool,
            points,
        })
    })

    const accumulatedRewardsPromise = members.map((member) => {
        if (member.accumulatedRewards === undefined || member.accumulatedRewards === null) {
            member.accumulatedRewards = 0n
        }

        let points = 0n
        if (memberBalances[member.account.id] !== undefined) {
            points = memberBalances[member.account.id]
        }

        const memberReward = Big(points.toString()).times(reward.changeInRate.toString())
        member.accumulatedRewards = BigInt(Big(member.accumulatedRewards.toString()).plus(memberReward).toString())

        return member
    })

    await Promise.all([
        ctx.store.insert(rewardPromise),
        ctx.store.save(pool),
        ctx.store.save(reward),
        ctx.store.save(accumulatedRewardsPromise),
    ])

    await Sns.getInstance().send({
        id: item.id,
        name: item.name,
        body: {
            pool: data.poolId.toString(),
            era: data.era,
            rate: pool.rate,
            extrinsic: item.extrinsic.id,
        },
    })

    return mappings.nominationPools.events.eraRewardsProcessedEventModel(item, data, pool.rate)
}
