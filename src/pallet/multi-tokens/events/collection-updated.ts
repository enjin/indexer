import { multiTokens } from '~/type/events'
import { EventItem } from '~/contexts'
import { UnsupportedEventError } from '~/util/errors'
import { match } from 'ts-pattern'
import { CollectionUpdated } from '~/pallet/multi-tokens/events/types'

export function collectionUpdated(event: EventItem): CollectionUpdated {
    return match(event)
        .returnType<CollectionUpdated>()
        .when(
            () => multiTokens.collectionUpdated.matrixEnjinV603.is(event),
            () => multiTokens.collectionUpdated.matrixEnjinV603.decode(event)
        )
        .when(
            () => multiTokens.collectionUpdated.matrixEnjinV1012.is(event),
            () => multiTokens.collectionUpdated.matrixEnjinV1012.decode(event)
        )
        .when(
            () => multiTokens.collectionUpdated.matrixEnjinV1022.is(event),
            () => multiTokens.collectionUpdated.matrixEnjinV1022.decode(event)
        )
        .when(
            () => multiTokens.collectionUpdated.matrixEnjinV1041.is(event),
            () => multiTokens.collectionUpdated.matrixEnjinV1041.decode(event)
        )
        .when(
            () => multiTokens.collectionUpdated.matrixV500.is(event),
            () => multiTokens.collectionUpdated.matrixV500.decode(event)
        )
        .when(
            () => multiTokens.collectionUpdated.matrixV1010.is(event),
            () => multiTokens.collectionUpdated.matrixV1010.decode(event)
        )
        .when(
            () => multiTokens.collectionUpdated.matrixV1020.is(event),
            () => multiTokens.collectionUpdated.matrixV1020.decode(event)
        )
        .when(
            () => multiTokens.collectionUpdated.matrixV1040.is(event),
            () => multiTokens.collectionUpdated.matrixV1040.decode(event)
        )
        .when(
            () => multiTokens.collectionUpdated.enjinV100.is(event),
            () => multiTokens.collectionUpdated.enjinV100.decode(event)
        )
        .when(
            () => multiTokens.collectionUpdated.enjinV1032.is(event),
            () => multiTokens.collectionUpdated.enjinV1032.decode(event)
        )
        .when(
            () => multiTokens.collectionUpdated.enjinV1050.is(event),
            () => multiTokens.collectionUpdated.enjinV1050.decode(event)
        )
        .when(
            () => multiTokens.collectionUpdated.enjinV1062.is(event),
            () => multiTokens.collectionUpdated.enjinV1062.decode(event)
        )
        .when(
            () => multiTokens.collectionUpdated.enjinV1080.is(event),
            () => multiTokens.collectionUpdated.enjinV1080.decode(event)
        )
        .when(
            () => multiTokens.collectionUpdated.v100.is(event),
            () => multiTokens.collectionUpdated.v100.decode(event)
        )
        .when(
            () => multiTokens.collectionUpdated.v1030.is(event),
            () => multiTokens.collectionUpdated.v1030.decode(event)
        )
        .when(
            () => multiTokens.collectionUpdated.v1050.is(event),
            () => multiTokens.collectionUpdated.v1050.decode(event)
        )
        .when(
            () => multiTokens.collectionUpdated.v1060.is(event),
            () => multiTokens.collectionUpdated.v1060.decode(event)
        )
        .when(
            () => multiTokens.collectionUpdated.v1080.is(event),
            () => multiTokens.collectionUpdated.v1080.decode(event)
        )
        .otherwise(() => {
            throw new UnsupportedEventError(event)
        })
}
