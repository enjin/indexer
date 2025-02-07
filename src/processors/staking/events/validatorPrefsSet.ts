import { events } from '../../../types/generated'
import { CommonContext, BlockHeader, EventItem } from '../../types/contexts'
import { UnknownVersionError } from '../../../common/errors'
import { Validator, Event as EventModel, Extrinsic, ValidatorPrefsSet } from '../../../model'
import { getOrCreateAccount } from '../../util/entities'

function getEventData(event: EventItem) {
    if (events.staking.validatorPrefsSet.enjinV100.is(event)) {
        return events.staking.validatorPrefsSet.enjinV100.decode(event)
    }

    throw new UnknownVersionError(events.staking.validatorPrefsSet.name)
}

export async function validatorPrefsSet(ctx: CommonContext, block: BlockHeader, item: EventItem) {
    const eventData = getEventData(item)
    if (!eventData) return undefined

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
