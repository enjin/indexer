import { Job } from 'bullmq'

export interface ProcessorDef {
    handle: (job: Job) => Promise<void>
    completed?: (job: Job) => void
    failed?: (job: Job | undefined, error: Error | undefined) => void
}
