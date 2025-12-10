import {
    Era,
    NominationPool,
    Event as EventModel,
    NominationPoolsRewardPaid,
    EraReward,
    CommissionPayment,
} from '~/model'
import { CommonContext, connectionManager, dataHandlerContext } from '~/contexts'
import { Job } from 'bullmq'
import { In, LessThan } from 'typeorm'
import Big from 'big.js'
import processorConfig from '~/util/config'
import { computeEraApy } from '~/pallet/nomination-pools/processors'

async function updatePoolApy(
    ctx: CommonContext,
    pool: NominationPool,
    reward: EraReward,
    eraIndex: number
): Promise<{ pool: NominationPool; reward: EraReward }> {
    const eraRewards = await ctx.store.find(EraReward, {
        where: {
            pool: { id: pool.id },
            era: { index: LessThan(eraIndex) },
        },
        relations: {
            era: true,
        },
        order: { era: { index: 'desc' } },
        take: 30,
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

    pool.apy = Math.max(apy.toNumber(), 0)
    reward.averageApy = apy.toNumber()

    // if (eventData.commission) {
    //     pool.accumulatedCommission = (pool.accumulatedCommission ?? 0n) + eventData.commission.amount
    // }

    return { pool, reward }
}

export async function computeEraRewards(_job: Job, eraIndex: number): Promise<void> {
    const ctx = await dataHandlerContext()
    const em = await connectionManager()

    const era = await ctx.store.findOne(Era, {
        where: { index: eraIndex },
    })

    if (!era) {
        throw new Error(`Era not found: ${eraIndex}`)
    }

    const newEraIndex = eraIndex + 1

    let newEra = await ctx.store.findOne(Era, {
        where: { index: newEraIndex },
    })

    if (!newEra) {
        newEra = new Era({
            id: newEraIndex.toString(),
            index: newEraIndex,
            startAt: new Date(era.startAt),
            startBlock: era.startBlock,
            nodeCount: era.nodeCount,
        })
        await ctx.store.save(newEra)
    }

    const rewardEvents = await em
        .getRepository(EventModel)
        .createQueryBuilder('event')
        .where('event.name = :name', { name: 'NominationPoolsRewardPaid' })
        .andWhere("(event.data->>'era')::int = :era", { era: eraIndex })
        .getMany()

    // Group reward events by pool ID
    const groupedByPool = new Map<string, NominationPoolsRewardPaid[]>()

    for (const rewardEvent of rewardEvents) {
        const rewardEventData = rewardEvent.data as NominationPoolsRewardPaid
        const poolId = rewardEventData.poolId.toString()

        if (!groupedByPool.has(poolId)) {
            groupedByPool.set(poolId, [])
        }
        groupedByPool.get(poolId)!.push(rewardEventData)
    }

    const poolIds = Array.from(groupedByPool.keys())
    const eraRewardIds = poolIds.map((poolId) => `${poolId}-${newEraIndex.toString()}`)

    const [existingEraRewards, pools] = await Promise.all([
        ctx.store.find(EraReward, { where: { id: In(eraRewardIds) } }),
        ctx.store.find(NominationPool, { where: { id: In(poolIds) } }),
    ])

    const existingEraRewardsMap = new Map(existingEraRewards.map((er) => [er.id, er]))
    const poolsMap = new Map(pools.map((p) => [p.id, p]))

    const eraRewardsToSave: EraReward[] = []
    const poolsToSave: NominationPool[] = []
    for (const [poolId, events] of groupedByPool) {
        let pool = poolsMap.get(poolId)
        if (!pool) continue

        // Calculate accumulated rewards for this pool
        let accumulatedRewards = 0n
        let accumulatedCommission = 0n
        let commissionBeneficiary: string | undefined

        for (const eventData of events) {
            accumulatedRewards += eventData.reward + (eventData.commission?.amount ?? 0n)
            if (eventData.commission) {
                accumulatedCommission += eventData.commission.amount
                commissionBeneficiary = eventData.commission.beneficiary
            }
        }

        const eraRewardId = `${poolId}-${newEraIndex}`
        let eraReward = existingEraRewardsMap.get(eraRewardId)

        if (eraReward) {
            // Update existing EraReward
            eraReward.reinvested = accumulatedRewards
            eraReward.bonus = eraReward.bonus ?? 0n
            if (accumulatedCommission > 0n) {
                if (eraReward.commission) {
                    eraReward.commission = new CommissionPayment({
                        beneficiary: commissionBeneficiary,
                        amount: eraReward.commission.amount + accumulatedCommission,
                    })
                } else {
                    eraReward.commission = new CommissionPayment({
                        beneficiary: commissionBeneficiary,
                        amount: accumulatedCommission,
                    })
                }
            }
        } else {
            // Create new EraReward
            eraReward = new EraReward({
                id: eraRewardId,
                era: newEra,
                pool,
                rate: pool.rate,
                active: pool.balance.active,
                reinvested: accumulatedRewards,
                bonus: 0n,
                commission:
                    accumulatedCommission > 0n
                        ? new CommissionPayment({
                              beneficiary: commissionBeneficiary,
                              amount: accumulatedCommission,
                          })
                        : null,
                apy: 0,
                averageApy: 0,
                changeInRate: 0n,
            })
        }

        const poolApyRes = await updatePoolApy(ctx, pool, eraReward, newEraIndex)
        pool = poolApyRes.pool
        eraReward = poolApyRes.reward

        eraRewardsToSave.push(eraReward)
        poolsToSave.push(pool)
    }

    if (eraRewardsToSave.length > 0) {
        await ctx.store.save(eraRewardsToSave)
    }

    if (poolsToSave.length > 0) {
        await ctx.store.save(poolsToSave)
    }
}
