import { balances } from '../../../types/generated/events'
import { EventItem } from '../../../common/types/contexts'
import { UnsupportedEventError } from '../../../common/errors'

function getUnlockedAccount(event: EventItem) {
    if (balances.unlocked.matrixEnjinV603.is(event)) {
        return balances.unlocked.matrixEnjinV603.decode(event).who
    }

    throw new UnsupportedEventError(balances.unlocked)
}
