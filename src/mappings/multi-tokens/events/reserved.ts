import { multiTokens } from '../../../types/generated/events'
import { EventItem } from '../../../common/types/contexts'
import { UnsupportedEventError } from '../../../common/errors'
import { match } from 'ts-pattern'
import { Reserved } from './types'

export function reserved(event: EventItem): Reserved {
    return match(event)
        .returnType<Reserved>()
        .when(multiTokens.reserved.matrixEnjinV603.is, multiTokens.reserved.matrixEnjinV603.decode)
        .when(multiTokens.reserved.v1050.is, multiTokens.reserved.v1050.decode)
        .otherwise(() => {
            throw new UnsupportedEventError(event)
        })
}
