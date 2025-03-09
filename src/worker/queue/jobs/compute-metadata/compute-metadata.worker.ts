import { Job, Worker } from 'bullmq'
import computeMetadataConfig from './compute-metadata.config'
import instance from './compute-metadata.processor'
import { gracefulShutdown } from '../../../../utils/tools'

const { queueName, connection, isSandboxed } = computeMetadataConfig

const processor = isSandboxed ? `${__dirname}/compute-metadata.slave.js` : instance.handle

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
