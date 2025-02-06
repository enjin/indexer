import { UnknownVersionError, throwError } from '../../../common/errors'
import { events } from '../../../types/generated'
import { CollectionAccount, Event as EventModel, Extrinsic, MultiTokensCollectionAccountDestroyed } from '../../../model'
import { CommonContext, BlockHeader, EventItem } from '../../types/contexts'

function getEventData(event: EventItem) {
    if (events.multiTokens.collectionAccountDestroyed.enjinV100.is(event)) {
        return events.multiTokens.collectionAccountDestroyed.enjinV100.decode(event)
    }
    throw new UnknownVersionError(events.multiTokens.collectionAccountDestroyed.name)
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
