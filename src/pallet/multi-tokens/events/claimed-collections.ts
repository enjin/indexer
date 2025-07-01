import { multiTokens } from '~/type/events'
import { EventItem } from '~/contexts'
import { UnsupportedEventError } from '~/util/errors'
import { match } from 'ts-pattern'
import { ClaimedCollections } from '~/pallet/multi-tokens/events/types'

export function claimedCollections(event: EventItem): ClaimedCollections {
    return match(event)
        .returnType<ClaimedCollections>()
        .when(
            () => multiTokens.claimedCollections.matrixEnjinV1000.is(event),
            () => multiTokens.claimedCollections.matrixEnjinV1000.decode(event)
        )
        .when(
            () => multiTokens.claimedCollections.matrixEnjinV603.is(event),
            () => multiTokens.claimedCollections.matrixEnjinV603.decode(event)
        )
        .when(
            () => multiTokens.claimedCollections.matrixV1000.is(event),
            () => multiTokens.claimedCollections.matrixV1000.decode(event)
        )
        .when(
            () => multiTokens.claimedCollections.matrixV604.is(event),
            () => multiTokens.claimedCollections.matrixV604.decode(event)
        )
        .when(
            () => multiTokens.claimedCollections.enjinV1021.is(event),
            () => multiTokens.claimedCollections.enjinV1021.decode(event)
        )
        .when(
            () => multiTokens.claimedCollections.enjinV101.is(event),
            () => multiTokens.claimedCollections.enjinV101.decode(event)
        )
        .when(
            () => multiTokens.claimedCollections.v1021.is(event),
            () => multiTokens.claimedCollections.v1021.decode(event)
        )
        .when(
            () => multiTokens.claimedCollections.v106.is(event),
            () => multiTokens.claimedCollections.v106.decode(event)
        )
        .otherwise(() => {
            throw new UnsupportedEventError(event)
        })
}
