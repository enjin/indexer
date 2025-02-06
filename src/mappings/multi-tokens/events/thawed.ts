import { multiTokens } from '../../../types/generated/events'
import { EventItem } from '../../../common/types/contexts'
import { UnsupportedEventError } from '../../../common/errors'
import { match } from 'ts-pattern'
import { Event as EventModel, Extrinsic, MultiTokensThawed } from '@enjin/indexer/model'

type ThawedEvent = {
    collectionId: bigint
    freezeType: any
    tokenId?: bigint
    collectionAccount?: string
    tokenAccount?: string
}

export function thawed(event: EventItem): ThawedEvent {
    return match(event)
        .returnType<ThawedEvent>()
        .when(multiTokens.thawed.matrixEnjinV603.is, multiTokens.thawed.matrixEnjinV603.decode)
        .otherwise(() => {
            throw new UnsupportedEventError(event)
        })
}

export function thawedEventModel(item: EventItem, data: any): EventModel | undefined {
    return new EventModel({
        id: item.id,
        name: MultiTokensThawed.name,
        extrinsic: item.extrinsic?.id ? new Extrinsic({ id: item.extrinsic.id }) : null,
        collectionId: data.collectionId.toString(),
        tokenId: data.tokenId ? `${data.collectionId}-${data.tokenId}` : null,
        data: new MultiTokensThawed(),
    })
}
