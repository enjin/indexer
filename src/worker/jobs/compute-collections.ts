import { QueueUtils } from '../../queue'
import { Collection } from '../../model'
import { connectionManager } from '../../contexts'

export async function computeCollections() {
    const em = await connectionManager()
    const collections = await em.find(Collection, {
        select: ['id'],
    })

    for (const collection of collections) {
        QueueUtils.dispatchComputeStats(collection.id, 'compute-collections')
        QueueUtils.dispatchComputeTraits(collection.id)
    }
}
