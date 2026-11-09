import { JobsEnum } from '~/queue/constants'
import {
    backfillPoolMemberRewards,
    backfillPoolMemberRewardsEraIndex,
    computeEraRewards,
    computePoolMemberRewards,
    computePoolOffers,
    computePoolRewards,
    refreshPool,
    syncAccountUnbondingEras,
    syncMembersBonded,
    syncOrphanedEarlyBirdRewards,
    syncPoolMembers,
    syncPools,
    syncStakeExchangeOffersEvents,
    syncUnbondingEras,
} from '~/worker/jobs'
import { JobHandler, JobRouterProcessor } from '~/worker/processors/job-router.processor'

export class NominationPoolsProcessor extends JobRouterProcessor {
    protected readonly completedMessage = 'Finished computing nomination pools'
    protected readonly routes = new Map<JobsEnum, JobHandler>([
        [JobsEnum.SYNC_POOLS, (job) => syncPools(job)],
        [JobsEnum.COMPUTE_POOL_REWARDS, (job) => computePoolRewards(job, job.data.id)],
        [JobsEnum.COMPUTE_ERA_REWARDS, (job) => computeEraRewards(job, job.data.id)],
        [JobsEnum.COMPUTE_POOL_MEMBER_REWARDS, (job) => computePoolMemberRewards(job, job.data.id)],
        [JobsEnum.SYNC_POOL_MEMBERS, (job) => syncPoolMembers(job)],
        [JobsEnum.SYNC_MEMBERS_BONDED, (job) => syncMembersBonded(job)],
        [JobsEnum.REFRESH_POOL, (job) => refreshPool(job, job.data.id)],
        [JobsEnum.COMPUTE_POOL_OFFERS, (job) => computePoolOffers(job, job.data.id)],
        [JobsEnum.SYNC_ORPHANED_EARLY_BIRD_REWARDS, (job) => syncOrphanedEarlyBirdRewards(job)],
        [JobsEnum.SYNC_STAKE_EXCHANGE_OFFERS_EVENT, (job) => syncStakeExchangeOffersEvents(job)],
        [JobsEnum.BACKFILL_POOL_MEMBER_REWARDS_ERA_INDEX, (job) => backfillPoolMemberRewardsEraIndex(job)],
        [JobsEnum.BACKFILL_POOL_MEMBER_REWARDS, (job) => backfillPoolMemberRewards(job)],
        [JobsEnum.SYNC_ACCOUNT_UNBONDING_ERAS, (job) => syncAccountUnbondingEras(job, job.data.id)],
        [JobsEnum.SYNC_UNBONDING_ERAS, (job) => syncUnbondingEras(job)],
    ])
}

export default new NominationPoolsProcessor()
