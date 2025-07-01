import { Queue } from 'bullmq'
import config from '~/queue/metadata/metadata.config' 

const { queueName, connection, defaultJobOptions } = config

const MetadataQueue = new Queue(queueName, {
    connection,
    defaultJobOptions,
})

export default MetadataQueue
