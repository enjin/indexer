import { Account, Event as EventModel, Listing, WhitelistedAccount } from '~/model'
import { Block, CommonContext, EventItem } from '~/contexts'
import { SnsEvent } from '~/util/sns'
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

    const newWhitelistedAccounts = event.accounts.map(
        (account) =>
            new WhitelistedAccount({
                id: `${listingId}-${account.accountId}`,
                listing,
                account: new Account({ id: account.accountId }),
                allowance: Number(account.allowance ?? 0n),
                amountUsed: 0,
                deposit: 0n,
                createdAt: new Date(block.timestamp ?? 0),
                updatedAt: new Date(block.timestamp ?? 0),
            })
    )
    await ctx.store.save(newWhitelistedAccounts)
    listing.whitelistedAccounts.push(...newWhitelistedAccounts)
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
