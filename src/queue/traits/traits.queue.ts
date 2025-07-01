import { Queue } from 'bullmq'
import config from '~/queue/traits/traits.config' 

const { queueName, connection, defaultJobOptions } = config

const TraitsQueue = new Queue(queueName, {
    connection,
    defaultJobOptions,
})

export default TraitsQueue
