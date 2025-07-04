import { Job, Worker } from 'bullmq'
import fetchBalanceConfig from '~/worker/processors/balances/balances.config'
import instance from '~/worker/processors/balances/balances.processor'

const { queueName, connection, isSandboxed } = fetchBalanceConfig

const processor = isSandboxed ? `${__dirname}/balances.slave.js` : instance.handle

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
