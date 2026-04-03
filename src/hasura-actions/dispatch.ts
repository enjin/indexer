import type { EntityManager } from 'typeorm'
import { AccountStakingSummaryResolver, StakingTimeframeInput } from '~/server-extension/account-staking-summary'
import { AccountsNftSummaryResolver } from '~/server-extension/accounts-nft-summary'
import { AccountsTokensConnectionResolver, AccountsTokensOrderByInput, AccountsTokensOrderInput, TokenListingFilterInput } from '~/server-extension/accounts-tokens-connection'
import { BestPoolsResolver } from '~/server-extension/best-pools'
import { BlockDetailsResolver } from '~/server-extension/block-details'
import { ChainStatsResolver } from '~/server-extension/chain-stats'
import { ClaimableCollectionsResolver } from '~/server-extension/claimable-colllections'
import { ClaimsAccountNonceResolver } from '~/server-extension/claims-account-nonce'
import {
    CollectionInventoryResolver,
    CollectionInventoryOrderByInput,
    CollectionInventoryOrderInput,
} from '~/server-extension/collection-inventory'
import { EntityType, RefreshEntityResolver } from '~/server-extension/refresh-entity'
import { FuelTanksAccountsResolver } from '~/server-extension/fueltanks-accounts'
import { ImportBlockResolver } from '~/server-extension/import-block'
import { MyTokensResolver, MyTokensOrderByInput, MyTokensOrderInput } from '~/server-extension/my-tokens'
import { RefreshMetadataResolver, RefreshMetadataType } from '~/server-extension/refresh-metadata'
import { RefreshAccountsResolver } from '~/server-extension/refresh-accounts'
import { RefreshBalancesResolver } from '~/server-extension/refresh-balances'
import { RefreshCollectionsResolver } from '~/server-extension/refresh-collections'
import { RefreshListingsResolver } from '~/server-extension/refresh-listings'
import { SearchTokensResolver } from '~/server-extension/search-tokens'
import { TokenListingsResolver, ListingOrderByInput, ListingOrderInput } from '~/server-extension/token-listings'
import { TokenSalesHistoryResolver } from '~/server-extension/token-sales-history'
import { TopCollectionResolver, TopCollectionArgs, TopCollectionOrderByInput, TopCollectionOrderInput, TopCollectionTimeframeInput } from '~/server-extension/top-collections'
import { ValidatorDetailsResolver } from '~/server-extension/validator-details'
import { VerifyMessageResolver } from '~/server-extension/verify-message'
import { QueueUtils } from '~/queue'

export interface HasuraActionPayload {
    action: { name: string }
    input: Record<string, unknown>
}

function txFactory(em: EntityManager) {
    return () => Promise.resolve(em)
}

function str(v: unknown, field: string): string {
    if (typeof v !== 'string') {
        throw new Error(`Expected string for ${field}`)
    }
    return v
}

function optStr(v: unknown): string | undefined {
    return v === undefined || v === null ? undefined : str(v, 'argument')
}

function num(v: unknown, field: string): number {
    if (typeof v !== 'number' || Number.isNaN(v)) {
        throw new Error(`Expected number for ${field}`)
    }
    return v
}

function optNum(v: unknown): number | undefined {
    if (v === undefined || v === null) {
        return undefined
    }
    return num(v, 'argument')
}

function strArr(v: unknown, field: string): string[] {
    if (!Array.isArray(v) || !v.every((x): x is string => typeof x === 'string')) {
        throw new Error(`Expected string array for ${field}`)
    }
    return v
}

function asEnumKey<E extends object>(enu: E, raw: string, label: string): E[keyof E] {
    if (!Object.prototype.hasOwnProperty.call(enu, raw)) {
        throw new Error(`Invalid ${label}: ${raw}`)
    }
    return enu[raw as keyof E]
}

export async function dispatchHasuraAction(payload: HasuraActionPayload): Promise<unknown> {
    const { name } = payload.action
    const input = payload.input

    switch (name) {
        case 'verify_message':
            return new VerifyMessageResolver().verifyMessage(
                str(input.message, 'message'),
                str(input.signature, 'signature'),
                str(input.publicKey, 'publicKey')
            )

        case 'fuel_tanks_accounts':
            return new FuelTanksAccountsResolver().fuelTanksAccounts(
                str(input.fuelTank, 'fuelTank'),
                str(input.account, 'account')
            )

        case 'claims_account_nonce':
            return new ClaimsAccountNonceResolver().claimsAccountNonce(str(input.account, 'account'))

        case 'claimable_collection_ids':
            return new ClaimableCollectionsResolver().claimableCollectionIds({
                addresses: strArr(input.addresses, 'addresses'),
            })

        case 'refresh_accounts':
            return new RefreshAccountsResolver().refreshAccounts({
                ids: strArr(input.ids, 'ids'),
            })

        case 'refresh_balances':
            return new RefreshBalancesResolver().refreshBalances({
                ids: strArr(input.ids, 'ids'),
            })

        case 'refresh_collections':
            return new RefreshCollectionsResolver().refreshCollections({
                ids: strArr(input.ids, 'ids'),
            })

        case 'refresh_listings':
            return new RefreshListingsResolver().refreshListings({
                ids: strArr(input.ids, 'ids'),
            })

        case 'refresh_entity':
            return new RefreshEntityResolver().refreshEntity({
                type: asEnumKey(EntityType, str(input.type, 'type'), 'EntityType'),
                ids: strArr(input.ids, 'ids'),
            })

        case 'import_block':
            return new ImportBlockResolver().importBlock({
                blockNumber: num(input.blockNumber, 'blockNumber'),
                toBlock: optNum(input.toBlock),
            })

        case 'refresh_pool': {
            const id = str(input.id, 'id')
            QueueUtils.dispatchRefreshPool(id)
            return true
        }

        default:
            break
    }

    const ds = await import('./data-source').then((m) => m.getActionDataSource())
    return ds.transaction(async (em) => {
        const tx = txFactory(em)

        switch (name) {
            case 'validator_details':
                return new ValidatorDetailsResolver(tx).validatorDetails({
                    ids: strArr(input.ids, 'ids'),
                })

            case 'top_collection': {
                const args: TopCollectionArgs = {
                    timeFrame: asEnumKey(TopCollectionTimeframeInput, str(input.timeFrame, 'timeFrame'), 'timeFrame'),
                    orderBy: asEnumKey(TopCollectionOrderByInput, str(input.orderBy, 'orderBy'), 'orderBy'),
                    category: Array.isArray(input.category)
                        ? (input.category as unknown[]).map((x) => String(x))
                        : [],
                    query: optStr(input.query) ?? '',
                    order: asEnumKey(TopCollectionOrderInput, str(input.order, 'order'), 'order'),
                    offset: optNum(input.offset) ?? 0,
                    limit: optNum(input.limit) ?? 10,
                }
                return new TopCollectionResolver(tx).topCollection(args)
            }

            case 'token_sales_history':
                return new TokenSalesHistoryResolver(tx).tokenSalesHistory(
                    str(input.id, 'id'),
                    optStr(input.fromDate) as string
                )

            case 'token_listings': {
                const orderByRaw = optStr(input.orderBy)
                const orderRaw = optStr(input.order)
                return new TokenListingsResolver(tx).tokenListings(
                    str(input.assetId, 'assetId'),
                    optStr(input.hiddenListingId) ?? '',
                    orderByRaw
                        ? asEnumKey(ListingOrderByInput, orderByRaw, 'orderBy')
                        : ListingOrderByInput.PRICE,
                    orderRaw ? asEnumKey(ListingOrderInput, orderRaw, 'order') : ListingOrderInput.ASC,
                    optNum(input.limit) ?? 10,
                    optNum(input.offset) ?? 0
                )
            }

            case 'search_tokens':
                return new SearchTokensResolver(tx).searchTokens({
                    query: str(input.query, 'query'),
                    publicKey: str(input.publicKey, 'publicKey'),
                })

            case 'refresh_metadata': {
                const raw = input.ids
                if (!Array.isArray(raw)) {
                    throw new Error('Expected ids array')
                }
                const ids = raw.map((item: unknown) => {
                    if (!item || typeof item !== 'object') {
                        throw new Error('Each refreshMetadata id entry must be an object')
                    }
                    const o = item as Record<string, unknown>
                    return {
                        id: str(o.id, 'id'),
                        type: asEnumKey(RefreshMetadataType, str(o.type, 'type'), 'RefreshMetadataType'),
                    }
                })
                return new RefreshMetadataResolver(tx).refreshMetadata(ids)
            }

            case 'my_tokens':
                return new MyTokensResolver(tx).myTokens({
                    accountId: str(input.accountId, 'accountId'),
                    orderBy: asEnumKey(MyTokensOrderByInput, str(input.orderBy, 'orderBy'), 'orderBy'),
                    order: asEnumKey(MyTokensOrderInput, str(input.order, 'order'), 'order'),
                    offset: optNum(input.offset) ?? 0,
                    limit: optNum(input.limit) ?? 10,
                    query: optStr(input.query),
                })

            case 'chain_stats':
                return new ChainStatsResolver(tx).chainStats(optNum(input.maxBlocks))

            case 'block_details':
                return new BlockDetailsResolver(tx).blockDetails({
                    blockNumber: num(input.blockNumber, 'blockNumber'),
                })

            case 'best_pools': {
                const accountId = str(input.accountId, 'accountId')
                return new BestPoolsResolver(tx).bestPools({
                    accountId,
                    limit: optNum(input.limit) ?? 5,
                })
            }

            case 'accounts_tokens_connection': {
                const args = input.args
                if (!args || typeof args !== 'object') {
                    throw new Error('Expected args object')
                }
                const a = args as Record<string, unknown>
                return new AccountsTokensConnectionResolver(tx).accountsTokensConnection({
                    accountIds: strArr(a.accountIds, 'accountIds'),
                    first: optNum(a.first),
                    after: optStr(a.after),
                    orderBy: a.orderBy
                        ? asEnumKey(AccountsTokensOrderByInput, str(a.orderBy, 'orderBy'), 'orderBy')
                        : AccountsTokensOrderByInput.TOKEN_NAME,
                    order: a.order
                        ? asEnumKey(AccountsTokensOrderInput, str(a.order, 'order'), 'order')
                        : AccountsTokensOrderInput.ASC,
                    query: optStr(a.query),
                    collectionId: optStr(a.collectionId),
                    tokenGroupId: optStr(a.tokenGroupId),
                    listingFilter: a.listingFilter
                        ? asEnumKey(TokenListingFilterInput, str(a.listingFilter, 'listingFilter'), 'listingFilter')
                        : TokenListingFilterInput.ALL,
                })
            }

            case 'accounts_nft_summary':
                return new AccountsNftSummaryResolver(tx).accountsNftSummary({
                    accountIds: strArr(input.accountIds, 'accountIds'),
                })

            case 'account_staking_summary':
                return new AccountStakingSummaryResolver(tx).accountStakingSummary({
                    accountId: optStr(input.accountId),
                    accountIds:
                        input.accountIds === undefined || input.accountIds === null
                            ? undefined
                            : strArr(input.accountIds, 'accountIds'),
                    timeFrame: asEnumKey(StakingTimeframeInput, str(input.timeFrame, 'timeFrame'), 'timeFrame'),
                })

            case 'collection_inventory':
                return new CollectionInventoryResolver(tx).collectionInventory({
                    collectionId: str(input.collectionId, 'collectionId'),
                    accountIds: strArr(input.accountIds, 'accountIds'),
                    first: optNum(input.first),
                    after: optStr(input.after),
                    orderBy: input.orderBy
                        ? asEnumKey(
                              CollectionInventoryOrderByInput,
                              str(input.orderBy, 'orderBy'),
                              'orderBy'
                          )
                        : CollectionInventoryOrderByInput.DATE,
                    order: input.order
                        ? asEnumKey(CollectionInventoryOrderInput, str(input.order, 'order'), 'order')
                        : CollectionInventoryOrderInput.DESC,
                    listingFilter: input.listingFilter
                        ? asEnumKey(
                              TokenListingFilterInput,
                              str(input.listingFilter, 'listingFilter'),
                              'listingFilter'
                          )
                        : TokenListingFilterInput.ALL,
                    query: optStr(input.query),
                })

            default:
                throw new Error(`Unknown Hasura action: ${name}`)
        }
    })
}
