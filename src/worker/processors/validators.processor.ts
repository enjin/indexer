import { JobsEnum } from '~/queue/constants'
import {
    backfillChainFinality,
    backfillEventPosition,
    backfillEventTimestamps,
    backfillExtrinsicBlockRelation,
    backfillGovernance,
    computeValidators,
    importBlock,
    importGovernanceState,
    syncChain,
    syncChainInfosFromMatrix,
    syncValidators,
} from '~/worker/jobs'
import { syncActiveValidators } from '~/worker/jobs/validators/sync-active-validators'
import { JobHandler, JobRouterProcessor } from '~/worker/processors/job-router.processor'

export class ValidatorsProcessor extends JobRouterProcessor {
    protected readonly completedMessage = 'Finished computing validators'
    protected readonly routes = new Map<JobsEnum, JobHandler>([
        [JobsEnum.COMPUTE_VALIDATORS, (job) => computeValidators(job)],
        [JobsEnum.SYNC_VALIDATORS, (job) => syncValidators(job)],
        [JobsEnum.SYNC_CHAIN, (job) => syncChain(job, job.data.fromBlock, job.data.toBlock)],
        [JobsEnum.SYNC_ACTIVE_VALIDATORS, (job) => syncActiveValidators(job)],
        [JobsEnum.SYNC_CHAIN_INFOS_FROM_MATRIX, (job) => syncChainInfosFromMatrix(job)],
        [JobsEnum.IMPORT_BLOCK, (job) => importBlock(job, job.data.blockNumber, job.data.toBlock)],
        [JobsEnum.BACKFILL_EXTRINSIC_BLOCK_RELATION, (job) => backfillExtrinsicBlockRelation(job)],
        [JobsEnum.BACKFILL_EVENT_POSITION, (job) => backfillEventPosition(job)],
        [JobsEnum.BACKFILL_EVENT_TIMESTAMPS, (job) => backfillEventTimestamps(job)],
        [JobsEnum.BACKFILL_CHAIN_FINALITY, (job) => backfillChainFinality(job)],
        [JobsEnum.BACKFILL_GOVERNANCE, (job) => backfillGovernance(job)],
        [JobsEnum.IMPORT_GOVERNANCE_STATE, (job) => importGovernanceState(job)],
    ])
}

export default new ValidatorsProcessor()
