import { Worker } from 'bullmq'
import invalidateListingsConfig from './invalidate-listings.config'
import InvalidateListingsProcessor from './invalidate-listings.processor'

const instance = new InvalidateListingsProcessor()

const { queueName, connection, isSandboxed } = invalidateListingsConfig

const processor = isSandboxed ? `${__dirname}/fetch-listings.slave.js` : instance.handle

const worker = new Worker(queueName, processor, {
    connection,
})

// worker.on('failed', instance.failed)
// worker.on('completed', instance.completed)

export default worker
