import { connectionManager } from '../../contexts'
import { Collection, CollectionStats, Listing, ListingSale, ListingStatus, Token } from '../../model'

const floorQuery = `SELECT MIN("listing"."highest_price") AS floor_price FROM "listing" AS "listing" INNER JOIN "token" "token" ON "token"."id" = "listing"."make_asset_id_id" INNER JOIN "collection" "collection" ON "collection"."id" = "token"."collection_id" WHERE "collection"."id" = $1 AND "listing"."is_active" = TRUE AND "token"."is_frozen" = FALSE AND "token"."listing_forbidden" = FALSE;`

export async function computeStats(collectionId: string) {
    const em = await connectionManager()

    const promises = [
        em
            .createQueryBuilder()
            .addSelect('MAX(l.highest_price) AS highest_sale')
            .addSelect('MAX(l.last_sale) AS last_sale')
            .addSelect('SUM(l.volume) AS total_volume')
            .addSelect('SUM(l.count)::int AS sales')
            .from((qb) => {
                return qb
                    .select('listing.id AS id')
                    .addSelect('COUNT(sale.id) AS count')
                    .addSelect('listing.highest_price AS highest_price')
                    .addSelect('SUM(sale.amount * sale.price) AS volume')
                    .addSelect('listing.amount AS amount')
                    .addSelect(
                        'CASE WHEN lead(listing.id) OVER(ORDER BY listing.created_at) IS NULL THEN listing.highest_price END AS last_sale'
                    )
                    .from(ListingSale, 'sale')
                    .innerJoin(Listing, 'listing', 'listing.id = sale.listing')
                    .innerJoin(Token, 'token', 'listing.make_asset_id_id = token.id')
                    .innerJoin(Collection, 'collection', 'token.collection = collection.id')
                    .leftJoin(ListingStatus, 'status', `listing.id = status.listing AND status.type = 'Finalized'`)
                    .where('collection.id = :collectionId', { collectionId })
                    .groupBy('listing.id')
            }, 'l')
            .getRawOne(),

        em.query(floorQuery, [collectionId]),
        em
            .getRepository(Token)
            .createQueryBuilder('token')
            .select('COUNT(token.id)', 'tokenCount')
            .addSelect('SUM(token.supply)', 'supply')
            .where('token.collection = :collectionId', { collectionId })
            .getRawOne(),
    ]

    const [sales, [{ floor_price }], { tokenCount, supply }] = await Promise.all(promises)

    const stats = new CollectionStats({
        tokenCount: Number(tokenCount),
        supply: BigInt(supply ?? 0n),
        salesCount: sales?.sales ?? 0,
        volume: sales?.total_volume ?? 0n,
        marketCap: BigInt(sales?.last_sale ?? 0n) * BigInt(tokenCount),
        floorPrice: floor_price,
        lastSale: sales?.last_sale ?? null,
        highestSale: sales?.highest_sale ?? null,
    })

    await em.update(Collection, { id: collectionId }, { stats })

    // done(null, { id: collectionId, stats: stats.toJSON() })
}
