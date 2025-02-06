import { hexToString } from '@polkadot/util'
import { CallNotDefinedError, UnsupportedEventError } from '../../common/errors'
import { events, calls } from '../../types/generated'
import { Event as EventModel, Identity, Registration } from '../../model'
import { CommonContext, CallItem, BlockHeader, EventItem } from 'matrixchain-indexer/common/types/contexts'
import { getOrCreateAccount } from 'matrixchain-indexer/common/util/entities'

function getEventData(event: EventItem) {
    if (events.identity.subIdentityAdded.matrixEnjinV1000.is(event)) {
        return events.identity.subIdentityAdded.matrixEnjinV1000.decode(event)
    }

    throw new UnsupportedEventError(events.identity.subIdentityAdded.name)
}

function getCallData(call: CallItem) {
    if (calls.identity.addSub.matrixEnjinV1000.is(call)) {
        return calls.identity.addSub.matrixEnjinV1000.decode(call)
    }

    throw new UnsupportedEventError(calls.identity.addSub.name)
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
