import { JobsEnum } from '~/queue/constants'
import {
    backfillEphemeralTokens,
    backfillLoanExtensionActivity,
    computeRarity,
    computeTokenBestListing,
    computeTokenCreationSupply,
    computeTokenInfusion,
    computeTokenNativeMetadata,
    computeTokenSupply,
    explainQuery,
    migrateTokenGroupIds,
    syncCollectionTokensNative,
    syncTokenGroupPositions,
    syncTokens,
} from '~/worker/jobs'
import { JobHandler, JobRouterProcessor } from '~/worker/processors/job-router.processor'

export class TokensProcessor extends JobRouterProcessor {
    protected readonly completedMessage = 'Finished computing tokens'
    protected readonly routes = new Map<JobsEnum, JobHandler>([
        [JobsEnum.COMPUTE_RARITY, (job) => computeRarity(job, job.data.id)],
        [JobsEnum.SYNC_TOKENS, (job) => syncTokens(job)],
        [JobsEnum.COMPUTE_TOKEN_SUPPLY, (job) => computeTokenSupply(job, job.data.id)],
        [JobsEnum.COMPUTE_TOKEN_BEST_LISTING, (job) => computeTokenBestListing(job, job.data.id)],
        [JobsEnum.COMPUTE_TOKEN_INFUSION, (job) => computeTokenInfusion(job, job.data.id)],
        [JobsEnum.SYNC_TOKEN_GROUP_POSITIONS, (job) => syncTokenGroupPositions(job)],
        [JobsEnum.COMPUTE_TOKEN_CREATION_SUPPLY, (job) => computeTokenCreationSupply(job, job.data.id)],
        [JobsEnum.COMPUTE_TOKEN_NATIVE_METADATA, (job) => computeTokenNativeMetadata(job, job.data.id)],
        [JobsEnum.MIGRATE_TOKEN_GROUP_IDS, (job) => migrateTokenGroupIds(job)],
        [JobsEnum.SYNC_COLLECTION_TOKENS_NATIVE, (job) => syncCollectionTokensNative(job)],
        [JobsEnum.EXPLAIN_QUERY, (job) => explainQuery(job)],
        [JobsEnum.BACKFILL_EPHEMERAL_TOKENS, (job) => backfillEphemeralTokens(job)],
        [JobsEnum.BACKFILL_LOAN_EXTENSION_ACTIVITY, (job) => backfillLoanExtensionActivity(job)],
    ])
}

export default new TokensProcessor()
