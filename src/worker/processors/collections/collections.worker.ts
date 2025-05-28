import { Job, Worker } from 'bullmq'
import computeCollectionsConfig from './collections.config'
import instance from './collections.processor'

const { queueName, connection, isSandboxed } = computeCollectionsConfig

const processor = isSandboxed ? `${__dirname}/collections.slave.js` : instance.handle

const worker = new Worker(queueName, processor, {
    connection,
    useWorkerThreads: true,
    concurrency: 5,
})

worker.on('failed', (job: Job | undefined, error?: Error): void => {
    void instance.failed(job, error)
})

worker.on('completed', (job) => {
    void instance.completed(job)
})

export default worker
