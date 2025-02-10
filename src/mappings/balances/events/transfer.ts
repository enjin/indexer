import { balances } from '../../../types/generated/events'
import { EventItem } from '../../../common/types/contexts'
import { UnsupportedEventError } from '../../../common/errors'
import { match } from 'ts-pattern'
import { Transfer } from '@enjin/indexer/mappings/balances/events/types'

export function transfer(event: EventItem): Transfer {
    return match(event)
        .returnType<Transfer>()
        .when(balances.transfer.matrixEnjinV603.is, balances.transfer.matrixEnjinV603.decode)
        .otherwise(() => {
            throw new UnsupportedEventError(event)
        })
}
