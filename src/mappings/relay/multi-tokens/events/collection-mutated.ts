import { UnknownVersionError, throwError } from '../../../common/errors'
import { events } from '../../../types/generated'
import {
    Collection,
    Event as EventModel,
    Extrinsic,
    MarketPolicy,
    MultiTokensCollectionMutated,
    Royalty,
    RoyaltyCurrency,
    Token,
} from '../../../model'
import { CommonContext, BlockHeader, EventItem } from '../../types/contexts'
import { getOrCreateAccount } from '../../util/entities'
import { DefaultRoyalty as DefaultRoyalty1032 } from '../../../types/generated/enjinV1032'
import { DefaultRoyalty as DefaultRoyalty1050 } from '../../../types/generated/v1050'

function getEventData(ctx: CommonContext, event: EventItem) {
    if (events.multiTokens.collectionMutated.v1050.is(event)) {
        return events.multiTokens.collectionMutated.v1050.decode(event)
    }

    if (events.multiTokens.collectionMutated.enjinV100.is(event)) {
        return events.multiTokens.collectionMutated.enjinV100.decode(event)
    }

    throw new UnknownVersionError(events.multiTokens.collectionMutated.name)
}

function getEvent(item: EventItem, data: ReturnType<typeof getEventData>) {
    return new EventModel({
        id: item.id,
        name: MultiTokensCollectionMutated.name,
        extrinsic: item.extrinsic?.id ? new Extrinsic({ id: item.extrinsic.id }) : null,
        collectionId: data.collectionId.toString(),
        tokenId: null,
        data: new MultiTokensCollectionMutated({
            collectionId: data.collectionId,
        }),
    })
}
