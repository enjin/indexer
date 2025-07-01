import { Queue } from 'bullmq'
import config from '~/queue/collections/collections.config'

const { queueName, connection, defaultJobOptions } = config

const CollectionsQueue = new Queue(queueName, {
    connection,
    defaultJobOptions,
})

export default CollectionsQueue
