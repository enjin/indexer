import { multiTokens } from '../../../types/generated/events'
import { EventItem } from '../../../common/types/contexts'
import { UnsupportedEventError } from '../../../common/errors'
import { match } from 'ts-pattern'

type CollectionMutatedEvent = {
    collectionId: bigint
    mutation: any
}

function collectionMutated(event: EventItem) {
    return match(event)
        .returnType<CollectionMutatedEvent>()
        .when(multiTokens.collectionMutated.matrixEnjinV603.is, () => multiTokens.collectionMutated.matrixEnjinV603.decode(event))
        .when(multiTokens.collectionMutated.v1050.is, () => multiTokens.collectionMutated.v1050.decode(event))
        .otherwise(() => {
            throw new UnsupportedEventError(multiTokens.collectionMutated)
        })
}
