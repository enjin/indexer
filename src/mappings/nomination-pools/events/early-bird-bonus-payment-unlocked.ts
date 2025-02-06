import { nominationPools } from '../../../types/generated/events'
import { EventItem } from '../../../common/types/contexts'
import { UnsupportedEventError } from '../../../common/errors'

function getEventData(event: EventItem) {
    if (nominationPools.earlyBirdBonusPaymentUnlocked.enjinV1022.is(event)) {
        return nominationPools.earlyBirdBonusPaymentUnlocked.enjinV1022.decode(event)
    }

    throw new UnsupportedEventError(nominationPools.earlyBirdBonusPaymentUnlocked)
}
