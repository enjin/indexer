import { UnknownVersionError } from '../../../common/errors'
import { claims } from '../../../types/generated/events'
import { AccountClaimType, ClaimRequest, ClaimsClaimRequested, Event as EventModel, Extrinsic } from '../../../model'
import { CommonContext, BlockHeader, EventItem } from '../../types/contexts'
import { Sns } from '../../../common/sns'

function getEventData(event: EventItem) {
    if (claims.claimRequested.matrixEnjinV603.is(event)) {
        return claims.claimRequested.matrixEnjinV603.decode(event)
    }

    throw new UnknownVersionError(claims.claimRequested.name)
}

export async function claimRequested(ctx: CommonContext, block: BlockHeader, item: EventItem): Promise<EventModel | undefined> {
    if (!item.extrinsic) return undefined

    const eventData = getEventData(item)

    if (!eventData) return undefined

    const claim = new ClaimRequest({
        id: `${eventData.who}-${eventData.transactionHash}`,
        account: eventData.who,
        acountType: AccountClaimType.EVM,
        amountClaimable: eventData.amountClaimable,
        amountBurned: eventData.amountBurned,
        hash: eventData.transactionHash.toString(),
        isEfiToken: eventData.isEfiToken,
        extrinsicIndex: item.extrinsic.index,
        isClaimed: false,
        isRejected: false,
        createdBlock: block.height,
        createdAt: new Date(block.timestamp ?? 0),
    })

    await Promise.all([ctx.store.insert(claim)])

    if (item.extrinsic) {
        await Sns.getInstance().send({
            id: item.id,
            name: item.name,
            body: {
                who: eventData.who,
                accountType: AccountClaimType.EVM,
                amountClaimable: eventData.amountClaimable,
                amountBurned: eventData.amountBurned,
                hash: eventData.transactionHash.toString(),
                isEfiToken: eventData.isEfiToken,
                extrinsic: item.extrinsic.id,
            },
        })
    }

    return new EventModel({
        id: item.id,
        name: ClaimsClaimRequested.name,
        extrinsic: item.extrinsic?.id ? new Extrinsic({ id: item.extrinsic.id }) : null,
        data: new ClaimsClaimRequested({
            who: eventData.who,
            accountType: AccountClaimType.EVM,
            amountClaimable: eventData.amountClaimable,
            amountBurned: eventData.amountBurned,
            hash: eventData.transactionHash.toString(),
            isEfiToken: eventData.isEfiToken,
        }),
    })
}
