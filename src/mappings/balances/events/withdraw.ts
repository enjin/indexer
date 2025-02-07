import { balances } from '../../../types/generated/events'
import { EventItem } from '../../../common/types/contexts'
import { UnsupportedEventError } from '../../../common/errors'
import { match } from 'ts-pattern'

type WithdrawEvent = {
    who: string
    amount: bigint
}

export function withdraw(event: EventItem): WithdrawEvent {
    return match(event)
        .returnType<WithdrawEvent>()
        .when(balances.withdraw.matrixEnjinV603.is, balances.withdraw.matrixEnjinV603.decode)
        .otherwise(() => {
            throw new UnsupportedEventError(event)
        })
}
