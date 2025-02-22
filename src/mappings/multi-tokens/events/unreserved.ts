import { multiTokens } from '../../../types/events'
import { EventItem } from '../../../contexts'
import { UnsupportedEventError } from '../../../utils/errors'
import { match } from 'ts-pattern'
import { Unreserved } from './types/unreserved'

export function unreserved(event: EventItem): Unreserved {
    return match(event)
        .returnType<Unreserved>()
        .when(
            () => multiTokens.unreserved.matrixEnjinV603.is(event),
            () => multiTokens.unreserved.matrixEnjinV603.decode(event)
        )
        .when(
            () => multiTokens.unreserved.v1050.is(event),
            () => multiTokens.unreserved.v1050.decode(event)
        )
        .otherwise(() => {
            throw new UnsupportedEventError(event)
        })
}
