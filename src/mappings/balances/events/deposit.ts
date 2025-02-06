import { balances } from '../../../types/generated/events'
import { EventItem } from '../../../common/types/contexts'
import { UnsupportedEventError } from '../../../common/errors'

function getDepositAccount(event: EventItem) {
    if (balances.deposit.matrixEnjinV603.is(event)) {
        return balances.deposit.matrixEnjinV603.decode(event).who
    }

    throw new UnsupportedEventError(balances.deposit)
}
