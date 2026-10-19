import { Block, CommonContext, EventItem } from '~/contexts'
import { NominationPool, PoolSlash } from '~/model'
import { SnsEvent } from '~/util/sns'
import { createAccount, updatePool } from '~/pallet/nomination-pools/processors/pool'
import * as mappings from '~/pallet/index'
import { EventHandlerResult } from '~/processor.handler'

/**
 * The pool's active stake right before this slash.
 *
 * `PoolSlashed.balance` is the active balance the pool was slashed *to*. A slash lands in the staking hooks before
 * any extrinsic, so the bonded account's ledger at the parent block holds the pre-slash value. A second slash of
 * the same pool in the same block starts from what the first one left.
 */
async function activeBeforeSlash(block: Block, pool: NominationPool): Promise<bigint> {
    const sameBlock = pool.slashes.filter((slash) => slash?.appliedBlock === block.height && slash.balance != null)
    const previous = sameBlock.at(-1)
    if (previous?.balance != null) {
        return previous.balance
    }

    const ledger = await mappings.staking.storage.ledger(block.getParent(), createAccount(block, pool.id, 1))
    return ledger?.active ?? pool.balance.active
}

export async function poolSlashed(ctx: CommonContext, block: Block, item: EventItem): Promise<EventHandlerResult> {
    // Deferred slashes are applied from the staking era hooks, so the event often has no extrinsic.
    const data = mappings.nominationPools.events.poolSlashed(item)

    const indexed = await ctx.store.findOneByOrFail(NominationPool, { id: data.poolId.toString() })
    const before = await activeBeforeSlash(block, indexed)
    const amount = before > data.balance ? before - data.balance : 0n

    const pool = await updatePool(ctx, block, data.poolId.toString())
    const slash = new PoolSlash({
        amount,
        balance: data.balance,
        appliedAt: new Date(block.timestamp ?? 0),
        appliedBlock: block.height,
    })

    pool.slashes.push(slash)
    await ctx.store.save(pool)

    const eventModel = mappings.nominationPools.events.poolSlashedEventModel(item, data, amount)

    // Notifications keep their extrinsic-bound contract.
    if (!item.extrinsic) return eventModel

    const snsEvent: SnsEvent = {
        id: item.id,
        name: item.name,
        body: {
            pool: pool.id,
            balance: data.balance,
            amount,
            extrinsic: item.extrinsic.id,
        },
    }

    return [eventModel, snsEvent]
}
