import { Job, Worker } from 'bullmq'
import nominationPoolsConfig from './nomination-pools.config'
import instance from './nomination-pools.processor'

const { queueName, connection, isSandboxed } = nominationPoolsConfig

const processor = isSandboxed ? `${__dirname}/nomination-pools.slave.js` : instance.handle

const worker = new Worker(queueName, processor, {
    connection,
    useWorkerThreads: true,
    concurrency: 5,
})

worker.on('failed', (job: Job | undefined, error?: Error): void => {
    instance.failed(job, error)
})

worker.on('completed', (job): void => {
    instance.completed(job)
})

export default worker
