import { SubstrateBlock } from '@subsquid/substrate-processor'
import { EventItem } from '@subsquid/substrate-processor/lib/interfaces/dataSelection'
import { u8aToHex } from '@polkadot/util'
import { UnknownVersionError } from '../../../common/errors'
import { ClaimsClaimMintedEvent } from '../../../types/generated/events'
import { AccountClaimType, ClaimRequest, ClaimDetails, ClaimAccount, Event as EventModel } from '../../../model'
import { Event } from '../../../types/generated/support'
import { CommonContext } from '../../types/contexts'
import { getTotalUnclaimedAmount } from '../common'

function getEventData(ctx: CommonContext, event: Event) {
    const data = new ClaimsClaimMintedEvent(ctx, event)

    if (data.isMatrixEnjinV603) {
        return data.asMatrixEnjinV603
    }

    throw new UnknownVersionError(data.constructor.name)
}

export async function claimMinted(
    ctx: CommonContext,
    block: SubstrateBlock,
    item: EventItem<'Claims.ClaimMinted', { event: { args: true; extrinsic: true } }>
): Promise<EventModel | undefined> {
    const eventData = getEventData(ctx, item.event)

    if (!eventData) return undefined

    const account = new ClaimAccount({
        type: AccountClaimType.EVM,
        account: u8aToHex(eventData.who),
    })

    const claim = new ClaimRequest({
        id: `${u8aToHex(eventData.who)}-${block.height}-minted`,
        account,
        amountClaimable: eventData.amount,
        amountBurned: 0n,
        hash: null,
        isEfiToken: false,
        extrinsicIndex: block.height,
        isClaimed: false,
        isRejected: false,
        createdBlock: block.height,
        createdAt: new Date(block.timestamp),
    })

    const claimDetails = new ClaimDetails({
        id: '0',
        totalUnclaimedAmount: await getTotalUnclaimedAmount(ctx, block),
    })

    await Promise.all([ctx.store.insert(ClaimRequest, claim), ctx.store.save(claimDetails)])

    return undefined
}
