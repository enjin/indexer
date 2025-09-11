import {
    Field,
    ObjectType,
    Query,
    Resolver,
    Arg,
    registerEnumType,
    ID,
    Int,
    Root,
    FieldResolver,
    InputType,
    ArgsType,
    Args,
} from 'type-graphql'
import { BigInteger, Json } from '@subsquid/graphql-server'
import 'reflect-metadata'
import type { EntityManager } from 'typeorm'
import { Collection, Listing, ListingSale, ListingStatus, Token } from '~/model'
import { DateTimeColumn as DateTimeColumn_ } from '@subsquid/typeorm-store/lib/decorators/columns/DateTimeColumn'
import { timeFrameMap } from './types'

enum TopCollectionOrderByInput {
    CREATED_AT = '"createdAt"',
    VOLUME = 'volume',
    SALES = 'sales',
    VOLUME_CHANGE = '"volumeChange"',
    USERS = 'users',
    CATEGORY = 'category',
    TRENDING = '"trendingScore"',
    TOP = '"topScore"',
}

enum TopCollectionOrderInput {
    ASC = 'ASC',
    DESC = 'DESC',
}

enum TopCollectionTimeframeInput {
    HOUR = 'HOUR',
    HOUR_6 = 'HOUR_6',
    HOUR_24 = 'HOUR_24',
    WEEK = 'WEEK',
    MONTH = 'MONTH',
    YEAR = 'YEAR',
    ALL = 'ALL',
}

registerEnumType(TopCollectionTimeframeInput, {
    name: 'TopCollectionTimeframeInput',
})

registerEnumType(TopCollectionOrderByInput, {
    name: 'TopCollectionOrderByInput',
})

registerEnumType(TopCollectionOrderInput, {
    name: 'TopCollectionOrderInput',
})

@ObjectType()
export class TopCollection {
    @Field(() => ID, { nullable: false })
    id!: string

    @Field(() => [CollectionAttribute])
    attributes!: CollectionAttribute[]

    @Field(() => Json, { nullable: true })
    metadata!: typeof Json

    @Field({ nullable: true })
    category!: string

    @Field({ nullable: true })
    verifiedAt!: string

    @Field({ nullable: false })
    createdAt!: string

    @Field(() => Json, { nullable: true })
    stats!: typeof JSON

    @Field({ nullable: true })
    volumeChange!: string

    @Field({ nullable: false })
    volume!: string

    @Field(() => Int, { nullable: false })
    sales!: number

    @Field(() => Int, { nullable: false })
    users!: number

    @Field({ nullable: true })
    trendingScore!: string

    @Field({ nullable: true })
    topScore!: string

    @Field({ nullable: true })
    maxVolume!: string

    @Field({ nullable: true })
    maxSales!: string

    constructor(props: Partial<TopCollection>) {
        Object.assign(this, props)
    }
}

@ObjectType()
class CollectionAttribute {
    @Field(() => ID)
    id!: string

    @Field({ nullable: false })
    key!: string

    @Field({ nullable: false })
    value!: string

    @Field(() => BigInteger)
    deposit!: typeof BigInteger

    @Field(() => TopCollection)
    collection!: TopCollection

    @DateTimeColumn_({ nullable: false })
    createdAt!: Date

    @DateTimeColumn_({ nullable: false })
    updatedAt!: Date
}

@InputType()
class FilterCondition {
    @Field(() => Boolean, { nullable: true })
    token_isNull?: boolean

    @Field(() => String, { nullable: true })
    key_eq?: string

    @Field(() => [String], { nullable: true })
    key_in?: string[]
}

@InputType()
class CollectionAttributeWhereInput {
    @Field(() => [FilterCondition], { nullable: true })
    AND?: FilterCondition[]
}

@ArgsType()
export class TopCollectionArgs {
    @Field(() => TopCollectionTimeframeInput)
    timeFrame!: TopCollectionTimeframeInput

    @Field(() => TopCollectionOrderByInput)
    orderBy!: TopCollectionOrderByInput

    @Field(() => [String], { nullable: true, defaultValue: [] })
    category!: string[]

    @Field(() => String, { nullable: true, description: 'Search by collection name' })
    query!: string

    @Field(() => TopCollectionOrderInput)
    order!: TopCollectionOrderInput

    @Field(() => Int)
    offset: number = 0

    @Field(() => Int)
    limit: number = 10
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
@Resolver((of) => TopCollection)
export class TopCollectionResolver {
    constructor(private tx: () => Promise<EntityManager>) {}

    @Query(() => [TopCollection])
    async topCollection(@Args() args: TopCollectionArgs): Promise<TopCollection[]> {
        const { timeFrame, orderBy, category, query, order, offset, limit } = args
        const manager = await this.tx()

        const builder = manager
            .createQueryBuilder()
            .select('*')
            .addSelect(
                '(COALESCE(0.35 * (volume::numeric / "maxVolume"::numeric),0) + ' +
                    'COALESCE(0.35 * (sales::numeric / "maxSales"::numeric), 0) +' +
                    'COALESCE(0.20 * (avg_sale_change::numeric / NULLIF(MAX(avg_sale_change) OVER(), 0)::numeric),0) +' +
                    'COALESCE(0.10 * (users::numeric / NULLIF(MAX(users) OVER(), 0)::numeric), 0)) AS "trendingScore"'
            )
            .addSelect(
                `(0.80 * COALESCE(volume::numeric / "maxVolume"::numeric, 0) + 0.20 * COALESCE(sales::numeric / "maxSales"::numeric)) AS "topScore"`
            )
            .addFrom((mqb) => {
                mqb.addSelect('collectionId AS id')
                    .addSelect(
                        `(SELECT COUNT(*)::int FROM collection_account a WHERE a.collection_id = l.collectionId ${timeFrame !== TopCollectionTimeframeInput.ALL ? `AND "createdAt" >= NOW() - INTERVAL '${timeFrameMap[timeFrame].c}'` : ''} ) AS users`
                    )
                    .addSelect('metadata AS metadata')
                    .addSelect('stats AS stats')
                    .addSelect('volume_last_duration AS volume')
                    .addSelect('NULLIF(MAX(volume_last_duration) OVER(), 0) AS "maxVolume"')
                    .addSelect('NULLIF(MAX(sales_last_duration) OVER(), 0) AS "maxSales"')
                    .addSelect('sales_last_duration AS sales')
                    .addSelect('"verifiedAt"::text AS "verifiedAt"')
                    .addSelect('"createdAt"::text AS "createdAt"')
                    .addSelect('category AS category')
                    .addSelect(
                        'CASE WHEN volume_previous_duration != 0 THEN ROUND((volume_last_duration - volume_previous_duration) * 100 / volume_previous_duration, 2) ELSE null END AS "volumeChange"'
                    )
                    .addSelect(
                        'CASE WHEN previous_avg_sale != 0 THEN ROUND((last_avg_sale - previous_avg_sale) * 100 / previous_avg_sale, 2) ELSE null END AS avg_sale_change'
                    )
                    .addSelect(
                        'MAX(CASE WHEN previous_avg_sale != 0 THEN ROUND((last_avg_sale - previous_avg_sale) * 100 / previous_avg_sale, 2) ELSE null END) OVER() AS max_avg_sale_change'
                    )
                    .addSelect(
                        `(SELECT json_agg(json_build_object('id', attr.id, 'key', attr.key, 'value', attr.value, 'deposit', attr.deposit)) 
                                  FROM attribute attr 
                                  WHERE attr.collection_id = l.collectionId AND attr.token_id IS NULL) AS attributes`
                    )
                    .from((qb) => {
                        const inBuilder = qb
                            .select('collection.id AS collectionId')
                            .addSelect('collection.metadata AS metadata')
                            .addSelect('collection.stats AS stats')
                            .addSelect('collection.verified_at AS "verifiedAt"')
                            .addSelect('collection.created_at AS "createdAt"')
                            .addSelect('collection.category AS category')
                        if (timeFrame === TopCollectionTimeframeInput.ALL) {
                            inBuilder
                                .addSelect(`COALESCE(SUM(sale.amount * sale.price), 0) AS volume_last_duration`)
                                .addSelect(`COALESCE(COUNT(sale.id)::int, 0) AS sales_last_duration`)
                                .addSelect(`0 AS volume_previous_duration`)
                                .addSelect(`1 AS last_avg_sale`)
                                .addSelect(`1 AS previous_avg_sale`)
                                .addSelect(`0 as last_sale`)
                        } else {
                            inBuilder
                                .addSelect(
                                    `SUM(CASE WHEN sale.created_at >= NOW() - INTERVAL '${timeFrameMap[timeFrame].c}' THEN sale.amount * sale.price ELSE 0 END) AS volume_last_duration`
                                )
                                .addSelect(
                                    `SUM(CASE WHEN sale.created_at >= NOW() - INTERVAL '${timeFrameMap[timeFrame].p}' AND sale.created_at <= NOW() - INTERVAL '${timeFrameMap[timeFrame].c}' THEN sale.amount * sale.price ELSE 0 END) AS volume_previous_duration`
                                )
                                .addSelect(
                                    `COUNT(CASE WHEN sale.created_at >= NOW() - INTERVAL '${timeFrameMap[timeFrame].c}' THEN sale.id ELSE NULL END)::int AS sales_last_duration`
                                )
                                .addSelect(
                                    `AVG(CASE WHEN sale.created_at >= NOW() - INTERVAL '${timeFrameMap[timeFrame].c}' THEN sale.price ELSE 0 END) AS last_avg_sale`
                                )
                                .addSelect(
                                    `AVG(CASE WHEN sale.created_at >= NOW() - INTERVAL '${timeFrameMap[timeFrame].p}' AND sale.created_at <= NOW() - INTERVAL '${timeFrameMap[timeFrame].c}' THEN sale.price ELSE 0 END) AS previous_avg_sale`
                                )

                            if (orderBy !== TopCollectionOrderByInput.CREATED_AT) {
                                inBuilder.where(`sale.created_at >= NOW() - INTERVAL '${timeFrameMap[timeFrame].p}'`)
                            }
                        }

                        if (category.length > 0) {
                            inBuilder.andWhere('collection.category IN (:...category)', { category })
                        }

                        if (query) {
                            inBuilder.andWhere(`collection.metadata->>'name' ILIKE :query`, { query: `%${query}%` })
                        }

                        inBuilder
                            .from(Collection, 'collection')
                            .leftJoin(Token, 'token', 'token.collection = collection.id')
                            .leftJoin(
                                Listing,
                                'listing',
                                "(listing.make_asset_id_id = token.id AND listing.make_asset_id_id != '0-0') OR (listing.take_asset_id_id = token.id AND listing.take_asset_id_id != '0-0')"
                            )
                            .leftJoin(ListingSale, 'sale', 'sale.listing = listing.id')
                            .leftJoin(
                                ListingStatus,
                                'status',
                                `listing.id = status.listing AND status.type = 'Finalized'`
                            )
                            .addGroupBy('collection.id')

                        return inBuilder
                    }, 'l')

                return mqb
            }, 'iq')
            .orderBy(orderBy, order, 'NULLS LAST')
            .addOrderBy('id', 'DESC')
            .limit(limit)
            .offset(offset)

        const collections = await builder.getRawMany()

        // Parse the attributes JSON if it's a string
        return collections.map((collection) => {
            if (typeof collection.attributes === 'string') {
                collection.attributes = JSON.parse(collection.attributes)
            }

            if (!collection.attributes) {
                collection.attributes = []
            }

            return new TopCollection(collection)
        })
    }

    @FieldResolver(() => [CollectionAttribute])
    attributes(
        @Root() topCollection: TopCollection,
        @Arg('where', () => CollectionAttributeWhereInput, { defaultValue: [] }) where?: CollectionAttributeWhereInput
    ): CollectionAttribute[] {
        if (!where || !where.AND || where.AND.length === 0) {
            return topCollection.attributes
        }

        const keyEq = where.AND.find((cond) => cond.key_eq)
        const keyIn = where.AND.find((cond) => cond.key_in)
        if ((!keyEq && !keyIn) || (keyEq && !keyIn && !keyEq.key_eq) || (keyIn && !keyEq && !keyIn.key_in)) {
            return topCollection.attributes
        }

        return (
            topCollection.attributes.filter((attr) => {
                if (keyEq?.key_eq) {
                    return attr.key === keyEq.key_eq
                }

                if (keyIn?.key_in && keyIn?.key_in.length > 0) {
                    return keyIn?.key_in?.includes(attr.key)
                }

                return false
            }) ?? []
        )
    }
}
