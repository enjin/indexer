import { BlockHeader, CommonContext, EventItem } from '../../common/types/contexts'
import { Event as EventModel, Extrinsic, Validator, ValidatorPrefsSet } from '../../model'
import { getOrCreateAccount } from '../../common/util/entities'
import * as mappings from '../../mappings'

export async function validatorPrefsSet(ctx: CommonContext, block: BlockHeader, item: EventItem) {
    const eventData = mappings.staking.events.validatorPrefsSet(item)

    const account = await getOrCreateAccount(ctx, eventData.stash)
    const validator = await ctx.store.findOneBy(Validator, { account: { id: account.id } })

    if (!validator) {
        const newValidator = new Validator({
            id: account.id,
            account,
            commission: eventData.prefs.commission,
            blocked: eventData.prefs.blocked,
        })

        await ctx.store.insert(newValidator)
    } else {
        validator.commission = eventData.prefs.commission
        validator.blocked = eventData.prefs.blocked

        await ctx.store.save(validator)
    }

    return new EventModel({
        id: item.id,
        name: ValidatorPrefsSet.name,
        extrinsic: item.extrinsic?.id ? new Extrinsic({ id: item.extrinsic.id }) : null,
        data: new ValidatorPrefsSet({
            validator: account.id,
        }),
    })
}
