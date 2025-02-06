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

export function reserveRepatriatedAccounts(event: EventItem) {
    return match(event)
        .returnType<ReserveRepatriatedEvent>()
        .when(balances.reserveRepatriated.matrixEnjinV603.is, () => balances.reserveRepatriated.matrixEnjinV603.decode(event))
        .otherwise(() => {
            throw new UnsupportedEventError(balances.reserveRepatriated)
        })
}
