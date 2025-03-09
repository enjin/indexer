import { Job, Worker } from 'bullmq'
import fetchBalanceConfig from './fetch-balances.config'
import instance from './fetch-balances.processor'

const { queueName, connection, isSandboxed } = fetchBalanceConfig

const processor = isSandboxed ? `${__dirname}/fetch-balances.slave.js` : instance.handle

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
