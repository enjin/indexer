import { Job, Worker } from 'bullmq'
import computeRarityConfig from './tokens.config'
import instance from './tokens.processor'

const { queueName, connection, isSandboxed } = computeRarityConfig

const processor = isSandboxed ? `${__dirname}/tokens.slave.js` : instance.handle

const worker = new Worker(queueName, processor, {
    connection,
    useWorkerThreads: true,
    concurrency: 5,
})

worker.on('failed', (job: Job | undefined, error?: Error): void => {
    instance.failed(job, error)
})

worker.on('completed', (job): void => {
    instance.completed(job)
})

export default worker
