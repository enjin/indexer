import { TransactionViewBuilder } from '../builder'
import { displayValue, getArg } from '../call'
import { MULTI_TOKENS_CREATE_COLLECTION_DEPOSIT } from '../constants'
import type { ViewBuilderFn } from '../types'

function assetId(collectionId: string, tokenId?: string): string {
    return tokenId ? `${collectionId}-${tokenId}` : collectionId
}

export const buildTransferTokenView: ViewBuilderFn = ({ call, network }) => {
    const collectionId = displayValue(getArg(call.params, 'collection_id'))
    const tokenId = displayValue(getArg(call.params, 'params.Simple.token_id'))
    const amount = displayValue(getArg(call.params, 'params.Simple.amount'))

    return TransactionViewBuilder.create('Transfer NFT')
        .when(collectionId, (b) => b.withResource('asset', assetId(collectionId, tokenId)))
        .withNetwork(network)
        .when(amount, (b) => b.withText('Amount', amount))
        .build()
}

export const buildBatchTransferTokenView: ViewBuilderFn = ({ call, network }) => {
    const collectionId = displayValue(getArg(call.params, 'collection_id'))
    const recipients = getArg(call.params, 'recipients', [])
    const builder = TransactionViewBuilder.create('Transfer Item').withNetwork(network)

    if (!collectionId || !Array.isArray(recipients)) return builder.build()

    for (const [index] of recipients.entries()) {
        const tokenId = displayValue(getArg(call.params, `recipients.${index}.params.Simple.token_id`))
        const amount = displayValue(getArg(call.params, `recipients.${index}.params.Simple.amount`))
        if (tokenId) builder.withResource('asset', assetId(collectionId, tokenId))
        if (amount) builder.withText('Amount', amount)
    }

    return builder.build()
}

export const buildBatchMintTokenView: ViewBuilderFn = ({ call, network }) => {
    const collectionId = displayValue(getArg(call.params, 'collection_id'))
    const recipients = getArg(call.params, 'recipients', [])
    const builder = TransactionViewBuilder.create('Mint NFTs').withNetwork(network)

    if (!collectionId || !Array.isArray(recipients)) return builder.build()

    for (const [index] of recipients.entries()) {
        const tokenId = displayValue(
            getArg(call.params, `recipients.${index}.params.CreateToken.token_id`) ??
                getArg(call.params, `recipients.${index}.params.Mint.token_id`)
        )
        const amount = displayValue(
            getArg(call.params, `recipients.${index}.params.CreateToken.initial_supply`) ??
                getArg(call.params, `recipients.${index}.params.Mint.amount`)
        )
        if (tokenId) builder.withResource('asset', assetId(collectionId, tokenId))
        if (amount) builder.withText('Amount', amount)
    }

    return builder.build()
}

export const buildBatchSetAttributeView: ViewBuilderFn = ({ call, network }) => {
    const collectionId = displayValue(getArg(call.params, 'collection_id'))
    const tokenId = displayValue(getArg(call.params, 'token_id'))
    const attributes = getArg(call.params, 'attributes', [])
    const title = tokenId ? 'Set NFT Attributes' : 'Set Collection Attributes'
    const builder = TransactionViewBuilder.create(title)
        .when(collectionId && !tokenId, (b) => b.withResource('collection', collectionId))
        .when(collectionId && tokenId, (b) => b.withResource('asset', assetId(collectionId, tokenId)))
        .withNetwork(network)

    if (!Array.isArray(attributes)) return builder.build()

    for (const [index] of attributes.entries()) {
        const key = displayValue(getArg(call.params, `attributes.${index}.key`))
        const value = displayValue(getArg(call.params, `attributes.${index}.value`))
        if (key || value) builder.withText(key, value)
    }

    return builder.build()
}

export const buildBurnTokenView: ViewBuilderFn = ({ call, network }) => {
    const collectionId = displayValue(getArg(call.params, 'collection_id'))
    const tokenId = displayValue(getArg(call.params, 'params.token_id') ?? getArg(call.params, 'token_id'))
    const amount = displayValue(getArg(call.params, 'params.amount') ?? getArg(call.params, 'amount'))

    return TransactionViewBuilder.create('Melt NFT')
        .when(collectionId, (b) => b.withResource('asset', assetId(collectionId, tokenId)))
        .withNetwork(network)
        .when(amount, (b) => b.withText('Amount', amount))
        .build()
}

export const buildMintTokenView: ViewBuilderFn = ({ call, network }) => {
    const isCreate = !!getArg(call.params, 'params.CreateToken')
    const title = isCreate ? 'Create NFT' : 'Mint NFT'
    const collectionId = displayValue(getArg(call.params, 'collection_id'))
    const tokenId = displayValue(
        getArg(call.params, 'params.CreateToken.token_id') ?? getArg(call.params, 'params.Mint.token_id')
    )
    const amount = displayValue(
        getArg(call.params, 'params.CreateToken.initial_supply') ?? getArg(call.params, 'params.Mint.amount')
    )

    return TransactionViewBuilder.create(title)
        .when(collectionId, (b) => b.withResource('asset', assetId(collectionId, tokenId)))
        .withNetwork(network)
        .when(amount, (b) => b.withText('Amount', amount))
        .build()
}

export const buildInfuseTokenView: ViewBuilderFn = ({ call, network, coinId }) => {
    const collectionId = displayValue(getArg(call.params, 'collection_id'))
    const tokenId = displayValue(getArg(call.params, 'token_id'))
    const amount = displayValue(getArg(call.params, 'amount'))

    return TransactionViewBuilder.create('Infuse Token')
        .when(collectionId, (b) => b.withResource('asset', assetId(collectionId, tokenId)))
        .withNetwork(network)
        .when(amount, (b) => b.withCoin('Infuse amount', amount, coinId))
        .build()
}

export const buildSetAttributeView: ViewBuilderFn = ({ call, network }) => {
    const tokenId = getArg(call.params, 'token_id')
    const title = tokenId === null || tokenId === undefined ? 'Set Collection Attribute' : 'Set NFT Attribute'
    const collectionId = displayValue(getArg(call.params, 'collection_id'))
    const tokenIdStr = tokenId === null || tokenId === undefined ? '' : displayValue(tokenId)
    const key = displayValue(getArg(call.params, 'key'))
    const value = displayValue(getArg(call.params, 'value'))

    return TransactionViewBuilder.create(title)
        .when(collectionId && !tokenIdStr, (b) => b.withResource('collection', collectionId))
        .when(collectionId && tokenIdStr, (b) => b.withResource('asset', assetId(collectionId, tokenIdStr)))
        .withNetwork(network)
        .when(key, (b) => b.withText('Key', key))
        .when(value, (b) => b.withText('Value', value))
        .build()
}

export const buildCreateCollectionView: ViewBuilderFn = ({ network, coinId }) => {
    return TransactionViewBuilder.create('Create Collection')
        .withNetwork(network)
        .withCoin('Collection Deposit', MULTI_TOKENS_CREATE_COLLECTION_DEPOSIT, coinId)
        .build()
}

export const buildApproveCollectionView: ViewBuilderFn = ({ call, network }) => {
    const collectionId = displayValue(getArg(call.params, 'collection_id'))
    return TransactionViewBuilder.create('Allow Token Transfers')
        .when(collectionId, (b) => b.withResource('collection', collectionId))
        .withNetwork(network)
        .build()
}
