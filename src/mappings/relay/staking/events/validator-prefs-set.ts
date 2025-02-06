import { events } from '../../../types/generated'
import { CommonContext, BlockHeader, EventItem } from '../../types/contexts'
import { UnknownVersionError } from '../../../common/errors'
import { Validator, Event as EventModel, Extrinsic, ValidatorPrefsSet } from '../../../model'
import { getOrCreateAccount } from '../../util/entities'

function getEventData(event: EventItem) {
    if (events.staking.validatorPrefsSet.enjinV100.is(event)) {
        return events.staking.validatorPrefsSet.enjinV100.decode(event)
    }

    throw new UnknownVersionError(events.staking.validatorPrefsSet.name)
}
