import {
    AccountTokenEvent,
    Attribute,
    Collection,
    CollectionAccount,
    Event as EventModel,
    RoyaltyCurrency,
    Trait,
} from '../../../model'
import { Sns } from '../../../util/sns'
import * as mappings from '../../index'
import { Block, CommonContext, EventItem } from '../../../contexts'

export async function collectionDestroyed(
    ctx: CommonContext,
    block: Block,
    item: EventItem,
    skipSave: boolean
): Promise<EventModel | undefined> {
    const data = mappings.multiTokens.events.collectionDestroyed(item)
    if (skipSave) return mappings.multiTokens.events.collectionDestroyedEventModel(item, data)

    const collectionId = data.collectionId.toString()
    const collection = await ctx.store.findOneBy(Collection, { id: collectionId })

    if (!collection) {
        return mappings.multiTokens.events.collectionDestroyedEventModel(item, data)
    }

    const [accountTokenEvents, collectionAccounts, traits, royaltyCurrencies, attributes] = await Promise.all([
        ctx.store.find(AccountTokenEvent, {
            where: {
                collection: {
                    id: collection.id,
                },
            },
        }),
        ctx.store.find(CollectionAccount, {
            where: {
                collection: {
                    id: collection.id,
                },
            },
        }),
        ctx.store.find(Trait, { where: { collection: { id: collectionId } } }),
        ctx.store.find(RoyaltyCurrency, { where: { collection: { id: collectionId } } }),
        ctx.store.find(Attribute, { where: { collection: { id: collectionId } } }),
    ])

    const events = accountTokenEvents.map((e: AccountTokenEvent): AccountTokenEvent => {
        e.token = null
        return e
    })

    await Promise.all([
        ctx.store.remove(events),
        ctx.store.remove(collectionAccounts),
        ctx.store.remove(traits),
        ctx.store.remove(royaltyCurrencies),
        ctx.store.remove(attributes),
        ctx.store.remove(collection),
    ])

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
