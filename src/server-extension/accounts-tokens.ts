import { Field, ObjectType, Query, Resolver, ID, Int, registerEnumType, ArgsType, Args } from 'type-graphql'
import { Json, BigInteger } from '@subsquid/graphql-server'
import 'reflect-metadata'
import type { EntityManager } from 'typeorm'
import { Validate, ValidatorConstraint, ValidatorConstraintInterface } from 'class-validator'
import { Collection, FreezeState, Listing, Token, TokenAccount } from '../model'
import { isValidAddress } from '../util/tools'

enum OrderBy {
    COLLECTION_NAME = "collection.metadata->>'name'",
    TOKEN_NAME = "token.metadata->>'name'",
    FLOOR_PRICE = 'listing.highestPrice',
    DATE = 'token.createdAt',
}

enum Order {
    ASC = 'ASC',
    DESC = 'DESC',
}

registerEnumType(OrderBy, {
    name: 'AccountsTokensOrderBy',
})

registerEnumType(Order, {
    name: 'AccountsTokensOrder',
})

registerEnumType(FreezeState, {
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

    @Field(() => OrderBy)
    orderBy!: OrderBy

    @Field(() => Order)
    order!: Order

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
class AccountsTokensCollection {
    @Field(() => ID)
    id!: string

    @Field(() => BigInteger)
    collectionId!: typeof BigInteger

    @Field(() => Json)
    metadata!: typeof Json

    @Field(() => Json)
    stats!: typeof Json
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
    freezeState!: FreezeState

    @Field(() => Json, { nullable: true })
    metadata!: typeof Json

    @Field(() => Boolean)
    nonFungible!: boolean

    @Field()
    createdAt!: Date

    @Field(() => AccountsTokensCollection)
    collection!: AccountsTokensCollection

    @Field(() => [AccountsTokensOwner], { nullable: false })
    owners!: AccountsTokensOwner[]

    constructor(props: Partial<AccountsTokensResponse>) {
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

        const builder = manager
            .getRepository(Token)
            .createQueryBuilder('token')
            .innerJoinAndMapOne('token.collection', Collection, 'collection', 'token.collection = collection.id')
            .innerJoin(
                TokenAccount,
                'token_account',
                'token_account.token = token.id AND token_account.account IN (:...accountIds)',
                { accountIds }
            )
            .groupBy('token.id, collection.id')
            .orderBy(orderBy, order, 'NULLS LAST')
            .skip(offset)
            .limit(limit)

        if (collectionId) {
            builder.andWhere('collection.collectionId = :collectionId', { collectionId })
        }

        if (query) {
            builder.andWhere("collection.metadata->>'name' ILIKE :query OR token.metadata->>'name' ILIKE :query", {
                query: `%${query}%`,
            })
        }

        const [tokens, count] = (await builder.getManyAndCount()) as any[]

        // If no tokens found, return early
        if (tokens.length === 0) {
            return { data: [], count }
        }

        const tokenIds = tokens.map((token: { id: string }) => token.id)

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

        const data = tokens.map((token: { id: string }) => {
            const tokenObj = token as any
            const accounts = tokenAccountsByToken[token.id] || []

            // Create owner objects for each account (with their listings)
            tokenObj.owners = accounts.map((ta) => {
                const accountId = ta.account.id
                const key = `${token.id}-${accountId}`
                const ownerListings = listingsByTokenAndAccount[key] || []

                return {
                    id: ta.id,
                    balance: ta.balance,
                    reservedBalance: ta.reservedBalance,
                    isFrozen: ta.isFrozen,
                    accountId: accountId,
                    updatedAt: ta.updatedAt,
                    createdAt: ta.createdAt,
                    listings: ownerListings.map((listing) => ({
                        id: listing.id,
                        highestPrice: listing.highestPrice,
                        state: listing.state,
                        data: listing.data,
                        makeAssetId: listing.makeAssetId,
                    })),
                }
            })

            return tokenObj
        })

        return { data, count }
    }
}
