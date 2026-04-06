import {
    AuctionData,
    AuctionState,
    ChainInfo,
    Listing,
    ListingStatus,
    ListingStatusType,
    ListingType,
    OfferData,
    OfferState,
} from '~/model'
import { connectionManager } from '~/contexts'
import { Job } from 'bullmq'
import Rpc from '~/util/rpc'
import { In } from 'typeorm'

function listingIdToRpcKey(id: string): string {
    return id.startsWith('0x') ? id : `0x${id}`
}

function isListingAbsentOnChain(listingData: unknown): boolean {
    const codec = listingData as { isNone?: boolean; isEmpty?: boolean }
    return Boolean(codec?.isNone || codec?.isEmpty)
}

export async function refreshListings(job: Job, ids: string[]) {
    const em = await connectionManager()
    const rpc = await Rpc.getInstance()
    await rpc.ensureConnected()
    const { api } = rpc

    const chainInfo = await em.find(ChainInfo, {
        order: { blockNumber: 'DESC' },
        take: 1,
    })
    const height = chainInfo[0]?.blockNumber ?? 0
    const now = new Date()

    await job.updateProgress(10)

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

    await job.updateProgress(30)

    const totalListings = listings.length
    if (totalListings === 0) {
        await job.log('No listings found for given ids')
        await job.updateProgress(100)
        return
    }

    let processed = 0

    for (const listing of listings) {
        const listingData = await api.query.marketplace.listings(listingIdToRpcKey(listing.id))

        if (isListingAbsentOnChain(listingData)) {
            if (listing.isActive) {
                const listingStatus = new ListingStatus({
                    id: `${listing.id}-refresh-${Date.now()}-${processed}`,
                    type: ListingStatusType.Cancelled,
                    listing,
                    height,
                    createdAt: now,
                })
                listing.isActive = false
                listing.updatedAt = now
                await em.save(listingStatus)
                await em.save(listing)
                await job.log(`Deactivated listing ${listing.id} (absent from marketplace.listings)`)
            }
            processed++
            const progress = Math.min(90, 30 + Math.floor((processed / totalListings) * 60))
            await job.updateProgress(progress)
            continue
        }

        let hasChanged = false
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

        processed++
        const progress = Math.min(90, 30 + Math.floor((processed / totalListings) * 60))
        await job.updateProgress(progress)
    }

    await job.log(`Refreshed ${ids.length} listings`)
    await job.updateProgress(100)
}
