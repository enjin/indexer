import Big from 'big.js'
import * as Sentry from '@sentry/node'
import { groupBy } from 'lodash'
import {
    BonusCycle,
    CommissionPayment,
    Era,
    EraReward,
    Event as EventModel,
    PoolMember,
    PoolMemberRewards,
} from '../../../model'
import { updatePool } from './pool'
import { Block, CommonContext, EventItem } from '../../../contexts'
import { Sns } from '../../../utils/sns'
import processorConfig from '../../../utils/config'
import * as mappings from '../../index'

async function getMembersBalance(block: Block, poolId: number) {
    return await mappings.multiTokens.storage.tokenAccounts(block, { collectionId: 1n, tokenId: BigInt(poolId) })
}

export async function eraRewardsProcessed(
    ctx: CommonContext,
    block: Block,
    item: EventItem
): Promise<EventModel | undefined> {
    if (!item.extrinsic) return undefined

    const eventData = mappings.nominationPools.events.eraRewardsProcessed(item)

    const [existReward, memberBalances, era] = await Promise.all([
        ctx.store.findOneBy(EraReward, { id: `${eventData.poolId}-${eventData.era}` }),
        getMembersBalance(block, eventData.poolId),
        ctx.store.findOneBy(Era, { id: eventData.era.toString() }),
    ])
    const pool = await updatePool(ctx, block, eventData.poolId.toString())

    if ('bonusCycleEnded' in eventData && eventData.bonusCycleEnded) {
        const poolInfo = await mappings.nominationPools.storage.bondedPools(block, eventData.poolId)
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
        existReward.bonus = eventData.bonus
        existReward.commission = eventData.commission
            ? new CommissionPayment({
                  beneficiary: eventData.commission.beneficiary,
                  amount: eventData.commission.amount,
              })
            : null
        existReward.reinvested = eventData.reinvested
        existReward.rate = pool.rate

        await ctx.store.save(existReward)
        return undefined
    }

    if (!era) {
        await ctx.store.save(
            new Era({
                id: eventData.era.toString(),
                index: eventData.era,
                startAt: new Date(block.timestamp ?? 0),
                startBlock: block.height,
            })
        )
    }

    const reward = new EraReward({
        id: `${eventData.poolId}-${eventData.era}`,
        era: new Era({ id: eventData.era.toString() }),
        bonus: eventData.bonus,
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
        changeInRate: 0n,
        reinvested: eventData.reinvested,
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

    const members = await ctx.store.find(PoolMember, { relations: { account: true }, where: { pool: { id: pool.id } } })
    const memberBalanceMap = groupBy(
        memberBalances.map((m) => {
            return {
                id: typeof m[0][2] === 'bigint' ? '' : m[0][2],
                balance: m[1]?.balance ?? 0n,
            }
        }),
        'id'
    )
    const rewardPromise = members.map((member) => {
        return new PoolMemberRewards({
            id: `${member.id}-${reward.id}`,
            member,
            reward,
            pool,
            points: memberBalanceMap[member.account.id].at(0)?.balance ?? 0n,
        })
    })

    await Promise.all([ctx.store.insert(rewardPromise), ctx.store.save(pool), ctx.store.save(reward)])

    await Sns.getInstance().send({
        id: item.id,
        name: item.name,
        body: {
            pool: eventData.poolId.toString(),
            era: eventData.era,
            rate: pool.rate,
            extrinsic: item.extrinsic.id,
        },
    })

    return mappings.nominationPools.events.eraRewardsProcessedEventModel(item, eventData, pool.rate)
}
