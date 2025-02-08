import { Event as EventModel, JudgementType, Registration } from '../../model'
import { BlockHeader, CommonContext, EventItem } from '../../common/types/contexts'
import { getOrCreateAccount } from '../../common/util/entities'
import * as mappings from './../../mappings'

export async function judgementUnrequested(
    ctx: CommonContext,
    block: BlockHeader,
    item: EventItem
): Promise<EventModel | undefined> {
    const eventData = mappings.identity.events.judgementUnrequested(item)

    const account = await getOrCreateAccount(ctx, eventData.who)

    const registeration = await ctx.store.findOneByOrFail<Registration>(Registration, { id: account.id })

    const judgements = registeration.judgements?.filter((i) => i.index !== eventData.registrarIndex)

    if (judgements?.length) {
        registeration.judgements = judgements
        registeration.currentJudgement = judgements[judgements.length - 1].value
    } else {
        registeration.currentJudgement = JudgementType.Unknown
    }

    await ctx.store.save(registeration)
}
