import { UnsupportedEventError } from '../../common/errors'
import { claims } from '../../types/generated/events'
import { AccountClaimType, ClaimRequest, ClaimDetails, Event as EventModel } from '../../model'
import { CommonContext, BlockHeader, EventItem } from 'matrixchain-indexer/common/types/contexts'
import { getTotalUnclaimedAmount } from './common'

export async function claimMinted(ctx: CommonContext, block: BlockHeader, item: EventItem): Promise<EventModel | undefined> {
    const eventData = getEventData(item)

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
        totalUnclaimedAmount: await getTotalUnclaimedAmount(ctx, block),
    })

    await Promise.all([ctx.store.insert(claim), ctx.store.save(claimDetails)])

    return undefined
}
