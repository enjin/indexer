import { CommonContext } from './mappings/types/contexts'

export default async (ctx: CommonContext) => {
    const data = await ctx.store.query(
        `UPDATE token 
        SET last_sale_id = td.id 
        FROM (
            SELECT DISTINCT l.make_asset_id_id, ls.id, ls.created_at
            FROM listing_sale ls 
            JOIN listing l ON ls.listing_id = l.id 
            ORDER BY l.make_asset_id_id, ls.created_at DESC 
        ) AS td
        WHERE token.id = td.make_asset_id_id;`
    )

    console.log(data)
}
