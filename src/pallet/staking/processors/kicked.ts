import { Block, CommonContext, EventItem } from '~/contexts'
import { unwrapAccount } from '~/util/entities'
import * as mappings from '~/pallet/index'
import { EventHandlerResult } from '~/processor.handler'

/**
 * A validator removed a nominator from its nominators (`Staking.kick`). When the nominator is a nomination pool, the
 * pool's validator set changes without a `NominationPools.Nominated` event, so it is rebuilt from chain storage.
 */
export async function kicked(ctx: CommonContext, block: Block, item: EventItem): Promise<EventHandlerResult> {
    const event = mappings.staking.events.kicked(item)
    const poolId = mappings.nominationPools.processors.poolIdFromBondedAccount(block, unwrapAccount(event.nominator))

    if (poolId !== undefined) {
        await mappings.nominationPools.processors.syncPoolValidators(ctx, block, poolId)
    }

    return undefined
}
