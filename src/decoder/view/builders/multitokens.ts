import { TransactionViewBuilder } from '../builder'
import { displayValue, getArg } from '../call'
import { MULTI_TOKENS_CREATE_COLLECTION_DEPOSIT } from '../constants'
import type { ViewBuilderFn } from '../types'

function assetId(collectionId: string, tokenId?: string): string {
    return tokenId ? `${collectionId}-${tokenId}` : collectionId
}

function firstArg(params: Record<string, unknown>, paths: string[]): unknown {
    return paths.map((path) => getArg(params, path)).find((value) => value !== undefined)
}

function account(params: Record<string, unknown>, path: string): string {
    return displayValue(getArg(params, `${path}.Id`) ?? getArg(params, path))
}

function variantName(value: unknown): string {
    if (typeof value === 'string') return value
    if (!value || typeof value !== 'object' || Array.isArray(value)) return ''
    return Object.keys(value)[0] ?? ''
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

export const buildMintTokenView: ViewBuilderFn = ({ call, network, coinId }) => {
    const isCreate = !!getArg(call.params, 'params.CreateToken')
    const title = isCreate ? 'Create NFT' : 'Mint NFT'
    const collectionId = displayValue(getArg(call.params, 'collection_id'))
    const tokenId = displayValue(
        getArg(call.params, 'params.CreateToken.token_id') ?? getArg(call.params, 'params.Mint.token_id')
    )
    const amount = displayValue(
        getArg(call.params, 'params.CreateToken.initial_supply') ?? getArg(call.params, 'params.Mint.amount')
    )
    const infusion = displayValue(getArg(call.params, 'params.CreateToken.infusion'))

    return TransactionViewBuilder.create(title)
        .when(collectionId, (b) => b.withResource('asset', assetId(collectionId, tokenId)))
        .withNetwork(network)
        .when(amount, (b) => b.withText('Amount', amount))
        .when(infusion, (b) => b.withCoin('Infusion per token', infusion, coinId))
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

export const buildBatchInfuseTokenView: ViewBuilderFn = ({ call, network, coinId }) => {
    const collectionId = displayValue(getArg(call.params, 'collection_id'))
    const infusions = getArg(call.params, 'infusions', [])
    const builder = TransactionViewBuilder.create('Infuse Tokens').withNetwork(network)

    if (!collectionId || !Array.isArray(infusions)) return builder.build()

    for (const [index] of infusions.entries()) {
        const tokenId = displayValue(getArg(call.params, `infusions.${index}.token_id`))
        const amount = displayValue(getArg(call.params, `infusions.${index}.amount`))
        if (tokenId) builder.withResource('asset', assetId(collectionId, tokenId))
        if (amount) builder.withCoin('Infuse Amount', amount, coinId)
    }

    return builder.build()
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

export const buildAcceptCollectionTransferView: ViewBuilderFn = ({ call, network }) => {
    const collectionId = displayValue(getArg(call.params, 'collection_id'))
    return TransactionViewBuilder.create('Accept Collection Transfer')
        .when(collectionId, (b) => b.withResource('collection', collectionId))
        .withNetwork(network)
        .build()
}

export const buildCancelCollectionTransferView: ViewBuilderFn = ({ call, network }) => {
    const collectionId = displayValue(getArg(call.params, 'collection_id'))
    return TransactionViewBuilder.create('Cancel Collection Transfer')
        .when(collectionId, (b) => b.withResource('collection', collectionId))
        .withNetwork(network)
        .build()
}

export const buildCreateTokenGroupView: ViewBuilderFn = ({ call, network }) => {
    const collectionId = displayValue(getArg(call.params, 'collection_id'))
    return TransactionViewBuilder.create('Create Token Group')
        .when(collectionId, (b) => b.withResource('collection', collectionId))
        .withNetwork(network)
        .build()
}

export const buildDestroyTokenGroupView: ViewBuilderFn = ({ call, network }) => {
    const tokenGroupId = displayValue(getArg(call.params, 'token_group_id'))
    return TransactionViewBuilder.create('Destroy Token Group')
        .withNetwork(network)
        .when(tokenGroupId, (b) => b.withText('Token Group ID', tokenGroupId))
        .build()
}

function buildTokenGroupMembershipView(call: Parameters<ViewBuilderFn>[0]['call'], network: string, title: string) {
    const collectionId = displayValue(getArg(call.params, 'collection_id'))
    const tokenId = displayValue(getArg(call.params, 'token_id'))
    const tokenGroupId = displayValue(getArg(call.params, 'token_group_id'))

    return TransactionViewBuilder.create(title)
        .when(collectionId && tokenId, (b) => b.withResource('asset', assetId(collectionId, tokenId)))
        .withNetwork(network)
        .when(tokenGroupId, (b) => b.withText('Token Group ID', tokenGroupId))
        .build()
}

export const buildAddTokenToGroupView: ViewBuilderFn = ({ call, network }) =>
    buildTokenGroupMembershipView(call, network, 'Add Token to Group')

export const buildRemoveTokenFromGroupView: ViewBuilderFn = ({ call, network }) =>
    buildTokenGroupMembershipView(call, network, 'Remove Token from Group')

export const buildSetTokenGroupsView: ViewBuilderFn = ({ call, network }) => {
    const collectionId = displayValue(getArg(call.params, 'collection_id'))
    const tokenId = displayValue(getArg(call.params, 'token_id'))
    const tokenGroups = getArg(call.params, 'token_groups', [])
    const builder = TransactionViewBuilder.create('Set Token Groups')
        .when(collectionId && tokenId, (b) => b.withResource('asset', assetId(collectionId, tokenId)))
        .withNetwork(network)

    if (!Array.isArray(tokenGroups)) return builder.build()

    builder.withText('Token Group Count', String(tokenGroups.length))
    for (const tokenGroup of tokenGroups) {
        builder.withText('Token Group ID', displayValue(tokenGroup))
    }
    return builder.build()
}

export const buildSetTokenGroupAttributeView: ViewBuilderFn = ({ call, network }) => {
    const tokenGroupId = displayValue(getArg(call.params, 'token_group_id'))
    const key = displayValue(getArg(call.params, 'key'))
    const value = displayValue(getArg(call.params, 'value'))
    const frozen = getArg(call.params, 'frozen')

    return TransactionViewBuilder.create('Set Token Group Attribute')
        .withNetwork(network)
        .when(tokenGroupId, (b) => b.withText('Token Group ID', tokenGroupId))
        .when(key, (b) => b.withText('Key', key))
        .when(value, (b) => b.withText('Value', value))
        .when(typeof frozen === 'boolean', (b) => b.withText('Frozen', frozen ? 'Yes' : 'No'))
        .build()
}

export const buildRemoveTokenGroupAttributeView: ViewBuilderFn = ({ call, network }) => {
    const tokenGroupId = displayValue(getArg(call.params, 'token_group_id'))
    const key = displayValue(getArg(call.params, 'key'))

    return TransactionViewBuilder.create('Remove Token Group Attribute')
        .withNetwork(network)
        .when(tokenGroupId, (b) => b.withText('Token Group ID', tokenGroupId))
        .when(key, (b) => b.withText('Key', key))
        .build()
}

export const buildApproveTokenView: ViewBuilderFn = ({ call, network }) => {
    const collectionId = displayValue(getArg(call.params, 'collection_id'))
    const tokenId = displayValue(getArg(call.params, 'token_id'))
    const operator = account(call.params, 'operator')
    const amount = displayValue(getArg(call.params, 'amount'))
    const expiration = displayValue(getArg(call.params, 'expiration'))

    return TransactionViewBuilder.create('Approve Token')
        .when(collectionId, (b) => b.withResource('asset', assetId(collectionId, tokenId)))
        .withNetwork(network)
        .when(operator, (b) => b.withText('Operator', operator))
        .when(amount, (b) => b.withText('Amount', amount))
        .when(expiration, (b) => b.withText('Expiration', expiration))
        .build()
}

export const buildDestroyCollectionView: ViewBuilderFn = ({ call, network }) => {
    const collectionId = displayValue(getArg(call.params, 'collection_id'))
    return TransactionViewBuilder.create('Destroy Collection')
        .when(collectionId, (b) => b.withResource('collection', collectionId))
        .withNetwork(network)
        .build()
}

export const buildMutateCollectionView: ViewBuilderFn = ({ call, network }) => {
    const collectionId = displayValue(getArg(call.params, 'collection_id'))
    const mutation = displayValue(getArg(call.params, 'mutation'))
    return TransactionViewBuilder.create('Edit Collection')
        .when(collectionId, (b) => b.withResource('collection', collectionId))
        .withNetwork(network)
        .when(mutation, (b) => b.withText('Changes', mutation))
        .build()
}

export const buildMutateTokenView: ViewBuilderFn = ({ call, network }) => {
    const collectionId = displayValue(getArg(call.params, 'collection_id'))
    const tokenId = displayValue(getArg(call.params, 'token_id'))
    const mutation = displayValue(getArg(call.params, 'mutation'))
    return TransactionViewBuilder.create('Edit Token')
        .when(collectionId, (b) => b.withResource('asset', assetId(collectionId, tokenId)))
        .withNetwork(network)
        .when(mutation, (b) => b.withText('Changes', mutation))
        .build()
}

function buildFreezeThawView(call: Parameters<ViewBuilderFn>[0]['call'], network: string, action: 'Freeze' | 'Thaw') {
    const info = getArg(call.params, 'info')
    const scopeType = firstArg(call.params, ['info.freeze_type', 'info.thaw_type', 'freeze_type', 'thaw_type'])
    const type = variantName(scopeType)
    const collectionId = displayValue(firstArg(call.params, ['info.collection_id', 'collection_id']))
    const tokenId = displayValue(
        firstArg(call.params, [
            'info.freeze_type.Token.token_id',
            'info.freeze_type.TokenAccount.token_id',
            'info.thaw_type.Token.token_id',
            'info.thaw_type.TokenAccount.token_id',
            'freeze_type.Token.token_id',
            'freeze_type.TokenAccount.token_id',
            'thaw_type.Token.token_id',
            'thaw_type.TokenAccount.token_id',
        ])
    )
    const accountId = displayValue(
        firstArg(call.params, [
            'info.freeze_type.CollectionAccount',
            'info.freeze_type.TokenAccount.account_id',
            'info.thaw_type.CollectionAccount',
            'info.thaw_type.TokenAccount.account_id',
            'freeze_type.CollectionAccount',
            'freeze_type.TokenAccount.account_id',
            'thaw_type.CollectionAccount',
            'thaw_type.TokenAccount.account_id',
        ])
    )
    const state = displayValue(
        firstArg(call.params, ['info.freeze_type.Token.freeze_state', 'freeze_type.Token.freeze_state'])
    )
    const scope = type === 'TokenAccount' ? 'Token Account' : type === 'CollectionAccount' ? 'Collection Account' : type
    const builder = TransactionViewBuilder.create(scope ? `${action} ${scope}` : action)
        .when(collectionId && tokenId, (b) => b.withResource('asset', assetId(collectionId, tokenId)))
        .when(collectionId && !tokenId, (b) => b.withResource('collection', collectionId))
        .withNetwork(network)
        .when(accountId, (b) => b.withText('Account', accountId))
        .when(state, (b) => b.withText('State', state))

    if (!info && !scopeType) builder.withText('Scope', 'Unknown')
    return builder.build()
}

export const buildFreezeView: ViewBuilderFn = ({ call, network }) => buildFreezeThawView(call, network, 'Freeze')

export const buildThawView: ViewBuilderFn = ({ call, network }) => buildFreezeThawView(call, network, 'Thaw')

export const buildRemoveAttributeView: ViewBuilderFn = ({ call, network }) => {
    const collectionId = displayValue(getArg(call.params, 'collection_id'))
    const tokenIdValue = getArg(call.params, 'token_id')
    const tokenId = tokenIdValue === null || tokenIdValue === undefined ? '' : displayValue(tokenIdValue)
    const key = displayValue(getArg(call.params, 'key'))
    const title = tokenId ? 'Remove NFT Attribute' : 'Remove Collection Attribute'

    return TransactionViewBuilder.create(title)
        .when(collectionId && tokenId, (b) => b.withResource('asset', assetId(collectionId, tokenId)))
        .when(collectionId && !tokenId, (b) => b.withResource('collection', collectionId))
        .withNetwork(network)
        .when(key, (b) => b.withText('Key', key))
        .build()
}

export const buildRemoveAllAttributesView: ViewBuilderFn = ({ call, network }) => {
    const collectionId = displayValue(getArg(call.params, 'collection_id'))
    const tokenIdValue = getArg(call.params, 'token_id')
    const tokenId = tokenIdValue === null || tokenIdValue === undefined ? '' : displayValue(tokenIdValue)
    const count = displayValue(getArg(call.params, 'attribute_count'))
    const title = tokenId ? 'Remove All NFT Attributes' : 'Remove All Collection Attributes'

    return TransactionViewBuilder.create(title)
        .when(collectionId && tokenId, (b) => b.withResource('asset', assetId(collectionId, tokenId)))
        .when(collectionId && !tokenId, (b) => b.withResource('collection', collectionId))
        .withNetwork(network)
        .when(count, (b) => b.withText('Attributes', count))
        .build()
}

export const buildSetRoyaltyView: ViewBuilderFn = ({ call, network }) => {
    const collectionId = displayValue(getArg(call.params, 'collection_id'))
    const tokenIdValue = getArg(call.params, 'token_id')
    const tokenId = tokenIdValue === null || tokenIdValue === undefined ? '' : displayValue(tokenIdValue)
    const percentage = displayValue(
        firstArg(call.params, ['descriptor.percentage', 'descriptor.beneficiaries.0.percentage'])
    )
    const beneficiary = displayValue(
        firstArg(call.params, ['descriptor.beneficiary', 'descriptor.beneficiaries.0.beneficiary'])
    )

    return TransactionViewBuilder.create('Set Royalty')
        .when(collectionId && tokenId, (b) => b.withResource('asset', assetId(collectionId, tokenId)))
        .when(collectionId && !tokenId, (b) => b.withResource('collection', collectionId))
        .withNetwork(network)
        .when(percentage, (b) => b.withText('Percentage', percentage))
        .when(beneficiary, (b) => b.withText('Beneficiary', beneficiary))
        .build()
}

export const buildUnapproveCollectionView: ViewBuilderFn = ({ call, network }) => {
    const collectionId = displayValue(getArg(call.params, 'collection_id'))
    const operator = account(call.params, 'operator')
    return TransactionViewBuilder.create('Revoke Collection Approval')
        .when(collectionId, (b) => b.withResource('collection', collectionId))
        .withNetwork(network)
        .when(operator, (b) => b.withText('Operator', operator))
        .build()
}

export const buildUnapproveTokenView: ViewBuilderFn = ({ call, network }) => {
    const collectionId = displayValue(getArg(call.params, 'collection_id'))
    const tokenId = displayValue(getArg(call.params, 'token_id'))
    const operator = account(call.params, 'operator')
    return TransactionViewBuilder.create('Revoke Token Approval')
        .when(collectionId, (b) => b.withResource('asset', assetId(collectionId, tokenId)))
        .withNetwork(network)
        .when(operator, (b) => b.withText('Operator', operator))
        .build()
}
