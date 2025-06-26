import { Listing } from '../../model'
import { connectionManager } from '../../contexts'
import { Job } from 'bullmq'
import Rpc from '../../util/rpc'

export async function refreshListings(job: Job, ids: string[]) {
    const em = await connectionManager()
    const { api } = await Rpc.getInstance()

    for (const id of ids) {
        const listingData = await api.query.marketplace.listings(id)
        const listing = await em.findOneBy(Listing, { id })

        if (!listing) {
            await job.log(`Listing ${id} not found`)
        }

        const listingJson: any = listingData.toJSON()

        const endHeight = listingJson.data.Auction.endBlock.toHuman()

        await job.log(`End height: ${endHeight}`)

        await job.log(`Refreshed ${id}`)
    }

    await job.log(`Refreshed ${ids.length} listings`)
}
