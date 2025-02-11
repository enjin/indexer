import { balances } from '../../../types/generated/events'
import { EventItem } from '../../../common/types/contexts'
import { UnsupportedEventError } from '../../../common/errors'
import { match } from 'ts-pattern'
import { Reserved } from './types'

export function reserved(event: EventItem): Reserved {
    return match(event)
        .returnType<Reserved>()
        .when(balances.reserved.matrixEnjinV603.is, balances.reserved.matrixEnjinV603.decode)
        .otherwise(() => {
            throw new UnsupportedEventError(event)
        })
}
