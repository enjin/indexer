import { Block, CommonContext, EventItem } from '~/contexts'
import { Validator } from '~/model'
import { getOrCreateAccount, unwrapAccount } from '~/util/entities'
import * as mappings from '~/pallet/index'
import { chilledEventModel } from '../events'
import { EventHandlerResult } from '~/processor.handler'

export async function chilled(ctx: CommonContext, block: Block, item: EventItem): Promise<EventHandlerResult> {
    const event = mappings.staking.events.chilled(item)

    // A chilled nomination pool (`NominationPools.chill`) is a nominator, not a validator: clear its validator set.
    const poolId = mappings.nominationPools.processors.poolIdFromBondedAccount(block, unwrapAccount(event.stash))
    if (poolId !== undefined) {
        await mappings.nominationPools.processors.syncPoolValidators(ctx, block, poolId)
        return chilledEventModel(item, event)
    }

    const stash = await getOrCreateAccount(ctx, event.stash)

    const validator = await ctx.store.findOneBy<Validator>(Validator, { account: { id: stash.id } })

    if (!validator) {
        const newValidator = new Validator({
            id: stash.id,
            account: stash,
            nodeCount28d: [],
            commission28d: [],
            blockProduction28d: [],
            peerCommission28d: [],
            slashes84d: [],
            grade: null,
            isActive: false,
            bonded: 0n,
            accumulatedRewards: 0n,
        })

        await ctx.store.insert(newValidator)
    } else {
        validator.isActive = false

        await ctx.store.save(validator)
    }

    return chilledEventModel(item, event)
}
