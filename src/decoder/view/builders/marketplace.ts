import { TransactionViewBuilder } from '../builder'
import { displayValue, getArg } from '../call'
import { MARKETPLACE_LISTING_DEPOSIT } from '../constants'
import type { ViewBuilderFn } from '../types'

function isOfferMakeAsset(params: Record<string, unknown>): boolean {
    const collectionId = displayValue(getArg(params, 'descriptor.make_asset_id.collection_id'))
    const tokenId = displayValue(getArg(params, 'descriptor.make_asset_id.token_id'))
    return collectionId === '0' && tokenId === '0'
}

function assetId(collectionId: string, tokenId: string): string {
    return `${collectionId}-${tokenId}`
}

export const buildCreateListingView: ViewBuilderFn = ({ call, network, coinId }) => {
    const offer = isOfferMakeAsset(call.params)
    const title = offer ? 'Make Offer' : 'List Asset'
    const amount = displayValue(getArg(call.params, 'descriptor.amount', '1'))
    const price = displayValue(getArg(call.params, 'descriptor.price', '0'))
    const makeCollection = displayValue(getArg(call.params, 'descriptor.make_asset_id.collection_id'))
    const makeToken = displayValue(getArg(call.params, 'descriptor.make_asset_id.token_id'))
    const takeCollection = displayValue(getArg(call.params, 'descriptor.take_asset_id.collection_id'))
    const takeToken = displayValue(getArg(call.params, 'descriptor.take_asset_id.token_id'))

    const listedAsset = offer
        ? assetId(takeCollection, takeToken)
        : assetId(makeCollection, makeToken)

    const builder = TransactionViewBuilder.create(title)
        .when(listedAsset !== '-', (b) => b.withResource('asset', listedAsset))
        .withNetwork(network)
        .withText('Amount', amount)
        .withCoin('Price', price, coinId)
        .withCoin(offer ? 'Offer Deposit' : 'Listing Deposit', MARKETPLACE_LISTING_DEPOSIT, coinId)

    if (offer) {
        try {
            const total = (BigInt(price || '0') * BigInt(amount || '1')).toString()
            builder.withCoin('Offer Total', total, coinId)
        } catch {
            // ignore non-numeric price/amount
        }
    }

    return builder.build()
}

export const buildFillListingView: ViewBuilderFn = ({ call, network }) => {
    const listingId = displayValue(getArg(call.params, 'listing_id'))
    const amount = displayValue(getArg(call.params, 'amount'))

    return TransactionViewBuilder.create('Buy NFT')
        .when(listingId, (b) => b.withResource('listing', listingId))
        .withNetwork(network)
        .when(amount, (b) => b.withText('Amount', amount))
        .build()
}

export const buildCancelListingView: ViewBuilderFn = ({ call, network }) => {
    const listingId = displayValue(getArg(call.params, 'listing_id'))
    return TransactionViewBuilder.create('Cancel Listing')
        .when(listingId, (b) => b.withResource('listing', listingId))
        .withNetwork(network)
        .build()
}

export const buildFinalizeAuctionView: ViewBuilderFn = ({ call, network }) => {
    const listingId = displayValue(getArg(call.params, 'listing_id'))
    return TransactionViewBuilder.create('Finalize Auction')
        .when(listingId, (b) => b.withResource('listing', listingId))
        .withNetwork(network)
        .build()
}

export const buildPlaceBidView: ViewBuilderFn = ({ call, network, coinId }) => {
    const listingId = displayValue(getArg(call.params, 'listing_id'))
    const price = displayValue(getArg(call.params, 'price'))

    return TransactionViewBuilder.create('Place Bid')
        .when(listingId, (b) => b.withResource('listing', listingId))
        .withNetwork(network)
        .when(price, (b) => b.withCoin('Bid', price, coinId))
        .build()
}
