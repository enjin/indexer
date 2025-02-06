import { balances } from '../../../types/generated/events'
import { EventItem } from '../../../common/types/contexts'
import { UnsupportedEventError } from '../../../common/errors'

function getBalanceSetAccount(event: EventItem) {
    if (balances.balanceSet.matrixEnjinV603.is(event)) {
        return balances.balanceSet.matrixEnjinV603.decode(event).who
    }

    if (balances.balanceSet.matrixV602.is(event)) {
        return balances.balanceSet.matrixV602.decode(event).who
    }

    if (balances.balanceSet.matrixV500.is(event)) {
        return balances.balanceSet.matrixV500.decode(event).who
    }

    if (balances.balanceSet.v104.is(event)) {
        return balances.balanceSet.v104.decode(event).who
    }

    if (balances.balanceSet.v100.is(event)) {
        return balances.balanceSet.v100.decode(event).who
    }

    throw new UnsupportedEventError(balances.balanceSet)
}
