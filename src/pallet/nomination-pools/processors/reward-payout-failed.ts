import { Block, CommonContext, EventItem } from '~/contexts'
import * as mappings from '~/pallet/index'
import { EventHandlerResult } from '~/processor.handler'
import { getOrCreateAccount } from '~/util/entities'
import { readableDispatchError } from '~/util/dispatch-error'
import { updatePool } from '~/pallet/nomination-pools/processors/pool'

/**
 * A pool's share of an era's reward could not be compounded (runtime 1080+). The reward stays in the pool's
 * reward account and is swept by the pool's next successful payout, so there is no era reward or member reward to
 * record; only the pool balances change.
 */
export async function rewardPayoutFailed(
    ctx: CommonContext,
    block: Block,
    item: EventItem
): Promise<EventHandlerResult> {
    const data = mappings.nominationPools.events.rewardPayoutFailed(item)
    const validator = await getOrCreateAccount(ctx, data.validatorStash)

    await updatePool(ctx, block, data.poolId.toString())

    return mappings.nominationPools.events.rewardPayoutFailedEventModel(
        item,
        data,
        validator.id,
        readableDispatchError(data.error, block._runtime)
    )
}
