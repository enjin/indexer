import { Field, ObjectType, Query, Resolver, ID, Int, registerEnumType, ArgsType, Args } from 'type-graphql'
import { Json, BigInteger } from '@subsquid/graphql-server'
import 'reflect-metadata'
import { EntityManager, SelectQueryBuilder } from 'typeorm'
import { Validate, ValidatorConstraint, ValidatorConstraintInterface } from 'class-validator'
import { Collection, FreezeState, Listing, Token, TokenAccount } from '~/model'
import { isValidAddress } from '~/util/tools'
import { GraphQLScalarType } from 'graphql/type/definition';

enum MyTokensOrderByInput {
    COLLECTION_NAME = "collection.metadata->>'name'",
    TOKEN_NAME = "token.metadata->>'name'",
    FLOOR_PRICE = 'listing.highestPrice',
    DATE = 'token.createdAt',
}

enum MyTokensOrderInput {
    ASC = 'ASC',
    DESC = 'DESC',
}

registerEnumType(MyTokensOrderByInput, {
    name: 'MyTokensOrderByInput',
})

registerEnumType(MyTokensOrderInput, {
    name: 'MyTokensOrderInput',
})

registerEnumType(FreezeState, {
    name: 'MyTokensFreezeStateInput',
})

@ValidatorConstraint({ name: 'PublicKey', async: false })
export class IsPublicKey implements ValidatorConstraintInterface {
    validate(value: string): boolean {
        return isValidAddress(value)
    }

    defaultMessage(): string {
        return 'Invalid public key!'
    }
}

@ArgsType()
class MyTokenArgs {
    @Field((): GraphQLScalarType => ID)
    @Validate(IsPublicKey)
    accountId!: string

    @Field((): typeof MyTokensOrderByInput => MyTokensOrderByInput)
    orderBy!: MyTokensOrderByInput

    @Field((): typeof MyTokensOrderInput => MyTokensOrderInput)
    order!: MyTokensOrderInput

    @Field((): GraphQLScalarType => Int, { defaultValue: 0 })
    offset: number = 0

    @Field((): GraphQLScalarType => Int, { defaultValue: 10 })
    limit: number = 10

    @Field((): StringConstructor => String, { nullable: true })
    query?: string
}

@ObjectType()
class MyTokensCollection {
    @Field((): GraphQLScalarType => ID)
    id!: string

    @Field((): GraphQLScalarType => BigInteger)
    collectionId!: typeof BigInteger

    @Field((): GraphQLScalarType => Json)
    metadata!: typeof Json

    @Field((): GraphQLScalarType => Json)
    stats!: typeof Json
}

@ObjectType()
class MyTokensOwner {
    @Field((): GraphQLScalarType => ID)
    id!: string

    @Field((): GraphQLScalarType => BigInteger)
    balance!: typeof BigInteger

    @Field((): BooleanConstructor => Boolean)
    isFrozen!: boolean
}

@ObjectType()
class MyTokensBestListing {
    @Field((): GraphQLScalarType => ID)
    id!: string

    @Field((): GraphQLScalarType => BigInteger)
    highestPrice!: typeof BigInteger

    @Field((): GraphQLScalarType => Json)
    state!: typeof Json

    @Field((): GraphQLScalarType => Json)
    data!: typeof Json
}

@ObjectType()
export class MyTokensToken {
    @Field((): GraphQLScalarType => ID)
    id!: string

    @Field((): GraphQLScalarType => BigInteger)
    tokenId!: typeof BigInteger

    @Field((): GraphQLScalarType => BigInteger)
    supply!: typeof BigInteger

    @Field((): BooleanConstructor => Boolean)
    isFrozen!: boolean

    @Field({ nullable: true })
    freezeState!: FreezeState

    @Field((): GraphQLScalarType => Json, { nullable: true })
    metadata!: typeof Json

    @Field((): BooleanConstructor => Boolean)
    nonFungible!: boolean

    @Field()
    createdAt!: Date

    @Field((): typeof MyTokensCollection => MyTokensCollection)
    collection!: MyTokensCollection

    @Field((): typeof MyTokensBestListing => MyTokensBestListing, { nullable: true })
    bestListing!: MyTokensBestListing

    @Field((): typeof MyTokensOwner => MyTokensOwner, { nullable: false })
    owner!: MyTokensOwner

    constructor(props: Partial<MyTokensResponse>) {
        Object.assign(this, props)
    }
}

@ObjectType()
export class MyTokensResponse {
    @Field((): (typeof MyTokensToken)[] => [MyTokensToken])
    data!: MyTokensToken[]

    @Field((): GraphQLScalarType => Int)
    count!: number

    constructor(props: Partial<MyTokensResponse>) {
        Object.assign(this, props)
    }
}

@Resolver()
export class MyTokensResolver {
    constructor(private tx: () => Promise<EntityManager>) {}

    @Query((): typeof MyTokensResponse => MyTokensResponse)
    async myTokens(
        @Args() { accountId, limit, offset, order, orderBy, query }: MyTokenArgs
    ): Promise<MyTokensResponse> {
        const manager: EntityManager = await this.tx()

        const builder: SelectQueryBuilder<Token> = manager
            .getRepository(Token)
            .createQueryBuilder('token')
            .innerJoinAndMapOne('token.collection', Collection, 'collection', 'token.collection = collection.id')
            .leftJoinAndMapOne('token.bestListing', Listing, 'listing', 'listing.makeAssetId = token.id and listing.is_active = true')
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
