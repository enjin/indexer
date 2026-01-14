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
import { TokenAccount, Attribute, Token, TokenGroup, Collection } from '~/model'
import { decodeCursor, encodeCursor, IsPublicKeyArray } from './helpers'
import { PageInfo } from './types'

export enum CollectionInventoryOrderByInput {
    OWNED_COUNT = 'owned_count',
    CREATED_AT = 'created_at',
    TOKEN_ID = 'token_id',
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

    @Field(() => CollectionInventoryOrderByInput, { defaultValue: CollectionInventoryOrderByInput.OWNED_COUNT })
    orderBy: CollectionInventoryOrderByInput = CollectionInventoryOrderByInput.OWNED_COUNT

    @Field(() => CollectionInventoryOrderInput, { defaultValue: CollectionInventoryOrderInput.DESC })
    order: CollectionInventoryOrderInput = CollectionInventoryOrderInput.DESC

    @Field(() => String, { nullable: true })
    query?: string
}

@ObjectType()
class CollectionInventoryGroup {
    @Field(() => ID)
    id!: string

    @Field(() => Int)
    ownedCount!: number

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

@Resolver()
export class CollectionInventoryResolver {
    constructor(private tx: () => Promise<EntityManager>) {}

    /**
     * Returns grouped token items owned by the given accounts for one collection.
     */
    @Query(() => CollectionInventoryConnection)
    async collectionInventory(@Args() args: CollectionInventoryArgs): Promise<CollectionInventoryConnection> {
        const { accountIds, collectionId, first, after, orderBy, order, query } = args

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

        let afterId: string | null = null
        let afterOrderValue: string | null = null

        if (after) {
            const decoded = decodeCursor(after)
            afterId = decoded.id
            afterOrderValue = decoded.orderValue
        }

        const manager = await this.tx()

        // Decode cursor to get keyset pagination anchor
        let cursorOrderValue: string | null = null
        let cursorId: string | null = null

        if (afterId && afterOrderValue !== undefined) {
            cursorOrderValue = afterOrderValue
            cursorId = afterId
        }

        // Determine SQL column name and order direction for sorting
        const getSortColumn = (sortBy: CollectionInventoryOrderByInput): string => {
            switch (sortBy) {
                case CollectionInventoryOrderByInput.OWNED_COUNT:
                    return 'owned_count'
                case CollectionInventoryOrderByInput.CREATED_AT:
                    return 'created_at'
                case CollectionInventoryOrderByInput.TOKEN_ID:
                    return 'token_id'
                default:
                    return 'owned_count'
            }
        }

        const sortColumn = getSortColumn(orderBy)
        const sortOrder = order === CollectionInventoryOrderInput.ASC ? 'ASC' : 'DESC'
        const comparison = order === CollectionInventoryOrderInput.ASC ? '>' : '<'

        // Build search condition for query parameter
        let searchCondition = ''
        const queryParams: any[] = [...accountIds, collectionId]

        if (query) {
            const queryParamIndex = queryParams.length + 1
            searchCondition = `AND (collection.name ILIKE $${queryParamIndex} OR token.name ILIKE $${queryParamIndex})`
            queryParams.push(`%${query}%`)
        }

        // Keyset pagination query: fetch groups and ungrouped tokens in one pass
        const accountIdPlaceholders = accountIds.map((_, i) => `$${i + 1}`).join(', ')
        const collectionIdPlaceholder = `$${accountIds.length + 1}`

        // Build cursor condition
        let cursorCondition = ''
        if (cursorOrderValue !== null && cursorId !== null) {
            const cursorOrderValueIndex = queryParams.length + 1
            const cursorIdIndex = queryParams.length + 2

            // Handle NULL order values (encoded as empty string)
            if (cursorOrderValue === '') {
                cursorCondition = `AND (${sortColumn} IS NOT NULL OR (${sortColumn} IS NULL AND id ${comparison} $${cursorIdIndex}))`
                queryParams.push(cursorId)
            } else {
                cursorCondition = `AND (${sortColumn} ${comparison} $${cursorOrderValueIndex} OR (${sortColumn} = $${cursorOrderValueIndex} AND id ${comparison} $${cursorIdIndex}))`
                queryParams.push(cursorOrderValue, cursorId)
            }
        }

        const pageItems = await manager.query(
            `
            -- groups_data: token groups owned by the account(s) with at least two tokens
            WITH groups_data AS (
                SELECT
                    tg.id AS id,
                    COUNT(DISTINCT token.id) AS owned_count,
                    0 AS sort_priority,
                    MIN(token.created_at) AS created_at,
                    MIN(token.token_id) AS token_id
                FROM token_account
                INNER JOIN token ON token_account.token_id = token.id
                INNER JOIN collection ON token.collection_id = collection.id
                INNER JOIN token_group_token tgt ON token.id = tgt.token_id
                INNER JOIN token_group tg ON tgt.token_group_id = tg.id
                WHERE token_account.account_id IN (${accountIdPlaceholders})
                    AND token_account.total_balance > 0
                    AND collection.collection_id = ${collectionIdPlaceholder}
                    ${searchCondition}
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
                    token.token_id AS token_id
                FROM token_account
                INNER JOIN token ON token_account.token_id = token.id
                INNER JOIN collection ON token.collection_id = collection.id
                LEFT JOIN token_group_token tgt ON token.id = tgt.token_id
                LEFT JOIN token_group tg ON tgt.token_group_id = tg.id
                    AND tg.id IN (SELECT id FROM groups_data)
                WHERE token_account.account_id IN (${accountIdPlaceholders})
                    AND token_account.total_balance > 0
                    AND collection.collection_id = ${collectionIdPlaceholder}
                    ${searchCondition}
                    AND tg.id IS NULL
                GROUP BY token.id
            ),
            -- merged: union groups and standalone tokens for unified ordering
            merged AS (
                SELECT id, owned_count, sort_priority, created_at, token_id FROM groups_data
                UNION ALL
                SELECT id, owned_count, sort_priority, created_at, token_id FROM ungrouped_tokens
            )
            SELECT id, owned_count, sort_priority, created_at, token_id
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
            WITH groups_data AS (
                SELECT
                    tg.id AS id
                FROM token_account
                INNER JOIN token ON token_account.token_id = token.id
                INNER JOIN collection ON token.collection_id = collection.id
                INNER JOIN token_group_token tgt ON token.id = tgt.token_id
                INNER JOIN token_group tg ON tgt.token_group_id = tg.id
                WHERE token_account.account_id IN (${accountIdPlaceholders})
                    AND token_account.total_balance > 0
                    AND collection.collection_id = ${collectionIdPlaceholder}
                    ${searchCondition}
                GROUP BY tg.id
                HAVING COUNT(DISTINCT token.id) >= 2
            ),
            -- ungrouped_tokens: tokens without a qualifying group
            ungrouped_tokens AS (
                SELECT
                    token.id AS id
                FROM token_account
                INNER JOIN token ON token_account.token_id = token.id
                INNER JOIN collection ON token.collection_id = collection.id
                LEFT JOIN token_group_token tgt ON token.id = tgt.token_id
                LEFT JOIN token_group tg ON tgt.token_group_id = tg.id
                    AND tg.id IN (SELECT id FROM groups_data)
                WHERE token_account.account_id IN (${accountIdPlaceholders})
                    AND token_account.total_balance > 0
                    AND collection.collection_id = ${collectionIdPlaceholder}
                    ${searchCondition}
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
                .where('tg.id IN (:...groupIds)', { groupIds: pageGroupIds })
                .getMany()

            // Get owned counts for each group
            const groupOwnedCounts = await manager
                .getRepository(TokenAccount)
                .createQueryBuilder('token_account')
                .innerJoin('token_account.token', 'token')
                .innerJoin('token.collection', 'collection')
                .innerJoin('token.tokenGroupTokens', 'tgt')
                .innerJoin('tgt.tokenGroup', 'tg')
                .select('tg.id', 'group_id')
                .addSelect('COUNT(DISTINCT token.id)', 'token_count')
                .where('tg.id IN (:...groupIds)', { groupIds: pageGroupIds })
                .andWhere('token_account.account_id IN (:...accountIds)', { accountIds })
                .andWhere('token_account.total_balance > 0')
                .andWhere('collection.collection_id = :collectionId', { collectionId })
                .groupBy('tg.id')
                .getRawMany()

            const ownedCountMap = new Map(
                groupOwnedCounts.map((row) => [String(row.group_id), parseInt(row.token_count, 10)])
            )

            for (const group of groupDetails) {
                const groupId = String(group.id)
                const ownedCount = ownedCountMap.get(groupId) || 0

                const collectionAttrs = (group.collection?.attributes || [])
                    .filter((attr: any) => !attr.token)
                    .map((attr: any) => ({
                        key: attr.key,
                        value: attr.value,
                    }))

                groupsMap.set(groupId, {
                    ownedCount,
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
                WITH ranked_tokens AS (
                    SELECT
                        tg.id AS group_id,
                        token.id AS token_id,
                        ROW_NUMBER() OVER (PARTITION BY tg.id ORDER BY token.id) AS rn
                    FROM token_account
                    INNER JOIN token ON token_account.token_id = token.id
                    INNER JOIN token_group_token tgt ON token.id = tgt.token_id
                    INNER JOIN token_group tg ON tgt.token_group_id = tg.id
                    WHERE tg.id IN (${groupTokensPlaceholders})
                        AND token_account.account_id IN (${accountIdsPlaceholders})
                        AND token_account.total_balance > 0
                )
                SELECT group_id, token_id
                FROM ranked_tokens
                WHERE rn <= 4
                ORDER BY group_id, rn
                `,
                [...pageGroupIds, ...accountIds]
            )

            for (const row of groupTokens) {
                const groupId = String(row.group_id)
                const groupData = groupsMap.get(groupId)
                if (groupData) {
                    groupData.tokenIds.push(String(row.token_id))
                }
            }
        }

        // Collect all token IDs (page tokens + group tokens)
        const allGroupTokenIds = Array.from(groupsMap.values()).flatMap((g) => g.tokenIds)
        const allTokenIds = [...new Set([...pageTokenIds, ...allGroupTokenIds])]

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

            for (const token of tokenDetails) {
                const collectionAttrs = (token.collection?.attributes || [])
                    .filter((attr: any) => !attr.token)
                    .map((attr: any) => ({
                        key: attr.key,
                        value: attr.value,
                    }))

                tokensMap.set(String(token.id), {
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
            let orderValue: string = ''
            if (pageItem) {
                switch (orderBy) {
                    case CollectionInventoryOrderByInput.OWNED_COUNT:
                        orderValue = pageItem.owned_count?.toString() || ''
                        break
                    case CollectionInventoryOrderByInput.CREATED_AT:
                        orderValue = pageItem.created_at ? new Date(pageItem.created_at).toISOString() : ''
                        break
                    case CollectionInventoryOrderByInput.TOKEN_ID:
                        orderValue = pageItem.token_id?.toString() || ''
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
