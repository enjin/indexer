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
} from 'type-graphql'
import { BigInteger, Json } from '@subsquid/graphql-server'
import 'reflect-metadata'
import type { EntityManager } from 'typeorm'
import { Collection, Listing, ListingSale, ListingStatus, Token } from '../model'
import { DateTimeColumn as DateTimeColumn_ } from '@subsquid/typeorm-store/lib/decorators/columns/DateTimeColumn'

enum Timeframe {
    HOUR = 'HOUR',
    HOUR_6 = 'HOUR_6',
    HOUR_24 = 'HOUR_24',
    WEEK = 'WEEK',
    MONTH = 'MONTH',
    YEAR = 'YEAR',
    ALL = 'ALL',
}

const timeFrameMap = {
    HOUR: { c: '1 hour', p: '2 hours' },
    HOUR_6: { c: '6 hours', p: '12 hours' },
    HOUR_24: { c: '24 hours', p: '48 hours' },
    WEEK: { c: '7 days', p: '14 days' },
    MONTH: { c: '30 days', p: '60 days' },
    YEAR: { c: '365 days', p: '730 days' },
    ALL: { c: '0', p: '0' },
}

enum TopCollectionOrderBy {
    CREATED_AT = 'created_at',
    VOLUME = 'volume',
    SALES = 'sales',
    VOLUME_CHANGE = 'volume_change',
    USERS = 'users',
    CATEGORY = 'category',
    TRENDING = 'trending_score',
    TOP = 'top_score',
}

enum Order {
    ASC = 'ASC',
    DESC = 'DESC',
}

registerEnumType(Timeframe, {
    name: 'Timeframe',
})

registerEnumType(TopCollectionOrderBy, {
    name: 'TopCollectionOrderBy',
})

registerEnumType(Order, {
    name: 'TopCollectionOrder',
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

// eslint-disable-next-line @typescript-eslint/no-unused-vars
@Resolver((of) => TopCollection)
export class TopCollectionResolver {
    constructor(private tx: () => Promise<EntityManager>) {}

    @Query(() => [TopCollection])
    async topCollection(
        @Arg('timeFrame', () => Timeframe) timeFrame: Timeframe,
        @Arg('orderBy', () => TopCollectionOrderBy) orderBy: TopCollectionOrderBy,
        @Arg('category', () => [String], { nullable: true, defaultValue: [] }) category: string[],
        @Arg('query', { nullable: true, description: 'Search by collection name' }) query: string,
        @Arg('order', () => Order) order: Order,
        @Arg('offset', () => Int) offset: number = 0,
        @Arg('limit', () => Int) limit: number = 10
    ): Promise<TopCollection[]> {
        const manager = await this.tx()

        const builder = manager
            .createQueryBuilder()
            .select('*')
            .addSelect(
                '(COALESCE(0.35 * (volume::numeric / max_volume::numeric),0) + ' +
                    'COALESCE(0.35 * (sales::numeric / max_sales::numeric), 0) +' +
                    'COALESCE(0.20 * (avg_sale_change::numeric / NULLIF(MAX(avg_sale_change) OVER(), 0)::numeric),0) +' +
                    'COALESCE(0.10 * (users::numeric / NULLIF(MAX(users) OVER(), 0)::numeric), 0)) AS trending_score'
            )
            .addSelect(
                `(0.80 * COALESCE(volume::numeric / max_volume::numeric, 0) + 0.20 * COALESCE(sales::numeric / max_sales::numeric)) AS top_score`
            )
            .addFrom((mqb) => {
                mqb.addSelect('collectionId AS id')
                    .addSelect(
                        `(SELECT COUNT(*)::int FROM collection_account a WHERE a.collection_id = l.collectionId ${timeFrame !== Timeframe.ALL ? `AND created_at >= NOW() - INTERVAL '${timeFrameMap[timeFrame].c}'` : ''} ) AS users`
                    )
                    .addSelect('metadata AS metadata')
                    .addSelect('stats AS stats')
                    .addSelect('volume_last_duration AS volume')
                    .addSelect('NULLIF(MAX(volume_last_duration) OVER(), 0) AS max_volume')
                    .addSelect('NULLIF(MAX(sales_last_duration) OVER(), 0) AS max_sales')
                    .addSelect('sales_last_duration AS sales')
                    .addSelect('verified_at::text AS "verified_at"')
                    .addSelect('created_at::text AS "created_at"')
                    .addSelect('category AS category')
                    .addSelect(
                        'CASE WHEN volume_previous_duration != 0 THEN ROUND((volume_last_duration - volume_previous_duration) * 100 / volume_previous_duration, 2) ELSE null END AS volume_change'
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
                            .addSelect('collection.verified_at AS verified_at')
                            .addSelect('collection.created_at AS created_at')
                            .addSelect('collection.category AS category')
                        if (timeFrame === Timeframe.ALL) {
                            inBuilder
                                .addSelect(`SUM(sale.amount * sale.price) AS volume_last_duration`)
                                .addSelect(`COUNT(sale.id)::int AS sales_last_duration`)
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
                                .where(`sale.created_at >= NOW() - INTERVAL '${timeFrameMap[timeFrame].p}'`)
                        }

                        if (category.length > 0) {
                            inBuilder.andWhere('collection.category IN (:...category)', { category })
                        }

                        if (query) {
                            inBuilder.andWhere(`collection.metadata->>'name' ILIKE :query`, { query: `%${query}%` })
                        }

                        inBuilder
                            .from(ListingSale, 'sale')
                            .innerJoin(Listing, 'listing', 'listing.id = sale.listing')
                            .innerJoin(
                                Token,
                                'token',
                                "(listing.make_asset_id_id = token.id AND listing.make_asset_id_id != '0-0') OR (listing.take_asset_id_id = token.id AND listing.take_asset_id_id != '0-0')"
                            )
                            .innerJoin(Collection, 'collection', 'token.collection = collection.id')
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
            return new TopCollection(collection)
        })
    }

    @FieldResolver(() => [CollectionAttribute])
    attributes(
        @Root() topCollection: TopCollection,
        @Arg('where', () => CollectionAttributeWhereInput, { nullable: true }) where?: CollectionAttributeWhereInput
    ): CollectionAttribute[] {
        if (!where || !where.AND || where.AND.length === 0) {
            return topCollection.attributes
        }

        const keyEq = where.AND.find((cond) => cond.key_eq)
        const keyIn = where.AND.find((cond) => cond.key_in)
        if ((!keyEq && !keyIn) || (keyEq && !keyIn && !keyEq.key_eq) || (keyIn && !keyEq && !keyIn.key_in)) {
            return topCollection.attributes
        }

        return topCollection.attributes.filter((attr) => {
            if (keyEq?.key_eq) {
                return attr.key === keyEq.key_eq
            }

            if (keyIn?.key_in && keyIn?.key_in.length > 0) {
                return keyIn?.key_in?.includes(attr.key)
            }

            return false
        })
    }
}
