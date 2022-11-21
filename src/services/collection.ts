import { EntityManager } from 'typeorm'
import { Collection, CollectionStats, Listing, ListingStatus, Token } from '../model'

export class CollectionService {
    constructor(public em: EntityManager) {}

    private get salesQuery() {
        return this.em
            .createQueryBuilder()
            .select('l.collection_id AS collection_id')
            .addSelect('RANK() OVER (ORDER BY SUM(l.highest_price) DESC NULLS LAST)::int AS rank')
            .addSelect('MAX(l.highest_price) AS highest_sale')
            .addSelect('MAX(l.last_sale) AS last_sale')
            .addSelect('SUM(l.highest_price) AS total_volume')
            .addSelect('COUNT(l.id)::int AS sales')
            .from((qb) => {
                return qb
                    .select('listing.id AS id')
                    .addSelect('listing.highest_price AS highest_price')
                    .addSelect('collection.id AS collection_id')
                    .addSelect(
                        'CASE WHEN lead(listing.id) OVER(PARTITION BY collection.id ORDER BY listing.created_at) IS NULL THEN listing.highest_price END AS last_sale'
                    )
                    .from(Listing, 'listing')
                    .innerJoin(Token, 'token', 'listing.make_asset_id_id = token.id')
                    .innerJoin(Collection, 'collection', 'token.collection = collection.id')
                    .innerJoin(ListingStatus, 'status', `listing.id = status.listing AND status.type = 'Finalized'`)
            }, 'l')
            .groupBy('l.collection_id')
            .getQuery()
    }

    private floorQuery = `SELECT MIN("listing"."highest_price") AS floor_price FROM "listing" AS "listing" INNER JOIN "token" "token" ON "token"."id" = "listing"."make_asset_id_id" INNER JOIN "collection" "collection" ON "collection"."id" = "token"."collection_id" WHERE "collection"."id" = $1 AND
     (SELECT count(*) FROM "listing_status" AS "listing_status" WHERE "listing_status"."type" = 'Active' AND "listing_status"."listing_id" = "listing"."id") = (SELECT count(*) FROM "listing_status" AS "listing_status_1" WHERE "listing_status_1"."listing_id" = "listing"."id")`

    async sync(collectionId: string) {
        if (!collectionId) throw new Error('null collectionId not allowed')

        const promises = [
            this.em.query(`;With cte AS (${this.salesQuery}) SELECT * FROM cte WHERE collection_id = $1;`, [
                collectionId,
            ]),
            this.em.query(this.floorQuery, [collectionId]),
            this.em
                .getRepository(Token)
                .createQueryBuilder('token')
                .where('token.collection = :collectionId', { collectionId })
                .getCount(),
        ]

        // eslint-disable-next-line @typescript-eslint/naming-convention
        const [[sales], [{ floor_price }], tokenCount] = await Promise.all(promises)

        const stats = new CollectionStats({
            tokenCount,
            salesCount: sales?.sales ?? 0,
            rank: sales?.rank ?? 0,
            volume: sales?.total_volume ?? 0n,
            marketCap: BigInt(sales?.last_sale ?? 0n) * BigInt(tokenCount),
            floorPrice: floor_price,
            lastSale: sales?.last_sale ?? null,
            highestSale: sales?.highest_sale ?? null,
        })

        this.em.update(Collection, { id: collectionId }, { stats })
    }
}
