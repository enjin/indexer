import { balances } from '../../../types/generated/events'
import { EventItem } from '../../../common/types/contexts'
import { UnsupportedEventError } from '../../../common/errors'
import { match } from 'ts-pattern'

type DepositEvent = {
    who: string
    amount: bigint
}

function getDepositAccount(event: EventItem) {
    return match(event)
        .returnType<DepositEvent>()
        .when(balances.deposit.matrixEnjinV603.is, () => balances.deposit.matrixEnjinV603.decode(event))
        .otherwise(() => {
            throw new UnsupportedEventError(balances.deposit)
        })
}
