import { Event as EventModel, Listing, WhitelistedAccount } from '~/model'
import { Block, CommonContext, EventItem } from '~/contexts'
import { SnsEvent } from '~/util/sns'
import { getOrCreateAccount } from '~/util/entities'
import * as mappings from '~/pallet/index'

export async function whitelistedAccountsAdded(
    ctx: CommonContext,
    block: Block,
    item: EventItem
): Promise<[EventModel, SnsEvent | undefined] | undefined> {
    const event = mappings.marketplace.events.whitelistedAccountsAdded(item)
    const listingId = event.listingId.substring(2)

    const listing = await ctx.store.findOne<Listing>(Listing, {
        where: { id: listingId },
    })
    if (!listing) return [mappings.marketplace.events.whitelistedAccountsAddedEventModel(item, event), undefined]

    const newWhitelistedAccounts = await Promise.all(
        event.accounts.map(async (account) => {
            const accountEntity = await getOrCreateAccount(ctx, account.accountId)
            const id = `${listingId}-${accountEntity.id}`
            const existing = await ctx.store.findOneBy<WhitelistedAccount>(WhitelistedAccount, { id })
            // Re-adding an account only replaces its allowance on chain; the usage accrued so far is kept.
            if (existing) {
                existing.allowance = account.allowance ?? 0n
                existing.updatedAt = new Date(block.timestamp ?? 0)
                return existing
            }
            return new WhitelistedAccount({
                id,
                listing,
                account: accountEntity,
                allowance: account.allowance ?? 0n,
                amountUsed: 0n,
                deposit: 0n,
                createdAt: new Date(block.timestamp ?? 0),
                updatedAt: new Date(block.timestamp ?? 0),
            })
        })
    )
    await ctx.store.save(newWhitelistedAccounts)
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
    if (listing.whitelistedAccounts) {
        listing.whitelistedAccounts = [...listing.whitelistedAccounts, ...newWhitelistedAccounts]
    } else {
        listing.whitelistedAccounts = newWhitelistedAccounts
    }
    await ctx.store.save(listing)

    const snsEvent: SnsEvent = {
        id: item.id,
        name: item.name,
        body: {
            listing: listing.id,
            accounts: event.accounts.map((account) => account.accountId),
        },
    }

    return [
        mappings.marketplace.events.whitelistedAccountsAddedEventModel(item, event),
        item.extrinsic ? snsEvent : undefined,
    ]
}
