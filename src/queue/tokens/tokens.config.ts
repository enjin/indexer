import rootConfig from '../config'
import { QueueConfigType } from '../types'
import { QueuesEnum } from '../constants'
import { BullMQOtel } from 'bullmq-otel'

const config: QueueConfigType = {
    ...rootConfig,
    connection: {
        ...rootConfig.connection,
        enableOfflineQueue: false,
    },
    telemetry: new BullMQOtel('enjin'),
    queueName: QueuesEnum.TOKENS,
    defaultJobOptions: {
        attempts: 8,
        backoff: {
            type: 'exponential',
            delay: 2000,
        },
        removeOnComplete: {
            age: 172800, // 2 days
            count: 100,
        },
        removeOnFail: {
            age: 345600, // 4 days
            count: 200,
        },
    },
}

export default config
