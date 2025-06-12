import { QueueUtils } from '../../queue'
import { Collection } from '../../model'
import { connectionManager } from '../../contexts'
import { Job } from 'bullmq'

export async function syncCollections(job: Job) {
    const em = await connectionManager()
    const collections = await em.find(Collection, {
        select: ['id'],
    })

    for (const collection of collections) {
        QueueUtils.dispatchFetchExtra([collection.id])
        QueueUtils.dispatchComputeStats(collection.id)
        QueueUtils.dispatchComputeTraits(collection.id)
        QueueUtils.dispatchComputeRarity(collection.id)
        QueueUtils.dispatchComputeMetadata(collection.id, 'collection', false, true)
    }

    await job.log(`Dispatched fetchExtra, computeStats, computeTraits for ${collections.length} collections`)
}
