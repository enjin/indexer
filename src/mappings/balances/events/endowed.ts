import { balances } from '../../../types/generated/events'
import { EventItem } from '../../../common/types/contexts'
import { UnsupportedEventError } from '../../../common/errors'
import { match } from 'ts-pattern'
import { Endowed } from '@enjin/indexer/mappings/balances/events/types'

export function endowed(event: EventItem): Endowed {
    return match(event)
        .returnType<Endowed>()
        .when(balances.endowed.matrixEnjinV603.is, balances.endowed.matrixEnjinV603.decode)
        .otherwise(() => {
            throw new UnsupportedEventError(event)
        })
}
