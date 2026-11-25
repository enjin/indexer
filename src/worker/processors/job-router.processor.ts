import { Job } from 'bullmq'
import { JobsEnum } from '~/queue/constants'
import { ProcessorDef } from '~/worker/processors/processor.def'
import { logDebug, logError } from '~/worker/utils'

export type JobHandler = (job: Job) => Promise<unknown>

/**
 * A queue processor that dispatches each job to the handler registered for its name.
 * `handle` is an arrow property so sandboxed slaves can export it detached from the instance.
 */
export abstract class JobRouterProcessor implements ProcessorDef {
    protected abstract readonly routes: ReadonlyMap<JobsEnum, JobHandler>
    protected abstract readonly completedMessage: string

    readonly handle = async (job: Job): Promise<void> => {
        const route = this.routes.get(job.name as JobsEnum)
        if (!route) {
            throw new Error(`${job.name} is not a valid job for this processor`)
        }
        await route(job)
    }

    failed(job: Job | undefined, error: Error | undefined): void {
        if (error === undefined) {
            return
        }
        logError(error, job)
    }

    completed(job: Job): void {
        logDebug(this.completedMessage, job)
    }
}
