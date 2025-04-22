import { ConnectionOptions, DefaultJobOptions, Telemetry } from 'bullmq'
import { QueuesEnum } from './constants'

export type QueueType = keyof typeof QueuesEnum

export interface BaseConfigType {
    queueName: QueuesEnum
    connection: ConnectionOptions
    telemetry?: Telemetry
}

export interface WorkerConfigType extends BaseConfigType {
    isSandboxed?: boolean
    concurrency?: number
}

export interface QueueConfigType extends BaseConfigType {
    defaultJobOptions?: DefaultJobOptions
    telemetry?: Telemetry
}
