import { Worker } from 'bullmq'
import computeMetadataConfig from './compute-metadata.config'
import ComputeMetadataProcessor from './compute-metadata.processor'

const instance = new ComputeMetadataProcessor()

const { queueName, connection, isSandboxed } = computeMetadataConfig

const processor = isSandboxed ? `${__dirname}/compute-metadata.slave.js` : instance.handle

const worker = new Worker(queueName, processor, {
    connection,
})

// worker.on('failed', instance.failed)
// worker.on('completed', instance.completed)

export default worker
