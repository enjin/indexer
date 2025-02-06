import { balances } from '../../../types/generated/events'
import { EventItem } from '../../../common/types/contexts'
import { UnsupportedEventError } from '../../../common/errors'

function getDustLostAccount(event: EventItem) {
    if (balances.dustLost.matrixEnjinV603.is(event)) {
        return balances.dustLost.matrixEnjinV603.decode(event).account
    }

    throw new UnsupportedEventError(balances.dustLost)
}
