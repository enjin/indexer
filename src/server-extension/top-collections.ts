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
import { DateTimeColumn as DateTimeColumn_ } from '@subsquid/typeorm-store/lib/decorators/columns/DateTimeColumn'
import { timeFrameMap } from './types'

export enum TopCollectionOrderByInput {
    CREATED_AT = '"createdAt"',
    VOLUME = 'volume',
    SALES = 'sales',
    VOLUME_CHANGE = '"volumeChange"',
    USERS = 'users',
    CATEGORY = 'category',
    TRENDING = '"trendingScore"',
    TOP = '"topScore"',
}

export enum TopCollectionOrderInput {
    ASC = 'ASC',
    DESC = 'DESC',
}

export enum TopCollectionTimeframeInput {
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

        const params: unknown[] = []
        let paramIdx = 1

        let salesAggColumns: string
        let salesAggWhere = ''

        if (timeFrame === TopCollectionTimeframeInput.ALL) {
            salesAggColumns = `
                COALESCE(SUM(s.amount * s.price), 0) AS volume,
                COUNT(s.id)::int AS sales,
                0 AS prev_volume,
                1 AS last_avg,
                1 AS prev_avg`
        } else {
            const tf = timeFrameMap[timeFrame]
            salesAggColumns = `
                SUM(CASE WHEN s.created_at >= NOW() - INTERVAL '${tf.c}' THEN s.amount * s.price ELSE 0 END) AS volume,
                COUNT(CASE WHEN s.created_at >= NOW() - INTERVAL '${tf.c}' THEN s.id ELSE NULL END)::int AS sales,
                SUM(CASE WHEN s.created_at >= NOW() - INTERVAL '${tf.p}' AND s.created_at <= NOW() - INTERVAL '${tf.c}' THEN s.amount * s.price ELSE 0 END) AS prev_volume,
                AVG(CASE WHEN s.created_at >= NOW() - INTERVAL '${tf.c}' THEN s.price ELSE 0 END) AS last_avg,
                AVG(CASE WHEN s.created_at >= NOW() - INTERVAL '${tf.p}' AND s.created_at <= NOW() - INTERVAL '${tf.c}' THEN s.price ELSE 0 END) AS prev_avg`
            if (orderBy !== TopCollectionOrderByInput.CREATED_AT) {
                salesAggWhere = `WHERE s.created_at >= NOW() - INTERVAL '${tf.p}'`
            }
        }

        const usersTimeWhere =
            timeFrame !== TopCollectionTimeframeInput.ALL
                ? `WHERE created_at >= NOW() - INTERVAL '${timeFrameMap[timeFrame].c}'`
                : ''

        const collectionWheres: string[] = []
        if (category.length > 0) {
            collectionWheres.push(`c.category IN (${category.map(() => `$${paramIdx++}`).join(', ')})`)
            params.push(...category)
        }
        if (query) {
            collectionWheres.push(`c.metadata->>'name' ILIKE $${paramIdx++}`)
            params.push(`%${query}%`)
        }
        const collectionWhere = collectionWheres.length > 0 ? 'WHERE ' + collectionWheres.join(' AND ') : ''

        const limitParam = `$${paramIdx++}`
        const offsetParam = `$${paramIdx++}`
        params.push(limit, offset)

        const sql = `
            WITH sales_agg AS (
                SELECT t.collection_id,
                       ${salesAggColumns}
                FROM listing_sale s
                INNER JOIN listing l ON s.listing_id = l.id
                INNER JOIN token t
                    ON (l.make_asset_id_id = t.id AND l.make_asset_id_id != '0-0')
                    OR (l.take_asset_id_id = t.id AND l.take_asset_id_id != '0-0')
                ${salesAggWhere}
                GROUP BY t.collection_id
            ),
            users_agg AS (
                SELECT collection_id, COUNT(*)::int AS user_count
                FROM collection_account
                ${usersTimeWhere}
                GROUP BY collection_id
            ),
            scored AS (
                SELECT c.id,
                       COALESCE(ua.user_count, 0) AS users,
                       COALESCE(sa.volume, 0) AS volume,
                       NULLIF(MAX(COALESCE(sa.volume, 0)) OVER(), 0) AS "maxVolume",
                       NULLIF(MAX(COALESCE(sa.sales, 0)) OVER(), 0) AS "maxSales",
                       COALESCE(sa.sales, 0) AS sales,
                       c.verified_at::text AS "verifiedAt",
                       c.created_at::text AS "createdAt",
                       c.category,
                       CASE WHEN COALESCE(sa.prev_volume, 0) != 0
                            THEN ROUND((COALESCE(sa.volume, 0) - sa.prev_volume) * 100.0 / sa.prev_volume, 2)
                            ELSE null END AS "volumeChange",
                       CASE WHEN COALESCE(sa.prev_avg, 0) != 0
                            THEN ROUND((COALESCE(sa.last_avg, 0) - sa.prev_avg) * 100.0 / sa.prev_avg, 2)
                            ELSE null END AS avg_sale_change
                FROM collection c
                LEFT JOIN sales_agg sa ON sa.collection_id = c.id
                LEFT JOIN users_agg ua ON ua.collection_id = c.id
                ${collectionWhere}
            )
            SELECT *,
                (COALESCE(0.35 * (volume::numeric / "maxVolume"::numeric), 0) +
                 COALESCE(0.35 * (sales::numeric / "maxSales"::numeric), 0) +
                 COALESCE(0.20 * (avg_sale_change::numeric / NULLIF(MAX(avg_sale_change) OVER(), 0)::numeric), 0) +
                 COALESCE(0.10 * (users::numeric / NULLIF(MAX(users) OVER(), 0)::numeric), 0)) AS "trendingScore",
                (0.80 * COALESCE(volume::numeric / "maxVolume"::numeric, 0) +
                 0.20 * COALESCE(sales::numeric / "maxSales"::numeric)) AS "topScore"
            FROM scored
            ORDER BY ${orderBy} ${order} NULLS LAST, id DESC
            LIMIT ${limitParam} OFFSET ${offsetParam}`

        const rankedCollections: Record<string, unknown>[] = await manager.query(sql, params)

        if (rankedCollections.length === 0) {
            return []
        }

        const ids = rankedCollections.map((c) => c.id)
        const enrichmentData: { id: string; metadata: unknown; stats: unknown; attributes: unknown }[] =
            await manager.query(
                `SELECT c.id, c.metadata, c.stats,
                    (SELECT json_agg(json_build_object('id', attr.id, 'key', attr.key, 'value', attr.value, 'deposit', attr.deposit))
                     FROM attribute attr
                     WHERE attr.collection_id = c.id AND attr.token_id IS NULL) AS attributes
                 FROM collection c
                 WHERE c.id = ANY($1)`,
                [ids]
            )

        const enrichmentMap = new Map(enrichmentData.map((e) => [e.id, e]))

        return rankedCollections.map((collection) => {
            const enrichment = enrichmentMap.get(collection.id as string)
            if (enrichment) {
                collection.metadata = enrichment.metadata
                collection.stats = enrichment.stats
                collection.attributes = enrichment.attributes
            }

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
