import { Queue } from 'bullmq'
import config from './validators.config'

const { queueName, connection, defaultJobOptions } = config

const ValidatorsQueue = new Queue(queueName, {
    connection,
    defaultJobOptions,
})

export default ValidatorsQueue
