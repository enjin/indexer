import { UnknownVersionError, throwError } from '../../../common/errors'
import { events } from '../../../types/generated'
import {
    CollectionAccount,
    Event as EventModel,
    Extrinsic,
    MultiTokensTokenAccountDestroyed,
    PoolMember,
    TokenAccount,
} from '../../../model'
import { CommonContext, BlockHeader, EventItem } from '../../types/contexts'

function getEventData(ctx: CommonContext, event: EventItem) {
    if (events.multiTokens.tokenAccountDestroyed.enjinV100.is(event)) {
        return events.multiTokens.tokenAccountDestroyed.enjinV100.decode(event)
    }

    throw new UnknownVersionError(events.multiTokens.tokenAccountDestroyed.name)
}

function getEvent(item: EventItem, data: ReturnType<typeof getEventData>) {
    return new EventModel({
        id: item.id,
        name: MultiTokensTokenAccountDestroyed.name,
        extrinsic: item.extrinsic?.id ? new Extrinsic({ id: item.extrinsic.id }) : null,
        collectionId: data.collectionId.toString(),
        tokenId: data.tokenId ? `${data.collectionId}-${data.tokenId}` : null,
        data: new MultiTokensTokenAccountDestroyed({
            collectionId: data.collectionId,
            tokenId: data.tokenId,
            accountId: data.accountId,
        }),
    })
}