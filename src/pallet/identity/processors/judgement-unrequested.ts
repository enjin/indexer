import { Event as EventModel, JudgementType, Registration } from '../../../model'
import { Block, CommonContext, EventItem } from '../../../contexts'
import { getOrCreateAccount } from '../../../util/entities'
import * as mappings from '../../index'

export async function judgementUnrequested(
    ctx: CommonContext,
    block: Block,
    item: EventItem
): Promise<EventModel | undefined> {
    const event = mappings.identity.events.judgementUnrequested(item)
    const who = await getOrCreateAccount(ctx, event.who)

    const registration = await ctx.store.findOneByOrFail<Registration>(Registration, { id: who.id })

    const judgements = registration.judgements?.filter((i) => i.index !== event.registrarIndex)

    if (judgements?.length) {
        registration.judgements = judgements
        registration.currentJudgement = judgements[judgements.length - 1].value
    } else {
        registration.currentJudgement = JudgementType.Unknown
    }

    await ctx.store.save(registration)

    return undefined
}
