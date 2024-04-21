import { UnknownVersionError } from '../../../common/errors'
import { events } from '../../../types/generated'
import {
    Attribute,
    Collection,
    Event as EventModel,
    Extrinsic,
    MultiTokensCollectionDestroyed,
    RoyaltyCurrency,
    Trait,
} from '../../../model'
import { CommonContext, BlockHeader, EventItem } from '../../types/contexts'

function getEventData(event: EventItem) {
    if (events.multiTokens.collectionDestroyed.matrixEnjinV603.is(event)) {
        return events.multiTokens.collectionDestroyed.matrixEnjinV603.decode(event)
    }

    throw new UnknownVersionError(events.multiTokens.collectionDestroyed.name)
}

function getEvent(item: EventItem, data: ReturnType<typeof getEventData>) {
    return new EventModel({
        id: item.id,
        extrinsic: item.extrinsic?.id ? new Extrinsic({ id: item.extrinsic.id }) : null,
        data: new MultiTokensCollectionDestroyed({
            collectionId: data.collectionId,
            caller: data.caller,
        }),
    })
}

export async function collectionDestroyed(
    ctx: CommonContext,
    block: BlockHeader,
    item: EventItem,
    skipSave: boolean
): Promise<EventModel | undefined> {
    const data = getEventData(item)
    if (!data) return undefined

    if (skipSave) return getEvent(item, data)

    const collectionId = data.collectionId.toString()

    await Promise.all([
        ctx.store.delete(Trait, { collection: { id: collectionId } }),
        ctx.store.delete(RoyaltyCurrency, { collection: { id: collectionId } }),
        ctx.store.delete(Attribute, { collection: { id: collectionId } }),
    ])

    await ctx.store.delete(Collection, { id: collectionId })

    return getEvent(item, data)
}
