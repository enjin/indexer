import { throwFatalError } from '~/util/errors'
import { Collection, Event as EventModel } from '~/model'
import { Block, CommonContext, EventItem } from '~/contexts'
import { getOrCreateAccount } from '~/util/entities'
import { Sns } from '~/util/sns'
import * as mappings from '~/pallet/index'

export async function collectionTransferred(
    ctx: CommonContext,
    block: Block,
    item: EventItem,
    skipSave: boolean
): Promise<EventModel | undefined> {
    const data = mappings.multiTokens.events.collectionTransferred(item)
    if (skipSave) return mappings.multiTokens.events.collectionTransferredEventModel(item, data)

    const collection = await ctx.store.findOne<Collection>(Collection, {
        where: { id: data.collectionId.toString() },
    })

    if (!collection) {
        throwFatalError(`[CollectionTransferred] We have not found collection ${data.collectionId.toString()}`)
        return mappings.multiTokens.events.collectionTransferredEventModel(item, data)
    }

    collection.owner = await getOrCreateAccount(ctx, data.newOwner)

    collection.isTransferPending = false

    await ctx.store.save(collection)

    if (item.extrinsic) {
        await Sns.getInstance().send({
            id: item.id,
            name: item.name,
            body: {
                collectionId: data.collectionId,
                owner: data.newOwner,
                extrinsic: item.extrinsic.id,
            },
        })
    }

    return mappings.multiTokens.events.collectionTransferredEventModel(item, data)
}
