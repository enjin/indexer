import { balances } from '../../../types/generated/events'
import { EventItem } from '../../../common/types/contexts'
import { UnsupportedEventError } from '../../../common/errors'
import { match } from 'ts-pattern'

type WithdrawEvent = {
    who: string
    amount: bigint
}

export function eventData(event: EventItem) {
    return match(event)
        .returnType<WithdrawEvent>()
        .when(balances.withdraw.matrixEnjinV603.is, () => balances.withdraw.matrixEnjinV603.decode(event))
        .otherwise(() => {
            throw new UnsupportedEventError(balances.unreserved)
        })
}
