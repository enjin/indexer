import { AuctionData, AuctionState, Listing, ListingType, OfferData, OfferState } from '~/model'
import { connectionManager } from '~/contexts'
import { Job } from 'bullmq'
import Rpc from '~/util/rpc'
import { In } from 'typeorm'

export async function refreshListings(job: Job, ids: string[]) {
    const em = await connectionManager()
    const { api } = await Rpc.getInstance()

    const listings = await em.find(Listing, {
        where: { id: In(ids) },
        relations: {
            bids: {
                bidder: true,
            },
        },
        order: {
            bids: {
                price: 'DESC',
            },
        },
    })

    for (const listing of listings) {
        let hasChanged = false
        const listingData = await api.query.marketplace.listings(`0x${listing.id}`)
        if (listing.type === ListingType.Offer) {
            if (listing?.data.isTypeOf === 'OfferData') {
                const listingJson: any = listingData.toJSON()
                const expiration = listingJson.data.offer.expiration
                listing.data = new OfferData({
                    listingType: ListingType.Offer,
                    expiration: expiration,
                })
                hasChanged = true
            }
        } else if (listing.type === ListingType.Auction) {

            if (listing?.data.isTypeOf === 'AuctionData') {
                const listingJson: any = listingData.toJSON()
                const endHeight = listingJson.data.auction.endBlock
                listing.data = new AuctionData({
                    listingType: ListingType.Auction,
                    endHeight: endHeight,
                })
                hasChanged = true
            }

            if (listing.state.isTypeOf === 'AuctionState') {
                const highBid = listing.bids.length > 0 ? listing.bids[0].id : null
                listing.state = new AuctionState({
                    listingType: ListingType.Auction,
                    highBid: highBid,
                    isExpired: listing.state.isExpired,
                })
                hasChanged = true
            }
        }

        if (hasChanged) {
            await em.save(listing)
            await job.log(`Refreshed listing ${listing.id}`)
        }
    }

    await job.log(`Refreshed ${ids.length} listings`)
}
