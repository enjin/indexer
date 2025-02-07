import { balances } from '../../../types/generated/events'
import { EventItem } from '../../../common/types/contexts'
import { UnsupportedEventError } from '../../../common/errors'
import { match } from 'ts-pattern'

type ReserveRepatriatedEvent = {
    from: string
    to: string
    amount: bigint
    destinationStatus: any
}

export function reserveRepatriated(event: EventItem): ReserveRepatriatedEvent {
    return match(event)
        .returnType<ReserveRepatriatedEvent>()
        .when(balances.reserveRepatriated.matrixEnjinV603.is, balances.reserveRepatriated.matrixEnjinV603.decode)
        .otherwise(() => {
            throw new UnsupportedEventError(event)
        })
}
