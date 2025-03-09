import { Job, Worker } from 'bullmq'
import computeCollectionsConfig from './compute-collections.config'
import instance from './compute-collections.processor'
import { gracefulShutdown } from '../../../../utils/tools'

const { queueName, connection, isSandboxed } = computeCollectionsConfig

const processor = isSandboxed ? `${__dirname}/compute-collections.slave.js` : instance.handle

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
