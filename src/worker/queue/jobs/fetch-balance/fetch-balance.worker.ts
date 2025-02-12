import { Worker } from 'bullmq'
import fetchBalanceConfig from './fetch-balance.config'
import FetchBalanceProcessor from './fetch-balance.processor'

const instance = new FetchBalanceProcessor()

const { queueName, connection, isSandboxed } = fetchBalanceConfig

const processor = isSandboxed ? `${__dirname}/fetch-balance.slave.js` : instance.handle

const worker = new Worker(queueName, processor, {
    connection,
})

// worker.on('failed', instance.failed)
// worker.on('completed', instance.completed)

export default worker
