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
    if (events.multiTokens.collectionDestroyed.enjinV100.is(event)) {
        return events.multiTokens.collectionDestroyed.enjinV100.decode(event)
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
