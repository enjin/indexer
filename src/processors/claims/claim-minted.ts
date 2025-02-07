import { AccountClaimType, ClaimDetails, ClaimRequest, Event as EventModel } from '../../model'
import { BlockHeader, CommonContext, EventItem } from '../../common/types/contexts'
import * as mappings from './../../mappings'

export async function claimMinted(ctx: CommonContext, block: BlockHeader, item: EventItem): Promise<EventModel | undefined> {
    const eventData = mappings.claims.events.claimMinted(item)

    if (!eventData) return undefined

    const claim = new ClaimRequest({
        id: `${eventData.who}-${block.height}-minted`,
        account: eventData.who,
        acountType: AccountClaimType.EVM,
        amountClaimable: eventData.amount,
        amountBurned: 0n,
        hash: null,
        isEfiToken: false,
        extrinsicIndex: block.height,
        isClaimed: false,
        isRejected: false,
        createdBlock: block.height,
        createdAt: new Date(block.timestamp ?? 0),
    })

    const claimDetails = new ClaimDetails({
        id: '0',
        totalUnclaimedAmount: await mappings.claims.storage.totalUnclaimedAmount(block),
    })

    await Promise.all([ctx.store.insert(claim), ctx.store.save(claimDetails)])

    return undefined
}
