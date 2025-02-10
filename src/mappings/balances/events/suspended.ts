import { balances } from '../../../types/generated/events'
import { EventItem } from '../../../common/types/contexts'
import { UnsupportedEventError } from '../../../common/errors'
import { match } from 'ts-pattern'
import { Suspended } from '@enjin/indexer/mappings/balances/events/types'

export function suspended(event: EventItem): Suspended {
    return match(event)
        .returnType<Suspended>()
        .when(balances.suspended.matrixEnjinV603.is, balances.suspended.matrixEnjinV603.decode)
        .otherwise(() => {
            throw new UnsupportedEventError(event)
        })
}
