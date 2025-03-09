import { Job, Worker } from 'bullmq'
import fetchCollectionsConfig from './fetch-collections.config'
import instance from './fetch-collections.processor'

const { queueName, connection, isSandboxed } = fetchCollectionsConfig

const processor = isSandboxed ? `${__dirname}/fetch-collections.slave.js` : instance.handle

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
