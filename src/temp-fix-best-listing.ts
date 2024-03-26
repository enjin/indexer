import { syncAllCollections } from './jobs/collection-stats'
import { CommonContext } from './mappings/types/contexts'

export async function fixBestListings(ctx: CommonContext) {
    ctx.log.info('Fixing best listings')

    // Your code here

    const updateNull = await ctx.store.query(`UPDATE token AS t
    SET best_listing_id = null
    FROM listing AS l
    WHERE l.is_active = FALSE AND t.id = l.make_asset_id_id;`)

    console.log(updateNull)

    const update = await ctx.store.query(
        `UPDATE token AS t
        SET best_listing_id = l.id
        FROM (
            SELECT DISTINCT ON (make_asset_id_id) make_asset_id_id, id
            FROM listing
            WHERE is_active = TRUE
            ORDER BY make_asset_id_id, highest_price ASC
        ) AS l
        WHERE t.id = l.make_asset_id_id;`
    )

    syncAllCollections()

    console.log(update)
}
