import { hexToString } from '@polkadot/util'
import { UnknownVersionError, throwError } from '../../../common/errors'
import { events } from '../../../types/generated'
import {
    Attribute,
    Collection,
    CollectionFlags,
    CollectionSocials,
    CollectionStats,
    Event as EventModel,
    Extrinsic,
    Metadata,
    MintPolicy,
    MultiTokensAttributeSet,
    Token,
} from '../../../model'
import { CommonContext, EventItem, BlockHeader } from '../../types/contexts'
import { getOrCreateAccount } from '../../util/entities'
import { safeString } from '../../../common/tools'
import { computeTraits } from '../../../jobs/compute-traits'
import { processMetadata } from '../../../jobs/process-metadata'

function getEventData(ctx: CommonContext, event: EventItem) {
    if (events.multiTokens.attributeSet.enjinV100.is(event)) {
        return events.multiTokens.attributeSet.enjinV100.decode(event)
    }
    throw new UnknownVersionError(events.multiTokens.attributeSet.name)
}

function getEvent(item: EventItem, data: ReturnType<typeof getEventData>) {
    return new EventModel({
        id: item.id,
        name: MultiTokensAttributeSet.name,
        extrinsic: item.extrinsic?.id ? new Extrinsic({ id: item.extrinsic.id }) : null,
        collectionId: data.collectionId.toString(),
        tokenId: data.tokenId ? `${data.collectionId}-${data.tokenId}` : null,
        data: new MultiTokensAttributeSet({
            collectionId: data.collectionId,
            tokenId: data.tokenId,
            key: safeString(hexToString(data.key)),
            value: safeString(hexToString(data.value)),
        }),
    })
}
