import { Worker } from 'bullmq'
import computeCollectionsConfig from './compute-collections.config'
import ComputeCollectionsProcessor from './compute-collections.processor'

const instance = new ComputeCollectionsProcessor()

const { queueName, connection, isSandboxed } = computeCollectionsConfig

const processor = isSandboxed ? `${__dirname}/compute-collections.slave.js` : instance.handle

const worker = new Worker(queueName, processor, {
    connection,
})

// worker.on('failed', instance.failed)
// worker.on('completed', instance.completed)

export default worker
