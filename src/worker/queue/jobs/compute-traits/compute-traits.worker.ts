import { Worker } from 'bullmq'
import computeTraitsConfig from './compute-traits.config'
import ComputeTraitsProcessor from './compute-traits.processor'

const instance = new ComputeTraitsProcessor()

const { queueName, connection, isSandboxed } = computeTraitsConfig

const processor = isSandboxed ? `${__dirname}/compute-traits.slave.js` : instance.handle

const worker = new Worker(queueName, processor, {
    connection,
})

// worker.on('failed', instance.failed)
// worker.on('completed', instance.completed)

export default worker
