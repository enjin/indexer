import { BlockHeader } from '@subsquid/substrate-processor'
import { UnknownVersionError } from '../../../common/errors'
import { balances } from '../../../types/generated/events'
import { CommonContext, EventItem } from '../../types/contexts'

function getEventData(ctx: CommonContext, event: EventItem) {
    if (balances.withdraw.matrixEnjinV603.is(event)) {
        return balances.withdraw.matrixEnjinV603.decode(event)
    }

    throw new UnknownVersionError(balances.withdraw.name)
}

export async function withdraw(ctx: CommonContext, block: BlockHeader, item: EventItem) {
    return getEventData(ctx, item)
}
