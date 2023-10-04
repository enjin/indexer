import { SubstrateBlock } from '@subsquid/substrate-processor'
import { EventItem } from '@subsquid/substrate-processor/lib/interfaces/dataSelection'
import { u8aToHex } from '@polkadot/util'
import { UnknownVersionError } from '../../../common/errors'
import { ClaimsClaimRequestedEvent } from '../../../types/generated/events'
import {
    AccountClaimType,
    ClaimRequest,
    ClaimDetails,
    ClaimAccount,
    ClaimsClaimRequested,
    Event as EventModel,
    Extrinsic,
} from '../../../model'
import { Event } from '../../../types/generated/support'
import { CommonContext } from '../../types/contexts'
import { Sns } from '../../../common/sns'
import { getTotalUnclaimedAmount } from '../common'

function getEventData(ctx: CommonContext, event: Event) {
    const data = new ClaimsClaimRequestedEvent(ctx, event)

    if (data.isMatrixEnjinV603) {
        return data.asMatrixEnjinV603
    }

    throw new UnknownVersionError(data.constructor.name)
}

export async function claimRequested(
    ctx: CommonContext,
    block: SubstrateBlock,
    item: EventItem<'Claims.ClaimRequested', { event: { args: true; extrinsic: true } }>
): Promise<EventModel | undefined> {
    if (!item.event.extrinsic) return undefined

    const eventData = getEventData(ctx, item.event)

    if (!eventData) return undefined

    const account = new ClaimAccount({
        type: AccountClaimType.EVM,
        account: u8aToHex(eventData.who).toLowerCase(),
    })

    const claim = new ClaimRequest({
        id: `${u8aToHex(eventData.who)}-${u8aToHex(eventData.transactionHash)}`,
        account,
        amountClaimable: eventData.amountClaimable,
        amountBurned: eventData.amountBurned,
        hash: u8aToHex(eventData.transactionHash).toString(),
        isEfiToken: eventData.isEfiToken,
        extrinsicIndex: item.event.extrinsic.indexInBlock,
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

    await Sns.getInstance().send({
        id: item.event.id,
        name: item.event.name,
        body: {
            who: account.account,
            accountType: account.type,
            amountClaimable: eventData.amountClaimable,
            amountBurned: eventData.amountBurned,
            hash: u8aToHex(eventData.transactionHash).toString(),
            isEfiToken: eventData.isEfiToken,
            extrinsic: item.event.extrinsic.id,
        },
    })

    return new EventModel({
        id: item.event.id,
        extrinsic: item.event.extrinsic?.id ? new Extrinsic({ id: item.event.extrinsic.id }) : null,
        data: new ClaimsClaimRequested({
            who: account,
            amountClaimable: eventData.amountClaimable,
            amountBurned: eventData.amountBurned,
            hash: u8aToHex(eventData.transactionHash).toString(),
            isEfiToken: eventData.isEfiToken,
        }),
    })
}
