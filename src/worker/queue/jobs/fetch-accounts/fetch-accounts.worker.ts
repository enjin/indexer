import { Worker } from 'bullmq'
import fetchAccountsConfig from './fetch-accounts.config'
import FetchAccountsProcessor from './fetch-accounts.processor'

const instance = new FetchAccountsProcessor()

const { queueName, connection, isSandboxed } = fetchAccountsConfig

const processor = isSandboxed ? `${__dirname}/fetch-accounts.slave.js` : instance.handle

const worker = new Worker(queueName, processor, {
    connection,
})

// worker.on('failed', instance.failed)
// worker.on('completed', instance.completed)

export default worker
