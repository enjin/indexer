import { multiTokens } from '../../../types/generated/events'
import { EventItem } from '../../../common/types/contexts'
import { UnsupportedEventError } from '../../../common/errors'
import { match } from 'ts-pattern'
import { Event as EventModel, Extrinsic, MultiTokensApproved } from '@enjin/indexer/model'
import { Approved } from './types'

export function approved(event: EventItem): Approved {
    return match(event)
        .returnType<Approved>()
        .when(multiTokens.approved.matrixEnjinV603.is, multiTokens.approved.matrixEnjinV603.decode)
        .otherwise(() => {
            throw new UnsupportedEventError(event)
        })
}

export function approvedEventModel(item: EventItem, data: Approved): EventModel | undefined {
    return new EventModel({
        id: item.id,
        name: MultiTokensApproved.name,
        extrinsic: item.extrinsic?.id ? new Extrinsic({ id: item.extrinsic.id }) : null,
        collectionId: data.collectionId.toString(),
        tokenId: data.tokenId ? `${data.collectionId}-${data.tokenId}` : null,
        data: new MultiTokensApproved({
            collectionId: data.collectionId,
            tokenId: data.tokenId,
            owner: data.owner,
            operator: data.operator,
            amount: data.amount,
            expiration: data.expiration,
        }),
    })
}
