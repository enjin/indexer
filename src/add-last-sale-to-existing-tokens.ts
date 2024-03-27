import { CommonContext } from './mappings/types/contexts'

export default async (ctx: CommonContext) => {
    const data = await ctx.store.query(
        `UPDATE token 
        SET last_sale_id = (
            SELECT ls.id 
            FROM listing_sale ls 
            JOIN listing l ON ls.listing_id = l.id 
            WHERE token.id = l.make_asset_id_id 
            ORDER BY ls.created_at DESC 
            LIMIT 1
        );`
    )

    console.log(data)
}
