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
    RoyaltyBeneficiary,
} from '~/model'
import { connectionManager } from '~/contexts'
import { Job } from 'bullmq'
import Rpc from '~/util/rpc'
import { In } from 'typeorm'

function listingIdToRpcKey(id: string): string {
    return id.startsWith('0x') ? id : `0x${id}`
}

async function computeListingDistribution(listingData: any, assetRoyalty: bigint, job: Job): Promise<boolean> {
    const codec = listingData.toJSON()
    if (!codec.minReceived || !codec.price || !codec.amount) {
        await job.log('Listing data is not valid')
        return Promise.resolve(true)
    }
    const minReceived = BigInt(codec.minReceived)
    const price = BigInt(codec.price)
    const amount = BigInt(codec.amount)
    const bigRoyalty = assetRoyalty * BigInt(10 ** 9)

    await job.log(`Price: ${price}`)
    await job.log(`Amount: ${amount}`)
    await job.log(`Big royalty: ${bigRoyalty}`)

    const protocolFee = (BigInt(0.025 * 10 ** 18) * price) / BigInt(10 ** 18)

    await job.log(`Protocol fee: ${protocolFee}`)

    await job.log(`Total: ${price * amount - protocolFee - bigRoyalty}`)
    await job.log(`Min received: ${minReceived}`)
    await job.log(`Total < min received: ${price * amount - protocolFee - bigRoyalty < minReceived}`)

    return Promise.resolve(price * amount - protocolFee - bigRoyalty < minReceived ? true : false)
}

export async function refreshListings(job: Job, ids: string[]) {
    const em = await connectionManager()
    const rpc = await Rpc.getInstance()
    await rpc.ensureConnected()
    const { api } = rpc

    await job.updateProgress(10)

    const listings = await em.find(Listing, {
        where: { id: In(ids) },
        relations: {
            bids: {
                bidder: true,
            },
            makeAssetId: {
                collection: true,
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
        const collectionRoyaltyTotal =
            listing.makeAssetId.collection.marketPolicy?.beneficiaries
                ?.map((beneficiary) => beneficiary.percentage)
                .reduce((acc, curr) => acc + curr, 0) ?? 0
        const tokenRoyaltyTotal =
            listing.makeAssetId.behavior?.isTypeOf === 'TokenBehaviorHasRoyalty'
                ? (listing.makeAssetId.behavior?.beneficiaries
                      ?.map((beneficiary: RoyaltyBeneficiary | null | undefined) => beneficiary?.percentage)
                      ?.reduce((acc: number, curr: number | undefined) => acc + (curr ?? 0), 0) ?? 0)
                : 0

        await job.log(`Collection royalty total: ${collectionRoyaltyTotal}`)
        await job.log(`Token royalty total: ${tokenRoyaltyTotal}`)
        await job.log(`Total royalty: ${collectionRoyaltyTotal + tokenRoyaltyTotal}`)

        if (await computeListingDistribution(listingData, BigInt(collectionRoyaltyTotal + tokenRoyaltyTotal), job)) {
            await job.log(`Listing ${listing.id} has royalty increased`)
            if (listing.isActive) {
                listing.hasRoyaltyIncreased = true
                await em.save(listing)
                await job.log(`Increased royalty for listing ${listing.id}`)
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
