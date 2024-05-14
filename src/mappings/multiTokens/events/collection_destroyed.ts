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
import { Sns } from '../../../common/sns'
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
        name: MultiTokensCollectionDestroyed.name,
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

    const collection = await ctx.store.findOneByOrFail(Collection, { id: collectionId })

    const [traits, royaltyCurrencies, attributes] = await Promise.all([
        ctx.store.find(Trait, { where: { collection: { id: collectionId } } }),
        ctx.store.find(RoyaltyCurrency, { where: { collection: { id: collectionId } } }),
        ctx.store.find(Attribute, { where: { collection: { id: collectionId } } }),
    ])

    await Promise.all([ctx.store.remove(traits), ctx.store.remove(royaltyCurrencies), ctx.store.remove(attributes)])

    await ctx.store.remove(collection)

    if (item.extrinsic) {
        await Sns.getInstance().send({
            id: item.id,
            name: item.name,
            body: {
                collectionId: data.collectionId,
                caller: data.caller,
                extrinsic: item.extrinsic.id,
            },
        })
    }

    return getEvent(item, data)
}
