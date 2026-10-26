import { multiTokens } from '~/type/events'
import { EventItem } from '~/contexts'
import { UnsupportedEventError } from '~/util/errors'
import { match } from 'ts-pattern'
import { TokenUpdated } from '~/pallet/multi-tokens/events/types'

export function tokenUpdated(event: EventItem): TokenUpdated {
    return match(event)
        .returnType<TokenUpdated>()
        .when(
            () => multiTokens.tokenUpdated.matrixEnjinV1042.is(event),
            () => multiTokens.tokenUpdated.matrixEnjinV1042.decode(event)
        )
        .when(
            () => multiTokens.tokenUpdated.matrixV1042.is(event),
            () => multiTokens.tokenUpdated.matrixV1042.decode(event)
        )
        .when(
            () => multiTokens.tokenUpdated.matrixEnjinV603.is(event),
            () => multiTokens.tokenUpdated.matrixEnjinV603.decode(event)
        )
        .when(
            () => multiTokens.tokenUpdated.matrixEnjinV1012.is(event),
            () => multiTokens.tokenUpdated.matrixEnjinV1012.decode(event)
        )
        .when(
            () => multiTokens.tokenUpdated.matrixEnjinV1022.is(event),
            () => multiTokens.tokenUpdated.matrixEnjinV1022.decode(event)
        )
        .when(
            () => multiTokens.tokenUpdated.matrixEnjinV1031.is(event),
            () => multiTokens.tokenUpdated.matrixEnjinV1031.decode(event)
        )
        .when(
            () => multiTokens.tokenUpdated.matrixEnjinV1041.is(event),
            () => multiTokens.tokenUpdated.matrixEnjinV1041.decode(event)
        )
        .when(
            () => multiTokens.tokenUpdated.matrixV500.is(event),
            () => multiTokens.tokenUpdated.matrixV500.decode(event)
        )
        .when(
            () => multiTokens.tokenUpdated.matrixV600.is(event),
            () => multiTokens.tokenUpdated.matrixV600.decode(event)
        )
        .when(
            () => multiTokens.tokenUpdated.matrixV1010.is(event),
            () => multiTokens.tokenUpdated.matrixV1010.decode(event)
        )
        .when(
            () => multiTokens.tokenUpdated.matrixV1020.is(event),
            () => multiTokens.tokenUpdated.matrixV1020.decode(event)
        )
        .when(
            () => multiTokens.tokenUpdated.matrixV1030.is(event),
            () => multiTokens.tokenUpdated.matrixV1030.decode(event)
        )
        .when(
            () => multiTokens.tokenUpdated.matrixV1040.is(event),
            () => multiTokens.tokenUpdated.matrixV1040.decode(event)
        )
        .when(
            () => multiTokens.tokenUpdated.enjinV100.is(event),
            () => multiTokens.tokenUpdated.enjinV100.decode(event)
        )
        .when(
            () => multiTokens.tokenUpdated.enjinV1032.is(event),
            () => multiTokens.tokenUpdated.enjinV1032.decode(event)
        )
        .when(
            () => multiTokens.tokenUpdated.enjinV1050.is(event),
            () => multiTokens.tokenUpdated.enjinV1050.decode(event)
        )
        .when(
            () => multiTokens.tokenUpdated.enjinV1062.is(event),
            () => multiTokens.tokenUpdated.enjinV1062.decode(event)
        )
        .when(
            () => multiTokens.tokenUpdated.enjinV1080.is(event),
            () => multiTokens.tokenUpdated.enjinV1080.decode(event)
        )
        .when(
            () => multiTokens.tokenUpdated.v100.is(event),
            () => multiTokens.tokenUpdated.v100.decode(event)
        )
        .when(
            () => multiTokens.tokenUpdated.v102.is(event),
            () => multiTokens.tokenUpdated.v102.decode(event)
        )
        .when(
            () => multiTokens.tokenUpdated.v1030.is(event),
            () => multiTokens.tokenUpdated.v1030.decode(event)
        )
        .when(
            () => multiTokens.tokenUpdated.v1050.is(event),
            () => multiTokens.tokenUpdated.v1050.decode(event)
        )
        .when(
            () => multiTokens.tokenUpdated.v1060.is(event),
            () => multiTokens.tokenUpdated.v1060.decode(event)
        )
        .when(
            () => multiTokens.tokenUpdated.v1080.is(event),
            () => multiTokens.tokenUpdated.v1080.decode(event)
        )
        .otherwise(() => {
            throw new UnsupportedEventError(event)
        })
}
