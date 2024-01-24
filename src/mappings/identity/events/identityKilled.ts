import { SubstrateBlock } from '@subsquid/substrate-processor'
import { EventItem } from '@subsquid/substrate-processor/lib/interfaces/dataSelection'
import { u8aToHex } from '@polkadot/util'
import { UnknownVersionError } from '../../../common/errors'
import { IdentityIdentityKilledEvent } from '../../../types/generated/events'
import { Event as EventModel, Identity, Registration } from '../../../model'
import { Event } from '../../../types/generated/support'
import { CommonContext } from '../../types/contexts'

function getEventData(ctx: CommonContext, event: Event) {
    const data = new IdentityIdentityKilledEvent(ctx, event)

    if (data.isMatrixEnjinV1000) {
        return data.asMatrixEnjinV1000
    }

    throw new UnknownVersionError(data.constructor.name)
}

export async function identityKilled(
    ctx: CommonContext,
    block: SubstrateBlock,
    item: EventItem<'Identity.IdentityKilled', { event: { args: true; extrinsic: true } }>
): Promise<EventModel | undefined> {
    const eventData = getEventData(ctx, item.event)

    const identity = await ctx.store.findOneByOrFail(Identity, { id: u8aToHex(eventData.who) })
    await ctx.store.delete(Registration, { id: u8aToHex(eventData.who) })
    await ctx.store.delete(Identity, { super: { id: identity.id } })
    await ctx.store.remove(Identity, identity)

    return undefined
}
