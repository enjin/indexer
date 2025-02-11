import { multiTokens } from '../../../types/generated/events'
import { EventItem } from '../../../common/types/contexts'
import { UnsupportedEventError } from '../../../common/errors'
import { match } from 'ts-pattern'
import { Reserved } from './types'

export function reserved(event: EventItem): Reserved {
    return match(event)
        .returnType<Reserved>()
        .when(
            () => multiTokens.reserved.matrixEnjinV603.is(event),
            () => multiTokens.reserved.matrixEnjinV603.decode(event)
        )
        .when(
            () => multiTokens.reserved.v1050.is(event),
            () => multiTokens.reserved.v1050.decode(event)
        )
        .otherwise(() => {
            throw new UnsupportedEventError(event)
        })
}
