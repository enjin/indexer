import { ConnectionOptions, Telemetry } from 'bullmq'
import { QueuesEnum } from '~/queue/constants'

export interface BaseConfigType {
    queueName: QueuesEnum
    connection: ConnectionOptions
    telemetry?: Telemetry
}

export interface WorkerConfigType extends BaseConfigType {
    isSandboxed?: boolean
    concurrency?: number
}
