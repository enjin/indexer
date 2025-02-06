import { staking } from '../../../types/generated/events'
import { EventItem } from '../../../common/types/contexts'
import { UnsupportedEventError } from '../../../common/errors'

function getEventData(event: EventItem) {
    if (staking.validatorPrefsSet.enjinV100.is(event)) {
        return staking.validatorPrefsSet.enjinV100.decode(event)
    }

    throw new UnsupportedEventError(staking.validatorPrefsSet)
}
