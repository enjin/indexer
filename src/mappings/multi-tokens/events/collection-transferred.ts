import { multiTokens } from '../../../types/generated/events'
import { EventItem } from '../../../common/types/contexts'
import { UnsupportedEventError } from '../../../common/errors'
import { match } from 'ts-pattern'

type CollectionTransferredEvent = {
    collectionId: bigint
    newOwner: string
}

function collectionTransferred(event: EventItem) {
    return match(event)
        .returnType<CollectionTransferredEvent>()
        .when(multiTokens.collectionTransferred.matrixEnjinV1004.is, () =>
            multiTokens.collectionTransferred.matrixEnjinV1004.decode(event)
        )
        .otherwise(() => {
            throw new UnsupportedEventError(multiTokens.collectionTransferred)
        })
}
