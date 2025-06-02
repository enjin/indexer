import { Job, Worker } from 'bullmq'
import computeAttributesConfig from './attributes.config'
import instance from './attributes.processor'

const { queueName, connection, isSandboxed } = computeAttributesConfig

const processor = isSandboxed ? `${__dirname}/attributes.slave.js` : instance.handle

const worker = new Worker(queueName, processor, {
    connection,
    useWorkerThreads: true,
    concurrency: 10,
})

worker.on('failed', (job: Job | undefined, error?: Error): void => {
    void instance.failed(job, error)
})

worker.on('completed', (job) => {
    void instance.completed(job)
})

export default worker
