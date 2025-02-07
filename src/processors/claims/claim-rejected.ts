import { ClaimDetails, ClaimRequest, Event as EventModel } from '../../model'
import { BlockHeader, CommonContext, EventItem } from '../../common/types/contexts'
import * as mappings from './../../mappings'

export async function claimRejected(ctx: CommonContext, block: BlockHeader, item: EventItem): Promise<EventModel | undefined> {
    const eventData = mappings.claims.events.claimRejected(item)

    if (!eventData) return undefined

    const claimREeq = await ctx.store.findOneByOrFail(ClaimRequest, { hash: eventData.transactionHash.toString() })

    const claimDetails = new ClaimDetails({
        id: '0',
        totalUnclaimedAmount: await mappings.claims.storage.totalUnclaimedAmount(block),
    })

    claimREeq.isRejected = true

    await Promise.all([ctx.store.save(claimREeq), ctx.store.save(claimDetails)])

    return undefined
}
