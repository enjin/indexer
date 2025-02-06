import { balances } from '../../../types/generated/events'
import { EventItem } from '../../../common/types/contexts'
import { UnsupportedEventError } from '../../../common/errors'
import { match } from 'ts-pattern'

type BurnedEvent = {
    who: string
    amount: bigint
}

export function burned(event: EventItem) {
    return match(event)
        .returnType<BurnedEvent>()
        .when(balances.burned.matrixEnjinV603.is, () => balances.burned.matrixEnjinV603.decode(event))
        .otherwise(() => {
            throw new UnsupportedEventError(balances.burned)
        })
}
