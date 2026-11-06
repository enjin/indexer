import {
    Args,
    ArgsType,
    Field,
    ID,
    Int,
    ObjectType,
    Query,
    Resolver,
    createUnionType,
    registerEnumType,
} from 'type-graphql'
import { BigInteger, Json } from '@subsquid/graphql-server'
import 'reflect-metadata'
import type { EntityManager } from 'typeorm'
import { Validate } from 'class-validator'
import { Token, TokenGroup } from '~/model'
import { decodeCursor, encodeCursor, IsPublicKeyArray } from './helpers'
import { PageInfo } from './types'
import { notExpiredListingSql } from '~/util/listing-availability'
import { TokenListingFilterInput } from './accounts-tokens-connection'

export enum CollectionInventoryOrderByInput {
    DATE = 'created_at',
    TOKEN_NAME = 'token_name',
    BEST_LISTING_HIGHEST_PRICE = 'best_listing_price',
}

export enum CollectionInventoryOrderInput {
    ASC = 'ASC',
    DESC = 'DESC',
}

registerEnumType(CollectionInventoryOrderByInput, {
    name: 'CollectionInventoryOrderByInput',
})

registerEnumType(CollectionInventoryOrderInput, {
    name: 'CollectionInventoryOrderInput',
})

@ObjectType()
class CollectionInventoryItemAttribute {
    @Field(() => String)
    key!: string

    @Field(() => String, { nullable: true })
    value?: string
}

@ObjectType()
class CollectionInventoryItemCollection {
    @Field(() => ID)
    id!: string

    @Field(() => BigInteger)
    collectionId!: typeof BigInteger

    @Field(() => Json, { nullable: true })
    metadata!: typeof Json

    @Field(() => [CollectionInventoryItemAttribute], { nullable: true })
    attributes?: CollectionInventoryItemAttribute[]

    constructor(props: Partial<CollectionInventoryItemCollection>) {
        Object.assign(this, props)
    }
}

@ArgsType()
class CollectionInventoryArgs {
    @Field(() => String)
    collectionId!: string

    @Field(() => [String])
    @Validate(IsPublicKeyArray)
    accountIds!: string[]

    @Field(() => Int, { nullable: true })
    first?: number

    @Field(() => String, { nullable: true })
    after?: string

    @Field(() => CollectionInventoryOrderByInput, { defaultValue: CollectionInventoryOrderByInput.DATE })
    orderBy: CollectionInventoryOrderByInput = CollectionInventoryOrderByInput.DATE

    @Field(() => CollectionInventoryOrderInput, { defaultValue: CollectionInventoryOrderInput.DESC })
    order: CollectionInventoryOrderInput = CollectionInventoryOrderInput.DESC

    @Field(() => TokenListingFilterInput, { nullable: true, defaultValue: TokenListingFilterInput.ALL })
    listingFilter: TokenListingFilterInput = TokenListingFilterInput.ALL

    @Field(() => String, { nullable: true })
    query?: string
}

@ObjectType()
class CollectionInventoryGroup {
    @Field(() => ID)
    id!: string

    @Field(() => Int)
    ownedCount!: number

    @Field(() => Json, { nullable: true })
    metadata!: typeof Json

    @Field(() => CollectionInventoryItemCollection)
    collection!: CollectionInventoryItemCollection

    @Field(() => [CollectionInventoryItemAttribute], { nullable: true })
    attributes?: CollectionInventoryItemAttribute[]

    @Field(() => [CollectionInventoryToken], { nullable: true })
    tokens?: CollectionInventoryToken[]

    @Field()
    createdAt!: Date

    constructor(props: Partial<CollectionInventoryGroup>) {
        Object.assign(this, props)
    }
}

@ObjectType()
class CollectionInventoryLoanAccount {
    @Field(() => String)
    address!: string
}

@ObjectType()
class CollectionInventoryTokenLoan {
    @Field(() => CollectionInventoryLoanAccount)
    lender!: CollectionInventoryLoanAccount

    @Field(() => CollectionInventoryLoanAccount)
    borrower!: CollectionInventoryLoanAccount

    @Field(() => BigInteger)
    expiration!: typeof BigInteger

    constructor(props: Partial<CollectionInventoryTokenLoan>) {
        Object.assign(this, props)
    }
}

@ObjectType()
class CollectionInventoryToken {
    @Field(() => ID)
    id!: string

    @Field(() => BigInteger)
    tokenId!: typeof BigInteger

    @Field(() => BigInteger)
    supply!: typeof BigInteger

    @Field(() => Boolean)
    isFrozen!: boolean

    @Field(() => Json, { nullable: true })
    metadata!: typeof Json

    @Field(() => Boolean)
    nonFungible!: boolean

    @Field(() => BigInteger)
    balance!: typeof BigInteger

    @Field(() => BigInteger)
    reservedBalance!: typeof BigInteger

    @Field(() => BigInteger, { nullable: true })
    listedPrice?: typeof BigInteger | null

    @Field(() => CollectionInventoryTokenLoan, { nullable: true })
    loan?: CollectionInventoryTokenLoan | null

    @Field()
    createdAt!: Date

    @Field(() => CollectionInventoryItemCollection)
    collection!: CollectionInventoryItemCollection

    @Field(() => [CollectionInventoryItemAttribute], { nullable: true })
    attributes?: CollectionInventoryItemAttribute[]

    constructor(props: Partial<CollectionInventoryToken>) {
        Object.assign(this, props)
    }
}

const CollectionInventoryItem = createUnionType({
    name: 'CollectionInventoryItem',
    types: () => [CollectionInventoryGroup, CollectionInventoryToken],
    resolveType: (value) => {
        if ('ownedCount' in value) {
            return CollectionInventoryGroup
        }
        return CollectionInventoryToken
    },
})

@ObjectType()
class CollectionInventoryEdge {
    @Field(() => String)
    cursor!: string

    @Field(() => CollectionInventoryItem)
    node!: typeof CollectionInventoryItem

    constructor(props: Partial<CollectionInventoryEdge>) {
        Object.assign(this, props)
    }
}

@ObjectType()
class CollectionInventoryConnection {
    @Field(() => [CollectionInventoryEdge])
    edges!: CollectionInventoryEdge[]

    @Field(() => PageInfo)
    pageInfo!: PageInfo

    @Field(() => Int)
    totalCount!: number

    constructor(props: Partial<CollectionInventoryConnection>) {
        Object.assign(this, props)
    }
}

/**
 * Keyset condition for the rows after `cursor` in the page query's order:
 * `sort_priority ASC, <sortColumn> <order> NULLS LAST|FIRST, id ASC`.
 *
 * Postgres sorts NULLs last for ASC and first for DESC, so a NULL sort value needs its own branch.
 * Group ids are bare token group ids and token ids are `<collectionId>-<tokenId>`, so the cursor's
 * sort_priority comes from its id; this keeps cursors issued before the priority mattered valid.
 */
export function buildCursorCondition(
    sortColumn: string,
    order: CollectionInventoryOrderInput,
    cursor: { id: string; orderValue: string | null },
    firstParamIndex: number
): { sql: string; params: (string | number)[] } {
    const priority = /^\d+$/.test(cursor.id) ? 0 : 1
    const priorityParam = `$${firstParamIndex}`
    const idParam = `$${firstParamIndex + 1}`
    const valueParam = `$${firstParamIndex + 2}`
    const ascending = order === CollectionInventoryOrderInput.ASC

    let withinPriority: string
    if (cursor.orderValue === null) {
        withinPriority = ascending
            ? `${sortColumn} IS NULL AND id > ${idParam}`
            : `${sortColumn} IS NOT NULL OR (${sortColumn} IS NULL AND id > ${idParam})`
    } else {
        withinPriority = ascending
            ? `${sortColumn} > ${valueParam} OR ${sortColumn} IS NULL OR (${sortColumn} = ${valueParam} AND id > ${idParam})`
            : `${sortColumn} < ${valueParam} OR (${sortColumn} = ${valueParam} AND id > ${idParam})`
    }

    return {
        sql: `AND (sort_priority > ${priorityParam} OR (sort_priority = ${priorityParam} AND (${withinPriority})))`,
        params: cursor.orderValue === null ? [priority, cursor.id] : [priority, cursor.id, cursor.orderValue],
    }
}

/** Physical holdings and outstanding lender rights share one deduplicated inventory membership. */
function inventoryTokenIdsCte(accountIds: string, collectionId: string): string {
    return `inventory_token_ids AS (
        SELECT token_account.token_id FROM token_account
        INNER JOIN token ON token_account.token_id = token.id
        INNER JOIN collection ON token.collection_id = collection.id
        WHERE token_account.account_id IN (${accountIds}) AND token_account.total_balance > 0
            AND collection.collection_id = ${collectionId}
        UNION
        SELECT token_loan.token_id FROM token_loan
        INNER JOIN token ON token_loan.token_id = token.id
        INNER JOIN collection ON token.collection_id = collection.id
        WHERE token_loan.lender_id IN (${accountIds})
            AND collection.collection_id = ${collectionId}
    )`
}

@Resolver()
export class CollectionInventoryResolver {
    constructor(private tx: () => Promise<EntityManager>) {}

    /**
     * Returns grouped token items held or lent by the given accounts for one collection.
     */
    @Query(() => CollectionInventoryConnection)
    async collectionInventory(@Args() args: CollectionInventoryArgs): Promise<CollectionInventoryConnection> {
        const { accountIds, collectionId, first, after, orderBy, order, query, listingFilter } = args

        if (!accountIds?.length) {
            return new CollectionInventoryConnection({
                edges: [],
                pageInfo: new PageInfo({
                    hasNextPage: false,
                    hasPreviousPage: false,
                    startCursor: '',
                    endCursor: '',
                }),
                totalCount: 0,
            })
        }

        const requested = first ?? 20
        if (requested < 0) {
            throw new Error('first must be non-negative')
        }
        const limit = Math.min(requested, 100)

        // Earlier cursors encoded a NULL sort value as ''; token_name is NULLIF-ed, so '' is never a real value
        const decoded = after ? decodeCursor(after) : null
        const cursor = decoded ? { id: decoded.id, orderValue: decoded.orderValue || null } : null

        const manager = await this.tx()

        // Determine SQL column name and order direction for sorting
        const getSortColumn = (sortBy: CollectionInventoryOrderByInput): string => {
            switch (sortBy) {
                case CollectionInventoryOrderByInput.DATE:
                    return 'created_at'
                case CollectionInventoryOrderByInput.TOKEN_NAME:
                    return 'token_name'
                case CollectionInventoryOrderByInput.BEST_LISTING_HIGHEST_PRICE:
                    return 'best_listing_price'
                default:
                    return 'created_at'
            }
        }

        const sortColumn = getSortColumn(orderBy)
        const sortOrder = order === CollectionInventoryOrderInput.ASC ? 'ASC NULLS LAST' : 'DESC NULLS FIRST'

        // Build search condition for query parameter
        let searchCondition = ''
        const queryParams: any[] = [...accountIds, collectionId]

        if (query) {
            const queryParamIndex = queryParams.length + 1
            searchCondition = `AND (collection.name ILIKE $${queryParamIndex} OR token.name ILIKE $${queryParamIndex})`
            queryParams.push(`%${query}%`)
        }

        let listingCondition = ''
        if (listingFilter === TokenListingFilterInput.LISTED) {
            listingCondition = 'AND token.best_listing_price IS NOT NULL'
        } else if (listingFilter === TokenListingFilterInput.NOT_LISTED) {
            listingCondition = 'AND token.best_listing_price IS NULL'
        } else if (listingFilter === TokenListingFilterInput.HAS_OFFER) {
            listingCondition = `AND EXISTS (SELECT 1 FROM listing offer WHERE offer.take_asset_id_id = token.id AND offer.type = 'Offer' AND offer.is_active = true AND ${notExpiredListingSql('offer.state')})`
        }

        // Keyset pagination query: fetch groups and ungrouped tokens in one pass
        const accountIdPlaceholders = accountIds.map((_, i) => `$${i + 1}`).join(', ')
        const collectionIdPlaceholder = `$${accountIds.length + 1}`
        const inventoryTokens = inventoryTokenIdsCte(accountIdPlaceholders, collectionIdPlaceholder)

        let cursorCondition = ''
        if (cursor) {
            const condition = buildCursorCondition(sortColumn, order, cursor, queryParams.length + 1)
            cursorCondition = condition.sql
            queryParams.push(...condition.params)
        }

        const pageItems = await manager.query(
            `
            -- groups_data: token groups owned by the account(s) with at least two tokens
            WITH ${inventoryTokens}, groups_data AS (
                SELECT
                    tg.id AS id,
                    COUNT(DISTINCT token.id) AS owned_count,
                    0 AS sort_priority,
                    MIN(token.created_at) AS created_at,
                    MIN(token.token_id) AS token_id,
                    MIN(NULLIF(token.name, '')) AS token_name,
                    MAX(token.best_listing_price) AS best_listing_price
                FROM inventory_token_ids
                INNER JOIN token ON inventory_token_ids.token_id = token.id
                INNER JOIN collection ON token.collection_id = collection.id
                INNER JOIN token_group_token tgt ON token.id = tgt.token_id
                INNER JOIN token_group tg ON tgt.token_group_id = tg.id
                WHERE collection.collection_id = ${collectionIdPlaceholder}
                    ${searchCondition}
                    ${listingCondition}
                GROUP BY tg.id
                HAVING COUNT(DISTINCT token.id) >= 2
            ),
            -- ungrouped_tokens: tokens without a qualifying group
            ungrouped_tokens AS (
                SELECT
                    token.id AS id,
                    1 AS owned_count,
                    1 AS sort_priority,
                    token.created_at AS created_at,
                    token.token_id AS token_id,
                    NULLIF(token.name, '') AS token_name,
                    token.best_listing_price AS best_listing_price
                FROM inventory_token_ids
                INNER JOIN token ON inventory_token_ids.token_id = token.id
                INNER JOIN collection ON token.collection_id = collection.id
                LEFT JOIN token_group_token tgt ON token.id = tgt.token_id
                LEFT JOIN token_group tg ON tgt.token_group_id = tg.id
                    AND tg.id IN (SELECT id FROM groups_data)
                WHERE collection.collection_id = ${collectionIdPlaceholder}
                    ${searchCondition}
                    ${listingCondition}
                    AND tg.id IS NULL
                GROUP BY token.id
            ),
            -- merged: union groups and standalone tokens for unified ordering
            merged AS (
                SELECT id, owned_count, sort_priority, created_at, token_id, token_name, best_listing_price FROM groups_data
                UNION ALL
                SELECT id, owned_count, sort_priority, created_at, token_id, token_name, best_listing_price FROM ungrouped_tokens
            )
            SELECT id, owned_count, sort_priority, created_at, token_id, token_name, best_listing_price
            FROM merged
            WHERE 1=1 ${cursorCondition}
            ORDER BY sort_priority ASC, ${sortColumn} ${sortOrder}, id ASC
            LIMIT ${limit + 1}
        `,
            queryParams
        )

        // Fetch total count of matching items (without LIMIT)
        const totalCountParams = query ? [...accountIds, collectionId, `%${query}%`] : [...accountIds, collectionId]
        const totalCountResult = await manager.query(
            `
            -- groups_data: token groups owned by the account(s) with at least two tokens
            WITH ${inventoryTokens}, groups_data AS (
                SELECT
                    tg.id AS id
                FROM inventory_token_ids
                INNER JOIN token ON inventory_token_ids.token_id = token.id
                INNER JOIN collection ON token.collection_id = collection.id
                INNER JOIN token_group_token tgt ON token.id = tgt.token_id
                INNER JOIN token_group tg ON tgt.token_group_id = tg.id
                WHERE collection.collection_id = ${collectionIdPlaceholder}
                    ${searchCondition}
                    ${listingCondition}
                GROUP BY tg.id
                HAVING COUNT(DISTINCT token.id) >= 2
            ),
            -- ungrouped_tokens: tokens without a qualifying group
            ungrouped_tokens AS (
                SELECT
                    token.id AS id
                FROM inventory_token_ids
                INNER JOIN token ON inventory_token_ids.token_id = token.id
                INNER JOIN collection ON token.collection_id = collection.id
                LEFT JOIN token_group_token tgt ON token.id = tgt.token_id
                LEFT JOIN token_group tg ON tgt.token_group_id = tg.id
                    AND tg.id IN (SELECT id FROM groups_data)
                WHERE collection.collection_id = ${collectionIdPlaceholder}
                    ${searchCondition}
                    ${listingCondition}
                    AND tg.id IS NULL
                GROUP BY token.id
            )
            SELECT COUNT(*) AS count
            FROM (
                SELECT id FROM groups_data
                UNION ALL
                SELECT id FROM ungrouped_tokens
            ) AS merged
        `,
            totalCountParams
        )
        const totalCount = parseInt(totalCountResult[0]?.count ?? 0, 10)

        if (!pageItems?.length) {
            return new CollectionInventoryConnection({
                edges: [],
                pageInfo: new PageInfo({
                    hasNextPage: false,
                    hasPreviousPage: false,
                    startCursor: '',
                    endCursor: '',
                }),
                totalCount,
            })
        }

        // Extract IDs for secondary queries
        const pageGroupIds = pageItems.filter((row: any) => row.sort_priority === 0).map((row: any) => row.id)
        const pageTokenIds = pageItems.filter((row: any) => row.sort_priority === 1).map((row: any) => row.id)

        // Fetch full group data
        const groupsMap = new Map<
            string,
            {
                ownedCount: number
                metadata?: any
                attributes: CollectionInventoryItemAttribute[]
                tokenIds: string[]
                collection?: CollectionInventoryItemCollection
                createdAt?: Date
            }
        >()
        if (pageGroupIds.length > 0) {
            const groupDetails = await manager
                .getRepository(TokenGroup)
                .createQueryBuilder('tg')
                .leftJoinAndSelect('tg.collection', 'collection')
                .leftJoinAndSelect('tg.attributes', 'tgAttrs')
                .leftJoinAndSelect('collection.attributes', 'collectionAttrs', 'collectionAttrs.token IS NULL')
                .addSelect('tg.metadata')
                .where('tg.id IN (:...groupIds)', { groupIds: pageGroupIds })
                .getMany()

            for (const group of groupDetails) {
                const groupId = String(group.id)

                const collectionAttrs = (group.collection?.attributes || [])
                    .filter((attr: any) => !attr.token)
                    .map((attr: any) => ({
                        key: attr.key,
                        value: attr.value,
                    }))

                groupsMap.set(groupId, {
                    ownedCount: 0,
                    metadata: group.metadata as any,
                    attributes: (group.attributes || []).map((attr: any) => ({
                        key: attr.key,
                        value: attr.value,
                    })),
                    tokenIds: [],
                    collection: group.collection
                        ? new CollectionInventoryItemCollection({
                              id: group.collection.id.toString(),
                              collectionId: group.collection.collectionId as any,
                              metadata: group.collection.metadata as any,
                              attributes: collectionAttrs,
                          })
                        : undefined,
                    createdAt: group.createdAt ?? new Date(),
                })
            }

            // Fetch tokens for groups (owned by the requested accounts) - limit to 4 per group
            const groupTokensPlaceholders = pageGroupIds.map((_: any, i: number) => `$${i + 1}`).join(', ')
            const accountIdsPlaceholders = accountIds
                .map((_: any, i: number) => `$${pageGroupIds.length + i + 1}`)
                .join(', ')
            const groupTokens = await manager.query(
                `
                WITH ${inventoryTokenIdsCte(accountIdsPlaceholders, `$${pageGroupIds.length + accountIds.length + 1}`)}, ranked_tokens AS (
                    SELECT
                        tg.id AS group_id,
                        token.id AS token_id,
                        COUNT(*) OVER (PARTITION BY tg.id) AS owned_count,
                        ROW_NUMBER() OVER (PARTITION BY tg.id ORDER BY token.id) AS rn
                    FROM inventory_token_ids
                    INNER JOIN token ON inventory_token_ids.token_id = token.id
                    INNER JOIN token_group_token tgt ON token.id = tgt.token_id
                    INNER JOIN token_group tg ON tgt.token_group_id = tg.id
                    WHERE tg.id IN (${groupTokensPlaceholders})
                        ${listingCondition}
                )
                SELECT group_id, token_id, owned_count
                FROM ranked_tokens
                WHERE rn <= 4
                ORDER BY group_id, rn
                `,
                [...pageGroupIds, ...accountIds, collectionId]
            )

            for (const row of groupTokens) {
                const groupId = String(row.group_id)
                const groupData = groupsMap.get(groupId)
                if (groupData) {
                    groupData.ownedCount = Number(row.owned_count)
                    groupData.tokenIds.push(String(row.token_id))
                }
            }
        }

        // Collect all token IDs (page tokens + group tokens)
        const allGroupTokenIds = Array.from(groupsMap.values()).flatMap((g) => g.tokenIds)
        const allTokenIds = [...new Set([...pageTokenIds, ...allGroupTokenIds])]

        const listingPrices = new Map<string, bigint>()
        if (allTokenIds.length > 0) {
            const rows = await manager.query(
                `
                SELECT DISTINCT ON (make_asset_id_id)
                    make_asset_id_id AS token_id,
                    price
                FROM listing
                WHERE make_asset_id_id = ANY($1::text[])
                    AND seller_id = ANY($2::text[])
                    AND is_active = true
                    AND type != 'Offer'
                    AND take_asset_id_id = '0-0'
                ORDER BY make_asset_id_id, price ASC, id ASC
                `,
                [allTokenIds, accountIds]
            )

            for (const row of rows) {
                listingPrices.set(String(row.token_id), BigInt(row.price))
            }
        }

        // Fetch full token data
        const tokensMap = new Map<
            string,
            {
                tokenId: bigint
                supply: bigint
                isFrozen: boolean
                metadata?: any
                nonFungible: boolean
                createdAt: Date
                collection?: CollectionInventoryItemCollection
                attributes: CollectionInventoryItemAttribute[]
                balance: bigint
                reservedBalance: bigint
                listedPrice?: bigint
                loan?: CollectionInventoryTokenLoan | null
            }
        >()
        if (allTokenIds.length > 0) {
            const metadataKeys = [
                'name',
                'description',
                'fallback_image',
                'banner_image',
                'media',
                'uri',
                'external_url',
            ]

            const tokenDetails = await manager
                .getRepository(Token)
                .createQueryBuilder('token')
                .leftJoinAndSelect('token.loan', 'loan')
                .leftJoinAndSelect('loan.lender', 'lender')
                .leftJoinAndSelect('loan.borrower', 'borrower')
                .leftJoinAndSelect('token.collection', 'collection')
                .leftJoinAndSelect('token.attributes', 'tokenAttrs', 'tokenAttrs.key IN (:...metadataKeys)', {
                    metadataKeys,
                })
                .leftJoinAndSelect(
                    'collection.attributes',
                    'collectionAttrs',
                    'collectionAttrs.token IS NULL AND collectionAttrs.key IN (:...metadataKeys)',
                    { metadataKeys }
                )
                .where('token.id IN (:...tokenIds)', { tokenIds: allTokenIds })
                .getMany()

            // Fetch TokenAccount balances using a simple aggregation query
            const tokenIdPlaceholders = allTokenIds.map((_: any, i: number) => `$${i + 1}`).join(', ')
            const accountIdsPlaceholders = accountIds
                .map((_: any, i: number) => `$${allTokenIds.length + i + 1}`)
                .join(', ')

            const tokenBalances = await manager.query(
                `
                SELECT 
                    token_id,
                    COALESCE(SUM(balance), 0) AS balance,
                    COALESCE(SUM(reserved_balance), 0) AS reserved_balance
                FROM token_account
                WHERE token_id IN (${tokenIdPlaceholders})
                    AND account_id IN (${accountIdsPlaceholders})
                GROUP BY token_id
                `,
                [...allTokenIds, ...accountIds]
            )

            // Create a map of tokenId -> {balance, reservedBalance}
            const tokenBalanceMap = new Map<string, { balance: bigint; reservedBalance: bigint }>()
            for (const row of tokenBalances) {
                tokenBalanceMap.set(String(row.token_id), {
                    balance: BigInt(row.balance ?? 0),
                    reservedBalance: BigInt(row.reserved_balance ?? 0),
                })
            }

            // comment
            for (const token of tokenDetails) {
                const collectionAttrs = (token.collection?.attributes || [])
                    .filter((attr: any) => !attr.token)
                    .map((attr: any) => ({
                        key: attr.key,
                        value: attr.value,
                    }))

                const tokenId = String(token.id)
                const balances = tokenBalanceMap.get(tokenId) || { balance: 0n, reservedBalance: 0n }
                const ownListing = listingPrices.get(tokenId)

                tokensMap.set(tokenId, {
                    tokenId: token.tokenId,
                    supply: token.supply,
                    isFrozen: token.isFrozen,
                    metadata: token.metadata as any,
                    nonFungible: token.nonFungible,
                    createdAt: token.createdAt,
                    collection: token.collection
                        ? new CollectionInventoryItemCollection({
                              id: token.collection.id.toString(),
                              collectionId: token.collection.collectionId as any,
                              metadata: token.collection.metadata as any,
                              attributes: collectionAttrs,
                          })
                        : undefined,
                    attributes: (token.attributes || []).map((attr: any) => ({
                        key: attr.key,
                        value: attr.value,
                    })),
                    balance: balances.balance,
                    reservedBalance: balances.reservedBalance,
                    listedPrice: ownListing,
                    loan: token.loan
                        ? new CollectionInventoryTokenLoan({
                              lender: token.loan.lender,
                              borrower: token.loan.borrower,
                              expiration: token.loan.expiration as any,
                          })
                        : null,
                })
            }
        }

        // Build items from paged results
        const hasNextPage = pageItems.length > limit
        const items = pageItems.slice(0, limit).map((row: any) => {
            if (row.sort_priority === 0) {
                const groupData = groupsMap.get(row.id)
                const groupTokens = (groupData?.tokenIds ?? []).map((tokenId) => {
                    const tokenData = tokensMap.get(tokenId)
                    return new CollectionInventoryToken({
                        id: tokenId,
                        tokenId: (tokenData?.tokenId ?? 0n) as any,
                        supply: (tokenData?.supply ?? 0n) as any,
                        isFrozen: tokenData?.isFrozen ?? false,
                        metadata: tokenData?.metadata,
                        nonFungible: tokenData?.nonFungible ?? false,
                        balance: (tokenData?.balance ?? 0n) as any,
                        reservedBalance: (tokenData?.reservedBalance ?? 0n) as any,
                        listedPrice: tokenData?.listedPrice as any,
                        loan: tokenData?.loan,
                        createdAt: tokenData?.createdAt ?? new Date(),
                        collection:
                            tokenData?.collection ||
                            new CollectionInventoryItemCollection({ id: '', collectionId: 0n as any }),
                        attributes: tokenData?.attributes ?? [],
                    })
                })
                return new CollectionInventoryGroup({
                    id: row.id,
                    ownedCount: groupData?.ownedCount ?? 0,
                    metadata: groupData?.metadata,
                    collection:
                        groupData?.collection ||
                        new CollectionInventoryItemCollection({ id: '', collectionId: 0n as any }),
                    attributes: groupData?.attributes ?? [],
                    tokens: groupTokens,
                    createdAt: groupData?.createdAt ?? new Date(),
                })
            } else {
                const tokenData = tokensMap.get(row.id)
                return new CollectionInventoryToken({
                    id: row.id,
                    tokenId: (tokenData?.tokenId ?? 0n) as any,
                    supply: (tokenData?.supply ?? 0n) as any,
                    isFrozen: tokenData?.isFrozen ?? false,
                    metadata: tokenData?.metadata,
                    nonFungible: tokenData?.nonFungible ?? false,
                    balance: (tokenData?.balance ?? 0n) as any,
                    reservedBalance: (tokenData?.reservedBalance ?? 0n) as any,
                    listedPrice: tokenData?.listedPrice as any,
                    loan: tokenData?.loan,
                    createdAt: tokenData?.createdAt ?? new Date(),
                    collection:
                        tokenData?.collection ||
                        new CollectionInventoryItemCollection({ id: '', collectionId: 0n as any }),
                    attributes: tokenData?.attributes ?? [],
                })
            }
        })

        const edges = items.map((node: CollectionInventoryGroup | CollectionInventoryToken, index: number) => {
            const itemId = node instanceof CollectionInventoryGroup ? node.id : node.id
            const pageItem = pageItems[index]

            // Extract the order value based on the sorting column
            let orderValue: string | null = null
            if (pageItem) {
                switch (orderBy) {
                    case CollectionInventoryOrderByInput.DATE:
                        orderValue = pageItem.created_at ? new Date(pageItem.created_at).toISOString() : null
                        break
                    case CollectionInventoryOrderByInput.TOKEN_NAME:
                        orderValue = pageItem.token_name ?? null
                        break
                    case CollectionInventoryOrderByInput.BEST_LISTING_HIGHEST_PRICE:
                        orderValue = pageItem.best_listing_price != null ? String(pageItem.best_listing_price) : null
                        break
                }
            }

            const cursor = encodeCursor(itemId, orderValue)
            return new CollectionInventoryEdge({ cursor, node })
        })

        return new CollectionInventoryConnection({
            edges,
            pageInfo: new PageInfo({
                hasNextPage,
                hasPreviousPage: !!after,
                startCursor: edges[0]?.cursor ?? '',
                endCursor: edges[edges.length - 1]?.cursor ?? '',
            }),
            totalCount,
        })
    }
}
