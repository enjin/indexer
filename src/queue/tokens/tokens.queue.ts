import { Queue } from 'bullmq'
import config from '~/queue/tokens/tokens.config' 

const { queueName, connection, defaultJobOptions } = config

const TokensQueue = new Queue(queueName, {
    connection,
    defaultJobOptions,
})

export default TokensQueue
