import { CommonContext } from '~/contexts'
import { WhitelistedAccount } from '~/model'

// Mirrors `whitelist_check_and_count`: usage accrues only for entries with an allowance. A `None` allowance is
// stored as 0, and a `Some(0)` allowance can never accrue because the chain rejects the fill or bid.
export function accruedWhitelistUsage(entry: Pick<WhitelistedAccount, 'allowance' | 'amountUsed'>, amount: bigint) {
    return entry.allowance > 0n ? entry.amountUsed + amount : entry.amountUsed
}

export async function accrueWhitelistUsage(
    ctx: CommonContext,
    listingId: string,
    accountId: string,
    amount: bigint,
    updatedAt: Date
): Promise<void> {
    const entry = await ctx.store.findOne<WhitelistedAccount>(WhitelistedAccount, {
        where: { listing: { id: listingId }, account: { id: accountId } },
    })
    if (!entry || entry.allowance <= 0n) return

    entry.amountUsed = accruedWhitelistUsage(entry, amount)
    entry.updatedAt = updatedAt
    await ctx.store.save(entry)
}
