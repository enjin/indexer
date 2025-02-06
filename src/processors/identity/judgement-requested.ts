import { Event as EventModel, Judgement, JudgementType, Registration } from '../../model'
import { BlockHeader, CommonContext, EventItem } from '../../common/types/contexts'
import { getOrCreateAccount } from '../../common/util/entities'
import * as mappings from './../../mappings'

export async function judgementRequested(
    ctx: CommonContext,
    block: BlockHeader,
    item: EventItem
): Promise<EventModel | undefined> {
    const eventData = mappings.identity.events.judgementRequested(item)

    const account = await getOrCreateAccount(ctx, eventData.who)

    const registeration = await ctx.store.findOneByOrFail(Registration, { id: account.id })

    registeration.currentJudgement = JudgementType.FeePaid
    const existing = registeration.judgements?.find((i) => i.index === eventData.registrarIndex)
    if (existing) {
        existing.value = JudgementType.FeePaid
    } else {
        registeration.judgements?.push(
            new Judgement({
                index: eventData.registrarIndex,
                value: JudgementType.FeePaid,
                createdAt: new Date(block.timestamp ?? 0),
            })
        )
    }

    await ctx.store.save(registeration)

    return undefined
}
