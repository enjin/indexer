import { Job, Worker } from 'bullmq'
import computeCollectionsConfig from '~/worker/processors/collections/collections.config'
import instance from '~/worker/processors/collections/collections.processor'

const { queueName, connection, isSandboxed } = computeCollectionsConfig

const processor = isSandboxed ? `${__dirname}/collections.slave.js` : instance.handle

const worker = new Worker(queueName, processor, {
    connection,
    useWorkerThreads: true,
    concurrency: 4,
})

worker.on('failed', (job: Job | undefined, error?: Error): void => {
    instance.failed(job, error)
})

worker.on('completed', (job): void => {
    instance.completed(job)
})

export default worker
