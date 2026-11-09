import { JobsEnum } from '~/queue/constants'
import {
    computeMetadata,
    computeTokenGroupMetadata,
    syncFuelTankRuleSets,
    syncFuelTanks,
    syncMetadata,
    syncTokenGroupMetadata,
} from '~/worker/jobs'
import { JobHandler, JobRouterProcessor } from '~/worker/processors/job-router.processor'

export class MetadataProcessor extends JobRouterProcessor {
    protected readonly completedMessage = 'Finished computing metadata'
    protected readonly routes = new Map<JobsEnum, JobHandler>([
        [JobsEnum.COMPUTE_METADATA, (job) => computeMetadata(job)],
        [JobsEnum.SYNC_METADATA, (job) => syncMetadata(job)],
        [JobsEnum.SYNC_FUEL_TANKS, (job) => syncFuelTanks(job)],
        [JobsEnum.SYNC_FUEL_TANK_RULE_SETS, (job) => syncFuelTankRuleSets(job)],
        [JobsEnum.COMPUTE_TOKEN_GROUP_METADATA, (job) => computeTokenGroupMetadata(job)],
        [JobsEnum.SYNC_TOKEN_GROUP_METADATA, (job) => syncTokenGroupMetadata(job)],
    ])
}

export default new MetadataProcessor()
