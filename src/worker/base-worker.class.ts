import { Job, Worker } from 'bullmq'
import { QueuesEnum } from '~/queue/constants'
import { ProcessorDef } from '~/worker/processors/processor.def'
import { logError } from './utils'
import { WorkerConfigType } from './types'
import rootConfig from '~/worker/config'

export interface WorkerOptions {
    concurrency?: number
    useWorkerThreads?: boolean
}

export class BaseWorker {
    private worker: Worker
    private processor: ProcessorDef
    private queueType: QueuesEnum

    constructor(queueType: QueuesEnum, processor: ProcessorDef, options: WorkerOptions = {}) {
        this.queueType = queueType
        this.processor = processor

        const { queueName, connection, isSandboxed } = this.fetchConfig(queueType)

        const processorHandler = isSandboxed
            ? `${__dirname}/processors/slaves/${queueType.toLocaleLowerCase()}.slave.js`
            : processor.handle

        const workerOptions = {
            connection,
            useWorkerThreads: options.useWorkerThreads ?? true,
            concurrency: options.concurrency ?? 5,
        }

        this.worker = new Worker(queueName, processorHandler, workerOptions)

        this.setupEventListeners()
    }

    private fetchConfig(queueType: QueuesEnum): WorkerConfigType {
        return {
            ...rootConfig,
            connection: {
                ...rootConfig.connection,
                enableOfflineQueue: true,
            },
            queueName: queueType,
            isSandboxed: true,
        }
    }

    private setupEventListeners(): void {
        this.worker.on('failed', (job: Job | undefined, error?: Error): void => {
            if (this.processor.failed) {
                this.processor.failed(job, error)
            }
        })

        this.worker.on('completed', (job: Job): void => {
            if (this.processor.completed) {
                this.processor.completed(job)
            }
        })

        this.worker.on('error', (err: Error): void => {
            logError(err)
        })
    }

    getWorker(): Worker {
        return this.worker
    }

    getQueueType(): QueuesEnum {
        return this.queueType
    }

    getProcessor(): ProcessorDef {
        return this.processor
    }
}
