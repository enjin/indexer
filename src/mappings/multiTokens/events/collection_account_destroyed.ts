import { UnsupportedEventError, throwError } from '../../../common/errors'
import { events } from '../../../types/generated'
import { CollectionAccount, Event as EventModel, Extrinsic, MultiTokensCollectionAccountDestroyed } from '../../../model'
import { CommonContext, BlockHeader, EventItem } from '../../types/contexts'

function getEventData(event: EventItem) {
    if (events.multiTokens.collectionAccountDestroyed.matrixEnjinV603.is(event)) {
        return events.multiTokens.collectionAccountDestroyed.matrixEnjinV603.decode(event)
    }
    throw new UnsupportedEventError(events.multiTokens.collectionAccountDestroyed.name)
}

function getEvent(item: EventItem, data: ReturnType<typeof getEventData>) {
    return new EventModel({
        id: item.id,
        name: MultiTokensCollectionAccountDestroyed.name,
        extrinsic: item.extrinsic?.id ? new Extrinsic({ id: item.extrinsic.id }) : null,
        data: new MultiTokensCollectionAccountDestroyed({
            collectionId: data.collectionId,
            account: data.accountId,
        }),
    })
}

export async function collectionAccountDestroyed(
    ctx: CommonContext,
    block: BlockHeader,
    item: EventItem,
    skipSave: boolean
): Promise<EventModel | undefined> {
    const data = getEventData(item)
    if (!data) return undefined

    if (skipSave) return getEvent(item, data)

    const address = data.accountId
    const collectionAccount = await ctx.store.findOne<CollectionAccount>(CollectionAccount, {
        where: { id: `${data.collectionId}-${address}` },
    })
    if (collectionAccount) {
        await ctx.store.remove(collectionAccount)
    } else {
        throwError(`[CollectionAccountDestroyed] We have not found collection account ${data.collectionId}-${address}.`, 'fatal')
    }

    return getEvent(item, data)
}
