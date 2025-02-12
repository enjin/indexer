import { Worker } from 'bullmq'
import computeRarityConfig from './compute-rarity.config'
import ComputeRarityProcessor from './compute-rarity.processor'

const instance = new ComputeRarityProcessor()

const { queueName, connection, isSandboxed } = computeRarityConfig

const processor = isSandboxed ? `${__dirname}/compute-rarity.slave.js` : instance.handle

const worker = new Worker(queueName, processor, {
    connection,
})

// worker.on('failed', instance.failed)
// worker.on('completed', instance.completed)

export default worker
