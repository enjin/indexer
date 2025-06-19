import { Queue } from 'bullmq'
import config from './nomination-pools.config'

const { queueName, connection, defaultJobOptions } = config

const NominationPoolsQueue = new Queue(queueName, {
    connection,
    defaultJobOptions,
})

export default NominationPoolsQueue
