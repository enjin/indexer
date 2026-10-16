import { multiTokens } from '~/type/events'
import { EventItem } from '~/contexts'
import { UnsupportedEventError } from '~/util/errors'
import { match } from 'ts-pattern'
import { TokenAccountUpdated } from '~/pallet/multi-tokens/events/types'

export function tokenAccountUpdated(event: EventItem): TokenAccountUpdated {
    return match(event)
        .returnType<TokenAccountUpdated>()
        .when(
            () => multiTokens.tokenAccountUpdated.matrixEnjinV603.is(event),
            () => multiTokens.tokenAccountUpdated.matrixEnjinV603.decode(event)
        )
        .when(
            () => multiTokens.tokenAccountUpdated.matrixEnjinV1012.is(event),
            () => multiTokens.tokenAccountUpdated.matrixEnjinV1012.decode(event)
        )
        .when(
            () => multiTokens.tokenAccountUpdated.matrixEnjinV1022.is(event),
            () => multiTokens.tokenAccountUpdated.matrixEnjinV1022.decode(event)
        )
        .when(
            () => multiTokens.tokenAccountUpdated.matrixEnjinV1031.is(event),
            () => multiTokens.tokenAccountUpdated.matrixEnjinV1031.decode(event)
        )
        .when(
            () => multiTokens.tokenAccountUpdated.matrixEnjinV1041.is(event),
            () => multiTokens.tokenAccountUpdated.matrixEnjinV1041.decode(event)
        )
        .when(
            () => multiTokens.tokenAccountUpdated.matrixV500.is(event),
            () => multiTokens.tokenAccountUpdated.matrixV500.decode(event)
        )
        .when(
            () => multiTokens.tokenAccountUpdated.matrixV1010.is(event),
            () => multiTokens.tokenAccountUpdated.matrixV1010.decode(event)
        )
        .when(
            () => multiTokens.tokenAccountUpdated.matrixV1020.is(event),
            () => multiTokens.tokenAccountUpdated.matrixV1020.decode(event)
        )
        .when(
            () => multiTokens.tokenAccountUpdated.matrixV1023.is(event),
            () => multiTokens.tokenAccountUpdated.matrixV1023.decode(event)
        )
        .when(
            () => multiTokens.tokenAccountUpdated.matrixV1030.is(event),
            () => multiTokens.tokenAccountUpdated.matrixV1030.decode(event)
        )
        .when(
            () => multiTokens.tokenAccountUpdated.matrixV1040.is(event),
            () => multiTokens.tokenAccountUpdated.matrixV1040.decode(event)
        )
        .when(
            () => multiTokens.tokenAccountUpdated.enjinV100.is(event),
            () => multiTokens.tokenAccountUpdated.enjinV100.decode(event)
        )
        .when(
            () => multiTokens.tokenAccountUpdated.enjinV1032.is(event),
            () => multiTokens.tokenAccountUpdated.enjinV1032.decode(event)
        )
        .when(
            () => multiTokens.tokenAccountUpdated.enjinV1050.is(event),
            () => multiTokens.tokenAccountUpdated.enjinV1050.decode(event)
        )
        .when(
            () => multiTokens.tokenAccountUpdated.enjinV1062.is(event),
            () => multiTokens.tokenAccountUpdated.enjinV1062.decode(event)
        )
        .when(
            () => multiTokens.tokenAccountUpdated.enjinV1070.is(event),
            () => multiTokens.tokenAccountUpdated.enjinV1070.decode(event)
        )
        .when(
            () => multiTokens.tokenAccountUpdated.v100.is(event),
            () => multiTokens.tokenAccountUpdated.v100.decode(event)
        )
        .when(
            () => multiTokens.tokenAccountUpdated.v1030.is(event),
            () => multiTokens.tokenAccountUpdated.v1030.decode(event)
        )
        .when(
            () => multiTokens.tokenAccountUpdated.v1050.is(event),
            () => multiTokens.tokenAccountUpdated.v1050.decode(event)
        )
        .when(
            () => multiTokens.tokenAccountUpdated.v1060.is(event),
            () => multiTokens.tokenAccountUpdated.v1060.decode(event)
        )
        .when(
            () => multiTokens.tokenAccountUpdated.v1070.is(event),
            () => multiTokens.tokenAccountUpdated.v1070.decode(event)
        )
        .otherwise(() => {
            throw new UnsupportedEventError(event)
        })
}
