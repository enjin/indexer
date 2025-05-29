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
    queueName: QueuesEnum.COLLECTIONS,
    defaultJobOptions: {
        attempts: 8,
        backoff: {
            type: 'exponential',
            delay: 2000,
        },
        removeOnComplete: 300,
    },
}

export default config
