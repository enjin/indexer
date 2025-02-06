import { throwError, UnknownVersionError } from '../../../common/errors'
import { events } from '../../../types/generated'
import { Collection, Event as EventModel, Extrinsic, MultiTokensCollectionTransferred } from '../../../model'
import { CommonContext, BlockHeader, EventItem } from '../../types/contexts'
import { getOrCreateAccount } from '../../util/entities'
import { Sns } from '../../../common/sns'

function getEventData(event: EventItem) {
    if (events.multiTokens.collectionTransferred.enjinV1032.is(event)) {
        return events.multiTokens.collectionTransferred.enjinV1032.decode(event)
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
