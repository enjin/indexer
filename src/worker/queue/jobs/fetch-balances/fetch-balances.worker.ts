import { Worker } from 'bullmq'
import fetchBalanceConfig from './fetch-balances.config'
import FetchBalancesProcessor from './fetch-balances.processor'

const instance = new FetchBalancesProcessor()

const { queueName, connection, isSandboxed } = fetchBalanceConfig

const processor = isSandboxed ? `${__dirname}/fetch-balances.slave.js` : instance.handle

const worker = new Worker(queueName, processor, {
    connection,
})

// worker.on('failed', instance.failed)
// worker.on('completed', instance.completed)

export default worker
