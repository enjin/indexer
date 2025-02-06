import { TokenAccount } from '../../../model'
import { events } from '../../../types/generated'
import { CommonContext, BlockHeader, EventItem } from '../../types/contexts'
import { UnknownVersionError, throwError } from '../../../common/errors'
import { getReserveId } from './reserved'

function getEventData(eventItem: EventItem) {
    if (events.multiTokens.unreserved.enjinV100.is(eventItem)) {
        return events.multiTokens.unreserved.enjinV100.decode(eventItem)
    }

    if (events.multiTokens.unreserved.v1050.is(eventItem)) {
        return events.multiTokens.unreserved.v1050.decode(eventItem)
    }

    throw new UnknownVersionError(events.multiTokens.unreserved.name)
}
