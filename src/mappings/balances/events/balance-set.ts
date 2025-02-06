import { balances } from '../../../types/generated/events'
import { EventItem } from '../../../common/types/contexts'
import { UnsupportedEventError } from '../../../common/errors'
import { match } from 'ts-pattern'

type BalanceSetEvent = {
    who: string
    free: bigint
}

export function balanceSet(event: EventItem): BalanceSetEvent {
    return match(event)
        .returnType<BalanceSetEvent>()
        .when(balances.balanceSet.matrixEnjinV603.is, () => balances.balanceSet.matrixEnjinV603.decode(event))
        .when(balances.balanceSet.matrixV602.is, () => balances.balanceSet.matrixV602.decode(event))
        .when(balances.balanceSet.matrixV500.is, () => balances.balanceSet.matrixV500.decode(event))
        .when(balances.balanceSet.v104.is, () => balances.balanceSet.v104.decode(event))
        .when(balances.balanceSet.v100.is, () => balances.balanceSet.v100.decode(event))
        .otherwise(() => {
            throw new UnsupportedEventError(event)
        })
}
