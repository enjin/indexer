import { Job, Worker } from 'bullmq'
import computeTraitsConfig from './compute-traits.config'
import instance from './compute-traits.processor'
import { gracefulShutdown } from '../../../../utils/tools'

const { queueName, connection, isSandboxed } = computeTraitsConfig

const processor = isSandboxed ? `${__dirname}/compute-traits.slave.js` : instance.handle

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
