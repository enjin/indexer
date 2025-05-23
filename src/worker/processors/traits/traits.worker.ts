import { Job, Worker } from 'bullmq'
import computeTraitsConfig from './traits.config'
import instance from './traits.processor'

const { queueName, connection, isSandboxed } = computeTraitsConfig

const processor = isSandboxed ? `${__dirname}/traits.slave.js` : instance.handle

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
