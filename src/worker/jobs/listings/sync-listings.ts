import { connectionManager } from '~/contexts'
import { Listing } from '~/model'
import { Job } from 'bullmq'
import { QueueUtils } from '~/queue'

export async function syncListings(job: Job) {
    const em = await connectionManager()
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
    })

    stream.on('end', async () => {
        await job.log(`Dispatched sync for ${count} listings`)
    })

    stream.on('error', (error) => {
        console.error('syncListings: stream error', error)
    })
}
