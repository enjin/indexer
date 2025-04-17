import { QueueUtils } from 'src/queues'
import { Collection } from '../../model'
import { connectionManager } from '../../contexts'

export async function computeCollections() {
    console.log('CALLED COMPUTE COLLECTIONS')

    const em = await connectionManager()
    const collections = await em.find(Collection, {
        select: ['id'],
    })

    // for (const collection of collections) {
    // await job.log(`Dispatching compute stats and traits for collection #${collection.id}`)
    // QueueUtils.dispatchComputeStats(collection.id, 'compute-collections')
    // QueueUtils.dispatchComputeTraits(collection.id)
    // }
}
