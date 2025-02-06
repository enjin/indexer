import { balances } from '../../../types/generated/events'
import { EventItem } from '../../../common/types/contexts'
import { UnsupportedEventError } from '../../../common/errors'

function getMintedAccount(event: EventItem) {
    if (balances.minted.matrixEnjinV603.is(event)) {
        return balances.minted.matrixEnjinV603.decode(event).who
    }
    throw new UnsupportedEventError(balances.minted)
}
