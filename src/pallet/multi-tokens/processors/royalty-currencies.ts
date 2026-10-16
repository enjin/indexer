import { CommonContext } from '~/contexts'
import { Collection, RoyaltyCurrency, Token } from '~/model'
import { AssetId } from '~/pallet/common/types'

/**
 * Replaces the collection's `RoyaltyCurrency` rows with `currencies`, keeping rows that are still listed. Returns the
 * ids of listed currency tokens that are not indexed; the caller decides whether that is fatal.
 */
export async function replaceRoyaltyCurrencies(
    ctx: CommonContext,
    collection: Collection,
    currencies: AssetId[]
): Promise<string[]> {
    const existing = await ctx.store.find<RoyaltyCurrency>(RoyaltyCurrency, {
        where: { collection: { id: collection.id } },
    })
    const stale = new Map(existing.map((rc) => [rc.id, rc]))
    const listed = new Set<string>()
    const missing: string[] = []

    for (const currency of currencies) {
        const tokenId = `${currency.collectionId}-${currency.tokenId}`
        const id = `${collection.id}-${tokenId}`
        if (listed.has(id)) continue
        listed.add(id)
        if (stale.delete(id)) continue

        const token = await ctx.store.findOne<Token>(Token, { where: { id: tokenId } })
        if (!token) {
            missing.push(tokenId)
            continue
        }
        await ctx.store.insert(new RoyaltyCurrency({ id, collection, token }))
    }

    if (stale.size > 0) await ctx.store.remove([...stale.values()])
    return missing
}
