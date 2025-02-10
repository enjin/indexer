import { multiTokens } from '../../../types/generated/events'
import { EventItem } from '../../../common/types/contexts'
import { UnsupportedEventError } from '../../../common/errors'
import { match } from 'ts-pattern'
import { Unreserved } from './types/unreserved'

export function unreserved(event: EventItem): Unreserved {
    return match(event)
        .returnType<Unreserved>()
        .when(multiTokens.unreserved.matrixEnjinV603.is, multiTokens.unreserved.matrixEnjinV603.decode)
        .when(multiTokens.unreserved.v1050.is, multiTokens.unreserved.v1050.decode)
        .otherwise(() => {
            throw new UnsupportedEventError(event)
        })
}
