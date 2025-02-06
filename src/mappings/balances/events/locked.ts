import { balances } from '../../../types/generated/events'
import { EventItem } from '../../../common/types/contexts'
import { UnsupportedEventError } from '../../../common/errors'

function getLockedAccount(event: EventItem) {
    if (balances.locked.matrixEnjinV603.is(event)) {
        return balances.locked.matrixEnjinV603.decode(event).who
    }
    throw new UnsupportedEventError(balances.locked)
}
