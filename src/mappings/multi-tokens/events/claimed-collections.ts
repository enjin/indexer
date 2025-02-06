import { multiTokens } from '../../../types/generated/events'
import { EventItem } from '../../../common/types/contexts'
import { UnsupportedEventError } from '../../../common/errors'
import { match } from 'ts-pattern'

type ClaimedCollectionsEvent = {
    accountId: string
    ethereumAddress: string
    collectionIds: any
}

function claimedCollections(event: EventItem) {
    return match(event)
        .returnType<ClaimedCollectionsEvent>()
        .when(multiTokens.claimedCollections.matrixEnjinV1000.is, multiTokens.claimedCollections.matrixEnjinV1000.decode)
        .when(multiTokens.claimedCollections.matrixEnjinV603.is, multiTokens.claimedCollections.matrixEnjinV603.decode)
        .when(multiTokens.claimedCollections.matrixV1000.is, multiTokens.claimedCollections.matrixV1000.decode)
        .when(multiTokens.claimedCollections.matrixV604.is, multiTokens.claimedCollections.matrixV604.decode)
        .when(multiTokens.claimedCollections.enjinV1021.is, multiTokens.claimedCollections.enjinV1021.decode)
        .when(multiTokens.claimedCollections.enjinV101.is, multiTokens.claimedCollections.enjinV101.decode)
        .when(multiTokens.claimedCollections.v1021.is, multiTokens.claimedCollections.v1021.decode)
        .when(multiTokens.claimedCollections.v106.is, multiTokens.claimedCollections.v106.decode)
        .otherwise(() => {
            throw new UnsupportedEventError(multiTokens.claimedCollections)
        })
}
