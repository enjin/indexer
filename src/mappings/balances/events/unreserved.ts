import { balances } from '../../../types/generated/events'
import { EventItem } from '../../../common/types/contexts'
import { UnsupportedEventError } from '../../../common/errors'

function getUnreservedAccount(event: EventItem) {
    if (balances.unreserved.matrixEnjinV603.is(event)) {
        return balances.unreserved.matrixEnjinV603.decode(event).who
    }

    throw new UnsupportedEventError(balances.unreserved)
}
