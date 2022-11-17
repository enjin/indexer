/* eslint-disable @typescript-eslint/no-inferrable-types */
/* eslint-disable max-classes-per-file */
import { Field, ObjectType, Query, Resolver, Arg } from 'type-graphql'
import NodeCache from 'node-cache'
import 'reflect-metadata'
import type { EntityManager } from 'typeorm'
import { Listing, Collection, Token, ListingStatus } from '../../model'

// FIXME: replace me with redis cache
const cache = new NodeCache({ stdTTL: 30, checkperiod: 10 })

@ObjectType()
export class CollectionStats {
    @Field({ nullable: false })
    assets: number = 0

    @Field({ nullable: false })
    rank!: string

    @Field({ nullable: false })
    marketCap: bigint = 0n

    @Field({ nullable: false })
    lastSale: bigint = 0n

    @Field({ nullable: false })
    sales: number = 0

    @Field({ nullable: false })
    highestSale: bigint = 0n

    @Field({ nullable: false })
    totalVolume: bigint = 0n

    constructor(props: Partial<CollectionStats>) {
        Object.assign(this, props)
    }
}

@Resolver()
export class CollectionStatsResolver {
    constructor(private tx: () => Promise<EntityManager>) {}

    @Query(() => CollectionStats)
    async collectionStats(@Arg('id', { description: 'collectionId' }) id: string): Promise<CollectionStats> {
        if (cache.has(`collectionStats:${id}`)) {
            return cache.get(`collectionStats:${id}`) as CollectionStats
        }

        const manager = await this.tx()

        const query = manager
            .createQueryBuilder()
            .select('token_collection_id')
            .addSelect('RANK() OVER (ORDER BY SUM(l.highest_price) DESC NULLS LAST) AS rank')
            .addSelect('MAX(l.highest_price) AS highest_sale')
            .addSelect(`MAX(l.last_sale) AS last_sale`)
            .addSelect('SUM(l.highest_price) AS total_volume')
            .addSelect('SUM(l.last_sale * l.collection_token_count) AS market_cap')
            .addSelect('AVG(l.collection_token_count)::int AS assets')
            .addSelect('COUNT(l.id)::int AS sales')
            .from((qb) => {
                return qb
                    .select('listing.*')
                    .addSelect(
                        'CASE WHEN lead(listing.id) OVER(PARTITION BY collection.id ORDER BY listing.created_at) IS NULL THEN listing.highest_price END AS last_sale'
                    )
                    .from(Listing, 'listing')
                    .innerJoinAndMapOne('listing.token', Token, 'token', 'listing.makeAssetId = token.id')
                    .innerJoinAndMapOne(
                        'listing.collection',
                        Collection,
                        'collection',
                        'token.collection = collection.id'
                    )
                    .innerJoinAndMapOne(
                        'listing.status',
                        ListingStatus,
                        'status',
                        `listing.id = status.listing AND status.type = 'Finalized'`
                    )
            }, 'l')
            .groupBy('token_collection_id')
            .getQuery()

        // TODO:  use temp-table for storing ranks.
        const raw = await manager.query(`;With cte AS (${query}) SELECT * FROM cte WHERE token_collection_id = $1;`, [
            id,
        ])

        if (raw.length === 0) {
            const assets = await manager
                .getRepository(Token)
                .createQueryBuilder('token')
                .where('token.collection = :id', { id })
                .getCount()

            const result = {
                rank: '0',
                highestSale: 0n,
                totalVolume: 0n,
                lastSale: 0n,
                assets,
                sales: 0,
                marketCap: 0n,
            }

            cache.set(`collectionStats:${id}`, result)

            return result
        }

        const data = raw[0]

        const result = {
            rank: data.rank,
            highestSale: data.highest_sale,
            totalVolume: data.total_volume,
            lastSale: data.last_sale,
            assets: data.assets,
            marketCap: data.market_cap,
            sales: data.sales,
        }

        cache.set(`collectionStats:${id}`, result)

        return result
    }
}
