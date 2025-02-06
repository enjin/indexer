import { balances } from '../../../types/generated/events'
import { EventItem } from '../../../common/types/contexts'
import { UnsupportedEventError } from '../../../common/errors'

function getFrozenAccount(event: EventItem) {
    if (balances.frozen.matrixEnjinV603.is(event)) {
        return balances.frozen.matrixEnjinV603.decode(event).who
    }
    throw new UnsupportedEventError(balances.frozen)
}
