import { throwFatalError } from '~/util/errors'
import { AccountStats, Collection } from '~/model'
import { Block, CommonContext, EventItem } from '~/contexts'
import { getOrCreateAccount } from '~/util/entities'
import { SnsEvent } from '~/util/sns'
import * as mappings from '~/pallet/index'
import { EventHandlerResult } from '~/processor.handler'

export async function collectionTransferred(
    ctx: CommonContext,
    block: Block,
    item: EventItem,
    skipSave: boolean
): Promise<EventHandlerResult> {
    const data = mappings.multiTokens.events.collectionTransferred(item)
    if (skipSave) return [mappings.multiTokens.events.collectionTransferredEventModel(item, data), undefined]

    const collection = await ctx.store.findOne<Collection>(Collection, {
        where: { id: data.collectionId.toString() },
    })

    if (!collection) {
        throwFatalError(`[CollectionTransferred] We have not found collection ${data.collectionId.toString()}`)
        return [mappings.multiTokens.events.collectionTransferredEventModel(item, data), undefined]
    }

    const oldOwner = collection.owner

    collection.owner = await getOrCreateAccount(ctx, data.newOwner)

    collection.isTransferPending = false

    await ctx.store.save(collection)

    const newOwner = collection.owner
    if (!newOwner.stats) {
        newOwner.stats = new AccountStats({
            totalCollections: 0,
            totalTokens: 0,
            volume: 0n,
        })
    }
    newOwner.stats.totalCollections++
    await ctx.store.save(newOwner)

    if (!oldOwner.stats) {
        oldOwner.stats = new AccountStats({
            totalCollections: 0,
            totalTokens: 0,
            volume: 0n,
        })
    }
    oldOwner.stats.totalCollections--
    await ctx.store.save(oldOwner)

    const snsEvent: SnsEvent = {
        id: item.id,
        name: item.name,
        body: {
            id: item.id,
            name: item.name,
            body: {
                collectionId: data.collectionId,
                owner: data.newOwner,
                extrinsic: item.extrinsic?.id,
            },
        },
    }

    return [mappings.multiTokens.events.collectionTransferredEventModel(item, data), snsEvent]
}
