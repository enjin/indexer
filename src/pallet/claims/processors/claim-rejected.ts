import { ClaimDetails, ClaimRequest, Event as EventModel } from '../../../model'
import { Block, CommonContext, EventItem } from '../../../contexts'
import * as mappings from '../../index'

export async function claimRejected(
    ctx: CommonContext,
    block: Block,
    item: EventItem
): Promise<EventModel | undefined> {
    const event = mappings.claims.events.claimRejected(item)
    const claimRequest = await ctx.store.findOneByOrFail<ClaimRequest>(ClaimRequest, {
        hash: event.transactionHash.toString(),
    })

    const claimDetails = new ClaimDetails({
        id: '0',
        totalUnclaimedAmount: await mappings.claims.storage.totalUnclaimedAmount(block),
    })

    claimRequest.isRejected = true

    await Promise.all([ctx.store.save(claimRequest), ctx.store.save(claimDetails)])

    return undefined
}
