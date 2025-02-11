import { multiTokens } from '../../../types/generated/events'
import { EventItem } from '../../../common/types/contexts'
import { UnsupportedEventError } from '../../../common/errors'
import { match } from 'ts-pattern'
import { Event as EventModel, Extrinsic, MultiTokensUnapproved } from '../../../model'
import { Unapproved } from './types/unapproved'

export function unapproved(event: EventItem): Unapproved {
    return match(event)
        .returnType<Unapproved>()
        .when(multiTokens.unapproved.matrixEnjinV603.is, multiTokens.unapproved.matrixEnjinV603.decode)
        .otherwise(() => {
            throw new UnsupportedEventError(event)
        })
}

export function unapprovedEventModel(item: EventItem, data: Unapproved): EventModel | undefined {
    return new EventModel({
        id: item.id,
        name: MultiTokensUnapproved.name,
        extrinsic: item.extrinsic?.id ? new Extrinsic({ id: item.extrinsic.id }) : null,
        collectionId: data.collectionId.toString(),
        tokenId: data.tokenId ? `${data.collectionId}-${data.tokenId}` : null,
        data: new MultiTokensUnapproved({
            collectionId: data.collectionId,
            tokenId: data.tokenId,
            owner: data.owner,
            operator: data.operator,
        }),
    })
}
