import { connectionManager } from '../../contexts'
import { Collection } from '../../model'
import { Job } from 'bullmq'
import { QueueUtils } from 'src/queue'

export async function fetchCollections(job: Job) {
    const em = await connectionManager()

    const collections = await em.find(Collection, {
        select: ['id'],
    })

    for (const collection of collections) {
        QueueUtils.dispatchComputeMetadata(collection.id, 'collection', false, true)
    }

    await job.log(`Dispatched computeMetadata for ${collections.length} collections`)
}
