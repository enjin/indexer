import { staking } from '../../../types/generated/events'
import { EventItem } from '../../../common/types/contexts'
import { UnsupportedEventError } from '../../../common/errors'

function getEventData(event: EventItem) {
    if (staking.eraPaid.enjinV100.is(event)) {
        return staking.eraPaid.enjinV100.decode(event)
    }

    throw new UnsupportedEventError(staking.eraPaid.enjinV100)
}
