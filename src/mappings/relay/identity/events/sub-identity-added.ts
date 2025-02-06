import { hexToString } from '@polkadot/util'
import { CallNotDefinedError, UnknownVersionError } from '../../../common/errors'
import { events, calls } from '../../../types/generated'
import { Event as EventModel, Identity, Registration } from '../../../model'
import { CommonContext, CallItem, BlockHeader, EventItem } from '../../types/contexts'
import { getOrCreateAccount } from '../../util/entities'

function getEventData(event: EventItem) {
    if (events.identity.subIdentityAdded.enjinV110.is(event)) {
        return events.identity.subIdentityAdded.enjinV110.decode(event)
    }

    throw new UnknownVersionError(events.identity.subIdentityAdded.name)
}

function getCallData(call: CallItem) {
    if (calls.identity.addSub.enjinV110.is(call)) {
        return calls.identity.addSub.enjinV110.decode(call)
    }

    throw new UnknownVersionError(calls.identity.addSub.name)
}

export async function subIdentityAdded(ctx: CommonContext, block: BlockHeader, item: EventItem): Promise<EventModel | undefined> {
    if (!item.call) throw new CallNotDefinedError()

    const eventData = getEventData(item)
    const callData = getCallData(item.call)

    const account = await getOrCreateAccount(ctx, eventData.sub)
    const { main } = eventData

    const existing = await ctx.store.findOneBy(Identity, { id: account.id })

    if (existing) {
        existing.super = new Identity({ id: main })
        existing.name = callData.data.__kind !== 'None' ? hexToString(callData.data.value) : null
        await ctx.store.save(existing)

        return undefined
    }

    const identity = new Identity({
        id: account.id,
        account,
        name: callData.data.__kind !== 'None' ? hexToString(callData.data.value) : null,
        super: new Identity({ id: main }),
        isSub: true,
        info: new Registration({ id: main }),
        createdAt: new Date(block.timestamp ?? 0),
    })

    await ctx.store.save(identity)

    return undefined
}
