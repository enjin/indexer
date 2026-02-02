import { connectionManager } from '~/contexts'
import { Listing } from '~/model'
import { Job } from 'bullmq'
import { QueueUtils } from '~/queue'

export async function syncListings(job: Job) {
    const em = await connectionManager()

    await job.updateProgress(10)

    const stream = await em.getRepository(Listing).createQueryBuilder('listing').select('listing.id', 'id').stream()

    let count = 0

    stream.on('data', async (data: any) => {
        const id: string | undefined = data?.id ?? data?.listing_id
        if (!id) {
            console.error('syncListings: row without id', data)
            return
        }

        await job.log(`Dispatched sync for listing ${id}`)
        QueueUtils.dispatchRefreshListings([id])
        count++

        // Update progress every 50 listings (10% -> 90%)
        if (count % 50 === 0) {
            job.updateProgress(Math.min(90, 10 + Math.floor(count / 10))).catch(() => {})
        }
    })

    stream.on('end', async () => {
        await job.log(`Dispatched sync for ${count} listings`)
        await job.updateProgress(100)
    })

    stream.on('error', (error) => {
        console.error('syncListings: stream error', error)
    })
}
