import { CallNotDefinedError } from '../../common/errors'
import { Event as EventModel, Judgement, JudgementType, Registration } from '../../model'
import { BlockHeader, CommonContext, EventItem } from '../../common/types/contexts'
import { getOrCreateAccount } from '../../common/util/entities'
import * as mappings from './../../mappings'

export async function judgementGiven(ctx: CommonContext, block: BlockHeader, item: EventItem): Promise<EventModel | undefined> {
    if (!item.call) throw new CallNotDefinedError()

    const eventData = mappings.identity.events.judgementGiven(item)
    const callData = mappings.identity.calls.provideJudgement(item.call)

    const account = await getOrCreateAccount(ctx, eventData.target)

    const registeration = await ctx.store.findOneByOrFail(Registration, { id: account.id })

    registeration.currentJudgement = JudgementType[callData.judgement.__kind]
    const existing = registeration.judgements?.find((i) => i.index === eventData.registrarIndex)
    if (existing) {
        existing.value = JudgementType[callData.judgement.__kind]
        existing.createdAt = new Date(block.timestamp ?? 0)
    } else {
        registeration.judgements?.push(
            new Judgement({
                index: eventData.registrarIndex,
                value: JudgementType[callData.judgement.__kind],
                createdAt: new Date(block.timestamp ?? 0),
            })
        )
    }

    await ctx.store.save(registeration)
}
