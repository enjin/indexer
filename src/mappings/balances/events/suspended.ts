import { balances } from '../../../types/generated/events'
import { EventItem } from '../../../common/types/contexts'
import { UnsupportedEventError } from '../../../common/errors'

function getSuspendedAccount(event: EventItem) {
    if (balances.suspended.matrixEnjinV603.is(event)) {
        return balances.suspended.matrixEnjinV603.decode(event).who
    }
    throw new UnsupportedEventError(balances.suspended)
}
