import { Job, Worker } from 'bullmq'
import deleteTraitsConfig from './delete-traits.config'
import instance from './delete-traits.processor'

const { queueName, connection, isSandboxed } = deleteTraitsConfig

const processor = isSandboxed ? `${__dirname}/delete-traits.slave.js` : instance.handle

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
