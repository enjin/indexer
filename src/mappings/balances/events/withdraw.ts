import { balances } from '../../../types/generated/events'
import { EventItem } from '../../../common/types/contexts'
import { UnsupportedEventError } from '../../../common/errors'
import { match } from 'ts-pattern'
import { Withdraw } from '@enjin/indexer/mappings/balances/events/types'

export function withdraw(event: EventItem): Withdraw {
    return match(event)
        .returnType<Withdraw>()
        .when(balances.withdraw.matrixEnjinV603.is, balances.withdraw.matrixEnjinV603.decode)
        .otherwise(() => {
            throw new UnsupportedEventError(event)
        })
}
