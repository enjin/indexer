import { Job, Worker } from 'bullmq'
import computeValidatorsConfig from '~/worker/processors/validators/validators.config'
import instance from '~/worker/processors/validators/validators.processor'

const { queueName, connection, isSandboxed } = computeValidatorsConfig

const processor = isSandboxed ? `${__dirname}/validators.slave.js` : instance.handle

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
