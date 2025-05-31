import { Job } from 'bullmq'

export interface ProcessorDef {
    handle: (job: Job) => Promise<void>
    completed?: (job: Job) => Promise<void>
    failed?: (job: Job | undefined, error: Error | undefined) => Promise<void>
}
