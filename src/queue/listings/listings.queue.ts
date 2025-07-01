import { Queue } from 'bullmq'
import config from '~/queue/listings/listings.config'

const { queueName, connection, defaultJobOptions } = config

const ListingsQueue = new Queue(queueName, {
    connection,
    defaultJobOptions,
})

export default ListingsQueue
