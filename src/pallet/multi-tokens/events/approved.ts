import { multiTokens } from '~/type/events'
import { EventItem } from '~/contexts'
import { UnsupportedEventError } from '~/util/errors'
import { match } from 'ts-pattern'
import { Event as EventModel, Extrinsic, MultiTokensApproved } from '~/model'
import { Approved } from '~/pallet/multi-tokens/events/types'

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
