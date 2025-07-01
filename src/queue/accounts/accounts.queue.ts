import { Queue } from 'bullmq'
import config from '~/queue/accounts/accounts.config'

const { queueName, connection, defaultJobOptions } = config

const AccountsQueue = new Queue(queueName, {
    connection,
    defaultJobOptions,
})

export default AccountsQueue
