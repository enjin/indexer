/* eslint-disable max-classes-per-file */

import { Field, ObjectType, Query, Resolver, ID, Int, registerEnumType, ArgsType, Args } from 'type-graphql'
import { Json, BigInteger } from '@subsquid/graphql-server'
import 'reflect-metadata'
import type { EntityManager } from 'typeorm'
// eslint-disable-next-line import/no-extraneous-dependencies
import { Validate, ValidatorConstraint, ValidatorConstraintInterface } from 'class-validator'
import { Collection, FreezeState, Listing, Token, TokenAccount } from '../../model'
import { isValidAddress } from '../../common/tools'

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
    name: 'MyTokensOrderBy',
})

registerEnumType(Order, {
    name: 'MyTokensOrder',
})

registerEnumType(FreezeState, {
    name: 'MyTokensFreezeState',
})

@ValidatorConstraint({ name: 'PublicKey', async: false })
export class IsPublicKey implements ValidatorConstraintInterface {
    validate(value: string) {
        return isValidAddress(value)
    }

    defaultMessage() {
        return 'Invalid public key!'
    }
}

@ArgsType()
class MyTokenArgs {
    @Field(() => ID)
    @Validate(IsPublicKey)
    accountId!: string

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
}

@ObjectType()
class MyTokensCollection {
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
class MyTokensOwner {
    @Field(() => ID)
    id!: string

    @Field(() => BigInteger)
    balance!: typeof BigInteger

    @Field(() => Boolean)
    isFrozen!: boolean
}

@ObjectType()
class MyTokensBestListing {
    @Field(() => ID)
    id!: string

    @Field(() => BigInteger)
    highestPrice!: typeof BigInteger

    @Field(() => Json)
    state!: typeof Json

    @Field(() => Json)
    data!: typeof Json
}

@ObjectType()
export class MyTokensToken {
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

    @Field(() => MyTokensCollection)
    collection!: MyTokensCollection

    @Field(() => MyTokensBestListing, { nullable: true })
    bestListing!: MyTokensBestListing

    @Field(() => MyTokensOwner, { nullable: false })
    owner!: MyTokensOwner

    constructor(props: Partial<MyTokensResponse>) {
        Object.assign(this, props)
    }
}

@ObjectType()
export class MyTokensResponse {
    @Field(() => [MyTokensToken])
    data!: MyTokensToken[]

    @Field(() => Int)
    count!: number

    constructor(props: Partial<MyTokensResponse>) {
        Object.assign(this, props)
    }
}

@Resolver()
export class MyTokensResolver {
    constructor(private tx: () => Promise<EntityManager>) {}

    @Query(() => MyTokensResponse)
    async myTokens(@Args() { accountId, limit, offset, order, orderBy, query }: MyTokenArgs): Promise<MyTokensResponse> {
        const manager = await this.tx()

        const builder = manager
            .getRepository(Token)
            .createQueryBuilder('token')
            .innerJoinAndMapOne('token.collection', Collection, 'collection', 'token.collection = collection.id')
            .leftJoinAndMapOne('token.bestListing', Listing, 'listing', 'listing.makeAssetId = token.id')
            .innerJoinAndMapOne(
                'token.owner',
                TokenAccount,
                'token_account',
                'token_account.token = token.id AND token_account.account = :accountId',
                { accountId }
            )
            .orderBy(orderBy, order, 'NULLS LAST')
            .skip(offset)
            .limit(limit)

        if (query) {
            builder.where("collection.metadata->>'name' ILIKE :query OR token.metadata->>'name' ILIKE :query", {
                query: `%${query}%`,
            })
        }

        const [data, count] = (await builder.getManyAndCount()) as any[]

        return { data, count }
    }
}
