import { u8aToHex } from '@polkadot/util'
import { SubstrateBlock } from '@subsquid/substrate-processor'
import { EventItem } from '@subsquid/substrate-processor/lib/interfaces/dataSelection'
import { UnknownVersionError } from '../../../common/errors'
import { Claim, ClaimsClaimedEnj, Event as EventModel, Extrinsic } from '../../../model'
import { Event } from '../../../types/generated/support'
import { CommonContext } from '../../types/contexts'
import { ClaimsClaimedEnjEvent } from '../../../types/generated/events'
import { getOrCreateAccount } from '../../util/entities'

interface EventData {
    who: Uint8Array
    amount: bigint
}

function getEventData(ctx: CommonContext, event: Event): EventData {
    const data = new ClaimsClaimedEnjEvent(ctx, event)

    if (data.isV500) {
        const { who, amount } = data.asV500
        return {
            who,
            amount,
        }
    }

    throw new UnknownVersionError(data.constructor.name)
}

export async function claimedEnj(
    ctx: CommonContext,
    block: SubstrateBlock,
    item: EventItem<'Claims.ClaimedEnj', { event: { args: true; extrinsic: true } }>
): Promise<EventModel | undefined> {
    const data = getEventData(ctx, item.event)
    if (!data) return undefined

    const who = u8aToHex(data.who)
    const account = await getOrCreateAccount(ctx as unknown as CommonContext, data.who)
    const extrinsic = item.event.extrinsic?.id ? new Extrinsic({ id: item.event.extrinsic.id }) : null

    const claim = new Claim({
        id: `${who}-${item.event.id}`,
        extrinsic,
        account,
        amount: data.amount,
    })

    await ctx.store.save(claim)
    return new EventModel({
        id: item.event.id,
        extrinsic,
        data: new ClaimsClaimedEnj({
            who,
            amount: data.amount,
        }),
    })
}
