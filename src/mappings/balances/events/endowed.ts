import { balances } from '../../../types/generated/events'
import { EventItem } from '../../../common/types/contexts'
import { UnsupportedEventError } from '../../../common/errors'

function getEndowedAccount(event: EventItem) {
    if (balances.endowed.matrixEnjinV603.is(event)) {
        return balances.endowed.matrixEnjinV603.decode(event).account
    }
    throw new UnsupportedEventError(balances.endowed)
}
