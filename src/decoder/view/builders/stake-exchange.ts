import { TransactionViewBuilder } from '../builder'
import { displayValue, getArg } from '../call'
import type { ViewBuilderFn } from '../types'

export const buildCreateOfferView: ViewBuilderFn = ({ call, network, coinId }) => {
    const total = displayValue(getArg(call.params, 'offer.total'))
    return TransactionViewBuilder.create('Create Stake Offer')
        .withNetwork(network)
        .when(total, (b) => b.withCoin('Offer Amount', total, coinId))
        .build()
}

export const buildCancelOfferView: ViewBuilderFn = ({ network }) => {
    return TransactionViewBuilder.create('Cancel Stake Offer').withNetwork(network).build()
}

export const buildBuyOfferView: ViewBuilderFn = ({ call, network, coinId }) => {
    const offerId = displayValue(getArg(call.params, 'offer_id'))
    const tokenId = displayValue(getArg(call.params, 'token_id'))
    const amount = displayValue(getArg(call.params, 'amount'))

    return TransactionViewBuilder.create('Release Stake')
        .withNetwork(network)
        .when(offerId, (b) => b.withText('Offer ID', offerId))
        .when(tokenId, (b) => b.withText('Token ID', tokenId))
        .when(amount, (b) => b.withCoin('Amount', amount, coinId))
        .build()
}
