import { multiTokens } from '../../../types/events'
import { EventItem } from '../../../contexts'
import { UnsupportedEventError } from '../../../utils/errors'
import { match } from 'ts-pattern'
import { Reserved } from '../types'

export function reserved(event: EventItem): ReservedType {
    return match(event)
        .returnType<ReservedType>()
        .when(
            () => multiTokens.reserved.matrixEnjinV1022.is(event),
            () => multiTokens.reserved.matrixEnjinV1022.decode(event)
        )
        .when(
            () => multiTokens.reserved.matrixEnjinV603.is(event),
            () => multiTokens.reserved.matrixEnjinV603.decode(event)
        )
        .when(
            () => multiTokens.reserved.matrixV1020.is(event),
            () => multiTokens.reserved.matrixV1020.decode(event)
        )
        .when(
            () => multiTokens.reserved.matrixV500.is(event),
            () => multiTokens.reserved.matrixV500.decode(event)
        )
        .when(
            () => multiTokens.reserved.v1050.is(event),
            () => multiTokens.reserved.v1050.decode(event)
        )
        .otherwise(() => {
            throw new UnsupportedEventError(event)
        })
}
