import { nominationPools } from '../../../types/generated/events'
import { EventItem } from '../../../common/types/contexts'
import { UnsupportedEventError } from '../../../common/errors'

function getEventData(event: EventItem) {
    if (nominationPools.earlyBirdBonusCalculated.enjinV1021.is(event)) {
        return nominationPools.earlyBirdBonusCalculated.enjinV1021.decode(event)
    }

    throw new UnsupportedEventError(nominationPools.earlyBirdBonusCalculated)
}
