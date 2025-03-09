import { Job, Worker } from 'bullmq'
import invalidateListingsConfig from './invalidate-listings.config'
import InvalidateListingsProcessor from './invalidate-listings.processor'

const instance = new InvalidateListingsProcessor()

const { queueName, connection, isSandboxed } = invalidateListingsConfig

const processor = isSandboxed ? `${__dirname}/invalidate-listings.slave.js` : instance.handle

const worker = new Worker(queueName, processor, {
    connection,
})

worker.on('failed', (job?: Job) => {
    void instance.failed(job)
})

worker.on('completed', (job) => {
    void instance.completed(job)
})

export default worker
