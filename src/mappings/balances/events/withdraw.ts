import { SubstrateBlock } from '@subsquid/substrate-processor'
import { EventItem } from '@subsquid/substrate-processor/lib/interfaces/dataSelection'
import { UnknownVersionError } from '../../../common/errors'
import { BalancesWithdrawEvent } from '../../../types/generated/events'
import { Event } from '../../../types/generated/support'
import { CommonContext } from '../../types/contexts'

function getEventData(ctx: CommonContext, event: Event) {
    const data = new BalancesWithdrawEvent(ctx, event)

    if (data.isMatrixEnjinV603) {
        return data.asMatrixEnjinV603
    }

    throw new UnknownVersionError(data.constructor.name)
}

export async function withdraw(
    ctx: CommonContext,
    block: SubstrateBlock,
    item: EventItem<'Balances.Withdraw', { event: { args: true; extrinsic: true } }>
) {
    return getEventData(ctx, item.event)
}
