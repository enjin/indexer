import { balances } from '../../../types/generated/events'
import { EventItem } from '../../../common/types/contexts'
import { UnsupportedEventError } from '../../../common/errors'
import { match } from 'ts-pattern'
import { Unlocked } from '@enjin/indexer/mappings/balances/events/types'

export function unlocked(event: EventItem): Unlocked {
    return match(event)
        .returnType<Unlocked>()
        .when(balances.unlocked.matrixEnjinV603.is, balances.unlocked.matrixEnjinV603.decode)
        .otherwise(() => {
            throw new UnsupportedEventError(event)
        })
}
