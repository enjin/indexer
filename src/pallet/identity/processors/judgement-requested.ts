import { Event as EventModel, Judgement, JudgementType, Registration } from '~/model'
import { Block, CommonContext, EventItem } from '~/contexts'
import { getOrCreateAccount } from '~/util/entities'
import * as mappings from '~/pallet/index'

export async function judgementRequested(
    ctx: CommonContext,
    block: Block,
    item: EventItem
): Promise<EventModel | undefined> {
    const event = mappings.identity.events.judgementRequested(item)
    const who = await getOrCreateAccount(ctx, event.who)

    const registration = await ctx.store.findOneByOrFail<Registration>(Registration, { id: who.id })

    registration.currentJudgement = JudgementType.FeePaid
    const existing = registration.judgements?.find((i) => i.index === event.registrarIndex)
    if (existing) {
        existing.value = JudgementType.FeePaid
    } else {
        registration.judgements?.push(
            new Judgement({
                index: event.registrarIndex,
                value: JudgementType.FeePaid,
                createdAt: new Date(block.timestamp ?? 0),
            })
        )
    }

    await ctx.store.save(registration)

    return undefined
}
