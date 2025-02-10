import { balances } from '../../../types/generated/events'
import { EventItem } from '../../../common/types/contexts'
import { UnsupportedEventError } from '../../../common/errors'
import { match } from 'ts-pattern'
import { BalanceSet } from '@enjin/indexer/mappings/balances/events/types'

export function balanceSet(event: EventItem): BalanceSet {
    return match(event)
        .returnType<BalanceSet>()
        .when(balances.balanceSet.matrixEnjinV603.is, balances.balanceSet.matrixEnjinV603.decode)
        .when(balances.balanceSet.matrixV602.is, balances.balanceSet.matrixV602.decode)
        .when(balances.balanceSet.matrixV500.is, balances.balanceSet.matrixV500.decode)
        .when(balances.balanceSet.v104.is, balances.balanceSet.v104.decode)
        .when(balances.balanceSet.v100.is, balances.balanceSet.v100.decode)
        .otherwise(() => {
            throw new UnsupportedEventError(event)
        })
}
