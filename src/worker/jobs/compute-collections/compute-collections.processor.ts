import { Job } from 'bullmq'
import { ProcessorDef } from '../processor.def'
import { connectionManager } from '../../../contexts'
import { Collection } from '../../../model'
import { QueueUtils } from '../../../queues'

export class ComputeCollectionsProcessor implements ProcessorDef {
    async handle(job: Job): Promise<void> {
        const em = await connectionManager()

        const collections = await em.find(Collection, {
            select: ['id'],
        })

        collections.forEach((collection) => {
            console.log('Dispatching compute collections')
            QueueUtils.dispatchComputeStats(collection.id)
            QueueUtils.dispatchComputeTraits(collection.id)
        })
    }

    async failed(job?: Job) {
        if (!job) {
            return
        }

        await job.log('Failed to compute collections')
    }

    async completed(job: Job) {
        await job.log('Finished computing collections')
    }
}

export default new ComputeCollectionsProcessor()
