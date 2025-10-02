import { Field, ObjectType, Query, Resolver, ArgsType, Args, Int } from 'type-graphql'
import 'reflect-metadata'
import type { EntityManager } from 'typeorm'
import { Validate } from 'class-validator'
import { Collection, Listing, Token, TokenAccount, TokenGroupToken } from '~/model'
import { IsPublicKeyArray, encodeCursor, decodeCursor } from './helpers'
import { PageInfo } from './types'
import { AccountsTokensOrderByInput, AccountsTokensOrderInput, AccountsTokensToken } from './accounts-tokens'

@ArgsType()
class AccountsTokensConnectionArgs {
    @Field(() => [String])
    @Validate(IsPublicKeyArray)
    accountIds!: string[]

    @Field(() => Int, { nullable: true })
    first?: number

    @Field(() => String, { nullable: true })
    after?: string

    @Field(() => AccountsTokensOrderByInput, { defaultValue: AccountsTokensOrderByInput.TOKEN_NAME })
    orderBy: AccountsTokensOrderByInput = AccountsTokensOrderByInput.TOKEN_NAME

    @Field(() => AccountsTokensOrderInput, { defaultValue: AccountsTokensOrderInput.ASC })
    order: AccountsTokensOrderInput = AccountsTokensOrderInput.ASC

    @Field(() => String, { nullable: true })
    query?: string

    @Field(() => String, { nullable: true })
    collectionId?: string

    @Field(() => String, { nullable: true })
    tokenGroupId?: string
}

@ObjectType()
export class AccountsTokensNode extends AccountsTokensToken {}

@ObjectType()
export class AccountsTokensEdge {
    @Field(() => String)
    cursor!: string

    @Field(() => AccountsTokensNode)
    node!: AccountsTokensNode

    constructor(props: Partial<AccountsTokensEdge>) {
        Object.assign(this, props)
    }
}

@ObjectType()
export class AccountsTokensConnection {
    @Field(() => [AccountsTokensEdge])
    edges!: AccountsTokensEdge[]

    @Field(() => PageInfo)
    pageInfo!: PageInfo

    @Field(() => Int)
    totalCount!: number

    constructor(props: Partial<AccountsTokensConnection>) {
        Object.assign(this, props)
    }
}

@Resolver()
export class AccountsTokensConnectionResolver {
    constructor(private tx: () => Promise<EntityManager>) {}

    @Query(() => AccountsTokensConnection)
    async accountsTokensConnection(
        @Args()
        { accountIds, collectionId, tokenGroupId, first, after, order, orderBy, query }: AccountsTokensConnectionArgs
    ): Promise<AccountsTokensConnection> {
        const manager = await this.tx()

        // Validate pagination arguments
        if (first !== undefined && first < 0) {
            throw new Error('first must be non-negative')
        }

        // Default limit for forward pagination
        const limit = first ?? 20

        // Build the base query
        const baseQuery = manager
            .getRepository(Token)
            .createQueryBuilder('token')
            .innerJoin('token.collection', 'collection')
            .where((qb) => {
                const subQuery = qb
                    .subQuery()
                    .select('1')
                    .from(TokenAccount, 'ta')
                    .where('ta.token = token.id')
                    .andWhere('ta.account IN (:...accountIds)')
                    .getQuery()

                return `EXISTS ${subQuery}`
            })
            .setParameter('accountIds', accountIds)

        if (collectionId) {
            baseQuery.andWhere('collection.collectionId = :collectionId', { collectionId })
        }

        if (tokenGroupId) {
            baseQuery
                .innerJoin('token.tokenGroupTokens', 'tgt')
                .innerJoin('tgt.tokenGroup', 'tg')
                .andWhere('tg.id = :tokenGroupId', { tokenGroupId })
        }

        if (query) {
            baseQuery.andWhere('collection.name ILIKE :query OR token.name ILIKE :query', {
                query: `%${query}%`,
            })
        }

        const totalCount = await baseQuery.clone().getCount()

        const paginationQuery = baseQuery.clone()

        if (after) {
            const { id: afterId, orderValue: afterValue } = decodeCursor(after)

            const comparison = order === AccountsTokensOrderInput.ASC ? '>' : '<'

            // Handle NULL values (encoded as empty string)
            if (afterValue === '') {
                paginationQuery.andWhere(`(${orderBy} IS NULL AND token.id ${comparison} :afterId)`, { afterId })
            } else {
                paginationQuery.andWhere(
                    `(${orderBy} ${comparison} :afterValue OR (${orderBy} = :afterValue AND token.id ${comparison} :afterId))`,
                    { afterValue, afterId }
                )
            }
        }

        // Get one extra to check hasNextPage
        const rawRows = await paginationQuery
            .select('token.id', 'token_id')
            .addSelect(orderBy, 'order_value')
            .orderBy(orderBy, order, 'NULLS LAST')
            .addOrderBy('token.id', order, 'NULLS LAST')
            .limit(limit + 1)
            .getRawMany()

        const tokenData = rawRows.map((row) => ({
            id: String(row.token_id),
            orderValue: row.order_value?.toString() || '',
        }))

        // Check if we have more pages
        const hasNextPage = tokenData.length > limit
        if (hasNextPage) {
            tokenData.pop() // Remove the extra item used in the pagination
        }

        const tokenIds = tokenData.map((row) => row.id)
        const orderValueMap = new Map(tokenData.map((td) => [td.id, td.orderValue]))

        if (tokenIds.length === 0) {
            return new AccountsTokensConnection({
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

        const metadataKeys = ['name', 'description', 'fallback_image', 'banner_image', 'media', 'uri', 'external_url']

        const tokens = await manager
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
            .where('token.id IN (:...tokenIds)', { tokenIds })
            .orderBy(orderBy, order, 'NULLS LAST')
            .addOrderBy('token.id', order, 'NULLS LAST')
            .getMany()

        // Fetch related data
        const tokenAccounts = await manager
            .getRepository(TokenAccount)
            .createQueryBuilder('token_account')
            .innerJoinAndSelect('token_account.token', 'token', 'token.id IN (:...tokenIds)', { tokenIds })
            .innerJoinAndSelect('token_account.account', 'account', 'account.id IN (:...accountIds)', { accountIds })
            .getMany()

        const listings = await manager
            .getRepository(Listing)
            .createQueryBuilder('listing')
            .leftJoinAndSelect('listing.makeAssetId', 'makeAsset')
            .leftJoinAndSelect('listing.seller', 'seller')
            .where('listing.makeAssetId.id IN (:...tokenIds) AND seller.id IN (:...accountIds)', {
                tokenIds,
                accountIds,
            })
            .andWhere('listing.is_active = true')
            .getMany()

        // Group data
        const tokenAccountsByToken = tokenAccounts.reduce(
            (acc, ta) => {
                const tokenId = ta.token.id as unknown as string
                if (!acc[tokenId]) {
                    acc[tokenId] = []
                }
                acc[tokenId].push(ta)
                return acc
            },
            {} as Record<string, any[]>
        )

        const listingsByTokenAndAccount = listings.reduce(
            (acc, listing) => {
                const tokenId = listing.makeAssetId.id
                const accountId = listing.seller.id
                const key = `${tokenId}-${accountId}`
                if (!acc[key]) {
                    acc[key] = []
                }
                acc[key].push(listing)
                return acc
            },
            {} as Record<string, any[]>
        )

        // Create edges
        const edges = tokens.map((token, index) => {
            const node = new AccountsTokensNode({
                id: token.id.toString(),
                tokenId: token.tokenId as any,
                supply: token.supply as any,
                isFrozen: token.isFrozen,
                freezeState: token.freezeState as any,
                metadata: token.metadata as any,
                nonFungible: token.nonFungible,
                createdAt: token.createdAt,
                collection: {
                    id: token.collection.id.toString(),
                    collectionId: token.collection.collectionId as any,
                    metadata: token.collection.metadata as any,
                    stats: token.collection.stats as any,
                    attributes: (token.collection.attributes || []).map((attr: any) => ({
                        key: attr.key,
                        value: attr.value,
                    })),
                },
                attributes: (token.attributes || []).map((attr: any) => ({
                    key: attr.key,
                    value: attr.value,
                })),
                owners: [],
            })

            const accounts = tokenAccountsByToken[token.id] || []
            node.owners = accounts.map((ta) => {
                const accountId = ta.account.id
                const key = `${token.id}-${accountId}`
                const ownerListings = listingsByTokenAndAccount[key] || []

                return {
                    id: ta.id.toString(),
                    balance: ta.balance,
                    reservedBalance: ta.reservedBalance,
                    isFrozen: ta.isFrozen,
                    accountId: accountId,
                    updatedAt: ta.updatedAt,
                    createdAt: ta.createdAt,
                    listings: ownerListings.map((listing) => ({
                        id: listing.id.toString(),
                        highestPrice: listing.highestPrice,
                        state: listing.state,
                        data: listing.data,
                        makeAssetId: listing.makeAssetId,
                    })),
                }
            })

            const cursor = encodeCursor(token.id, orderValueMap.get(token.id.toString()) || '')

            return new AccountsTokensEdge({ cursor, node })
        })

        // Determine page info
        const startCursor = edges.length > 0 ? edges[0].cursor : ''
        const endCursor = edges.length > 0 ? edges[edges.length - 1].cursor : ''

        return new AccountsTokensConnection({
            edges,
            pageInfo: new PageInfo({
                hasNextPage,
                hasPreviousPage: !!after,
                startCursor,
                endCursor,
            }),
            totalCount,
        })
    }
}
