import { u8aToHex } from '@polkadot/util'
import { SubstrateBlock } from '@subsquid/substrate-processor'
import { EventItem } from '@subsquid/substrate-processor/lib/interfaces/dataSelection'
import { UnknownVersionError } from '../../../common/errors'
import { MultiTokensClaimTokensCompletedEvent } from '../../../types/generated/events'
import { Event as EventModel, Extrinsic, MultiTokensClaims, MultiTokensClaimTokensCompleted } from '../../../model'
import { CommonContext } from '../../types/contexts'
import { Event } from '../../../types/generated/support'
import { Sns } from '../../../common/sns'

function getEventData(ctx: CommonContext, event: Event) {
    const data = new MultiTokensClaimTokensCompletedEvent(ctx, event)

    if (data.isMatrixEnjinV1000) {
        return data.asMatrixEnjinV1000
    }
    throw new UnknownVersionError(data.constructor.name)
}

export async function claimTokensCompleted(
    ctx: CommonContext,
    block: SubstrateBlock,
    item: EventItem<'MultiTokens.ClaimTokensCompleted', { event: { args: true; extrinsic: true } }>
): Promise<EventModel | undefined> {
    const data = getEventData(ctx, item.event)
    if (!data) return undefined

    const claim = new MultiTokensClaims({
        id: `${u8aToHex(data.destination)}-${u8aToHex(data.ethereumAddress)}`,
        completed: true,
    })

    await ctx.store.save(claim)

    Sns.getInstance().send({
        id: item.event.id,
        name: item.event.name,
        body: {
            account: u8aToHex(data.destination),
            ethAccount: u8aToHex(data.ethereumAddress),
        },
    })

    return new EventModel({
        id: item.event.id,
        extrinsic: item.event.extrinsic?.id ? new Extrinsic({ id: item.event.extrinsic.id }) : null,
        data: new MultiTokensClaimTokensCompleted({
            account: u8aToHex(data.destination),
            ethAccount: u8aToHex(data.ethereumAddress),
        }),
    })
}
