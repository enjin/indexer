import { CallNotDefinedError } from '../../common/errors'
import { Event as EventModel, Judgement, JudgementType, Registration } from '../../model'
import { BlockHeader, CommonContext, EventItem } from '../../common/types/contexts'
import { getOrCreateAccount } from '../../common/util/entities'
import * as mappings from './../../mappings'

export async function judgementGiven(ctx: CommonContext, block: BlockHeader, item: EventItem): Promise<EventModel | undefined> {
    if (!item.call) throw new CallNotDefinedError()

    const event = mappings.identity.events.judgementGiven(item)
    const call = mappings.identity.calls.provideJudgement(item.call)

    const account = await getOrCreateAccount(ctx, event.target)

    const registration = await ctx.store.findOneByOrFail<Registration>(Registration, { id: account.id })

    registration.currentJudgement = JudgementType[call.judgement.__kind]
    const existing = registration.judgements?.find((i) => i.index === event.registrarIndex)
    if (existing) {
        existing.value = JudgementType[call.judgement.__kind]
        existing.createdAt = new Date(block.timestamp ?? 0)
    } else {
        registration.judgements?.push(
            new Judgement({
                index: event.registrarIndex,
                value: JudgementType[call.judgement.__kind],
                createdAt: new Date(block.timestamp ?? 0),
            })
        )
    }

    await ctx.store.save(registration)

    return undefined
}
