import { multiTokens } from '../../../types/generated/events'
import { EventItem } from '../../../common/types/contexts'
import { UnsupportedEventError } from '../../../common/errors'
import { match } from 'ts-pattern'
import { Event as EventModel, Extrinsic, MultiTokensApproved } from '@enjin/indexer/model'

type ApprovedEvent = {
    collectionId: bigint
    tokenId?: bigint | undefined
    owner: string
    operator: string
    amount?: bigint | undefined
    expiration?: number | undefined
}

export function approved(event: EventItem): ApprovedEvent {
    return match(event)
        .returnType<ApprovedEvent>()
        .when(multiTokens.approved.matrixEnjinV603.is, multiTokens.approved.matrixEnjinV603.decode)
        .otherwise(() => {
            throw new UnsupportedEventError(event)
        })
}

function getEvent(item: EventItem, data: ReturnType<typeof getEventData>) {
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
