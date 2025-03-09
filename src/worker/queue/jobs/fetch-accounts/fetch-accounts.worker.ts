import { Job, Worker } from 'bullmq'
import fetchAccountsConfig from './fetch-accounts.config'
import instance from './fetch-accounts.processor'

const { queueName, connection, isSandboxed } = fetchAccountsConfig

const processor = isSandboxed ? `${__dirname}/fetch-accounts.slave.js` : instance.handle

const worker = new Worker(queueName, processor, {
    connection,
})

worker.on('failed', (job?: Job) => {
    void instance.failed(job)
})

worker.on('completed', (job) => {
    void instance.completed(job)
})

export default worker
