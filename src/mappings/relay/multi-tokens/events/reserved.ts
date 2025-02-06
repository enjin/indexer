import { hexToString } from '@polkadot/util'
import { TokenAccount, TokenNamedReserve } from '../../../model'
import { events } from '../../../types/generated'
import { CommonContext, BlockHeader, EventItem } from '../../types/contexts'
import { syncCollectionStats } from '../../../jobs/collection-stats'
import { UnknownVersionError, throwError } from '../../../common/errors'
import { RuntimeHoldReason } from 'relaychain-indexer/types/generated/v1050'

function getEventData(ctx: CommonContext, event: EventItem) {
    if (events.multiTokens.reserved.enjinV100.is(event)) {
        return events.multiTokens.reserved.enjinV100.decode(event)
    }

    if (events.multiTokens.reserved.v1050.is(event)) {
        return events.multiTokens.reserved.v1050.decode(event)
    }

    throw new UnknownVersionError(events.multiTokens.reserved.name)
}
