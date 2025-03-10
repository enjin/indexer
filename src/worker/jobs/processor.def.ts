import { Job } from 'bullmq'

export interface ProcessorDef {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    handle: (job: Job) => Promise<any>
    completed?: (job: Job) => Promise<void>
    failed?: (job?: Job) => Promise<void>
}
