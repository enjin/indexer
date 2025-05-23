import { Job, Worker } from 'bullmq'
import invalidateListingsConfig from './listings.config'
import instance from './listings.processor'

const { queueName, connection, isSandboxed } = invalidateListingsConfig

const processor = isSandboxed ? `${__dirname}/listings.slave.js` : instance.handle

const worker = new Worker(queueName, processor, {
    connection,
    useWorkerThreads: true,
    concurrency: 5,
})

worker.on('failed', (job?: Job) => {
    void instance.failed(job)
})

worker.on('completed', (job) => {
    void instance.completed(job)
})

export default worker
