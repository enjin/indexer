import rootConfig from '../../config'
import { QueueConfigType } from '../../types'
import { QueuesEnum } from '../../constants'
import { BullMQOtel } from 'bullmq-otel'

const config: QueueConfigType = {
    ...rootConfig,
    telemetry: new BullMQOtel('enjin'),
    queueName: QueuesEnum.ACCOUNTS,
    defaultJobOptions: {
        attempts: 5,
        backoff: {
            type: 'exponential',
            delay: 3000,
        },
        removeOnComplete: 50,
    },
}

export default config
