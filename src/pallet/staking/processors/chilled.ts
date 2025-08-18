import { Block, CommonContext, EventItem } from '~/contexts'
import { Validator } from '~/model'
import { getOrCreateAccount } from '~/util/entities'
import * as mappings from '~/pallet/index'
import { chilledEventModel } from '../events'

export async function chill(ctx: CommonContext, block: Block, item: EventItem) {
    const event = mappings.staking.events.chilled(item)
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
