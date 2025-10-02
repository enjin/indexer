import { Event as EventModel, Listing, WhitelistedAccount } from '~/model'
import { Block, CommonContext, EventItem } from '~/contexts'
import { SnsEvent } from '~/util/sns'
import * as mappings from '~/pallet/index'
import { In } from 'typeorm'

export async function whitelistedAccountsRemoved(
    ctx: CommonContext,
    block: Block,
    item: EventItem
): Promise<[EventModel, SnsEvent | undefined] | undefined> {
    const event = mappings.marketplace.events.whitelistedAccountsRemoved(item)
    const listingId = event.listingId.substring(2)

    const listing = await ctx.store.findOne<Listing>(Listing, {
        where: { id: listingId },
    })
    if (!listing) return [mappings.marketplace.events.whitelistedAccountsRemovedEventModel(item, event), undefined]

    const accountIds = event.accounts.map((account) => account.accountId)
    const whitelistedAccounts = await ctx.store.find<WhitelistedAccount>(WhitelistedAccount, {
        where: { listing: { id: listingId }, account: { id: In(accountIds) } },
    })
    await ctx.store.remove(whitelistedAccounts)

    listing.whitelistedAccounts = listing.whitelistedAccounts.filter(
        (account) => !accountIds.includes(account.account.id)
    )
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
        mappings.marketplace.events.whitelistedAccountsRemovedEventModel(item, event),
        item.extrinsic ? snsEvent : undefined,
    ]
}
