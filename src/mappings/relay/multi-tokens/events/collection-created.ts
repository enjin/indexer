import { UnknownVersionError, UnsupportedCallError } from '../../../common/errors'
import { events, calls, storage } from '../../../types/generated'
import {
    Collection,
    CollectionFlags,
    CollectionSocials,
    CollectionStats,
    Event as EventModel,
    Extrinsic,
    MarketPolicy,
    MintPolicy,
    MultiTokensCollectionCreated,
    Royalty,
    RoyaltyCurrency,
    Token,
    TransferPolicy,
} from '../../../model'
import { CommonContext, BlockHeader, CallItem, EventItem } from '../../types/contexts'
import { getOrCreateAccount } from '../../util/entities'
import { Sns } from '../../../common/sns'
import { DefaultRoyalty as DefaultRoyalty1032 } from '../../../types/generated/enjinV1032'
import { DefaultRoyalty as DefaultRoyalty1050 } from '../../../types/generated/v1050'
import { AssetId } from '../../../types/generated/enjinV1032'

type DefaultRoyalty = DefaultRoyalty1032 | DefaultRoyalty1050

function getEventData(event: EventItem) {
    if (events.multiTokens.collectionCreated.enjinV100.is(event)) {
        return events.multiTokens.collectionCreated.enjinV100.decode(event)
    }

    throw new UnknownVersionError(events.multiTokens.collectionCreated.name)
}

function getEvent(item: EventItem, data: ReturnType<typeof getEventData>) {
    return new EventModel({
        id: item.id,
        name: MultiTokensCollectionCreated.name,
        extrinsic: item.extrinsic?.id ? new Extrinsic({ id: item.extrinsic.id }) : null,
        data: new MultiTokensCollectionCreated({
            collectionId: data.collectionId,
            owner: data.owner,
        }),
    })
}
