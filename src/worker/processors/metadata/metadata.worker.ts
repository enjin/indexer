import { Job, Worker } from 'bullmq'
import computeMetadataConfig from '~/worker/processors/metadata/metadata.config'
import instance from '~/worker/processors/metadata/metadata.processor'

const { queueName, connection, isSandboxed } = computeMetadataConfig

const processor = isSandboxed ? `${__dirname}/metadata.slave.js` : instance.handle

const worker = new Worker(queueName, processor, {
    connection,
    useWorkerThreads: true,
    concurrency: 10,
})

worker.on('failed', (job: Job | undefined, error?: Error): void => {
    instance.failed(job, error)
})

worker.on('completed', (job): void => {
    instance.completed(job)
})

export default worker
