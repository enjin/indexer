/* eslint-disable max-classes-per-file */

import { Field, ObjectType, Query, Resolver, Arg, registerEnumType, ID, Int } from 'type-graphql'
import { Json } from '@subsquid/graphql-server'
import 'reflect-metadata'
import type { EntityManager } from 'typeorm'
import { Collection, Listing, ListingSale, ListingStatus, Token } from '../../model'

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
export class CollectionRow {
    @Field(() => ID, { nullable: false })
    id!: string

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
    volume_change!: string

    @Field({ nullable: false })
    volume!: string

    @Field(() => Int, { nullable: false })
    sales!: number

    @Field(() => Int, { nullable: false })
    users!: number

    @Field({ nullable: true })
    trending_score!: string

    @Field({ nullable: true })
    top_score!: string

    @Field({ nullable: true })
    max_volume!: string

    @Field({ nullable: true })
    max_sales!: string

    constructor(props: Partial<CollectionRow>) {
        Object.assign(this, props)
    }
}

@Resolver()
export class TopCollectionResolver {
    constructor(private tx: () => Promise<EntityManager>) {}

    @Query(() => [CollectionRow])
    async topCollection(
        @Arg('timeFrame', () => Timeframe) timeFrame: Timeframe,
        @Arg('orderBy', () => TopCollectionOrderBy) orderBy: TopCollectionOrderBy,
        @Arg('category', () => [String], { nullable: true, defaultValue: [] }) category: string[],
        @Arg('query', { nullable: true, description: 'Search by collection name' }) query: string,
        @Arg('order', () => Order) order: Order,
        @Arg('offset', () => Int) offset: number = 0,
        @Arg('limit', () => Int) limit: number = 10
    ): Promise<CollectionRow[]> {
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
                    .addSelect('verified_at::text AS "verifiedAt"')
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
                            .leftJoin(ListingStatus, 'status', `listing.id = status.listing AND status.type = 'Finalized'`)
                            .addGroupBy('collection.id')

                        return inBuilder
                    }, 'l')

                return mqb
            }, 'iq')
            .orderBy(orderBy, order, 'NULLS LAST')
            .addOrderBy('id', 'DESC')
            .limit(limit)
            .offset(offset)

        return builder.getRawMany()
    }
}
