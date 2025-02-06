import { UnknownVersionError, throwError } from '../../../common/errors'
import { events } from '../../../types/generated'
import { Attribute, Collection, Event as EventModel, Extrinsic, MultiTokensAttributeRemoved, Token } from '../../../model'
import { CommonContext, EventItem, BlockHeader } from '../../types/contexts'
import { processMetadata } from '../../../jobs/process-metadata'
import { computeTraits } from '../../../jobs/compute-traits'

function getEventData(ctx: CommonContext, event: EventItem) {
    if (events.multiTokens.attributeRemoved.enjinV100.is(event)) {
        return events.multiTokens.attributeRemoved.enjinV100.decode(event)
    }

    throw new UnknownVersionError(events.multiTokens.attributeRemoved.name)
}

function getEvent(item: EventItem, data: ReturnType<typeof getEventData>) {
    return new EventModel({
        id: item.id,
        name: MultiTokensAttributeRemoved.name,
        extrinsic: item.extrinsic?.id ? new Extrinsic({ id: item.extrinsic.id }) : null,
        collectionId: data.collectionId.toString(),
        tokenId: data.tokenId ? `${data.collectionId}-${data.tokenId}` : null,
        data: new MultiTokensAttributeRemoved({
            collectionId: data.collectionId,
            tokenId: data.tokenId,
            key: data.key,
        }),
    })
}
