import { Block, CommonContext, EventItem } from '~/contexts'
import { Validator } from '~/model'
import { getOrCreateAccount } from '~/util/entities'
import * as mappings from '~/pallet/index'
import { withdrawnEventModel } from '../events'

export async function withdrawn(ctx: CommonContext, block: Block, item: EventItem) {
    const event = mappings.staking.events.withdrawn(item)
    const stash = await getOrCreateAccount(ctx, event.stash)

    const validator = await ctx.store.findOneBy<Validator>(Validator, { account: { id: stash.id } })

    if (!validator) {
        return withdrawnEventModel(item, event)
    } else {
        validator.bonded = validator.bonded ?? 0n
        if (validator.bonded < event.amount) {
            validator.bonded = 0n
        } else {
            validator.bonded -= event.amount
        }

        await ctx.store.save(validator)
    }

    return withdrawnEventModel(item, event)
}
