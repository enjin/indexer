import { Queue } from 'bullmq'
import config from '~/queue/balances/balances.config'

const { queueName, connection, defaultJobOptions } = config

const BalancesQueue = new Queue(queueName, {
    connection,
    defaultJobOptions,
})

export default BalancesQueue
