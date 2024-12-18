import { throwError, UnknownVersionError } from '../../../common/errors'
import { events } from '../../../types/generated'
import { Collection, Event as EventModel, Extrinsic, MultiTokensCollectionTransferred } from '../../../model'
import { CommonContext, BlockHeader, EventItem } from '../../types/contexts'
import { getOrCreateAccount } from '../../util/entities'
import { Sns } from '../../../common/sns'

function getEventData(event: EventItem) {
    if (events.multiTokens.collectionTransferred.matrixEnjinV1004.is(event)) {
        return events.multiTokens.collectionTransferred.matrixEnjinV1004.decode(event)
    }

    throw new UnknownVersionError(events.multiTokens.collectionTransferred.name)
}

function getEvent(item: EventItem, data: ReturnType<typeof getEventData>) {
    return new EventModel({
        id: item.id,
        name: MultiTokensCollectionTransferred.name,
        collectionId: data.collectionId.toString(),
        extrinsic: item.extrinsic?.id ? new Extrinsic({ id: item.extrinsic.id }) : null,
        data: new MultiTokensCollectionTransferred({
            collectionId: data.collectionId,
            owner: data.newOwner,
        }),
    })
}

export async function collectionTransferred(
    ctx: CommonContext,
    block: BlockHeader,
    item: EventItem,
    skipSave: boolean
): Promise<EventModel | undefined> {
    const data = getEventData(item)
    if (!data) return undefined

    if (skipSave) return getEvent(item, data)

    const collection = await ctx.store.findOne<Collection>(Collection, {
        where: { id: data.collectionId.toString() },
    })

    if (!collection) {
        throwError(`[CollectionTransferred] We have not found collection ${data.collectionId.toString()}`, 'fatal')
        return getEvent(item, data)
    }

    collection.owner = await getOrCreateAccount(ctx, data.newOwner)

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

    return getEvent(item, data)
}
