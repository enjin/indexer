import { Queue } from 'bullmq'
import config from './attributes.config'

const { queueName, connection, defaultJobOptions } = config

const AttributesQueue = new Queue(queueName, {
    connection,
    defaultJobOptions,
})

export default AttributesQueue
