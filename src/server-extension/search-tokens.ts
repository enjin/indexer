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

    @Field(() => String)
    @Validate(IsPublicKey)
    publicKey!: string
}

@ObjectType()
export class SearchTokensAttribute {
    @Field(() => String)
    key!: string

    @Field(() => String, { nullable: true })
    value?: string
}

@ObjectType()
export class SearchTokensCap {
    @Field(() => String)
    type!: string

    @Field(() => BigInteger)
    supply!: typeof BigInteger
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

    @Field(() => SearchTokensCap, { nullable: true })
    cap?: SearchTokensCap

    @Field(() => Boolean)
    nonFungible!: boolean

    @Field()
    createdAt!: Date

    @Field(() => Json, { nullable: true })
    metadata?: typeof Json

    @Field(() => [SearchTokensAttribute], { nullable: true })
    attributes?: SearchTokensAttribute[]

    constructor(props: Partial<SearchTokensToken>) {
        Object.assign(this, props)
    }
}

@ObjectType()
export class SearchTokensCollectionWithTokens {
    @Field(() => ID)
    id!: string

    @Field(() => SearchTokensCollectionOwner)
    owner!: SearchTokensCollectionOwner

    @Field(() => Json, { nullable: true })
    metadata?: typeof Json

    @Field(() => [SearchTokensAttribute], { nullable: true })
    attributes?: SearchTokensAttribute[]

    @Field(() => [SearchTokensToken])
    tokens!: SearchTokensToken[]

    constructor(props: Partial<SearchTokensCollectionWithTokens>) {
        Object.assign(this, props)
    }
}

@Resolver()
export class SearchTokensResolver {
    constructor(private tx: () => Promise<EntityManager>) {}

    @Query(() => [SearchTokensCollectionWithTokens])
    async searchTokens(@Args() { query, publicKey }: SearchTokensArgs): Promise<SearchTokensCollectionWithTokens[]> {
        const manager = await this.tx()

        if (!/^\d+(-\d+)?$/.test(query)) {
            throw new Error(
                'Query must contain only numbers and optionally a dash (format: tokenId to search across collections, or collectionId-tokenId for a specific token)'
            )
        }

        const metadataKeys = ['name', 'description', 'fallback_image', 'banner_image', 'media', 'uri', 'external_url']

        const builder = manager
            .getRepository(Collection)
            .createQueryBuilder('collection')
            .leftJoin('collection.owner', 'owner')
            .addSelect('owner.id')
            .leftJoinAndSelect(
                'collection.attributes',
                'collectionAttrs',
                'collectionAttrs.token IS NULL AND collectionAttrs.key IN (:...metadataKeys)',
                { metadataKeys }
            )

        builder.where('collection.owner = :publicKey', { publicKey })

        if (query.includes('-')) {
            const [collectionId, tokenId] = query.split('-')
            builder
                .andWhere('collection.collection_id = :collectionId', { collectionId })
                .leftJoinAndSelect('collection.tokens', 'token', 'token.token_id = :tokenId', { tokenId })
        } else {
            builder.leftJoinAndSelect('collection.tokens', 'token', 'token.token_id::text LIKE :tokenId', {
                tokenId: `${query}%`,
            })
        }

        builder.leftJoinAndSelect('token.attributes', 'tokenAttrs', 'tokenAttrs.key IN (:...metadataKeys)', {
            metadataKeys,
        })

        builder.orderBy('token.created_at', 'DESC')

        return (await builder.getMany()) as any[]
    }
}
