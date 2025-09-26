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

    @Field(() => AccountsTokensOrderByInput, { defaultValue: AccountsTokensOrderByInput.DATE })
    orderBy: AccountsTokensOrderByInput = AccountsTokensOrderByInput.DATE

    @Field(() => AccountsTokensOrderInput, { defaultValue: AccountsTokensOrderInput.DESC })
    order: AccountsTokensOrderInput = AccountsTokensOrderInput.DESC

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
            .innerJoinAndMapOne('token.collection', Collection, 'collection', 'token.collection = collection.id')
            .innerJoin(
                TokenAccount,
                'token_account',
                'token_account.token = token.id AND token_account.account IN (:...accountIds)',
                { accountIds }
            )

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

        // Handle after cursor
        if (after) {
            const afterCursor = decodeCursor(after)
            if (order === AccountsTokensOrderInput.ASC) {
                baseQuery.andWhere(`(${orderBy} > :afterValue OR (${orderBy} = :afterValue AND token.id > :afterId))`, {
                    afterValue: afterCursor.orderValue,
                    afterId: afterCursor.id,
                })
            } else {
                baseQuery.andWhere(`(${orderBy} < :afterValue OR (${orderBy} = :afterValue AND token.id > :afterId))`, {
                    afterValue: afterCursor.orderValue,
                    afterId: afterCursor.id,
                })
            }
        }

        // Get total count
        const totalCount = await baseQuery.select('token.id').distinct(true).getCount()

        // Get one extra to determine if there are more pages
        const tokenData = await baseQuery
            .select(`token.id, ${orderBy} as orderValue`)
            .distinctOn(['token.id', orderBy])
            .orderBy(orderBy, order, 'NULLS LAST')
            .addOrderBy('token.id', order, 'NULLS LAST')
            .limit(limit + 1)
            .getRawMany()

        // Check if we have more pages
        const hasNextPage = tokenData.length > limit
        if (hasNextPage) {
            tokenData.pop() // Remove the extra item
        }

        const tokenIds = tokenData.map((row) => row.id)

        if (tokenIds.length === 0) {
            return new AccountsTokensConnection({
                edges: [],
                pageInfo: new PageInfo({
                    hasNextPage: false,
                    endCursor: null,
                }),
                totalCount,
            })
        }

        // Fetch full token data
        const metadataKeys = ['name', 'description', 'fallback_image', 'banner_image', 'media', 'uri', 'external_url']

        const tokens = await manager
            .getRepository(Token)
            .createQueryBuilder('token')
            .leftJoinAndSelect('token.collection', 'collection')
            .leftJoinAndSelect('token.attributes', 'tokenAttrs', 'tokenAttrs.key IN (:...metadataKeys)')
            .leftJoinAndSelect(
                'collection.attributes',
                'collectionAttrs',
                'collectionAttrs.token IS NULL AND collectionAttrs.key IN (:...metadataKeys)'
            )
            .where('token.id IN (:...tokenIds)', { tokenIds, metadataKeys })
            .getMany()

        // Create a map for ordering
        const tokenMap = new Map(tokens.map((t) => [t.id, t]))
        const orderedTokens = tokenIds.map((id) => tokenMap.get(id)).filter(Boolean) as Token[]

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
        const edges = orderedTokens.map((token, index) => {
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

            const cursor = encodeCursor(token.id, tokenData[index].orderValue)

            return new AccountsTokensEdge({ cursor, node })
        })

        // Determine page info
        const endCursor = edges.length > 0 ? edges[edges.length - 1].cursor : null

        return new AccountsTokensConnection({
            edges,
            pageInfo: new PageInfo({
                hasNextPage,
                endCursor,
            }),
            totalCount,
        })
    }
}
