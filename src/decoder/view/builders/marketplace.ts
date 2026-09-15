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

function account(params: Record<string, unknown>, path: string): string {
    return displayValue(getArg(params, `${path}.Id`) ?? getArg(params, path))
}

function variantName(value: unknown): string {
    if (typeof value === 'string') return value
    if (!value || typeof value !== 'object' || Array.isArray(value)) return ''
    return Object.keys(value)[0] ?? ''
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

    const listedAsset = offer ? assetId(takeCollection, takeToken) : assetId(makeCollection, makeToken)

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

export const buildCreateListingAndMatchView: ViewBuilderFn = ({ call, network, coinId }) => {
    const offer = isOfferMakeAsset(call.params)
    const amount = displayValue(getArg(call.params, 'descriptor.amount', '1'))
    const price = displayValue(getArg(call.params, 'descriptor.price', '0'))
    const makeCollection = displayValue(getArg(call.params, 'descriptor.make_asset_id.collection_id'))
    const makeToken = displayValue(getArg(call.params, 'descriptor.make_asset_id.token_id'))
    const takeCollection = displayValue(getArg(call.params, 'descriptor.take_asset_id.collection_id'))
    const takeToken = displayValue(getArg(call.params, 'descriptor.take_asset_id.token_id'))
    const startBlock = displayValue(getArg(call.params, 'descriptor.start_block'))
    const rawMatchLimit = getArg(call.params, 'match_limit')
    const matchLimit =
        rawMatchLimit === null || rawMatchLimit === undefined
            ? 'Chain maximum'
            : displayValue(rawMatchLimit) === '0'
              ? '0 (post only)'
              : displayValue(rawMatchLimit)
    const listedAsset = offer ? assetId(takeCollection, takeToken) : assetId(makeCollection, makeToken)
    const builder = TransactionViewBuilder.create(offer ? 'Buy or Place Offer' : 'Sell or List Asset')
        .when(listedAsset !== '-', (b) => b.withResource('asset', listedAsset))
        .withNetwork(network)
        .withText('Amount', amount)
        .withCoin('Limit Price', price, coinId)
        .withText('Match Limit', matchLimit)
        .when(startBlock, (b) => b.withText('Start Block', startBlock))
        .withText(
            'Matching',
            startBlock
                ? 'Scheduled orders do not match immediately'
                : 'Executes on chain at resting maker prices; fills are not guaranteed'
        )
        .withText('Remainder', 'Rests only if unmatched and book capacity permits')
        .withCoin('Conditional Listing Deposit', MARKETPLACE_LISTING_DEPOSIT, coinId)

    if (offer) {
        try {
            builder.withCoin('Maximum Offer Total', (BigInt(price || '0') * BigInt(amount || '1')).toString(), coinId)
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

export const buildAddWhitelistedAccountsView: ViewBuilderFn = ({ call, network }) => {
    const listingId = displayValue(getArg(call.params, 'listing_id'))
    const accounts = getArg(call.params, 'accounts', [])
    const builder = TransactionViewBuilder.create('Add Whitelisted Accounts')
        .when(listingId, (b) => b.withResource('listing', listingId))
        .withNetwork(network)

    if (!Array.isArray(accounts)) return builder.build()

    for (const [index] of accounts.entries()) {
        const accountId = account(call.params, `accounts.${index}.account_id`)
        const allowance = displayValue(getArg(call.params, `accounts.${index}.allowance`))
        if (accountId) builder.withText('Account', accountId)
        if (allowance) builder.withText('Allowance', allowance)
    }
    return builder.build()
}

export const buildRemoveWhitelistedAccountsView: ViewBuilderFn = ({ call, network }) => {
    const listingId = displayValue(getArg(call.params, 'listing_id'))
    const accountIds = getArg(call.params, 'account_ids', [])
    const builder = TransactionViewBuilder.create('Remove Whitelisted Accounts')
        .when(listingId, (b) => b.withResource('listing', listingId))
        .withNetwork(network)

    if (!Array.isArray(accountIds)) return builder.build()

    for (const [index] of accountIds.entries()) {
        const accountId = account(call.params, `account_ids.${index}`)
        if (accountId) builder.withText('Account', accountId)
    }
    return builder.build()
}

export const buildPlaceCounterOfferView: ViewBuilderFn = ({ call, network, coinId }) => {
    const listingId = displayValue(getArg(call.params, 'listing_id'))
    const price = displayValue(getArg(call.params, 'price'))

    return TransactionViewBuilder.create('Place Counter Offer')
        .when(listingId, (b) => b.withResource('listing', listingId))
        .withNetwork(network)
        .when(price, (b) => b.withCoin('Counter Offer', price, coinId))
        .build()
}

export const buildAnswerCounterOfferView: ViewBuilderFn = ({ call, network, coinId }) => {
    const listingId = displayValue(getArg(call.params, 'listing_id'))
    const creator = account(call.params, 'creator')
    const response = getArg(call.params, 'response')
    const responseName = variantName(response)
    const accept = getArg(call.params, 'accept')
    const currentPrice = displayValue(getArg(call.params, 'current_price'))
    const counterPrice = displayValue(
        getArg(call.params, 'response.Counter.value') ?? getArg(call.params, 'response.Counter')
    )

    return TransactionViewBuilder.create('Answer Counter Offer')
        .when(listingId, (b) => b.withResource('listing', listingId))
        .withNetwork(network)
        .when(creator, (b) => b.withText('Creator', creator))
        .when(responseName, (b) => b.withText('Response', responseName))
        .when(typeof accept === 'boolean', (b) => b.withText('Response', accept ? 'Accept' : 'Reject'))
        .when(currentPrice, (b) => b.withCoin('Current Price', currentPrice, coinId))
        .when(counterPrice, (b) => b.withCoin('Counter Price', counterPrice, coinId))
        .build()
}

export const buildSetProtocolFeeView: ViewBuilderFn = ({ call, network }) => {
    const protocolFee = displayValue(getArg(call.params, 'protocol_fee'))
    return TransactionViewBuilder.create('Set Marketplace Protocol Fee')
        .withNetwork(network)
        .when(protocolFee, (b) => b.withText('Protocol Fee', protocolFee))
        .build()
}
