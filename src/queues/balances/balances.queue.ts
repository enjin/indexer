import { Queue } from 'bullmq'
import config from './balances.config'

const { queueName, connection, defaultJobOptions } = config

const BalancesQueue = new Queue(queueName, {
    connection,
    defaultJobOptions,
})

export default BalancesQueue
