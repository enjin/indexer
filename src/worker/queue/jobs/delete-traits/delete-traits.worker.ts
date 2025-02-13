import { Worker } from 'bullmq'
import deleteTraitsConfig from './delete-traits.config'
import DeleteTraitsProcessor from './delete-traits.processor'

const instance = new DeleteTraitsProcessor()

const { queueName, connection, isSandboxed } = deleteTraitsConfig

const processor = isSandboxed ? `${__dirname}/delete-traits.slave.js` : instance.handle

const worker = new Worker(queueName, processor, {
    connection,
})

// worker.on('failed', instance.failed)
// worker.on('completed', instance.completed)

export default worker
