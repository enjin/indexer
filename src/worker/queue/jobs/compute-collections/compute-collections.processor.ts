import { Job } from 'bullmq'
import { ProcessorDef } from '../processor.def'
import { connectionManager } from '../../../../contexts'
import { Collection } from '../../../../model'
import { QueueUtils } from '../..'

export class ComputeCollectionsProcessor implements ProcessorDef {
    async handle(job: Job): Promise<void> {
        const em = connectionManager()

        const collections = await em.find(Collection, {
            select: ['id'],
        })

        collections.forEach((collection) => {
            QueueUtils.dispatchComputeStats(collection.id)
            QueueUtils.dispatchComputeTraits(collection.id)
        })

        await job.log('Finished computing collections')
    }
}

export default new ComputeCollectionsProcessor()
