import { Job, Worker } from 'bullmq'
import computeValidatorsConfig from './compute-validators.config'
import instance from './compute-validators.processor'
import { gracefulShutdown } from '../../../utils/tools'

const { queueName, connection, isSandboxed } = computeValidatorsConfig

const processor = isSandboxed ? `${__dirname}/compute-validators.slave.js` : instance.handle

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
