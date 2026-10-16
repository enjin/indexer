import { ClaimRequest, Event as EventModel } from '~/model'
import { CommonContext, EventItem } from '~/contexts'
import * as mappings from '~/pallet/index'

function pendingRequests(ctx: CommonContext, who: string) {
    return ctx.store.find<ClaimRequest>(ClaimRequest, { where: { who, isClaimed: false, isRejected: false } })
}

/**
 * Mirrors `move_claim`: `Claims::take(old)` followed by `Claims::insert(new, ..)`. When `old` has no stored claims
 * the chain changes nothing. Otherwise every pending entry of `old` now belongs to `new`, and `insert` replaces
 * whatever `new` had pending, so those entries can never be paid and are marked rejected.
 */
export async function claimMoved(ctx: CommonContext, item: EventItem): Promise<EventModel | undefined> {
    const event = mappings.claims.events.claimMoved(item)
    const oldAddress = event.old.toLowerCase()
    const newAddress = event.new.toLowerCase()

    if (oldAddress === newAddress) return undefined

    const moved = await pendingRequests(ctx, oldAddress)
    if (moved.length === 0) return undefined

    const replaced = await pendingRequests(ctx, newAddress)

    for (const request of moved) {
        request.who = newAddress
    }

    for (const request of replaced) {
        request.isRejected = true
    }

    await ctx.store.save([...replaced, ...moved])

    return undefined
}
