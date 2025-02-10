import { balances } from '../../../types/generated/events'
import { EventItem } from '../../../common/types/contexts'
import { UnsupportedEventError } from '../../../common/errors'
import { match } from 'ts-pattern'
import { Burned } from '@enjin/indexer/mappings/balances/events/types'

export function burned(event: EventItem): Burned {
    return match(event)
        .returnType<Burned>()
        .when(balances.burned.matrixEnjinV603.is, balances.burned.matrixEnjinV603.decode)
        .otherwise(() => {
            throw new UnsupportedEventError(event)
        })
}
