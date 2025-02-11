import { balances } from '../../../types/generated/events'
import { EventItem } from '../../../common/types/contexts'
import { UnsupportedEventError } from '../../../common/errors'
import { match } from 'ts-pattern'
import { BalanceSet } from './types'

export function balanceSet(event: EventItem): BalanceSet {
    return match(event)
        .returnType<BalanceSet>()
        .when(
            () => balances.balanceSet.matrixEnjinV603.is(event),
            () => balances.balanceSet.matrixEnjinV603.decode(event)
        )
        .when(
            () => balances.balanceSet.matrixV602.is(event),
            () => balances.balanceSet.matrixV602.decode(event)
        )
        .when(
            () => balances.balanceSet.matrixV500.is(event),
            () => balances.balanceSet.matrixV500.decode(event)
        )
        .when(
            () => balances.balanceSet.v104.is(event),
            () => balances.balanceSet.v104.decode(event)
        )
        .when(
            () => balances.balanceSet.v100.is(event),
            () => balances.balanceSet.v100.decode(event)
        )
        .otherwise(() => {
            throw new UnsupportedEventError(event)
        })
}
