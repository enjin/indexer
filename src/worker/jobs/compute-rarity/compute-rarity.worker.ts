import { Job, Worker } from 'bullmq'
import computeRarityConfig from './compute-rarity.config'
import instance from './compute-rarity.processor'
import { gracefulShutdown } from '../../../utils/tools'

const { queueName, connection, isSandboxed } = computeRarityConfig

const processor = isSandboxed ? `${__dirname}/compute-rarity.slave.js` : instance.handle

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
