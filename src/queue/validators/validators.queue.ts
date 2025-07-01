import { Queue } from 'bullmq'
import config from '~/queue/validators/validators.config'

const { queueName, connection, defaultJobOptions } = config

const ValidatorsQueue = new Queue(queueName, {
    connection,
    defaultJobOptions,
})

export default ValidatorsQueue
