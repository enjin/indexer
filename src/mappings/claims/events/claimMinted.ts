import { UnknownVersionError } from '../../../common/errors'
import { claims } from '../../../types/generated/events'
import { AccountClaimType, ClaimRequest, ClaimDetails, ClaimAccount, Event as EventModel } from '../../../model'
import { CommonContext, BlockHeader, EventItem } from '../../types/contexts'
import { getTotalUnclaimedAmount } from '../common'

function getEventData(event: EventItem) {
    if (claims.claimMinted.matrixEnjinV603.is(event)) {
        return claims.claimMinted.matrixEnjinV603.decode(event)
    }

    throw new UnknownVersionError(claims.claimMinted.name)
}

export async function claimMinted(ctx: CommonContext, block: BlockHeader, item: EventItem): Promise<EventModel | undefined> {
    const eventData = getEventData(item)

    if (!eventData) return undefined

    const account = new ClaimAccount({
        type: AccountClaimType.EVM,
        account: eventData.who,
    })

    const claim = new ClaimRequest({
        id: `${eventData.who}-${block.height}-minted`,
        account,
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
