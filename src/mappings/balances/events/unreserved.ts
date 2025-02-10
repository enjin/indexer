import { balances } from '../../../types/generated/events'
import { EventItem } from '../../../common/types/contexts'
import { UnsupportedEventError } from '../../../common/errors'
import { match } from 'ts-pattern'
import { Unreserved } from '@enjin/indexer/mappings/balances/events/types'

export function unreserved(event: EventItem): Unreserved {
    return match(event)
        .returnType<Unreserved>()
        .when(balances.unreserved.matrixEnjinV603.is, balances.unreserved.matrixEnjinV603.decode)
        .otherwise(() => {
            throw new UnsupportedEventError(event)
        })
}
