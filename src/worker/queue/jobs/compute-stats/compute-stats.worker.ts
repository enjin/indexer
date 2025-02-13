import { Worker } from 'bullmq'
import computeStatsConfig from './compute-stats.config'
import ComputeStatsProcessor from './compute-stats.processor'

const instance = new ComputeStatsProcessor()

const { queueName, connection, isSandboxed } = computeStatsConfig

const processor = isSandboxed ? `${__dirname}/compute-traits.slave.js` : instance.handle

const worker = new Worker(queueName, processor, {
    connection,
})

// worker.on('failed', instance.failed)
// worker.on('completed', instance.completed)

export default worker
