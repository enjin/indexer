import { Field, ObjectType, Query, Resolver, ID, Int, registerEnumType, ArgsType, Args } from 'type-graphql'
import { Json, BigInteger } from '@subsquid/graphql-server'
import 'reflect-metadata'
import type { EntityManager } from 'typeorm'
import { Validate, ValidatorConstraint, ValidatorConstraintInterface } from 'class-validator'
import { Collection, Listing, Token, TokenAccount } from '~/model'
import { isValidAddress } from '~/util/tools'

enum AccountsTokensOrderByInput {
    COLLECTION_NAME = 'collection.name',
    TOKEN_NAME = 'token.name',
    DATE = 'token.createdAt',
}

enum AccountsTokensOrderInput {
    ASC = 'ASC',
    DESC = 'DESC',
}

enum AccountsTokensFreezeState {
    Permanent = 'Permanent',
    Temporary = 'Temporary',
    Never = 'Never',
}

registerEnumType(AccountsTokensOrderByInput, {
    name: 'AccountsTokensOrderByInput',
})

registerEnumType(AccountsTokensOrderInput, {
    name: 'AccountsTokensOrderInput',
})

registerEnumType(AccountsTokensFreezeState, {
    name: 'AccountsTokensFreezeState',
})

@ValidatorConstraint({ name: 'PublicKeyArray', async: false })
export class IsPublicKeyArray implements ValidatorConstraintInterface {
    validate(value: string[]) {
        if (!Array.isArray(value)) return false
        return value.every((address) => isValidAddress(address))
    }

    defaultMessage() {
        return 'One or more invalid public keys in the array!'
    }
}

@ArgsType()
class AccountsTokensArgs {
    @Field(() => [String])
    @Validate(IsPublicKeyArray)
    accountIds!: string[]

    @Field(() => AccountsTokensOrderByInput)
    orderBy!: AccountsTokensOrderByInput

    @Field(() => AccountsTokensOrderInput)
    order!: AccountsTokensOrderInput

    @Field(() => Int, { defaultValue: 0 })
    offset: number = 0

    @Field(() => Int, { defaultValue: 10 })
    limit: number = 10

    @Field(() => String, { nullable: true })
    query?: string

    @Field(() => String, { nullable: true })
    collectionId?: string
}

@ObjectType()
class AccountsTokensListing {
    @Field(() => ID)
    id!: string

    @Field(() => BigInteger)
    highestPrice!: typeof BigInteger

    @Field(() => Json)
    state!: typeof Json

    @Field(() => Json)
    data!: typeof Json

    @Field(() => Json)
    makeAssetId!: typeof Json
}

@ObjectType()
class AccountsTokensOwner {
    @Field(() => ID)
    id!: string

    @Field(() => BigInteger)
    balance!: typeof BigInteger

    @Field(() => Boolean)
    isFrozen!: boolean

    @Field(() => String)
    accountId!: string

    @Field(() => BigInteger)
    reservedBalance!: typeof BigInteger

    @Field()
    updatedAt!: Date

    @Field()
    createdAt!: Date

    @Field(() => [AccountsTokensListing], { nullable: true })
    listings!: AccountsTokensListing[]
}

@ObjectType()
class AccountsTokensAttribute {
    @Field(() => String)
    key!: string

    @Field(() => String, { nullable: true })
    value?: string
}

@ObjectType()
class AccountsTokensCollection {
    @Field(() => ID)
    id!: string

    @Field(() => BigInteger)
    collectionId!: typeof BigInteger

    @Field(() => Json, { nullable: true })
    metadata!: typeof Json

    @Field(() => Json)
    stats!: typeof Json

    @Field(() => [AccountsTokensAttribute], { nullable: true })
    attributes?: AccountsTokensAttribute[]
}

@ObjectType()
export class AccountsTokensToken {
    @Field(() => ID)
    id!: string

    @Field(() => BigInteger)
    tokenId!: typeof BigInteger

    @Field(() => BigInteger)
    supply!: typeof BigInteger

    @Field(() => Boolean)
    isFrozen!: boolean

    @Field({ nullable: true })
    freezeState!: AccountsTokensFreezeState

    @Field(() => Json, { nullable: true })
    metadata!: typeof Json

    @Field(() => Boolean)
    nonFungible!: boolean

    @Field()
    createdAt!: Date

    @Field(() => AccountsTokensCollection)
    collection!: AccountsTokensCollection

    @Field(() => [AccountsTokensAttribute], { nullable: true })
    attributes?: AccountsTokensAttribute[]

    @Field(() => [AccountsTokensOwner], { nullable: false })
    owners!: AccountsTokensOwner[]

    constructor(props: Partial<AccountsTokensToken>) {
        Object.assign(this, props)
    }
}

@ObjectType()
export class AccountsTokensResponse {
    @Field(() => [AccountsTokensToken])
    data!: AccountsTokensToken[]

    @Field(() => Int)
    count!: number

    constructor(props: Partial<AccountsTokensResponse>) {
        Object.assign(this, props)
    }
}

@Resolver()
export class AccountsTokensResolver {
    constructor(private tx: () => Promise<EntityManager>) {}

    @Query(() => AccountsTokensResponse)
    async accountsTokens(
        @Args() { accountIds, collectionId, limit, offset, order, orderBy, query }: AccountsTokensArgs
    ): Promise<AccountsTokensResponse> {
        const manager = await this.tx()

        // Build the base query with all conditions
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

        if (query) {
            baseQuery.andWhere('collection.name ILIKE :query OR token.name ILIKE :query', {
                query: `%${query}%`,
            })
        }

        // Get the total count with the same filters
        const count = await baseQuery.select('token.id').distinct(true).getCount()

        // First get the paginated token IDs
        const tokenIds = await baseQuery
            .select(`token.id, ${orderBy}`)
            .distinctOn(['token.id', orderBy])
            .orderBy(orderBy, order, 'NULLS LAST')
            .addOrderBy('token.id', order, 'NULLS LAST')
            .offset(offset)
            .limit(limit)
            .getRawMany()
            .then((results) => results.map((row) => row.id))

        if (tokenIds.length === 0) {
            return new AccountsTokensResponse({ data: [], count })
        }

        const tokens = await manager
            .getRepository(Token)
            .createQueryBuilder('token')
            .select([
                'token.id',
                'token.tokenId',
                'token.supply',
                'token.isFrozen',
                'token.freezeState',
                'token.metadata',
                'token.nonFungible',
                'token.createdAt',
            ])
            .innerJoinAndMapOne('token.collection', Collection, 'collection', 'token.collection = collection.id')
            .addSelect(['collection.id', 'collection.collectionId', 'collection.metadata', 'collection.stats'])
            .leftJoinAndMapMany(
                'token.attributes',
                'token.attributes',
                'tokenAttrs',
                'tokenAttrs.key IN (:...tokenMetadataKeys)',
                {
                    tokenMetadataKeys: [
                        'name',
                        'description',
                        'fallback_image',
                        'banner_image',
                        'media',
                        'uri',
                        'external_url',
                    ],
                }
            )
            .leftJoinAndMapMany(
                'token.collection.attributes',
                'collection.attributes',
                'collectionAttrs',
                'collectionAttrs.token_id IS NULL AND collectionAttrs.key IN (:...collectionMetadataKeys)',
                {
                    collectionMetadataKeys: [
                        'name',
                        'description',
                        'fallback_image',
                        'banner_image',
                        'media',
                        'uri',
                        'external_url',
                    ],
                }
            )
            .where('token.id IN (:...tokenIds)', { tokenIds: tokenIds })
            .orderBy(orderBy, order, 'NULLS LAST')
            .addOrderBy('token.id', order, 'NULLS LAST')
            .getMany()

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

        const data = tokens.map((token) => {
            const accountsToken = new AccountsTokensToken({})
            accountsToken.id = token.id.toString()
            accountsToken.tokenId = token.tokenId as any
            accountsToken.supply = token.supply as any
            accountsToken.isFrozen = token.isFrozen
            accountsToken.freezeState = token.freezeState as any
            accountsToken.metadata = token.metadata as any
            accountsToken.nonFungible = token.nonFungible
            accountsToken.createdAt = token.createdAt
            accountsToken.collection = {
                id: token.collection.id.toString(),
                collectionId: token.collection.collectionId as any,
                metadata: token.collection.metadata as any,
                stats: token.collection.stats as any,
                attributes: (token.collection.attributes || []).map((attr: any) => ({
                    key: attr.key,
                    value: attr.value,
                })),
            }
            accountsToken.attributes = (token.attributes || []).map((attr: any) => ({
                key: attr.key,
                value: attr.value,
            }))

            const accounts = tokenAccountsByToken[token.id] || []

            // Create owner objects for each account (with their listings)
            accountsToken.owners = accounts.map((ta) => {
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

            return accountsToken
        })

        return new AccountsTokensResponse({ data, count })
    }
}
