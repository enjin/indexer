import { Field, ObjectType, Query, Resolver, ID, Int, ArgsType, Args } from 'type-graphql'
import { Json, BigInteger } from '@subsquid/graphql-server'
import 'reflect-metadata'
import type { EntityManager } from 'typeorm'
import { Validate } from 'class-validator'
import { Collection, Token, TokenAccount } from '~/model'
import { IsPublicKey } from './helpers'

@ArgsType()
class SearchTokensArgs {
    @Field(() => String)
    query!: string

    @Field(() => ID)
    @Validate(IsPublicKey)
    publicKey!: string

    @Field(() => Int, { defaultValue: 0 })
    offset: number = 0

    @Field(() => Int, { defaultValue: 10 })
    limit: number = 10
}

@ObjectType()
export class SearchTokensAttribute {
    @Field(() => String)
    key!: string

    @Field(() => String, { nullable: true })
    value?: string
}

@ObjectType()
export class SearchTokensCollectionOwner {
    @Field(() => ID)
    id!: string
}

@ObjectType()
export class SearchTokensCollection {
    @Field(() => ID)
    id!: string

    @Field(() => SearchTokensCollectionOwner)
    owner!: SearchTokensCollectionOwner

    @Field(() => [SearchTokensAttribute], { nullable: true })
    attributes?: SearchTokensAttribute[]
}

@ObjectType()
export class SearchTokensToken {
    @Field(() => ID)
    id!: string

    @Field(() => BigInteger)
    tokenId!: typeof BigInteger

    @Field(() => BigInteger)
    supply!: typeof BigInteger

    @Field(() => Boolean)
    nonFungible!: boolean

    @Field()
    createdAt!: Date

    @Field(() => SearchTokensCollection)
    collection!: SearchTokensCollection

    @Field(() => [SearchTokensAttribute], { nullable: true })
    attributes?: SearchTokensAttribute[]

    constructor(props: Partial<SearchTokensToken>) {
        Object.assign(this, props)
    }
}

@ObjectType()
export class SearchTokensResponse {
    @Field(() => [SearchTokensToken])
    data!: SearchTokensToken[]

    @Field(() => Int)
    count!: number

    constructor(props: Partial<SearchTokensResponse>) {
        Object.assign(this, props)
    }
}

@Resolver()
export class SearchTokensResolver {
    constructor(private tx: () => Promise<EntityManager>) {}

    @Query(() => SearchTokensResponse)
    async searchTokens(@Args() { query, publicKey, limit, offset }: SearchTokensArgs): Promise<SearchTokensResponse> {
        const manager = await this.tx()

        if (!/^\d+(-\d+)?$/.test(query)) {
            throw new Error(
                'Query must contain only numbers and optionally a dash (format: collectionId or collectionId-tokenId)'
            )
        }

        const metadataKeys = ['name', 'description', 'fallback_image', 'banner_image', 'media', 'uri', 'external_url']

        const builder = manager
            .getRepository(Token)
            .createQueryBuilder('token')
            .leftJoinAndSelect('token.collection', 'collection')
            .leftJoin('collection.owner', 'owner')
            .addSelect('owner.id')
            .leftJoinAndSelect('token.attributes', 'tokenAttrs', 'tokenAttrs.key IN (:...metadataKeys)', {
                metadataKeys,
            })
            .leftJoinAndSelect(
                'collection.attributes',
                'collectionAttrs',
                'collectionAttrs.token IS NULL AND collectionAttrs.key IN (:...metadataKeys)',
                { metadataKeys }
            )

        let whereClause = 'collection.owner = :publicKey'

        if (query.includes('-')) {
            const [collectionId, tokenId] = query.split('-')
            builder.where(`${whereClause} AND collection.collection_id = :collectionId AND token.token_id = :tokenId`, {
                publicKey,
                collectionId,
                tokenId,
            })
        } else {
            builder.where(`${whereClause} AND token.token_id::text LIKE :tokenId`, {
                publicKey,
                tokenId: `${query}%`,
            })
        }

        builder.orderBy('token.created_at', 'DESC').skip(offset).limit(limit)

        const [data, count] = (await builder.getManyAndCount()) as any[]

        return { data, count }
    }
}
