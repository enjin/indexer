import { JobsEnum } from '~/queue/constants'
import { computeTraits, fixAttributes, fixTraits, logTraitTokenHotChanges } from '~/worker/jobs'
import { JobHandler, JobRouterProcessor } from '~/worker/processors/job-router.processor'

export class TraitsProcessor extends JobRouterProcessor {
    protected readonly completedMessage = 'Finished computing traits'
    protected readonly routes = new Map<JobsEnum, JobHandler>([
        [JobsEnum.COMPUTE_TRAITS, (job) => computeTraits(job, job.data.id)],
        [JobsEnum.FIX_TRAITS, (job) => fixTraits(job, job.data.id)],
        [JobsEnum.FIX_ATTRIBUTES, (job) => fixAttributes(job, job.data.id)],
        [JobsEnum.LOG_TRAIT_TOKEN_HOT_CHANGES, (job) => logTraitTokenHotChanges(job)],
    ])
}

export default new TraitsProcessor()
