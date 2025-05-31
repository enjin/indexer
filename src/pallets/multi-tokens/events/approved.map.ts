import { multiTokens } from '../../../types/events'
import { EventItem } from '../../../contexts'
import { UnsupportedEventError } from '../../../utils/errors'
import { match } from 'ts-pattern'
import { Event as EventModel, Extrinsic, MultiTokensApproved } from '../../../model'
import { Approved } from './approved.type'

export function approved(event: EventItem): Approved {
    return match(event)
        .returnType<Approved>()
        .when(
            () => multiTokens.approved.matrixEnjinV603.is(event),
            () => multiTokens.approved.matrixEnjinV603.decode(event)
        )
        .otherwise(() => {
            throw new UnsupportedEventError(event)
        })
}

export function notificationBody(item: EventItem, data: Approved, result?: any): any {
    return {
        kind: result.kind,
        address: result.address,
        operator: data.operator,
        collectionId: data.collectionId.toString(),
        tokenId: data.tokenId ?? null,
        token: data.tokenId ? `${data.collectionId}-${data.tokenId}` : null,
        extrinsic: item.extrinsic?.id,
    }
}

export function eventModel(item: EventItem, data: Approved, result?: any): EventModel | undefined {
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
