import { TransactionViewBuilder } from '../builder'
import { displayValue, getArg, getBatchedCalls, getCallId } from '../call'
import type { CallParts, ViewBuilderFn } from '../types'

const FILL_LISTING = 'Marketplace::fill_listing'
const BUY_OFFER = 'StakeExchange::buy'

export const buildBatchView: ViewBuilderFn = ({ call, network, coinId }) => {
    const batched = getBatchedCalls(call)

    if (batched.length > 0 && batched.every((c) => getCallId(c) === FILL_LISTING)) {
        const listingIds = batched.map((c) => displayValue(getArg(c.params, 'listing_id'))).filter(Boolean)
        const builder = TransactionViewBuilder.create('Buy NFTs')
        for (const listingId of listingIds) {
            builder.withResource('listing', listingId)
        }
        return builder.withNetwork(network).withText('Purchases', String(batched.length)).build()
    }

    if (batched.length > 0 && batched.every((c) => getCallId(c) === BUY_OFFER)) {
        const builder = TransactionViewBuilder.create('Release Stake').withNetwork(network)
        for (const [index, inner] of batched.entries()) {
            const offerId = displayValue(getArg(inner.params, 'offer_id'))
            const amount = displayValue(getArg(inner.params, 'amount'))
            const tokenId = displayValue(getArg(inner.params, 'token_id'))
            builder.withText(`Offer ${index + 1}`, [offerId, tokenId, amount].filter(Boolean).join(' / '))
            if (amount) builder.withCoin(`Amount ${index + 1}`, amount, coinId)
        }
        return builder.build()
    }

    return buildGenericBatchView(network, batched)
}

function buildGenericBatchView(network: string, batched: CallParts[]) {
    const types = batched.map(getCallId).filter(Boolean)
    return TransactionViewBuilder.create('Batch Transaction')
        .withNetwork(network)
        .withText('Calls', String(batched.length))
        .when(types.length > 0, (b) => b.withText('Call types', [...new Set(types)].join(', ')))
        .build()
}
