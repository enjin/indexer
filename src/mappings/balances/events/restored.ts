import { balances } from '../../../types/generated/events'
import { EventItem } from '../../../common/types/contexts'
import { UnsupportedEventError } from '../../../common/errors'
import { match } from 'ts-pattern'
import { Restored } from '@enjin/indexer/mappings/balances/events/types'

export function restored(event: EventItem): Restored {
    return match(event)
        .returnType<Restored>()
        .when(balances.restored.matrixEnjinV603.is, balances.restored.matrixEnjinV603.decode)
        .otherwise(() => {
            throw new UnsupportedEventError(event)
        })
}
