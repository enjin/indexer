import { balances } from '../../../types/generated/events'
import { EventItem } from '../../../common/types/contexts'
import { UnsupportedEventError } from '../../../common/errors'

function getReservedAccount(event: EventItem) {
    if (balances.reserved.matrixEnjinV603.is(event)) {
        return balances.reserved.matrixEnjinV603.decode(event).who
    }

    throw new UnsupportedEventError(balances.reserved)
}
