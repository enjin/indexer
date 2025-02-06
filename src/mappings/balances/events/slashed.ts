import { balances } from '../../../types/generated/events'
import { EventItem } from '../../../common/types/contexts'
import { UnsupportedEventError } from '../../../common/errors'

function getSlashedAccount(event: EventItem) {
    if (balances.slashed.matrixEnjinV603.is(event)) {
        return balances.slashed.matrixEnjinV603.decode(event).who
    }
    throw new UnsupportedEventError(balances.slashed)
}
