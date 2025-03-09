import { Job, Worker } from 'bullmq'
import computeStatsConfig from './compute-stats.config'
import instance from './compute-stats.processor'

const { queueName, connection, isSandboxed } = computeStatsConfig

const processor = isSandboxed ? `${__dirname}/compute-stats.slave.js` : instance.handle

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
