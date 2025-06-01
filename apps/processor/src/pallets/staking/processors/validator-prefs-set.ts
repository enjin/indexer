import { Block, CommonContext, EventItem } from '../../../contexts'
import { Event as EventModel, Extrinsic, Validator, ValidatorPrefsSet } from '../../../model'
import { getOrCreateAccount } from '../../../utils/entities'
import * as mappings from '../../index'

export async function validatorPrefsSet(ctx: CommonContext, block: Block, item: EventItem) {
    const event = mappings.staking.events.validatorPrefsSet(item)
    const stash = await getOrCreateAccount(ctx, event.stash)

    const validator = await ctx.store.findOneBy<Validator>(Validator, { account: { id: stash.id } })

    if (!validator) {
        const newValidator = new Validator({
            id: stash.id,
            account: stash,
            commission: event.prefs.commission,
            blocked: event.prefs.blocked,
            nodeCount28d: [],
            commission28d: [],
            blockProduction28d: [],
            peerCommission28d: [],
            slashes84d: [],
            grade: null,
        })

        await ctx.store.insert(newValidator)
    } else {
        validator.commission = event.prefs.commission
        validator.blocked = event.prefs.blocked

        await ctx.store.save(validator)
    }

    return new EventModel({
        id: item.id,
        name: ValidatorPrefsSet.name,
        extrinsic: item.extrinsic?.id ? new Extrinsic({ id: item.extrinsic.id }) : null,
        data: new ValidatorPrefsSet({
            validator: stash.id,
        }),
    })
}
