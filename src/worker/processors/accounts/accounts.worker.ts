import { Job, Worker } from 'bullmq'
import fetchAccountsConfig from './accounts.config'
import instance from './accounts.processor'

const { queueName, connection, isSandboxed } = fetchAccountsConfig

const processor = isSandboxed ? `${__dirname}/accounts.slave.js` : instance.handle

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
