import {
    Era,
    NominationPool,
    Event as EventModel,
    NominationPoolsRewardPaid,
    EraReward,
    CommissionPayment,
} from '~/model'
import { connectionManager, dataHandlerContext } from '~/contexts'
import { Job } from 'bullmq'
import { In } from 'typeorm'

export async function computeEraRewards(_job: Job, eraIndex: number): Promise<void> {
    const ctx = await dataHandlerContext()
    const em = await connectionManager()

    const era = await ctx.store.findOne(Era, {
        where: { index: eraIndex },
    })

    if (!era) {
        throw new Error(`Era not found: ${eraIndex}`)
    }

    await _job.log(`Computing era rewards for era ${eraIndex}`)

    const newEraIndex = eraIndex + 1

    await _job.log(`New era index: ${newEraIndex}`)

    let newEra = await ctx.store.findOne(Era, {
        where: { index: newEraIndex },
    })

    await _job.log(`New era: ${newEra?.id}`)

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

    await _job.log(`New era saved: ${newEra?.id}`)

    const rewardEvents = await em
        .getRepository(EventModel)
        .createQueryBuilder('event')
        .where('event.name = :name', { name: 'NominationPoolsRewardPaid' })
        .andWhere("(event.data->>'era')::int = :era", { era: eraIndex })
        .getMany()

    await _job.log(`Found ${rewardEvents.length} reward events`)

    // // Group reward events by pool ID
    // const groupedByPool = new Map<string, NominationPoolsRewardPaid[]>()

    // for (const rewardEvent of rewardEvents) {
    //     const rewardEventData = rewardEvent.data as NominationPoolsRewardPaid
    //     const poolId = rewardEventData.poolId.toString()

    //     if (!groupedByPool.has(poolId)) {
    //         groupedByPool.set(poolId, [])
    //     }
    //     groupedByPool.get(poolId)!.push(rewardEventData)
    // }

    // await _job.log(`Grouped reward events by pool: ${groupedByPool.size} pools`)

    // const poolIds = Array.from(groupedByPool.keys())
    // const eraRewardIds = poolIds.map((poolId) => `${poolId}-${newEraIndex.toString()}`)

    // const [existingEraRewards, pools] = await Promise.all([
    //     ctx.store.find(EraReward, { where: { id: In(eraRewardIds) } }),
    //     ctx.store.find(NominationPool, { where: { id: In(poolIds) } }),
    // ])

    // await _job.log(`Found ${existingEraRewards.length} existing era rewards`)
    // await _job.log(`Found ${pools.length} pools`)

    // const existingEraRewardsMap = new Map(existingEraRewards.map((er) => [er.id, er]))
    // const poolsMap = new Map(pools.map((p) => [p.id, p]))

    // const eraRewardsToSave: EraReward[] = []

    // for (const [poolId, events] of groupedByPool) {
    //     const pool = poolsMap.get(poolId)
    //     if (!pool) continue

    //     // Calculate accumulated rewards for this pool
    //     let accumulatedRewards = 0n
    //     let accumulatedCommission = 0n
    //     let commissionBeneficiary: string | undefined

    //     for (const eventData of events) {
    //         accumulatedRewards += eventData.reward + (eventData.commission?.amount ?? 0n)
    //         if (eventData.commission) {
    //             accumulatedCommission += eventData.commission.amount
    //             commissionBeneficiary = eventData.commission.beneficiary
    //         }
    //     }

    //     const eraRewardId = `${poolId}-${newEraIndex}`
    //     let eraReward = existingEraRewardsMap.get(eraRewardId)

    //     if (eraReward) {
    //         // Update existing EraReward
    //         eraReward.reinvested += accumulatedRewards
    //         if (accumulatedCommission > 0n) {
    //             if (eraReward.commission) {
    //                 eraReward.commission = new CommissionPayment({
    //                     beneficiary: commissionBeneficiary,
    //                     amount: eraReward.commission.amount + accumulatedCommission,
    //                 })
    //             } else {
    //                 eraReward.commission = new CommissionPayment({
    //                     beneficiary: commissionBeneficiary,
    //                     amount: accumulatedCommission,
    //                 })
    //             }
    //         }
    //     } else {
    //         // Create new EraReward
    //         eraReward = new EraReward({
    //             id: eraRewardId,
    //             era: newEra,
    //             pool,
    //             rate: pool.rate,
    //             active: pool.balance.active,
    //             reinvested: accumulatedRewards,
    //             commission:
    //                 accumulatedCommission > 0n
    //                     ? new CommissionPayment({
    //                           beneficiary: commissionBeneficiary,
    //                           amount: accumulatedCommission,
    //                       })
    //                     : null,
    //             apy: 0,
    //             averageApy: 0,
    //             changeInRate: 0n,
    //         })
    //     }

    //     eraRewardsToSave.push(eraReward)
    // }

    // if (eraRewardsToSave.length > 0) {
    //     await ctx.store.save(eraRewardsToSave)
    // }
}
