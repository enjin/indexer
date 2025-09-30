import { multiTokens } from '~/type/events'
import { EventItem } from '~/contexts'
import { UnsupportedEventError } from '~/util/errors'
import { match } from 'ts-pattern'
import { Unreserved } from '~/pallet/multi-tokens/events/types'

export function unreserved(event: EventItem): Unreserved {
    return match(event)
        .returnType<Unreserved>()
        .when(
            () => multiTokens.unreserved.matrixEnjinV1022.is(event),
            () => multiTokens.unreserved.matrixEnjinV1022.decode(event)
        )
        .when(
            () => multiTokens.unreserved.matrixEnjinV603.is(event),
            () => multiTokens.unreserved.matrixEnjinV603.decode(event)
        )
        .when(
            () => multiTokens.unreserved.matrixV1023.is(event),
            () => multiTokens.unreserved.matrixV1023.decode(event)
        )
        .when(
            () => multiTokens.unreserved.matrixV1020.is(event),
            () => multiTokens.unreserved.matrixV1020.decode(event)
        )
        .when(
            () => multiTokens.unreserved.matrixV500.is(event),
            () => multiTokens.unreserved.matrixV500.decode(event)
        )
        .when(
            () => multiTokens.unreserved.v1050.is(event),
            () => multiTokens.unreserved.v1050.decode(event)
        )
        .otherwise(() => {
            throw new UnsupportedEventError(event)
        })
}
