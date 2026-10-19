import { multiTokens } from '~/type/events'
import { EventItem } from '~/contexts'
import { UnsupportedEventError } from '~/util/errors'
import { match } from 'ts-pattern'
import { ReserveRepatriated } from '~/pallet/multi-tokens/events/types'

export function reserveRepatriated(event: EventItem): ReserveRepatriated {
    return match(event)
        .returnType<ReserveRepatriated>()
        .when(
            () => multiTokens.reserveRepatriated.matrixEnjinV603.is(event),
            () => multiTokens.reserveRepatriated.matrixEnjinV603.decode(event)
        )
        .when(
            () => multiTokens.reserveRepatriated.matrixEnjinV1022.is(event),
            () => multiTokens.reserveRepatriated.matrixEnjinV1022.decode(event)
        )
        .when(
            () => multiTokens.reserveRepatriated.matrixEnjinV1031.is(event),
            () => multiTokens.reserveRepatriated.matrixEnjinV1031.decode(event)
        )
        .when(
            () => multiTokens.reserveRepatriated.matrixEnjinV1041.is(event),
            () => multiTokens.reserveRepatriated.matrixEnjinV1041.decode(event)
        )
        .when(
            () => multiTokens.reserveRepatriated.matrixV500.is(event),
            () => multiTokens.reserveRepatriated.matrixV500.decode(event)
        )
        .when(
            () => multiTokens.reserveRepatriated.matrixV1020.is(event),
            () => multiTokens.reserveRepatriated.matrixV1020.decode(event)
        )
        .when(
            () => multiTokens.reserveRepatriated.matrixV1023.is(event),
            () => multiTokens.reserveRepatriated.matrixV1023.decode(event)
        )
        .when(
            () => multiTokens.reserveRepatriated.matrixV1030.is(event),
            () => multiTokens.reserveRepatriated.matrixV1030.decode(event)
        )
        .when(
            () => multiTokens.reserveRepatriated.matrixV1040.is(event),
            () => multiTokens.reserveRepatriated.matrixV1040.decode(event)
        )
        .when(
            () => multiTokens.reserveRepatriated.enjinV100.is(event),
            () => multiTokens.reserveRepatriated.enjinV100.decode(event)
        )
        .when(
            () => multiTokens.reserveRepatriated.enjinV1050.is(event),
            () => multiTokens.reserveRepatriated.enjinV1050.decode(event)
        )
        .when(
            () => multiTokens.reserveRepatriated.enjinV1062.is(event),
            () => multiTokens.reserveRepatriated.enjinV1062.decode(event)
        )
        .when(
            () => multiTokens.reserveRepatriated.enjinV1070.is(event),
            () => multiTokens.reserveRepatriated.enjinV1070.decode(event)
        )
        .when(
            () => multiTokens.reserveRepatriated.v100.is(event),
            () => multiTokens.reserveRepatriated.v100.decode(event)
        )
        .when(
            () => multiTokens.reserveRepatriated.v1050.is(event),
            () => multiTokens.reserveRepatriated.v1050.decode(event)
        )
        .when(
            () => multiTokens.reserveRepatriated.v1060.is(event),
            () => multiTokens.reserveRepatriated.v1060.decode(event)
        )
        .when(
            () => multiTokens.reserveRepatriated.v1070.is(event),
            () => multiTokens.reserveRepatriated.v1070.decode(event)
        )
        .otherwise(() => {
            throw new UnsupportedEventError(event)
        })
}
