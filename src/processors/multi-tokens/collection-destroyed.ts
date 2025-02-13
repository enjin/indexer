import { Attribute, Collection, Event as EventModel, RoyaltyCurrency, Trait } from '../../model'
import { Sns } from '../../utils/sns'
import * as mappings from './../../mappings'
import { BlockHeader, CommonContext, EventItem } from '../../contexts'

export async function collectionDestroyed(
    ctx: CommonContext,
    block: BlockHeader,
    item: EventItem,
    skipSave: boolean
): Promise<EventModel | undefined> {
    const data = mappings.multiTokens.events.collectionDestroyed(item)

    if (skipSave) return mappings.multiTokens.events.collectionDestroyedEventModel(item, data)

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

    return mappings.multiTokens.events.collectionDestroyedEventModel(item, data)
}
