import { QueueUtils } from '~/queue'
import { Collection } from '~/model'
import { connectionManager } from '~/contexts'
import { Job } from 'bullmq'

export async function syncCollections(job: Job) {
    const em = await connectionManager()
    
    await job.updateProgress(10)
    
    const collections = await em.find(Collection, {
        select: ['id'],
    })

    await job.updateProgress(30)

    const totalCollections = collections.length
    let processed = 0

    for (const collection of collections) {
        QueueUtils.dispatchFetchExtra([collection.id])
        QueueUtils.dispatchComputeStats(collection.id)
        QueueUtils.dispatchComputeTraits(collection.id)
        
        processed++
        // Update progress (30% -> 90%)
        if (processed % 10 === 0) {
            const progress = Math.min(90, 30 + Math.floor((processed / totalCollections) * 60))
            await job.updateProgress(progress)
        }
    }

    await job.log(`Dispatched fetchExtra, computeStats, computeTraits for ${collections.length} collections`)
    await job.updateProgress(100)
}
