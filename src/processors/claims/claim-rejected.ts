import { ClaimDetails, ClaimRequest, Event as EventModel } from '../../model'
import { BlockHeader, CommonContext, EventItem } from '../../common/types/contexts'
import * as mappings from './../../mappings'

export async function claimRejected(ctx: CommonContext, block: BlockHeader, item: EventItem): Promise<EventModel | undefined> {
    const event = mappings.claims.events.claimRejected(item)
    const claimRequest = await ctx.store.findOneByOrFail<ClaimRequest>(ClaimRequest, { hash: event.transactionHash.toString() })

    const claimDetails = new ClaimDetails({
        id: '0',
        totalUnclaimedAmount: await mappings.claims.storage.totalUnclaimedAmount(block),
    })

    claimRequest.isRejected = true

    await Promise.all([ctx.store.save(claimRequest), ctx.store.save(claimDetails)])

    return undefined
}
