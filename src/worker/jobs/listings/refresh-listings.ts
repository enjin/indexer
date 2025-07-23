import { AuctionData, Listing, ListingType } from '~/model'
import { connectionManager } from '~/contexts'
import { Job } from 'bullmq'
import Rpc from '~/util/rpc'

export async function refreshListings(job: Job, ids: string[]) {
    const em = await connectionManager()
    const { api } = await Rpc.getInstance()

    for (const id of ids) {
        const listingData = await api.query.marketplace.listings(`0x${id}`)
        const listing = await em.findOneBy(Listing, { id })
        let hasChanged = false

        if (!listing) {
            await job.log(`Listing ${id} not found`)
        }

        if (listing?.data.isTypeOf === 'AuctionData') {
            const listingJson: any = listingData.toJSON()
            const endHeight = listingJson.data.auction.endBlock
            listing.data = new AuctionData({
                listingType: ListingType.Auction,
                endHeight: endHeight,
            })
            hasChanged = true
        }

        if (hasChanged) {
            await em.save(listing)
            await job.log(`Refreshed listing ${id}`)
        }
    }

    await job.log(`Refreshed ${ids.length} listings`)
}
